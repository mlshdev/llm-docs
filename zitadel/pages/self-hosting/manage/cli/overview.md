> Release-pinned source for ZITADEL v4.17.1: [apps/docs/content/self-hosting/manage/cli/overview.mdx](https://zitadel.com/docs/self-hosting/manage/cli/overview)

This documentation serves as your guide to interacting with Zitadel through the command line interface (CLI). The Zitadel CLI empowers you to manage various aspects of your Zitadel system efficiently from your terminal.

This introductory section provides a brief overview of what the Zitadel CLI offers and who can benefit from using it.

Let's dive in!

## Download the CLI

Download the CLI for [Linux](https://zitadel.com/docs/self-hosting/deploy/linux#install-zitadel) or [MacOS](https://zitadel.com/docs/self-hosting/deploy/macos#install-zitadel).

## Quick start

The easiest way to start ZITADEL is by following the [docker compose example](https://zitadel.com/docs/self-hosting/deploy/compose) which executes the commands for you.

## Initialize the database

The `zitadel init`-command sets up the zitadel database. The statements executed need a user with `ADMIN`-privilege. See [init phase](https://zitadel.com/docs/self-hosting/manage/updating_scaling#the-init-phase) for more information.

## Setup ZITADEL

The `zitadel setup`-command further sets up the database created using `zitadel init`. This command only requires the user created in the previous step.  See [setup phase](https://zitadel.com/docs/self-hosting/manage/updating_scaling#the-setup-phase) for more information.

## Start ZITADEL

The `zitadel start`-command runs the ZITADEL server.  See [runtime phase](https://zitadel.com/docs/self-hosting/manage/updating_scaling#the-runtime-phase) for more information.

The `zitadel start-from-setup`-command first executes [the setup phase](#setup-zitadel) and afterwards runs the ZITADEL server.

The `zitadel start-from-init`-command first executes [the init phase](#initialize-the-database), afterwards [the setup phase](#setup-zitadel) and lastly runs the ZITADEL server.
