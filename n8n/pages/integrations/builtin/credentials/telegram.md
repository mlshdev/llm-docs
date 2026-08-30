> Commit-pinned source for n8n main: [docs/integrations/builtin/credentials/telegram.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/credentials/telegram.md)

# Telegram credentials

You can use these credentials to authenticate the following nodes:

- [Telegram](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram)
- [Telegram Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger)

## Prerequisites <a id="prerequisites"></a>

Create a [Telegram](https://telegram.org/) account.

## Supported authentication methods <a id="supported-authentication-methods"></a>

- API bot access token

## Related resources <a id="related-resources"></a>

Refer to [Telegram's Bot API documentation](https://core.telegram.org/bots/api) for more information about the service.

Refer to the [Telegram Bot Features](https://core.telegram.org/bots/features) documentation for more information on creating and working with bots.

## Using API bot access token <a id="using-api-bot-access-token"></a>

To configure this credential, you'll need:

- A bot **Access Token**

To generate your access token:

1. Start a chat with the [BotFather](https://telegram.me/BotFather).
2. Enter the `/newbot` command to create a new bot.
3. The BotFather will ask you for a name and username for your new bot:
   - The **name** is the bot's name displayed in contact details and elsewhere. You can change the bot name later.
   - The **username** is a short name used in search, mentions, and t.me links. Use these guidelines when creating your username:
     - Must be between 5 and 32 characters long.
     - Not case sensitive.
     - May only include Latin characters, numbers, and underscores.
     - Must end in `bot`, like `tetris_bot` or `TetrisBot`.
     - You can't change the username later.
4. Copy the bot **token** the BotFather generates and add it as the **Access Token** in n8n.

Refer to the [BotFather Create a new bot documentation](https://core.telegram.org/bots/features#creating-a-new-bot) for more information.
