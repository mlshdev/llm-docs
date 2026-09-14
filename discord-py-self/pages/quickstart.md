> Release-pinned source for discord.py-self v2.1.0: [docs/quickstart.rst](https://github.com/dolfies/discord.py-self/blob/6de18b4cb40dd42625a535f52d9715c71399ffb3/docs/quickstart.rst)

- **Orphan:**

<a id="quickstart"></a>

# Quickstart

This page gives a brief introduction to the library. It assumes you have the library installed,
if you don't check the [installing](https://discordpy-self.readthedocs.io/intro.html#installing) portion.

## A Minimal Bot

Let's make a bot that responds to a specific message and walk you through it.

It looks something like this:

```python3
import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author != client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run('your token here')
```

Let's name this file `example_bot.py`. Make sure not to name it `discord.py` as that'll conflict
with the library.

There's a lot going on here, so let's walk you through it step by step.

1. The first line just imports the library, if this raises a `ModuleNotFoundError` or `ImportError`
   then head on over to [installing](https://discordpy-self.readthedocs.io/intro.html#installing) section to properly install.
2. Next, we create an instance of a `Client`. This client is our connection to Discord.
3. We then use the `Client.event` decorator to register an event. This library has many events.
   Since this library is asynchronous, we do things in a "callback" style manner.

   A callback is essentially a function that is called when something happens. In our case,
   the `on_ready` event is called when the bot has finished logging in and setting things
   up and the `on_message` event is called when the bot has received a message.
4. Since the `on_message` event triggers for *every* message received, we have to make
   sure that we ignore messages from ourselves. We do this by checking if the `Message.author`
   is the same as the `Client.user`.
5. Afterwards, we check if the `Message.content` starts with `'$hello'`. If it does,
   then we send a message in the channel it was used in with `'Hello!'`. This is a basic way of
   handling commands, which can be later automated with the [./ext/commands/index](https://discordpy-self.readthedocs.io/./ext/commands$1index.html) framework.
6. Finally, we run the bot with our login token. If you need help getting your token,
   look in the [authenticating](https://discordpy-self.readthedocs.io/authenticating.html) section.

Now that we've made a bot, we have to *run* the bot. Luckily, this is simple since this is just a
Python script, we can run it directly.

On Windows:

```shell
$ py -3 example_bot.py
```

On other systems:

```shell
$ python3 example_bot.py
```

Now you can try playing around with your basic bot.
