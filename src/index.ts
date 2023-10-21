import { defineInt } from "firebase-functions/params";
import { onTaskDispatched } from "firebase-functions/v2/tasks";

// Making the parameterized variables
const TASK_QUEUE_MAX_CONCURRENT_DISPATCHES = defineInt(
  "TASK_QUEUE_MAX_CONCURRENT_DISPATCHES"
);
const SAY_HELLO = defineInt("SAY_HELLO");

// Firebase function
export const helloWorld = onTaskDispatched(
  {
    rateLimits: {
      maxConcurrentDispatches: TASK_QUEUE_MAX_CONCURRENT_DISPATCHES,
    },
  },
  (req) => {
    console.log(SAY_HELLO.value());
  }
);
