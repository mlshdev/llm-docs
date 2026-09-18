> Pinned source for SearXNG master: [docs/dev/translation.rst](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/dev/translation.rst)

<a id="translation"></a>

# Translation

<a id="translate-codeberg-org"></a> <a id="weblate"></a> <a id="translations-branch"></a> <a id="orphan-branch"></a> <a id="weblate-repository"></a> <a id="wlc"></a>

- **Target:** <https://translate.codeberg.org/projects/searxng/>

### `translated`

- [searx.babel\_extract](https://docs.searxng.org/src/searx.babel_extract.html#searx-babel-extract)
- Weblate\_
- SearXNG [translations branch](https://docs.searxng.org/dev/translation.html#translations-branch)
- SearXNG [Weblate repository](https://docs.searxng.org/dev/translation.html#weblate-repository)
- Weblate Client: wlc\_
- Babel Command-Line: [pybabel](http://babel.pocoo.org/en/latest/cmdline.html)
- [weblate workflow](https://docs.weblate.org/en/latest/workflows.html)

Translation takes place on translate.codeberg.org\_.

Translations which has been added by translators on the translate.codeberg.org\_ UI are
committed to Weblate's counterpart of the SearXNG *origin* repository which is
located at `https://translate.codeberg.org/git/searxng/searxng`.

There is no need to clone this repository, [SearXNG Weblate workflow](https://docs.searxng.org/dev/translation.html#searxng-weblate-workflow) take
care of the synchronization with the *origin*.  To avoid merging commits from
the counterpart directly on the `master` branch of *SearXNG origin*, a *pull
request* (PR) is created by this workflow.

Weblate monitors the [translations branch](https://docs.searxng.org/dev/translation.html#translations-branch), not the `master` branch.  This
branch is an [orphan branch](https://docs.searxng.org/dev/translation.html#orphan-branch), decoupled from the master branch (we already know
orphan branches from the `gh-pages`).  The [translations branch](https://docs.searxng.org/dev/translation.html#translations-branch) contains
only the

- `translation/messages.pot` and the
- `translation/*/messages.po` files, nothing else.

<a id="searxng-weblate-workflow"></a>

![](https://raw.githubusercontent.com/searxng/searxng/c0042add30116a315ebacfcb84781bb3e1e4e77e/docs/dev/translation.svg)

*SearXNG's PR workflow to be in sync with Weblate*

**Sync from *origin* to *weblate*: using `make weblate.push.translations`**

For each commit on the `master` branch of SearXNG *origin* the GitHub job
[babel / Update translations branch](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/.github/workflows/integration.yml) checks for updated translations.

**Sync from *weblate* to *origin*: using `make weblate.translations.commit`**

Every Friday, the GitHub workflow [babel / create PR for additions from weblate](https://github.com/searxng/searxng/blob/c0042add30116a315ebacfcb84781bb3e1e4e77e/.github/workflows/translations-update.yml) creates a PR with the
updated translation files:

- `translation/messages.pot`,
- `translation/*/messages.po` and
- `translation/*/messages.mo`

# wlc

<a id="wlc-configuration"></a> <a id="api-key"></a>

All weblate integration is done by GitHub workflows, but if you want to use wlc\_,
copy this content into [wlc configuration](https://docs.searxng.org/dev/translation.html#wlc-configuration) in your HOME `~/.config/weblate`

```ini
[keys]
https://translate.codeberg.org/api/ = APIKEY
```

Replace `APIKEY` by your [API key](https://docs.searxng.org/dev/translation.html#api-key).
