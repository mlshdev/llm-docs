> Tag-pinned source for discord.py v2.7.1: [docs/migrating.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/migrating.rst)

<a id="migrating-2-0"></a>

# Migrating to v2.0

Compared to v1.0, v2.0 mostly has breaking changes related to better developer experience and API coverage.
While the changes aren't as massive to require an entire rewrite, there are still many changes that need to be accounted for.

## Python Version Change

In order to ease development, maintain security updates, and use newer features **v2.0 drops support for Python 3.7 and earlier**.

<a id="migrating-2-0-userbot-removal"></a>

## Removal of Support For User Accounts

Logging on with a user token is against the Discord [Terms of Service](https://support.discord.com/hc/en-us/articles/115002192352)
and as such all support for user-only endpoints has been removed.

The following have been removed:

- `bot` parameter to `Client.login` and `Client.start`
- `afk` parameter to `Client.change_presence`
- `password`, `new_password`, `email`, and `house` parameters to `ClientUser.edit`
- `CallMessage` model
- `GroupCall` model
- `Profile` model
- `Relationship` model
- `RelationshipType` enumeration
- `HypeSquadHouse` enumeration
- `PremiumType` enumeration
- `UserContentFilter` enumeration
- `FriendFlags` enumeration
- `Theme` enumeration
- `on_relationship_add` event
- `on_relationship_remove` event
- `on_relationship_update` event
- `Client.fetch_user_profile` method
- `ClientUser.create_group` method
- `ClientUser.edit_settings` method
- `ClientUser.get_relationship` method
- `GroupChannel.add_recipients` method
- `GroupChannel.remove_recipients` method
- `GroupChannel.edit` method
- `Guild.ack` method
- `Message.ack` method
- `User.block` method
- `User.is_blocked` method
- `User.is_friend` method
- `User.profile` method
- `User.remove_friend` method
- `User.send_friend_request` method
- `User.unblock` method
- `ClientUser.blocked` attribute
- `ClientUser.email` attribute
- `ClientUser.friends` attribute
- `ClientUser.premium` attribute
- `ClientUser.premium_type` attribute
- `ClientUser.relationships` attribute
- `Message.call` attribute
- `User.mutual_friends` attribute
- `User.relationship` attribute

<a id="migrating-2-0-client-async-setup"></a>

## asyncio Event Loop Changes

Python 3.7 introduced a new helper function `asyncio.run` which automatically creates and destroys the asynchronous event loop.

In order to support this, the way discord.py handles the `asyncio` event loop has changed.

This allows you to rather than using `Client.run` create your own asynchronous loop to setup other asynchronous code as needed.

Quick example:

```python
client = discord.Client()

async def main():
    # do other async things
    await my_async_function()

    # start the client
    async with client:
        await client.start(TOKEN)

asyncio.run(main())
```

A new `Client.setup_hook` method has also been added to the `Client` class.
This method is called after login but before connecting to the discord gateway.

It is intended to be used to setup various bot features in an asynchronous context.

- **Meth:** `~Client.setup_hook` can be defined by subclassing the `Client` class.

Quick example:

```python
class MyClient(discord.Client):
    async def setup_hook(self):
        print('This is asynchronous!')

client = MyClient()
client.run(TOKEN)
```

With this change, constructor of `Client` no longer accepts `connector` and `loop` parameters.

In parallel with this change, changes were made to loading and unloading of commands extension extensions and cogs,
see [migrating\_2\_0\_commands\_extension\_cog\_async](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-commands-extension-cog-async) for more information.

## Intents Are Now Required

In earlier versions, the `intents` keyword argument was optional and defaulted to `Intents.default`. In order to better educate users on their intents and to also make it more explicit, this parameter is now required to pass in.

For example:

```python3
# before
client = discord.Client()

# after
intents = discord.Intents.default()
client = discord.Client(intents=intents)
```

This change applies to **all** subclasses of `Client`.

- `AutoShardedClient`
- `discord.ext.commands.Bot`
- `discord.ext.commands.AutoShardedBot`

## Abstract Base Classes Changes

- **Ref:** `discord_api_abcs` that inherited from `abc.ABCMeta` now inherit from `typing.Protocol`.

This results in a change of the base metaclass used by these classes
but this should generally be completely transparent to the user.

All of the classes are either `runtime-checkable` protocols or explicitly inherited from
and as such usage with `isinstance` and `issubclass` is not affected.

The following have been changed to `runtime-checkable` `typing.Protocol`\s:

- `abc.Snowflake`
- `abc.User`

The following have been changed to subclass `typing.Protocol`:

- `abc.GuildChannel`
- `abc.Connectable`

The following have been changed to use the default metaclass instead of `abc.ABCMeta`:

- `abc.Messageable`
- `abc.PrivateChannel`

## `datetime` Objects Are Now UTC-Aware

All usage of naive `datetime.datetime` objects in the library has been replaced with aware objects using UTC timezone.
Methods that accepted naive `datetime.datetime` objects now also accept timezone-aware objects.
To keep behavior inline with `datetime.datetime`'s methods, this library's methods now assume
that naive `datetime.datetime` objects are local time (note that some of the methods may not accept
naive `datetime.datetime`, such exceptions are listed below).

Because naive `datetime.datetime` objects are treated by many of its methods as local times, the previous behavior
was more likely to result in programming errors with their usage.

To ease the migration, `utils.utcnow` helper function has been added.

> **Warning**
> Using `datetime.datetime.utcnow` can be problematic since it returns a naive UTC `datetime` object.

Quick example:

```python
# before
week_ago = datetime.datetime.utcnow() - datetime.timedelta(days=7)
if member.created_at > week_ago:
    print(f'Member account {member} was created less than a week ago!')

# after
# The new helper function can be used here:
week_ago = discord.utils.utcnow() - datetime.timedelta(days=7)
# ...or the equivalent result can be achieved with datetime.datetime.now():
week_ago = datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=7)
if member.created_at > week_ago:
    print(f'Member account {member} was created less than a week ago!')
```

The following have been changed from naive to aware `datetime.datetime` objects in UTC:

- `AuditLogEntry.created_at` attribute
- `BaseActivity.created_at` attribute
- `ClientUser.created_at` attribute
- `DMChannel.created_at` attribute
- `Emoji.created_at` attribute
- `GroupChannel.created_at` attribute
- `Guild.created_at` attribute
- `abc.GuildChannel.created_at` attribute
- `Invite.created_at` attribute
- `Object.created_at` attribute
- `Member.created_at` attribute
- `Message.created_at` attribute
- `PartialEmoji.created_at` attribute
- `PartialInviteChannel.created_at` attribute
- `PartialInviteGuild.created_at` attribute
- `PartialMessage.created_at` attribute
- `Role.created_at` attribute
- `Spotify.created_at` attribute
- `Sticker.created_at` attribute
- `TeamMember.created_at` attribute
- `Template.created_at` attribute
- `User.created_at` attribute
- `Webhook.created_at` attribute
- `Widget.created_at` attribute
- `WidgetChannel.created_at` attribute
- `WidgetMember.created_at` attribute
- `Message.edited_at` attribute
- `Invite.expires_at` attribute
- `Activity.end` attribute
- `Game.end` attribute
- `Spotify.end` attribute
- `Member.joined_at` attribute
- `Member.premium_since` attribute
- `VoiceState.requested_to_speak_at` attribute
- `Activity.start` attribute
- `Game.start` attribute
- `Spotify.start` attribute
- `StreamIntegration.synced_at` attribute
- `Embed.timestamp` attribute
- `Template.updated_at` attribute
- `timestamp` parameter in `on_typing` event
- `last_pin` parameter in `on_private_channel_pins_update` event
- `last_pin` parameter in `on_guild_channel_pins_update` event
- Return type of `utils.snowflake_time`

The following now accept aware `datetime.datetime` and assume that if the passed `datetime.datetime` is naive, it is a local time:

- `abc.Messageable.history` method
- `Client.fetch_guilds` method
- `Guild.audit_logs` method
- `Guild.fetch_members` method
- `TextChannel.purge` method
- `Embed` constructor
- `Embed.timestamp` property setter
- `utils.sleep_until` function
- `utils.time_snowflake` function

Currently, there's only one place in this library that doesn't accept naive `datetime.datetime` objects:

- `timed_out_until` parameter in `Member.edit`

  This has been done to prevent users from mistakenly applying incorrect timeouts to guild members.

## Major Webhook Changes

Webhook support has been rewritten to work better with typings and rate limits.

As a result, synchronous functionality has been split to separate classes.

Quick example for asynchronous webhooks:

```python
# before
async with aiohttp.ClientSession() as session:
    webhook = discord.Webhook.from_url('url-here', adapter=discord.AsyncWebhookAdapter(session))
    await webhook.send('Hello World', username='Foo')

# after
async with aiohttp.ClientSession() as session:
    webhook = discord.Webhook.from_url('url-here', session=session)
    await webhook.send('Hello World', username='Foo')
```

Quick example for synchronous webhooks:

```python
# before
webhook = discord.Webhook.partial(123456, 'token-here', adapter=discord.RequestsWebhookAdapter())
webhook.send('Hello World', username='Foo')

# after
webhook = discord.SyncWebhook.partial(123456, 'token-here')
webhook.send('Hello World', username='Foo')
```

The following breaking changes have been made:

- Synchronous functionality of `Webhook` and `WebhookMessage` has been split to
- **Class:** `SyncWebhook` and `SyncWebhookMessage`.
- `WebhookAdapter` class has been removed and the interfaces based on it (`AsyncWebhookAdapter`
  and `RequestsWebhookAdapter`) are now considered implementation detail and should not be depended on.
- `execute` alias for `Webhook.send`/`SyncWebhook.send` has been removed.

## Asset Redesign and Changes

The `Asset` object now encompasses all of the methods and attributes related to a CDN asset.

This means that all models with asset-related attribute and methods have been transformed to use this new design.
As an example, here's how these changes look for `Guild.icon` (of `Asset` type):

- `Guild.icon` (of `str` type) has been replaced with `Guild.icon.key`.
- `Guild.is_icon_animated` has been replaced with `Guild.icon.is_animated`.
- `Guild.icon_url` has been replaced with `Guild.icon`.
- `Guild.icon_url_as` has been replaced with `Guild.icon.replace`.

  - Helper methods `Asset.with_size`, `Asset.with_format`, and `Asset.with_static_format` have also been added.

In addition to this, `Emoji` and `PartialEmoji` now also share an interface similar to `Asset`'s:

- `Emoji.url` is now of `str` type.

- `Emoji.url_as` has been removed.

- `Emoji.url.read` has been replaced with `Emoji.read`.

- `Emoji.url.save` has been replaced with `Emoji.save`.

- **Class:** `Asset` now always represent an actually existing CDN asset. This means that:

- `str(x)` on an `Asset` can no longer return an empty string.

- `bool(x)` on an `Asset` can no longer return `False`.

- Attributes containing an optional `Asset` can now be `None`.

The following were affected by this change:

- `AppInfo.cover_image`

  - `AppInfo.cover_image` (replaced by `AppInfo.cover_image.key`)

  - `AppInfo.cover_image_url` (replaced by `AppInfo.cover_image`)

    - The new attribute may now be `None`.

  - `AppInfo.cover_image_url_as` (replaced by `AppInfo.cover_image.replace`)

- `AppInfo.icon`

  - `AppInfo.icon` (replaced by `AppInfo.icon.key`)

  - `AppInfo.icon_url` (replaced by `AppInfo.icon`)

    - The new attribute may now be `None`.

  - `AppInfo.icon_url_as` (replaced by `AppInfo.icon.replace`)

- `AuditLogDiff`

  - `AuditLogDiff.avatar` is now of `Asset` type.
  - `AuditLogDiff.icon` is now of `Asset` type.
  - `AuditLogDiff.splash` is now of `Asset` type.

- `Emoji.url`

  - `Emoji.url` is now of `str` type.
  - `Emoji.url_as` has been removed.
  - `Emoji.url.read` (replaced by `Emoji.read`)
  - `Emoji.url.save` (replaced by `Emoji.save`)

- `GroupChannel.icon`

  - `GroupChannel.icon` (replaced by `GroupChannel.icon.key`)

  - `GroupChannel.icon_url` (replaced by `GroupChannel.icon`)

    - The new attribute may now be `None`.

  - `GroupChannel.icon_url_as` (replaced by `GroupChannel.icon.replace`)

- `Guild.banner`

  - `Guild.banner` (replaced by `Guild.banner.key`)

  - `Guild.banner_url` (replaced by `Guild.banner`)

    - The new attribute may now be `None`.

  - `Guild.banner_url_as` (replaced by `Guild.banner.replace`)

- `Guild.discovery_splash`

  - `Guild.discovery_splash` (replaced by `Guild.discovery_splash.key`)

  - `Guild.discovery_splash_url` (replaced by `Guild.discovery_splash`)

    - The new attribute may now be `None`.

  - `Guild.discovery_splash_url_as` (replaced by `Guild.discovery_splash.replace`)

- `Guild.icon`

  - `Guild.icon` (replaced by `Guild.icon.key`)

  - `Guild.is_icon_animated` (replaced by `Guild.icon.is_animated`)

  - `Guild.icon_url` (replaced by `Guild.icon`)

    - The new attribute may now be `None`.

  - `Guild.icon_url_as` (replaced by `Guild.icon.replace`)

- `Guild.splash`

  - `Guild.splash` (replaced by `Guild.splash.key`)

  - `Guild.splash_url` (replaced by `Guild.splash`)

    - The new attribute may now be `None`.

  - `Guild.splash_url_as` (replaced by `Guild.splash.replace`)

- `Member.avatar`

  - `Member.avatar` (replaced by `Member.avatar.key`)

  - `Member.is_avatar_animated` (replaced by `Member.avatar.is_animated`)

  - `Member.avatar_url` (replaced by `Member.avatar`)

    - The new attribute may now be `None`.

  - `Member.avatar_url_as` (replaced by `Member.avatar.replace`)

- `Member.default_avatar`

  - `Member.default_avatar` (replaced by `Member.default_avatar.key`)
  - `Member.default_avatar_url` (replaced by `Member.default_avatar`)
  - `Member.default_avatar_url_as` (replaced by `Member.default_avatar.replace`)

- `PartialEmoji.url`

  - `PartialEmoji.url` is now of `str` type.
  - `PartialEmoji.url_as` has been removed.
  - `PartialEmoji.url.read` (replaced by `PartialEmoji.read`)
  - `PartialEmoji.url.save` (replaced by `PartialEmoji.save`)

- `PartialInviteGuild.banner`

  - `PartialInviteGuild.banner` (replaced by `PartialInviteGuild.banner.key`)

  - `PartialInviteGuild.banner_url` (replaced by `PartialInviteGuild.banner`)

    - The new attribute may now be `None`.

  - `PartialInviteGuild.banner_url_as` (replaced by `PartialInviteGuild.banner.replace`)

- `PartialInviteGuild.icon`

  - `PartialInviteGuild.icon` (replaced by `PartialInviteGuild.icon.key`)

  - `PartialInviteGuild.is_icon_animated` (replaced by `PartialInviteGuild.icon.is_animated`)

  - `PartialInviteGuild.icon_url` (replaced by `PartialInviteGuild.icon`)

    - The new attribute may now be `None`.

  - `PartialInviteGuild.icon_url_as` (replaced by `PartialInviteGuild.icon.replace`)

- `PartialInviteGuild.splash`

  - `PartialInviteGuild.splash` (replaced by `PartialInviteGuild.splash.key`)

  - `PartialInviteGuild.splash_url` (replaced by `PartialInviteGuild.splash`)

    - The new attribute may now be `None`.

  - `PartialInviteGuild.splash_url_as` (replaced by `PartialInviteGuild.splash.replace`)

- `Team.icon`

  - `Team.icon` (replaced by `Team.icon.key`)

  - `Team.icon_url` (replaced by `Team.icon`)

    - The new attribute may now be `None`.

  - `Team.icon_url_as` (replaced by `Team.icon.replace`)

- `User.avatar`

  - `User.avatar` (replaced by `User.avatar.key`)

  - `User.is_avatar_animated` (replaced by `User.avatar.is_animated`)

  - `User.avatar_url` (replaced by `User.avatar`)

    - The new attribute may now be `None`.

  - `User.avatar_url_as` (replaced by `User.avatar.replace`)

- `User.default_avatar`

  - `User.default_avatar` (replaced by `User.default_avatar.key`)
  - `User.default_avatar_url` (replaced by `User.default_avatar`)
  - `User.default_avatar_url_as` (replaced by `User.default_avatar.replace`)

- `Webhook.avatar`

  - `Webhook.avatar` (replaced by `Webhook.avatar.key`)

  - `Webhook.avatar_url` (replaced by `Webhook.avatar`)

    - The new attribute may now be `None`.

  - `Webhook.avatar_url_as` (replaced by `Webhook.avatar.replace`)

<a id="migrating-2-0-thread-support"></a>

## Thread Support

v2.0 has been updated to use a newer API gateway version which supports threads and as a result of this had to make few breaking changes. Most notably messages sent in guilds can, in addition to a `TextChannel`, be sent in a `Thread`.

The main differences between text channels and threads are:

- Threads do not have their own permissions, they inherit the permissions of their parent channel.

  - This means that threads do not have these attributes:

    - `changed_roles`
    - `overwrites`
    - `permissions_synced`

> **Note**
> Text channels have a few dedicated permissions for threads:
>
> - `Permissions.manage_threads`
> - `Permissions.create_public_threads`
> - `Permissions.create_private_threads`
> - `Permissions.send_messages_in_threads`

- Threads do not have their own NSFW status, they inherit it from their parent channel.

  - This means that `Thread` does not have an `nsfw` attribute.

- Threads do not have their own topic.

  - This means that `Thread` does not have a `topic` attribute.

- Threads do not have their own position in the channel list.

  - This means that `Thread` does not have a `position` attribute.

- `Thread.created_at` of threads created before 10 January 2022 is `None`.

- `Thread.members` is of type List\[`ThreadMember`] rather than List\[`Member`]

  - Most of the time, this data is not provided and a call to `Thread.fetch_members` is needed.

For convenience, `Thread` has a set of properties and methods that return the information about the parent channel:

- `Thread.category`
- `Thread.category_id`
- `Thread.is_news`
- `Thread.is_nsfw`
- `Thread.permissions_for`

  - Note that this outputs the permissions of the parent channel and you might need to check for different permissions
    when trying to determine if a member can do something.

    Here are some notable examples:

    - A guild member can send messages in a text channel if they have `Permissions.send_messages` permission in it.

      A guild member can send messages in a public thread if:
      \- They have `Permissions.send_messages_in_threads` permission in its parent channel.
      \- The thread is not `Thread.locked`.

      A guild member can send messages in a private thread if:
      \- They have `Permissions.send_messages_in_threads` permission in its parent channel.
      \- They're either already a member of the thread
      or have a `Permissions.manage_threads` permission in its parent channel.
      \- The thread is not `Thread.locked`.

    - A guild member can edit a text channel if they have `Permissions.manage_channels` permission in it.

      A guild member can edit a thread if they have `Permissions.manage_threads` permission in its parent channel.

> **Note**
> A thread's `Thread.owner` can archive a (not-locked) thread and edit its `Thread.name`
> and `Thread.auto_archive_duration` without `Permissions.manage_threads` permission.

```
  - A guild member can react with an emoji to messages in a text channel if:
        - They have `Permissions.read_message_history` permission in it.
        - They have `Permissions.add_reactions` permission in it or the message already has that emoji reaction.

    A guild member can react with an emoji to messages in a public thread if:
        - They have `Permissions.read_message_history` permission in its parent channel.
        - They have `Permissions.add_reactions` permission in its parent channel or the message already has that emoji reaction.
        - The thread is not `Thread.archived`. Note that the guild member can unarchive a thread
          (if it's not `Thread.locked`) to react to a message.

    A guild member can react with an emoji to messages in a private thread if:
        - They have `Permissions.read_message_history` permission in its parent channel.
        - They have `Permissions.add_reactions` permission in its parent channel or the message already has that emoji reaction.
        - They're either already a member of the thread
          or have a `Permissions.manage_threads` permission in its parent channel.
        - The thread is not `Thread.archived`. Note that the guild member can unarchive a thread
          (if it's not `Thread.locked`) to react to a message.
```

The following changes have been made:

- `Message.channel` may now be a `Thread`.

- `Message.channel_mentions` list may now contain a `Thread`.

- `AuditLogEntry.target` may now be a `Thread`.

- `PartialMessage.channel` may now be a `Thread`.

- `Guild.get_channel` does not return `Thread`\s.

  - If you're looking to get a channel or thread, use `Guild.get_channel_or_thread` instead.
  - If you're only looking to get threads, use `Guild.get_thread` or `TextChannel.get_thread` instead.

- `channel` parameter in `on_guild_channel_pins_update` may now be a `Thread`.

- `channel` parameter in `on_typing` may now be a `Thread`.

- `Client.fetch_channel` may now return `Thread`.

- `Client.get_channel` may now return `Thread`.

- `Guild.fetch_channel` may now return `Thread`.

## Removing In-Place Edits

Most of the model methods that previously edited the model in-place have been updated to no longer do this.
Instead, these methods will now return a new instance of the newly updated model.
This has been done to avoid the library running into race conditions between in-place edits and gateway events on model updates. See [GH-4098](https://github.com/Rapptz/discord.py/issues/4098) for more information.

Quick example:

```python
# before
await member.edit(nick='new nick')
await member.send(f'Your new nick is {member.nick}')

# after
updated_member = await member.edit(nick='new nick')
await member.send(f'Your new nick is {updated_member.nick}')
```

The following have been changed:

- `CategoryChannel.edit`

  - Note that this method will return `None` instead of `CategoryChannel` if the edit was only positional.

- `Member.edit`

  - Note that this method only returns the updated `Member` when certain fields are updated.

- `StageChannel.edit`

  - Note that this method will return `None` instead of `StageChannel` if the edit was only positional.

- `TextChannel.edit`

  - Note that this method will return `None` instead of `TextChannel` if the edit was only positional.

- `VoiceChannel.edit`

  - Note that this method will return `None` instead of `VoiceChannel` if the edit was only positional.

- `ClientUser.edit`

- `Emoji.edit`

- `Guild.edit`

- `Message.edit`

- `Role.edit`

- `Template.edit`

- `Template.sync`

- `Webhook.edit`

- `Webhook.edit_message`

- `WebhookMessage.edit`

## Sticker Changes

Discord has changed how their stickers work and as such, sticker support has been reworked.

The following breaking changes have been made:

- Type of `Message.stickers` changed to List\[`StickerItem`].

  - To get the `Sticker` from `StickerItem`, use `StickerItem.fetch`
    or (only for stickers from guilds the bot is in) `Client.get_sticker`.

- `Sticker.format` is now of `StickerFormatType` type.

- `Sticker.tags` has been removed.

  - Depending on type of the sticker, `StandardSticker.tags` or `GuildSticker.emoji` can be used instead.

- `Sticker.image` and related methods have been removed.

- `Sticker.preview_image` and related methods have been removed.

- `AuditLogDiff.type` is now of Union\[`ChannelType`, `StickerType`] type.

- The old `StickerType` enum has been renamed to `StickerFormatType`.

  - `StickerType` now refers to a sticker type (official sticker vs guild-uploaded sticker) rather than its format type.

## Integrations Changes

To support the new integration types, integration support has been reworked.

The following breaking changes have been made:

- The old `Integration` class has been renamed to `StreamIntegration`.
- `Guild.integrations` now returns subclasses of the new `Integration` class.

## Presence Updates Now Have A Separate Event

Presence updates (changes in member's status and activity) now have a separate `on_presence_update` event.

- **Func:** `on_member_update` event is now only called on member updates (changes in nickname, role, pending status, etc.).

From API perspective, these are separate events and as such, this change improves library's consistency with the API.
Presence updates usually are 90% of all handled events so splitting these should benefit listeners that were only interested
in member updates.

Quick example:

```python
# before
@client.event
async def on_member_update(self, before, after):
    if before.nick != after.nick:
        await nick_changed(before, after)
    if before.status != after.status:
        await status_changed(before, after)

# after
@client.event
async def on_member_update(self, before, after):
    if before.nick != after.nick:
        await nick_changed(before, after)

@client.event
async def on_presence_update(self, before, after):
    if before.status != after.status:
        await status_changed(before, after)
```

## Moving Away From Custom AsyncIterator

Asynchronous iterators in v1.0 were implemented using a special class named `AsyncIterator`.
v2.0 instead provides regular asynchronous iterators with no added utility methods.

This means that usage of the following utility methods is no longer possible:

- `AsyncIterator.next()`

  Usage of an explicit `async for` loop should generally be preferred:

```python
# before
it = channel.history()
while True:
    try:
        message = await self.next()
    except discord.NoMoreItems:
        break
    print(f'Found message with ID {message.id}')

# after
async for message in channel.history():
    print(f'Found message with ID {message.id}')
```

```
If you need to get next item from an iterator without a loop,
you can use `anext` (new in Python 3.10) or `object.__anext__` instead:
```

```python
# before
it = channel.history()
first = await it.next()
if first.content == 'do not iterate':
    return
async for message in it:
    ...

# after
it = channel.history()
first = await anext(it)  # await it.__anext__() on Python<3.10
if first.content == 'do not iterate':
    return
async for message in it:
    ...
```

- `AsyncIterator.get()`

```python
# before
msg = await channel.history().get(author__name='Dave')

# after
msg = await discord.utils.get(channel.history(), author__name='Dave')
```

- `AsyncIterator.find()`

```python
def predicate(event):
    return event.reason is not None

# before
event = await guild.audit_logs().find(predicate)

# after
event = await discord.utils.find(predicate, guild.audit_logs())
```

- `AsyncIterator.flatten()`

```python
# before
users = await reaction.users().flatten()

# after
users = [user async for user in reaction.users()]
```

- `AsyncIterator.chunk()`

```python
# before
async for leader, *users in reaction.users().chunk(3):
    ...

# after
async for leader, *users in discord.utils.as_chunks(reaction.users(), 3):
    ...
```

- `AsyncIterator.map()`

```python
# before
content_of_messages = []
async for content in channel.history().map(lambda m: m.content):
    content_of_messages.append(content)

# after
content_of_messages = [message.content async for message in channel.history()]
```

- `AsyncIterator.filter()`

```python
def predicate(message):
    return not message.author.bot

# before
user_messages = []
async for message in channel.history().filter(lambda m: not m.author.bot):
    user_messages.append(message)

# after
user_messages = [message async for message in channel.history() if not m.author.bot]
```

To ease this transition, these changes have been made:

- Added `utils.as_chunks` as an alternative for `AsyncIter.chunk`.
- Added support for `asynchronous iterator` to `utils.find`.
- Added support for `asynchronous iterator` to `utils.get`.

The return type of the following methods has been changed to an `asynchronous iterator`:

- `abc.Messageable.history`
- `Client.fetch_guilds`
- `Guild.audit_logs`
- `Guild.fetch_members`
- `Reaction.users`

The `NoMoreItems` exception was removed as calling `anext` or `object.__anext__` on an

- **Term:** `asynchronous iterator` will now raise `StopAsyncIteration`.

## Changing certain lists to be lazy sequences instead

In order to improve performance when calculating the length of certain lists, certain attributes were changed to return a sequence rather than a `list`.

A sequence is similar to a `list` except it is read-only. In order to get a list again you can call `list` on the resulting sequence.

The following properties were changed to return a sequence instead of a list:

- `Client.guilds`
- `Client.emojis`
- `Client.private_channels`
- `Guild.roles`
- `Guild.channels`
- `Guild.members`

This change should be transparent, unless you are modifying the sequence by doing things such as `list.append`.

## Embed Changes

Originally, embeds used a special sentinel to denote emptiness or remove an attribute from display. The `Embed.Empty` sentinel was made when Discord's embed design was in a nebulous state of flux. Since then, the embed design has stabilised and thus the sentinel is seen as legacy.

Therefore, `Embed.Empty` has been removed in favour of `None`.

Additionally, `Embed.__eq__` has been implemented thus embeds becoming unhashable (e.g. using them in sets or dict keys).

```python
# before
embed = discord.Embed(title='foo')
embed.title = discord.Embed.Empty
embed == embed.copy() # False

# after
embed = discord.Embed(title='foo')
embed.title = None
embed == embed.copy() # True
{embed, embed} # Raises TypeError
```

## Removal of `InvalidArgument` Exception

The custom `InvalidArgument` exception has been removed and functions and methods that
raised it are now raising `TypeError` and/or `ValueError` instead.

The following methods have been changed:

- `Message.add_reaction`
- `AutoShardedClient.change_presence`
- `Client.change_presence`
- `Reaction.clear`
- `Message.clear_reaction`
- `Guild.create_category`
- `Guild.create_custom_emoji`
- `Client.create_guild`
- `Template.create_guild`
- `StageChannel.create_instance`
- `Guild.create_role`
- `Guild.create_stage_channel`
- `Guild.create_text_channel`
- `Guild.create_voice_channel`
- `TextChannel.create_webhook`
- `Webhook.delete`
- `WebhookMessage.delete`
- `Webhook.delete_message`
- `CategoryChannel.edit`
- `ClientUser.edit`
- `Guild.edit`
- `Message.edit`
- `Role.edit`
- `StageChannel.edit`
- `StageInstance.edit`
- `StreamIntegration.edit`
- `TextChannel.edit`
- `VoiceChannel.edit`
- `Webhook.edit`
- `WebhookMessage.edit`
- `Webhook.edit_message`
- `Guild.edit_role_positions`
- `Guild.estimate_pruned_members`
- `TextChannel.follow`
- `Webhook.from_url`
- `abc.GuildChannel.move`
- `Guild.prune_members`
- `Message.remove_reaction`
- `Message.reply`
- `abc.Messageable.send`
- `Webhook.send`
- `abc.GuildChannel.set_permissions`

## Logging Changes

The library now provides a default logging configuration if using `Client.run`. To disable it, pass `None` to the `log_handler` keyword parameter. Since the library now provides a default logging configuration, certain methods were changed to no longer print to `sys.stderr` but use the logger instead:

- `Client.on_error`
- `discord.ext.tasks.Loop.error`
- `discord.ext.commands.Bot.on_command_error`
- `VoiceClient.play`

For more information, check [logging](https://discordpy.readthedocs.io/logging.html).

## Text in Voice

In order to support text in voice functionality, a few changes had to be made:

- `VoiceChannel` is now `abc.Messageable` so it can have messages sent and received.
- `Message.channel` can now be `VoiceChannel`.

In the future this may include `StageChannel` when Discord implements it.

## Removal of `StoreChannel`

Discord's API has removed store channels as of [March 10th, 2022](https://support-dev.discord.com/hc/en-us/articles/6309018858647). Therefore, the library has removed support for it as well.

This removes the following:

- `StoreChannel`
- `commands.StoreChannelConverter`
- `ChannelType.store`

## Change in `Guild.bans` endpoint

Due to a breaking API change by Discord, `Guild.bans` no longer returns a list of every ban in the guild but instead is paginated using an asynchronous iterator.

```python3
# before

bans = await guild.bans()

# after
async for ban in guild.bans(limit=1000):
    ...
```

## Flag classes now have a custom `bool()` implementation

To allow library users to easily check whether an instance of a flag class has any flags enabled,
using `bool` on them will now only return `True` if at least one flag is enabled.

This means that evaluating instances of the following classes in a bool context (such as `if obj:`) may no longer return `True`:

- `Intents`
- `MemberCacheFlags`
- `MessageFlags`
- `Permissions`
- `PublicUserFlags`
- `SystemChannelFlags`

## Function Signature Changes

Parameters in the following methods are now all positional-only:

- `AutoShardedClient.get_shard`
- `Client.get_channel`
- `Client.fetch_channel`
- `Guild.get_channel`
- `Guild.fetch_channel`
- `Client.get_emoji`
- `Guild.fetch_emoji`
- `Client.get_guild`
- `Client.fetch_guild`
- `Client.delete_invite`
- `Guild.get_member`
- `Guild.get_member_named`
- `Guild.fetch_member`
- `Client.get_user`
- `Client.fetch_user`
- `Guild.get_role`
- `Client.fetch_webhook`
- `Client.fetch_widget`
- `Message.add_reaction`
- `Client.on_error`
- `abc.Messageable.fetch_message`
- `abc.GuildChannel.permissions_for`
- `DMChannel.get_partial_message`
- `TextChannel.get_partial_message`
- `TextChannel.delete_messages`
- `Webhook.delete_message`
- `utils.find`
- `utils.snowflake_time`

The following parameters are now positional-only:

- `iterable` in `utils.get`
- `event_method` in `Client.on_error`
- `event` in `Client.wait_for`
- `dt` in `utils.time_snowflake`

The following are now keyword-only:

- Parameters in `Reaction.users`
- Parameters in `Client.create_guild`
- `permissions`, `guild`, `redirect_uri`, and `scopes` parameters in `utils.oauth_url`
- `high` in `utils.snowflake_time`

The library now less often uses `None` as the default value for function/method parameters.

As a result, these parameters can no longer be `None`:

- `size`, `format`, and `static_format` in `Asset.replace`
- `check` in `TextChannel.purge`
- `icon` and `code` in `Client.create_guild`
- `roles` in `Emoji.edit`
- `topic`, `position` and `overwrites` in `Guild.create_text_channel`
- `position` and `overwrites` in `Guild.create_voice_channel`
- `topic`, `position` and `overwrites` in `Guild.create_stage_channel`
- `position` and `overwrites` in `Guild.create_category`
- `roles` in `Guild.prune_members`
- `roles` in `Guild.estimate_pruned_members`
- `description` in `Guild.create_template`
- `roles` in `Guild.create_custom_emoji`
- `before`, `after`, `oldest_first`, `user`, and `action` in `Guild.audit_logs`
- `enable_emoticons` in `StreamIntegration.edit`
- `mute`, `deafen`, `suppress`, and `roles` in `Member.edit`
- `position` in `Role.edit`
- `icon` in `Template.create_guild`
- `name` in `Template.edit`
- `permissions`, `guild`, `redirect_uri`, `scopes` in `utils.oauth_url`
- `content`, `username`, `avatar_url`, `tts`, `file`, `files`, `embed`, `embeds`, and `allowed_mentions` in `Webhook.send`

Allowed types for the following parameters have been changed:

- `rtc_region` in `Guild.create_voice_channel` is now of type Optional\[`str`].
- `rtc_region` in `StageChannel.edit` is now of type Optional\[`str`].
- `rtc_region` in `VoiceChannel.edit` is now of type Optional\[`str`].
- `preferred_locale` in `Guild.edit` is now of type `Locale`.

## Attribute Type Changes

The following changes have been made:

- `DMChannel.recipient` may now be `None`.

- `Guild.vanity_invite` may now be `None`. This has been done to fix an issue with the method returning a broken `Invite` object.

- `Widget.fetch_invite` may now be `None`.

- `Guild.shard_id` is now `0` instead of `None` if `AutoShardedClient` is not used.

- `Guild.mfa_level` is now of type `MFALevel`.

- `Guild.member_count` is now of type Optional\[`int`].

- `AuditLogDiff.mfa_level` is now of type `MFALevel`.

- `AuditLogDiff.rtc_region` is now of type `str`.

- `StageChannel.rtc_region` is now of type `str`.

- `VoiceChannel.rtc_region` is now of type `str`.

- `ClientUser.avatar` is now `None` when the default avatar is used.

  - If you want the avatar that a user has displayed, consider `ClientUser.display_avatar`.

- `Member.avatar` is now `None` when the default avatar is used.

  - If you want the avatar that a member or user has displayed,
    consider `Member.display_avatar` or `User.display_avatar`.

- `User.avatar` is now `None` when the default avatar is used.

  - If you want the avatar that a user has displayed, consider `User.display_avatar`.

- `Webhook.avatar` is now `None` when the default avatar is used.

  - If you want the avatar that a webhook has displayed, consider `Webhook.display_avatar`.

- `AuditLogEntry.target` may now be a `PartialMessageable`.

- `PartialMessage.channel` may now be a `PartialMessageable`.

- `Guild.preferred_locale` is now of type `Locale`.

- `abc.GuildChannel.overwrites` keys can now have `Object` in them.

## Removals

The following deprecated functionality have been removed:

- `Client.request_offline_members`

  - Use `Guild.chunk` instead.

- `AutoShardedClient.request_offline_members`

  - Use `Guild.chunk` instead.

- `Client.logout`

  - Use `Client.close` instead.

- `fetch_offline_members` parameter from `Client` constructor

  - Use `chunk_guild_at_startup` instead.

- `Permissions.use_slash_commands` and `PermissionOverwrite.use_slash_commands`
  - Use `Permissions.use_application_commands` and `PermissionOverwrite.use_application_commands` instead.

The following have been removed:

- `MemberCacheFlags.online`

  - There is no replacement for this one. The current API version no longer provides enough data for this to be possible.

- `AppInfo.summary`

  - There is no replacement for this one. The current API version no longer provides this field.

- `User.permissions_in` and `Member.permissions_in`

  - Use `abc.GuildChannel.permissions_for` instead.

- `guild_subscriptions` parameter from `Client` constructor

  - The current API version no longer provides this functionality. Use `intents` parameter instead.

- `VerificationLevel` aliases:

  - `VerificationLevel.table_flip` - use `VerificationLevel.high` instead.
  - `VerificationLevel.extreme` - use `VerificationLevel.highest` instead.
  - `VerificationLevel.double_table_flip` - use `VerificationLevel.highest` instead.
  - `VerificationLevel.very_high` - use `VerificationLevel.highest` instead.

- `topic` parameter from `StageChannel.edit`

  - The `topic` parameter must now be set via `StageChannel.create_instance`.

- `Reaction.custom_emoji`

  - Use `Reaction.is_custom_emoji` instead.

- `AuditLogDiff.region`

- `Guild.region`

- `VoiceRegion`

  - This has been marked deprecated by Discord and it was usually more or less out of date due to the pace they added them anyway.

- `region` parameter from `Client.create_guild`

- `region` parameter from `Template.create_guild`

- `region` parameter from `Guild.edit`

- `on_private_channel_create` event

  - Discord API no longer sends channel create event for DMs.

- `on_private_channel_delete` event

  - Discord API no longer sends channel create event for DMs.

- The undocumented private `on_socket_response` event

  - Consider using the newer documented `on_socket_event_type` event instead.

- `abc.Messageable.trigger_typing`

  - Use `abc.Messageable.typing` with `await` instead.

## Miscellaneous Changes

The following changes have been made:

- `on_socket_raw_receive` is now only called if `enable_debug_events` is set on `Client`.
- `on_socket_raw_receive` is now only called once the **complete** message is received and decompressed. The passed `msg` parameter is now always `str`.
- `on_socket_raw_send` is now only called if `enable_debug_events` is set on `Client`.
- The documented return type for `Guild.fetch_channels` changed to Sequence\[`abc.GuildChannel`].
- `utils.resolve_invite` now returns a `ResolvedInvite` class.
- `utils.oauth_url` now defaults to `bot` and `applications.commands` scopes when not given instead of just `bot`.
- `abc.Messageable.typing` can no longer be used as a regular (non-async) context manager.
- `Intents.emojis` is now an alias of `Intents.emojis_and_stickers`.

  This may affect code that iterates through `(name, value)` pairs in an instance of this class:

```python
# before
friendly_names = {
    ...,
    'emojis': 'Emojis Intent',
    ...,
}
for name, value in discord.Intents.all():
    print(f'{friendly_names[name]}: {value}')

# after
friendly_names = {
    ...,
    'emojis_and_stickers': 'Emojis Intent',
    ...,
}
for name, value in discord.Intents.all():
    print(f'{friendly_names[name]}: {value}')
```

- `created_at` is no longer part of `abc.Snowflake`.

  All of the existing classes still keep this attribute. It is just no longer part of this protocol.
  This has been done because Discord reuses IDs (snowflakes) of some models in other models.
  For example, if `Thread` is created from a message, its `Thread.id` is equivalent to the ID of that message
  and as such it doesn't contain information about creation time of the thread and `Thread.created_at` cannot be based on it.

- `Embed`'s bool implementation now returns `True` when embed has any data set.

- Calling `Emoji.edit` without `roles` argument no longer makes the emoji available to everyone.

  - To make the emoji available to everyone, pass an empty list to `roles` instead.

- The old `Colour.blurple` has been renamed to `Colour.og_blurple`.

  - `Colour.blurple` refers to a different colour now.

- `Message.type` is now set to `MessageType.reply` when a message is a reply.

  - This is caused by a difference in behavior in the current Discord API version.

- `Message.edit` now merges object passed in `allowed_mentions` parameter with `Client.allowed_mentions`.
  If the parameter isn't provided, the defaults given by `Client.allowed_mentions` are used instead.

- `Permissions.stage_moderator` now includes the `Permissions.manage_channels` permission and the `Permissions.request_to_speak` permission is no longer included.

- `File.filename` will no longer be `None`, in situations where previously this was the case the filename is set to `'untitled'`.

- `Message.application` will no longer be a raw `dict` of the API payload and now returns an instance of `MessageApplication`.

## `VoiceProtocol.connect` signature changes.

- **Meth:** `VoiceProtocol.connect` will now be passed 2 keyword only arguments, `self_deaf` and `self_mute`. These indicate
  whether or not the client should join the voice chat being deafened or muted.

<a id="migrating-2-0-commands"></a>

## Command Extension Changes

<a id="migrating-2-0-commands-extension-cog-async"></a>

### Extension and Cog Loading / Unloading is Now Asynchronous

As an extension to the [asyncio changes](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-client-async-setup) the loading and unloading of extensions and cogs is now asynchronous.

To accommodate this, the following changes have been made:

- The `setup` and `teardown` functions in extensions must now be coroutines.
- `ext.commands.Bot.load_extension` must now be awaited.
- `ext.commands.Bot.unload_extension` must now be awaited.
- `ext.commands.Bot.reload_extension` must now be awaited.
- `ext.commands.Bot.add_cog` must now be awaited.
- `ext.commands.Bot.remove_cog` must now be awaited.

Quick example of an extension setup function:

```python
# before
def setup(bot):
    bot.add_cog(MyCog(bot))

# after
async def setup(bot):
    await bot.add_cog(MyCog(bot))
```

Quick example of loading an extension:

```python
# before
bot.load_extension('my_extension')

# after using setup_hook
class MyBot(commands.Bot):
    async def setup_hook(self):
        await self.load_extension('my_extension')

# after using async_with
async def main():
    async with bot:
        await bot.load_extension('my_extension')
        await bot.start(TOKEN)

asyncio.run(main())
```

### Converters Are Now Generic Runtime Protocols

- **Class:** `~ext.commands.Converter` is now a `runtime-checkable` `typing.Protocol`.

This results in a change of the base metaclass used by these classes
which may affect user-created classes that inherit from `ext.commands.Converter`.

Quick example:

```python
# before
class SomeConverterMeta(type):
    ...

class SomeConverter(commands.Converter, metaclass=SomeConverterMeta):
    ...

# after
class SomeConverterMeta(type(commands.Converter)):
    ...

class SomeConverter(commands.Converter, metaclass=SomeConverterMeta):
    ...
```

In addition, `ext.commands.Converter` is now a `typing.Generic` which (optionally) allows the users to
define their type hints more accurately.

### Function Signature Changes

Parameters in the following methods are now all positional-only:

- `ext.commands.when_mentioned`
- `ext.commands.Bot.on_command_error`
- `ext.commands.Bot.check`
- `ext.commands.Bot.check_once`
- `ext.commands.Bot.is_owner`
- `ext.commands.Bot.before_invoke`
- `ext.commands.Bot.after_invoke`
- `ext.commands.Bot.get_prefix`
- `ext.commands.Bot.invoke`
- `ext.commands.Bot.process_commands`
- `ext.commands.Command.is_on_cooldown`
- `ext.commands.Command.reset_cooldown`
- `ext.commands.Command.get_cooldown_retry_after`
- `ext.commands.Command.error`
- `ext.commands.Command.before_invoke`
- `ext.commands.Command.after_invoke`
- `ext.commands.Command.can_run`
- `ext.commands.check`
- `ext.commands.has_role`
- `ext.commands.bot_has_role`
- `ext.commands.before_invoke`
- `ext.commands.after_invoke`
- `ext.commands.HelpCommand.get_command_signature`
- `ext.commands.HelpCommand.remove_mentions`
- `ext.commands.HelpCommand.command_not_found`
- `ext.commands.HelpCommand.subcommand_not_found`
- `ext.commands.HelpCommand.get_max_size`
- `ext.commands.HelpCommand.send_error_message`
- `ext.commands.HelpCommand.on_help_command_error`
- `ext.commands.HelpCommand.send_bot_help`
- `ext.commands.HelpCommand.send_cog_help`
- `ext.commands.HelpCommand.send_group_help`
- `ext.commands.HelpCommand.send_command_help`
- `ext.commands.HelpCommand.prepare_help_command`
- `ext.commands.DefaultHelpCommand.shorten_text`
- `ext.commands.DefaultHelpCommand.add_command_formatting`
- `ext.commands.MinimalHelpCommand.get_command_signature`
- `ext.commands.MinimalHelpCommand.add_bot_commands_formatting`
- `ext.commands.MinimalHelpCommand.add_subcommand_formatting`
- `ext.commands.MinimalHelpCommand.add_aliases_formatting`
- `ext.commands.MinimalHelpCommand.add_command_formatting`

The following parameters are now positional-only:

- `func` in `ext.commands.Bot.check`
- `func` in `ext.commands.Bot.add_check`
- `func` in `ext.commands.Bot.remove_check`
- `func` in `ext.commands.Bot.check_once`
- `func` in `ext.commands.Bot.add_listener`
- `func` in `ext.commands.Bot.remove_listener`
- `message` in `ext.commands.Bot.get_context`
- `func` in `ext.commands.Command.add_check`
- `func` in `ext.commands.Command.remove_check`
- `context` in `ext.commands.Command.__call__`
- `commands` in `ext.commands.HelpCommand.filter_commands`
- `ctx` in `ext.commands.HelpCommand.command_callback`
- `func` in `ext.commands.HelpCommand.add_check`
- `func` in `ext.commands.HelpCommand.remove_check`
- `commands` in `ext.commands.DefaultHelpCommand.add_indented_commands`
- `cog` in `ext.commands.Bot.add_cog`
- `name` in `ext.commands.Bot.get_cog`
- `name` in `ext.commands.Bot.remove_cog`
- `command` in `ext.commands.Context.invoke`
- `command` in `ext.commands.GroupMixin.add_command`
- `name` in `ext.commands.GroupMixin.get_command`
- `name` in `ext.commands.GroupMixin.remove_command`

The following parameters have been removed:

- `self_bot` from `ext.commands.Bot`

  - This has been done due to the [migrating\_2\_0\_userbot\_removal](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-userbot-removal) changes.

The library now less often uses `None` as the default value for function/method parameters.

As a result, these parameters can no longer be `None`:

- `name` in `ext.commands.Bot.add_listener`
- `name` in `ext.commands.Bot.remove_listener`
- `name` in `ext.commands.Bot.listen`
- `name` in `ext.commands.Cog.listener`
- `name` in `ext.commands.Command`
- `name` and `cls` in `ext.commands.command`
- `name` and `cls` in `ext.commands.group`

### Removals

The following attributes have been removed:

- `original` from the `ext.commands.ExtensionNotFound`

- `type` from the `ext.commands.Cooldown` class
  that was provided by the `ext.commands.CommandOnCooldown.cooldown` attribute

  - Use `ext.commands.CommandOnCooldown.type` instead.

- `clean_prefix` from the `ext.commands.HelpCommand`

  - Use `ext.commands.Context.clean_prefix` instead.

### Miscellaneous Changes

- `ext.commands.Bot.add_cog` is now raising `ClientException` when a cog with the same name is already loaded.

  - To override a cog, the new `override` parameter can be used.

- When passing a callable to `type` argument of `ext.commands.cooldown`,
  it now needs to accept `ext.commands.Context` rather than `Message` as its only argument.

- Metaclass of `ext.commands.Context` changed from `abc.ABCMeta` to `type`.

- Changed type of `ext.commands.Command.clean_params` from `collections.OrderedDict` to `dict`.
  As the latter is guaranteed to preserve insertion order since Python 3.7.

- `ext.commands.ChannelNotReadable.argument` may now be a `Thread` due to the [migrating\_2\_0\_thread\_support](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-thread-support) changes.

- `ext.commands.NSFWChannelRequired.channel` may now be a `Thread` due to the [migrating\_2\_0\_thread\_support](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-thread-support) changes.

- `ext.commands.Context.channel` may now be a `Thread` due to the [migrating\_2\_0\_thread\_support](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-thread-support) changes.

- `ext.commands.Context.channel` may now be a `PartialMessageable`.

- `MissingPermissions.missing_perms` has been renamed to `ext.commands.MissingPermissions.missing_permissions`.

- `BotMissingPermissions.missing_perms` has been renamed to `ext.commands.BotMissingPermissions.missing_permissions`.

- `ext.commands.Cog.cog_load` has been added as part of the [migrating\_2\_0\_commands\_extension\_cog\_async](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-commands-extension-cog-async) changes.

- `ext.commands.Cog.cog_unload` may now be a `coroutine` due to the [migrating\_2\_0\_commands\_extension\_cog\_async](https://discordpy.readthedocs.io/migrating.html#migrating-2-0-commands-extension-cog-async) changes.

- `ext.commands.Command.clean_params` type now uses a custom `inspect.Parameter` to handle defaults.

<a id="migrating-2-0-tasks"></a>

## Tasks Extension Changes

- Calling `ext.tasks.Loop.stop` in `ext.tasks.Loop.before_loop` now stops the first iteration from running.
- Calling `ext.tasks.Loop.change_interval` now changes the interval for the sleep time right away,
  rather than on the next loop iteration.
- `loop` parameter in `ext.tasks.loop` can no longer be `None`.

# Migrating to v1.0

The contents of that migration has been moved to [migrating\_1\_0](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0).
