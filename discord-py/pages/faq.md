> Pinned source for discord.py v2.7.1: [docs/faq.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/faq.rst)

- **Orphan:**

<a id="faq"></a>

# Frequently Asked Questions

This is a list of Frequently Asked Questions regarding using `discord.py` and its extension modules. Feel free to suggest a
new question or submit one via pull requests.

## Coroutines

Questions regarding coroutines and asyncio belong here.

### What is a coroutine?

A *coroutine*\_ is a function that must be invoked with `await` or `yield from`. When Python encounters an `await` it stops
the function's execution at that point and works on other things until it comes back to that point and finishes off its work.
This allows for your program to be doing multiple things at the same time without using threads or complicated
multiprocessing.

**If you forget to await a coroutine then the coroutine will not run. Never forget to await a coroutine.**

### Where can I use `await`?

You can only use `await` inside `async def` functions and nowhere else.

### What does "blocking" mean?

In asynchronous programming a blocking call is essentially all the parts of the function that are not `await`. Do not
despair however, because not all forms of blocking are bad! Using blocking calls is inevitable, but you must work to make
sure that you don't excessively block functions. Remember, if you block for too long then your bot will freeze since it has
not stopped the function's execution at that point to do other things.

If logging is enabled, this library will attempt to warn you that blocking is occurring with the message:
`Heartbeat blocked for more than N seconds.`
See [logging\_setup](https://discordpy.readthedocs.io/logging.html#logging-setup) for details on enabling logging.

A common source of blocking for too long is something like `time.sleep`. Don't do that. Use `asyncio.sleep`
instead. Similar to this example: :

```python
# bad
time.sleep(10)

# good
await asyncio.sleep(10)
```

Another common source of blocking for too long is using HTTP requests with the famous module [req:index](https://requests.readthedocs.io/en/latest/).
While [req:index](https://requests.readthedocs.io/en/latest/) is an amazing module for non-asynchronous programming, it is not a good choice for
`asyncio` because certain requests can block the event loop too long. Instead, use the [aiohttp](https://docs.aiohttp.org/en/stable/) library which
is installed on the side with this library.

Consider the following example: :

```python
# bad
r = requests.get('http://aws.random.cat/meow')
if r.status_code == 200:
    js = r.json()
    await channel.send(js['file'])

# good
async with aiohttp.ClientSession() as session:
    async with session.get('http://aws.random.cat/meow') as r:
        if r.status == 200:
            js = await r.json()
            await channel.send(js['file'])
```

## General

General questions regarding library usage belong here.

### Where can I find usage examples?

Example code can be found in the [examples folder](https://github.com/Rapptz/discord.py/tree/master/examples)
in the repository.

### How do I set the "Playing" status?

The `activity` keyword argument may be passed in the `Client` constructor or `Client.change_presence`, given an `Activity` object.

The constructor may be used for static activities, while `Client.change_presence` may be used to update the activity at runtime.

> **Warning**
> It is highly discouraged to use `Client.change_presence` or API calls in `on_ready` as this event may be called many times while running, not just once.
>
> There is a high chance of disconnecting if presences are changed right after connecting.

The status type (playing, listening, streaming, watching) can be set using the `ActivityType` enum.
For memory optimisation purposes, some activities are offered in slimmed-down versions:

- `Game`
- `Streaming`

Putting both of these pieces of info together, you get the following: :

```python
client = discord.Client(activity=discord.Game(name='my game'))

# or, for watching:
activity = discord.Activity(name='my activity', type=discord.ActivityType.watching)
client = discord.Client(activity=activity)
```

### How do I send a message to a specific channel?

You must fetch the channel directly and then call the appropriate method. Example: :

```python
channel = client.get_channel(12324234183172)
await channel.send('hello')
```

### How do I send a DM?

Get the `User` or `Member` object and call `abc.Messageable.send`. For example: :

```python
user = client.get_user(381870129706958858)
await user.send('👀')
```

If you are responding to an event, such as `on_message`, you already have the `User` object via `Message.author`: :

```python
await message.author.send('👋')
```

### How do I get the ID of a sent message?

`abc.Messageable.send` returns the `Message` that was sent.
The ID of a message can be accessed via `Message.id`: :

```python
message = await channel.send('hmm…')
message_id = message.id
```

### How do I upload an image?

To upload something to Discord you have to use the `File` object.

A `File` accepts two parameters, the file-like object (or file path) and the filename
to pass to Discord when uploading.

If you want to upload an image it's as simple as: :

```python
await channel.send(file=discord.File('my_file.png'))
```

If you have a file-like object you can do as follows: :

```python
with open('my_file.png', 'rb') as fp:
    await channel.send(file=discord.File(fp, 'new_filename.png'))
```

To upload multiple files, you can use the `files` keyword argument instead of `file`: :

```python
my_files = [
    discord.File('result.zip'),
    discord.File('teaser_graph.png'),
]
await channel.send(files=my_files)
```

If you want to upload something from a URL, you will have to use an HTTP request using [aiohttp](https://docs.aiohttp.org/en/stable/)
and then pass an `io.BytesIO` instance to `File` like so:

```python3
import io
import aiohttp

async with aiohttp.ClientSession() as session:
    async with session.get(my_url) as resp:
        if resp.status != 200:
            return await channel.send('Could not download file...')
        data = io.BytesIO(await resp.read())
        await channel.send(file=discord.File(data, 'cool_image.png'))
```

### How can I add a reaction to a message?

You use the `Message.add_reaction` method.

If you want to use unicode emoji, you must pass a valid unicode code point in a string. In your code, you can write this in a few different ways:

- `'👍'`
- `'\U0001F44D'`
- `'\N{THUMBS UP SIGN}'`

Quick example:

```python3
emoji = '\N{THUMBS UP SIGN}'
# or '\U0001f44d' or '👍'
await message.add_reaction(emoji)
```

In case you want to use emoji that come from a message, you already get their code points in the content without needing
to do anything special. You **cannot** send `':thumbsup:'` style shorthands.

For custom emoji, you should pass an instance of `Emoji`. You can also pass a `'<:name:id>'` string, but if you
can use said emoji, you should be able to use `Client.get_emoji` to get an emoji via ID or use `utils.find`/
`utils.get` on `Client.emojis` or `Guild.emojis` collections.

The name and ID of a custom emoji can be found with the client by prefixing `:custom_emoji:` with a backslash.
For example, sending the message `\:python3:` with the client will result in `<:python3:232720527448342530>`.

Quick example:

```python3
# if you have the ID already
emoji = client.get_emoji(310177266011340803)
await message.add_reaction(emoji)

# no ID, do a lookup
emoji = discord.utils.get(guild.emojis, name='LUL')
if emoji:
    await message.add_reaction(emoji)

# if you have the name and ID of a custom emoji:
emoji = '<:python3:232720527448342530>'
await message.add_reaction(emoji)
```

### How do I pass a coroutine to the player's "after" function?

The library's music player launches on a separate thread, ergo it does not execute inside a coroutine.
This does not mean that it is not possible to call a coroutine in the `after` parameter. To do so you must pass a callable
that wraps up a couple of aspects.

The first gotcha that you must be aware of is that calling a coroutine is not a thread-safe operation. Since we are
technically in another thread, we must take caution in calling thread-safe operations so things do not bug out. Luckily for
us, `asyncio` comes with a `asyncio.run_coroutine_threadsafe` function that allows us to call
a coroutine from another thread.

However, this function returns a `concurrent.futures.Future` and to actually call it we have to fetch its result. Putting all of
this together we can do the following:

```python3
def my_after(error):
    coro = some_channel.send('Song is done!')
    fut = asyncio.run_coroutine_threadsafe(coro, client.loop)
    try:
        fut.result()
    except:
        # an error happened sending the message
        pass

voice.play(discord.FFmpegPCMAudio(url), after=my_after)
```

### How do I run something in the background?

[Check the background\_task.py example.](https://github.com/Rapptz/discord.py/blob/master/examples/background_task.py)

### How do I get a specific model?

There are multiple ways of doing this. If you have a specific model's ID then you can use
one of the following functions:

- `Client.get_channel`
- `Client.get_guild`
- `Client.get_user`
- `Client.get_emoji`
- `Guild.get_member`
- `Guild.get_channel`
- `Guild.get_role`

The following use an HTTP request:

- `abc.Messageable.fetch_message`
- `Client.fetch_user`
- `Client.fetch_guilds`
- `Client.fetch_guild`
- `Guild.fetch_emoji`
- `Guild.fetch_emojis`
- `Guild.fetch_member`

If the functions above do not help you, then use of `utils.find` or `utils.get` would serve some use in finding
specific models.

Quick example:

```python3
# find a guild by name
guild = discord.utils.get(client.guilds, name='My Server')

# make sure to check if it's found
if guild is not None:
    # find a channel by name
    channel = discord.utils.get(guild.text_channels, name='cool-channel')
```

### How do I make a web request?

To make a request, you should use a non-blocking library.
This library already uses and requires a 3rd party library for making requests, [aiohttp](https://docs.aiohttp.org/en/stable/).

Quick example:

```python3
async with aiohttp.ClientSession() as session:
    async with session.get('http://aws.random.cat/meow') as r:
        if r.status == 200:
            js = await r.json()
```

See [aiohttp's full documentation](http://aiohttp.readthedocs.io/en/stable/) for more information.

<a id="local-image"></a>

### How do I use a local image file for an embed image?

Discord special-cases uploading an image attachment and using it within an embed so that it will not
display separately, but instead in the embed's thumbnail, image, footer or author icon.

To do so, upload the image normally with `abc.Messageable.send`,
and set the embed's image URL to `attachment://image.png`,
where `image.png` is the filename of the image you will send.

Quick example:

```python3
file = discord.File("path/to/my/image.png", filename="image.png")
embed = discord.Embed()
embed.set_image(url="attachment://image.png")
await channel.send(file=file, embed=embed)
```

### Is there an event for audit log entries being created?

This event is now available in the library and Discord as of version 2.2. It can be found under `on_audit_log_entry_create`.

## Commands Extension

Questions regarding `discord.ext.commands` belong here.

### Why does `on_message` make my commands stop working?

Overriding the default provided `on_message` forbids any extra commands from running. To fix this, add a
`bot.process_commands(message)` line at the end of your `on_message`. For example: :

```python
@bot.event
async def on_message(message):
    # do some extra stuff here

    await bot.process_commands(message)
```

Alternatively, you can place your `on_message` logic into a **listener**. In this setup, you should not
manually call `bot.process_commands()`. This also allows you to do multiple things asynchronously in response
to a message. Example:

```python
@bot.listen('on_message')
async def whatever_you_want_to_call_it(message):
    # do stuff here
    # do not process commands here
```

### Why do my arguments require quotes?

In a simple command defined as:

```python3
@bot.command()
async def echo(ctx, message: str):
    await ctx.send(message)
```

Calling it via `?echo a b c` will only fetch the first argument and disregard the rest. To fix this you should either call
it via `?echo "a b c"` or change the signature to have "consume rest" behaviour. Example:

```python3
@bot.command()
async def echo(ctx, *, message: str):
    await ctx.send(message)
```

This will allow you to use `?echo a b c` without needing the quotes.

### How do I get the original `message`?

The `ext.commands.Context` contains an attribute, `.Context.message` to get the original
message.

Example:

```python3
@bot.command()
async def length(ctx):
    await ctx.send(f'Your message is {len(ctx.message.content)} characters long.')
```

### How do I make a subcommand?

Use the `ext.commands.group` decorator. This will transform the callback into a `ext.commands.Group` which will allow you to add commands into
the group operating as "subcommands". These groups can be arbitrarily nested as well.

Example:

```python3
@bot.group()
async def git(ctx):
    if ctx.invoked_subcommand is None:
        await ctx.send('Invalid git command passed...')

@git.command()
async def push(ctx, remote: str, branch: str):
    await ctx.send(f'Pushing to {remote} {branch}')
```

This could then be used as `?git push origin master`.

## Views and Modals

Questions regarding `discord.ui.View`, `discord.ui.Modal`, and their components such as buttons, select menus, etc.

### How can I disable all items on timeout?

This requires three steps.

1. Attach a message to the `discord.ui.View` using either the return type of `abc.Messageable.send` or retrieving it via `InteractionCallbackResponse.resource`.
2. Inside `ui.View.on_timeout`, loop over all items inside the view and mark them disabled.
3. Edit the message we retrieved in step 1 with the newly modified view.

Putting it all together, we can do this in a text command:

```python3
class MyView(discord.ui.View):
    async def on_timeout(self) -> None:
        # Step 2
        for item in self.children:
            item.disabled = True

        # Step 3
        await self.message.edit(view=self)

    @discord.ui.button(label='Example')
    async def example_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('Hello!', ephemeral=True)

@bot.command()
async def timeout_example(ctx):
    """An example to showcase disabling buttons on timing out"""
    view = MyView()
    # Step 1
    view.message = await ctx.send('Press me!', view=view)
```

Application commands, when you respond with `InteractionResponse.send_message`, return an instance of `InteractionCallbackResponse` which contains the message you sent. This is the message you should attach to the view.

Putting it all together, using the previous view definition:

```python3
@tree.command()
async def more_timeout_example(interaction):
    """Another example to showcase disabling buttons on timing out"""
    view = MyView()
    callback = await interaction.response.send_message('Press me!', view=view)

    # Step 1
    resource = callback.resource
    # making sure it's an interaction response message
    if isinstance(resource, discord.InteractionMessage):
        view.message = resource
```

## Application Commands

Questions regarding Discord's new application commands, commonly known as "slash commands" or "context menu commands".

### My bot's commands are not showing up!

1. Did you `.CommandTree.sync` your command? Commands need to be synced before they will appear.
2. Did you invite your bot with the correct permissions? Bots need to be invited with the `applications.commands`
   scope in addition to the `bot` scope. For example, invite the bot with the following URL:
   `https://discord.com/oauth2/authorize?client_id=<client id>&scope=applications.commands+bot`.
   Alternatively, if you use `utils.oauth_url`, you can call the function as such:
   `oauth_url(<other options>, scopes=("bot", "applications.commands"))`.

### How do I restrict a command to a specific guild?

To restrict an application command to one or more guilds, you must register it as a **guild command** instead of a
global command. Guild commands are only available in the specified guild(s).

The most straightforward way is to use the `app_commands.guilds` decorator on your command or GroupCog.

`123456789012345678` should be replaced with the actual guild ID you want to restrict the command to.

```python3
@app_commands.command()  # or @tree.command()
@app_commands.guilds(123456789012345678)  # or @app_commands.guilds(discord.Object(123456789012345678))
async def ping(interaction: Interaction):
    await interaction.response.send_message("Pong!")

# or GroupCog (applies to all subcommands):

@app_commands.guilds(123456789012345678)
class MyGroup(commands.GroupCog):
    @app_commands.command()
    async def pong(self, interaction: Interaction):
        await interaction.response.send_message("Ping!")
```

After that, you must `app_commands.CommandTree.sync` the command tree for each guild:

```python3
await tree.sync(guild=discord.Object(123456789012345678))
```

Other methods to restrict commands to specific guilds include:

- Using the `guild` or `guilds` argument in the `app_commands.CommandTree.command` decorator:

```python3
@tree.command(guild=discord.Object(123456789012345678))
async def ping(interaction: Interaction):
    await interaction.response.send_message("Pong!")
```

- Adding commands with `app_commands.CommandTree.add_command` and specifying `guild` or `guilds`:

```python3
@app_commands.command()
async def ping(interaction: Interaction):
    await interaction.response.send_message("Pong!")

tree.add_command(ping, guild=discord.Object(123456789012345678))
```

> **Warning**
> Do not combine this method with the `app_commands.CommandTree.command` decorator,
> as it will cause duplicate commands.

- Using `guild` or `guilds` in `ext.commands.Bot.add_cog`:

  This is mainly for `ext.commands.GroupCog`, but also works for cogs with application commands.
  Note: This does not work with hybrid app commands ([GH-9366](https://github.com/Rapptz/discord.py/issues/9366)).

```python3
class MyCog(commands.Cog):
    @app_commands.command()
    async def ping(self, interaction: Interaction):
        await interaction.response.send_message("Pong!")

async def setup(bot: commands.Bot) -> None:
    await bot.add_cog(MyCog(...), guild=discord.Object(123456789012345678))
```

- Using `app_commands.CommandTree.copy_global_to`:

  This copies all global commands to a specific guild. This is mainly for development purposes.

```python3
tree.copy_global_to(guild=discord.Object(123456789012345678))
```
