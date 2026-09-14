> Tag-pinned source for discord.py v2.7.1: [docs/ext/commands/api.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/ext/commands/api.rst)

# API Reference

The following section outlines the API of discord.py's command extension module.

<a id="ext-commands-api-bot"></a>

## Bots

### Bot

<a id="api-discord-ext-commands-bot"></a>

#### `Bot(BotBase, discord.Client)`

Represents a Discord bot.

This class is a subclass of `discord.Client` and as a result
anything that you can do with a `discord.Client` you can do with
this bot.

This class also subclasses `.GroupMixin` to provide the functionality
to manage commands.

Unlike `discord.Client`, this class does not require manually setting
a `discord.app_commands.CommandTree` and is automatically set upon
instantiating the class.

<a id="describe-async-with-x"></a>

#### `async with x`

Asynchronously initialises the bot and automatically cleans up.

> **Added in version 2.0**

## Attributes

**command\_prefix**

The command prefix is what the message content must contain initially
to have a command invoked. This prefix could either be a string to
indicate what the prefix should be, or a callable that takes in the bot
as its first parameter and `discord.Message` as its second
parameter and returns the prefix. This is to facilitate "dynamic"
command prefixes. This callable can be either a regular function or
a coroutine.

An empty string as the prefix always matches, enabling prefix-less
command invocation. While this may be useful in DMs it should be avoided
in servers, as it's likely to cause performance issues and unintended
command invocations.

The command prefix could also be an iterable of strings indicating that
multiple checks for the prefix should be used and the first one to
match will be the invocation prefix. You can get this prefix via

- **Attr:** `.Context.prefix`.

> **Note**
> When passing multiple prefixes be careful to not pass a prefix
> that matches a longer prefix occurring later in the sequence.  For
> example, if the command prefix is `('!', '!?')`  the `'!?'`
> prefix will never be matched to any message as the previous one
> matches messages starting with `!?`. This is especially important
> when passing an empty string, it should always be last as no prefix
> after it will be matched.

**case\_insensitive: `bool`**

Whether the commands should be case insensitive. Defaults to `False`. This
attribute does not carry over to groups. You must set it to every group if
you require group commands to be case insensitive as well.

**description: `str`**

The content prefixed into the default help message.

**help\_command: Optional\[`.HelpCommand`]**

The help command implementation to use. This can be dynamically
set at runtime. To remove the help command pass `None`. For more
information on implementing a help command, see [ext\_commands\_help\_command](https://discordpy.readthedocs.io/ext/commands/api.html#ext-commands-help-command).

**owner\_id: Optional\[`int`]**

The user ID that owns the bot. If this is not set and is then queried via

- **Meth:** `.is_owner` then it is fetched automatically using
- **Meth:** `~.Bot.application_info`.

**owner\_ids: Optional\[Collection\[`int`]]**

The user IDs that owns the bot. This is similar to `owner_id`.
If this is not set and the application is team based, then it is
fetched automatically using `.Bot.application_info`.
For performance reasons it is recommended to use a `set`
for the collection. You cannot set both `owner_id` and `owner_ids`.

> **Added in version 1.3**

**strip\_after\_prefix: `bool`**

Whether to strip whitespace characters after encountering the command
prefix. This allows for `!   hello` and `!hello` to both work if
the `command_prefix` is set to `!`. Defaults to `False`.

> **Added in version 1.7**

**tree\_cls: Type\[`discord.app_commands.CommandTree`]**

The type of application command tree to use. Defaults to `discord.app_commands.CommandTree`.

> **Added in version 2.0**

**allowed\_contexts: `discord.app_commands.AppCommandContext`**

The default allowed contexts that applies to all application commands
in the application command tree.

Note that you can override this on a per command basis.

> **Added in version 2.4**

**allowed\_installs: `discord.app_commands.AppInstallationType`**

The default allowed install locations that apply to all application commands
in the application command tree.

Note that you can override this on a per command basis.

> **Added in version 2.4**

<a id="api-bot-after-invoke"></a>

#### `after_invoke(self, coro: CFT, /) -> CFT`

A decorator that registers a coroutine as a post-invoke hook.

A post-invoke hook is called directly after the command is
called. This makes it a useful function to clean-up database
connections or any type of clean up required.

This post-invoke hook takes a sole parameter, a `.Context`.

> **Note**
> Similar to `.Bot.before_invoke`, this is not called unless
> checks and argument parsing procedures succeed. This hook is,
> however, **always** called regardless of the internal command
> callback raising an error (i.e. `.CommandInvokeError`).
> This makes it ideal for clean-up scenarios.

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Parameters

**coro: coroutine**

The coroutine to register as the post-invoke hook.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

<a id="api-bot-before-invoke"></a>

#### `before_invoke(self, coro: CFT, /) -> CFT`

A decorator that registers a coroutine as a pre-invoke hook.

A pre-invoke hook is called directly before the command is
called. This makes it a useful function to set up database
connections or any type of set up required.

This pre-invoke hook takes a sole parameter, a `.Context`.

> **Note**
> The `.Bot.before_invoke` and `.Bot.after_invoke` hooks are
> only called if all checks and argument parsing procedures pass
> without error. If any check or argument parsing procedures fail
> then the hooks are not called.

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Parameters

**coro: coroutine**

The coroutine to register as the pre-invoke hook.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

<a id="api-bot-check"></a>

#### `check(self, func: T, /) -> T`

A decorator that adds a global check to the bot.

A global check is similar to a `.check` that is applied
on a per command basis except it is run before any command checks
have been verified and applies to every command the bot has.

> **Note**
> This function can either be a regular function or a coroutine.

Similar to a command `.check`, this takes a single parameter
of type `.Context` and can only raise exceptions inherited from

- **Exc:** `.CommandError`.

## Example

```python3
@bot.check
def check_commands(ctx):
    return ctx.command.qualified_name in allowed_commands
```

> **Changed in version 2.0**
> `func` parameter is now positional-only.

<a id="api-bot-check-once"></a>

#### `check_once(self, func: CFT, /) -> CFT`

A decorator that adds a "call once" global check to the bot.

Unlike regular global checks, this one is called only once
per `.invoke` call.

Regular global checks are called whenever a command is called
or `.Command.can_run` is called. This type of check
bypasses that and ensures that it's called only once, even inside
the default help command.

> **Note**
> When using this function the `.Context` sent to a group subcommand
> may only parse the parent command and not the subcommands due to it
> being invoked once per `.Bot.invoke` call.

> **Note**
> This function can either be a regular function or a coroutine.

Similar to a command `.check`, this takes a single parameter
of type `.Context` and can only raise exceptions inherited from

- **Exc:** `.CommandError`.

## Example

```python3
@bot.check_once
def whitelist(ctx):
    return ctx.message.author.id in my_whitelist
```

> **Changed in version 2.0**
> `func` parameter is now positional-only.

<a id="api-bot-command-args-kwargs"></a>

#### `command( self: GroupMixin[CogT], name: str = ..., *args: Any, **kwargs: Unpack[_CommandDecoratorKwargs],) -> Callable[ [ Union[ Callable[Concatenate[CogT, ContextT, P], Coro[T]], Callable[Concatenate[ContextT, P], Coro[T]], ] ], Command[CogT, P, T], ]: ...`

<a id="api-bot-event"></a>

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

<a id="api-bot-group-args-kwargs"></a>

#### `group( self: GroupMixin[CogT], name: str = ..., *args: Any, **kwargs: Unpack[_GroupDecoratorKwargs],) -> Callable[ [ Union[ Callable[Concatenate[CogT, ContextT, P], Coro[T]], Callable[Concatenate[ContextT, P], Coro[T]], ] ], Group[CogT, P, T], ]: ...`

<a id="api-bot-hybrid-command-name-with-app-command-true-args-kwargs"></a>

#### `hybrid_command( self, name: Union[str, app_commands.locale_str] = MISSING, with_app_command: bool = True, *args: Any, **kwargs: Unpack[_HybridCommandDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[Any, ContextT, P, T]], HybridCommand[Any, P, T]]`

A shortcut decorator that invokes `discord.ext.commands.hybrid_command` and adds it to
the internal command list via `add_command`.

## Returns

**Callable\[..., `HybridCommand`]**

A decorator that converts the provided method into a Command, adds it to the bot, then returns it.

<a id="api-bot-hybrid-group-name-with-app-command-true-args-kwargs"></a>

#### `hybrid_group( self, name: Union[str, app_commands.locale_str] = MISSING, with_app_command: bool = True, *args: Any, **kwargs: Unpack[_HybridGroupDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[Any, ContextT, P, T]], HybridGroup[Any, P, T]]`

A shortcut decorator that invokes `discord.ext.commands.hybrid_group` and adds it to
the internal command list via `add_command`.

## Returns

**Callable\[..., `HybridGroup`]**

A decorator that converts the provided method into a Group, adds it to the bot, then returns it.

<a id="api-bot-listen-name-none"></a>

#### `listen(self, name: str = MISSING) -> Callable[[CFT], CFT]`

A decorator that registers another function as an external
event listener. Basically this allows you to listen to multiple
events from different places e.g. such as `.on_ready`

The functions being listened to must be a coroutine.

## Example

```python3
@bot.listen()
async def on_message(message):
    print('one')

# in some other file...

@bot.listen('on_message')
async def my_message(message):
    print('two')
```

Would print one and two in an unspecified order.

## Raises

**TypeError**

The function being listened to is not a coroutine.

### AutoShardedBot

<a id="api-discord-ext-commands-autoshardedbot"></a>

#### `AutoShardedBot(BotBase, discord.AutoShardedClient)`

This is similar to `.Bot` except that it is inherited from

- **Class:** `discord.AutoShardedClient` instead.

<a id="describe-async-with-x"></a>

#### `async with x`

Asynchronously initialises the bot and automatically cleans.

> **Added in version 2.0**

## Prefix Helpers

<a id="api-discord-ext-commands-when-mentioned"></a>

#### `when_mentioned(bot: _Bot, msg: Message, /) -> List[str]`

A callable that implements a command prefix equivalent to being mentioned.

These are meant to be passed into the `.Bot.command_prefix` attribute.

> **Changed in version 2.0**
> `bot` and `msg` parameters are now positional-only.

<a id="api-discord-ext-commands-when-mentioned-or"></a>

#### `when_mentioned_or(*prefixes: str) -> Callable[[_Bot, Message], List[str]]`

A callable that implements when mentioned or other prefixes provided.

These are meant to be passed into the `.Bot.command_prefix` attribute.

## Example

```python3
bot = commands.Bot(command_prefix=commands.when_mentioned_or('!'))
```

> **Note**
> This callable returns another callable, so if this is done inside a custom
> callable, you must call the returned callable, for example:
>
> ```python3
> async def get_prefix(bot, message):
>     extras = await prefixes_for(message.guild) # returns a list
>     return commands.when_mentioned_or(*extras)(bot, message)
> ```

## See Also

- **Func:** `.when_mentioned`

<a id="ext-commands-api-events"></a>

## Event Reference

These events function similar to [the regular events](https://discordpy.readthedocs.io/api.html#discord-api-events), except they
are custom to the command extension module.

<a id="function-discord-ext-commands-on-command-error-ctx-error"></a>

#### `discord.ext.commands.on_command_error(ctx, error)`

An error handler that is called when an error is raised
inside a command either through user input error, check
failure, or an error in your own code.

A default one is provided (`.Bot.on_command_error`).

- **Param Ctx:** The invocation context.
- **Type Ctx:** `.Context`
- **Param Error:** The error that was raised.
- **Type Error:** `.CommandError` derived

<a id="function-discord-ext-commands-on-command-ctx"></a>

#### `discord.ext.commands.on_command(ctx)`

An event that is called when a command is found and is about to be invoked.

This event is called regardless of whether the command itself succeeds via
error or completes.

- **Param Ctx:** The invocation context.
- **Type Ctx:** `.Context`

<a id="function-discord-ext-commands-on-command-completion-ctx"></a>

#### `discord.ext.commands.on_command_completion(ctx)`

An event that is called when a command has completed its invocation.

This event is called only if the command succeeded, i.e. all checks have
passed and the user input it correctly.

- **Param Ctx:** The invocation context.
- **Type Ctx:** `.Context`

<a id="ext-commands-api-command"></a>

## Commands

### Decorators

<a id="api-discord-ext-commands-command"></a>

#### `command( *, name: Union[str, locale_str] = MISSING, description: Union[str, locale_str] = MISSING, nsfw: bool = False, auto_locale_strings: bool = True, extras: Dict[Any, Any] = MISSING,) -> Callable[[CommandCallback[GroupT, P, T]], Command[GroupT, P, T]]`

Creates an application command from a regular function.

## Parameters

**name: `str`**

The name of the application command. If not given, it defaults to a lower-case
version of the callback name.

**description: `str`**

The description of the application command. This shows up in the UI to describe
the application command. If not given, it defaults to the first line of the docstring
of the callback shortened to 100 characters.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels. Defaults to `False`.

Due to a Discord limitation, this does not work on subcommands.

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-discord-ext-commands-group"></a>

#### `group( name: str = MISSING, cls: Type[Group[Any, ..., Any]] = MISSING, **attrs: Unpack[_GroupDecoratorKwargs],) -> Any`

A decorator that transforms a function into a `.Group`.

This is similar to the `discord.ext.commands.command` decorator but the `cls`
parameter is set to `Group` by default.

> **Changed in version 1.1**
> The `cls` parameter can now be passed.

<a id="api-discord-ext-commands-hybrid-command"></a>

#### `hybrid_command( name: Union[str, app_commands.locale_str] = MISSING, *, with_app_command: bool = True, **attrs: Unpack[_HybridCommandDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[CogT, ContextT, P, T]], HybridCommand[CogT, P, T]]`

A decorator that transforms a function into a `.HybridCommand`.

A hybrid command is one that functions both as a regular `.Command`
and one that is also a `app_commands.Command`.

The callback being attached to the command must be representable as an
application command callback. Converters are silently converted into a

- **Class:** `~discord.app_commands.Transformer` with a
- **Attr:** `discord.AppCommandOptionType.string` type.

Checks and error handlers are dispatched and called as-if they were commands
similar to `.Command`. This means that they take `Context` as
a parameter rather than `discord.Interaction`.

All checks added using the `.check` & co. decorators are added into
the function. There is no way to supply your own checks through this
decorator.

> **Added in version 2.0**

## Parameters

**name: Union\[`str`, `discord.app_commands.locale_str`]**

The name to create the command with. By default this uses the
function name unchanged.

**with\_app\_command: `bool`**

Whether to register the command also as an application command.

**\*\*attrs**

Keyword arguments to pass into the construction of the
hybrid command.

## Raises

**TypeError**

If the function is not a coroutine or is already a command.

<a id="api-discord-ext-commands-hybrid-group"></a>

#### `hybrid_group( name: Union[str, app_commands.locale_str] = MISSING, *, with_app_command: bool = True, **attrs: Unpack[_HybridGroupDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[CogT, ContextT, P, T]], HybridGroup[CogT, P, T]]`

A decorator that transforms a function into a `.HybridGroup`.

This is similar to the `discord.ext.commands.group` decorator except it creates
a hybrid group instead.

## Parameters

**name: Union\[`str`, `discord.app_commands.locale_str`]**

The name to create the group with. By default this uses the
function name unchanged.

**with\_app\_command: `bool`**

Whether to register the command also as an application command.

## Raises

**TypeError**

If the function is not a coroutine or is already a command.

### Command

<a id="api-discord-ext-commands-command"></a>

#### `Command(Generic[GroupT, P, T])`

A class that implements an application command.

These are usually not created manually, instead they are created using
one of the following decorators:

- `discord.app_commands.command`
- `Group.command`
- `CommandTree.command`

> **Added in version 2.0**

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the application command.

**description: Union\[`str`, `locale_str`]**

The description of the application command. This shows up in the UI to describe
the application command.

**callback: coroutine**

The coroutine that is executed when the command is called.

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.
Defaults to `False`.

Due to a Discord limitation, this does not work on subcommands.

**parent: Optional\[`Group`]**

The parent application command. `None` if there isn't one.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

## Attributes

**name: `str`**

The name of the application command.

**description: `str`**

The description of the application command. This shows up in the UI to describe
the application command.

**checks**

A list of predicates that take a `discord.Interaction` parameter
to indicate whether the command callback should be executed. If an exception
is necessary to be thrown to signal failure, then one inherited from

- **Exc:** `AppCommandError` should be used. If all the checks fail without
  propagating an exception, `CheckFailure` is raised.

**default\_permissions: Optional\[`discord.Permissions`]**

The default permissions that can execute this command on Discord. Note
that server administrators can override this value in the client.
Setting an empty permissions field will disallow anyone except server
administrators from using the command in a guild.

Due to a Discord limitation, this does not work on subcommands.

**guild\_only: `bool`**

Whether the command should only be usable in guild contexts.

Due to a Discord limitation, this does not work on subcommands.

**allowed\_contexts: Optional\[`discord.app_commands.AppCommandContext`]**

The contexts that the command is allowed to be used in.
Overrides `guild_only` if this is set.

> **Added in version 2.4**

**allowed\_installs: Optional\[`discord.app_commands.AppInstallationType`]**

The installation contexts that the command is allowed to be installed
on.

> **Added in version 2.4**

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.

Due to a Discord limitation, this does not work on subcommands.

**parent: Optional\[`Group`]**

The parent application command. `None` if there isn't one.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-discord-ext-commands-command-callback"></a>

##### `callback(self) -> CommandCallback[GroupT, P, T]`

- **Ref:** `coroutine <coroutine>`: The coroutine that is executed when the command is called.

<a id="api-discord-ext-commands-command-parameters"></a>

##### `parameters(self) -> List[Parameter]`

Returns a list of parameters for this command.

This does not include the `self` or `interaction` parameters.

## Returns

**List\[`Parameter`]**

The parameters of this command.

<a id="api-discord-ext-commands-command-get-parameter"></a>

##### `get_parameter(self, name: str) -> Optional[Parameter]`

Retrieves a parameter by its name.

The name must be the Python identifier rather than the renamed
one for display on Discord.

## Parameters

**name: `str`**

The parameter name in the callback function.

## Returns

**Optional\[`Parameter`]**

The parameter or `None` if not found.

<a id="api-discord-ext-commands-command-root-parent"></a>

##### `root_parent(self) -> Optional[Group]`

Optional\[`Group`]: The root parent of this command.

<a id="api-discord-ext-commands-command-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified command name.

The qualified name includes the parent name as well. For example,
in a command like `/foo bar` the qualified name is `foo bar`.

<a id="api-discord-ext-commands-command-autocomplete"></a>

##### `autocomplete( self, name: str) -> Callable[[AutocompleteCallback[GroupT, ChoiceT]], AutocompleteCallback[GroupT, ChoiceT]]`

A decorator that registers a coroutine as an autocomplete prompt for a parameter.

The coroutine callback must have 2 parameters, the `discord.Interaction`,
and the current value by the user (the string currently being typed by the user).

To get the values from other parameters that may be filled in, accessing

- **Attr:** `.Interaction.namespace` will give a `Namespace` object with those
  values.

Parent `checks` are ignored within an autocomplete. However, checks can be added
to the autocomplete callback and the ones added will be called. If the checks fail for any reason
then an empty list is sent as the interaction response.

The coroutine decorator **must** return a list of `discord.app_commands.Choice` objects.
Only up to 25 objects are supported.

> **Warning**
> The choices returned from this coroutine are suggestions. The user may ignore them and input their own value.

Example:

```python3
@app_commands.command()
async def fruits(interaction: discord.Interaction, fruit: str):
    await interaction.response.send_message(f'Your favourite fruit seems to be {fruit}')

@fruits.autocomplete('fruit')
async def fruits_autocomplete(
    interaction: discord.Interaction,
    current: str,
) -> List[app_commands.Choice[str]]:
    fruits = ['Banana', 'Pineapple', 'Apple', 'Watermelon', 'Melon', 'Cherry']
    return [
        app_commands.Choice(name=fruit, value=fruit)
        for fruit in fruits if current.lower() in fruit.lower()
    ]
```

## Parameters

**name: `str`**

The parameter name to register as autocomplete.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine or
the parameter is not found or of an invalid type.

<a id="api-discord-ext-commands-command-add-check"></a>

##### `add_check(self, func: Check, /) -> None`

Adds a check to the command.

This is the non-decorator interface to `check`.

## Parameters

**func**

The function that will be used as a check.

<a id="api-discord-ext-commands-command-remove-check"></a>

##### `remove_check(self, func: Check, /) -> None`

Removes a check from the command.

This function is idempotent and will not raise an exception
if the function is not in the command's checks.

## Parameters

**func**

The function to remove from the checks.

<a id="api-command-after-invoke"></a>

#### `after_invoke(self, coro: Hook[CogT, ContextT], /) -> Hook[CogT, ContextT]`

A decorator that registers a coroutine as a post-invoke hook.

A post-invoke hook is called directly after the command is
called. This makes it a useful function to clean-up database
connections or any type of clean up required.

This post-invoke hook takes a sole parameter, a `.Context`.

See `.Bot.after_invoke` for more info.

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Parameters

**coro: coroutine**

The coroutine to register as the post-invoke hook.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

<a id="api-command-before-invoke"></a>

#### `before_invoke(self, coro: Hook[CogT, ContextT], /) -> Hook[CogT, ContextT]`

A decorator that registers a coroutine as a pre-invoke hook.

A pre-invoke hook is called directly before the command is
called. This makes it a useful function to set up database
connections or any type of set up required.

This pre-invoke hook takes a sole parameter, a `.Context`.

See `.Bot.before_invoke` for more info.

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Parameters

**coro: coroutine**

The coroutine to register as the pre-invoke hook.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

<a id="api-command-error"></a>

#### `error(self, coro: Error[GroupT]) -> Error[GroupT]`

A decorator that registers a coroutine as a local error handler.

The local error handler is called whenever an exception is raised in the body
of the command or during handling of the command. The error handler must take
2 parameters, the interaction and the error.

The error passed will be derived from `AppCommandError`.

## Parameters

**coro: coroutine**

The coroutine to register as the local error handler.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

### Group

<a id="api-discord-ext-commands-group"></a>

#### `Group`

A class that implements an application command group.

These are usually inherited rather than created manually.

Decorators such as `guild_only`, `guilds`, and `default_permissions`
will apply to the group if used on top of a subclass. For example:

```python3
from discord import app_commands

@app_commands.guild_only()
class MyGroup(app_commands.Group):
    pass
```

> **Added in version 2.0**

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the group. If not given, it defaults to a lower-case
kebab-case version of the class name.

**description: Union\[`str`, `locale_str`]**

The description of the group. This shows up in the UI to describe
the group. If not given, it defaults to the docstring of the
class shortened to 100 characters.

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**default\_permissions: Optional\[`discord.Permissions`]**

The default permissions that can execute this group on Discord. Note
that server administrators can override this value in the client.
Setting an empty permissions field will disallow anyone except server
administrators from using the command in a guild.

Due to a Discord limitation, this does not work on subcommands.

**guild\_only: `bool`**

Whether the group should only be usable in guild contexts.
Defaults to `False`.

Due to a Discord limitation, this does not work on subcommands.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.
Defaults to `False`.

Due to a Discord limitation, this does not work on subcommands.

**parent: Optional\[`Group`]**

The parent application command. `None` if there isn't one.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

## Attributes

**name: `str`**

The name of the group.

**description: `str`**

The description of the group. This shows up in the UI to describe
the group.

**default\_permissions: Optional\[`discord.Permissions`]**

The default permissions that can execute this group on Discord. Note
that server administrators can override this value in the client.
Setting an empty permissions field will disallow anyone except server
administrators from using the command in a guild.

Due to a Discord limitation, this does not work on subcommands.

**guild\_only: `bool`**

Whether the group should only be usable in guild contexts.

Due to a Discord limitation, this does not work on subcommands.

**allowed\_contexts: Optional\[`discord.app_commands.AppCommandContext`]**

The contexts that this group is allowed to be used in. Overrides
guild\_only if set.

> **Added in version 2.4**

**allowed\_installs: Optional\[`discord.app_commands.AppInstallationType`]**

The installation contexts that the command is allowed to be installed
on.

> **Added in version 2.4**

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.

Due to a Discord limitation, this does not work on subcommands.

**parent: Optional\[`Group`]**

The parent group. `None` if there isn't one.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-discord-ext-commands-group-root-parent"></a>

##### `root_parent(self) -> Optional[Group]`

Optional\[`Group`]: The parent of this group.

<a id="api-discord-ext-commands-group-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified group name.

The qualified name includes the parent name as well. For example,
in a group like `/foo bar` the qualified name is `foo bar`.

<a id="api-discord-ext-commands-group-commands"></a>

##### `commands(self) -> List[Union[Command[Any, ..., Any], Group]]`

List\[Union\[`Command`, `Group`]]: The commands that this group contains.

<a id="api-discord-ext-commands-group-walk-commands"></a>

##### `walk_commands(self) -> Generator[Union[Command[Any, ..., Any], Group], None, None]`

An iterator that recursively walks through all commands that this group contains.

## Yields

**Union\[`Command`, `Group`]**

The commands in this group.

<a id="api-discord-ext-commands-group-on-error"></a>

##### `on_error(self, interaction: Interaction[ClientT], error: AppCommandError, /) -> None`

*coroutine*

A callback that is called when a child's command raises an `AppCommandError`.

To get the command that failed, `discord.Interaction.command` should be used.

The default implementation does nothing.

## Parameters

**interaction: `discord.Interaction`**

The interaction that is being handled.

**error: `AppCommandError`**

The exception that was raised.

<a id="api-discord-ext-commands-group-interaction-check"></a>

##### `interaction_check(self, interaction: Interaction[ClientT], /) -> bool`

*coroutine*

A callback that is called when an interaction happens within the group
that checks whether a command inside the group should be executed.

This is useful to override if, for example, you want to ensure that the
interaction author is a given user.

The default implementation of this returns `True`.

> **Note**
> If an exception occurs within the body then the check
> is considered a failure and error handlers such as
>
> - **Meth:** `on_error` is called. See `AppCommandError`
>   for more information.

## Parameters

**interaction: `discord.Interaction`**

The interaction that occurred.

## Returns

**`bool`**

Whether the view children's callbacks should be called.

<a id="api-discord-ext-commands-group-add-command"></a>

##### `add_command(self, command: Union[Command[Any, ..., Any], Group], /, *, override: bool = False) -> None`

Adds a command or group to this group's internal list of commands.

## Parameters

**command: Union\[`Command`, `Group`]**

The command or group to add.

**override: `bool`**

Whether to override a pre-existing command or group with the same name.
If `False` then an exception is raised.

## Raises

**CommandAlreadyRegistered**

The command or group is already registered. Note that the `CommandAlreadyRegistered.guild_id`
attribute will always be `None` in this case.

**ValueError**

There are too many commands already registered or the group is too
deeply nested.

**TypeError**

The wrong command type was passed.

<a id="api-discord-ext-commands-group-remove-command"></a>

##### `remove_command(self, name: str, /) -> Optional[Union[Command[Any, ..., Any], Group]]`

Removes a command or group from the internal list of commands.

## Parameters

**name: `str`**

The name of the command or group to remove.

## Returns

**Optional\[Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]]**

The command that was removed. If nothing was removed
then `None` is returned instead.

<a id="api-discord-ext-commands-group-get-command"></a>

##### `get_command(self, name: str, /) -> Optional[Union[Command[Any, ..., Any], Group]]`

Retrieves a command or group from its name.

## Parameters

**name: `str`**

The name of the command or group to retrieve.

## Returns

**Optional\[Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]]**

