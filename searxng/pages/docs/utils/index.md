> Commit-pinned source for SearXNG master: [docs/utils/index.rst](https://github.com/searxng/searxng/blob/a1144dda3e97668c9d445022b7019c224cd4bb1e/docs/utils/index.rst)

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
