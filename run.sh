#!/bin/bash

case "$1" in
  dev)
    docker-compose -f docker-compose.dev.yml up --build
    ;;
  start)
    docker-compose -f docker-compose.dev.yml up --build
    ;;
  *)
    echo "Usage: $0 {start|test|dev}"
    exit 1
esac
exit 0