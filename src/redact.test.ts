import { describe, expect, test } from "bun:test";
import { mergeRedactions, redactCredentials } from "./redact.ts";

// Secret scanning reads this file as well, so fixtures that need the real token
// shape are assembled from fragments instead of written as literals.
function credential(...parts: readonly string[]): string {
  return parts.join("");
}

const serviceAccountToken = credential(
  "glsa_",
  "iNValIdinValiDinvalidinvalidinva",
  "_5b582697",
);
const cloudToken = credential(
  "glc_",
  "eyJrIjoi",
  "ZjI0YzZkNGEwZDBmZmZjMmUzNTU2ODcxMmY0ZWZlNTQ1NTljMDFjOCIsIm4iOiJteXRva2VuIiwiaWQiOjF9",
);
const apiKey = credential(
  "eyJrIjoi",
  "VjFxTHZ6dGdPSjg5Um92MjN1RlhjMkNqYkZUbm9jYkwiLCJuIjoiZ3JhZmFuYSIsImlkIjoxfQ==",
);
const otherApiKey = credential(
  "eyJrIjoi",
  "TFRSN1RBOVc3SGhjblc0bWZodXZ3MnNDcU92Um5VZUIiLKJuIjoibXktYXBpLWtleSIsImlkIjoxfQ==",
);

describe("credential redaction", () => {
  test("replaces token-shaped example values and reports them", () => {
    const result = redactCredentials(
      `curl -H 'Authorization: Bearer ${serviceAccountToken}' '<grafana_url>/api/access-control/roles/'`,
    );

    expect(result.text).toBe(
      "curl -H 'Authorization: Bearer REDACTED_GRAFANA_SERVICE_ACCOUNT_TOKEN' '<grafana_url>/api/access-control/roles/'",
    );
    expect(result.redactions).toEqual([
      { name: "Grafana service account token", count: 1 },
    ]);
  });

  test("redacts a cloud token once instead of matching its encoded payload", () => {
    const result = redactCredentials(`"token": "${cloudToken}"`);

    expect(result.text).toBe('"token": "REDACTED_GRAFANA_CLOUD_TOKEN"');
    expect(result.redactions).toEqual([
      { name: "Grafana Cloud access policy token", count: 1 },
    ]);
  });

  test("leaves JSON Web Tokens and other prose untouched", () => {
    const source =
      "Send `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U` in the header.";

    const result = redactCredentials(source);

    expect(result.text).toBe(source);
    expect(result.redactions).toEqual([]);
  });

  test("keeps the vendor example key that secret scanning allows", () => {
    const result = redactCredentials(
      "access_key_id = AKIAIOSFODNN7EXAMPLE\nbackup_key_id = AKIAQ7RTGHBN4KLMPZ2X",
    );

    expect(result.text).toBe(
      "access_key_id = AKIAIOSFODNN7EXAMPLE\nbackup_key_id = REDACTED_AWS_ACCESS_KEY_ID",
    );
    expect(result.redactions).toEqual([
      { name: "AWS access key id", count: 1 },
    ]);
  });

  test("totals redactions across documents by credential name", () => {
    const documents = [
      `key: ${apiKey}`,
      `key: ${otherApiKey}`,
      `token: ${serviceAccountToken}`,
    ].map(redactCredentials);

    expect(mergeRedactions(documents)).toEqual([
      { name: "Grafana API key", count: 2 },
      { name: "Grafana service account token", count: 1 },
    ]);
  });
});
