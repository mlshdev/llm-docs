> Pinned source for discord.py v2.7.1: [docs/migrating_to_v1.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/migrating_to_v1.rst)

- **Orphan:**

<a id="migrating-1-0"></a>

# Migrating to v1.0

v1.0 is one of the biggest breaking changes in the library due to a complete
redesign.

The amount of changes are so massive and long that for all intents and purposes, it is a completely
new library.

Part of the redesign involves making things more easy to use and natural. Things are done on the
[models](https://discordpy.readthedocs.io/api.html#discord-api-models) instead of requiring a `Client` instance to do any work.

## Python Version Change

In order to make development easier and also to allow for our dependencies to upgrade to allow usage of 3.7 or higher,
the library had to remove support for Python versions lower than 3.5.3, which essentially means that **support for Python 3.4
is dropped**.

## Major Model Changes

Below are major model changes that have happened in v1.0

### Snowflakes are int

Before v1.0, all snowflakes (the `id` attribute) were strings. This has been changed to `int`.

Quick example: :

```python
# before
ch = client.get_channel('84319995256905728')
if message.author.id == '80528701850124288':
    ...

# after
ch = client.get_channel(84319995256905728)
if message.author.id == 80528701850124288:
    ...
```

This change allows for fewer errors when using the Copy ID feature in the official client since you no longer have
to wrap it in quotes and allows for optimisation opportunities by allowing ETF to be used instead of JSON internally.

### Server is now Guild

The official API documentation calls the "Server" concept a "Guild" instead. In order to be more consistent with the
API documentation when necessary, the model has been renamed to `Guild` and all instances referring to it has
been changed as well.

A list of changes is as follows:

| Before                      | After                      |
| --------------------------- | -------------------------- |
| `Message.server`            | `Message.guild`            |
| `Channel.server`            | `.GuildChannel.guild`      |
| `Client.servers`            | `Client.guilds`            |
| `Client.get_server`         | `Client.get_guild`         |
| `Emoji.server`              | `Emoji.guild`              |
| `Role.server`               | `Role.guild`               |
| `Invite.server`             | `Invite.guild`             |
| `Member.server`             | `Member.guild`             |
| `Permissions.manage_server` | `Permissions.manage_guild` |
| `VoiceClient.server`        | `VoiceClient.guild`        |
| `Client.create_server`      | `Client.create_guild`      |

<a id="migrating-1-0-model-state"></a>

### Models are Stateful

As mentioned earlier, a lot of functionality was moved out of `Client` and
put into their respective [model](https://discordpy.readthedocs.io/api.html#discord-api-models).

A list of these changes is enumerated below.

| Before                              | After                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Client.add_reaction`               | `Message.add_reaction`                                                                                                                                  |
| `Client.add_roles`                  | `Member.add_roles`                                                                                                                                      |
| `Client.ban`                        | `Member.ban` or `Guild.ban`                                                                                                                             |
| `Client.change_nickname`            | `Member.edit`                                                                                                                                           |
| `Client.clear_reactions`            | `Message.clear_reactions`                                                                                                                               |
| `Client.create_channel`             | `Guild.create_text_channel` and `Guild.create_voice_channel`                                                                                            |
| `Client.create_custom_emoji`        | `Guild.create_custom_emoji`                                                                                                                             |
| `Client.create_invite`              | `abc.GuildChannel.create_invite`                                                                                                                        |
| `Client.create_role`                | `Guild.create_role`                                                                                                                                     |
| `Client.delete_channel`             | `abc.GuildChannel.delete`                                                                                                                               |
| `Client.delete_channel_permissions` | `abc.GuildChannel.set_permissions` with `overwrite` set to `None`                                                                                       |
| `Client.delete_custom_emoji`        | `Emoji.delete`                                                                                                                                          |
| `Client.delete_invite`              | `Invite.delete` or `Client.delete_invite`                                                                                                               |
| `Client.delete_message`             | `Message.delete`                                                                                                                                        |
| `Client.delete_messages`            | `TextChannel.delete_messages`                                                                                                                           |
| `Client.delete_role`                | `Role.delete`                                                                                                                                           |
| `Client.delete_server`              | `Guild.delete`                                                                                                                                          |
| `Client.edit_channel`               | `TextChannel.edit` or `VoiceChannel.edit`                                                                                                               |
| `Client.edit_channel_permissions`   | `abc.GuildChannel.set_permissions`                                                                                                                      |
| `Client.edit_custom_emoji`          | `Emoji.edit`                                                                                                                                            |
| `Client.edit_message`               | `Message.edit`                                                                                                                                          |
| `Client.edit_profile`               | `ClientUser.edit` (you get this from `Client.user`)                                                                                                     |
| `Client.edit_role`                  | `Role.edit`                                                                                                                                             |
| `Client.edit_server`                | `Guild.edit`                                                                                                                                            |
| `Client.estimate_pruned_members`    | `Guild.estimate_pruned_members`                                                                                                                         |
| `Client.get_all_emojis`             | `Client.emojis`                                                                                                                                         |
| `Client.get_bans`                   | `Guild.bans`                                                                                                                                            |
| `Client.get_invite`                 | `Client.fetch_invite`                                                                                                                                   |
| `Client.get_message`                | `abc.Messageable.fetch_message`                                                                                                                         |
| `Client.get_reaction_users`         | `Reaction.users`                                                                                                                                        |
| `Client.get_user_info`              | `Client.fetch_user`                                                                                                                                     |
| `Client.invites_from`               | `abc.GuildChannel.invites` or `Guild.invites`                                                                                                           |
| `Client.join_voice_channel`         | `VoiceChannel.connect` (see [migrating\_1\_0\_voice](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-voice))                        |
| `Client.kick`                       | `Guild.kick` or `Member.kick`                                                                                                                           |
| `Client.leave_server`               | `Guild.leave`                                                                                                                                           |
| `Client.logs_from`                  | `abc.Messageable.history` (see [migrating\_1\_0\_async\_iter](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-async-iter))          |
| `Client.move_channel`               | `TextChannel.edit` or `VoiceChannel.edit`                                                                                                               |
| `Client.move_member`                | `Member.edit`                                                                                                                                           |
| `Client.move_role`                  | `Role.edit`                                                                                                                                             |
| `Client.pin_message`                | `Message.pin`                                                                                                                                           |
| `Client.pins_from`                  | `abc.Messageable.pins`                                                                                                                                  |
| `Client.prune_members`              | `Guild.prune_members`                                                                                                                                   |
| `Client.purge_from`                 | `TextChannel.purge`                                                                                                                                     |
| `Client.remove_reaction`            | `Message.remove_reaction`                                                                                                                               |
| `Client.remove_roles`               | `Member.remove_roles`                                                                                                                                   |
| `Client.replace_roles`              | `Member.edit`                                                                                                                                           |
| `Client.send_file`                  | `abc.Messageable.send` (see [migrating\_1\_0\_sending\_messages](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-sending-messages)) |
| `Client.send_message`               | `abc.Messageable.send` (see [migrating\_1\_0\_sending\_messages](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-sending-messages)) |
| `Client.send_typing`                | `abc.Messageable.trigger_typing` (use `abc.Messageable.typing`)                                                                                         |
| `Client.server_voice_state`         | `Member.edit`                                                                                                                                           |
| `Client.start_private_message`      | `User.create_dm`                                                                                                                                        |
| `Client.unban`                      | `Guild.unban` or `Member.unban`                                                                                                                         |
| `Client.unpin_message`              | `Message.unpin`                                                                                                                                         |
| `Client.wait_for_message`           | `Client.wait_for` (see [migrating\_1\_0\_wait\_for](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-wait-for))                      |
| `Client.wait_for_reaction`          | `Client.wait_for` (see [migrating\_1\_0\_wait\_for](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-wait-for))                      |
| `Client.wait_until_login`           | Removed                                                                                                                                                 |
| `Client.wait_until_ready`           | No change                                                                                                                                               |

### Property Changes

In order to be a bit more consistent, certain things that were properties were changed to methods instead.

The following are now methods instead of properties (requires parentheses):

- `Role.is_default`
- `Client.is_ready`
- `Client.is_closed`

### Dict Value Change

Prior to v1.0 some aggregating properties that retrieved models would return "dict view" objects.

As a consequence, when the dict would change size while you would iterate over it, a RuntimeError would
be raised and crash the task. To alleviate this, the "dict view" objects were changed into lists.

The following views were changed to a list:

- `Client.guilds`
- `Client.users` (new in v1.0)
- `Client.emojis` (new in v1.0)
- `Guild.channels`
- `Guild.text_channels` (new in v1.0)
- `Guild.voice_channels` (new in v1.0)
- `Guild.emojis`
- `Guild.members`

### Voice State Changes

Earlier, in v0.11.0 a `VoiceState` class was added to refer to voice states along with a
`Member.voice` attribute to refer to it.

However, it was transparent to the user. In an effort to make the library save more memory, the
voice state change is now more visible.

The only way to access voice attributes is via the `Member.voice` attribute. Note that if
the member does not have a voice state this attribute can be `None`.

Quick example: :

```python
# before
member.deaf
member.voice.voice_channel

# after
if member.voice: # can be None
    member.voice.deaf
    member.voice.channel
```

### User and Member Type Split

In v1.0 to save memory, `User` and `Member` are no longer inherited. Instead, they are "flattened"
by having equivalent properties that map out to the functional underlying `User`. Thus, there is no functional
change in how they are used. However this breaks `isinstance` checks and thus is something to keep in mind.

These memory savings were accomplished by having a global `User` cache, and as a positive consequence you
can now easily fetch a `User` by their ID by using the new `Client.get_user`. You can also get a list
of all `User` your client can see with `Client.users`.

<a id="migrating-1-0-channel-split"></a>

### Channel Type Split

Prior to v1.0, channels were two different types, `Channel` and `PrivateChannel` with a `is_private`
property to help differentiate between them.

In order to save memory the channels have been split into 4 different types:

- `TextChannel` for guild text channels.
- `VoiceChannel` for guild voice channels.
- `DMChannel` for DM channels with members.
- `GroupChannel` for Group DM channels with members.

With this split came the removal of the `is_private` attribute. You should now use `isinstance`.

The types are split into two different [discord\_api\_abcs](https://discordpy.readthedocs.io/api.html#discord-api-abcs):

- `abc.GuildChannel` for guild channels.
- `abc.PrivateChannel` for private channels (DMs and group DMs).

So to check if something is a guild channel you would do: :

```python
isinstance(channel, discord.abc.GuildChannel)
```

And to check if it's a private channel you would do: :

```python
isinstance(channel, discord.abc.PrivateChannel)
```

Of course, if you're looking for only a specific type you can pass that too, e.g. :

```python
isinstance(channel, discord.TextChannel)
```

With this type split also came event changes, which are enumerated in [migrating\_1\_0\_event\_changes](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-event-changes).

### Miscellaneous Model Changes

There were lots of other things added or removed in the models in general.

They will be enumerated here.

**Removed**

- `Client.login` no longer accepts email and password logins.

  - Use a token and `bot=False`.

- `Client.get_all_emojis`

  - Use `Client.emojis` instead.

- `Client.messages`

  - Use read-only `Client.cached_messages` instead.

- `Client.wait_for_message` and `Client.wait_for_reaction` are gone.

  - Use `Client.wait_for` instead.

- `Channel.voice_members`

  - Use `VoiceChannel.members` instead.

- `Channel.is_private`

  - Use `isinstance` instead with one of the [discord\_api\_abcs](https://discordpy.readthedocs.io/api.html#discord-api-abcs) instead.
  - e.g. `isinstance(channel, discord.abc.GuildChannel)` will check if it isn't a private channel.

- `Client.accept_invite`

  - There is no replacement for this one. This functionality is deprecated API wise.

- `Guild.default_channel` / `Server.default_channel` and `Channel.is_default`

  - The concept of a default channel was removed from Discord.
    See [#329](https://github.com/hammerandchisel/discord-api-docs/pull/329).

- `Message.edited_timestamp`

  - Use `Message.edited_at` instead.

- `Message.timestamp`

  - Use `Message.created_at` instead.

- `Colour.to_tuple()`

  - Use `Colour.to_rgb` instead.

- `Permissions.view_audit_logs`

  - Use `Permissions.view_audit_log` instead.

- `Member.game`

  - Use `Member.activities` instead.

- `Guild.role_hierarchy` / `Server.role_hierarchy`

  - Use `Guild.roles` instead. Note that while sorted, it is in the opposite order
    of what the old `Guild.role_hierarchy` used to be.

**Changed**

- `Member.avatar_url` and `User.avatar_url` now return the default avatar if a custom one is not set.
- `Message.embeds` is now a list of `Embed` instead of `dict` objects.
- `Message.attachments` is now a list of `Attachment` instead of `dict` object.
- `Guild.roles` is now sorted through hierarchy. The first element is always the `@everyone` role.

**Added**

- `Attachment` to represent a discord attachment.
- `CategoryChannel` to represent a channel category.
- `VoiceChannel.members` for fetching members connected to a voice channel.
- `TextChannel.members` for fetching members that can see the channel.
- `Role.members` for fetching members that have the role.
- `Guild.text_channels` for fetching text channels only.
- `Guild.voice_channels` for fetching voice channels only.
- `Guild.categories` for fetching channel categories only.
- `TextChannel.category` and `VoiceChannel.category` to get the category a channel belongs to.
- `Guild.by_category` to get channels grouped by their category.
- `Guild.chunked` to check member chunking status.
- `Guild.explicit_content_filter` to fetch the content filter.
- `Guild.shard_id` to get a guild's Shard ID if you're sharding.
- `Client.users` to get all visible `User` instances.
- `Client.get_user` to get a `User` by ID.
- `User.avatar_url_as` to get an avatar in a specific size or format.
- `Guild.vanity_invite` to fetch the guild's vanity invite.
- `Guild.audit_logs` to fetch the guild's audit logs.
- `Message.webhook_id` to fetch the message's webhook ID.
- `Message.activity` and `Message.application` for Rich Presence related information.
- `TextChannel.is_nsfw` to check if a text channel is NSFW.
- `Colour.from_rgb` to construct a `Colour` from RGB tuple.
- `Guild.get_role` to get a role by its ID.

<a id="migrating-1-0-sending-messages"></a>

## Sending Messages

One of the changes that were done was the merger of the previous `Client.send_message` and `Client.send_file`
functionality into a single method, `abc.Messageable.send`.

Basically: :

```python
# before
await client.send_message(channel, 'Hello')

# after
await channel.send('Hello')
```

This supports everything that the old `send_message` supported such as embeds: :

```python
e = discord.Embed(title='foo')
await channel.send('Hello', embed=e)
```

There is a caveat with sending files however, as this functionality was expanded to support multiple
file attachments, you must now use a `File` pseudo-namedtuple to upload a single file. :

```python
# before
await client.send_file(channel, 'cool.png', filename='testing.png', content='Hello')

# after
await channel.send('Hello', file=discord.File('cool.png', 'testing.png'))
```

This change was to facilitate multiple file uploads: :

```python
my_files = [
    discord.File('cool.png', 'testing.png'),
    discord.File(some_fp, 'cool_filename.png'),
]

await channel.send('Your images:', files=my_files)
```

<a id="migrating-1-0-async-iter"></a>

## Asynchronous Iterators

Prior to v1.0, certain functions like `Client.logs_from` would return a different type if done in Python 3.4 or 3.5+.

In v1.0, this change has been reverted and will now return a singular type meeting an abstract concept called
`AsyncIterator`.

This allows you to iterate over it like normal: :

```python
async for message in channel.history():
    print(message)
```

Or turn it into a list: :

```python
messages = await channel.history().flatten()
for message in messages:
    print(message)
```

A handy aspect of returning `AsyncIterator` is that it allows you to chain functions together such as
`AsyncIterator.map` or `AsyncIterator.filter`: :

```python
async for m_id in channel.history().filter(lambda m: m.author == client.user).map(lambda m: m.id):
    print(m_id)
```

The functions passed to `AsyncIterator.map` or `AsyncIterator.filter` can be either coroutines or regular
functions.

You can also get single elements a la `discord.utils.find` or `discord.utils.get` via
`AsyncIterator.get` or `AsyncIterator.find`: :

```python
my_last_message = await channel.history().get(author=client.user)
```

The following return `AsyncIterator`:

- `abc.Messageable.history`
- `Guild.audit_logs`
- `Reaction.users`

<a id="migrating-1-0-event-changes"></a>

## Event Changes

A lot of events have gone through some changes.

Many events with `server` in the name were changed to use `guild` instead.

Before:

- `on_server_join`
- `on_server_remove`
- `on_server_update`
- `on_server_role_create`
- `on_server_role_delete`
- `on_server_role_update`
- `on_server_emojis_update`
- `on_server_available`
- `on_server_unavailable`

After:

- `on_guild_join`
- `on_guild_remove`
- `on_guild_update`
- `on_guild_role_create`
- `on_guild_role_delete`
- `on_guild_role_update`
- `on_guild_emojis_update`
- `on_guild_available`
- `on_guild_unavailable`

The `on_voice_state_update` event has received an argument change.

Before: :

```python
async def on_voice_state_update(before, after)
```

After: :

```python
async def on_voice_state_update(member, before, after)
```

Instead of two `Member` objects, the new event takes one `Member` object and two `VoiceState` objects.

The `on_guild_emojis_update` event has received an argument change.

Before: :

```python
async def on_guild_emojis_update(before, after)
```

After: :

```python
async def on_guild_emojis_update(guild, before, after)
```

The first argument is now the `Guild` that the emojis were updated from.

The `on_member_ban` event has received an argument change as well:

Before: :

```python
async def on_member_ban(member)
```

After: :

```python
async def on_member_ban(guild, user)
```

As part of the change, the event can either receive a `User` or `Member`. To help in the cases that have
`User`, the `Guild` is provided as the first parameter.

The `on_channel_` events have received a type level split (see [migrating\_1\_0\_channel\_split](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-channel-split)).

Before:

- `on_channel_delete`
- `on_channel_create`
- `on_channel_update`

After:

- `on_guild_channel_delete`
- `on_guild_channel_create`
- `on_guild_channel_update`
- `on_private_channel_delete`
- `on_private_channel_create`
- `on_private_channel_update`

The `on_guild_channel_` events correspond to `abc.GuildChannel` being updated (i.e. `TextChannel`
and `VoiceChannel`) and the `on_private_channel_` events correspond to `abc.PrivateChannel` being
updated (i.e. `DMChannel` and `GroupChannel`).

<a id="migrating-1-0-voice"></a>

## Voice Changes

Voice sending has gone through a complete redesign.

In particular:

- Connection is done through `VoiceChannel.connect` instead of `Client.join_voice_channel`.

- You no longer create players and operate on them (you no longer store them).

- You instead request `VoiceClient` to play an `AudioSource` via `VoiceClient.play`.

- There are different built-in `AudioSource`\s.

  - `FFmpegPCMAudio` is the equivalent of `create_ffmpeg_player`

- create\_ffmpeg\_player/create\_stream\_player/create\_ytdl\_player have all been removed.

  - The goal is to create `AudioSource` instead.

- Using `VoiceClient.play` will not return an `AudioPlayer`.

  - Instead, it's "flattened" like `User` -> `Member` is.

- The `after` parameter now takes a single parameter (the error).

Basically:

Before: :

```python
vc = await client.join_voice_channel(channel)
player = vc.create_ffmpeg_player('testing.mp3', after=lambda: print('done'))
player.start()

player.is_playing()
player.pause()
player.resume()
player.stop()
# ...
```

After: :

```python
vc = await channel.connect()
vc.play(discord.FFmpegPCMAudio('testing.mp3'), after=lambda e: print('done', e))
vc.is_playing()
vc.pause()
vc.resume()
vc.stop()
# ...
```

With the changed `AudioSource` design, you can now change the source that the `VoiceClient` is
playing at runtime via `VoiceClient.source`.

For example, you can add a `PCMVolumeTransformer` to allow changing the volume: :

```python
vc.source = discord.PCMVolumeTransformer(vc.source)
vc.source.volume = 0.6
```

An added benefit of the redesign is that it will be much more resilient towards reconnections:

- The voice websocket will now automatically re-connect and re-do the handshake when disconnected.
- The initial connect handshake will now retry up to 5 times so you no longer get as many `asyncio.TimeoutError`.
- Audio will now stop and resume when a disconnect is found.

  - This includes changing voice regions etc.

<a id="migrating-1-0-wait-for"></a>

## Waiting For Events

Prior to v1.0, the machinery for waiting for an event outside of the event itself was done through two different
functions, `Client.wait_for_message` and `Client.wait_for_reaction`. One problem with one such approach is that it did
not allow you to wait for events outside of the ones provided by the library.

In v1.0 the concept of waiting for another event has been generalised to work with any event as `Client.wait_for`.

For example, to wait for a message: :

```python
# before
msg = await client.wait_for_message(author=message.author, channel=message.channel)

# after
def pred(m):
    return m.author == message.author and m.channel == message.channel

msg = await client.wait_for('message', check=pred)
```

To facilitate multiple returns, `Client.wait_for` returns either a single argument, no arguments, or a tuple of
arguments.

For example, to wait for a reaction: :

```python
reaction, user = await client.wait_for('reaction_add', check=lambda r, u: u.id == 176995180300206080)

# use user and reaction
```

Since this function now can return multiple arguments, the `timeout` parameter will now raise a `asyncio.TimeoutError`
when reached instead of setting the return to `None`. For example:

```python3
def pred(m):
    return m.author == message.author and m.channel == message.channel

try:

    msg = await client.wait_for('message', check=pred, timeout=60.0)
except asyncio.TimeoutError:
    await channel.send('You took too long...')
else:
    await channel.send('You said {0.content}, {0.author}.'.format(msg))
```

## Upgraded Dependencies

Following v1.0 of the library, we've updated our requirements to [aiohttp](https://docs.aiohttp.org/en/stable/) v2.0 or higher.

Since this is a backwards incompatible change, it is recommended that you see the
[changes](http://aiohttp.readthedocs.io/en/stable/changes.html#rc1-2017-03-15)
and the [aio:migration\_to\_2xx](https://docs.aiohttp.org/en/stable/migration_to_2xx.html) pages for details on the breaking changes in
[aiohttp](https://docs.aiohttp.org/en/stable/).

Of the most significant for common users is the removal of helper functions such as:

- `aiohttp.get`
- `aiohttp.post`
- `aiohttp.delete`
- `aiohttp.patch`
- `aiohttp.head`
- `aiohttp.put`
- `aiohttp.request`

It is recommended that you create a session instead: :

```python
async with aiohttp.ClientSession() as sess:
    async with sess.get('url') as resp:
        # work with resp
```

Since it is better to not create a session for every request, you should store it in a variable and then call
`session.close` on it when it needs to be disposed.

## Sharding

The library has received significant changes on how it handles sharding and now has sharding as a first-class citizen.

If using a Bot account and you want to shard your bot in a single process then you can use the `AutoShardedClient`.

This class allows you to use sharding without having to launch multiple processes or deal with complicated IPC.

It should be noted that **the sharded client does not support user accounts**. This is due to the changes in connection
logic and state handling.

Usage is as simple as doing: :

```python
client = discord.AutoShardedClient()
```

instead of using `Client`.

This will launch as many shards as your bot needs using the `/gateway/bot` endpoint, which allocates about 1000 guilds
per shard.

If you want more control over the sharding you can specify `shard_count` and `shard_ids`. :

```python
# launch 10 shards regardless
client = discord.AutoShardedClient(shard_count=10)

# launch specific shard IDs in this process
client = discord.AutoShardedClient(shard_count=10, shard_ids=(1, 2, 5, 6))
```

For users of the command extension, there is also `ext.commands.AutoShardedBot` which behaves similarly.

## Connection Improvements

In v1.0, the auto reconnection logic has been powered up significantly.

`Client.connect` has gained a new keyword argument, `reconnect` that defaults to `True` which controls
the reconnect logic. When enabled, the client will automatically reconnect in all instances of your internet going
offline or Discord going offline with exponential back-off.

`Client.run` and `Client.start` gains this keyword argument as well, but for most cases you will not
need to specify it unless turning it off.

<a id="migrating-1-0-commands"></a>

## Command Extension Changes

Due to the [migrating\_1\_0\_model\_state](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-model-state) changes, some of the design of the extension module had to
undergo some design changes as well.

### Context Changes

In v1.0, the `.Context` has received a lot of changes with how it's retrieved and used.

The biggest change is that `pass_context=True` no longer exists, `.Context` is always passed. Ergo:

```python3
# before
@bot.command()
async def foo():
    await bot.say('Hello')

# after
@bot.command()
async def foo(ctx):
    await ctx.send('Hello')
```

The reason for this is because `ext.commands.Context` now meets the requirements of `abc.Messageable`. This
makes it have similar functionality to `TextChannel` or `DMChannel`. Using `.Context.send`
will either DM the user in a DM context or send a message in the channel it was in, similar to the old `bot.say`
functionality. The old helpers have been removed in favour of the new `abc.Messageable` interface. See
[migrating\_1\_0\_removed\_helpers](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-removed-helpers) for more information.

Since the `ext.commands.Context` is now passed by default, several shortcuts have been added:

**New Shortcuts**

- `ctx.author` is a shortcut for `ctx.message.author`.
- `ctx.guild` is a shortcut for `ctx.message.guild`.
- `ctx.channel` is a shortcut for `ctx.message.channel`.
- `ctx.me` is a shortcut for `ctx.message.guild.me` or `ctx.bot.user`.
- `ctx.voice_client` is a shortcut for `ctx.message.guild.voice_client`.

**New Functionality**

- `.Context.reinvoke` to invoke a command again.

  - This is useful for bypassing cooldowns.
- `.Context.valid` to check if a context can be invoked with `.Bot.invoke`.
- `.Context.send_help` to show the help command for an entity using the new `.ext.commands.HelpCommand` system.

  - This is useful if you want to show the user help if they misused a command.

##### Subclassing Context

In v1.0, there is now the ability to subclass `ext.commands.Context` and use it instead of the default
provided one.

For example, if you want to add some functionality to the context:

```python3
class MyContext(commands.Context):
    @property
    def secret(self):
        return 'my secret here'
```

Then you can use `ext.commands.Bot.get_context` inside `on_message` with combination with
`ext.commands.Bot.invoke` to use your custom context:

```python3
class MyBot(commands.Bot):
    async def on_message(self, message):
        ctx = await self.get_context(message, cls=MyContext)
        await self.invoke(ctx)
```

Now inside your commands you will have access to your custom context:

```python3
@bot.command()
async def secret(ctx):
    await ctx.send(ctx.secret)
```

<a id="migrating-1-0-removed-helpers"></a>

##### Removed Helpers

With the new `.Context` changes, a lot of message sending helpers have been removed.

For a full list of changes, see below:

| Before        | After                                          |
| ------------- | ---------------------------------------------- |
| `Bot.say`     | `.Context.send`                                |
| `Bot.upload`  | `.Context.send`                                |
| `Bot.whisper` | `ctx.author.send`                              |
| `Bot.type`    | `.Context.typing` or `.Context.trigger_typing` |
| `Bot.reply`   | No replacement.                                |

### Command Changes

As mentioned earlier, the first command change is that `pass_context=True` no longer
exists, so there is no need to pass this as a parameter.

Another change is the removal of `no_pm=True`. Instead, use the new `ext.commands.guild_only` built-in
check.

The `commands` attribute of `ext.commands.Bot` and `ext.commands.Group` have been changed from a
dictionary to a set that does not have aliases. To retrieve the previous dictionary behaviour, use `all_commands` instead.

Command instances have gained new attributes and properties:

1. `ext.commands.Command.signature` to get the signature of the command.
2. `ext.commands.Command.usage`, an attribute to override the default signature.
3. `ext.commands.Command.root_parent` to get the root parent group of a subcommand.

For `ext.commands.Group` and `ext.commands.Bot` the following changed:

- Changed `.GroupMixin.commands` to be a `set` without aliases.

  - Use `.GroupMixin.all_commands` to get the old `dict` with all commands.

### Check Changes

Prior to v1.0, `ext.commands.check`\s could only be synchronous. As of v1.0 checks can now be coroutines.

Along with this change, a couple new checks were added.

- `ext.commands.guild_only` replaces the old `no_pm=True` functionality.

- `ext.commands.is_owner` uses the `Client.application_info` endpoint by default to fetch owner ID.

  - This is actually powered by a different function, `ext.commands.Bot.is_owner`.
  - You can set the owner ID yourself by setting `.Bot.owner_id`.

- `ext.commands.is_nsfw` checks if the channel the command is in is a NSFW channel.

  - This is powered by the new `TextChannel.is_nsfw` method.

### Event Changes

All command extension events have changed.

Before: :

```python
on_command(command, ctx)
on_command_completion(command, ctx)
on_command_error(error, ctx)
```

After: :

```python
on_command(ctx)
on_command_completion(ctx)
on_command_error(ctx, error)
```

The extraneous `command` parameter in `.on_command` and `.on_command_completion`
have been removed. The `ext.commands.Command` instance was not kept up-to date so it was incorrect. In order to get
the up to date `ext.commands.Command` instance, use the `.Context.command`
attribute.

The error handlers, either `ext.commands.Command.error` or `.on_command_error`,
have been re-ordered to use the `ext.commands.Context` as its first parameter to be consistent with other events
and commands.

### HelpFormatter and Help Command Changes

The `HelpFormatter` class has been removed. It has been replaced with a `.commands.HelpCommand` class. This class now stores all the command handling and processing of the help command.

The help command is now stored in the `.Bot.help_command` attribute. As an added extension, you can disable the help command completely by assigning the attribute to `None or passing it at _init__` as `help_command=None`.

The new interface allows the help command to be customised through special methods that can be overridden.

- `.HelpCommand.send_bot_help`
  - Called when the user requested for help with the entire bot.
- `.HelpCommand.send_cog_help`
  - Called when the user requested for help with a specific cog.
- `.HelpCommand.send_group_help`
  - Called when the user requested for help with a `.commands.Group`
- `.HelpCommand.send_command_help`
  - Called when the user requested for help with a `.commands.Command`
- `.HelpCommand.get_destination`
  - Called to know where to send the help messages. Useful for deciding whether to DM or not.
- `.HelpCommand.command_not_found`
  - A function (or coroutine) that returns a presentable no command found string.
- `.HelpCommand.subcommand_not_found`
  - A function (or coroutine) that returns a string when a subcommand is not found.
- `.HelpCommand.send_error_message`
  - A coroutine that gets passed the result of `.HelpCommand.command_not_found` and `.HelpCommand.subcommand_not_found`.
  - By default it just sends the message. But you can, for example, override it to put it in an embed.
- `.HelpCommand.on_help_command_error`
  - The [error handler](https://discordpy.readthedocs.io/ext/commands/commands.html#ext-commands-error-handler) for the help command if you want to add one.
- `.HelpCommand.prepare_help_command`
  - A coroutine that is called right before the help command processing is done.

Certain subclasses can implement more customisable methods.

The old `HelpFormatter` was replaced with `.commands.DefaultHelpCommand`, which implements all of the logic of the old help command. The customisable methods can be found in the accompanying documentation.

The library now provides a new more minimalistic `.commands.HelpCommand` implementation that doesn't take as much space, `.commands.MinimalHelpCommand`. The customisable methods can also be found in the accompanying documentation.

A frequent request was if you could associate a help command with a cog. The new design allows for dynamically changing of cog through binding it to the `.HelpCommand.cog` attribute. After this assignment the help command will pretend to be part of the cog and everything should work as expected. When the cog is unloaded then the help command will be "unbound" from the cog.

For example, to implement a `.commands.HelpCommand` in a cog, the following snippet can be used.

```python3
class MyHelpCommand(commands.MinimalHelpCommand):
    def get_command_signature(self, command):
        return '{0.clean_prefix}{1.qualified_name} {1.signature}'.format(self, command)

class MyCog(commands.Cog):
    def __init__(self, bot):
        self._original_help_command = bot.help_command
        bot.help_command = MyHelpCommand()
        bot.help_command.cog = self

    def cog_unload(self):
        self.bot.help_command = self._original_help_command
```

For more information, check out the relevant [documentation](https://discordpy.readthedocs.io/ext/commands/api.html#ext-commands-help-command).

### Cog Changes

Cogs have completely been revamped. They are documented in [ext\_commands\_cogs](https://discordpy.readthedocs.io/ext/commands/cogs.html#ext-commands-cogs) as well.

Cogs are now required to have a base class, `.commands.Cog` for future proofing purposes. This comes with special methods to customise some behaviour.

- `.Cog.cog_unload`
  - This is called when a cog needs to do some cleanup, such as cancelling a task.
- `.Cog.bot_check_once`
  - This registers a `.Bot.check_once` check.
- `.Cog.bot_check`
  - This registers a regular `.Bot.check` check.
- `.Cog.cog_check`
  - This registers a check that applies to every command in the cog.
- `.Cog.cog_command_error`
  - This is a special error handler that is called whenever an error happens inside the cog.
- `.Cog.cog_before_invoke` and `.Cog.cog_after_invoke`
  - A special method that registers a cog before and after invoke hook. More information can be found in [migrating\_1\_0\_before\_after\_hook](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0-before-after-hook).

Those that were using listeners, such as `on_message` inside a cog will now have to explicitly mark them as such using the `.commands.Cog.listener` decorator.

Along with that, cogs have gained the ability to have custom names through specifying it in the class definition line. More options can be found in the metaclass that facilitates all this, `.commands.CogMeta`.

An example cog with every special method registered and a custom name is as follows:

```python3
class MyCog(commands.Cog, name='Example Cog'):
    def cog_unload(self):
        print('cleanup goes here')

    def bot_check(self, ctx):
        print('bot check')
        return True

    def bot_check_once(self, ctx):
        print('bot check once')
        return True

    async def cog_check(self, ctx):
        print('cog local check')
        return await ctx.bot.is_owner(ctx.author)

    async def cog_command_error(self, ctx, error):
        print('Error in {0.command.qualified_name}: {1}'.format(ctx, error))

    async def cog_before_invoke(self, ctx):
        print('cog local before: {0.command.qualified_name}'.format(ctx))

    async def cog_after_invoke(self, ctx):
        print('cog local after: {0.command.qualified_name}'.format(ctx))

    @commands.Cog.listener()
    async def on_message(self, message):
        pass
```

<a id="migrating-1-0-before-after-hook"></a>

### Before and After Invocation Hooks

Commands have gained new before and after invocation hooks that allow you to do an action before and after a command is
run.

They take a single parameter, `ext.commands.Context` and they must be a coroutine.

They are on a global, per-cog, or per-command basis.

Basically: :

```python
# global hooks:

@bot.before_invoke
async def before_any_command(ctx):
    # do something before a command is called
    pass

@bot.after_invoke
async def after_any_command(ctx):
    # do something after a command is called
    pass
```

The after invocation is hook always called, **regardless of an error in the command**. This makes it ideal for some error
handling or clean up of certain resources such a database connection.

The per-command registration is as follows: :

```python
@bot.command()
async def foo(ctx):
    await ctx.send('foo')

@foo.before_invoke
async def before_foo_command(ctx):
    # do something before the foo command is called
    pass

@foo.after_invoke
async def after_foo_command(ctx):
    # do something after the foo command is called
    pass
```

The special cog method for these is `.Cog.cog_before_invoke` and `.Cog.cog_after_invoke`, e.g.:

```python3
class MyCog(commands.Cog):
    async def cog_before_invoke(self, ctx):
        ctx.secret_cog_data = 'foo'

    async def cog_after_invoke(self, ctx):
        print('{0.command} is done...'.format(ctx))

    @commands.command()
    async def foo(self, ctx):
        await ctx.send(ctx.secret_cog_data)
```

To check if a command failed in the after invocation hook, you can use
`.Context.command_failed`.

The invocation order is as follows:

1. Command local before invocation hook
2. Cog local before invocation hook
3. Global before invocation hook
4. The actual command
5. Command local after invocation hook
6. Cog local after invocation hook
7. Global after invocation hook

### Converter Changes

Prior to v1.0, a converter was a type hint that could be a callable that could be invoked
with a singular argument denoting the argument passed by the user as a string.

This system was eventually expanded to support a `ext.commands.Converter` system to
allow plugging in the `ext.commands.Context` and do more complicated conversions such
as the built-in "discord" converters.

In v1.0 this converter system was revamped to allow instances of `ext.commands.Converter` derived
classes to be passed. For consistency, the `ext.commands.Converter.convert` method was changed to
always be a coroutine and will now take the two arguments as parameters.

Essentially, before: :

```python
class MyConverter(commands.Converter):
    def convert(self):
        return self.ctx.message.server.me
```

After: :

```python
class MyConverter(commands.Converter):
    async def convert(self, ctx, argument):
        return ctx.me
```

The command framework also got a couple new converters:

- `ext.commands.clean_content` this is akin to `Message.clean_content` which scrubs mentions.
- `ext.commands.UserConverter` will now appropriately convert `User` only.
- `ChannelConverter` is now split into two different converters.

  - `ext.commands.TextChannelConverter` for `TextChannel`.
  - `ext.commands.VoiceChannelConverter` for `VoiceChannel`.
