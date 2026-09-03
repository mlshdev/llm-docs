> Commit-pinned source for SearXNG master: [docs/utils/searxng.sh.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/utils/searxng.sh.rst)

.. \_searxng.sh:

# `utils/searxng.sh`

To simplify the installation and maintenance of a SearXNG instance you can use the
script :origin:`utils/searxng.sh`.

### further reading

- architecture
- [installation](#install)
- \[installation nginx]\(#installation nginx)
- \[installation apache]\(#installation apache)

# Install

In most cases you will install SearXNG simply by running the command:

.. code::  bash

sudo -H ./utils/searxng.sh install all

The installation is described in chapter \[installation basic]\(#installation basic).

.. \_searxng.sh overview:

# Command Help

The `--help` output of the script is largely self-explanatory:

.. program-output:: ../utils/searxng.sh --help