The command or group that was retrieved. If nothing was found
then `None` is returned instead.

<a id="api-group-after-invoke"></a>

#### `after_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a post-invoke hook.

This allows you to refer to one after invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

<a id="api-group-before-invoke"></a>

#### `before_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a pre-invoke hook.

This allows you to refer to one before invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Example

```python3
async def record_usage(ctx):
    print(ctx.author, 'used', ctx.command, 'at', ctx.message.created_at)

@bot.command()
@commands.before_invoke(record_usage)
async def who(ctx): # Output: <User> used who at <Time>
    await ctx.send('i am a bot')

class What(commands.Cog):

    @commands.before_invoke(record_usage)
    @commands.command()
    async def when(self, ctx): # Output: <User> used when at <Time>
        await ctx.send(f'and i have existed since {ctx.bot.user.created_at}')

    @commands.command()
    async def where(self, ctx): # Output: <Nothing>
        await ctx.send('on Discord')

    @commands.command()
    async def why(self, ctx): # Output: <Nothing>
        await ctx.send('because someone made me')
```

<a id="api-group-command-args-kwargs"></a>

#### `command( self, *, name: Union[str, locale_str] = MISSING, description: Union[str, locale_str] = MISSING, nsfw: bool = False, auto_locale_strings: bool = True, extras: Dict[Any, Any] = MISSING,) -> Callable[[CommandCallback[GroupT, P, T]], Command[GroupT, P, T]]`

A decorator that creates an application command from a regular function under this group.

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the application command. If not given, it defaults to a lower-case
version of the callback name.

**description: Union\[`str`, `locale_str`]**

The description of the application command. This shows up in the UI to describe
the application command. If not given, it defaults to the first line of the docstring
of the callback shortened to 100 characters.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels. Defaults to `False`.

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-group-error"></a>

#### `error(self, coro: ErrorFunc) -> ErrorFunc`

A decorator that registers a coroutine as a local error handler.

The local error handler is called whenever an exception is raised in a child command.
The error handler must take 2 parameters, the interaction and the error.

The error passed will be derived from `AppCommandError`.

## Parameters

**coro: coroutine**

The coroutine to register as the local error handler.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine, or is an invalid coroutine.

<a id="api-group-group-args-kwargs"></a>

#### `group( self, name: str = MISSING, cls: Type[Group[Any, ..., Any]] = MISSING, *args: Any, **kwargs: Unpack[_GroupDecoratorKwargs],) -> Any`

A shortcut decorator that invokes `.group` and adds it to
the internal command list via `.GroupMixin.add_command`.

## Returns

**Callable\[..., `Group`]**

A decorator that converts the provided method into a Group, adds it to the bot, then returns it.

### GroupMixin

<a id="api-discord-ext-commands-groupmixin"></a>

#### `GroupMixin(Generic[CogT])`

A mixin that implements common functionality for classes that behave
similar to `.Group` and are allowed to register commands.

## Attributes

**all\_commands: `dict`**

A mapping of command name to `.Command`
objects.

**case\_insensitive: `bool`**

Whether the commands should be case insensitive. Defaults to `False`.

<a id="api-discord-ext-commands-groupmixin-commands"></a>

##### `commands(self) -> Set[Command[CogT, ..., Any]]`

Set\[`.Command`]: A unique set of commands without aliases that are registered.

<a id="api-discord-ext-commands-groupmixin-add-command"></a>

##### `add_command(self, command: Command[CogT, ..., Any], /) -> None`

Adds a `.Command` into the internal list of commands.

This is usually not called, instead the `.GroupMixin.command` or

- **Meth:** `~.GroupMixin.group` shortcut decorators are used instead.

> **Changed in version 1.4**
> Raise `.CommandRegistrationError` instead of generic `.ClientException`

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `Command`**

The command to add.

## Raises

**CommandRegistrationError**

If the command or its alias is already registered by different command.

**TypeError**

If the command passed is not a subclass of `.Command`.

<a id="api-discord-ext-commands-groupmixin-remove-command"></a>

##### `remove_command(self, name: str, /) -> Optional[Command[CogT, ..., Any]]`

Remove a `.Command` from the internal list
of commands.

This could also be used as a way to remove aliases.

> **Changed in version 2.0**
> `name` parameter is now positional-only.

## Parameters

**name: `str`**

The name of the command to remove.

## Returns

**Optional\[`.Command`]**

The command that was removed. If the name is not valid then
`None` is returned instead.

<a id="api-discord-ext-commands-groupmixin-walk-commands"></a>

##### `walk_commands(self) -> Generator[Command[CogT, ..., Any], None, None]`

An iterator that recursively walks through all commands and subcommands.

> **Changed in version 1.4**
> Duplicates due to aliases are no longer returned

## Yields

**Union\[`.Command`, `.Group`]**

A command or group from the internal list of commands.

<a id="api-discord-ext-commands-groupmixin-get-command"></a>

##### `get_command(self, name: str, /) -> Optional[Command[CogT, ..., Any]]`

Get a `.Command` from the internal list
of commands.

This could also be used as a way to get aliases.

The name could be fully qualified (e.g. `'foo bar'`) will get
the subcommand `bar` of the group command `foo`. If a
subcommand is not found then `None` is returned just as usual.

> **Changed in version 2.0**
> `name` parameter is now positional-only.

## Parameters

**name: `str`**

The name of the command to get.

## Returns

**Optional\[`Command`]**

The command that was requested. If not found, returns `None`.

<a id="api-groupmixin-command-args-kwargs"></a>

#### `command( self: GroupMixin[CogT], name: str = ..., *args: Any, **kwargs: Unpack[_CommandDecoratorKwargs],) -> Callable[ [ Union[ Callable[Concatenate[CogT, ContextT, P], Coro[T]], Callable[Concatenate[ContextT, P], Coro[T]], ] ], Command[CogT, P, T], ]: ...`

<a id="api-groupmixin-group-args-kwargs"></a>

#### `group( self: GroupMixin[CogT], name: str = ..., *args: Any, **kwargs: Unpack[_GroupDecoratorKwargs],) -> Callable[ [ Union[ Callable[Concatenate[CogT, ContextT, P], Coro[T]], Callable[Concatenate[ContextT, P], Coro[T]], ] ], Group[CogT, P, T], ]: ...`

### HybridCommand

<a id="api-discord-ext-commands-hybridcommand"></a>

#### `HybridCommand(Command[CogT, P, T])`

A class that is both an application command and a regular text command.

This has the same parameters and attributes as a regular `discord.ext.commands.Command`.
However, it also doubles as an `application command`. In order
for this to work, the callbacks must have the same subset that is supported by application
commands.

These are not created manually, instead they are created via the
decorator or functional interface.

> **Added in version 2.0**

<a id="api-hybridcommand-after-invoke"></a>

#### `after_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a post-invoke hook.

This allows you to refer to one after invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

<a id="api-hybridcommand-autocomplete-name"></a>

#### `autocomplete( self, name: str) -> Callable[[AutocompleteCallback[CogT, ChoiceT]], AutocompleteCallback[CogT, ChoiceT]]`

A decorator that registers a coroutine as an autocomplete prompt for a parameter.

This is the same as `discord.app_commands.Command.autocomplete`. It is only
applicable for the application command and doesn't do anything if the command is
a regular command.

> **Note**
> Similar to the `discord.app_commands.Command.autocomplete` method, this
> takes `discord.Interaction` as a parameter rather than a `Context`.

## Parameters

**name: `str`**

The parameter name to register as autocomplete.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine or
the parameter is not found or of an invalid type.

<a id="api-hybridcommand-before-invoke"></a>

#### `before_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a pre-invoke hook.

This allows you to refer to one before invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Example

```python3
async def record_usage(ctx):
    print(ctx.author, 'used', ctx.command, 'at', ctx.message.created_at)

@bot.command()
@commands.before_invoke(record_usage)
async def who(ctx): # Output: <User> used who at <Time>
    await ctx.send('i am a bot')

class What(commands.Cog):

    @commands.before_invoke(record_usage)
    @commands.command()
    async def when(self, ctx): # Output: <User> used when at <Time>
        await ctx.send(f'and i have existed since {ctx.bot.user.created_at}')

    @commands.command()
    async def where(self, ctx): # Output: <Nothing>
        await ctx.send('on Discord')

    @commands.command()
    async def why(self, ctx): # Output: <Nothing>
        await ctx.send('because someone made me')
```

