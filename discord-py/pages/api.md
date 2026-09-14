> Pinned source for discord.py v2.7.1: [docs/api.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/api.rst)

# API Reference

The following section outlines the API of discord.py.

> **Note**
> This module uses the Python logging module to log diagnostic and errors
> in an output independent way.  If the logging module is not configured,
> these logs will not be output anywhere.  See [logging\_setup](https://discordpy.readthedocs.io/logging.html#logging-setup) for
> more information on how to set up and use the logging module with
> discord.py.

## Version Related Info

There are two main ways to query version information about the library. For guarantees, check [version\_guarantees](https://discordpy.readthedocs.io/version_guarantees.html#version-guarantees).

<a id="data-version-info"></a>

#### `version_info`

A named tuple that is similar to `py:sys.version_info`.

Just like `py:sys.version_info` the valid values for `releaselevel` are
'alpha', 'beta', 'candidate' and 'final'.

<a id="data-version"></a>

#### `__version__`

A string representation of the version. e.g. `'1.0.0rc1'`. This is based
off of [PEP 440](https://peps.python.org/pep-0440/).

## Clients

### Client

<a id="api-client"></a>

#### `Client`

Represents a client connection that connects to Discord.
This class is used to interact with the Discord WebSocket and API.

<a id="describe-async-with-x"></a>

#### `async with x`

Asynchronously initialises the client and automatically cleans up.

> **Added in version 2.0**

A number of options can be passed to the `Client`.

## Parameters

**max\_messages: Optional\[`int`]**

The maximum number of messages to store in the internal message cache.
This defaults to `1000`. Passing in `None` disables the message cache.

> **Changed in version 1.3**
> Allow disabling the message cache and change the default size to `1000`.

**proxy: Optional\[`str`]**

Proxy URL.

**proxy\_auth: Optional\[`aiohttp.BasicAuth`]**

An object that represents proxy HTTP Basic Authorization.

**shard\_id: Optional\[`int`]**

Integer starting at `0` and less than `.shard_count`.

**shard\_count: Optional\[`int`]**

The total number of shards.

**application\_id: `int`**

The client's application ID.

**intents: `Intents`**

The intents that you want to enable for the session. This is a way of
disabling and enabling certain gateway events from triggering and being sent.

> **Added in version 1.5**

> **Changed in version 2.0**
> Parameter is now required.

**member\_cache\_flags: `MemberCacheFlags`**

Allows for finer control over how the library caches members.
If not given, defaults to cache as much as possible with the
currently selected intents.

> **Added in version 1.5**

**chunk\_guilds\_at\_startup: `bool`**

Indicates if `.on_ready` should be delayed to chunk all guilds
at start-up if necessary. This operation is incredibly slow for large
amounts of guilds. The default is `True` if `Intents.members`
is `True`.

> **Added in version 1.5**

**status: Optional\[`.Status`]**

A status to start your presence with upon logging on to Discord.

**activity: Optional\[`.BaseActivity`]**

An activity to start your presence with upon logging on to Discord.

**allowed\_mentions: Optional\[`AllowedMentions`]**

Control how the client handles mentions by default on every message sent.

> **Added in version 1.4**

**heartbeat\_timeout: `float`**

The maximum numbers of seconds before timing out and restarting the
WebSocket in the case of not receiving a HEARTBEAT\_ACK. Useful if
processing the initial packets take too long to the point of disconnecting
you. The default timeout is 60 seconds.

**guild\_ready\_timeout: `float`**

The maximum number of seconds to wait for the GUILD\_CREATE stream to end before
preparing the member cache and firing READY. The default timeout is 2 seconds.

> **Added in version 1.4**

**assume\_unsync\_clock: `bool`**

Whether to assume the system clock is unsynced. This applies to the ratelimit handling
code. If this is set to `True`, the default, then the library uses the time to reset
a rate limit bucket given by Discord. If this is `False` then your system clock is
used to calculate how long to sleep for. If this is set to `False` it is recommended to
sync your system clock to Google's NTP server.

> **Added in version 1.3**

**enable\_debug\_events: `bool`**

Whether to enable events that are useful only for debugging gateway related information.

Right now this involves `on_socket_raw_receive` and `on_socket_raw_send`. If
this is `False` then those events will not be dispatched (due to performance considerations).
To enable these events, this must be set to `True`. Defaults to `False`.

> **Added in version 2.0**

**enable\_raw\_presences: `bool`**

Whether to manually enable or disable the `on_raw_presence_update` event.

Setting this flag to `True` requires `Intents.presences` to be enabled.

By default, this flag is set to `True` only when `Intents.presences` is enabled and `Intents.members`
is disabled, otherwise it's set to `False`.

> **Added in version 2.5**

**http\_trace: `aiohttp.TraceConfig`**

The trace configuration to use for tracking HTTP requests the library does using `aiohttp`.
This allows you to check requests the library is using. For more information, check the
[aiohttp documentation](https://docs.aiohttp.org/en/stable/client_advanced.html#client-tracing).

> **Added in version 2.0**

**max\_ratelimit\_timeout: Optional\[`float`]**

The maximum number of seconds to wait when a non-global rate limit is encountered.
If a request requires sleeping for more than the seconds passed in, then
`discord.RateLimited` will be raised. By default, there is no timeout limit.
In order to prevent misuse and unnecessary bans, the minimum value this can be
set to is `30.0` seconds.

> **Added in version 2.0**

**connector: Optional\[`aiohttp.BaseConnector`]**

The aiohttp connector to use for this client. This can be used to control underlying aiohttp
behavior, such as setting a dns resolver or sslcontext.

> **Added in version 2.5**

## Attributes

**ws**

The websocket gateway the client is currently connected to. Could be `None`.

<a id="api-client-latency"></a>

##### `latency(self) -> float`

`float`: Measures latency between a HEARTBEAT and a HEARTBEAT\_ACK in seconds.

This could be referred to as the Discord WebSocket protocol latency.

<a id="api-client-is-ws-ratelimited"></a>

##### `is_ws_ratelimited(self) -> bool`

`bool`: Whether the websocket is currently rate limited.

This can be useful to know when deciding whether you should query members
using HTTP or via the gateway.

> **Added in version 1.6**

<a id="api-client-user"></a>

##### `user(self) -> Optional[ClientUser]`

Optional\[`.ClientUser`]: Represents the connected client. `None` if not logged in.

<a id="api-client-guilds"></a>

##### `guilds(self) -> Sequence[Guild]`

Sequence\[`.Guild`]: The guilds that the connected client is a member of.

<a id="api-client-emojis"></a>

##### `emojis(self) -> Sequence[Emoji]`

Sequence\[`.Emoji`]: The emojis that the connected client has.

> **Note**
> This does not include the emojis that are owned by the application.
> Use `.fetch_application_emoji` to get those.

<a id="api-client-stickers"></a>

##### `stickers(self) -> Sequence[GuildSticker]`

Sequence\[`.GuildSticker`]: The stickers that the connected client has.

> **Added in version 2.0**

<a id="api-client-soundboard-sounds"></a>

##### `soundboard_sounds(self) -> List[SoundboardSound]`

List\[`.SoundboardSound`]: The soundboard sounds that the connected client has.

> **Added in version 2.5**

<a id="api-client-cached-messages"></a>

##### `cached_messages(self) -> Sequence[Message]`

Sequence\[`.Message`]: Read-only list of messages the connected client has cached.

> **Added in version 1.1**

<a id="api-client-private-channels"></a>

##### `private_channels(self) -> Sequence[PrivateChannel]`

Sequence\[`.abc.PrivateChannel`]: The private channels that the connected client is participating on.

> **Note**
> This returns only up to 128 most recent private channels due to an internal working
> on how Discord deals with private channels.

<a id="api-client-voice-clients"></a>

##### `voice_clients(self) -> List[VoiceProtocol]`

List\[`.VoiceProtocol`]: Represents a list of voice connections.

These are usually `.VoiceClient` instances.

<a id="api-client-application-id"></a>

##### `application_id(self) -> Optional[int]`

Optional\[`int`]: The client's application ID.

If this is not passed via `__init__` then this is retrieved
through the gateway when an event contains the data or after a call
to `discord.Client.login`. Usually after `discord.on_connect`
is called.

> **Added in version 2.0**

<a id="api-client-application-flags"></a>

##### `application_flags(self) -> ApplicationFlags`

`discord.ApplicationFlags`: The client's application flags.

> **Added in version 2.0**

<a id="api-client-application"></a>

##### `application(self) -> Optional[AppInfo]`

Optional\[`discord.AppInfo`]: The client's application info.

This is retrieved on `discord.Client.login` and is not updated
afterwards. This allows populating the application\_id without requiring a
gateway connection.

This is `None` if accessed before `discord.Client.login` is called.

> **Seealso**

> **Added in version 2.0**

<a id="api-client-is-ready"></a>

##### `is_ready(self) -> bool`

`bool`: Specifies if the client's internal cache is ready for use.

<a id="api-client-on-error"></a>

##### `on_error(self, event_method: str, /, *args: Any, **kwargs: Any) -> None`

*coroutine*

The default error handler provided by the client.

By default this logs to the library logger however it could be
overridden to have a different implementation.
Check `discord.on_error` for more details.

> **Changed in version 2.0**
> `event_method` parameter is now positional-only
> and instead of writing to `sys.stderr` it logs instead.

<a id="api-client-before-identify-hook"></a>

##### `before_identify_hook(self, shard_id: Optional[int], *, initial: bool = False) -> None`

*coroutine*

A hook that is called before IDENTIFYing a session. This is useful
if you wish to have more control over the synchronization of multiple
IDENTIFYing clients.

The default implementation sleeps for 5 seconds.

> **Added in version 1.4**

## Parameters

**shard\_id: `int`**

The shard ID that requested being IDENTIFY'd

**initial: `bool`**

Whether this IDENTIFY is the first initial IDENTIFY.

<a id="api-client-setup-hook"></a>

##### `setup_hook(self) -> None`

*coroutine*

A coroutine to be called to setup the bot, by default this is blank.

To perform asynchronous setup after the bot is logged in but before
it has connected to the Websocket, overwrite this coroutine.

This is only called once, in `login`, and will be called before
any events are dispatched, making it a better solution than doing such
setup in the `discord.on_ready` event.

> **Warning**
> Since this is called *before* the websocket connection is made therefore
> anything that waits for the websocket will deadlock, this includes things
> like `wait_for` and `wait_until_ready`.

> **Added in version 2.0**

<a id="api-client-login"></a>

##### `login(self, token: str) -> None`

*coroutine*

Logs in the client with the specified credentials and
calls the `setup_hook`.

## Parameters

**token: `str`**

The authentication token. Do not prefix this token with
anything as the library will do it for you.

## Raises

**LoginFailure**

The wrong credentials are passed.

**HTTPException**

An unknown HTTP related error occurred,
usually when it isn't 200 or the known incorrect credentials
passing status code.

<a id="api-client-connect"></a>

##### `connect(self, *, reconnect: bool = True) -> None`

*coroutine*

Creates a websocket connection and lets the websocket listen
to messages from Discord. This is a loop that runs the entire
event system and miscellaneous aspects of the library. Control
is not resumed until the WebSocket connection is terminated.

## Parameters

**reconnect: `bool`**

If we should attempt reconnecting, either due to internet
failure or a specific failure on Discord's part. Certain
disconnects that lead to bad state will not be handled (such as
invalid sharding payloads or bad tokens).

## Raises

**GatewayNotFound**

If the gateway to connect to Discord is not found. Usually if this
is thrown then there is a Discord API outage.

**ConnectionClosed**

The websocket connection has been terminated.

<a id="api-client-close"></a>

##### `close(self) -> None`

*coroutine*

Closes the connection to Discord.

<a id="api-client-clear"></a>

##### `clear(self) -> None`

Clears the internal state of the bot.

After this, the bot can be considered "re-opened", i.e. `is_closed`
and `is_ready` both return `False` along with the bot's internal
cache cleared.

<a id="api-client-start"></a>

##### `start(self, token: str, *, reconnect: bool = True) -> None`

*coroutine*

A shorthand coroutine for `login` + `connect`.

## Parameters

**token: `str`**

The authentication token. Do not prefix this token with
anything as the library will do it for you.

**reconnect: `bool`**

If we should attempt reconnecting, either due to internet
failure or a specific failure on Discord's part. Certain
disconnects that lead to bad state will not be handled (such as
invalid sharding payloads or bad tokens).

## Raises

**TypeError**

An unexpected keyword argument was received.

<a id="api-client-run"></a>

##### `run( self, token: str, *, reconnect: bool = True, log_handler: Optional[logging.Handler] = MISSING, log_formatter: logging.Formatter = MISSING, log_level: int = MISSING, root_logger: bool = False,) -> None`

A blocking call that abstracts away the event loop
initialisation from you.

If you want more control over the event loop then this
function should not be used. Use `start` coroutine
or `connect` + `login`.

This function also sets up the logging library to make it easier
for beginners to know what is going on with the library. For more
advanced users, this can be disabled by passing `None` to
the `log_handler` parameter.

> **Warning**
> This function must be the last function to call due to the fact that it
> is blocking. That means that registration of events or anything being
> called after this function call will not execute until it returns.

## Parameters

**token: `str`**

The authentication token. Do not prefix this token with
anything as the library will do it for you.

**reconnect: `bool`**

If we should attempt reconnecting, either due to internet
failure or a specific failure on Discord's part. Certain
disconnects that lead to bad state will not be handled (such as
invalid sharding payloads or bad tokens).

**log\_handler: Optional\[`logging.Handler`]**

The log handler to use for the library's logger. If this is `None`
then the library will not set up anything logging related. Logging
will still work if `None` is passed, though it is your responsibility
to set it up.

The default log handler if not provided is `logging.StreamHandler`.

> **Added in version 2.0**

**log\_formatter: `logging.Formatter`**

The formatter to use with the given log handler. If not provided then it
defaults to a colour based logging formatter (if available).

> **Added in version 2.0**

**log\_level: `int`**

The default log level for the library's logger. This is only applied if the
`log_handler` parameter is not `None`. Defaults to `logging.INFO`.

> **Added in version 2.0**

**root\_logger: `bool`**

Whether to set up the root logger rather than the library logger.
By default, only the library logger (`'discord'`) is set up. If this
is set to `True` then the root logger is set up as well.

Defaults to `False`.

> **Added in version 2.0**

<a id="api-client-is-closed"></a>

##### `is_closed(self) -> bool`

`bool`: Indicates if the websocket connection is closed.

<a id="api-client-activity"></a>

##### `activity(self) -> Optional[ActivityTypes]`

Optional\[`.BaseActivity`]: The activity being used upon
logging in.

<a id="api-client-status"></a>

##### `status(self) -> Status`

`.Status`:
The status being used upon logging on to Discord.

<a id="api-client-allowed-mentions"></a>

##### `allowed_mentions(self) -> Optional[AllowedMentions]`

Optional\[`discord.AllowedMentions`]: The allowed mention configuration.

> **Added in version 1.4**

<a id="api-client-intents"></a>

##### `intents(self) -> Intents`

`discord.Intents`: The intents configured for this connection.

> **Added in version 1.5**

<a id="api-client-users"></a>

##### `users(self) -> List[User]`

List\[`discord.User`]: Returns a list of all the users the bot can see.

<a id="api-client-get-channel"></a>

##### `get_channel(self, id: int, /) -> Optional[Union[GuildChannel, Thread, PrivateChannel]]`

Returns a channel or thread with the given ID.

> **Changed in version 2.0**
> `id` parameter is now positional-only.

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[Union\[`.abc.GuildChannel`, `.Thread`, `.abc.PrivateChannel`]]**

The returned channel or `None` if not found.

<a id="api-client-get-partial-messageable"></a>

##### `get_partial_messageable( self, id: int, *, guild_id: Optional[int] = None, type: Optional[ChannelType] = None) -> PartialMessageable`

Returns a partial messageable with the given channel ID.

This is useful if you have a channel\_id but don't want to do an API call
to send messages to it.

> **Added in version 2.0**

## Parameters

**id: `int`**

The channel ID to create a partial messageable for.

**guild\_id: Optional\[`int`]**

The optional guild ID to create a partial messageable for.

This is not required to actually send messages, but it does allow the
`discord.PartialMessageable.jump_url` and
`discord.PartialMessageable.guild` properties to function properly.

**type: Optional\[`.ChannelType`]**

The underlying channel type for the partial messageable.

## Returns

**`.PartialMessageable`**

The partial messageable

<a id="api-client-get-stage-instance"></a>

##### `get_stage_instance(self, id: int, /) -> Optional[StageInstance]`

Returns a stage instance with the given stage channel ID.

> **Added in version 2.0**

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[`.StageInstance`]**

The stage instance or `None` if not found.

<a id="api-client-get-guild"></a>

##### `get_guild(self, id: int, /) -> Optional[Guild]`

Returns a guild with the given ID.

> **Changed in version 2.0**
> `id` parameter is now positional-only.

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[`.Guild`]**

The guild or `None` if not found.

<a id="api-client-get-user"></a>

##### `get_user(self, id: int, /) -> Optional[User]`

Returns a user with the given ID.

> **Changed in version 2.0**
> `id` parameter is now positional-only.

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[`discord.User`]**

The user or `None` if not found.

<a id="api-client-get-emoji"></a>

##### `get_emoji(self, id: int, /) -> Optional[Emoji]`

Returns an emoji with the given ID.

> **Changed in version 2.0**
> `id` parameter is now positional-only.

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[`.Emoji`]**

The custom emoji or `None` if not found.

<a id="api-client-get-sticker"></a>

##### `get_sticker(self, id: int, /) -> Optional[GuildSticker]`

Returns a guild sticker with the given ID.

> **Added in version 2.0**

> **Note**
> To retrieve standard stickers, use `.fetch_sticker`.
> or `.fetch_premium_sticker_packs`.

## Returns

**Optional\[`.GuildSticker`]**

The sticker or `None` if not found.

<a id="api-client-get-soundboard-sound"></a>

##### `get_soundboard_sound(self, id: int, /) -> Optional[SoundboardSound]`

Returns a soundboard sound with the given ID.

> **Added in version 2.5**

## Parameters

**id: `int`**

The ID to search for.

## Returns

**Optional\[`.SoundboardSound`]**

The soundboard sound or `None` if not found.

<a id="api-client-get-all-channels"></a>

##### `get_all_channels(self) -> Generator[GuildChannel, None, None]`

A generator that retrieves every `.abc.GuildChannel` the client can 'access'.

This is equivalent to: :

```python
for guild in client.guilds:
    for channel in guild.channels:
        yield channel
```

> **Note**
> Just because you receive a `.abc.GuildChannel` does not mean that
> you can communicate in said channel. `.abc.GuildChannel.permissions_for` should
> be used for that.

## Yields

**`.abc.GuildChannel`**

A channel the client can 'access'.

<a id="api-client-get-all-members"></a>

##### `get_all_members(self) -> Generator[Member, None, None]`

Returns a generator with every `.Member` the client can see.

This is equivalent to: :

```python
for guild in client.guilds:
    for member in guild.members:
        yield member
```

## Yields

**`.Member`**

A member the client can see.

<a id="api-client-wait-until-ready"></a>

##### `wait_until_ready(self) -> None`

*coroutine*

Waits until the client's internal cache is all ready.

> **Warning**
> Calling this inside `setup_hook` can lead to a deadlock.

<a id="api-client-wait-for"></a>

##### `wait_for( self, event: str, /, *, check: Optional[Callable[..., bool]] = None, timeout: Optional[float] = None,) -> Coro[Any]`

*coroutine*

Waits for a WebSocket event to be dispatched.

This could be used to wait for a user to reply to a message,
or to react to a message, or to edit a message in a self-contained
way.

The `timeout` parameter is passed onto `asyncio.wait_for`. By default,
it does not timeout. Note that this does propagate the
`asyncio.TimeoutError` for you in case of timeout and is provided for
ease of use.

In case the event returns multiple arguments, a `tuple` containing those
arguments is returned instead. Please check the
[documentation](https://discordpy.readthedocs.io/api.html#discord-api-events) for a list of events and their
parameters.

This function returns the **first event that meets the requirements**.

## Examples

Waiting for a user reply: :

```python
@client.event
async def on_message(message):
    if message.content.startswith('$greet'):
        channel = message.channel
        await channel.send('Say hello!')

        def check(m):
            return m.content == 'hello' and m.channel == channel

        msg = await client.wait_for('message', check=check)
        await channel.send(f'Hello {msg.author}!')
```

Waiting for a thumbs up reaction from the message author: :

```python
@client.event
async def on_message(message):
    if message.content.startswith('$thumb'):
        channel = message.channel
        await channel.send('Send me that \N{THUMBS UP SIGN} reaction, mate')

        def check(reaction, user):
            return user == message.author and str(reaction.emoji) == '\N{THUMBS UP SIGN}'

        try:
            reaction, user = await client.wait_for('reaction_add', timeout=60.0, check=check)
        except asyncio.TimeoutError:
            await channel.send('\N{THUMBS DOWN SIGN}')
        else:
            await channel.send('\N{THUMBS UP SIGN}')
```

> **Changed in version 2.0**
> `event` parameter is now positional-only.

## Parameters

**event: `str`**

The event name, similar to the [event reference](https://discordpy.readthedocs.io/api.html#discord-api-events),
but without the `on_` prefix, to wait for.

**check: Optional\[Callable\[..., `bool`]]**

A predicate to check what to wait for. The arguments must meet the
parameters of the event being waited for.

**timeout: Optional\[`float`]**

The number of seconds to wait before timing out and raising
`asyncio.TimeoutError`.

## Raises

**asyncio.TimeoutError**

If a timeout is provided and it was reached.

## Returns

**Any**

Returns no arguments, a single argument, or a `tuple` of multiple
arguments that mirrors the parameters passed in the
[event reference](https://discordpy.readthedocs.io/api.html#discord-api-events).

<a id="api-client-change-presence"></a>

##### `change_presence( self, *, activity: Optional[BaseActivity] = None, status: Optional[Status] = None,) -> None`

*coroutine*

Changes the client's presence.

## Example

```python3
game = discord.Game("with the API")
await client.change_presence(status=discord.Status.idle, activity=game)
```

> **Changed in version 2.0**
> Removed the `afk` keyword-only parameter.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**activity: Optional\[`.BaseActivity`]**

The activity being done. `None` if no currently active activity is done.

**status: Optional\[`.Status`]**

Indicates what status to change to. If `None`, then
`.Status.online` is used.

## Raises

**TypeError**

If the `activity` parameter is not the proper type.

<a id="api-client-fetch-guilds"></a>

##### `fetch_guilds( self, *, limit: Optional[int] = 200, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, with_counts: bool = True,) -> AsyncIterator[Guild]`

Retrieves an `asynchronous iterator` that enables receiving your guilds.

> **Note**
> Using this, you will only receive `.Guild.owner`, `.Guild.icon`,
> `.Guild.id`, `.Guild.name`, `.Guild.approximate_member_count`,
> and `.Guild.approximate_presence_count` per `.Guild`.

> **Note**
> This method is an API call. For general usage, consider `guilds` instead.

## Examples

Usage :

```python
async for guild in client.fetch_guilds(limit=150):
    print(guild.name)
```

Flattening into a list :

```python
guilds = [guild async for guild in client.fetch_guilds(limit=150)]
# guilds is now a list of Guild...
```

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of guilds to retrieve.
If `None`, it retrieves every guild you have access to. Note, however,
that this would make it a slow operation.
Defaults to `200`.

> **Changed in version 2.0**
> The default has been changed to 200.

**before: Union\[`.abc.Snowflake`, `datetime.datetime`]**

Retrieves guilds before this date or object.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**after: Union\[`.abc.Snowflake`, `datetime.datetime`]**

Retrieve guilds after this date or object.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**with\_counts: `bool`**

Whether to include count information in the guilds. This fills the
`.Guild.approximate_member_count` and `.Guild.approximate_presence_count`
attributes without needing any privileged intents. Defaults to `True`.

> **Added in version 2.3**

## Raises

**HTTPException**

Getting the guilds failed.

## Yields

**`.Guild`**

The guild with the guild data parsed.

<a id="api-client-fetch-template"></a>

##### `fetch_template(self, code: Union[Template, str]) -> Template`

*coroutine*

Gets a `.Template` from a discord.new URL or code.

## Parameters

**code: Union\[`.Template`, `str`]**

The Discord Template Code or URL (must be a discord.new URL).

## Raises

**NotFound**

The template is invalid.

**HTTPException**

Getting the template failed.

## Returns

**`.Template`**

The template from the URL/code.

<a id="api-client-fetch-guild"></a>

##### `fetch_guild(self, guild_id: int, /, *, with_counts: bool = True) -> Guild`

*coroutine*

Retrieves a `.Guild` from an ID.

> **Note**
> Using this, you will **not** receive `.Guild.channels`, `.Guild.members`,
> `.Member.activity` and `.Member.voice` per `.Member`.

> **Note**
> This method is an API call. For general usage, consider `get_guild` instead.

> **Changed in version 2.0**
> `guild_id` parameter is now positional-only.

## Parameters

**guild\_id: `int`**

The guild's ID to fetch from.

**with\_counts: `bool`**

Whether to include count information in the guild. This fills the
`.Guild.approximate_member_count` and `.Guild.approximate_presence_count`
attributes without needing any privileged intents. Defaults to `True`.

> **Added in version 2.0**

## Raises

**NotFound**

The guild doesn't exist or you got no access to it.

**HTTPException**

Getting the guild failed.

## Returns

**`.Guild`**

The guild from the ID.

<a id="api-client-fetch-guild-preview"></a>

##### `fetch_guild_preview(self, guild_id: int) -> GuildPreview`

*coroutine*

Retrieves a preview of a `.Guild` from an ID. If the guild is discoverable,
you don't have to be a member of it.

> **Added in version 2.5**

## Raises

**NotFound**

The guild doesn't exist, or is not discoverable and you are not in it.

**HTTPException**

Getting the guild failed.

## Returns

**`.GuildPreview`**

The guild preview from the ID.

<a id="api-client-create-guild"></a>

##### `create_guild( self, *, name: str, icon: bytes = MISSING, code: str = MISSING,) -> Guild`

*coroutine*

Creates a `.Guild`.

Bot accounts in more than 10 guilds are not allowed to create guilds.

> **Changed in version 2.0**
> `name` and `icon` parameters are now keyword-only. The `region` parameter has been removed.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

> **Deprecated in version 2.6**
> This function is deprecated and will be removed in a future version.

## Parameters

**name: `str`**

The name of the guild.

**icon: Optional\[`bytes`]**

The `py:bytes-like object` representing the icon. See `.ClientUser.edit`
for more details on what is expected.

**code: `str`**

The code for a template to create the guild with.

> **Added in version 1.4**

## Raises

**HTTPException**

Guild creation failed.

**ValueError**

Invalid icon image format given. Must be PNG or JPG.

## Returns

**`.Guild`**

The guild created. This is not the same guild that is
added to cache.

<a id="api-client-fetch-stage-instance"></a>

##### `fetch_stage_instance(self, channel_id: int, /) -> StageInstance`

*coroutine*

Gets a `.StageInstance` for a stage channel id.

> **Added in version 2.0**

## Parameters

**channel\_id: `int`**

The stage channel ID.

## Raises

**NotFound**

The stage instance or channel could not be found.

**HTTPException**

Getting the stage instance failed.

## Returns

**`.StageInstance`**

The stage instance from the stage channel ID.

<a id="api-client-fetch-invite"></a>

##### `fetch_invite( self, url: Union[Invite, str], *, with_counts: bool = True, with_expiration: bool = True, scheduled_event_id: Optional[int] = None,) -> Invite`

*coroutine*

Gets an `.Invite` from a discord.gg URL or ID.

> **Note**
> If the invite is for a guild you have not joined, the guild and channel
> attributes of the returned `.Invite` will be `.PartialInviteGuild` and
> `.PartialInviteChannel` respectively.

## Parameters

**url: Union\[`.Invite`, `str`]**

The Discord invite ID or URL (must be a discord.gg URL).

**with\_counts: `bool`**

Whether to include count information in the invite. This fills the
`.Invite.approximate_member_count` and `.Invite.approximate_presence_count`
fields.

**with\_expiration: `bool`**

Whether to include the expiration date of the invite. This fills the
`.Invite.expires_at` field.

> **Added in version 2.0**

> **Deprecated in version 2.6**
> This parameter is deprecated and will be removed in a future version as it is no
> longer needed to fill the `.Invite.expires_at` field.

**scheduled\_event\_id: Optional\[`int`]**

The ID of the scheduled event this invite is for.

> **Note**
> It is not possible to provide a url that contains an `event_id` parameter
> when using this parameter.

> **Added in version 2.0**

## Raises

**ValueError**

The url contains an `event_id`, but `scheduled_event_id` has also been provided.

**NotFound**

The invite has expired or is invalid.

**HTTPException**

Getting the invite failed.

## Returns

**`.Invite`**

The invite from the URL/ID.

<a id="api-client-delete-invite"></a>

##### `delete_invite(self, invite: Union[Invite, str], /, *, reason: Optional[str] = None) -> Invite`

*coroutine*

Revokes an `.Invite`, URL, or ID to an invite.

You must have `.Permissions.manage_channels` in
the associated guild to do this.

> **Changed in version 2.0**
> `invite` parameter is now positional-only.

## Parameters

**invite: Union\[`.Invite`, `str`]**

The invite to revoke.

**reason: Optional\[`str`]**

The reason for deleting the invite. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to revoke invites.

**NotFound**

The invite is invalid or expired.

**HTTPException**

Revoking the invite failed.

<a id="api-client-fetch-widget"></a>

##### `fetch_widget(self, guild_id: int, /) -> Widget`

*coroutine*

Gets a `.Widget` from a guild ID.

> **Note**
> The guild must have the widget enabled to get this information.

> **Changed in version 2.0**
> `guild_id` parameter is now positional-only.

## Parameters

**guild\_id: `int`**

The ID of the guild.

## Raises

**Forbidden**

The widget for this guild is disabled.

**HTTPException**

Retrieving the widget failed.

## Returns

**`.Widget`**

The guild's widget.

<a id="api-client-application-info"></a>

##### `application_info(self) -> AppInfo`

*coroutine*

Retrieves the bot's application information.

## Raises

**HTTPException**

Retrieving the information failed somehow.

## Returns

**`.AppInfo`**

The bot's application information.

<a id="api-client-fetch-user"></a>

##### `fetch_user(self, user_id: int, /) -> User`

*coroutine*

Retrieves a `discord.User` based on their ID.
You do not have to share any guilds with the user to get this information,
however many operations do require that you do.

> **Note**
> This method is an API call. If you have `discord.Intents.members` and member cache enabled, consider `get_user` instead.

> **Changed in version 2.0**
> `user_id` parameter is now positional-only.

## Parameters

**user\_id: `int`**

The user's ID to fetch from.

## Raises

**NotFound**

A user with this ID does not exist.

**HTTPException**

Fetching the user failed.

## Returns

**`discord.User`**

The user you requested.

<a id="api-client-fetch-channel"></a>

##### `fetch_channel(self, channel_id: int, /) -> Union[GuildChannel, PrivateChannel, Thread]`

*coroutine*

Retrieves a `.abc.GuildChannel`, `.abc.PrivateChannel`, or `.Thread` with the specified ID.

> **Note**
> This method is an API call. For general usage, consider `get_channel` instead.

> **Added in version 1.2**

> **Changed in version 2.0**
> `channel_id` parameter is now positional-only.

## Raises

**InvalidData**

An unknown channel type was received from Discord.

**HTTPException**

Retrieving the channel failed.

**NotFound**

Invalid Channel ID.

**Forbidden**

You do not have permission to fetch this channel.

## Returns

**Union\[`.abc.GuildChannel`, `.abc.PrivateChannel`, `.Thread`]**

The channel from the ID.

<a id="api-client-fetch-webhook"></a>

##### `fetch_webhook(self, webhook_id: int, /) -> Webhook`

*coroutine*

Retrieves a `.Webhook` with the specified ID.

> **Changed in version 2.0**
> `webhook_id` parameter is now positional-only.

## Raises

**HTTPException**

Retrieving the webhook failed.

**NotFound**

Invalid webhook ID.

**Forbidden**

You do not have permission to fetch this webhook.

## Returns

**`.Webhook`**

The webhook you requested.

<a id="api-client-fetch-sticker"></a>

##### `fetch_sticker(self, sticker_id: int, /) -> Union[StandardSticker, GuildSticker]`

*coroutine*

Retrieves a `.Sticker` with the specified ID.

> **Added in version 2.0**

## Raises

**HTTPException**

Retrieving the sticker failed.

**NotFound**

Invalid sticker ID.

## Returns

**Union\[`.StandardSticker`, `.GuildSticker`]**

The sticker you requested.

<a id="api-client-fetch-skus"></a>

##### `fetch_skus(self) -> List[SKU]`

*coroutine*

Retrieves the bot's available SKUs.

> **Added in version 2.4**

## Raises

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Retrieving the SKUs failed.

## Returns

**List\[`.SKU`]**

The bot's available SKUs.

<a id="api-client-fetch-entitlement"></a>

##### `fetch_entitlement(self, entitlement_id: int, /) -> Entitlement`

*coroutine*

Retrieves a `.Entitlement` with the specified ID.

> **Added in version 2.4**

## Parameters

**entitlement\_id: `int`**

The entitlement's ID to fetch from.

## Raises

**NotFound**

An entitlement with this ID does not exist.

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Fetching the entitlement failed.

## Returns

**`.Entitlement`**

The entitlement you requested.

<a id="api-client-entitlements"></a>

##### `entitlements( self, *, limit: Optional[int] = 100, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, skus: Optional[Sequence[Snowflake]] = None, user: Optional[Snowflake] = None, guild: Optional[Snowflake] = None, exclude_ended: bool = False, exclude_deleted: bool = True,) -> AsyncIterator[Entitlement]`

Retrieves an `asynchronous iterator` of the `.Entitlement` that applications has.

> **Added in version 2.4**

## Examples

Usage :

```python
async for entitlement in client.entitlements(limit=100):
    print(entitlement.user_id, entitlement.ends_at)
```

Flattening into a list :

```python
entitlements = [entitlement async for entitlement in client.entitlements(limit=100)]
# entitlements is now a list of Entitlement...
```

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of entitlements to retrieve. If `None`, it retrieves every entitlement for this application.
Note, however, that this would make it a slow operation. Defaults to `100`.

**before: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve entitlements before this date or entitlement.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**after: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve entitlements after this date or entitlement.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**skus: Optional\[Sequence\[`discord.abc.Snowflake`]]**

A list of SKUs to filter by.

**user: Optional\[`discord.abc.Snowflake`]**

The user to filter by.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to filter by.

**exclude\_ended: `bool`**

Whether to exclude ended entitlements. Defaults to `False`.

**exclude\_deleted: `bool`**

Whether to exclude deleted entitlements. Defaults to `True`.

> **Added in version 2.5**

## Raises

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Fetching the entitlements failed.

**TypeError**

Both `after` and `before` were provided, as Discord does not
support this type of pagination.

## Yields

**`.Entitlement`**

The entitlement with the application.

<a id="api-client-create-entitlement"></a>

##### `create_entitlement( self, sku: Snowflake, owner: Snowflake, owner_type: EntitlementOwnerType,) -> None`

*coroutine*

Creates a test `.Entitlement` for the application.

> **Added in version 2.4**

## Parameters

**sku: `discord.abc.Snowflake`**

The SKU to create the entitlement for.

**owner: `discord.abc.Snowflake`**

The ID of the owner.

**owner\_type: `.EntitlementOwnerType`**

The type of the owner.

## Raises

**MissingApplicationID**

The application ID could not be found.

**NotFound**

The SKU or owner could not be found.

**HTTPException**

Creating the entitlement failed.

<a id="api-client-fetch-premium-sticker-packs"></a>

##### `fetch_premium_sticker_packs(self) -> List[StickerPack]`

*coroutine*

Retrieves all available premium sticker packs.

> **Added in version 2.0**

## Raises

**HTTPException**

Retrieving the sticker packs failed.

## Returns

**List\[`.StickerPack`]**

All available premium sticker packs.

<a id="api-client-fetch-premium-sticker-pack"></a>

##### `fetch_premium_sticker_pack(self, sticker_pack_id: int, /) -> StickerPack`

*coroutine*

Retrieves a premium sticker pack with the specified ID.

> **Added in version 2.5**

## Parameters

**sticker\_pack\_id: `int`**

The sticker pack's ID to fetch from.

## Raises

**NotFound**

A sticker pack with this ID does not exist.

**HTTPException**

Retrieving the sticker pack failed.

## Returns

**`.StickerPack`**

The retrieved premium sticker pack.

<a id="api-client-fetch-soundboard-default-sounds"></a>

##### `fetch_soundboard_default_sounds(self) -> List[SoundboardDefaultSound]`

*coroutine*

Retrieves all default soundboard sounds.

> **Added in version 2.5**

## Raises

**HTTPException**

Retrieving the default soundboard sounds failed.

## Returns

**List\[`.SoundboardDefaultSound`]**

All default soundboard sounds.

<a id="api-client-create-dm"></a>

##### `create_dm(self, user: Snowflake) -> DMChannel`

*coroutine*

Creates a `.DMChannel` with this user.

This should be rarely called, as this is done transparently for most
people.

> **Added in version 2.0**

## Parameters

**user: `discord.abc.Snowflake`**

The user to create a DM with.

## Returns

**`.DMChannel`**

The channel that was created.

<a id="api-client-add-dynamic-items"></a>

##### `add_dynamic_items(self, *items: Type[DynamicItem[Item[Any]]]) -> None`

Registers `discord.ui.DynamicItem` classes for persistent listening.

This method accepts *class types* rather than instances.

> **Added in version 2.4**

## Parameters

**\*items: Type\[`discord.ui.DynamicItem`]**

The classes of dynamic items to add.

## Raises

**TypeError**

A class is not a subclass of `discord.ui.DynamicItem`.

<a id="api-client-remove-dynamic-items"></a>

##### `remove_dynamic_items(self, *items: Type[DynamicItem[Item[Any]]]) -> None`

Removes `discord.ui.DynamicItem` classes from persistent listening.

This method accepts *class types* rather than instances.

> **Added in version 2.4**

## Parameters

**\*items: Type\[`discord.ui.DynamicItem`]**

The classes of dynamic items to remove.

## Raises

**TypeError**

A class is not a subclass of `discord.ui.DynamicItem`.

<a id="api-client-add-view"></a>

##### `add_view(self, view: BaseView, *, message_id: Optional[int] = None) -> None`

Registers a `discord.ui.View` for persistent listening.

This method should be used for when a view is comprised of components
that last longer than the lifecycle of the program.

> **Added in version 2.0**

## Parameters

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

The view to register for dispatching.

**message\_id: Optional\[`int`]**

The message ID that the view is attached to. This is currently used to
refresh the view's state during message update events. If not given
then message update events are not propagated for the view.

## Raises

**TypeError**

A view was not passed.

**ValueError**

The view is not persistent or is already finished. A persistent view has no timeout
and all their components have an explicitly provided custom\_id.

<a id="api-client-persistent-views"></a>

##### `persistent_views(self) -> Sequence[BaseView]`

Sequence\[Union\[`.View`, `.LayoutView`]]: A sequence of persistent views added to the client.

> **Added in version 2.0**

<a id="api-client-create-application-emoji"></a>

##### `create_application_emoji( self, *, name: str, image: bytes,) -> Emoji`

*coroutine*

Create an emoji for the current application.

> **Added in version 2.5**

## Parameters

**name: `str`**

The emoji name. Must be between 2 and 32 characters long.

**image: `bytes`**

The `py:bytes-like object` representing the image data to use.
Only JPG, PNG and GIF images are supported.

## Raises

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Creating the emoji failed.

## Returns

**`.Emoji`**

The emoji that was created.

<a id="api-client-fetch-application-emoji"></a>

##### `fetch_application_emoji(self, emoji_id: int, /) -> Emoji`

*coroutine*

Retrieves an emoji for the current application.

> **Added in version 2.5**

## Parameters

**emoji\_id: `int`**

The emoji ID to retrieve.

## Raises

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Retrieving the emoji failed.

## Returns

**`.Emoji`**

The emoji requested.

<a id="api-client-fetch-application-emojis"></a>

##### `fetch_application_emojis(self) -> List[Emoji]`

*coroutine*

Retrieves all emojis for the current application.

> **Added in version 2.5**

## Raises

**MissingApplicationID**

The application ID could not be found.

**HTTPException**

Retrieving the emojis failed.

## Returns

**List\[`.Emoji`]**

The list of emojis for the current application.

<a id="api-client-event"></a>

#### `event(self, coro: CoroT, /) -> CoroT`

A decorator that registers an event to listen to.

You can find more info about the events on the [documentation below](https://discordpy.readthedocs.io/api.html#discord-api-events).

The events must be a coroutine, if not, `TypeError` is raised.

## Example

```python3
@client.event
async def on_ready():
    print('Ready!')
```

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

### AutoShardedClient

<a id="api-autoshardedclient"></a>

#### `AutoShardedClient(Client)`

A client similar to `Client` except it handles the complications
of sharding for the user into a more manageable and transparent single
process bot.

When using this client, you will be able to use it as-if it was a regular
`Client` with a single shard when implementation wise internally it
is split up into multiple shards. This allows you to not have to deal with
IPC or other complicated infrastructure.

It is recommended to use this client only if you have surpassed at least
1000 guilds.

If no `.shard_count` is provided, then the library will use the
Bot Gateway endpoint call to figure out how many shards to use.

If a `shard_ids` parameter is given, then those shard IDs will be used
to launch the internal shards. Note that `.shard_count` must be provided
if this is used. By default, when omitted, the client will launch shards from
0 to `shard_count - 1`.

<a id="describe-async-with-x"></a>

#### `async with x`

Asynchronously initialises the client and automatically cleans up.

> **Added in version 2.0**

## Attributes

**shard\_ids: Optional\[List\[`int`]]**

An optional list of shard\_ids to launch the shards with.

**shard\_connect\_timeout: Optional\[`float`]**

The maximum number of seconds to wait before timing out when launching a shard.
Defaults to 180 seconds.

> **Added in version 2.4**

<a id="api-autoshardedclient-latency"></a>

##### `latency(self) -> float`

`float`: Measures latency between a HEARTBEAT and a HEARTBEAT\_ACK in seconds.

This operates similarly to `Client.latency` except it uses the average
latency of every shard's latency. To get a list of shard latency, check the
`latencies` property. Returns `nan` if there are no shards ready.

<a id="api-autoshardedclient-latencies"></a>

##### `latencies(self) -> List[Tuple[int, float]]`

List\[Tuple\[`int`, `float`]]: A list of latencies between a HEARTBEAT and a HEARTBEAT\_ACK in seconds.

This returns a list of tuples with elements `(shard_id, latency)`.

<a id="api-autoshardedclient-shards"></a>

##### `shards(self) -> Dict[int, ShardInfo]`

Mapping\[int, `ShardInfo`]: Returns a mapping of shard IDs to their respective info object.

<a id="api-autoshardedclient-fetch-session-start-limits"></a>

##### `fetch_session_start_limits(self) -> SessionStartLimits`

*coroutine*

Get the session start limits.

This is not typically needed, and will be handled for you by default.

At the point where you are launching multiple instances
with manual shard ranges and are considered required to use large bot
sharding by Discord, this function when used along IPC and a
before\_identity\_hook can speed up session start.

> **Added in version 2.5**

## Returns

**`SessionStartLimits`**

A class containing the session start limits

## Raises

**GatewayNotFound**

The gateway was unreachable

<a id="api-autoshardedclient-close"></a>

##### `close(self) -> None`

*coroutine*

Closes the connection to Discord.

<a id="api-autoshardedclient-change-presence"></a>

##### `change_presence( self, *, activity: Optional[BaseActivity] = None, status: Optional[Status] = None, shard_id: Optional[int] = None,) -> None`

*coroutine*

Changes the client's presence.

Example: :

```python
game = discord.Game("with the API")
await client.change_presence(status=discord.Status.idle, activity=game)
```

> **Changed in version 2.0**
> Removed the `afk` keyword-only parameter.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**activity: Optional\[`BaseActivity`]**

The activity being done. `None` if no currently active activity is done.

**status: Optional\[`Status`]**

Indicates what status to change to. If `None`, then
`Status.online` is used.

**shard\_id: Optional\[`int`]**

The shard\_id to change the presence to. If not specified
or `None`, then it will change the presence of every
shard the bot can see.

## Raises

**TypeError**

If the `activity` parameter is not of proper type.

<a id="api-autoshardedclient-is-ws-ratelimited"></a>

##### `is_ws_ratelimited(self) -> bool`

`bool`: Whether the websocket is currently rate limited.

This can be useful to know when deciding whether you should query members
using HTTP or via the gateway.

This implementation checks if any of the shards are rate limited.
For more granular control, consider `ShardInfo.is_ws_ratelimited`.

> **Added in version 1.6**

## Application Info

### AppInfo

<a id="api-appinfo"></a>

#### `AppInfo`

Represents the application info for the bot provided by Discord.

## Attributes

**id: `int`**

The application ID.

**name: `str`**

The application name.

**owner: `User`**

The application owner.

**team: Optional\[`Team`]**

The application's team.

> **Added in version 1.3**

**description: `str`**

The application description.

**bot\_public: `bool`**

Whether the bot can be invited by anyone or if it is locked
to the application owner.

**bot\_require\_code\_grant: `bool`**

Whether the bot requires the completion of the full oauth2 code
grant flow to join.

**rpc\_origins: Optional\[List\[`str`]]**

A list of RPC origin URLs, if RPC is enabled.

**verify\_key: `str`**

The hex encoded key for verification in interactions and the
GameSDK's [GetTicket](https://discord.com/developers/docs/game-sdk/applications#getticket).

> **Added in version 1.3**

**guild\_id: Optional\[`int`]**

If this application is a game sold on Discord,
this field will be the guild to which it has been linked to.

> **Added in version 1.3**

**primary\_sku\_id: Optional\[`int`]**

If this application is a game sold on Discord,
this field will be the id of the "Game SKU" that is created,
if it exists.

> **Added in version 1.3**

**slug: Optional\[`str`]**

If this application is a game sold on Discord,
this field will be the URL slug that links to the store page.

> **Added in version 1.3**

**terms\_of\_service\_url: Optional\[`str`]**

The application's terms of service URL, if set.

> **Added in version 2.0**

**privacy\_policy\_url: Optional\[`str`]**

The application's privacy policy URL, if set.

> **Added in version 2.0**

**tags: List\[`str`]**

The list of tags describing the functionality of the application.

> **Added in version 2.0**

**custom\_install\_url: List\[`str`]**

The custom authorization URL for the application, if enabled.

> **Added in version 2.0**

**install\_params: Optional\[`AppInstallParams`]**

The settings for custom authorization URL of application, if enabled.

> **Added in version 2.0**

**role\_connections\_verification\_url: Optional\[`str`]**

The application's connection verification URL which will render the application as
a verification method in the guild's role verification configuration.

> **Added in version 2.2**

**interactions\_endpoint\_url: Optional\[`str`]**

The interactions endpoint url of the application to receive interactions over this endpoint rather than
over the gateway, if configured.

> **Added in version 2.4**

**redirect\_uris: List\[`str`]**

A list of authentication redirect URIs.

> **Added in version 2.4**

**approximate\_guild\_count: `int`**

The approximate count of the guilds the bot was added to.

> **Added in version 2.4**

**approximate\_user\_install\_count: Optional\[`int`]**

The approximate count of the user-level installations the bot has.

> **Added in version 2.5**

<a id="api-appinfo-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`.Asset`]: Retrieves the application's icon asset, if any.

<a id="api-appinfo-cover-image"></a>

##### `cover_image(self) -> Optional[Asset]`

Optional\[`.Asset`]: Retrieves the cover image on a store embed, if any.

This is only available if the application is a game sold on Discord.

<a id="api-appinfo-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: If this application is a game sold on Discord,
this field will be the guild to which it has been linked

> **Added in version 1.3**

<a id="api-appinfo-flags"></a>

##### `flags(self) -> ApplicationFlags`

`ApplicationFlags`: The application's flags.

> **Added in version 2.0**

<a id="api-appinfo-guild-integration-config"></a>

##### `guild_integration_config(self) -> Optional[IntegrationTypeConfig]`

Optional\[`IntegrationTypeConfig`]: The default settings for the
application's installation context in a guild.

> **Added in version 2.5**

<a id="api-appinfo-user-integration-config"></a>

##### `user_integration_config(self) -> Optional[IntegrationTypeConfig]`

Optional\[`IntegrationTypeConfig`]: The default settings for the
application's installation context as a user.

> **Added in version 2.5**

<a id="api-appinfo-edit"></a>

##### `edit( self, *, reason: Optional[str] = MISSING, custom_install_url: Optional[str] = MISSING, description: Optional[str] = MISSING, role_connections_verification_url: Optional[str] = MISSING, install_params_scopes: Optional[List[str]] = MISSING, install_params_permissions: Optional[Permissions] = MISSING, flags: Optional[ApplicationFlags] = MISSING, icon: Optional[bytes] = MISSING, cover_image: Optional[bytes] = MISSING, interactions_endpoint_url: Optional[str] = MISSING, tags: Optional[List[str]] = MISSING, guild_install_scopes: Optional[List[str]] = MISSING, guild_install_permissions: Optional[Permissions] = MISSING, user_install_scopes: Optional[List[str]] = MISSING, user_install_permissions: Optional[Permissions] = MISSING,) -> AppInfo`

*coroutine*

Edits the application info.

> **Added in version 2.4**

## Parameters

**custom\_install\_url: Optional\[`str`]**

The new custom authorization URL for the application. Can be `None` to remove the URL.

**description: Optional\[`str`]**

The new application description. Can be `None` to remove the description.

**role\_connections\_verification\_url: Optional\[`str`]**

The new application’s connection verification URL which will render the application
as a verification method in the guild’s role verification configuration. Can be `None` to remove the URL.

**install\_params\_scopes: Optional\[List\[`str`]]**

The new list of [OAuth2 scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) of
the `install_params`. Can be `None` to remove the scopes.

**install\_params\_permissions: Optional\[`Permissions`]**

The new permissions of the `install_params`. Can be `None` to remove the permissions.

**flags: Optional\[`ApplicationFlags`]**

The new application’s flags. Only limited intent flags (`ApplicationFlags.gateway_presence_limited`,
`ApplicationFlags.gateway_guild_members_limited`, `ApplicationFlags.gateway_message_content_limited`)
can be edited. Can be `None` to remove the flags.

> **Warning**
> Editing the limited intent flags leads to the termination of the bot.

**icon: Optional\[`bytes`]**

The new application’s icon as a `py:bytes-like object`. Can be `None` to remove the icon.

**cover\_image: Optional\[`bytes`]**

The new application’s cover image as a `py:bytes-like object` on a store embed.
The cover image is only available if the application is a game sold on Discord.
Can be `None` to remove the image.

**interactions\_endpoint\_url: Optional\[`str`]**

The new interactions endpoint url of the application to receive interactions over this endpoint rather than
over the gateway. Can be `None` to remove the URL.

**tags: Optional\[List\[`str`]]**

The new list of tags describing the functionality of the application. Can be `None` to remove the tags.

**guild\_install\_scopes: Optional\[List\[`str`]]**

The new list of [OAuth2 scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) of
the default guild installation context. Can be `None` to remove the scopes.

**guild\_install\_permissions: Optional\[`Permissions`]**

The new permissions of the default guild installation context. Can be `None` to remove the permissions.

**user\_install\_scopes: Optional\[List\[`str`]]**

The new list of [OAuth2 scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes) of
the default user installation context. Can be `None` to remove the scopes.

**user\_install\_permissions: Optional\[`Permissions`]**

The new permissions of the default user installation context. Can be `None` to remove the permissions.

**reason: Optional\[`str`]**

The reason for editing the application. Shows up on the audit log.

## Raises

**HTTPException**

Editing the application failed

**ValueError**

The image format passed in to `icon` or `cover_image` is invalid. This is also raised
when `install_params_scopes` and `install_params_permissions` are incompatible with each other,
or when `guild_install_scopes` and `guild_install_permissions` are incompatible with each other.

## Returns

**`AppInfo`**

The newly updated application info.

### PartialAppInfo

<a id="api-partialappinfo"></a>

#### `PartialAppInfo`

Represents a partial AppInfo given by `discord.abc.GuildChannel.create_invite`

> **Added in version 2.0**

## Attributes

**id: `int`**

The application ID.

**name: `str`**

The application name.

**description: `str`**

The application description.

**rpc\_origins: Optional\[List\[`str`]]**

A list of RPC origin URLs, if RPC is enabled.

**verify\_key: `str`**

The hex encoded key for verification in interactions and the
GameSDK's [GetTicket](https://discord.com/developers/docs/game-sdk/applications#getticket).

**terms\_of\_service\_url: Optional\[`str`]**

The application's terms of service URL, if set.

**privacy\_policy\_url: Optional\[`str`]**

The application's privacy policy URL, if set.

**approximate\_guild\_count: `int`**

The approximate count of the guilds the bot was added to.

> **Added in version 2.3**

**redirect\_uris: List\[`str`]**

A list of authentication redirect URIs.

> **Added in version 2.3**

**interactions\_endpoint\_url: Optional\[`str`]**

The interactions endpoint url of the application to receive interactions over this endpoint rather than
over the gateway, if configured.

> **Added in version 2.3**

**role\_connections\_verification\_url: Optional\[`str`]**

The application's connection verification URL which will render the application as
a verification method in the guild's role verification configuration.

> **Added in version 2.3**

<a id="api-partialappinfo-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`.Asset`]: Retrieves the application's icon asset, if any.

<a id="api-partialappinfo-cover-image"></a>

##### `cover_image(self) -> Optional[Asset]`

Optional\[`.Asset`]: Retrieves the cover image of the application's default rich presence.

This is only available if the application is a game sold on Discord.

> **Added in version 2.3**

<a id="api-partialappinfo-flags"></a>

##### `flags(self) -> ApplicationFlags`

`ApplicationFlags`: The application's flags.

> **Added in version 2.0**

### AppInstallParams

<a id="api-appinstallparams"></a>

#### `AppInstallParams`

Represents the settings for custom authorization URL of an application.

> **Added in version 2.0**

## Attributes

**scopes: List\[`str`]**

The list of [OAuth2 scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes)
to add the application to a guild with.

**permissions: `Permissions`**

The permissions to give to application in the guild.

### IntegrationTypeConfig

<a id="api-integrationtypeconfig"></a>

#### `IntegrationTypeConfig`

Represents the default settings for the application's installation context.

> **Added in version 2.5**

## Attributes

**oauth2\_install\_params: Optional\[`AppInstallParams`]**

The install params for this installation context's default in-app authorization link.

### Team

<a id="api-team"></a>

#### `Team`

Represents an application team for a bot provided by Discord.

## Attributes

**id: `int`**

The team ID.

**name: `str`**

The team name

**owner\_id: `int`**

The team's owner ID.

**members: List\[`TeamMember`]**

A list of the members in the team

> **Added in version 1.3**

<a id="api-team-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`.Asset`]: Retrieves the team's icon asset, if any.

<a id="api-team-owner"></a>

##### `owner(self) -> Optional[TeamMember]`

Optional\[`TeamMember`]: The team's owner.

### TeamMember

<a id="api-teammember"></a>

#### `TeamMember(BaseUser)`

Represents a team member in a team.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two team members are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two team members are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the team member's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the team member's handle (e.g. `name` or `name#discriminator`).

> **Added in version 1.3**

## Attributes

**name: `str`**

The team member's username.

**id: `int`**

The team member's unique ID.

**discriminator: `str`**

The team member's discriminator. This is a legacy concept that is no longer used.

**global\_name: Optional\[`str`]**

The team member's global nickname, taking precedence over the username in display.

> **Added in version 2.3**

**bot: `bool`**

Specifies if the user is a bot account.

**team: `Team`**

The team that the member is from.

**membership\_state: `TeamMembershipState`**

The membership state of the member (e.g. invited or accepted)

**role: `TeamMemberRole`**

The role of the member within the team.

> **Added in version 2.4**

## Voice Related

### VoiceClient

<a id="api-voiceclient"></a>

#### `VoiceClient(VoiceProtocol)`

Represents a Discord voice connection.

You do not create these, you typically get them from
e.g. `VoiceChannel.connect`.

## Warning

In order to use PCM based AudioSources, you must have the opus library
installed on your system and loaded through `opus.load_opus`.
Otherwise, your AudioSources must be opus encoded (e.g. using `FFmpegOpusAudio`)
or the library will not be able to transmit audio.

## Attributes

**session\_id: `str`**

The voice connection session ID.

**token: `str`**

The voice connection token.

**endpoint: `str`**

The endpoint we are connecting to.

**channel: Union\[`VoiceChannel`, `StageChannel`]**

The voice channel connected to.

<a id="api-voiceclient-guild"></a>

##### `guild(self) -> Guild`

`Guild`: The guild we're connected to.

<a id="api-voiceclient-user"></a>

##### `user(self) -> ClientUser`

`ClientUser`: The user connected to voice (i.e. ourselves).

<a id="api-voiceclient-voice-privacy-code"></a>

##### `voice_privacy_code(self) -> Optional[str]`

`str`: Get the voice privacy code of this E2EE session's group.

A new privacy code is created and cached each time a new transition is executed.
This can be None if there is no active DAVE session happening.

> **Added in version 2.7**

<a id="api-voiceclient-latency"></a>

##### `latency(self) -> float`

`float`: Latency between a HEARTBEAT and a HEARTBEAT\_ACK in seconds.

This could be referred to as the Discord Voice WebSocket latency and is
an analogue of user's voice latencies as seen in the Discord client.

> **Added in version 1.4**

<a id="api-voiceclient-average-latency"></a>

##### `average_latency(self) -> float`

`float`: Average of most recent 20 HEARTBEAT latencies in seconds.

> **Added in version 1.4**

<a id="api-voiceclient-disconnect"></a>

##### `disconnect(self, *, force: bool = False) -> None`

*coroutine*

Disconnects this voice client from voice.

<a id="api-voiceclient-move-to"></a>

##### `move_to(self, channel: Optional[abc.Snowflake], *, timeout: Optional[float] = 30.0) -> None`

*coroutine*

Moves you to a different voice channel.

## Parameters

**channel: Optional\[`abc.Snowflake`]**

The channel to move to. Must be a voice channel.

**timeout: Optional\[`float`]**

How long to wait for the move to complete.

> **Added in version 2.4**

## Raises

**asyncio.TimeoutError**

The move did not complete in time, but may still be ongoing.

<a id="api-voiceclient-is-connected"></a>

##### `is_connected(self) -> bool`

Indicates if the voice client is connected to voice.

<a id="api-voiceclient-play"></a>

##### `play( self, source: AudioSource, *, after: Optional[Callable[[Optional[Exception]], Any]] = None, application: APPLICATION_CTL = 'audio', bitrate: int = 128, fec: bool = True, expected_packet_loss: float = 0.15, bandwidth: BAND_CTL = 'full', signal_type: SIGNAL_CTL = 'auto',) -> None`

Plays an `AudioSource`.

The finalizer, `after` is called after the source has been exhausted
or an error occurred.

If an error happens while the audio player is running, the exception is
caught and the audio player is then stopped.  If no after callback is
passed, any caught exception will be logged using the library logger.

Extra parameters may be passed to the internal opus encoder if a PCM based
source is used.  Otherwise, they are ignored.

> **Changed in version 2.0**
> Instead of writing to `sys.stderr`, the library's logger is used.

> **Changed in version 2.4**
> Added encoder parameters as keyword arguments.

## Parameters

**source: `AudioSource`**

The audio source we're reading from.

**after: Callable\[\[Optional\[`Exception`]], Any]**

The finalizer that is called after the stream is exhausted.
This function must have a single parameter, `error`, that
denotes an optional exception that was raised during playing.

**application: `str`**

Configures the encoder's intended application.  Can be one of:
`'audio'`, `'voip'`, `'lowdelay'`.
Defaults to `'audio'`.

**bitrate: `int`**

Configures the bitrate in the encoder.  Can be between `16` and `512`.
Defaults to `128`.

**fec: `bool`**

Configures the encoder's use of inband forward error correction.
Defaults to `True`.

**expected\_packet\_loss: `float`**

Configures the encoder's expected packet loss percentage.  Requires FEC.
Defaults to `0.15`.

**bandwidth: `str`**

Configures the encoder's bandpass.  Can be one of:
`'narrow'`, `'medium'`, `'wide'`, `'superwide'`, `'full'`.
Defaults to `'full'`.

**signal\_type: `str`**

Configures the type of signal being encoded.  Can be one of:
`'auto'`, `'voice'`, `'music'`.
Defaults to `'auto'`.

## Raises

**ClientException**

Already playing audio or not connected.

**TypeError**

Source is not a `AudioSource` or after is not a callable.

**OpusNotLoaded**

Source is not opus encoded and opus is not loaded.

**ValueError**

An improper value was passed as an encoder parameter.

<a id="api-voiceclient-is-playing"></a>

##### `is_playing(self) -> bool`

Indicates if we're currently playing audio.

<a id="api-voiceclient-is-paused"></a>

##### `is_paused(self) -> bool`

Indicates if we're playing audio, but if we're paused.

<a id="api-voiceclient-stop"></a>

##### `stop(self) -> None`

Stops playing audio.

<a id="api-voiceclient-pause"></a>

##### `pause(self) -> None`

Pauses the audio playing.

<a id="api-voiceclient-resume"></a>

##### `resume(self) -> None`

Resumes the audio playing.

<a id="api-voiceclient-source"></a>

##### `source(self) -> Optional[AudioSource]`

Optional\[`AudioSource`]: The audio source being played, if playing.

This property can also be used to change the audio source currently being played.

<a id="api-voiceclient-send-audio-packet"></a>

##### `send_audio_packet(self, data: bytes, *, encode: bool = True) -> None`

Sends an audio packet composed of the data.

You must be connected to play audio.

## Parameters

**data: `bytes`**

The `py:bytes-like object` denoting PCM or Opus voice data.

**encode: `bool`**

Indicates if `data` should be encoded into Opus.

## Raises

**ClientException**

You are not connected.

**opus.OpusError**

Encoding the data failed.

### VoiceProtocol

<a id="api-voiceprotocol"></a>

#### `VoiceProtocol`

A class that represents the Discord voice protocol.

This is an abstract class. The library provides a concrete implementation
under `VoiceClient`.

This class allows you to implement a protocol to allow for an external
method of sending voice, such as Lavalink\_ or a native library implementation.

These classes are passed to `abc.Connectable.connect`.

<a id="lavalink"></a>

## Parameters

**client: `Client`**

The client (or its subclasses) that started the connection request.

**channel: `abc.Connectable`**

The voice channel that is being connected to.

<a id="api-voiceprotocol-on-voice-state-update"></a>

##### `on_voice_state_update(self, data: GuildVoiceStatePayload, /) -> None`

*coroutine*

An abstract method that is called when the client's voice state
has changed. This corresponds to `VOICE_STATE_UPDATE`.

> **Warning**
> This method is not the same as the event. See: `on_voice_state_update`

## Parameters

**data: `dict`**

The raw [voice state payload](https://discord.com/developers/docs/resources/voice#voice-state-object).

<a id="api-voiceprotocol-on-voice-server-update"></a>

##### `on_voice_server_update(self, data: VoiceServerUpdatePayload, /) -> None`

*coroutine*

An abstract method that is called when initially connecting to voice.
This corresponds to `VOICE_SERVER_UPDATE`.

## Parameters

**data: `dict`**

The raw [voice server update payload](https://discord.com/developers/docs/topics/gateway-events#voice-server-update).

<a id="api-voiceprotocol-connect"></a>

##### `connect(self, *, timeout: float, reconnect: bool, self_deaf: bool = False, self_mute: bool = False) -> None`

*coroutine*

An abstract method called when the client initiates the connection request.

When a connection is requested initially, the library calls the constructor
under `__init__` and then calls `connect`. If `connect` fails at
some point then `disconnect` is called.

Within this method, to start the voice connection flow it is recommended to
use `Guild.change_voice_state` to start the flow. After which,
`on_voice_server_update` and `on_voice_state_update` will be called.
The order that these two are called is unspecified.

## Parameters

**timeout: `float`**

The timeout for the connection.

**reconnect: `bool`**

Whether reconnection is expected.

**self\_mute: `bool`**

Indicates if the client should be self-muted.

> **Added in version 2.0**

**self\_deaf: `bool`**

Indicates if the client should be self-deafened.

> **Added in version 2.0**

<a id="api-voiceprotocol-disconnect"></a>

##### `disconnect(self, *, force: bool) -> None`

*coroutine*

An abstract method called when the client terminates the connection.

See `cleanup`.

## Parameters

**force: `bool`**

Whether the disconnection was forced.

<a id="api-voiceprotocol-cleanup"></a>

##### `cleanup(self) -> None`

This method *must* be called to ensure proper clean-up during a disconnect.

It is advisable to call this from within `disconnect` when you are
completely done with the voice protocol instance.

This method removes it from the internal state cache that keeps track of
currently alive voice clients. Failure to clean-up will cause subsequent
connections to report that it's still connected.

### AudioSource

<a id="api-audiosource"></a>

#### `AudioSource`

Represents an audio stream.

The audio stream can be Opus encoded or not, however if the audio stream
is not Opus encoded then the audio format must be 16-bit 48KHz stereo PCM.

> **Warning**
> The audio source reads are done in a separate thread.

<a id="api-audiosource-read"></a>

##### `read(self) -> bytes`

Reads 20ms worth of audio.

Subclasses must implement this.

If the audio is complete, then returning an empty
`py:bytes-like object` to signal this is the way to do so.

If `AudioSource.is_opus` method returns `True`, then it must return
20ms worth of Opus encoded audio. Otherwise, it must be 20ms
worth of 16-bit 48KHz stereo PCM, which is about 3,840 bytes
per frame (20ms worth of audio).

## Returns

**`bytes`**

A bytes like object that represents the PCM or Opus data.

<a id="api-audiosource-is-opus"></a>

##### `is_opus(self) -> bool`

Checks if the audio source is already encoded in Opus.

<a id="api-audiosource-cleanup"></a>

##### `cleanup(self) -> None`

Called when clean-up is needed to be done.

Useful for clearing buffer data or processes after
it is done playing audio.

### PCMAudio

<a id="api-pcmaudio"></a>

#### `PCMAudio(AudioSource)`

Represents raw 16-bit 48KHz stereo PCM audio source.

## Attributes

**stream: `py:file object`**

A file-like object that reads byte data representing raw PCM.

### FFmpegAudio

<a id="api-ffmpegaudio"></a>

#### `FFmpegAudio(AudioSource)`

Represents an FFmpeg (or AVConv) based AudioSource.

User created AudioSources using FFmpeg differently from how `FFmpegPCMAudio` and
`FFmpegOpusAudio` work should subclass this.

> **Added in version 1.3**

### FFmpegPCMAudio

<a id="api-ffmpegpcmaudio"></a>

#### `FFmpegPCMAudio(FFmpegAudio)`

An audio source from FFmpeg (or AVConv).

This launches a sub-process to a specific input file given.

> **Warning**
> You must have the ffmpeg or avconv executable in your path environment
> variable in order for this to work.

## Parameters

**source: Union\[`str`, `io.BufferedIOBase`]**

The input that ffmpeg will take and convert to PCM bytes.
If `pipe` is `True` then this is a file-like object that is
passed to the stdin of ffmpeg.

**executable: `str`**

The executable name (and path) to use. Defaults to `ffmpeg`.

> **Warning**
> Since this class spawns a subprocess, care should be taken to not
> pass in an arbitrary executable name when using this parameter.

**pipe: `bool`**

If `True`, denotes that `source` parameter will be passed
to the stdin of ffmpeg. Defaults to `False`.

**stderr: Optional\[`py:file object`]**

A file-like object to pass to the Popen constructor.

**before\_options: Optional\[`str`]**

Extra command line arguments to pass to ffmpeg before the `-i` flag.

**options: Optional\[`str`]**

Extra command line arguments to pass to ffmpeg after the `-i` flag.

## Raises

**ClientException**

The subprocess failed to be created.

### FFmpegOpusAudio

<a id="api-ffmpegopusaudio"></a>

#### `FFmpegOpusAudio(FFmpegAudio)`

An audio source from FFmpeg (or AVConv).

This launches a sub-process to a specific input file given.  However, rather than
producing PCM packets like `FFmpegPCMAudio` does that need to be encoded to
Opus, this class produces Opus packets, skipping the encoding step done by the library.

Alternatively, instead of instantiating this class directly, you can use
`FFmpegOpusAudio.from_probe` to probe for bitrate and codec information.  This
can be used to opportunistically skip pointless re-encoding of existing Opus audio data
for a boost in performance at the cost of a short initial delay to gather the information.
The same can be achieved by passing `copy` to the `codec` parameter, but only if you
know that the input source is Opus encoded beforehand.

> **Added in version 1.3**

> **Warning**
> You must have the ffmpeg or avconv executable in your path environment
> variable in order for this to work.

## Parameters

**source: Union\[`str`, `io.BufferedIOBase`]**

The input that ffmpeg will take and convert to Opus bytes.
If `pipe` is `True` then this is a file-like object that is
passed to the stdin of ffmpeg.

**bitrate: `int`**

The bitrate in kbps to encode the output to.  Defaults to `128`.

**codec: Optional\[`str`]**

The codec to use to encode the audio data.  Normally this would be
just `libopus`, but is used by `FFmpegOpusAudio.from_probe` to
opportunistically skip pointlessly re-encoding Opus audio data by passing
`copy` as the codec value.  Any values other than `copy`, `opus`, or
`libopus` will be considered `libopus`.  Defaults to `libopus`.

> **Warning**
> Do not provide this parameter unless you are certain that the audio input is
> already Opus encoded.  For typical use `FFmpegOpusAudio.from_probe`
> should be used to determine the proper value for this parameter.

**executable: `str`**

The executable name (and path) to use. Defaults to `ffmpeg`.

> **Warning**
> Since this class spawns a subprocess, care should be taken to not
> pass in an arbitrary executable name when using this parameter.

**pipe: `bool`**

If `True`, denotes that `source` parameter will be passed
to the stdin of ffmpeg. Defaults to `False`.

**stderr: Optional\[`py:file object`]**

A file-like object to pass to the Popen constructor.

**before\_options: Optional\[`str`]**

Extra command line arguments to pass to ffmpeg before the `-i` flag.

**options: Optional\[`str`]**

Extra command line arguments to pass to ffmpeg after the `-i` flag.

## Raises

**ClientException**

The subprocess failed to be created.

<a id="api-ffmpegopusaudio-from-probe"></a>

##### `from_probe( cls, source: str, *, method: Optional[Union[str, Callable[[str, str], Tuple[Optional[str], Optional[int]]]]] = None, **kwargs: Any,) -> Self`

*coroutine*

A factory method that creates a `FFmpegOpusAudio` after probing
the input source for audio codec and bitrate information.

## Examples

Use this function to create an `FFmpegOpusAudio` instance instead of the constructor: :

```python
source = await discord.FFmpegOpusAudio.from_probe("song.webm")
voice_client.play(source)
```

If you are on Windows and don't have ffprobe installed, use the `fallback` method
to probe using ffmpeg instead: :

```python
source = await discord.FFmpegOpusAudio.from_probe("song.webm", method='fallback')
voice_client.play(source)
```

Using a custom method of determining codec and bitrate: :

```python
def custom_probe(source, executable):
    # some analysis code here
    return codec, bitrate

source = await discord.FFmpegOpusAudio.from_probe("song.webm", method=custom_probe)
voice_client.play(source)
```

## Parameters

**source**

Identical to the `source` parameter for the constructor.

**method: Optional\[Union\[`str`, Callable\[`str`, `str`]]]**

The probing method used to determine bitrate and codec information. As a string, valid
values are `native` to use ffprobe (or avprobe) and `fallback` to use ffmpeg
(or avconv).  As a callable, it must take two string arguments, `source` and
`executable`.  Both parameters are the same values passed to this factory function.
`executable` will default to `ffmpeg` if not provided as a keyword argument.

**kwargs**

The remaining parameters to be passed to the `FFmpegOpusAudio` constructor,
excluding `bitrate` and `codec`.

## Raises

**AttributeError**

Invalid probe method, must be `'native'` or `'fallback'`.

**TypeError**

Invalid value for `probe` parameter, must be `str` or a callable.

## Returns

**`FFmpegOpusAudio`**

An instance of this class.

<a id="api-ffmpegopusaudio-probe"></a>

##### `probe( cls, source: str, *, method: Optional[Union[str, Callable[[str, str], Tuple[Optional[str], Optional[int]]]]] = None, executable: Optional[str] = None,) -> Tuple[Optional[str], Optional[int]]`

*coroutine*

Probes the input source for bitrate and codec information.

## Parameters

**source**

Identical to the `source` parameter for `FFmpegOpusAudio`.

**method**

Identical to the `method` parameter for `FFmpegOpusAudio.from_probe`.

**executable: `str`**

Identical to the `executable` parameter for `FFmpegOpusAudio`.

## Raises

**AttributeError**

Invalid probe method, must be `'native'` or `'fallback'`.

**TypeError**

Invalid value for `probe` parameter, must be `str` or a callable.

## Returns

**Optional\[Tuple\[Optional\[`str`], `int`]]**

A 2-tuple with the codec and bitrate of the input source.

### PCMVolumeTransformer

<a id="api-pcmvolumetransformer"></a>

#### `PCMVolumeTransformer(AudioSource, Generic[AT])`

Transforms a previous `AudioSource` to have volume controls.

This does not work on audio sources that have `AudioSource.is_opus`
set to `True`.

## Parameters

**original: `AudioSource`**

The original AudioSource to transform.

**volume: `float`**

The initial volume to set it to.
See `volume` for more info.

## Raises

**TypeError**

Not an audio source.

**ClientException**

The audio source is opus encoded.

<a id="api-pcmvolumetransformer-volume"></a>

##### `volume(self) -> float`

Retrieves or sets the volume as a floating point percentage (e.g. `1.0` for 100%).

### Opus Library

<a id="api-discord-opus-load-opus"></a>

#### `load_opus(name: str) -> None`

Loads the libopus shared library for use with voice.

If this function is not called then the library uses the function
`ctypes.util.find_library` and then loads that one if available.

Not loading a library and attempting to use PCM based AudioSources will
lead to voice not working.

This function propagates the exceptions thrown.

> **Warning**
> The bitness of the library must match the bitness of your python
> interpreter. If the library is 64-bit then your python interpreter
> must be 64-bit as well. Usually if there's a mismatch in bitness then
> the load will throw an exception.

> **Note**
> On Windows, this function should not need to be called as the binaries
> are automatically loaded.

> **Note**
> On Windows, the .dll extension is not necessary. However, on Linux
> the full extension is required to load the library, e.g. `libopus.so.1`.
> On Linux however, `ctypes.util.find_library` will usually find the library automatically
> without you having to call this.

## Parameters

**name: `str`**

The filename of the shared library.

<a id="api-discord-opus-is-loaded"></a>

#### `is_loaded() -> bool`

Function to check if opus lib is successfully loaded either
via the `ctypes.util.find_library` call of `load_opus`.

This must return `True` for voice to work.

## Returns

**`bool`**

Indicates if the opus library has been loaded.

<a id="discord-api-events"></a>

## Event Reference

This section outlines the different types of events listened by `Client`.

There are two ways to register an event, the first way is through the use of
`Client.event`. The second way is through subclassing `Client` and
overriding the specific events. For example: :

```python
import discord

class MyClient(discord.Client):
    async def on_message(self, message):
        if message.author == self.user:
            return

        if message.content.startswith('$hello'):
            await message.channel.send('Hello World!')
```

If an event handler raises an exception, `on_error` will be called
to handle it, which defaults to logging the traceback and ignoring the exception.

> **Warning**
> All the events must be a *coroutine*\_. If they aren't, then you might get unexpected
> errors. In order to turn a function into a coroutine they must be `async def`
> functions.

### App Commands

<a id="function-on-raw-app-command-permissions-update-payload"></a>

#### `on_raw_app_command_permissions_update(payload)`

Called when application command permissions are updated.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawAppCommandPermissionsUpdateEvent`

<a id="function-on-app-command-completion-interaction-command"></a>

#### `on_app_command_completion(interaction, command)`

Called when a `app_commands.Command` or `app_commands.ContextMenu` has
successfully completed without error.

> **Added in version 2.0**

- **Param Interaction:** The interaction of the command.
- **Type Interaction:** `Interaction`
- **Param Command:** The command that completed successfully
- **Type Command:** Union\[`app_commands.Command`, `app_commands.ContextMenu`]

### AutoMod

<a id="function-on-automod-rule-create-rule"></a>

#### `on_automod_rule_create(rule)`

Called when a `AutoModRule` is created.
You must have `Permissions.manage_guild` to receive this.

This requires `Intents.auto_moderation_configuration` to be enabled.

> **Added in version 2.0**

- **Param Rule:** The rule that was created.
- **Type Rule:** `AutoModRule`

<a id="function-on-automod-rule-update-rule"></a>

#### `on_automod_rule_update(rule)`

Called when a `AutoModRule` is updated.
You must have `Permissions.manage_guild` to receive this.

This requires `Intents.auto_moderation_configuration` to be enabled.

> **Added in version 2.0**

- **Param Rule:** The rule that was updated.
- **Type Rule:** `AutoModRule`

<a id="function-on-automod-rule-delete-rule"></a>

#### `on_automod_rule_delete(rule)`

Called when a `AutoModRule` is deleted.
You must have `Permissions.manage_guild` to receive this.

This requires `Intents.auto_moderation_configuration` to be enabled.

> **Added in version 2.0**

- **Param Rule:** The rule that was deleted.
- **Type Rule:** `AutoModRule`

<a id="function-on-automod-action-execution"></a>

#### `on_automod_action(execution)`

Called when a `AutoModAction` is created/performed.
You must have `Permissions.manage_guild` to receive this.

This requires `Intents.auto_moderation_execution` to be enabled.

> **Added in version 2.0**

- **Param Execution:** The rule execution that was performed.
- **Type Execution:** `AutoModAction`

### Channels

<a id="function-on-guild-channel-delete-channel"></a>

#### `on_guild_channel_delete(channel)`

on\_guild\_channel\_create(channel)

Called whenever a guild channel is deleted or created.

Note that you can get the guild from `abc.GuildChannel.guild`.

This requires `Intents.guilds` to be enabled.

- **Param Channel:** The guild channel that got created or deleted.
- **Type Channel:** `abc.GuildChannel`

<a id="function-on-guild-channel-update-before-after"></a>

#### `on_guild_channel_update(before, after)`

Called whenever a guild channel is updated. e.g. changed name, topic, permissions.

This requires `Intents.guilds` to be enabled.

- **Param Before:** The updated guild channel's old info.
- **Type Before:** `abc.GuildChannel`
- **Param After:** The updated guild channel's new info.
- **Type After:** `abc.GuildChannel`

<a id="function-on-guild-channel-pins-update-channel-last-pin"></a>

#### `on_guild_channel_pins_update(channel, last_pin)`

Called whenever a message is pinned or unpinned from a guild channel.

This requires `Intents.guilds` to be enabled.

- **Param Channel:** The guild channel that had its pins updated.
- **Type Channel:** Union\[`abc.GuildChannel`, `Thread`]
- **Param Last Pin:** The latest message that was pinned as an aware datetime in UTC. Could be `None`.
- **Type Last Pin:** Optional\[`datetime.datetime`]

<a id="function-on-private-channel-update-before-after"></a>

#### `on_private_channel_update(before, after)`

Called whenever a private group DM is updated. e.g. changed name or topic.

This requires `Intents.messages` to be enabled.

- **Param Before:** The updated group channel's old info.
- **Type Before:** `GroupChannel`
- **Param After:** The updated group channel's new info.
- **Type After:** `GroupChannel`

<a id="function-on-private-channel-pins-update-channel-last-pin"></a>

#### `on_private_channel_pins_update(channel, last_pin)`

Called whenever a message is pinned or unpinned from a private channel.

- **Param Channel:** The private channel that had its pins updated.
- **Type Channel:** `abc.PrivateChannel`
- **Param Last Pin:** The latest message that was pinned as an aware datetime in UTC. Could be `None`.
- **Type Last Pin:** Optional\[`datetime.datetime`]

<a id="function-on-typing-channel-user-when"></a>

#### `on_typing(channel, user, when)`

Called when someone begins typing a message.

The `channel` parameter can be a `abc.Messageable` instance.
Which could either be `TextChannel`, `GroupChannel`, or
`DMChannel`.

If the `channel` is a `TextChannel` then the `user` parameter
is a `Member`, otherwise it is a `User`.

If the channel or user could not be found in the internal cache this event
will not be called, you may use `on_raw_typing` instead.

This requires `Intents.typing` to be enabled.

- **Param Channel:** The location where the typing originated from.
- **Type Channel:** `abc.Messageable`
- **Param User:** The user that started typing.
- **Type User:** Union\[`User`, `Member`]
- **Param When:** When the typing started as an aware datetime in UTC.
- **Type When:** `datetime.datetime`

<a id="function-on-raw-typing-payload"></a>

#### `on_raw_typing(payload)`

Called when someone begins typing a message. Unlike `on_typing` this
is called regardless of the channel and user being in the internal cache.

This requires `Intents.typing` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawTypingEvent`

### Connection

<a id="function-on-connect"></a>

#### `on_connect()`

Called when the client has successfully connected to Discord. This is not
the same as the client being fully prepared, see `on_ready` for that.

The warnings on `on_ready` also apply.

<a id="function-on-disconnect"></a>

#### `on_disconnect()`

Called when the client has disconnected from Discord, or a connection attempt to Discord has failed.
This could happen either through the internet being disconnected, explicit calls to close,
or Discord terminating the connection one way or the other.

This function can be called many times without a corresponding `on_connect` call.

<a id="function-on-shard-connect-shard-id"></a>

#### `on_shard_connect(shard_id)`

Similar to `on_connect` except used by `AutoShardedClient`
to denote when a particular shard ID has connected to Discord.

> **Added in version 1.4**

- **Param Shard Id:** The shard ID that has connected.
- **Type Shard Id:** `int`

<a id="function-on-shard-disconnect-shard-id"></a>

#### `on_shard_disconnect(shard_id)`

Similar to `on_disconnect` except used by `AutoShardedClient`
to denote when a particular shard ID has disconnected from Discord.

> **Added in version 1.4**

- **Param Shard Id:** The shard ID that has disconnected.
- **Type Shard Id:** `int`

### Debug

<a id="function-on-error-event-args-kwargs"></a>

#### `on_error(event, *args, **kwargs)`

Usually when an event raises an uncaught exception, a traceback is
logged to stderr and the exception is ignored. If you want to
change this behaviour and handle the exception for whatever reason
yourself, this event can be overridden. Which, when done, will
suppress the default action of printing the traceback.

The information of the exception raised and the exception itself can
be retrieved with a standard call to `sys.exc_info`.

> **Note**
> `on_error` will only be dispatched to `Client.event`.
>
> It will not be received by `Client.wait_for`, or, if used,
> [ext\_commands\_api\_bot](https://discordpy.readthedocs.io/ext/commands/api.html#ext-commands-api-bot) listeners such as
> `ext.commands.Bot.listen` or `ext.commands.Cog.listener`.

> **Changed in version 2.0**
> The traceback is now logged rather than printed.

- **Param Event:** The name of the event that raised the exception.
- **Type Event:** `str`

**:param args: The positional arguments for the event that raised the**

exception.

**:param kwargs: The keyword arguments for the event that raised the**

exception.

<a id="function-on-socket-event-type-event-type"></a>

#### `on_socket_event_type(event_type)`

Called whenever a websocket event is received from the WebSocket.

This is mainly useful for logging how many events you are receiving
from the Discord gateway.

> **Added in version 2.0**

- **Param Event Type:** The event type from Discord that is received, e.g. `'READY'`.
- **Type Event Type:** `str`

<a id="function-on-socket-raw-receive-msg"></a>

#### `on_socket_raw_receive(msg)`

Called whenever a message is completely received from the WebSocket, before
it's processed and parsed. This event is always dispatched when a
complete message is received and the passed data is not parsed in any way.

This is only really useful for grabbing the WebSocket stream and
debugging purposes.

This requires setting the `enable_debug_events` setting in the `Client`.

> **Note**
> This is only for the messages received from the client
> WebSocket. The voice WebSocket will not trigger this event.

- **Param Msg:** The message passed in from the WebSocket library.
- **Type Msg:** `str`

<a id="function-on-socket-raw-send-payload"></a>

#### `on_socket_raw_send(payload)`

Called whenever a send operation is done on the WebSocket before the
message is sent. The passed parameter is the message that is being
sent to the WebSocket.

This is only really useful for grabbing the WebSocket stream and
debugging purposes.

This requires setting the `enable_debug_events` setting in the `Client`.

> **Note**
> This is only for the messages sent from the client
> WebSocket. The voice WebSocket will not trigger this event.

**:param payload: The message that is about to be passed on to the**

WebSocket library. It can be `bytes` to denote a binary
message or `str` to denote a regular text message.

- **Type Payload:** Union\[`bytes`, `str`]

### Entitlements

<a id="function-on-entitlement-create-entitlement"></a>

#### `on_entitlement_create(entitlement)`

Called when a user subscribes to a SKU.

> **Added in version 2.4**

- **Param Entitlement:** The entitlement that was created.
- **Type Entitlement:** `Entitlement`

<a id="function-on-entitlement-update-entitlement"></a>

#### `on_entitlement_update(entitlement)`

Called when a user updates their subscription to a SKU. This is usually called when
the user renews or cancels their subscription.

> **Added in version 2.4**

- **Param Entitlement:** The entitlement that was updated.
- **Type Entitlement:** `Entitlement`

<a id="function-on-entitlement-delete-entitlement"></a>

#### `on_entitlement_delete(entitlement)`

Called when a users subscription to a SKU is cancelled. This is typically only called when:

- Discord issues a refund for the subscription.
- Discord removes an entitlement from a user.

> **Warning**
> This event won't be called if the user cancels their subscription manually, instead
> `on_entitlement_update` will be called with `Entitlement.ends_at` set to the end of the
> current billing period.

> **Added in version 2.4**

- **Param Entitlement:** The entitlement that was deleted.
- **Type Entitlement:** `Entitlement`

### Gateway

<a id="function-on-ready"></a>

#### `on_ready()`

Called when the client is done preparing the data received from Discord. Usually after login is successful
and the `Client.guilds` and co. are filled up.

> **Warning**
> This function is not guaranteed to be the first event called.
> Likewise, this function is **not** guaranteed to only be called
> once. This library implements reconnection logic and thus will
> end up calling this event whenever a RESUME request fails.

<a id="function-on-resumed"></a>

#### `on_resumed()`

Called when the client has resumed a session.

<a id="function-on-shard-ready-shard-id"></a>

#### `on_shard_ready(shard_id)`

Similar to `on_ready` except used by `AutoShardedClient`
to denote when a particular shard ID has become ready.

- **Param Shard Id:** The shard ID that is ready.
- **Type Shard Id:** `int`

<a id="function-on-shard-resumed-shard-id"></a>

#### `on_shard_resumed(shard_id)`

Similar to `on_resumed` except used by `AutoShardedClient`
to denote when a particular shard ID has resumed a session.

> **Added in version 1.4**

- **Param Shard Id:** The shard ID that has resumed.
- **Type Shard Id:** `int`

### Guilds

<a id="function-on-guild-available-guild"></a>

#### `on_guild_available(guild)`

on\_guild\_unavailable(guild)

Called when a guild becomes available or unavailable. The guild must have
existed in the `Client.guilds` cache.

This requires `Intents.guilds` to be enabled.

- **Param Guild:** The `Guild` that has changed availability.

<a id="function-on-guild-join-guild"></a>

#### `on_guild_join(guild)`

Called when a `Guild` is either created by the `Client` or when the
`Client` joins a guild.

This requires `Intents.guilds` to be enabled.

- **Param Guild:** The guild that was joined.
- **Type Guild:** `Guild`

<a id="function-on-guild-remove-guild"></a>

#### `on_guild_remove(guild)`

Called when a `Guild` is removed from the `Client`.

This happens through, but not limited to, these circumstances:

- The client got banned.
- The client got kicked.
- The client left the guild.
- The client or the guild owner deleted the guild.

In order for this event to be invoked then the `Client` must have
been part of the guild to begin with. (i.e. it is part of `Client.guilds`)

This requires `Intents.guilds` to be enabled.

- **Param Guild:** The guild that got removed.
- **Type Guild:** `Guild`

<a id="function-on-guild-update-before-after"></a>

#### `on_guild_update(before, after)`

Called when a `Guild` updates, for example:

- Changed name
- Changed AFK channel
- Changed AFK timeout
- etc

This requires `Intents.guilds` to be enabled.

- **Param Before:** The guild prior to being updated.
- **Type Before:** `Guild`
- **Param After:** The guild after being updated.
- **Type After:** `Guild`

<a id="function-on-guild-emojis-update-guild-before-after"></a>

#### `on_guild_emojis_update(guild, before, after)`

Called when a `Guild` adds or removes `Emoji`.

This requires `Intents.emojis_and_stickers` to be enabled.

- **Param Guild:** The guild who got their emojis updated.
- **Type Guild:** `Guild`
- **Param Before:** A list of emojis before the update.
- **Type Before:** Sequence\[`Emoji`]
- **Param After:** A list of emojis after the update.
- **Type After:** Sequence\[`Emoji`]

<a id="function-on-guild-stickers-update-guild-before-after"></a>

#### `on_guild_stickers_update(guild, before, after)`

Called when a `Guild` updates its stickers.

This requires `Intents.emojis_and_stickers` to be enabled.

> **Added in version 2.0**

- **Param Guild:** The guild who got their stickers updated.
- **Type Guild:** `Guild`
- **Param Before:** A list of stickers before the update.
- **Type Before:** Sequence\[`GuildSticker`]
- **Param After:** A list of stickers after the update.
- **Type After:** Sequence\[`GuildSticker`]

<a id="function-on-audit-log-entry-create-entry"></a>

#### `on_audit_log_entry_create(entry)`

Called when a `Guild` gets a new audit log entry.
You must have `Permissions.view_audit_log` to receive this.

This requires `Intents.moderation` to be enabled.

> **Added in version 2.2**

> **Warning**
> Audit log entries received through the gateway are subject to data retrieval
> from cache rather than REST. This means that some data might not be present
> when you expect it to be. For example, the `AuditLogEntry.target`
> attribute will usually be a `discord.Object` and the
> `AuditLogEntry.user` attribute will depend on user and member cache.
>
> To get the user ID of entry, `AuditLogEntry.user_id` can be used instead.

- **Param Entry:** The audit log entry that was created.
- **Type Entry:** `AuditLogEntry`

<a id="function-on-invite-create-invite"></a>

#### `on_invite_create(invite)`

Called when an `Invite` is created.
You must have `Permissions.manage_channels` to receive this.

> **Added in version 1.3**

> **Note**
> There is a rare possibility that the `Invite.guild` and `Invite.channel`
> attributes will be of `Object` rather than the respective models.

This requires `Intents.invites` to be enabled.

- **Param Invite:** The invite that was created.
- **Type Invite:** `Invite`

<a id="function-on-invite-delete-invite"></a>

#### `on_invite_delete(invite)`

Called when an `Invite` is deleted.
You must have `Permissions.manage_channels` to receive this.

> **Added in version 1.3**

> **Note**
> There is a rare possibility that the `Invite.guild` and `Invite.channel`
> attributes will be of `Object` rather than the respective models.
>
> Outside of those two attributes, the only other attribute guaranteed to be
> filled by the Discord gateway for this event is `Invite.code`.

This requires `Intents.invites` to be enabled.

- **Param Invite:** The invite that was deleted.
- **Type Invite:** `Invite`

### Integrations

<a id="function-on-integration-create-integration"></a>

#### `on_integration_create(integration)`

Called when an integration is created.

This requires `Intents.integrations` to be enabled.

> **Added in version 2.0**

- **Param Integration:** The integration that was created.
- **Type Integration:** `Integration`

<a id="function-on-integration-update-integration"></a>

#### `on_integration_update(integration)`

Called when an integration is updated.

This requires `Intents.integrations` to be enabled.

> **Added in version 2.0**

- **Param Integration:** The integration that was updated.
- **Type Integration:** `Integration`

<a id="function-on-guild-integrations-update-guild"></a>

#### `on_guild_integrations_update(guild)`

Called whenever an integration is created, modified, or removed from a guild.

This requires `Intents.integrations` to be enabled.

> **Added in version 1.4**

- **Param Guild:** The guild that had its integrations updated.
- **Type Guild:** `Guild`

<a id="function-on-webhooks-update-channel"></a>

#### `on_webhooks_update(channel)`

Called whenever a webhook is created, modified, or removed from a guild channel.

This requires `Intents.webhooks` to be enabled.

- **Param Channel:** The channel that had its webhooks updated.
- **Type Channel:** `abc.GuildChannel`

<a id="function-on-raw-integration-delete-payload"></a>

#### `on_raw_integration_delete(payload)`

Called when an integration is deleted.

This requires `Intents.integrations` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawIntegrationDeleteEvent`

### Interactions

<a id="function-on-interaction-interaction"></a>

#### `on_interaction(interaction)`

Called when an interaction happened.

This currently happens due to slash command invocations or components being used.

> **Warning**
> This is a low level function that is not generally meant to be used.
> If you are working with components, consider using the callbacks associated
> with the `discord.ui.View` instead as it provides a nicer user experience.

> **Added in version 2.0**

- **Param Interaction:** The interaction data.
- **Type Interaction:** `Interaction`

### Members

<a id="function-on-member-join-member"></a>

#### `on_member_join(member)`

Called when a `Member` joins a `Guild`.

This requires `Intents.members` to be enabled.

- **Param Member:** The member who joined.
- **Type Member:** `Member`

<a id="function-on-member-remove-member"></a>

#### `on_member_remove(member)`

Called when a `Member` leaves a `Guild`.

If the guild or member could not be found in the internal cache this event
will not be called, you may use `on_raw_member_remove` instead.

This requires `Intents.members` to be enabled.

- **Param Member:** The member who left.
- **Type Member:** `Member`

<a id="function-on-raw-member-remove-payload"></a>

#### `on_raw_member_remove(payload)`

Called when a `Member` leaves a `Guild`.

Unlike `on_member_remove`
this is called regardless of the guild or member being in the internal cache.

This requires `Intents.members` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawMemberRemoveEvent`

<a id="function-on-member-update-before-after"></a>

#### `on_member_update(before, after)`

Called when a `Member` updates their profile.

This is called when one or more of the following things change:

- nickname
- roles
- pending
- timeout
- guild avatar
- flags

Due to a Discord limitation, this event is not dispatched when a member's timeout expires.

This requires `Intents.members` to be enabled.

- **Param Before:** The updated member's old info.
- **Type Before:** `Member`
- **Param After:** The updated member's updated info.
- **Type After:** `Member`

<a id="function-on-user-update-before-after"></a>

#### `on_user_update(before, after)`

Called when a `User` updates their profile.

This is called when one or more of the following things change:

- avatar
- username
- discriminator
- primary guild

This requires `Intents.members` to be enabled.

- **Param Before:** The updated user's old info.
- **Type Before:** `User`
- **Param After:** The updated user's updated info.
- **Type After:** `User`

<a id="function-on-member-ban-guild-user"></a>

#### `on_member_ban(guild, user)`

Called when a user gets banned from a `Guild`.

This requires `Intents.moderation` to be enabled.

- **Param Guild:** The guild the user got banned from.
- **Type Guild:** `Guild`
- **Param User:** The user that got banned.
  Can be either `User` or `Member` depending if
  the user was in the guild or not at the time of removal.
- **Type User:** Union\[`User`, `Member`]

<a id="function-on-member-unban-guild-user"></a>

#### `on_member_unban(guild, user)`

Called when a `User` gets unbanned from a `Guild`.

This requires `Intents.moderation` to be enabled.

- **Param Guild:** The guild the user got unbanned from.
- **Type Guild:** `Guild`
- **Param User:** The user that got unbanned.
- **Type User:** `User`

<a id="function-on-presence-update-before-after"></a>

#### `on_presence_update(before, after)`

Called when a `Member` updates their presence.

This is called when one or more of the following things change:

- status
- activity

This requires `Intents.presences` and `Intents.members` to be enabled.

> **Added in version 2.0**

- **Param Before:** The updated member's old info.
- **Type Before:** `Member`
- **Param After:** The updated member's updated info.
- **Type After:** `Member`

<a id="function-on-raw-presence-update-payload"></a>

#### `on_raw_presence_update(payload)`

Called when a `Member` updates their presence.

This requires `Intents.presences` to be enabled.

Unlike `on_presence_update`, when enabled, this is called regardless of the state of internal guild
and member caches, and **does not** provide a comparison between the previous and updated states of the `Member`.

> **Important**
> By default, this event is only dispatched when `Intents.presences` is enabled **and** `Intents.members`
> is disabled.
>
> You can manually override this behaviour by setting the **enable\_raw\_presences** flag in the `Client`,
> however `Intents.presences` is always required for this event to work.

> **Added in version 2.5**

- **Param Payload:** The raw presence update event model.
- **Type Payload:** `RawPresenceUpdateEvent`

### Messages

<a id="function-on-message-message"></a>

#### `on_message(message)`

Called when a `Message` is created and sent.

This requires `Intents.messages` to be enabled.

> **Warning**
> Your bot's own messages and private messages are sent through this
> event. This can lead cases of 'recursion' depending on how your bot was
> programmed. If you want the bot to not reply to itself, consider
> checking the user IDs. Note that `ext.commands.Bot` does not
> have this problem.

- **Param Message:** The current message.
- **Type Message:** `Message`

<a id="function-on-message-edit-before-after"></a>

#### `on_message_edit(before, after)`

Called when a `Message` receives an update event. If the message is not found
in the internal message cache, then these events will not be called.
Messages might not be in cache if the message is too old
or the client is participating in high traffic guilds.

If this occurs increase the `max_messages` parameter
or use the `on_raw_message_edit` event instead.

The following non-exhaustive cases trigger this event:

- A message has been pinned or unpinned.

- The message content has been changed.

- The message has received an embed.

  - For performance reasons, the embed server does not do this in a "consistent" manner.

- The message's embeds were suppressed or unsuppressed.

- A call message has received an update to its participants or ending time.

This requires `Intents.messages` to be enabled.

- **Param Before:** The previous version of the message.
- **Type Before:** `Message`
- **Param After:** The current version of the message.
- **Type After:** `Message`

<a id="function-on-message-delete-message"></a>

#### `on_message_delete(message)`

Called when a message is deleted. If the message is not found in the
internal message cache, then this event will not be called.
Messages might not be in cache if the message is too old
or the client is participating in high traffic guilds.

If this occurs increase the `max_messages` parameter
or use the `on_raw_message_delete` event instead.

This requires `Intents.messages` to be enabled.

- **Param Message:** The deleted message.
- **Type Message:** `Message`

<a id="function-on-bulk-message-delete-messages"></a>

#### `on_bulk_message_delete(messages)`

Called when messages are bulk deleted. If none of the messages deleted
are found in the internal message cache, then this event will not be called.
If individual messages were not found in the internal message cache,
this event will still be called, but the messages not found will not be included in
the messages list. Messages might not be in cache if the message is too old
or the client is participating in high traffic guilds.

If this occurs increase the `max_messages` parameter
or use the `on_raw_bulk_message_delete` event instead.

This requires `Intents.messages` to be enabled.

- **Param Messages:** The messages that have been deleted.
- **Type Messages:** List\[`Message`]

<a id="function-on-raw-message-edit-payload"></a>

#### `on_raw_message_edit(payload)`

Called when a message is edited. Unlike `on_message_edit`, this is called
regardless of the state of the internal message cache.

If the message is found in the message cache,
it can be accessed via `RawMessageUpdateEvent.cached_message`. The cached message represents
the message before it has been edited. For example, if the content of a message is modified and
triggers the `on_raw_message_edit` coroutine, the `RawMessageUpdateEvent.cached_message`
will return a `Message` object that represents the message before the content was modified.

Due to the inherently raw nature of this event, the data parameter coincides with
the raw data given by the [gateway](https://discord.com/developers/docs/topics/gateway-events#message-update).

Since the data payload can be partial, care must be taken when accessing stuff in the dictionary.
One example of a common case of partial data is when the `'content'` key is inaccessible. This
denotes an "embed" only edit, which is an edit in which only the embeds are updated by the Discord
embed server.

This requires `Intents.messages` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawMessageUpdateEvent`

<a id="function-on-raw-message-delete-payload"></a>

#### `on_raw_message_delete(payload)`

Called when a message is deleted. Unlike `on_message_delete`, this is
called regardless of the message being in the internal message cache or not.

If the message is found in the message cache,
it can be accessed via `RawMessageDeleteEvent.cached_message`

This requires `Intents.messages` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawMessageDeleteEvent`

<a id="function-on-raw-bulk-message-delete-payload"></a>

#### `on_raw_bulk_message_delete(payload)`

Called when a bulk delete is triggered. Unlike `on_bulk_message_delete`, this is
called regardless of the messages being in the internal message cache or not.

If the messages are found in the message cache,
they can be accessed via `RawBulkMessageDeleteEvent.cached_messages`

This requires `Intents.messages` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawBulkMessageDeleteEvent`

### Polls

<a id="function-on-poll-vote-add-user-answer"></a>

#### `on_poll_vote_add(user, answer)`

on\_poll\_vote\_remove(user, answer)

Called when a `Poll` gains or loses a vote. If the `user` or `answer`'s poll
parent message are not cached then this event will not be called.

This requires `Intents.message_content` and `Intents.polls` to be enabled.

> **Note**
> If the poll allows multiple answers and the user removes or adds multiple votes, this
> event will be called as many times as votes that are added or removed.

> **Added in version 2.4**

- **Param User:** The user that performed the action.
- **Type User:** Union\[`User`, `Member`]
- **Param Answer:** The answer the user voted or removed their vote from.
- **Type Answer:** `PollAnswer`

<a id="function-on-raw-poll-vote-add-payload"></a>

#### `on_raw_poll_vote_add(payload)`

on\_raw\_poll\_vote\_remove(payload)

Called when a `Poll` gains or loses a vote. Unlike `on_poll_vote_add` and `on_poll_vote_remove`
this is called regardless of the state of the internal user and message cache.

This requires `Intents.message_content` and `Intents.polls` to be enabled.

> **Note**
> If the poll allows multiple answers and the user removes or adds multiple votes, this
> event will be called as many times as votes that are added or removed.

> **Added in version 2.4**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawPollVoteActionEvent`

### Reactions

<a id="function-on-reaction-add-reaction-user"></a>

#### `on_reaction_add(reaction, user)`

Called when a message has a reaction added to it. Similar to `on_message_edit`,
if the message is not found in the internal message cache, then this
event will not be called. Consider using `on_raw_reaction_add` instead.

> **Note**
> To get the `Message` being reacted, access it via `Reaction.message`.

This requires `Intents.reactions` to be enabled.

> **Note**
> This doesn't require `Intents.members` within a guild context,
> but due to Discord not providing updated user information in a direct message
> it's required for direct messages to receive this event.
> Consider using `on_raw_reaction_add` if you need this and do not otherwise want
> to enable the members intent.

> **Warning**
> This event does not have a way of differentiating whether a reaction is a
> burst reaction (also known as "super reaction") or not. If you need this,
> consider using `on_raw_reaction_add` instead.

- **Param Reaction:** The current state of the reaction.
- **Type Reaction:** `Reaction`
- **Param User:** The user who added the reaction.
- **Type User:** Union\[`Member`, `User`]

<a id="function-on-reaction-remove-reaction-user"></a>

#### `on_reaction_remove(reaction, user)`

Called when a message has a reaction removed from it. Similar to on\_message\_edit,
if the message is not found in the internal message cache, then this event
will not be called.

> **Note**
> To get the message being reacted, access it via `Reaction.message`.

This requires both `Intents.reactions` and `Intents.members` to be enabled.

> **Note**
> Consider using `on_raw_reaction_remove` if you need this and do not want
> to enable the members intent.

> **Warning**
> This event does not have a way of differentiating whether a reaction is a
> burst reaction (also known as "super reaction") or not. If you need this,
> consider using `on_raw_reaction_remove` instead.

- **Param Reaction:** The current state of the reaction.
- **Type Reaction:** `Reaction`
- **Param User:** The user whose reaction was removed.
- **Type User:** Union\[`Member`, `User`]

<a id="function-on-reaction-clear-message-reactions"></a>

#### `on_reaction_clear(message, reactions)`

Called when a message has all its reactions removed from it. Similar to `on_message_edit`,
if the message is not found in the internal message cache, then this event
will not be called. Consider using `on_raw_reaction_clear` instead.

This requires `Intents.reactions` to be enabled.

- **Param Message:** The message that had its reactions cleared.
- **Type Message:** `Message`
- **Param Reactions:** The reactions that were removed.
- **Type Reactions:** List\[`Reaction`]

<a id="function-on-reaction-clear-emoji-reaction"></a>

#### `on_reaction_clear_emoji(reaction)`

Called when a message has a specific reaction removed from it. Similar to `on_message_edit`,
if the message is not found in the internal message cache, then this event
will not be called. Consider using `on_raw_reaction_clear_emoji` instead.

This requires `Intents.reactions` to be enabled.

> **Added in version 1.3**

- **Param Reaction:** The reaction that got cleared.
- **Type Reaction:** `Reaction`

<a id="function-on-raw-reaction-add-payload"></a>

#### `on_raw_reaction_add(payload)`

Called when a message has a reaction added. Unlike `on_reaction_add`, this is
called regardless of the state of the internal message cache.

This requires `Intents.reactions` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawReactionActionEvent`

<a id="function-on-raw-reaction-remove-payload"></a>

#### `on_raw_reaction_remove(payload)`

Called when a message has a reaction removed. Unlike `on_reaction_remove`, this is
called regardless of the state of the internal message cache.

This requires `Intents.reactions` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawReactionActionEvent`

<a id="function-on-raw-reaction-clear-payload"></a>

#### `on_raw_reaction_clear(payload)`

Called when a message has all its reactions removed. Unlike `on_reaction_clear`,
this is called regardless of the state of the internal message cache.

This requires `Intents.reactions` to be enabled.

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawReactionClearEvent`

<a id="function-on-raw-reaction-clear-emoji-payload"></a>

#### `on_raw_reaction_clear_emoji(payload)`

Called when a message has a specific reaction removed from it. Unlike `on_reaction_clear_emoji` this is called
regardless of the state of the internal message cache.

This requires `Intents.reactions` to be enabled.

> **Added in version 1.3**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawReactionClearEmojiEvent`

### Roles

<a id="function-on-guild-role-create-role"></a>

#### `on_guild_role_create(role)`

on\_guild\_role\_delete(role)

Called when a `Guild` creates or deletes a new `Role`.

To get the guild it belongs to, use `Role.guild`.

This requires `Intents.guilds` to be enabled.

- **Param Role:** The role that was created or deleted.
- **Type Role:** `Role`

<a id="function-on-guild-role-update-before-after"></a>

#### `on_guild_role_update(before, after)`

Called when a `Role` is changed guild-wide.

This requires `Intents.guilds` to be enabled.

- **Param Before:** The updated role's old info.
- **Type Before:** `Role`
- **Param After:** The updated role's updated info.
- **Type After:** `Role`

### Scheduled Events

<a id="function-on-scheduled-event-create-event"></a>

#### `on_scheduled_event_create(event)`

on\_scheduled\_event\_delete(event)

Called when a `ScheduledEvent` is created or deleted.

This requires `Intents.guild_scheduled_events` to be enabled.

> **Added in version 2.0**

- **Param Event:** The scheduled event that was created or deleted.
- **Type Event:** `ScheduledEvent`

<a id="function-on-scheduled-event-update-before-after"></a>

#### `on_scheduled_event_update(before, after)`

Called when a `ScheduledEvent` is updated.

This requires `Intents.guild_scheduled_events` to be enabled.

The following, but not limited to, examples illustrate when this event is called:

- The scheduled start/end times are changed.
- The channel is changed.
- The description is changed.
- The status is changed.
- The image is changed.

> **Added in version 2.0**

- **Param Before:** The scheduled event before the update.
- **Type Before:** `ScheduledEvent`
- **Param After:** The scheduled event after the update.
- **Type After:** `ScheduledEvent`

<a id="function-on-scheduled-event-user-add-event-user"></a>

#### `on_scheduled_event_user_add(event, user)`

on\_scheduled\_event\_user\_remove(event, user)

Called when a user is added or removed from a `ScheduledEvent`.

This requires `Intents.guild_scheduled_events` to be enabled.

> **Added in version 2.0**

- **Param Event:** The scheduled event that the user was added or removed from.
- **Type Event:** `ScheduledEvent`
- **Param User:** The user that was added or removed.
- **Type User:** `User`

### Soundboard

<a id="function-on-soundboard-sound-create-sound"></a>

#### `on_soundboard_sound_create(sound)`

on\_soundboard\_sound\_delete(sound)

Called when a `SoundboardSound` is created or deleted.

> **Added in version 2.5**

- **Param Sound:** The soundboard sound that was created or deleted.
- **Type Sound:** `SoundboardSound`

<a id="function-on-soundboard-sound-update-before-after"></a>

#### `on_soundboard_sound_update(before, after)`

Called when a `SoundboardSound` is updated.

The following examples illustrate when this event is called:

- The name is changed.
- The emoji is changed.
- The volume is changed.

> **Added in version 2.5**

- **Param Before:** The soundboard sound before the update.
- **Type Before:** `SoundboardSound`
- **Param After:** The soundboard sound after the update.
- **Type After:** `SoundboardSound`

### Stages

<a id="function-on-stage-instance-create-stage-instance"></a>

#### `on_stage_instance_create(stage_instance)`

on\_stage\_instance\_delete(stage\_instance)

Called when a `StageInstance` is created or deleted for a `StageChannel`.

> **Added in version 2.0**

- **Param Stage Instance:** The stage instance that was created or deleted.
- **Type Stage Instance:** `StageInstance`

<a id="function-on-stage-instance-update-before-after"></a>

#### `on_stage_instance_update(before, after)`

Called when a `StageInstance` is updated.

The following, but not limited to, examples illustrate when this event is called:

- The topic is changed.
- The privacy level is changed.

> **Added in version 2.0**

- **Param Before:** The stage instance before the update.
- **Type Before:** `StageInstance`
- **Param After:** The stage instance after the update.
- **Type After:** `StageInstance`

### Subscriptions

<a id="function-on-subscription-create-subscription"></a>

#### `on_subscription_create(subscription)`

Called when a subscription is created.

> **Added in version 2.5**

- **Param Subscription:** The subscription that was created.
- **Type Subscription:** `Subscription`

<a id="function-on-subscription-update-subscription"></a>

#### `on_subscription_update(subscription)`

Called when a subscription is updated.

> **Added in version 2.5**

- **Param Subscription:** The subscription that was updated.
- **Type Subscription:** `Subscription`

<a id="function-on-subscription-delete-subscription"></a>

#### `on_subscription_delete(subscription)`

Called when a subscription is deleted.

> **Added in version 2.5**

- **Param Subscription:** The subscription that was deleted.
- **Type Subscription:** `Subscription`

### Threads

<a id="function-on-thread-create-thread"></a>

#### `on_thread_create(thread)`

Called whenever a thread is created.

Note that you can get the guild from `Thread.guild`.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Thread:** The thread that was created.
- **Type Thread:** `Thread`

<a id="function-on-thread-join-thread"></a>

#### `on_thread_join(thread)`

Called whenever a thread is joined.

Note that you can get the guild from `Thread.guild`.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Thread:** The thread that got joined.
- **Type Thread:** `Thread`

<a id="function-on-thread-update-before-after"></a>

#### `on_thread_update(before, after)`

Called whenever a thread is updated. If the thread could
not be found in the internal cache this event will not be called.
Threads will not be in the cache if they are archived.

If you need this information use `on_raw_thread_update` instead.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Before:** The updated thread's old info.
- **Type Before:** `Thread`
- **Param After:** The updated thread's new info.
- **Type After:** `Thread`

<a id="function-on-thread-remove-thread"></a>

#### `on_thread_remove(thread)`

Called whenever a thread is removed. This is different from a thread being deleted.

Note that you can get the guild from `Thread.guild`.

This requires `Intents.guilds` to be enabled.

> **Warning**
> Due to technical limitations, this event might not be called
> as soon as one expects. Since the library tracks thread membership
> locally, the API only sends updated thread membership status upon being
> synced by joining a thread.

> **Added in version 2.0**

- **Param Thread:** The thread that got removed.
- **Type Thread:** `Thread`

<a id="function-on-thread-delete-thread"></a>

#### `on_thread_delete(thread)`

Called whenever a thread is deleted. If the thread could
not be found in the internal cache this event will not be called.
Threads will not be in the cache if they are archived.

If you need this information use `on_raw_thread_delete` instead.

Note that you can get the guild from `Thread.guild`.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Thread:** The thread that got deleted.
- **Type Thread:** `Thread`

<a id="function-on-raw-thread-update-payload"></a>

#### `on_raw_thread_update(payload)`

Called whenever a thread is updated. Unlike `on_thread_update` this
is called regardless of the thread being in the internal thread cache or not.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawThreadUpdateEvent`

<a id="function-on-raw-thread-delete-payload"></a>

#### `on_raw_thread_delete(payload)`

Called whenever a thread is deleted. Unlike `on_thread_delete` this
is called regardless of the thread being in the internal thread cache or not.

This requires `Intents.guilds` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawThreadDeleteEvent`

<a id="function-on-thread-member-join-member"></a>

#### `on_thread_member_join(member)`

on\_thread\_member\_remove(member)

Called when a `ThreadMember` leaves or joins a `Thread`.

You can get the thread a member belongs in by accessing `ThreadMember.thread`.

This requires `Intents.members` to be enabled.

> **Added in version 2.0**

- **Param Member:** The member who joined or left.
- **Type Member:** `ThreadMember`

<a id="function-on-raw-thread-member-remove-payload"></a>

#### `on_raw_thread_member_remove(payload)`

Called when a `ThreadMember` leaves a `Thread`. Unlike `on_thread_member_remove` this
is called regardless of the member being in the internal thread's members cache or not.

This requires `Intents.members` to be enabled.

> **Added in version 2.0**

- **Param Payload:** The raw event payload data.
- **Type Payload:** `RawThreadMembersUpdate`

### Voice

<a id="function-on-voice-state-update-member-before-after"></a>

#### `on_voice_state_update(member, before, after)`

Called when a `Member` changes their `VoiceState`.

The following, but not limited to, examples illustrate when this event is called:

- A member joins a voice or stage channel.
- A member leaves a voice or stage channel.
- A member is muted or deafened by their own accord.
- A member is muted or deafened by a guild administrator.

This requires `Intents.voice_states` to be enabled.

- **Param Member:** The member whose voice states changed.
- **Type Member:** `Member`
- **Param Before:** The voice state prior to the changes.
- **Type Before:** `VoiceState`
- **Param After:** The voice state after the changes.
- **Type After:** `VoiceState`

<a id="function-on-voice-channel-effect-effect"></a>

#### `on_voice_channel_effect(effect)`

Called when a `Member` sends a `VoiceChannelEffect` in a voice channel the bot is in.

This requires `Intents.voice_states` to be enabled.

> **Added in version 2.5**

- **Param Effect:** The effect that is sent.
- **Type Effect:** `VoiceChannelEffect`

<a id="discord-api-utils"></a>

## Utility Functions

<a id="api-discord-utils-find"></a>

#### `find(predicate: Callable[[T], Any], iterable: _Iter[T], /) -> Union[Optional[T], Coro[Optional[T]]]`

A helper to return the first element found in the sequence
that meets the predicate. For example: :

```python
member = discord.utils.find(lambda m: m.name == 'Mighty', channel.guild.members)
```

would find the first `discord.Member` whose name is 'Mighty' and return it.
If an entry is not found, then `None` is returned.

This is different from `py:filter` due to the fact it stops the moment it finds
a valid entry.

> **Changed in version 2.0**
> Both parameters are now positional-only.

> **Changed in version 2.0**
> The `iterable` parameter supports `asynchronous iterable`\s.

## Parameters

**predicate**

A function that returns a boolean-like result.

**iterable: Union\[`collections.abc.Iterable`, `collections.abc.AsyncIterable`]**

The iterable to search through. Using a `collections.abc.AsyncIterable`,
makes this function return a `coroutine`.

<a id="api-discord-utils-get"></a>

#### `get(iterable: _Iter[T], /, **attrs: Any) -> Union[Optional[T], Coro[Optional[T]]]`

A helper that returns the first element in the iterable that meets
all the traits passed in `attrs`. This is an alternative for
`discord.utils.find`.

When multiple attributes are specified, they are checked using
logical AND, not logical OR. Meaning they have to meet every
attribute passed in and not one of them.

To have a nested attribute search (i.e. search by `x.y`) then
pass in `x__y` as the keyword argument.

If nothing is found that matches the attributes passed, then
`None` is returned.

> **Changed in version 2.0**
> The `iterable` parameter is now positional-only.

> **Changed in version 2.0**
> The `iterable` parameter supports `asynchronous iterable`\s.

## Examples

Basic usage:

```python3
member = discord.utils.get(message.guild.members, name='Foo')
```

Multiple attribute matching:

```python3
channel = discord.utils.get(guild.voice_channels, name='Foo', bitrate=64000)
```

Nested attribute matching:

```python3
channel = discord.utils.get(client.get_all_channels(), guild__name='Cool', name='general')
```

Async iterables:

```python3
msg = await discord.utils.get(channel.history(), author__name='Dave')
```

## Parameters

**iterable: Union\[`collections.abc.Iterable`, `collections.abc.AsyncIterable`]**

The iterable to search through. Using a `collections.abc.AsyncIterable`,
makes this function return a `coroutine`.

**\*\*attrs**

Keyword arguments that denote attributes to search with.

<a id="api-discord-utils-setup-logging"></a>

#### `setup_logging( *, handler: logging.Handler = MISSING, formatter: logging.Formatter = MISSING, level: int = MISSING, root: bool = True,) -> None`

A helper function to setup logging.

This is superficially similar to `logging.basicConfig` but
uses different defaults and a colour formatter if the stream can
display colour.

This is used by the `discord.Client` to set up logging
if `log_handler` is not `None`.

> **Added in version 2.0**

## Parameters

**handler: `logging.Handler`**

The log handler to use for the library's logger.

The default log handler if not provided is `logging.StreamHandler`.

**formatter: `logging.Formatter`**

The formatter to use with the given log handler. If not provided then it
defaults to a colour based logging formatter (if available). If colour
is not available then a simple logging formatter is provided.

**level: `int`**

The default log level for the library's logger. Defaults to `logging.INFO`.

**root: `bool`**

Whether to set up the root logger rather than the library logger.
Unlike the default for `discord.Client`, this defaults to `True`.

<a id="api-discord-utils-maybe-coroutine"></a>

#### `maybe_coroutine(f: MaybeAwaitableFunc[P, T], *args: P.args, **kwargs: P.kwargs) -> T`

*coroutine*

A helper function that will await the result of a function if it's a coroutine
or return the result if it's not.

This is useful for functions that may or may not be coroutines.

> **Added in version 2.2**

## Parameters

**f: Callable\[..., Any]**

The function or coroutine to call.

**\*args**

The arguments to pass to the function.

**\*\*kwargs**

The keyword arguments to pass to the function.

## Returns

**Any**

The result of the function or coroutine.

<a id="api-discord-utils-snowflake-time"></a>

#### `snowflake_time(id: int, /) -> datetime.datetime`

Returns the creation time of the given snowflake.

> **Changed in version 2.0**
> The `id` parameter is now positional-only.

## Parameters

**id: `int`**

The snowflake ID.

## Returns

**`datetime.datetime`**

An aware datetime in UTC representing the creation time of the snowflake.

<a id="api-discord-utils-time-snowflake"></a>

#### `time_snowflake(dt: datetime.datetime, /, *, high: bool = False) -> int`

Returns a numeric snowflake pretending to be created at the given date.

When using as the lower end of a range, use `time_snowflake(dt, high=False) - 1`
to be inclusive, `high=True` to be exclusive.

When using as the higher end of a range, use `time_snowflake(dt, high=True) + 1`
to be inclusive, `high=False` to be exclusive.

> **Changed in version 2.0**
> The `high` parameter is now keyword-only and the `dt` parameter is now
> positional-only.

## Parameters

**dt: `datetime.datetime`**

A datetime object to convert to a snowflake.
If naive, the timezone is assumed to be local time.

**high: `bool`**

Whether or not to set the lower 22 bit to high or low.

## Returns

**`int`**

The snowflake representing the time given.

<a id="api-discord-utils-oauth-url"></a>

#### `oauth_url( client_id: Union[int, str], *, permissions: Permissions = MISSING, guild: Snowflake = MISSING, redirect_uri: str = MISSING, scopes: Optional[Iterable[str]] = MISSING, disable_guild_select: bool = False, state: str = MISSING,) -> str`

A helper function that returns the OAuth2 URL for inviting the bot
into guilds.

> **Changed in version 2.0**
> `permissions`, `guild`, `redirect_uri`, `scopes` and `state` parameters
> are now keyword-only.

## Parameters

**client\_id: Union\[`int`, `str`]**

The client ID for your bot.

**permissions: `discord.Permissions`**

The permissions you're requesting. If not given then you won't be requesting any
permissions.

**guild: `discord.abc.Snowflake`**

The guild to pre-select in the authorization screen, if available.

**redirect\_uri: `str`**

An optional valid redirect URI.

**scopes: Iterable\[`str`]**

An optional valid list of scopes. Defaults to `('bot', 'applications.commands')`.

> **Added in version 1.7**

**disable\_guild\_select: `bool`**

Whether to disallow the user from changing the guild dropdown.

> **Added in version 2.0**

**state: `str`**

The state to return after the authorization.

> **Added in version 2.0**

## Returns

**`str`**

The OAuth2 URL for inviting the bot into guilds.

<a id="api-discord-utils-remove-markdown"></a>

#### `remove_markdown(text: str, *, ignore_links: bool = True) -> str`

A helper function that removes markdown characters.

> **Added in version 1.7**

> **Note**
> This function is not markdown aware and may remove meaning from the original text. For example,
> if the input contains `10 * 5` then it will be converted into `10  5`.

## Parameters

**text: `str`**

The text to remove markdown from.

**ignore\_links: `bool`**

Whether to leave links alone when removing markdown. For example,
if a URL in the text contains characters such as `_` then it will
be left alone. Defaults to `True`.

## Returns

**`str`**

The text with the markdown special characters removed.

<a id="api-discord-utils-escape-markdown"></a>

#### `escape_markdown(text: str, *, as_needed: bool = False, ignore_links: bool = True) -> str`

A helper function that escapes Discord's markdown.

## Parameters

**text: `str`**

The text to escape markdown from.

**as\_needed: `bool`**

Whether to escape the markdown characters as needed. This
means that it does not escape extraneous characters if it's
not necessary, e.g. `**hello**` is escaped into `\*\*hello**`
instead of `\*\*hello\*\*`. Note however that this can open
you up to some clever syntax abuse. Defaults to `False`.

**ignore\_links: `bool`**

Whether to leave links alone when escaping markdown. For example,
if a URL in the text contains characters such as `_` then it will
be left alone. This option is not supported with `as_needed`.
Defaults to `True`.

## Returns

**`str`**

The text with the markdown special characters escaped with a slash.

<a id="api-discord-utils-escape-mentions"></a>

#### `escape_mentions(text: str) -> str`

A helper function that escapes everyone, here, role, and user mentions.

> **Note**
> This does not include channel mentions.

> **Note**
> For more granular control over what mentions should be escaped
> within messages, refer to the `discord.AllowedMentions`
> class.

## Parameters

**text: `str`**

The text to escape mentions from.

## Returns

**`str`**

The text with the mentions removed.

<a id="class-resolvedinvite"></a>

#### `ResolvedInvite`

A data class which represents a resolved invite returned from `discord.utils.resolve_invite`.

<a id="attribute-code"></a>

##### `code`

The invite code.

- **Type:** `str`

<a id="attribute-event"></a>

##### `event`

The id of the scheduled event that the invite refers to.

- **Type:** Optional\[`int`]

<a id="api-discord-utils-resolve-invite"></a>

#### `resolve_invite(invite: Union[Invite, str]) -> ResolvedInvite`

Resolves an invite from a `discord.Invite`, URL or code.

> **Changed in version 2.0**
> Now returns a `.ResolvedInvite` instead of a
> `str`.

## Parameters

**invite: Union\[`discord.Invite`, `str`]**

The invite.

## Raises

**ValueError**

The invite is not a valid Discord invite, e.g. is not a URL
or does not contain alphanumeric characters.

## Returns

**`.ResolvedInvite`**

A data class containing the invite code and the event ID.

<a id="api-discord-utils-resolve-template"></a>

#### `resolve_template(code: Union[Template, str]) -> str`

<a id="api-discord-utils-sleep-until"></a>

#### `sleep_until(when: datetime.datetime, result: Optional[T] = None) -> Optional[T]`

*coroutine*

Sleep until a specified time.

If the time supplied is in the past this function will yield instantly.

> **Added in version 1.3**

## Parameters

**when: `datetime.datetime`**

The timestamp in which to sleep until. If the datetime is naive then
it is assumed to be local time.

**result: Any**

If provided is returned to the caller when the coroutine completes.

<a id="api-discord-utils-utcnow"></a>

#### `utcnow() -> datetime.datetime`

A helper function to return an aware UTC datetime representing the current time.

This should be preferred to `datetime.datetime.utcnow` since it is an aware
datetime, compared to the naive datetime in the standard library.

> **Added in version 2.0**

## Returns

**`datetime.datetime`**

The current aware datetime in UTC.

<a id="api-discord-utils-format-dt"></a>

#### `format_dt(dt: datetime.datetime, /, style: Optional[TimestampStyle] = None) -> str`

A helper function to format a `datetime.datetime` for presentation within Discord.

This allows for a locale-independent way of presenting data using Discord specific Markdown.

| Style       | Example Output                 | Description             |
| ----------- | ------------------------------ | ----------------------- |
| t           | 22:57                          | Short Time              |
| T           | 22:57:58                       | Medium Time             |
| d           | 17/05/2016                     | Short Date              |
| D           | May 17, 2016                   | Long Date               |
| f (default) | May 17, 2016 at 22:57          | Long Date, Short Time   |
| F           | Tuesday, May 17, 2016 at 22:57 | Full Date, Short Time   |
| s           | 17/05/2016, 22:57              | Short Date, Short Time  |
| S           | 17/05/2016, 22:57:58           | Short Date, Medium Time |
| R           | 5 years ago                    | Relative Time           |

Note that the exact output depends on the user's locale setting in the client. The example output
presented is using the `en-GB` locale.

> **Added in version 2.0**

## Parameters

**dt: `datetime.datetime`**

The datetime to format.

**style: `str`**

The style to format the datetime with.

## Returns

**`str`**

The formatted string.

<a id="api-discord-utils-as-chunks"></a>

#### `as_chunks(iterator: _Iter[T], max_size: int) -> _Iter[List[T]]`

A helper function that collects an iterator into chunks of a given size.

> **Added in version 2.0**

## Parameters

**iterator: Union\[`collections.abc.Iterable`, `collections.abc.AsyncIterable`]**

The iterator to chunk, can be sync or async.

**max\_size: `int`**

The maximum chunk size.

> **Warning**
> The last chunk collected may not be as large as `max_size`.

## Returns

**Union\[`Iterator`, `AsyncIterator`]**

A new iterator which yields chunks of a given size.

<a id="data-missing"></a>

#### `MISSING`

A type safe sentinel used in the library to represent something as missing. Used to distinguish from `None` values.

> **Added in version 2.0**

<a id="discord-api-enums"></a>

## Enumerations

The API provides some enumerations for certain types of strings to avoid the API
from being stringly typed in case the strings change in the future.

All enumerations are subclasses of an internal class which mimics the behaviour
of `enum.Enum`.

<a id="class-channeltype"></a>

#### `ChannelType`

Specifies the type of channel.

<a id="attribute-text"></a>

##### `text`

A text channel.

<a id="attribute-voice"></a>

##### `voice`

A voice channel.

<a id="attribute-private"></a>

##### `private`

A private text channel. Also called a direct message.

<a id="attribute-group"></a>

##### `group`

A private group text channel.

<a id="attribute-category"></a>

##### `category`

A category channel.

<a id="attribute-news"></a>

##### `news`

A guild news channel.

<a id="attribute-stage-voice"></a>

##### `stage_voice`

A guild stage voice channel.

> **Added in version 1.7**

<a id="attribute-news-thread"></a>

##### `news_thread`

A news thread

> **Added in version 2.0**

<a id="attribute-public-thread"></a>

##### `public_thread`

A public thread

> **Added in version 2.0**

<a id="attribute-private-thread"></a>

##### `private_thread`

A private thread

> **Added in version 2.0**

<a id="attribute-forum"></a>

##### `forum`

A forum channel.

> **Added in version 2.0**

<a id="attribute-media"></a>

##### `media`

A media channel.

> **Added in version 2.4**

<a id="class-messagetype"></a>

#### `MessageType`

Specifies the type of `Message`. This is used to denote if a message
is to be interpreted as a system message or a regular message.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two messages are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two messages are not equal.

<a id="method-is-deletable"></a>

#### `is_deletable()`

Checks if the message type is deletable, as some system messages cannot be deleted.

> **Added in version 2.7**

- **Return:** A boolean denoting if the message type is deletable.
- **Rtype:** `bool`

<a id="attribute-default"></a>

##### `default`

The default message type. This is the same as regular messages.

<a id="attribute-recipient-add"></a>

##### `recipient_add`

The system message when a user is added to a group private
message or a thread.

<a id="attribute-recipient-remove"></a>

##### `recipient_remove`

The system message when a user is removed from a group private
message or a thread.

<a id="attribute-call"></a>

##### `call`

The system message denoting call state, e.g. missed call, started call,
etc.

<a id="attribute-channel-name-change"></a>

##### `channel_name_change`

The system message denoting that a channel's name has been changed.

<a id="attribute-channel-icon-change"></a>

##### `channel_icon_change`

The system message denoting that a channel's icon has been changed.

<a id="attribute-pins-add"></a>

##### `pins_add`

The system message denoting that a pinned message has been added to a channel.

<a id="attribute-new-member"></a>

##### `new_member`

The system message denoting that a new member has joined a Guild.

<a id="attribute-premium-guild-subscription"></a>

##### `premium_guild_subscription`

The system message denoting that a member has "nitro boosted" a guild.

<a id="attribute-premium-guild-tier-1"></a>

##### `premium_guild_tier_1`

The system message denoting that a member has "nitro boosted" a guild
and it achieved level 1.

<a id="attribute-premium-guild-tier-2"></a>

##### `premium_guild_tier_2`

The system message denoting that a member has "nitro boosted" a guild
and it achieved level 2.

<a id="attribute-premium-guild-tier-3"></a>

##### `premium_guild_tier_3`

The system message denoting that a member has "nitro boosted" a guild
and it achieved level 3.

<a id="attribute-channel-follow-add"></a>

##### `channel_follow_add`

The system message denoting that an announcement channel has been followed.

> **Added in version 1.3**

<a id="attribute-guild-stream"></a>

##### `guild_stream`

The system message denoting that a member is streaming in the guild.

> **Added in version 1.7**

<a id="attribute-guild-discovery-disqualified"></a>

##### `guild_discovery_disqualified`

The system message denoting that the guild is no longer eligible for Server
Discovery.

> **Added in version 1.7**

<a id="attribute-guild-discovery-requalified"></a>

##### `guild_discovery_requalified`

The system message denoting that the guild has become eligible again for Server
Discovery.

> **Added in version 1.7**

<a id="attribute-guild-discovery-grace-period-initial-warning"></a>

##### `guild_discovery_grace_period_initial_warning`

The system message denoting that the guild has failed to meet the Server
Discovery requirements for one week.

> **Added in version 1.7**

<a id="attribute-guild-discovery-grace-period-final-warning"></a>

##### `guild_discovery_grace_period_final_warning`

The system message denoting that the guild has failed to meet the Server
Discovery requirements for 3 weeks in a row.

> **Added in version 1.7**

<a id="attribute-thread-created"></a>

##### `thread_created`

The system message denoting that a thread has been created. This is only
sent if the thread has been created from an older message. The period of time
required for a message to be considered old cannot be relied upon and is up to
Discord.

> **Added in version 2.0**

<a id="attribute-reply"></a>

##### `reply`

The system message denoting that the author is replying to a message.

> **Added in version 2.0**

<a id="attribute-chat-input-command"></a>

##### `chat_input_command`

The system message denoting that a slash command was executed.

> **Added in version 2.0**

<a id="attribute-guild-invite-reminder"></a>

##### `guild_invite_reminder`

The system message sent as a reminder to invite people to the guild.

> **Added in version 2.0**

<a id="attribute-thread-starter-message"></a>

##### `thread_starter_message`

The system message denoting the message in the thread that is the one that started the
thread's conversation topic.

> **Added in version 2.0**

<a id="attribute-context-menu-command"></a>

##### `context_menu_command`

The system message denoting that a context menu command was executed.

> **Added in version 2.0**

<a id="attribute-auto-moderation-action"></a>

##### `auto_moderation_action`

The system message sent when an AutoMod rule is triggered. This is only
sent if the rule is configured to sent an alert when triggered.

> **Added in version 2.0**

<a id="attribute-role-subscription-purchase"></a>

##### `role_subscription_purchase`

The system message sent when a user purchases or renews a role subscription.

> **Added in version 2.2**

<a id="attribute-interaction-premium-upsell"></a>

##### `interaction_premium_upsell`

The system message sent when a user is given an advertisement to purchase a premium tier for
an application during an interaction.

> **Added in version 2.2**

<a id="attribute-stage-start"></a>

##### `stage_start`

The system message sent when the stage starts.

> **Added in version 2.2**

<a id="attribute-stage-end"></a>

##### `stage_end`

The system message sent when the stage ends.

> **Added in version 2.2**

<a id="attribute-stage-speaker"></a>

##### `stage_speaker`

The system message sent when the stage speaker changes.

> **Added in version 2.2**

<a id="attribute-stage-raise-hand"></a>

##### `stage_raise_hand`

The system message sent when a user is requesting to speak by raising their hands.

> **Added in version 2.2**

<a id="attribute-stage-topic"></a>

##### `stage_topic`

The system message sent when the stage topic changes.

> **Added in version 2.2**

<a id="attribute-guild-application-premium-subscription"></a>

##### `guild_application_premium_subscription`

The system message sent when an application's premium subscription is purchased for the guild.

> **Added in version 2.2**

<a id="attribute-guild-incident-alert-mode-enabled"></a>

##### `guild_incident_alert_mode_enabled`

The system message sent when security actions is enabled.

> **Added in version 2.4**

<a id="attribute-guild-incident-alert-mode-disabled"></a>

##### `guild_incident_alert_mode_disabled`

The system message sent when security actions is disabled.

> **Added in version 2.4**

<a id="attribute-guild-incident-report-raid"></a>

##### `guild_incident_report_raid`

The system message sent when a raid is reported.

> **Added in version 2.4**

<a id="attribute-guild-incident-report-false-alarm"></a>

##### `guild_incident_report_false_alarm`

The system message sent when a false alarm is reported.

> **Added in version 2.4**

<a id="attribute-purchase-notification"></a>

##### `purchase_notification`

The system message sent when a purchase is made in the guild.

> **Added in version 2.5**

<a id="attribute-poll-result"></a>

##### `poll_result`

The system message sent when a poll has closed.

> **Added in version 2.5**

<a id="attribute-emoji-added"></a>

##### `emoji_added`

The system message sent when a custom emoji is added to the guild.

> **Added in version 2.7**

<a id="class-userflags"></a>

#### `UserFlags`

Represents Discord User flags.

<a id="attribute-staff"></a>

##### `staff`

The user is a Discord Employee.

<a id="attribute-partner"></a>

##### `partner`

The user is a Discord Partner.

<a id="attribute-hypesquad"></a>

##### `hypesquad`

The user is a HypeSquad Events member.

<a id="attribute-bug-hunter"></a>

##### `bug_hunter`

The user is a Bug Hunter.

<a id="attribute-mfa-sms"></a>

##### `mfa_sms`

The user has SMS recovery for Multi Factor Authentication enabled.

<a id="attribute-premium-promo-dismissed"></a>

##### `premium_promo_dismissed`

The user has dismissed the Discord Nitro promotion.

<a id="attribute-hypesquad-bravery"></a>

##### `hypesquad_bravery`

The user is a HypeSquad Bravery member.

<a id="attribute-hypesquad-brilliance"></a>

##### `hypesquad_brilliance`

The user is a HypeSquad Brilliance member.

<a id="attribute-hypesquad-balance"></a>

##### `hypesquad_balance`

The user is a HypeSquad Balance member.

<a id="attribute-early-supporter"></a>

##### `early_supporter`

The user is an Early Supporter.

<a id="attribute-team-user"></a>

##### `team_user`

The user is a Team User.

<a id="attribute-system"></a>

##### `system`

The user is a system user (i.e. represents Discord officially).

<a id="attribute-has-unread-urgent-messages"></a>

##### `has_unread_urgent_messages`

The user has an unread system message.

<a id="attribute-bug-hunter-level-2"></a>

##### `bug_hunter_level_2`

The user is a Bug Hunter Level 2.

<a id="attribute-verified-bot"></a>

##### `verified_bot`

The user is a Verified Bot.

<a id="attribute-verified-bot-developer"></a>

##### `verified_bot_developer`

The user is an Early Verified Bot Developer.

<a id="attribute-discord-certified-moderator"></a>

##### `discord_certified_moderator`

The user is a Moderator Programs Alumni.

<a id="attribute-bot-http-interactions"></a>

##### `bot_http_interactions`

The user is a bot that only uses HTTP interactions and is shown in the online member list.

> **Added in version 2.0**

<a id="attribute-spammer"></a>

##### `spammer`

The user is flagged as a spammer by Discord.

> **Added in version 2.0**

<a id="attribute-active-developer"></a>

##### `active_developer`

The user is an active developer.

> **Added in version 2.1**

<a id="class-activitytype"></a>

#### `ActivityType`

Specifies the type of `Activity`. This is used to check how to
interpret the activity itself.

<a id="attribute-unknown"></a>

##### `unknown`

An unknown activity type. This should generally not happen.

<a id="attribute-playing"></a>

##### `playing`

A "Playing" activity type.

<a id="attribute-streaming"></a>

##### `streaming`

A "Streaming" activity type.

<a id="attribute-listening"></a>

##### `listening`

A "Listening" activity type.

<a id="attribute-watching"></a>

##### `watching`

A "Watching" activity type.

<a id="attribute-custom"></a>

##### `custom`

A custom activity type.

<a id="attribute-competing"></a>

##### `competing`

A competing activity type.

> **Added in version 1.5**

<a id="class-verificationlevel"></a>

#### `VerificationLevel`

Specifies a `Guild`'s verification level, which is the criteria in
which a member must meet before being able to send messages to the guild.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two verification levels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two verification levels are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a verification level is higher than another.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a verification level is lower than another.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a verification level is higher or equal to another.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a verification level is lower or equal to another.

<a id="attribute-none"></a>

##### `none`

No criteria set.

<a id="attribute-low"></a>

##### `low`

Member must have a verified email on their Discord account.

<a id="attribute-medium"></a>

##### `medium`

Member must have a verified email and be registered on Discord for more
than five minutes.

<a id="attribute-high"></a>

##### `high`

Member must have a verified email, be registered on Discord for more
than five minutes, and be a member of the guild itself for more than
ten minutes.

<a id="attribute-highest"></a>

##### `highest`

Member must have a verified phone on their Discord account.

<a id="class-notificationlevel"></a>

#### `NotificationLevel`

Specifies whether a `Guild` has notifications on for all messages or mentions only by default.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two notification levels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two notification levels are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a notification level is higher than another.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a notification level is lower than another.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a notification level is higher or equal to another.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a notification level is lower or equal to another.

<a id="attribute-all-messages"></a>

##### `all_messages`

Members receive notifications for every message regardless of them being mentioned.

<a id="attribute-only-mentions"></a>

##### `only_mentions`

Members receive notifications for messages they are mentioned in.

<a id="class-contentfilter"></a>

#### `ContentFilter`

Specifies a `Guild`'s explicit content filter, which is the machine
learning algorithms that Discord uses to detect if an image contains
pornography or otherwise explicit content.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two content filter levels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two content filter levels are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a content filter level is higher than another.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a content filter level is lower than another.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a content filter level is higher or equal to another.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a content filter level is lower or equal to another.

<a id="attribute-disabled"></a>

##### `disabled`

The guild does not have the content filter enabled.

<a id="attribute-no-role"></a>

##### `no_role`

The guild has the content filter enabled for members without a role.

<a id="attribute-all-members"></a>

##### `all_members`

The guild has the content filter enabled for every member.

<a id="class-status"></a>

#### `Status`

Specifies a `Member` 's status.

<a id="attribute-online"></a>

##### `online`

The member is online.

<a id="attribute-offline"></a>

##### `offline`

The member is offline.

<a id="attribute-idle"></a>

##### `idle`

The member is idle.

<a id="attribute-dnd"></a>

##### `dnd`

The member is "Do Not Disturb".

<a id="attribute-do-not-disturb"></a>

##### `do_not_disturb`

An alias for `dnd`.

<a id="attribute-invisible"></a>

##### `invisible`

The member is "invisible". In reality, this is only used when sending
a presence a la `Client.change_presence`. When you receive a
user's presence this will be `offline` instead.

<a id="class-auditlogaction"></a>

#### `AuditLogAction`

Represents the type of action being done for a `AuditLogEntry`,
which is retrievable via `Guild.audit_logs`.

<a id="attribute-guild-update"></a>

##### `guild_update`

The guild has updated. Things that trigger this include:

- Changing the guild vanity URL
- Changing the guild invite splash
- Changing the guild AFK channel or timeout
- Changing the guild voice server region
- Changing the guild icon, banner, or discovery splash
- Changing the guild moderation settings
- Changing things related to the guild widget

When this is the action, the type of `AuditLogEntry.target` is
the `Guild`.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.afk_channel`
- `AuditLogDiff.system_channel`
- `AuditLogDiff.afk_timeout`
- `AuditLogDiff.default_notifications`
- `AuditLogDiff.explicit_content_filter`
- `AuditLogDiff.mfa_level`
- `AuditLogDiff.name`
- `AuditLogDiff.owner`
- `AuditLogDiff.splash`
- `AuditLogDiff.discovery_splash`
- `AuditLogDiff.icon`
- `AuditLogDiff.banner`
- `AuditLogDiff.vanity_url_code`
- `AuditLogDiff.description`
- `AuditLogDiff.preferred_locale`
- `AuditLogDiff.prune_delete_days`
- `AuditLogDiff.public_updates_channel`
- `AuditLogDiff.rules_channel`
- `AuditLogDiff.verification_level`
- `AuditLogDiff.widget_channel`
- `AuditLogDiff.widget_enabled`
- `AuditLogDiff.premium_progress_bar_enabled`
- `AuditLogDiff.system_channel_flags`

<a id="attribute-channel-create"></a>

##### `channel_create`

A new channel was created.

When this is the action, the type of `AuditLogEntry.target` is
either a `abc.GuildChannel` or `Object` with an ID.

A more filled out object in the `Object` case can be found
by using `AuditLogEntry.after`.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.type`
- `AuditLogDiff.overwrites`

<a id="attribute-channel-update"></a>

##### `channel_update`

A channel was updated. Things that trigger this include:

- The channel name or topic was changed
- The channel bitrate was changed

When this is the action, the type of `AuditLogEntry.target` is
the `abc.GuildChannel` or `Object` with an ID.

A more filled out object in the `Object` case can be found
by using `AuditLogEntry.after` or `AuditLogEntry.before`.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.type`
- `AuditLogDiff.position`
- `AuditLogDiff.overwrites`
- `AuditLogDiff.topic`
- `AuditLogDiff.bitrate`
- `AuditLogDiff.rtc_region`
- `AuditLogDiff.video_quality_mode`
- `AuditLogDiff.default_auto_archive_duration`
- `AuditLogDiff.nsfw`
- `AuditLogDiff.slowmode_delay`
- `AuditLogDiff.user_limit`

<a id="attribute-channel-delete"></a>

##### `channel_delete`

A channel was deleted.

When this is the action, the type of `AuditLogEntry.target` is
an `Object` with an ID.

A more filled out object can be found by using the
`AuditLogEntry.before` object.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.type`
- `AuditLogDiff.overwrites`
- `AuditLogDiff.flags`
- `AuditLogDiff.nsfw`
- `AuditLogDiff.slowmode_delay`

<a id="attribute-overwrite-create"></a>

##### `overwrite_create`

A channel permission overwrite was created.

When this is the action, the type of `AuditLogEntry.target` is
the `abc.GuildChannel` or `Object` with an ID.

When this is the action, the type of `AuditLogEntry.extra` is
either a `Role` or `Member`. If the object is not found
then it is a `Object` with an ID being filled, a name, and a
`type` attribute set to either `'role'` or `'member'` to help
dictate what type of ID it is.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.deny`
- `AuditLogDiff.allow`
- `AuditLogDiff.id`
- `AuditLogDiff.type`

<a id="attribute-overwrite-update"></a>

##### `overwrite_update`

A channel permission overwrite was changed, this is typically
when the permission values change.

See `overwrite_create` for more information on how the
`AuditLogEntry.target` and `AuditLogEntry.extra` fields
are set.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.deny`
- `AuditLogDiff.allow`
- `AuditLogDiff.id`
- `AuditLogDiff.type`

<a id="attribute-overwrite-delete"></a>

##### `overwrite_delete`

A channel permission overwrite was deleted.

See `overwrite_create` for more information on how the
`AuditLogEntry.target` and `AuditLogEntry.extra` fields
are set.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.deny`
- `AuditLogDiff.allow`
- `AuditLogDiff.id`
- `AuditLogDiff.type`

<a id="attribute-kick"></a>

##### `kick`

A member was kicked.

When this is the action, the type of `AuditLogEntry.target` is
the `User` or `Object` who got kicked.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with one attribute:

- `integration_type`: An optional string that denotes the type of integration that did the action.

When this is the action, `AuditLogEntry.changes` is empty.

<a id="attribute-member-prune"></a>

##### `member_prune`

A member prune was triggered.

When this is the action, the type of `AuditLogEntry.target` is
set to `None`.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with two attributes:

- `delete_member_days`: An integer specifying how far the prune was.
- `members_removed`: An integer specifying how many members were removed.

When this is the action, `AuditLogEntry.changes` is empty.

<a id="attribute-ban"></a>

##### `ban`

A member was banned.

When this is the action, the type of `AuditLogEntry.target` is
the `User` or `Object` who got banned.

When this is the action, `AuditLogEntry.changes` is empty.

<a id="attribute-unban"></a>

##### `unban`

A member was unbanned.

When this is the action, the type of `AuditLogEntry.target` is
the `User` or `Object` who got unbanned.

When this is the action, `AuditLogEntry.changes` is empty.

<a id="attribute-member-update"></a>

##### `member_update`

A member has updated. This triggers in the following situations:

- A nickname was changed
- They were server muted or deafened (or it was undo'd)

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` who got updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.nick`
- `AuditLogDiff.mute`
- `AuditLogDiff.deaf`
- `AuditLogDiff.timed_out_until`

<a id="attribute-member-role-update"></a>

##### `member_role_update`

A member's role has been updated. This triggers when a member
either gains a role or loses a role.

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` who got the role.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with one attribute:

- `integration_type`: An optional string that denotes the type of integration that did the action.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.roles`

<a id="attribute-member-move"></a>

##### `member_move`

A member's voice channel has been updated. This triggers when a
member is moved to a different voice channel.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with two attributes:

- `channel`: An `abc.Connectable` or `Object` with the channel ID where the members were moved.
- `count`: An integer specifying how many members were moved.

> **Added in version 1.3**

<a id="attribute-member-disconnect"></a>

##### `member_disconnect`

A member's voice state has changed. This triggers when a
member is force disconnected from voice.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with one attribute:

- `count`: An integer specifying how many members were disconnected.

> **Added in version 1.3**

<a id="attribute-bot-add"></a>

##### `bot_add`

A bot was added to the guild.

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` which was added to the guild.

> **Added in version 1.3**

<a id="attribute-role-create"></a>

##### `role_create`

A new role was created.

When this is the action, the type of `AuditLogEntry.target` is
the `Role` or a `Object` with the ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.colour`
- `AuditLogDiff.secondary_colour`
- `AuditLogDiff.tertiary_colour`
- `AuditLogDiff.mentionable`
- `AuditLogDiff.hoist`
- `AuditLogDiff.icon`
- `AuditLogDiff.unicode_emoji`
- `AuditLogDiff.name`
- `AuditLogDiff.permissions`

<a id="attribute-role-update"></a>

##### `role_update`

A role was updated. This triggers in the following situations:

- The name has changed
- The permissions have changed
- The colour has changed
- The role icon (or unicode emoji) has changed
- Its hoist/mentionable state has changed

When this is the action, the type of `AuditLogEntry.target` is
the `Role` or a `Object` with the ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.colour`
- `AuditLogDiff.secondary_colour`
- `AuditLogDiff.tertiary_colour`
- `AuditLogDiff.mentionable`
- `AuditLogDiff.hoist`
- `AuditLogDiff.icon`
- `AuditLogDiff.unicode_emoji`
- `AuditLogDiff.name`
- `AuditLogDiff.permissions`

<a id="attribute-role-delete"></a>

##### `role_delete`

A role was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `Role` or a `Object` with the ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.colour`
- `AuditLogDiff.secondary_colour`
- `AuditLogDiff.tertiary_colour`
- `AuditLogDiff.mentionable`
- `AuditLogDiff.hoist`
- `AuditLogDiff.name`
- `AuditLogDiff.permissions`

<a id="attribute-invite-create"></a>

##### `invite_create`

An invite was created.

When this is the action, the type of `AuditLogEntry.target` is
the `Invite` that was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.max_age`
- `AuditLogDiff.code`
- `AuditLogDiff.temporary`
- `AuditLogDiff.inviter`
- `AuditLogDiff.channel`
- `AuditLogDiff.uses`
- `AuditLogDiff.max_uses`
- `AuditLogDiff.flags`

<a id="attribute-invite-update"></a>

##### `invite_update`

An invite was updated.

When this is the action, the type of `AuditLogEntry.target` is
the `Invite` that was updated.

<a id="attribute-invite-delete"></a>

##### `invite_delete`

An invite was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `Invite` that was deleted.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.max_age`
- `AuditLogDiff.code`
- `AuditLogDiff.temporary`
- `AuditLogDiff.inviter`
- `AuditLogDiff.channel`
- `AuditLogDiff.uses`
- `AuditLogDiff.max_uses`
- `AuditLogDiff.flags`

<a id="attribute-webhook-create"></a>

##### `webhook_create`

A webhook was created.

When this is the action, the type of `AuditLogEntry.target` is
the `Object` with the webhook ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.channel`
- `AuditLogDiff.name`
- `AuditLogDiff.type` (always set to `1` if so)

<a id="attribute-webhook-update"></a>

##### `webhook_update`

A webhook was updated. This trigger in the following situations:

- The webhook name changed
- The webhook channel changed

When this is the action, the type of `AuditLogEntry.target` is
the `Object` with the webhook ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.channel`
- `AuditLogDiff.name`
- `AuditLogDiff.avatar`

<a id="attribute-webhook-delete"></a>

##### `webhook_delete`

A webhook was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `Object` with the webhook ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.channel`
- `AuditLogDiff.name`
- `AuditLogDiff.type` (always set to `1` if so)

<a id="attribute-emoji-create"></a>

##### `emoji_create`

An emoji was created.

When this is the action, the type of `AuditLogEntry.target` is
the `Emoji` or `Object` with the emoji ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`

<a id="attribute-emoji-update"></a>

##### `emoji_update`

An emoji was updated. This triggers when the name has changed.

When this is the action, the type of `AuditLogEntry.target` is
the `Emoji` or `Object` with the emoji ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`

<a id="attribute-emoji-delete"></a>

##### `emoji_delete`

An emoji was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `Object` with the emoji ID.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`

<a id="attribute-message-delete"></a>

##### `message_delete`

A message was deleted by a moderator. Note that this
only triggers if the message was deleted by someone other than the author.

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` who had their message deleted.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with two attributes:

- `count`: An integer specifying how many messages were deleted.
- `channel`: A `TextChannel` or `Object` with the channel ID where the message got deleted.

<a id="attribute-message-bulk-delete"></a>

##### `message_bulk_delete`

Messages were bulk deleted by a moderator.

When this is the action, the type of `AuditLogEntry.target` is
the `TextChannel` or `Object` with the ID of the channel that was purged.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with one attribute:

- `count`: An integer specifying how many messages were deleted.

> **Added in version 1.3**

<a id="attribute-message-pin"></a>

##### `message_pin`

A message was pinned in a channel.

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` who had their message pinned.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with two attributes:

- `channel`: A `TextChannel` or `Object` with the channel ID where the message was pinned.
- `message_id`: the ID of the message which was pinned.

> **Added in version 1.3**

<a id="attribute-message-unpin"></a>

##### `message_unpin`

A message was unpinned in a channel.

When this is the action, the type of `AuditLogEntry.target` is
the `Member`, `User`, or `Object` who had their message unpinned.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with two attributes:

- `channel`: A `TextChannel` or `Object` with the channel ID where the message was unpinned.
- `message_id`: the ID of the message which was unpinned.

> **Added in version 1.3**

<a id="attribute-integration-create"></a>

##### `integration_create`

A guild integration was created.

When this is the action, the type of `AuditLogEntry.target` is
a `PartialIntegration` or `Object` with the
integration ID of the integration which was created.

> **Added in version 1.3**

<a id="attribute-integration-update"></a>

##### `integration_update`

A guild integration was updated.

When this is the action, the type of `AuditLogEntry.target` is
a `PartialIntegration` or `Object` with the
integration ID of the integration which was updated.

> **Added in version 1.3**

<a id="attribute-integration-delete"></a>

##### `integration_delete`

A guild integration was deleted.

When this is the action, the type of `AuditLogEntry.target` is
a `PartialIntegration` or `Object` with the
integration ID of the integration which was deleted.

> **Added in version 1.3**

<a id="attribute-stage-instance-create"></a>

##### `stage_instance_create`

A stage instance was started.

When this is the action, the type of `AuditLogEntry.target` is
the `StageInstance` or `Object` with the ID of the stage
instance which was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.topic`
- `AuditLogDiff.privacy_level`

> **Added in version 2.0**

<a id="attribute-stage-instance-update"></a>

##### `stage_instance_update`

A stage instance was updated.

When this is the action, the type of `AuditLogEntry.target` is
the `StageInstance` or `Object` with the ID of the stage
instance which was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.topic`
- `AuditLogDiff.privacy_level`

> **Added in version 2.0**

<a id="attribute-stage-instance-delete"></a>

##### `stage_instance_delete`

A stage instance was ended.

> **Added in version 2.0**

<a id="attribute-sticker-create"></a>

##### `sticker_create`

A sticker was created.

When this is the action, the type of `AuditLogEntry.target` is
the `GuildSticker` or `Object` with the ID of the sticker
which was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.type`
- `AuditLogDiff.format_type`
- `AuditLogDiff.description`
- `AuditLogDiff.available`

> **Added in version 2.0**

<a id="attribute-sticker-update"></a>

##### `sticker_update`

A sticker was updated.

When this is the action, the type of `AuditLogEntry.target` is
the `GuildSticker` or `Object` with the ID of the sticker
which was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.type`
- `AuditLogDiff.format_type`
- `AuditLogDiff.description`
- `AuditLogDiff.available`

> **Added in version 2.0**

<a id="attribute-sticker-delete"></a>

##### `sticker_delete`

A sticker was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `GuildSticker` or `Object` with the ID of the sticker
which was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.type`
- `AuditLogDiff.format_type`
- `AuditLogDiff.description`
- `AuditLogDiff.available`

> **Added in version 2.0**

<a id="attribute-scheduled-event-create"></a>

##### `scheduled_event_create`

A scheduled event was created.

When this is the action, the type of `AuditLogEntry.target` is
the `ScheduledEvent` or `Object` with the ID of the event
which was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.channel`
- `AuditLogDiff.description`
- `AuditLogDiff.privacy_level`
- `AuditLogDiff.status`
- `AuditLogDiff.entity_type`
- `AuditLogDiff.cover_image`

> **Added in version 2.0**

<a id="attribute-scheduled-event-update"></a>

##### `scheduled_event_update`

A scheduled event was created.

When this is the action, the type of `AuditLogEntry.target` is
the `ScheduledEvent` or `Object` with the ID of the event
which was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.channel`
- `AuditLogDiff.description`
- `AuditLogDiff.privacy_level`
- `AuditLogDiff.status`
- `AuditLogDiff.entity_type`
- `AuditLogDiff.cover_image`

> **Added in version 2.0**

<a id="attribute-scheduled-event-delete"></a>

##### `scheduled_event_delete`

A scheduled event was created.

When this is the action, the type of `AuditLogEntry.target` is
the `ScheduledEvent` or `Object` with the ID of the event
which was deleted.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.channel`
- `AuditLogDiff.description`
- `AuditLogDiff.privacy_level`
- `AuditLogDiff.status`
- `AuditLogDiff.entity_type`
- `AuditLogDiff.cover_image`

> **Added in version 2.0**

<a id="attribute-thread-create"></a>

##### `thread_create`

A thread was created.

When this is the action, the type of `AuditLogEntry.target` is
the `Thread` or `Object` with the ID of the thread which
was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.archived`
- `AuditLogDiff.locked`
- `AuditLogDiff.auto_archive_duration`
- `AuditLogDiff.invitable`

> **Added in version 2.0**

<a id="attribute-thread-update"></a>

##### `thread_update`

A thread was updated.

When this is the action, the type of `AuditLogEntry.target` is
the `Thread` or `Object` with the ID of the thread which
was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.archived`
- `AuditLogDiff.locked`
- `AuditLogDiff.auto_archive_duration`
- `AuditLogDiff.invitable`

> **Added in version 2.0**

<a id="attribute-thread-delete"></a>

##### `thread_delete`

A thread was deleted.

When this is the action, the type of `AuditLogEntry.target` is
the `Thread` or `Object` with the ID of the thread which
was deleted.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.archived`
- `AuditLogDiff.locked`
- `AuditLogDiff.auto_archive_duration`
- `AuditLogDiff.invitable`

> **Added in version 2.0**

<a id="attribute-app-command-permission-update"></a>

##### `app_command_permission_update`

An application command or integrations application command permissions
were updated.

When this is the action, the type of `AuditLogEntry.target` is
a `PartialIntegration` for an integrations general permissions,
`discord.app_commands.AppCommand` for a specific commands permissions,
or `Object` with the ID of the command or integration which
was updated.

When this is the action, the type of `AuditLogEntry.extra` is
set to an `PartialIntegration` or `Object` with the ID of
application that command or integration belongs to.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.app_command_permissions`

> **Added in version 2.0**

<a id="attribute-automod-rule-create"></a>

##### `automod_rule_create`

An automod rule was created.

When this is the action, the type of `AuditLogEntry.target` is
a `AutoModRule` or `Object` with the ID of the automod
rule that was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.enabled`
- `AuditLogDiff.event_type`
- `AuditLogDiff.trigger_type`
- `AuditLogDiff.trigger`
- `AuditLogDiff.actions`
- `AuditLogDiff.exempt_roles`
- `AuditLogDiff.exempt_channels`

> **Added in version 2.0**

<a id="attribute-automod-rule-update"></a>

##### `automod_rule_update`

An automod rule was updated.

When this is the action, the type of `AuditLogEntry.target` is
a `AutoModRule` or `Object` with the ID of the automod
rule that was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.enabled`
- `AuditLogDiff.event_type`
- `AuditLogDiff.trigger_type`
- `AuditLogDiff.trigger`
- `AuditLogDiff.actions`
- `AuditLogDiff.exempt_roles`
- `AuditLogDiff.exempt_channels`

> **Added in version 2.0**

<a id="attribute-automod-rule-delete"></a>

##### `automod_rule_delete`

An automod rule was deleted.

When this is the action, the type of `AuditLogEntry.target` is
a `AutoModRule` or `Object` with the ID of the automod
rule that was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.enabled`
- `AuditLogDiff.event_type`
- `AuditLogDiff.trigger_type`
- `AuditLogDiff.trigger`
- `AuditLogDiff.actions`
- `AuditLogDiff.exempt_roles`
- `AuditLogDiff.exempt_channels`

> **Added in version 2.0**

<a id="attribute-automod-block-message"></a>

##### `automod_block_message`

An automod rule blocked a message from being sent.

When this is the action, the type of `AuditLogEntry.target` is
a `Member` with the ID of the person who triggered the automod rule.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with 3 attributes:

- `automod_rule_name`: The name of the automod rule that was triggered.
- `automod_rule_trigger_type`: A `AutoModRuleTriggerType` representation of the rule type that was triggered.
- `channel`: The channel in which the automod rule was triggered.

When this is the action, `AuditLogEntry.changes` is empty.

> **Added in version 2.0**

<a id="attribute-automod-flag-message"></a>

##### `automod_flag_message`

An automod rule flagged a message.

When this is the action, the type of `AuditLogEntry.target` is
a `Member` with the ID of the person who triggered the automod rule.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with 3 attributes:

- `automod_rule_name`: The name of the automod rule that was triggered.
- `automod_rule_trigger_type`: A `AutoModRuleTriggerType` representation of the rule type that was triggered.
- `channel`: The channel in which the automod rule was triggered.

When this is the action, `AuditLogEntry.changes` is empty.

> **Added in version 2.1**

<a id="attribute-automod-timeout-member"></a>

##### `automod_timeout_member`

An automod rule timed-out a member.

When this is the action, the type of `AuditLogEntry.target` is
a `Member` with the ID of the person who triggered the automod rule.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with 3 attributes:

- `automod_rule_name`: The name of the automod rule that was triggered.
- `automod_rule_trigger_type`: A `AutoModRuleTriggerType` representation of the rule type that was triggered.
- `channel`: The channel in which the automod rule was triggered.

When this is the action, `AuditLogEntry.changes` is empty.

> **Added in version 2.1**

<a id="attribute-automod-quarantine-user"></a>

##### `automod_quarantine_user`

An automod rule quarantined a member.

When this is the action, the type of `AuditLogEntry.target` is
a `Member` with the ID of the person who triggered the automod rule.

When this is the action, the type of `AuditLogEntry.extra` is
set to an unspecified proxy object with 3 attributes:

- `automod_rule_name`: The name of the automod rule that was triggered.
- `automod_rule_trigger_type`: A `AutoModRuleTriggerType` representation of the rule type that was triggered.
- `channel`: The channel of the message sent by the member when they were flagged. `None` if the member was quarantined when they just joined the guild.

When this is the action, `AuditLogEntry.changes` is empty.

> **Added in version 2.6**

<a id="attribute-creator-monetization-request-created"></a>

##### `creator_monetization_request_created`

A request to monetize the server was created.

> **Added in version 2.4**

<a id="attribute-creator-monetization-terms-accepted"></a>

##### `creator_monetization_terms_accepted`

The terms and conditions for creator monetization were accepted.

> **Added in version 2.4**

<a id="attribute-soundboard-sound-create"></a>

##### `soundboard_sound_create`

A soundboard sound was created.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.volume`

> **Added in version 2.5**

<a id="attribute-soundboard-sound-update"></a>

##### `soundboard_sound_update`

A soundboard sound was updated.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.volume`

> **Added in version 2.5**

<a id="attribute-soundboard-sound-delete"></a>

##### `soundboard_sound_delete`

A soundboard sound was deleted.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.name`
- `AuditLogDiff.emoji`
- `AuditLogDiff.volume`

> **Added in version 2.5**

<a id="attribute-onboarding-prompt-create"></a>

##### `onboarding_prompt_create`

A guild onboarding prompt was created.

When this is the action, the type of `AuditLogEntry.target` is
a `Object` with the ID of the prompt that the options belong to.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.type`
- `AuditLogDiff.title`
- `AuditLogDiff.options`
- `AuditLogDiff.single_select`
- `AuditLogDiff.required`
- `AuditLogDiff.in_onboarding`

> **Added in version 2.6**

<a id="attribute-onboarding-prompt-update"></a>

##### `onboarding_prompt_update`

A guild onboarding prompt was updated.

When this is the action, the type of `AuditLogEntry.target` is
a `Object` with the ID of the prompt that the options belong to.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.type`
- `AuditLogDiff.title`
- `AuditLogDiff.options`
- `AuditLogDiff.single_select`
- `AuditLogDiff.required`
- `AuditLogDiff.in_onboarding`

> **Added in version 2.6**

<a id="attribute-onboarding-prompt-delete"></a>

##### `onboarding_prompt_delete`

A guild onboarding prompt was deleted.

When this is the action, the type of `AuditLogEntry.target` is
a `Object` with the ID of the prompt that the options belong to.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.type`
- `AuditLogDiff.title`
- `AuditLogDiff.options`
- `AuditLogDiff.single_select`
- `AuditLogDiff.required`
- `AuditLogDiff.in_onboarding`

> **Added in version 2.6**

<a id="attribute-onboarding-create"></a>

##### `onboarding_create`

The guild's onboarding configuration was created.

When this is the action, the type of `AuditLogEntry.target` is
always `None`. Use `AuditLogEntry.guild` to access the guild.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.enabled`
- `AuditLogDiff.default_channels`
- `AuditLogDiff.prompts`
- `AuditLogDiff.mode`

> **Added in version 2.6**

<a id="attribute-onboarding-update"></a>

##### `onboarding_update`

The guild's onboarding configuration was updated.

When this is the action, the type of `AuditLogEntry.target` is
always `None`. Use `AuditLogEntry.guild` to access the guild.

Possible attributes for `AuditLogDiff`:

- `AuditLogDiff.enabled`
- `AuditLogDiff.default_channels`
- `AuditLogDiff.prompts`
- `AuditLogDiff.mode`

> **Added in version 2.6**

<a id="attribute-home-settings-create"></a>

##### `home_settings_create`

The guild's server guide was created.

> **Added in version 2.6**

<a id="attribute-home-settings-update"></a>

##### `home_settings_update`

The guild's server guide was updated.

> **Added in version 2.6**

<a id="class-auditlogactioncategory"></a>

#### `AuditLogActionCategory`

Represents the category that the `AuditLogAction` belongs to.

This can be retrieved via `AuditLogEntry.category`.

<a id="attribute-create"></a>

##### `create`

The action is the creation of something.

<a id="attribute-delete"></a>

##### `delete`

The action is the deletion of something.

<a id="attribute-update"></a>

##### `update`

The action is the update of something.

<a id="class-teammembershipstate"></a>

#### `TeamMembershipState`

Represents the membership state of a team member retrieved through `Client.application_info`.

> **Added in version 1.3**

<a id="attribute-invited"></a>

##### `invited`

Represents an invited member.

<a id="attribute-accepted"></a>

##### `accepted`

Represents a member currently in the team.

<a id="class-teammemberrole"></a>

#### `TeamMemberRole`

Represents the type of role of a team member retrieved through `Client.application_info`.

> **Added in version 2.4**

<a id="attribute-admin"></a>

##### `admin`

The team member is an admin. This allows them to invite members to the team, access credentials, edit the application,
and do most things the owner can do. However they cannot do destructive actions.

<a id="attribute-developer"></a>

##### `developer`

The team member is a developer. This allows them to access information, like the client secret or public key.
They can also configure interaction endpoints or reset the bot token. Developers cannot invite anyone to the team
nor can they do destructive actions.

<a id="attribute-read-only"></a>

##### `read_only`

The team member is a read-only member. This allows them to access information, but not edit anything.

<a id="class-webhooktype"></a>

#### `WebhookType`

Represents the type of webhook that can be received.

> **Added in version 1.3**

<a id="attribute-incoming"></a>

##### `incoming`

Represents a webhook that can post messages to channels with a token.

<a id="attribute-channel-follower"></a>

##### `channel_follower`

Represents a webhook that is internally managed by Discord, used for following channels.

<a id="attribute-application"></a>

##### `application`

Represents a webhook that is used for interactions or applications.

> **Added in version 2.0**

<a id="class-expirebehaviour"></a>

#### `ExpireBehaviour`

Represents the behaviour the `Integration` should perform
when a user's subscription has finished.

There is an alias for this called `ExpireBehavior`.

> **Added in version 1.4**

<a id="attribute-remove-role"></a>

##### `remove_role`

This will remove the `StreamIntegration.role` from the user
when their subscription is finished.

<a id="attribute-kick"></a>

##### `kick`

This will kick the user when their subscription is finished.

<a id="class-defaultavatar"></a>

#### `DefaultAvatar`

Represents the default avatar of a Discord `User`

<a id="attribute-blurple"></a>

##### `blurple`

Represents the default avatar with the colour blurple.
See also `Colour.blurple`

<a id="attribute-grey"></a>

##### `grey`

Represents the default avatar with the colour grey.
See also `Colour.greyple`

<a id="attribute-gray"></a>

##### `gray`

An alias for `grey`.

<a id="attribute-green"></a>

##### `green`

Represents the default avatar with the colour green.
See also `Colour.green`

<a id="attribute-orange"></a>

##### `orange`

Represents the default avatar with the colour orange.
See also `Colour.orange`

<a id="attribute-red"></a>

##### `red`

Represents the default avatar with the colour red.
See also `Colour.red`

<a id="attribute-pink"></a>

##### `pink`

Represents the default avatar with the colour pink.
See also `Colour.pink`

> **Added in version 2.3**

<a id="class-stickertype"></a>

#### `StickerType`

Represents the type of sticker.

> **Added in version 2.0**

<a id="attribute-standard"></a>

##### `standard`

Represents a standard sticker that all Nitro users can use.

<a id="attribute-guild"></a>

##### `guild`

Represents a custom sticker created in a guild.

<a id="class-stickerformattype"></a>

#### `StickerFormatType`

Represents the type of sticker images.

> **Added in version 1.6**

<a id="attribute-png"></a>

##### `png`

Represents a sticker with a png image.

<a id="attribute-apng"></a>

##### `apng`

Represents a sticker with an apng image.

<a id="attribute-lottie"></a>

##### `lottie`

Represents a sticker with a lottie image.

<a id="attribute-gif"></a>

##### `gif`

Represents a sticker with a gif image.

> **Added in version 2.2**

<a id="class-invitetarget"></a>

#### `InviteTarget`

Represents the invite type for voice channel invites.

> **Added in version 2.0**

<a id="attribute-unknown"></a>

##### `unknown`

The invite doesn't target anyone or anything.

<a id="attribute-stream"></a>

##### `stream`

A stream invite that targets a user.

<a id="attribute-embedded-application"></a>

##### `embedded_application`

A stream invite that targets an embedded application.

<a id="class-videoqualitymode"></a>

#### `VideoQualityMode`

Represents the camera video quality mode for voice channel participants.

> **Added in version 2.0**

<a id="attribute-auto"></a>

##### `auto`

Represents auto camera video quality.

<a id="attribute-full"></a>

##### `full`

Represents full camera video quality.

<a id="class-privacylevel"></a>

#### `PrivacyLevel`

Represents the privacy level of a stage instance or scheduled event.

> **Added in version 2.0**

<a id="attribute-guild-only"></a>

##### `guild_only`

The stage instance or scheduled event is only accessible within the guild.

<a id="class-nsfwlevel"></a>

#### `NSFWLevel`

Represents the NSFW level of a guild.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two NSFW levels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two NSFW levels are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a NSFW level is higher than another.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a NSFW level is lower than another.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a NSFW level is higher or equal to another.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a NSFW level is lower or equal to another.

<a id="attribute-default"></a>

##### `default`

The guild has not been categorised yet.

<a id="attribute-explicit"></a>

##### `explicit`

The guild contains NSFW content.

<a id="attribute-safe"></a>

##### `safe`

The guild does not contain any NSFW content.

<a id="attribute-age-restricted"></a>

##### `age_restricted`

The guild may contain NSFW content.

<a id="class-locale"></a>

#### `Locale`

Supported locales by Discord. Mainly used for application command localisation.

> **Added in version 2.0**

<a id="attribute-american-english"></a>

##### `american_english`

The `en-US` locale.

<a id="attribute-british-english"></a>

##### `british_english`

The `en-GB` locale.

<a id="attribute-bulgarian"></a>

##### `bulgarian`

The `bg` locale.

<a id="attribute-chinese"></a>

##### `chinese`

The `zh-CN` locale.

<a id="attribute-taiwan-chinese"></a>

##### `taiwan_chinese`

The `zh-TW` locale.

<a id="attribute-croatian"></a>

##### `croatian`

The `hr` locale.

<a id="attribute-czech"></a>

##### `czech`

The `cs` locale.

<a id="attribute-indonesian"></a>

##### `indonesian`

The `id` locale.

> **Added in version 2.2**

<a id="attribute-danish"></a>

##### `danish`

The `da` locale.

<a id="attribute-dutch"></a>

##### `dutch`

The `nl` locale.

<a id="attribute-finnish"></a>

##### `finnish`

The `fi` locale.

<a id="attribute-french"></a>

##### `french`

The `fr` locale.

<a id="attribute-german"></a>

##### `german`

The `de` locale.

<a id="attribute-greek"></a>

##### `greek`

The `el` locale.

<a id="attribute-hindi"></a>

##### `hindi`

The `hi` locale.

<a id="attribute-hungarian"></a>

##### `hungarian`

The `hu` locale.

<a id="attribute-italian"></a>

##### `italian`

The `it` locale.

<a id="attribute-japanese"></a>

##### `japanese`

The `ja` locale.

<a id="attribute-korean"></a>

##### `korean`

The `ko` locale.

<a id="attribute-latin-american-spanish"></a>

##### `latin_american_spanish`

The `es-419` locale.

> **Added in version 2.4**

<a id="attribute-lithuanian"></a>

##### `lithuanian`

The `lt` locale.

<a id="attribute-norwegian"></a>

##### `norwegian`

The `no` locale.

<a id="attribute-polish"></a>

##### `polish`

The `pl` locale.

<a id="attribute-brazil-portuguese"></a>

##### `brazil_portuguese`

The `pt-BR` locale.

<a id="attribute-romanian"></a>

##### `romanian`

The `ro` locale.

<a id="attribute-russian"></a>

##### `russian`

The `ru` locale.

<a id="attribute-spain-spanish"></a>

##### `spain_spanish`

The `es-ES` locale.

<a id="attribute-swedish"></a>

##### `swedish`

The `sv-SE` locale.

<a id="attribute-thai"></a>

##### `thai`

The `th` locale.

<a id="attribute-turkish"></a>

##### `turkish`

The `tr` locale.

<a id="attribute-ukrainian"></a>

##### `ukrainian`

The `uk` locale.

<a id="attribute-vietnamese"></a>

##### `vietnamese`

The `vi` locale.

<a id="attribute-language-code"></a>

##### `language_code`

This is derived from a predefined mapping based on Discord's supported locales.
If no mapping exists for the current locale, this returns the raw locale value as a fallback.

> **Added in version 2.6**

<a id="class-mfalevel"></a>

#### `MFALevel`

Represents the Multi-Factor Authentication requirement level of a guild.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two MFA levels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two MFA levels are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a MFA level is higher than another.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a MFA level is lower than another.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a MFA level is higher or equal to another.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a MFA level is lower or equal to another.

<a id="attribute-disabled"></a>

##### `disabled`

The guild has no MFA requirement.

<a id="attribute-require-2fa"></a>

##### `require_2fa`

The guild requires 2 factor authentication.

<a id="class-entitytype"></a>

#### `EntityType`

Represents the type of entity that a scheduled event is for.

> **Added in version 2.0**

<a id="attribute-stage-instance"></a>

##### `stage_instance`

The scheduled event will occur in a stage instance.

<a id="attribute-voice"></a>

##### `voice`

The scheduled event will occur in a voice channel.

<a id="attribute-external"></a>

##### `external`

The scheduled event will occur externally.

<a id="class-eventstatus"></a>

#### `EventStatus`

Represents the status of an event.

> **Added in version 2.0**

<a id="attribute-scheduled"></a>

##### `scheduled`

The event is scheduled.

<a id="attribute-active"></a>

##### `active`

The event is active.

<a id="attribute-completed"></a>

##### `completed`

The event has ended.

<a id="attribute-cancelled"></a>

##### `cancelled`

The event has been cancelled.

<a id="attribute-canceled"></a>

##### `canceled`

An alias for `cancelled`.

<a id="attribute-ended"></a>

##### `ended`

An alias for `completed`.

<a id="class-automodruletriggertype"></a>

#### `AutoModRuleTriggerType`

Represents the trigger type of an automod rule.

> **Added in version 2.0**

<a id="attribute-keyword"></a>

##### `keyword`

The rule will trigger when a keyword is mentioned.

<a id="attribute-harmful-link"></a>

##### `harmful_link`

The rule will trigger when a harmful link is posted.

<a id="attribute-spam"></a>

##### `spam`

The rule will trigger when a spam message is posted.

<a id="attribute-keyword-preset"></a>

##### `keyword_preset`

The rule will trigger when something triggers based on the set keyword preset types.

<a id="attribute-mention-spam"></a>

##### `mention_spam`

The rule will trigger when combined number of role and user mentions
is greater than the set limit.

<a id="attribute-member-profile"></a>

##### `member_profile`

The rule will trigger when a user's profile contains a keyword.

> **Added in version 2.4**

<a id="class-automodruleeventtype"></a>

#### `AutoModRuleEventType`

Represents the event type of an automod rule.

> **Added in version 2.0**

<a id="attribute-message-send"></a>

##### `message_send`

The rule will trigger when a message is sent.

<a id="attribute-member-update"></a>

##### `member_update`

The rule will trigger when a member's profile is updated.

> **Added in version 2.4**

<a id="class-automodruleactiontype"></a>

#### `AutoModRuleActionType`

Represents the action type of an automod rule.

> **Added in version 2.0**

<a id="attribute-block-message"></a>

##### `block_message`

The rule will block a message from being sent.

<a id="attribute-send-alert-message"></a>

##### `send_alert_message`

The rule will send an alert message to a predefined channel.

<a id="attribute-timeout"></a>

##### `timeout`

The rule will timeout a user.

<a id="attribute-block-member-interactions"></a>

##### `block_member_interactions`

Similar to `timeout`, except the user will be timed out indefinitely.
This will request the user to edit it's profile.

> **Added in version 2.4**

<a id="class-forumlayouttype"></a>

#### `ForumLayoutType`

Represents how a forum's posts are layed out in the client.

> **Added in version 2.2**

<a id="attribute-not-set"></a>

##### `not_set`

No default has been set, so it is up to the client to know how to lay it out.

<a id="attribute-list-view"></a>

##### `list_view`

Displays posts as a list.

<a id="attribute-gallery-view"></a>

##### `gallery_view`

Displays posts as a collection of tiles.

<a id="class-forumordertype"></a>

#### `ForumOrderType`

Represents how a forum's posts are sorted in the client.

> **Added in version 2.3**

<a id="attribute-latest-activity"></a>

##### `latest_activity`

Sort forum posts by activity.

<a id="attribute-creation-date"></a>

##### `creation_date`

Sort forum posts by creation time (from most recent to oldest).

<a id="class-selectdefaultvaluetype"></a>

#### `SelectDefaultValueType`

Represents the default value of a select menu.

> **Added in version 2.4**

<a id="attribute-user"></a>

##### `user`

The underlying type of the ID is a user.

<a id="attribute-role"></a>

##### `role`

The underlying type of the ID is a role.

<a id="attribute-channel"></a>

##### `channel`

The underlying type of the ID is a channel or thread.

<a id="class-skutype"></a>

#### `SKUType`

Represents the type of a SKU.

> **Added in version 2.4**

<a id="attribute-durable"></a>

##### `durable`

The SKU is a durable one-time purchase.

<a id="attribute-consumable"></a>

##### `consumable`

The SKU is a consumable one-time purchase.

<a id="attribute-subscription"></a>

##### `subscription`

The SKU is a recurring subscription.

<a id="attribute-subscription-group"></a>

##### `subscription_group`

The SKU is a system-generated group which is created for each `SKUType.subscription`.

<a id="class-entitlementtype"></a>

#### `EntitlementType`

Represents the type of an entitlement.

> **Added in version 2.4**

<a id="attribute-purchase"></a>

##### `purchase`

The entitlement was purchased by the user.

<a id="attribute-premium-subscription"></a>

##### `premium_subscription`

The entitlement is for a nitro subscription.

<a id="attribute-developer-gift"></a>

##### `developer_gift`

The entitlement was gifted by the developer.

<a id="attribute-test-mode-purchase"></a>

##### `test_mode_purchase`

The entitlement was purchased by a developer in application test mode.

<a id="attribute-free-purchase"></a>

##### `free_purchase`

The entitlement was granted, when the SKU was free.

<a id="attribute-user-gift"></a>

##### `user_gift`

The entitlement was gifted by a another user.

<a id="attribute-premium-purchase"></a>

##### `premium_purchase`

The entitlement was claimed for free by a nitro subscriber.

<a id="attribute-application-subscription"></a>

##### `application_subscription`

The entitlement was purchased as an app subscription.

<a id="class-entitlementownertype"></a>

#### `EntitlementOwnerType`

Represents the type of an entitlement owner.

> **Added in version 2.4**

<a id="attribute-guild"></a>

##### `guild`

The entitlement owner is a guild.

<a id="attribute-user"></a>

##### `user`

The entitlement owner is a user.

<a id="class-polllayouttype"></a>

#### `PollLayoutType`

Represents how a poll answers are shown.

> **Added in version 2.4**

<a id="attribute-default"></a>

##### `default`

The default layout.

<a id="class-invitetype"></a>

#### `InviteType`

Represents the type of an invite.

> **Added in version 2.4**

<a id="attribute-guild"></a>

##### `guild`

The invite is a guild invite.

<a id="attribute-group-dm"></a>

##### `group_dm`

The invite is a group DM invite.

<a id="attribute-friend"></a>

##### `friend`

The invite is a friend invite.

<a id="class-reactiontype"></a>

#### `ReactionType`

Represents the type of a reaction.

> **Added in version 2.4**

<a id="attribute-normal"></a>

##### `normal`

A normal reaction.

<a id="attribute-burst"></a>

##### `burst`

A burst reaction, also known as a "super reaction".

<a id="class-voicechanneleffectanimationtype"></a>

#### `VoiceChannelEffectAnimationType`

Represents the animation type of a voice channel effect.

> **Added in version 2.5**

<a id="attribute-premium"></a>

##### `premium`

A fun animation, sent by a Nitro subscriber.

<a id="attribute-basic"></a>

##### `basic`

The standard animation.

<a id="class-subscriptionstatus"></a>

#### `SubscriptionStatus`

Represents the status of an subscription.

> **Added in version 2.5**

<a id="attribute-active"></a>

##### `active`

The subscription is active.

<a id="attribute-ending"></a>

##### `ending`

The subscription is active but will not renew.

<a id="attribute-inactive"></a>

##### `inactive`

The subscription is inactive and not being charged.

<a id="class-messagereferencetype"></a>

#### `MessageReferenceType`

Represents the type of a message reference.

> **Added in version 2.5**

<a id="attribute-default"></a>

##### `default`

A standard reference used by message replies (`MessageType.reply`),
crossposted messaged created by a followed channel integration, and messages of type:

- `MessageType.pins_add`
- `MessageType.channel_follow_add`
- `MessageType.thread_created`
- `MessageType.thread_starter_message`
- `MessageType.poll_result`
- `MessageType.context_menu_command`

<a id="attribute-forward"></a>

##### `forward`

A forwarded message.

<a id="attribute-reply"></a>

##### `reply`

An alias for `.default`.

<a id="class-statusdisplaytype"></a>

#### `StatusDisplayType`

Represents which field is of the user's activity is
displayed in the members list.

> **Added in version 2.6**

<a id="attribute-name"></a>

##### `name`

The name of the activity is displayed.

<a id="attribute-state"></a>

##### `state`

The state of the activity is displayed.

<a id="attribute-details"></a>

##### `details`

The details of the activity are displayed.

<a id="class-onboardingprompttype"></a>

#### `OnboardingPromptType`

Represents the type of onboarding prompt.

> **Added in version 2.6**

<a id="attribute-multiple-choice"></a>

##### `multiple_choice`

Prompt options are multiple choice.

<a id="attribute-dropdown"></a>

##### `dropdown`

Prompt options are displayed as a drop-down.

<a id="class-onboardingmode"></a>

#### `OnboardingMode`

Represents the onboarding constraint mode.

> **Added in version 2.6**

<a id="attribute-default"></a>

##### `default`

Only default channels count towards onboarding constraints.

<a id="attribute-advanced"></a>

##### `advanced`

Default channels and questions count towards onboarding constraints.

<a id="class-mediaitemloadingstate"></a>

#### `MediaItemLoadingState`

Represents a `UnfurledMediaItem` load state.

<a id="attribute-unknown"></a>

##### `unknown`

Unknown load state.

<a id="attribute-loading"></a>

##### `loading`

The media item is still loading.

<a id="attribute-loaded"></a>

##### `loaded`

The media item is loaded.

<a id="attribute-not-found"></a>

##### `not_found`

The media item was not found.

<a id="class-collectibletype"></a>

#### `CollectibleType`

Represents the type of a `Collectible`.

> **Added in version 2.7**

<a id="attribute-nameplate"></a>

##### `nameplate`

The collectible is a nameplate.

<a id="class-nameplatepalette"></a>

#### `NameplatePalette`

Represents the available palettes for a nameplate.

> **Added in version 2.7**

<a id="attribute-crimson"></a>

##### `crimson`

The collectible nameplate palette is crimson.

<a id="attribute-berry"></a>

##### `berry`

The collectible nameplate palette is berry.

<a id="attribute-sky"></a>

##### `sky`

The collectible nameplate palette is sky.

<a id="attribute-teal"></a>

##### `teal`

The collectible nameplate palette is teal.

<a id="attribute-forest"></a>

##### `forest`

The collectible nameplate palette is forest.

<a id="attribute-bubble-gum"></a>

##### `bubble_gum`

The collectible nameplate palette is bubble gum.

<a id="attribute-violet"></a>

##### `violet`

The collectible nameplate palette is violet.

<a id="attribute-cobalt"></a>

##### `cobalt`

The collectible nameplate palette is cobalt.

<a id="attribute-clover"></a>

##### `clover`

The collectible nameplate palette is clover.

<a id="attribute-lemon"></a>

##### `lemon`

The collectible nameplate palette is lemon.

<a id="attribute-white"></a>

##### `white`

The collectible nameplate palette is white.

<a id="discord-api-audit-logs"></a>

## Audit Log Data

Working with `Guild.audit_logs` is a complicated process with a lot of machinery
involved. The library attempts to make it easy to use and friendly. In order to accomplish
this goal, it must make use of a couple of data classes that aid in this goal.

### AuditLogEntry

<a id="api-auditlogentry"></a>

#### `AuditLogEntry(Hashable)`

Represents an Audit Log entry.

You retrieve these via `Guild.audit_logs`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two entries are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two entries are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the entry's hash.

> **Changed in version 1.7**
> Audit log entries are now comparable and hashable.

## Attributes

**action: `AuditLogAction`**

The action that was done.

**user: Optional\[`abc.User`]**

The user who initiated this action. Usually a `Member`, unless gone
then it's a `User`.

**user\_id: Optional\[`int`]**

The user ID who initiated this action.

> **Added in version 2.2**

**id: `int`**

The entry ID.

**guild: `Guild`**

The guild that this entry belongs to.

**target: Any**

The target that got changed. The exact type of this depends on
the action being done.

**reason: Optional\[`str`]**

The reason this action was done.

**extra: Any**

Extra information that this entry has that might be useful.
For most actions, this is `None`. However in some cases it
contains extra information. See `AuditLogAction` for
which actions have this field filled out.

<a id="api-auditlogentry-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the entry's creation time in UTC.

<a id="api-auditlogentry-category"></a>

##### `category(self) -> Optional[enums.AuditLogActionCategory]`

Optional\[`AuditLogActionCategory`]: The category of the action, if applicable.

<a id="api-auditlogentry-changes"></a>

##### `changes(self) -> AuditLogChanges`

`AuditLogChanges`: The list of changes this entry has.

<a id="api-auditlogentry-before"></a>

##### `before(self) -> AuditLogDiff`

`AuditLogDiff`: The target's prior state.

<a id="api-auditlogentry-after"></a>

##### `after(self) -> AuditLogDiff`

`AuditLogDiff`: The target's subsequent state.

### AuditLogChanges

<a id="class-auditlogchanges"></a>

#### `AuditLogChanges`

An audit log change set.

<a id="attribute-before"></a>

##### `before`

The old value. The attribute has the type of `AuditLogDiff`.

Depending on the `AuditLogActionCategory` retrieved by
`AuditLogEntry.category`, the data retrieved by this
attribute differs:

| Category                        | Description                                       |
| ------------------------------- | ------------------------------------------------- |
| `AuditLogActionCategory.create` | All attributes are set to `None`.                 |
| `AuditLogActionCategory.delete` | All attributes are set the value before deletion. |
| `AuditLogActionCategory.update` | All attributes are set the value before updating. |
| `None`                          | No attributes are set.                            |

<a id="attribute-after"></a>

##### `after`

The new value. The attribute has the type of `AuditLogDiff`.

Depending on the `AuditLogActionCategory` retrieved by
`AuditLogEntry.category`, the data retrieved by this
attribute differs:

| Category                        | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| `AuditLogActionCategory.create` | All attributes are set to the created value      |
| `AuditLogActionCategory.delete` | All attributes are set to `None`                 |
| `AuditLogActionCategory.update` | All attributes are set the value after updating. |
| `None`                          | No attributes are set.                           |

### AuditLogDiff

<a id="class-auditlogdiff"></a>

#### `AuditLogDiff`

Represents an audit log "change" object. A change object has dynamic
attributes that depend on the type of action being done. Certain actions
map to certain attributes being set.

Note that accessing an attribute that does not match the specified action
will lead to an attribute error.

To get a list of attributes that have been set, you can iterate over
them. To see a list of all possible attributes that could be set based
on the action being done, check the documentation for `AuditLogAction`,
otherwise check the documentation below for all attributes that are possible.

<a id="describe-iter-diff"></a>

#### `iter(diff)`

Returns an iterator over (attribute, value) tuple of this diff.

<a id="attribute-name"></a>

##### `name`

A name of something.

- **Type:** `str`

<a id="attribute-guild"></a>

##### `guild`

The guild of something.

- **Type:** `Guild`

<a id="attribute-icon"></a>

##### `icon`

A guild's or role's icon. See also `Guild.icon` or `Role.icon`.

- **Type:** `Asset`

<a id="attribute-splash"></a>

##### `splash`

The guild's invite splash. See also `Guild.splash`.

- **Type:** `Asset`

<a id="attribute-discovery-splash"></a>

##### `discovery_splash`

The guild's discovery splash. See also `Guild.discovery_splash`.

- **Type:** `Asset`

<a id="attribute-banner"></a>

##### `banner`

The guild's banner. See also `Guild.banner`.

- **Type:** `Asset`

<a id="attribute-owner"></a>

##### `owner`

The guild's owner. See also `Guild.owner`

- **Type:** Union\[`Member`, `User`]

<a id="attribute-afk-channel"></a>

##### `afk_channel`

The guild's AFK channel.

If this could not be found, then it falls back to a `Object`
with the ID being set.

See `Guild.afk_channel`.

- **Type:** Union\[`VoiceChannel`, `Object`]

<a id="attribute-system-channel"></a>

##### `system_channel`

The guild's system channel.

If this could not be found, then it falls back to a `Object`
with the ID being set.

See `Guild.system_channel`.

- **Type:** Union\[`TextChannel`, `Object`]

<a id="attribute-rules-channel"></a>

##### `rules_channel`

The guild's rules channel.

If this could not be found then it falls back to a `Object`
with the ID being set.

See `Guild.rules_channel`.

- **Type:** Union\[`TextChannel`, `Object`]

<a id="attribute-public-updates-channel"></a>

##### `public_updates_channel`

The guild's public updates channel.

If this could not be found then it falls back to a `Object`
with the ID being set.

See `Guild.public_updates_channel`.

- **Type:** Union\[`TextChannel`, `Object`]

<a id="attribute-afk-timeout"></a>

##### `afk_timeout`

The guild's AFK timeout. See `Guild.afk_timeout`.

- **Type:** `int`

<a id="attribute-mfa-level"></a>

##### `mfa_level`

The guild's MFA level. See `Guild.mfa_level`.

- **Type:** `MFALevel`

<a id="attribute-widget-enabled"></a>

##### `widget_enabled`

The guild's widget has been enabled or disabled.

- **Type:** `bool`

<a id="attribute-widget-channel"></a>

##### `widget_channel`

The widget's channel.

If this could not be found then it falls back to a `Object`
with the ID being set.

- **Type:** Union\[`TextChannel`, `Object`]

<a id="attribute-verification-level"></a>

##### `verification_level`

The guild's verification level.

See also `Guild.verification_level`.

- **Type:** `VerificationLevel`

<a id="attribute-default-notifications"></a>

##### `default_notifications`

The guild's default notification level.

See also `Guild.default_notifications`.

- **Type:** `NotificationLevel`

<a id="attribute-explicit-content-filter"></a>

##### `explicit_content_filter`

The guild's content filter.

See also `Guild.explicit_content_filter`.

- **Type:** `ContentFilter`

<a id="attribute-vanity-url-code"></a>

##### `vanity_url_code`

The guild's vanity URL.

See also `Guild.vanity_invite` and `Guild.edit`.

- **Type:** `str`

<a id="attribute-position"></a>

##### `position`

The position of a `Role` or `abc.GuildChannel`.

- **Type:** `int`

<a id="attribute-type"></a>

##### `type`

The type of channel, sticker, webhook, integration or onboarding prompt.

- **Type:** Union\[`ChannelType`, `StickerType`, `WebhookType`, `str`, `OnboardingPromptType`]

<a id="attribute-topic"></a>

##### `topic`

The topic of a `TextChannel` or `StageChannel`.

See also `TextChannel.topic` or `StageChannel.topic`.

- **Type:** `str`

<a id="attribute-bitrate"></a>

##### `bitrate`

The bitrate of a `VoiceChannel`.

See also `VoiceChannel.bitrate`.

- **Type:** `int`

<a id="attribute-overwrites"></a>

##### `overwrites`

A list of permission overwrite tuples that represents a target and a
`PermissionOverwrite` for said target.

The first element is the object being targeted, which can either
be a `Member` or `User` or `Role`. If this object
is not found then it is a `Object` with an ID being filled and
a `type` attribute set to either `'role'` or `'member'` to help
decide what type of ID it is.

- **Type:** List\[Tuple\[target, `PermissionOverwrite`]]

<a id="attribute-privacy-level"></a>

##### `privacy_level`

The privacy level of the stage instance or scheduled event

- **Type:** `PrivacyLevel`

<a id="attribute-roles"></a>

##### `roles`

A list of roles being added or removed from a member.

If a role is not found then it is a `Object` with the ID and name being
filled in.

- **Type:** List\[Union\[`Role`, `Object`]]

<a id="attribute-nick"></a>

##### `nick`

The nickname of a member.

See also `Member.nick`

- **Type:** Optional\[`str`]

<a id="attribute-deaf"></a>

##### `deaf`

Whether the member is being server deafened.

See also `VoiceState.deaf`.

- **Type:** `bool`

<a id="attribute-mute"></a>

##### `mute`

Whether the member is being server muted.

See also `VoiceState.mute`.

- **Type:** `bool`

<a id="attribute-permissions"></a>

##### `permissions`

The permissions of a role.

See also `Role.permissions`.

- **Type:** `Permissions`

<a id="attribute-colour"></a>

##### `colour`

color

The colour of a role.

See also `Role.colour`

- **Type:** `Colour`

<a id="attribute-secondary-colour"></a>

##### `secondary_colour`

secondary\_color

The secondary colour of a role.

See also `Role.secondary_colour`

- **Type:** Optional\[`Colour`]

<a id="attribute-tertiary-colour"></a>

##### `tertiary_colour`

tertiary\_color

The tertiary colour of a role.

See also `Role.tertiary_colour`

- **Type:** Optional\[`Colour`]

<a id="attribute-hoist"></a>

##### `hoist`

Whether the role is being hoisted or not.

See also `Role.hoist`

- **Type:** `bool`

<a id="attribute-mentionable"></a>

##### `mentionable`

Whether the role is mentionable or not.

See also `Role.mentionable`

- **Type:** `bool`

<a id="attribute-code"></a>

##### `code`

The invite's code.

See also `Invite.code`

- **Type:** `str`

<a id="attribute-channel"></a>

##### `channel`

A guild channel.

If the channel is not found then it is a `Object` with the ID
being set. In some cases the channel name is also set.

- **Type:** Union\[`abc.GuildChannel`, `Object`]

<a id="attribute-inviter"></a>

##### `inviter`

The user who created the invite.

See also `Invite.inviter`.

- **Type:** Optional\[`User`]

<a id="attribute-max-uses"></a>

##### `max_uses`

The invite's max uses.

See also `Invite.max_uses`.

- **Type:** `int`

<a id="attribute-uses"></a>

##### `uses`

The invite's current uses.

See also `Invite.uses`.

- **Type:** `int`

<a id="attribute-max-age"></a>

##### `max_age`

The invite's max age in seconds.

See also `Invite.max_age`.

- **Type:** `int`

<a id="attribute-temporary"></a>

##### `temporary`

If the invite is a temporary invite.

See also `Invite.temporary`.

- **Type:** `bool`

<a id="attribute-allow"></a>

##### `allow`

deny

The permissions being allowed or denied.

- **Type:** `Permissions`

<a id="attribute-id"></a>

##### `id`

The ID of the object being changed.

- **Type:** `int`

<a id="attribute-avatar"></a>

##### `avatar`

The avatar of a member.

See also `User.avatar`.

- **Type:** `Asset`

<a id="attribute-slowmode-delay"></a>

##### `slowmode_delay`

The number of seconds members have to wait before
sending another message in the channel.

See also `TextChannel.slowmode_delay`.

- **Type:** `int`

<a id="attribute-rtc-region"></a>

##### `rtc_region`

The region for the voice channel’s voice communication.
A value of `None` indicates automatic voice region detection.

See also `VoiceChannel.rtc_region`.

- **Type:** `str`

<a id="attribute-video-quality-mode"></a>

##### `video_quality_mode`

The camera video quality for the voice channel's participants.

See also `VoiceChannel.video_quality_mode`.

- **Type:** `VideoQualityMode`

<a id="attribute-format-type"></a>

##### `format_type`

The format type of a sticker being changed.

See also `GuildSticker.format`

- **Type:** `StickerFormatType`

<a id="attribute-emoji"></a>

##### `emoji`

The emoji which represents one of the following:

- `GuildSticker.emoji`
- `SoundboardSound.emoji`

* **Type:** Union\[`str`, `PartialEmoji`]

<a id="attribute-unicode-emoji"></a>

##### `unicode_emoji`

The unicode emoji that is used as an icon for the role being changed.

See also `Role.unicode_emoji`.

- **Type:** `str`

<a id="attribute-description"></a>

##### `description`

The description of a guild, a sticker, or a scheduled event.

See also `Guild.description`, `GuildSticker.description`, or
`ScheduledEvent.description`.

- **Type:** `str`

<a id="attribute-available"></a>

##### `available`

The availability of one of the following being changed:

- `GuildSticker.available`
- `SoundboardSound.available`

* **Type:** `bool`

<a id="attribute-archived"></a>

##### `archived`

The thread is now archived.

- **Type:** `bool`

<a id="attribute-locked"></a>

##### `locked`

The thread is being locked or unlocked.

- **Type:** `bool`

<a id="attribute-auto-archive-duration"></a>

##### `auto_archive_duration`

The thread's auto archive duration being changed.

See also `Thread.auto_archive_duration`

- **Type:** `int`

<a id="attribute-default-auto-archive-duration"></a>

##### `default_auto_archive_duration`

The default auto archive duration for newly created threads being changed.

- **Type:** `int`

<a id="attribute-invitable"></a>

##### `invitable`

Whether non-moderators can add users to this private thread.

- **Type:** `bool`

<a id="attribute-timed-out-until"></a>

##### `timed_out_until`

Whether the user is timed out, and if so until when.

- **Type:** Optional\[`datetime.datetime`]

<a id="attribute-enable-emoticons"></a>

##### `enable_emoticons`

Integration emoticons were enabled or disabled.

See also `StreamIntegration.enable_emoticons`

- **Type:** `bool`

<a id="attribute-expire-behaviour"></a>

##### `expire_behaviour`

expire\_behavior

The behaviour of expiring subscribers changed.

See also `StreamIntegration.expire_behaviour`

- **Type:** `ExpireBehaviour`

<a id="attribute-expire-grace-period"></a>

##### `expire_grace_period`

The grace period before expiring subscribers changed.

See also `StreamIntegration.expire_grace_period`

- **Type:** `int`

<a id="attribute-preferred-locale"></a>

##### `preferred_locale`

The preferred locale for the guild changed.

See also `Guild.preferred_locale`

- **Type:** `Locale`

<a id="attribute-prune-delete-days"></a>

##### `prune_delete_days`

The number of days after which inactive and role-unassigned members are kicked has been changed.

- **Type:** `int`

<a id="attribute-status"></a>

##### `status`

The status of the scheduled event.

- **Type:** `EventStatus`

<a id="attribute-entity-type"></a>

##### `entity_type`

The type of entity this scheduled event is for.

- **Type:** `EntityType`

<a id="attribute-cover-image"></a>

##### `cover_image`

The scheduled event's cover image.

See also `ScheduledEvent.cover_image`.

- **Type:** `Asset`

<a id="attribute-app-command-permissions"></a>

##### `app_command_permissions`

List of permissions for the app command.

- **Type:** List\[`discord.app_commands.AppCommandPermissions`]

<a id="attribute-enabled"></a>

##### `enabled`

Whether guild onboarding or the automod rule is active or not.

- **Type:** `bool`

<a id="attribute-event-type"></a>

##### `event_type`

The event type for triggering the automod rule.

- **Type:** `AutoModRuleEventType`

<a id="attribute-trigger-type"></a>

##### `trigger_type`

The trigger type for the automod rule.

- **Type:** `AutoModRuleTriggerType`

<a id="attribute-trigger"></a>

##### `trigger`

The trigger for the automod rule.

> **Note**
> The `AutoModTrigger.type` of the trigger may be incorrect.
> Some attributes such as `AutoModTrigger.keyword_filter`, `AutoModTrigger.regex_patterns`,
> and `AutoModTrigger.allow_list` will only have the added or removed values.

- **Type:** `AutoModTrigger`

<a id="attribute-actions"></a>

##### `actions`

The actions to take when an automod rule is triggered.

- **Type:** List\[`AutoModRuleAction`]

<a id="attribute-exempt-roles"></a>

##### `exempt_roles`

The list of roles that are exempt from the automod rule.

- **Type:** List\[Union\[`Role`, `Object`]]

<a id="attribute-exempt-channels"></a>

##### `exempt_channels`

The list of channels or threads that are exempt from the automod rule.

- **Type:** List\[`abc.GuildChannel`, `Thread`, `Object`]

<a id="attribute-premium-progress-bar-enabled"></a>

##### `premium_progress_bar_enabled`

The guild’s display setting to show boost progress bar.

- **Type:** `bool`

<a id="attribute-system-channel-flags"></a>

##### `system_channel_flags`

The guild’s system channel settings.

See also `Guild.system_channel_flags`

- **Type:** `SystemChannelFlags`

<a id="attribute-nsfw"></a>

##### `nsfw`

Whether the channel is marked as “not safe for work” or “age restricted”.

- **Type:** `bool`

<a id="attribute-user-limit"></a>

##### `user_limit`

The channel’s limit for number of members that can be in a voice or stage channel.

See also `VoiceChannel.user_limit` and `StageChannel.user_limit`

- **Type:** `int`

<a id="attribute-flags"></a>

##### `flags`

The flags associated with this thread, forum post or invite.

See also `ForumChannel.flags`, `Thread.flags` and `Invite.flags`

- **Type:** Union\[`ChannelFlags`, `InviteFlags`]

<a id="attribute-default-thread-slowmode-delay"></a>

##### `default_thread_slowmode_delay`

The default slowmode delay for threads created in this text channel or forum.

See also `TextChannel.default_thread_slowmode_delay` and `ForumChannel.default_thread_slowmode_delay`

- **Type:** `int`

<a id="attribute-applied-tags"></a>

##### `applied_tags`

The applied tags of a forum post.

See also `Thread.applied_tags`

- **Type:** List\[Union\[`ForumTag`, `Object`]]

<a id="attribute-available-tags"></a>

##### `available_tags`

The available tags of a forum.

See also `ForumChannel.available_tags`

- **Type:** Sequence\[`ForumTag`]

<a id="attribute-default-reaction-emoji"></a>

##### `default_reaction_emoji`

The default\_reaction\_emoji for forum posts.

See also `ForumChannel.default_reaction_emoji`

- **Type:** Optional\[`PartialEmoji`]

<a id="attribute-user"></a>

##### `user`

The user that represents the uploader of a soundboard sound.

See also `SoundboardSound.user`

- **Type:** Union\[`Member`, `User`]

<a id="attribute-volume"></a>

##### `volume`

The volume of a soundboard sound.

See also `SoundboardSound.volume`

- **Type:** `float`

<a id="attribute-options"></a>

##### `options`

The onboarding prompt options associated with this onboarding prompt.

See also `OnboardingPrompt.options`

- **Type:** List\[`OnboardingPromptOption`]

<a id="attribute-default-channels"></a>

##### `default_channels`

The default channels associated with the onboarding in this guild.

See also `Onboarding.default_channels`

- **Type:** List\[`abc.GuildChannel`, `Object`]

<a id="attribute-prompts"></a>

##### `prompts`

The onboarding prompts associated with the onboarding in this guild.

See also `Onboarding.prompts`

- **Type:** List\[`OnboardingPrompt`]

<a id="attribute-title"></a>

##### `title`

The title of the onboarding prompt.

See also `OnboardingPrompt.title`

- **Type:** `str`

<a id="attribute-single-select"></a>

##### `single_select`

Whether only one prompt option can be selected.

See also `OnboardingPrompt.single_select`

- **Type:** `bool`

<a id="attribute-required"></a>

##### `required`

Whether the onboarding prompt is required to complete the onboarding.

See also `OnboardingPrompt.required`

- **Type:** `bool`

<a id="attribute-in-onboarding"></a>

##### `in_onboarding`

Whether this prompt is currently part of the onboarding flow.

See also `OnboardingPrompt.in_onboarding`

- **Type:** `bool`

<a id="attribute-mode"></a>

##### `mode`

The onboarding constraint mode.

See also `Onboarding.mode`

- **Type:** `OnboardingMode`

  I'm not sure how to port these

## Webhook Support

discord.py offers support for creating, editing, and executing webhooks through the `Webhook` class.

### Webhook

<a id="api-webhook"></a>

#### `Webhook(BaseWebhook)`

Represents an asynchronous Discord webhook.

Webhooks are a form to send messages to channels in Discord without a
bot user or authentication.

There are two main ways to use Webhooks. The first is through the ones
received by the library such as `.Guild.webhooks`,
`.TextChannel.webhooks`, `.VoiceChannel.webhooks`
and `.ForumChannel.webhooks`.
The ones received by the library will automatically be
bound using the library's internal HTTP session.

The second form involves creating a webhook object manually using the
`.Webhook.from_url` or `.Webhook.partial` classmethods.

For example, creating a webhook from a URL and using [aiohttp](https://docs.aiohttp.org/en/stable/):

```python3
from discord import Webhook
import aiohttp

async def foo():
    async with aiohttp.ClientSession() as session:
        webhook = Webhook.from_url('url-here', session=session)
        await webhook.send('Hello World', username='Foo')
```

For a synchronous counterpart, see `SyncWebhook`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two webhooks are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two webhooks are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the webhooks's hash.

> **Changed in version 1.4**
> Webhooks are now comparable and hashable.

## Attributes

**id: `int`**

The webhook's ID

**type: `WebhookType`**

The type of the webhook.

> **Added in version 1.3**

**token: Optional\[`str`]**

The authentication token of the webhook. If this is `None`
then the webhook cannot be used to make requests.

**guild\_id: Optional\[`int`]**

The guild ID this webhook is for.

**channel\_id: Optional\[`int`]**

The channel ID this webhook is for.

**user: Optional\[`abc.User`]**

The user this webhook was created by. If the webhook was
received without authentication then this will be `None`.

**name: Optional\[`str`]**

The default name of the webhook.

**source\_guild: Optional\[`PartialWebhookGuild`]**

The guild of the channel that this webhook is following.
Only given if `type` is `WebhookType.channel_follower`.

> **Added in version 2.0**

**source\_channel: Optional\[`PartialWebhookChannel`]**

The channel that this webhook is following.
Only given if `type` is `WebhookType.channel_follower`.

> **Added in version 2.0**

<a id="api-webhook-url"></a>

##### `url(self) -> str`

`str` : Returns the webhook's url.

<a id="api-webhook-partial"></a>

##### `partial( cls, id: int, token: str, *, session: aiohttp.ClientSession = MISSING, client: Client = MISSING, bot_token: Optional[str] = None,) -> Self`

Creates a partial `Webhook`.

## Parameters

**id: `int`**

The ID of the webhook.

**token: `str`**

The authentication token of the webhook.

**session: `aiohttp.ClientSession`**

The session to use to send requests with. Note
that the library does not manage the session and
will not close it.

> **Added in version 2.0**

**client: `Client`**

The client to initialise this webhook with. This allows it to
attach the client's internal state. If `session` is not given
while this is given then the client's internal session will be used.

> **Added in version 2.2**

**bot\_token: Optional\[`str`]**

The bot authentication token for authenticated requests
involving the webhook.

> **Added in version 2.0**

## Raises

**TypeError**

Neither `session` nor `client` were given.

## Returns

**`Webhook`**

A partial `Webhook`.
A partial webhook is just a webhook object with an ID and a token.

<a id="api-webhook-from-url"></a>

##### `from_url( cls, url: str, *, session: aiohttp.ClientSession = MISSING, client: Client = MISSING, bot_token: Optional[str] = None,) -> Self`

Creates a partial `Webhook` from a webhook URL.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**url: `str`**

The URL of the webhook.

**session: `aiohttp.ClientSession`**

The session to use to send requests with. Note
that the library does not manage the session and
will not close it.

> **Added in version 2.0**

**client: `Client`**

The client to initialise this webhook with. This allows it to
attach the client's internal state. If `session` is not given
while this is given then the client's internal session will be used.

> **Added in version 2.2**

**bot\_token: Optional\[`str`]**

The bot authentication token for authenticated requests
involving the webhook.

> **Added in version 2.0**

## Raises

**ValueError**

The URL is invalid.

**TypeError**

Neither `session` nor `client` were given.

## Returns

**`Webhook`**

A partial `Webhook`.
A partial webhook is just a webhook object with an ID and a token.

<a id="api-webhook-fetch"></a>

##### `fetch(self, *, prefer_auth: bool = True) -> Webhook`

*coroutine*

Fetches the current webhook.

This could be used to get a full webhook from a partial webhook.

> **Added in version 2.0**

> **Note**
> When fetching with an unauthenticated webhook, i.e.
> `is_authenticated` returns `False`, then the
> returned webhook does not contain any user information.

## Parameters

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

## Raises

**HTTPException**

Could not fetch the webhook

**NotFound**

Could not find the webhook by this ID

**ValueError**

This webhook does not have a token associated with it.

## Returns

**`Webhook`**

The fetched webhook.

<a id="api-webhook-delete"></a>

##### `delete(self, *, reason: Optional[str] = None, prefer_auth: bool = True) -> None`

*coroutine*

Deletes this Webhook.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this webhook. Shows up on the audit log.

> **Added in version 1.4**

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

> **Added in version 2.0**

## Raises

**HTTPException**

Deleting the webhook failed.

**NotFound**

This webhook does not exist.

**Forbidden**

You do not have permissions to delete this webhook.

**ValueError**

This webhook does not have a token associated with it.

<a id="api-webhook-edit"></a>

##### `edit( self, *, reason: Optional[str] = None, name: Optional[str] = MISSING, avatar: Optional[bytes] = MISSING, channel: Optional[Snowflake] = None, prefer_auth: bool = True,) -> Webhook`

*coroutine*

Edits this Webhook.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**name: Optional\[`str`]**

The webhook's new default name.

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the webhook's new default avatar.

**channel: Optional\[`abc.Snowflake`]**

The webhook's new channel. This requires an authenticated webhook.

> **Added in version 2.0**

**reason: Optional\[`str`]**

The reason for editing this webhook. Shows up on the audit log.

> **Added in version 1.4**

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

> **Added in version 2.0**

## Raises

**HTTPException**

Editing the webhook failed.

**NotFound**

This webhook does not exist.

**ValueError**

This webhook does not have a token associated with it
or it tried editing a channel without authentication.

<a id="api-webhook-send"></a>

##### `send( self, content: str = MISSING, *, username: str = MISSING, avatar_url: Any = MISSING, tts: bool = False, ephemeral: bool = False, file: File = MISSING, files: Sequence[File] = MISSING, embed: Embed = MISSING, embeds: Sequence[Embed] = MISSING, allowed_mentions: AllowedMentions = MISSING, view: BaseView = MISSING, thread: Snowflake = MISSING, thread_name: str = MISSING, wait: bool = False, suppress_embeds: bool = False, silent: bool = False, applied_tags: List[ForumTag] = MISSING, poll: Poll = MISSING,) -> Optional[WebhookMessage]`

*coroutine*

Sends a message using the webhook.

The content must be a type that can convert to a string through `str(content)`.

To upload a single file, the `file` parameter should be used with a
single `File` object.

If the `embed` parameter is provided, it must be of type `Embed` and
it must be a rich embed type. You cannot mix the `embed` parameter with the
`embeds` parameter, which must be a `list` of `Embed` objects to send.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**content: `str`**

The content of the message to send.

**wait: `bool`**

Whether the server should wait before sending a response. This essentially
means that the return type of this function changes from `None` to
a `WebhookMessage` if set to `True`. If the type of webhook
is `WebhookType.application` then this is always set to `True`.

**username: `str`**

The username to send with this message. If no username is provided
then the default username for the webhook is used.

**avatar\_url: `str`**

The avatar URL to send with this message. If no avatar URL is provided
then the default avatar for the webhook is used. If this is not a
string then it is explicitly cast using `str`.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**ephemeral: `bool`**

Indicates if the message should only be visible to the user.
This is only available to `WebhookType.application` webhooks.
If a view is sent with an ephemeral message and it has no timeout set
then the timeout is set to 15 minutes.

> **Added in version 2.0**

**file: `File`**

The file to upload. This cannot be mixed with `files` parameter.

**files: List\[`File`]**

A list of files to send with the content. This cannot be mixed with the
`file` parameter.

**embed: `Embed`**

The rich embed for the content to send. This cannot be mixed with
`embeds` parameter.

**embeds: List\[`Embed`]**

A list of embeds to send with the content. Maximum of 10. This cannot
be mixed with the `embed` parameter.

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.

> **Added in version 1.4**

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

The view to send with the message. If the webhook is partial or
is not managed by the library, then you can not send interactable components.
Otherwise, you can send views with any type of components.

> **Added in version 2.0**

**thread: `discord.abc.Snowflake`**

The thread to send this webhook to.

> **Added in version 2.0**

**thread\_name: `str`**

The thread name to create with this webhook if the webhook belongs
to a `discord.ForumChannel`. Note that this is mutually
exclusive with the `thread` parameter, as this will create a
new thread with the given name.

> **Added in version 2.0**

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

> **Added in version 2.0**

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.2**

**applied\_tags: List\[`ForumTag`]**

Tags to apply to the thread if the webhook belongs to a `discord.ForumChannel`.

> **Added in version 2.4**

**poll: `Poll`**

The poll to send with this message.

> **Warning**
> When sending a Poll via webhook, you cannot manually end it.

> **Added in version 2.4**

## Raises

**HTTPException**

Sending the message failed.

**NotFound**

This webhook was not found.

**Forbidden**

The authorization token for the webhook is incorrect.

**TypeError**

You specified both `embed` and `embeds` or `file` and `files`
or `thread` and `thread_name`.

**ValueError**

The length of `embeds` was invalid, there was no token
associated with this webhook or `ephemeral` was passed
with the improper webhook type or there was no state
attached with this webhook when giving it a view that had
components other than URL buttons.

## Returns

**Optional\[`WebhookMessage`]**

If `wait` is `True` then the message that was sent, otherwise `None`.

<a id="api-webhook-fetch-message"></a>

##### `fetch_message(self, id: int, /, *, thread: Snowflake = MISSING) -> WebhookMessage`

*coroutine*

Retrieves a single `discord.WebhookMessage` owned by this webhook.

> **Added in version 2.0**

## Parameters

**id: `int`**

The message ID to look for.

**thread: `discord.abc.Snowflake`**

The thread to look in.

## Raises

**\~discord.NotFound**

The specified message was not found.

**\~discord.Forbidden**

You do not have the permissions required to get a message.

**\~discord.HTTPException**

Retrieving the message failed.

**ValueError**

There was no token associated with this webhook.

## Returns

**`discord.WebhookMessage`**

The message asked for.

<a id="api-webhook-edit-message"></a>

##### `edit_message( self, message_id: int, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[BaseView] = MISSING, allowed_mentions: Optional[AllowedMentions] = None, thread: Snowflake = MISSING,) -> WebhookMessage`

*coroutine*

Edits a message owned by this webhook.

This is a lower level interface to `WebhookMessage.edit` in case
you only have an ID.

> **Added in version 1.6**

> **Changed in version 2.0**
> The edit is no longer in-place, instead the newly edited message is returned.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**message\_id: `int`**

The message ID to edit.

**content: Optional\[`str`]**

The content to edit the message with or `None` to clear it.

**embeds: List\[`Embed`]**

A list of embeds to edit the message with.

**embed: Optional\[`Embed`]**

The embed to edit the message with. `None` suppresses the embeds.
This should not be mixed with the `embeds` parameter.

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Added in version 2.0**

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed. If the webhook is partial or is not managed by the
library, then you can not send interactable components. Otherwise, you
can send views with any type of components.

> **Note**
> To update the message to add a `discord.ui.LayoutView`, you
> must explicitly set the `content`, `embed`, `embeds`, and
> `attachments` parameters to either `None` or an empty array, as appropriate.

> **Added in version 2.0**

**thread: `discord.abc.Snowflake`**

The thread the webhook message belongs to.

> **Added in version 2.0**

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`

**ValueError**

The length of `embeds` was invalid,
there was no token associated with this webhook or the webhook had
no state.

## Returns

**`WebhookMessage`**

The newly edited webhook message.

<a id="api-webhook-delete-message"></a>

##### `delete_message(self, message_id: int, /, *, thread: Snowflake = MISSING) -> None`

*coroutine*

Deletes a message owned by this webhook.

This is a lower level interface to `WebhookMessage.delete` in case
you only have an ID.

> **Added in version 1.6**

> **Changed in version 2.0**
> `message_id` parameter is now positional-only.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**message\_id: `int`**

The message ID to delete.

**thread: `discord.abc.Snowflake`**

The thread the webhook message belongs to.

> **Added in version 2.0**

## Raises

**HTTPException**

Deleting the message failed.

**Forbidden**

Deleted a message that is not yours.

**ValueError**

This webhook does not have a token associated with it.

### WebhookMessage

<a id="api-webhookmessage"></a>

#### `WebhookMessage(Message)`

Represents a message sent from your webhook.

This allows you to edit or delete a message sent by your
webhook.

This inherits from `discord.Message` with changes to
`edit` and `delete` to work.

> **Added in version 1.6**

<a id="api-webhookmessage-edit"></a>

##### `edit( self, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[BaseView] = MISSING, allowed_mentions: Optional[AllowedMentions] = None,) -> WebhookMessage`

*coroutine*

Edits the message.

> **Added in version 1.6**

> **Changed in version 2.0**
> The edit is no longer in-place, instead the newly edited message is returned.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The content to edit the message with or `None` to clear it.

**embeds: List\[`Embed`]**

A list of embeds to edit the message with.

**embed: Optional\[`Embed`]**

The embed to edit the message with. `None` suppresses the embeds.
This should not be mixed with the `embeds` parameter.

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Note**
> New files will always appear after current attachments.

> **Added in version 2.0**

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**view: Optional\[`discord.ui.View`]**

The updated view to update this message with. If `None` is passed then
the view is removed. If the webhook is partial or is not managed by the
library, then you can not send interactable components. Otherwise, you
can send views with any type of components.

> **Note**
> To update the message to add a `discord.ui.LayoutView`, you
> must explicitly set the `content`, `embed`, `embeds`, and
> `attachments` parameters to either `None` or an empty array, as appropriate.

> **Added in version 2.0**

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`

**ValueError**

The length of `embeds` was invalid or
there was no token associated with this webhook.

## Returns

**`WebhookMessage`**

The newly edited message.

<a id="api-webhookmessage-add-files"></a>

##### `add_files(self, *files: File) -> WebhookMessage`

*coroutine*

Adds new files to the end of the message attachments.

> **Added in version 2.0**

## Parameters

**\*files: `File`**

New files to add to the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`WebhookMessage`**

The newly edited message.

<a id="api-webhookmessage-remove-attachments"></a>

##### `remove_attachments(self, *attachments: Attachment) -> WebhookMessage`

*coroutine*

Removes attachments from the message.

> **Added in version 2.0**

## Parameters

**\*attachments: `Attachment`**

Attachments to remove from the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`WebhookMessage`**

The newly edited message.

<a id="api-webhookmessage-delete"></a>

##### `delete(self, *, delay: Optional[float] = None) -> None`

*coroutine*

Deletes the message.

## Parameters

**delay: Optional\[`float`]**

If provided, the number of seconds to wait before deleting the message.
The waiting is done in the background and deletion failures are ignored.

## Raises

**Forbidden**

You do not have proper permissions to delete the message.

**NotFound**

The message was deleted already.

**HTTPException**

Deleting the message failed.

### SyncWebhook

<a id="api-syncwebhook"></a>

#### `SyncWebhook(BaseWebhook)`

Represents a synchronous Discord webhook.

For an asynchronous counterpart, see `Webhook`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two webhooks are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two webhooks are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the webhooks's hash.

> **Changed in version 1.4**
> Webhooks are now comparable and hashable.

## Attributes

**id: `int`**

The webhook's ID

**type: `WebhookType`**

The type of the webhook.

> **Added in version 1.3**

**token: Optional\[`str`]**

The authentication token of the webhook. If this is `None`
then the webhook cannot be used to make requests.

**guild\_id: Optional\[`int`]**

The guild ID this webhook is for.

**channel\_id: Optional\[`int`]**

The channel ID this webhook is for.

**user: Optional\[`abc.User`]**

The user this webhook was created by. If the webhook was
received without authentication then this will be `None`.

**name: Optional\[`str`]**

The default name of the webhook.

**source\_guild: Optional\[`PartialWebhookGuild`]**

The guild of the channel that this webhook is following.
Only given if `type` is `WebhookType.channel_follower`.

> **Added in version 2.0**

**source\_channel: Optional\[`PartialWebhookChannel`]**

The channel that this webhook is following.
Only given if `type` is `WebhookType.channel_follower`.

> **Added in version 2.0**

<a id="api-syncwebhook-url"></a>

##### `url(self) -> str`

`str` : Returns the webhook's url.

<a id="api-syncwebhook-partial"></a>

##### `partial(cls, id: int, token: str, *, session: Session = MISSING, bot_token: Optional[str] = None) -> SyncWebhook`

Creates a partial `Webhook`.

## Parameters

**id: `int`**

The ID of the webhook.

**token: `str`**

The authentication token of the webhook.

**session: `requests.Session`**

The session to use to send requests with. Note
that the library does not manage the session and
will not close it. If not given, the `requests`
auto session creation functions are used instead.

**bot\_token: Optional\[`str`]**

The bot authentication token for authenticated requests
involving the webhook.

## Returns

**`SyncWebhook`**

A partial `SyncWebhook`.
A partial `SyncWebhook` is just a `SyncWebhook` object with an ID and a token.

<a id="api-syncwebhook-from-url"></a>

##### `from_url(cls, url: str, *, session: Session = MISSING, bot_token: Optional[str] = None) -> SyncWebhook`

Creates a partial `Webhook` from a webhook URL.

## Parameters

**url: `str`**

The URL of the webhook.

**session: `requests.Session`**

The session to use to send requests with. Note
that the library does not manage the session and
will not close it. If not given, the `requests`
auto session creation functions are used instead.

**bot\_token: Optional\[`str`]**

The bot authentication token for authenticated requests
involving the webhook.

## Raises

**ValueError**

The URL is invalid.

## Returns

**`SyncWebhook`**

A partial `SyncWebhook`.
A partial `SyncWebhook` is just a `SyncWebhook` object with an ID and a token.

<a id="api-syncwebhook-fetch"></a>

##### `fetch(self, *, prefer_auth: bool = True) -> SyncWebhook`

Fetches the current webhook.

This could be used to get a full webhook from a partial webhook.

> **Note**
> When fetching with an unauthenticated webhook, i.e.
> `is_authenticated` returns `False`, then the
> returned webhook does not contain any user information.

## Parameters

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

## Raises

**HTTPException**

Could not fetch the webhook

**NotFound**

Could not find the webhook by this ID

**ValueError**

This webhook does not have a token associated with it.

## Returns

**`SyncWebhook`**

The fetched webhook.

<a id="api-syncwebhook-delete"></a>

##### `delete(self, *, reason: Optional[str] = None, prefer_auth: bool = True) -> None`

Deletes this Webhook.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this webhook. Shows up on the audit log.

> **Added in version 1.4**

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

## Raises

**HTTPException**

Deleting the webhook failed.

**NotFound**

This webhook does not exist.

**Forbidden**

You do not have permissions to delete this webhook.

**ValueError**

This webhook does not have a token associated with it.

<a id="api-syncwebhook-edit"></a>

##### `edit( self, *, reason: Optional[str] = None, name: Optional[str] = MISSING, avatar: Optional[bytes] = MISSING, channel: Optional[Snowflake] = None, prefer_auth: bool = True,) -> SyncWebhook`

Edits this Webhook.

## Parameters

**name: Optional\[`str`]**

The webhook's new default name.

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the webhook's new default avatar.

**channel: Optional\[`abc.Snowflake`]**

The webhook's new channel. This requires an authenticated webhook.

**reason: Optional\[`str`]**

The reason for editing this webhook. Shows up on the audit log.

> **Added in version 1.4**

**prefer\_auth: `bool`**

Whether to use the bot token over the webhook token
if available. Defaults to `True`.

## Raises

**HTTPException**

Editing the webhook failed.

**NotFound**

This webhook does not exist.

**ValueError**

This webhook does not have a token associated with it
or it tried editing a channel without authentication.

## Returns

**`SyncWebhook`**

The newly edited webhook.

<a id="api-syncwebhook-send"></a>

##### `send( self, content: str = MISSING, *, username: str = MISSING, avatar_url: Any = MISSING, tts: bool = False, file: File = MISSING, files: Sequence[File] = MISSING, embed: Embed = MISSING, embeds: Sequence[Embed] = MISSING, allowed_mentions: AllowedMentions = MISSING, thread: Snowflake = MISSING, thread_name: str = MISSING, wait: bool = False, suppress_embeds: bool = False, silent: bool = False, applied_tags: List[ForumTag] = MISSING, poll: Poll = MISSING, view: BaseView = MISSING,) -> Optional[SyncWebhookMessage]`

Sends a message using the webhook.

The content must be a type that can convert to a string through `str(content)`.

To upload a single file, the `file` parameter should be used with a
single `File` object.

If the `embed` parameter is provided, it must be of type `Embed` and
it must be a rich embed type. You cannot mix the `embed` parameter with the
`embeds` parameter, which must be a `list` of `Embed` objects to send.

## Parameters

**content: `str`**

The content of the message to send.

**wait: `bool`**

Whether the server should wait before sending a response. This essentially
means that the return type of this function changes from `None` to
a `WebhookMessage` if set to `True`.

**username: `str`**

The username to send with this message. If no username is provided
then the default username for the webhook is used.

**avatar\_url: `str`**

The avatar URL to send with this message. If no avatar URL is provided
then the default avatar for the webhook is used. If this is not a
string then it is explicitly cast using `str`.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**file: `File`**

The file to upload. This cannot be mixed with `files` parameter.

**files: List\[`File`]**

A list of files to send with the content. This cannot be mixed with the
`file` parameter.

**embed: `Embed`**

The rich embed for the content to send. This cannot be mixed with
`embeds` parameter.

**embeds: List\[`Embed`]**

A list of embeds to send with the content. Maximum of 10. This cannot
be mixed with the `embed` parameter.

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.

> **Added in version 1.4**

**thread: `discord.abc.Snowflake`**

The thread to send this message to.

> **Added in version 2.0**

**thread\_name: `str`**

The thread name to create with this webhook if the webhook belongs
to a `discord.ForumChannel`. Note that this is mutually
exclusive with the `thread` parameter, as this will create a
new thread with the given name.

> **Added in version 2.0**

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

> **Added in version 2.0**

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.2**

**poll: `Poll`**

The poll to send with this message.

> **Warning**
> When sending a Poll via webhook, you cannot manually end it.

> **Added in version 2.4**

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

The view to send with the message. This can only have non-interactible items, which do not
require a state to be attached to it.

If you want to send a view with any component attached to it, check `Webhook.send`.

> **Added in version 2.5**

## Raises

**HTTPException**

Sending the message failed.

**NotFound**

This webhook was not found.

**Forbidden**

The authorization token for the webhook is incorrect.

**TypeError**

You specified both `embed` and `embeds` or `file` and `files`
or `thread` and `thread_name`.

**ValueError**

The length of `embeds` was invalid, there was no token
associated with this webhook or you tried to send a view
with components other than URL buttons.

## Returns

**Optional\[`SyncWebhookMessage`]**

If `wait` is `True` then the message that was sent, otherwise `None`.

<a id="api-syncwebhook-fetch-message"></a>

##### `fetch_message(self, id: int, /, *, thread: Snowflake = MISSING) -> SyncWebhookMessage`

Retrieves a single `discord.SyncWebhookMessage` owned by this webhook.

> **Added in version 2.0**

## Parameters

**id: `int`**

The message ID to look for.

**thread: `discord.abc.Snowflake`**

The thread to look in.

## Raises

**\~discord.NotFound**

The specified message was not found.

**\~discord.Forbidden**

You do not have the permissions required to get a message.

**\~discord.HTTPException**

Retrieving the message failed.

**ValueError**

There was no token associated with this webhook.

## Returns

**`discord.SyncWebhookMessage`**

The message asked for.

<a id="api-syncwebhook-edit-message"></a>

##### `edit_message( self, message_id: int, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[BaseView] = MISSING, allowed_mentions: Optional[AllowedMentions] = None, thread: Snowflake = MISSING,) -> SyncWebhookMessage`

Edits a message owned by this webhook.

This is a lower level interface to `WebhookMessage.edit` in case
you only have an ID.

> **Added in version 1.6**

## Parameters

**message\_id: `int`**

The message ID to edit.

**content: Optional\[`str`]**

The content to edit the message with or `None` to clear it.

**embeds: List\[`Embed`]**

A list of embeds to edit the message with.

**embed: Optional\[`Embed`]**

The embed to edit the message with. `None` suppresses the embeds.
This should not be mixed with the `embeds` parameter.

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Added in version 2.0**

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. This can only have non-interactible items, which do not
require a state to be attached to it. If `None` is passed then the view is removed.

If you want to edit a webhook message with any component attached to it, check `WebhookMessage.edit`.

> **Note**
> To update the message to add a `discord.ui.LayoutView`, you
> must explicitly set the `content`, `embed`, `embeds`, and
> `attachments` parameters to either `None` or an empty array, as appropriate.

> **Added in version 2.6**

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**thread: `discord.abc.Snowflake`**

The thread the webhook message belongs to.

> **Added in version 2.0**

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`

**ValueError**

The length of `embeds` was invalid or
there was no token associated with this webhook.

<a id="api-syncwebhook-delete-message"></a>

##### `delete_message(self, message_id: int, /, *, thread: Snowflake = MISSING) -> None`

Deletes a message owned by this webhook.

This is a lower level interface to `WebhookMessage.delete` in case
you only have an ID.

> **Added in version 1.6**

## Parameters

**message\_id: `int`**

The message ID to delete.

**thread: `discord.abc.Snowflake`**

The thread the webhook message belongs to.

> **Added in version 2.0**

## Raises

**HTTPException**

Deleting the message failed.

**Forbidden**

Deleted a message that is not yours.

**ValueError**

This webhook does not have a token associated with it.

### SyncWebhookMessage

<a id="api-syncwebhookmessage"></a>

#### `SyncWebhookMessage(Message)`

Represents a message sent from your webhook.

This allows you to edit or delete a message sent by your
webhook.

This inherits from `discord.Message` with changes to
`edit` and `delete` to work.

> **Added in version 2.0**

<a id="api-syncwebhookmessage-edit"></a>

##### `edit( self, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, allowed_mentions: Optional[AllowedMentions] = None, view: Optional[BaseView] = MISSING,) -> SyncWebhookMessage`

Edits the message.

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The content to edit the message with or `None` to clear it.

**embeds: List\[`Embed`]**

A list of embeds to edit the message with.

**embed: Optional\[`Embed`]**

The embed to edit the message with. `None` suppresses the embeds.
This should not be mixed with the `embeds` parameter.

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Note**
> New files will always appear after current attachments.

> **Added in version 2.0**

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

The updated view to update this message with. This can only have non-interactible items, which do not
require a state to be attached to it. If `None` is passed then the view is removed.

If you want to edit a webhook message with any component attached to it, check `WebhookMessage.edit`.

> **Note**
> To update the message to add a `discord.ui.LayoutView`, you
> must explicitly set the `content`, `embed`, `embeds`, and
> `attachments` parameters to either `None` or an empty array, as appropriate.

> **Added in version 2.7**

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`.

**ValueError**

The length of `embeds` was invalid or
there was no token associated with this webhook.

## Returns

**`SyncWebhookMessage`**

The newly edited message.

<a id="api-syncwebhookmessage-add-files"></a>

##### `add_files(self, *files: File) -> SyncWebhookMessage`

Adds new files to the end of the message attachments.

> **Added in version 2.0**

## Parameters

**\*files: `File`**

New files to add to the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`SyncWebhookMessage`**

The newly edited message.

<a id="api-syncwebhookmessage-remove-attachments"></a>

##### `remove_attachments(self, *attachments: Attachment) -> SyncWebhookMessage`

Removes attachments from the message.

> **Added in version 2.0**

## Parameters

**\*attachments: `Attachment`**

Attachments to remove from the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`SyncWebhookMessage`**

The newly edited message.

<a id="api-syncwebhookmessage-delete"></a>

##### `delete(self, *, delay: Optional[float] = None) -> None`

Deletes the message.

## Parameters

**delay: Optional\[`float`]**

If provided, the number of seconds to wait before deleting the message.
This blocks the thread.

## Raises

**Forbidden**

You do not have proper permissions to delete the message.

**NotFound**

The message was deleted already.

**HTTPException**

Deleting the message failed.

<a id="discord-api-abcs"></a>

## Abstract Base Classes

An `abstract base class` (also known as an `abc`) is a class that models can inherit
to get their behaviour. **Abstract base classes should not be instantiated**.
They are mainly there for usage with `isinstance` and `issubclass`.

This library has a module related to abstract base classes, in which all the ABCs are subclasses of
`typing.Protocol`.

### Snowflake

<a id="api-discord-abc-snowflake"></a>

#### `Snowflake(Protocol)`

An ABC that details the common operations on a Discord model.

Almost all [Discord models](https://discordpy.readthedocs.io/api.html#discord-api-models) meet this
abstract base class.

If you want to create a snowflake on your own, consider using
`.Object`.

## Attributes

**id: `int`**

The model's unique ID.

### User

<a id="api-discord-abc-user"></a>

#### `User(Snowflake, Protocol)`

An ABC that details the common operations on a Discord user.

The following implement this ABC:

- `discord.User`
- `discord.ClientUser`
- `discord.Member`

This ABC must also implement `discord.abc.Snowflake`.

## Attributes

**name: `str`**

The user's username.

**discriminator: `str`**

The user's discriminator. This is a legacy concept that is no longer used.

**global\_name: Optional\[`str`]**

The user's global nickname.

**bot: `bool`**

If the user is a bot account.

**system: `bool`**

If the user is a system account.

<a id="api-discord-abc-user-display-name"></a>

##### `display_name(self) -> str`

`str`: Returns the user's display name.

<a id="api-discord-abc-user-mention"></a>

##### `mention(self) -> str`

`str`: Returns a string that allows you to mention the given user.

<a id="api-discord-abc-user-avatar"></a>

##### `avatar(self) -> Optional[Asset]`

Optional\[`discord.Asset`]: Returns an Asset that represents the user's avatar, if present.

<a id="api-discord-abc-user-avatar-decoration"></a>

##### `avatar_decoration(self) -> Optional[Asset]`

Optional\[`discord.Asset`]: Returns an Asset that represents the user's avatar decoration, if present.

> **Added in version 2.4**

<a id="api-discord-abc-user-avatar-decoration-sku-id"></a>

##### `avatar_decoration_sku_id(self) -> Optional[int]`

Optional\[`int`]: Returns an integer that represents the user's avatar decoration SKU ID, if present.

> **Added in version 2.4**

<a id="api-discord-abc-user-default-avatar"></a>

##### `default_avatar(self) -> Asset`

`discord.Asset`: Returns the default avatar for a given user.

<a id="api-discord-abc-user-display-avatar"></a>

##### `display_avatar(self) -> Asset`

`discord.Asset`: Returns the user's display avatar.

For regular users this is just their default avatar or uploaded avatar.

> **Added in version 2.0**

<a id="api-discord-abc-user-mentioned-in"></a>

##### `mentioned_in(self, message: Message) -> bool`

Checks if the user is mentioned in the specified message.

## Parameters

**message: `discord.Message`**

The message to check if you're mentioned in.

## Returns

**`bool`**

Indicates if the user is mentioned in the message.

### PrivateChannel

<a id="api-discord-abc-privatechannel"></a>

#### `PrivateChannel`

An ABC that details the common operations on a private Discord channel.

The following implement this ABC:

- `discord.DMChannel`
- `discord.GroupChannel`

This ABC must also implement `discord.abc.Snowflake`.

## Attributes

**me: `discord.ClientUser`**

The user presenting yourself.

### GuildChannel

<a id="api-discord-abc-guildchannel"></a>

#### `GuildChannel`

An ABC that details the common operations on a Discord guild channel.

The following implement this ABC:

- `discord.TextChannel`
- `discord.VoiceChannel`
- `discord.CategoryChannel`
- `discord.StageChannel`
- `discord.ForumChannel`

This ABC must also implement `discord.abc.Snowflake`.

## Attributes

**name: `str`**

The channel name.

**guild: `discord.Guild`**

The guild the channel belongs to.

**position: `int`**

The position in the channel list. This is a number that starts at 0.
e.g. the top channel is position 0.

<a id="api-discord-abc-guildchannel-changed-roles"></a>

##### `changed_roles(self) -> List[Role]`

List\[`discord.Role`]: Returns a list of roles that have been overridden from
their default values in the `discord.Guild.roles` attribute.

<a id="api-discord-abc-guildchannel-mention"></a>

##### `mention(self) -> str`

`str`: The string that allows you to mention the channel.

<a id="api-discord-abc-guildchannel-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the channel.

> **Added in version 2.0**

<a id="api-discord-abc-guildchannel-created-at"></a>

##### `created_at(self) -> datetime`

`datetime.datetime`: Returns the channel's creation time in UTC.

<a id="api-discord-abc-guildchannel-overwrites-for"></a>

##### `overwrites_for(self, obj: Union[Role, User, Object]) -> PermissionOverwrite`

Returns the channel-specific overwrites for a member or a role.

## Parameters

**obj: Union\[`discord.Role`, `discord.abc.User`, `discord.Object`]**

The role or user denoting whose overwrite to get.

## Returns

**`discord.PermissionOverwrite`**

The permission overwrites for this object.

<a id="api-discord-abc-guildchannel-overwrites"></a>

##### `overwrites(self) -> Dict[Union[Role, Member, Object], PermissionOverwrite]`

Returns all of the channel's overwrites.

This is returned as a dictionary where the key contains the target which
can be either a `discord.Role` or a `discord.Member` and the value is the
overwrite as a `discord.PermissionOverwrite`.

> **Changed in version 2.0**
> Overwrites can now be type-aware `discord.Object` in case of cache lookup failure

## Returns

**Dict\[Union\[`discord.Role`, `discord.Member`, `discord.Object`], `discord.PermissionOverwrite`]**

The channel's permission overwrites.

<a id="api-discord-abc-guildchannel-category"></a>

##### `category(self) -> Optional[CategoryChannel]`

Optional\[`discord.CategoryChannel`]: The category this channel belongs to.

If there is no category then this is `None`.

<a id="api-discord-abc-guildchannel-permissions-synced"></a>

##### `permissions_synced(self) -> bool`

`bool`: Whether or not the permissions for this channel are synced with the
category it belongs to.

If there is no category then this is `False`.

> **Added in version 1.3**

<a id="api-discord-abc-guildchannel-permissions-for"></a>

##### `permissions_for(self, obj: Union[Member, Role], /) -> Permissions`

Handles permission resolution for the `discord.Member`
or `discord.Role`.

This function takes into consideration the following cases:

- Guild owner
- Guild roles
- Channel overrides
- Member overrides
- Implicit permissions
- Member timeout
- User installed app

If a `discord.Role` is passed, then it checks the permissions
someone with that role would have, which is essentially:

- The default role permissions
- The permissions of the role used as a parameter
- The default role permission overwrites
- The permission overwrites of the role used as a parameter

> **Changed in version 2.0**
> The object passed in can now be a role object.

> **Changed in version 2.0**
> `obj` parameter is now positional-only.

> **Changed in version 2.4**
> User installed apps are now taken into account.
> The permissions returned for a user installed app mirrors the
> permissions Discord returns in `discord.Interaction.app_permissions`,
> though it is recommended to use that attribute instead.

## Parameters

**obj: Union\[`discord.Member`, `discord.Role`]**

The object to resolve permissions for. This could be either
a member or a role. If it's a role then member overwrites
are not computed.

## Returns

**`discord.Permissions`**

The resolved permissions for the member or role.

<a id="api-discord-abc-guildchannel-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the channel.

You must have `discord.Permissions.manage_channels` to do this.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this channel.
Shows up on the audit log.

## Raises

**\~discord.Forbidden**

You do not have proper permissions to delete the channel.

**\~discord.NotFound**

The channel was not found or was already deleted.

**\~discord.HTTPException**

Deleting the channel failed.

<a id="api-discord-abc-guildchannel-set-permissions"></a>

##### `set_permissions( self, target: Union[Member, Role], *, overwrite: Any = _undefined, reason: Optional[str] = None, **permissions: Unpack[_PermissionOverwriteKwargs],) -> None`

*coroutine*

Sets the channel specific permission overwrites for a target in the
channel.

The `target` parameter should either be a `discord.Member` or a
`discord.Role` that belongs to guild.

The `overwrite` parameter, if given, must either be `None` or
`discord.PermissionOverwrite`. For convenience, you can pass in
keyword arguments denoting `discord.Permissions` attributes. If this is
done, then you cannot mix the keyword arguments with the `overwrite`
parameter.

If the `overwrite` parameter is `None`, then the permission
overwrites are deleted.

You must have `discord.Permissions.manage_roles` to do this.

> **Note**
> This method *replaces* the old overwrites with the ones given.

## Examples

Setting allow and deny: :

```python
await message.channel.set_permissions(message.author, read_messages=True,
                                                      send_messages=False)
```

Deleting overwrites :

```python
await channel.set_permissions(member, overwrite=None)
```

Using `discord.PermissionOverwrite` :

```python
overwrite = discord.PermissionOverwrite()
overwrite.send_messages = False
overwrite.read_messages = True
await channel.set_permissions(member, overwrite=overwrite)
```

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**target: Union\[`discord.Member`, `discord.Role`]**

The member or role to overwrite permissions for.

**overwrite: Optional\[`discord.PermissionOverwrite`]**

The permissions to allow and deny to the target, or `None` to
delete the overwrite.

**\*\*permissions**

A keyword argument list of permissions to set for ease of use.
Cannot be mixed with `overwrite`.

**reason: Optional\[`str`]**

The reason for doing this action. Shows up on the audit log.

## Raises

**\~discord.Forbidden**

You do not have permissions to edit channel specific permissions.

**\~discord.HTTPException**

Editing channel specific permissions failed.

**\~discord.NotFound**

The role or member being edited is not part of the guild.

**TypeError**

The `overwrite` parameter was invalid or the target type was not
`discord.Role` or `discord.Member`.

**ValueError**

The `overwrite` parameter and `positions` parameters were both
unset.

<a id="api-discord-abc-guildchannel-clone"></a>

##### `clone( self, *, name: Optional[str] = None, category: Optional[CategoryChannel] = None, reason: Optional[str] = None,) -> Self`

*coroutine*

Clones this channel. This creates a channel with the same properties
as this channel.

You must have `discord.Permissions.manage_channels` to do this.

> **Added in version 1.1**

## Parameters

**name: Optional\[`str`]**

The name of the new channel. If not provided, defaults to this
channel name.

**category: Optional\[`discord.CategoryChannel`]**

The category the new channel belongs to.
This parameter is ignored if cloning a category channel.

> **Added in version 2.5**

**reason: Optional\[`str`]**

The reason for cloning this channel. Shows up on the audit log.

## Raises

**\~discord.Forbidden**

You do not have the proper permissions to create this channel.

**\~discord.HTTPException**

Creating the channel failed.

## Returns

**`.abc.GuildChannel`**

The channel that was created.

<a id="api-discord-abc-guildchannel-move"></a>

##### `move(self, **kwargs: Any) -> None`

*coroutine*

A rich interface to help move a channel relative to other channels.

If exact position movement is required, `edit` should be used instead.

You must have `discord.Permissions.manage_channels` to do this.

> **Note**
> Voice channels will always be sorted below text channels.
> This is a Discord limitation.

> **Added in version 1.7**

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**beginning: `bool`**

Whether to move the channel to the beginning of the
channel list (or category if given).
This is mutually exclusive with `end`, `before`, and `after`.

**end: `bool`**

Whether to move the channel to the end of the
channel list (or category if given).
This is mutually exclusive with `beginning`, `before`, and `after`.

**before: `discord.abc.Snowflake`**

Whether to move the channel before the given channel.
This is mutually exclusive with `beginning`, `end`, and `after`.

**after: `discord.abc.Snowflake`**

Whether to move the channel after the given channel.
This is mutually exclusive with `beginning`, `end`, and `before`.

**offset: `int`**

The number of channels to offset the move by. For example,
an offset of `2` with `beginning=True` would move
it 2 after the beginning. A positive number moves it below
while a negative number moves it above. Note that this
number is relative and computed after the `beginning`,
`end`, `before`, and `after` parameters.

**category: Optional\[`discord.abc.Snowflake`]**

The category to move this channel under.
If `None` is given then it moves it out of the category.
This parameter is ignored if moving a category channel.

**sync\_permissions: `bool`**

Whether to sync the permissions with the category (if given).

**reason: `str`**

The reason for the move.

## Raises

**ValueError**

An invalid position was given.

**TypeError**

A bad mix of arguments were passed.

**Forbidden**

You do not have permissions to move the channel.

**HTTPException**

Moving the channel failed.

<a id="api-discord-abc-guildchannel-create-invite"></a>

##### `create_invite( self, *, reason: Optional[str] = None, max_age: int = 0, max_uses: int = 0, temporary: bool = False, unique: bool = True, target_type: Optional[InviteTarget] = None, target_user: Optional[User] = None, target_application_id: Optional[int] = None, guest: bool = False,) -> Invite`

*coroutine*

Creates an instant invite from a text or voice channel.

You must have `discord.Permissions.create_instant_invite` to do this.

## Parameters

**max\_age: `int`**

How long the invite should last in seconds. If it's 0 then the invite
doesn't expire. Defaults to `0`.

**max\_uses: `int`**

How many uses the invite could be used for. If it's 0 then there
are unlimited uses. Defaults to `0`.

**temporary: `bool`**

Denotes that the invite grants temporary membership
(i.e. they get kicked after they disconnect). Defaults to `False`.

**unique: `bool`**

Indicates if a unique invite URL should be created. Defaults to True.
If this is set to `False` then it will return a previously created
invite.

**reason: Optional\[`str`]**

The reason for creating this invite. Shows up on the audit log.

**target\_type: Optional\[`.InviteTarget`]**

The type of target for the voice channel invite, if any.

> **Added in version 2.0**

**target\_user: Optional\[`User`]**

The user whose stream to display for this invite, required if `target_type` is `.InviteTarget.stream`. The user must be streaming in the channel.

> **Added in version 2.0**

**target\_application\_id:: Optional\[`int`]**

The id of the embedded application for the invite, required if `target_type` is `.InviteTarget.embedded_application`.

> **Added in version 2.0**

**guest: `bool`**

Whether the invite is a guest invite.

> **Added in version 2.6**

## Raises

**\~discord.HTTPException**

Invite creation failed.

**\~discord.NotFound**

The channel that was passed is a category or an invalid channel.

## Returns

**`discord.Invite`**

The invite that was created.

<a id="api-discord-abc-guildchannel-invites"></a>

##### `invites(self) -> List[Invite]`

*coroutine*

Returns a list of all active instant invites from this channel.

You must have `discord.Permissions.manage_channels` to get this information.

## Raises

**\~discord.Forbidden**

You do not have proper permissions to get the information.

**\~discord.HTTPException**

An error occurred while fetching the information.

## Returns

**List\[`discord.Invite`]**

The list of invites that are currently active.

### Messageable

<a id="api-discord-abc-messageable"></a>

#### `Messageable`

An ABC that details the common operations on a model that can send messages.

The following classes implement this ABC:

- `discord.TextChannel`
- `discord.VoiceChannel`
- `discord.StageChannel`
- `discord.DMChannel`
- `discord.GroupChannel`
- `discord.PartialMessageable`
- `discord.User`
- `discord.Member`
- `discord.ext.commands.Context`
- `discord.Thread`

<a id="api-discord-abc-messageable-send"></a>

##### `send( self, content: Optional[str] = None, *, tts: bool = False, embed: Optional[Embed] = None, embeds: Optional[Sequence[Embed]] = None, file: Optional[File] = None, files: Optional[Sequence[File]] = None, stickers: Optional[Sequence[Union[GuildSticker, StickerItem]]] = None, delete_after: Optional[float] = None, nonce: Optional[Union[str, int]] = None, allowed_mentions: Optional[AllowedMentions] = None, reference: Optional[Union[Message, MessageReference, PartialMessage]] = None, mention_author: Optional[bool] = None, view: Optional[BaseView] = None, suppress_embeds: bool = False, silent: bool = False, poll: Optional[Poll] = None,) -> Message`

*coroutine*

Sends a message to the destination with the content given.

The content must be a type that can convert to a string through `str(content)`.
If the content is set to `None` (the default), then the `embed` parameter must
be provided.

To upload a single file, the `file` parameter should be used with a
single `discord.File` object. To upload multiple files, the `files`
parameter should be used with a `list` of `discord.File` objects.
**Specifying both parameters will lead to an exception**.

To upload a single embed, the `embed` parameter should be used with a
single `discord.Embed` object. To upload multiple embeds, the `embeds`
parameter should be used with a `list` of `discord.Embed` objects.
**Specifying both parameters will lead to an exception**.

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The content of the message to send.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**embed: `discord.Embed`**

The rich embed for the content.

**embeds: List\[`discord.Embed`]**

A list of embeds to upload. Must be a maximum of 10.

> **Added in version 2.0**

**file: `discord.File`**

The file to upload.

**files: List\[`discord.File`]**

A list of files to upload. Must be a maximum of 10.

**nonce: `int`**

The nonce to use for sending this message. If the message was successfully sent,
then the message will have a nonce with this value.

**delete\_after: `float`**

If provided, the number of seconds to wait in the background
before deleting the message we just sent. If the deletion fails,
then it is silently ignored.

**allowed\_mentions: `discord.AllowedMentions`**

Controls the mentions being processed in this message. If this is
passed, then the object is merged with `discord.Client.allowed_mentions`.
The merging behaviour only overrides attributes that have been explicitly passed
to the object, otherwise it uses the attributes set in `discord.Client.allowed_mentions`.
If no object is passed at all then the defaults given by `discord.Client.allowed_mentions`
are used instead.

> **Added in version 1.4**

**reference: Union\[`discord.Message`, `discord.MessageReference`, `discord.PartialMessage`]**

A reference to the `discord.Message` to which you are referencing, this can be created using
`discord.Message.to_reference` or passed directly as a `discord.Message`.
In the event of a replying reference, you can control whether this mentions the author of the referenced
message using the `discord.AllowedMentions.replied_user` attribute of `allowed_mentions` or by
setting `mention_author`.

> **Added in version 1.6**

**mention\_author: Optional\[`bool`]**

If set, overrides the `discord.AllowedMentions.replied_user` attribute of `allowed_mentions`.

> **Added in version 1.6**

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

A Discord UI View to add to the message.

> **Added in version 2.0**

**stickers: Sequence\[Union\[`discord.GuildSticker`, `discord.StickerItem`]]**

A list of stickers to upload. Must be a maximum of 3.

> **Added in version 2.0**

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

> **Added in version 2.0**

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.2**

**poll: `discord.Poll`**

The poll to send with this message.

> **Added in version 2.4**

## Raises

**\~discord.HTTPException**

Sending the message failed.

**\~discord.Forbidden**

You do not have the proper permissions to send the message.

**\~discord.NotFound**

You sent a message with the same nonce as one that has been explicitly
deleted shortly earlier.

**ValueError**

The `files` or `embeds` list is not of the appropriate size.

**TypeError**

You specified both `file` and `files`,
or you specified both `embed` and `embeds`,
or the `reference` object is not a `discord.Message`,
`discord.MessageReference` or `discord.PartialMessage`.

## Returns

**`discord.Message`**

The message that was sent.

<a id="api-discord-abc-messageable-fetch-message"></a>

##### `fetch_message(self, id: int, /) -> Message`

*coroutine*

Retrieves a single `discord.Message` from the destination.

## Parameters

**id: `int`**

The message ID to look for.

## Raises

**\~discord.NotFound**

The specified message was not found.

**\~discord.Forbidden**

You do not have the permissions required to get a message.

**\~discord.HTTPException**

Retrieving the message failed.

## Returns

**`discord.Message`**

The message asked for.

<a id="api-discord-abc-messageable-pins"></a>

##### `pins( self, *, limit: Optional[int] = 50, before: Optional[SnowflakeTime] = None, oldest_first: bool = False,) -> _PinsIterator`

Retrieves an `asynchronous iterator` of the pinned messages in the channel.

You must have `discord.Permissions.view_channel` and
`discord.Permissions.read_message_history` in order to use this.

> **Changed in version 2.6**
> Due to a change in Discord's API, this now returns a paginated iterator instead of a list.
>
> For backwards compatibility, you can still retrieve a list of pinned messages by
> using `await` on the returned object. This is however deprecated.

> **Note**
> Due to a limitation with the Discord API, the `.Message`
> object returned by this method does not contain complete
> `.Message.reactions` data.

## Examples

Usage :

```python
counter = 0
async for message in channel.pins(limit=250):
    counter += 1
```

Flattening into a list: :

```python
messages = [message async for message in channel.pins(limit=50)]
# messages is now a list of Message...
```

All parameters are optional.

## Parameters

**limit: Optional\[int]**

The number of pinned messages to retrieve. If `None`, it retrieves
every pinned message in the channel. Note, however, that this would
make it a slow operation.
Defaults to `50`.

> **Added in version 2.6**

**before: Optional\[Union\[`datetime.datetime`, `.abc.Snowflake`]]**

Retrieve pinned messages before this time or snowflake.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

> **Added in version 2.6**

**oldest\_first: `bool`**

If set to `True`, return messages in oldest pin->newest pin order.
Defaults to `False`.

> **Added in version 2.6**

## Raises

**\~discord.Forbidden**

You do not have the permission to retrieve pinned messages.

**\~discord.HTTPException**

Retrieving the pinned messages failed.

## Yields

**`discord.Message`**

The pinned message with `.Message.pinned_at` set.

<a id="api-discord-abc-messageable-history"></a>

##### `history( self, *, limit: Optional[int] = 100, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, around: Optional[SnowflakeTime] = None, oldest_first: Optional[bool] = None,) -> AsyncIterator[Message]`

Returns an `asynchronous iterator` that enables receiving the destination's message history.

You must have `discord.Permissions.read_message_history` to do this.

## Examples

Usage :

```python
counter = 0
async for message in channel.history(limit=200):
    if message.author == client.user:
        counter += 1
```

Flattening into a list: :

```python
messages = [message async for message in channel.history(limit=123)]
# messages is now a list of Message...
```

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of messages to retrieve.
If `None`, retrieves every message in the channel. Note, however,
that this would make it a slow operation.

**before: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve messages before this date or message.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**after: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve messages after this date or message.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**around: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve messages around this date or message.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.
When using this argument, the maximum limit is 101. Note that if the limit is an
even number then this will return at most limit + 1 messages.

**oldest\_first: Optional\[`bool`]**

If set to `True`, return messages in oldest->newest order. Defaults to `True` if
`after` is specified, otherwise `False`.

## Raises

**\~discord.Forbidden**

You do not have permissions to get channel message history.

**\~discord.HTTPException**

The request to get message history failed.

## Yields

**`discord.Message`**

The message with the message data parsed.

<a id="api-discord-abc-messageable-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### Connectable

<a id="api-discord-abc-connectable"></a>

#### `Connectable(Protocol)`

An ABC that details the common operations on a channel that can
connect to a voice server.

The following implement this ABC:

- `discord.VoiceChannel`
- `discord.StageChannel`

<a id="api-discord-abc-connectable-connect"></a>

##### `connect( self, *, timeout: float = 30.0, reconnect: bool = True, cls: Callable[[Client, Connectable], T] = VoiceClient, self_deaf: bool = False, self_mute: bool = False,) -> T`

*coroutine*

Connects to voice and creates a `discord.VoiceClient` to establish
your connection to the voice server.

This requires `discord.Intents.voice_states`.

## Parameters

**timeout: `float`**

The timeout in seconds to wait the connection to complete.

**reconnect: `bool`**

Whether the bot should automatically attempt
a reconnect if a part of the handshake fails
or the gateway goes down.

**cls: Type\[`discord.VoiceProtocol`]**

A type that subclasses `discord.VoiceProtocol` to connect with.
Defaults to `discord.VoiceClient`.

**self\_mute: `bool`**

Indicates if the client should be self-muted.

> **Added in version 2.0**

**self\_deaf: `bool`**

Indicates if the client should be self-deafened.

> **Added in version 2.0**

## Raises

**asyncio.TimeoutError**

Could not connect to the voice channel in time.

**\~discord.ClientException**

You are already connected to a voice channel.

**\~discord.opus.OpusNotLoaded**

The opus library has not been loaded.

## Returns

**`discord.VoiceProtocol`**

A voice client that is fully connected to the voice server.

<a id="discord-api-models"></a>

## Discord Models

Models are classes that are received from Discord and are not meant to be created by
the user of the library.

> **Danger**
> The classes listed below are **not intended to be created by users** and are also
> **read-only**.
>
> For example, this means that you should not make your own `User` instances
> nor should you modify the `User` instance yourself.
>
> If you want to get one of these model classes instances they'd have to be through
> the cache, and a common way of doing so is through the `utils.find` function
> or attributes of model classes that you receive from the events specified in the
> [discord-api-events](https://discordpy.readthedocs.io/api.html#discord-api-events).

> **Note**
> Nearly all classes here have py:slots defined which means that it is
> impossible to have dynamic attributes to the data classes.

### ClientUser

<a id="api-clientuser"></a>

#### `ClientUser(BaseUser)`

Represents your Discord user.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two users are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two users are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the user's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the user's handle (e.g. `name` or `name#discriminator`).

## Attributes

**name: `str`**

The user's username.

**id: `int`**

The user's unique ID.

**discriminator: `str`**

The user's discriminator. This is a legacy concept that is no longer used.

**global\_name: Optional\[`str`]**

The user's global nickname, taking precedence over the username in display.

> **Added in version 2.3**

**bot: `bool`**

Specifies if the user is a bot account.

**system: `bool`**

Specifies if the user is a system user (i.e. represents Discord officially).

> **Added in version 1.3**

**verified: `bool`**

Specifies if the user's email is verified.

**locale: Optional\[`str`]**

The IETF language tag used to identify the language the user is using.

**mfa\_enabled: `bool`**

Specifies if the user has MFA turned on and working.

<a id="api-clientuser-edit"></a>

##### `edit( self, *, username: str = MISSING, avatar: Optional[bytes] = MISSING, banner: Optional[bytes] = MISSING) -> ClientUser`

*coroutine*

Edits the current profile of the client.

> **Note**
> To upload an avatar, a `py:bytes-like object` must be passed in that
> represents the image being uploaded. If this is done through a file
> then the file must be opened via `open('some_filename', 'rb')` and
> the `py:bytes-like object` is given through the use of `fp.read()`.

> **Changed in version 2.0**
> The edit is no longer in-place, instead the newly edited client user is returned.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**username: `str`**

The new username you wish to change to.

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the image to upload.
Could be `None` to denote no avatar.
Only image formats supported for uploading are JPEG, PNG, GIF, and WEBP.

**banner: Optional\[`bytes`]**

A `py:bytes-like object` representing the image to upload.
Could be `None` to denote no banner.
Only image formats supported for uploading are JPEG, PNG, GIF and WEBP.

> **Added in version 2.4**

## Raises

**HTTPException**

Editing your profile failed.

**ValueError**

Wrong image format passed for `avatar`.

## Returns

**`ClientUser`**

The newly edited client user.

<a id="api-clientuser-mutual-guilds"></a>

##### `mutual_guilds(self) -> List[Guild]`

List\[`Guild`]: The guilds that the user shares with the client.

> **Note**
> This will only return mutual guilds within the client's internal cache.

> **Added in version 1.7**

### User

<a id="api-user"></a>

#### `User(BaseUser, discord.abc.Messageable)`

Represents a Discord user.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two users are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two users are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the user's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the user's handle (e.g. `name` or `name#discriminator`).

## Attributes

**name: `str`**

The user's username.

**id: `int`**

The user's unique ID.

**discriminator: `str`**

The user's discriminator. This is a legacy concept that is no longer used.

**global\_name: Optional\[`str`]**

The user's global nickname, taking precedence over the username in display.

> **Added in version 2.3**

**bot: `bool`**

Specifies if the user is a bot account.

**system: `bool`**

Specifies if the user is a system user (i.e. represents Discord officially).

<a id="api-user-dm-channel"></a>

##### `dm_channel(self) -> Optional[DMChannel]`

Optional\[`DMChannel`]: Returns the channel associated with this user if it exists.

If this returns `None`, you can create a DM channel by calling the
`create_dm` coroutine function.

<a id="api-user-mutual-guilds"></a>

##### `mutual_guilds(self) -> List[Guild]`

List\[`Guild`]: The guilds that the user shares with the client.

> **Note**
> This will only return mutual guilds within the client's internal cache.

> **Added in version 1.7**

<a id="api-user-create-dm"></a>

##### `create_dm(self) -> DMChannel`

*coroutine*

Creates a `DMChannel` with this user.

This should be rarely called, as this is done transparently for most
people.

## Returns

**`.DMChannel`**

The channel that was created.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### AutoMod

<a id="api-automodrule"></a>

#### `AutoModRule`

Represents an auto moderation rule.

> **Added in version 2.0**

## Attributes

**id: `int`**

The ID of the rule.

**guild: `Guild`**

The guild the rule is for.

**name: `str`**

The name of the rule.

**creator\_id: `int`**

The ID of the user that created the rule.

**trigger: `AutoModTrigger`**

The rule's trigger.

**enabled: `bool`**

Whether the rule is enabled.

**exempt\_role\_ids: Set\[`int`]**

The IDs of the roles that are exempt from the rule.

**exempt\_channel\_ids: Set\[`int`]**

The IDs of the channels that are exempt from the rule.

**event\_type: `AutoModRuleEventType`**

The type of event that will trigger the the rule.

<a id="api-automodrule-creator"></a>

##### `creator(self) -> Optional[Member]`

Optional\[`Member`]: The member that created this rule.

<a id="api-automodrule-exempt-roles"></a>

##### `exempt_roles(self) -> List[Role]`

List\[`Role`]: The roles that are exempt from this rule.

<a id="api-automodrule-exempt-channels"></a>

##### `exempt_channels(self) -> List[Union[GuildChannel, Thread]]`

List\[Union\[`abc.GuildChannel`, `Thread`]]: The channels that are exempt from this rule.

<a id="api-automodrule-actions"></a>

##### `actions(self) -> List[AutoModRuleAction]`

List\[`AutoModRuleAction`]: The actions that are taken when this rule is triggered.

<a id="api-automodrule-is-exempt"></a>

##### `is_exempt(self, obj: Snowflake, /) -> bool`

Check if an object is exempt from the automod rule.

## Parameters

**obj: `abc.Snowflake`**

The role, channel, or thread to check.

## Returns

**`bool`**

Whether the object is exempt from the automod rule.

<a id="api-automodrule-edit"></a>

##### `edit( self, *, name: str = MISSING, event_type: AutoModRuleEventType = MISSING, actions: List[AutoModRuleAction] = MISSING, trigger: AutoModTrigger = MISSING, enabled: bool = MISSING, exempt_roles: Sequence[Snowflake] = MISSING, exempt_channels: Sequence[Snowflake] = MISSING, reason: str = MISSING,) -> Self`

*coroutine*

Edits this auto moderation rule.

You must have `Permissions.manage_guild` to edit rules.

## Parameters

**name: `str`**

The new name to change to.

**event\_type: `AutoModRuleEventType`**

The new event type to change to.

**actions: List\[`AutoModRuleAction`]**

The new rule actions to update.

**trigger: `AutoModTrigger`**

The new trigger to update.
You can only change the trigger metadata, not the type.

**enabled: `bool`**

Whether the rule should be enabled or not.

**exempt\_roles: Sequence\[`abc.Snowflake`]**

The new roles to exempt from the rule.

**exempt\_channels: Sequence\[`abc.Snowflake`]**

The new channels to exempt from the rule.

**reason: `str`**

The reason for updating this rule. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permission to edit this rule.

**HTTPException**

Editing the rule failed.

## Returns

**`AutoModRule`**

The updated auto moderation rule.

<a id="api-automodrule-delete"></a>

##### `delete(self, *, reason: str = MISSING) -> None`

*coroutine*

Deletes the auto moderation rule.

You must have `Permissions.manage_guild` to delete rules.

## Parameters

**reason: `str`**

The reason for deleting this rule. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to delete the rule.

**HTTPException**

Deleting the rule failed.

<a id="api-automodaction"></a>

#### `AutoModAction`

Represents an action that was taken as the result of a moderation rule.

> **Added in version 2.0**

## Attributes

**action: `AutoModRuleAction`**

The action that was taken.

**message\_id: Optional\[`int`]**

The message ID that triggered the action. This is only available if the
action is done on an edited message.

**rule\_id: `int`**

The ID of the rule that was triggered.

**rule\_trigger\_type: `AutoModRuleTriggerType`**

The trigger type of the rule that was triggered.

**guild\_id: `int`**

The ID of the guild where the rule was triggered.

**user\_id: `int`**

The ID of the user that triggered the rule.

**channel\_id: `int`**

The ID of the channel where the rule was triggered.

**alert\_system\_message\_id: Optional\[`int`]**

The ID of the system message that was sent to the predefined alert channel.

**content: `str`**

The content of the message that triggered the rule.
Requires the `Intents.message_content` or it will always return an empty string.

**matched\_keyword: Optional\[`str`]**

The matched keyword from the triggering message.

**matched\_content: Optional\[`str`]**

The matched content from the triggering message.
Requires the `Intents.message_content` or it will always return `None`.

<a id="api-automodaction-guild"></a>

##### `guild(self) -> Guild`

`Guild`: The guild this action was taken in.

<a id="api-automodaction-channel"></a>

##### `channel(self) -> Optional[Union[GuildChannel, Thread]]`

Optional\[Union\[`abc.GuildChannel`, `Thread`]]: The channel this action was taken in.

<a id="api-automodaction-member"></a>

##### `member(self) -> Optional[Member]`

Optional\[`Member`]: The member this action was taken against /who triggered this rule.

<a id="api-automodaction-fetch-rule"></a>

##### `fetch_rule(self) -> AutoModRule`

*coroutine*

Fetch the rule whose action was taken.

You must have `Permissions.manage_guild` to do this.

## Raises

**Forbidden**

You do not have permissions to view the rule.

**HTTPException**

Fetching the rule failed.

## Returns

**`AutoModRule`**

The rule that was executed.

### Attachment

<a id="api-attachment"></a>

#### `Attachment(Hashable)`

Represents an attachment from Discord.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the URL of the attachment.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the attachment is equal to another attachment.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the attachment is not equal to another attachment.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the hash of the attachment.

> **Changed in version 1.7**
> Attachment can now be casted to `str` and is hashable.

## Attributes

**id: `int`**

The attachment ID.

**size: `int`**

The attachment size in bytes.

**height: Optional\[`int`]**

The attachment's height, in pixels. Only applicable to images and videos.

**width: Optional\[`int`]**

The attachment's width, in pixels. Only applicable to images and videos.

**filename: `str`**

The attachment's filename.

**url: `str`**

The attachment URL. If the message this attachment was attached
to is deleted, then this will 404.

**proxy\_url: `str`**

The proxy URL. This is a cached version of the `Attachment.url` in the
case of images. When the message is deleted, this URL might be valid for a few
minutes or not valid at all.

**content\_type: Optional\[`str`]**

The attachment's [media type](https://en.wikipedia.org/wiki/Media_type)

> **Added in version 1.7**

**description: Optional\[`str`]**

The attachment's description. Only applicable to images.

> **Added in version 2.0**

**ephemeral: `bool`**

Whether the attachment is ephemeral.

> **Added in version 2.0**

**duration: Optional\[`float`]**

The duration of the audio file in seconds. Returns `None` if it's not a voice message.

> **Added in version 2.3**

**waveform: Optional\[`bytes`]**

The waveform (amplitudes) of the audio in bytes. Returns `None` if it's not a voice message.

> **Added in version 2.3**

**title: Optional\[`str`]**

The normalised version of the attachment's filename.

> **Added in version 2.5**

<a id="api-attachment-flags"></a>

##### `flags(self) -> AttachmentFlags`

`AttachmentFlags`: The attachment's flags.

<a id="api-attachment-is-spoiler"></a>

##### `is_spoiler(self) -> bool`

`bool`: Whether this attachment contains a spoiler.

<a id="api-attachment-is-voice-message"></a>

##### `is_voice_message(self) -> bool`

`bool`: Whether this attachment is a voice message.

<a id="api-attachment-save"></a>

##### `save( self, fp: Union[io.BufferedIOBase, PathLike[Any]], *, seek_begin: bool = True, use_cached: bool = False,) -> int`

*coroutine*

Saves this attachment into a file-like object.

## Parameters

**fp: Union\[`io.BufferedIOBase`, `os.PathLike`]**

The file-like object to save this attachment to or the filename
to use. If a filename is passed then a file is created with that
filename and used instead.

**seek\_begin: `bool`**

Whether to seek to the beginning of the file after saving is
successfully done.

**use\_cached: `bool`**

Whether to use `proxy_url` rather than `url` when downloading
the attachment. This will allow attachments to be saved after deletion
more often, compared to the regular URL which is generally deleted right
after the message is deleted. Note that this can still fail to download
deleted attachments if too much time has passed and it does not work
on some types of attachments.

## Raises

**HTTPException**

Saving the attachment failed.

**NotFound**

The attachment was deleted.

## Returns

**`int`**

The number of bytes written.

<a id="api-attachment-read"></a>

##### `read(self, *, use_cached: bool = False) -> bytes`

*coroutine*

Retrieves the content of this attachment as a `bytes` object.

> **Added in version 1.1**

## Parameters

**use\_cached: `bool`**

Whether to use `proxy_url` rather than `url` when downloading
the attachment. This will allow attachments to be saved after deletion
more often, compared to the regular URL which is generally deleted right
after the message is deleted. Note that this can still fail to download
deleted attachments if too much time has passed and it does not work
on some types of attachments.

## Raises

**HTTPException**

Downloading the attachment failed.

**Forbidden**

You do not have permissions to access this attachment

**NotFound**

The attachment was deleted.

## Returns

**`bytes`**

The contents of the attachment.

<a id="api-attachment-to-file"></a>

##### `to_file( self, *, filename: Optional[str] = MISSING, description: Optional[str] = MISSING, use_cached: bool = False, spoiler: bool = False,) -> File`

*coroutine*

Converts the attachment into a `File` suitable for sending via
`abc.Messageable.send`.

> **Added in version 1.3**

## Parameters

**filename: Optional\[`str`]**

The filename to use for the file. If not specified then the filename
of the attachment is used instead.

> **Added in version 2.0**

**description: Optional\[`str`]**

The description to use for the file. If not specified then the
description of the attachment is used instead.

> **Added in version 2.0**

**use\_cached: `bool`**

Whether to use `proxy_url` rather than `url` when downloading
the attachment. This will allow attachments to be saved after deletion
more often, compared to the regular URL which is generally deleted right
after the message is deleted. Note that this can still fail to download
deleted attachments if too much time has passed and it does not work
on some types of attachments.

> **Added in version 1.4**

**spoiler: `bool`**

Whether the file is a spoiler.

> **Added in version 1.4**

## Raises

**HTTPException**

Downloading the attachment failed.

**Forbidden**

You do not have permissions to access this attachment

**NotFound**

The attachment was deleted.

## Returns

**`File`**

The attachment as a file suitable for sending.

### Asset

<a id="api-asset"></a>

#### `Asset(AssetMixin)`

Represents a CDN asset on Discord.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the URL of the CDN asset.

<a id="describe-len-x"></a>

#### `len(x)`

Returns the length of the CDN asset's URL.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the asset is equal to another asset.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the asset is not equal to another asset.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the hash of the asset.

<a id="api-asset-url"></a>

##### `url(self) -> str`

`str`: Returns the underlying URL of the asset.

<a id="api-asset-key"></a>

##### `key(self) -> str`

`str`: Returns the identifying key of the asset.

<a id="api-asset-is-animated"></a>

##### `is_animated(self) -> bool`

`bool`: Returns whether the asset is animated.

<a id="api-asset-replace"></a>

##### `replace( self, *, size: int = MISSING, format: ValidAssetFormatTypes = MISSING, static_format: ValidStaticFormatTypes = MISSING,) -> Self`

Returns a new asset with the passed components replaced.

> **Changed in version 2.0**
> `static_format` is now preferred over `format`
> if both are present and the asset is not animated.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**size: `int`**

The new size of the asset.

**format: `str`**

The new format to change it to. Must be either
'webp', 'jpeg', 'jpg', 'png', or 'gif' if it's animated.

**static\_format: `str`**

The new format to change it to if the asset isn't animated.
Must be either 'webp', 'jpeg', 'jpg', or 'png'.

## Raises

**ValueError**

An invalid size or format was passed.

## Returns

**`Asset`**

The newly updated asset.

<a id="api-asset-with-size"></a>

##### `with_size(self, size: int, /) -> Self`

Returns a new asset with the specified size.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**size: `int`**

The new size of the asset.

## Raises

**ValueError**

The asset had an invalid size.

## Returns

**`Asset`**

The new updated asset.

<a id="api-asset-with-format"></a>

##### `with_format(self, format: ValidAssetFormatTypes, /) -> Self`

Returns a new asset with the specified format.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**format: `str`**

The new format of the asset.

## Raises

**ValueError**

The asset had an invalid format.

## Returns

**`Asset`**

The new updated asset.

<a id="api-asset-with-static-format"></a>

##### `with_static_format(self, format: ValidStaticFormatTypes, /) -> Self`

Returns a new asset with the specified static format.

This only changes the format if the underlying asset is
not animated. Otherwise, the asset is not changed.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Parameters

**format: `str`**

The new static format of the asset.

## Raises

**ValueError**

The asset had an invalid format.

## Returns

**`Asset`**

The new updated asset.

### Message

<a id="api-message"></a>

#### `Message(PartialMessage, Hashable)`

Represents a message from Discord.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two messages are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two messages are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the message's hash.

## Attributes

**tts: `bool`**

Specifies if the message was done with text-to-speech.
This can only be accurately received in `on_message` due to
a discord limitation.

**type: `MessageType`**

The type of message. In most cases this should not be checked, but it is helpful
in cases where it might be a system message for `system_content`.

**author: Union\[`Member`, `abc.User`]**

A `Member` that sent the message. If `channel` is a
private channel or the user has the left the guild, then it is a `User` instead.

**content: `str`**

The actual contents of the message.
If `Intents.message_content` is not enabled this will always be an empty string
unless the bot is mentioned or the message is a direct message.

**nonce: Optional\[Union\[`str`, `int`]]**

The value used by the discord guild and the client to verify that the message is successfully sent.
This is not stored long term within Discord's servers and is only used ephemerally.

**embeds: List\[`Embed`]**

A list of embeds the message has.
If `Intents.message_content` is not enabled this will always be an empty list
unless the bot is mentioned or the message is a direct message.

**channel: Union\[`TextChannel`, `StageChannel`, `VoiceChannel`, `Thread`, `DMChannel`, `GroupChannel`, `PartialMessageable`]**

The `TextChannel` or `Thread` that the message was sent from.
Could be a `DMChannel` or `GroupChannel` if it's a private message.

**reference: Optional\[`discord.MessageReference`]**

The message that this message references. This is only applicable to
message replies (`MessageType.reply`), crossposted messages created by
a followed channel integration, forwarded messages, and messages of type:

- `MessageType.pins_add`
- `MessageType.channel_follow_add`
- `MessageType.thread_created`
- `MessageType.thread_starter_message`
- `MessageType.poll_result`
- `MessageType.context_menu_command`

> **Added in version 1.5**

**mention\_everyone: `bool`**

Specifies if the message mentions everyone.

> **Note**
> This does not check if the `@everyone` or the `@here` text is in the message itself.
> Rather this boolean indicates if either the `@everyone` or the `@here` text is in the message
> **and** it did end up mentioning.

**mentions: List\[`abc.User`]**

A list of `Member` that were mentioned. If the message is in a private message
then the list will be of `User` instead. For messages that are not of type
`MessageType.default`, this array can be used to aid in system messages.
For more information, see `system_content`.

> **Warning**
> The order of the mentions list is not in any particular order so you should
> not rely on it. This is a Discord limitation, not one with the library.

**channel\_mentions: List\[Union\[`abc.GuildChannel`, `Thread`]]**

A list of `abc.GuildChannel` or `Thread` that were mentioned. If the message is
in a private message then the list is always empty.

**role\_mentions: List\[`Role`]**

A list of `Role` that were mentioned. If the message is in a private message
then the list is always empty.

**id: `int`**

The message ID.

**webhook\_id: Optional\[`int`]**

If this message was sent by a webhook, then this is the webhook ID's that sent this
message.

**attachments: List\[`Attachment`]**

A list of attachments given to a message.
If `Intents.message_content` is not enabled this will always be an empty list
unless the bot is mentioned or the message is a direct message.

**pinned: `bool`**

Specifies if the message is currently pinned.

**flags: `MessageFlags`**

Extra features of the message.

> **Added in version 1.3**

**reactions : List\[`Reaction`]**

Reactions to a message. Reactions can be either custom emoji or standard unicode emoji.

**activity: Optional\[`dict`]**

The activity associated with this message. Sent with Rich-Presence related messages that for
example, request joining, spectating, or listening to or with another member.

It is a dictionary with the following optional keys:

- `type`: An integer denoting the type of message activity being requested.
- `party_id`: The party ID associated with the party.

**application: Optional\[`discord.MessageApplication`]**

The rich presence enabled application associated with this message.

> **Changed in version 2.0**
> Type is now `MessageApplication` instead of `dict`.

**stickers: List\[`StickerItem`]**

A list of sticker items given to the message.

> **Added in version 1.6**

**components: List\[`Component`]**

A list of components in the message.
If `Intents.message_content` is not enabled this will always be an empty list
unless the bot is mentioned or the message is a direct message.

> **Added in version 2.0**

**role\_subscription: Optional\[`RoleSubscriptionInfo`]**

The data of the role subscription purchase or renewal that prompted this
`MessageType.role_subscription_purchase` message.

> **Added in version 2.2**

**application\_id: Optional\[`int`]**

The application ID of the application that created this message if this
message was sent by an application-owned webhook or an interaction.

> **Added in version 2.2**

**position: Optional\[`int`]**

A generally increasing integer with potentially gaps or duplicates that represents
the approximate position of the message in a thread.

> **Added in version 2.2**

**guild: Optional\[`Guild`]**

The guild that the message belongs to, if applicable.

**interaction\_metadata: Optional\[`.MessageInteractionMetadata`]**

The metadata of the interaction that this message is a response to.

> **Added in version 2.4**

**poll: Optional\[`Poll`]**

The poll attached to this message.

> **Added in version 2.4**

**call: Optional\[`CallMessage`]**

The call associated with this message.

> **Added in version 2.5**

**purchase\_notification: Optional\[`PurchaseNotification`]**

The data of the purchase notification that prompted this `MessageType.purchase_notification` message.

> **Added in version 2.5**

**message\_snapshots: List\[`MessageSnapshot`]**

The message snapshots attached to this message.

> **Added in version 2.5**

<a id="api-message-raw-mentions"></a>

##### `raw_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of user IDs matched with
the syntax of `<@user_id>` in the message content.

This allows you to receive the user IDs of mentioned users
even in a private message context.

<a id="api-message-raw-channel-mentions"></a>

##### `raw_channel_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of channel IDs matched with
the syntax of `<#channel_id>` in the message content.

<a id="api-message-raw-role-mentions"></a>

##### `raw_role_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of role IDs matched with
the syntax of `<@&role_id>` in the message content.

<a id="api-message-clean-content"></a>

##### `clean_content(self) -> str`

`str`: A property that returns the content in a "cleaned up"
manner. This basically means that mentions are transformed
into the way the client shows it. e.g. `<#id>` will transform
into `#name`.

This will also transform @everyone and @here mentions into
non-mentions.

> **Note**
> This *does not* affect markdown. If you want to escape
> or remove markdown then use `utils.escape_markdown` or `utils.remove_markdown`
> respectively, along with this function.

<a id="api-message-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: The message's creation time in UTC.

<a id="api-message-edited-at"></a>

##### `edited_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: An aware UTC datetime object containing the edited time of the message.

<a id="api-message-thread"></a>

##### `thread(self) -> Optional[Thread]`

Optional\[`Thread`]: The public thread created from this message, if it exists.

> **Note**
> For messages received via the gateway this does not retrieve archived threads, as they
> are not retained in the internal cache. Use `fetch_thread` instead.

> **Added in version 2.4**

<a id="api-message-pinned-at"></a>

##### `pinned_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: An aware UTC datetime object containing the time
when the message was pinned.

> **Note**
> This is only set for messages that are returned by `abc.Messageable.pins`.

> **Added in version 2.6**

<a id="api-message-interaction"></a>

##### `interaction(self) -> Optional[MessageInteraction]`

Optional\[`discord.MessageInteraction`]: The interaction that this message is a response to.

> **Added in version 2.0**

> **Deprecated in version 2.4**
> This attribute is deprecated and will be removed in a future version. Use `.interaction_metadata` instead.

<a id="api-message-is-system"></a>

##### `is_system(self) -> bool`

`bool`: Whether the message is a system message.

A system message is a message that is constructed entirely by the Discord API
in response to something.

> **Added in version 1.3**

<a id="api-message-system-content"></a>

##### `system_content(self) -> str`

`str`: A property that returns the content that is rendered
regardless of the `Message.type`.

In the case of `MessageType.default` and `MessageType.reply`,
this just returns the regular `Message.content`. Otherwise this
returns an English message denoting the contents of the system message.

<a id="api-message-edit"></a>

##### `edit( self, *, content: Optional[str] = MISSING, embed: Optional[Embed] = MISSING, embeds: Sequence[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, suppress: bool = False, delete_after: Optional[float] = None, allowed_mentions: Optional[AllowedMentions] = MISSING, view: Optional[Union[View, LayoutView]] = MISSING,) -> Message`

*coroutine*

Edits the message.

The content must be able to be transformed into a string via `str(content)`.

> **Changed in version 1.3**
> The `suppress` keyword-only parameter was added.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited message is returned instead.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The new content to replace the message with.
Could be `None` to remove the content.

**embed: Optional\[`Embed`]**

The new embed to replace the original with.
Could be `None` to remove the embed.

**embeds: List\[`Embed`]**

The new embeds to replace the original with. Must be a maximum of 10.
To remove all embeds `[]` should be passed.

> **Added in version 2.0**

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Note**
> New files will always appear after current attachments.

> **Added in version 2.0**

**suppress: `bool`**

Whether to suppress embeds for the message. This removes
all the embeds if set to `True`. If set to `False`
this brings the embeds back if they were suppressed.
Using this parameter requires `.Permissions.manage_messages`.

**delete\_after: Optional\[`float`]**

If provided, the number of seconds to wait in the background
before deleting the message we just edited. If the deletion fails,
then it is silently ignored.

**allowed\_mentions: Optional\[`discord.AllowedMentions`]**

Controls the mentions being processed in this message. If this is
passed, then the object is merged with `discord.Client.allowed_mentions`.
The merging behaviour only overrides attributes that have been explicitly passed
to the object, otherwise it uses the attributes set in `discord.Client.allowed_mentions`.
If no object is passed at all then the defaults given by `discord.Client.allowed_mentions`
are used instead.

> **Added in version 1.4**

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed.

> **Note**
> If you want to update the message to have a `discord.ui.LayoutView`, you must
> explicitly set the `content`, `embed`, `embeds`, and `attachments` parameters to
> `None` if the previous message had any.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to suppress a message without permissions or
edited a message's content or embed that isn't yours.

**NotFound**

This message does not exist.

**TypeError**

You specified both `embed` and `embeds`

## Returns

**`Message`**

The newly edited message.

<a id="api-message-add-files"></a>

##### `add_files(self, *files: File) -> Message`

*coroutine*

Adds new files to the end of the message attachments.

> **Added in version 2.0**

## Parameters

**\*files: `File`**

New files to add to the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`Message`**

The newly edited message.

<a id="api-message-remove-attachments"></a>

##### `remove_attachments(self, *attachments: Attachment) -> Message`

*coroutine*

Removes attachments from the message.

> **Added in version 2.0**

## Parameters

**\*attachments: `Attachment`**

Attachments to remove from the message.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to edit a message that isn't yours.

## Returns

**`Message`**

The newly edited message.

<a id="api-message-is-forwardable"></a>

##### `is_forwardable(self) -> bool`

`bool`: Whether the message can be forwarded using `Message.forward`.

A message is forwardable only if it is a basic message type and does not
contain a poll, call, or activity, and is not a system message.

> **Added in version 2.7**

### DeletedReferencedMessage

<a id="api-deletedreferencedmessage"></a>

#### `DeletedReferencedMessage`

A special sentinel type given when the resolved message reference
points to a deleted message.

The purpose of this class is to separate referenced messages that could not be
fetched and those that were previously fetched but have since been deleted.

> **Added in version 1.6**

<a id="api-deletedreferencedmessage-id"></a>

##### `id(self) -> int`

`int`: The message ID of the deleted referenced message.

<a id="api-deletedreferencedmessage-channel-id"></a>

##### `channel_id(self) -> int`

`int`: The channel ID of the deleted referenced message.

<a id="api-deletedreferencedmessage-guild-id"></a>

##### `guild_id(self) -> Optional[int]`

Optional\[`int`]: The guild ID of the deleted referenced message.

### Reaction

<a id="api-reaction"></a>

#### `Reaction`

Represents a reaction to a message.

Depending on the way this object was created, some of the attributes can
have a value of `None`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two reactions are equal. This works by checking if the emoji
is the same. So two messages with the same reaction will be considered
"equal".

<a id="describe-x-y"></a>

#### `x != y`

Checks if two reactions are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the reaction's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the string form of the reaction's emoji.

## Attributes

**emoji: Union\[`Emoji`, `PartialEmoji`, `str`]**

The reaction emoji. May be a custom emoji, or a unicode emoji.

**count: `int`**

Number of times this reaction was made. This is a sum of `normal_count` and `burst_count`.

**me: `bool`**

If the user sent this reaction.

**message: `Message`**

Message this reaction is for.

**me\_burst: `bool`**

If the user sent this super reaction.

> **Added in version 2.4**

**normal\_count: `int`**

The number of times this reaction was made using normal reactions.
This is not available in the gateway events such as `on_reaction_add`
or `on_reaction_remove`.

> **Added in version 2.4**

**burst\_count: `int`**

The number of times this reaction was made using super reactions.
This is not available in the gateway events such as `on_reaction_add`
or `on_reaction_remove`.

> **Added in version 2.4**

<a id="api-reaction-is-custom-emoji"></a>

##### `is_custom_emoji(self) -> bool`

`bool`: If this is a custom emoji.

<a id="api-reaction-remove"></a>

##### `remove(self, user: Snowflake) -> None`

*coroutine*

Remove the reaction by the provided `User` from the message.

If the reaction is not your own (i.e. `user` parameter is not you) then
`Permissions.manage_messages` is needed.

The `user` parameter must represent a user or member and meet
the `abc.Snowflake` abc.

## Parameters

**user: `abc.Snowflake`**

The user or member from which to remove the reaction.

## Raises

**HTTPException**

Removing the reaction failed.

**Forbidden**

You do not have the proper permissions to remove the reaction.

**NotFound**

The user you specified, or the reaction's message was not found.

<a id="api-reaction-clear"></a>

##### `clear(self) -> None`

*coroutine*

Clears this reaction from the message.

You must have `Permissions.manage_messages` to do this.

> **Added in version 1.3**

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

## Raises

**HTTPException**

Clearing the reaction failed.

**Forbidden**

You do not have the proper permissions to clear the reaction.

**NotFound**

The emoji you specified was not found.

**TypeError**

The emoji parameter is invalid.

<a id="api-reaction-users"></a>

##### `users( self, *, limit: Optional[int] = None, after: Optional[Snowflake] = None, type: Optional[ReactionType] = None) -> AsyncIterator[Union[Member, User]]`

Returns an `asynchronous iterator` representing the users that have reacted to the message.

The `after` parameter must represent a member
and meet the `abc.Snowflake` abc.

> **Changed in version 2.0**
> `limit` and `after` parameters are now keyword-only.

## Examples

Usage :

```python
# I do not actually recommend doing this.
async for user in reaction.users():
    await channel.send(f'{user} has reacted with {reaction.emoji}!')
```

Flattening into a list: :

```python
users = [user async for user in reaction.users()]
# users is now a list of User...
winner = random.choice(users)
await channel.send(f'{winner} has won the raffle.')
```

## Parameters

**limit: Optional\[`int`]**

The maximum number of results to return.
If not provided, returns all the users who
reacted to the message.

**after: Optional\[`abc.Snowflake`]**

For pagination, reactions are sorted by member.

**type: Optional\[`ReactionType`]**

The type of reaction to return users from.
If not provided, Discord only returns users of reactions with type `normal`.

> **Added in version 2.4**

## Raises

**HTTPException**

Getting the users for the reaction failed.

## Yields

**Union\[`User`, `Member`]**

The member (if retrievable) or the user that has reacted
to this message. The case where it can be a `Member` is
in a guild message context. Sometimes it can be a `User`
if the member has left the guild.

### Guild

<a id="api-guild"></a>

#### `Guild(Hashable)`

Represents a Discord guild.

This is referred to as a "server" in the official Discord UI.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two guilds are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two guilds are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the guild's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the guild's name.

## Attributes

**name: `str`**

The guild name.

**emojis: Tuple\[`Emoji`, ...]**

All emojis that the guild owns.

**stickers: Tuple\[`GuildSticker`, ...]**

All stickers that the guild owns.

> **Added in version 2.0**

**afk\_timeout: `int`**

The number of seconds until someone is moved to the AFK channel.

**id: `int`**

The guild's ID.

**owner\_id: `int`**

The guild owner's ID. Use `Guild.owner` instead.

**unavailable: `bool`**

Indicates if the guild is unavailable. If this is `True` then the
reliability of other attributes outside of `Guild.id` is slim and they might
all be `None`. It is best to not do anything with the guild if it is unavailable.

Check the `on_guild_unavailable` and `on_guild_available` events.

**max\_presences: Optional\[`int`]**

The maximum amount of presences for the guild.

**max\_members: Optional\[`int`]**

The maximum amount of members for the guild.

> **Note**
> This attribute is only available via `.Client.fetch_guild`.

**max\_video\_channel\_users: Optional\[`int`]**

The maximum amount of users in a video channel.

> **Added in version 1.4**

**description: Optional\[`str`]**

The guild's description.

**verification\_level: `VerificationLevel`**

The guild's verification level.

**vanity\_url\_code: Optional\[`str`]**

The guild's vanity url code, if any

> **Added in version 2.0**

**explicit\_content\_filter: `ContentFilter`**

The guild's explicit content filter.

**default\_notifications: `NotificationLevel`**

The guild's notification settings.

**features: List\[`str`]**

A list of features that the guild has. The features that a guild can have are
subject to arbitrary change by Discord. A list of guild features can be found
in [the Discord documentation](https://discord.com/developers/docs/resources/guild#guild-object-guild-features).

**premium\_tier: `int`**

The premium tier for this guild. Corresponds to "Nitro Server" in the official UI.
The number goes from 0 to 3 inclusive.

**premium\_subscription\_count: `int`**

The number of "boosts" this guild currently has.

**preferred\_locale: `Locale`**

The preferred locale for the guild. Used when filtering Server Discovery
results to a specific language.

> **Changed in version 2.0**
> This field is now an enum instead of a `str`.

**nsfw\_level: `NSFWLevel`**

The guild's NSFW level.

> **Added in version 2.0**

**mfa\_level: `MFALevel`**

The guild's Multi-Factor Authentication requirement level.

> **Changed in version 2.0**
> This field is now an enum instead of an `int`.

**approximate\_member\_count: Optional\[`int`]**

The approximate number of members in the guild. This is `None` unless the guild is obtained
using `Client.fetch_guild` or `Client.fetch_guilds` with `with_counts=True`.

> **Added in version 2.0**

**approximate\_presence\_count: Optional\[`int`]**

The approximate number of members currently active in the guild.
Offline members are excluded. This is `None` unless the guild is obtained using
`Client.fetch_guild` or `Client.fetch_guilds` with `with_counts=True`.

> **Changed in version 2.0**

**premium\_progress\_bar\_enabled: `bool`**

Indicates if the guild has premium AKA server boost level progress bar enabled.

> **Added in version 2.0**

**widget\_enabled: `bool`**

Indicates if the guild has widget enabled.

> **Added in version 2.0**

**max\_stage\_video\_users: Optional\[`int`]**

The maximum amount of users in a stage video channel.

> **Added in version 2.3**

<a id="api-guild-channels"></a>

##### `channels(self) -> Sequence[GuildChannel]`

Sequence\[`abc.GuildChannel`]: A list of channels that belongs to this guild.

<a id="api-guild-threads"></a>

##### `threads(self) -> Sequence[Thread]`

Sequence\[`Thread`]: A list of threads that you have permission to view.

> **Added in version 2.0**

<a id="api-guild-large"></a>

##### `large(self) -> bool`

`bool`: Indicates if the guild is a 'large' guild.

A large guild is defined as having more than `large_threshold` count
members, which for this library is set to the maximum of 250.

<a id="api-guild-voice-channels"></a>

##### `voice_channels(self) -> List[VoiceChannel]`

List\[`VoiceChannel`]: A list of voice channels that belongs to this guild.

This is sorted by the position and are in UI order from top to bottom.

<a id="api-guild-stage-channels"></a>

##### `stage_channels(self) -> List[StageChannel]`

List\[`StageChannel`]: A list of stage channels that belongs to this guild.

> **Added in version 1.7**

This is sorted by the position and are in UI order from top to bottom.

<a id="api-guild-me"></a>

##### `me(self) -> Member`

`Member`: Similar to `Client.user` except an instance of `Member`.
This is essentially used to get the member version of yourself.

<a id="api-guild-voice-client"></a>

##### `voice_client(self) -> Optional[VoiceProtocol]`

Optional\[`VoiceProtocol`]: Returns the `VoiceProtocol` associated with this guild, if any.

<a id="api-guild-text-channels"></a>

##### `text_channels(self) -> List[TextChannel]`

List\[`TextChannel`]: A list of text channels that belongs to this guild.

This is sorted by the position and are in UI order from top to bottom.

<a id="api-guild-categories"></a>

##### `categories(self) -> List[CategoryChannel]`

List\[`CategoryChannel`]: A list of categories that belongs to this guild.

This is sorted by the position and are in UI order from top to bottom.

<a id="api-guild-forums"></a>

##### `forums(self) -> List[ForumChannel]`

List\[`ForumChannel`]: A list of forum channels that belongs to this guild.

This is sorted by the position and are in UI order from top to bottom.

<a id="api-guild-by-category"></a>

##### `by_category(self) -> List[ByCategoryItem]`

Returns every `CategoryChannel` and their associated channels.

These channels and categories are sorted in the official Discord UI order.

If the channels do not have a category, then the first element of the tuple is
`None`.

## Returns

**List\[Tuple\[Optional\[`CategoryChannel`], List\[`abc.GuildChannel`]]]:**

The categories and their associated channels.

<a id="api-guild-get-channel-or-thread"></a>

##### `get_channel_or_thread(self, channel_id: int, /) -> Optional[Union[Thread, GuildChannel]]`

Returns a channel or thread with the given ID.

> **Added in version 2.0**

## Parameters

**channel\_id: `int`**

The ID to search for.

## Returns

**Optional\[Union\[`Thread`, `.abc.GuildChannel`]]**

The returned channel or thread or `None` if not found.

<a id="api-guild-get-channel"></a>

##### `get_channel(self, channel_id: int, /) -> Optional[GuildChannel]`

Returns a channel with the given ID.

> **Note**
> This does *not* search for threads.

> **Changed in version 2.0**
> `channel_id` parameter is now positional-only.

## Parameters

**channel\_id: `int`**

The ID to search for.

## Returns

**Optional\[`.abc.GuildChannel`]**

The returned channel or `None` if not found.

<a id="api-guild-get-thread"></a>

##### `get_thread(self, thread_id: int, /) -> Optional[Thread]`

Returns a thread with the given ID.

> **Note**
> This does not always retrieve archived threads, as they are not retained in the internal
> cache. Use `fetch_channel` instead.

> **Added in version 2.0**

## Parameters

**thread\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Thread`]**

The returned thread or `None` if not found.

<a id="api-guild-get-emoji"></a>

##### `get_emoji(self, emoji_id: int, /) -> Optional[Emoji]`

Returns an emoji with the given ID.

> **Added in version 2.3**

## Parameters

**emoji\_id: int**

The ID to search for.

## Returns

**Optional\[`Emoji`]**

The returned Emoji or `None` if not found.

<a id="api-guild-afk-channel"></a>

##### `afk_channel(self) -> Optional[VocalGuildChannel]`

Optional\[Union\[`VoiceChannel`, `StageChannel`]]: The channel that denotes the AFK channel.

If no channel is set, then this returns `None`.

<a id="api-guild-system-channel"></a>

##### `system_channel(self) -> Optional[TextChannel]`

Optional\[`TextChannel`]: Returns the guild's channel used for system messages.

If no channel is set, then this returns `None`.

<a id="api-guild-system-channel-flags"></a>

##### `system_channel_flags(self) -> SystemChannelFlags`

`SystemChannelFlags`: Returns the guild's system channel settings.

<a id="api-guild-rules-channel"></a>

##### `rules_channel(self) -> Optional[TextChannel]`

Optional\[`TextChannel`]: Return's the guild's channel used for the rules.
The guild must be a Community guild.

If no channel is set, then this returns `None`.

> **Added in version 1.3**

<a id="api-guild-public-updates-channel"></a>

##### `public_updates_channel(self) -> Optional[TextChannel]`

Optional\[`TextChannel`]: Return's the guild's channel where admins and
moderators of the guilds receive notices from Discord. The guild must be a
Community guild.

If no channel is set, then this returns `None`.

> **Added in version 1.4**

<a id="api-guild-safety-alerts-channel"></a>

##### `safety_alerts_channel(self) -> Optional[TextChannel]`

Optional\[`TextChannel`]: Return's the guild's channel used for safety alerts, if set.

For example, this is used for the raid protection setting. The guild must have the `COMMUNITY` feature.

> **Added in version 2.3**

<a id="api-guild-widget-channel"></a>

##### `widget_channel(self) -> Optional[Union[TextChannel, ForumChannel, VoiceChannel, StageChannel]]`

Optional\[Union\[`TextChannel`, `ForumChannel`, `VoiceChannel`, `StageChannel`]]: Returns
the widget channel of the guild.

If no channel is set, then this returns `None`.

> **Added in version 2.3**

<a id="api-guild-emoji-limit"></a>

##### `emoji_limit(self) -> int`

`int`: The maximum number of emoji slots this guild has.

<a id="api-guild-sticker-limit"></a>

##### `sticker_limit(self) -> int`

`int`: The maximum number of sticker slots this guild has.

> **Added in version 2.0**

<a id="api-guild-bitrate-limit"></a>

##### `bitrate_limit(self) -> float`

`float`: The maximum bitrate for voice channels this guild can have.

<a id="api-guild-filesize-limit"></a>

##### `filesize_limit(self) -> int`

`int`: The maximum number of bytes files can have when uploaded to this guild.

<a id="api-guild-members"></a>

##### `members(self) -> Sequence[Member]`

Sequence\[`Member`]: A list of members that belong to this guild.

<a id="api-guild-get-member"></a>

##### `get_member(self, user_id: int, /) -> Optional[Member]`

Returns a member with the given ID.

> **Changed in version 2.0**
> `user_id` parameter is now positional-only.

## Parameters

**user\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Member`]**

The member or `None` if not found.

<a id="api-guild-premium-subscribers"></a>

##### `premium_subscribers(self) -> List[Member]`

List\[`Member`]: A list of members who have "boosted" this guild.

<a id="api-guild-roles"></a>

##### `roles(self) -> Sequence[Role]`

Sequence\[`Role`]: Returns a sequence of the guild's roles in hierarchy order.

The first element of this sequence will be the lowest role in the
hierarchy.

<a id="api-guild-get-role"></a>

##### `get_role(self, role_id: int, /) -> Optional[Role]`

Returns a role with the given ID.

> **Changed in version 2.0**
> `role_id` parameter is now positional-only.

## Parameters

**role\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Role`]**

The role or `None` if not found.

<a id="api-guild-default-role"></a>

##### `default_role(self) -> Role`

`Role`: Gets the @everyone role that all members have by default.

<a id="api-guild-premium-subscriber-role"></a>

##### `premium_subscriber_role(self) -> Optional[Role]`

Optional\[`Role`]: Gets the premium subscriber role, AKA "boost" role, in this guild.

> **Added in version 1.6**

<a id="api-guild-self-role"></a>

##### `self_role(self) -> Optional[Role]`

Optional\[`Role`]: Gets the role associated with this client's user, if any.

> **Added in version 1.6**

<a id="api-guild-stage-instances"></a>

##### `stage_instances(self) -> Sequence[StageInstance]`

Sequence\[`StageInstance`]: Returns a sequence of the guild's stage instances that
are currently running.

> **Added in version 2.0**

<a id="api-guild-get-stage-instance"></a>

##### `get_stage_instance(self, stage_instance_id: int, /) -> Optional[StageInstance]`

Returns a stage instance with the given ID.

> **Added in version 2.0**

## Parameters

**stage\_instance\_id: `int`**

The ID to search for.

## Returns

**Optional\[`StageInstance`]**

The stage instance or `None` if not found.

<a id="api-guild-scheduled-events"></a>

##### `scheduled_events(self) -> Sequence[ScheduledEvent]`

Sequence\[`ScheduledEvent`]: Returns a sequence of the guild's scheduled events.

> **Added in version 2.0**

<a id="api-guild-get-scheduled-event"></a>

##### `get_scheduled_event(self, scheduled_event_id: int, /) -> Optional[ScheduledEvent]`

Returns a scheduled event with the given ID.

> **Added in version 2.0**

## Parameters

**scheduled\_event\_id: `int`**

The ID to search for.

## Returns

**Optional\[`ScheduledEvent`]**

The scheduled event or `None` if not found.

<a id="api-guild-soundboard-sounds"></a>

##### `soundboard_sounds(self) -> Sequence[SoundboardSound]`

Sequence\[`SoundboardSound`]: Returns a sequence of the guild's soundboard sounds.

> **Added in version 2.5**

<a id="api-guild-get-soundboard-sound"></a>

##### `get_soundboard_sound(self, sound_id: int, /) -> Optional[SoundboardSound]`

Returns a soundboard sound with the given ID.

> **Added in version 2.5**

## Parameters

**sound\_id: `int`**

The ID to search for.

## Returns

**Optional\[`SoundboardSound`]**

The soundboard sound or `None` if not found.

<a id="api-guild-owner"></a>

##### `owner(self) -> Optional[Member]`

Optional\[`Member`]: The member that owns the guild.

<a id="api-guild-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's icon asset, if available.

<a id="api-guild-banner"></a>

##### `banner(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's banner asset, if available.

<a id="api-guild-splash"></a>

##### `splash(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's invite splash asset, if available.

<a id="api-guild-discovery-splash"></a>

##### `discovery_splash(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's discovery splash asset, if available.

<a id="api-guild-member-count"></a>

##### `member_count(self) -> Optional[int]`

Optional\[`int`]: Returns the member count if available.

> **Warning**
> Due to a Discord limitation, in order for this attribute to remain up-to-date and
> accurate, it requires `Intents.members` to be specified.

> **Changed in version 2.0**
> Now returns an `Optional[int]`.

<a id="api-guild-chunked"></a>

##### `chunked(self) -> bool`

`bool`: Returns a boolean indicating if the guild is "chunked".

A chunked guild means that `member_count` is equal to the
number of members stored in the internal `members` cache.

If this value returns `False`, then you should request for
offline members.

<a id="api-guild-shard-id"></a>

##### `shard_id(self) -> int`

`int`: Returns the shard ID for this guild if applicable.

<a id="api-guild-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the guild's creation time in UTC.

<a id="api-guild-get-member-named"></a>

##### `get_member_named(self, name: str, /) -> Optional[Member]`

Returns the first member found that matches the name provided.

The name is looked up in the following order:

- Username#Discriminator (deprecated)
- Username#0 (deprecated, only gets users that migrated from their discriminator)
- Nickname
- Global name
- Username

If no member is found, `None` is returned.

> **Changed in version 2.0**
> `name` parameter is now positional-only.

> **Deprecated in version 2.3**
> Looking up users via discriminator due to Discord API change.

## Parameters

**name: `str`**

The name of the member to lookup.

## Returns

**Optional\[`Member`]**

The member in this guild with the associated name. If not found
then `None` is returned.

<a id="api-guild-create-text-channel"></a>

##### `create_text_channel( self, name: str, *, reason: Optional[str] = None, category: Optional[CategoryChannel] = None, news: bool = False, position: int = MISSING, topic: str = MISSING, slowmode_delay: int = MISSING, nsfw: bool = MISSING, overwrites: Mapping[Union[Role, Member, Object], PermissionOverwrite] = MISSING, default_auto_archive_duration: int = MISSING, default_thread_slowmode_delay: int = MISSING,) -> TextChannel`

*coroutine*

Creates a `TextChannel` for the guild.

Note that you must have `Permissions.manage_channels` to create the channel.

The `overwrites` parameter can be used to create a 'secret'
channel upon creation. This parameter expects a `dict` of
overwrites with the target (either a `Member` or a `Role`)
as the key and a `PermissionOverwrite` as the value.

> **Note**
> Creating a channel of a specified position will not update the position of
> other channels to follow suit. A follow-up call to `TextChannel.edit`
> will be required to update the position of the channel in the channel list.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Examples

Creating a basic channel:

```python3
channel = await guild.create_text_channel('cool-channel')
```

Creating a "secret" channel:

```python3
overwrites = {
    guild.default_role: discord.PermissionOverwrite(read_messages=False),
    guild.me: discord.PermissionOverwrite(read_messages=True)
}

channel = await guild.create_text_channel('secret', overwrites=overwrites)
```

## Parameters

**name: `str`**

The channel's name.

**overwrites: Dict\[Union\[`Role`, `Member`], `PermissionOverwrite`]**

A `dict` of target (either a role or a member) to
`PermissionOverwrite` to apply upon creation of a channel.
Useful for creating secret channels.

**category: Optional\[`CategoryChannel`]**

The category to place the newly created channel under.
The permissions will be automatically synced to category if no
overwrites are provided.

**position: `int`**

The position in the channel list. This is a number that starts
at 0. e.g. the top channel is position 0.

**topic: `str`**

The new channel's topic.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this channel, in seconds.
The maximum value possible is `21600`.

**nsfw: `bool`**

To mark the channel as NSFW or not.

**news: `bool`**

Whether to create the text channel as a news channel.

> **Added in version 2.0**

**default\_auto\_archive\_duration: `int`**

The default auto archive duration for threads created in the text channel (in minutes).
Must be one of `60`, `1440`, `4320`, or `10080`.

> **Added in version 2.0**

**default\_thread\_slowmode\_delay: `int`**

The default slowmode delay in seconds for threads created in the text channel.

> **Added in version 2.3**

**reason: Optional\[`str`]**

The reason for creating this channel. Shows up on the audit log.

## Raises

**Forbidden**

You do not have the proper permissions to create this channel.

**HTTPException**

Creating the channel failed.

**TypeError**

The permission overwrite information is not in proper form.

## Returns

**`TextChannel`**

The channel that was just created.

<a id="api-guild-create-voice-channel"></a>

##### `create_voice_channel( self, name: str, *, reason: Optional[str] = None, category: Optional[CategoryChannel] = None, position: int = MISSING, bitrate: int = MISSING, user_limit: int = MISSING, rtc_region: Optional[str] = MISSING, video_quality_mode: VideoQualityMode = MISSING, overwrites: Mapping[Union[Role, Member, Object], PermissionOverwrite] = MISSING, nsfw: bool = MISSING,) -> VoiceChannel`

*coroutine*

This is similar to `create_text_channel` except makes a `VoiceChannel` instead.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**name: `str`**

The channel's name.

**overwrites: Dict\[Union\[`Role`, `Member`], `PermissionOverwrite`]**

A `dict` of target (either a role or a member) to
`PermissionOverwrite` to apply upon creation of a channel.
Useful for creating secret channels.

**category: Optional\[`CategoryChannel`]**

The category to place the newly created channel under.
The permissions will be automatically synced to category if no
overwrites are provided.

**position: `int`**

The position in the channel list. This is a number that starts
at 0. e.g. the top channel is position 0.

**bitrate: `int`**

The channel's preferred audio bitrate in bits per second.

**user\_limit: `int`**

The channel's limit for number of members that can be in a voice channel.

**rtc\_region: Optional\[`str`]**

The region for the voice channel's voice communication.
A value of `None` indicates automatic voice region detection.

> **Added in version 1.7**

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the voice channel's participants.

> **Added in version 2.0**

**nsfw: `bool`**

To mark the channel as NSFW or not.

> **Added in version 2.6**

**reason: Optional\[`str`]**

The reason for creating this channel. Shows up on the audit log.

## Raises

**Forbidden**

You do not have the proper permissions to create this channel.

**HTTPException**

Creating the channel failed.

**TypeError**

The permission overwrite information is not in proper form.

## Returns

**`VoiceChannel`**

The channel that was just created.

<a id="api-guild-create-stage-channel"></a>

##### `create_stage_channel( self, name: str, *, reason: Optional[str] = None, category: Optional[CategoryChannel] = None, position: int = MISSING, bitrate: int = MISSING, user_limit: int = MISSING, rtc_region: Optional[str] = MISSING, video_quality_mode: VideoQualityMode = MISSING, overwrites: Mapping[Union[Role, Member, Object], PermissionOverwrite] = MISSING, nsfw: bool = MISSING,) -> StageChannel`

*coroutine*

This is similar to `create_text_channel` except makes a `StageChannel` instead.

> **Added in version 1.7**

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**name: `str`**

The channel's name.

**overwrites: Dict\[Union\[`Role`, `Member`], `PermissionOverwrite`]**

A `dict` of target (either a role or a member) to
`PermissionOverwrite` to apply upon creation of a channel.
Useful for creating secret channels.

**category: Optional\[`CategoryChannel`]**

The category to place the newly created channel under.
The permissions will be automatically synced to category if no
overwrites are provided.

**position: `int`**

The position in the channel list. This is a number that starts
at 0. e.g. the top channel is position 0.

**bitrate: `int`**

The channel's preferred audio bitrate in bits per second.

> **Added in version 2.2**

**user\_limit: `int`**

The channel's limit for number of members that can be in a voice channel.

> **Added in version 2.2**

**rtc\_region: Optional\[`str`]**

The region for the voice channel's voice communication.
A value of `None` indicates automatic voice region detection.

> **Added in version 2.2**

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the voice channel's participants.

> **Added in version 2.2**

**nsfw: `bool`**

To mark the channel as NSFW or not.

> **Added in version 2.6**

**reason: Optional\[`str`]**

The reason for creating this channel. Shows up on the audit log.

## Raises

**Forbidden**

You do not have the proper permissions to create this channel.

**HTTPException**

Creating the channel failed.

**TypeError**

The permission overwrite information is not in proper form.

## Returns

**`StageChannel`**

The channel that was just created.

<a id="api-guild-create-category"></a>

##### `create_category( self, name: str, *, overwrites: Mapping[Union[Role, Member, Object], PermissionOverwrite] = MISSING, reason: Optional[str] = None, position: int = MISSING,) -> CategoryChannel`

*coroutine*

Same as `create_text_channel` except makes a `CategoryChannel` instead.

> **Note**
> The `category` parameter is not supported in this function since categories
> cannot have categories.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Raises

**Forbidden**

You do not have the proper permissions to create this channel.

**HTTPException**

Creating the channel failed.

**TypeError**

The permission overwrite information is not in proper form.

## Returns

**`CategoryChannel`**

The channel that was just created.

<a id="api-guild-create-forum"></a>

##### `create_forum( self, name: str, *, topic: str = MISSING, position: int = MISSING, category: Optional[CategoryChannel] = None, slowmode_delay: int = MISSING, nsfw: bool = MISSING, media: bool = MISSING, overwrites: Mapping[Union[Role, Member, Object], PermissionOverwrite] = MISSING, reason: Optional[str] = None, default_auto_archive_duration: int = MISSING, default_thread_slowmode_delay: int = MISSING, default_sort_order: ForumOrderType = MISSING, default_reaction_emoji: EmojiInputType = MISSING, default_layout: ForumLayoutType = MISSING, available_tags: Sequence[ForumTag] = MISSING,) -> ForumChannel`

*coroutine*

Similar to `create_text_channel` except makes a `ForumChannel` instead.

The `overwrites` parameter can be used to create a 'secret'
channel upon creation. This parameter expects a `dict` of
overwrites with the target (either a `Member` or a `Role`)
as the key and a `PermissionOverwrite` as the value.

> **Added in version 2.0**

## Parameters

**name: `str`**

The channel's name.

**overwrites: Dict\[Union\[`Role`, `Member`], `PermissionOverwrite`]**

A `dict` of target (either a role or a member) to
`PermissionOverwrite` to apply upon creation of a channel.
Useful for creating secret channels.

**topic: `str`**

The channel's topic.

**category: Optional\[`CategoryChannel`]**

The category to place the newly created channel under.
The permissions will be automatically synced to category if no
overwrites are provided.

**position: `int`**

The position in the channel list. This is a number that starts
at 0. e.g. the top channel is position 0.

**nsfw: `bool`**

To mark the channel as NSFW or not.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for users in this channel, in seconds.
The maximum possible value is `21600`.

**reason: Optional\[`str`]**

The reason for creating this channel. Shows up in the audit log.

**default\_auto\_archive\_duration: `int`**

The default auto archive duration for threads created in the forum channel (in minutes).
Must be one of `60`, `1440`, `4320`, or `10080`.

**default\_thread\_slowmode\_delay: `int`**

The default slowmode delay in seconds for threads created in this forum.

> **Added in version 2.1**

**default\_sort\_order: `ForumOrderType`**

The default sort order for posts in this forum channel.

> **Added in version 2.3**

**default\_reaction\_emoji: Union\[`Emoji`, `PartialEmoji`, `str`]**

The default reaction emoji for threads created in this forum to show in the
add reaction button.

> **Added in version 2.3**

**default\_layout: `ForumLayoutType`**

The default layout for posts in this forum.
This cannot be set if `media` is set to `True`.

> **Added in version 2.3**

**available\_tags: Sequence\[`ForumTag`]**

The available tags for this forum channel.

> **Added in version 2.1**

**media: `bool`**

Whether to create a media forum channel.

> **Added in version 2.6**

## Raises

**Forbidden**

You do not have the proper permissions to create this channel.

**HTTPException**

Creating the channel failed.

**TypeError**

The permission overwrite information is not in proper form.

## Returns

**`ForumChannel`**

The channel that was just created.

<a id="api-guild-leave"></a>

##### `leave(self) -> None`

*coroutine*

Leaves the guild.

## Raises

**HTTPException**

Leaving the guild failed.

<a id="api-guild-delete"></a>

##### `delete(self) -> None`

*coroutine*

Deletes the guild. You must be the guild owner to delete the
guild.

> **Deprecated in version 2.6**
> This method is deprecated and will be removed in a future version.

## Raises

**HTTPException**

Deleting the guild failed.

**Forbidden**

You do not have permissions to delete the guild.

<a id="api-guild-edit"></a>

##### `edit( self, *, reason: Optional[str] = MISSING, name: str = MISSING, description: Optional[str] = MISSING, icon: Optional[bytes] = MISSING, banner: Optional[bytes] = MISSING, splash: Optional[bytes] = MISSING, discovery_splash: Optional[bytes] = MISSING, community: bool = MISSING, afk_channel: Optional[VoiceChannel] = MISSING, owner: Snowflake = MISSING, afk_timeout: int = MISSING, default_notifications: NotificationLevel = MISSING, verification_level: VerificationLevel = MISSING, explicit_content_filter: ContentFilter = MISSING, vanity_code: str = MISSING, system_channel: Optional[TextChannel] = MISSING, system_channel_flags: SystemChannelFlags = MISSING, preferred_locale: Locale = MISSING, rules_channel: Optional[TextChannel] = MISSING, public_updates_channel: Optional[TextChannel] = MISSING, premium_progress_bar_enabled: bool = MISSING, discoverable: bool = MISSING, invites_disabled: bool = MISSING, widget_enabled: bool = MISSING, widget_channel: Optional[Snowflake] = MISSING, mfa_level: MFALevel = MISSING, raid_alerts_disabled: bool = MISSING, safety_alerts_channel: TextChannel = MISSING, invites_disabled_until: datetime.datetime = MISSING, dms_disabled_until: datetime.datetime = MISSING,) -> Guild`

*coroutine*

Edits the guild.

You must have `Permissions.manage_guild` to edit the guild.

> **Changed in version 2.0**
> The newly updated guild is returned.

> **Changed in version 2.0**
> The `region` keyword parameter has been removed.

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**name: `str`**

The new name of the guild.

**description: Optional\[`str`]**

The new description of the guild. Could be `None` for no description.
This is only available to guilds that contain `COMMUNITY` in `Guild.features`.

**icon: `bytes`**

A `py:bytes-like object` representing the icon. Only PNG/JPEG is supported.
GIF is only available to guilds that contain `ANIMATED_ICON` in `Guild.features`.
Could be `None` to denote removal of the icon.

**banner: `bytes`**

A `py:bytes-like object` representing the banner.
Could be `None` to denote removal of the banner. This is only available to guilds that contain
`BANNER` in `Guild.features`.

**splash: `bytes`**

A `py:bytes-like object` representing the invite splash.
Only PNG/JPEG supported. Could be `None` to denote removing the
splash. This is only available to guilds that contain `INVITE_SPLASH`
in `Guild.features`.

**discovery\_splash: `bytes`**

A `py:bytes-like object` representing the discovery splash.
Only PNG/JPEG supported. Could be `None` to denote removing the
splash. This is only available to guilds that contain `DISCOVERABLE`
in `Guild.features`.

> **Added in version 2.0**

**community: `bool`**

Whether the guild should be a Community guild. If set to `True`, both `rules_channel`
and `public_updates_channel` parameters are required.

> **Added in version 2.0**

**afk\_channel: Optional\[`VoiceChannel`]**

The new channel that is the AFK channel. Could be `None` for no AFK channel.

**afk\_timeout: `int`**

The number of seconds until someone is moved to the AFK channel.

**owner: `Member`**

The new owner of the guild to transfer ownership to. Note that you must
be owner of the guild to do this.

> **Deprecated in version 2.6**
> This parameter is deprecated and will be removed in a future version as bots can no longer own guilds.

**verification\_level: `VerificationLevel`**

The new verification level for the guild.

**default\_notifications: `NotificationLevel`**

The new default notification level for the guild.

**explicit\_content\_filter: `ContentFilter`**

The new explicit content filter for the guild.

**vanity\_code: `str`**

The new vanity code for the guild.

> **Deprecated in version 2.6**
> This parameter is deprecated and will be removed in a future version as bots can no longer set this.

**system\_channel: Optional\[`TextChannel`]**

The new channel that is used for the system channel. Could be `None` for no system channel.

**system\_channel\_flags: `SystemChannelFlags`**

The new system channel settings to use with the new system channel.

**preferred\_locale: `Locale`**

The new preferred locale for the guild. Used as the primary language in the guild.

> **Changed in version 2.0**
> Now accepts an enum instead of `str`.

**rules\_channel: Optional\[`TextChannel`]**

The new channel that is used for rules. This is only available to
guilds that contain `COMMUNITY` in `Guild.features`. Could be `None` for no rules
channel.

> **Added in version 1.4**

**public\_updates\_channel: Optional\[`TextChannel`]**

The new channel that is used for public updates from Discord. This is only available to
guilds that contain `COMMUNITY` in `Guild.features`. Could be `None` for no
public updates channel.

> **Added in version 1.4**

**premium\_progress\_bar\_enabled: `bool`**

Whether the premium AKA server boost level progress bar should be enabled for the guild.

> **Added in version 2.0**

**discoverable: `bool`**

Whether server discovery is enabled for this guild.

> **Added in version 2.1**

**invites\_disabled: `bool`**

Whether joining via invites should be disabled for the guild.

> **Added in version 2.1**

**widget\_enabled: `bool`**

Whether to enable the widget for the guild.

> **Added in version 2.3**

**widget\_channel: Optional\[`abc.Snowflake`]**

The new widget channel. `None` removes the widget channel.

> **Added in version 2.3**

**mfa\_level: `MFALevel`**

The new guild's Multi-Factor Authentication requirement level.
Note that you must be owner of the guild to do this.

> **Added in version 2.3**

> **Deprecated in version 2.6**
> This parameter is deprecated and will be removed in a future version as bots can no longer own guilds.

**reason: Optional\[`str`]**

The reason for editing this guild. Shows up on the audit log.

**raid\_alerts\_disabled: `bool`**

Whether the alerts for raid protection should be disabled for the guild.

> **Added in version 2.3**

**safety\_alerts\_channel: Optional\[`TextChannel`]**

The new channel that is used for safety alerts. This is only available to
guilds that contain `COMMUNITY` in `Guild.features`. Could be `None` for no
safety alerts channel.

> **Added in version 2.3**

**invites\_disabled\_until: Optional\[`datetime.datetime`]**

The time when invites should be enabled again, or `None` to disable the action.
This must be a timezone-aware datetime object. Consider using `utils.utcnow`.

> **Added in version 2.4**

**dms\_disabled\_until: Optional\[`datetime.datetime`]**

The time when direct messages should be allowed again, or `None` to disable the action.
This must be a timezone-aware datetime object. Consider using `utils.utcnow`.

> **Added in version 2.4**

## Raises

**Forbidden**

You do not have permissions to edit the guild.

**HTTPException**

Editing the guild failed.

**ValueError**

The image format passed in to `icon` is invalid. It must be
PNG or JPG. This is also raised if you are not the owner of the
guild and request an ownership transfer.

**TypeError**

The type passed to the `default_notifications`, `rules_channel`, `public_updates_channel`,
`safety_alerts_channel` `verification_level`, `explicit_content_filter`,
`system_channel_flags`, or `mfa_level` parameter was of the incorrect type.

## Returns

**`Guild`**

The newly updated guild. Note that this has the same limitations as
mentioned in `Client.fetch_guild` and may not have full data.

<a id="api-guild-fetch-channels"></a>

##### `fetch_channels(self) -> Sequence[GuildChannel]`

*coroutine*

Retrieves all `abc.GuildChannel` that the guild has.

> **Note**
> This method is an API call. For general usage, consider `channels` instead.

> **Added in version 1.2**

## Raises

**InvalidData**

An unknown channel type was received from Discord.

**HTTPException**

Retrieving the channels failed.

## Returns

**Sequence\[`abc.GuildChannel`]**

All channels in the guild.

<a id="api-guild-active-threads"></a>

##### `active_threads(self) -> List[Thread]`

*coroutine*

Returns a list of active `Thread` that the client can access.

This includes both private and public threads.

> **Added in version 2.0**

## Raises

**HTTPException**

The request to get the active threads failed.

## Returns

**List\[`Thread`]**

The active threads

<a id="api-guild-fetch-members"></a>

##### `fetch_members(self, *, limit: Optional[int] = 1000, after: SnowflakeTime = MISSING) -> AsyncIterator[Member]`

Retrieves an `asynchronous iterator` that enables receiving the guild's members. In order to use this,
`Intents.members` must be enabled.

> **Note**
> This method is an API call. For general usage, consider `members` instead.

> **Added in version 1.3**

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of members to retrieve. Defaults to 1000.
Pass `None` to fetch all members. Note that this is potentially slow.

**after: Optional\[Union\[`.abc.Snowflake`, `datetime.datetime`]]**

Retrieve members after this date or object.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

## Raises

**ClientException**

The members intent is not enabled.

**HTTPException**

Getting the members failed.

## Yields

**`.Member`**

The member with the member data parsed.

## Examples

Usage :

```python
async for member in guild.fetch_members(limit=150):
    print(member.name)
```

<a id="api-guild-fetch-member"></a>

##### `fetch_member(self, member_id: int, /) -> Member`

*coroutine*

Retrieves a `Member` from a guild ID, and a member ID.

> **Note**
> This method is an API call. If you have `Intents.members` and member cache enabled, consider `get_member` instead.

> **Changed in version 2.0**
> `member_id` parameter is now positional-only.

## Parameters

**member\_id: `int`**

The member's ID to fetch from.

## Raises

**Forbidden**

You do not have access to the guild.

**HTTPException**

Fetching the member failed.

**NotFound**

The member could not be found.

## Returns

**`Member`**

The member from the member ID.

<a id="api-guild-fetch-ban"></a>

##### `fetch_ban(self, user: Snowflake) -> BanEntry`

*coroutine*

Retrieves the `BanEntry` for a user.

You must have `Permissions.ban_members` to get this information.

## Parameters

**user: `abc.Snowflake`**

The user to get ban information from.

## Raises

**Forbidden**

You do not have proper permissions to get the information.

**NotFound**

This user is not banned.

**HTTPException**

An error occurred while fetching the information.

## Returns

**`BanEntry`**

The `BanEntry` object for the specified user.

<a id="api-guild-fetch-channel"></a>

##### `fetch_channel(self, channel_id: int, /) -> Union[GuildChannel, Thread]`

*coroutine*

Retrieves a `.abc.GuildChannel` or `.Thread` with the specified ID.

> **Note**
> This method is an API call. For general usage, consider `get_channel_or_thread` instead.

> **Added in version 2.0**

## Raises

**InvalidData**

An unknown channel type was received from Discord
or the guild the channel belongs to is not the same
as the one in this object points to.

**HTTPException**

Retrieving the channel failed.

**NotFound**

Invalid Channel ID.

**Forbidden**

You do not have permission to fetch this channel.

## Returns

**Union\[`.abc.GuildChannel`, `.Thread`]**

The channel from the ID.

<a id="api-guild-bans"></a>

##### `bans( self, *, limit: Optional[int] = 1000, before: Snowflake = MISSING, after: Snowflake = MISSING,) -> AsyncIterator[BanEntry]`

Retrieves an `asynchronous iterator` of the users that are banned from the guild as a `BanEntry`.

You must have `Permissions.ban_members` to get this information.

> **Changed in version 2.0**
> Due to a breaking change in Discord's API, this now returns a paginated iterator instead of a list.

## Examples

Usage :

```python
async for entry in guild.bans(limit=150):
    print(entry.user, entry.reason)
```

Flattening into a list :

```python
bans = [entry async for entry in guild.bans(limit=2000)]
# bans is now a list of BanEntry...
```

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of bans to retrieve. If `None`, it retrieves every ban in
the guild. Note, however, that this would make it a slow operation.
Defaults to `1000`.

**before: `.abc.Snowflake`**

Retrieves bans before this user.

**after: `.abc.Snowflake`**

Retrieve bans after this user.

## Raises

**Forbidden**

You do not have proper permissions to get the information.

**HTTPException**

An error occurred while fetching the information.

**TypeError**

Both `after` and `before` were provided, as Discord does not
support this type of pagination.

## Yields

**`BanEntry`**

The ban entry of the banned user.

<a id="api-guild-prune-members"></a>

##### `prune_members( self, *, days: int, compute_prune_count: bool = True, roles: Collection[Snowflake] = MISSING, reason: Optional[str] = None,) -> Optional[int]`

*coroutine*

Prunes the guild from its inactive members.

The inactive members are denoted if they have not logged on in
`days` number of days and they have no roles.

You must have both `Permissions.kick_members` and `Permissions.manage_guild` to do this.

To check how many members you would prune without actually pruning,
see the `estimate_pruned_members` function.

To prune members that have specific roles see the `roles` parameter.

> **Changed in version 1.4**
> The `roles` keyword-only parameter was added.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**days: `int`**

The number of days before counting as inactive.

**reason: Optional\[`str`]**

The reason for doing this action. Shows up on the audit log.

**compute\_prune\_count: `bool`**

Whether to compute the prune count. This defaults to `True`
which makes it prone to timeouts in very large guilds. In order
to prevent timeouts, you must set this to `False`. If this is
set to `False`, then this function will always return `None`.

**roles: List\[`abc.Snowflake`]**

A list of `abc.Snowflake` that represent roles to include in the pruning process. If a member
has a role that is not specified, they'll be excluded.

## Raises

**Forbidden**

You do not have permissions to prune members.

**HTTPException**

An error occurred while pruning members.

**TypeError**

An integer was not passed for `days`.

## Returns

**Optional\[`int`]**

The number of members pruned. If `compute_prune_count` is `False`
then this returns `None`.

<a id="api-guild-templates"></a>

##### `templates(self) -> List[Template]`

*coroutine*

Gets the list of templates from this guild.

You must have `.Permissions.manage_guild` to do this.

> **Added in version 1.7**

## Raises

**Forbidden**

You don't have permissions to get the templates.

## Returns

**List\[`Template`]**

The templates for this guild.

<a id="api-guild-webhooks"></a>

##### `webhooks(self) -> List[Webhook]`

*coroutine*

Gets the list of webhooks from this guild.

You must have `.Permissions.manage_webhooks` to do this.

## Raises

**Forbidden**

You don't have permissions to get the webhooks.

## Returns

**List\[`Webhook`]**

The webhooks for this guild.

<a id="api-guild-estimate-pruned-members"></a>

##### `estimate_pruned_members(self, *, days: int, roles: Collection[Snowflake] = MISSING) -> Optional[int]`

*coroutine*

Similar to `prune_members` except instead of actually
pruning members, it returns how many members it would prune
from the guild had it been called.

> **Changed in version 2.0**
> The returned value can be `None`.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**days: `int`**

The number of days before counting as inactive.

**roles: List\[`abc.Snowflake`]**

A list of `abc.Snowflake` that represent roles to include in the estimate. If a member
has a role that is not specified, they'll be excluded.

> **Added in version 1.7**

## Raises

**Forbidden**

You do not have permissions to prune members.

**HTTPException**

An error occurred while fetching the prune members estimate.

**TypeError**

An integer was not passed for `days`.

## Returns

**Optional\[`int`]**

The number of members estimated to be pruned.

<a id="api-guild-invites"></a>

##### `invites(self) -> List[Invite]`

*coroutine*

Returns a list of all active instant invites from the guild.

You must have `Permissions.manage_guild` to get this information.

## Raises

**Forbidden**

You do not have proper permissions to get the information.

**HTTPException**

An error occurred while fetching the information.

## Returns

**List\[`Invite`]**

The list of invites that are currently active.

<a id="api-guild-create-template"></a>

##### `create_template(self, *, name: str, description: str = MISSING) -> Template`

*coroutine*

Creates a template for the guild.

You must have `Permissions.manage_guild` to do this.

> **Added in version 1.7**

## Parameters

**name: `str`**

The name of the template.

**description: `str`**

The description of the template.

## Returns

**`Template`**

The created template.

<a id="api-guild-create-integration"></a>

##### `create_integration(self, *, type: IntegrationType, id: int) -> None`

*coroutine*

Attaches an integration to the guild.

You must have `Permissions.manage_guild` to do this.

> **Added in version 1.4**

## Parameters

**type: `str`**

The integration type (e.g. Twitch).

**id: `int`**

The integration ID.

## Raises

**Forbidden**

You do not have permission to create the integration.

**HTTPException**

The account could not be found.

<a id="api-guild-integrations"></a>

##### `integrations(self) -> List[Integration]`

*coroutine*

Returns a list of all integrations attached to the guild.

You must have `Permissions.manage_guild` to do this.

> **Added in version 1.4**

## Raises

**Forbidden**

You do not have permission to create the integration.

**HTTPException**

Fetching the integrations failed.

## Returns

**List\[`Integration`]**

The list of integrations that are attached to the guild.

<a id="api-guild-fetch-stickers"></a>

##### `fetch_stickers(self) -> List[GuildSticker]`

*coroutine*

Retrieves a list of all `Sticker`\s for the guild.

> **Added in version 2.0**

> **Note**
> This method is an API call. For general usage, consider `stickers` instead.

## Raises

**HTTPException**

An error occurred fetching the stickers.

## Returns

**List\[`GuildSticker`]**

The retrieved stickers.

<a id="api-guild-fetch-sticker"></a>

##### `fetch_sticker(self, sticker_id: int, /) -> GuildSticker`

*coroutine*

Retrieves a custom `Sticker` from the guild.

> **Added in version 2.0**

> **Note**
> This method is an API call.
> For general usage, consider iterating over `stickers` instead.

## Parameters

**sticker\_id: `int`**

The sticker's ID.

## Raises

**NotFound**

The sticker requested could not be found.

**HTTPException**

An error occurred fetching the sticker.

## Returns

**`GuildSticker`**

The retrieved sticker.

<a id="api-guild-create-sticker"></a>

##### `create_sticker( self, *, name: str, description: str = MISSING, emoji: str, file: File, reason: Optional[str] = None,) -> GuildSticker`

*coroutine*

Creates a `Sticker` for the guild.

You must have `Permissions.manage_emojis_and_stickers` to do this.

> **Added in version 2.0**

## Parameters

**name: `str`**

The sticker name. Must be between 2 and 30 characters.

**description: `str`**

The sticker's description. Can be an empty string or a string between 2 and 100 characters.
Defaults to an empty string if not provided.

**emoji: `str`**

The emoji tag associated with the sticker. This corresponds to the
`tags` field in Discord's API, which is used for emoji autocomplete
and suggestion purposes. For correct rendering in Discord's UI, this
should ideally be a raw Unicode emoji or the string ID
of a custom emoji. Any string up to 200 characters is accepted.

**file: `File`**

The file of the sticker to upload.

**reason: `str`**

The reason for creating this sticker. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to create stickers.

**HTTPException**

An error occurred creating a sticker.

## Returns

**`GuildSticker`**

The created sticker.

<a id="api-guild-delete-sticker"></a>

##### `delete_sticker(self, sticker: Snowflake, /, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the custom `Sticker` from the guild.

You must have `Permissions.manage_emojis_and_stickers` to do this.

> **Added in version 2.0**

## Parameters

**sticker: `abc.Snowflake`**

The sticker you are deleting.

**reason: Optional\[`str`]**

The reason for deleting this sticker. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to delete stickers.

**HTTPException**

An error occurred deleting the sticker.

<a id="api-guild-fetch-scheduled-events"></a>

##### `fetch_scheduled_events(self, *, with_counts: bool = True) -> List[ScheduledEvent]`

*coroutine*

Retrieves a list of all scheduled events for the guild.

> **Added in version 2.0**

## Parameters

**with\_counts: `bool`**

Whether to include the number of users that are subscribed to the event.
Defaults to `True`.

## Raises

**HTTPException**

Retrieving the scheduled events failed.

## Returns

**List\[`ScheduledEvent`]**

The scheduled events.

<a id="api-guild-fetch-scheduled-event"></a>

##### `fetch_scheduled_event(self, scheduled_event_id: int, /, *, with_counts: bool = True) -> ScheduledEvent`

*coroutine*

Retrieves a scheduled event from the guild.

> **Added in version 2.0**

## Parameters

**scheduled\_event\_id: `int`**

The scheduled event ID.

**with\_counts: `bool`**

Whether to include the number of users that are subscribed to the event.
Defaults to `True`.

## Raises

**NotFound**

The scheduled event was not found.

**HTTPException**

Retrieving the scheduled event failed.

## Returns

**`ScheduledEvent`**

The scheduled event.

<a id="api-guild-create-scheduled-event"></a>

##### `create_scheduled_event( self, *, name: str, start_time: datetime.datetime, entity_type: EntityType = MISSING, privacy_level: PrivacyLevel = MISSING, channel: Optional[Snowflake] = MISSING, location: str = MISSING, end_time: datetime.datetime = MISSING, description: str = MISSING, image: bytes = MISSING, reason: Optional[str] = None,) -> ScheduledEvent`

*coroutine*

Creates a scheduled event for the guild.

You must have `Permissions.manage_events` to do this.

> **Added in version 2.0**

## Parameters

**name: `str`**

The name of the scheduled event.

**description: `str`**

The description of the scheduled event.

**channel: Optional\[`abc.Snowflake`]**

The channel to send the scheduled event to. If the channel is
a `StageInstance` or `VoiceChannel` then
it automatically sets the entity type.

Required if `entity_type` is either `EntityType.voice` or
`EntityType.stage_instance`.

**start\_time: `datetime.datetime`**

The scheduled start time of the scheduled event. This must be a timezone-aware
datetime object. Consider using `utils.utcnow`.

**end\_time: `datetime.datetime`**

The scheduled end time of the scheduled event. This must be a timezone-aware
datetime object. Consider using `utils.utcnow`.

Required if the entity type is `EntityType.external`.

**privacy\_level: `PrivacyLevel`**

The privacy level of the scheduled event.

**entity\_type: `EntityType`**

The entity type of the scheduled event. If the channel is a
`StageInstance` or `VoiceChannel` then this is
automatically set to the appropriate entity type. If no channel
is passed then the entity type is assumed to be
`EntityType.external`

**image: `bytes`**

The image of the scheduled event.

**location: `str`**

The location of the scheduled event.

Required if the `entity_type` is `EntityType.external`.

**reason: Optional\[`str`]**

The reason for creating this scheduled event. Shows up on the audit log.

## Raises

**TypeError**

`image` was not a `py:bytes-like object`, or `privacy_level`
was not a `PrivacyLevel`, or `entity_type` was not an
`EntityType`, `status` was not an `EventStatus`,
or an argument was provided that was incompatible with the provided
`entity_type`.

**ValueError**

`start_time` or `end_time` was not a timezone-aware datetime object.

**Forbidden**

You are not allowed to create scheduled events.

**HTTPException**

Creating the scheduled event failed.

## Returns

**`ScheduledEvent`**

The created scheduled event.

<a id="api-guild-fetch-emojis"></a>

##### `fetch_emojis(self) -> List[Emoji]`

*coroutine*

Retrieves all custom `Emoji`\s from the guild.

> **Note**
> This method is an API call. For general usage, consider `emojis` instead.

## Raises

**HTTPException**

An error occurred fetching the emojis.

## Returns

**List\[`Emoji`]**

The retrieved emojis.

<a id="api-guild-fetch-emoji"></a>

##### `fetch_emoji(self, emoji_id: int, /) -> Emoji`

*coroutine*

Retrieves a custom `Emoji` from the guild.

> **Note**
> This method is an API call.
> For general usage, consider iterating over `emojis` instead.

> **Changed in version 2.0**
> `emoji_id` parameter is now positional-only.

## Parameters

**emoji\_id: `int`**

The emoji's ID.

## Raises

**NotFound**

The emoji requested could not be found.

**HTTPException**

An error occurred fetching the emoji.

## Returns

**`Emoji`**

The retrieved emoji.

<a id="api-guild-create-custom-emoji"></a>

##### `create_custom_emoji( self, *, name: str, image: bytes, roles: Collection[Role] = MISSING, reason: Optional[str] = None,) -> Emoji`

*coroutine*

Creates a custom `Emoji` for the guild.

There is currently a limit of 50 static and animated emojis respectively per guild,
unless the guild has the `MORE_EMOJI` feature which extends the limit to 200.

You must have `Permissions.manage_emojis` to do this.

## Parameters

**name: `str`**

The emoji name. Must be at least 2 characters.

**image: `bytes`**

The `py:bytes-like object` representing the image data to use.
Only JPG, PNG and GIF images are supported.

**roles: List\[`Role`]**

A `list` of `Role`\s that can use this emoji. Leave empty to make it available to everyone.

**reason: Optional\[`str`]**

The reason for creating this emoji. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to create emojis.

**HTTPException**

An error occurred creating an emoji.

## Returns

**`Emoji`**

The created emoji.

<a id="api-guild-delete-emoji"></a>

##### `delete_emoji(self, emoji: Snowflake, /, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the custom `Emoji` from the guild.

You must have `Permissions.manage_emojis` to do this.

> **Changed in version 2.0**
> `emoji` parameter is now positional-only.

## Parameters

**emoji: `abc.Snowflake`**

The emoji you are deleting.

**reason: Optional\[`str`]**

The reason for deleting this emoji. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to delete emojis.

**HTTPException**

An error occurred deleting the emoji.

<a id="api-guild-fetch-roles"></a>

##### `fetch_roles(self) -> List[Role]`

*coroutine*

Retrieves all `Role` that the guild has.

> **Note**
> This method is an API call. For general usage, consider `roles` instead.

> **Added in version 1.3**

## Raises

**HTTPException**

Retrieving the roles failed.

## Returns

**List\[`Role`]**

All roles in the guild.

<a id="api-guild-fetch-role"></a>

##### `fetch_role(self, role_id: int, /) -> Role`

*coroutine*

Retrieves a `Role` with the specified ID.

> **Added in version 2.5**

> **Note**
> This method is an API call. For general usage, consider `get_role` instead.

## Parameters

**role\_id: `int`**

The role's ID.

## Raises

**NotFound**

The role requested could not be found.

**HTTPException**

An error occurred fetching the role.

## Returns

**`Role`**

The retrieved role.

<a id="api-guild-create-role"></a>

##### `create_role( self, *, name: str = MISSING, permissions: Permissions = MISSING, color: Union[Colour, int] = MISSING, colour: Union[Colour, int] = MISSING, hoist: bool = MISSING, display_icon: Union[bytes, str] = MISSING, mentionable: bool = MISSING, reason: Optional[str] = None, secondary_color: Optional[Union[Colour, int]] = MISSING, tertiary_color: Optional[Union[Colour, int]] = MISSING, secondary_colour: Optional[Union[Colour, int]] = MISSING, tertiary_colour: Optional[Union[Colour, int]] = MISSING,) -> Role`

*coroutine*

Creates a `Role` for the guild.

All fields are optional.

You must have `Permissions.manage_roles` to do this.

> **Changed in version 1.6**
> Can now pass `int` to `colour` keyword-only parameter.

> **Added in version 2.0**
> The `display_icon` keyword-only parameter was added.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

> **Changed in version 2.6**
> The `colour` and `color` parameters now set the role's primary color.

## Parameters

**name: `str`**

The role name. Defaults to 'new role'.

**permissions: `Permissions`**

The permissions to have. Defaults to no permissions.

**colour: Union\[`Colour`, `int`]**

The colour for the role. Defaults to `Colour.default`.
This is aliased to `color` as well.

**secondary\_colour: Optional\[Union\[`Colour`, `int`]]**

The secondary colour for the role.

> **Added in version 2.6**

**tertiary\_colour: Optional\[Union\[`Colour`, `int`]]**

The tertiary colour for the role. Can only be used for the holographic role preset,
which is `(11127295, 16759788, 16761760)`

> **Added in version 2.6**

**hoist: `bool`**

Indicates if the role should be shown separately in the member list.
Defaults to `False`.

**display\_icon: Union\[`bytes`, `str`]**

A `py:bytes-like object` representing the icon
or `str` representing unicode emoji that should be used as a role icon.
Only PNG/JPEG is supported.
This is only available to guilds that contain `ROLE_ICONS` in `features`.

**mentionable: `bool`**

Indicates if the role should be mentionable by others.
Defaults to `False`.

**reason: Optional\[`str`]**

The reason for creating this role. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create the role.

**HTTPException**

Creating the role failed.

**TypeError**

An invalid keyword argument was given.

## Returns

**`Role`**

The newly created role.

<a id="api-guild-edit-role-positions"></a>

##### `edit_role_positions(self, positions: Mapping[Snowflake, int], *, reason: Optional[str] = None) -> List[Role]`

*coroutine*

Bulk edits a list of `Role` in the guild.

You must have `Permissions.manage_roles` to do this.

> **Added in version 1.4**

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Example

```python3
positions = {
    bots_role: 1, # penultimate role
    tester_role: 2,
    admin_role: 6
}

await guild.edit_role_positions(positions=positions)
```

## Parameters

**positions**

A `dict` of `Role` to `int` to change the positions
of each given role.

**reason: Optional\[`str`]**

The reason for editing the role positions. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to move the roles.

**HTTPException**

Moving the roles failed.

**TypeError**

An invalid keyword argument was given.

## Returns

**List\[`Role`]**

A list of all the roles in the guild.

<a id="api-guild-role-member-counts"></a>

##### `role_member_counts(self) -> Dict[Union[Object, Role], int]`

*coroutine*

Retrieves a mapping of roles to the number of members that have it.

You must have `Permissions.manage_roles` to do this.

> **Added in version 2.7**

## Raises

**Forbidden**

You do not have permissions to view the role member counts.

**HTTPException**

Retrieving the role member counts failed.

## Returns

**Dict\[Union\[`Object`, `Role`], `int`]**

A mapping of roles to the number of members that have it.
If a role is not found in the cache, it will be represented as an `Object`
instead of a `Role`.

<a id="api-guild-welcome-screen"></a>

##### `welcome_screen(self) -> WelcomeScreen`

*coroutine*

Returns the guild's welcome screen.

The guild must have `COMMUNITY` in `Guild.features`.

You must have `Permissions.manage_guild` to do this.as well.

> **Added in version 2.0**

## Raises

**Forbidden**

You do not have the proper permissions to get this.

**HTTPException**

Retrieving the welcome screen failed.

## Returns

**`WelcomeScreen`**

The welcome screen.

<a id="api-guild-edit-welcome-screen"></a>

##### `edit_welcome_screen( self, *, description: str = MISSING, welcome_channels: List[WelcomeChannel] = MISSING, enabled: bool = MISSING, reason: Optional[str] = None,) -> WelcomeScreen`

*coroutine*

A shorthand method of `WelcomeScreen.edit` without needing
to fetch the welcome screen beforehand.

The guild must have `COMMUNITY` in `Guild.features`.

You must have `Permissions.manage_guild` to do this as well.

> **Added in version 2.0**

## Returns

**`WelcomeScreen`**

The edited welcome screen.

<a id="api-guild-kick"></a>

##### `kick(self, user: Snowflake, *, reason: Optional[str] = None) -> None`

*coroutine*

Kicks a user from the guild.

The user must meet the `abc.Snowflake` abc.

You must have `Permissions.kick_members` to do this.

## Parameters

**user: `abc.Snowflake`**

The user to kick from the guild.

**reason: Optional\[`str`]**

The reason the user got kicked.

## Raises

**Forbidden**

You do not have the proper permissions to kick.

**HTTPException**

Kicking failed.

<a id="api-guild-ban"></a>

##### `ban( self, user: Snowflake, *, reason: Optional[str] = None, delete_message_days: int = MISSING, delete_message_seconds: int = MISSING,) -> None`

*coroutine*

Bans a user from the guild.

The user must meet the `abc.Snowflake` abc.

You must have `Permissions.ban_members` to do this.

## Parameters

**user: `abc.Snowflake`**

The user to ban from the guild.

**delete\_message\_days: `int`**

The number of days worth of messages to delete from the user
in the guild. The minimum is 0 and the maximum is 7.
Defaults to 1 day if neither `delete_message_days` nor
`delete_message_seconds` are passed.

> **Deprecated in version 2.1**

**delete\_message\_seconds: `int`**

The number of seconds worth of messages to delete from the user
in the guild. The minimum is 0 and the maximum is 604800 (7 days).
Defaults to 1 day if neither `delete_message_days` nor
`delete_message_seconds` are passed.

> **Added in version 2.1**

**reason: Optional\[`str`]**

The reason the user got banned.

## Raises

**NotFound**

The requested user was not found.

**Forbidden**

You do not have the proper permissions to ban.

**HTTPException**

Banning failed.

**TypeError**

You specified both `delete_message_days` and `delete_message_seconds`.

<a id="api-guild-unban"></a>

##### `unban(self, user: Snowflake, *, reason: Optional[str] = None) -> None`

*coroutine*

Unbans a user from the guild.

The user must meet the `abc.Snowflake` abc.

You must have `Permissions.ban_members` to do this.

## Parameters

**user: `abc.Snowflake`**

The user to unban.

**reason: Optional\[`str`]**

The reason for doing this action. Shows up on the audit log.

## Raises

**NotFound**

The requested unban was not found.

**Forbidden**

You do not have the proper permissions to unban.

**HTTPException**

Unbanning failed.

<a id="api-guild-bulk-ban"></a>

##### `bulk_ban( self, users: Iterable[Snowflake], *, reason: Optional[str] = None, delete_message_seconds: int = 86400,) -> BulkBanResult`

*coroutine*

Bans multiple users from the guild.

The users must meet the `abc.Snowflake` abc.

You must have `Permissions.ban_members` and `Permissions.manage_guild` to do this.

> **Added in version 2.4**

## Parameters

**users: Iterable\[`abc.Snowflake`]**

The users to ban from the guild, up to 200 users.

**delete\_message\_seconds: `int`**

The number of seconds worth of messages to delete from the user
in the guild. The minimum is 0 and the maximum is 604800 (7 days).
Defaults to 1 day.

**reason: Optional\[`str`]**

The reason the users got banned.

## Raises

**Forbidden**

You do not have the proper permissions to ban.

**HTTPException**

Banning failed.

## Returns

**`BulkBanResult`**

The result of the bulk ban operation.

<a id="api-guild-vanity-url"></a>

##### `vanity_url(self) -> Optional[str]`

Optional\[`str`]: The Discord vanity invite URL for this guild, if available.

> **Added in version 2.0**

<a id="api-guild-vanity-invite"></a>

##### `vanity_invite(self) -> Optional[Invite]`

*coroutine*

Returns the guild's special vanity invite.

The guild must have `VANITY_URL` in `Guild.features`.

You must have `Permissions.manage_guild` to do this as well.

## Raises

**Forbidden**

You do not have the proper permissions to get this.

**HTTPException**

Retrieving the vanity invite failed.

## Returns

**Optional\[`Invite`]**

The special vanity invite. If `None` then the guild does not
have a vanity invite set.

<a id="api-guild-audit-logs"></a>

##### `audit_logs( self, *, limit: Optional[int] = 100, before: SnowflakeTime = MISSING, after: SnowflakeTime = MISSING, oldest_first: bool = MISSING, user: Snowflake = MISSING, action: AuditLogAction = MISSING,) -> AsyncIterator[AuditLogEntry]`

Returns an `asynchronous iterator` that enables receiving the guild's audit logs.

You must have `Permissions.view_audit_log` to do this.

## Examples

Getting the first 100 entries: :

```python
async for entry in guild.audit_logs(limit=100):
    print(f'{entry.user} did {entry.action} to {entry.target}')
```

Getting entries for a specific action: :

```python
async for entry in guild.audit_logs(action=discord.AuditLogAction.ban):
    print(f'{entry.user} banned {entry.target}')
```

Getting entries made by a specific user: :

```python
entries = [entry async for entry in guild.audit_logs(limit=None, user=guild.me)]
await channel.send(f'I made {len(entries)} moderation actions.')
```

## Parameters

**limit: Optional\[`int`]**

The number of entries to retrieve. If `None` retrieve all entries.

**before: Union\[`abc.Snowflake`, `datetime.datetime`]**

Retrieve entries before this date or entry.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**after: Union\[`abc.Snowflake`, `datetime.datetime`]**

Retrieve entries after this date or entry.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**oldest\_first: `bool`**

If set to `True`, return entries in oldest->newest order. Defaults to `True` if
`after` is specified, otherwise `False`.

**user: `abc.Snowflake`**

The moderator to filter entries from.

**action: `AuditLogAction`**

The action to filter with.

## Raises

**Forbidden**

You are not allowed to fetch audit logs

**HTTPException**

An error occurred while fetching the audit logs.

## Yields

**`AuditLogEntry`**

The audit log entry.

<a id="api-guild-widget"></a>

##### `widget(self) -> Widget`

*coroutine*

Returns the widget of the guild.

> **Note**
> The guild must have the widget enabled to get this information.

## Raises

**Forbidden**

The widget for this guild is disabled.

**HTTPException**

Retrieving the widget failed.

## Returns

**`Widget`**

The guild's widget.

<a id="api-guild-edit-widget"></a>

##### `edit_widget( self, *, enabled: bool = MISSING, channel: Optional[Snowflake] = MISSING, reason: Optional[str] = None,) -> None`

*coroutine*

Edits the widget of the guild. This can also be done with `Guild.edit`.

You must have `Permissions.manage_guild` to do this.

> **Added in version 2.0**

## Parameters

**enabled: `bool`**

Whether to enable the widget for the guild.

**channel: Optional\[`discord.abc.Snowflake`]**

The new widget channel. `None` removes the widget channel.

**reason: Optional\[`str`]**

The reason for editing this widget. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permission to edit the widget.

**HTTPException**

Editing the widget failed.

<a id="api-guild-chunk"></a>

##### `chunk(self, *, cache: bool = True) -> List[Member]`

*coroutine*

Requests all members that belong to this guild. In order to use this,
`Intents.members` must be enabled.

This is a websocket operation and can be slow.

> **Added in version 1.5**

## Parameters

**cache: `bool`**

Whether to cache the members as well.

## Raises

**ClientException**

The members intent is not enabled.

## Returns

**List\[`Member`]**

The list of members in the guild.

<a id="api-guild-query-members"></a>

##### `query_members( self, query: Optional[str] = None, *, limit: int = 5, user_ids: Optional[List[int]] = None, presences: bool = False, cache: bool = True,) -> List[Member]`

*coroutine*

Request members of this guild whose username or nickname starts with the given query.
This is a websocket operation.

> **Added in version 1.3**

## Parameters

**query: Optional\[`str`]**

The string that the username or nickname should start with.

**limit: `int`**

The maximum number of members to send back. This must be
a number between 5 and 100.

**presences: `bool`**

Whether to request for presences to be provided. This defaults
to `False`.

> **Added in version 1.6**

**cache: `bool`**

Whether to cache the members internally. This makes operations
such as `get_member` work for those that matched.

**user\_ids: Optional\[List\[`int`]]**

List of user IDs to search for. If the user ID is not in the guild then it won't be returned.

> **Added in version 1.4**

## Raises

**asyncio.TimeoutError**

The query timed out waiting for the members.

**ValueError**

Invalid parameters were passed to the function

**ClientException**

The presences intent is not enabled.

## Returns

**List\[`Member`]**

The list of members that have matched the query.

<a id="api-guild-change-voice-state"></a>

##### `change_voice_state( self, *, channel: Optional[abc.Snowflake], self_mute: bool = False, self_deaf: bool = False) -> None`

*coroutine*

Changes client's voice state in the guild.

> **Added in version 1.4**

## Parameters

**channel: Optional\[`abc.Snowflake`]**

Channel the client wants to join. Use `None` to disconnect.

**self\_mute: `bool`**

Indicates if the client should be self-muted.

**self\_deaf: `bool`**

Indicates if the client should be self-deafened.

<a id="api-guild-fetch-automod-rule"></a>

##### `fetch_automod_rule(self, automod_rule_id: int, /) -> AutoModRule`

*coroutine*

Fetches an active automod rule from the guild.

You must have `Permissions.manage_guild` to do this.

> **Added in version 2.0**

## Parameters

**automod\_rule\_id: `int`**

The ID of the automod rule to fetch.

## Raises

**Forbidden**

You do not have permission to view the automod rule.

**NotFound**

The automod rule does not exist within this guild.

## Returns

**`AutoModRule`**

The automod rule that was fetched.

<a id="api-guild-fetch-automod-rules"></a>

##### `fetch_automod_rules(self) -> List[AutoModRule]`

*coroutine*

Fetches all automod rules from the guild.

You must have `Permissions.manage_guild` to do this.

> **Added in version 2.0**

## Raises

**Forbidden**

You do not have permission to view the automod rule.

**NotFound**

There are no automod rules within this guild.

## Returns

**List\[`AutoModRule`]**

The automod rules that were fetched.

<a id="api-guild-create-automod-rule"></a>

##### `create_automod_rule( self, *, name: str, event_type: AutoModRuleEventType, trigger: AutoModTrigger, actions: List[AutoModRuleAction], enabled: bool = False, exempt_roles: Sequence[Snowflake] = MISSING, exempt_channels: Sequence[Snowflake] = MISSING, reason: str = MISSING,) -> AutoModRule`

*coroutine*

Create an automod rule.

You must have `Permissions.manage_guild` to do this.

> **Added in version 2.0**

## Parameters

**name: `str`**

The name of the automod rule.

**event\_type: `AutoModRuleEventType`**

The type of event that the automod rule will trigger on.

**trigger: `AutoModTrigger`**

The trigger that will trigger the automod rule.

**actions: List\[`AutoModRuleAction`]**

The actions that will be taken when the automod rule is triggered.

**enabled: `bool`**

Whether the automod rule is enabled.
Defaults to `False`.

**exempt\_roles: Sequence\[`abc.Snowflake`]**

A list of roles that will be exempt from the automod rule.

**exempt\_channels: Sequence\[`abc.Snowflake`]**

A list of channels that will be exempt from the automod rule.

**reason: `str`**

The reason for creating this automod rule. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create an automod rule.

**HTTPException**

Creating the automod rule failed.

## Returns

**`AutoModRule`**

The automod rule that was created.

<a id="api-guild-invites-paused-until"></a>

##### `invites_paused_until(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: If invites are paused, returns when
invites will get enabled in UTC, otherwise returns None.

> **Added in version 2.4**

<a id="api-guild-dms-paused-until"></a>

##### `dms_paused_until(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: If DMs are paused, returns when DMs
will get enabled in UTC, otherwise returns None.

> **Added in version 2.4**

<a id="api-guild-dm-spam-detected-at"></a>

##### `dm_spam_detected_at(self) -> Optional[datetime.datetime]`

`datetime.datetime`: Returns the time when DM spam was detected in the guild.

> **Added in version 2.5**

<a id="api-guild-raid-detected-at"></a>

##### `raid_detected_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: Returns the time when a raid was detected in the guild.

> **Added in version 2.5**

<a id="api-guild-invites-paused"></a>

##### `invites_paused(self) -> bool`

`bool`: Whether invites are paused in the guild.

> **Added in version 2.4**

<a id="api-guild-dms-paused"></a>

##### `dms_paused(self) -> bool`

`bool`: Whether DMs are paused in the guild.

> **Added in version 2.4**

<a id="api-guild-is-dm-spam-detected"></a>

##### `is_dm_spam_detected(self) -> bool`

`bool`: Whether DM spam was detected in the guild.

> **Added in version 2.5**

<a id="api-guild-is-raid-detected"></a>

##### `is_raid_detected(self) -> bool`

`bool`: Whether a raid was detected in the guild.

> **Added in version 2.5**

<a id="api-guild-fetch-soundboard-sound"></a>

##### `fetch_soundboard_sound(self, sound_id: int, /) -> SoundboardSound`

*coroutine*

Retrieves a `SoundboardSound` with the specified ID.

> **Added in version 2.5**

> **Note**
> Using this, in order to receive `SoundboardSound.user`, you must have `Permissions.create_expressions`
> or `Permissions.manage_expressions`.

> **Note**
> This method is an API call. For general usage, consider `get_soundboard_sound` instead.

## Raises

**NotFound**

The sound requested could not be found.

**HTTPException**

Retrieving the sound failed.

## Returns

**`SoundboardSound`**

The retrieved sound.

<a id="api-guild-fetch-soundboard-sounds"></a>

##### `fetch_soundboard_sounds(self) -> List[SoundboardSound]`

*coroutine*

Retrieves a list of all soundboard sounds for the guild.

> **Added in version 2.5**

> **Note**
> Using this, in order to receive `SoundboardSound.user`, you must have `Permissions.create_expressions`
> or `Permissions.manage_expressions`.

> **Note**
> This method is an API call. For general usage, consider `soundboard_sounds` instead.

## Raises

**HTTPException**

Retrieving the sounds failed.

## Returns

**List\[`SoundboardSound`]**

The retrieved soundboard sounds.

<a id="api-guild-create-soundboard-sound"></a>

##### `create_soundboard_sound( self, *, name: str, sound: bytes, volume: float = 1, emoji: Optional[EmojiInputType] = None, reason: Optional[str] = None,) -> SoundboardSound`

*coroutine*

Creates a `SoundboardSound` for the guild.
You must have `Permissions.create_expressions` to do this.

> **Added in version 2.5**

## Parameters

**name: `str`**

The name of the sound. Must be between 2 and 32 characters.

**sound: `bytes`**

The `py:bytes-like object` representing the sound data.
Only MP3 and OGG sound files that don't exceed the duration of 5.2s are supported.

**volume: `float`**

The volume of the sound. Must be between 0 and 1. Defaults to `1`.

**emoji: Optional\[Union\[`Emoji`, `PartialEmoji`, `str`]]**

The emoji of the sound.

**reason: Optional\[`str`]**

The reason for creating the sound. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create a soundboard sound.

**HTTPException**

Creating the soundboard sound failed.

## Returns

**`SoundboardSound`**

The newly created soundboard sound.

<a id="api-guild-onboarding"></a>

##### `onboarding(self) -> Onboarding`

*coroutine*

Fetches the onboarding configuration for this guild.

> **Added in version 2.6**

## Returns

**`Onboarding`**

The onboarding configuration that was fetched.

<a id="api-guild-edit-onboarding"></a>

##### `edit_onboarding( self, *, prompts: List[OnboardingPrompt] = MISSING, default_channels: List[Snowflake] = MISSING, enabled: bool = MISSING, mode: OnboardingMode = MISSING, reason: str = MISSING,) -> Onboarding`

*coroutine*

Edits the onboarding configuration for this guild.

You must have `Permissions.manage_guild` and
`Permissions.manage_roles` to do this.

> **Added in version 2.6**

## Parameters

**prompts: List\[`OnboardingPrompt`]**

The prompts that will be shown to new members.
This overrides the existing prompts and its options.

**default\_channels: List\[`abc.Snowflake`]**

The channels that will be used as the default channels for new members.
This overrides the existing default channels.

**enabled: `bool`**

Whether the onboarding configuration is enabled.
This overrides the existing enabled state.

**mode: `OnboardingMode`**

The mode that will be used for the onboarding configuration.

**reason: `str`**

The reason for editing the onboarding configuration. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to edit the onboarding configuration.

**HTTPException**

Editing the onboarding configuration failed.

## Returns

**`Onboarding`**

The new onboarding configuration.

<a id="class-banentry"></a>

#### `BanEntry`

A namedtuple which represents a ban returned from `Guild.bans`.

<a id="attribute-reason"></a>

##### `reason`

The reason this user was banned.

- **Type:** Optional\[`str`]

<a id="attribute-user"></a>

##### `user`

The `User` that was banned.

- **Type:** `User`

<a id="class-bulkbanresult"></a>

#### `BulkBanResult`

A namedtuple which represents the result returned from `Guild.bulk_ban`.

> **Added in version 2.4**

<a id="attribute-banned"></a>

##### `banned`

The list of users that were banned. The inner `Object` of the list
has the `Object.type` set to `User`.

- **Type:** List\[`Object`]

<a id="attribute-failed"></a>

##### `failed`

The list of users that could not be banned. The inner `Object` of the list
has the `Object.type` set to `User`.

- **Type:** List\[`Object`]

### GuildPreview

<a id="api-guildpreview"></a>

#### `GuildPreview(Hashable)`

Represents a preview of a Discord guild.

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two guild previews are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two guild previews are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the guild's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the guild's name.

## Attributes

**name: `str`**

The guild preview's name.

**id: `int`**

The guild preview's ID.

**features: List\[`str`]**

A list of features the guild has. See `Guild.features` for more information.

**description: Optional\[`str`]**

The guild preview's description.

**emojis: Tuple\[`Emoji`, ...]**

All emojis that the guild owns.

**stickers: Tuple\[`GuildSticker`, ...]**

All stickers that the guild owns.

**approximate\_member\_count: `int`**

The approximate number of members in the guild.

**approximate\_presence\_count: `int`**

The approximate number of members currently active in in the guild. Offline members are excluded.

<a id="api-guildpreview-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the guild's creation time in UTC.

<a id="api-guildpreview-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's icon asset, if available.

<a id="api-guildpreview-splash"></a>

##### `splash(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's invite splash asset, if available.

<a id="api-guildpreview-discovery-splash"></a>

##### `discovery_splash(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's discovery splash asset, if available.

### ScheduledEvent

<a id="api-scheduledevent"></a>

#### `ScheduledEvent(Hashable)`

Represents a scheduled event in a guild.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two scheduled events are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two scheduled events are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the scheduled event's hash.

## Attributes

**id: `int`**

The scheduled event's ID.

**name: `str`**

The name of the scheduled event.

**description: Optional\[`str`]**

The description of the scheduled event.

**entity\_type: `EntityType`**

The type of entity this event is for.

**entity\_id: Optional\[`int`]**

The ID of the entity this event is for if available.

**start\_time: `datetime.datetime`**

The time that the scheduled event will start in UTC.

**end\_time: Optional\[`datetime.datetime`]**

The time that the scheduled event will end in UTC.

**privacy\_level: `PrivacyLevel`**

The privacy level of the scheduled event.

**status: `EventStatus`**

The status of the scheduled event.

**user\_count: `int`**

The number of users subscribed to the scheduled event.

**creator: Optional\[`User`]**

The user that created the scheduled event.

**creator\_id: Optional\[`int`]**

The ID of the user that created the scheduled event.

> **Added in version 2.2**

**location: Optional\[`str`]**

The location of the scheduled event.

<a id="api-scheduledevent-cover-image"></a>

##### `cover_image(self) -> Optional[Asset]`

Optional\[`Asset`]: The scheduled event's cover image.

<a id="api-scheduledevent-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild this scheduled event is in.

<a id="api-scheduledevent-channel"></a>

##### `channel(self) -> Optional[Union[VoiceChannel, StageChannel]]`

Optional\[Union\[`VoiceChannel`, `StageChannel`]]: The channel this scheduled event is in.

<a id="api-scheduledevent-url"></a>

##### `url(self) -> str`

`str`: The url for the scheduled event.

<a id="api-scheduledevent-start"></a>

##### `start(self, *, reason: Optional[str] = None) -> ScheduledEvent`

*coroutine*

Starts the scheduled event.

Shorthand for:

```python3
await event.edit(status=EventStatus.active)
```

## Parameters

**reason: Optional\[`str`]**

The reason for starting the scheduled event.

## Raises

**ValueError**

The scheduled event has already started or has ended.

**Forbidden**

You do not have the proper permissions to start the scheduled event.

**HTTPException**

The scheduled event could not be started.

## Returns

**`ScheduledEvent`**

The scheduled event that was started.

<a id="api-scheduledevent-end"></a>

##### `end(self, *, reason: Optional[str] = None) -> ScheduledEvent`

*coroutine*

Ends the scheduled event.

Shorthand for:

```python3
await event.edit(status=EventStatus.completed)
```

## Parameters

**reason: Optional\[`str`]**

The reason for ending the scheduled event.

## Raises

**ValueError**

The scheduled event is not active or has already ended.

**Forbidden**

You do not have the proper permissions to end the scheduled event.

**HTTPException**

The scheduled event could not be ended.

## Returns

**`ScheduledEvent`**

The scheduled event that was ended.

<a id="api-scheduledevent-cancel"></a>

##### `cancel(self, *, reason: Optional[str] = None) -> ScheduledEvent`

*coroutine*

Cancels the scheduled event.

Shorthand for:

```python3
await event.edit(status=EventStatus.cancelled)
```

## Parameters

**reason: Optional\[`str`]**

The reason for cancelling the scheduled event.

## Raises

**ValueError**

The scheduled event is already running.

**Forbidden**

You do not have the proper permissions to cancel the scheduled event.

**HTTPException**

The scheduled event could not be cancelled.

## Returns

**`ScheduledEvent`**

The scheduled event that was cancelled.

<a id="api-scheduledevent-edit"></a>

##### `edit( self, *, name: str = MISSING, description: str = MISSING, channel: Optional[Snowflake] = MISSING, start_time: datetime = MISSING, end_time: Optional[datetime] = MISSING, privacy_level: PrivacyLevel = MISSING, entity_type: EntityType = MISSING, status: EventStatus = MISSING, image: bytes = MISSING, location: str = MISSING, reason: Optional[str] = None,) -> ScheduledEvent`

*coroutine*

Edits the scheduled event.

You must have `Permissions.manage_events` to do this.

## Parameters

**name: `str`**

The name of the scheduled event.

**description: `str`**

The description of the scheduled event.

**channel: Optional\[`discord.abc.Snowflake`]**

The channel to put the scheduled event in. If the channel is
a `StageInstance` or `VoiceChannel` then
it automatically sets the entity type.

Required if the entity type is either `EntityType.voice` or
`EntityType.stage_instance`.

**start\_time: `datetime.datetime`**

The time that the scheduled event will start. This must be a timezone-aware
datetime object. Consider using `utils.utcnow`.

**end\_time: Optional\[`datetime.datetime`]**

The time that the scheduled event will end. This must be a timezone-aware
datetime object. Consider using `utils.utcnow`.

If the entity type is either `EntityType.voice` or
`EntityType.stage_instance`, the end\_time can be cleared by
passing `None`.

Required if the entity type is `EntityType.external`.

**privacy\_level: `PrivacyLevel`**

The privacy level of the scheduled event.

**entity\_type: `EntityType`**

The new entity type. If the channel is a `StageInstance`
or `VoiceChannel` then this is automatically set to the
appropriate entity type.

**status: `EventStatus`**

The new status of the scheduled event.

**image: Optional\[`bytes`]**

The new image of the scheduled event or `None` to remove the image.

**location: `str`**

The new location of the scheduled event.

Required if the entity type is `EntityType.external`.

**reason: Optional\[`str`]**

The reason for editing the scheduled event. Shows up on the audit log.

## Raises

**TypeError**

`image` was not a `py:bytes-like object`, or `privacy_level`
was not a `PrivacyLevel`, or `entity_type` was not an
`EntityType`, `status` was not an `EventStatus`, or
an argument was provided that was incompatible with the scheduled event's
entity type.

**ValueError**

`start_time` or `end_time` was not a timezone-aware datetime object.

**Forbidden**

You do not have permissions to edit the scheduled event.

**HTTPException**

Editing the scheduled event failed.

## Returns

**`ScheduledEvent`**

The edited scheduled event.

<a id="api-scheduledevent-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the scheduled event.

You must have `Permissions.manage_events` to do this.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting the scheduled event. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to delete the scheduled event.

**HTTPException**

Deleting the scheduled event failed.

<a id="api-scheduledevent-users"></a>

##### `users( self, *, limit: Optional[int] = None, before: Optional[Snowflake] = None, after: Optional[Snowflake] = None, oldest_first: bool = MISSING,) -> AsyncIterator[User]`

*coroutine*

Retrieves all `User` that are subscribed to this event.

This requires `Intents.members` to get information about members
other than yourself.

## Raises

**HTTPException**

Retrieving the members failed.

## Returns

**List\[`User`]**

All subscribed users of this event.

### Integration

<a id="api-integration"></a>

#### `Integration`

Represents a guild integration.

> **Added in version 1.4**

## Attributes

**id: `int`**

The integration ID.

**name: `str`**

The integration name.

**guild: `Guild`**

The guild of the integration.

**type: `str`**

The integration type (i.e. Twitch).

**enabled: `bool`**

Whether the integration is currently enabled.

**account: `IntegrationAccount`**

The account linked to this integration.

**user: `User`**

The user that added this integration.

**scopes: List\[`str`]**

The OAuth2 scopes the application has been authorized for.

> **Added in version 2.7**

<a id="api-integration-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the integration.

You must have `Permissions.manage_guild` to do this.

## Parameters

**reason: `str`**

The reason the integration was deleted. Shows up on the audit log.

> **Added in version 2.0**

## Raises

**Forbidden**

You do not have permission to delete the integration.

**HTTPException**

Deleting the integration failed.

<a id="api-integrationaccount"></a>

#### `IntegrationAccount`

Represents an integration account.

> **Added in version 1.4**

## Attributes

**id: `str`**

The account ID.

**name: `str`**

The account name.

<a id="api-botintegration"></a>

#### `BotIntegration(Integration)`

Represents a bot integration on discord.

> **Added in version 2.0**

## Attributes

**id: `int`**

The integration ID.

**name: `str`**

The integration name.

**guild: `Guild`**

The guild of the integration.

**type: `str`**

The integration type (i.e. Twitch).

**enabled: `bool`**

Whether the integration is currently enabled.

**user: `User`**

The user that added this integration.

**account: `IntegrationAccount`**

The integration account information.

**application: `IntegrationApplication`**

The application tied to this integration.

**scopes: List\[`str`]**

The OAuth2 scopes the application has been authorized for.

> **Added in version 2.7**

<a id="api-integrationapplication"></a>

#### `IntegrationApplication`

Represents an application for a bot integration.

> **Added in version 2.0**

## Attributes

**id: `int`**

The ID for this application.

**name: `str`**

The application's name.

**icon: Optional\[`str`]**

The application's icon hash.

**description: `str`**

The application's description. Can be an empty string.

**summary: `str`**

The summary of the application. Can be an empty string.

**user: Optional\[`User`]**

The bot user on this application.

<a id="api-streamintegration"></a>

#### `StreamIntegration(Integration)`

Represents a stream integration for Twitch or YouTube.

> **Added in version 2.0**

## Attributes

**id: `int`**

The integration ID.

**name: `str`**

The integration name.

**guild: `Guild`**

The guild of the integration.

**type: `str`**

The integration type (i.e. Twitch).

**enabled: `bool`**

Whether the integration is currently enabled.

**syncing: `bool`**

Where the integration is currently syncing.

**enable\_emoticons: Optional\[`bool`]**

Whether emoticons should be synced for this integration (currently twitch only).

**expire\_behaviour: `ExpireBehaviour`**

The behaviour of expiring subscribers. Aliased to `expire_behavior` as well.

**expire\_grace\_period: `int`**

The grace period (in days) for expiring subscribers.

**user: `User`**

The user for the integration.

**account: `IntegrationAccount`**

The integration account information.

**synced\_at: `datetime.datetime`**

An aware UTC datetime representing when the integration was last synced.

**scopes: List\[`str`]**

The OAuth2 scopes the application has been authorized for.

> **Added in version 2.7**

<a id="api-streamintegration-expire-behavior"></a>

##### `expire_behavior(self) -> ExpireBehaviour`

`ExpireBehaviour`: An alias for `expire_behaviour`.

<a id="api-streamintegration-role"></a>

##### `role(self) -> Optional[Role]`

Optional\[`Role`] The role which the integration uses for subscribers.

<a id="api-streamintegration-edit"></a>

##### `edit( self, *, expire_behaviour: ExpireBehaviour = MISSING, expire_grace_period: int = MISSING, enable_emoticons: bool = MISSING,) -> None`

*coroutine*

Edits the integration.

You must have `Permissions.manage_guild` to do this.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**expire\_behaviour: `ExpireBehaviour`**

The behaviour when an integration subscription lapses. Aliased to `expire_behavior` as well.

**expire\_grace\_period: `int`**

The period (in days) where the integration will ignore lapsed subscriptions.

**enable\_emoticons: `bool`**

Where emoticons should be synced for this integration (currently twitch only).

## Raises

**Forbidden**

You do not have permission to edit the integration.

**HTTPException**

Editing the guild failed.

**TypeError**

`expire_behaviour` did not receive a `ExpireBehaviour`.

<a id="api-streamintegration-sync"></a>

##### `sync(self) -> None`

*coroutine*

Syncs the integration.

You must have `Permissions.manage_guild` to do this.

## Raises

**Forbidden**

You do not have permission to sync the integration.

**HTTPException**

Syncing the integration failed.

<a id="api-partialintegration"></a>

#### `PartialIntegration`

Represents a partial guild integration.

> **Added in version 2.0**

## Attributes

**id: `int`**

The integration ID.

**name: `str`**

The integration name.

**guild: `Guild`**

The guild of the integration.

**type: `str`**

The integration type (i.e. Twitch).

**account: `IntegrationAccount`**

The account linked to this integration.

**application\_id: Optional\[`int`]**

The id of the application this integration belongs to.

### Member

<a id="api-member"></a>

#### `Member(discord.abc.Messageable, _UserTag)`

Represents a Discord member to a `Guild`.

This implements a lot of the functionality of `User`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two members are equal.
Note that this works with `User` instances too.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two members are not equal.
Note that this works with `User` instances too.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the member's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the member's handle (e.g. `name` or `name#discriminator`).

## Attributes

**joined\_at: Optional\[`datetime.datetime`]**

An aware datetime object that specifies the date and time in UTC that the member joined the guild.
If the member left and rejoined the guild, this will be the latest date.
This can be `None`, such as when the member is a guest.

**activities: Tuple\[Union\[`BaseActivity`, `Spotify`]]**

The activities that the user is currently doing.

> **Note**
> Due to a Discord API limitation, a user's Spotify activity may not appear
> if they are listening to a song with a title longer
> than 128 characters. See [GH-1738](https://github.com/Rapptz/discord.py/issues/1738) for more information.

**guild: `Guild`**

The guild that the member belongs to.

**nick: Optional\[`str`]**

The guild specific nickname of the user. Takes precedence over the global name.

**pending: `bool`**

Whether the member is pending member verification.

> **Added in version 1.6**

**premium\_since: Optional\[`datetime.datetime`]**

An aware datetime object that specifies the date and time in UTC when the member used their
"Nitro boost" on the guild, if available. This could be `None`.

**timed\_out\_until: Optional\[`datetime.datetime`]**

An aware datetime object that specifies the date and time in UTC that the member's time out will expire.
This will be set to `None` or a time in the past if the user is not timed out.

> **Added in version 2.0**

**client\_status: `ClientStatus`**

Model which holds information about the status of the member on various clients/platforms via presence updates.

> **Added in version 2.5**

<a id="api-member-status"></a>

##### `status(self) -> Status`

`Status`: The member's overall status. If the value is unknown, then it will be a `str` instead.

<a id="api-member-raw-status"></a>

##### `raw_status(self) -> str`

`str`: The member's overall status as a string value.

> **Added in version 1.5**

<a id="api-member-mobile-status"></a>

##### `mobile_status(self) -> Status`

`Status`: The member's status on a mobile device, if applicable.

<a id="api-member-desktop-status"></a>

##### `desktop_status(self) -> Status`

`Status`: The member's status on the desktop client, if applicable.

<a id="api-member-web-status"></a>

##### `web_status(self) -> Status`

`Status`: The member's status on the web client, if applicable.

<a id="api-member-is-on-mobile"></a>

##### `is_on_mobile(self) -> bool`

A helper function that determines if a member is active on a mobile device.

## Returns

`bool`

<a id="api-member-colour"></a>

##### `colour(self) -> Colour`

`Colour`: A property that returns a colour denoting the rendered colour
for the member. If the default colour is the one rendered then an instance
of `Colour.default` is returned.

There is an alias for this named `color`.

<a id="api-member-color"></a>

##### `color(self) -> Colour`

`Colour`: A property that returns a color denoting the rendered color for
the member. If the default color is the one rendered then an instance of `Colour.default`
is returned.

There is an alias for this named `colour`.

<a id="api-member-roles"></a>

##### `roles(self) -> List[Role]`

List\[`Role`]: A `list` of `Role` that the member belongs to. Note
that the first element of this list is always the default '@everyone'
role.

These roles are sorted by their position in the role hierarchy.

<a id="api-member-display-icon"></a>

##### `display_icon(self) -> Optional[Union[str, Asset]]`

Optional\[Union\[`str`, `Asset`]]: A property that returns the role icon that is rendered for
this member. If no icon is shown then `None` is returned.

> **Added in version 2.0**

<a id="api-member-mention"></a>

##### `mention(self) -> str`

`str`: Returns a string that allows you to mention the member.

<a id="api-member-display-name"></a>

##### `display_name(self) -> str`

`str`: Returns the user's display name.

For regular users this is just their global name or their username,
but if they have a guild specific nickname then that
is returned instead.

<a id="api-member-display-avatar"></a>

##### `display_avatar(self) -> Asset`

`Asset`: Returns the member's display avatar.

For regular members this is just their avatar, but
if they have a guild specific avatar then that
is returned instead.

> **Added in version 2.0**

<a id="api-member-guild-avatar"></a>

##### `guild_avatar(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns an `Asset` for the guild avatar
the member has. If unavailable, `None` is returned.

> **Added in version 2.0**

<a id="api-member-display-banner"></a>

##### `display_banner(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the member's displayed banner, if any.

This is the member's guild banner if available, otherwise it's their
global banner. If the member has no banner set then `None` is returned.

> **Added in version 2.5**

<a id="api-member-guild-banner"></a>

##### `guild_banner(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns an `Asset` for the guild banner
the member has. If unavailable, `None` is returned.

> **Added in version 2.5**

<a id="api-member-activity"></a>

##### `activity(self) -> Optional[ActivityTypes]`

Optional\[Union\[`BaseActivity`, `Spotify`]]: Returns the primary
activity the user is currently doing. Could be `None` if no activity is being done.

> **Note**
> Due to a Discord API limitation, this may be `None` if
> the user is listening to a song on Spotify with a title longer
> than 128 characters. See [GH-1738](https://github.com/Rapptz/discord.py/issues/1738) for more information.

> **Note**
> A user may have multiple activities, these can be accessed under `activities`.

<a id="api-member-mentioned-in"></a>

##### `mentioned_in(self, message: Message) -> bool`

Checks if the member is mentioned in the specified message.

## Parameters

**message: `Message`**

The message to check if you're mentioned in.

## Returns

**`bool`**

Indicates if the member is mentioned in the message.

<a id="api-member-top-role"></a>

##### `top_role(self) -> Role`

`Role`: Returns the member's highest role.

This is useful for figuring where a member stands in the role
hierarchy chain.

<a id="api-member-guild-permissions"></a>

##### `guild_permissions(self) -> Permissions`

`Permissions`: Returns the member's guild permissions.

This only takes into consideration the guild permissions
and not most of the implied permissions or any of the
channel permission overwrites. For 100% accurate permission
calculation, please use `abc.GuildChannel.permissions_for`.

This does take into consideration guild ownership, the
administrator implication, and whether the member is timed out.

> **Changed in version 2.0**
> Member timeouts are taken into consideration.

<a id="api-member-resolved-permissions"></a>

##### `resolved_permissions(self) -> Optional[Permissions]`

Optional\[`Permissions`]: Returns the member's resolved permissions
from an interaction.

This is only available in interaction contexts and represents the resolved
permissions of the member in the channel the interaction was executed in.
This is more or less equivalent to calling `abc.GuildChannel.permissions_for`
but stored and returned as an attribute by the Discord API rather than computed.

> **Added in version 2.0**

<a id="api-member-voice"></a>

##### `voice(self) -> Optional[VoiceState]`

Optional\[`VoiceState`]: Returns the member's current voice state.

<a id="api-member-flags"></a>

##### `flags(self) -> MemberFlags`

`MemberFlags`: Returns the member's flags.

> **Added in version 2.2**

<a id="api-member-ban"></a>

##### `ban( self, *, delete_message_days: int = MISSING, delete_message_seconds: int = MISSING, reason: Optional[str] = None,) -> None`

*coroutine*

Bans this member. Equivalent to `Guild.ban`.

<a id="api-member-unban"></a>

##### `unban(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Unbans this member. Equivalent to `Guild.unban`.

<a id="api-member-kick"></a>

##### `kick(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Kicks this member. Equivalent to `Guild.kick`.

<a id="api-member-edit"></a>

##### `edit( self, *, nick: Optional[str] = MISSING, mute: bool = MISSING, deafen: bool = MISSING, suppress: bool = MISSING, roles: Collection[discord.abc.Snowflake] = MISSING, voice_channel: Optional[VocalGuildChannel] = MISSING, timed_out_until: Optional[datetime.datetime] = MISSING, bypass_verification: bool = MISSING, avatar: Optional[bytes] = MISSING, banner: Optional[bytes] = MISSING, bio: Optional[str] = MISSING, reason: Optional[str] = None,) -> Optional[Member]`

*coroutine*

Edits the member's data.

> **Note**
> To upload an avatar or banner, a `py:bytes-like object` must be passed in that
> represents the image being uploaded. If this is done through a file
> then the file must be opened via `open('some_filename', 'rb')` and
> the `py:bytes-like object` is given through the use of `fp.read()`.

Depending on the parameter passed, this requires different permissions listed below:

| Parameter            | Permission                     |
| -------------------- | ------------------------------ |
| nick                 | `Permissions.manage_nicknames` |
| mute                 | `Permissions.mute_members`     |
| deafen               | `Permissions.deafen_members`   |
| roles                | `Permissions.manage_roles`     |
| voice\_channel       | `Permissions.move_members`     |
| timed\_out\_until    | `Permissions.moderate_members` |
| bypass\_verification | `Permissions.moderate_members` |

All parameters are optional.

> **Changed in version 1.1**
> Can now pass `None` to `voice_channel` to kick a member from voice.

> **Changed in version 2.0**
> The newly updated member is now optionally returned, if applicable.

## Parameters

**nick: Optional\[`str`]**

The member's new nickname. Use `None` to remove the nickname.

**mute: `bool`**

Indicates if the member should be guild muted or un-muted.

**deafen: `bool`**

Indicates if the member should be guild deafened or un-deafened.

**suppress: `bool`**

Indicates if the member should be suppressed in stage channels.

> **Added in version 1.7**

**roles: List\[`Role`]**

The member's new list of roles. This *replaces* the roles.

**voice\_channel: Optional\[Union\[`VoiceChannel`, `StageChannel`]]**

The voice channel to move the member to.
Pass `None` to kick them from voice.

**timed\_out\_until: Optional\[`datetime.datetime`]**

The date the member's timeout should expire, or `None` to remove the timeout.
This must be a timezone-aware datetime object. Consider using `utils.utcnow`.

> **Added in version 2.0**

**bypass\_verification: `bool`**

Indicates if the member should be allowed to bypass the guild verification requirements.

> **Added in version 2.2**

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the image to upload. Could be `None` to denote no avatar.
Only image formats supported for uploading are JPEG, PNG, GIF, and WEBP.
This can only be set when editing the bot's own member.

> **Added in version 2.7**

**banner: Optional\[`bytes`]**

A `py:bytes-like object` representing the image to upload. Could be `None` to denote no banner.
Only image formats supported for uploading are JPEG, PNG, GIF and WEBP..
This can only be set when editing the bot's own member.

> **Added in version 2.7**

**bio: Optional\[`str`]**

The new bio for the member. Use `None` to remove the bio.
This can only be set when editing the bot's own member.

> **Added in version 2.7**

**reason: Optional\[`str`]**

The reason for editing this member. Shows up on the audit log.

## Raises

**Forbidden**

You do not have the proper permissions to do the action requested.

**HTTPException**

The operation failed.

**TypeError**

The datetime object passed to `timed_out_until` was not timezone-aware.

**ValueError**

You tried to edit the bio, avatar or banner of a member that is not the bot's own member.
Or the wrong image format passed for `avatar` or `banner`.

## Returns

**Optional\[`.Member`]**

The newly updated member, if applicable. This is not returned
if certain fields are passed, such as `suppress`.

<a id="api-member-request-to-speak"></a>

##### `request_to_speak(self) -> None`

*coroutine*

Request to speak in the connected channel.

Only applies to stage channels.

> **Note**
> Requesting members that are not the client is equivalent
> to `.edit` providing `suppress` as `False`.

> **Added in version 1.7**

## Raises

**ClientException**

You are not connected to a voice channel.

**Forbidden**

You do not have the proper permissions to do the action requested.

**HTTPException**

The operation failed.

<a id="api-member-move-to"></a>

##### `move_to(self, channel: Optional[VocalGuildChannel], *, reason: Optional[str] = None) -> None`

*coroutine*

Moves a member to a new voice channel (they must be connected first).

You must have `Permissions.move_members` to do this.

This raises the same exceptions as `edit`.

> **Changed in version 1.1**
> Can now pass `None` to kick a member from voice.

## Parameters

**channel: Optional\[Union\[`VoiceChannel`, `StageChannel`]]**

The new voice channel to move the member to.
Pass `None` to kick them from voice.

**reason: Optional\[`str`]**

The reason for doing this action. Shows up on the audit log.

<a id="api-member-timeout"></a>

##### `timeout( self, until: Optional[Union[datetime.timedelta, datetime.datetime]], /, *, reason: Optional[str] = None) -> None`

*coroutine*

Applies a time out to a member until the specified date time or for the
given `datetime.timedelta`.

You must have `Permissions.moderate_members` to do this.

This raises the same exceptions as `edit`.

## Parameters

**until: Optional\[Union\[`datetime.timedelta`, `datetime.datetime`]]**

If this is a `datetime.timedelta` then it represents the amount of
time the member should be timed out for. If this is a `datetime.datetime`
then it's when the member's timeout should expire. If `None` is passed then the
timeout is removed. Note that the API only allows for timeouts up to 28 days.

**reason: Optional\[`str`]**

The reason for doing this action. Shows up on the audit log.

## Raises

**TypeError**

The `until` parameter was the wrong type or the datetime was not timezone-aware.

<a id="api-member-add-roles"></a>

##### `add_roles(self, *roles: Snowflake, reason: Optional[str] = None, atomic: bool = True) -> None`

*coroutine*

Gives the member a number of `Role`\s.

You must have `Permissions.manage_roles` to
use this, and the added `Role`\s must appear lower in the list
of roles than the highest role of the client.

## Parameters

**\*roles: `abc.Snowflake`**

An argument list of `abc.Snowflake` representing a `Role`
to give to the member.

**reason: Optional\[`str`]**

The reason for adding these roles. Shows up on the audit log.

**atomic: `bool`**

Whether to atomically add roles. This will ensure that multiple
operations will always be applied regardless of the current
state of the cache.

## Raises

**Forbidden**

You do not have permissions to add these roles.

**HTTPException**

Adding roles failed.

<a id="api-member-remove-roles"></a>

##### `remove_roles(self, *roles: Snowflake, reason: Optional[str] = None, atomic: bool = True) -> None`

*coroutine*

Removes `Role`\s from this member.

You must have `Permissions.manage_roles` to
use this, and the removed `Role`\s must appear lower in the list
of roles than the highest role of the client.

## Parameters

**\*roles: `abc.Snowflake`**

An argument list of `abc.Snowflake` representing a `Role`
to remove from the member.

**reason: Optional\[`str`]**

The reason for removing these roles. Shows up on the audit log.

**atomic: `bool`**

Whether to atomically remove roles. This will ensure that multiple
operations will always be applied regardless of the current
state of the cache.

## Raises

**Forbidden**

You do not have permissions to remove these roles.

**HTTPException**

Removing the roles failed.

<a id="api-member-fetch-voice"></a>

##### `fetch_voice(self) -> VoiceState`

*coroutine*

Retrieves the current voice state from this member.

> **Added in version 2.5**

## Raises

**NotFound**

The member is not in a voice channel.

**Forbidden**

You do not have permissions to get a voice state.

**HTTPException**

Retrieving the voice state failed.

## Returns

**`VoiceState`**

The current voice state of the member.

<a id="api-member-get-role"></a>

##### `get_role(self, role_id: int, /) -> Optional[Role]`

Returns a role with the given ID from roles which the member has.

> **Added in version 2.0**

## Parameters

**role\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Role`]**

The role or `None` if not found in the member's roles.

<a id="api-member-is-timed-out"></a>

##### `is_timed_out(self) -> bool`

Returns whether this member is timed out.

> **Added in version 2.0**

## Returns

**`bool`**

`True` if the member is timed out. `False` otherwise.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### Spotify

<a id="api-spotify"></a>

#### `Spotify`

Represents a Spotify listening activity from Discord. This is a special case of
`Activity` that makes it easier to work with the Spotify integration.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two activities are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two activities are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the activity's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the string 'Spotify'.

<a id="api-spotify-type"></a>

##### `type(self) -> ActivityType`

`ActivityType`: Returns the activity's type. This is for compatibility with `Activity`.

It always returns `ActivityType.listening`.

<a id="api-spotify-created-at"></a>

##### `created_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user started listening in UTC.

> **Added in version 1.3**

<a id="api-spotify-colour"></a>

##### `colour(self) -> Colour`

`Colour`: Returns the Spotify integration colour, as a `Colour`.

There is an alias for this named `color`

<a id="api-spotify-color"></a>

##### `color(self) -> Colour`

`Colour`: Returns the Spotify integration colour, as a `Colour`.

There is an alias for this named `colour`

<a id="api-spotify-name"></a>

##### `name(self) -> str`

`str`: The activity's name. This will always return "Spotify".

<a id="api-spotify-title"></a>

##### `title(self) -> str`

`str`: The title of the song being played.

<a id="api-spotify-artists"></a>

##### `artists(self) -> List[str]`

List\[`str`]: The artists of the song being played.

<a id="api-spotify-artist"></a>

##### `artist(self) -> str`

`str`: The artist of the song being played.

This does not attempt to split the artist information into
multiple artists. Useful if there's only a single artist.

<a id="api-spotify-album"></a>

##### `album(self) -> str`

`str`: The album that the song being played belongs to.

<a id="api-spotify-album-cover-url"></a>

##### `album_cover_url(self) -> str`

`str`: The album cover image URL from Spotify's CDN.

<a id="api-spotify-track-id"></a>

##### `track_id(self) -> str`

`str`: The track ID used by Spotify to identify this song.

<a id="api-spotify-track-url"></a>

##### `track_url(self) -> str`

`str`: The track URL to listen on Spotify.

> **Added in version 2.0**

<a id="api-spotify-start"></a>

##### `start(self) -> datetime.datetime`

`datetime.datetime`: When the user started playing this song in UTC.

<a id="api-spotify-end"></a>

##### `end(self) -> datetime.datetime`

`datetime.datetime`: When the user will stop playing this song in UTC.

<a id="api-spotify-duration"></a>

##### `duration(self) -> datetime.timedelta`

`datetime.timedelta`: The duration of the song being played.

<a id="api-spotify-party-id"></a>

##### `party_id(self) -> str`

`str`: The party ID of the listening party.

### VoiceState

<a id="api-voicestate"></a>

#### `VoiceState`

Represents a Discord user's voice state.

## Attributes

**deaf: `bool`**

Indicates if the user is currently deafened by the guild.

**mute: `bool`**

Indicates if the user is currently muted by the guild.

**self\_mute: `bool`**

Indicates if the user is currently muted by their own accord.

**self\_deaf: `bool`**

Indicates if the user is currently deafened by their own accord.

**self\_stream: `bool`**

Indicates if the user is currently streaming via 'Go Live' feature.

> **Added in version 1.3**

**self\_video: `bool`**

Indicates if the user is currently broadcasting video.

**suppress: `bool`**

Indicates if the user is suppressed from speaking.

Only applies to stage channels.

> **Added in version 1.7**

**requested\_to\_speak\_at: Optional\[`datetime.datetime`]**

An aware datetime object that specifies the date and time in UTC that the member
requested to speak. It will be `None` if they are not requesting to speak
anymore or have been accepted to speak.

Only applicable to stage channels.

> **Added in version 1.7**

**afk: `bool`**

Indicates if the user is currently in the AFK channel in the guild.

**channel: Optional\[Union\[`VoiceChannel`, `StageChannel`]]**

The voice channel that the user is currently connected to. `None` if the user
is not currently in a voice channel.

### Emoji

<a id="api-emoji"></a>

#### `Emoji(_EmojiTag, AssetMixin)`

Represents a custom emoji.

Depending on the way this object was created, some of the attributes can
have a value of `None`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two emoji are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two emoji are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the emoji's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(field, value)` pairs. This allows this class
to be used as an iterable in list/dict/etc constructions.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the emoji rendered for discord.

## Attributes

**name: `str`**

The name of the emoji.

**id: `int`**

The emoji's ID.

**require\_colons: `bool`**

If colons are required to use this emoji in the client (:PJSalt: vs PJSalt).

**animated: `bool`**

Whether an emoji is animated or not.

**managed: `bool`**

If this emoji is managed by a Twitch integration.

**guild\_id: `int`**

The guild ID the emoji belongs to.

**available: `bool`**

Whether the emoji is available for use.

**user: Optional\[`User`]**

The user that created the emoji. This can only be retrieved using `Guild.fetch_emoji` and
having `Permissions.manage_emojis`.

Or if `.is_application_owned` is `True`, this is the team member that uploaded
the emoji, or the bot user if it was uploaded using the API and this can
only be retrieved using `discord.Client.fetch_application_emoji` or `discord.Client.fetch_application_emojis`.

<a id="api-emoji-created-at"></a>

##### `created_at(self) -> datetime`

`datetime.datetime`: Returns the emoji's creation time in UTC.

<a id="api-emoji-url"></a>

##### `url(self) -> str`

`str`: Returns the URL of the emoji.

<a id="api-emoji-roles"></a>

##### `roles(self) -> List[Role]`

List\[`Role`]: A `list` of roles that is allowed to use this emoji.

If roles is empty, the emoji is unrestricted.

<a id="api-emoji-guild"></a>

##### `guild(self) -> Optional[Guild]`

`Guild`: The guild this emoji belongs to.

<a id="api-emoji-is-usable"></a>

##### `is_usable(self) -> bool`

`bool`: Whether the bot can use this emoji.

> **Added in version 1.3**

<a id="api-emoji-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the custom emoji.

You must have `Permissions.manage_emojis` to do this if
`.is_application_owned` is `False`.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this emoji. Shows up on the audit log.

This does not apply if `.is_application_owned` is `True`.

## Raises

**Forbidden**

You are not allowed to delete emojis.

**HTTPException**

An error occurred deleting the emoji.

**MissingApplicationID**

The emoji is owned by an application but the application ID is missing.

<a id="api-emoji-edit"></a>

##### `edit( self, *, name: str = MISSING, roles: Collection[Snowflake] = MISSING, reason: Optional[str] = None) -> Emoji`

*coroutine*

Edits the custom emoji.

You must have `Permissions.manage_emojis` to do this.

> **Changed in version 2.0**
> The newly updated emoji is returned.

## Parameters

**name: `str`**

The new emoji name.

**roles: List\[`discord.abc.Snowflake`]**

A list of roles that can use this emoji. An empty list can be passed to make it available to everyone.

This does not apply if `.is_application_owned` is `True`.

**reason: Optional\[`str`]**

The reason for editing this emoji. Shows up on the audit log.

This does not apply if `.is_application_owned` is `True`.

## Raises

**Forbidden**

You are not allowed to edit emojis.

**HTTPException**

An error occurred editing the emoji.

**MissingApplicationID**

The emoji is owned by an application but the application ID is missing

## Returns

**`Emoji`**

The newly updated emoji.

<a id="api-emoji-is-application-owned"></a>

##### `is_application_owned(self) -> bool`

`bool`: Whether the emoji is owned by an application.

> **Added in version 2.5**

### PartialEmoji

<a id="api-partialemoji"></a>

#### `PartialEmoji(_EmojiTag, AssetMixin)`

Represents a "partial" emoji.

This model will be given in two scenarios:

- "Raw" data events such as `on_raw_reaction_add`
- Custom emoji that the bot cannot see from e.g. `Message.reactions`

<a id="describe-x-y"></a>

#### `x == y`

Checks if two emoji are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two emoji are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the emoji's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the emoji rendered for discord.

## Attributes

**name: Optional\[`str`]**

The custom emoji name, if applicable, or the unicode codepoint
of the non-custom emoji. This can be `None` if the emoji
got deleted (e.g. removing a reaction with a deleted emoji).

**animated: `bool`**

Whether the emoji is animated or not.

**id: Optional\[`int`]**

The ID of the custom emoji, if applicable.

<a id="api-partialemoji-from-str"></a>

##### `from_str(cls, value: str, *, client: Client = utils.MISSING) -> Self`

Converts a Discord string representation of an emoji to a `PartialEmoji`.

The formats accepted are:

- `a:name:id`
- `<a:name:id>`
- `name:id`
- `<:name:id>`

If the format does not match then it is assumed to be a unicode emoji.

> **Added in version 2.0**

## Parameters

**value: `str`**

The string representation of an emoji.

**client: `Client`**

The client to initialise this emoji with. This allows it to
attach the client's internal state.

> **Added in version 2.7**

## Returns

**`PartialEmoji`**

The partial emoji from this string.

<a id="api-partialemoji-is-custom-emoji"></a>

##### `is_custom_emoji(self) -> bool`

`bool`: Checks if this is a custom non-Unicode emoji.

<a id="api-partialemoji-is-unicode-emoji"></a>

##### `is_unicode_emoji(self) -> bool`

`bool`: Checks if this is a Unicode emoji.

<a id="api-partialemoji-created-at"></a>

##### `created_at(self) -> Optional[datetime]`

Optional\[`datetime.datetime`]: Returns the emoji's creation time in UTC, or None if Unicode emoji.

> **Added in version 1.6**

<a id="api-partialemoji-url"></a>

##### `url(self) -> str`

`str`: Returns the URL of the emoji, if it is custom.

If this isn't a custom emoji then an empty string is returned

<a id="api-partialemoji-read"></a>

##### `read(self) -> bytes`

*coroutine*

Retrieves the content of this asset as a `bytes` object.

## Raises

**DiscordException**

There was no internal connection state.

**HTTPException**

Downloading the asset failed.

**NotFound**

The asset was deleted.

**ValueError**

The PartialEmoji is not a custom emoji.

## Returns

**`bytes`**

The content of the asset.

### Role

<a id="api-role"></a>

#### `Role(Hashable)`

Represents a Discord role in a `Guild`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two roles are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two roles are not equal.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a role is higher than another in the hierarchy.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a role is lower than another in the hierarchy.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a role is higher or equal to another in the hierarchy.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a role is lower or equal to another in the hierarchy.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the role's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the role's name.

## Attributes

**id: `int`**

The ID for the role.

**name: `str`**

The name of the role.

**guild: `Guild`**

The guild the role belongs to.

**hoist: `bool`**

Indicates if the role will be displayed separately from other members.

**position: `int`**

The position of the role. This number is usually positive. The bottom
role has a position of 0.

> **Warning**
> Multiple roles can have the same position number. As a consequence
> of this, comparing via role position is prone to subtle bugs if
> checking for role hierarchy. The recommended and correct way to
> compare for roles in the hierarchy is using the comparison
> operators on the role objects themselves.

**unicode\_emoji: Optional\[`str`]**

The role's unicode emoji, if available.

> **Note**
> If `icon` is not `None`, it is displayed as role icon
> instead of the unicode emoji under this attribute.
>
> If you want the icon that a role has displayed, consider using `display_icon`.

> **Added in version 2.0**

**managed: `bool`**

Indicates if the role is managed by the guild through some form of
integrations such as Twitch.

**mentionable: `bool`**

Indicates if the role can be mentioned by users.

**tags: Optional\[`RoleTags`]**

The role tags associated with this role.

<a id="api-role-is-default"></a>

##### `is_default(self) -> bool`

`bool`: Checks if the role is the default role.

<a id="api-role-is-bot-managed"></a>

##### `is_bot_managed(self) -> bool`

`bool`: Whether the role is associated with a bot.

> **Added in version 1.6**

<a id="api-role-is-premium-subscriber"></a>

##### `is_premium_subscriber(self) -> bool`

`bool`: Whether the role is the premium subscriber, AKA "boost", role for the guild.

> **Added in version 1.6**

<a id="api-role-is-integration"></a>

##### `is_integration(self) -> bool`

`bool`: Whether the role is managed by an integration.

> **Added in version 1.6**

<a id="api-role-is-assignable"></a>

##### `is_assignable(self) -> bool`

`bool`: Whether the role is able to be assigned or removed by the bot.

> **Added in version 2.0**

<a id="api-role-secondary-colour"></a>

##### `secondary_colour(self) -> Optional[Colour]`

Optional\[`Colour`]: The role's secondary colour.

> **Added in version 2.6**

<a id="api-role-secondary-color"></a>

##### `secondary_color(self) -> Optional[Colour]`

Optional\[`Colour`]: Alias for `secondary_colour`.

> **Added in version 2.6**

<a id="api-role-tertiary-colour"></a>

##### `tertiary_colour(self) -> Optional[Colour]`

Optional\[`Colour`]: The role's tertiary colour.

> **Added in version 2.6**

<a id="api-role-tertiary-color"></a>

##### `tertiary_color(self) -> Optional[Colour]`

Optional\[`Colour`]: Alias for `tertiary_colour`.

> **Added in version 2.6**

<a id="api-role-permissions"></a>

##### `permissions(self) -> Permissions`

`Permissions`: Returns the role's permissions.

<a id="api-role-colour"></a>

##### `colour(self) -> Colour`

`Colour`: Returns the role's primary colour. An alias exists under `color`.

<a id="api-role-color"></a>

##### `color(self) -> Colour`

`Colour`: Returns the role's primary colour. An alias exists under `colour`.

<a id="api-role-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`.Asset`]: Returns the role's icon asset, if available.

> **Note**
> If this is `None`, the role might instead have unicode emoji as its icon
> if `unicode_emoji` is not `None`.
>
> If you want the icon that a role has displayed, consider using `display_icon`.

> **Added in version 2.0**

<a id="api-role-display-icon"></a>

##### `display_icon(self) -> Optional[Union[Asset, str]]`

Optional\[Union\[`.Asset`, `str`]]: Returns the role's display icon, if available.

> **Added in version 2.0**

<a id="api-role-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the role's creation time in UTC.

<a id="api-role-mention"></a>

##### `mention(self) -> str`

`str`: Returns a string that allows you to mention a role.

<a id="api-role-members"></a>

##### `members(self) -> List[Member]`

List\[`Member`]: Returns all the members with this role.

<a id="api-role-flags"></a>

##### `flags(self) -> RoleFlags`

`RoleFlags`: Returns the role's flags.

> **Added in version 2.4**

<a id="api-role-edit"></a>

##### `edit( self, *, name: str = MISSING, permissions: Permissions = MISSING, colour: Union[Colour, int] = MISSING, color: Union[Colour, int] = MISSING, hoist: bool = MISSING, display_icon: Optional[Union[bytes, str]] = MISSING, mentionable: bool = MISSING, position: int = MISSING, reason: Optional[str] = MISSING, secondary_color: Optional[Union[Colour, int]] = MISSING, tertiary_color: Optional[Union[Colour, int]] = MISSING, secondary_colour: Optional[Union[Colour, int]] = MISSING, tertiary_colour: Optional[Union[Colour, int]] = MISSING,) -> Optional[Role]`

*coroutine*

Edits the role.

You must have `Permissions.manage_roles` to do this.

All fields are optional.

> **Changed in version 1.4**
> Can now pass `int` to `colour` keyword-only parameter.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited role is returned instead.

> **Added in version 2.0**
> The `display_icon` keyword-only parameter was added.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

> **Changed in version 2.6**
> The `colour` and `color` parameters now set the role's primary color.

## Parameters

**name: `str`**

The new role name to change to.

**permissions: `Permissions`**

The new permissions to change to.

**colour: Union\[`Colour`, `int`]**

The new colour to change to. (aliased to color as well)

**secondary\_colour: Optional\[Union\[`Colour`, `int`]]**

The new secondary colour for the role.

> **Added in version 2.6**

**tertiary\_colour: Optional\[Union\[`Colour`, `int`]]**

The new tertiary colour for the role. Can only be used for the holographic role preset,
which is `(11127295, 16759788, 16761760)`

> **Added in version 2.6**

**hoist: `bool`**

Indicates if the role should be shown separately in the member list.

**display\_icon: Optional\[Union\[`bytes`, `str`]]**

A `py:bytes-like object` representing the icon
or `str` representing unicode emoji that should be used as a role icon.
Could be `None` to denote removal of the icon.
Only PNG/JPEG is supported.
This is only available to guilds that contain `ROLE_ICONS` in `Guild.features`.

**mentionable: `bool`**

Indicates if the role should be mentionable by others.

**position: `int`**

The new role's position. This must be below your top role's
position or it will fail.

**reason: Optional\[`str`]**

The reason for editing this role. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to change the role.

**HTTPException**

Editing the role failed.

**ValueError**

An invalid position was given or the default
role was asked to be moved.

## Returns

**`Role`**

The newly edited role.

<a id="api-role-move"></a>

##### `move( self, *, beginning: bool = MISSING, end: bool = MISSING, above: Role = MISSING, below: Role = MISSING, offset: int = 0, reason: Optional[str] = None,)`

*coroutine*

A rich interface to help move a role relative to other roles.

You must have `discord.Permissions.manage_roles` to do this,
and you cannot move roles above the client's top role in the guild.

> **Added in version 2.5**

## Parameters

**beginning: `bool`**

Whether to move this at the beginning of the role list, above the default role.
This is mutually exclusive with `end`, `above`, and `below`.

**end: `bool`**

Whether to move this at the end of the role list.
This is mutually exclusive with `beginning`, `above`, and `below`.

**above: `Role`**

The role that should be above our current role.
This mutually exclusive with `beginning`, `end`, and `below`.

**below: `Role`**

The role that should be below our current role.
This mutually exclusive with `beginning`, `end`, and `above`.

**offset: `int`**

The number of roles to offset the move by. For example,
an offset of `2` with `beginning=True` would move
it 2 above the beginning. A positive number moves it above
while a negative number moves it below. Note that this
number is relative and computed after the `beginning`,
`end`, `before`, and `after` parameters.

**reason: Optional\[`str`]**

The reason for editing this role. Shows up on the audit log.

## Raises

**Forbidden**

You cannot move the role there, or lack permissions to do so.

**HTTPException**

Moving the role failed.

**TypeError**

A bad mix of arguments were passed.

**ValueError**

An invalid role was passed.

## Returns

**List\[`Role`]**

A list of all the roles in the guild.

<a id="api-role-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the role.

You must have `Permissions.manage_roles` to do this.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this role. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to delete the role.

**HTTPException**

Deleting the role failed.

### RoleTags

<a id="api-roletags"></a>

#### `RoleTags`

Represents tags on a role.

A role tag is a piece of extra information attached to a managed role
that gives it context for the reason the role is managed.

While this can be accessed, a useful interface is also provided in the
`Role` and `Guild` classes as well.

> **Added in version 1.6**

## Attributes

**bot\_id: Optional\[`int`]**

The bot's user ID that manages this role.

**integration\_id: Optional\[`int`]**

The integration ID that manages the role.

**subscription\_listing\_id: Optional\[`int`]**

The ID of this role's subscription SKU and listing.

> **Added in version 2.2**

<a id="api-roletags-is-bot-managed"></a>

##### `is_bot_managed(self) -> bool`

`bool`: Whether the role is associated with a bot.

<a id="api-roletags-is-premium-subscriber"></a>

##### `is_premium_subscriber(self) -> bool`

`bool`: Whether the role is the premium subscriber, AKA "boost", role for the guild.

<a id="api-roletags-is-integration"></a>

##### `is_integration(self) -> bool`

`bool`: Whether the role is managed by an integration.

<a id="api-roletags-is-available-for-purchase"></a>

##### `is_available_for_purchase(self) -> bool`

`bool`: Whether the role is available for purchase.

> **Added in version 2.2**

<a id="api-roletags-is-guild-connection"></a>

##### `is_guild_connection(self) -> bool`

`bool`: Whether the role is a guild's linked role.

> **Added in version 2.2**

### PartialMessageable

<a id="api-partialmessageable"></a>

#### `PartialMessageable(discord.abc.Messageable, Hashable)`

Represents a partial messageable to aid with working messageable channels when
only a channel ID is present.

The only way to construct this class is through `Client.get_partial_messageable`.

Note that this class is trimmed down and has no rich attributes.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two partial messageables are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two partial messageables are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the partial messageable's hash.

## Attributes

**id: `int`**

The channel ID associated with this partial messageable.

**guild\_id: Optional\[`int`]**

The guild ID associated with this partial messageable.

**type: Optional\[`ChannelType`]**

The channel type associated with this partial messageable, if given.

<a id="api-partialmessageable-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild this partial messageable is in.

<a id="api-partialmessageable-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the channel.

<a id="api-partialmessageable-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the channel's creation time in UTC.

<a id="api-partialmessageable-permissions-for"></a>

##### `permissions_for(self, obj: Any = None, /) -> Permissions`

Handles permission resolution for a `User`.

This function is there for compatibility with other channel types.

Since partial messageables cannot reasonably have the concept of
permissions, this will always return `Permissions.none`.

## Parameters

**obj: `User`**

The user to check permissions for. This parameter is ignored
but kept for compatibility with other `permissions_for` methods.

## Returns

**`Permissions`**

The resolved permissions.

<a id="api-partialmessageable-mention"></a>

##### `mention(self) -> str`

`str`: Returns a string that allows you to mention the channel.

> **Added in version 2.5**

<a id="api-partialmessageable-get-partial-message"></a>

##### `get_partial_message(self, message_id: int, /) -> PartialMessage`

Creates a `PartialMessage` from the message ID.

This is useful if you want to work with a message and only have its ID without
doing an unnecessary API call.

## Parameters

**message\_id: `int`**

The message ID to create a partial message for.

## Returns

**`PartialMessage`**

The partial message.

### TextChannel

<a id="api-textchannel"></a>

#### `TextChannel(discord.abc.Messageable, discord.abc.GuildChannel, Hashable)`

Represents a Discord guild text channel.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the channel's name.

## Attributes

**name: `str`**

The channel name.

**guild: `Guild`**

The guild the channel belongs to.

**id: `int`**

The channel ID.

**category\_id: Optional\[`int`]**

The category channel ID this channel belongs to, if applicable.

**topic: Optional\[`str`]**

The channel's topic. `None` if it doesn't exist.

**position: `int`**

The position in the channel list. This is a number that starts at 0. e.g. the
top channel is position 0.

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this channel. It may
*not* point to an existing or valid message.

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this channel. A value of `0` denotes that it is disabled.
Bots and users with `Permissions.bypass_slowmode` bypass slowmode.

**nsfw: `bool`**

If the channel is marked as "not safe for work" or "age restricted".

**default\_auto\_archive\_duration: `int`**

The default auto archive duration in minutes for threads created in this channel.

> **Added in version 2.0**

**default\_thread\_slowmode\_delay: `int`**

The default slowmode delay in seconds for threads created in this channel.

> **Added in version 2.3**

<a id="api-textchannel-type"></a>

##### `type(self) -> Literal[ChannelType.text, ChannelType.news]`

`ChannelType`: The channel's Discord type.

<a id="api-textchannel-members"></a>

##### `members(self) -> List[Member]`

List\[`Member`]: Returns all members that can see this channel.

<a id="api-textchannel-threads"></a>

##### `threads(self) -> List[Thread]`

List\[`Thread`]: Returns all the threads that you can see.

> **Added in version 2.0**

<a id="api-textchannel-is-nsfw"></a>

##### `is_nsfw(self) -> bool`

`bool`: Checks if the channel is NSFW.

<a id="api-textchannel-is-news"></a>

##### `is_news(self) -> bool`

`bool`: Checks if the channel is a news channel.

<a id="api-textchannel-last-message"></a>

##### `last_message(self) -> Optional[Message]`

Retrieves the last message from this channel in cache.

The message might not be valid or point to an existing message.

> **Reliable Fetching**
>
> - **Class:** helpful
>
> For a slightly more reliable method of fetching the
> last message, consider using either `history`
> or `fetch_message` with the `last_message_id`
> attribute.

## Returns

**Optional\[`Message`]**

The last message in this channel or `None` if not found.

<a id="api-textchannel-edit"></a>

##### `edit(self, *, reason: Optional[str] = None, **options: Any) -> Optional[TextChannel]`

*coroutine*

Edits the channel.

You must have `Permissions.manage_channels` to do this.

> **Changed in version 1.3**
> The `overwrites` keyword-only parameter was added.

> **Changed in version 1.4**
> The `type` keyword-only parameter was added.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited channel is returned instead.

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**name: `str`**

The new channel name.

**topic: `str`**

The new channel's topic.

**position: `int`**

The new channel's position.

**nsfw: `bool`**

To mark the channel as NSFW or not.

**sync\_permissions: `bool`**

Whether to sync permissions with the channel's new or pre-existing
category. Defaults to `False`.

**category: Optional\[`CategoryChannel`]**

The new category for this channel. Can be `None` to remove the
category.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this channel, in seconds.
A value of `0` disables slowmode. The maximum value possible is `21600`.

**type: `ChannelType`**

Change the type of this text channel. Currently, only conversion between
`ChannelType.text` and `ChannelType.news` is supported. This
is only available to guilds that contain `NEWS` in `Guild.features`.

**reason: Optional\[`str`]**

The reason for editing this channel. Shows up on the audit log.

**overwrites: `Mapping`**

A `Mapping` of target (either a role or a member) to
`PermissionOverwrite` to apply to the channel.

**default\_auto\_archive\_duration: `int`**

The new default auto archive duration in minutes for threads created in this channel.
Must be one of `60`, `1440`, `4320`, or `10080`.

> **Added in version 2.0**

**default\_thread\_slowmode\_delay: `int`**

The new default slowmode delay in seconds for threads created in this channel.

> **Added in version 2.3**

## Raises

**ValueError**

The new `position` is less than 0 or greater than the number of channels.

**TypeError**

The permission overwrite information is not in proper form.

**Forbidden**

You do not have permissions to edit the channel.

**HTTPException**

Editing the channel failed.

## Returns

**Optional\[`.TextChannel`]**

The newly edited text channel. If the edit was only positional
then `None` is returned instead.

<a id="api-textchannel-delete-messages"></a>

##### `delete_messages(self, messages: Iterable[Snowflake], *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes a list of messages. This is similar to `Message.delete`
except it bulk deletes multiple messages.

As a special case, if the number of messages is 0, then nothing
is done. If the number of messages is 1 then single message
delete is done. If it's more than two, then bulk delete is used.

You cannot bulk delete more than 100 messages or messages that
are older than 14 days old.

You must have `Permissions.manage_messages` to do this.

> **Changed in version 2.0**
> `messages` parameter is now positional-only.
>
> The `reason` keyword-only parameter was added.

## Parameters

**messages: Iterable\[`abc.Snowflake`]**

An iterable of messages denoting which ones to bulk delete.

**reason: Optional\[`str`]**

The reason for deleting the messages. Shows up on the audit log.

## Raises

**ClientException**

The number of messages to delete was more than 100.

**Forbidden**

You do not have proper permissions to delete the messages.

**NotFound**

If single delete, then the message was already deleted.

**HTTPException**

Deleting the messages failed.

<a id="api-textchannel-purge"></a>

##### `purge( self, *, limit: Optional[int] = 100, check: Callable[[Message], bool] = MISSING, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, around: Optional[SnowflakeTime] = None, oldest_first: Optional[bool] = None, bulk: bool = True, reason: Optional[str] = None,) -> List[Message]`

*coroutine*

Purges a list of messages that meet the criteria given by the predicate
`check`. If a `check` is not provided then all messages are deleted
without discrimination.

You must have `Permissions.manage_messages` to
delete messages even if they are your own.
Having `Permissions.read_message_history` is
also needed to retrieve message history.

> **Changed in version 2.0**
> The `reason` keyword-only parameter was added.

## Examples

Deleting bot's messages :

```python
def is_me(m):
    return m.author == client.user

deleted = await channel.purge(limit=100, check=is_me)
await channel.send(f'Deleted {len(deleted)} message(s)')
```

## Parameters

**limit: Optional\[`int`]**

The number of messages to search through. This is not the number
of messages that will be deleted, though it can be.

**check: Callable\[\[`Message`], `bool`]**

The function used to check if a message should be deleted.
It must take a `Message` as its sole parameter.

**before: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `before` in `history`.

**after: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `after` in `history`.

**around: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `around` in `history`.

**oldest\_first: Optional\[`bool`]**

Same as `oldest_first` in `history`.

**bulk: `bool`**

If `True`, use bulk delete. Setting this to `False` is useful for mass-deleting
a bot's own messages without `Permissions.manage_messages`. When `True`, will
fall back to single delete if messages are older than two weeks.

**reason: Optional\[`str`]**

The reason for purging the messages. Shows up on the audit log.

## Raises

**Forbidden**

You do not have proper permissions to do the actions required.

**HTTPException**

Purging the messages failed.

## Returns

**List\[`.Message`]**

The list of messages that were deleted.

<a id="api-textchannel-webhooks"></a>

##### `webhooks(self) -> List[Webhook]`

*coroutine*

Gets the list of webhooks from this channel.

You must have `.Permissions.manage_webhooks` to do this.

## Raises

**Forbidden**

You don't have permissions to get the webhooks.

## Returns

**List\[`Webhook`]**

The webhooks for this channel.

<a id="api-textchannel-create-webhook"></a>

##### `create_webhook(self, *, name: str, avatar: Optional[bytes] = None, reason: Optional[str] = None) -> Webhook`

*coroutine*

Creates a webhook for this channel.

You must have `.Permissions.manage_webhooks` to do this.

> **Changed in version 1.1**
> Added the `reason` keyword-only parameter.

## Parameters

**name: `str`**

The webhook's name.

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the webhook's default avatar.
This operates similarly to `ClientUser.edit`.

**reason: Optional\[`str`]**

The reason for creating this webhook. Shows up in the audit logs.

## Raises

**HTTPException**

Creating the webhook failed.

**Forbidden**

You do not have permissions to create a webhook.

## Returns

**`Webhook`**

The created webhook.

<a id="api-textchannel-follow"></a>

##### `follow(self, *, destination: TextChannel, reason: Optional[str] = None) -> Webhook`

*coroutine*

Follows a channel using a webhook.

Only news channels can be followed.

> **Note**
> The webhook returned will not provide a token to do webhook
> actions, as Discord does not provide it.

> **Added in version 1.3**

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**destination: `TextChannel`**

The channel you would like to follow from.

**reason: Optional\[`str`]**

The reason for following the channel. Shows up on the destination guild's audit log.

> **Added in version 1.4**

## Raises

**HTTPException**

Following the channel failed.

**Forbidden**

You do not have the permissions to create a webhook.

**ClientException**

The channel is not a news channel.

**TypeError**

The destination channel is not a text channel.

## Returns

**`Webhook`**

The created webhook.

<a id="api-textchannel-get-partial-message"></a>

##### `get_partial_message(self, message_id: int, /) -> PartialMessage`

Creates a `PartialMessage` from the message ID.

This is useful if you want to work with a message and only have its ID without
doing an unnecessary API call.

> **Added in version 1.6**

> **Changed in version 2.0**
> `message_id` parameter is now positional-only.

## Parameters

**message\_id: `int`**

The message ID to create a partial message for.

## Returns

**`PartialMessage`**

The partial message.

<a id="api-textchannel-get-thread"></a>

##### `get_thread(self, thread_id: int, /) -> Optional[Thread]`

Returns a thread with the given ID.

> **Note**
> This does not always retrieve archived threads, as they are not retained in the internal
> cache. Use `Guild.fetch_channel` instead.

> **Added in version 2.0**

## Parameters

**thread\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Thread`]**

The returned thread or `None` if not found.

<a id="api-textchannel-create-thread"></a>

##### `create_thread( self, *, name: str, message: Optional[Snowflake] = None, auto_archive_duration: ThreadArchiveDuration = MISSING, type: Optional[ChannelType] = None, reason: Optional[str] = None, invitable: bool = True, slowmode_delay: Optional[int] = None,) -> Thread`

*coroutine*

Creates a thread in this text channel.

To create a public thread, you must have `discord.Permissions.create_public_threads`.
For a private thread, `discord.Permissions.create_private_threads` is needed instead.

> **Added in version 2.0**

## Parameters

**name: `str`**

The name of the thread.

**message: Optional\[`abc.Snowflake`]**

A snowflake representing the message to create the thread with.
If `None` is passed then a private thread is created.
Defaults to `None`.

**auto\_archive\_duration: `int`**

The duration in minutes before a thread is automatically hidden from the channel list.
If not provided, the channel's default auto archive duration is used.

Must be one of `60`, `1440`, `4320`, or `10080`, if provided.

**type: Optional\[`ChannelType`]**

The type of thread to create. If a `message` is passed then this parameter
is ignored, as a thread created with a message is always a public thread.
By default this creates a private thread if this is `None`.

**reason: `str`**

The reason for creating a new thread. Shows up on the audit log.

**invitable: `bool`**

Whether non-moderators can add users to the thread. Only applicable to private threads.
Defaults to `True`.

**slowmode\_delay: Optional\[`int`]**

Specifies the slowmode rate limit for user in this channel, in seconds.
The maximum value possible is `21600`. By default no slowmode rate limit
if this is `None`.

## Raises

**Forbidden**

You do not have permissions to create a thread.

**HTTPException**

Starting the thread failed.

## Returns

**`Thread`**

The created thread

<a id="api-textchannel-archived-threads"></a>

##### `archived_threads( self, *, private: bool = False, joined: bool = False, limit: Optional[int] = 100, before: Optional[Union[Snowflake, datetime.datetime]] = None,) -> AsyncIterator[Thread]`

Returns an `asynchronous iterator` that iterates over all archived threads in this text channel,
in order of decreasing ID for joined threads, and decreasing `Thread.archive_timestamp` otherwise.

You must have `Permissions.read_message_history` to do this. If iterating over private threads
then `Permissions.manage_threads` is also required.

> **Added in version 2.0**

## Parameters

**limit: Optional\[`bool`]**

The number of threads to retrieve.
If `None`, retrieves every archived thread in the channel. Note, however,
that this would make it a slow operation.

**before: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Retrieve archived channels before the given date or ID.

**private: `bool`**

Whether to retrieve private archived threads.

**joined: `bool`**

Whether to retrieve private archived threads that you've joined.
You cannot set `joined` to `True` and `private` to `False`.

## Raises

**Forbidden**

You do not have permissions to get archived threads.

**HTTPException**

The request to get the archived threads failed.

**ValueError**

`joined` was set to `True` and `private` was set to `False`. You cannot retrieve public archived
threads that you have joined.

## Yields

**`Thread`**

The archived threads.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### ForumChannel

<a id="api-forumchannel"></a>

#### `ForumChannel(discord.abc.GuildChannel, Hashable)`

Represents a Discord guild forum channel.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two forums are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two forums are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the forum's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the forum's name.

## Attributes

**name: `str`**

The forum name.

**guild: `Guild`**

The guild the forum belongs to.

**id: `int`**

The forum ID.

**category\_id: Optional\[`int`]**

The category channel ID this forum belongs to, if applicable.

**topic: Optional\[`str`]**

The forum's topic. `None` if it doesn't exist. Called "Guidelines" in the UI.
Can be up to 4096 characters long.

**position: `int`**

The position in the channel list. This is a number that starts at 0. e.g. the
top channel is position 0.

**last\_message\_id: Optional\[`int`]**

The last thread ID that was created on this forum. This technically also
coincides with the message ID that started the thread that was created.
It may *not* point to an existing or valid thread or message.

**slowmode\_delay: `int`**

The number of seconds a member must wait between creating threads
in this forum. A value of `0` denotes that it is disabled.
Bots and users with `Permissions.bypass_slowmode` bypass slowmode.

**nsfw: `bool`**

If the forum is marked as "not safe for work" or "age restricted".

**default\_auto\_archive\_duration: `int`**

The default auto archive duration in minutes for threads created in this forum.

**default\_thread\_slowmode\_delay: `int`**

The default slowmode delay in seconds for threads created in this forum.

> **Added in version 2.1**

**default\_reaction\_emoji: Optional\[`PartialEmoji`]**

The default reaction emoji for threads created in this forum to show in the
add reaction button.

> **Added in version 2.1**

**default\_layout: `ForumLayoutType`**

The default layout for posts in this forum channel.
Defaults to `ForumLayoutType.not_set`.

> **Added in version 2.2**

**default\_sort\_order: Optional\[`ForumOrderType`]**

The default sort order for posts in this forum channel.

> **Added in version 2.3**

<a id="api-forumchannel-type"></a>

##### `type(self) -> Literal[ChannelType.forum, ChannelType.media]`

`ChannelType`: The channel's Discord type.

<a id="api-forumchannel-members"></a>

##### `members(self) -> List[Member]`

List\[`Member`]: Returns all members that can see this channel.

> **Added in version 2.5**

<a id="api-forumchannel-get-thread"></a>

##### `get_thread(self, thread_id: int, /) -> Optional[Thread]`

Returns a thread with the given ID.

> **Note**
> This does not always retrieve archived threads, as they are not retained in the internal
> cache. Use `Guild.fetch_channel` instead.

> **Added in version 2.2**

## Parameters

**thread\_id: `int`**

The ID to search for.

## Returns

**Optional\[`Thread`]**

The returned thread or `None` if not found.

<a id="api-forumchannel-threads"></a>

##### `threads(self) -> List[Thread]`

List\[`Thread`]: Returns all the threads that you can see.

<a id="api-forumchannel-flags"></a>

##### `flags(self) -> ChannelFlags`

`ChannelFlags`: The flags associated with this thread.

> **Added in version 2.1**

<a id="api-forumchannel-available-tags"></a>

##### `available_tags(self) -> Sequence[ForumTag]`

Sequence\[`ForumTag`]: Returns all the available tags for this forum.

> **Added in version 2.1**

<a id="api-forumchannel-get-tag"></a>

##### `get_tag(self, tag_id: int, /) -> Optional[ForumTag]`

Returns the tag with the given ID.

> **Added in version 2.1**

## Parameters

**tag\_id: `int`**

The ID to search for.

## Returns

**Optional\[`ForumTag`]**

The tag with the given ID, or `None` if not found.

<a id="api-forumchannel-is-nsfw"></a>

##### `is_nsfw(self) -> bool`

`bool`: Checks if the forum is NSFW.

<a id="api-forumchannel-is-media"></a>

##### `is_media(self) -> bool`

`bool`: Checks if the channel is a media channel.

> **Added in version 2.4**

<a id="api-forumchannel-edit"></a>

##### `edit(self, *, reason: Optional[str] = None, **options: Any) -> Optional[ForumChannel]`

*coroutine*

Edits the forum.

You must have `Permissions.manage_channels` to do this.

## Parameters

**name: `str`**

The new forum name.

**topic: `str`**

The new forum's topic.

**position: `int`**

The new forum's position.

**nsfw: `bool`**

To mark the forum as NSFW or not.

**sync\_permissions: `bool`**

Whether to sync permissions with the forum's new or pre-existing
category. Defaults to `False`.

**category: Optional\[`CategoryChannel`]**

The new category for this forum. Can be `None` to remove the
category.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this forum, in seconds.
A value of `0` disables slowmode. The maximum value possible is `21600`.

**type: `ChannelType`**

Change the type of this text forum. Currently, only conversion between
`ChannelType.text` and `ChannelType.news` is supported. This
is only available to guilds that contain `NEWS` in `Guild.features`.

**reason: Optional\[`str`]**

The reason for editing this forum. Shows up on the audit log.

**overwrites: `Mapping`**

A `Mapping` of target (either a role or a member) to
`PermissionOverwrite` to apply to the forum.

**default\_auto\_archive\_duration: `int`**

The new default auto archive duration in minutes for threads created in this channel.
Must be one of `60`, `1440`, `4320`, or `10080`.

**available\_tags: Sequence\[`ForumTag`]**

The new available tags for this forum.

> **Added in version 2.1**

**default\_thread\_slowmode\_delay: `int`**

The new default slowmode delay for threads in this channel.

> **Added in version 2.1**

**default\_reaction\_emoji: Optional\[Union\[`Emoji`, `PartialEmoji`, `str`]]**

The new default reaction emoji for threads in this channel.

> **Added in version 2.1**

**default\_layout: `ForumLayoutType`**

The new default layout for posts in this forum.

> **Added in version 2.2**

**default\_sort\_order: Optional\[`ForumOrderType`]**

The new default sort order for posts in this forum.

> **Added in version 2.3**

**require\_tag: `bool`**

Whether to require a tag for threads in this channel or not.

> **Added in version 2.1**

## Raises

**ValueError**

The new `position` is less than 0 or greater than the number of channels.

**TypeError**

The permission overwrite information is not in proper form or a type
is not the expected type.

**Forbidden**

You do not have permissions to edit the forum.

**HTTPException**

Editing the forum failed.

## Returns

**Optional\[`.ForumChannel`]**

The newly edited forum channel. If the edit was only positional
then `None` is returned instead.

<a id="api-forumchannel-create-tag"></a>

##### `create_tag( self, *, name: str, emoji: Optional[PartialEmoji] = None, moderated: bool = False, reason: Optional[str] = None,) -> ForumTag`

*coroutine*

Creates a new tag in this forum.

You must have `Permissions.manage_channels` to do this.

## Parameters

**name: `str`**

The name of the tag. Can only be up to 20 characters.

**emoji: Optional\[Union\[`str`, `PartialEmoji`]]**

The emoji to use for the tag.

**moderated: `bool`**

Whether the tag can only be applied by moderators.

**reason: Optional\[`str`]**

The reason for creating this tag. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create a tag in this forum.

**HTTPException**

Creating the tag failed.

## Returns

**`ForumTag`**

The newly created tag.

<a id="api-forumchannel-create-thread"></a>

##### `create_thread( self, *, name: str, auto_archive_duration: ThreadArchiveDuration = MISSING, slowmode_delay: Optional[int] = None, content: Optional[str] = None, tts: bool = False, embed: Embed = MISSING, embeds: Sequence[Embed] = MISSING, file: File = MISSING, files: Sequence[File] = MISSING, stickers: Sequence[Union[GuildSticker, StickerItem]] = MISSING, allowed_mentions: AllowedMentions = MISSING, mention_author: bool = MISSING, applied_tags: Sequence[ForumTag] = MISSING, view: BaseView = MISSING, suppress_embeds: bool = False, silent: bool = False, reason: Optional[str] = None,) -> ThreadWithMessage`

*coroutine*

Creates a thread in this forum.

This thread is a public thread with the initial message given. Currently in order
to start a thread in this forum, the user needs `discord.Permissions.send_messages`.

You must send at least one of `content`, `embed`, `embeds`, `file`, `files`,
or `view` to create a thread in a forum, since forum channels must have a starter message.

## Parameters

**name: `str`**

The name of the thread.

**auto\_archive\_duration: `int`**

The duration in minutes before a thread is automatically hidden from the channel list.
If not provided, the channel's default auto archive duration is used.

Must be one of `60`, `1440`, `4320`, or `10080`, if provided.

**slowmode\_delay: Optional\[`int`]**

Specifies the slowmode rate limit for user in this channel, in seconds.
The maximum value possible is `21600`. By default no slowmode rate limit
if this is `None`.

**content: Optional\[`str`]**

The content of the message to send with the thread.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**embed: `discord.Embed`**

The rich embed for the content.

**embeds: List\[`discord.Embed`]**

A list of embeds to upload. Must be a maximum of 10.

**file: `discord.File`**

The file to upload.

**files: List\[`discord.File`]**

A list of files to upload. Must be a maximum of 10.

**allowed\_mentions: `discord.AllowedMentions`**

Controls the mentions being processed in this message. If this is
passed, then the object is merged with `discord.Client.allowed_mentions`.
The merging behaviour only overrides attributes that have been explicitly passed
to the object, otherwise it uses the attributes set in `discord.Client.allowed_mentions`.
If no object is passed at all then the defaults given by `discord.Client.allowed_mentions`
are used instead.

**mention\_author: `bool`**

If set, overrides the `discord.AllowedMentions.replied_user` attribute of `allowed_mentions`.

**applied\_tags: List\[`discord.ForumTag`]**

A list of tags to apply to the thread.

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

A Discord UI View to add to the message.

**stickers: Sequence\[Union\[`discord.GuildSticker`, `discord.StickerItem`]]**

A list of stickers to upload. Must be a maximum of 3.

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.7**

**reason: `str`**

The reason for creating a new thread. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create a thread.

**HTTPException**

Starting the thread failed.

**ValueError**

The `files` or `embeds` list is not of the appropriate size.

**TypeError**

You specified both `file` and `files`,
or you specified both `embed` and `embeds`.

## Returns

**Tuple\[`Thread`, `Message`]**

The created thread with the created message.
This is also accessible as a namedtuple with `thread` and `message` fields.

<a id="api-forumchannel-webhooks"></a>

##### `webhooks(self) -> List[Webhook]`

*coroutine*

Gets the list of webhooks from this channel.

You must have `.Permissions.manage_webhooks` to do this.

## Raises

**Forbidden**

You don't have permissions to get the webhooks.

## Returns

**List\[`Webhook`]**

The webhooks for this channel.

<a id="api-forumchannel-create-webhook"></a>

##### `create_webhook(self, *, name: str, avatar: Optional[bytes] = None, reason: Optional[str] = None) -> Webhook`

*coroutine*

Creates a webhook for this channel.

You must have `.Permissions.manage_webhooks` to do this.

## Parameters

**name: `str`**

The webhook's name.

**avatar: Optional\[`bytes`]**

A `py:bytes-like object` representing the webhook's default avatar.
This operates similarly to `ClientUser.edit`.

**reason: Optional\[`str`]**

The reason for creating this webhook. Shows up in the audit logs.

## Raises

**HTTPException**

Creating the webhook failed.

**Forbidden**

You do not have permissions to create a webhook.

## Returns

**`Webhook`**

The created webhook.

<a id="api-forumchannel-archived-threads"></a>

##### `archived_threads( self, *, limit: Optional[int] = 100, before: Optional[Union[Snowflake, datetime.datetime]] = None,) -> AsyncIterator[Thread]`

Returns an `asynchronous iterator` that iterates over all archived threads in this forum
in order of decreasing `Thread.archive_timestamp`.

You must have `Permissions.read_message_history` to do this.

> **Added in version 2.0**

## Parameters

**limit: Optional\[`bool`]**

The number of threads to retrieve.
If `None`, retrieves every archived thread in the channel. Note, however,
that this would make it a slow operation.

**before: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Retrieve archived channels before the given date or ID.

## Raises

**Forbidden**

You do not have permissions to get archived threads.

**HTTPException**

The request to get the archived threads failed.

## Yields

**`Thread`**

The archived threads.

### Thread

<a id="api-thread"></a>

#### `Thread(Messageable, Hashable)`

Represents a Discord thread.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two threads are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two threads are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the thread's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the thread's name.

> **Added in version 2.0**

## Attributes

**name: `str`**

The thread name.

**guild: `Guild`**

The guild the thread belongs to.

**id: `int`**

The thread ID. This is the same as the thread starter message ID.

**parent\_id: `int`**

The parent `TextChannel` or `ForumChannel` ID this thread belongs to.

**owner\_id: `int`**

The user's ID that created this thread.

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this thread. It may
*not* point to an existing or valid message.

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this thread. A value of `0` denotes that it is disabled.
Bots and users with `Permissions.bypass_slowmode` bypass slowmode.

**message\_count: `int`**

An approximate number of messages in this thread.

**member\_count: `int`**

An approximate number of members in this thread. This caps at 50.

**total\_message\_sent: `int`**

The total number of messages sent, including deleted messages.

> **Added in version 2.6**

**me: Optional\[`ThreadMember`]**

A thread member representing yourself, if you've joined the thread.
This could not be available.

**archived: `bool`**

Whether the thread is archived.

**locked: `bool`**

Whether the thread is locked.

**invitable: `bool`**

Whether non-moderators can add other non-moderators to this thread.
This is always `True` for public threads.

**archiver\_id: Optional\[`int`]**

The user's ID that archived this thread.

> **Note**
> Due to an API change, the `archiver_id` will always be `None` and can only be obtained via the audit log.

**auto\_archive\_duration: `int`**

The duration in minutes until the thread is automatically hidden from the channel list.
Usually a value of 60, 1440, 4320 and 10080.

**archive\_timestamp: `datetime.datetime`**

An aware timestamp of when the thread's archived status was last updated in UTC.

<a id="api-thread-type"></a>

##### `type(self) -> ThreadChannelType`

`ChannelType`: The channel's Discord type.

<a id="api-thread-parent"></a>

##### `parent(self) -> Optional[Union[ForumChannel, TextChannel]]`

Optional\[Union\[`ForumChannel`, `TextChannel`]]: The parent channel this thread belongs to.

<a id="api-thread-flags"></a>

##### `flags(self) -> ChannelFlags`

`ChannelFlags`: The flags associated with this thread.

<a id="api-thread-owner"></a>

##### `owner(self) -> Optional[Member]`

Optional\[`Member`]: The member this thread belongs to.

<a id="api-thread-mention"></a>

##### `mention(self) -> str`

`str`: The string that allows you to mention the thread.

<a id="api-thread-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the thread.

> **Added in version 2.0**

<a id="api-thread-members"></a>

##### `members(self) -> List[ThreadMember]`

List\[`ThreadMember`]: A list of thread members in this thread.

This requires `Intents.members` to be properly filled. Most of the time however,
this data is not provided by the gateway and a call to `fetch_members` is
needed.

<a id="api-thread-applied-tags"></a>

##### `applied_tags(self) -> List[ForumTag]`

List\[`ForumTag`]: A list of tags applied to this thread.

> **Added in version 2.1**

<a id="api-thread-starter-message"></a>

##### `starter_message(self) -> Optional[Message]`

Returns the thread starter message from the cache.

The message might not be cached, valid, or point to an existing message.

Note that the thread starter message ID is the same ID as the thread.

## Returns

**Optional\[`Message`]**

The thread starter message or `None` if not found.

<a id="api-thread-last-message"></a>

##### `last_message(self) -> Optional[Message]`

Returns the last message from this thread from the cache.

The message might not be valid or point to an existing message.

> **Reliable Fetching**
>
> - **Class:** helpful
>
> For a slightly more reliable method of fetching the
> last message, consider using either `history`
> or `fetch_message` with the `last_message_id`
> attribute.

## Returns

**Optional\[`Message`]**

The last message in this channel or `None` if not found.

<a id="api-thread-category"></a>

##### `category(self) -> Optional[CategoryChannel]`

The category channel the parent channel belongs to, if applicable.

## Raises

**ClientException**

The parent channel was not cached and returned `None`.

## Returns

**Optional\[`CategoryChannel`]**

The parent channel's category.

<a id="api-thread-category-id"></a>

##### `category_id(self) -> Optional[int]`

The category channel ID the parent channel belongs to, if applicable.

## Raises

**ClientException**

The parent channel was not cached and returned `None`.

## Returns

**Optional\[`int`]**

The parent channel's category ID.

<a id="api-thread-created-at"></a>

##### `created_at(self) -> Optional[datetime]`

An aware timestamp of when the thread was created in UTC.

> **Note**
> This timestamp only exists for threads created after 9 January 2022, otherwise returns `None`.

<a id="api-thread-is-private"></a>

##### `is_private(self) -> bool`

`bool`: Whether the thread is a private thread.

A private thread is only viewable by those that have been explicitly
invited or have `.Permissions.manage_threads`.

<a id="api-thread-is-news"></a>

##### `is_news(self) -> bool`

`bool`: Whether the thread is a news thread.

A news thread is a thread that has a parent that is a news channel,
i.e. `.TextChannel.is_news` is `True`.

<a id="api-thread-is-nsfw"></a>

##### `is_nsfw(self) -> bool`

`bool`: Whether the thread is NSFW or not.

An NSFW thread is a thread that has a parent that is an NSFW channel,
i.e. `.TextChannel.is_nsfw` is `True`.

<a id="api-thread-permissions-for"></a>

##### `permissions_for(self, obj: Union[Member, Role], /) -> Permissions`

Handles permission resolution for the `discord.Member`
or `discord.Role`.

Since threads do not have their own permissions, they mostly
inherit them from the parent channel with some implicit
permissions changed.

## Parameters

**obj: Union\[`discord.Member`, `discord.Role`]**

The object to resolve permissions for. This could be either
a member or a role. If it's a role then member overwrites
are not computed.

## Raises

**ClientException**

The parent channel was not cached and returned `None`

## Returns

**`discord.Permissions`**

The resolved permissions for the member or role.

<a id="api-thread-delete-messages"></a>

##### `delete_messages(self, messages: Iterable[Snowflake], /, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes a list of messages. This is similar to `Message.delete`
except it bulk deletes multiple messages.

As a special case, if the number of messages is 0, then nothing
is done. If the number of messages is 1 then single message
delete is done. If it's more than two, then bulk delete is used.

You cannot bulk delete more than 100 messages or messages that
are older than 14 days old.

You must have `Permissions.manage_messages` to do this.

## Parameters

**messages: Iterable\[`abc.Snowflake`]**

An iterable of messages denoting which ones to bulk delete.

**reason: Optional\[`str`]**

The reason for deleting the messages. Shows up on the audit log.

## Raises

**ClientException**

The number of messages to delete was more than 100.

**Forbidden**

You do not have proper permissions to delete the messages or
you're not using a bot account.

**NotFound**

If single delete, then the message was already deleted.

**HTTPException**

Deleting the messages failed.

<a id="api-thread-purge"></a>

##### `purge( self, *, limit: Optional[int] = 100, check: Callable[[Message], bool] = MISSING, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, around: Optional[SnowflakeTime] = None, oldest_first: Optional[bool] = None, bulk: bool = True, reason: Optional[str] = None,) -> List[Message]`

*coroutine*

Purges a list of messages that meet the criteria given by the predicate
`check`. If a `check` is not provided then all messages are deleted
without discrimination.

You must have `Permissions.manage_messages` to
delete messages even if they are your own.
Having `Permissions.read_message_history` is
also needed to retrieve message history.

## Examples

Deleting bot's messages :

```python
def is_me(m):
    return m.author == client.user

deleted = await thread.purge(limit=100, check=is_me)
await thread.send(f'Deleted {len(deleted)} message(s)')
```

## Parameters

**limit: Optional\[`int`]**

The number of messages to search through. This is not the number
of messages that will be deleted, though it can be.

**check: Callable\[\[`Message`], `bool`]**

The function used to check if a message should be deleted.
It must take a `Message` as its sole parameter.

**before: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `before` in `history`.

**after: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `after` in `history`.

**around: Optional\[Union\[`abc.Snowflake`, `datetime.datetime`]]**

Same as `around` in `history`.

**oldest\_first: Optional\[`bool`]**

Same as `oldest_first` in `history`.

**bulk: `bool`**

If `True`, use bulk delete. Setting this to `False` is useful for mass-deleting
a bot's own messages without `Permissions.manage_messages`. When `True`, will
fall back to single delete if messages are older than two weeks.

**reason: Optional\[`str`]**

The reason for purging the messages. Shows up on the audit log.

## Raises

**Forbidden**

You do not have proper permissions to do the actions required.

**HTTPException**

Purging the messages failed.

## Returns

**List\[`.Message`]**

The list of messages that were deleted.

<a id="api-thread-edit"></a>

##### `edit( self, *, name: str = MISSING, archived: bool = MISSING, locked: bool = MISSING, invitable: bool = MISSING, pinned: bool = MISSING, slowmode_delay: int = MISSING, auto_archive_duration: ThreadArchiveDuration = MISSING, applied_tags: Sequence[ForumTag] = MISSING, reason: Optional[str] = None,) -> Thread`

*coroutine*

Edits the thread.

Editing the thread requires `.Permissions.manage_threads`. The thread
creator can also edit `name`, `archived` or `auto_archive_duration`.
Note that if the thread is locked then only those with `.Permissions.manage_threads`
can unarchive a thread.

The thread must be unarchived to be edited.

## Parameters

**name: `str`**

The new name of the thread.

**archived: `bool`**

Whether to archive the thread or not.

**locked: `bool`**

Whether to lock the thread or not.

**pinned: `bool`**

Whether to pin the thread or not. This only works if the thread is part of a forum.

**invitable: `bool`**

Whether non-moderators can add other non-moderators to this thread.
Only available for private threads.

**auto\_archive\_duration: `int`**

The new duration in minutes before a thread is automatically hidden from the channel list.
Must be one of `60`, `1440`, `4320`, or `10080`.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this thread, in seconds.
A value of `0` disables slowmode. The maximum value possible is `21600`.

**applied\_tags: Sequence\[`ForumTag`]**

The new tags to apply to the thread. There can only be up to 5 tags applied to a thread.

> **Added in version 2.1**

**reason: Optional\[`str`]**

The reason for editing this thread. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to edit the thread.

**HTTPException**

Editing the thread failed.

## Returns

**`Thread`**

The newly edited thread.

<a id="api-thread-add-tags"></a>

##### `add_tags(self, *tags: Snowflake, reason: Optional[str] = None) -> None`

*coroutine*

Adds the given forum tags to a thread.

You must have `Permissions.manage_threads` to
use this or the thread must be owned by you.

Tags that have `ForumTag.moderated` set to `True` require
`Permissions.manage_threads` to be added.

The maximum number of tags that can be added to a thread is 5.

The parent channel must be a `ForumChannel`.

> **Added in version 2.1**

## Parameters

**\*tags: `abc.Snowflake`**

An argument list of `abc.Snowflake` representing a `ForumTag`
to add to the thread.

**reason: Optional\[`str`]**

The reason for adding these tags.

## Raises

**Forbidden**

You do not have permissions to add these tags.

**HTTPException**

Adding tags failed.

<a id="api-thread-remove-tags"></a>

##### `remove_tags(self, *tags: Snowflake, reason: Optional[str] = None) -> None`

*coroutine*

Remove the given forum tags to a thread.

You must have `Permissions.manage_threads` to
use this or the thread must be owned by you.

The parent channel must be a `ForumChannel`.

> **Added in version 2.1**

## Parameters

**\*tags: `abc.Snowflake`**

An argument list of `abc.Snowflake` representing a `ForumTag`
to remove to the thread.

**reason: Optional\[`str`]**

The reason for removing these tags.

## Raises

**Forbidden**

You do not have permissions to remove these tags.

**HTTPException**

Removing tags failed.

<a id="api-thread-join"></a>

##### `join(self) -> None`

*coroutine*

Joins this thread.

You must have `Permissions.send_messages_in_threads` to join a thread.
If the thread is private, `Permissions.manage_threads` is also needed.

## Raises

**Forbidden**

You do not have permissions to join the thread.

**HTTPException**

Joining the thread failed.

<a id="api-thread-leave"></a>

##### `leave(self) -> None`

*coroutine*

Leaves this thread.

## Raises

**HTTPException**

Leaving the thread failed.

<a id="api-thread-add-user"></a>

##### `add_user(self, user: Snowflake, /) -> None`

*coroutine*

Adds a user to this thread.

You must have `Permissions.send_messages_in_threads` to add a user to a thread.
If the thread is private and `invitable` is `False` then `Permissions.manage_messages`
is required to add a user to the thread.

## Parameters

**user: `abc.Snowflake`**

The user to add to the thread.

## Raises

**Forbidden**

You do not have permissions to add the user to the thread.

**HTTPException**

Adding the user to the thread failed.

<a id="api-thread-remove-user"></a>

##### `remove_user(self, user: Snowflake, /) -> None`

*coroutine*

Removes a user from this thread.

You must have `Permissions.manage_threads` or be the creator of the thread to remove a user.

## Parameters

**user: `abc.Snowflake`**

The user to remove from the thread.

## Raises

**Forbidden**

You do not have permissions to remove the user from the thread.

**HTTPException**

Removing the user from the thread failed.

<a id="api-thread-fetch-member"></a>

##### `fetch_member(self, user_id: int, /) -> ThreadMember`

*coroutine*

Retrieves a `ThreadMember` for the given user ID.

## Raises

**NotFound**

The specified user is not a member of this thread.

**HTTPException**

Retrieving the member failed.

## Returns

**`ThreadMember`**

The thread member from the user ID.

<a id="api-thread-fetch-members"></a>

##### `fetch_members(self) -> List[ThreadMember]`

*coroutine*

Retrieves all `ThreadMember` that are in this thread.

This requires `Intents.members` to get information about members
other than yourself.

## Raises

**HTTPException**

Retrieving the members failed.

## Returns

**List\[`ThreadMember`]**

All thread members in the thread.

<a id="api-thread-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes this thread.

You must have `Permissions.manage_threads` to delete threads.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this thread.
Shows up on the audit log.

> **Added in version 2.4**

## Raises

**Forbidden**

You do not have permissions to delete this thread.

**HTTPException**

Deleting the thread failed.

<a id="api-thread-get-partial-message"></a>

##### `get_partial_message(self, message_id: int, /) -> PartialMessage`

Creates a `PartialMessage` from the message ID.

This is useful if you want to work with a message and only have its ID without
doing an unnecessary API call.

> **Added in version 2.0**

## Parameters

**message\_id: `int`**

The message ID to create a partial message for.

## Returns

**`PartialMessage`**

The partial message.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### ThreadMember

<a id="api-threadmember"></a>

#### `ThreadMember(Hashable)`

Represents a Discord thread member.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two thread members are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two thread members are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the thread member's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the thread member's name.

> **Added in version 2.0**

## Attributes

**id: `int`**

The thread member's ID.

**thread\_id: `int`**

The thread's ID.

**joined\_at: `datetime.datetime`**

The time the member joined the thread in UTC.

<a id="api-threadmember-thread"></a>

##### `thread(self) -> Thread`

`Thread`: The thread this member belongs to.

### VoiceChannel

<a id="api-voicechannel"></a>

#### `VoiceChannel(VocalGuildChannel)`

Represents a Discord guild voice channel.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the channel's name.

## Attributes

**name: `str`**

The channel name.

**guild: `Guild`**

The guild the channel belongs to.

**id: `int`**

The channel ID.

**nsfw: `bool`**

If the channel is marked as "not safe for work" or "age restricted".

> **Added in version 2.0**

**category\_id: Optional\[`int`]**

The category channel ID this channel belongs to, if applicable.

**position: `int`**

The position in the channel list. This is a number that starts at 0. e.g. the
top channel is position 0.

**bitrate: `int`**

The channel's preferred audio bitrate in bits per second.

**user\_limit: `int`**

The channel's limit for number of members that can be in a voice channel.

**rtc\_region: Optional\[`str`]**

The region for the voice channel's voice communication.
A value of `None` indicates automatic voice region detection.

> **Added in version 1.7**

> **Changed in version 2.0**
> The type of this attribute has changed to `str`.

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the voice channel's participants.

> **Added in version 2.0**

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this channel. It may
*not* point to an existing or valid message.

> **Added in version 2.0**

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this channel. A value of `0` denotes that it is disabled.
Bots and users with `Permissions.bypass_slowmode` bypass slowmode.

> **Added in version 2.2**

<a id="api-voicechannel-type"></a>

##### `type(self) -> Literal[ChannelType.voice]`

`ChannelType`: The channel's Discord type.

<a id="api-voicechannel-edit"></a>

##### `edit(self, *, reason: Optional[str] = None, **options: Any) -> Optional[VoiceChannel]`

*coroutine*

Edits the channel.

You must have `Permissions.manage_channels` to do this.

> **Changed in version 1.3**
> The `overwrites` keyword-only parameter was added.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited channel is returned instead.

> **Changed in version 2.0**
> The `region` parameter now accepts `str` instead of an enum.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**name: `str`**

The new channel's name.

**bitrate: `int`**

The new channel's bitrate.

**nsfw: `bool`**

To mark the channel as NSFW or not.

**user\_limit: `int`**

The new channel's user limit.

**position: `int`**

The new channel's position.

**sync\_permissions: `bool`**

Whether to sync permissions with the channel's new or pre-existing
category. Defaults to `False`.

**category: Optional\[`CategoryChannel`]**

The new category for this channel. Can be `None` to remove the
category.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this channel, in seconds.
A value of `0` disables slowmode. The maximum value possible is `21600`.

**reason: Optional\[`str`]**

The reason for editing this channel. Shows up on the audit log.

**overwrites: `Mapping`**

A `Mapping` of target (either a role or a member) to
`PermissionOverwrite` to apply to the channel.

**rtc\_region: Optional\[`str`]**

The new region for the voice channel's voice communication.
A value of `None` indicates automatic voice region detection.

> **Added in version 1.7**

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the voice channel's participants.

> **Added in version 2.0**

**status: Optional\[`str`]**

The new voice channel status. It can be up to 500 characters.
Can be `None` to remove the status.

> **Added in version 2.4**

## Raises

**TypeError**

If the permission overwrite information is not in proper form.

**Forbidden**

You do not have permissions to edit the channel.

**HTTPException**

Editing the channel failed.

## Returns

**Optional\[`.VoiceChannel`]**

The newly edited voice channel. If the edit was only positional
then `None` is returned instead.

<a id="api-voicechannel-send-sound"></a>

##### `send_sound(self, sound: Union[SoundboardSound, SoundboardDefaultSound], /) -> None`

*coroutine*

Sends a soundboard sound for this channel.

You must have `Permissions.speak` and `Permissions.use_soundboard` to do this.
Additionally, you must have `Permissions.use_external_sounds` if the sound is from
a different guild.

> **Added in version 2.5**

## Parameters

**sound: Union\[`SoundboardSound`, `SoundboardDefaultSound`]**

The sound to send for this channel.

## Raises

**Forbidden**

You do not have permissions to send a sound for this channel.

**HTTPException**

Sending the sound failed.

<a id="api-voicechanneleffect"></a>

#### `VoiceChannelEffect`

Represents a Discord voice channel effect.

> **Added in version 2.5**

## Attributes

**channel: `VoiceChannel`**

The channel in which the effect is sent.

**user: Optional\[`Member`]**

The user who sent the effect. `None` if not found in cache.

**animation: Optional\[`VoiceChannelEffectAnimation`]**

The animation the effect has. Returns `None` if the effect has no animation.

**emoji: Optional\[`PartialEmoji`]**

The emoji of the effect.

**sound: Optional\[`VoiceChannelSoundEffect`]**

The sound of the effect. Returns `None` if it's an emoji effect.

<a id="api-voicechanneleffect-is-sound"></a>

##### `is_sound(self) -> bool`

`bool`: Whether the effect is a sound or not.

<a id="class-voicechanneleffectanimation"></a>

#### `VoiceChannelEffectAnimation`

A namedtuple which represents a voice channel effect animation.

> **Added in version 2.5**

<a id="attribute-id"></a>

##### `id`

The ID of the animation.

- **Type:** `int`

<a id="attribute-type"></a>

##### `type`

The type of the animation.

- **Type:** `VoiceChannelEffectAnimationType`

<a id="api-voicechannelsoundeffect"></a>

#### `VoiceChannelSoundEffect(BaseSoundboardSound)`

Represents a Discord voice channel sound effect.

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two sound effects are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two sound effects are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the sound effect's hash.

## Attributes

**id: `int`**

The ID of the sound.

**volume: `float`**

The volume of the sound as floating point percentage (e.g. `1.0` for 100%).

<a id="api-voicechannelsoundeffect-created-at"></a>

##### `created_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: Returns the snowflake's creation time in UTC.
Returns `None` if it's a default sound.

<a id="api-voicechannelsoundeffect-is-default"></a>

##### `is_default(self) -> bool`

`bool`: Whether it's a default sound or not.

### StageChannel

<a id="api-stagechannel"></a>

#### `StageChannel(VocalGuildChannel)`

Represents a Discord guild stage channel.

> **Added in version 1.7**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the channel's name.

## Attributes

**name: `str`**

The channel name.

**guild: `Guild`**

The guild the channel belongs to.

**id: `int`**

The channel ID.

**nsfw: `bool`**

If the channel is marked as "not safe for work" or "age restricted".

> **Added in version 2.0**

**topic: Optional\[`str`]**

The channel's topic. `None` if it isn't set.

**category\_id: Optional\[`int`]**

The category channel ID this channel belongs to, if applicable.

**position: `int`**

The position in the channel list. This is a number that starts at 0. e.g. the
top channel is position 0.

**bitrate: `int`**

The channel's preferred audio bitrate in bits per second.

**user\_limit: `int`**

The channel's limit for number of members that can be in a stage channel.

**rtc\_region: Optional\[`str`]**

The region for the stage channel's voice communication.
A value of `None` indicates automatic voice region detection.

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the stage channel's participants.

> **Added in version 2.0**

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this channel. It may
*not* point to an existing or valid message.

> **Added in version 2.2**

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this channel. A value of `0` denotes that it is disabled.
Bots and users with `Permissions.bypass_slowmode` bypass slowmode.

> **Added in version 2.2**

<a id="api-stagechannel-requesting-to-speak"></a>

##### `requesting_to_speak(self) -> List[Member]`

List\[`Member`]: A list of members who are requesting to speak in the stage channel.

<a id="api-stagechannel-speakers"></a>

##### `speakers(self) -> List[Member]`

List\[`Member`]: A list of members who have been permitted to speak in the stage channel.

> **Added in version 2.0**

<a id="api-stagechannel-listeners"></a>

##### `listeners(self) -> List[Member]`

List\[`Member`]: A list of members who are listening in the stage channel.

> **Added in version 2.0**

<a id="api-stagechannel-moderators"></a>

##### `moderators(self) -> List[Member]`

List\[`Member`]: A list of members who are moderating the stage channel.

> **Added in version 2.0**

<a id="api-stagechannel-type"></a>

##### `type(self) -> Literal[ChannelType.stage_voice]`

`ChannelType`: The channel's Discord type.

<a id="api-stagechannel-instance"></a>

##### `instance(self) -> Optional[StageInstance]`

Optional\[`StageInstance`]: The running stage instance of the stage channel.

> **Added in version 2.0**

<a id="api-stagechannel-create-instance"></a>

##### `create_instance( self, *, topic: str, privacy_level: PrivacyLevel = MISSING, send_start_notification: bool = False, scheduled_event: Snowflake = MISSING, reason: Optional[str] = None,) -> StageInstance`

*coroutine*

Create a stage instance.

You must have `Permissions.manage_channels` to do this.

> **Added in version 2.0**

## Parameters

**topic: `str`**

The stage instance's topic.

**privacy\_level: `PrivacyLevel`**

The stage instance's privacy level. Defaults to `PrivacyLevel.guild_only`.

**send\_start\_notification: `bool`**

Whether to send a start notification. This sends a push notification to @everyone if `True`. Defaults to `False`.
You must have `Permissions.mention_everyone` to do this.

> **Added in version 2.3**

**scheduled\_event: `discord.abc.Snowflake`**

The guild scheduled event associated with the stage instance.

> **Added in version 2.4**

**reason: `str`**

The reason the stage instance was created. Shows up on the audit log.

## Raises

**TypeError**

If the `privacy_level` parameter is not the proper type.

**Forbidden**

You do not have permissions to create a stage instance.

**HTTPException**

Creating a stage instance failed.

## Returns

**`StageInstance`**

The newly created stage instance.

<a id="api-stagechannel-fetch-instance"></a>

##### `fetch_instance(self) -> StageInstance`

*coroutine*

Gets the running `StageInstance`.

> **Added in version 2.0**

## Raises

**NotFound**

The stage instance or channel could not be found.

**HTTPException**

Getting the stage instance failed.

## Returns

**`StageInstance`**

The stage instance.

<a id="api-stagechannel-edit"></a>

##### `edit(self, *, reason: Optional[str] = None, **options: Any) -> Optional[StageChannel]`

*coroutine*

Edits the channel.

You must have `Permissions.manage_channels` to do this.

> **Changed in version 2.0**
> The `topic` parameter must now be set via `create_instance`.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited channel is returned instead.

> **Changed in version 2.0**
> The `region` parameter now accepts `str` instead of an enum.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**name: `str`**

The new channel's name.

**bitrate: `int`**

The new channel's bitrate.

**position: `int`**

The new channel's position.

**nsfw: `bool`**

To mark the channel as NSFW or not.

**user\_limit: `int`**

The new channel's user limit.

**sync\_permissions: `bool`**

Whether to sync permissions with the channel's new or pre-existing
category. Defaults to `False`.

**category: Optional\[`CategoryChannel`]**

The new category for this channel. Can be `None` to remove the
category.

**slowmode\_delay: `int`**

Specifies the slowmode rate limit for user in this channel, in seconds.
A value of `0` disables slowmode. The maximum value possible is `21600`.

**reason: Optional\[`str`]**

The reason for editing this channel. Shows up on the audit log.

**overwrites: `Mapping`**

A `Mapping` of target (either a role or a member) to
`PermissionOverwrite` to apply to the channel.

**rtc\_region: Optional\[`str`]**

The new region for the stage channel's voice communication.
A value of `None` indicates automatic voice region detection.

**video\_quality\_mode: `VideoQualityMode`**

The camera video quality for the stage channel's participants.

> **Added in version 2.0**

## Raises

**ValueError**

If the permission overwrite information is not in proper form.

**Forbidden**

You do not have permissions to edit the channel.

**HTTPException**

Editing the channel failed.

## Returns

**Optional\[`.StageChannel`]**

The newly edited stage channel. If the edit was only positional
then `None` is returned instead.

### StageInstance

<a id="api-stageinstance"></a>

#### `StageInstance(Hashable)`

Represents a stage instance of a stage channel in a guild.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two stage instances are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two stage instances are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the stage instance's hash.

## Attributes

**id: `int`**

The stage instance's ID.

**guild: `Guild`**

The guild that the stage instance is running in.

**channel\_id: `int`**

The ID of the channel that the stage instance is running in.

**topic: `str`**

The topic of the stage instance.

**privacy\_level: `PrivacyLevel`**

The privacy level of the stage instance.

**discoverable\_disabled: `bool`**

Whether discoverability for the stage instance is disabled.

**scheduled\_event\_id: Optional\[`int`]**

The ID of scheduled event that belongs to the stage instance if any.

> **Added in version 2.0**

<a id="api-stageinstance-channel"></a>

##### `channel(self) -> Optional[StageChannel]`

Optional\[`StageChannel`]: The channel that stage instance is running in.

<a id="api-stageinstance-scheduled-event"></a>

##### `scheduled_event(self) -> Optional[ScheduledEvent]`

Optional\[`ScheduledEvent`]: The scheduled event that belongs to the stage instance.

<a id="api-stageinstance-edit"></a>

##### `edit( self, *, topic: str = MISSING, privacy_level: PrivacyLevel = MISSING, reason: Optional[str] = None,) -> None`

*coroutine*

Edits the stage instance.

You must have `Permissions.manage_channels` to do this.

## Parameters

**topic: `str`**

The stage instance's new topic.

**privacy\_level: `PrivacyLevel`**

The stage instance's new privacy level.

**reason: `str`**

The reason the stage instance was edited. Shows up on the audit log.

## Raises

**TypeError**

If the `privacy_level` parameter is not the proper type.

**Forbidden**

You do not have permissions to edit the stage instance.

**HTTPException**

Editing a stage instance failed.

<a id="api-stageinstance-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the stage instance.

You must have `Permissions.manage_channels` to do this.

## Parameters

**reason: `str`**

The reason the stage instance was deleted. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to delete the stage instance.

**HTTPException**

Deleting the stage instance failed.

### CategoryChannel

<a id="api-categorychannel"></a>

#### `CategoryChannel(discord.abc.GuildChannel, Hashable)`

Represents a Discord channel category.

These are useful to group channels to logical compartments.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the category's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the category's name.

## Attributes

**name: `str`**

The category name.

**guild: `Guild`**

The guild the category belongs to.

**id: `int`**

The category channel ID.

**position: `int`**

The position in the category list. This is a number that starts at 0. e.g. the
top category is position 0.

**nsfw: `bool`**

If the channel is marked as "not safe for work".

> **Note**
> To check if the channel or the guild of that channel are marked as NSFW, consider `is_nsfw` instead.

<a id="api-categorychannel-type"></a>

##### `type(self) -> Literal[ChannelType.category]`

`ChannelType`: The channel's Discord type.

<a id="api-categorychannel-is-nsfw"></a>

##### `is_nsfw(self) -> bool`

`bool`: Checks if the category is NSFW.

<a id="api-categorychannel-edit"></a>

##### `edit(self, *, reason: Optional[str] = None, **options: Any) -> Optional[CategoryChannel]`

*coroutine*

Edits the channel.

You must have `Permissions.manage_channels` to do this.

> **Changed in version 1.3**
> The `overwrites` keyword-only parameter was added.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited channel is returned instead.

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Parameters

**name: `str`**

The new category's name.

**position: `int`**

The new category's position.

**nsfw: `bool`**

To mark the category as NSFW or not.

**reason: Optional\[`str`]**

The reason for editing this category. Shows up on the audit log.

**overwrites: `Mapping`**

A `Mapping` of target (either a role or a member) to
`PermissionOverwrite` to apply to the channel.

## Raises

**ValueError**

If position is less than 0 or greater than the number of categories.

**TypeError**

The overwrite information is not in proper form.

**Forbidden**

You do not have permissions to edit the category.

**HTTPException**

Editing the category failed.

## Returns

**Optional\[`.CategoryChannel`]**

The newly edited category channel. If the edit was only positional
then `None` is returned instead.

<a id="api-categorychannel-channels"></a>

##### `channels(self) -> List[GuildChannelType]`

List\[`abc.GuildChannel`]: Returns the channels that are under this category.

These are sorted by the official Discord UI, which places voice channels below the text channels.

<a id="api-categorychannel-text-channels"></a>

##### `text_channels(self) -> List[TextChannel]`

List\[`TextChannel`]: Returns the text channels that are under this category.

<a id="api-categorychannel-voice-channels"></a>

##### `voice_channels(self) -> List[VoiceChannel]`

List\[`VoiceChannel`]: Returns the voice channels that are under this category.

<a id="api-categorychannel-stage-channels"></a>

##### `stage_channels(self) -> List[StageChannel]`

List\[`StageChannel`]: Returns the stage channels that are under this category.

> **Added in version 1.7**

<a id="api-categorychannel-forums"></a>

##### `forums(self) -> List[ForumChannel]`

List\[`ForumChannel`]: Returns the forum channels that are under this category.

> **Added in version 2.4**

<a id="api-categorychannel-create-text-channel"></a>

##### `create_text_channel(self, name: str, **options: Unpack[_CreateTextChannelOptions]) -> TextChannel`

*coroutine*

A shortcut method to `Guild.create_text_channel` to create a `TextChannel` in the category.

## Returns

**`TextChannel`**

The channel that was just created.

<a id="api-categorychannel-create-voice-channel"></a>

##### `create_voice_channel(self, name: str, **options: Unpack[_CreateVoiceChannelOptions]) -> VoiceChannel`

*coroutine*

A shortcut method to `Guild.create_voice_channel` to create a `VoiceChannel` in the category.

## Returns

**`VoiceChannel`**

The channel that was just created.

<a id="api-categorychannel-create-stage-channel"></a>

##### `create_stage_channel(self, name: str, **options: Unpack[_CreateStageChannelOptions]) -> StageChannel`

*coroutine*

A shortcut method to `Guild.create_stage_channel` to create a `StageChannel` in the category.

> **Added in version 1.7**

## Returns

**`StageChannel`**

The channel that was just created.

<a id="api-categorychannel-create-forum"></a>

##### `create_forum(self, name: str, **options: Unpack[_CreateForumChannelOptions]) -> ForumChannel`

*coroutine*

A shortcut method to `Guild.create_forum` to create a `ForumChannel` in the category.

> **Added in version 2.0**

## Returns

**`ForumChannel`**

The channel that was just created.

### DMChannel

<a id="api-dmchannel"></a>

#### `DMChannel(discord.abc.Messageable, discord.abc.PrivateChannel, Hashable)`

Represents a Discord direct message channel.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns a string representation of the channel

## Attributes

**recipient: Optional\[`User`]**

The user you are participating with in the direct message channel.
If this channel is received through the gateway, the recipient information
may not be always available.

**recipients: List\[`User`]**

The users you are participating with in the DM channel.

> **Added in version 2.4**

**me: `ClientUser`**

The user presenting yourself.

**id: `int`**

The direct message channel ID.

<a id="api-dmchannel-type"></a>

##### `type(self) -> Literal[ChannelType.private]`

`ChannelType`: The channel's Discord type.

<a id="api-dmchannel-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild this DM channel belongs to. Always `None`.

This is mainly provided for compatibility purposes in duck typing.

> **Added in version 2.0**

<a id="api-dmchannel-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the channel.

> **Added in version 2.0**

<a id="api-dmchannel-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the direct message channel's creation time in UTC.

<a id="api-dmchannel-permissions-for"></a>

##### `permissions_for(self, obj: Any = None, /) -> Permissions`

Handles permission resolution for a `User`.

This function is there for compatibility with other channel types.

Actual direct messages do not really have the concept of permissions.

This returns all the Text related permissions set to `True` except:

- `Permissions.send_tts_messages`: You cannot send TTS messages in a DM.
- `Permissions.manage_messages`: You cannot delete others messages in a DM.
- `Permissions.create_private_threads`: There are no threads in a DM.
- `Permissions.create_public_threads`: There are no threads in a DM.
- `Permissions.manage_threads`: There are no threads in a DM.
- `Permissions.send_messages_in_threads`: There are no threads in a DM.

> **Changed in version 2.0**
> `obj` parameter is now positional-only.

> **Changed in version 2.1**
> Thread related permissions are now set to `False`.

## Parameters

**obj: `User`**

The user to check permissions for. This parameter is ignored
but kept for compatibility with other `permissions_for` methods.

## Returns

**`Permissions`**

The resolved permissions.

<a id="api-dmchannel-get-partial-message"></a>

##### `get_partial_message(self, message_id: int, /) -> PartialMessage`

Creates a `PartialMessage` from the message ID.

This is useful if you want to work with a message and only have its ID without
doing an unnecessary API call.

> **Added in version 1.6**

> **Changed in version 2.0**
> `message_id` parameter is now positional-only.

## Parameters

**message\_id: `int`**

The message ID to create a partial message for.

## Returns

**`PartialMessage`**

The partial message.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### GroupChannel

<a id="api-groupchannel"></a>

#### `GroupChannel(discord.abc.Messageable, discord.abc.PrivateChannel, Hashable)`

Represents a Discord group channel.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channels are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channels are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns a string representation of the channel

## Attributes

**recipients: List\[`User`]**

The users you are participating with in the group channel.

**me: `ClientUser`**

The user presenting yourself.

**id: `int`**

The group channel ID.

**owner: Optional\[`User`]**

The user that owns the group channel.

**owner\_id: `int`**

The owner ID that owns the group channel.

> **Added in version 2.0**

**name: Optional\[`str`]**

The group channel's name if provided.

<a id="api-groupchannel-type"></a>

##### `type(self) -> Literal[ChannelType.group]`

`ChannelType`: The channel's Discord type.

<a id="api-groupchannel-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild this group channel belongs to. Always `None`.

This is mainly provided for compatibility purposes in duck typing.

> **Added in version 2.0**

<a id="api-groupchannel-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the channel's icon asset if available.

<a id="api-groupchannel-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the channel's creation time in UTC.

<a id="api-groupchannel-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the channel.

> **Added in version 2.0**

<a id="api-groupchannel-permissions-for"></a>

##### `permissions_for(self, obj: Snowflake, /) -> Permissions`

Handles permission resolution for a `User`.

This function is there for compatibility with other channel types.

Actual direct messages do not really have the concept of permissions.

This returns all the Text related permissions set to `True` except:

- `Permissions.send_tts_messages`: You cannot send TTS messages in a DM.
- `Permissions.manage_messages`: You cannot delete others messages in a DM.
- `Permissions.create_private_threads`: There are no threads in a DM.
- `Permissions.create_public_threads`: There are no threads in a DM.
- `Permissions.manage_threads`: There are no threads in a DM.
- `Permissions.send_messages_in_threads`: There are no threads in a DM.

This also checks the kick\_members permission if the user is the owner.

> **Changed in version 2.0**
> `obj` parameter is now positional-only.

> **Changed in version 2.1**
> Thread related permissions are now set to `False`.

## Parameters

**obj: `discord.abc.Snowflake`**

The user to check permissions for.

## Returns

**`Permissions`**

The resolved permissions for the user.

<a id="api-groupchannel-leave"></a>

##### `leave(self) -> None`

*coroutine*

Leave the group.

If you are the only one in the group, this deletes it as well.

## Raises

**HTTPException**

Leaving the group failed.

<a id="api-typing"></a>

#### `typing(self) -> Typing`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

Example Usage: :

```python
async with channel.typing():
    # simulate something heavy
    await asyncio.sleep(20)

await channel.send('Done!')
```

Example Usage: :

```python
await channel.typing()
# Do some computational magic for about 10 seconds
await channel.send('Done!')
```

> **Changed in version 2.0**
> This no longer works with the `with` syntax, `async with` must be used instead.

> **Changed in version 2.0**
> Added functionality to `await` the context manager to send a typing indicator for 10 seconds.

### PartialInviteGuild

<a id="api-partialinviteguild"></a>

#### `PartialInviteGuild`

Represents a "partial" invite guild.

This model will be given when the user is not part of the
guild the `Invite` resolves to.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two partial guilds are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two partial guilds are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the partial guild's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the partial guild's name.

## Attributes

**name: `str`**

The partial guild's name.

**id: `int`**

The partial guild's ID.

**verification\_level: `VerificationLevel`**

The partial guild's verification level.

**features: List\[`str`]**

A list of features the guild has. See `Guild.features` for more information.

**description: Optional\[`str`]**

The partial guild's description.

**nsfw\_level: `NSFWLevel`**

The partial guild's NSFW level.

> **Added in version 2.0**

**vanity\_url\_code: Optional\[`str`]**

The partial guild's vanity URL code, if available.

> **Added in version 2.0**

**premium\_subscription\_count: `int`**

The number of "boosts" the partial guild currently has.

> **Added in version 2.0**

<a id="api-partialinviteguild-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the guild's creation time in UTC.

<a id="api-partialinviteguild-vanity-url"></a>

##### `vanity_url(self) -> Optional[str]`

Optional\[`str`]: The Discord vanity invite URL for this partial guild, if available.

> **Added in version 2.0**

<a id="api-partialinviteguild-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's icon asset, if available.

<a id="api-partialinviteguild-banner"></a>

##### `banner(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's banner asset, if available.

<a id="api-partialinviteguild-splash"></a>

##### `splash(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's invite splash asset, if available.

### PartialInviteChannel

<a id="api-partialinvitechannel"></a>

#### `PartialInviteChannel`

Represents a "partial" invite channel.

This model will be given when the user is not part of the
guild the `Invite` resolves to.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two partial channels are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two partial channels are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the partial channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the partial channel's name.

## Attributes

**name: `str`**

The partial channel's name.

**id: `int`**

The partial channel's ID.

**type: `ChannelType`**

The partial channel's type.

<a id="api-partialinvitechannel-mention"></a>

##### `mention(self) -> str`

`str`: The string that allows you to mention the channel.

<a id="api-partialinvitechannel-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the channel's creation time in UTC.

### Invite

<a id="api-invite"></a>

#### `Invite(Hashable)`

Represents a Discord `Guild` or `abc.GuildChannel` invite.

Depending on the way this object was created, some of the attributes can
have a value of `None`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two invites are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two invites are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the invite hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the invite URL.

The following table illustrates what methods will obtain the attributes:

| Attribute                    | Method                                           |
| ---------------------------- | ------------------------------------------------ |
| `max_age`                    | `abc.GuildChannel.invites`, `Guild.invites`      |
| `max_uses`                   | `abc.GuildChannel.invites`, `Guild.invites`      |
| `created_at`                 | `abc.GuildChannel.invites`, `Guild.invites`      |
| `temporary`                  | `abc.GuildChannel.invites`, `Guild.invites`      |
| `uses`                       | `abc.GuildChannel.invites`, `Guild.invites`      |
| `approximate_member_count`   | `Client.fetch_invite` with `with_counts` enabled |
| `approximate_presence_count` | `Client.fetch_invite` with `with_counts` enabled |

If it's not in the table above then it is available by all methods.

## Attributes

**type: `InviteType`**

The type of the invite.

**max\_age: Optional\[`int`]**

How long before the invite expires in seconds.
A value of `0` indicates that it doesn't expire.

**code: `str`**

The URL fragment used for the invite.

**guild: Optional\[Union\[`Guild`, `Object`, `PartialInviteGuild`]]**

The guild the invite is for. Can be `None` if it's from a group direct message.

**revoked: Optional\[`bool`]**

Indicates if the invite has been revoked.

**created\_at: Optional\[`datetime.datetime`]**

An aware UTC datetime object denoting the time the invite was created.

**temporary: Optional\[`bool`]**

Indicates that the invite grants temporary membership.
If `True`, members who joined via this invite will be kicked upon disconnect.

**uses: Optional\[`int`]**

How many times the invite has been used.

**max\_uses: Optional\[`int`]**

How many times the invite can be used.
A value of `0` indicates that it has unlimited uses.

**inviter: Optional\[`User`]**

The user who created the invite.

**approximate\_member\_count: Optional\[`int`]**

The approximate number of members in the guild.

**approximate\_presence\_count: Optional\[`int`]**

The approximate number of members currently active in the guild.
This includes idle, dnd, online, and invisible members. Offline members are excluded.

**expires\_at: Optional\[`datetime.datetime`]**

The expiration date of the invite. If the value is `None` when received through
`Client.fetch_invite` with `with_expiration` enabled, the invite will never expire.

> **Added in version 2.0**

> **Changed in version 2.6**
> This will always be returned from all methods. `None` if the invite will
> never expire.

**channel: Optional\[Union\[`abc.GuildChannel`, `Object`, `PartialInviteChannel`]]**

The channel the invite is for.

**target\_type: `InviteTarget`**

The type of target for the voice channel invite.

> **Added in version 2.0**

**target\_user: Optional\[`User`]**

The user whose stream to display for this invite, if any.

> **Added in version 2.0**

**target\_application: Optional\[`PartialAppInfo`]**

The embedded application the invite targets, if any.

> **Added in version 2.0**

**scheduled\_event: Optional\[`ScheduledEvent`]**

The scheduled event associated with this invite, if any.

> **Added in version 2.0**

**scheduled\_event\_id: Optional\[`int`]**

The ID of the scheduled event associated with this invite, if any.

> **Added in version 2.0**

<a id="api-invite-id"></a>

##### `id(self) -> str`

`str`: Returns the proper code portion of the invite.

<a id="api-invite-url"></a>

##### `url(self) -> str`

`str`: A property that retrieves the invite URL.

<a id="api-invite-flags"></a>

##### `flags(self) -> InviteFlags`

`InviteFlags`: Returns the flags for this invite.

> **Added in version 2.6**

<a id="api-invite-set-scheduled-event"></a>

##### `set_scheduled_event(self, scheduled_event: Snowflake, /) -> Self`

Sets the scheduled event for this invite.

> **Added in version 2.0**

## Parameters

**scheduled\_event: `discord.abc.Snowflake`**

The ID of the scheduled event.

## Returns

**`Invite`**

The invite with the new scheduled event.

<a id="api-invite-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> Self`

*coroutine*

Revokes the instant invite.

You must have `Permissions.manage_channels` to do this.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this invite. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to revoke invites.

**NotFound**

The invite is invalid or expired.

**HTTPException**

Revoking the invite failed.

### Template

<a id="api-template"></a>

#### `Template`

Represents a Discord template.

> **Added in version 1.4**

## Attributes

**code: `str`**

The template code.

**uses: `int`**

How many times the template has been used.

**name: `str`**

The name of the template.

**description: `str`**

The description of the template.

**creator: `User`**

The creator of the template.

**created\_at: `datetime.datetime`**

An aware datetime in UTC representing when the template was created.

**updated\_at: `datetime.datetime`**

An aware datetime in UTC representing when the template was last updated.
This is referred to as "last synced" in the official Discord client.

**source\_guild: `Guild`**

The guild snapshot that represents the data that this template currently holds.

**is\_dirty: Optional\[`bool`]**

Whether the template has unsynced changes.

> **Added in version 2.0**

<a id="api-template-create-guild"></a>

##### `create_guild(self, name: str, icon: bytes = MISSING) -> Guild`

*coroutine*

Creates a `.Guild` using the template.

Bot accounts in more than 10 guilds are not allowed to create guilds.

> **Changed in version 2.0**
> The `region` parameter has been removed.

> **Changed in version 2.0**
> This function will now raise `ValueError` instead of
> `InvalidArgument`.

> **Deprecated in version 2.6**
> This function is deprecated and will be removed in a future version.

## Parameters

**name: `str`**

The name of the guild.

**icon: `bytes`**

The `py:bytes-like object` representing the icon. See `.ClientUser.edit`
for more details on what is expected.

## Raises

**HTTPException**

Guild creation failed.

**ValueError**

Invalid icon image format given. Must be PNG or JPG.

## Returns

**`.Guild`**

The guild created. This is not the same guild that is
added to cache.

<a id="api-template-sync"></a>

##### `sync(self) -> Template`

*coroutine*

Sync the template to the guild's current state.

You must have `Permissions.manage_guild` in the source guild to do this.

> **Added in version 1.7**

> **Changed in version 2.0**
> The template is no longer edited in-place, instead it is returned.

## Raises

**HTTPException**

Editing the template failed.

**Forbidden**

You don't have permissions to edit the template.

**NotFound**

This template does not exist.

## Returns

**`Template`**

The newly edited template.

<a id="api-template-edit"></a>

##### `edit( self, *, name: str = MISSING, description: Optional[str] = MISSING,) -> Template`

*coroutine*

Edit the template metadata.

You must have `Permissions.manage_guild` in the source guild to do this.

> **Added in version 1.7**

> **Changed in version 2.0**
> The template is no longer edited in-place, instead it is returned.

## Parameters

**name: `str`**

The template's new name.

**description: Optional\[`str`]**

The template's new description.

## Raises

**HTTPException**

Editing the template failed.

**Forbidden**

You don't have permissions to edit the template.

**NotFound**

This template does not exist.

## Returns

**`Template`**

The newly edited template.

<a id="api-template-delete"></a>

##### `delete(self) -> None`

*coroutine*

Delete the template.

You must have `Permissions.manage_guild` in the source guild to do this.

> **Added in version 1.7**

## Raises

**HTTPException**

Editing the template failed.

**Forbidden**

You don't have permissions to edit the template.

**NotFound**

This template does not exist.

<a id="api-template-url"></a>

##### `url(self) -> str`

`str`: The template url.

> **Added in version 2.0**

### WelcomeScreen

<a id="api-welcomescreen"></a>

#### `WelcomeScreen`

Represents a `Guild` welcome screen.

> **Added in version 2.0**

## Attributes

**description: `str`**

The description shown on the welcome screen.

**welcome\_channels: List\[`WelcomeChannel`]**

The channels shown on the welcome screen.

<a id="api-welcomescreen-enabled"></a>

##### `enabled(self) -> bool`

`bool`: Whether the welcome screen is displayed.

This is equivalent to checking if `WELCOME_SCREEN_ENABLED`
is present in `Guild.features`.

<a id="api-welcomescreen-edit"></a>

##### `edit( self, *, description: str = MISSING, welcome_channels: List[WelcomeChannel] = MISSING, enabled: bool = MISSING, reason: Optional[str] = None,) -> Self`

*coroutine*

Edit the welcome screen.

Welcome channels can only accept custom emojis if `Guild.premium_tier` is level 2 or above.

You must have `Permissions.manage_guild` in the guild to do this.

Usage: :

```python
rules_channel = guild.get_channel(12345678)
announcements_channel = guild.get_channel(87654321)

custom_emoji = utils.get(guild.emojis, name='loudspeaker')

await welcome_screen.edit(
    description='This is a very cool community server!',
    welcome_channels=[
        WelcomeChannel(channel=rules_channel, description='Read the rules!', emoji='👨‍🏫'),
        WelcomeChannel(channel=announcements_channel, description='Watch out for announcements!', emoji=custom_emoji),
    ]
)
```

## Parameters

**description: Optional\[`str`]**

The welcome screen's description.

**welcome\_channels: Optional\[List\[`WelcomeChannel`]]**

The welcome channels, in their respective order.

**enabled: Optional\[`bool`]**

Whether the welcome screen should be displayed.

**reason: Optional\[`str`]**

The reason for editing the welcome screen. Shows up on the audit log.

## Raises

**HTTPException**

Editing the welcome screen failed.

**Forbidden**

You don't have permissions to edit the welcome screen.

**NotFound**

This welcome screen does not exist.

### WelcomeChannel

<a id="api-welcomechannel"></a>

#### `WelcomeChannel`

Represents a `WelcomeScreen` welcome channel.

> **Added in version 2.0**

## Attributes

**channel: `abc.Snowflake`**

The guild channel that is being referenced.

**description: `str`**

The description shown of the channel.

**emoji: Optional\[`PartialEmoji`, `Emoji`, `str`]**

The emoji used beside the channel description.

### WidgetChannel

<a id="api-widgetchannel"></a>

#### `WidgetChannel`

Represents a "partial" widget channel.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two partial channels are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two partial channels are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the partial channel's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the partial channel's name.

## Attributes

**id: `int`**

The channel's ID.

**name: `str`**

The channel's name.

**position: `int`**

The channel's position

<a id="api-widgetchannel-mention"></a>

##### `mention(self) -> str`

`str`: The string that allows you to mention the channel.

<a id="api-widgetchannel-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the channel's creation time in UTC.

### WidgetMember

<a id="api-widgetmember"></a>

#### `WidgetMember(BaseUser)`

Represents a "partial" member of the widget's guild.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two widget members are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two widget members are not the same.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the widget member's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the widget member's handle (e.g. `name` or `name#discriminator`).

## Attributes

**id: `int`**

The member's ID.

**name: `str`**

The member's username.

**discriminator: `str`**

The member's discriminator. This is a legacy concept that is no longer used.

**global\_name: Optional\[`str`]**

The member's global nickname, taking precedence over the username in display.

> **Added in version 2.3**

**bot: `bool`**

Whether the member is a bot.

**status: `Status`**

The member's status.

**nick: Optional\[`str`]**

The member's guild-specific nickname. Takes precedence over the global name.

**avatar: Optional\[`str`]**

The member's avatar hash.

**activity: Optional\[Union\[`BaseActivity`, `Spotify`]]**

The member's activity.

**deafened: Optional\[`bool`]**

Whether the member is currently deafened.

**muted: Optional\[`bool`]**

Whether the member is currently muted.

**suppress: Optional\[`bool`]**

Whether the member is currently being suppressed.

**connected\_channel: Optional\[`WidgetChannel`]**

Which channel the member is connected to.

<a id="api-widgetmember-display-name"></a>

##### `display_name(self) -> str`

`str`: Returns the member's display name.

### Widget

<a id="api-widget"></a>

#### `Widget`

Represents a `Guild` widget.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two widgets are the same.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two widgets are not the same.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the widget's JSON URL.

## Attributes

**id: `int`**

The guild's ID.

**name: `str`**

The guild's name.

**channels: List\[`WidgetChannel`]**

The accessible voice channels in the guild.

**members: List\[`WidgetMember`]**

The online members in the guild. Offline members
do not appear in the widget.

> **Note**
> Due to a Discord limitation, if this data is available
> the users will be "anonymized" with linear IDs and discriminator
> information being incorrect. Likewise, the number of members
> retrieved is capped.

**presence\_count: `int`**

The approximate number of online members in the guild.
Offline members are not included in this count.

> **Added in version 2.0**

<a id="api-widget-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the member's creation time in UTC.

<a id="api-widget-json-url"></a>

##### `json_url(self) -> str`

`str`: The JSON URL of the widget.

<a id="api-widget-invite-url"></a>

##### `invite_url(self) -> Optional[str]`

Optional\[`str`]: The invite URL for the guild, if available.

<a id="api-widget-fetch-invite"></a>

##### `fetch_invite(self, *, with_counts: bool = True) -> Optional[Invite]`

*coroutine*

Retrieves an `Invite` from the widget's invite URL.
This is the same as `Client.fetch_invite`; the invite
code is abstracted away.

## Parameters

**with\_counts: `bool`**

Whether to include count information in the invite. This fills the
`Invite.approximate_member_count` and `Invite.approximate_presence_count`
fields.

## Returns

**Optional\[`Invite`]**

The invite from the widget's invite URL, if available.

### StickerPack

<a id="api-stickerpack"></a>

#### `StickerPack(Hashable)`

Represents a sticker pack.

> **Added in version 2.0**

<a id="describe-str-x"></a>

#### `str(x)`

Returns the name of the sticker pack.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the sticker pack is equal to another sticker pack.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the sticker pack is not equal to another sticker pack.

## Attributes

**name: `str`**

The name of the sticker pack.

**description: `str`**

The description of the sticker pack.

**id: `int`**

The id of the sticker pack.

**stickers: List\[`StandardSticker`]**

The stickers of this sticker pack.

**sku\_id: `int`**

The SKU ID of the sticker pack.

**cover\_sticker\_id: Optional\[`int`]**

The ID of the sticker used for the cover of the sticker pack.

**cover\_sticker: Optional\[`StandardSticker`]**

The sticker used for the cover of the sticker pack.

<a id="api-stickerpack-banner"></a>

##### `banner(self) -> Optional[Asset]`

`Asset`: The banner asset of the sticker pack.

### StickerItem

<a id="api-stickeritem"></a>

#### `StickerItem(_StickerTag)`

Represents a sticker item.

> **Added in version 2.0**

<a id="describe-str-x"></a>

#### `str(x)`

Returns the name of the sticker item.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the sticker item is equal to another sticker item.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the sticker item is not equal to another sticker item.

## Attributes

**name: `str`**

The sticker's name.

**id: `int`**

The id of the sticker.

**format: `StickerFormatType`**

The format for the sticker's image.

**url: `str`**

The URL for the sticker's image.

<a id="api-stickeritem-fetch"></a>

##### `fetch(self) -> Union[Sticker, StandardSticker, GuildSticker]`

*coroutine*

Attempts to retrieve the full sticker data of the sticker item.

## Raises

**HTTPException**

Retrieving the sticker failed.

## Returns

**Union\[`StandardSticker`, `GuildSticker`]**

The retrieved sticker.

### Sticker

<a id="api-sticker"></a>

#### `Sticker(_StickerTag)`

Represents a sticker.

> **Added in version 1.6**

<a id="describe-str-x"></a>

#### `str(x)`

Returns the name of the sticker.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the sticker is equal to another sticker.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the sticker is not equal to another sticker.

## Attributes

**name: `str`**

The sticker's name.

**id: `int`**

The id of the sticker.

**description: `str`**

The description of the sticker.

**format: `StickerFormatType`**

The format for the sticker's image.

**url: `str`**

The URL for the sticker's image.

<a id="api-sticker-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the sticker's creation time in UTC.

### StandardSticker

<a id="api-standardsticker"></a>

#### `StandardSticker(Sticker)`

Represents a sticker that is found in a standard sticker pack.

> **Added in version 2.0**

<a id="describe-str-x"></a>

#### `str(x)`

Returns the name of the sticker.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the sticker is equal to another sticker.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the sticker is not equal to another sticker.

## Attributes

**name: `str`**

The sticker's name.

**id: `int`**

The id of the sticker.

**description: `str`**

The description of the sticker.

**pack\_id: `int`**

The id of the sticker's pack.

**format: `StickerFormatType`**

The format for the sticker's image.

**tags: List\[`str`]**

A list of tags for the sticker.

**sort\_value: `int`**

The sticker's sort order within its pack.

<a id="api-standardsticker-pack"></a>

##### `pack(self) -> StickerPack`

*coroutine*

Retrieves the sticker pack that this sticker belongs to.

> **Changed in version 2.5**
> Now raises `NotFound` instead of `InvalidData`.

## Raises

**NotFound**

The corresponding sticker pack was not found.

**HTTPException**

Retrieving the sticker pack failed.

## Returns

**`StickerPack`**

The retrieved sticker pack.

### GuildSticker

<a id="api-guildsticker"></a>

#### `GuildSticker(Sticker)`

Represents a sticker that belongs to a guild.

> **Added in version 2.0**

<a id="describe-str-x"></a>

#### `str(x)`

Returns the name of the sticker.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the sticker is equal to another sticker.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the sticker is not equal to another sticker.

## Attributes

**name: `str`**

The sticker's name.

**id: `int`**

The id of the sticker.

**description: `str`**

The description of the sticker.

**format: `StickerFormatType`**

The format for the sticker's image.

**available: `bool`**

Whether this sticker is available for use.

**guild\_id: `int`**

The ID of the guild that this sticker is from.

**user: Optional\[`User`]**

The user that created this sticker. This can only be retrieved using `Guild.fetch_sticker` and
having `Permissions.manage_emojis_and_stickers`.

**emoji: `str`**

The name of a unicode emoji that represents this sticker.

<a id="api-guildsticker-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild that this sticker is from.
Could be `None` if the bot is not in the guild.

> **Added in version 2.0**

<a id="api-guildsticker-edit"></a>

##### `edit( self, *, name: str = MISSING, description: str = MISSING, emoji: str = MISSING, reason: Optional[str] = None,) -> GuildSticker`

*coroutine*

Edits a `GuildSticker` for the guild.

## Parameters

**name: `str`**

The sticker's new name. Must be at least 2 characters.

**description: Optional\[`str`]**

The sticker's new description. Can be `None`.

**emoji: `str`**

The name of a unicode emoji that represents the sticker's expression.

**reason: `str`**

The reason for editing this sticker. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to edit stickers.

**HTTPException**

An error occurred editing the sticker.

## Returns

**`GuildSticker`**

The newly modified sticker.

<a id="api-guildsticker-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the custom `Sticker` from the guild.

You must have `Permissions.manage_emojis_and_stickers` to do this.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this sticker. Shows up on the audit log.

## Raises

**Forbidden**

You are not allowed to delete stickers.

**HTTPException**

An error occurred deleting the sticker.

### Onboarding

<a id="api-onboarding"></a>

#### `Onboarding`

Represents a guild's onboarding configuration.

> **Added in version 2.6**

## Attributes

**guild: `Guild`**

The guild the onboarding configuration is for.

**prompts: List\[`OnboardingPrompt`]**

The list of prompts shown during the onboarding and customize community flows.

**default\_channel\_ids: Set\[`int`]**

The IDs of the channels exposed to a new user by default.

**enabled: `bool`:**

Whether onboarding is enabled in this guild.

**mode: `OnboardingMode`**

The mode of onboarding for this guild.

<a id="api-onboarding-default-channels"></a>

##### `default_channels(self) -> List[Union[GuildChannel, Thread]]`

List\[Union\[`abc.GuildChannel`, `Thread`]]: The list of channels exposed to a new user by default.

<a id="api-onboarding-get-prompt"></a>

##### `get_prompt(self, prompt_id: int, /) -> Optional[OnboardingPrompt]`

Optional\[`OnboardingPrompt`]: The prompt with the given ID, if found.

### OnboardingPrompt

<a id="api-onboardingprompt"></a>

#### `OnboardingPrompt`

Represents a onboarding prompt.

This can be manually created for `Guild.edit_onboarding`.

> **Added in version 2.6**

## Parameters

**type: `OnboardingPromptType`**

The type of this prompt.

**title: `str`**

The title of this prompt.

**options: List\[`OnboardingPromptOption`]**

The options of this prompt.

**single\_select: `bool`**

Whether this prompt is single select.
Defaults to `True`.

**required: `bool`**

Whether this prompt is required.
Defaults to `True`.

**in\_onboarding: `bool`**

Whether this prompt is in the onboarding flow.
Defaults to `True`.

## Attributes

**id: `int`**

The ID of this prompt. If this was manually created then the ID will be `0`.

**type: `OnboardingPromptType`**

The type of this prompt.

**title: `str`**

The title of this prompt.

**options: List\[`OnboardingPromptOption`]**

The options of this prompt.

**single\_select: `bool`**

Whether this prompt is single select.

**required: `bool`**

Whether this prompt is required.

**in\_onboarding: `bool`**

Whether this prompt is in the onboarding flow.

<a id="api-onboardingprompt-guild"></a>

##### `guild(self) -> Guild`

`Guild`: The guild this prompt is related to.

## Raises

**ValueError**

If the prompt was created manually.

<a id="api-onboardingprompt-get-option"></a>

##### `get_option(self, option_id: int, /) -> Optional[OnboardingPromptOption]`

Optional\[`OnboardingPromptOption`]: The option with the given ID, if found.

### OnboardingPromptOption

<a id="api-onboardingpromptoption"></a>

#### `OnboardingPromptOption(Hashable)`

Represents a onboarding prompt option.

This can be manually created for `Guild.edit_onboarding`.

> **Added in version 2.6**

## Parameters

**title: `str`**

The title of this prompt option.

**emoji: Union\[`Emoji`, `PartialEmoji`, `str`]**

The emoji tied to this option. May be a custom emoji, or a unicode emoji. I
f this is a string, it will be converted to a `PartialEmoji`.

**description: Optional\[`str`]**

The description of this prompt option.

**channels: Iterable\[Union\[`abc.Snowflake`, `int`]]**

The channels the user will be added to if this option is selected.

**roles: Iterable\[Union\[`abc.Snowflake`, `int`]]**

The roles the user will be given if this option is selected.

## Attributes

**id: `int`**

The ID of this prompt option. If this was manually created then the ID will be `0`.

**title: `str`**

The title of this prompt option.

**description: Optional\[`str`]**

The description of this prompt option.

**emoji: Optional\[Union\[`Emoji`, `PartialEmoji`]]**

The emoji tied to this option. May be a custom emoji, or a unicode emoji.

**channel\_ids: Set\[`int`]**

The IDs of the channels the user will be added to if this option is selected.

**role\_ids: Set\[`int`]**

The IDs of the roles the user will be given if this option is selected.

<a id="api-onboardingpromptoption-guild"></a>

##### `guild(self) -> Guild`

`Guild`: The guild this prompt option is related to.

## Raises

**ValueError**

If the prompt option was created manually.

<a id="api-onboardingpromptoption-channels"></a>

##### `channels(self) -> List[Union[GuildChannel, Thread]]`

List\[Union\[`abc.GuildChannel`, `Thread`]]: The list of channels which will be made visible if this option is selected.

## Raises

**ValueError**

IF the prompt option is manually created, therefore has no guild.

<a id="api-onboardingpromptoption-roles"></a>

##### `roles(self) -> List[Role]`

List\[`Role`]: The list of roles given to the user if this option is selected.

## Raises

**ValueError**

If the prompt option is manually created, therefore has no guild.

### BaseSoundboardSound

<a id="api-basesoundboardsound"></a>

#### `BaseSoundboardSound(Hashable, AssetMixin)`

Represents a generic Discord soundboard sound.

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two sounds are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two sounds are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the sound's hash.

## Attributes

**id: `int`**

The ID of the sound.

**volume: `float`**

The volume of the sound as floating point percentage (e.g. `1.0` for 100%).

<a id="api-basesoundboardsound-url"></a>

##### `url(self) -> str`

`str`: Returns the URL of the sound.

### SoundboardDefaultSound

<a id="api-soundboarddefaultsound"></a>

#### `SoundboardDefaultSound(BaseSoundboardSound)`

Represents a Discord soundboard default sound.

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two sounds are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two sounds are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the sound's hash.

## Attributes

**id: `int`**

The ID of the sound.

**volume: `float`**

The volume of the sound as floating point percentage (e.g. `1.0` for 100%).

**name: `str`**

The name of the sound.

**emoji: `PartialEmoji`**

The emoji of the sound.

### SoundboardSound

<a id="api-soundboardsound"></a>

#### `SoundboardSound(BaseSoundboardSound)`

Represents a Discord soundboard sound.

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two sounds are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two sounds are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the sound's hash.

## Attributes

**id: `int`**

The ID of the sound.

**volume: `float`**

The volume of the sound as floating point percentage (e.g. `1.0` for 100%).

**name: `str`**

The name of the sound.

**emoji: Optional\[`PartialEmoji`]**

The emoji of the sound. `None` if no emoji is set.

**guild: `Guild`**

The guild in which the sound is uploaded.

**available: `bool`**

Whether this sound is available for use.

<a id="api-soundboardsound-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the snowflake's creation time in UTC.

<a id="api-soundboardsound-user"></a>

##### `user(self) -> Optional[User]`

Optional\[`User`]: The user who uploaded the sound.

<a id="api-soundboardsound-edit"></a>

##### `edit( self, *, name: str = MISSING, volume: Optional[float] = MISSING, emoji: Optional[EmojiInputType] = MISSING, reason: Optional[str] = None,)`

*coroutine*

Edits the soundboard sound.

You must have `Permissions.manage_expressions` to edit the sound.
If the sound was created by the client, you must have either `Permissions.manage_expressions`
or `Permissions.create_expressions`.

## Parameters

**name: `str`**

The new name of the sound. Must be between 2 and 32 characters.

**volume: Optional\[`float`]**

The new volume of the sound. Must be between 0 and 1.

**emoji: Optional\[Union\[`Emoji`, `PartialEmoji`, `str`]]**

The new emoji of the sound.

**reason: Optional\[`str`]**

The reason for editing this sound. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to edit the soundboard sound.

**HTTPException**

Editing the soundboard sound failed.

## Returns

**`SoundboardSound`**

The newly updated soundboard sound.

<a id="api-soundboardsound-delete"></a>

##### `delete(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Deletes the soundboard sound.

You must have `Permissions.manage_expressions` to delete the sound.
If the sound was created by the client, you must have either `Permissions.manage_expressions`
or `Permissions.create_expressions`.

## Parameters

**reason: Optional\[`str`]**

The reason for deleting this sound. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to delete the soundboard sound.

**HTTPException**

Deleting the soundboard sound failed.

### ShardInfo

<a id="api-shardinfo"></a>

#### `ShardInfo`

A class that gives information and control over a specific shard.

You can retrieve this object via `AutoShardedClient.get_shard`
or `AutoShardedClient.shards`.

> **Added in version 1.4**

## Attributes

**id: `int`**

The shard ID for this shard.

**shard\_count: Optional\[`int`]**

The shard count for this cluster. If this is `None` then the bot has not started yet.

<a id="api-shardinfo-is-closed"></a>

##### `is_closed(self) -> bool`

`bool`: Whether the shard connection is currently closed.

<a id="api-shardinfo-disconnect"></a>

##### `disconnect(self) -> None`

*coroutine*

Disconnects a shard. When this is called, the shard connection will no
longer be open.

If the shard is already disconnected this does nothing.

<a id="api-shardinfo-reconnect"></a>

##### `reconnect(self) -> None`

*coroutine*

Disconnects and then connects the shard again.

<a id="api-shardinfo-connect"></a>

##### `connect(self) -> None`

*coroutine*

Connects a shard. If the shard is already connected this does nothing.

<a id="api-shardinfo-latency"></a>

##### `latency(self) -> float`

`float`: Measures latency between a HEARTBEAT and a HEARTBEAT\_ACK in seconds for this shard.

<a id="api-shardinfo-is-ws-ratelimited"></a>

##### `is_ws_ratelimited(self) -> bool`

`bool`: Whether the websocket is currently rate limited.

This can be useful to know when deciding whether you should query members
using HTTP or via the gateway.

> **Added in version 1.6**

### SessionStartLimits

<a id="api-sessionstartlimits"></a>

#### `SessionStartLimits`

A class that holds info about session start limits

> **Added in version 2.5**

## Attributes

**total: `int`**

The total number of session starts the current user is allowed

**remaining: `int`**

Remaining remaining number of session starts the current user is allowed

**reset\_after: `int`**

The number of milliseconds until the limit resets

**max\_concurrency: `int`**

The number of identify requests allowed per 5 seconds

### SKU

<a id="api-sku"></a>

#### `SKU`

Represents a premium offering as a stock-keeping unit (SKU).

> **Added in version 2.4**

## Attributes

**id: `int`**

The SKU's ID.

**type: `SKUType`**

The type of the SKU.

**application\_id: `int`**

The ID of the application that the SKU belongs to.

**name: `str`**

The consumer-facing name of the premium offering.

**slug: `str`**

A system-generated URL slug based on the SKU name.

<a id="api-sku-flags"></a>

##### `flags(self) -> SKUFlags`

`SKUFlags`: Returns the flags of the SKU.

<a id="api-sku-created-at"></a>

##### `created_at(self) -> datetime`

`datetime.datetime`: Returns the sku's creation time in UTC.

<a id="api-sku-fetch-subscription"></a>

##### `fetch_subscription(self, subscription_id: int, /) -> Subscription`

*coroutine*

Retrieves a `.Subscription` with the specified ID.

> **Added in version 2.5**

## Parameters

**subscription\_id: `int`**

The subscription's ID to fetch from.

## Raises

**NotFound**

An subscription with this ID does not exist.

**HTTPException**

Fetching the subscription failed.

## Returns

**`.Subscription`**

The subscription you requested.

<a id="api-sku-subscriptions"></a>

##### `subscriptions( self, *, limit: Optional[int] = 50, before: Optional[SnowflakeTime] = None, after: Optional[SnowflakeTime] = None, user: Snowflake,) -> AsyncIterator[Subscription]`

Retrieves an `asynchronous iterator` of the `.Subscription` that SKU has.

> **Added in version 2.5**

## Examples

Usage :

```python
async for subscription in sku.subscriptions(limit=100, user=user):
    print(subscription.user_id, subscription.current_period_end)
```

Flattening into a list :

```python
subscriptions = [subscription async for subscription in sku.subscriptions(limit=100, user=user)]
# subscriptions is now a list of Subscription...
```

All parameters are optional.

## Parameters

**limit: Optional\[`int`]**

The number of subscriptions to retrieve. If `None`, it retrieves every subscription for this SKU.
Note, however, that this would make it a slow operation. Defaults to `100`.

**before: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve subscriptions before this date or entitlement.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**after: Optional\[Union\[`discord.abc.Snowflake`, `datetime.datetime`]]**

Retrieve subscriptions after this date or entitlement.
If a datetime is provided, it is recommended to use a UTC aware datetime.
If the datetime is naive, it is assumed to be local time.

**user: `discord.abc.Snowflake`**

The user to filter by.

## Raises

**HTTPException**

Fetching the subscriptions failed.

**TypeError**

Both `after` and `before` were provided, as Discord does not
support this type of pagination.

## Yields

**`.Subscription`**

The subscription with the SKU.

### Entitlement

<a id="api-entitlement"></a>

#### `Entitlement`

Represents an entitlement from user or guild which has been granted access to a premium offering.

> **Added in version 2.4**

## Attributes

**id: `int`**

The entitlement's ID.

**sku\_id: `int`**

The ID of the SKU that the entitlement belongs to.

**application\_id: `int`**

The ID of the application that the entitlement belongs to.

**user\_id: Optional\[`int`]**

The ID of the user that is granted access to the entitlement.

**type: `EntitlementType`**

The type of the entitlement.

**deleted: `bool`**

Whether the entitlement has been deleted.

**starts\_at: Optional\[`datetime.datetime`]**

A UTC start date which the entitlement is valid. Not present when using test entitlements.

**ends\_at: Optional\[`datetime.datetime`]**

A UTC date which entitlement is no longer valid. Not present when using test entitlements.

**guild\_id: Optional\[`int`]**

The ID of the guild that is granted access to the entitlement

**consumed: `bool`**

For consumable items, whether the entitlement has been consumed.

<a id="api-entitlement-user"></a>

##### `user(self) -> Optional[User]`

Optional\[`User`]: The user that is granted access to the entitlement.

<a id="api-entitlement-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild that is granted access to the entitlement.

<a id="api-entitlement-created-at"></a>

##### `created_at(self) -> datetime`

`datetime.datetime`: Returns the entitlement's creation time in UTC.

<a id="api-entitlement-is-expired"></a>

##### `is_expired(self) -> bool`

`bool`: Returns `True` if the entitlement is expired. Will be always False for test entitlements.

<a id="api-entitlement-consume"></a>

##### `consume(self) -> None`

*coroutine*

Marks a one-time purchase entitlement as consumed.

## Raises

**NotFound**

The entitlement could not be found.

**HTTPException**

Consuming the entitlement failed.

<a id="api-entitlement-delete"></a>

##### `delete(self) -> None`

*coroutine*

Deletes the entitlement.

## Raises

**NotFound**

The entitlement could not be found.

**HTTPException**

Deleting the entitlement failed.

### Subscription

<a id="api-subscription"></a>

#### `Subscription(Hashable)`

Represents a Discord subscription.

> **Added in version 2.5**

## Attributes

**id: `int`**

The subscription's ID.

**user\_id: `int`**

The ID of the user that is subscribed.

**sku\_ids: List\[`int`]**

The IDs of the SKUs that the user subscribed to.

**entitlement\_ids: List\[`int`]**

The IDs of the entitlements granted for this subscription.

**current\_period\_start: `datetime.datetime`**

When the current billing period started.

**current\_period\_end: `datetime.datetime`**

When the current billing period ends.

**status: `SubscriptionStatus`**

The status of the subscription.

**canceled\_at: Optional\[`datetime.datetime`]**

When the subscription was canceled.
This is only available for subscriptions with a `status` of `SubscriptionStatus.inactive`.

**renewal\_sku\_ids: List\[`int`]**

The IDs of the SKUs that the user is going to be subscribed to when renewing.

<a id="api-subscription-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the subscription's creation time in UTC.

<a id="api-subscription-user"></a>

##### `user(self) -> Optional[User]`

Optional\[`User`]: The user that is subscribed.

### RawMessageDeleteEvent

<a id="api-rawmessagedeleteevent"></a>

#### `RawMessageDeleteEvent(_RawReprMixin)`

Represents the event payload for a `on_raw_message_delete` event.

## Attributes

**channel\_id: `int`**

The channel ID where the deletion took place.

**guild\_id: Optional\[`int`]**

The guild ID where the deletion took place, if applicable.

**message\_id: `int`**

The message ID that got deleted.

**cached\_message: Optional\[`Message`]**

The cached message, if found in the internal message cache.

### RawBulkMessageDeleteEvent

<a id="api-rawbulkmessagedeleteevent"></a>

#### `RawBulkMessageDeleteEvent(_RawReprMixin)`

Represents the event payload for a `on_raw_bulk_message_delete` event.

## Attributes

**message\_ids: Set\[`int`]**

A `set` of the message IDs that were deleted.

**channel\_id: `int`**

The channel ID where the message got deleted.

**guild\_id: Optional\[`int`]**

The guild ID where the message got deleted, if applicable.

**cached\_messages: List\[`Message`]**

The cached messages, if found in the internal message cache.

### RawMessageUpdateEvent

<a id="api-rawmessageupdateevent"></a>

#### `RawMessageUpdateEvent(_RawReprMixin)`

Represents the payload for a `on_raw_message_edit` event.

## Attributes

**message\_id: `int`**

The message ID that got updated.

**channel\_id: `int`**

The channel ID where the update took place.

> **Added in version 1.3**

**guild\_id: Optional\[`int`]**

The guild ID where the message got updated, if applicable.

> **Added in version 1.7**

**data: `dict`**

The raw data given by the [gateway](https://discord.com/developers/docs/topics/gateway-events#message-update)

**cached\_message: Optional\[`Message`]**

The cached message, if found in the internal message cache. Represents the message before
it is modified by the data in `RawMessageUpdateEvent.data`.

**message: `Message`**

The updated message.

> **Added in version 2.5**

### RawReactionActionEvent

<a id="api-rawreactionactionevent"></a>

#### `RawReactionActionEvent(_RawReprMixin)`

Represents the payload for a `on_raw_reaction_add` or
`on_raw_reaction_remove` event.

## Attributes

**message\_id: `int`**

The message ID that got or lost a reaction.

**user\_id: `int`**

The user ID who added the reaction or whose reaction was removed.

**channel\_id: `int`**

The channel ID where the reaction got added or removed.

**guild\_id: Optional\[`int`]**

The guild ID where the reaction got added or removed, if applicable.

**emoji: `PartialEmoji`**

The custom or unicode emoji being used.

**member: Optional\[`Member`]**

The member who added the reaction. Only available if `event_type` is `REACTION_ADD` and the reaction is inside a guild.

> **Added in version 1.3**

**message\_author\_id: Optional\[`int`]**

The author ID of the message being reacted to. Only available if `event_type` is `REACTION_ADD`.

> **Added in version 2.4**

**event\_type: `str`**

The event type that triggered this action. Can be
`REACTION_ADD` for reaction addition or
`REACTION_REMOVE` for reaction removal.

> **Added in version 1.3**

**burst: `bool`**

Whether the reaction was a burst reaction, also known as a "super reaction".

> **Added in version 2.4**

**burst\_colours: List\[`Colour`]**

A list of colours used for burst reaction animation. Only available if `burst` is `True`
and if `event_type` is `REACTION_ADD`.

> **Added in version 2.0**

**type: `ReactionType`**

The type of the reaction.

> **Added in version 2.4**

<a id="api-rawreactionactionevent-burst-colors"></a>

##### `burst_colors(self) -> List[Colour]`

An alias of `burst_colours`.

> **Added in version 2.4**

### RawReactionClearEvent

<a id="api-rawreactionclearevent"></a>

#### `RawReactionClearEvent(_RawReprMixin)`

Represents the payload for a `on_raw_reaction_clear` event.

## Attributes

**message\_id: `int`**

The message ID that got its reactions cleared.

**channel\_id: `int`**

The channel ID where the reactions got cleared.

**guild\_id: Optional\[`int`]**

The guild ID where the reactions got cleared.

### RawReactionClearEmojiEvent

<a id="api-rawreactionclearemojievent"></a>

#### `RawReactionClearEmojiEvent(_RawReprMixin)`

Represents the payload for a `on_raw_reaction_clear_emoji` event.

> **Added in version 1.3**

## Attributes

**message\_id: `int`**

The message ID that got its reactions cleared.

**channel\_id: `int`**

The channel ID where the reactions got cleared.

**guild\_id: Optional\[`int`]**

The guild ID where the reactions got cleared.

**emoji: `PartialEmoji`**

The custom or unicode emoji being removed.

### RawIntegrationDeleteEvent

<a id="api-rawintegrationdeleteevent"></a>

#### `RawIntegrationDeleteEvent(_RawReprMixin)`

Represents the payload for a `on_raw_integration_delete` event.

> **Added in version 2.0**

## Attributes

**integration\_id: `int`**

The ID of the integration that got deleted.

**application\_id: Optional\[`int`]**

The ID of the bot/OAuth2 application for this deleted integration.

**guild\_id: `int`**

The guild ID where the integration got deleted.

### RawThreadUpdateEvent

<a id="api-rawthreadupdateevent"></a>

#### `RawThreadUpdateEvent(_RawReprMixin)`

Represents the payload for a `on_raw_thread_update` event.

> **Added in version 2.0**

## Attributes

**thread\_id: `int`**

The ID of the thread that was updated.

**thread\_type: `discord.ChannelType`**

The channel type of the updated thread.

**guild\_id: `int`**

The ID of the guild the thread is in.

**parent\_id: `int`**

The ID of the channel the thread belongs to.

**data: `dict`**

The raw data given by the [gateway](https://discord.com/developers/docs/topics/gateway-events#thread-update)

**thread: Optional\[`discord.Thread`]**

The thread, if it could be found in the internal cache.

### RawThreadMembersUpdate

<a id="api-rawthreadmembersupdate"></a>

#### `RawThreadMembersUpdate(_RawReprMixin)`

Represents the payload for a `on_raw_thread_member_remove` event.

> **Added in version 2.0**

## Attributes

**thread\_id: `int`**

The ID of the thread that was updated.

**guild\_id: `int`**

The ID of the guild the thread is in.

**member\_count: `int`**

The approximate number of members in the thread. This caps at 50.

**data: `dict`**

The raw data given by the [gateway](https://discord.com/developers/docs/topics/gateway-events#thread-members-update).

### RawThreadDeleteEvent

<a id="api-rawthreaddeleteevent"></a>

#### `RawThreadDeleteEvent(_RawReprMixin)`

Represents the payload for a `on_raw_thread_delete` event.

> **Added in version 2.0**

## Attributes

**thread\_id: `int`**

The ID of the thread that was deleted.

**thread\_type: `discord.ChannelType`**

The channel type of the deleted thread.

**guild\_id: `int`**

The ID of the guild the thread was deleted in.

**parent\_id: `int`**

The ID of the channel the thread belonged to.

**thread: Optional\[`discord.Thread`]**

The thread, if it could be found in the internal cache.

### RawTypingEvent

<a id="api-rawtypingevent"></a>

#### `RawTypingEvent(_RawReprMixin)`

Represents the payload for a `on_raw_typing` event.

> **Added in version 2.0**

## Attributes

**channel\_id: `int`**

The ID of the channel the user started typing in.

**user\_id: `int`**

The ID of the user that started typing.

**user: Optional\[Union\[`discord.User`, `discord.Member`]]**

The user that started typing, if they could be found in the internal cache.

**timestamp: `datetime.datetime`**

When the typing started as an aware datetime in UTC.

**guild\_id: Optional\[`int`]**

The ID of the guild the user started typing in, if applicable.

### RawMemberRemoveEvent

<a id="api-rawmemberremoveevent"></a>

#### `RawMemberRemoveEvent(_RawReprMixin)`

Represents the payload for a `on_raw_member_remove` event.

> **Added in version 2.0**

## Attributes

**user: Union\[`discord.User`, `discord.Member`]**

The user that left the guild.

**guild\_id: `int`**

The ID of the guild the user left.

### RawAppCommandPermissionsUpdateEvent

<a id="api-rawappcommandpermissionsupdateevent"></a>

#### `RawAppCommandPermissionsUpdateEvent(_RawReprMixin)`

Represents the payload for a `on_raw_app_command_permissions_update` event.

> **Added in version 2.0**

## Attributes

**target\_id: `int`**

The ID of the command or application whose permissions were updated.
When this is the application ID instead of a command ID, the permissions
apply to all commands that do not contain explicit overwrites.

**application\_id: `int`**

The ID of the application that the command belongs to.

**guild: `discord.Guild`**

The guild where the permissions were updated.

**permissions: List\[`discord.app_commands.AppCommandPermissions`]**

List of new permissions for the app command.

### RawPollVoteActionEvent

<a id="api-rawpollvoteactionevent"></a>

#### `RawPollVoteActionEvent(_RawReprMixin)`

Represents the payload for a `on_raw_poll_vote_add` or `on_raw_poll_vote_remove`
event.

> **Added in version 2.4**

## Attributes

**user\_id: `int`**

The ID of the user that added or removed a vote.

**channel\_id: `int`**

The channel ID where the poll vote action took place.

**message\_id: `int`**

The message ID that contains the poll the user added or removed their vote on.

**guild\_id: Optional\[`int`]**

The guild ID where the vote got added or removed, if applicable..

**answer\_id: `int`**

The poll answer's ID the user voted on.

### RawPresenceUpdateEvent

<a id="api-rawpresenceupdateevent"></a>

#### `RawPresenceUpdateEvent(_RawReprMixin)`

Represents the payload for a `on_raw_presence_update` event.

> **Added in version 2.5**

## Attributes

**user\_id: `int`**

The ID of the user that triggered the presence update.

**guild\_id: Optional\[`int`]**

The guild ID for the users presence update. Could be `None`.

**guild: Optional\[`Guild`]**

The guild associated with the presence update and user. Could be `None`.

**client\_status: `ClientStatus`**

The `.ClientStatus` model which holds information about the status of the user on various clients.

**activities: Tuple\[Union\[`BaseActivity`, `Spotify`]]**

The activities the user is currently doing. Due to a Discord API limitation, a user's Spotify activity may not appear
if they are listening to a song with a title longer than `128` characters. See [GH-1738](https://github.com/Rapptz/discord.py/issues/1738) for more information.

### PartialWebhookGuild

<a id="api-partialwebhookguild"></a>

#### `PartialWebhookGuild(Hashable)`

Represents a partial guild for webhooks.

These are typically given for channel follower webhooks.

> **Added in version 2.0**

## Attributes

**id: `int`**

The partial guild's ID.

**name: `str`**

The partial guild's name.

<a id="api-partialwebhookguild-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the guild's icon asset, if available.

### PartialWebhookChannel

<a id="api-partialwebhookchannel"></a>

#### `PartialWebhookChannel(Hashable)`

Represents a partial channel for webhooks.

These are typically given for channel follower webhooks.

> **Added in version 2.0**

## Attributes

**id: `int`**

The partial channel's ID.

**name: `str`**

The partial channel's name.

<a id="api-partialwebhookchannel-mention"></a>

##### `mention(self) -> str`

`str`: The string that allows you to mention the channel that the webhook is following.

### PollAnswer

<a id="api-pollanswer"></a>

#### `PollAnswer`

Represents a poll's answer.

<a id="describe-str-x"></a>

#### `str(x)`

Returns this answer's text, if any.

> **Added in version 2.4**

## Attributes

**id: `int`**

The ID of this answer.

**media: `PollMedia`**

The display data for this answer.

**self\_voted: `bool`**

Whether the current user has voted to this answer or not.

<a id="api-pollanswer-text"></a>

##### `text(self) -> str`

`str`: Returns this answer's displayed text.

<a id="api-pollanswer-emoji"></a>

##### `emoji(self) -> Optional[Union[PartialEmoji, Emoji]]`

Optional\[Union\[`Emoji`, `PartialEmoji`]]: Returns this answer's displayed
emoji, if any.

<a id="api-pollanswer-vote-count"></a>

##### `vote_count(self) -> int`

`int`: Returns an approximate count of votes for this answer.

If the poll is finished, the count is exact.

<a id="api-pollanswer-poll"></a>

##### `poll(self) -> Poll`

`Poll`: Returns the parent poll of this answer.

<a id="api-pollanswer-victor"></a>

##### `victor(self) -> bool`

`bool`: Whether the answer is the one that had the most
votes when the poll ended.

> **Added in version 2.5**

> **Note**
> If the poll has not ended, this will always return `False`.

<a id="api-pollanswer-voters"></a>

##### `voters( self, *, limit: Optional[int] = None, after: Optional[Snowflake] = None) -> AsyncIterator[Union[User, Member]]`

Returns an `asynchronous iterator` representing the users that have voted on this answer.

The `after` parameter must represent a user
and meet the `abc.Snowflake` abc.

This can only be called when the parent poll was sent to a message.

## Examples

Usage :

```python
async for voter in poll_answer.voters():
    print(f'{voter} has voted for {poll_answer}!')
```

Flattening into a list: :

```python
voters = [voter async for voter in poll_answer.voters()]
# voters is now a list of User
```

## Parameters

**limit: Optional\[`int`]**

The maximum number of results to return.
If not provided, returns all the users who
voted on this poll answer.

**after: Optional\[`abc.Snowflake`]**

For pagination, voters are sorted by member.

## Raises

**HTTPException**

Retrieving the users failed.

## Yields

**Union\[`User`, `Member`]**

The member (if retrievable) or the user that has voted
on this poll answer. The case where it can be a `Member`
is in a guild message context. Sometimes it can be a `User`
if the member has left the guild or if the member is not cached.

### MessageSnapshot

<a id="api-messagesnapshot"></a>

#### `MessageSnapshot`

Represents a message snapshot attached to a forwarded message.

> **Added in version 2.5**

## Attributes

**type: `MessageType`**

The type of the forwarded message.

**content: `str`**

The actual contents of the forwarded message.

**embeds: List\[`Embed`]**

A list of embeds the forwarded message has.

**attachments: List\[`Attachment`]**

A list of attachments given to the forwarded message.

**created\_at: `datetime.datetime`**

The forwarded message's time of creation.

**flags: `MessageFlags`**

Extra features of the the message snapshot.

**stickers: List\[`StickerItem`]**

A list of sticker items given to the message.

**components: List\[`Component`]]**

A list of components in the message.

<a id="api-messagesnapshot-raw-mentions"></a>

##### `raw_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of user IDs matched with
the syntax of `<@user_id>` in the message content.

This allows you to receive the user IDs of mentioned users
even in a private message context.

<a id="api-messagesnapshot-raw-channel-mentions"></a>

##### `raw_channel_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of channel IDs matched with
the syntax of `<#channel_id>` in the message content.

<a id="api-messagesnapshot-raw-role-mentions"></a>

##### `raw_role_mentions(self) -> List[int]`

List\[`int`]: A property that returns an array of role IDs matched with
the syntax of `<@&role_id>` in the message content.

<a id="api-messagesnapshot-cached-message"></a>

##### `cached_message(self) -> Optional[Message]`

Optional\[`Message`]: Returns the cached message this snapshot points to, if any.

<a id="api-messagesnapshot-edited-at"></a>

##### `edited_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: An aware UTC datetime object containing the edited time of the forwarded message.

### ClientStatus

<a id="api-clientstatus"></a>

#### `ClientStatus`

Represents the [Client Status Object](https://discord.com/developers/docs/events/gateway-events#client-status-object) from Discord,
which holds information about the status of the user on various clients/platforms, with additional helpers.

> **Added in version 2.5**

<a id="api-clientstatus-status"></a>

##### `status(self) -> Status`

`Status`: The user's overall status. If the value is unknown, then it will be a `str` instead.

<a id="api-clientstatus-raw-status"></a>

##### `raw_status(self) -> str`

`str`: The user's overall status as a string value.

<a id="api-clientstatus-mobile-status"></a>

##### `mobile_status(self) -> Status`

`Status`: The user's status on a mobile device, if applicable.

<a id="api-clientstatus-desktop-status"></a>

##### `desktop_status(self) -> Status`

`Status`: The user's status on the desktop client, if applicable.

<a id="api-clientstatus-web-status"></a>

##### `web_status(self) -> Status`

`Status`: The user's status on the web client, if applicable.

<a id="api-clientstatus-is-on-mobile"></a>

##### `is_on_mobile(self) -> bool`

`bool`: A helper function that determines if a user is active on a mobile device.

### PrimaryGuild

<a id="api-primaryguild"></a>

#### `PrimaryGuild`

Represents the primary guild identity of a `User`

> **Added in version 2.6**

## Attributes

**id: Optional\[`int`]**

The ID of the user's primary guild, if any.

**tag: Optional\[`str`]**

The primary guild's tag.

**identity\_enabled: Optional\[`bool`]**

Whether the user has their primary guild publicly displayed. If `None`, the user has a public guild but has not reaffirmed the guild identity after a change

> **Warning**
> Users can have their primary guild publicly displayed while still having an `id` of `None`. Be careful when checking this attribute!

<a id="api-primaryguild-badge"></a>

##### `badge(self) -> Optional[Asset]`

Optional\[`Asset`]: Returns the primary guild's asset

<a id="api-primaryguild-created-at"></a>

##### `created_at(self) -> Optional[datetime]`

Optional\[`datetime.datetime`]: Returns the primary guild's creation time in UTC.

### Collectible

<a id="api-collectible"></a>

#### `Collectible`

Represents a user's collectible.

> **Added in version 2.7**

## Attributes

**label: `str`**

The label of the collectible.

**palette: Optional\[`NameplatePalette`]**

The palette of the collectible.
This is only available if `type` is
`CollectibleType.nameplate`.

**sku\_id: `int`**

The SKU ID of the collectible.

**type: `CollectibleType`**

The type of the collectible.

**expires\_at: Optional\[`datetime.datetime`]**

The expiration date of the collectible. If applicable.

<a id="api-collectible-static"></a>

##### `static(self) -> Asset`

`Asset`: The static asset of the collectible.

<a id="api-collectible-animated"></a>

##### `animated(self) -> Asset`

`Asset`: The animated asset of the collectible.

### CallMessage

<a id="api-callmessage"></a>

#### `CallMessage`

Represents a message's call data in a private channel from a `discord.Message`.

> **Added in version 2.5**

## Attributes

**ended\_timestamp: Optional\[`datetime.datetime`]**

The timestamp the call has ended.

**participants: List\[`User`]**

A list of users that participated in the call.

<a id="api-callmessage-duration"></a>

##### `duration(self) -> datetime.timedelta`

`datetime.timedelta`: The duration the call has lasted or is already ongoing.

<a id="api-callmessage-is-ended"></a>

##### `is_ended(self) -> bool`

`bool`: Whether the call is ended or not.

<a id="discord-api-data"></a>

## Data Classes

Some classes are just there to be data containers, this lists them.

Unlike [models](https://discordpy.readthedocs.io/api.html#discord-api-models) you are allowed to create
most of these yourself, even if they can also be used to hold attributes.

Nearly all classes here have py:slots defined which means that it is
impossible to have dynamic attributes to the data classes.

The only exception to this rule is `Object`, which is made with
dynamic attributes in mind.

### Object

<a id="api-object"></a>

#### `Object(Hashable)`

Represents a generic Discord object.

The purpose of this class is to allow you to create 'miniature'
versions of data classes if you want to pass in just an ID. Most functions
that take in a specific data class with an ID can also take in this class
as a substitute instead. Note that even though this is the case, not all
objects (if any) actually inherit from this class.

There are also some cases where some websocket events are received
in [GH-strange order](https://github.com/Rapptz/discord.py/issues/21) and when such events happened you would
receive this class rather than the actual data class. These cases are
extremely rare.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two objects are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two objects are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the object's hash.

## Attributes

**id: `int`**

The ID of the object.

**type: Type\[`abc.Snowflake`]**

The discord.py model type of the object, if not specified, defaults to this class.

> **Note**
> In instances where there are multiple applicable types, use a shared base class.
> for example, both `Member` and `User` are subclasses of `abc.User`.

> **Added in version 2.0**

<a id="api-object-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: Returns the snowflake's creation time in UTC.

### Embed

<a id="api-embed"></a>

#### `Embed`

Represents a Discord embed.

<a id="describe-len-x"></a>

#### `len(x)`

Returns the total size of the embed.
Useful for checking if it's within the 6000 character limit.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether the embed has any data set.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two embeds are equal.

> **Added in version 2.0**

For ease of use, all parameters that expect a `str` are implicitly
casted to `str` for you.

> **Changed in version 2.0**
> `Embed.Empty` has been removed in favour of `None`.

## Attributes

**title: Optional\[`str`]**

The title of the embed.
This can be set during initialisation.
Can only be up to 256 characters.

**type: `str`**

The type of embed. Usually "rich".
This can be set during initialisation.
Possible strings for embed types can be found on discord's
[api docs](https://discord.com/developers/docs/resources/message#embed-object-embed-types)

**description: Optional\[`str`]**

The description of the embed.
This can be set during initialisation.
Can only be up to 4096 characters.

**url: Optional\[`str`]**

The URL of the embed.
This can be set during initialisation.

**timestamp: Optional\[`datetime.datetime`]**

The timestamp of the embed content. This is an aware datetime.
If a naive datetime is passed, it is converted to an aware
datetime with the local timezone.

**colour: Optional\[Union\[`Colour`, `int`]]**

The colour code of the embed. Aliased to `color` as well.
This can be set during initialisation.

<a id="api-embed-from-dict"></a>

##### `from_dict(cls, data: Mapping[str, Any]) -> Self`

Converts a `dict` to a `Embed` provided it is in the
format that Discord expects it to be in.

You can find out about this format in the [official Discord documentation](https://discord.com/developers/docs/resources/message#embed-object).

## Parameters

**data: `dict`**

The dictionary to convert into an embed.

<a id="api-embed-copy"></a>

##### `copy(self) -> Self`

Returns a shallow copy of the embed.

<a id="api-embed-flags"></a>

##### `flags(self) -> EmbedFlags`

`EmbedFlags`: The flags of this embed.

> **Added in version 2.5**

<a id="api-embed-footer"></a>

##### `footer(self) -> _EmbedFooterProxy`

Returns an `EmbedProxy` denoting the footer contents.

See `set_footer` for possible values you can access.

If the attribute has no value then `None` is returned.

<a id="api-embed-set-footer"></a>

##### `set_footer(self, *, text: Optional[Any] = None, icon_url: Optional[Any] = None) -> Self`

Sets the footer for the embed content.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**text: `str`**

The footer text. Can only be up to 2048 characters.

**icon\_url: `str`**

The URL of the footer icon. Only HTTP(S) is supported.
Inline attachment URLs are also supported, see [local\_image](https://discordpy.readthedocs.io/faq.html#local-image).

<a id="api-embed-remove-footer"></a>

##### `remove_footer(self) -> Self`

Clears embed's footer information.

This function returns the class instance to allow for fluent-style
chaining.

> **Added in version 2.0**

<a id="api-embed-image"></a>

##### `image(self) -> _EmbedMediaProxy`

Returns an `EmbedProxy` denoting the image contents.

Possible attributes you can access are:

- `url` for the image URL.
- `proxy_url` for the proxied image URL.
- `width` for the image width.
- `height` for the image height.
- `flags` for the image's attachment flags.

If the attribute has no value then `None` is returned.

<a id="api-embed-set-image"></a>

##### `set_image(self, *, url: Optional[Any]) -> Self`

Sets the image for the embed content.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**url: Optional\[`str`]**

The source URL for the image. Only HTTP(S) is supported.
If `None` is passed, any existing image is removed.
Inline attachment URLs are also supported, see [local\_image](https://discordpy.readthedocs.io/faq.html#local-image).

<a id="api-embed-thumbnail"></a>

##### `thumbnail(self) -> _EmbedMediaProxy`

Returns an `EmbedProxy` denoting the thumbnail contents.

Possible attributes you can access are:

- `url` for the thumbnail URL.
- `proxy_url` for the proxied thumbnail URL.
- `width` for the thumbnail width.
- `height` for the thumbnail height.
- `flags` for the thumbnail's attachment flags.

If the attribute has no value then `None` is returned.

<a id="api-embed-set-thumbnail"></a>

##### `set_thumbnail(self, *, url: Optional[Any]) -> Self`

Sets the thumbnail for the embed content.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**url: Optional\[`str`]**

The source URL for the thumbnail. Only HTTP(S) is supported.
If `None` is passed, any existing thumbnail is removed.
Inline attachment URLs are also supported, see [local\_image](https://discordpy.readthedocs.io/faq.html#local-image).

<a id="api-embed-video"></a>

##### `video(self) -> _EmbedMediaProxy`

Returns an `EmbedProxy` denoting the video contents.

Possible attributes include:

- `url` for the video URL.
- `proxy_url` for the proxied video URL.
- `height` for the video height.
- `width` for the video width.
- `flags` for the video's attachment flags.

If the attribute has no value then `None` is returned.

<a id="api-embed-provider"></a>

##### `provider(self) -> _EmbedProviderProxy`

Returns an `EmbedProxy` denoting the provider contents.

The only attributes that might be accessed are `name` and `url`.

If the attribute has no value then `None` is returned.

<a id="api-embed-author"></a>

##### `author(self) -> _EmbedAuthorProxy`

Returns an `EmbedProxy` denoting the author contents.

See `set_author` for possible values you can access.

If the attribute has no value then `None` is returned.

<a id="api-embed-set-author"></a>

##### `set_author(self, *, name: Any, url: Optional[Any] = None, icon_url: Optional[Any] = None) -> Self`

Sets the author for the embed content.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**name: `str`**

The name of the author. Can only be up to 256 characters.

**url: `str`**

The URL for the author.

**icon\_url: `str`**

The URL of the author icon. Only HTTP(S) is supported.
Inline attachment URLs are also supported, see [local\_image](https://discordpy.readthedocs.io/faq.html#local-image).

<a id="api-embed-remove-author"></a>

##### `remove_author(self) -> Self`

Clears embed's author information.

This function returns the class instance to allow for fluent-style
chaining.

> **Added in version 1.4**

<a id="api-embed-fields"></a>

##### `fields(self) -> List[_EmbedFieldProxy]`

List\[`EmbedProxy`]: Returns a `list` of `EmbedProxy` denoting the field contents.

See `add_field` for possible values you can access.

If the attribute has no value then `None` is returned.

<a id="api-embed-add-field"></a>

##### `add_field(self, *, name: Any, value: Any, inline: bool = True) -> Self`

Adds a field to the embed object.

This function returns the class instance to allow for fluent-style
chaining. Can only be up to 25 fields.

## Parameters

**name: `str`**

The name of the field. Can only be up to 256 characters.

**value: `str`**

The value of the field. Can only be up to 1024 characters.

**inline: `bool`**

Whether the field should be displayed inline.

<a id="api-embed-insert-field-at"></a>

##### `insert_field_at(self, index: int, *, name: Any, value: Any, inline: bool = True) -> Self`

Inserts a field before a specified index to the embed.

This function returns the class instance to allow for fluent-style
chaining. Can only be up to 25 fields.

> **Added in version 1.2**

## Parameters

**index: `int`**

The index of where to insert the field.

**name: `str`**

The name of the field. Can only be up to 256 characters.

**value: `str`**

The value of the field. Can only be up to 1024 characters.

**inline: `bool`**

Whether the field should be displayed inline.

<a id="api-embed-clear-fields"></a>

##### `clear_fields(self) -> Self`

Removes all fields from this embed.

This function returns the class instance to allow for fluent-style
chaining.

> **Changed in version 2.0**
> This function now returns the class instance.

<a id="api-embed-remove-field"></a>

##### `remove_field(self, index: int) -> Self`

Removes a field at a specified index.

If the index is invalid or out of bounds then the error is
silently swallowed.

This function returns the class instance to allow for fluent-style
chaining.

> **Note**
> When deleting a field by index, the index of the other fields
> shift to fill the gap just like a regular list.

> **Changed in version 2.0**
> This function now returns the class instance.

## Parameters

**index: `int`**

The index of the field to remove.

<a id="api-embed-set-field-at"></a>

##### `set_field_at(self, index: int, *, name: Any, value: Any, inline: bool = True) -> Self`

Modifies a field to the embed object.

The index must point to a valid pre-existing field. Can only be up to 25 fields.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**index: `int`**

The index of the field to modify.

**name: `str`**

The name of the field. Can only be up to 256 characters.

**value: `str`**

The value of the field. Can only be up to 1024 characters.

**inline: `bool`**

Whether the field should be displayed inline.

## Raises

**IndexError**

An invalid index was provided.

<a id="api-embed-to-dict"></a>

##### `to_dict(self) -> EmbedData`

Converts this embed object into a dict.

### AllowedMentions

<a id="api-allowedmentions"></a>

#### `AllowedMentions`

A class that represents what mentions are allowed in a message.

This class can be set during `Client` initialisation to apply
to every message sent. It can also be applied on a per message basis
via `abc.Messageable.send` for more fine-grained control.

## Attributes

**everyone: `bool`**

Whether to allow everyone and here mentions. Defaults to `True`.

**users: Union\[`bool`, Sequence\[`abc.Snowflake`]]**

Controls the users being mentioned. If `True` (the default) then
users are mentioned based on the message content. If `False` then
users are not mentioned at all. If a list of `abc.Snowflake`
is given then only the users provided will be mentioned, provided those
users are in the message content.

**roles: Union\[`bool`, Sequence\[`abc.Snowflake`]]**

Controls the roles being mentioned. If `True` (the default) then
roles are mentioned based on the message content. If `False` then
roles are not mentioned at all. If a list of `abc.Snowflake`
is given then only the roles provided will be mentioned, provided those
roles are in the message content.

**replied\_user: `bool`**

Whether to mention the author of the message being replied to. Defaults
to `True`.

> **Added in version 1.6**

<a id="api-allowedmentions-all"></a>

##### `all(cls) -> Self`

A factory method that returns a `AllowedMentions` with all fields explicitly set to `True`

> **Added in version 1.5**

<a id="api-allowedmentions-none"></a>

##### `none(cls) -> Self`

A factory method that returns a `AllowedMentions` with all fields set to `False`

> **Added in version 1.5**

### MessageReference

<a id="api-messagereference"></a>

#### `MessageReference`

Represents a reference to a `discord.Message`.

> **Added in version 1.5**

> **Changed in version 1.6**
> This class can now be constructed by users.

## Attributes

**type: `MessageReferenceType`**

The type of message reference.

> **Added in version 2.5**

**message\_id: Optional\[`int`]**

The id of the message referenced.
This can be `None` when this message reference was retrieved from
a system message of one of the following types:

- `MessageType.channel_follow_add`
- `MessageType.thread_created`

**channel\_id: `int`**

The channel id of the message referenced.

**guild\_id: Optional\[`int`]**

The guild id of the message referenced.

**fail\_if\_not\_exists: `bool`**

Whether the referenced message should raise `HTTPException`
if the message no longer exists or Discord could not fetch the message.

> **Added in version 1.7**

**resolved: Optional\[Union\[`Message`, `DeletedReferencedMessage`]]**

The message that this reference resolved to. If this is `None`
then the original message was not fetched either due to the Discord API
not attempting to resolve it or it not being available at the time of creation.
If the message was resolved at a prior point but has since been deleted then
this will be of type `DeletedReferencedMessage`.

> **Added in version 1.6**

<a id="api-messagereference-from-message"></a>

##### `from_message( cls, message: PartialMessage, *, fail_if_not_exists: bool = True, type: MessageReferenceType = MessageReferenceType.reply,) -> Self`

Creates a `MessageReference` from an existing `discord.Message`.

> **Added in version 1.6**

## Parameters

**message: `discord.Message`**

The message to be converted into a reference.

**fail\_if\_not\_exists: `bool`**

Whether the referenced message should raise `HTTPException`
if the message no longer exists or Discord could not fetch the message.

> **Added in version 1.7**

**type: `discord.MessageReferenceType`**

The type of message reference this is.

> **Added in version 2.5**

## Returns

**`MessageReference`**

A reference to the message.

<a id="api-messagereference-cached-message"></a>

##### `cached_message(self) -> Optional[Message]`

Optional\[`discord.Message`]: The cached message, if found in the internal message cache.

<a id="api-messagereference-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to the referenced message.

> **Added in version 1.7**

### PartialMessage

<a id="api-partialmessage"></a>

#### `PartialMessage(Hashable)`

Represents a partial message to aid with working messages when only
a message and channel ID are present.

There are two ways to construct this class. The first one is through
the constructor itself, and the second is via the following:

- `TextChannel.get_partial_message`
- `VoiceChannel.get_partial_message`
- `StageChannel.get_partial_message`
- `Thread.get_partial_message`
- `DMChannel.get_partial_message`

Note that this class is trimmed down and has no rich attributes.

> **Added in version 1.6**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two partial messages are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two partial messages are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the partial message's hash.

## Attributes

**channel: Union\[`PartialMessageable`, `TextChannel`, `StageChannel`, `VoiceChannel`, `Thread`, `DMChannel`]**

The channel associated with this partial message.

**id: `int`**

The message ID.

**guild: Optional\[`Guild`]**

The guild that the partial message belongs to, if applicable.

<a id="api-partialmessage-created-at"></a>

##### `created_at(self) -> datetime.datetime`

`datetime.datetime`: The partial message's creation time in UTC.

<a id="api-partialmessage-jump-url"></a>

##### `jump_url(self) -> str`

`str`: Returns a URL that allows the client to jump to this message.

<a id="api-partialmessage-thread"></a>

##### `thread(self) -> Optional[Thread]`

Optional\[`Thread`]: The public thread created from this message, if it exists.

> **Note**
> This does not retrieve archived threads, as they are not retained in the internal
> cache. Use `fetch_thread` instead.

> **Added in version 2.4**

<a id="api-partialmessage-fetch"></a>

##### `fetch(self) -> Message`

*coroutine*

Fetches the partial message to a full `Message`.

## Raises

**NotFound**

The message was not found.

**Forbidden**

You do not have the permissions required to get a message.

**HTTPException**

Retrieving the message failed.

## Returns

**`Message`**

The full message.

<a id="api-partialmessage-delete"></a>

##### `delete(self, *, delay: Optional[float] = None) -> None`

*coroutine*

Deletes the message.

Your own messages could be deleted without any proper permissions. However to
delete other people's messages, you must have `Permissions.manage_messages`.

> **Changed in version 1.1**
> Added the new `delay` keyword-only parameter.

## Parameters

**delay: Optional\[`float`]**

If provided, the number of seconds to wait in the background
before deleting the message. If the deletion fails then it is silently ignored.

## Raises

**Forbidden**

You do not have proper permissions to delete the message.

**NotFound**

The message was deleted already

**HTTPException**

Deleting the message failed.

<a id="api-partialmessage-edit"></a>

##### `edit( self, *, content: Optional[str] = MISSING, embed: Optional[Embed] = MISSING, embeds: Sequence[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, delete_after: Optional[float] = None, allowed_mentions: Optional[AllowedMentions] = MISSING, view: Optional[Union[View, LayoutView]] = MISSING,) -> Message`

*coroutine*

Edits the message.

The content must be able to be transformed into a string via `str(content)`.

> **Changed in version 2.0**
> Edits are no longer in-place, the newly edited message is returned instead.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The new content to replace the message with.
Could be `None` to remove the content.

**embed: Optional\[`Embed`]**

The new embed to replace the original with.
Could be `None` to remove the embed.

**embeds: List\[`Embed`]**

The new embeds to replace the original with. Must be a maximum of 10.
To remove all embeds `[]` should be passed.

> **Added in version 2.0**

**attachments: List\[Union\[`Attachment`, `File`]]**

A list of attachments to keep in the message as well as new files to upload. If `[]` is passed
then all attachments are removed.

> **Note**
> New files will always appear after current attachments.

> **Added in version 2.0**

**delete\_after: Optional\[`float`]**

If provided, the number of seconds to wait in the background
before deleting the message we just edited. If the deletion fails,
then it is silently ignored.

**allowed\_mentions: Optional\[`discord.AllowedMentions`]**

Controls the mentions being processed in this message. If this is
passed, then the object is merged with `discord.Client.allowed_mentions`.
The merging behaviour only overrides attributes that have been explicitly passed
to the object, otherwise it uses the attributes set in `discord.Client.allowed_mentions`.
If no object is passed at all then the defaults given by `discord.Client.allowed_mentions`
are used instead.

> **Added in version 1.4**

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed.

> **Note**
> If you want to update the message to have a `discord.ui.LayoutView`, you must
> explicitly set the `content`, `embed`, `embeds`, and `attachments` parameters to
> `None` if the previous message had any.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Tried to suppress a message without permissions or
edited a message's content or embed that isn't yours.

**NotFound**

This message does not exist.

**TypeError**

You specified both `embed` and `embeds`

## Returns

**`Message`**

The newly edited message.

<a id="api-partialmessage-publish"></a>

##### `publish(self) -> None`

*coroutine*

Publishes this message to the channel's followers.

The message must have been sent in a news channel.
You must have `Permissions.send_messages` to do this.

If the message is not your own then `Permissions.manage_messages`
is also needed.

## Raises

**Forbidden**

You do not have the proper permissions to publish this message
or the channel is not a news channel.

**HTTPException**

Publishing the message failed.

<a id="api-partialmessage-pin"></a>

##### `pin(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Pins the message.

You must have `Permissions.pin_messages` to do
this in a non-private channel context.

## Parameters

**reason: Optional\[`str`]**

The reason for pinning the message. Shows up on the audit log.

> **Added in version 1.4**

## Raises

**Forbidden**

You do not have permissions to pin the message.

**NotFound**

The message or channel was not found or deleted.

**HTTPException**

Pinning the message failed, probably due to the channel
having more than 250 pinned messages.

<a id="api-partialmessage-unpin"></a>

##### `unpin(self, *, reason: Optional[str] = None) -> None`

*coroutine*

Unpins the message.

You must have `Permissions.pin_messages` to do
this in a non-private channel context.

## Parameters

**reason: Optional\[`str`]**

The reason for unpinning the message. Shows up on the audit log.

> **Added in version 1.4**

## Raises

**Forbidden**

You do not have permissions to unpin the message.

**NotFound**

The message or channel was not found or deleted.

**HTTPException**

Unpinning the message failed.

<a id="api-partialmessage-add-reaction"></a>

##### `add_reaction(self, emoji: Union[EmojiInputType, Reaction], /) -> None`

*coroutine*

Adds a reaction to the message.

The emoji may be a unicode emoji or a custom guild `Emoji`.

You must have `Permissions.read_message_history`
to do this. If nobody else has reacted to the message using this
emoji, `Permissions.add_reactions` is required.

> **Changed in version 2.0**
> `emoji` parameter is now positional-only.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**emoji: Union\[`Emoji`, `Reaction`, `PartialEmoji`, `str`]**

The emoji to react with.

## Raises

**HTTPException**

Adding the reaction failed.

**Forbidden**

You do not have the proper permissions to react to the message.

**NotFound**

The emoji you specified was not found.

**TypeError**

The emoji parameter is invalid.

<a id="api-partialmessage-remove-reaction"></a>

##### `remove_reaction(self, emoji: Union[EmojiInputType, Reaction], member: Snowflake) -> None`

*coroutine*

Remove a reaction by the member from the message.

The emoji may be a unicode emoji or a custom guild `Emoji`.

If the reaction is not your own (i.e. `member` parameter is not you) then
`Permissions.manage_messages` is needed.

The `member` parameter must represent a member and meet
the `abc.Snowflake` abc.

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**emoji: Union\[`Emoji`, `Reaction`, `PartialEmoji`, `str`]**

The emoji to remove.

**member: `abc.Snowflake`**

The member for which to remove the reaction.

## Raises

**HTTPException**

Removing the reaction failed.

**Forbidden**

You do not have the proper permissions to remove the reaction.

**NotFound**

The member or emoji you specified was not found.

**TypeError**

The emoji parameter is invalid.

<a id="api-partialmessage-clear-reaction"></a>

##### `clear_reaction(self, emoji: Union[EmojiInputType, Reaction]) -> None`

*coroutine*

Clears a specific reaction from the message.

The emoji may be a unicode emoji or a custom guild `Emoji`.

You must have `Permissions.manage_messages` to do this.

> **Added in version 1.3**

> **Changed in version 2.0**
> This function will now raise `TypeError` instead of
> `InvalidArgument`.

## Parameters

**emoji: Union\[`Emoji`, `Reaction`, `PartialEmoji`, `str`]**

The emoji to clear.

## Raises

**HTTPException**

Clearing the reaction failed.

**Forbidden**

You do not have the proper permissions to clear the reaction.

**NotFound**

The emoji you specified was not found.

**TypeError**

The emoji parameter is invalid.

<a id="api-partialmessage-clear-reactions"></a>

##### `clear_reactions(self) -> None`

*coroutine*

Removes all the reactions from the message.

You must have `Permissions.manage_messages` to do this.

## Raises

**HTTPException**

Removing the reactions failed.

**Forbidden**

You do not have the proper permissions to remove all the reactions.

<a id="api-partialmessage-create-thread"></a>

##### `create_thread( self, *, name: str, auto_archive_duration: ThreadArchiveDuration = MISSING, slowmode_delay: Optional[int] = None, reason: Optional[str] = None,) -> Thread`

*coroutine*

Creates a public thread from this message.

You must have `discord.Permissions.create_public_threads` in order to
create a public thread from a message.

The channel this message belongs in must be a `TextChannel`.

> **Added in version 2.0**

## Parameters

**name: `str`**

The name of the thread.

**auto\_archive\_duration: `int`**

The duration in minutes before a thread is automatically hidden from the channel list.
If not provided, the channel's default auto archive duration is used.

Must be one of `60`, `1440`, `4320`, or `10080`, if provided.

**slowmode\_delay: Optional\[`int`]**

Specifies the slowmode rate limit for user in this channel, in seconds.
The maximum value possible is `21600`. By default no slowmode rate limit
if this is `None`.

**reason: Optional\[`str`]**

The reason for creating a new thread. Shows up on the audit log.

## Raises

**Forbidden**

You do not have permissions to create a thread.

**HTTPException**

Creating the thread failed.

**ValueError**

This message does not have guild info attached.

## Returns

**`.Thread`**

The created thread.

<a id="api-partialmessage-fetch-thread"></a>

##### `fetch_thread(self) -> Thread`

*coroutine*

Retrieves the public thread attached to this message.

> **Note**
> This method is an API call. For general usage, consider `thread` instead.

> **Added in version 2.4**

## Raises

**InvalidData**

An unknown channel type was received from Discord
or the guild the thread belongs to is not the same
as the one in this object points to.

**HTTPException**

Retrieving the thread failed.

**NotFound**

There is no thread attached to this message.

**Forbidden**

You do not have permission to fetch this channel.

## Returns

**`.Thread`**

The public thread attached to this message.

<a id="api-partialmessage-reply"></a>

##### `reply(self, content: Optional[str] = None, **kwargs: Any) -> Message`

*coroutine*

A shortcut method to `.abc.Messageable.send` to reply to the
`.Message`.

> **Added in version 1.6**

> **Changed in version 2.0**
> This function will now raise `TypeError` or
> `ValueError` instead of `InvalidArgument`.

## Raises

**\~discord.HTTPException**

Sending the message failed.

**\~discord.Forbidden**

You do not have the proper permissions to send the message.

**ValueError**

The `files` list is not of the appropriate size

**TypeError**

You specified both `file` and `files`.

## Returns

**`.Message`**

The message that was sent.

<a id="api-partialmessage-end-poll"></a>

##### `end_poll(self) -> Message`

*coroutine*

Ends the `Poll` attached to this message.

This can only be done if you are the message author.

If the poll was successfully ended, then it returns the updated `Message`.

## Raises

**\~discord.HTTPException**

Ending the poll failed.

## Returns

**`.Message`**

The updated message.

<a id="api-partialmessage-to-reference"></a>

##### `to_reference( self, *, fail_if_not_exists: bool = True, type: MessageReferenceType = MessageReferenceType.reply,) -> MessageReference`

Creates a `discord.MessageReference` from the current message.

> **Added in version 1.6**

## Parameters

**fail\_if\_not\_exists: `bool`**

Whether the referenced message should raise `HTTPException`
if the message no longer exists or Discord could not fetch the message.

> **Added in version 1.7**

**type: `MessageReferenceType`**

The type of message reference.

> **Added in version 2.5**

## Returns

**`discord.MessageReference`**

The reference to this message.

<a id="api-partialmessage-forward"></a>

##### `forward( self, destination: MessageableChannel, *, fail_if_not_exists: bool = True,) -> Message`

*coroutine*

Forwards this message to a channel.

> **Added in version 2.5**

## Parameters

**destination: `discord.abc.Messageable`**

The channel to forward this message to.

**fail\_if\_not\_exists: `bool`**

Whether replying using the message reference should raise `HTTPException`
if the message no longer exists or Discord could not fetch the message.

## Raises

**\~discord.HTTPException**

Forwarding the message failed.

## Returns

**`.Message`**

The message sent to the channel.

### MessageApplication

<a id="api-messageapplication"></a>

#### `MessageApplication`

Represents a message's application data from a `discord.Message`.

> **Added in version 2.0**

## Attributes

**id: `int`**

The application ID.

**description: `str`**

The application description.

**name: `str`**

The application's name.

<a id="api-messageapplication-icon"></a>

##### `icon(self) -> Optional[Asset]`

Optional\[`Asset`]: The application's icon, if any.

<a id="api-messageapplication-cover"></a>

##### `cover(self) -> Optional[Asset]`

Optional\[`Asset`]: The application's cover image, if any.

### RoleSubscriptionInfo

<a id="api-rolesubscriptioninfo"></a>

#### `RoleSubscriptionInfo`

Represents a message's role subscription information.

This is currently only attached to messages of type `MessageType.role_subscription_purchase`.

> **Added in version 2.0**

## Attributes

**role\_subscription\_listing\_id: `int`**

The ID of the SKU and listing that the user is subscribed to.

**tier\_name: `str`**

The name of the tier that the user is subscribed to.

**total\_months\_subscribed: `int`**

The cumulative number of months that the user has been subscribed for.

**is\_renewal: `bool`**

Whether this notification is for a renewal rather than a new purchase.

### PurchaseNotification

<a id="api-purchasenotification"></a>

#### `PurchaseNotification`

Represents a message's purchase notification data.

This is currently only attached to messages of type `MessageType.purchase_notification`.

> **Added in version 2.5**

## Attributes

**guild\_product\_purchase: Optional\[`GuildProductPurchase`]**

The guild product purchase that prompted the message.

##### GuildProductPurchase

<a id="api-guildproductpurchase"></a>

#### `GuildProductPurchase`

Represents a message's guild product that the user has purchased.

> **Added in version 2.5**

## Attributes

**listing\_id: `int`**

The ID of the listing that the user has purchased.

**product\_name: `str`**

The name of the product that the user has purchased.

### Intents

<a id="api-intents"></a>

#### `Intents(BaseFlags)`

Wraps up a Discord gateway intent flag.

Similar to `Permissions`, the properties provided are two way.
You can set and retrieve individual bits using the properties as if they
were regular bools.

To construct an object you can pass keyword arguments denoting the flags
to enable or disable.

This is used to disable certain gateway features that are unnecessary to
run your bot. To make use of this, it is passed to the `intents` keyword
argument of `Client`.

> **Added in version 1.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns an Intents instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns an Intents instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns an Intents instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns an Intents instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any intent is enabled.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-intents-all"></a>

##### `all(cls: Type[Intents]) -> Intents`

A factory method that creates a `Intents` with everything enabled.

<a id="api-intents-none"></a>

##### `none(cls: Type[Intents]) -> Intents`

A factory method that creates a `Intents` with everything disabled.

<a id="api-intents-default"></a>

##### `default(cls: Type[Intents]) -> Intents`

A factory method that creates a `Intents` with everything enabled
except `presences`, `members`, and `message_content`.

<a id="api-intents-guilds"></a>

##### `guilds(self)`

`bool`: Whether guild related events are enabled.

This corresponds to the following events:

- `on_guild_join`
- `on_guild_remove`
- `on_guild_available`
- `on_guild_unavailable`
- `on_guild_channel_update`
- `on_guild_channel_create`
- `on_guild_channel_delete`
- `on_guild_channel_pins_update`
- `on_thread_create`
- `on_thread_join`
- `on_thread_update`
- `on_thread_delete`

This also corresponds to the following attributes and classes in terms of cache:

- `Client.guilds`
- `Guild` and all its attributes.
- `Client.get_channel`
- `Client.get_all_channels`

It is highly advisable to leave this intent enabled for your bot to function.

<a id="api-intents-members"></a>

##### `members(self)`

`bool`: Whether guild member related events are enabled.

This corresponds to the following events:

- `on_member_join`
- `on_member_remove`
- `on_member_update`
- `on_user_update`
- `on_thread_member_join`
- `on_thread_member_remove`

This also corresponds to the following attributes and classes in terms of cache:

- `Client.get_all_members`
- `Client.get_user`
- `Guild.chunk`
- `Guild.fetch_members`
- `Guild.get_member`
- `Guild.members`
- `Member.roles`
- `Member.nick`
- `Member.premium_since`
- `User.name`
- `User.avatar`
- `User.discriminator`
- `User.global_name`

For more information go to the [member intent documentation](https://discordpy.readthedocs.io/intents.html#need-members-intent).

> **Note**
> Currently, this requires opting in explicitly via the developer portal as well.
> Bots in over 100 guilds will need to apply to Discord for verification.

<a id="api-intents-moderation"></a>

##### `moderation(self)`

`bool`: Whether guild moderation related events are enabled.

This corresponds to the following events:

- `on_member_ban`
- `on_member_unban`
- `on_audit_log_entry_create`

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-bans"></a>

##### `bans(self)`

`bool`: An alias of `moderation`.

> **Changed in version 2.2**
> Changed to an alias.

<a id="api-intents-emojis"></a>

##### `emojis(self)`

`bool`: Alias of `.expressions`.

> **Changed in version 2.0**
> Changed to an alias.

<a id="api-intents-emojis-and-stickers"></a>

##### `emojis_and_stickers(self)`

`bool`: Alias of `.expressions`.

> **Added in version 2.0**

> **Changed in version 2.5**
> Changed to an alias.

<a id="api-intents-expressions"></a>

##### `expressions(self)`

`bool`: Whether guild emoji, sticker, and soundboard sound related events are enabled.

> **Added in version 2.5**

This corresponds to the following events:

- `on_guild_emojis_update`
- `on_guild_stickers_update`
- `on_soundboard_sound_create`
- `on_soundboard_sound_update`
- `on_soundboard_sound_delete`

This also corresponds to the following attributes and classes in terms of cache:

- `Emoji`
- `GuildSticker`
- `SoundboardSound`
- `Client.get_emoji`
- `Client.get_sticker`
- `Client.get_soundboard_sound`
- `Client.emojis`
- `Client.stickers`
- `Client.soundboard_sounds`
- `Guild.emojis`
- `Guild.stickers`
- `Guild.soundboard_sounds`

<a id="api-intents-integrations"></a>

##### `integrations(self)`

`bool`: Whether guild integration related events are enabled.

This corresponds to the following events:

- `on_guild_integrations_update`
- `on_integration_create`
- `on_integration_update`
- `on_raw_integration_delete`

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-webhooks"></a>

##### `webhooks(self)`

`bool`: Whether guild webhook related events are enabled.

This corresponds to the following events:

- `on_webhooks_update`

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-invites"></a>

##### `invites(self)`

`bool`: Whether guild invite related events are enabled.

This corresponds to the following events:

- `on_invite_create`
- `on_invite_delete`

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-voice-states"></a>

##### `voice_states(self)`

`bool`: Whether guild voice state related events are enabled.

This corresponds to the following events:

- `on_voice_state_update`

This also corresponds to the following attributes and classes in terms of cache:

- `VoiceChannel.members`
- `VoiceChannel.voice_states`
- `Member.voice`

> **Note**
> This intent is required to connect to voice.

<a id="api-intents-presences"></a>

##### `presences(self)`

`bool`: Whether guild presence related events are enabled.

This corresponds to the following events:

- `on_presence_update`

This also corresponds to the following attributes and classes in terms of cache:

- `Member.activities`
- `Member.status`
- `Member.raw_status`

For more information go to the [presence intent documentation](https://discordpy.readthedocs.io/intents.html#need-presence-intent).

> **Note**
> Currently, this requires opting in explicitly via the developer portal as well.
> Bots in over 100 guilds will need to apply to Discord for verification.

<a id="api-intents-messages"></a>

##### `messages(self)`

`bool`: Whether guild and direct message related events are enabled.

This is a shortcut to set or get both `guild_messages` and `dm_messages`.

This corresponds to the following events:

- `on_message` (both guilds and DMs)
- `on_message_edit` (both guilds and DMs)
- `on_message_delete` (both guilds and DMs)
- `on_raw_message_delete` (both guilds and DMs)
- `on_raw_message_edit` (both guilds and DMs)

This also corresponds to the following attributes and classes in terms of cache:

- `Message`
- `Client.cached_messages`

Note that due to an implicit relationship this also corresponds to the following events:

- `on_reaction_add` (both guilds and DMs)
- `on_reaction_remove` (both guilds and DMs)
- `on_reaction_clear` (both guilds and DMs)

<a id="api-intents-guild-messages"></a>

##### `guild_messages(self)`

`bool`: Whether guild message related events are enabled.

See also `dm_messages` for DMs or `messages` for both.

This corresponds to the following events:

- `on_message` (only for guilds)
- `on_message_edit` (only for guilds)
- `on_message_delete` (only for guilds)
- `on_raw_message_delete` (only for guilds)
- `on_raw_message_edit` (only for guilds)

This also corresponds to the following attributes and classes in terms of cache:

- `Message`
- `Client.cached_messages` (only for guilds)

Note that due to an implicit relationship this also corresponds to the following events:

- `on_reaction_add` (only for guilds)
- `on_reaction_remove` (only for guilds)
- `on_reaction_clear` (only for guilds)

<a id="api-intents-dm-messages"></a>

##### `dm_messages(self)`

`bool`: Whether direct message related events are enabled.

See also `guild_messages` for guilds or `messages` for both.

This corresponds to the following events:

- `on_message` (only for DMs)
- `on_message_edit` (only for DMs)
- `on_message_delete` (only for DMs)
- `on_raw_message_delete` (only for DMs)
- `on_raw_message_edit` (only for DMs)

This also corresponds to the following attributes and classes in terms of cache:

- `Message`
- `Client.cached_messages` (only for DMs)

Note that due to an implicit relationship this also corresponds to the following events:

- `on_reaction_add` (only for DMs)
- `on_reaction_remove` (only for DMs)
- `on_reaction_clear` (only for DMs)

<a id="api-intents-reactions"></a>

##### `reactions(self)`

`bool`: Whether guild and direct message reaction related events are enabled.

This is a shortcut to set or get both `guild_reactions` and `dm_reactions`.

This corresponds to the following events:

- `on_reaction_add` (both guilds and DMs)
- `on_reaction_remove` (both guilds and DMs)
- `on_reaction_clear` (both guilds and DMs)
- `on_raw_reaction_add` (both guilds and DMs)
- `on_raw_reaction_remove` (both guilds and DMs)
- `on_raw_reaction_clear` (both guilds and DMs)

This also corresponds to the following attributes and classes in terms of cache:

- `Message.reactions` (both guild and DM messages)

<a id="api-intents-guild-reactions"></a>

##### `guild_reactions(self)`

`bool`: Whether guild message reaction related events are enabled.

See also `dm_reactions` for DMs or `reactions` for both.

This corresponds to the following events:

- `on_reaction_add` (only for guilds)
- `on_reaction_remove` (only for guilds)
- `on_reaction_clear` (only for guilds)
- `on_raw_reaction_add` (only for guilds)
- `on_raw_reaction_remove` (only for guilds)
- `on_raw_reaction_clear` (only for guilds)

This also corresponds to the following attributes and classes in terms of cache:

- `Message.reactions` (only for guild messages)

<a id="api-intents-dm-reactions"></a>

##### `dm_reactions(self)`

`bool`: Whether direct message reaction related events are enabled.

See also `guild_reactions` for guilds or `reactions` for both.

This corresponds to the following events:

- `on_reaction_add` (only for DMs)
- `on_reaction_remove` (only for DMs)
- `on_reaction_clear` (only for DMs)
- `on_raw_reaction_add` (only for DMs)
- `on_raw_reaction_remove` (only for DMs)
- `on_raw_reaction_clear` (only for DMs)

This also corresponds to the following attributes and classes in terms of cache:

- `Message.reactions` (only for DM messages)

<a id="api-intents-typing"></a>

##### `typing(self)`

`bool`: Whether guild and direct message typing related events are enabled.

This is a shortcut to set or get both `guild_typing` and `dm_typing`.

This corresponds to the following events:

- `on_typing` (both guilds and DMs)

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-guild-typing"></a>

##### `guild_typing(self)`

`bool`: Whether guild and direct message typing related events are enabled.

See also `dm_typing` for DMs or `typing` for both.

This corresponds to the following events:

- `on_typing` (only for guilds)

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-dm-typing"></a>

##### `dm_typing(self)`

`bool`: Whether guild and direct message typing related events are enabled.

See also `guild_typing` for guilds or `typing` for both.

This corresponds to the following events:

- `on_typing` (only for DMs)

This does not correspond to any attributes or classes in the library in terms of cache.

<a id="api-intents-message-content"></a>

##### `message_content(self)`

`bool`: Whether message content, attachments, embeds and components will be available in messages
which do not meet the following criteria:

- The message was sent by the client
- The message was sent in direct messages
- The message mentions the client

This applies to the following events:

- `on_message`
- `on_message_edit`
- `on_message_delete`
- `on_raw_message_edit`

For more information go to the [message content intent documentation](https://discordpy.readthedocs.io/intents.html#need-message-content-intent).

> **Note**
> Currently, this requires opting in explicitly via the developer portal as well.
> Bots in over 100 guilds will need to apply to Discord for verification.

> **Added in version 2.0**

<a id="api-intents-guild-scheduled-events"></a>

##### `guild_scheduled_events(self)`

`bool`: Whether guild scheduled event related events are enabled.

This corresponds to the following events:

- `on_scheduled_event_create`
- `on_scheduled_event_update`
- `on_scheduled_event_delete`
- `on_scheduled_event_user_add`
- `on_scheduled_event_user_remove`

> **Added in version 2.0**

<a id="api-intents-auto-moderation"></a>

##### `auto_moderation(self)`

`bool`: Whether auto moderation related events are enabled.

This is a shortcut to set or get both `auto_moderation_configuration`
and `auto_moderation_execution`.

This corresponds to the following events:

- `on_automod_rule_create`
- `on_automod_rule_update`
- `on_automod_rule_delete`
- `on_automod_action`

> **Added in version 2.0**

<a id="api-intents-auto-moderation-configuration"></a>

##### `auto_moderation_configuration(self)`

`bool`: Whether auto moderation configuration related events are enabled.

This corresponds to the following events:

- `on_automod_rule_create`
- `on_automod_rule_update`
- `on_automod_rule_delete`

> **Added in version 2.0**

<a id="api-intents-auto-moderation-execution"></a>

##### `auto_moderation_execution(self)`

`bool`: Whether auto moderation execution related events are enabled.

This corresponds to the following events:

- `on_automod_action`

> **Added in version 2.0**

<a id="api-intents-polls"></a>

##### `polls(self)`

`bool`: Whether guild and direct messages poll related events are enabled.

This is a shortcut to set or get both `guild_polls` and `dm_polls`.

This corresponds to the following events:

- `on_poll_vote_add` (both guilds and DMs)
- `on_poll_vote_remove` (both guilds and DMs)
- `on_raw_poll_vote_add` (both guilds and DMs)
- `on_raw_poll_vote_remove` (both guilds and DMs)

> **Added in version 2.4**

<a id="api-intents-guild-polls"></a>

##### `guild_polls(self)`

`bool`: Whether guild poll related events are enabled.

See also `dm_polls` and `polls`.

This corresponds to the following events:

- `on_poll_vote_add` (only for guilds)
- `on_poll_vote_remove` (only for guilds)
- `on_raw_poll_vote_add` (only for guilds)
- `on_raw_poll_vote_remove` (only for guilds)

> **Added in version 2.4**

<a id="api-intents-dm-polls"></a>

##### `dm_polls(self)`

`bool`: Whether direct messages poll related events are enabled.

See also `guild_polls` and `polls`.

This corresponds to the following events:

- `on_poll_vote_add` (only for DMs)
- `on_poll_vote_remove` (only for DMs)
- `on_raw_poll_vote_add` (only for DMs)
- `on_raw_poll_vote_remove` (only for DMs)

> **Added in version 2.4**

### MemberCacheFlags

<a id="api-membercacheflags"></a>

#### `MemberCacheFlags(BaseFlags)`

Controls the library's cache policy when it comes to members.

This allows for finer grained control over what members are cached.
Note that the bot's own member is always cached. This class is passed
to the `member_cache_flags` parameter in `Client`.

Due to a quirk in how Discord works, in order to ensure proper cleanup
of cache resources it is recommended to have `Intents.members`
enabled. Otherwise the library cannot know when a member leaves a guild and
is thus unable to cleanup after itself.

To construct an object you can pass keyword arguments denoting the flags
to enable or disable.

The default value is all flags enabled.

> **Added in version 1.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a MemberCacheFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a MemberCacheFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a MemberCacheFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a MemberCacheFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-membercacheflags-all"></a>

##### `all(cls: Type[MemberCacheFlags]) -> MemberCacheFlags`

A factory method that creates a `MemberCacheFlags` with everything enabled.

<a id="api-membercacheflags-none"></a>

##### `none(cls: Type[MemberCacheFlags]) -> MemberCacheFlags`

A factory method that creates a `MemberCacheFlags` with everything disabled.

<a id="api-membercacheflags-voice"></a>

##### `voice(self)`

`bool`: Whether to cache members that are in voice.

This requires `Intents.voice_states`.

Members that leave voice are no longer cached.

<a id="api-membercacheflags-joined"></a>

##### `joined(self)`

`bool`: Whether to cache members that joined the guild
or are chunked as part of the initial log in flow.

This requires `Intents.members`.

Members that leave the guild are no longer cached.

<a id="api-membercacheflags-from-intents"></a>

##### `from_intents(cls: Type[MemberCacheFlags], intents: Intents) -> MemberCacheFlags`

A factory method that creates a `MemberCacheFlags` based on
the currently selected `Intents`.

## Parameters

**intents: `Intents`**

The intents to select from.

## Returns

**`MemberCacheFlags`**

The resulting member cache flags.

### ApplicationFlags

<a id="api-applicationflags"></a>

#### `ApplicationFlags(BaseFlags)`

Wraps up the Discord Application flags.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two ApplicationFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two ApplicationFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns an ApplicationFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns an ApplicationFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns an ApplicationFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns an ApplicationFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-applicationflags-auto-mod-badge"></a>

##### `auto_mod_badge(self)`

`bool`: Returns `True` if the application uses at least 100 automod rules across all guilds.
This shows up as a badge in the official client.

> **Added in version 2.3**

<a id="api-applicationflags-gateway-presence"></a>

##### `gateway_presence(self)`

`bool`: Returns `True` if the application is verified and is allowed to
receive presence information over the gateway.

<a id="api-applicationflags-gateway-presence-limited"></a>

##### `gateway_presence_limited(self)`

`bool`: Returns `True` if the application is allowed to receive limited
presence information over the gateway.

<a id="api-applicationflags-gateway-guild-members"></a>

##### `gateway_guild_members(self)`

`bool`: Returns `True` if the application is verified and is allowed to
receive guild members information over the gateway.

<a id="api-applicationflags-gateway-guild-members-limited"></a>

##### `gateway_guild_members_limited(self)`

`bool`: Returns `True` if the application is allowed to receive limited
guild members information over the gateway.

<a id="api-applicationflags-verification-pending-guild-limit"></a>

##### `verification_pending_guild_limit(self)`

`bool`: Returns `True` if the application is currently pending verification
and has hit the guild limit.

<a id="api-applicationflags-embedded"></a>

##### `embedded(self)`

`bool`: Returns `True` if the application is embedded within the Discord client.

<a id="api-applicationflags-gateway-message-content"></a>

##### `gateway_message_content(self)`

`bool`: Returns `True` if the application is verified and is allowed to
read message content in guilds.

<a id="api-applicationflags-gateway-message-content-limited"></a>

##### `gateway_message_content_limited(self)`

`bool`: Returns `True` if the application is unverified and is allowed to
read message content in guilds.

<a id="api-applicationflags-app-commands-badge"></a>

##### `app_commands_badge(self)`

`bool`: Returns `True` if the application has registered a global application
command. This shows up as a badge in the official client.

<a id="api-applicationflags-active"></a>

##### `active(self)`

`bool`: Returns `True` if the application has had at least one global application
command used in the last 30 days.

> **Added in version 2.1**

### ChannelFlags

<a id="api-channelflags"></a>

#### `ChannelFlags(BaseFlags)`

Wraps up the Discord `discord.abc.GuildChannel` or `Thread` flags.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two channel flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two channel flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a ChannelFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a ChannelFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a ChannelFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a ChannelFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-channelflags-pinned"></a>

##### `pinned(self)`

`bool`: Returns `True` if the thread is pinned to the forum channel.

<a id="api-channelflags-require-tag"></a>

##### `require_tag(self)`

`bool`: Returns `True` if a tag is required to be specified when creating a thread
in a `ForumChannel`.

> **Added in version 2.1**

<a id="api-channelflags-hide-media-download-options"></a>

##### `hide_media_download_options(self)`

`bool`: Returns `True` if the client hides embedded media download options in a `ForumChannel`.
Only available in media channels.

> **Added in version 2.4**

### AutoModPresets

<a id="api-automodpresets"></a>

#### `AutoModPresets(ArrayFlags)`

Wraps up the Discord `AutoModRule` presets.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two AutoMod preset flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two AutoMod preset flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns an AutoModPresets instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns an AutoModPresets instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns an AutoModPresets instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns an AutoModPresets instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-automodpresets-profanity"></a>

##### `profanity(self)`

`bool`: Whether to use the preset profanity filter.

<a id="api-automodpresets-sexual-content"></a>

##### `sexual_content(self)`

`bool`: Whether to use the preset sexual content filter.

<a id="api-automodpresets-slurs"></a>

##### `slurs(self)`

`bool`: Whether to use the preset slurs filter.

### AutoModRuleAction

<a id="api-automodruleaction"></a>

#### `AutoModRuleAction`

Represents an auto moderation's rule action.

> **Note**
> Only one of `channel_id`, `duration`, or `custom_message` can be used.

> **Added in version 2.0**

## Attributes

**type: `AutoModRuleActionType`**

The type of action to take.
Defaults to `AutoModRuleActionType.block_message`.

**channel\_id: Optional\[`int`]**

The ID of the channel or thread to send the alert message to, if any.
Passing this sets `type` to `AutoModRuleActionType.send_alert_message`.

**duration: Optional\[`datetime.timedelta`]**

The duration of the timeout to apply, if any.
Has a maximum of 28 days.
Passing this sets `type` to `AutoModRuleActionType.timeout`.

**custom\_message: Optional\[`str`]**

A custom message which will be shown to a user when their message is blocked.
Passing this sets `type` to `AutoModRuleActionType.block_message`.

> **Added in version 2.2**

### AutoModTrigger

<a id="api-automodtrigger"></a>

#### `AutoModTrigger`

Represents a trigger for an auto moderation rule.

The following table illustrates relevant attributes for each `AutoModRuleTriggerType`:

| Type                                    | Attributes                                       |
| --------------------------------------- | ------------------------------------------------ |
| `AutoModRuleTriggerType.keyword`        | `keyword_filter`, `regex_patterns`, `allow_list` |
| `AutoModRuleTriggerType.spam`           |                                                  |
| `AutoModRuleTriggerType.keyword_preset` | `presets`, `allow_list`                          |
| `AutoModRuleTriggerType.mention_spam`   | `mention_limit`, `mention_raid_protection`       |
| `AutoModRuleTriggerType.member_profile` | `keyword_filter`, `regex_patterns`, `allow_list` |

> **Added in version 2.0**

## Attributes

**type: `AutoModRuleTriggerType`**

The type of trigger.

**keyword\_filter: List\[`str`]**

The list of strings that will trigger the filter.
Maximum of 1000. Keywords can only be up to 60 characters in length.

This could be combined with `regex_patterns`.

**regex\_patterns: List\[`str`]**

The regex pattern that will trigger the filter. The syntax is based off of
[Rust's regex syntax](https://docs.rs/regex/latest/regex/#syntax).
Maximum of 10. Regex strings can only be up to 260 characters in length.

This could be combined with `keyword_filter` and/or `allow_list`

> **Added in version 2.1**

**presets: `AutoModPresets`**

The presets used with the preset keyword filter.

**allow\_list: List\[`str`]**

The list of words that are exempt from the commonly flagged words. Maximum of 100.
Keywords can only be up to 60 characters in length.

**mention\_limit: `int`**

The total number of user and role mentions a message can contain.
Has a maximum of 50.

**mention\_raid\_protection: `bool`**

Whether mention raid protection is enabled or not.

> **Added in version 2.4**

### File

<a id="api-file"></a>

#### `File`

A parameter object used for `abc.Messageable.send`
for sending file objects.

> **Note**
> File objects are single use and are not meant to be reused in
> multiple `abc.Messageable.send`\s.

## Attributes

**fp: Union\[`os.PathLike`, `io.BufferedIOBase`]**

A file-like object opened in binary mode and read mode
or a filename representing a file in the hard drive to
open.

> **Note**
> If the file-like object passed is opened via `open` then the
> modes 'rb' should be used.
>
> To pass binary data, consider usage of `io.BytesIO`.

**spoiler: `bool`**

Whether the attachment is a spoiler. If left unspecified, the `File.filename` is used
to determine if the file is a spoiler.

**description: Optional\[`str`]**

The file description to display, currently only supported for images.

> **Added in version 2.0**

<a id="api-file-filename"></a>

##### `filename(self) -> str`

`str`: The filename to display when uploading to Discord.
If this is not given then it defaults to `fp.name` or if `fp` is
a string then the `filename` will default to the string given.

<a id="api-file-uri"></a>

##### `uri(self) -> str`

`str`: Returns the `attachment://<filename>` URI for this file.
This is used in certain places such as embeds or components to refer
to an uploaded file via URL.

> **Note**
> Due to Discord's filename processing, the filename must be ASCII aphanumeric
> with underscores, dashes, and periods.

> **Added in version 2.6**

### Colour

<a id="api-colour"></a>

#### `Colour`

Represents a Discord role colour. This class is similar
to a (red, green, blue) `tuple`.

There is an alias for this called Color.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two colours are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two colours are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the colour's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the hex format for the colour.

<a id="describe-int-x"></a>

#### `int(x)`

Returns the raw colour value.

> **Note**
> The colour values in the classmethods are mostly provided as-is and can change between
> versions should the Discord client's representation of that colour also change.

## Attributes

**value: `int`**

The raw integer colour value.

<a id="api-colour-r"></a>

##### `r(self) -> int`

`int`: Returns the red component of the colour.

<a id="api-colour-g"></a>

##### `g(self) -> int`

`int`: Returns the green component of the colour.

<a id="api-colour-b"></a>

##### `b(self) -> int`

`int`: Returns the blue component of the colour.

<a id="api-colour-to-rgb"></a>

##### `to_rgb(self) -> Tuple[int, int, int]`

Tuple\[`int`, `int`, `int`]: Returns an (r, g, b) tuple representing the colour.

<a id="api-colour-from-rgb"></a>

##### `from_rgb(cls, r: int, g: int, b: int) -> Self`

Constructs a `Colour` from an RGB tuple.

<a id="api-colour-from-hsv"></a>

##### `from_hsv(cls, h: float, s: float, v: float) -> Self`

Constructs a `Colour` from an HSV tuple.

<a id="api-colour-from-str"></a>

##### `from_str(cls, value: str) -> Colour`

Constructs a `Colour` from a string.

The following formats are accepted:

- `0x<hex>`
- `#<hex>`
- `0x#<hex>`
- `rgb(<number>, <number>, <number>)`

Like CSS, `<number>` can be either 0-255 or 0-100% and `<hex>` can be
either a 6 digit hex number or a 3 digit hex shortcut (e.g. #FFF).

> **Added in version 2.0**

## Raises

**ValueError**

The string could not be converted into a colour.

<a id="api-colour-default"></a>

##### `default(cls) -> Self`

A factory method that returns a `Colour` with a value of `0`.

Color: `#000000`

<a id="api-colour-random"></a>

##### `random(cls, *, seed: Optional[Union[int, str, float, bytes, bytearray]] = None) -> Self`

A factory method that returns a `Colour` with a random hue.

> **Note**
> The random algorithm works by choosing a colour with a random hue but
> with maxed out saturation and value.

> **Added in version 1.6**

## Parameters

**seed: Optional\[Union\[`int`, `str`, `float`, `bytes`, `bytearray`]]**

The seed to initialize the RNG with. If `None` is passed the default RNG is used.

> **Added in version 1.7**

<a id="api-colour-teal"></a>

##### `teal(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x1ABC9C`.

Color: `#1ABC9C`

<a id="api-colour-dark-teal"></a>

##### `dark_teal(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x11806A`.

Color: `#11806A`

<a id="api-colour-brand-green"></a>

##### `brand_green(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x57F287`.

Color: `#57F287`

> **Added in version 2.0**

<a id="api-colour-green"></a>

##### `green(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x2ECC71`.

Color: `#2ECC71`

<a id="api-colour-dark-green"></a>

##### `dark_green(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x1F8B4C`.

Color: `#1F8B4C`

<a id="api-colour-blue"></a>

##### `blue(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x3498DB`.

Color: `#3498DB`

<a id="api-colour-dark-blue"></a>

##### `dark_blue(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x206694`.

Color: `#206694`

<a id="api-colour-purple"></a>

##### `purple(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x9B59B6`.

Color: `#9B59B6`

<a id="api-colour-dark-purple"></a>

##### `dark_purple(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x71368A`.

Color: `#71368A`

<a id="api-colour-magenta"></a>

##### `magenta(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xE91E63`.

Color: `#E91E63`

<a id="api-colour-dark-magenta"></a>

##### `dark_magenta(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xAD1457`.

Color: `#AD1457`

<a id="api-colour-gold"></a>

##### `gold(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xF1C40F`.

Color: `#F1C40F`

<a id="api-colour-dark-gold"></a>

##### `dark_gold(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xC27C0E`.

Color: `#C27C0E`

<a id="api-colour-orange"></a>

##### `orange(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xE67E22`.

Color: `#E67E22`

<a id="api-colour-dark-orange"></a>

##### `dark_orange(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xA84300`.

Color: `#A84300`

<a id="api-colour-brand-red"></a>

##### `brand_red(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xED4245`.

Color: `#ED4245`

> **Added in version 2.0**

<a id="api-colour-red"></a>

##### `red(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xE74C3C`.

Color: `#E74C3C`

<a id="api-colour-dark-red"></a>

##### `dark_red(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x992D22`.

Color: `#992D22`

<a id="api-colour-lighter-grey"></a>

##### `lighter_grey(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x95A5A6`.

Color: `#95A5A6`

<a id="api-colour-dark-grey"></a>

##### `dark_grey(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x607d8b`.

Color: `#607d8b`

<a id="api-colour-light-grey"></a>

##### `light_grey(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x979C9F`.

Color: `#979C9F`

<a id="api-colour-darker-grey"></a>

##### `darker_grey(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x546E7A`.

Color: `#546E7A`

<a id="api-colour-og-blurple"></a>

##### `og_blurple(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x7289DA`.

Color: `#7289DA`

<a id="api-colour-blurple"></a>

##### `blurple(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x5865F2`.

Color: `#5865F2`

<a id="api-colour-greyple"></a>

##### `greyple(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x99AAB5`.

Color: `#99AAB5`

<a id="api-colour-ash-theme"></a>

##### `ash_theme(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x2E2E34`.

This will appear transparent on Discord's ash theme.

Color: `#2E2E34`

> **Added in version 2.6**

<a id="api-colour-dark-theme"></a>

##### `dark_theme(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x1A1A1E`.

This will appear transparent on Discord's dark theme.

Color: `#1A1A1E`

> **Added in version 1.5**

> **Changed in version 2.2**
> Updated colour from previous `0x36393F` to reflect discord theme changes.

> **Changed in version 2.6**
> Updated colour from previous `0x313338` to reflect discord theme changes.

<a id="api-colour-onyx-theme"></a>

##### `onyx_theme(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x070709`.

This will appear transparent on Discord's onyx theme.

Color: `#070709`

> **Added in version 2.6**

<a id="api-colour-light-theme"></a>

##### `light_theme(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xFBFBFB`.

This will appear transparent on Discord's light theme.

Color: `#FBFBFB`

> **Added in version 2.6**

<a id="api-colour-fuchsia"></a>

##### `fuchsia(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xEB459E`.

Color: `#EB459E`

> **Added in version 2.0**

<a id="api-colour-yellow"></a>

##### `yellow(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xFEE75C`.

Color: `#FEE75C`

> **Added in version 2.0**

<a id="api-colour-ash-embed"></a>

##### `ash_embed(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x37373E`.

Color: `#37373E`

> **Added in version 2.6**

<a id="api-colour-dark-embed"></a>

##### `dark_embed(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x242429`.

Color: `#242429`

> **Added in version 2.2**

> **Changed in version 2.6**
> Updated colour from previous `0x2B2D31` to reflect discord theme changes.

<a id="api-colour-onyx-embed"></a>

##### `onyx_embed(cls) -> Self`

A factory method that returns a `Colour` with a value of `0x131416`.

Color: `#131416`

> **Added in version 2.6**

<a id="api-colour-light-embed"></a>

##### `light_embed(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xFFFFFF`.

Color: `#EEEFF1`

> **Added in version 2.2**

> **Changed in version 2.6**
> Updated colour from previous `0xEEEFF1` to reflect discord theme changes.

<a id="api-colour-pink"></a>

##### `pink(cls) -> Self`

A factory method that returns a `Colour` with a value of `0xEB459F`.

Color: `#EB459F`

> **Added in version 2.3**

### BaseActivity

<a id="api-baseactivity"></a>

#### `BaseActivity`

The base activity that all user-settable activities inherit from.
A user-settable activity is one that can be used in `Client.change_presence`.

The following types currently count as user-settable:

- `Activity`
- `Game`
- `Streaming`
- `CustomActivity`

Note that although these types are considered user-settable by the library,
Discord typically ignores certain combinations of activity depending on
what is currently set. This behaviour may change in the future so there are
no guarantees on whether Discord will actually let you set these types.

> **Added in version 1.3**

<a id="api-baseactivity-created-at"></a>

##### `created_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user started doing this activity in UTC.

> **Added in version 1.3**

### Activity

<a id="api-activity"></a>

#### `Activity(BaseActivity)`

Represents an activity in Discord.

This could be an activity such as streaming, playing, listening
or watching.

For memory optimisation purposes, some activities are offered in slimmed
down versions:

- `Game`
- `Streaming`

## Attributes

**application\_id: Optional\[`int`]**

The application ID of the game.

**name: Optional\[`str`]**

The name of the activity.

**url: Optional\[`str`]**

A stream URL that the activity could be doing.

**type: `ActivityType`**

The type of activity currently being done.

**state: Optional\[`str`]**

The user's current state. For example, "In Game".

**details: Optional\[`str`]**

The detail of the user's current activity.

**platform: Optional\[`str`]**

The user's current platform.

> **Added in version 2.4**

**timestamps: `dict`**

A dictionary of timestamps. It contains the following optional keys:

- `start`: Corresponds to when the user started doing the
  activity in milliseconds since Unix epoch.
- `end`: Corresponds to when the user will finish doing the
  activity in milliseconds since Unix epoch.

**assets: `dict`**

A dictionary representing the images and their hover text of an activity.
It contains the following optional keys:

- `large_image`: A string representing the ID for the large image asset.
- `large_text`: A string representing the text when hovering over the large image asset.
- `large_url`: A string representing the URL of the large image asset.
- `small_image`: A string representing the ID for the small image asset.
- `small_text`: A string representing the text when hovering over the small image asset.
- `small_url`: A string representing the URL of the small image asset.

**party: `dict`**

A dictionary representing the activity party. It contains the following optional keys:

- `id`: A string representing the party ID.
- `size`: A list of up to two integer elements denoting (current\_size, maximum\_size).

**buttons: List\[`str`]**

A list of strings representing the labels of custom buttons shown in a rich presence.

> **Added in version 2.0**

**emoji: Optional\[`PartialEmoji`]**

The emoji that belongs to this activity.

**details\_url: Optional\[`str`]**

A URL that is linked to when clicking on the details text of the activity.

> **Added in version 2.6**

**state\_url: Optional\[`str`]**

A URL that is linked to when clicking on the state text of the activity.

> **Added in version 2.6**

**status\_display\_type: Optional\[`StatusDisplayType`]**

Determines which field from the user's status text is displayed
in the members list.

> **Added in version 2.6**

<a id="api-activity-start"></a>

##### `start(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user started doing this activity in UTC, if applicable.

<a id="api-activity-end"></a>

##### `end(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user will stop doing this activity in UTC, if applicable.

<a id="api-activity-large-image-url"></a>

##### `large_image_url(self) -> Optional[str]`

Optional\[`str`]: Returns a URL pointing to the large image asset of this activity, if applicable.

<a id="api-activity-small-image-url"></a>

##### `small_image_url(self) -> Optional[str]`

Optional\[`str`]: Returns a URL pointing to the small image asset of this activity, if applicable.

<a id="api-activity-large-image-text"></a>

##### `large_image_text(self) -> Optional[str]`

Optional\[`str`]: Returns the large image asset hover text of this activity, if applicable.

<a id="api-activity-small-image-text"></a>

##### `small_image_text(self) -> Optional[str]`

Optional\[`str`]: Returns the small image asset hover text of this activity, if applicable.

### Game

<a id="api-game"></a>

#### `Game(BaseActivity)`

A slimmed down version of `Activity` that represents a Discord game.

This is typically displayed via **Playing** on the official Discord client.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two games are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two games are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the game's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the game's name.

## Parameters

**name: `str`**

The game's name.

## Attributes

**name: `str`**

The game's name.

**platform: Optional\[`str`]**

Where the user is playing from (ie. PS5, Xbox).

> **Added in version 2.4**

**assets: `dict`**

A dictionary representing the images and their hover text of a game.
It contains the following optional keys:

- `large_image`: A string representing the ID for the large image asset.
- `large_text`: A string representing the text when hovering over the large image asset.
- `small_image`: A string representing the ID for the small image asset.
- `small_text`: A string representing the text when hovering over the small image asset.

> **Added in version 2.4**

<a id="api-game-type"></a>

##### `type(self) -> ActivityType`

`ActivityType`: Returns the game's type. This is for compatibility with `Activity`.

It always returns `ActivityType.playing`.

<a id="api-game-start"></a>

##### `start(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user started playing this game in UTC, if applicable.

<a id="api-game-end"></a>

##### `end(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: When the user will stop playing this game in UTC, if applicable.

### Streaming

<a id="api-streaming"></a>

#### `Streaming(BaseActivity)`

A slimmed down version of `Activity` that represents a Discord streaming status.

This is typically displayed via **Streaming** on the official Discord client.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two streams are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two streams are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the stream's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the stream's name.

## Attributes

**platform: Optional\[`str`]**

Where the user is streaming from (ie. YouTube, Twitch).

> **Added in version 1.3**

**name: Optional\[`str`]**

The stream's name.

**details: Optional\[`str`]**

An alias for `name`

**game: Optional\[`str`]**

The game being streamed.

> **Added in version 1.3**

**url: `str`**

The stream's URL.

**assets: `dict`**

A dictionary comprising of similar keys than those in `Activity.assets`.

<a id="api-streaming-type"></a>

##### `type(self) -> ActivityType`

`ActivityType`: Returns the game's type. This is for compatibility with `Activity`.

It always returns `ActivityType.streaming`.

<a id="api-streaming-twitch-name"></a>

##### `twitch_name(self) -> Optional[str]`

Optional\[`str`]: If provided, the twitch name of the user streaming.

This corresponds to the `large_image` key of the `Streaming.assets`
dictionary if it starts with `twitch:`. Typically set by the Discord client.

### CustomActivity

<a id="api-customactivity"></a>

#### `CustomActivity(BaseActivity)`

Represents a custom activity from Discord.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two activities are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two activities are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the activity's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the custom status text.

> **Added in version 1.3**

## Attributes

**name: Optional\[`str`]**

The custom activity's name.

**emoji: Optional\[`PartialEmoji`]**

The emoji to pass to the activity, if any.

<a id="api-customactivity-type"></a>

##### `type(self) -> ActivityType`

`ActivityType`: Returns the activity's type. This is for compatibility with `Activity`.

It always returns `ActivityType.custom`.

### Permissions

<a id="api-permissions"></a>

#### `Permissions(BaseFlags)`

Wraps up the Discord permission value.

The properties provided are two way. You can set and retrieve individual
bits using the properties as if they were regular bools. This allows
you to edit permissions.

> **Changed in version 1.3**
> You can now use keyword arguments to initialize `Permissions`
> similar to `update`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two permissions are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two permissions are not equal.

<a id="describe-x-y"></a>

#### `x <= y`

Checks if a permission is a subset of another permission.

<a id="describe-x-y"></a>

#### `x >= y`

Checks if a permission is a superset of another permission.

<a id="describe-x-y"></a>

#### `x < y`

Checks if a permission is a strict subset of another permission.

<a id="describe-x-y"></a>

#### `x > y`

Checks if a permission is a strict superset of another permission.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a Permissions instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a Permissions instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a Permissions instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a Permissions instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the permission's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(perm, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether the permissions object has any permissions set to `True`.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. This value is a bit array field of a 53-bit integer
representing the currently available permissions. You should query
permissions via the properties rather than using this raw value.

<a id="api-permissions-is-subset"></a>

##### `is_subset(self, other: Permissions) -> bool`

Returns `True` if self has the same or fewer permissions as other.

<a id="api-permissions-is-superset"></a>

##### `is_superset(self, other: Permissions) -> bool`

Returns `True` if self has the same or more permissions as other.

<a id="api-permissions-is-strict-subset"></a>

##### `is_strict_subset(self, other: Permissions) -> bool`

Returns `True` if the permissions on other are a strict subset of those on self.

<a id="api-permissions-is-strict-superset"></a>

##### `is_strict_superset(self, other: Permissions) -> bool`

Returns `True` if the permissions on other are a strict superset of those on self.

<a id="api-permissions-none"></a>

##### `none(cls) -> Self`

A factory method that creates a `Permissions` with all
permissions set to `False`.

<a id="api-permissions-all"></a>

##### `all(cls) -> Self`

A factory method that creates a `Permissions` with all
permissions set to `True`.

<a id="api-permissions-all-channel"></a>

##### `all_channel(cls) -> Self`

A `Permissions` with all channel-specific permissions set to
`True` and the guild-specific ones set to `False`. The guild-specific
permissions are currently:

- `manage_expressions`
- `view_audit_log`
- `view_guild_insights`
- `manage_guild`
- `change_nickname`
- `manage_nicknames`
- `kick_members`
- `ban_members`
- `administrator`
- `create_expressions`
- `moderate_members`
- `create_events`
- `manage_events`
- `view_creator_monetization_analytics`

> **Changed in version 1.7**
> Added `stream`, `priority_speaker` and `use_application_commands` permissions.

> **Changed in version 2.0**
> Added `create_public_threads`, `create_private_threads`, `manage_threads`,
> `use_external_stickers`, `send_messages_in_threads` and
> `request_to_speak` permissions.

> **Changed in version 2.3**
> Added `use_soundboard`, `create_expressions` permissions.

> **Changed in version 2.4**
> Added `send_polls`, `send_voice_messages`, attr:`use_external_sounds`,
> `use_embedded_activities`, and `use_external_apps` permissions.

> **Changed in version 2.7**
> Added `pin_messages` and `bypass_slowmode` permissions.

<a id="api-permissions-general"></a>

##### `general(cls) -> Self`

A factory method that creates a `Permissions` with all
"General" permissions from the official Discord UI set to `True`.

> **Changed in version 1.7**
> Permission `read_messages` is now included in the general permissions, but
> permissions `administrator`, `create_instant_invite`, `kick_members`,
> `ban_members`, `change_nickname` and `manage_nicknames` are
> no longer part of the general permissions.

> **Changed in version 2.3**
> Added `create_expressions` permission.

> **Changed in version 2.4**
> Added `view_creator_monetization_analytics` permission.

<a id="api-permissions-membership"></a>

##### `membership(cls) -> Self`

A factory method that creates a `Permissions` with all
"Membership" permissions from the official Discord UI set to `True`.

> **Added in version 1.7**

<a id="api-permissions-text"></a>

##### `text(cls) -> Self`

A factory method that creates a `Permissions` with all
"Text" permissions from the official Discord UI set to `True`.

> **Changed in version 1.7**
> Permission `read_messages` is no longer part of the text permissions.
> Added `use_application_commands` permission.

> **Changed in version 2.0**
> Added `create_public_threads`, `create_private_threads`, `manage_threads`,
> `send_messages_in_threads` and `use_external_stickers` permissions.

> **Changed in version 2.3**
> Added `send_voice_messages` permission.

> **Changed in version 2.4**
> Added `send_polls` and `use_external_apps` permissions.

> **Changed in version 2.7**
> Added `pin_messages` and `bypass_slowmode` permissions.

<a id="api-permissions-voice"></a>

##### `voice(cls) -> Self`

A factory method that creates a `Permissions` with all
"Voice" permissions from the official Discord UI set to `True`.

> **Changed in version 2.7**
> Added `set_voice_channel_status` permission.

<a id="api-permissions-stage"></a>

##### `stage(cls) -> Self`

A factory method that creates a `Permissions` with all
"Stage Channel" permissions from the official Discord UI set to `True`.

> **Added in version 1.7**

<a id="api-permissions-stage-moderator"></a>

##### `stage_moderator(cls) -> Self`

A factory method that creates a `Permissions` with all permissions
for stage moderators set to `True`. These permissions are currently:

- `manage_channels`
- `mute_members`
- `move_members`

> **Added in version 1.7**

> **Changed in version 2.0**
> Added `manage_channels` permission and removed `request_to_speak` permission.

<a id="api-permissions-elevated"></a>

##### `elevated(cls) -> Self`

A factory method that creates a `Permissions` with all permissions
that require 2FA set to `True`. These permissions are currently:

- `kick_members`
- `ban_members`
- `administrator`
- `manage_channels`
- `manage_guild`
- `manage_messages`
- `manage_roles`
- `manage_webhooks`
- `manage_expressions`
- `manage_threads`
- `moderate_members`

> **Added in version 2.0**

<a id="api-permissions-apps"></a>

##### `apps(cls) -> Self`

A factory method that creates a `Permissions` with all
"Apps" permissions from the official Discord UI set to `True`.

> **Added in version 2.6**

<a id="api-permissions-events"></a>

##### `events(cls) -> Self`

A factory method that creates a `Permissions` with all
"Events" permissions from the official Discord UI set to `True`.

> **Added in version 2.4**

<a id="api-permissions-advanced"></a>

##### `advanced(cls) -> Self`

A factory method that creates a `Permissions` with all
"Advanced" permissions from the official Discord UI set to `True`.

> **Added in version 1.7**

<a id="api-permissions-update"></a>

##### `update(self, **kwargs: Unpack[_PermissionsKwargs]) -> None`

Bulk updates this permission object.

Allows you to set multiple attributes by using keyword
arguments. The names must be equivalent to the properties
listed. Extraneous key/value pairs will be silently ignored.

## Parameters

**\*\*kwargs**

A list of key/value pairs to bulk update permissions with.

<a id="api-permissions-create-instant-invite"></a>

##### `create_instant_invite(self) -> int`

`bool`: Returns `True` if the user can create instant invites.

<a id="api-permissions-kick-members"></a>

##### `kick_members(self) -> int`

`bool`: Returns `True` if the user can kick users from the guild.

<a id="api-permissions-ban-members"></a>

##### `ban_members(self) -> int`

`bool`: Returns `True` if a user can ban users from the guild.

<a id="api-permissions-administrator"></a>

##### `administrator(self) -> int`

`bool`: Returns `True` if a user is an administrator. This role overrides all other permissions.

This also bypasses all channel-specific overrides.

<a id="api-permissions-manage-channels"></a>

##### `manage_channels(self) -> int`

`bool`: Returns `True` if a user can edit, delete, or create channels in the guild.

This also corresponds to the "Manage Channel" channel-specific override.

<a id="api-permissions-manage-guild"></a>

##### `manage_guild(self) -> int`

`bool`: Returns `True` if a user can edit guild properties.

<a id="api-permissions-add-reactions"></a>

##### `add_reactions(self) -> int`

`bool`: Returns `True` if a user can add reactions to messages.

<a id="api-permissions-view-audit-log"></a>

##### `view_audit_log(self) -> int`

`bool`: Returns `True` if a user can view the guild's audit log.

<a id="api-permissions-priority-speaker"></a>

##### `priority_speaker(self) -> int`

`bool`: Returns `True` if a user can be more easily heard while talking.

<a id="api-permissions-stream"></a>

##### `stream(self) -> int`

`bool`: Returns `True` if a user can stream in a voice channel.

<a id="api-permissions-read-messages"></a>

##### `read_messages(self) -> int`

`bool`: Returns `True` if a user can read messages from all or specific text channels.

<a id="api-permissions-view-channel"></a>

##### `view_channel(self) -> int`

`bool`: An alias for `read_messages`.

> **Added in version 1.3**

<a id="api-permissions-send-messages"></a>

##### `send_messages(self) -> int`

`bool`: Returns `True` if a user can send messages from all or specific text channels.

<a id="api-permissions-send-tts-messages"></a>

##### `send_tts_messages(self) -> int`

`bool`: Returns `True` if a user can send TTS messages from all or specific text channels.

<a id="api-permissions-manage-messages"></a>

##### `manage_messages(self) -> int`

`bool`: Returns `True` if a user can delete messages in a text channel.

> **Note**
> Note that there are currently no ways to edit other people's messages.

<a id="api-permissions-embed-links"></a>

##### `embed_links(self) -> int`

`bool`: Returns `True` if a user's messages will automatically be embedded by Discord.

<a id="api-permissions-attach-files"></a>

##### `attach_files(self) -> int`

`bool`: Returns `True` if a user can send files in their messages.

<a id="api-permissions-read-message-history"></a>

##### `read_message_history(self) -> int`

`bool`: Returns `True` if a user can read a text channel's previous messages.

<a id="api-permissions-mention-everyone"></a>

##### `mention_everyone(self) -> int`

`bool`: Returns `True` if a user's @everyone or @here will mention everyone in the text channel.

<a id="api-permissions-external-emojis"></a>

##### `external_emojis(self) -> int`

`bool`: Returns `True` if a user can use emojis from other guilds.

<a id="api-permissions-use-external-emojis"></a>

##### `use_external_emojis(self) -> int`

`bool`: An alias for `external_emojis`.

> **Added in version 1.3**

<a id="api-permissions-view-guild-insights"></a>

##### `view_guild_insights(self) -> int`

`bool`: Returns `True` if a user can view the guild's insights.

> **Added in version 1.3**

<a id="api-permissions-connect"></a>

##### `connect(self) -> int`

`bool`: Returns `True` if a user can connect to a voice channel.

<a id="api-permissions-speak"></a>

##### `speak(self) -> int`

`bool`: Returns `True` if a user can speak in a voice channel.

<a id="api-permissions-mute-members"></a>

##### `mute_members(self) -> int`

`bool`: Returns `True` if a user can mute other users.

<a id="api-permissions-deafen-members"></a>

##### `deafen_members(self) -> int`

`bool`: Returns `True` if a user can deafen other users.

<a id="api-permissions-move-members"></a>

##### `move_members(self) -> int`

`bool`: Returns `True` if a user can move users between other voice channels.

<a id="api-permissions-use-voice-activation"></a>

##### `use_voice_activation(self) -> int`

`bool`: Returns `True` if a user can use voice activation in voice channels.

<a id="api-permissions-change-nickname"></a>

##### `change_nickname(self) -> int`

`bool`: Returns `True` if a user can change their nickname in the guild.

<a id="api-permissions-manage-nicknames"></a>

##### `manage_nicknames(self) -> int`

`bool`: Returns `True` if a user can change other user's nickname in the guild.

<a id="api-permissions-manage-roles"></a>

##### `manage_roles(self) -> int`

`bool`: Returns `True` if a user can create or edit roles less than their role's position.

This also corresponds to the "Manage Permissions" channel-specific override.

<a id="api-permissions-manage-permissions"></a>

##### `manage_permissions(self) -> int`

`bool`: An alias for `manage_roles`.

> **Added in version 1.3**

<a id="api-permissions-manage-webhooks"></a>

##### `manage_webhooks(self) -> int`

`bool`: Returns `True` if a user can create, edit, or delete webhooks.

<a id="api-permissions-manage-expressions"></a>

##### `manage_expressions(self) -> int`

`bool`: Returns `True` if a user can edit or delete emojis, stickers, and soundboard sounds.

> **Added in version 2.3**

<a id="api-permissions-manage-emojis"></a>

##### `manage_emojis(self) -> int`

`bool`: An alias for `manage_expressions`.

<a id="api-permissions-manage-emojis-and-stickers"></a>

##### `manage_emojis_and_stickers(self) -> int`

`bool`: An alias for `manage_expressions`.

> **Added in version 2.0**

<a id="api-permissions-use-application-commands"></a>

##### `use_application_commands(self) -> int`

`bool`: Returns `True` if a user can use slash commands.

> **Added in version 1.7**

<a id="api-permissions-request-to-speak"></a>

##### `request_to_speak(self) -> int`

`bool`: Returns `True` if a user can request to speak in a stage channel.

> **Added in version 1.7**

<a id="api-permissions-manage-events"></a>

##### `manage_events(self) -> int`

`bool`: Returns `True` if a user can manage guild events.

> **Added in version 2.0**

<a id="api-permissions-manage-threads"></a>

##### `manage_threads(self) -> int`

`bool`: Returns `True` if a user can manage threads.

> **Added in version 2.0**

<a id="api-permissions-create-public-threads"></a>

##### `create_public_threads(self) -> int`

`bool`: Returns `True` if a user can create public threads.

> **Added in version 2.0**

<a id="api-permissions-create-private-threads"></a>

##### `create_private_threads(self) -> int`

`bool`: Returns `True` if a user can create private threads.

> **Added in version 2.0**

<a id="api-permissions-external-stickers"></a>

##### `external_stickers(self) -> int`

`bool`: Returns `True` if a user can use stickers from other guilds.

> **Added in version 2.0**

<a id="api-permissions-use-external-stickers"></a>

##### `use_external_stickers(self) -> int`

`bool`: An alias for `external_stickers`.

> **Added in version 2.0**

<a id="api-permissions-send-messages-in-threads"></a>

##### `send_messages_in_threads(self) -> int`

`bool`: Returns `True` if a user can send messages in threads.

> **Added in version 2.0**

<a id="api-permissions-use-embedded-activities"></a>

##### `use_embedded_activities(self) -> int`

`bool`: Returns `True` if a user can launch an embedded application in a Voice channel.

> **Added in version 2.0**

<a id="api-permissions-moderate-members"></a>

##### `moderate_members(self) -> int`

`bool`: Returns `True` if a user can time out other members.

> **Added in version 2.0**

<a id="api-permissions-view-creator-monetization-analytics"></a>

##### `view_creator_monetization_analytics(self) -> int`

`bool`: Returns `True` if a user can view role subscription insights.

> **Added in version 2.4**

<a id="api-permissions-use-soundboard"></a>

##### `use_soundboard(self) -> int`

`bool`: Returns `True` if a user can use the soundboard.

> **Added in version 2.3**

<a id="api-permissions-create-expressions"></a>

##### `create_expressions(self) -> int`

`bool`: Returns `True` if a user can create emojis, stickers, and soundboard sounds.

> **Added in version 2.3**

<a id="api-permissions-create-events"></a>

##### `create_events(self) -> int`

`bool`: Returns `True` if a user can create guild events.

> **Added in version 2.4**

<a id="api-permissions-use-external-sounds"></a>

##### `use_external_sounds(self) -> int`

`bool`: Returns `True` if a user can use sounds from other guilds.

> **Added in version 2.3**

<a id="api-permissions-send-voice-messages"></a>

##### `send_voice_messages(self) -> int`

`bool`: Returns `True` if a user can send voice messages.

> **Added in version 2.3**

<a id="api-permissions-set-voice-channel-status"></a>

##### `set_voice_channel_status(self) -> int`

`bool`: Returns `True` if a user can set voice channel status.

> **Added in version 2.7**

<a id="api-permissions-send-polls"></a>

##### `send_polls(self) -> int`

`bool`: Returns `True` if a user can send poll messages.

> **Added in version 2.4**

<a id="api-permissions-create-polls"></a>

##### `create_polls(self) -> int`

`bool`: An alias for `send_polls`.

> **Added in version 2.4**

<a id="api-permissions-use-external-apps"></a>

##### `use_external_apps(self) -> int`

`bool`: Returns `True` if a user can use external apps.

> **Added in version 2.4**

<a id="api-permissions-pin-messages"></a>

##### `pin_messages(self) -> int`

`bool`: Returns `True` if a user can pin messages.

> **Added in version 2.7**

<a id="api-permissions-bypass-slowmode"></a>

##### `bypass_slowmode(self) -> int`

`bool`: Returns `True` if a user can bypass slowmode.

> **Added in version 2.7**

### PermissionOverwrite

<a id="api-permissionoverwrite"></a>

#### `PermissionOverwrite`

A type that is used to represent a channel specific permission.

Unlike a regular `Permissions`, the default value of a
permission is equivalent to `None` and not `False`. Setting
a value to `False` is **explicitly** denying that permission,
while setting a value to `True` is **explicitly** allowing
that permission.

The values supported by this are the same as `Permissions`
with the added possibility of it being set to `None`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two overwrites are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two overwrites are not equal.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(perm, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

## Parameters

**\*\*kwargs**

Set the value of permissions by their name.

<a id="api-permissionoverwrite-pair"></a>

##### `pair(self) -> Tuple[Permissions, Permissions]`

Tuple\[`Permissions`, `Permissions`]: Returns the (allow, deny) pair from this overwrite.

<a id="api-permissionoverwrite-from-pair"></a>

##### `from_pair(cls, allow: Permissions, deny: Permissions) -> Self`

Creates an overwrite from an allow/deny pair of `Permissions`.

<a id="api-permissionoverwrite-is-empty"></a>

##### `is_empty(self) -> bool`

Checks if the permission overwrite is currently empty.

An empty permission overwrite is one that has no overwrites set
to `True` or `False`.

## Returns

**`bool`**

Indicates if the overwrite is empty.

<a id="api-permissionoverwrite-update"></a>

##### `update(self, **kwargs: Unpack[_PermissionOverwriteKwargs]) -> None`

Bulk updates this permission overwrite object.

Allows you to set multiple attributes by using keyword
arguments. The names must be equivalent to the properties
listed. Extraneous key/value pairs will be silently ignored.

## Parameters

**\*\*kwargs**

A list of key/value pairs to bulk update with.

### SystemChannelFlags

<a id="api-systemchannelflags"></a>

#### `SystemChannelFlags(BaseFlags)`

Wraps up a Discord system channel flag value.

Similar to `Permissions`, the properties provided are two way.
You can set and retrieve individual bits using the properties as if they
were regular bools. This allows you to edit the system flags easily.

To construct an object you can pass keyword arguments denoting the flags
to enable or disable.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a SystemChannelFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a SystemChannelFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a SystemChannelFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a SystemChannelFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

## Attributes

**value: `int`**

The raw value. This value is a bit array field of a 53-bit integer
representing the currently available flags. You should query
flags via the properties rather than using this raw value.

<a id="api-systemchannelflags-join-notifications"></a>

##### `join_notifications(self)`

`bool`: Returns `True` if the system channel is used for member join notifications.

<a id="api-systemchannelflags-premium-subscriptions"></a>

##### `premium_subscriptions(self)`

`bool`: Returns `True` if the system channel is used for "Nitro boosting" notifications.

<a id="api-systemchannelflags-guild-reminder-notifications"></a>

##### `guild_reminder_notifications(self)`

`bool`: Returns `True` if the system channel is used for server setup helpful tips notifications.

> **Added in version 2.0**

<a id="api-systemchannelflags-join-notification-replies"></a>

##### `join_notification_replies(self)`

`bool`: Returns `True` if sticker reply button ("Wave to say hi!") is
shown for member join notifications.

> **Added in version 2.0**

<a id="api-systemchannelflags-role-subscription-purchase-notifications"></a>

##### `role_subscription_purchase_notifications(self)`

`bool`: Returns `True` if role subscription purchase and renewal
notifications are enabled.

> **Added in version 2.2**

<a id="api-systemchannelflags-role-subscription-purchase-notification-replies"></a>

##### `role_subscription_purchase_notification_replies(self)`

`bool`: Returns `True` if the role subscription notifications
have a sticker reply button.

> **Added in version 2.2**

<a id="api-systemchannelflags-emoji-added"></a>

##### `emoji_added(self)`

`bool`: Returns `True` if the system channel is used for
emoji added notifications.

> **Added in version 2.7**

### MessageFlags

<a id="api-messageflags"></a>

#### `MessageFlags(BaseFlags)`

Wraps up a Discord Message flag value.

See `SystemChannelFlags`.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two flags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two flags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a MessageFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a MessageFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a MessageFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a MessageFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

> **Added in version 1.3**

## Attributes

**value: `int`**

The raw value. This value is a bit array field of a 53-bit integer
representing the currently available flags. You should query
flags via the properties rather than using this raw value.

<a id="api-messageflags-crossposted"></a>

##### `crossposted(self)`

`bool`: Returns `True` if the message is the original crossposted message.

<a id="api-messageflags-is-crossposted"></a>

##### `is_crossposted(self)`

`bool`: Returns `True` if the message was crossposted from another channel.

<a id="api-messageflags-suppress-embeds"></a>

##### `suppress_embeds(self)`

`bool`: Returns `True` if the message's embeds have been suppressed.

<a id="api-messageflags-source-message-deleted"></a>

##### `source_message_deleted(self)`

`bool`: Returns `True` if the source message for this crosspost has been deleted.

<a id="api-messageflags-urgent"></a>

##### `urgent(self)`

`bool`: Returns `True` if the source message is an urgent message.

An urgent message is one sent by Discord Trust and Safety.

<a id="api-messageflags-has-thread"></a>

##### `has_thread(self)`

`bool`: Returns `True` if the source message is associated with a thread.

> **Added in version 2.0**

<a id="api-messageflags-ephemeral"></a>

##### `ephemeral(self)`

`bool`: Returns `True` if the source message is ephemeral.

> **Added in version 2.0**

<a id="api-messageflags-loading"></a>

##### `loading(self)`

`bool`: Returns `True` if the message is an interaction response and the bot
is "thinking".

> **Added in version 2.0**

<a id="api-messageflags-failed-to-mention-some-roles-in-thread"></a>

##### `failed_to_mention_some_roles_in_thread(self)`

`bool`: Returns `True` if the message failed to mention some roles in a thread
and add their members to the thread.

> **Added in version 2.0**

<a id="api-messageflags-suppress-notifications"></a>

##### `suppress_notifications(self)`

`bool`: Returns `True` if the message will not trigger push and desktop notifications.

> **Added in version 2.2**

<a id="api-messageflags-silent"></a>

##### `silent(self)`

`bool`: Alias for `suppress_notifications`.

> **Added in version 2.2**

<a id="api-messageflags-voice"></a>

##### `voice(self)`

`bool`: Returns `True` if the message is a voice message.

> **Added in version 2.3**

<a id="api-messageflags-forwarded"></a>

##### `forwarded(self)`

`bool`: Returns `True` if the message is a forwarded message.

> **Added in version 2.5**

<a id="api-messageflags-components-v2"></a>

##### `components_v2(self)`

`bool`: Returns `True` if the message has Discord's v2 components.

Does not allow sending any `content`, `embed`, `embeds`, `stickers`, or `poll`.

> **Added in version 2.6**

### PublicUserFlags

<a id="api-publicuserflags"></a>

#### `PublicUserFlags(BaseFlags)`

Wraps up the Discord User Public flags.

<a id="describe-x-y"></a>

#### `x == y`

Checks if two PublicUserFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two PublicUserFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a PublicUserFlags instance with all enabled flags from
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a PublicUserFlags instance with only flags enabled on
both x and y.

> **Added in version 2.0**

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a PublicUserFlags instance with only flags enabled on
only one of x or y, not on both.

> **Added in version 2.0**

<a id="describe-x"></a>

#### `~x`

Returns a PublicUserFlags instance with all flags inverted from x.

> **Added in version 2.0**

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

> **Added in version 2.0**

> **Added in version 1.4**

## Attributes

**value: `int`**

The raw value. This value is a bit array field of a 53-bit integer
representing the currently available flags. You should query
flags via the properties rather than using this raw value.

<a id="api-publicuserflags-staff"></a>

##### `staff(self)`

`bool`: Returns `True` if the user is a Discord Employee.

<a id="api-publicuserflags-partner"></a>

##### `partner(self)`

`bool`: Returns `True` if the user is a Discord Partner.

<a id="api-publicuserflags-hypesquad"></a>

##### `hypesquad(self)`

`bool`: Returns `True` if the user is a HypeSquad Events member.

<a id="api-publicuserflags-bug-hunter"></a>

##### `bug_hunter(self)`

`bool`: Returns `True` if the user is a Bug Hunter

<a id="api-publicuserflags-hypesquad-bravery"></a>

##### `hypesquad_bravery(self)`

`bool`: Returns `True` if the user is a HypeSquad Bravery member.

<a id="api-publicuserflags-hypesquad-brilliance"></a>

##### `hypesquad_brilliance(self)`

`bool`: Returns `True` if the user is a HypeSquad Brilliance member.

<a id="api-publicuserflags-hypesquad-balance"></a>

##### `hypesquad_balance(self)`

`bool`: Returns `True` if the user is a HypeSquad Balance member.

<a id="api-publicuserflags-early-supporter"></a>

##### `early_supporter(self)`

`bool`: Returns `True` if the user is an Early Supporter.

<a id="api-publicuserflags-team-user"></a>

##### `team_user(self)`

`bool`: Returns `True` if the user is a Team User.

<a id="api-publicuserflags-system"></a>

##### `system(self)`

`bool`: Returns `True` if the user is a system user (i.e. represents Discord officially).

<a id="api-publicuserflags-bug-hunter-level-2"></a>

##### `bug_hunter_level_2(self)`

`bool`: Returns `True` if the user is a Bug Hunter Level 2

<a id="api-publicuserflags-verified-bot"></a>

##### `verified_bot(self)`

`bool`: Returns `True` if the user is a Verified Bot.

<a id="api-publicuserflags-verified-bot-developer"></a>

##### `verified_bot_developer(self)`

`bool`: Returns `True` if the user is an Early Verified Bot Developer.

<a id="api-publicuserflags-early-verified-bot-developer"></a>

##### `early_verified_bot_developer(self)`

`bool`: An alias for `verified_bot_developer`.

> **Added in version 1.5**

<a id="api-publicuserflags-discord-certified-moderator"></a>

##### `discord_certified_moderator(self)`

`bool`: Returns `True` if the user is a Discord Certified Moderator.

> **Added in version 2.0**

<a id="api-publicuserflags-bot-http-interactions"></a>

##### `bot_http_interactions(self)`

`bool`: Returns `True` if the user is a bot that only uses HTTP interactions
and is shown in the online member list.

> **Added in version 2.0**

<a id="api-publicuserflags-spammer"></a>

##### `spammer(self)`

`bool`: Returns `True` if the user is flagged as a spammer by Discord.

> **Added in version 2.0**

<a id="api-publicuserflags-active-developer"></a>

##### `active_developer(self)`

`bool`: Returns `True` if the user is an active developer.

> **Added in version 2.1**

<a id="api-publicuserflags-all"></a>

##### `all(self) -> List[UserFlags]`

List\[`UserFlags`]: Returns all public flags the user has.

### MemberFlags

<a id="api-memberflags"></a>

#### `MemberFlags(BaseFlags)`

Wraps up the Discord Guild Member flags

> **Added in version 2.2**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two MemberFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two MemberFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a MemberFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a MemberFlags instance with only flags enabled on
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a MemberFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns a MemberFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-memberflags-did-rejoin"></a>

##### `did_rejoin(self)`

`bool`: Returns `True` if the member left and rejoined the `discord.Member.guild`.

<a id="api-memberflags-completed-onboarding"></a>

##### `completed_onboarding(self)`

`bool`: Returns `True` if the member has completed onboarding.

<a id="api-memberflags-bypasses-verification"></a>

##### `bypasses_verification(self)`

`bool`: Returns `True` if the member can bypass the guild verification requirements.

<a id="api-memberflags-started-onboarding"></a>

##### `started_onboarding(self)`

`bool`: Returns `True` if the member has started onboarding.

<a id="api-memberflags-guest"></a>

##### `guest(self)`

`bool`: Returns `True` if the member is a guest and can only access
the voice channel they were invited to.

> **Added in version 2.5**

<a id="api-memberflags-started-home-actions"></a>

##### `started_home_actions(self)`

`bool`: Returns `True` if the member has started Server Guide new member actions.

> **Added in version 2.5**

<a id="api-memberflags-completed-home-actions"></a>

##### `completed_home_actions(self)`

`bool`: Returns `True` if the member has completed Server Guide new member actions.

> **Added in version 2.5**

<a id="api-memberflags-automod-quarantined-username"></a>

##### `automod_quarantined_username(self)`

`bool`: Returns `True` if the member's username, nickname, or global name has been
blocked by AutoMod.

> **Added in version 2.5**

<a id="api-memberflags-automod-quarantined-guild-tag"></a>

##### `automod_quarantined_guild_tag(self)`

`bool`: Returns `True` if the member's guild tag has been
blocked by AutoMod.

> **Added in version 2.6**

<a id="api-memberflags-dm-settings-upsell-acknowledged"></a>

##### `dm_settings_upsell_acknowledged(self)`

`bool`: Returns `True` if the member has dismissed the DM settings upsell.

> **Added in version 2.5**

### AttachmentFlags

<a id="api-attachmentflags"></a>

#### `AttachmentFlags(BaseFlags)`

Wraps up the Discord Attachment flags

> **Added in version 2.4**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two AttachmentFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two AttachmentFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a AttachmentFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a AttachmentFlags instance with only flags enabled on
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a AttachmentFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns a AttachmentFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-attachmentflags-clip"></a>

##### `clip(self)`

`bool`: Returns `True` if the attachment is a clip.

<a id="api-attachmentflags-thumbnail"></a>

##### `thumbnail(self)`

`bool`: Returns `True` if the attachment is a thumbnail.

<a id="api-attachmentflags-remix"></a>

##### `remix(self)`

`bool`: Returns `True` if the attachment has been edited using the remix feature.

<a id="api-attachmentflags-spoiler"></a>

##### `spoiler(self)`

`bool`: Returns `True` if the attachment was marked as a spoiler.

> **Added in version 2.5**

<a id="api-attachmentflags-contains-explicit-media"></a>

##### `contains_explicit_media(self)`

`bool`: Returns `True` if the attachment was flagged as sensitive content.

> **Added in version 2.5**

<a id="api-attachmentflags-animated"></a>

##### `animated(self)`

`bool`: Returns `True` if the attachment is an animated image.

> **Added in version 2.5**

### RoleFlags

<a id="api-roleflags"></a>

#### `RoleFlags(BaseFlags)`

Wraps up the Discord Role flags

> **Added in version 2.4**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two RoleFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two RoleFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a RoleFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a RoleFlags instance with only flags enabled on
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a RoleFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns a RoleFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-roleflags-in-prompt"></a>

##### `in_prompt(self)`

`bool`: Returns `True` if the role can be selected by members in an onboarding prompt.

### SKUFlags

<a id="api-skuflags"></a>

#### `SKUFlags(BaseFlags)`

Wraps up the Discord SKU flags

> **Added in version 2.4**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two SKUFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two SKUFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a SKUFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x & y, x &= y`

Returns a SKUFlags instance with only flags enabled on
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a SKUFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns a SKUFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Return the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-skuflags-available"></a>

##### `available(self)`

`bool`: Returns `True` if the SKU is available for purchase.

<a id="api-skuflags-guild-subscription"></a>

##### `guild_subscription(self)`

`bool`: Returns `True` if the SKU is a guild subscription.

<a id="api-skuflags-user-subscription"></a>

##### `user_subscription(self)`

`bool`: Returns `True` if the SKU is a user subscription.

### EmbedFlags

<a id="api-embedflags"></a>

#### `EmbedFlags(BaseFlags)`

Wraps up the Discord Embed flags

> **Added in version 2.5**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two EmbedFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two EmbedFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns an EmbedFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns an EmbedFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns an EmbedFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-embedflags-contains-explicit-media"></a>

##### `contains_explicit_media(self)`

`bool`: Returns `True` if the embed was flagged as sensitive content.

<a id="api-embedflags-content-inventory-entry"></a>

##### `content_inventory_entry(self)`

`bool`: Returns `True` if the embed is a reply to an activity card, and is no
longer displayed.

### InviteFlags

<a id="api-inviteflags"></a>

#### `InviteFlags(BaseFlags)`

Wraps up the Discord Invite flags

> **Added in version 2.6**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two InviteFlags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two InviteFlags are not equal.

<a id="describe-x-y-x-y"></a>

#### `x | y, x |= y`

Returns a InviteFlags instance with all enabled flags from
both x and y.

<a id="describe-x-y-x-y"></a>

#### `x ^ y, x ^= y`

Returns a InviteFlags instance with only flags enabled on
only one of x or y, not on both.

<a id="describe-x"></a>

#### `~x`

Returns a InviteFlags instance with all flags inverted from x.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the flag's hash.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

<a id="describe-bool-b"></a>

#### `bool(b)`

Returns whether any flag is set to `True`.

## Attributes

**value: `int`**

The raw value. You should query flags via the properties
rather than using this raw value.

<a id="api-inviteflags-guest"></a>

##### `guest(self)`

`bool`: Returns `True` if this is a guest invite for a voice channel.

### ForumTag

<a id="api-forumtag"></a>

#### `ForumTag(Hashable)`

Represents a forum tag that can be applied to a thread within a `ForumChannel`.

> **Added in version 2.1**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two forum tags are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two forum tags are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the forum tag's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the forum tag's name.

## Attributes

**id: `int`**

The ID of the tag. If this was manually created then the ID will be `0`.

**name: `str`**

The name of the tag. Can only be up to 20 characters.

**moderated: `bool`**

Whether this tag can only be added or removed by a moderator with
the `Permissions.manage_threads` permission.

**emoji: Optional\[`PartialEmoji`]**

The emoji that is used to represent this tag.
Note that if the emoji is a custom emoji, it will *not* have name information.

### Poll

<a id="api-poll"></a>

#### `Poll`

Represents a message's Poll.

> **Added in version 2.4**

## Parameters

**question: Union\[`PollMedia`, `str`]**

The poll's displayed question. The text can be up to 300 characters.

**duration: `datetime.timedelta`**

The duration of the poll. Duration must be in hours.

**multiple: `bool`**

Whether users are allowed to select more than one answer.
Defaults to `False`.

**layout\_type: `PollLayoutType`**

The layout type of the poll. Defaults to `PollLayoutType.default`.

## Attributes

**duration: `datetime.timedelta`**

The duration of the poll.

**multiple: `bool`**

Whether users are allowed to select more than one answer.

**layout\_type: `PollLayoutType`**

The layout type of the poll.

<a id="api-poll-question"></a>

##### `question(self) -> str`

`str`: Returns this poll's question string.

<a id="api-poll-answers"></a>

##### `answers(self) -> List[PollAnswer]`

List\[`PollAnswer`]: Returns a read-only copy of the answers.

<a id="api-poll-victor-answer-id"></a>

##### `victor_answer_id(self) -> Optional[int]`

Optional\[`int`]: The victor answer ID.

> **Added in version 2.5**

> **Note**
> This will **always** be `None` for polls that have not yet finished.

<a id="api-poll-victor-answer"></a>

##### `victor_answer(self) -> Optional[PollAnswer]`

Optional\[`PollAnswer`]: The victor answer.

> **Added in version 2.5**

> **Note**
> This will **always** be `None` for polls that have not yet finished.

<a id="api-poll-expires-at"></a>

##### `expires_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: A datetime object representing the poll expiry.

> **Note**
> This will **always** be `None` for stateless polls.

<a id="api-poll-created-at"></a>

##### `created_at(self) -> Optional[datetime.datetime]`

Optional\[`datetime.datetime`]: Returns the poll's creation time.

> **Note**
> This will **always** be `None` for stateless polls.

<a id="api-poll-message"></a>

##### `message(self) -> Optional[Message]`

Optional\[`Message`]: The message this poll is from.

<a id="api-poll-total-votes"></a>

##### `total_votes(self) -> int`

`int`: Returns the sum of all the answer votes.

If the poll has not yet finished, this is an approximate vote count.

> **Changed in version 2.5**
> This now returns an exact vote count when updated from its poll results message.

<a id="api-poll-is-finalised"></a>

##### `is_finalised(self) -> bool`

`bool`: Returns whether the poll has finalised.

This always returns `False` for stateless polls.

<a id="api-poll-copy"></a>

##### `copy(self) -> Self`

Returns a stateless copy of this poll.

This is meant to be used when you want to edit a stateful poll.

## Returns

**`Poll`**

The copy of the poll.

<a id="api-poll-add-answer"></a>

##### `add_answer( self, *, text: str, emoji: Optional[Union[PartialEmoji, Emoji, str]] = None,) -> Self`

Appends a new answer to this poll.

## Parameters

**text: `str`**

The text label for this poll answer. Can be up to 55
characters.

**emoji: Union\[`PartialEmoji`, `Emoji`, `str`]**

The emoji to display along the text.

## Raises

**ClientException**

Cannot append answers to a poll that is active.

## Returns

**`Poll`**

This poll with the new answer appended. This allows fluent-style chaining.

<a id="api-poll-get-answer"></a>

##### `get_answer( self, /, id: int,) -> Optional[PollAnswer]`

Returns the answer with the provided ID or `None` if not found.

## Parameters

**id: `int`**

The ID of the answer to get.

## Returns

**Optional\[`PollAnswer`]**

The answer.

<a id="api-poll-end"></a>

##### `end(self) -> Self`

*coroutine*

Ends the poll.

## Raises

**ClientException**

This poll has no attached message.

**HTTPException**

Ending the poll failed.

## Returns

**`Poll`**

The updated poll.

### PollMedia

<a id="api-pollmedia"></a>

#### `PollMedia`

Represents the poll media for a poll item.

> **Added in version 2.4**

## Attributes

**text: `str`**

The displayed text.

**emoji: Optional\[Union\[`PartialEmoji`, `Emoji`]]**

The attached emoji for this media. This is only valid for poll answers.

## Exceptions

The following exceptions are thrown by the library.

<a id="api-discordexception"></a>

#### `DiscordException(Exception)`

Base exception class for discord.py

Ideally speaking, this could be caught to handle any exceptions raised from this library.

<a id="api-clientexception"></a>

#### `ClientException(DiscordException)`

Exception that's raised when an operation in the `Client` fails.

These are usually for exceptions that happened due to user input.

<a id="api-loginfailure"></a>

#### `LoginFailure(ClientException)`

Exception that's raised when the `Client.login` function
fails to log you in from improper credentials or some other misc.
failure.

<a id="api-httpexception"></a>

#### `HTTPException(DiscordException)`

Exception that's raised when an HTTP request operation fails.

## Attributes

**response: `aiohttp.ClientResponse`**

The response of the failed HTTP request. This is an
instance of `aiohttp.ClientResponse`. In some cases
this could also be a `requests.Response`.

**text: `str`**

The text of the error. Could be an empty string.

**status: `int`**

The status code of the HTTP request.

**code: `int`**

The Discord specific error code for the failure.

<a id="api-ratelimited"></a>

#### `RateLimited(DiscordException)`

Exception that's raised for when status code 429 occurs
and the timeout is greater than the configured maximum using
the `max_ratelimit_timeout` parameter in `Client`.

This is not raised during global ratelimits.

Since sometimes requests are halted pre-emptively before they're
even made, this **does not** subclass `HTTPException`.

> **Added in version 2.0**

## Attributes

**retry\_after: `float`**

The amount of seconds that the client should wait before retrying
the request.

<a id="api-forbidden"></a>

#### `Forbidden(HTTPException)`

Exception that's raised for when status code 403 occurs.

Subclass of `HTTPException`

<a id="api-notfound"></a>

#### `NotFound(HTTPException)`

Exception that's raised for when status code 404 occurs.

Subclass of `HTTPException`

<a id="api-discordservererror"></a>

#### `DiscordServerError(HTTPException)`

Exception that's raised for when a 500 range status code occurs.

Subclass of `HTTPException`.

> **Added in version 1.5**

<a id="api-invaliddata"></a>

#### `InvalidData(ClientException)`

Exception that's raised when the library encounters unknown
or invalid data from Discord.

<a id="api-gatewaynotfound"></a>

#### `GatewayNotFound(DiscordException)`

An exception that is raised when the gateway for Discord could not be found

<a id="api-connectionclosed"></a>

#### `ConnectionClosed(ClientException)`

Exception that's raised when the gateway connection is
closed for reasons that could not be handled internally.

## Attributes

**code: `int`**

The close code of the websocket.

**reason: `str`**

The reason provided for the closure.

**shard\_id: Optional\[`int`]**

The shard ID that got closed if applicable.

<a id="api-privilegedintentsrequired"></a>

#### `PrivilegedIntentsRequired(ClientException)`

Exception that's raised when the gateway is requesting privileged intents
but they're not ticked in the developer page yet.

Go to <https://discord.com/developers/applications/> and enable the intents
that are required. Currently these are as follows:

- `Intents.members`
- `Intents.presences`
- `Intents.message_content`

## Attributes

**shard\_id: Optional\[`int`]**

The shard ID that got closed if applicable.

<a id="api-interactionresponded"></a>

#### `InteractionResponded(ClientException)`

Exception that's raised when sending another interaction response using
`InteractionResponse` when one has already been done before.

An interaction can only respond once.

> **Added in version 2.0**

## Attributes

**interaction: `Interaction`**

The interaction that's already been responded to.

<a id="api-missingapplicationid"></a>

#### `MissingApplicationID(ClientException)`

An exception raised when the client does not have an application ID set.

An application ID is required for syncing application commands and various
other application tasks such as SKUs or application emojis.

This inherits from `discord.app_commands.AppCommandError`
and `discord.ClientException`.

> **Added in version 2.0**

> **Changed in version 2.5**
> This is now exported to the `discord` namespace and now inherits from `discord.ClientException`.

<a id="api-ffmpegprocesserror"></a>

#### `FFmpegProcessError(ClientException)`

Exception that's raised when an FFmpeg process fails.

> **Added in version 2.7**

<a id="api-discord-opus-opuserror"></a>

#### `OpusError(DiscordException)`

An exception that is thrown for libopus related errors.

## Attributes

**code: `int`**

The error code returned.

<a id="api-discord-opus-opusnotloaded"></a>

#### `OpusNotLoaded(DiscordException)`

An exception that is thrown for when libopus is not loaded.

### Exception Hierarchy

- `Exception`
  - `DiscordException`
    - `ClientException`
      - `InvalidData`
      - `LoginFailure`
      - `ConnectionClosed`
      - `PrivilegedIntentsRequired`
      - `InteractionResponded`
      - `MissingApplicationID`
      - `FFmpegProcessError`
    - `GatewayNotFound`
    - `HTTPException`
      - `Forbidden`
      - `NotFound`
      - `DiscordServerError`
      - `app_commands.CommandSyncFailure`
    - `RateLimited`
