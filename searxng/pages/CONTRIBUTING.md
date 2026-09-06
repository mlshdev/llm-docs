> Commit-pinned source for SearXNG master: [CONTRIBUTING.rst](https://github.com/searxng/searxng/blob/22056605a6e0ed41a0aa91a2bf300a361fd16b92/CONTRIBUTING.rst)

.. SPDX-License-Identifier: AGPL-3.0-or-later

Thank you for your interest in SearXNG.

Have a look at our [Quickstart guide](https://docs.searxng.org/dev/quickstart.html), it's very easy to contribute.

Further information on *how-to* can be found
[here](https://docs.searxng.org/dev/index.html).

# Translations

Help translate SearXNG at [Weblate](https://translate.codeberg.org/projects/searxng/searxng/).

![](https://translate.codeberg.org/widget/searxng/searxng/horizontal-auto.svg)
:target: <https://translate.codeberg.org/engage/searxng/>
:alt: Weblate
:width: 768px

# Cloud development

You can contribute from your browser using [GitHub Codespaces](https://docs.github.com/en/codespaces/overview):

- Fork the repository.
- Click on the `<> Code` green button.
- Click on the `Codespaces` tab instead of `Local`.
- Click on `Create codespace on master`.
- VSCode is going to start in the browser.
- Wait for `git pull && make install` to appear and then disappear.
- You have [120 hours per month](https://github.com/settings/billing) (see also your [list of existing Codespaces](https://github.com/codespaces)).
- You can start SearXNG using `make run` in the terminal or by pressing `Ctrl+Shift+B`.

# How-to contribute

## Submitting pull requests

Please follow the provided PR template when writing a description for your
changes.

Do not take criticism personally. When you get feedback, it is about your work,
not your character or personality. Keep in mind we all want to make SearXNG
better.

When something is not clear, please ask questions to clear things up.

If you would like to introduce a big architectural change or do a refactor,
either in the codebase or the development tooling, please open an issue with a
proposal first. This way we can think together about the problem and probably
come up with a better solution.

## Coding conventions and guidelines

### Commit messages

- Always write descriptive commit messages *("fix bug" is not acceptable)*.
- Use the present tense *("Add feature", not "Added feature")*.
- Use the imperative mood *("Move cursor to...", not "Moves cursor to...")*.
- Limit the first line (commit title) to 72 characters or less.

See [Commits guide](https://docs.searxng.org/dev/commits.html) for more details.

### Coding guidelines

As a Python project, we must follow [PEP 8](https://www.python.org/dev/peps/pep-0008/)
and [PEP 20](https://www.python.org/dev/peps/pep-0020/) guidelines.

Furthermore, follow Clean Code conventions. The most important
rules in this project are:

- Simpler is better. [KISS principle](https://en.wikipedia.org/wiki/KISS_principle)
- Be consistent.
- Every function must do one thing.
- Use descriptive names for functions and variables.
- Always look for the root cause.
- Keep configurable data high level.
- Avoid negative conditionals.
- Prefer fewer arguments.
- Do not add obvious comments to code.
- Do not comment out code, delete lines instead.

### AI Policy

For our policy on the use of AI tools, please read [AI Policy](https://github.com/searxng/searxng/blob/master/AI_POLICY.rst).
