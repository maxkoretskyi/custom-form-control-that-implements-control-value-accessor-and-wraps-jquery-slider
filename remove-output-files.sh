#!/usr/bin/env bash

# removes *.js, *.js.map and *.d.ts files inside the `app` folder recursively
find app -type d -name "node_modules" -prune -o -type f \( -name "*.js" -o -name "*.js.map" -o -name "*.d.ts" \) -exec rm -r "{}" \;


