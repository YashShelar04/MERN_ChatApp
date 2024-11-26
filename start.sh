#!/bin/bash

# Start backend in background
npm run start --prefix backend &

# Start frontend in background
npm run dev --prefix frontend &

# Wait for all background processes to finish
wait
