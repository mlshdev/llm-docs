> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_general.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/admin/settings/settings_general.rst)

.. \_settings general:

# `general:`

.. code:: yaml

general:
debug: false
instance\_name:  "SearXNG"
privacypolicy\_url: false
donation\_url: false
contact\_url: false
enable\_metrics: true
open\_metrics: ''

`debug` : `$SEARXNG_DEBUG`
In debug mode, the server provides an interactive debugger, will reload when
code is changed and activates a verbose logging.

.. attention:

```text
 The debug setting is intended for local development server.  Don't
 activate debug (don't use a development server) when deploying to
 production.

```

`donation_url` :
Set value to `true` to use your own donation page written in the
searx/info/en/donate.md and use `false` to disable
the donation link altogether.

`privacypolicy_url`:
Link to privacy policy.

`contact_url`:
Contact `mailto:` address or WEB form.

`enable_metrics`:
Enabled by default. Record various anonymous metrics available at `/stats`,
`/stats/errors` and `/preferences`.

`open_metrics`:
Disabled by default. Set to a secret password to expose an
[OpenMetrics API](https://github.com/prometheus/OpenMetrics) at `/metrics`,
e.g. for usage with Prometheus. The `/metrics` endpoint is using HTTP Basic Auth,
where the password is the value of `open_metrics` set above. The username used for
Basic Auth can be randomly chosen as only the password is being validated.
