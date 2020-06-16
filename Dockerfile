FROM golang:1.14

## SET ENV
ENV HOME /home
ENV GO111MODULE=on

## INSTALL DEFAULT PACKAGE
RUN apt-get update -qq && apt-get install -y
RUN go get github.com/cespare/reflex

## INSTALL CODE
WORKDIR /app
COPY . .

## PACKAGE DOWNLOAD && BUILD APP
RUN go get -d -v ./...
RUN go install -v ./...

ENTRYPOINT ["reflex", "-c", "reflex.conf"]