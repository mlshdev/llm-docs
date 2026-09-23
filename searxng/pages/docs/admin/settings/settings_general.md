> Pinned source for SearXNG master: [docs/admin/settings/settings_general.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/admin/settings/settings_general.rst)

<a id="settings-general"></a>

# `general:`

```yaml
general:
  debug: false
  instance_name:  "SearXNG"
  privacypolicy_url: false
  donation_url: false
  contact_url: false
  enable_metrics: true
  open_metrics: ''
```

**`debug` : `$SEARXNG_DEBUG`**

In debug mode, the server provides an interactive debugger, will reload when
code is changed and activates a verbose logging.

> **Attention**
> The debug setting is intended for local development server.  Don't
> activate debug (don't use a development server) when deploying to
> production.

**`donation_url` :**

Set value to `true` to use your own donation page written in the
[searx/info/en/donate.md](https://docs.searxng.org/src/searx.infopage.html#searx-infopage) and use `false` to disable
the donation link altogether.

**`privacypolicy_url`:**

Link to privacy policy.

**`contact_url`:**

Contact `mailto:` address or WEB form.

**`enable_metrics`:**

Enabled by default. Record various anonymous metrics available at `/stats`,
`/stats/errors` and `/preferences`.

**`open_metrics`:**

Disabled by default. Set to a secret password to expose an
[OpenMetrics API](https://github.com/prometheus/OpenMetrics) at `/metrics`,
e.g. for usage with Prometheus. The `/metrics` endpoint is using HTTP Basic Auth,
where the password is the value of `open_metrics` set above. The username used for
Basic Auth can be randomly chosen as only the password is being validated.
