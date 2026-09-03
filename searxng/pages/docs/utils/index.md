> Commit-pinned source for SearXNG master: [docs/utils/index.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/utils/index.rst)

.. \_searx\_utils:
.. \_toolboxing:

# DevOps tooling box

In the folder :origin:`utils/` we maintain some tools useful for administrators
and developers.

# Common command environments

The scripts in our tooling box often dispose of common environments:

.. \_FORCE\_TIMEOUT:

`FORCE_TIMEOUT` : environment
Sets timeout for interactive prompts. If you want to run a script in batch
job, with defaults choices, set `FORCE_TIMEOUT=0`.  By example; to install a
SearXNG server and nginx proxy use:

```text
$ FORCE_TIMEOUT=0 ./utils/searxng.sh install all
$ FORCE_TIMEOUT=0 ./utils/searxng.sh install nginx

```
