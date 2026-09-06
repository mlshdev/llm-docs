> Release-pinned source for Trigger.dev v4.5.16: [docs/introduction.mdx](https://trigger.dev/docs/introduction)

# Welcome to the Trigger.dev docs

Find all the resources and guides you need to get started

- [Quick start](https://trigger.dev/docs/quick-start)

  Get started with Trigger.dev and run your first task in 3 minutes
- [Guides, frameworks & examples](https://trigger.dev/docs/guides/introduction#example-tasks)

  Browse our wide range of guides, frameworks and example projects
- [Building with AI](https://trigger.dev/docs/building-with-ai)

  Learn how to build Trigger.dev projects using AI coding assistants
- [Video walkthrough](https://trigger.dev/docs/video-walkthrough)

  Watch an end-to-end demo of Trigger.dev in 10 minutes

## What is Trigger.dev?

Trigger.dev is an open source background jobs framework that lets you write reliable workflows in plain async code. Run long-running AI tasks, handle complex background jobs, and build AI agents with built-in queuing, automatic retries, and real-time monitoring. No timeouts, elastic scaling, and zero infrastructure management required.

We provide everything you need to build and manage background tasks: a CLI and SDK for writing tasks in your existing codebase, support for both [regular](https://trigger.dev/docs/tasks/overview) and [scheduled](https://trigger.dev/docs/tasks/scheduled) tasks, full observability through our dashboard, and a [Realtime API](https://trigger.dev/docs/realtime) with [React hooks](https://trigger.dev/docs/realtime/react-hooks#realtime-hooks) for showing task status in your frontend. You can use [Trigger.dev Cloud](https://cloud.trigger.dev) or [self-host](https://trigger.dev/docs/self-hosting/overview) on your own infrastructure.

## Learn the concepts

- [Writing tasks](https://trigger.dev/docs/tasks/overview)

  Tasks are the core of Trigger.dev. Learn what they are and how to write them.
- [Triggering tasks](https://trigger.dev/docs/triggering)

  Learn how to trigger tasks from your codebase.
- [Runs](https://trigger.dev/docs/runs)

  Runs are the instances of tasks that are executed. Learn how they work.
- [API keys](https://trigger.dev/docs/apikeys)

  API keys are used to authenticate requests to the Trigger.dev API. Learn how to create and use
  them.

## Explore by feature

- [Scheduled tasks (cron)](https://trigger.dev/docs/tasks/scheduled)

  Scheduled tasks are a type of task that is scheduled to run at a specific time.
- [Realtime API](https://trigger.dev/docs/realtime)

  The Realtime API allows you to trigger tasks and get the status of runs.
- [React hooks](https://trigger.dev/docs/realtime/react-hooks)

  React hooks are a way to show task status in your frontend.
- [Waits](https://trigger.dev/docs/wait)

  Waits are a way to wait for a task to finish before continuing.
- [Errors and retries](https://trigger.dev/docs/errors-retrying)

  Learn how to handle errors and retries.
- [Concurrency & Queues](https://trigger.dev/docs/queue-concurrency)

  Configure what you want to happen when there is more than one run at a time.
- [Wait for token (human-in-the-loop)](https://trigger.dev/docs/wait-for-token)

  Pause runs until a token is completed via an approval workflow.
- [Build extensions](https://trigger.dev/docs/config/extensions/overview)

  Customize the build process or the resulting bundle and container image.

## Explore by build extension

| Extension             | What it does                                                 | Docs                                                                                           |
| :-------------------- | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| prismaExtension       | Use Prisma with Trigger.dev                                  | [prismaExtension docs](https://trigger.dev/docs/config/extensions/prismaExtension)             |
| pythonExtension       | Execute Python scripts in Trigger.dev                        | [pythonExtension docs](https://trigger.dev/docs/config/extensions/pythonExtension)             |
| playwright            | Use Playwright with Trigger.dev                              | [playwright extension docs](https://trigger.dev/docs/config/extensions/playwright)             |
| puppeteer             | Use Puppeteer with Trigger.dev                               | [puppeteer extension docs](https://trigger.dev/docs/config/extensions/puppeteer)               |
| lightpanda            | Use Lightpanda with Trigger.dev                              | [lightpanda extension docs](https://trigger.dev/docs/config/extensions/lightpanda)             |
| ffmpeg                | Use FFmpeg with Trigger.dev                                  | [ffmpeg extension docs](https://trigger.dev/docs/config/extensions/ffmpeg)                     |
| aptGet                | Install system packages with aptGet                          | [aptGet extension docs](https://trigger.dev/docs/config/extensions/aptGet)                     |
| additionalFiles       | Copy additional files to the build directory                 | [additionalFiles docs](https://trigger.dev/docs/config/extensions/additionalFiles)             |
| additionalPackages    | Include additional packages in the build                     | [additionalPackages docs](https://trigger.dev/docs/config/extensions/additionalPackages)       |
| syncEnvVars           | Automatically sync environment variables to Trigger.dev      | [syncEnvVars docs](https://trigger.dev/docs/config/extensions/syncEnvVars)                     |
| esbuildPlugin         | Add existing or custom esbuild plugins to your build process | [esbuildPlugin docs](https://trigger.dev/docs/config/extensions/esbuildPlugin)                 |
| emitDecoratorMetadata | Support for the emitDecoratorMetadata TypeScript compiler    | [emitDecoratorMetadata docs](https://trigger.dev/docs/config/extensions/emitDecoratorMetadata) |
| audioWaveform         | Support for Audio Waveform in your project                   | [audioWaveform docs](https://trigger.dev/docs/config/extensions/audioWaveform)                 |

## Explore by example

- [FFmpeg](https://trigger.dev/docs/guides/examples/ffmpeg-video-processing)
- [Fal.ai](https://trigger.dev/docs/guides/examples/fal-ai-image-to-cartoon)
- [Puppeteer](https://trigger.dev/docs/guides/examples/puppeteer)
- [LibreOffice](https://trigger.dev/docs/guides/examples/libreoffice-pdf-conversion)
- [OpenAI](https://trigger.dev/docs/guides/examples/open-ai-with-retrying)
- [Browserbase](https://trigger.dev/docs/guides/examples/scrape-hacker-news)
- [Sentry](https://trigger.dev/docs/guides/examples/sentry-error-tracking)
- [Resend](https://trigger.dev/docs/guides/examples/resend-email-sequence)
- [Vercel AI SDK](https://trigger.dev/docs/guides/examples/vercel-ai-sdk)
- [Sharp](https://trigger.dev/docs/guides/examples/sharp-image-processing)
- [Deepgram](https://trigger.dev/docs/guides/examples/deepgram-transcribe-audio)
- [Supabase](https://trigger.dev/docs/guides/examples/supabase-database-operations)
- [DALL•E](https://trigger.dev/docs/guides/examples/dall-e3-generate-image)
- [Firecrawl](https://trigger.dev/docs/guides/examples/firecrawl-url-crawl)
- [Lightpanda](https://trigger.dev/docs/guides/examples/lightpanda)

## Getting help

We'd love to hear from you or give you a hand getting started. Here are some ways to get in touch with us.

- [Join our Discord server](https://discord.gg/kA47vcd8P6)

  Our Discord is the best place to get help with any questions about Trigger.dev.
- [Follow us on X (Twitter)](https://twitter.com/triggerdotdev)

  Follow us to get the latest updates and news.
- [Schedule a call](https://cal.com/team/triggerdotdev/founders-call)

  Arrange a call with one of the founders to get help with any questions.
- [Give us a star on GitHub](https://github.com/triggerdotdev/trigger.dev)

  Check us out our GitHub repo and give us a star if you like what we're doing.
