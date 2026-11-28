> Pinned source for NetBird v0.84.0: [netbirdio/docs@687df76a2ecb2c825e4726f53f78fb54a131f77c:src/pages/agent-network/integrations/index.mdx](https://github.com/netbirdio/docs/blob/687df76a2ecb2c825e4726f53f78fb54a131f77c/src/pages/agent-network/integrations/index.mdx)

# Integrations

These guides show how to point common AI tools and gateways at your
[agent network endpoint](https://docs.netbird.io/agent-network/how-it-works#llm-apis-and-ai-gateways). In every
case the client holds no provider API key. NetBird authorizes the request against your
[policies](https://docs.netbird.io/agent-network/policies) and injects the upstream key server-side.

Replace `<your-endpoint>` in the snippets below with the endpoint shown on the
**Agent Network → Agents → Providers** page after you connect your first provider.

## In This Section

- [Claude Code](https://docs.netbird.io/agent-network/integrations/claude-code): route Claude Code through NetBird.
- [Codex](https://docs.netbird.io/agent-network/integrations/codex): point the Codex CLI at the endpoint.
- [LiteLLM](https://docs.netbird.io/agent-network/integrations/litellm): use a LiteLLM gateway with identity-based
  attribution and budgets.
- [agentgateway](https://docs.netbird.io/agent-network/integrations/agentgateway): route OpenAI and Anthropic
  requests through a private listener with trusted NetBird identity headers.
- [vLLM](https://docs.netbird.io/agent-network/integrations/vllm): connect a self-hosted, OpenAI-compatible vLLM
  server.
- [Google Vertex AI](https://docs.netbird.io/agent-network/integrations/vertex-ai): connect Gemini and Claude on
  Vertex AI with a Google Cloud service account.
- [AWS Bedrock](https://docs.netbird.io/agent-network/integrations/bedrock): connect Claude, Llama, and Nova on
  Bedrock with a Bedrock API key.
- [Kimi (Moonshot AI)](https://docs.netbird.io/agent-network/integrations/kimi): connect Moonshot's Kimi models and
  point Kimi CLI or Claude Code at the endpoint.
