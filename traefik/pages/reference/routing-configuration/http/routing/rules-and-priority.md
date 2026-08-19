> Release-pinned source for Traefik Proxy v3.7.11: [docs/content/reference/routing-configuration/http/routing/rules-and-priority.md](https://github.com/traefik/traefik/blob/faa1eb590646aed94e561e24a59be0c47353ae95/docs/content/reference/routing-configuration/http/routing/rules-and-priority.md)

An HTTP router is in charge of connecting incoming requests to the services that can handle them. Traefik allows you to define your matching rules and [prioritize](#priority-calculation) the routes.

## Rules

Rules are a set of matchers configured with values, that determine if a particular request matches a specific criteria.
If the rule is verified, the router becomes active, calls middlewares, and then forwards the request to the service.

- To set the value of a rule, use [backticks](https://en.wiktionary.org/wiki/backtick) `` ` `` or escaped double-quotes `\"`.
  - Single quotes `'` are not accepted since the values are [Go's String Literals](https://golang.org/ref/spec#String_literals).
- Matchers that accept a regular expression (`regexp`) use the [Go flavored syntax](https://golang.org/pkg/regexp/).
- The usual AND (`&&`) and OR (`||`) logical operators can be used, with the expected precedence rules, as well as parentheses to express complex rules.
- The NOT (`!`) operator allows you to invert the matcher.

The table below lists all the available matchers:

| Matcher                                                                                              | Description                                                                                         |
| ---------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| <a id="opt-Headerkey-value"></a>[``Header(`key`, `value`)``](#header-and-headerregexp)               | Matches requests containing a header named `key` set to `value`.                                    |
| <a id="opt-HeaderRegexpkey-regexp"></a>[``HeaderRegexp(`key`, `regexp`)``](#header-and-headerregexp) | Matches requests containing a header named `key` matching `regexp`.                                 |
| <a id="opt-Hostdomain"></a>[``Host(`domain`)``](#host-and-hostregexp)                                | Matches requests host set to `domain`. Supports wildcard subdomain matching (e.g. `*.example.com`). |
| <a id="opt-HostRegexpregexp"></a>[``HostRegexp(`regexp`)``](#host-and-hostregexp)                    | Matches requests host matching `regexp`.                                                            |
| <a id="opt-Methodmethod"></a>[``Method(`method`)``](#method)                                         | Matches requests method set to `method`.                                                            |
| <a id="opt-Pathpath"></a>[``Path(`path`)``](#path-pathprefix-and-pathregexp)                         | Matches requests path set to `path`.                                                                |
| <a id="opt-PathPrefixprefix"></a>[``PathPrefix(`prefix`)``](#path-pathprefix-and-pathregexp)         | Matches requests path prefix set to `prefix`.                                                       |
| <a id="opt-PathRegexpregexp"></a>[``PathRegexp(`regexp`)``](#path-pathprefix-and-pathregexp)         | Matches request path using `regexp`.                                                                |
| <a id="opt-Querykey-value"></a>[``Query(`key`, `value`)``](#query-and-queryregexp)                   | Matches requests query parameters named `key` set to `value`.                                       |
| <a id="opt-QueryRegexpkey-regexp"></a>[``QueryRegexp(`key`, `regexp`)``](#query-and-queryregexp)     | Matches requests query parameters named `key` matching `regexp`.                                    |
| <a id="opt-ClientIPip"></a>[``ClientIP(`ip`)``](#clientip)                                           | Matches requests client IP using `ip`. It accepts IPv4, IPv6 and CIDR formats.                      |

### Header and HeaderRegexp

The `Header` and `HeaderRegexp` matchers allow matching requests that contain specific header.

| Behavior                                                                                                                                                                                                       | Rule                                                        |                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- | --------------- |
| <a id="opt-Match-requests-with-a-Content-Type-header-set-to-applicationyaml"></a>Match requests with a `Content-Type` header set to `application/yaml`.                                                        | ``Header(`Content-Type`, `application/yaml`)``              |                 |
| <a id="opt-Match-requests-with-a-Content-Type-header-set-to-either-applicationjson-or-applicationyaml"></a>Match requests with a `Content-Type` header set to either `application/json` or `application/yaml`. | \`\`\`HeaderRegexp(`Content-Type`, \`^application/(json     | yaml)$\`)\`\`\` |
| <a id="opt-Match-headers-case-insensitively"></a>Match headers [case-insensitively](https://en.wikipedia.org/wiki/Case_sensitivity).                                                                           | \`\`\`HeaderRegexp(`Content-Type`, \`(?i)^application/(json | yaml)$\`)\`\`\` |

### Host and HostRegexp

The `Host` and `HostRegexp` matchers allow matching requests that are targeted to a given host.

These matchers do not support non-ASCII characters, use punycode encoded values ([rfc 3492](https://tools.ietf.org/html/rfc3492)) to match such domains.

If no `Host` is set in the request URL (for example, it's an IP address), these matchers will look at the `Host` header.

These matchers will match the request's host in lowercase.

> **Wildcard subdomain matching**
> The `Host` matcher supports a single-level wildcard prefix (`*.example.com`) to match any direct subdomain of `example.com`.
> It should be preferred over the `HostRegexp` matcher as it allows attaching a TLS option and is more efficient.
>
> A wildcard matches exactly one subdomain label: `*.example.com` matches `foo.example.com` but not `foo.bar.example.com` or `example.com` itself.
>
> This is only available with the **v3 rule syntax** (the default).
> **Exception: a bare wildcard matches every request**
> As an exception to the rules above, a bare `*` is not treated as a subdomain wildcard but as a catch-all:
> ``Host(`*`)`` matches every request regardless of its host, including requests with no host at all.
> This mirrors the behaviour of the TCP [``HostSNI(`*`)``](https://doc.traefik.io/traefik/v3.7/reference/routing-configuration/tcp/routing/rules-and-priority#hostsni-and-hostsniregexp) matcher, so both stay consistent.
> \| Behavior                                                        | Rule                                                                    |
> \|-----------------------------------------------------------------|:------------------------------------------------------------------------|
> \| <a id="opt-Match-requests-with-Host-set-to-example-com"></a>Match requests with `Host` set to `example.com`. | ``Host(`example.com`)`` |
> \| <a id="opt-Match-every-request-regardless-of-its-host-see-the-exception-above"></a>Match every request regardless of its host (see the exception above). | ``Host(`*`)`` |
> \| <a id="opt-Match-requests-sent-to-any-subdomain-of-example-com"></a>Match requests sent to any subdomain of `example.com`. | ``HostRegexp(`^.+\.example\.com$`)`` |
> \| <a id="opt-Match-requests-with-Host-set-to-either-example-com-or-example-org"></a>Match requests with `Host` set to either `example.com` or `example.org`. | ``HostRegexp(`^example\.(com|org)$`)`` |
> \| <a id="opt-Match-Host-case-insensitively"></a>Match `Host` [case-insensitively](https://en.wikipedia.org/wiki/Case_sensitivity). | ``HostRegexp(`(?i)^example\.(com|org)$`)`` |

### Method

The `Method` matchers allows matching requests sent based on their HTTP method (also known as request verb).

| Behavior                                                         | Rule                  |
| ---------------------------------------------------------------- | :-------------------- |
| <a id="opt-Match-OPTIONS-requests"></a>Match `OPTIONS` requests. | ``Method(`OPTIONS`)`` |

### Path, PathPrefix, and PathRegexp

These matchers allow matching requests based on their URL path.

For exact matches, use `Path` and its prefixed alternative `PathPrefix`, for regexp matches, use `PathRegexp`.

Path are always starting with a `/`, except for `PathRegexp`.

| Behavior                                                                                                                                                                                                                                                                                                                                                 | Rule                                 |                          |                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- | ------------------------ | -------------- |
| <a id="opt-Match-products-but-neither-productsshoes-nor-products"></a>Match `/products` but neither `/products/shoes` nor `/products/`.                                                                                                                                                                                                                  | ``Path(`/products`)``                |                          |                |
| <a id="opt-Match-products-as-well-as-everything-under-products-such-as-productsshoes-products-but-also-products-for-sale"></a>Match `/products` as well as everything under `/products`, such as `/products/shoes`, `/products/` but also `/products-for-sale`.                                                                                          | ``PathPrefix(`/products`)``          |                          |                |
| <a id="opt-Match-both-productsshoes-and-productssocks-with-and-ID-like-productsshoes31"></a>Match both `/products/shoes` and `/products/socks` with and ID like `/products/shoes/31`.                                                                                                                                                                    | \`\`\`PathRegexp(\`^/products/(shoes | socks)/\[0-9]+$\`)\`\`\` |                |
| <a id="opt-Match-requests-with-a-path-ending-in-either-jpeg-jpg-or-png"></a>Match requests with a path ending in either `.jpeg`, `.jpg` or `.png`.                                                                                                                                                                                                       | \`\`\`PathRegexp(\`.(jpeg            | jpg                      | png)$\`)\`\`\` |
| <a id="opt-Match-products-as-well-as-everything-under-products-such-as-productsshoes-products-but-also-products-for-sale-case-insensitively"></a>Match `/products` as well as everything under `/products`, such as `/products/shoes`, `/products/` but also `/products-for-sale`, [case-insensitively](https://en.wikipedia.org/wiki/Case_sensitivity). | ``PathRegexp(`(?i)^/products`)``     |                          |                |

### Query and QueryRegexp

The `Query` and `QueryRegexp` matchers allow matching requests based on query parameters.

| Behavior                                                                                                                                                                                              | Rule                                     |                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | -------------- |
| <a id="opt-Match-requests-with-a-mobile-query-parameter-set-to-true-such-as-in-searchmobiletrue"></a>Match requests with a `mobile` query parameter set to `true`, such as in `/search?mobile=true`.  | ``Query(`mobile`, `true`)``              |                |
| <a id="opt-Match-requests-with-a-query-parameter-mobile-that-has-no-value-such-as-in-searchmobile"></a>Match requests with a query parameter `mobile` that has no value, such as in `/search?mobile`. | ``Query(`mobile`)``                      |                |
| <a id="opt-Match-requests-with-a-mobile-query-parameter-set-to-either-true-or-yes"></a>Match requests with a `mobile` query parameter set to either `true` or `yes`.                                  | \`\`\`QueryRegexp(`mobile`, \`^(true     | yes)$\`)\`\`\` |
| <a id="opt-Match-requests-with-a-mobile-query-parameter-set-to-any-value-including-the-empty-value"></a>Match requests with a `mobile` query parameter set to any value (including the empty value).  | ``QueryRegexp(`mobile`, `^.*$`)``        |                |
| <a id="opt-Match-query-parameters-case-insensitively"></a>Match query parameters [case-insensitively](https://en.wikipedia.org/wiki/Case_sensitivity).                                                | \`\`\`QueryRegexp(`mobile`, \`(?i)^(true | yes)$\`)\`\`\` |

### ClientIP

The `ClientIP` matcher allows matching requests sent from the given client IP.

It only matches the request client IP and does not use the `X-Forwarded-For` header for matching.

| Behavior                                                                                                         | Rule                           |
| ---------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| <a id="opt-Match-requests-coming-from-a-given-IP-IPv4"></a>Match requests coming from a given IP (IPv4).         | ``ClientIP(`10.76.105.11`)``   |
| <a id="opt-Match-requests-coming-from-a-given-IP-IPv6"></a>Match requests coming from a given IP (IPv6).         | ``ClientIP(`::1`)``            |
| <a id="opt-Match-requests-coming-from-a-given-subnet-IPv4"></a>Match requests coming from a given subnet (IPv4). | ``ClientIP(`192.168.1.0/24`)`` |
| <a id="opt-Match-requests-coming-from-a-given-subnet-IPv6"></a>Match requests coming from a given subnet (IPv6). | ``ClientIP(`fe80::/10`)``      |

### RuleSyntax

> **Warning**
> RuleSyntax option is deprecated and will be removed in the next major version.
> Please do not use this field and rewrite the router rules to use the v3 syntax.
> In Traefik v3 a new rule syntax has been introduced ([migration guide](https://doc.traefik.io/traefik/v3.7/migrate/v3)). The `ruleSyntax` option allows configuring the rule syntax to be used for parsing the rule on a per-router basis. This allows having heterogeneous router configurations and eases migration.

The default value of the `ruleSyntax` option is inherited from the `core.defaultRuleSyntax` option in the install configuration (formerly known as static configuration). By default, the `core.defaultRuleSyntax` static option is v3, meaning that the default rule syntax is also v3

#### Configuration Example

The configuration below uses the [File Provider (Structured)](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/others/file) to configure the `ruleSyntax` to allow `Router-v2` to use v2 syntax, while for `Router-v3` it is configured to use v3 syntax.

**Structured (YAML)**

```yaml
## Dynamic configuration
http:
  routers:
    Router-v3:
      rule: HostRegexp(`[a-z]+\\.traefik\\.com`)
      ruleSyntax: v3
    Router-v2:
      rule: HostRegexp(`{subdomain:[a-z]+}.traefik.com`)
      ruleSyntax: v2
```

**Structured (TOML)**

```toml
## Dynamic configuration
[http.routers]
  [http.routers.Router-v3]
    rule = "HostRegexp(`[a-z]+\\.traefik\\.com`)"
    ruleSyntax = "v3"
  [http.routers.Router-v2]
    rule = "HostRegexp(`{subdomain:[a-z]+}.traefik.com`)"
    ruleSyntax = "v2"
```

**Labels**

```yaml
labels:
  - "traefik.http.routers.Router-v3.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)"
  - "traefik.http.routers.Router-v3.ruleSyntax=v3"
  - "traefik.http.routers.Router-v2.rule=HostRegexp(`{subdomain:[a-z]+}.traefik.com`)"
  - "traefik.http.routers.Router-v2.ruleSyntax=v2"
```

**Tags**

```json
{
  // ...
  "Tags": [
    "traefik.http.routers.Router-v3.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)",
    "traefik.http.routers.Router-v3.ruleSyntax=v3"
    "traefik.http.routers.Router-v2.rule=HostRegexp(`{subdomain:[a-z]+}.traefik.com`)",
    "traefik.http.routers.Router-v2.ruleSyntax=v2"
  ]
},
```

## Priority Calculation

> **How default priorities are computed**
> **Structured (YAML)**
>
> ```yaml
> http:
>   routers:
>     Router-1:
>       rule: "HostRegexp(`[a-z]+\.traefik\.com`)"
>       # ...
>     Router-2:
>       rule: "Host(`foobar.traefik.com`)"
>       # ...
> ```
>
> **Structured (TOML)**
>
> ```toml
> [http.routers]
>   [http.routers.Router-1]
>     rule = "HostRegexp(`[a-z]+\\.traefik\\.com`)"
>     # ...
>   [http.routers.Router-2]
>     rule = "Host(`foobar.traefik.com`)"
>     # ...
> ```
>
> **Labels**
>
> ```yaml
> labels:
>   - "traefik.http.routers.Router-1.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)"
>   - "traefik.http.routers.Router-2.rule=Host(`foobar.traefik.com`)"
> ```
>
> **Tags**
>
> ```json
> {
>     // ...
>     "Tags": [
>       "traefik.http.routers.Router-1.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)",
>       "traefik.http.routers.Router-2.rule=Host(`foobar.traefik.com`)"
>     ]
>   }
> ```
>
> In this case, all requests with host `foobar.traefik.com` will be routed through `Router-1` instead of `Router-2`.
>
> | Name                              | Rule                                   | Priority |
> | --------------------------------- | -------------------------------------- | -------- |
> | <a id="opt-Router-1"></a>Router-1 | ``HostRegexp(`[a-z]+\.traefik\.com`)`` | 34       |
> | <a id="opt-Router-2"></a>Router-2 | ``Host(`foobar.traefik.com`)``         | 26       |
>
> The previous table shows that `Router-1` has a higher priority than `Router-2`.
>
> To solve this issue, the priority must be set.
> To avoid path overlap, routes are sorted, by default, in descending order using rules length.
> The priority is directly equal to the length of the rule, and so the longest length has the highest priority.

A value of `0` for the priority is ignored: `priority: 0` means that the default rules length sorting is used.

Negative priority values are supported.

Traefik reserves a range of priorities for its internal routers, the maximum user-defined router priority value is:

- `(MaxInt32 - 1000)` = `2147482647` for 32-bit platforms,
- `(MaxInt64 - 1000)` = `9223372036854774807` for 64-bit platforms.

> **Providers Precedence**
> When two routes from **different providers** share the same numeric priority,
> Traefik uses the [`providers.precedence`](https://doc.traefik.io/traefik/v3.7/reference/install-configuration/providers/overview#providers-precedence) install configuration option to determine which route takes precedence.
> The provider listed first in `precedence` wins the tie.

### Example

**Structured (YAML)**

```yaml
## Dynamic configuration
http:
  routers:
    Router-1:
      rule: "HostRegexp(`[a-z]+\\.traefik\\.com`)"
      entryPoints:
      - "web"
      service: service-1
      priority: 1
    Router-2:
      rule: "Host(`foobar.traefik.com`)"
      entryPoints:
      - "web"
      priority: 2
      service: service-2
```

**Structured (TOML)**

```toml
## Dynamic configuration
[http.routers]
  [http.routers.Router-1]
    rule = "HostRegexp(`[a-z]+\\.traefik\\.com`)"
    entryPoints = ["web"]
    service = "service-1"
    priority = 1
  [http.routers.Router-2]
    rule = "Host(`foobar.traefik.com`)"
    entryPoints = ["web"]
    priority = 2
    service = "service-2"
```

**Labels**

```yaml
labels:
  - "traefik.http.routers.Router-1.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)"
  - "traefik.http.routers.Router-1.entryPoints=web"
  - "traefik.http.routers.Router-1.service=service-1"
  - "traefik.http.routers.Router-1.priority=1"
  - "traefik.http.routers.Router-2.rule=Host(`foobar.traefik.com`)"
  - "traefik.http.routers.Router-2.entryPoints=web"
  - "traefik.http.routers.Router-2.service=service-2"
  - "traefik.http.routers.Router-2.priority=2"
```

**Tags**

```json
  {
    // ...
    "Tags": [
      "traefik.http.routers.Router-1.rule=HostRegexp(`[a-z]+\\.traefik\\.com`)",
      "traefik.http.routers.Router-1.entryPoints=web",
      "traefik.http.routers.Router-1.service=service-1",
      "traefik.http.routers.Router-1.priority=1"
      "traefik.http.routers.Router-2.rule=Host(`foobar.traefik.com`)",
      "traefik.http.routers.Router-2.entryPoints=web",
      "traefik.http.routers.Router-2.service=service-2",
      "traefik.http.routers.Router-2.priority=2"
    ]
  }
```

In the example above, the priority is configured to allow `Router-2` to handle requests with the `foobar.traefik.com` host.
