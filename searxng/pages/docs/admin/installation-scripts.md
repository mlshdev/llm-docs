> Commit-pinned source for SearXNG master: [docs/admin/installation-scripts.rst](https://github.com/searxng/searxng/blob/745d5b6fc506da30b3f275a80497de5d509df540/docs/admin/installation-scripts.rst)

.. \_installation scripts:

# Installation Script

### Update the OS first!

To avoid unwanted side effects, update your OS before installing SearXNG.

The following will install a setup as shown in :ref:`the reference architecture <arch public>`.  First you need to get a clone of the repository.  The clone is only needed for
the installation procedure and some maintenance tasks.

### further read

- toolboxing

Jump to a folder that is readable by *others* and start to clone SearXNG,
alternatively you can create your own fork and clone from there.

.. code:: bash

$ cd \~/Downloads
$ git clone <https://github.com/searxng/searxng.git> searxng
$ cd searxng

### further read

- \[inspect searxng]\(#inspect searxng)

To install a SearXNG reference setup
including a \[uWSGI setup]\(#architecture uWSGI) as described in the
\[installation basic]\(#installation basic) and in the \[searxng uwsgi]\(#searxng uwsgi) section type:

.. code:: bash

$ sudo -H ./utils/searxng.sh install all

.. attention:

```text
For the installation procedure, use a *sudoer* login to run the scripts.  If
you install from ``root``, take into account that the scripts are creating a
``searxng`` user.  In the installation procedure this new created user does
need to have read access to the cloned SearXNG repository, which is not the case if you clone
it into a folder below ``/root``!

```

### further read

- \[update searxng]\(#update searxng)

When all services are installed and running fine, you can add SearXNG to your
HTTP server.  We do not have any preferences regarding the HTTP server, you can use
whatever you prefer.

We implemented installation procedures for:

- \[installation nginx]\(#installation nginx)
- \[installation apache]\(#installation apache)
