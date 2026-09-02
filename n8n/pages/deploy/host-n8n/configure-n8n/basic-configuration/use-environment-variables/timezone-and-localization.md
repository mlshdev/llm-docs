> Commit-pinned source for n8n main: [docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/timezone-and-localization.md)

# Timezone and localization environment variables <a id="timezone-and-localization-environment-variables"></a>

> **Info**
> **File-based configuration**
>
> You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration#keeping-sensitive-data-in-separate-files) for more details.

| Variable             | Type   | Default            | Description                                                                                                                                                                                                                                                                                                                                                    |
| :------------------- | :----- | :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GENERIC_TIMEZONE`   | \*     | `America/New_York` | The n8n instance timezone. Important for schedule nodes (such as Cron).                                                                                                                                                                                                                                                                                        |
| `N8N_DEFAULT_LOCALE` | String | `en`               | A locale identifier, compatible with the [Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language). n8n doesn't support regional identifiers, such as `de-AT`. When running in a locale other than the default, n8n displays UI strings in the selected locale, and falls back to `en` for any untranslated strings. |
