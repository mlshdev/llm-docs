> Pinned source for Trigger.dev v4.8.3: [docs/run-tests.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/run-tests.mdx)
> Canonical documentation: https://trigger.dev/docs/run-tests

# Run tests

You can use the dashboard to run a test of your tasks.

You can run a test for any of your tasks, in any environment, from the dashboard.

> **Note**
>
> There is no longer a "Test" page in the sidebar. You test a task from the task itself: on the
> Tasks page use the "Test" action next to a task, or open the task and press "Test task" ("Test
> schedule" for a scheduled task), to open its test page.

On a task's test page you can:

- Enter the run's input — a JSON **payload** and optional **metadata**. Scheduled tasks show timestamp fields instead of a payload.
- Configure run **options** like the machine size, version, queue, tags, retries, max duration, or a delay.
- Pre-populate the form from a previous run with **Recent runs**, or save and reuse a configuration with **Templates**.
- Press **Run test** to trigger the run.

![Test page](https://raw.githubusercontent.com/triggerdotdev/trigger.dev/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/images/test-dashboard.png)
