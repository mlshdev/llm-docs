> Pinned source for Trigger.dev v4.6.4: [docs/run-tests.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/run-tests.mdx)
> Canonical documentation: https://trigger.dev/docs/run-tests

# Run tests

You can use the dashboard to run a test of your tasks.

You can run a test for any of your tasks, in any environment, from the dashboard.

> **Note**
>
> There is no longer a "Test" page in the sidebar. You test a task from the task itself: on the
> Tasks page open a task (or use the "Test" action next to a task in the Runs list) and press the
> "Test" button to open its test page.

On a task's test page you can:

- Enter the run's input — a JSON **payload** and optional **metadata**. Scheduled tasks show timestamp fields instead of a payload.
- Configure run **options** like the machine size, version, queue, tags, retries, max duration, or a delay.
- Pre-populate the form from a previous run with **Recent runs**, or save and reuse a configuration with **Templates**.
- Press **Run test** to trigger the run.

![Test page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/images/test-dashboard.png)
