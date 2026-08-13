> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/agent-network/integrations/vllm.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/agent-network/integrations/vllm.mdx)

# vLLM

[vLLM](https://docs.vllm.ai) is a high-throughput inference server for self-hosted models
that exposes an **OpenAI-compatible API**. You run it yourself, typically on a GPU host
inside the same network as the NetBird proxy, and connect it as a provider so agents reach
it keyless over the tunnel, authorized by your [policies](https://docs.netbird.io/agent-network/policies).

This gives you keyless access to your private vLLM from anywhere: the endpoint stays
off the public internet, and any authorized user or agent reaches it over the NetBird
tunnel without shared API keys.

vLLM behaves like a [custom / self-hosted provider](https://docs.netbird.io/agent-network/providers#custom-and-self-hosted-providers);
it simply has its own named entry in the provider picker.

## Connect vLLM as a Provider

Because vLLM is self-hosted, the upstream URL points at your own instance. Host it in the
same network as the proxy so the proxy can reach it directly.

1. Go to **Agent Network → Providers** and click **Connect Provider**.
2. Select **vLLM** and set the **Upstream URL** to your vLLM server's OpenAI-compatible base
   URL, for example `https://vllm.internal:8000`.
3. If your vLLM server was started with an API key (`--api-key`), paste it as the **API key**;
   NetBird stores it server-side and sends it as a bearer token. Leave it empty if the server
   requires none.
4. *(Optional)* Enable **Skip TLS Verification** if your vLLM endpoint serves a self-signed
   certificate. See [Skip TLS Verification](https://docs.netbird.io/agent-network/providers#skip-tls-verification).
   Prefer mounting trusted certificates on your proxy instances for anything beyond testing.
5. *(Optional)* List the **models** your server exposes with per-model pricing so cost shows
   up in [Usage & Logs](https://docs.netbird.io/agent-network/usage-and-logs). Leaving the list empty accepts any
   model name the server serves.
6. Save the provider.

![connect a self-hosted vLLM provider in NetBird Agent Network](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/agent-network/integrations/agent-network-connect-vllm.png)

## Create a Policy

By default nothing is allowed: a policy must connect a source group to the vLLM provider
before anyone can route through it.

1. Go to **Agent Network → Policies** and add a policy.
2. Set the **Source** to the users or agents who should be able to use vLLM (for example your
   `Engineering` group from your IdP).
3. Set the **Provider** to the vLLM provider you just connected.
4. Optionally attach per-user or per-group [token and budget limits](https://docs.netbird.io/agent-network/policies/limits)
   and [guardrails](https://docs.netbird.io/agent-network/policies/guardrails) such as a model allowlist.

![create a NetBird Agent Network policy authorizing vLLM](https://raw.githubusercontent.com/netbirdio/docs/abb8d4607fd4a1260c80bcdad1493e92941e1837/public/docs-static/img/agent-network/integrations/agent-network-create-policy-vllm.png)

See [Policies](https://docs.netbird.io/agent-network/policies) for details.

## Result

Agents point at the NetBird endpoint with no key and call your vLLM models by name. NetBird
enforces your policies, limits, and guardrails, then forwards the request to your vLLM server.
Every call is recorded in [Usage & Logs](https://docs.netbird.io/agent-network/usage-and-logs) with the caller's
identity, auth group, model, tokens, cost, and status.

> **Note**
>
> vLLM speaks the OpenAI API shape, so point OpenAI-compatible clients at
> `https://<your-endpoint>` and select a model your server hosts.