<a id="api-hybridcommand-error"></a>

#### `error(self, coro: Error[GroupT]) -> Error[GroupT]`

A decorator that registers a coroutine as a local error handler.

The local error handler is called whenever an exception is raised in the body
of the command or during handling of the command. The error handler must take
2 parameters, the interaction and the error.

The error passed will be derived from `AppCommandError`.

## Parameters

**coro: coroutine**

The coroutine to register as the local error handler.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine.

### HybridGroup

<a id="api-discord-ext-commands-hybridgroup"></a>

#### `HybridGroup(Group[CogT, P, T])`

A class that is both an application command group and a regular text group.

This has the same parameters and attributes as a regular `discord.ext.commands.Group`.
However, it also doubles as an `application command group`.
Note that application commands groups cannot have callbacks associated with them, so the callback
is only called if it's not invoked as an application command.

Hybrid groups will always have `Group.invoke_without_command` set to `True`.

These are not created manually, instead they are created via the
decorator or functional interface.

> **Added in version 2.0**

## Attributes

**fallback: Optional\[`str`]**

The command name to use as a fallback for the application command. Since
application command groups cannot be invoked, this creates a subcommand within
the group that can be invoked with the given group callback. If `None`
then no fallback command is given. Defaults to `None`.

**fallback\_locale: Optional\[`discord.app_commands.locale_str`]**

The fallback command name's locale string, if available.

<a id="api-discord-ext-commands-hybridgroup-add-command"></a>

##### `add_command(self, command: Union[HybridGroup[CogT, ..., Any], HybridCommand[CogT, ..., Any]], /) -> None`

Adds a `.HybridCommand` into the internal list of commands.

This is usually not called, instead the `.GroupMixin.command` or

- **Meth:** `~.GroupMixin.group` shortcut decorators are used instead.

## Parameters

**command: `HybridCommand`**

The command to add.

## Raises

**CommandRegistrationError**

If the command or its alias is already registered by different command.

**TypeError**

If the command passed is not a subclass of `.HybridCommand`.

<a id="api-hybridgroup-after-invoke"></a>

#### `after_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a post-invoke hook.

This allows you to refer to one after invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

<a id="api-hybridgroup-autocomplete-name"></a>

#### `autocomplete( self, name: str) -> Callable[[AutocompleteCallback[CogT, ChoiceT]], AutocompleteCallback[CogT, ChoiceT]]`

A decorator that registers a coroutine as an autocomplete prompt for a parameter.

This is the same as `discord.app_commands.Command.autocomplete`. It is only
applicable for the application command and doesn't do anything if the command is
a regular command.

This is only available if the group has a fallback application command registered.

> **Note**
> Similar to the `discord.app_commands.Command.autocomplete` method, this
> takes `discord.Interaction` as a parameter rather than a `Context`.

## Parameters

**name: `str`**

The parameter name to register as autocomplete.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine or
the parameter is not found or of an invalid type.

<a id="api-hybridgroup-before-invoke"></a>

#### `before_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a pre-invoke hook.

This allows you to refer to one before invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Example

```python3
async def record_usage(ctx):
    print(ctx.author, 'used', ctx.command, 'at', ctx.message.created_at)

@bot.command()
@commands.before_invoke(record_usage)
async def who(ctx): # Output: <User> used who at <Time>
    await ctx.send('i am a bot')

class What(commands.Cog):

    @commands.before_invoke(record_usage)
    @commands.command()
    async def when(self, ctx): # Output: <User> used when at <Time>
        await ctx.send(f'and i have existed since {ctx.bot.user.created_at}')

    @commands.command()
    async def where(self, ctx): # Output: <Nothing>
        await ctx.send('on Discord')

    @commands.command()
    async def why(self, ctx): # Output: <Nothing>
        await ctx.send('because someone made me')
```

<a id="api-hybridgroup-command-args-kwargs"></a>

#### `command( self, name: Union[str, app_commands.locale_str] = MISSING, *args: Any, with_app_command: bool = True, **kwargs: Unpack[_HybridCommandDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[CogT, ContextT, P2, U]], HybridCommand[CogT, P2, U]]`

A shortcut decorator that invokes `discord.ext.commands.hybrid_command` and adds it to
the internal command list via `add_command`.

## Returns

**Callable\[..., `HybridCommand`]**

A decorator that converts the provided method into a Command, adds it to the bot, then returns it.

<a id="api-hybridgroup-error"></a>

#### `error(self, coro: ErrorFunc) -> ErrorFunc`

A decorator that registers a coroutine as a local error handler.

The local error handler is called whenever an exception is raised in a child command.
The error handler must take 2 parameters, the interaction and the error.

The error passed will be derived from `AppCommandError`.

## Parameters

**coro: coroutine**

The coroutine to register as the local error handler.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine, or is an invalid coroutine.

<a id="api-hybridgroup-group-args-kwargs"></a>

#### `group( self, name: Union[str, app_commands.locale_str] = MISSING, *args: Any, with_app_command: bool = True, **kwargs: Unpack[_HybridGroupDecoratorKwargs], # type: ignore # name, with_app_command) -> Callable[[CommandCallback[CogT, ContextT, P2, U]], HybridGroup[CogT, P2, U]]`

A shortcut decorator that invokes `discord.ext.commands.hybrid_group` and adds it to
the internal command list via `.GroupMixin.add_command`.

## Returns

**Callable\[..., `HybridGroup`]**

A decorator that converts the provided method into a Group, adds it to the bot, then returns it.

<a id="ext-commands-api-cogs"></a>

## Cogs

### Cog

<a id="api-discord-ext-commands-cog"></a>

#### `Cog(metaclass=CogMeta)`

The base class that all cogs must inherit from.

A cog is a collection of commands, listeners, and optional state to
help group commands together. More information on them can be found on
the [ext\_commands\_cogs](https://discordpy.readthedocs.io/ext/commands/cogs.html#ext-commands-cogs) page.

When inheriting from this class, the options shown in `CogMeta`
are equally valid here.

<a id="api-discord-ext-commands-cog-get-commands"></a>

##### `get_commands(self) -> List[Command[Self, ..., Any]]`

Returns the commands that are defined inside this cog.

This does *not* include `discord.app_commands.Command` or `discord.app_commands.Group`
instances.

## Returns

**List\[`.Command`]**

A `list` of `.Command`\s that are
defined inside this cog, not including subcommands.

<a id="api-discord-ext-commands-cog-get-app-commands"></a>

##### `get_app_commands(self) -> List[Union[app_commands.Command[Self, ..., Any], app_commands.Group]]`

Returns the app commands that are defined inside this cog.

## Returns

**List\[Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]]**

A `list` of `discord.app_commands.Command`\s and `discord.app_commands.Group`\s that are
defined inside this cog, not including subcommands.

<a id="api-discord-ext-commands-cog-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the cog's specified name, not the class name.

<a id="api-discord-ext-commands-cog-description"></a>

##### `description(self) -> str`

- **Class:** `str`: Returns the cog's description, typically the cleaned docstring.

<a id="api-discord-ext-commands-cog-walk-commands"></a>

##### `walk_commands(self) -> Generator[Command[Self, ..., Any], None, None]`

An iterator that recursively walks through this cog's commands and subcommands.

## Yields

**Union\[`.Command`, `.Group`]**

A command or group from the cog.

<a id="api-discord-ext-commands-cog-walk-app-commands"></a>

##### `walk_app_commands(self) -> Generator[Union[app_commands.Command[Self, ..., Any], app_commands.Group], None, None]`

An iterator that recursively walks through this cog's app commands and subcommands.

## Yields

**Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]**

An app command or group from the cog.

<a id="api-discord-ext-commands-cog-app-command"></a>

##### `app_command(self) -> Optional[app_commands.Group]`

Optional\[`discord.app_commands.Group`]: Returns the associated group with this cog.

This is only available if inheriting from `GroupCog`.

<a id="api-discord-ext-commands-cog-get-listeners"></a>

##### `get_listeners(self) -> List[Tuple[str, Callable[..., Any]]]`

Returns a `list` of (name, function) listener pairs that are defined in this cog.

## Returns

**List\[Tuple\[`str`, coroutine]]**

The listeners defined in this cog.

<a id="api-discord-ext-commands-cog-listener"></a>

##### `listener(cls, name: str = MISSING) -> Callable[[FuncT], FuncT]`

A decorator that marks a function as a listener.

This is the cog equivalent of `.Bot.listen`.

## Parameters

**name: `str`**

The name of the event being listened to. If not provided, it
defaults to the function's name.

## Raises

**TypeError**

The function is not a coroutine function or a string was not passed as
the name.

<a id="api-discord-ext-commands-cog-has-error-handler"></a>

##### `has_error_handler(self) -> bool`

- **Class:** `bool`: Checks whether the cog has an error handler.

> **Added in version 1.7**

<a id="api-discord-ext-commands-cog-has-app-command-error-handler"></a>

##### `has_app_command_error_handler(self) -> bool`

- **Class:** `bool`: Checks whether the cog has an app error handler.

> **Added in version 2.1**

<a id="api-discord-ext-commands-cog-cog-load"></a>

##### `cog_load(self) -> None`

*possibly a coroutine*

A special method that is called when the cog gets loaded.

Subclasses must replace this if they want special asynchronous loading behaviour.
Note that the `__init__` special method does not allow asynchronous code to run
inside it, thus this is helpful for setting up code that needs to be asynchronous.

> **Added in version 2.0**

<a id="api-discord-ext-commands-cog-cog-unload"></a>

##### `cog_unload(self) -> None`

*possibly a coroutine*

A special method that is called when the cog gets removed.

Subclasses must replace this if they want special unloading behaviour.

Exceptions raised in this method are ignored during extension unloading.

> **Changed in version 2.0**
> This method can now be a `coroutine`.

<a id="api-discord-ext-commands-cog-bot-check-once"></a>

##### `bot_check_once(self, ctx: Context[BotT]) -> MaybeCoro[bool]`

A special method that registers as a `.Bot.check_once`
check.

This function **can** be a coroutine and must take a sole parameter,
`ctx`, to represent the `.Context`.

<a id="api-discord-ext-commands-cog-bot-check"></a>

##### `bot_check(self, ctx: Context[BotT]) -> MaybeCoro[bool]`

A special method that registers as a `.Bot.check`
check.

This function **can** be a coroutine and must take a sole parameter,
`ctx`, to represent the `.Context`.

<a id="api-discord-ext-commands-cog-cog-check"></a>

##### `cog_check(self, ctx: Context[BotT]) -> MaybeCoro[bool]`

A special method that registers as a `discord.ext.commands.check`
for every command and subcommand in this cog.

This function **can** be a coroutine and must take a sole parameter,
`ctx`, to represent the `.Context`.

<a id="api-discord-ext-commands-cog-interaction-check"></a>

##### `interaction_check(self, interaction: discord.Interaction[ClientT], /) -> MaybeCoro[bool]`

A special method that registers as a `discord.app_commands.check`
for every app command and subcommand in this cog.

This function **can** be a coroutine and must take a sole parameter,
`interaction`, to represent the `discord.Interaction`.

> **Added in version 2.0**

<a id="api-discord-ext-commands-cog-cog-command-error"></a>

##### `cog_command_error(self, ctx: Context[BotT], error: Exception) -> None`

*coroutine*

A special method that is called whenever an error
is dispatched inside this cog.

This is similar to `.on_command_error` except only applying
to the commands inside this cog.

This **must** be a coroutine.

## Parameters

**ctx: `.Context`**

The invocation context where the error happened.

**error: `CommandError`**

The error that happened.

<a id="api-discord-ext-commands-cog-cog-app-command-error"></a>

##### `cog_app_command_error( self, interaction: discord.Interaction[ClientT], error: app_commands.AppCommandError) -> None`

*coroutine*

A special method that is called whenever an error within
an application command is dispatched inside this cog.

This is similar to `discord.app_commands.CommandTree.on_error` except
only applying to the application commands inside this cog.

This **must** be a coroutine.

## Parameters

**interaction: `discord.Interaction`**

The interaction that is being handled.

**error: `discord.app_commands.AppCommandError`**

The exception that was raised.

<a id="api-discord-ext-commands-cog-cog-before-invoke"></a>

##### `cog_before_invoke(self, ctx: Context[BotT]) -> None`

*coroutine*

A special method that acts as a cog local pre-invoke hook.

This is similar to `.Command.before_invoke`.

This **must** be a coroutine.

## Parameters

**ctx: `.Context`**

The invocation context.

<a id="api-discord-ext-commands-cog-cog-after-invoke"></a>

##### `cog_after_invoke(self, ctx: Context[BotT]) -> None`

*coroutine*

A special method that acts as a cog local post-invoke hook.

This is similar to `.Command.after_invoke`.

This **must** be a coroutine.

## Parameters

**ctx: `.Context`**

The invocation context.

### GroupCog

<a id="api-discord-ext-commands-groupcog"></a>

#### `GroupCog(Cog)`

Represents a cog that also doubles as a parent `discord.app_commands.Group` for
the application commands defined within it.

This inherits from `Cog` and the options in `CogMeta` also apply to this.
See the `Cog` documentation for methods.

Decorators such as `discord.app_commands.guild_only`, `discord.app_commands.guilds`,
and `discord.app_commands.default_permissions` will apply to the group if used on top of the
cog.

Hybrid commands will also be added to the Group, giving the ability to categorize slash commands into
groups, while keeping the prefix-style command as a root-level command.

For example:

```python3
from discord import app_commands
from discord.ext import commands

@app_commands.guild_only()
class MyCog(commands.GroupCog, group_name='my-cog'):
    pass
```

> **Added in version 2.0**

### CogMeta

<a id="api-discord-ext-commands-cogmeta"></a>

#### `CogMeta(type)`

A metaclass for defining a cog.

Note that you should probably not use this directly. It is exposed
purely for documentation purposes along with making custom metaclasses to intermix
with other metaclasses such as the `abc.ABCMeta` metaclass.

For example, to create an abstract cog mixin class, the following would be done.

```python3
import abc

class CogABCMeta(commands.CogMeta, abc.ABCMeta):
    pass

class SomeMixin(metaclass=abc.ABCMeta):
    pass

class SomeCogMixin(SomeMixin, commands.Cog, metaclass=CogABCMeta):
    pass
```

> **Note**
> When passing an attribute of a metaclass that is documented below, note
> that you must pass it as a keyword-only argument to the class creation
> like the following example:
>
> ```python3
> class MyCog(commands.Cog, name='My Cog'):
>     pass
> ```

## Attributes

**name: `str`**

The cog name. By default, it is the name of the class with no modification.

**description: `str`**

The cog description. By default, it is the cleaned docstring of the class.

> **Added in version 1.6**

**command\_attrs: `dict`**

A list of attributes to apply to every command inside this cog. The dictionary
is passed into the `Command options at _init__`.
If you specify attributes inside the command attribute in the class, it will
override the one specified inside this attribute. For example:

```python3
class MyCog(commands.Cog, command_attrs=dict(hidden=True)):
    @commands.command()
    async def foo(self, ctx):
        pass # hidden -> True

    @commands.command(hidden=False)
    async def bar(self, ctx):
        pass # hidden -> False
```

**group\_name: Union\[`str`, `discord.app_commands.locale_str`]**

The group name of a cog. This is only applicable for `GroupCog` instances.
By default, it's the same value as `name`.

> **Added in version 2.0**

**group\_description: Union\[`str`, `discord.app_commands.locale_str`]**

The group description of a cog. This is only applicable for `GroupCog` instances.
By default, it's the same value as `description`.

> **Added in version 2.0**

**group\_nsfw: `bool`**

Whether the application command group is NSFW. This is only applicable for `GroupCog` instances.
By default, it's `False`.

> **Added in version 2.0**

**group\_auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `discord.app_commands.locale_str` rather
than `str`. Defaults to `True`.

> **Added in version 2.0**

**group\_extras: `dict`**

A dictionary that can be used to store extraneous data.
This is only applicable for `GroupCog` instances.
The library will not touch any values or keys within this dictionary.

> **Added in version 2.1**

<a id="ext-commands-help-command"></a>

## Help Commands

### HelpCommand

<a id="api-discord-ext-commands-helpcommand"></a>

#### `HelpCommand`

The base implementation for help command formatting.

