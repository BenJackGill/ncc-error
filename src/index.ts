import { defineString, defineInt } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";

// Making the parameterized variables
const REGION = defineString("REGION");
const TIMEOUT_SECONDS = defineInt("TIMEOUT_SECONDS");
const SAY_HELLO = defineString("SAY_HELLO");

// Firebase function
export const helloWorld = onRequest(
  { region: REGION, timeoutSeconds: TIMEOUT_SECONDS },
  (req, res) => {
    res.send(SAY_HELLO.value());
  }
);
