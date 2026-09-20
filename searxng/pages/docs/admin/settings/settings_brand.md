> Pinned source for SearXNG master: [docs/admin/settings/settings_brand.rst](https://github.com/searxng/searxng/blob/2e624bed40eb97b46faa98094a0b74d3ececd93d/docs/admin/settings/settings_brand.rst)

<a id="settings-brand"></a>

# `brand:`

<a id="api-searx-brand-settingsbrand"></a>

#### `SettingsBrand(msgspec.Struct, kw_only=True, forbid_unknown_fields=True)`

Options for configuring brand properties.

```yaml
brand:
  issue_url: https://github.com/searxng/searxng/issues
  docs_url: https://docs.searxng.org
  public_instances: https://searx.space
  wiki_url: https://github.com/searxng/searxng/wiki

  custom:
    links:
      Uptime: https://uptime.searxng.org/history/example-org
      About: https://example.org/user/about.html
```

<a id="api-searx-brand-settingsbrand-issue-url"></a>

##### `issue_url`

If you host your own issue tracker change this URL.

<a id="api-searx-brand-settingsbrand-docs-url"></a>

##### `docs_url`

If you host your own documentation change this URL.

<a id="api-searx-brand-settingsbrand-public-instances"></a>

##### `public_instances`

If you host your own <https://searx.space> change this URL.

<a id="api-searx-brand-settingsbrand-wiki-url"></a>

##### `wiki_url`

Link to your wiki (or `false`)

<a id="api-searx-brand-settingsbrand-custom"></a>

##### `custom`

Optional customizing.

<a id="api-searx-brand-brandcustom"></a>

#### `BrandCustom(msgspec.Struct, kw_only=True, forbid_unknown_fields=True)`

Custom settings in the brand section.

<a id="api-searx-brand-brandcustom-links"></a>

##### `links`

Custom entries in the footer of the WEB page: `[title]: [link]`

<a id="api-searx-brand-settingsbrand-pwa-colors"></a>

##### `pwa_colors`

Custom settings for PWA colors.

<a id="api-searx-brand-settingsbrand-new-issue-url"></a>

##### `new_issue_url`

If you host your own issue tracker not on GitHub, then unset this URL.

Note: This URL will create a pre-filled GitHub bug report form for an
engine.  Since this feature is implemented only for GH (and limited to
engines), it will probably be replaced by another solution in the near
future.
