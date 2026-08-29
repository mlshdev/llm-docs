export interface CredentialPattern {
  readonly name: string;
  readonly pattern: RegExp;
  readonly placeholder: string;
}

export interface Redaction {
  readonly name: string;
  readonly count: number;
}

export interface RedactionResult {
  readonly text: string;
  readonly redactions: readonly Redaction[];
}

// Upstream documentation illustrates credentials with values that carry the
// real token shape, which secret scanning rejects on push regardless of the
// value being fictional. Generated pages keep the surrounding example intact
// and name the credential the reader is expected to supply.
export const credentialPatterns: readonly CredentialPattern[] = [
  {
    name: "Grafana service account token",
    pattern: /\bglsa_[A-Za-z0-9]{32}_[0-9a-fA-F]{8}\b/g,
    placeholder: "REDACTED_GRAFANA_SERVICE_ACCOUNT_TOKEN",
  },
  {
    name: "Grafana Cloud access policy token",
    pattern: /\bglc_[A-Za-z0-9+/=_-]{20,}/g,
    placeholder: "REDACTED_GRAFANA_CLOUD_TOKEN",
  },
  // Grafana API keys are base64-encoded JSON that always opens with the key
  // field, which distinguishes them from the JSON Web Tokens documentation
  // shows for authentication flows.
  {
    name: "Grafana API key",
    pattern: /\beyJrIjoi[A-Za-z0-9+/=]{20,}/g,
    placeholder: "REDACTED_GRAFANA_API_KEY",
  },
  {
    name: "GitHub token",
    pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{22,})\b/g,
    placeholder: "REDACTED_GITHUB_TOKEN",
  },
  {
    name: "AWS access key id",
    pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g,
    placeholder: "REDACTED_AWS_ACCESS_KEY_ID",
  },
  {
    name: "Slack token",
    pattern: /\bxox[abprs]-[A-Za-z0-9-]{10,}\b/g,
    placeholder: "REDACTED_SLACK_TOKEN",
  },
  {
    name: "Slack webhook",
    pattern:
      /https:\/\/hooks\.slack\.com\/services\/T[A-Za-z0-9]+\/B[A-Za-z0-9]+\/[A-Za-z0-9]{16,}/g,
    placeholder: "https://hooks.slack.com/services/REDACTED_SLACK_WEBHOOK",
  },
  {
    name: "Stripe live key",
    pattern: /\b[sr]k_live_[A-Za-z0-9]{16,}\b/g,
    placeholder: "REDACTED_STRIPE_LIVE_KEY",
  },
  {
    name: "OpenAI API key",
    pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{32,}\b/g,
    placeholder: "REDACTED_OPENAI_API_KEY",
  },
];

// Vendor-published example values that secret scanning recognizes and allows.
// They are the documented way to show the credential, so they stay verbatim.
const publishedExamples: ReadonlySet<string> = new Set([
  "AKIAIOSFODNN7EXAMPLE",
]);

export function redactCredentials(text: string): RedactionResult {
  const redactions: Redaction[] = [];
  let result = text;
  for (const { name, pattern, placeholder } of credentialPatterns) {
    let count = 0;
    result = result.replace(pattern, (match) => {
      if (publishedExamples.has(match)) {
        return match;
      }
      count += 1;
      return placeholder;
    });
    if (count > 0) {
      redactions.push({ name, count });
    }
  }
  return { text: result, redactions };
}

export function mergeRedactions(
  results: readonly RedactionResult[],
): readonly Redaction[] {
  const totals = new Map<string, number>();
  for (const result of results) {
    for (const { name, count } of result.redactions) {
      totals.set(name, (totals.get(name) ?? 0) + count);
    }
  }
  return [...totals]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => left.name.localeCompare(right.name));
}
