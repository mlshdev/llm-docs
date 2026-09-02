> Commit-pinned source for SearXNG master: [docs/admin/settings/settings_search.rst](https://github.com/searxng/searxng/blob/05cd77f71b466b7674658429d834a8db3b26811f/docs/admin/settings/settings_search.rst)

.. \_settings search:

# `search:`

.. code:: yaml

search:
safe\_search: 0
autocomplete: "duckduckgo"
favicon\_resolver: ""
default\_lang: ""
ban\_time\_on\_fail: 5
max\_page: 0
max\_ban\_time\_on\_fail: 120
suspended\_times:
SearxEngineAccessDenied: 86400
SearxEngineCaptcha: 86400
SearxEngineTooManyRequests: 3600
cf\_SearxEngineCaptcha: 1296000
cf\_SearxEngineAccessDenied: 86400
recaptcha\_SearxEngineCaptcha: 604800
formats:
\- html

`safe_search`:
Filter results.

- `0`: None
- `1`: Moderate
- `2`: Strict

`autocomplete`:
Existing autocomplete backends, set blank to turn it off.

- `360search`
- `baidu`
- `bing`
- `brave`
- `dbpedia`
- `duckduckgo`
- `google`
- `kagi`
- `mwmbl`
- `naver`
- `privacywall`
- `quark`
- `qwant`
- `seznam`
- `sogou`
- `startpage`
- `swisscows`
- `wikipedia`
- `yandex`

`favicon_resolver`:
To activate favicons in SearXNG's result list select a default
favicon-resolver, leave blank to turn off the feature.  Don't activate the
favicons before reading the Favicons documentation.

`default_lang`:
Default search language - leave blank to detect from browser information or
use codes from :origin:`searx/sxng_locales.py`.

`languages`:
List of available languages - leave unset to use all codes from
:origin:`searx/sxng_locales.py`.  Otherwise list codes of available languages.
The `all` value is shown as the `Default language` in the user interface
(in most cases, it is meant to send the query without a language parameter ;
in some cases, it means the English language) Example:

.. code:: yaml

```
 languages:
   - all
   - en
   - en-US
   - de
   - it-IT
   - fr
   - fr-BE
```

`max_page`:
If engine supports paging, 0 means unlimited numbers of pages.  The value
is only applied if the engine itself does not have a max value that is
lower than this one.

`ban_time_on_fail`:
Ban time in seconds after engine errors.

`max_ban_time_on_fail`:
Max ban time in seconds after engine errors.

`suspended_times`:
Engine suspension time after error (in seconds; set to 0 to disable)

`SearxEngineAccessDenied`: 86400
For error "Access denied" and "HTTP error \[402, 403]"

`SearxEngineCaptcha`: 86400
For error "CAPTCHA"

`SearxEngineTooManyRequests`: 3600
For error "Too many request" and "HTTP error 429"

Cloudflare CAPTCHA:
\- `cf_SearxEngineCaptcha`: 1296000
\- `cf_SearxEngineAccessDenied`: 86400

Google CAPTCHA:
\- `recaptcha_SearxEngineCaptcha`: 604800

`formats`:
Result formats available from web, remove format to deny access (use lower
case).

- `html`
- `csv`
- `json`
- `rss`
