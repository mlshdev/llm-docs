> Pinned source for SearXNG master: [CONTRIBUTING.rst](https://github.com/searxng/searxng/blob/d4ce87c23431f607162fc5c39ce52c538d64588f/CONTRIBUTING.rst)

<a id="quickstart-guide"></a> <a id="commits-guide"></a> <a id="ai-policy"></a> <a id="weblate"></a> <a id="github-codespaces"></a> <a id="120-hours-per-month"></a> <a id="list-of-existing-codespaces"></a>

Thank you for your interest in SearXNG.

Have a look at our [Quickstart guide](https://docs.searxng.org/CONTRIBUTING.html#quickstart-guide), it's very easy to contribute.

Further information on *how-to* can be found
[here](https://docs.searxng.org/dev/index.html).

# Translations

Help translate SearXNG at [Weblate](https://docs.searxng.org/dev/translation.html#weblate).

![Weblate](https://translate.codeberg.org/widget/searxng/searxng/horizontal-auto.svg)

# Cloud development

You can contribute from your browser using [GitHub Codespaces](https://docs.searxng.org/CONTRIBUTING.html#github-codespaces):

- Fork the repository.
- Click on the `<> Code` green button.
- Click on the `Codespaces` tab instead of `Local`.
- Click on `Create codespace on master`.
- VSCode is going to start in the browser.
- Wait for `git pull && make install` to appear and then disappear.
- You have [120 hours per month](https://docs.searxng.org/CONTRIBUTING.html#120-hours-per-month) (see also your [list of existing Codespaces](https://docs.searxng.org/CONTRIBUTING.html#list-of-existing-codespaces)).
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

See [Commits guide](https://docs.searxng.org/CONTRIBUTING.html#commits-guide) for more details.

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

For our policy on the use of AI tools, please read [AI Policy](https://docs.searxng.org/CONTRIBUTING.html#ai-policy).
