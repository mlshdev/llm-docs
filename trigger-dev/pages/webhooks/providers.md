> Pinned source for Trigger.dev v4.8.7: [docs/webhooks/providers.mdx](https://github.com/triggerdotdev/trigger.dev/blob/fae01445473658369323ddc462b71eae51c790ff/docs/webhooks/providers.mdx)
> Canonical documentation: https://trigger.dev/docs/webhooks/providers

# Webhook providers

Every built-in webhook provider, with its SDK function, the credential it verifies with, and a setup page for each provider.

**Each built-in provider has a source function that verifies its signature scheme, so you declare the endpoint with one function call and set one credential.** Every provider below has a page with the source, where to register the URL, and how to set the credential.

| Provider                                                               | Source                                   | Credential                                         |
| ---------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| [Attio](https://trigger.dev/docs/webhooks/providers/attio)             | `webhooks.attio()`                       | Issued by the provider                             |
| [Autumn](https://trigger.dev/docs/webhooks/providers/autumn)           | `webhooks.autumn()`                      | Issued by the provider                             |
| [Cal.com](https://trigger.dev/docs/webhooks/providers/cal-com)         | `webhooks.calCom()`                      | You generate it                                    |
| [Calendly](https://trigger.dev/docs/webhooks/providers/calendly)       | `webhooks.calendly()`                    | You choose it (OAuth apps: issued by the provider) |
| [Clerk](https://trigger.dev/docs/webhooks/providers/clerk)             | `webhooks.clerk()`                       | Issued by the provider                             |
| [Discord](https://trigger.dev/docs/webhooks/providers/discord)         | `webhooks.discord()`                     | Provider's public key                              |
| [DocuSign](https://trigger.dev/docs/webhooks/providers/docusign)       | `webhooks.docusign()`                    | Issued by the provider                             |
| [ElevenLabs](https://trigger.dev/docs/webhooks/providers/elevenlabs)   | `webhooks.elevenlabs()`                  | Issued by the provider                             |
| [Firecrawl](https://trigger.dev/docs/webhooks/providers/firecrawl)     | `webhooks.firecrawl()`                   | Issued by the provider                             |
| [GitHub](https://trigger.dev/docs/webhooks/providers/github)           | `webhooks.github()`                      | You generate it                                    |
| [GitLab](https://trigger.dev/docs/webhooks/providers/gitlab)           | `webhooks.gitlab()`                      | You generate it                                    |
| [Granola](https://trigger.dev/docs/webhooks/providers/granola)         | `webhooks.granola()`                     | Issued by the provider                             |
| [Hookdeck](https://trigger.dev/docs/webhooks/providers/hookdeck)       | `webhooks.hookdeck()`                    | Issued by the provider                             |
| [Infisical](https://trigger.dev/docs/webhooks/providers/infisical)     | `webhooks.infisical()`                   | You generate it                                    |
| [Jira](https://trigger.dev/docs/webhooks/providers/jira)               | `webhooks.jira()`                        | You generate it                                    |
| [Langfuse](https://trigger.dev/docs/webhooks/providers/langfuse)       | `webhooks.langfuse()`                    | Issued by the provider                             |
| [Linear](https://trigger.dev/docs/webhooks/providers/linear)           | `webhooks.linear()`                      | Issued by the provider                             |
| [Loops](https://trigger.dev/docs/webhooks/providers/loops)             | `webhooks.loops()`                       | Issued by the provider                             |
| [Metronome](https://trigger.dev/docs/webhooks/providers/metronome)     | `webhooks.metronome()`                   | Issued by the provider                             |
| [Mux](https://trigger.dev/docs/webhooks/providers/mux)                 | `webhooks.mux()`                         | Issued by the provider                             |
| [OpenAI](https://trigger.dev/docs/webhooks/providers/openai)           | `webhooks.openai()`                      | Issued by the provider                             |
| [PagerDuty](https://trigger.dev/docs/webhooks/providers/pagerduty)     | `webhooks.pagerduty()`                   | Issued by the provider                             |
| [Plain](https://trigger.dev/docs/webhooks/providers/plain)             | `webhooks.plain()`                       | Issued by the provider                             |
| [PlanetScale](https://trigger.dev/docs/webhooks/providers/planetscale) | `webhooks.planetscale()`                 | Issued by the provider                             |
| [Recall.ai](https://trigger.dev/docs/webhooks/providers/recall-ai)     | `webhooks.recallai()`                    | Issued by the provider                             |
| [Replicate](https://trigger.dev/docs/webhooks/providers/replicate)     | `webhooks.replicate()`                   | Issued by the provider                             |
| [Resend](https://trigger.dev/docs/webhooks/providers/resend)           | `webhooks.resend()`                      | Issued by the provider                             |
| [Retell AI](https://trigger.dev/docs/webhooks/providers/retell)        | `webhooks.retell()`                      | Your API key with the webhook badge                |
| [Sentry](https://trigger.dev/docs/webhooks/providers/sentry)           | `webhooks.sentry()`                      | Issued by the provider                             |
| [Shopify](https://trigger.dev/docs/webhooks/providers/shopify)         | `webhooks.shopify()`                     | Issued by the provider                             |
| [Slack](https://trigger.dev/docs/webhooks/providers/slack)             | `webhookSource()` (`@trigger.dev/slack`) | Issued by the provider                             |
| [Square](https://trigger.dev/docs/webhooks/providers/square)           | `webhooks.square()`                      | Issued by the provider                             |
| [Stripe](https://trigger.dev/docs/webhooks/providers/stripe)           | `webhooks.stripe()`                      | Issued by the provider                             |
| [Supabase](https://trigger.dev/docs/webhooks/providers/supabase)       | `webhooks.supabase()`                    | You generate it                                    |
| [Tailscale](https://trigger.dev/docs/webhooks/providers/tailscale)     | `webhooks.tailscale()`                   | Issued by the provider                             |
| [Typeform](https://trigger.dev/docs/webhooks/providers/typeform)       | `webhooks.typeform()`                    | You generate it                                    |
| [Vapi](https://trigger.dev/docs/webhooks/providers/vapi)               | `webhooks.vapi()`                        | You generate it                                    |
| [Vercel](https://trigger.dev/docs/webhooks/providers/vercel)           | `webhooks.vercel()`                      | Issued by the provider                             |
| [WhatsApp](https://trigger.dev/docs/webhooks/providers/whatsapp)       | `webhooks.whatsapp()`                    | Issued by the provider                             |
| [WorkOS](https://trigger.dev/docs/webhooks/providers/workos)           | `webhooks.workos()`                      | Issued by the provider                             |
| [Zendesk](https://trigger.dev/docs/webhooks/providers/zendesk)         | `webhooks.zendesk()`                     | Issued by the provider                             |

For a provider that isn't listed, define a [custom provider](https://trigger.dev/docs/webhooks/custom-providers). For providers that sign with Svix or Standard Webhooks, `webhooks.svix()` and `webhooks.standardWebhooks()` also work; see [Verification](https://trigger.dev/docs/webhooks/verification#svix-and-standard-webhooks).