> **Note**
> Internally instances of this class are deep copied every time
> the command itself is invoked to prevent a race condition
> mentioned in [GH-2123](https://github.com/Rapptz/discord.py/issues/2123).
>
> This means that relying on the state of this class to be
> the same between command invocations would not work as expected.

## Attributes

**context: Optional\[`Context`]**

The context that invoked this help formatter. This is generally set after
the help command assigned, `command_callback`, has been called.

**show\_hidden: `bool`**

Specifies if hidden commands should be shown in the output.
Defaults to `False`.

**verify\_checks: Optional\[`bool`]**

Specifies if commands should have their `.Command.checks` called
and verified. If `True`, always calls `.Command.checks`.
If `None`, only calls `.Command.checks` in a guild setting.
If `False`, never calls `.Command.checks`. Defaults to `True`.

> **Changed in version 1.7**

**command\_attrs: `dict`**

A dictionary of options to pass in for the construction of the help command.
This allows you to change the command behaviour without actually changing
the implementation of the command. The attributes will be the same as the
ones passed in the `.Command` constructor.

<a id="api-discord-ext-commands-helpcommand-get-bot-mapping"></a>

##### `get_bot_mapping(self) -> Dict[Optional[Cog], List[Command[Any, ..., Any]]]`

Retrieves the bot mapping passed to `send_bot_help`.

<a id="api-discord-ext-commands-helpcommand-invoked-with"></a>

##### `invoked_with(self) -> Optional[str]`

Similar to `Context.invoked_with` except properly handles
the case where `Context.send_help` is used.

If the help command was used regularly then this returns
the `Context.invoked_with` attribute. Otherwise, if
it the help command was called using `Context.send_help`
then it returns the internal command name of the help command.

## Returns

**Optional\[`str`]**

The command name that triggered this invocation.

<a id="api-discord-ext-commands-helpcommand-get-command-signature"></a>

##### `get_command_signature(self, command: Command[Any, ..., Any], /) -> str`

Retrieves the signature portion of the help page.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `Command`**

The command to get the signature of.

## Returns

**`str`**

The signature for the command.

<a id="api-discord-ext-commands-helpcommand-remove-mentions"></a>

##### `remove_mentions(self, string: str, /) -> str`

Removes mentions from the string to prevent abuse.

This includes `@everyone`, `@here`, member mentions and role mentions.

> **Changed in version 2.0**
> `string` parameter is now positional-only.

## Returns

**`str`**

The string with mentions removed.

<a id="api-discord-ext-commands-helpcommand-cog"></a>

##### `cog(self) -> Optional[Cog]`

A property for retrieving or setting the cog for the help command.

When a cog is set for the help command, it is as-if the help command
belongs to that cog. All cog special methods will apply to the help
command and it will be automatically unset on unload.

To unbind the cog from the help command, you can set it to `None`.

## Returns

**Optional\[`Cog`]**

The cog that is currently set for the help command.

<a id="api-discord-ext-commands-helpcommand-command-not-found"></a>

##### `command_not_found(self, string: str, /) -> str`

*possibly a coroutine*

A method called when a command is not found in the help command.
This is useful to override for i18n.

Defaults to `No command called {0} found.`

> **Changed in version 2.0**
> `string` parameter is now positional-only.

## Parameters

**string: `str`**

The string that contains the invalid command. Note that this has
had mentions removed to prevent abuse.

## Returns

**`str`**

The string to use when a command has not been found.

<a id="api-discord-ext-commands-helpcommand-subcommand-not-found"></a>

##### `subcommand_not_found(self, command: Command[Any, ..., Any], string: str, /) -> str`

*possibly a coroutine*

A method called when a command did not have a subcommand requested in the help command.
This is useful to override for i18n.

Defaults to either:

- `'Command "{command.qualified_name}" has no subcommands.'`
  - If there is no subcommand in the `command` parameter.
- `'Command "{command.qualified_name}" has no subcommand named {string}'`
  - If the `command` parameter has subcommands but not one named `string`.

> **Changed in version 2.0**
> `command` and `string` parameters are now positional-only.

## Parameters

**command: `Command`**

The command that did not have the subcommand requested.

**string: `str`**

The string that contains the invalid subcommand. Note that this has
had mentions removed to prevent abuse.

## Returns

**`str`**

The string to use when the command did not have the subcommand requested.

<a id="api-discord-ext-commands-helpcommand-filter-commands"></a>

##### `filter_commands( self, commands: Iterable[Command[Any, ..., Any]], /, *, sort: bool = False, key: Optional[Callable[[Command[Any, ..., Any]], Any]] = None,) -> List[Command[Any, ..., Any]]`

*coroutine*

Returns a filtered list of commands and optionally sorts them.

This takes into account the `verify_checks` and `show_hidden`
attributes.

> **Changed in version 2.0**
> `commands` parameter is now positional-only.

## Parameters

**commands: Iterable\[`Command`]**

An iterable of commands that are getting filtered.

**sort: `bool`**

Whether to sort the result.

**key: Optional\[Callable\[\[`Command`], Any]]**

An optional key function to pass to `py:sorted` that
takes a `Command` as its sole parameter. If `sort` is
passed as `True` then this will default as the command name.

## Returns

**List\[`Command`]**

A list of commands that passed the filter.

<a id="api-discord-ext-commands-helpcommand-get-max-size"></a>

##### `get_max_size(self, commands: Sequence[Command[Any, ..., Any]], /) -> int`

Returns the largest name length of the specified command list.

> **Changed in version 2.0**
> `commands` parameter is now positional-only.

## Parameters

**commands: Sequence\[`Command`]**

A sequence of commands to check for the largest size.

## Returns

**`int`**

The maximum width of the commands.

<a id="api-discord-ext-commands-helpcommand-get-destination"></a>

##### `get_destination(self) -> discord.abc.MessageableChannel`

Returns the `discord.abc.Messageable` where the help command will be output.

You can override this method to customise the behaviour.

By default this returns the context's channel.

## Returns

**`.abc.Messageable`**

The destination where the help command will be output.

<a id="api-discord-ext-commands-helpcommand-send-error-message"></a>

##### `send_error_message(self, error: str, /) -> None`

*coroutine*

Handles the implementation when an error happens in the help command.
For example, the result of `command_not_found` will be passed here.

You can override this method to customise the behaviour.

By default, this sends the error message to the destination
specified by `get_destination`.

> **Note**
> You can access the invocation context with `HelpCommand.context`.

> **Changed in version 2.0**
> `error` parameter is now positional-only.

## Parameters

**error: `str`**

The error message to display to the user. Note that this has
had mentions removed to prevent abuse.

<a id="api-discord-ext-commands-helpcommand-on-help-command-error"></a>

##### `on_help_command_error(self, ctx: Context[BotT], error: CommandError, /) -> None`

*coroutine*

The help command's error handler, as specified by [ext\_commands\_error\_handler](https://discordpy.readthedocs.io/ext/commands/commands.html#ext-commands-error-handler).

Useful to override if you need some specific behaviour when the error handler
is called.

By default this method does nothing and just propagates to the default
error handlers.

> **Changed in version 2.0**
> `ctx` and `error` parameters are now positional-only.

## Parameters

**ctx: `Context`**

The invocation context.

**error: `CommandError`**

The error that was raised.

<a id="api-discord-ext-commands-helpcommand-send-bot-help"></a>

##### `send_bot_help(self, mapping: Mapping[Optional[Cog], List[Command[Any, ..., Any]]], /) -> None`

*coroutine*

Handles the implementation of the bot command page in the help command.
This function is called when the help command is called with no arguments.

It should be noted that this method does not return anything -- rather the
actual message sending should be done inside this method. Well behaved subclasses
should use `get_destination` to know where to send, as this is a customisation
point for other users.

You can override this method to customise the behaviour.

> **Note**
> You can access the invocation context with `HelpCommand.context`.
>
> Also, the commands in the mapping are not filtered. To do the filtering
> you will have to call `filter_commands` yourself.

> **Changed in version 2.0**
> `mapping` parameter is now positional-only.

## Parameters

**mapping: Mapping\[Optional\[`Cog`], List\[`Command`]]**

A mapping of cogs to commands that have been requested by the user for help.
The key of the mapping is the `.commands.Cog` that the command belongs to, or
`None` if there isn't one, and the value is a list of commands that belongs to that cog.

<a id="api-discord-ext-commands-helpcommand-send-cog-help"></a>

##### `send_cog_help(self, cog: Cog, /) -> None`

*coroutine*

Handles the implementation of the cog page in the help command.
This function is called when the help command is called with a cog as the argument.

It should be noted that this method does not return anything -- rather the
actual message sending should be done inside this method. Well behaved subclasses
should use `get_destination` to know where to send, as this is a customisation
point for other users.

You can override this method to customise the behaviour.

> **Note**
> You can access the invocation context with `HelpCommand.context`.
>
> To get the commands that belong to this cog see `Cog.get_commands`.
> The commands returned not filtered. To do the filtering you will have to call
>
> - **Meth:** `filter_commands` yourself.

> **Changed in version 2.0**
> `cog` parameter is now positional-only.

## Parameters

**cog: `Cog`**

The cog that was requested for help.

<a id="api-discord-ext-commands-helpcommand-send-group-help"></a>

##### `send_group_help(self, group: Group[Any, ..., Any], /) -> None`

*coroutine*

Handles the implementation of the group page in the help command.
This function is called when the help command is called with a group as the argument.

It should be noted that this method does not return anything -- rather the
actual message sending should be done inside this method. Well behaved subclasses
should use `get_destination` to know where to send, as this is a customisation
point for other users.

You can override this method to customise the behaviour.

> **Note**
> You can access the invocation context with `HelpCommand.context`.
>
> To get the commands that belong to this group without aliases see
>
> - **Attr:** `Group.commands`. The commands returned not filtered. To do the
>   filtering you will have to call `filter_commands` yourself.

> **Changed in version 2.0**
> `group` parameter is now positional-only.

## Parameters

**group: `Group`**

The group that was requested for help.

<a id="api-discord-ext-commands-helpcommand-send-command-help"></a>

##### `send_command_help(self, command: Command[Any, ..., Any], /) -> None`

*coroutine*

Handles the implementation of the single command page in the help command.

It should be noted that this method does not return anything -- rather the
actual message sending should be done inside this method. Well behaved subclasses
should use `get_destination` to know where to send, as this is a customisation
point for other users.

You can override this method to customise the behaviour.

> **Note**
> You can access the invocation context with `HelpCommand.context`.

> **Showing Help**
>
> - **Class:** helpful
>
> There are certain attributes and methods that are helpful for a help command
> to show such as the following:
>
> - `Command.help`
> - `Command.brief`
> - `Command.short_doc`
> - `Command.description`
> - `get_command_signature`
>
> There are more than just these attributes but feel free to play around with
> these to help you get started to get the output that you want.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `Command`**

The command that was requested for help.

<a id="api-discord-ext-commands-helpcommand-prepare-help-command"></a>

##### `prepare_help_command(self, ctx: Context[BotT], command: Optional[str] = None, /) -> None`

*coroutine*

A low level method that can be used to prepare the help command
before it does anything. For example, if you need to prepare
some state in your subclass before the command does its processing
then this would be the place to do it.

The default implementation does nothing.

> **Note**
> This is called *inside* the help command callback body. So all
> the usual rules that happen inside apply here as well.

> **Changed in version 2.0**
> `ctx` and `command` parameters are now positional-only.

## Parameters

**ctx: `Context`**

The invocation context.

**command: Optional\[`str`]**

The argument passed to the help command.

<a id="api-discord-ext-commands-helpcommand-command-callback"></a>

##### `command_callback(self, ctx: Context[BotT], /, *, command: Optional[str] = None) -> None`

*coroutine*

The actual implementation of the help command.

It is not recommended to override this method and instead change
the behaviour through the methods that actually get dispatched.

- `send_bot_help`
- `send_cog_help`
- `send_group_help`
- `send_command_help`
- `get_destination`
- `command_not_found`
- `subcommand_not_found`
- `send_error_message`
- `on_help_command_error`
- `prepare_help_command`

> **Changed in version 2.0**
> `ctx` parameter is now positional-only.

### DefaultHelpCommand

<a id="api-discord-ext-commands-defaulthelpcommand"></a>

#### `DefaultHelpCommand(HelpCommand)`

The implementation of the default help command.

This inherits from `HelpCommand`.

It extends it with the following attributes.

## Attributes

**width: `int`**

The maximum number of characters that fit in a line.
Defaults to 80.

**sort\_commands: `bool`**

Whether to sort the commands in the output alphabetically. Defaults to `True`.

**dm\_help: Optional\[`bool`]**

A tribool that indicates if the help command should DM the user instead of
sending it to the channel it received it from. If the boolean is set to
`True`, then all help output is DM'd. If `False`, none of the help
output is DM'd. If `None`, then the bot will only DM when the help
message becomes too long (dictated by more than `dm_help_threshold` characters).
Defaults to `False`.

**dm\_help\_threshold: Optional\[`int`]**

The number of characters the paginator must accumulate before getting DM'd to the
user if `dm_help` is set to `None`. Defaults to 1000.

**indent: `int`**

How much to indent the commands from a heading. Defaults to `2`.

**arguments\_heading: `str`**

The arguments list's heading string used when the help command is invoked with a command name.
Useful for i18n. Defaults to `"Arguments:"`.
Shown when `.show_parameter_descriptions` is `True`.

> **Added in version 2.0**

**show\_parameter\_descriptions: `bool`**

Whether to show the parameter descriptions. Defaults to `True`.
Setting this to `False` will revert to showing the `.commands.Command.signature` instead.

> **Added in version 2.0**

**commands\_heading: `str`**

The command list's heading string used when the help command is invoked with a category name.
Useful for i18n. Defaults to `"Commands:"`

**default\_argument\_description: `str`**

The default argument description string used when the argument's `.commands.Parameter.description` is `None`.
Useful for i18n. Defaults to `"No description given."`

> **Added in version 2.0**

**no\_category: `str`**

The string used when there is a command which does not belong to any category(cog).
Useful for i18n. Defaults to `"No Category"`

**paginator: `Paginator`**

The paginator used to paginate the help command output.

<a id="api-discord-ext-commands-defaulthelpcommand-shorten-text"></a>

##### `shorten_text(self, text: str, /) -> str`

- **Class:** `str`: Shortens text to fit into the `width`.

> **Changed in version 2.0**
> `text` parameter is now positional-only.

<a id="api-discord-ext-commands-defaulthelpcommand-get-ending-note"></a>

##### `get_ending_note(self) -> str`

- **Class:** `str`: Returns help command's ending note. This is mainly useful to override for i18n purposes.

<a id="api-discord-ext-commands-defaulthelpcommand-get-command-signature"></a>

##### `get_command_signature(self, command: Command[Any, ..., Any], /) -> str`

Retrieves the signature portion of the help page.

Calls `.HelpCommand.get_command_signature` if `show_parameter_descriptions` is `False`
else returns a modified signature where the command parameters are not shown.

> **Added in version 2.0**

## Parameters

**command: `Command`**

The command to get the signature of.

## Returns

**`str`**

The signature for the command.

<a id="api-discord-ext-commands-defaulthelpcommand-add-indented-commands"></a>

##### `add_indented_commands( self, commands: Sequence[Command[Any, ..., Any]], /, *, heading: str, max_size: Optional[int] = None) -> None`

Indents a list of commands after the specified heading.

The formatting is added to the `paginator`.

The default implementation is the command name indented by

- **Attr:** `indent` spaces, padded to `max_size` followed by
  the command's `Command.short_doc` and then shortened
  to fit into the `width`.

> **Changed in version 2.0**
> `commands` parameter is now positional-only.

## Parameters

**commands: Sequence\[`Command`]**

A list of commands to indent for output.

**heading: `str`**

The heading to add to the output. This is only added
if the list of commands is greater than 0.

**max\_size: Optional\[`int`]**

The max size to use for the gap between indents.
If unspecified, calls `HelpCommand.get_max_size` on the
commands parameter.

<a id="api-discord-ext-commands-defaulthelpcommand-add-command-arguments"></a>

##### `add_command_arguments(self, command: Command[Any, ..., Any], /) -> None`

Indents a list of command arguments after the `.arguments_heading`.

The default implementation is the argument `.commands.Parameter.name` indented by

- **Attr:** `indent` spaces, padded to `max_size` using `HelpCommand.get_max_size`
  followed by the argument's `.commands.Parameter.description` or
- **Attr:** `.default_argument_description` and then shortened
  to fit into the `width` and then `.commands.Parameter.displayed_default`
  between () if one is present after that.

> **Added in version 2.0**

## Parameters

**command: `Command`**

The command to list the arguments for.

<a id="api-discord-ext-commands-defaulthelpcommand-send-pages"></a>

##### `send_pages(self) -> None`

*coroutine*

A helper utility to send the page output from `paginator` to the destination.

<a id="api-discord-ext-commands-defaulthelpcommand-add-command-formatting"></a>

##### `add_command_formatting(self, command: Command[Any, ..., Any], /) -> None`

A utility function to format the non-indented block of commands and groups.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

> **Changed in version 2.0**
>
> - **Meth:** `.add_command_arguments` is now called if `.show_parameter_descriptions` is `True`.

## Parameters

**command: `Command`**

The command to format.

### MinimalHelpCommand

<a id="api-discord-ext-commands-minimalhelpcommand"></a>

#### `MinimalHelpCommand(HelpCommand)`

An implementation of a help command with minimal output.

This inherits from `HelpCommand`.

## Attributes

**sort\_commands: `bool`**

Whether to sort the commands in the output alphabetically. Defaults to `True`.

**commands\_heading: `str`**

The command list's heading string used when the help command is invoked with a category name.
Useful for i18n. Defaults to `"Commands"`

**aliases\_heading: `str`**

The alias list's heading string used to list the aliases of the command. Useful for i18n.
Defaults to `"Aliases:"`.

**dm\_help: Optional\[`bool`]**

A tribool that indicates if the help command should DM the user instead of
sending it to the channel it received it from. If the boolean is set to
`True`, then all help output is DM'd. If `False`, none of the help
output is DM'd. If `None`, then the bot will only DM when the help
message becomes too long (dictated by more than `dm_help_threshold` characters).
Defaults to `False`.

**dm\_help\_threshold: Optional\[`int`]**

The number of characters the paginator must accumulate before getting DM'd to the
user if `dm_help` is set to `None`. Defaults to 1000.

**no\_category: `str`**

The string used when there is a command which does not belong to any category(cog).
Useful for i18n. Defaults to `"No Category"`

**paginator: `Paginator`**

The paginator used to paginate the help command output.

<a id="api-discord-ext-commands-minimalhelpcommand-send-pages"></a>

##### `send_pages(self) -> None`

*coroutine*

A helper utility to send the page output from `paginator` to the destination.

<a id="api-discord-ext-commands-minimalhelpcommand-get-opening-note"></a>

##### `get_opening_note(self) -> str`

Returns help command's opening note. This is mainly useful to override for i18n purposes.

The default implementation returns :

```python
Use `{prefix}{command_name} [command]` for more info on a command.
You can also use `{prefix}{command_name} [category]` for more info on a category.
```

## Returns

**`str`**

The help command opening note.

<a id="api-discord-ext-commands-minimalhelpcommand-get-ending-note"></a>

##### `get_ending_note(self) -> str`

Return the help command's ending note. This is mainly useful to override for i18n purposes.

The default implementation does nothing.

## Returns

**`str`**

The help command ending note.

<a id="api-discord-ext-commands-minimalhelpcommand-add-bot-commands-formatting"></a>

##### `add_bot_commands_formatting(self, commands: Sequence[Command[Any, ..., Any]], heading: str, /) -> None`

Adds the minified bot heading with commands to the output.

The formatting should be added to the `paginator`.

The default implementation is a bold underline heading followed
by commands separated by an EN SPACE (U+2002) in the next line.

> **Changed in version 2.0**
> `commands` and `heading` parameters are now positional-only.

## Parameters

**commands: Sequence\[`Command`]**

A list of commands that belong to the heading.

**heading: `str`**

The heading to add to the line.

<a id="api-discord-ext-commands-minimalhelpcommand-add-subcommand-formatting"></a>

##### `add_subcommand_formatting(self, command: Command[Any, ..., Any], /) -> None`

Adds formatting information on a subcommand.

The formatting should be added to the `paginator`.

The default implementation is the prefix and the `Command.qualified_name`
optionally followed by an En dash and the command's `Command.short_doc`.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `Command`**

The command to show information of.

<a id="api-discord-ext-commands-minimalhelpcommand-add-aliases-formatting"></a>

##### `add_aliases_formatting(self, aliases: Sequence[str], /) -> None`

Adds the formatting information on a command's aliases.

The formatting should be added to the `paginator`.

The default implementation is the `aliases_heading` bolded
followed by a comma separated list of aliases.

This is not called if there are no aliases to format.

> **Changed in version 2.0**
> `aliases` parameter is now positional-only.

## Parameters

**aliases: Sequence\[`str`]**

A list of aliases to format.

<a id="api-discord-ext-commands-minimalhelpcommand-add-command-formatting"></a>

##### `add_command_formatting(self, command: Command[Any, ..., Any], /) -> None`

A utility function to format commands and groups.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `Command`**

The command to format.

### Paginator

<a id="api-discord-ext-commands-paginator"></a>

#### `Paginator`

A class that aids in paginating code blocks for Discord messages.

<a id="describe-len-x"></a>

#### `len(x)`

Returns the total number of characters in the paginator.

## Attributes

**prefix: Optional\[`str`]**

The prefix inserted to every page. e.g. three backticks, if any.

**suffix: Optional\[`str`]**

The suffix appended at the end of every page. e.g. three backticks, if any.

**max\_size: `int`**

The maximum amount of codepoints allowed in a page.

**linesep: `str`**

The character string inserted between lines. e.g. a newline character.

> **Added in version 1.7**

<a id="api-discord-ext-commands-paginator-clear"></a>

##### `clear(self) -> None`

Clears the paginator to have no pages.

<a id="api-discord-ext-commands-paginator-add-line"></a>

##### `add_line(self, line: str = '', *, empty: bool = False) -> None`

Adds a line to the current page.

If the line exceeds the `max_size` then an exception
is raised.

## Parameters

**line: `str`**

The line to add.

**empty: `bool`**

Indicates if another empty line should be added.

## Raises

**RuntimeError**

The line was too big for the current `max_size`.

<a id="api-discord-ext-commands-paginator-close-page"></a>

##### `close_page(self) -> None`

Prematurely terminate a page.

<a id="api-discord-ext-commands-paginator-pages"></a>

##### `pages(self) -> List[str]`

List\[`str`]: Returns the rendered list of pages.

## Enums

<a id="class-buckettype"></a>

#### `BucketType`

Specifies a type of bucket for, e.g. a cooldown.

<a id="attribute-default"></a>

##### `default`

The default bucket operates on a global basis.

<a id="attribute-user"></a>

##### `user`

The user bucket operates on a per-user basis.

<a id="attribute-guild"></a>

##### `guild`

The guild bucket operates on a per-guild basis.

<a id="attribute-channel"></a>

##### `channel`

The channel bucket operates on a per-channel basis.

<a id="attribute-member"></a>

##### `member`

The member bucket operates on a per-member basis.

<a id="attribute-category"></a>

##### `category`

The category bucket operates on a per-category basis.

<a id="attribute-role"></a>

##### `role`

The role bucket operates on a per-role basis.

> **Added in version 1.3**

<a id="ext-commands-api-checks"></a>

## Checks

<a id="api-discord-ext-commands-check-predicate"></a>

#### `check(predicate: Check) -> Callable[[T], T]`

A decorator that adds a check to an application command.

These checks should be predicates that take in a single parameter taking
a `discord.Interaction`. If the check returns a `False`-like value then
during invocation a `CheckFailure` exception is raised and sent to
the appropriate error handlers.

These checks can be either a coroutine or not.

## Examples

Creating a basic check to see if the command invoker is you.

```python3
def check_if_it_is_me(interaction: discord.Interaction) -> bool:
    return interaction.user.id == 85309593344815104

@tree.command()
@app_commands.check(check_if_it_is_me)
async def only_for_me(interaction: discord.Interaction):
    await interaction.response.send_message('I know you!', ephemeral=True)
```

Transforming common checks into its own decorator:

```python3
def is_me():
    def predicate(interaction: discord.Interaction) -> bool:
        return interaction.user.id == 85309593344815104
    return app_commands.check(predicate)

@tree.command()
@is_me()
async def only_me(interaction: discord.Interaction):
    await interaction.response.send_message('Only you!')
```

## Parameters

**predicate: Callable\[\[`discord.Interaction`], `bool`]**

The predicate to check if the command should be invoked.

<a id="api-discord-ext-commands-check-any-checks"></a>

#### `check_any(*checks: Check[ContextT]) -> Check[ContextT]`

A `check` that is added that checks if any of the checks passed
will pass, i.e. using logical OR.

If all checks fail then `.CheckAnyFailure` is raised to signal the failure.
It inherits from `.CheckFailure`.

> **Note**
> The `predicate` attribute for this function **is** a coroutine.

> **Added in version 1.3**

## Parameters

**\*checks: Callable\[\[`Context`], `bool`]**

An argument list of checks that have been decorated with
the `check` decorator.

## Raises

**TypeError**

A check passed has not been decorated with the `check`
decorator.

## Examples

Creating a basic check to see if it's the bot owner or
the server owner:

```python3
def is_guild_owner():
    def predicate(ctx):
        return ctx.guild is not None and ctx.guild.owner_id == ctx.author.id
    return commands.check(predicate)

@bot.command()
@commands.check_any(commands.is_owner(), is_guild_owner())
async def only_for_owners(ctx):
    await ctx.send('Hello mister owner!')
```

<a id="api-discord-ext-commands-has-role-item"></a>

#### `has_role(item: Union[int, str], /) -> Check[Any]`

A `.check` that is added that checks if the member invoking the
command has the role specified via the name or ID specified.

If a string is specified, you must give the exact name of the role, including
caps and spelling.

If an integer is specified, you must give the exact snowflake ID of the role.

If the message is invoked in a private message context then the check will
return `False`.

This check raises one of two special exceptions, `.MissingRole` if the user
is missing a role, or `.NoPrivateMessage` if it is used in a private message.
Both inherit from `.CheckFailure`.

> **Changed in version 1.1**
> Raise `.MissingRole` or `.NoPrivateMessage`
> instead of generic `.CheckFailure`

> **Changed in version 2.0**
> `item` parameter is now positional-only.

## Parameters

**item: Union\[`int`, `str`]**

The name or ID of the role to check.

<a id="api-discord-ext-commands-has-permissions-perms"></a>

#### `has_permissions(**perms: Unpack[_PermissionsKwargs]) -> Check[Any]`

A `.check` that is added that checks if the member has all of
the permissions necessary.

Note that this check operates on the current channel permissions, not the
guild wide permissions.

The permissions passed in must be exactly like the properties shown under

- **Class:** `.discord.Permissions`.

This check raises a special exception, `.MissingPermissions`
that is inherited from `.CheckFailure`.

## Parameters

**perms**

An argument list of permissions to check for.

## Example

```python3
@bot.command()
@commands.has_permissions(manage_messages=True)
async def test(ctx):
    await ctx.send('You can manage messages.')
```

<a id="api-discord-ext-commands-has-guild-permissions-perms"></a>

#### `has_guild_permissions(**perms: Unpack[_PermissionsKwargs]) -> Check[Any]`

Similar to `.has_permissions`, but operates on guild wide
permissions instead of the current channel permissions.

If this check is called in a DM context, it will raise an
exception, `.NoPrivateMessage`.

> **Added in version 1.3**

<a id="api-discord-ext-commands-has-any-role-items"></a>

#### `has_any_role(*items: Union[int, str]) -> Callable[[T], T]`

A `.check` that is added that checks if the member invoking the
command has **any** of the roles specified. This means that if they have
one out of the three roles specified, then this check will return `True`.

Similar to `.has_role`, the names or IDs passed in must be exact.

This check raises one of two special exceptions, `.MissingAnyRole` if the user
is missing all roles, or `.NoPrivateMessage` if it is used in a private message.
Both inherit from `.CheckFailure`.

> **Changed in version 1.1**
> Raise `.MissingAnyRole` or `.NoPrivateMessage`
> instead of generic `.CheckFailure`

## Parameters

**items: List\[Union\[`str`, `int`]]**

An argument list of names or IDs to check that the member has roles wise.

## Example

```python3
@bot.command()
@commands.has_any_role('Library Devs', 'Moderators', 492212595072434186)
async def cool(ctx):
    await ctx.send('You are cool indeed')
```

<a id="api-discord-ext-commands-bot-has-role-item"></a>

#### `bot_has_role(item: int, /) -> Callable[[T], T]`

Similar to `.has_role` except checks if the bot itself has the
role.

This check raises one of two special exceptions, `.BotMissingRole` if the bot
is missing the role, or `.NoPrivateMessage` if it is used in a private message.
Both inherit from `.CheckFailure`.

> **Changed in version 1.1**
> Raise `.BotMissingRole` or `.NoPrivateMessage`
> instead of generic `.CheckFailure`

> **Changed in version 2.0**
> `item` parameter is now positional-only.

<a id="api-discord-ext-commands-bot-has-permissions-perms"></a>

#### `bot_has_permissions(**perms: Unpack[_PermissionsKwargs]) -> Check[Any]`

Similar to `.has_permissions` except checks if the bot itself has
the permissions listed.

This check raises a special exception, `.BotMissingPermissions`
that is inherited from `.CheckFailure`.

<a id="api-discord-ext-commands-bot-has-guild-permissions-perms"></a>

#### `bot_has_guild_permissions(**perms: Unpack[_PermissionsKwargs]) -> Check[Any]`

Similar to `.has_guild_permissions`, but checks the bot
members guild permissions.

> **Added in version 1.3**

<a id="api-discord-ext-commands-bot-has-any-role-items"></a>

#### `bot_has_any_role(*items: int) -> Callable[[T], T]`

Similar to `.has_any_role` except checks if the bot itself has
any of the roles listed.

This check raises one of two special exceptions, `.BotMissingAnyRole` if the bot
is missing all roles, or `.NoPrivateMessage` if it is used in a private message.
Both inherit from `.CheckFailure`.

> **Changed in version 1.1**
> Raise `.BotMissingAnyRole` or `.NoPrivateMessage`
> instead of generic checkfailure

<a id="api-discord-ext-commands-cooldown-rate-per-type-discord-ext-commands-buckettype-default"></a>

#### `cooldown( rate: int, per: float, type: Union[BucketType, Callable[[Context[Any]], Any]] = BucketType.default,) -> Callable[[T], T]`

A decorator that adds a cooldown to a `.Command`

A cooldown allows a command to only be used a specific amount
of times in a specific time frame. These cooldowns can be based
either on a per-guild, per-channel, per-user, per-role or global basis.
Denoted by the third argument of `type` which must be of enum
type `.BucketType`.

If a cooldown is triggered, then `.CommandOnCooldown` is triggered in

- **Func:** `.on_command_error` and the local error handler.

A command can only have a single cooldown.

## Parameters

**rate: `int`**

The number of times a command can be used before triggering a cooldown.

**per: `float`**

The amount of seconds to wait for a cooldown when it's been triggered.

**type: Union\[`.BucketType`, Callable\[\[`.Context`], Any]]**

The type of cooldown to have. If callable, should return a key for the mapping.

> **Changed in version 1.7**
> Callables are now supported for custom bucket types.

> **Changed in version 2.0**
> When passing a callable, it now needs to accept `.Context`
> rather than `discord.Message` as its only argument.

<a id="api-discord-ext-commands-dynamic-cooldown-cooldown-type"></a>

#### `dynamic_cooldown( cooldown: Callable[[Context[Any]], Optional[Cooldown]], type: Union[BucketType, Callable[[Context[Any]], Any]],) -> Callable[[T], T]`

A decorator that adds a dynamic cooldown to a `.Command`

This differs from `.cooldown` in that it takes a function that
accepts a single parameter of type `.Context` and must
return a `discord.app_commands.Cooldown` or `None`.
If `None` is returned then that cooldown is effectively bypassed.

A cooldown allows a command to only be used a specific amount
of times in a specific time frame. These cooldowns can be based
either on a per-guild, per-channel, per-user, per-role or global basis.
Denoted by the third argument of `type` which must be of enum
type `.BucketType`.

If a cooldown is triggered, then `.CommandOnCooldown` is triggered in

- **Func:** `.on_command_error` and the local error handler.

A command can only have a single cooldown.

> **Added in version 2.0**

## Parameters

**cooldown: Callable\[\[`.Context`], Optional\[`discord.app_commands.Cooldown`]]**

A function that takes a message and returns a cooldown that will
apply to this invocation or `None` if the cooldown should be bypassed.

**type: `.BucketType`**

The type of cooldown to have.

<a id="api-discord-ext-commands-max-concurrency-number-per-discord-ext-commands-buckettype-default-wait-false"></a>

#### `max_concurrency(number: int, per: BucketType = BucketType.default, *, wait: bool = False) -> Callable[[T], T]`

A decorator that adds a maximum concurrency to a `.Command` or its subclasses.

This enables you to only allow a certain number of command invocations at the same time,
for example if a command takes too long or if only one user can use it at a time. This
differs from a cooldown in that there is no set waiting period or token bucket -- only
a set number of people can run the command.

> **Added in version 1.3**

## Parameters

**number: `int`**

The maximum number of invocations of this command that can be running at the same time.

**per: `.BucketType`**

The bucket that this concurrency is based on, e.g. `BucketType.guild` would allow
it to be used up to `number` times per guild.

**wait: `bool`**

Whether the command should wait for the queue to be over. If this is set to `False`
then instead of waiting until the command can run again, the command raises

- **Exc:** `.MaxConcurrencyReached` to its error handler. If this is set to `True`
  then the command waits until it can be executed.

<a id="api-discord-ext-commands-before-invoke-coro"></a>

#### `before_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a pre-invoke hook.

This allows you to refer to one before invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

## Example

```python3
async def record_usage(ctx):
    print(ctx.author, 'used', ctx.command, 'at', ctx.message.created_at)

@bot.command()
@commands.before_invoke(record_usage)
async def who(ctx): # Output: <User> used who at <Time>
    await ctx.send('i am a bot')

class What(commands.Cog):

    @commands.before_invoke(record_usage)
    @commands.command()
    async def when(self, ctx): # Output: <User> used when at <Time>
        await ctx.send(f'and i have existed since {ctx.bot.user.created_at}')

    @commands.command()
    async def where(self, ctx): # Output: <Nothing>
        await ctx.send('on Discord')

    @commands.command()
    async def why(self, ctx): # Output: <Nothing>
        await ctx.send('because someone made me')
```

<a id="api-discord-ext-commands-after-invoke-coro"></a>

#### `after_invoke(coro: Hook[CogT, ContextT], /) -> Callable[[T], T]`

A decorator that registers a coroutine as a post-invoke hook.

This allows you to refer to one after invoke hook for several commands that
do not have to be within the same cog.

> **Added in version 1.4**

> **Changed in version 2.0**
> `coro` parameter is now positional-only.

<a id="api-discord-ext-commands-guild-only"></a>

#### `guild_only(func: Optional[T] = None) -> Union[T, Callable[[T], T]]`

A decorator that indicates this command can only be used in a guild context.

This is **not** implemented as a `check`, and is instead verified by Discord server side.
Therefore, there is no error handler called when a command is used within a private message.

This decorator can be called with or without parentheses.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

## Examples

```python3
@app_commands.command()
@app_commands.guild_only()
async def my_guild_only_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am only available in guilds!')
```

<a id="api-discord-ext-commands-dm-only"></a>

#### `dm_only(func: Optional[T] = None) -> Union[T, Callable[[T], T]]`

A decorator that indicates this command can only be used in the context of bot DMs.

This is **not** implemented as a `check`, and is instead verified by Discord server side.
Therefore, there is no error handler called when a command is used within a guild or group DM.

This decorator can be called with or without parentheses.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

## Examples

```python3
@app_commands.command()
@app_commands.dm_only()
async def my_dm_only_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am only available in DMs!')
```

<a id="api-discord-ext-commands-is-owner"></a>

#### `is_owner() -> Check[Any]`

A `.check` that checks if the person invoking this command is the
owner of the bot.

This is powered by `.Bot.is_owner`.

This check raises a special exception, `.NotOwner` that is derived
from `.CheckFailure`.

<a id="api-discord-ext-commands-is-nsfw"></a>

#### `is_nsfw() -> Check[Any]`

A `.check` that checks if the channel is a NSFW channel.

This check raises a special exception, `.NSFWChannelRequired`
that is derived from `.CheckFailure`.

If used on hybrid commands, this will be equivalent to setting the
application command's `nsfw` attribute to `True`. In an unsupported
context, such as a subcommand, this will still fallback to applying the
check.

> **Changed in version 1.1**
> Raise `.NSFWChannelRequired` instead of generic `.CheckFailure`.
> DM channels will also now pass this check.

<a id="ext-commands-api-context"></a>

## Context

<a id="api-discord-ext-commands-context"></a>

#### `Context(discord.abc.Messageable, Generic[BotT])`

Represents the context in which a command is being invoked under.

This class contains a lot of meta data to help you understand more about
the invocation context. This class is not created manually and is instead
passed around to commands as the first parameter.

This class implements the `discord.abc.Messageable` ABC.

## Attributes

**message: `.Message`**

The message that triggered the command being executed.

> **Note**
> In the case of an interaction based context, this message is "synthetic"
> and does not actually exist. Therefore, the ID on it is invalid similar
> to ephemeral messages.

**bot: `.Bot`**

The bot that contains the command being executed.

**args: `list`**

The list of transformed arguments that were passed into the command.
If this is accessed during the `.on_command_error` event
then this list could be incomplete.

**kwargs: `dict`**

A dictionary of transformed arguments that were passed into the command.
Similar to `args`, if this is accessed in the

- **Func:** `.on_command_error` event then this dict could be incomplete.

**current\_parameter: Optional\[`Parameter`]**

The parameter that is currently being inspected and converted.
This is only of use for within converters.

> **Added in version 2.0**

**current\_argument: Optional\[`str`]**

The argument string of the `current_parameter` that is currently being converted.
This is only of use for within converters.

> **Added in version 2.0**

**interaction: Optional\[`discord.Interaction`]**

The interaction associated with this context.

> **Added in version 2.0**

**prefix: Optional\[`str`]**

The prefix that was used to invoke the command. For interaction based contexts,
this is `/` for slash commands and `\u200b` for context menu commands.

**command: Optional\[`Command`]**

The command that is being invoked currently.

**invoked\_with: Optional\[`str`]**

The command name that triggered this invocation. Useful for finding out
which alias called the command.

**invoked\_parents: List\[`str`]**

The command names of the parents that triggered this invocation. Useful for
finding out which aliases called the command.

For example in commands `?a b c test`, the invoked parents are `['a', 'b', 'c']`.

> **Added in version 1.7**

**invoked\_subcommand: Optional\[`Command`]**

The subcommand that was invoked.
If no valid subcommand was invoked then this is equal to `None`.

**subcommand\_passed: Optional\[`str`]**

The string that was attempted to call a subcommand. This does not have
to point to a valid registered subcommand and could just point to a
nonsense string. If nothing was passed to attempt a call to a
subcommand then this is set to `None`.

**command\_failed: `bool`**

A boolean that indicates if the command failed to be parsed, checked,
or invoked.

<a id="api-discord-ext-commands-context-from-interaction"></a>

##### `from_interaction(cls, interaction: Interaction[BotT], /) -> Self`

*coroutine*

Creates a context from a `discord.Interaction`. This only
works on application command based interactions, such as slash commands
or context menus.

On slash command based interactions this creates a synthetic `discord.Message`
that points to an ephemeral message that the command invoker has executed. This means
that `Context.author` returns the member that invoked the command.

In a message context menu based interaction, the `Context.message` attribute
is the message that the command is being executed on. This means that `Context.author`
returns the author of the message being targetted. To get the member that invoked
the command then `discord.Interaction.user` should be used instead.

> **Added in version 2.0**

## Parameters

**interaction: `discord.Interaction`**

The interaction to create a context with.

## Raises

**ValueError**

The interaction does not have a valid command.

**TypeError**

The interaction client is not derived from `Bot` or `AutoShardedBot`.

<a id="api-discord-ext-commands-context-invoke"></a>

##### `invoke(self, command: Command[CogT, P, T], /, *args: P.args, **kwargs: P.kwargs) -> T`

*coroutine*

Calls a command with the arguments given.

This is useful if you want to just call the callback that a

- **Class:** `.Command` holds internally.

> **Note**
> This does not handle converters, checks, cooldowns, pre-invoke,
> or after-invoke hooks in any matter. It calls the internal callback
> directly as-if it was a regular function.
>
> You must take care in passing the proper arguments when
> using this function.

> **Changed in version 2.0**
> `command` parameter is now positional-only.

## Parameters

**command: `.Command`**

The command that is going to be called.

**\*args**

The arguments to use.

**\*\*kwargs**

The keyword arguments to use.

## Raises

**TypeError**

The command argument to invoke is missing.

<a id="api-discord-ext-commands-context-reinvoke"></a>

##### `reinvoke(self, *, call_hooks: bool = False, restart: bool = True) -> None`

*coroutine*

Calls the command again.

This is similar to `.Context.invoke` except that it bypasses
checks, cooldowns, and error handlers.

> **Note**
> If you want to bypass `.UserInputError` derived exceptions,
> it is recommended to use the regular `.Context.invoke`
> as it will work more naturally. After all, this will end up
> using the old arguments the user has used and will thus just
> fail again.

## Parameters

**call\_hooks: `bool`**

Whether to call the before and after invoke hooks.

**restart: `bool`**

Whether to start the call chain from the very beginning
or where we left off (i.e. the command that caused the error).
The default is to start where we left off.

## Raises

**ValueError**

The context to reinvoke is not valid.

<a id="api-discord-ext-commands-context-valid"></a>

##### `valid(self) -> bool`

- **Class:** `bool`: Checks if the invocation context is valid to be invoked with.

<a id="api-discord-ext-commands-context-clean-prefix"></a>

##### `clean_prefix(self) -> str`

- **Class:** `str`: The cleaned up invoke prefix. i.e. mentions are `@name` instead of `<@id>`.

> **Added in version 2.0**

<a id="api-discord-ext-commands-context-cog"></a>

##### `cog(self) -> Optional[Cog]`

Optional\[`.Cog`]: Returns the cog associated with this context's command. None if it does not exist.

<a id="api-discord-ext-commands-context-filesize-limit"></a>

##### `filesize_limit(self) -> int`

- **Class:** `int`: Returns the maximum number of bytes files can have when uploaded to this guild or DM channel associated with this context.

> **Added in version 2.3**

<a id="api-discord-ext-commands-context-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`.Guild`]: Returns the guild associated with this context's command. None if not available.

<a id="api-discord-ext-commands-context-channel"></a>

##### `channel(self) -> MessageableChannel`

Union\[`.abc.Messageable`]: Returns the channel associated with this context's command.
Shorthand for `.Message.channel`.

<a id="api-discord-ext-commands-context-author"></a>

##### `author(self) -> Union[User, Member]`

Union\[`discord.User`, `.Member`]:
Returns the author associated with this context's command. Shorthand for `.Message.author`

<a id="api-discord-ext-commands-context-me"></a>

##### `me(self) -> Union[Member, ClientUser]`

Union\[`.Member`, `.ClientUser`]:
Similar to `.Guild.me` except it may return the `.ClientUser` in private message contexts.

<a id="api-discord-ext-commands-context-permissions"></a>

##### `permissions(self) -> Permissions`

- **Class:** `.Permissions`: Returns the resolved permissions for the invoking user in this channel.
  Shorthand for `.abc.GuildChannel.permissions_for` or `.Interaction.permissions`.

> **Added in version 2.0**

<a id="api-discord-ext-commands-context-bot-permissions"></a>

##### `bot_permissions(self) -> Permissions`

- **Class:** `.Permissions`: Returns the resolved permissions for the bot in this channel.
  Shorthand for `.abc.GuildChannel.permissions_for` or `.Interaction.app_permissions`.

For interaction-based commands, this will reflect the effective permissions
for `Context` calls, which may differ from calls through
other `.abc.Messageable` endpoints, like `channel`.

Notably, sending messages, embedding links, and attaching files are always
permitted, while reading messages might not be.

> **Added in version 2.0**

<a id="api-discord-ext-commands-context-voice-client"></a>

##### `voice_client(self) -> Optional[VoiceProtocol]`

Optional\[`.VoiceProtocol`]: A shortcut to `.Guild.voice_client`, if applicable.

<a id="api-discord-ext-commands-context-send-help"></a>

##### `send_help(self, *args: Any) -> Any`

send\_help(entity=<bot>)

*coroutine*

Shows the help command for the specified entity if given.
The entity can be a command or a cog.

If no entity is given, then it'll show help for the
entire bot.

If the entity is a string, then it looks up whether it's a

- **Class:** `Cog` or a `Command`.

> **Note**
> Due to the way this function works, instead of returning
> something similar to `.commands.HelpCommand.command_not_found`
> this returns `None` on bad input or no help command.

## Parameters

**entity: Optional\[Union\[`Command`, `Cog`, `str`]]**

The entity to show help for.

## Returns

**Any**

The result of the help command, if any.

<a id="api-discord-ext-commands-context-reply"></a>

##### `reply(self, content: Optional[str] = None, **kwargs: Any) -> Message`

*coroutine*

A shortcut method to `send` to reply to the

- **Class:** `~discord.Message` referenced by this context.

For interaction based contexts, this is the same as `send`.

> **Added in version 1.6**

> **Changed in version 2.0**
> This function will now raise `TypeError` or
>
> - **Exc:** `ValueError` instead of `InvalidArgument`.

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

**`discord.Message`**

The message that was sent.

<a id="api-discord-ext-commands-context-defer"></a>

##### `defer(self, *, ephemeral: bool = False) -> None`

*coroutine*

Defers the interaction based contexts.

This is typically used when the interaction is acknowledged
and a secondary action will be done later.

If this isn't an interaction based context then it does nothing.

## Parameters

**ephemeral: `bool`**

Indicates whether the deferred message will eventually be ephemeral.

## Raises

**HTTPException**

Deferring the interaction failed.

**InteractionResponded**

This interaction has already been responded to before.

<a id="api-discord-ext-commands-context-send"></a>

##### `send( self, content: Optional[str] = None, *, tts: bool = False, embed: Optional[Embed] = None, embeds: Optional[Sequence[Embed]] = None, file: Optional[File] = None, files: Optional[Sequence[File]] = None, stickers: Optional[Sequence[Union[GuildSticker, StickerItem]]] = None, delete_after: Optional[float] = None, nonce: Optional[Union[str, int]] = None, allowed_mentions: Optional[AllowedMentions] = None, reference: Optional[Union[Message, MessageReference, PartialMessage]] = None, mention_author: Optional[bool] = None, view: Optional[BaseView] = None, suppress_embeds: bool = False, ephemeral: bool = False, silent: bool = False, poll: Optional[Poll] = None,) -> Message`

*coroutine*

Sends a message to the destination with the content given.

This works similarly to `discord.abc.Messageable.send` for non-interaction contexts.

For interaction based contexts this does one of the following:

- `discord.InteractionResponse.send_message` if no response has been given.
- A followup message if a response has been given.
- Regular send if the interaction has expired

> **Changed in version 2.0**
> This function will now raise `TypeError` or
>
> - **Exc:** `ValueError` instead of `InvalidArgument`.

## Parameters

**content: Optional\[`str`]**

The content of the message to send.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**embed: `discord.Embed`**

The rich embed for the content.

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

A reference to the `discord.Message` to which you are replying, this can be created using

- **Meth:** `~discord.Message.to_reference` or passed directly as a `discord.Message`. You can control
  whether this mentions the author of the referenced message using the `discord.AllowedMentions.replied_user`
  attribute of `allowed_mentions` or by setting `mention_author`.

This is ignored for interaction based contexts.

> **Added in version 1.6**

**mention\_author: Optional\[`bool`]**

If set, overrides the `discord.AllowedMentions.replied_user` attribute of `allowed_mentions`.
This is ignored for interaction based contexts.

> **Added in version 1.6**

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

A Discord UI View to add to the message.

> **Added in version 2.0**

**embeds: List\[`discord.Embed`]**

A list of embeds to upload. Must be a maximum of 10.

> **Added in version 2.0**

**stickers: Sequence\[Union\[`discord.GuildSticker`, `discord.StickerItem`]]**

A list of stickers to upload. Must be a maximum of 3. This is ignored for interaction based contexts.

> **Added in version 2.0**

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

> **Added in version 2.0**

**ephemeral: `bool`**

Indicates if the message should only be visible to the user who started the interaction.
If a view is sent with an ephemeral message and it has no timeout set then the timeout
is set to 15 minutes. **This is only applicable in contexts with an interaction**.

> **Added in version 2.0**

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.2**

**poll: Optional\[`discord.Poll`]**

The poll to send with this message.

> **Added in version 2.4**

> **Changed in version 2.6**
> This can now be `None` and defaults to `None` instead of `MISSING`.

## Raises

**\~discord.HTTPException**

Sending the message failed.

**\~discord.Forbidden**

You do not have the proper permissions to send the message.

**ValueError**

The `files` list is not of the appropriate size.

**TypeError**

You specified both `file` and `files`,
or you specified both `embed` and `embeds`,
or the `reference` object is not a `discord.Message`,

- **Class:** `~discord.MessageReference` or `discord.PartialMessage`.

## Returns

**`discord.Message`**

The message that was sent.

<a id="api-discord-ext-commands-context-typing"></a>

#### `typing(self, *, ephemeral: bool = False) -> Union[Typing, DeferTyping[BotT]]`

Returns an asynchronous context manager that allows you to send a typing indicator to
the destination for an indefinite period of time, or 10 seconds if the context manager
is called using `await`.

In an interaction based context, this is equivalent to a `defer` call and
does not do any typing calls.

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

## Parameters

**ephemeral: `bool`**

Indicates whether the deferred message will eventually be ephemeral.
Only valid for interaction based contexts.

> **Added in version 2.0**

<a id="ext-commands-api-converters"></a>

## Converters

<a id="api-discord-ext-commands-converter"></a>

#### `Converter(Protocol[T_co])`

The base class of custom converters that require the `.Context`
to be passed to be useful.

This allows you to implement converters that function similar to the
special cased `discord` classes.

Classes that derive from this should override the `.Converter.convert`
method to do its conversion logic. This method must be a coroutine.

<a id="api-discord-ext-commands-converter-convert"></a>

##### `convert(self, ctx: Context[BotT], argument: str) -> T_co`

*coroutine*

The method to override to do conversion logic.

If an error is found while converting, it is recommended to
raise a `.CommandError` derived exception as it will
properly propagate to the error handlers.

Note that if this method is called manually, `Exception`
should be caught to handle the cases where a subclass does
not explicitly inherit from `.CommandError`.

## Parameters

**ctx: `.Context`**

The invocation context that the argument is being used in.

**argument: `str`**

The argument that is being converted.

## Raises

**CommandError**

A generic exception occurred when converting the argument.

**BadArgument**

The converter failed to convert the argument.

<a id="api-discord-ext-commands-objectconverter"></a>

#### `ObjectConverter(IDConverter[discord.Object])`

Converts to a `discord.Object`.

The argument must follow the valid ID or mention formats (e.g. `<@80088516616269824>`).

> **Added in version 2.0**

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by member, role, or channel mention.

<a id="api-discord-ext-commands-memberconverter"></a>

#### `MemberConverter(IDConverter[discord.Member])`

Converts to a `discord.Member`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by username#discriminator (deprecated).
4. Lookup by username#0 (deprecated, only gets users that migrated from their discriminator).
5. Lookup by user name.
6. Lookup by global name.
7. Lookup by guild nickname.

> **Changed in version 1.5**
> Raise `.MemberNotFound` instead of generic `.BadArgument`

> **Changed in version 1.5.1**
> This converter now lazily fetches members from the gateway and HTTP APIs,
> optionally caching the result if `.MemberCacheFlags.joined` is enabled.

> **Deprecated in version 2.3**
> Looking up users by discriminator will be removed in a future version due to
> the removal of discriminators in an API change.

<a id="api-discord-ext-commands-userconverter"></a>

#### `UserConverter(IDConverter[discord.User])`

Converts to a `discord.User`.

All lookups are via the global user cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by username#discriminator (deprecated).
4. Lookup by username#0 (deprecated, only gets users that migrated from their discriminator).
5. Lookup by user name.
6. Lookup by global name.

> **Changed in version 1.5**
> Raise `.UserNotFound` instead of generic `.BadArgument`

> **Changed in version 1.6**
> This converter now lazily fetches users from the HTTP APIs if an ID is passed
> and it's not available in cache.

> **Deprecated in version 2.3**
> Looking up users by discriminator will be removed in a future version due to
> the removal of discriminators in an API change.

<a id="api-discord-ext-commands-messageconverter"></a>

#### `MessageConverter(IDConverter[discord.Message])`

Converts to a `discord.Message`.

> **Added in version 1.1**

The lookup strategy is as follows (in order):

1. Lookup by "{channel ID}-{message ID}" (retrieved by shift-clicking on "Copy ID")
2. Lookup by message ID (the message **must** be in the context channel)
3. Lookup by message URL

> **Changed in version 1.5**
> Raise `.ChannelNotFound`, `.MessageNotFound` or `.ChannelNotReadable` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-partialmessageconverter"></a>

#### `PartialMessageConverter(Converter[discord.PartialMessage])`

Converts to a `discord.PartialMessage`.

> **Added in version 1.7**

The creation strategy is as follows (in order):

1. By "{channel ID}-{message ID}" (retrieved by shift-clicking on "Copy ID")
2. By message ID (The message is assumed to be in the context channel.)
3. By message URL

<a id="api-discord-ext-commands-guildchannelconverter"></a>

#### `GuildChannelConverter(IDConverter[discord.abc.GuildChannel])`

Converts to a `discord.abc.GuildChannel`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name.

> **Added in version 2.0**

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-textchannelconverter"></a>

#### `TextChannelConverter(IDConverter[discord.TextChannel])`

Converts to a `discord.TextChannel`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name

> **Changed in version 1.5**
> Raise `.ChannelNotFound` instead of generic `.BadArgument`

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-voicechannelconverter"></a>

#### `VoiceChannelConverter(IDConverter[discord.VoiceChannel])`

Converts to a `discord.VoiceChannel`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name

> **Changed in version 1.5**
> Raise `.ChannelNotFound` instead of generic `.BadArgument`

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-stagechannelconverter"></a>

#### `StageChannelConverter(IDConverter[discord.StageChannel])`

Converts to a `discord.StageChannel`.

> **Added in version 1.7**

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-categorychannelconverter"></a>

#### `CategoryChannelConverter(IDConverter[discord.CategoryChannel])`

Converts to a `discord.CategoryChannel`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

> **Changed in version 1.5**
> Raise `.ChannelNotFound` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-forumchannelconverter"></a>

#### `ForumChannelConverter(IDConverter[discord.ForumChannel])`

Converts to a `discord.ForumChannel`.

All lookups are via the local guild. If in a DM context, then the lookup
is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name

> **Added in version 2.0**

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-inviteconverter"></a>

#### `InviteConverter(Converter[discord.Invite])`

Converts to a `discord.Invite`.

This is done via an HTTP request using `.Bot.fetch_invite`.

> **Changed in version 1.5**
> Raise `.BadInviteArgument` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-guildconverter"></a>

#### `GuildConverter(IDConverter[discord.Guild])`

Converts to a `discord.Guild`.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by name. (There is no disambiguation for Guilds with multiple matching names).

> **Added in version 1.7**

<a id="api-discord-ext-commands-roleconverter"></a>

#### `RoleConverter(IDConverter[discord.Role])`

Converts to a `discord.Role`.

All lookups are via the local guild. If in a DM context, the converter raises

- **Exc:** `.NoPrivateMessage` exception.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by name

> **Changed in version 1.5**
> Raise `.RoleNotFound` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-gameconverter"></a>

#### `GameConverter(Converter[discord.Game])`

Converts to a `discord.Game`.

<a id="api-discord-ext-commands-colourconverter"></a>

#### `ColourConverter(Converter[discord.Colour])`

Converts to a `discord.Colour`.

> **Changed in version 1.5**
> Add an alias named ColorConverter

The following formats are accepted:

- `0x<hex>`
- `#<hex>`
- `0x#<hex>`
- `rgb(<number>, <number>, <number>)`
- Any of the `classmethod` in `discord.Colour`

  - The `_` in the name can be optionally replaced with spaces.

Like CSS, `<number>` can be either 0-255 or 0-100% and `<hex>` can be
either a 6 digit hex number or a 3 digit hex shortcut (e.g. #fff).

> **Changed in version 1.5**
> Raise `.BadColourArgument` instead of generic `.BadArgument`

> **Changed in version 1.7**
> Added support for `rgb` function and 3-digit hex shortcuts

<a id="api-discord-ext-commands-emojiconverter"></a>

#### `EmojiConverter(IDConverter[discord.Emoji])`

Converts to a `discord.Emoji`.

All lookups are done for the local guild first, if available. If that lookup
fails, then it checks the client's global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by extracting ID from the emoji.
3. Lookup by name

> **Changed in version 1.5**
> Raise `.EmojiNotFound` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-partialemojiconverter"></a>

#### `PartialEmojiConverter(Converter[discord.PartialEmoji])`

Converts to a `discord.PartialEmoji`.

This is done by extracting the animated flag, name and ID from the emoji.

> **Changed in version 1.5**
> Raise `.PartialEmojiConversionFailure` instead of generic `.BadArgument`

<a id="api-discord-ext-commands-threadconverter"></a>

#### `ThreadConverter(IDConverter[discord.Thread])`

Converts to a `discord.Thread`.

All lookups are via the local guild.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by mention.
3. Lookup by channel URL.
4. Lookup by name.

> **Changed in version 2.4**
> Add lookup by channel URL, accessed via "Copy Link" in the Discord client within channels.

<a id="api-discord-ext-commands-guildstickerconverter"></a>

#### `GuildStickerConverter(IDConverter[discord.GuildSticker])`

Converts to a `discord.GuildSticker`.

All lookups are done for the local guild first, if available. If that lookup
fails, then it checks the client's global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by name.

> **Added in version 2.0**

<a id="api-discord-ext-commands-scheduledeventconverter"></a>

#### `ScheduledEventConverter(IDConverter[discord.ScheduledEvent])`

Converts to a `discord.ScheduledEvent`.

Lookups are done for the local guild if available. Otherwise, for a DM context,
lookup is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by url.
3. Lookup by name.

> **Added in version 2.0**

<a id="api-discord-ext-commands-soundboardsoundconverter"></a>

#### `SoundboardSoundConverter(IDConverter[discord.SoundboardSound])`

Converts to a `discord.SoundboardSound`.

Lookups are done for the local guild if available. Otherwise, for a DM context,
lookup is done by the global cache.

The lookup strategy is as follows (in order):

1. Lookup by ID.
2. Lookup by name.

> **Added in version 2.5**

<a id="api-discord-ext-commands-timestamp"></a>

#### `Timestamp(Converter[str])`

Converts to a `datetime.datetime`.

Conversion is attempted based on the [Discord style timestamp](https://discord.com/developers/docs/reference#message-formatting) input format.

> **Added in version 2.7**

> **Warning**
> Due to a Discord limitation, no timezone is provided with the input. The UTC timezone has been supplanted instead.

<a id="api-discord-ext-commands-clean-content"></a>

#### `clean_content(Converter[str])`

Converts the argument to mention scrubbed version of
said content.

This behaves similarly to `discord.Message.clean_content`.

## Attributes

**fix\_channel\_mentions: `bool`**

Whether to clean channel mentions.

**use\_nicknames: `bool`**

Whether to use nicknames when transforming mentions.

**escape\_markdown: `bool`**

Whether to also escape special markdown characters.

**remove\_markdown: `bool`**

Whether to also remove special markdown characters. This option is not supported with `escape_markdown`

> **Added in version 1.7**

<a id="api-discord-ext-commands-greedy"></a>

#### `Greedy(List[T])`

A special converter that greedily consumes arguments until it can't.
As a consequence of this behaviour, most input errors are silently discarded,
since it is used as an indicator of when to stop parsing.

When a parser error is met the greedy converter stops converting, undoes the
internal string parsing routine, and continues parsing regularly.

For example, in the following code:

```python3
@commands.command()
async def test(ctx, numbers: Greedy[int], reason: str):
    await ctx.send("numbers: {}, reason: {}".format(numbers, reason))
```

An invocation of `[p]test 1 2 3 4 5 6 hello` would pass `numbers` with
`[1, 2, 3, 4, 5, 6]` and `reason` with `hello`.

For more information, check [ext\_commands\_special\_converters](https://discordpy.readthedocs.io/ext/commands/commands.html#ext-commands-special-converters).

> **Note**
> For interaction based contexts the conversion error is propagated
> rather than swallowed due to the difference in user experience with
> application commands.

<a id="api-discord-ext-commands-range"></a>

#### `Range`

A special converter that can be applied to a parameter to require a numeric
or string type to fit within the range provided.

During type checking time this is equivalent to `typing.Annotated` so type checkers understand
the intent of the code.

Some example ranges:

- `Range[int, 10]` means the minimum is 10 with no maximum.
- `Range[int, None, 10]` means the maximum is 10 with no minimum.
- `Range[int, 1, 10]` means the minimum is 1 and the maximum is 10.
- `Range[float, 1.0, 5.0]` means the minimum is 1.0 and the maximum is 5.0.
- `Range[str, 1, 10]` means the minimum length is 1 and the maximum length is 10.

Inside a `HybridCommand` this functions equivalently to `discord.app_commands.Range`.

If the value cannot be converted to the provided type or is outside the given range,

- **Class:** `~.ext.commands.BadArgument` or `.ext.commands.RangeError` is raised to
  the appropriate error handlers respectively.

> **Added in version 2.0**

## Examples

```python3
@bot.command()
async def range(ctx: commands.Context, value: commands.Range[int, 10, 12]):
    await ctx.send(f'Your value is {value}')
```

<a id="api-discord-ext-commands-run-converters"></a>

#### `run_converters(ctx: Context[BotT], converter: Any, argument: str, param: Parameter) -> Any`

*coroutine*

Runs converters for a given converter, argument, and parameter.

This function does the same work that the library does under the hood.

> **Added in version 2.0**

## Parameters

**ctx: `Context`**

The invocation context to run the converters under.

**converter: Any**

The converter to run, this corresponds to the annotation in the function.

**argument: `str`**

The argument to convert to.

**param: `Parameter`**

The parameter being converted. This is mainly for error reporting.

## Raises

**CommandError**

The converter failed to convert.

## Returns

**Any**

The resulting conversion.

### Flag Converter

<a id="api-discord-ext-commands-flagconverter"></a>

#### `FlagConverter(metaclass=FlagsMeta)`

A converter that allows for a user-friendly flag syntax.

The flags are defined using [PEP 526](https://peps.python.org/pep-0526/) type annotations similar
to the `dataclasses` Python module. For more information on
how this converter works, check the appropriate

- **Ref:** `documentation <ext_commands_flag_converter>`.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(flag_name, flag_value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.
Note that aliases are not shown.

> **Added in version 2.0**

## Parameters

**case\_insensitive: `bool`**

A class parameter to toggle case insensitivity of the flag parsing.
If `True` then flags are parsed in a case insensitive manner.
Defaults to `False`.

**prefix: `str`**

The prefix that all flags must be prefixed with. By default
there is no prefix.

**delimiter: `str`**

The delimiter that separates a flag's argument from the flag's name.
By default this is `:`.

<a id="api-discord-ext-commands-flagconverter-get-flags"></a>

##### `get_flags(cls) -> Dict[str, Flag]`

Dict\[`str`, `Flag`]: A mapping of flag name to flag object this converter has.

<a id="api-discord-ext-commands-flagconverter-convert"></a>

##### `convert(cls, ctx: Context[BotT], argument: str) -> Self`

*coroutine*

The method that actually converters an argument to the flag mapping.

## Parameters

**ctx: `Context`**

The invocation context.

**argument: `str`**

The argument to convert from.

## Raises

**FlagError**

A flag related parsing error.

## Returns

**`FlagConverter`**

The flag converter instance with all flags parsed.

<a id="api-discord-ext-commands-flag"></a>

#### `Flag`

Represents a flag parameter for `FlagConverter`.

The `discord.ext.commands.flag` function helps
create these flag objects, but it is not necessary to
do so. These cannot be constructed manually.

## Attributes

**name: `str`**

The name of the flag.

**aliases: List\[`str`]**

The aliases of the flag name.

**attribute: `str`**

The attribute in the class that corresponds to this flag.

**default: Any**

The default value of the flag, if available.

**annotation: Any**

The underlying evaluated annotation of the flag.

**max\_args: `int`**

The maximum number of arguments the flag can accept.
A negative value indicates an unlimited amount of arguments.

**override: `bool`**

Whether multiple given values overrides the previous value.

**description: `str`**

The description of the flag. Shown for hybrid commands when they're
used as application commands.

**positional: `bool`**

Whether the flag is positional or not. There can only be one positional flag.

> **Added in version 2.4**

<a id="api-discord-ext-commands-flag-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the flag is required.

A required flag has no default value.

<a id="api-discord-ext-commands-flag"></a>

#### `flag( *, name: str = MISSING, aliases: List[str] = MISSING, default: Any = MISSING, max_args: int = MISSING, override: bool = MISSING, converter: Any = MISSING, description: str = MISSING, positional: bool = MISSING,) -> Any`

Override default functionality and parameters of the underlying `FlagConverter`
class attributes.

## Parameters

**name: `str`**

The flag name. If not given, defaults to the attribute name.

**aliases: List\[`str`]**

Aliases to the flag name. If not given no aliases are set.

**default: Any**

The default parameter. This could be either a value or a callable that takes

- **Class:** `Context` as its sole parameter. If not given then it defaults to
  the default value given to the attribute.

**max\_args: `int`**

The maximum number of arguments the flag can accept.
A negative value indicates an unlimited amount of arguments.
The default value depends on the annotation given.

**override: `bool`**

Whether multiple given values overrides the previous value. The default
value depends on the annotation given.

**converter: Any**

The converter to use for this flag. This replaces the annotation at
runtime which is transparent to type checkers.

**description: `str`**

The description of the flag. Shown for hybrid commands when they're
used as application commands.

**positional: `bool`**

Whether the flag is positional or not. There can only be one positional flag.

> **Added in version 2.4**

## Defaults

<a id="api-discord-ext-commands-parameter"></a>

#### `Parameter`

A class that contains the parameter information of a `Command` callback.

> **Added in version 2.0**

## Attributes

**name: `str`**

The name of the parameter. This is the Python identifier for the parameter.

**display\_name: `str`**

The displayed name of the parameter on Discord.

**description: `str`**

The description of the parameter.

**autocomplete: `bool`**

Whether the parameter has an autocomplete handler.

**locale\_name: Optional\[`locale_str`]**

The display name's locale string, if available.

**locale\_description: Optional\[`locale_str`]**

The description's locale string, if available.

**required: `bool`**

Whether the parameter is required

**choices: List\[`discord.app_commands.Choice`]**

A list of choices this parameter takes, if any.

**type: `discord.AppCommandOptionType`**

The underlying type of this parameter.

**channel\_types: List\[`discord.ChannelType`]**

The channel types that are allowed for this parameter.

**min\_value: Optional\[Union\[`int`, `float`]]**

The minimum supported value for this parameter.

**max\_value: Optional\[Union\[`int`, `float`]]**

The maximum supported value for this parameter.

**default: Any**

The default value of the parameter, if given.
If not given then this is `discord.utils.MISSING`.

**command: `Command`**

The command this parameter is attached to.

<a id="api-discord-ext-commands-parameter"></a>

#### `parameter( *, converter: Any = empty, default: Any = empty, description: str = empty, displayed_default: str = empty, displayed_name: str = empty,) -> Any`

parameter(\*, converter=..., default=..., description=..., displayed\_default=..., displayed\_name=...)

A way to assign custom metadata for a `Command`'s parameter.

> **Added in version 2.0**

## Examples

A custom default can be used to have late binding behaviour.

```python3
@bot.command()
async def wave(ctx, to: discord.User = commands.parameter(default=lambda ctx: ctx.author)):
    await ctx.send(f'Hello {to.mention} :wave:')
```

## Parameters

**converter: Any**

The converter to use for this parameter, this replaces the annotation at runtime which is transparent to type checkers.

**default: Any**

The default value for the parameter, if this is a `callable` or a *coroutine*\_ it is called with a
positional `Context` argument.

**description: `str`**

The description of this parameter.

**displayed\_default: `str`**

The displayed default in `Command.signature`.

**displayed\_name: `str`**

The name that is displayed to the user.

> **Added in version 2.3**

<a id="api-discord-ext-commands-param"></a>

#### `param(\*, converter=..., default=..., description=..., displayed_default=..., displayed_name=...)`

An alias for `parameter`.

> **Added in version 2.0**

<a id="data-discord-ext-commands-author"></a>

#### `discord.ext.commands.Author`

A default `Parameter` which returns the `.Context.author` for this context.

> **Added in version 2.0**

<a id="data-discord-ext-commands-currentchannel"></a>

#### `discord.ext.commands.CurrentChannel`

A default `Parameter` which returns the `.Context.channel` for this context.

> **Added in version 2.0**

<a id="data-discord-ext-commands-currentguild"></a>

#### `discord.ext.commands.CurrentGuild`

A default `Parameter` which returns the `.Context.guild` for this context. This will never be `None`. If the command is called in a DM context then `discord.ext.commands.NoPrivateMessage` is raised to the error handlers.

> **Added in version 2.0**

<a id="ext-commands-api-errors"></a>

## Exceptions

<a id="api-discord-ext-commands-commanderror"></a>

#### `CommandError(DiscordException)`

The base exception type for all command related errors.

This inherits from `discord.DiscordException`.

This exception and exceptions inherited from it are handled
in a special way as they are caught and passed into a special event
from `.Bot`, `.on_command_error`.

<a id="api-discord-ext-commands-conversionerror"></a>

#### `ConversionError(CommandError)`

Exception raised when a Converter class raises non-CommandError.

This inherits from `CommandError`.

## Attributes

**converter: `discord.ext.commands.Converter`**

The converter that failed.

**original: `Exception`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

<a id="api-discord-ext-commands-missingrequiredargument"></a>

#### `MissingRequiredArgument(UserInputError)`

Exception raised when parsing a command and a parameter
that is required is not encountered.

This inherits from `UserInputError`

## Attributes

**param: `Parameter`**

The argument that is missing.

<a id="api-discord-ext-commands-missingrequiredattachment"></a>

#### `MissingRequiredAttachment(UserInputError)`

Exception raised when parsing a command and a parameter
that requires an attachment is not given.

This inherits from `UserInputError`

> **Added in version 2.0**

## Attributes

**param: `Parameter`**

The argument that is missing an attachment.

<a id="api-discord-ext-commands-argumentparsingerror"></a>

#### `ArgumentParsingError(UserInputError)`

An exception raised when the parser fails to parse a user's input.

This inherits from `UserInputError`.

There are child classes that implement more granular parsing errors for
i18n purposes.

<a id="api-discord-ext-commands-unexpectedquoteerror"></a>

#### `UnexpectedQuoteError(ArgumentParsingError)`

An exception raised when the parser encounters a quote mark inside a non-quoted string.

This inherits from `ArgumentParsingError`.

## Attributes

**quote: `str`**

The quote mark that was found inside the non-quoted string.

<a id="api-discord-ext-commands-invalidendofquotedstringerror"></a>

#### `InvalidEndOfQuotedStringError(ArgumentParsingError)`

An exception raised when a space is expected after the closing quote in a string
but a different character is found.

This inherits from `ArgumentParsingError`.

## Attributes

**char: `str`**

The character found instead of the expected string.

<a id="api-discord-ext-commands-expectedclosingquoteerror"></a>

#### `ExpectedClosingQuoteError(ArgumentParsingError)`

An exception raised when a quote character is expected but not found.

This inherits from `ArgumentParsingError`.

## Attributes

**close\_quote: `str`**

The quote character expected.

<a id="api-discord-ext-commands-badargument"></a>

#### `BadArgument(UserInputError)`

Exception raised when a parsing or conversion failure is encountered
on an argument to pass into a command.

This inherits from `UserInputError`

<a id="api-discord-ext-commands-badunionargument"></a>

#### `BadUnionArgument(UserInputError)`

Exception raised when a `typing.Union` converter fails for all
its associated types.

This inherits from `UserInputError`

## Attributes

**param: `inspect.Parameter`**

The parameter that failed being converted.

**converters: Tuple\[Type, `...`]**

A tuple of converters attempted in conversion, in order of failure.

**errors: List\[`CommandError`]**

A list of errors that were caught from failing the conversion.

<a id="api-discord-ext-commands-badliteralargument"></a>

#### `BadLiteralArgument(UserInputError)`

Exception raised when a `typing.Literal` converter fails for all
its associated values.

This inherits from `UserInputError`

> **Added in version 2.0**

## Attributes

**param: `inspect.Parameter`**

The parameter that failed being converted.

**literals: Tuple\[Any, `...`]**

A tuple of values compared against in conversion, in order of failure.

**errors: List\[`CommandError`]**

A list of errors that were caught from failing the conversion.

**argument: `str`**

The argument's value that failed to be converted. Defaults to an empty string.

> **Added in version 2.3**

<a id="api-discord-ext-commands-privatemessageonly"></a>

#### `PrivateMessageOnly(CheckFailure)`

Exception raised when an operation does not work outside of private
message contexts.

This inherits from `CheckFailure`

<a id="api-discord-ext-commands-noprivatemessage"></a>

#### `NoPrivateMessage(CheckFailure)`

Exception raised when an operation does not work in private message
contexts.

This inherits from `CheckFailure`

<a id="api-discord-ext-commands-checkfailure"></a>

#### `CheckFailure(CommandError)`

Exception raised when the predicates in `.Command.checks` have failed.

This inherits from `CommandError`

<a id="api-discord-ext-commands-checkanyfailure"></a>

#### `CheckAnyFailure(Generic[BotT], CheckFailure)`

Exception raised when all predicates in `check_any` fail.

This inherits from `CheckFailure`.

> **Added in version 1.3**

## Attributes

**errors: List\[`CheckFailure`]**

A list of errors that were caught during execution.

**checks: List\[Callable\[\[`Context`], `bool`]]**

A list of check predicates that failed.

<a id="api-discord-ext-commands-commandnotfound"></a>

#### `CommandNotFound(CommandError)`

Exception raised when a command is attempted to be invoked
but no command under that name is found.

This is not raised for invalid subcommands, rather just the
initial main command that is attempted to be invoked.

This inherits from `CommandError`.

<a id="api-discord-ext-commands-disabledcommand"></a>

#### `DisabledCommand(CommandError)`

Exception raised when the command being invoked is disabled.

This inherits from `CommandError`

<a id="api-discord-ext-commands-commandinvokeerror"></a>

#### `CommandInvokeError(CommandError)`

Exception raised when the command being invoked raised an exception.

This inherits from `CommandError`

## Attributes

**original: `Exception`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

<a id="api-discord-ext-commands-toomanyarguments"></a>

#### `TooManyArguments(UserInputError)`

Exception raised when the command was passed too many arguments and its

- **Attr:** `.Command.ignore_extra` attribute was not set to `True`.

This inherits from `UserInputError`

<a id="api-discord-ext-commands-userinputerror"></a>

#### `UserInputError(CommandError)`

The base exception type for errors that involve errors
regarding user input.

This inherits from `CommandError`.

<a id="api-discord-ext-commands-commandoncooldown"></a>

#### `CommandOnCooldown(CommandError)`

Exception raised when the command being invoked is on cooldown.

This inherits from `CommandError`

## Attributes

**cooldown: `discord.app_commands.Cooldown`**

A class with attributes `rate` and `per` similar to the

- **Func:** `.cooldown` decorator.

**type: `BucketType`**

The type associated with the cooldown.

**retry\_after: `float`**

The amount of seconds to wait before you can retry again.

<a id="api-discord-ext-commands-maxconcurrencyreached"></a>

#### `MaxConcurrencyReached(CommandError)`

Exception raised when the command being invoked has reached its maximum concurrency.

This inherits from `CommandError`.

## Attributes

**number: `int`**

The maximum number of concurrent invokers allowed.

**per: `.BucketType`**

The bucket type passed to the `.max_concurrency` decorator.

<a id="api-discord-ext-commands-notowner"></a>

#### `NotOwner(CheckFailure)`

Exception raised when the message author is not the owner of the bot.

This inherits from `CheckFailure`

<a id="api-discord-ext-commands-messagenotfound"></a>

#### `MessageNotFound(BadArgument)`

Exception raised when the message provided was not found in the channel.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The message supplied by the caller that was not found

<a id="api-discord-ext-commands-membernotfound"></a>

#### `MemberNotFound(BadArgument)`

Exception raised when the member provided was not found in the bot's
cache.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The member supplied by the caller that was not found

<a id="api-discord-ext-commands-guildnotfound"></a>

#### `GuildNotFound(BadArgument)`

Exception raised when the guild provided was not found in the bot's cache.

This inherits from `BadArgument`

> **Added in version 1.7**

## Attributes

**argument: `str`**

The guild supplied by the called that was not found

<a id="api-discord-ext-commands-usernotfound"></a>

#### `UserNotFound(BadArgument)`

Exception raised when the user provided was not found in the bot's
cache.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The user supplied by the caller that was not found

<a id="api-discord-ext-commands-channelnotfound"></a>

#### `ChannelNotFound(BadArgument)`

Exception raised when the bot can not find the channel.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: Union\[`int`, `str`]**

The channel supplied by the caller that was not found

<a id="api-discord-ext-commands-channelnotreadable"></a>

#### `ChannelNotReadable(BadArgument)`

Exception raised when the bot does not have permission to read messages
in the channel.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: Union\[`.abc.GuildChannel`, `.Thread`]**

The channel supplied by the caller that was not readable

<a id="api-discord-ext-commands-threadnotfound"></a>

#### `ThreadNotFound(BadArgument)`

Exception raised when the bot can not find the thread.

This inherits from `BadArgument`

> **Added in version 2.0**

## Attributes

**argument: `str`**

The thread supplied by the caller that was not found

<a id="api-discord-ext-commands-badcolourargument"></a>

#### `BadColourArgument(BadArgument)`

Exception raised when the colour is not valid.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The colour supplied by the caller that was not valid

<a id="api-discord-ext-commands-rolenotfound"></a>

#### `RoleNotFound(BadArgument)`

Exception raised when the bot can not find the role.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The role supplied by the caller that was not found

<a id="api-discord-ext-commands-badinviteargument"></a>

#### `BadInviteArgument(BadArgument)`

Exception raised when the invite is invalid or expired.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The invite supplied by the caller that was not valid

<a id="api-discord-ext-commands-emojinotfound"></a>

#### `EmojiNotFound(BadArgument)`

Exception raised when the bot can not find the emoji.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The emoji supplied by the caller that was not found

<a id="api-discord-ext-commands-partialemojiconversionfailure"></a>

#### `PartialEmojiConversionFailure(BadArgument)`

Exception raised when the emoji provided does not match the correct
format.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The emoji supplied by the caller that did not match the regex

<a id="api-discord-ext-commands-guildstickernotfound"></a>

#### `GuildStickerNotFound(BadArgument)`

Exception raised when the bot can not find the sticker.

This inherits from `BadArgument`

> **Added in version 2.0**

## Attributes

**argument: `str`**

The sticker supplied by the caller that was not found

<a id="api-discord-ext-commands-scheduledeventnotfound"></a>

#### `ScheduledEventNotFound(BadArgument)`

Exception raised when the bot can not find the scheduled event.

This inherits from `BadArgument`

> **Added in version 2.0**

## Attributes

**argument: `str`**

The event supplied by the caller that was not found

<a id="api-discord-ext-commands-soundboardsoundnotfound"></a>

#### `SoundboardSoundNotFound(BadArgument)`

Exception raised when the bot can not find the soundboard sound.

This inherits from `BadArgument`

> **Added in version 2.5**

## Attributes

**argument: `str`**

The sound supplied by the caller that was not found

<a id="api-discord-ext-commands-badboolargument"></a>

#### `BadBoolArgument(BadArgument)`

Exception raised when a boolean argument was not convertable.

This inherits from `BadArgument`

> **Added in version 1.5**

## Attributes

**argument: `str`**

The boolean argument supplied by the caller that is not in the predefined list

<a id="api-discord-ext-commands-rangeerror"></a>

#### `RangeError(BadArgument)`

Exception raised when an argument is out of range.

This inherits from `BadArgument`

> **Added in version 2.0**

## Attributes

**minimum: Optional\[Union\[`int`, `float`]]**

The minimum value expected or `None` if there wasn't one

**maximum: Optional\[Union\[`int`, `float`]]**

The maximum value expected or `None` if there wasn't one

**value: Union\[`int`, `float`, `str`]**

The value that was out of range.

<a id="api-discord-ext-commands-missingpermissions"></a>

#### `MissingPermissions(CheckFailure)`

Exception raised when the command invoker lacks permissions to run a
command.

This inherits from `CheckFailure`

## Attributes

**missing\_permissions: List\[`str`]**

The required permissions that are missing.

<a id="api-discord-ext-commands-botmissingpermissions"></a>

#### `BotMissingPermissions(CheckFailure)`

Exception raised when the bot's member lacks permissions to run a
command.

This inherits from `CheckFailure`

## Attributes

**missing\_permissions: List\[`str`]**

The required permissions that are missing.

<a id="api-discord-ext-commands-missingrole"></a>

#### `MissingRole(CheckFailure)`

Exception raised when the command invoker lacks a role to run a command.

This inherits from `CheckFailure`

> **Added in version 1.1**

## Attributes

**missing\_role: Union\[`str`, `int`]**

The required role that is missing.
This is the parameter passed to `.commands.has_role`.

<a id="api-discord-ext-commands-botmissingrole"></a>

#### `BotMissingRole(CheckFailure)`

Exception raised when the bot's member lacks a role to run a command.

This inherits from `CheckFailure`

> **Added in version 1.1**

## Attributes

**missing\_role: Union\[`str`, `int`]**

The required role that is missing.
This is the parameter passed to `.commands.has_role`.

<a id="api-discord-ext-commands-missinganyrole"></a>

#### `MissingAnyRole(CheckFailure)`

Exception raised when the command invoker lacks any of
the roles specified to run a command.

This inherits from `CheckFailure`

> **Added in version 1.1**

## Attributes

**missing\_roles: List\[Union\[`str`, `int`]]**

The roles that the invoker is missing.
These are the parameters passed to `.commands.has_any_role`.

<a id="api-discord-ext-commands-botmissinganyrole"></a>

#### `BotMissingAnyRole(CheckFailure)`

Exception raised when the bot's member lacks any of
the roles specified to run a command.

This inherits from `CheckFailure`

> **Added in version 1.1**

## Attributes

**missing\_roles: List\[Union\[`str`, `int`]]**

The roles that the bot's member is missing.
These are the parameters passed to `.commands.has_any_role`.

<a id="api-discord-ext-commands-nsfwchannelrequired"></a>

#### `NSFWChannelRequired(CheckFailure)`

Exception raised when a channel does not have the required NSFW setting.

This inherits from `CheckFailure`.

> **Added in version 1.1**

## Attributes

**channel: Union\[`.abc.GuildChannel`, `.Thread`]**

The channel that does not have NSFW enabled.

<a id="api-discord-ext-commands-flagerror"></a>

#### `FlagError(BadArgument)`

The base exception type for all flag parsing related errors.

This inherits from `BadArgument`.

> **Added in version 2.0**

<a id="api-discord-ext-commands-badflagargument"></a>

#### `BadFlagArgument(FlagError)`

An exception raised when a flag failed to convert a value.

This inherits from `FlagError`

> **Added in version 2.0**

## Attributes

**flag: `discord.ext.commands.Flag`**

The flag that failed to convert.

**argument: `str`**

The argument supplied by the caller that was not able to be converted.

**original: `Exception`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

<a id="api-discord-ext-commands-missingflagargument"></a>

#### `MissingFlagArgument(FlagError)`

An exception raised when a flag did not get a value.

This inherits from `FlagError`

> **Added in version 2.0**

## Attributes

**flag: `discord.ext.commands.Flag`**

The flag that did not get a value.

<a id="api-discord-ext-commands-toomanyflags"></a>

#### `TooManyFlags(FlagError)`

An exception raised when a flag has received too many values.

This inherits from `FlagError`.

> **Added in version 2.0**

## Attributes

**flag: `discord.ext.commands.Flag`**

The flag that received too many values.

**values: List\[`str`]**

The values that were passed.

<a id="api-discord-ext-commands-missingrequiredflag"></a>

#### `MissingRequiredFlag(FlagError)`

An exception raised when a required flag was not given.

This inherits from `FlagError`

> **Added in version 2.0**

## Attributes

**flag: `discord.ext.commands.Flag`**

The required flag that was not found.

<a id="api-discord-ext-commands-extensionerror"></a>

#### `ExtensionError(DiscordException)`

Base exception for extension related errors.

This inherits from `discord.DiscordException`.

## Attributes

**name: `str`**

The extension that had an error.

<a id="api-discord-ext-commands-extensionalreadyloaded"></a>

#### `ExtensionAlreadyLoaded(ExtensionError)`

An exception raised when an extension has already been loaded.

This inherits from `ExtensionError`

<a id="api-discord-ext-commands-extensionnotloaded"></a>

#### `ExtensionNotLoaded(ExtensionError)`

An exception raised when an extension was not loaded.

This inherits from `ExtensionError`

<a id="api-discord-ext-commands-noentrypointerror"></a>

#### `NoEntryPointError(ExtensionError)`

An exception raised when an extension does not have a `setup` entry point function.

This inherits from `ExtensionError`

<a id="api-discord-ext-commands-extensionfailed"></a>

#### `ExtensionFailed(ExtensionError)`

An exception raised when an extension failed to load during execution of the module or `setup` entry point.

This inherits from `ExtensionError`

## Attributes

**name: `str`**

The extension that had the error.

**original: `Exception`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

<a id="api-discord-ext-commands-extensionnotfound"></a>

#### `ExtensionNotFound(ExtensionError)`

An exception raised when an extension is not found.

This inherits from `ExtensionError`

> **Changed in version 1.3**
> Made the `original` attribute always None.

## Attributes

**name: `str`**

The extension that had the error.

<a id="api-discord-ext-commands-commandregistrationerror"></a>

#### `CommandRegistrationError(ClientException)`

An exception raised when the command can't be added
because the name is already taken by a different command.

This inherits from `discord.ClientException`

> **Added in version 1.4**

## Attributes

**name: `str`**

The command name that had the error.

**alias\_conflict: `bool`**

Whether the name that conflicts is an alias of the command we try to add.

<a id="api-discord-ext-commands-hybridcommanderror"></a>

#### `HybridCommandError(CommandError)`

An exception raised when a `discord.ext.commands.HybridCommand` raises
an `discord.app_commands.AppCommandError` derived exception that could not be
sufficiently converted to an equivalent `CommandError` exception.

> **Added in version 2.0**

## Attributes

**original: `discord.app_commands.AppCommandError`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

### Exception Hierarchy

- `.DiscordException`
  - `.commands.CommandError`
    - `.commands.ConversionError`
    - `.commands.UserInputError`
      - `.commands.MissingRequiredArgument`
      - `.commands.MissingRequiredAttachment`
      - `.commands.TooManyArguments`
      - `.commands.BadArgument`
        - `.commands.MessageNotFound`
        - `.commands.MemberNotFound`
        - `.commands.GuildNotFound`
        - `.commands.UserNotFound`
        - `.commands.ChannelNotFound`
        - `.commands.ChannelNotReadable`
        - `.commands.BadColourArgument`
        - `.commands.RoleNotFound`
        - `.commands.BadInviteArgument`
        - `.commands.EmojiNotFound`
        - `.commands.GuildStickerNotFound`
        - `.commands.ScheduledEventNotFound`
        - `.commands.SoundboardSoundNotFound`
        - `.commands.PartialEmojiConversionFailure`
        - `.commands.BadBoolArgument`
        - `.commands.RangeError`
        - `.commands.ThreadNotFound`
        - `.commands.FlagError`
          - `.commands.BadFlagArgument`
          - `.commands.MissingFlagArgument`
          - `.commands.TooManyFlags`
          - `.commands.MissingRequiredFlag`
      - `.commands.BadUnionArgument`
      - `.commands.BadLiteralArgument`
      - `.commands.ArgumentParsingError`
        - `.commands.UnexpectedQuoteError`
        - `.commands.InvalidEndOfQuotedStringError`
        - `.commands.ExpectedClosingQuoteError`
    - `.commands.CommandNotFound`
    - `.commands.CheckFailure`
      - `.commands.CheckAnyFailure`
      - `.commands.PrivateMessageOnly`
      - `.commands.NoPrivateMessage`
      - `.commands.NotOwner`
      - `.commands.MissingPermissions`
      - `.commands.BotMissingPermissions`
      - `.commands.MissingRole`
      - `.commands.BotMissingRole`
      - `.commands.MissingAnyRole`
      - `.commands.BotMissingAnyRole`
      - `.commands.NSFWChannelRequired`
    - `.commands.DisabledCommand`
    - `.commands.CommandInvokeError`
    - `.commands.CommandOnCooldown`
    - `.commands.MaxConcurrencyReached`
    - `.commands.HybridCommandError`
  - `.commands.ExtensionError`
    - `.commands.ExtensionAlreadyLoaded`
    - `.commands.ExtensionNotLoaded`
    - `.commands.NoEntryPointError`
    - `.commands.ExtensionFailed`
    - `.commands.ExtensionNotFound`
- `.ClientException`
  - `.commands.CommandRegistrationError`
