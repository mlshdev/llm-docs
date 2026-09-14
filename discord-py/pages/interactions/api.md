> Tag-pinned source for discord.py v2.7.1: [docs/interactions/api.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/interactions/api.rst)

# Interactions API Reference

The following section outlines the API of interactions, as implemented by the library.

For documentation about the rest of the library, check [/api](https://discordpy.readthedocs.io//api.html).

## Models

Similar to [discord\_api\_models](https://discordpy.readthedocs.io/api.html#discord-api-models), these are not meant to be constructed by the user.

### Interaction

<a id="api-interaction"></a>

#### `Interaction(Generic[ClientT])`

Represents a Discord interaction.

An interaction happens when a user does an action that needs to
be notified. Current examples are slash commands and components.

> **Added in version 2.0**

## Attributes

**id: `int`**

The interaction's ID.

**type: `InteractionType`**

The interaction type.

**guild\_id: Optional\[`int`]**

The guild ID the interaction was sent from.

**channel: Optional\[Union\[`abc.GuildChannel`, `abc.PrivateChannel`, `Thread`]]**

The channel the interaction was sent from.

Note that due to a Discord limitation, if sent from a DM channel `DMChannel.recipient` is `None`.

**entitlement\_sku\_ids: List\[`int`]**

The entitlement SKU IDs that the user has.

**entitlements: List\[`Entitlement`]**

The entitlements that the guild or user has.

**application\_id: `int`**

The application ID that the interaction was for.

**user: Union\[`User`, `Member`]**

The user or member that sent the interaction.

**message: Optional\[`Message`]**

The message that sent this interaction.

This is only available for `InteractionType.component` interactions.

**token: `str`**

The token to continue the interaction. These are valid
for 15 minutes.

**data: `dict`**

The raw interaction data.

**locale: `Locale`**

The locale of the user invoking the interaction.

**guild\_locale: Optional\[`Locale`]**

The preferred locale of the guild the interaction was sent from, if any.

**extras: `dict`**

A dictionary that can be used to store extraneous data for use during
interaction processing. The library will not touch any values or keys
within this dictionary.

**command\_failed: `bool`**

Whether the command associated with this interaction failed to execute.
This includes checks and execution.

**context: `.AppCommandContext`**

The context of the interaction.

> **Added in version 2.4**

**filesize\_limit: int**

The maximum number of bytes a file can have when responding to this interaction.

> **Added in version 2.6**

<a id="api-interaction-client"></a>

##### `client(self) -> ClientT`

- **Class:** `Client`: The client that is handling this interaction.

Note that `AutoShardedClient`, `.commands.Bot`, and

- **Class:** `~.commands.AutoShardedBot` are all subclasses of client.

<a id="api-interaction-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`Guild`]: The guild the interaction was sent from.

<a id="api-interaction-channel-id"></a>

##### `channel_id(self) -> Optional[int]`

Optional\[`int`]: The ID of the channel the interaction was sent from.

<a id="api-interaction-permissions"></a>

##### `permissions(self) -> Permissions`

- **Class:** `Permissions`: The resolved permissions of the member in the channel, including overwrites.

In a non-guild context where this doesn't apply, an empty permissions object is returned.

<a id="api-interaction-app-permissions"></a>

##### `app_permissions(self) -> Permissions`

- **Class:** `Permissions`: The resolved permissions of the application or the bot, including overwrites.

<a id="api-interaction-namespace"></a>

##### `namespace(self) -> Namespace`

- **Class:** `app_commands.Namespace`: The resolved namespace for this interaction.

If the interaction is not an application command related interaction or the client does not have a
tree attached to it then this returns an empty namespace.

<a id="api-interaction-command"></a>

##### `command(self) -> Optional[Union[Command[Any, ..., Any], ContextMenu]]`

Optional\[Union\[`app_commands.Command`, `app_commands.ContextMenu`]]: The command being called from
this interaction.

If the interaction is not an application command related interaction or the command is not found in the client's
attached tree then `None` is returned.

<a id="api-interaction-command-id"></a>

##### `command_id(self) -> Optional[int]`

Optional\[`int`]: The ID of the command that triggered this interaction.

Only applicable if `type` is one of, `InteractionType.application_command` or

- **Attr:** `InteractionType.autocomplete`.

> **Added in version 2.7**

<a id="api-interaction-response"></a>

##### `response(self) -> InteractionResponse[ClientT]`

- **Class:** `InteractionResponse`: Returns an object responsible for handling responding to the interaction.

A response can only be done once. If secondary messages need to be sent, consider using `followup`
instead.

<a id="api-interaction-followup"></a>

##### `followup(self) -> Webhook`

- **Class:** `Webhook`: Returns the follow up webhook for follow up interactions.

<a id="api-interaction-created-at"></a>

##### `created_at(self) -> datetime.datetime`

- **Class:** `datetime.datetime`: When the interaction was created.

<a id="api-interaction-expires-at"></a>

##### `expires_at(self) -> datetime.datetime`

- **Class:** `datetime.datetime`: When the interaction expires.

<a id="api-interaction-custom-id"></a>

##### `custom_id(self) -> Optional[str]`

Optional\[`str`]: The custom ID of the component that triggered this interaction.

Only applicable if `type` is one of, `InteractionType.component` or

- **Attr:** `InteractionType.modal_submit`.

> **Added in version 2.7**

<a id="api-interaction-is-expired"></a>

##### `is_expired(self) -> bool`

- **Class:** `bool`: Returns `True` if the interaction is expired.

<a id="api-interaction-is-guild-integration"></a>

##### `is_guild_integration(self) -> bool`

- **Class:** `bool`: Returns `True` if the interaction is a guild integration.

> **Added in version 2.4**

<a id="api-interaction-is-user-integration"></a>

##### `is_user_integration(self) -> bool`

- **Class:** `bool`: Returns `True` if the interaction is a user integration.

> **Added in version 2.4**

<a id="api-interaction-original-response"></a>

##### `original_response(self) -> InteractionMessage`

*coroutine*

Fetches the original interaction response message associated with the interaction.

If the interaction response was a newly created message (i.e. through `InteractionResponse.send_message`
or `InteractionResponse.defer`, where `thinking` is `True`) then this returns the message that was sent
using that response. Otherwise, this returns the message that triggered the interaction (i.e.
through a component).

Repeated calls to this will return a cached value.

## Raises

**HTTPException**

Fetching the original response message failed.

**ClientException**

The channel for the message could not be resolved.

**NotFound**

The interaction response message does not exist.

## Returns

**InteractionMessage**

The original interaction response message.

<a id="api-interaction-edit-original-response"></a>

##### `edit_original_response( self, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[Union[View, LayoutView]] = MISSING, allowed_mentions: Optional[AllowedMentions] = None, poll: Poll = MISSING,) -> InteractionMessage`

*coroutine*

Edits the original interaction response message.

This is a lower level interface to `InteractionMessage.edit` in case
you do not want to fetch the message and save an HTTP request.

This method is also the only way to edit the original message if
the message sent was ephemeral.

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

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed.

> **Note**
> If you want to update the message to have a `discord.ui.LayoutView`, you must
> explicitly set the `content`, `embed`, `embeds`, and `attachments` parameters to
> `None` if the previous message had any.

**poll: `Poll`**

The poll to create when editing the message.

> **Added in version 2.5**

> **Note**
> This is only accepted when the response type is `InteractionResponseType.deferred_channel_message`.

## Raises

**HTTPException**

Editing the message failed.

**NotFound**

The interaction response message does not exist.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`

**ValueError**

The length of `embeds` was invalid.

## Returns

**`InteractionMessage`**

The newly edited message.

<a id="api-interaction-delete-original-response"></a>

##### `delete_original_response(self) -> None`

*coroutine*

Deletes the original interaction response message.

This is a lower level interface to `InteractionMessage.delete` in case
you do not want to fetch the message and save an HTTP request.

## Raises

**HTTPException**

Deleting the message failed.

**NotFound**

The interaction response message does not exist or has already been deleted.

**Forbidden**

Deleted a message that is not yours.

<a id="api-interaction-translate"></a>

##### `translate( self, string: Union[str, locale_str], *, locale: Locale = MISSING, data: Any = MISSING) -> Optional[str]`

*coroutine*

Translates a string using the set `discord.app_commands.Translator`.

> **Added in version 2.1**

## Parameters

**string: Union\[`str`, `discord.app_commands.locale_str`]**

The string to translate.

- **Class:** `~discord.app_commands.locale_str` can be used to add more context,
  information, or any metadata necessary.

**locale: `Locale`**

The locale to use, this is handy if you want the translation
for a specific locale.
Defaults to the user's `.locale`.

**data: Any**

The extraneous data that is being translated.
If not specified, either `.command` or `.message` will be passed,
depending on which is available in the context.

## Returns

**Optional\[`str`]**

The translated string, or `None` if a translator was not set.

### InteractionResponse

<a id="api-interactionresponse"></a>

#### `InteractionResponse(Generic[ClientT])`

Represents a Discord interaction response.

This type can be accessed through `Interaction.response`.

> **Added in version 2.0**

<a id="api-interactionresponse-is-done"></a>

##### `is_done(self) -> bool`

- **Class:** `bool`: Indicates whether an interaction response has been done before.

An interaction can only be responded to once.

<a id="api-interactionresponse-type"></a>

##### `type(self) -> Optional[InteractionResponseType]`

- **Class:** `InteractionResponseType`: The type of response that was sent, `None` if response is not done.

<a id="api-interactionresponse-defer"></a>

##### `defer( self, *, ephemeral: bool = False, thinking: bool = False,) -> Optional[InteractionCallbackResponse[ClientT]]`

*coroutine*

Defers the interaction response.

This is typically used when the interaction is acknowledged
and a secondary action will be done later.

This is only supported with the following interaction types:

- `InteractionType.application_command`
- `InteractionType.component`
- `InteractionType.modal_submit`

> **Changed in version 2.5**
> This now returns a `InteractionCallbackResponse` instance.

## Parameters

**ephemeral: `bool`**

Indicates whether the deferred message will eventually be ephemeral.
This only applies to `InteractionType.application_command` interactions, or if `thinking` is `True`.

**thinking: `bool`**

Indicates whether the deferred type should be `InteractionResponseType.deferred_channel_message`
instead of the default `InteractionResponseType.deferred_message_update` if both are valid.
In UI terms, this is represented as if the bot is thinking of a response. It is your responsibility to
eventually send a followup message via `Interaction.followup` to make this thinking state go away.
Application commands (AKA Slash commands) cannot use `InteractionResponseType.deferred_message_update`.

## Raises

**HTTPException**

Deferring the interaction failed.

**InteractionResponded**

This interaction has already been responded to before.

## Returns

**Optional\[`InteractionCallbackResponse`]**

The interaction callback resource, or `None`.

<a id="api-interactionresponse-pong"></a>

##### `pong(self) -> None`

*coroutine*

Pongs the ping interaction.

This should rarely be used.

## Raises

**HTTPException**

Ponging the interaction failed.

**InteractionResponded**

This interaction has already been responded to before.

<a id="api-interactionresponse-send-message"></a>

##### `send_message( self, content: Optional[Any] = None, *, embed: Embed = MISSING, embeds: Sequence[Embed] = MISSING, file: File = MISSING, files: Sequence[File] = MISSING, view: BaseView = MISSING, tts: bool = False, ephemeral: bool = False, allowed_mentions: AllowedMentions = MISSING, suppress_embeds: bool = False, silent: bool = False, delete_after: Optional[float] = None, poll: Poll = MISSING,) -> InteractionCallbackResponse[ClientT]`

*coroutine*

Responds to this interaction by sending a message.

> **Changed in version 2.5**
> This now returns a `InteractionCallbackResponse` instance.

## Parameters

**content: Optional\[`str`]**

The content of the message to send.

**embeds: List\[`Embed`]**

A list of embeds to send with the content. Maximum of 10. This cannot
be mixed with the `embed` parameter.

**embed: `Embed`**

The rich embed for the content to send. This cannot be mixed with
`embeds` parameter.

**file: `discord.File`**

The file to upload.

**files: List\[`discord.File`]**

A list of files to upload. Must be a maximum of 10.

**tts: `bool`**

Indicates if the message should be sent using text-to-speech.

**view: Union\[`discord.ui.View`, `discord.ui.LayoutView`]**

The view to send with the message.

**ephemeral: `bool`**

Indicates if the message should only be visible to the user who started the interaction.
If a view is sent with an ephemeral message and it has no timeout set then the timeout
is set to 15 minutes.

**allowed\_mentions: `discord.AllowedMentions`**

Controls the mentions being processed in this message. See `.abc.Messageable.send` for
more information.

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This sends the message without any embeds if set to `True`.

**silent: `bool`**

Whether to suppress push and desktop notifications for the message. This will increment the mention counter
in the UI, but will not actually send a notification.

> **Added in version 2.2**

**delete\_after: `float`**

If provided, the number of seconds to wait in the background
before deleting the message we just sent. If the deletion fails,
then it is silently ignored.

> **Added in version 2.1**

**poll: `discord.Poll`**

The poll to send with this message.

> **Added in version 2.4**

## Raises

**HTTPException**

Sending the message failed.

**TypeError**

You specified both `embed` and `embeds` or `file` and `files`.

**ValueError**

The length of `embeds` was invalid.

**InteractionResponded**

This interaction has already been responded to before.

## Returns

**`InteractionCallbackResponse`**

The interaction callback data.

<a id="api-interactionresponse-edit-message"></a>

##### `edit_message( self, *, content: Optional[Any] = MISSING, embed: Optional[Embed] = MISSING, embeds: Sequence[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[Union[View, LayoutView]] = MISSING, allowed_mentions: Optional[AllowedMentions] = MISSING, delete_after: Optional[float] = None, suppress_embeds: bool = MISSING,) -> Optional[InteractionCallbackResponse[ClientT]]`

*coroutine*

Responds to this interaction by editing the original message of
a component or modal interaction.

> **Changed in version 2.5**
> This now returns a `InteractionCallbackResponse` instance.

## Parameters

**content: Optional\[`str`]**

The new content to replace the message with. `None` removes the content.

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

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed.

> **Note**
> To update the message to add a `discord.ui.LayoutView`, you
> must explicitly set the `content`, `embed`, `embeds`, and
> `attachments` parameters to either `None` or an empty array, as appropriate.

**allowed\_mentions: Optional\[`discord.AllowedMentions`]**

Controls the mentions being processed in this message. See `.Message.edit`
for more information.

**delete\_after: `float`**

If provided, the number of seconds to wait in the background
before deleting the message we just edited. If the deletion fails,
then it is silently ignored.

> **Added in version 2.2**

**suppress\_embeds: `bool`**

Whether to suppress embeds for the message. This removes
all the embeds if set to `True`. If set to `False`
this brings the embeds back if they were suppressed.
Using this parameter requires `.Permissions.manage_messages`.

> **Added in version 2.4**

## Raises

**HTTPException**

Editing the message failed.

**TypeError**

You specified both `embed` and `embeds`.

**InteractionResponded**

This interaction has already been responded to before.

## Returns

**Optional\[`InteractionCallbackResponse`]**

The interaction callback data, or `None` if editing the message was not possible.

<a id="api-interactionresponse-send-modal"></a>

##### `send_modal(self, modal: Modal, /) -> InteractionCallbackResponse[ClientT]`

*coroutine*

Responds to this interaction by sending a modal.

> **Changed in version 2.5**
> This now returns a `InteractionCallbackResponse` instance.

## Parameters

**modal: `discord.ui.Modal`**

The modal to send.

## Raises

**HTTPException**

Sending the modal failed.

**InteractionResponded**

This interaction has already been responded to before.

## Returns

**`InteractionCallbackResponse`**

The interaction callback data.

<a id="api-interactionresponse-autocomplete"></a>

##### `autocomplete(self, choices: Sequence[Choice[ChoiceT]]) -> None`

*coroutine*

Responds to this interaction by giving the user the choices they can use.

## Parameters

**choices: List\[`discord.app_commands.Choice`]**

The list of new choices as the user is typing.

## Raises

**HTTPException**

Sending the choices failed.

**ValueError**

This interaction cannot respond with autocomplete.

**InteractionResponded**

This interaction has already been responded to before.

<a id="api-interactionresponse-launch-activity"></a>

##### `launch_activity(self) -> InteractionCallbackResponse[ClientT]`

*coroutine*

Responds to this interaction by launching the activity associated with the app.
Only available for apps with activities enabled.

> **Added in version 2.6**

## Raises

**HTTPException**

Launching the activity failed.

**InteractionResponded**

This interaction has already been responded to before.

## Returns

**`InteractionCallbackResponse`**

The interaction callback data.

### InteractionCallbackResponse

<a id="api-interactioncallbackresponse"></a>

#### `InteractionCallbackResponse(Generic[ClientT])`

Represents an interaction response callback.

> **Added in version 2.5**

## Attributes

**id: `int`**

The interaction ID.

**type: `InteractionResponseType`**

The interaction callback response type.

**resource: Optional\[Union\[`InteractionMessage`, `InteractionCallbackActivityInstance`]]**

The resource that the interaction response created. If a message was sent, this will be
a `InteractionMessage`. If an activity was launched this will be a

- **Class:** `InteractionCallbackActivityInstance`. In any other case, this will be `None`.

**message\_id: Optional\[`int`]**

The message ID of the resource. Only available if the resource is a `InteractionMessage`.

**activity\_id: Optional\[`str`]**

The activity ID of the resource. Only available if the resource is a `InteractionCallbackActivityInstance`.

<a id="api-interactioncallbackresponse-is-thinking"></a>

##### `is_thinking(self) -> bool`

- **Class:** `bool`: Whether the response was a thinking defer.

<a id="api-interactioncallbackresponse-is-ephemeral"></a>

##### `is_ephemeral(self) -> bool`

- **Class:** `bool`: Whether the response was ephemeral.

### InteractionCallbackActivityInstance

<a id="api-interactioncallbackactivityinstance"></a>

#### `InteractionCallbackActivityInstance`

Represents an activity instance launched as an interaction response.

> **Added in version 2.5**

## Attributes

**id: `str`**

The activity instance ID.

### InteractionMessage

<a id="api-interactionmessage"></a>

#### `InteractionMessage(Message)`

Represents the original interaction response message.

This allows you to edit or delete the message associated with
the interaction response. To retrieve this object see `Interaction.original_response`.

This inherits from `discord.Message` with changes to

- **Meth:** `edit` and `delete` to work.

> **Added in version 2.0**

<a id="api-interactionmessage-edit"></a>

##### `edit( self, *, content: Optional[str] = MISSING, embeds: Sequence[Embed] = MISSING, embed: Optional[Embed] = MISSING, attachments: Sequence[Union[Attachment, File]] = MISSING, view: Optional[Union[View, LayoutView]] = MISSING, allowed_mentions: Optional[AllowedMentions] = None, delete_after: Optional[float] = None, poll: Poll = MISSING,) -> InteractionMessage`

*coroutine*

Edits the message.

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

**allowed\_mentions: `AllowedMentions`**

Controls the mentions being processed in this message.
See `.abc.Messageable.send` for more information.

**view: Optional\[Union\[`discord.ui.View`, `discord.ui.LayoutView`]]**

The updated view to update this message with. If `None` is passed then
the view is removed.

> **Note**
> If you want to update the message to have a `discord.ui.LayoutView`, you must
> explicitly set the `content`, `embed`, `embeds`, and `attachments` parameters to
> `None` if the previous message had any.

**delete\_after: Optional\[`float`]**

If provided, the number of seconds to wait in the background
before deleting the message we just sent. If the deletion fails,
then it is silently ignored.

> **Added in version 2.2**

**poll: `discord.Poll`**

The poll to create when editing the message.

> **Added in version 2.5**

> **Note**
> This is only accepted if the interaction response's `InteractionResponse.type`
> attribute is `InteractionResponseType.deferred_channel_message`.

## Raises

**HTTPException**

Editing the message failed.

**Forbidden**

Edited a message that is not yours.

**TypeError**

You specified both `embed` and `embeds`

**ValueError**

The length of `embeds` was invalid.

## Returns

**`InteractionMessage`**

The newly edited message.

<a id="api-interactionmessage-add-files"></a>

##### `add_files(self, *files: File) -> InteractionMessage`

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

**`InteractionMessage`**

The newly edited message.

<a id="api-interactionmessage-remove-attachments"></a>

##### `remove_attachments(self, *attachments: Attachment) -> InteractionMessage`

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

**`InteractionMessage`**

The newly edited message.

<a id="api-interactionmessage-delete"></a>

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

### MessageInteraction

<a id="api-messageinteraction"></a>

#### `MessageInteraction(Hashable)`

Represents the interaction that a `Message` is a response to.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two message interactions are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two message interactions are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the message interaction's hash.

## Attributes

**id: `int`**

The interaction ID.

**type: `InteractionType`**

The interaction type.

**name: `str`**

The name of the interaction.

**user: Union\[`User`, `Member`]**

The user or member that invoked the interaction.

<a id="api-messageinteraction-created-at"></a>

##### `created_at(self) -> datetime.datetime`

- **Class:** `datetime.datetime`: The interaction's creation time in UTC.

### MessageInteractionMetadata

<a id="api-messageinteractionmetadata"></a>

#### `MessageInteractionMetadata(Hashable)`

Represents the interaction metadata of a `Message` if
it was sent in response to an interaction.

> **Added in version 2.4**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two message interactions are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two message interactions are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the message interaction's hash.

## Attributes

**id: `int`**

The interaction ID.

**type: `InteractionType`**

The interaction type.

**user: `User`**

The user that invoked the interaction.

**original\_response\_message\_id: Optional\[`int`]**

The ID of the original response message if the message is a follow-up.

**interacted\_message\_id: Optional\[`int`]**

The ID of the message that containes the interactive components, if applicable.

**modal\_interaction: Optional\[`.MessageInteractionMetadata`]**

The metadata of the modal submit interaction that triggered this interaction, if applicable.

**target\_user: Optional\[`User`]**

The user the command was run on, only applicable to user context menus.

> **Added in version 2.5**

**target\_message\_id: Optional\[`int`]**

The ID of the message the command was run on, only applicable to message context menus.

> **Added in version 2.5**

<a id="api-messageinteractionmetadata-created-at"></a>

##### `created_at(self) -> datetime.datetime`

- **Class:** `datetime.datetime`: The interaction's creation time in UTC.

<a id="api-messageinteractionmetadata-original-response-message"></a>

##### `original_response_message(self) -> Optional[Message]`

Optional\[`discord.Message`]: The original response message if the message
is a follow-up and is found in cache.

<a id="api-messageinteractionmetadata-interacted-message"></a>

##### `interacted_message(self) -> Optional[Message]`

Optional\[`discord.Message`]: The message that
containes the interactive components, if applicable and is found in cache.

<a id="api-messageinteractionmetadata-target-message"></a>

##### `target_message(self) -> Optional[Message]`

Optional\[`discord.Message`]: The target message, if applicable and is found in cache.

> **Added in version 2.5**

<a id="api-messageinteractionmetadata-is-guild-integration"></a>

##### `is_guild_integration(self) -> bool`

- **Class:** `bool`: Returns `True` if the interaction is a guild integration.

<a id="api-messageinteractionmetadata-is-user-integration"></a>

##### `is_user_integration(self) -> bool`

- **Class:** `bool`: Returns `True` if the interaction is a user integration.

### Component

<a id="api-component"></a>

#### `Component`

Represents a Discord Bot UI Kit Component.

The components supported by Discord are:

- `ActionRow`
- `Button`
- `SelectMenu`
- `TextInput`
- `SectionComponent`
- `TextDisplay`
- `ThumbnailComponent`
- `MediaGalleryComponent`
- `FileComponent`
- `SeparatorComponent`
- `Container`
- `LabelComponent`
- `FileUploadComponent`

This class is abstract and cannot be instantiated.

> **Added in version 2.0**

<a id="api-component-type"></a>

##### `type(self) -> ComponentType`

- **Class:** `ComponentType`: The type of component.

### ActionRow

<a id="api-actionrow"></a>

#### `ActionRow(Item[V])`

Represents a UI action row.

This is a top-level layout component that can only be used on `LayoutView`
and can contain `Button`\s and `Select`\s in it.

Action rows can only have 5 children. This can be inherited.

> **Added in version 2.6**

## Examples

```python3
import discord
from discord import ui

# you can subclass it and add components with the decorators
class MyActionRow(ui.ActionRow):
    @ui.button(label='Click Me!')
    async def click_me(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked me!')

# or use it directly on LayoutView
class MyView(ui.LayoutView):
    row = ui.ActionRow()
    # or you can use your subclass:
    # row = MyActionRow()

    # you can add items with row.button and row.select
    @row.button(label='A button!')
    async def row_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked a button!')
```

## Parameters

**\*children: `Item`**

The initial children of this action row.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-actionrow-children"></a>

##### `children(self) -> List[Item[V]]`

List\[`Item`]: The list of children attached to this action row.

<a id="api-actionrow-walk-children"></a>

##### `walk_children(self) -> Generator[Item[V], Any, None]`

An iterator that recursively walks through all the children of this action row
and its children, if applicable.

## Yields

**`Item`**

An item in the action row.

<a id="api-actionrow-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in this action row.

<a id="api-actionrow-add-item"></a>

##### `add_item(self, item: Item[Any]) -> Self`

Adds an item to this action row.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to add to the action row.

## Raises

**TypeError**

An `Item` was not passed.

**ValueError**

Maximum number of children has been exceeded (5)
or (40) for the entire view.

<a id="api-actionrow-remove-item"></a>

##### `remove_item(self, item: Item[Any]) -> Self`

Removes an item from the action row.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to remove from the action row.

<a id="api-actionrow-find-item"></a>

##### `find_item(self, id: int, /) -> Optional[Item[V]]`

Gets an item with `Item.id` set as `id`, or `None` if
not found.

> **Warning**
> This is **not the same** as `custom_id`.

## Parameters

**id: `int`**

The ID of the component.

## Returns

**Optional\[`Item`]**

The item found, or `None`.

<a id="api-actionrow-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all items from the action row.

This function returns the class instance to allow for fluent-style
chaining.

<a id="api-actionrow-button"></a>

##### `button( self, *, label: Optional[str] = None, custom_id: Optional[str] = None, disabled: bool = False, style: ButtonStyle = ButtonStyle.secondary, emoji: Optional[Union[str, Emoji, PartialEmoji]] = None, id: Optional[int] = None,) -> Callable[[ItemCallbackType[S, Button[V]]], Button[V]]`

A decorator that attaches a button to the action row.

The function being decorated should have three parameters, `self` representing
the `discord.ui.ActionRow`, the `discord.Interaction` you receive and
the `discord.ui.Button` being pressed.

> **Note**
> Buttons with a URL or a SKU cannot be created with this function.
> Consider creating a `Button` manually and adding it via
>
> - **Meth:** `ActionRow.add_item` instead. This is beacuse these buttons
>   cannot have a callback associated with them since Discord does not
>   do any processing with them.

## Parameters

**label: Optional\[`str`]**

The label of the button, if any.
Can only be up to 80 characters.

**custom\_id: Optional\[`str`]**

The ID of the button that gets received during an interaction.
It is recommended to not set this parameters to prevent conflicts.
Can only be up to 100 characters.

**style: `.ButtonStyle`**

The style of the button. Defaults to `.ButtonStyle.grey`.

**disabled: `bool`**

Whether the button is disabled or not. Defaults to `False`.

**emoji: Optional\[Union\[`str`, `.Emoji`, `.PartialEmoji`]]**

The emoji of the button. This can be in string form or a `.PartialEmoji`
or a full `.Emoji`.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-actionrow-select"></a>

##### `select( self, *, cls: Type[BaseSelectT] = Select[Any], options: List[SelectOption] = MISSING, channel_types: List[ChannelType] = MISSING, placeholder: Optional[str] = None, custom_id: str = MISSING, min_values: int = 1, max_values: int = 1, disabled: bool = False, default_values: Sequence[ValidDefaultValues] = MISSING, id: Optional[int] = None,) -> SelectCallbackDecorator[S, BaseSelectT]`

A decorator that attaches a select menu to the action row.

The function being decorated should have three parameters, `self` representing
the `discord.ui.ActionRow`, the `discord.Interaction` you receive and
the chosen select class.

To obtain the selected values inside the callback, you can use the `values` attribute of the chosen class in the callback. The list of values
will depend on the type of select menu used. View the table below for more information.

| Select Type                    | Resolved Values                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `discord.ui.Select`            | List\[`str`]                                                                                     |
| `discord.ui.UserSelect`        | List\[Union\[`discord.Member`, `discord.User`]]                                                  |
| `discord.ui.RoleSelect`        | List\[`discord.Role`]                                                                            |
| `discord.ui.MentionableSelect` | List\[Union\[`discord.Role`, `discord.Member`, `discord.User`]]                                  |
| `discord.ui.ChannelSelect`     | List\[Union\[`discord.app_commands.AppCommandChannel`, `discord.app_commands.AppCommandThread`]] |

## Example

```python3
class MyView(discord.ui.LayoutView):
    action_row = discord.ui.ActionRow()

    @action_row.select(cls=ChannelSelect, channel_types=[discord.ChannelType.text])
    async def select_channels(self, interaction: discord.Interaction, select: ChannelSelect):
        return await interaction.response.send_message(f'You selected {select.values[0].mention}')
```

## Parameters

\**cls: Union\[Type\[`discord.ui.Select`], Type\[`discord.ui.UserSelect`], Type\[`discord.ui.RoleSelect`], \**

Type\[`discord.ui.MentionableSelect`], Type\[`discord.ui.ChannelSelect`]]
The class to use for the select menu. Defaults to `discord.ui.Select`. You can use other
select types to display different select menus to the user. See the table above for the different
values you can get from each select type. Subclasses work as well, however the callback in the subclass will
get overridden.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
It is recommended not to set this parameter to prevent conflicts.
Can only be up to 100 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**options: List\[`discord.SelectOption`]**

A list of options that can be selected in this menu. This can only be used with

- **Class:** `Select` instances.
  Can only contain up to 25 items.

**channel\_types: List\[`discord.ChannelType`]**

The types of channels to show in the select menu. Defaults to all channels. This can only be used
with `ChannelSelect` instances.

**disabled: `bool`**

Whether the select is disabled or not. Defaults to `False`.

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the default values for the select menu. This cannot be used with regular `Select` instances.
If `cls` is `MentionableSelect` and `.Object` is passed, then the type must be specified in the constructor.
Number of items must be in range of `min_values` and `max_values`.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

### Button

<a id="api-button"></a>

#### `Button(Item[V])`

Represents a UI button.

> **Added in version 2.0**

## Parameters

**style: `discord.ButtonStyle`**

The style of the button.

**custom\_id: Optional\[`str`]**

The ID of the button that gets received during an interaction.
If this button is for a URL, it does not have a custom ID.
Can only be up to 100 characters.

**url: Optional\[`str`]**

The URL this button sends you to.

**disabled: `bool`**

Whether the button is disabled or not.

**label: Optional\[`str`]**

The label of the button, if any.
Can only be up to 80 characters.

**emoji: Optional\[Union\[`.PartialEmoji`, `.Emoji`, `str`]]**

The emoji of the button, if available.

**row: Optional\[`int`]**

The relative row this button belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**sku\_id: Optional\[`int`]**

The SKU ID this button sends you to. Can't be combined with `url`, `label`, `emoji`
nor `custom_id`.

> **Added in version 2.4**

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-button-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this button.

<a id="api-button-style"></a>

##### `style(self) -> ButtonStyle`

- **Class:** `discord.ButtonStyle`: The style of the button.

<a id="api-button-custom-id"></a>

##### `custom_id(self) -> Optional[str]`

Optional\[`str`]: The ID of the button that gets received during an interaction.

If this button is for a URL, it does not have a custom ID.

<a id="api-button-url"></a>

##### `url(self) -> Optional[str]`

Optional\[`str`]: The URL this button sends you to.

<a id="api-button-disabled"></a>

##### `disabled(self) -> bool`

- **Class:** `bool`: Whether the button is disabled or not.

<a id="api-button-label"></a>

##### `label(self) -> Optional[str]`

Optional\[`str`]: The label of the button, if available.

<a id="api-button-emoji"></a>

##### `emoji(self) -> Optional[PartialEmoji]`

Optional\[`.PartialEmoji`]: The emoji of the button, if available.

<a id="api-button-sku-id"></a>

##### `sku_id(self) -> Optional[int]`

Optional\[`int`]: The SKU ID this button sends you to.

> **Added in version 2.4**

### SelectMenu

<a id="api-selectmenu"></a>

#### `SelectMenu(Component)`

Represents a select menu from the Discord Bot UI Kit.

A select menu is functionally the same as a dropdown, however
on mobile it renders a bit differently.

> **Note**
> The user constructible and usable type to create a select menu is
>
> - **Class:** `discord.ui.Select` not this one.

> **Added in version 2.0**

## Attributes

**type: `ComponentType`**

The type of component.

**custom\_id: Optional\[`str`]**

The ID of the select menu that gets received during an interaction.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**options: List\[`SelectOption`]**

A list of options that can be selected in this menu.

**disabled: `bool`**

Whether the select is disabled or not.

**channel\_types: List\[`.ChannelType`]**

A list of channel types that are allowed to be chosen in this select menu.

**id: Optional\[`int`]**

The ID of this component.

> **Added in version 2.6**

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

### TextInput

<a id="api-textinput"></a>

#### `TextInput(Item[V])`

Represents a UI text input.

This a top-level layout component that can only be used in `Label`.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the value of the text input or an empty string if the value is `None`.

> **Added in version 2.0**

## Parameters

**label: Optional\[`str`]**

The label to display above the text input.
Can only be up to 45 characters.

> **Deprecated in version 2.6**
> This parameter is deprecated, use `discord.ui.Label` instead.

> **Changed in version 2.6**
> This parameter is now optional and defaults to `None`.

**custom\_id: `str`**

The ID of the text input that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**style: `discord.TextStyle`**

The style of the text input.

**placeholder: Optional\[`str`]**

The placeholder text to display when the text input is empty.
Can only be up to 100 characters.

**default: Optional\[`str`]**

The default value of the text input.
Can only be up to 4000 characters.

**required: `bool`**

Whether the text input is required.

**min\_length: Optional\[`int`]**

The minimum length of the text input.
Must be between 0 and 4000.

**max\_length: Optional\[`int`]**

The maximum length of the text input.
Must be between 1 and 4000.

**row: Optional\[`int`]**

The relative row this text input belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-textinput-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this text input.

<a id="api-textinput-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the text input that gets received during an interaction.

<a id="api-textinput-value"></a>

##### `value(self) -> str`

- **Class:** `str`: The value of the text input.

<a id="api-textinput-label"></a>

##### `label(self) -> Optional[str]`

- **Class:** `str`: The label of the text input.

<a id="api-textinput-placeholder"></a>

##### `placeholder(self) -> Optional[str]`

- **Class:** `str`: The placeholder text to display when the text input is empty.

<a id="api-textinput-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the text input is required.

<a id="api-textinput-min-length"></a>

##### `min_length(self) -> Optional[int]`

- **Class:** `int`: The minimum length of the text input.

<a id="api-textinput-max-length"></a>

##### `max_length(self) -> Optional[int]`

- **Class:** `int`: The maximum length of the text input.

<a id="api-textinput-style"></a>

##### `style(self) -> TextStyle`

- **Class:** `discord.TextStyle`: The style of the text input.

<a id="api-textinput-default"></a>

##### `default(self) -> Optional[str]`

- **Class:** `str`: The default value of the text input.

### LabelComponent

<a id="api-labelcomponent"></a>

#### `LabelComponent(Component)`

Represents a label component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a label is
>
> - **Class:** `discord.ui.Label` not this one.

> **Added in version 2.6**

## Attributes

**label: `str`**

The label text to display.

**description: Optional\[`str`]**

The description text to display below the label, if any.

**component: `Component`**

The component that this label is associated with.

**id: Optional\[`int`]**

The ID of this component.

### SectionComponent

<a id="api-sectioncomponent"></a>

#### `SectionComponent(Component)`

Represents a section from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type to create a section is `discord.ui.Section`
> not this one.

> **Added in version 2.6**

## Attributes

**children: List\[`TextDisplay`]**

The components on this section.

**accessory: `Component`**

The section accessory.

**id: Optional\[`int`]**

The ID of this component.

### ThumbnailComponent

<a id="api-thumbnailcomponent"></a>

#### `ThumbnailComponent(Component)`

Represents a Thumbnail from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type to create a thumbnail is `discord.ui.Thumbnail`
> not this one.

> **Added in version 2.6**

## Attributes

**media: `UnfurledMediaItem`**

The media for this thumbnail.

**description: Optional\[`str`]**

The description shown within this thumbnail.

**spoiler: `bool`**

Whether this thumbnail is flagged as a spoiler.

**id: Optional\[`int`]**

The ID of this component.

### TextDisplay

<a id="api-textdisplay"></a>

#### `TextDisplay(Item[V])`

Represents a UI text display.

This is a top-level layout component that can only be used on `LayoutView`,

- **Class:** `Section`, `Container`, or `Modal`.

> **Added in version 2.6**

## Parameters

**content: `str`**

The content of this text display. Up to 4000 characters.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

### MediaGalleryComponent

<a id="api-mediagallerycomponent"></a>

#### `MediaGalleryComponent(Component)`

Represents a Media Gallery component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a media gallery is
>
> - **Class:** `discord.ui.MediaGallery` not this one.

> **Added in version 2.6**

## Attributes

**items: List\[`MediaGalleryItem`]**

The items this gallery has.

**id: Optional\[`int`]**

The ID of this component.

### FileComponent

<a id="api-filecomponent"></a>

#### `FileComponent(Component)`

Represents a File component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for create a file component is
>
> - **Class:** `discord.ui.File` not this one.

> **Added in version 2.6**

## Attributes

**media: `UnfurledMediaItem`**

The unfurled attachment contents of the file.

**spoiler: `bool`**

Whether this file is flagged as a spoiler.

**id: Optional\[`int`]**

The ID of this component.

**name: Optional\[`str`]**

The displayed file name, only available when received from the API.

**size: Optional\[`int`]**

The file size in MiB, only available when received from the API.

### SeparatorComponent

<a id="api-separatorcomponent"></a>

#### `SeparatorComponent(Component)`

Represents a Separator from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a separator is
>
> - **Class:** `discord.ui.Separator` not this one.

> **Added in version 2.6**

## Attributes

**spacing: `SeparatorSpacing`**

The spacing size of the separator.

**visible: `bool`**

Whether this separator is visible and shows a divider.

**id: Optional\[`int`]**

The ID of this component.

### Container

<a id="api-container"></a>

#### `Container(Item[V])`

Represents a UI container.

This is a top-level layout component that can only be used on `LayoutView`
and can contain `ActionRow`\s, `TextDisplay`\s, `Section`\s,

- **Class:** `MediaGallery`\s, `File`\s, and `Separator`\s in it.

This can be inherited.

> **Added in version 2.6**

## Examples

```python3
import discord
from discord import ui

# you can subclass it and add components as you would add them
# in a LayoutView
class MyContainer(ui.Container):
    action_row = ui.ActionRow()

    @action_row.button(label='A button in a container!')
    async def a_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked a button!')

# or use it directly on LayoutView
class MyView(ui.LayoutView):
    container = ui.Container(ui.TextDisplay('I am a text display on a container!'))
    # or you can use your subclass:
    # container = MyContainer()
```

## Parameters

**\*children: `Item`**

The initial children of this container.

**accent\_colour: Optional\[Union\[`.Colour`, `int`]]**

The colour of the container. Defaults to `None`.

**accent\_color: Optional\[Union\[`.Colour`, `int`]]**

The color of the container. Defaults to `None`.

**spoiler: `bool`**

Whether to flag this container as a spoiler. Defaults
to `False`.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-container-children"></a>

##### `children(self) -> List[Item[V]]`

List\[`Item`]: The children of this container.

<a id="api-container-accent-colour"></a>

##### `accent_colour(self) -> Optional[Union[Colour, int]]`

Optional\[Union\[`discord.Colour`, `int`]]: The colour of the container, or `None`.

<a id="api-container-walk-children"></a>

##### `walk_children(self) -> Generator[Item[V], None, None]`

An iterator that recursively walks through all the children of this container
and its children, if applicable.

## Yields

**`Item`**

An item in the container.

<a id="api-container-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in this container.

<a id="api-container-add-item"></a>

##### `add_item(self, item: Item[Any]) -> Self`

Adds an item to this container.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to append.

## Raises

**TypeError**

An `Item` was not passed.

**ValueError**

Maximum number of children has been exceeded (40) for the entire view.

<a id="api-container-remove-item"></a>

##### `remove_item(self, item: Item[Any]) -> Self`

Removes an item from this container.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to remove from the container.

<a id="api-container-find-item"></a>

##### `find_item(self, id: int, /) -> Optional[Item[V]]`

Gets an item with `Item.id` set as `id`, or `None` if
not found.

> **Warning**
> This is **not the same** as `custom_id`.

## Parameters

**id: `int`**

The ID of the component.

## Returns

**Optional\[`Item`]**

The item found, or `None`.

<a id="api-container-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all the items from the container.

This function returns the class instance to allow for fluent-style
chaining.

### FileUploadComponent

<a id="api-fileuploadcomponent"></a>

#### `FileUploadComponent(Component)`

Represents a file upload component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a file upload is
>
> - **Class:** `discord.ui.FileUpload` not this one.

> **Added in version 2.7**

## Attributes

**custom\_id: Optional\[`str`]**

The ID of the component that gets received during an interaction.

**min\_values: `int`**

The minimum number of files that must be uploaded for this component.
Defaults to 1 and must be between 0 and 10.

**max\_values: `int`**

The maximum number of files that must be uploaded for this component.
Defaults to 1 and must be between 1 and 10.

**id: Optional\[`int`]**

The ID of this component.

**required: `bool`**

Whether the component is required.
Defaults to `True`.

<a id="api-fileuploadcomponent-type"></a>

##### `type(self) -> Literal[ComponentType.file_upload]`

- **Class:** `ComponentType`: The type of component.

### RadioGroupComponent

<a id="api-radiogroupcomponent"></a>

#### `RadioGroupComponent(Component)`

Represents a radio group component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a radio group is
>
> - **Class:** `discord.ui.RadioGroup` not this one.

> **Added in version 2.7**

## Attributes

**custom\_id: Optional\[`str`]**

The ID of the component that gets received during an interaction.

**id: Optional\[`int`]**

The ID of this component.

**required: `bool`**

Whether the component is required.
Defaults to `True`.

**options: List\[`RadioGroupOption`]**

A list of options that can be selected in this group.

<a id="api-radiogroupcomponent-type"></a>

##### `type(self) -> Literal[ComponentType.radio_group]`

- **Class:** `ComponentType`: The type of component.

### CheckboxComponent

<a id="api-checkboxcomponent"></a>

#### `CheckboxComponent(Component)`

Represents a checkbox component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a checkbox is
>
> - **Class:** `discord.ui.Checkbox` not this one.

> **Added in version 2.7**

## Attributes

**custom\_id: Optional\[`str`]**

The ID of the component that gets received during an interaction.

**id: Optional\[`int`]**

The ID of this component.

**default: `bool`**

Whether this checkbox is selected by default.

<a id="api-checkboxcomponent-type"></a>

##### `type(self) -> Literal[ComponentType.checkbox]`

- **Class:** `ComponentType`: The type of component.

### CheckboxGroupComponent

<a id="api-checkboxgroupcomponent"></a>

#### `CheckboxGroupComponent(Component)`

Represents a checkbox group component from the Discord Bot UI Kit.

This inherits from `Component`.

> **Note**
> The user constructible and usable type for creating a checkbox group is
>
> - **Class:** `discord.ui.CheckboxGroup` not this one.

> **Added in version 2.7**

## Attributes

**custom\_id: Optional\[`str`]**

The ID of the component that gets received during an interaction.

**id: Optional\[`int`]**

The ID of this component.

**required: `bool`**

Whether the component is required.
Defaults to `True`.

**min\_values: `int`**

The minimum number of options that must be selected in this component.
Must be between 0 and 10. Defaults to 0.

**max\_values: `int`**

The maximum number of options that can be selected in this component.
Must be between 1 and 10. Defaults to 1.

**options: List\[`CheckboxGroupOption`]**

A list of options that can be selected in this group.

<a id="api-checkboxgroupcomponent-type"></a>

##### `type(self) -> Literal[ComponentType.checkbox_group]`

- **Class:** `ComponentType`: The type of component.

### AppCommand

<a id="api-discord-app-commands-appcommand"></a>

#### `AppCommand(Hashable)`

Represents an application command.

In common parlance this is referred to as a "Slash Command" or a
"Context Menu Command".

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two application commands are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two application commands are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the application command's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the application command's name.

## Attributes

**id: `int`**

The application command's ID.

**application\_id: `int`**

The application command's application's ID.

**type: `discord.AppCommandType`**

The application command's type.

**name: `str`**

The application command's name.

**description: `str`**

The application command's description.

**name\_localizations: Dict\[`discord.Locale`, `str`]**

The localised names of the application command. Used for display purposes.

**description\_localizations: Dict\[`discord.Locale`, `str`]**

The localised descriptions of the application command. Used for display purposes.

**options: List\[Union\[`Argument`, `AppCommandGroup`]]**

A list of options.

**default\_member\_permissions: Optional\[`discord.Permissions`]**

The default member permissions that can run this command.

**dm\_permission: `bool`**

A boolean that indicates whether this command can be run in direct messages.

**allowed\_contexts: Optional\[`discord.app_commands.AppCommandContext`]**

The contexts that this command is allowed to be used in. Overrides the `dm_permission` attribute.

> **Added in version 2.4**

**allowed\_installs: Optional\[`discord.app_commands.AppInstallationType`]**

The installation contexts that this command is allowed to be installed in.

> **Added in version 2.4**

**guild\_id: Optional\[`int`]**

The ID of the guild this command is registered in. A value of `None`
denotes that it is a global command.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.

<a id="api-discord-app-commands-appcommand-mention"></a>

##### `mention(self) -> str`

- **Class:** `str`: Returns a string that allows you to mention the given AppCommand.

<a id="api-discord-app-commands-appcommand-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`discord.Guild`]: Returns the guild this command is registered to
if it exists.

<a id="api-discord-app-commands-appcommand-delete"></a>

##### `delete(self) -> None`

*coroutine*

Deletes the application command.

## Raises

**NotFound**

The application command was not found.

**Forbidden**

You do not have permission to delete this application command.

**HTTPException**

Deleting the application command failed.

**MissingApplicationID**

The client does not have an application ID.

<a id="api-discord-app-commands-appcommand-edit"></a>

##### `edit( self, *, name: str = MISSING, description: str = MISSING, default_member_permissions: Optional[Permissions] = MISSING, dm_permission: bool = MISSING, options: List[Union[Argument, AppCommandGroup]] = MISSING,) -> AppCommand`

*coroutine*

Edits the application command.

## Parameters

**name: `str`**

The new name for the application command.

**description: `str`**

The new description for the application command.

**default\_member\_permissions: Optional\[`discord.Permissions`]**

The new default permissions needed to use this application command.
Pass value of `None` to remove any permission requirements.

**dm\_permission: `bool`**

Indicates if the application command can be used in DMs.

**options: List\[Union\[`Argument`, `AppCommandGroup`]]**

List of new options for this application command.

## Raises

**NotFound**

The application command was not found.

**Forbidden**

You do not have permission to edit this application command.

**HTTPException**

Editing the application command failed.

**MissingApplicationID**

The client does not have an application ID.

## Returns

**`AppCommand`**

The newly edited application command.

<a id="api-discord-app-commands-appcommand-fetch-permissions"></a>

##### `fetch_permissions(self, guild: Snowflake) -> GuildAppCommandPermissions`

*coroutine*

Retrieves this command's permission in the guild.

## Parameters

**guild: `discord.abc.Snowflake`**

The guild to retrieve the permissions from.

## Raises

**Forbidden**

You do not have permission to fetch the application command's permissions.

**HTTPException**

Fetching the application command's permissions failed.

**MissingApplicationID**

The client does not have an application ID.

**NotFound**

The application command's permissions could not be found.
This can also indicate that the permissions are synced with the guild
(i.e. they are unchanged from the default).

## Returns

**`GuildAppCommandPermissions`**

An object representing the application command's permissions in the guild.

### AppCommandGroup

<a id="api-discord-app-commands-appcommandgroup"></a>

#### `AppCommandGroup`

Represents an application command subcommand.

> **Added in version 2.0**

## Attributes

**type: `discord.AppCommandOptionType`**

The type of subcommand.

**name: `str`**

The name of the subcommand.

**description: `str`**

The description of the subcommand.

**name\_localizations: Dict\[`discord.Locale`, `str`]**

The localised names of the subcommand. Used for display purposes.

**description\_localizations: Dict\[`discord.Locale`, `str`]**

The localised descriptions of the subcommand. Used for display purposes.

**options: List\[Union\[`Argument`, `AppCommandGroup`]]**

A list of options.

**parent: Union\[`AppCommand`, `AppCommandGroup`]**

The parent application command.

<a id="api-discord-app-commands-appcommandgroup-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified command name.

The qualified name includes the parent name as well. For example,
in a command like `/foo bar` the qualified name is `foo bar`.

<a id="api-discord-app-commands-appcommandgroup-mention"></a>

##### `mention(self) -> str`

- **Class:** `str`: Returns a string that allows you to mention the given AppCommandGroup.

### AppCommandChannel

<a id="api-discord-app-commands-appcommandchannel"></a>

#### `AppCommandChannel(Hashable)`

Represents an application command partially resolved channel object.

> **Added in version 2.0**

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

**id: `int`**

The ID of the channel.

**type: `discord.ChannelType`**

The type of channel.

**name: `str`**

The name of the channel.

**permissions: `discord.Permissions`**

The resolved permissions of the user who invoked
the application command in that channel.

**guild\_id: `int`**

The guild ID this channel belongs to.

**category\_id: Optional\[`int`]**

The category channel ID this channel belongs to, if applicable.

> **Added in version 2.6**

**topic: Optional\[`str`]**

The channel's topic. `None` if it doesn't exist.

> **Added in version 2.6**

**position: `int`**

The position in the channel list. This is a number that starts at 0. e.g. the
top channel is position 0.

> **Added in version 2.6**

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this channel. It may
*not* point to an existing or valid message.

> **Added in version 2.6**

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this channel. A value of `0` denotes that it is disabled.
Bots and users with `discord.Permissions.bypass_slowmode` bypass slowmode.

> **Added in version 2.6**

**nsfw: `bool`**

If the channel is marked as "not safe for work" or "age restricted".

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandchannel-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`discord.Guild`]: The channel's guild, from cache, if found.

<a id="api-discord-app-commands-appcommandchannel-flags"></a>

##### `flags(self) -> ChannelFlags`

- **Class:** `~discord.ChannelFlags`: The flags associated with this channel object.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandchannel-is-nsfw"></a>

##### `is_nsfw(self) -> bool`

- **Class:** `bool`: Checks if the channel is NSFW.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandchannel-is-news"></a>

##### `is_news(self) -> bool`

- **Class:** `bool`: Checks if the channel is a news channel.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandchannel-resolve"></a>

##### `resolve(self) -> Optional[GuildChannel]`

Resolves the application command channel to the appropriate channel
from cache if found.

## Returns

**Optional\[`.abc.GuildChannel`]**

The resolved guild channel or `None` if not found in cache.

<a id="api-discord-app-commands-appcommandchannel-fetch"></a>

##### `fetch(self) -> GuildChannel`

*coroutine*

Fetches the partial channel to a full `.abc.GuildChannel`.

## Raises

**NotFound**

The channel was not found.

**Forbidden**

You do not have the permissions required to get a channel.

**HTTPException**

Retrieving the channel failed.

## Returns

**`.abc.GuildChannel`**

The full channel.

<a id="api-discord-app-commands-appcommandchannel-mention"></a>

##### `mention(self) -> str`

- **Class:** `str`: The string that allows you to mention the channel.

<a id="api-discord-app-commands-appcommandchannel-jump-url"></a>

##### `jump_url(self) -> str`

- **Class:** `str`: Returns a URL that allows the client to jump to the channel.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandchannel-created-at"></a>

##### `created_at(self) -> datetime`

- **Class:** `datetime.datetime`: An aware timestamp of when this channel was created in UTC.

### AppCommandThread

<a id="api-discord-app-commands-appcommandthread"></a>

#### `AppCommandThread(Hashable)`

Represents an application command partially resolved thread object.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two thread are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two thread are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the thread's hash.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the thread's name.

## Attributes

**id: `int`**

The ID of the thread.

**type: `discord.ChannelType`**

The type of thread.

**name: `str`**

The name of the thread.

**parent\_id: `int`**

The parent text channel ID this thread belongs to.

**owner\_id: `int`**

The user's ID that created this thread.

> **Added in version 2.6**

**last\_message\_id: Optional\[`int`]**

The last message ID of the message sent to this thread. It may
*not* point to an existing or valid message.

> **Added in version 2.6**

**slowmode\_delay: `int`**

The number of seconds a member must wait between sending messages
in this thread. A value of `0` denotes that it is disabled.
Bots and users with `discord.Permissions.bypass_slowmode` bypass slowmode.

> **Added in version 2.6**

**message\_count: `int`**

An approximate number of messages in this thread.

> **Added in version 2.6**

**member\_count: `int`**

An approximate number of members in this thread. This caps at 50.

> **Added in version 2.6**

**total\_message\_sent: `int`**

The total number of messages sent, including deleted messages.

> **Added in version 2.6**

**permissions: `discord.Permissions`**

The resolved permissions of the user who invoked
the application command in that thread.

**guild\_id: `int`**

The guild ID this thread belongs to.

**archived: `bool`**

Whether the thread is archived.

**locked: `bool`**

Whether the thread is locked.

**invitable: `bool`**

Whether non-moderators can add other non-moderators to this thread.
This is always `True` for public threads.

**archiver\_id: Optional\[`int`]**

The user's ID that archived this thread.

**auto\_archive\_duration: `int`**

The duration in minutes until the thread is automatically hidden from the channel list.
Usually a value of 60, 1440, 4320 and 10080.

**archive\_timestamp: `datetime.datetime`**

An aware timestamp of when the thread's archived status was last updated in UTC.

<a id="api-discord-app-commands-appcommandthread-guild"></a>

##### `guild(self) -> Optional[Guild]`

Optional\[`discord.Guild`]: The channel's guild, from cache, if found.

<a id="api-discord-app-commands-appcommandthread-applied-tags"></a>

##### `applied_tags(self) -> List[ForumTag]`

List\[`discord.ForumTag`]: A list of tags applied to this thread.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandthread-parent"></a>

##### `parent(self) -> Optional[Union[ForumChannel, TextChannel]]`

Optional\[Union\[`discord.ForumChannel`, `discord.TextChannel`]]: The parent channel
this thread belongs to.

<a id="api-discord-app-commands-appcommandthread-flags"></a>

##### `flags(self) -> ChannelFlags`

- **Class:** `~discord.ChannelFlags`: The flags associated with this thread.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandthread-owner"></a>

##### `owner(self) -> Optional[Member]`

Optional\[`discord.Member`]: The member this thread belongs to.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandthread-mention"></a>

##### `mention(self) -> str`

- **Class:** `str`: The string that allows you to mention the thread.

<a id="api-discord-app-commands-appcommandthread-jump-url"></a>

##### `jump_url(self) -> str`

- **Class:** `str`: Returns a URL that allows the client to jump to the thread.

> **Added in version 2.6**

<a id="api-discord-app-commands-appcommandthread-created-at"></a>

##### `created_at(self) -> Optional[datetime]`

An aware timestamp of when the thread was created in UTC.

> **Note**
> This timestamp only exists for threads created after 9 January 2022, otherwise returns `None`.

<a id="api-discord-app-commands-appcommandthread-resolve"></a>

##### `resolve(self) -> Optional[Thread]`

Resolves the application command channel to the appropriate channel
from cache if found.

## Returns

**Optional\[`.abc.GuildChannel`]**

The resolved guild channel or `None` if not found in cache.

<a id="api-discord-app-commands-appcommandthread-fetch"></a>

##### `fetch(self) -> Thread`

*coroutine*

Fetches the partial channel to a full `discord.Thread`.

## Raises

**NotFound**

The thread was not found.

**Forbidden**

You do not have the permissions required to get a thread.

**HTTPException**

Retrieving the thread failed.

## Returns

**`discord.Thread`**

The full thread.

### AppCommandPermissions

<a id="api-discord-app-commands-appcommandpermissions"></a>

#### `AppCommandPermissions`

Represents the permissions for an application command.

> **Added in version 2.0**

## Attributes

**guild: `discord.Guild`**

The guild associated with this permission.

**id: `int`**

The ID of the permission target, such as a role, channel, or guild.
The special `guild_id - 1` sentinel is used to represent "all channels".

**target: Any**

The role, user, or channel associated with this permission. This could also be the `AllChannels` sentinel type.
Falls back to `discord.Object` if the target could not be found in the cache.

**type: `.AppCommandPermissionType`**

The type of permission.

**permission: `bool`**

The permission value. `True` for allow, `False` for deny.

### AppCommandContext

<a id="api-discord-app-commands-appcommandcontext"></a>

#### `AppCommandContext`

Wraps up the Discord `discord.app_commands.Command` execution context.

> **Added in version 2.4**

## Parameters

**guild: Optional\[`bool`]**

Whether the context allows usage in a guild.

**dm\_channel: Optional\[`bool`]**

Whether the context allows usage in a DM channel.

**private\_channel: Optional\[`bool`]**

Whether the context allows usage in a DM or a GDM channel.

<a id="api-discord-app-commands-appcommandcontext-guild"></a>

##### `guild(self) -> bool`

- **Class:** `bool`: Whether the context allows usage in a guild.

<a id="api-discord-app-commands-appcommandcontext-dm-channel"></a>

##### `dm_channel(self) -> bool`

- **Class:** `bool`: Whether the context allows usage in a DM channel.

<a id="api-discord-app-commands-appcommandcontext-private-channel"></a>

##### `private_channel(self) -> bool`

- **Class:** `bool`: Whether the context allows usage in a DM or a GDM channel.

### AppInstallationType

<a id="api-discord-app-commands-appinstallationtype"></a>

#### `AppInstallationType`

Represents the installation location of an application command.

> **Added in version 2.4**

## Parameters

**guild: Optional\[`bool`]**

Whether the integration is a guild install.

**user: Optional\[`bool`]**

Whether the integration is a user install.

<a id="api-discord-app-commands-appinstallationtype-guild"></a>

##### `guild(self) -> bool`

- **Class:** `bool`: Whether the integration is a guild install.

<a id="api-discord-app-commands-appinstallationtype-user"></a>

##### `user(self) -> bool`

- **Class:** `bool`: Whether the integration is a user install.

### GuildAppCommandPermissions

<a id="api-discord-app-commands-guildappcommandpermissions"></a>

#### `GuildAppCommandPermissions`

Represents the permissions for an application command in a guild.

> **Added in version 2.0**

## Attributes

**application\_id: `int`**

The application ID.

**command: `.AppCommand`**

The application command associated with the permissions.

**id: `int`**

ID of the command or the application ID.
When this is the application ID instead of a command ID,
the permissions apply to all commands that do not contain explicit overwrites.

**guild\_id: `int`**

The guild ID associated with the permissions.

**permissions: List\[`AppCommandPermissions`]**

The permissions, this is a max of 100.

<a id="api-discord-app-commands-guildappcommandpermissions-guild"></a>

##### `guild(self) -> Guild`

- **Class:** `~discord.Guild`: The guild associated with the permissions.

### Argument

<a id="api-discord-app-commands-argument"></a>

#### `Argument`

Represents an application command argument.

> **Added in version 2.0**

## Attributes

**type: `discord.AppCommandOptionType`**

The type of argument.

**name: `str`**

The name of the argument.

**description: `str`**

The description of the argument.

**name\_localizations: Dict\[`discord.Locale`, `str`]**

The localised names of the argument. Used for display purposes.

**description\_localizations: Dict\[`discord.Locale`, `str`]**

The localised descriptions of the argument. Used for display purposes.

**required: `bool`**

Whether the argument is required.

**choices: List\[`Choice`]**

A list of choices for the command to choose from for this argument.

**parent: Union\[`AppCommand`, `AppCommandGroup`]**

The parent application command that has this argument.

**channel\_types: List\[`discord.ChannelType`]**

The channel types that are allowed for this parameter.

**min\_value: Optional\[Union\[`int`, `float`]]**

The minimum supported value for this parameter.

**max\_value: Optional\[Union\[`int`, `float`]]**

The maximum supported value for this parameter.

**min\_length: Optional\[`int`]**

The minimum allowed length for this parameter.

**max\_length: Optional\[`int`]**

The maximum allowed length for this parameter.

**autocomplete: `bool`**

Whether the argument has autocomplete.

### AllChannels

<a id="api-discord-app-commands-allchannels"></a>

#### `AllChannels`

Represents all channels for application command permissions.

> **Added in version 2.0**

## Attributes

**guild: `discord.Guild`**

The guild the application command permission is for.

<a id="api-discord-app-commands-allchannels-id"></a>

##### `id(self) -> int`

- **Class:** `int`: The ID sentinel used to represent all channels. Equivalent to the guild's ID minus 1.

## Data Classes

Similar to [discord\_api\_data](https://discordpy.readthedocs.io/api.html#discord-api-data), these can be received and constructed by users.

### SelectOption

<a id="api-selectoption"></a>

#### `SelectOption(BaseOption)`

Represents a select menu's option.

These can be created by users.

> **Added in version 2.0**

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**emoji: Optional\[Union\[`str`, `Emoji`, `PartialEmoji`]]**

The emoji of the option, if available.

**default: `bool`**

Whether this option is selected by default.

## Attributes

**label: `str`**

The label of the option. This is displayed to users.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the
label.

**description: Optional\[`str`]**

An additional description of the option, if any.

**default: `bool`**

Whether this option is selected by default.

<a id="api-selectoption-emoji"></a>

##### `emoji(self) -> Optional[PartialEmoji]`

Optional\[`.PartialEmoji`]: The emoji of the option, if available.

### SelectDefaultValue

<a id="api-selectdefaultvalue"></a>

#### `SelectDefaultValue`

Represents a select menu's default value.

These can be created by users.

> **Added in version 2.4**

## Parameters

**id: `int`**

The id of a role, user, or channel.

**type: `SelectDefaultValueType`**

The type of value that `id` represents.

<a id="api-selectdefaultvalue-type"></a>

##### `type(self) -> SelectDefaultValueType`

- **Class:** `SelectDefaultValueType`: The type of value that `id` represents.

<a id="api-selectdefaultvalue-from-channel"></a>

##### `from_channel(cls, channel: Snowflake, /) -> Self`

Creates a `SelectDefaultValue` with the type set to `SelectDefaultValueType.channel`.

## Parameters

**channel: `discord.abc.Snowflake`**

The channel to create the default value for.

## Returns

**`SelectDefaultValue`**

The default value created with the channel.

<a id="api-selectdefaultvalue-from-role"></a>

##### `from_role(cls, role: Snowflake, /) -> Self`

Creates a `SelectDefaultValue` with the type set to `SelectDefaultValueType.role`.

## Parameters

**role: `discord.abc.Snowflake`**

The role to create the default value for.

## Returns

**`SelectDefaultValue`**

The default value created with the role.

<a id="api-selectdefaultvalue-from-user"></a>

##### `from_user(cls, user: Snowflake, /) -> Self`

Creates a `SelectDefaultValue` with the type set to `SelectDefaultValueType.user`.

## Parameters

**user: `discord.abc.Snowflake`**

The user to create the default value for.

## Returns

**`SelectDefaultValue`**

The default value created with the user.

### Choice

<a id="api-discord-app-commands-choice"></a>

#### `Choice(Generic[ChoiceT])`

Represents an application command argument choice.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two choices are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two choices are not equal.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the choice's hash.

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the choice. Used for display purposes.
Can only be up to 100 characters.

**name\_localizations: Dict\[`discord.Locale`, `str`]**

The localised names of the choice. Used for display purposes.

**value: Union\[`int`, `str`, `float`]**

The value of the choice. If it's a string, it can only be
up to 100 characters long.

### UnfurledMediaItem

<a id="api-unfurledmediaitem"></a>

#### `UnfurledMediaItem(AssetMixin)`

Represents an unfurled media item.

> **Added in version 2.6**

## Parameters

**url: `str`**

The URL of this media item. This can be an arbitrary url or a reference to a local
file uploaded as an attachment within the message, which can be accessed with the
`attachment://<filename>` format.

## Attributes

**url: `str`**

The URL of this media item.

**proxy\_url: Optional\[`str`]**

The proxy URL. This is a cached version of the `.url` in the
case of images. When the message is deleted, this URL might be valid for a few minutes
or not valid at all.

**height: Optional\[`int`]**

The media item's height, in pixels. Only applicable to images and videos.

**width: Optional\[`int`]**

The media item's width, in pixels. Only applicable to images and videos.

**content\_type: Optional\[`str`]**

The media item's [media type](https://en.wikipedia.org/wiki/Media_type)

**placeholder: Optional\[`str`]**

The media item's placeholder.

**loading\_state: Optional\[`MediaItemLoadingState`]**

The loading state of this media item.

**attachment\_id: Optional\[`int`]**

The attachment id this media item points to, only available if the url points to a local file
uploaded within the component message.

<a id="api-unfurledmediaitem-flags"></a>

##### `flags(self) -> AttachmentFlags`

- **Class:** `AttachmentFlags`: This media item's flags.

### MediaGalleryItem

<a id="api-mediagalleryitem"></a>

#### `MediaGalleryItem`

Represents a `MediaGalleryComponent` media item.

> **Added in version 2.6**

## Parameters

**media: Union\[`str`, `discord.File`, `UnfurledMediaItem`]**

The media item data. This can be a string representing a local
file uploaded as an attachment in the message, which can be accessed
using the `attachment://<filename>` format, or an arbitrary url.

**description: Optional\[`str`]**

The description to show within this item. Up to 256 characters. Defaults
to `None`.

**spoiler: `bool`**

Whether this item should be flagged as a spoiler.

<a id="api-mediagalleryitem-media"></a>

##### `media(self) -> UnfurledMediaItem`

- **Class:** `UnfurledMediaItem`: This item's media data.

### RadioGroupOption

<a id="api-radiogroupoption"></a>

#### `RadioGroupOption(BaseOption)`

Represents a radio group's option

These can be created by users.

> **Added in version 2.7**

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**default: `bool`**

Whether this option is selected by default.

## Attributes

**label: `str`**

The label of the option. This is displayed to users.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the
label.

**description: Optional\[`str`]**

An additional description of the option, if any.

**default: `bool`**

Whether this option is selected by default.

### CheckboxGroupOption

<a id="api-checkboxgroupoption"></a>

#### `CheckboxGroupOption(BaseOption)`

Represents a checkbox group's option

These can be created by users.

> **Added in version 2.7**

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**default: `bool`**

Whether this option is selected by default.

## Attributes

**label: `str`**

The label of the option. This is displayed to users.

**value: `str`**

The value of the option. This is not displayed to users.
If not provided when constructed then it defaults to the
label.

**description: Optional\[`str`]**

An additional description of the option, if any.

**default: `bool`**

Whether this option is selected by default.

## Enumerations

<a id="class-interactiontype"></a>

#### `InteractionType`

Specifies the type of `Interaction`.

> **Added in version 2.0**

<a id="attribute-ping"></a>

##### `ping`

Represents Discord pinging to see if the interaction response server is alive.

<a id="attribute-application-command"></a>

##### `application_command`

Represents a slash command interaction.

<a id="attribute-component"></a>

##### `component`

Represents a component based interaction, i.e. using the Discord Bot UI Kit.

<a id="attribute-autocomplete"></a>

##### `autocomplete`

Represents an auto complete interaction.

<a id="attribute-modal-submit"></a>

##### `modal_submit`

Represents submission of a modal interaction.

<a id="class-interactionresponsetype"></a>

#### `InteractionResponseType`

Specifies the response type for the interaction.

> **Added in version 2.0**

<a id="attribute-pong"></a>

##### `pong`

Pongs the interaction when given a ping.

See also `InteractionResponse.pong`

<a id="attribute-channel-message"></a>

##### `channel_message`

Respond to the interaction with a message.

See also `InteractionResponse.send_message`

<a id="attribute-deferred-channel-message"></a>

##### `deferred_channel_message`

Responds to the interaction with a message at a later time.

See also `InteractionResponse.defer`

<a id="attribute-deferred-message-update"></a>

##### `deferred_message_update`

Acknowledges the component interaction with a promise that
the message will update later (though there is no need to actually update the message).

See also `InteractionResponse.defer`

<a id="attribute-message-update"></a>

##### `message_update`

Responds to the interaction by editing the message.

See also `InteractionResponse.edit_message`

<a id="attribute-autocomplete-result"></a>

##### `autocomplete_result`

Responds to the autocomplete interaction with suggested choices.

See also `InteractionResponse.autocomplete`

<a id="attribute-modal"></a>

##### `modal`

Responds to the interaction with a modal.

See also `InteractionResponse.send_modal`

<a id="class-componenttype"></a>

#### `ComponentType`

Represents the component type of a component.

> **Added in version 2.0**

<a id="attribute-action-row"></a>

##### `action_row`

Represents a component which holds different components in a row.

<a id="attribute-button"></a>

##### `button`

Represents a button component.

<a id="attribute-text-input"></a>

##### `text_input`

Represents a text box component.

<a id="attribute-select"></a>

##### `select`

Represents a select component.

<a id="attribute-string-select"></a>

##### `string_select`

An alias to `select`. Represents a default select component.

<a id="attribute-user-select"></a>

##### `user_select`

Represents a user select component.

<a id="attribute-role-select"></a>

##### `role_select`

Represents a role select component.

<a id="attribute-mentionable-select"></a>

##### `mentionable_select`

Represents a select in which both users and roles can be selected.

<a id="attribute-channel-select"></a>

##### `channel_select`

Represents a channel select component.

<a id="attribute-section"></a>

##### `section`

Represents a component which holds different components in a section.

> **Added in version 2.6**

<a id="attribute-text-display"></a>

##### `text_display`

Represents a text display component.

> **Added in version 2.6**

<a id="attribute-thumbnail"></a>

##### `thumbnail`

Represents a thumbnail component.

> **Added in version 2.6**

<a id="attribute-media-gallery"></a>

##### `media_gallery`

Represents a media gallery component.

> **Added in version 2.6**

<a id="attribute-file"></a>

##### `file`

Represents a file component.

> **Added in version 2.6**

<a id="attribute-separator"></a>

##### `separator`

Represents a separator component.

> **Added in version 2.6**

<a id="attribute-container"></a>

##### `container`

Represents a component which holds different components in a container.

> **Added in version 2.6**

<a id="attribute-label"></a>

##### `label`

Represents a label container component, usually in a modal.

> **Added in version 2.6**

<a id="attribute-file-upload"></a>

##### `file_upload`

Represents a file upload component, usually in a modal.

> **Added in version 2.7**

<a id="attribute-radio-group"></a>

##### `radio_group`

Represents a radio group component.

> **Added in version 2.7**

<a id="attribute-checkbox-group"></a>

##### `checkbox_group`

Represents a checkbox group component.

> **Added in version 2.7**

<a id="attribute-checkbox"></a>

##### `checkbox`

Represents a checkbox component.

> **Added in version 2.7**

<a id="class-buttonstyle"></a>

#### `ButtonStyle`

Represents the style of the button component.

> **Added in version 2.0**

<a id="attribute-primary"></a>

##### `primary`

Represents a blurple button for the primary action.

<a id="attribute-secondary"></a>

##### `secondary`

Represents a grey button for the secondary action.

<a id="attribute-success"></a>

##### `success`

Represents a green button for a successful action.

<a id="attribute-danger"></a>

##### `danger`

Represents a red button for a dangerous action.

<a id="attribute-link"></a>

##### `link`

Represents a link button.

<a id="attribute-premium"></a>

##### `premium`

Represents a button denoting that buying a SKU is
required to perform this action.

> **Added in version 2.4**

<a id="attribute-blurple"></a>

##### `blurple`

An alias for `primary`.

<a id="attribute-grey"></a>

##### `grey`

An alias for `secondary`.

<a id="attribute-gray"></a>

##### `gray`

An alias for `secondary`.

<a id="attribute-green"></a>

##### `green`

An alias for `success`.

<a id="attribute-red"></a>

##### `red`

An alias for `danger`.

<a id="attribute-url"></a>

##### `url`

An alias for `link`.

<a id="class-textstyle"></a>

#### `TextStyle`

Represents the style of the text box component.

> **Added in version 2.0**

<a id="attribute-short"></a>

##### `short`

Represents a short text box.

<a id="attribute-paragraph"></a>

##### `paragraph`

Represents a long form text box.

<a id="attribute-long"></a>

##### `long`

An alias for `paragraph`.

<a id="class-appcommandoptiontype"></a>

#### `AppCommandOptionType`

The application command's option type. This is usually the type of parameter an application command takes.

> **Added in version 2.0**

<a id="attribute-subcommand"></a>

##### `subcommand`

A subcommand.

<a id="attribute-subcommand-group"></a>

##### `subcommand_group`

A subcommand group.

<a id="attribute-string"></a>

##### `string`

A string parameter.

<a id="attribute-integer"></a>

##### `integer`

A integer parameter.

<a id="attribute-boolean"></a>

##### `boolean`

A boolean parameter.

<a id="attribute-user"></a>

##### `user`

A user parameter.

<a id="attribute-channel"></a>

##### `channel`

A channel parameter.

<a id="attribute-role"></a>

##### `role`

A role parameter.

<a id="attribute-mentionable"></a>

##### `mentionable`

A mentionable parameter.

<a id="attribute-number"></a>

##### `number`

A number parameter.

<a id="attribute-attachment"></a>

##### `attachment`

An attachment parameter.

<a id="class-appcommandtype"></a>

#### `AppCommandType`

The type of application command.

> **Added in version 2.0**

<a id="attribute-chat-input"></a>

##### `chat_input`

A slash command.

<a id="attribute-user"></a>

##### `user`

A user context menu command.

<a id="attribute-message"></a>

##### `message`

A message context menu command.

<a id="class-appcommandpermissiontype"></a>

#### `AppCommandPermissionType`

The application command's permission type.

> **Added in version 2.0**

<a id="attribute-role"></a>

##### `role`

The permission is for a role.

<a id="attribute-channel"></a>

##### `channel`

The permission is for one or all channels.

<a id="attribute-user"></a>

##### `user`

The permission is for a user.

<a id="class-separatorspacing"></a>

#### `SeparatorSpacing`

The separator's size type.

> **Added in version 2.6**

<a id="attribute-small"></a>

##### `small`

A small separator.

<a id="attribute-large"></a>

##### `large`

A large separator.

<a id="discord-ui-kit"></a>

## Bot UI Kit

The library has helpers to aid in creating component-based UIs. These are all in the `discord.ui` package.

### View

<a id="api-discord-ui-view"></a>

#### `View(BaseView)`

Represents a UI view.

This object must be inherited to create a UI within Discord.

> **Added in version 2.0**

## Parameters

**timeout: Optional\[`float`]**

Timeout in seconds from last interaction with the UI before no longer accepting input.
If `None` then there is no timeout.

### LayoutView

<a id="api-discord-ui-layoutview"></a>

#### `LayoutView(BaseView)`

Represents a layout view for components.

This object must be inherited to create a UI within Discord.

This differs from a `View` in that it supports all component types
and uses what Discord refers to as "v2 components".

You can find usage examples in the [repository](https://github.com/Rapptz/discord.py/tree/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/examples)

> **Added in version 2.6**

## Parameters

**timeout: Optional\[`float`]**

Timeout in seconds from last interaction with the UI before no longer accepting input.
If `None` then there is no timeout.

<a id="api-discord-ui-layoutview-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in the view's items.

A view is allowed to have a maximum of 4000 display characters across all its items.

### Modal

<a id="api-discord-ui-modal"></a>

#### `Modal(BaseView)`

Represents a UI modal.

This object must be inherited to create a modal popup window within discord.

> **Added in version 2.0**

## Examples

```python3
import discord
from discord import ui

class Questionnaire(ui.Modal, title='Questionnaire Response'):
    name = ui.Label(text='Name', component=ui.TextInput())
    answer = ui.Label(text='Answer', component=ui.TextInput(style=discord.TextStyle.paragraph))

    async def on_submit(self, interaction: discord.Interaction):
        await interaction.response.send_message(f'Thanks for your response, {self.name.component.value}!', ephemeral=True)
```

## Parameters

**title: `str`**

The title of the modal.
Can only be up to 45 characters.

**timeout: Optional\[`float`]**

Timeout in seconds from last interaction with the UI before no longer accepting input.
If `None` then there is no timeout.

**custom\_id: `str`**

The ID of the modal that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

## Attributes

**title: `str`**

The title of the modal.

**custom\_id: `str`**

The ID of the modal that gets received during an interaction.

<a id="api-discord-ui-modal-on-submit"></a>

##### `on_submit(self, interaction: Interaction[ClientT], /) -> None`

*coroutine*

Called when the modal is submitted.

## Parameters

**interaction: `.Interaction`**

The interaction that submitted this modal.

<a id="api-discord-ui-modal-on-error"></a>

##### `on_error(self, interaction: Interaction[ClientT], error: Exception, /) -> None`

*coroutine*

A callback that is called when `on_submit`
fails with an error.

The default implementation logs to the library logger.

## Parameters

**interaction: `discord.Interaction`**

The interaction that led to the failure.

**error: `Exception`**

The exception that was raised.

### Item

<a id="api-discord-ui-item"></a>

#### `Item(Generic[V])`

Represents the base UI item that all UI components inherit from.

The current UI items supported are:

- `discord.ui.Button`
- `discord.ui.Select`
- `discord.ui.TextInput`
- `discord.ui.ActionRow`
- `discord.ui.Container`
- `discord.ui.File`
- `discord.ui.MediaGallery`
- `discord.ui.Section`
- `discord.ui.Separator`
- `discord.ui.TextDisplay`
- `discord.ui.Thumbnail`
- `discord.ui.Label`
- `discord.ui.RadioGroup`
- `discord.ui.CheckboxGroup`
- `discord.ui.Checkbox`

> **Added in version 2.0**

<a id="api-discord-ui-item-view"></a>

##### `view(self) -> Optional[V]`

Optional\[Union\[`View`, `LayoutView`]]: The underlying view for this item.

<a id="api-discord-ui-item-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-item-parent"></a>

##### `parent(self) -> Optional[Item[V]]`

Optional\[`Item`]: This item's parent, if applicable. Only available on items with children.

> **Added in version 2.6**

<a id="api-discord-ui-item-callback"></a>

##### `callback(self, interaction: Interaction[ClientT]) -> Any`

*coroutine*

The callback associated with this UI item.

This can be overridden by subclasses.

## Parameters

**interaction: `.Interaction`**

The interaction that triggered this UI item.

<a id="api-discord-ui-item-interaction-check"></a>

##### `interaction_check(self, interaction: Interaction[ClientT], /) -> bool`

*coroutine*

A callback that is called when an interaction happens within this item
that checks whether the callback should be processed.

This is useful to override if, for example, you want to ensure that the
interaction author is a given user.

The default implementation of this returns `True`.

> **Note**
> If an exception occurs within the body then the check
> is considered a failure and `View.on_error`
> (or `LayoutView.on_error`) is called.
>
> For `discord.ui.DynamicItem` this does not call the `on_error`
> handler.

> **Added in version 2.4**

## Parameters

**interaction: `discord.Interaction`**

The interaction that occurred.

## Returns

**`bool`**

Whether the callback should be called.

### DynamicItem

<a id="api-discord-ui-dynamicitem"></a>

#### `DynamicItem(Generic[BaseT], Item[Union[View, LayoutView]])`

Represents an item with a dynamic `custom_id` that can be used to store state within
that `custom_id`.

The `custom_id` parsing is done using the `re` module by passing a `template`
parameter to the class parameter list.

This item is generated every time the component is dispatched. This means that
any variable that holds an instance of this class will eventually be out of date
and should not be used long term. Their only purpose is to act as a "template"
for the actual dispatched item.

When this item is generated, `view` is set to a regular `View` instance,
but to a `LayoutView` if the component was sent with one, this is obtained from
the original message given from the interaction. This means that custom view subclasses
cannot be accessed from this item.

> **Added in version 2.4**

## Parameters

**item: `Item`**

The item to wrap with dynamic custom ID parsing.

**template: Union\[`str`, `re.Pattern`]**

The template to use for parsing the `custom_id`. This can be a string or a compiled
regular expression. This must be passed as a keyword argument to the class creation.

**row: Optional\[`int`]**

The relative row this button belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

## Attributes

**item: `Item`**

The item that is wrapped with dynamic custom ID parsing.

<a id="api-discord-ui-dynamicitem-template"></a>

##### `template(self) -> re.Pattern[str]`

`re.Pattern`: The compiled regular expression that is used to parse the `custom_id`.

<a id="api-discord-ui-dynamicitem-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the dynamic item that gets received during an interaction.

<a id="api-discord-ui-dynamicitem-from-custom-id"></a>

##### `from_custom_id( cls: Type[Self], interaction: Interaction[ClientT], item: Item[Any], match: re.Match[str], /) -> Self`

*coroutine*

A classmethod that is called when the `custom_id` of a component matches the
`template` of the class. This is called when the component is dispatched.

It must return a new instance of the `DynamicItem`.

Subclasses *must* implement this method.

Exceptions raised in this method are logged and ignored.

> **Warning**
> This method is called before the callback is dispatched, therefore
> it means that it is subject to the same timing restrictions as the callback.
> Ergo, you must reply to an interaction within 3 seconds of it being
> dispatched.

## Parameters

**interaction: `discord.Interaction`**

The interaction that the component belongs to.

**item: `discord.ui.Item`**

The base item that is being dispatched.

**match: `re.Match`**

The match object that was created from the `template`
matching the `custom_id`.

## Returns

**`DynamicItem`**

The new instance of the `DynamicItem` with information
from the `match` object.

### Button

<a id="api-discord-ui-button"></a>

#### `Button(Item[V])`

Represents a UI button.

> **Added in version 2.0**

## Parameters

**style: `discord.ButtonStyle`**

The style of the button.

**custom\_id: Optional\[`str`]**

The ID of the button that gets received during an interaction.
If this button is for a URL, it does not have a custom ID.
Can only be up to 100 characters.

**url: Optional\[`str`]**

The URL this button sends you to.

**disabled: `bool`**

Whether the button is disabled or not.

**label: Optional\[`str`]**

The label of the button, if any.
Can only be up to 80 characters.

**emoji: Optional\[Union\[`.PartialEmoji`, `.Emoji`, `str`]]**

The emoji of the button, if available.

**row: Optional\[`int`]**

The relative row this button belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**sku\_id: Optional\[`int`]**

The SKU ID this button sends you to. Can't be combined with `url`, `label`, `emoji`
nor `custom_id`.

> **Added in version 2.4**

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-button-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this button.

<a id="api-discord-ui-button-style"></a>

##### `style(self) -> ButtonStyle`

- **Class:** `discord.ButtonStyle`: The style of the button.

<a id="api-discord-ui-button-custom-id"></a>

##### `custom_id(self) -> Optional[str]`

Optional\[`str`]: The ID of the button that gets received during an interaction.

If this button is for a URL, it does not have a custom ID.

<a id="api-discord-ui-button-url"></a>

##### `url(self) -> Optional[str]`

Optional\[`str`]: The URL this button sends you to.

<a id="api-discord-ui-button-disabled"></a>

##### `disabled(self) -> bool`

- **Class:** `bool`: Whether the button is disabled or not.

<a id="api-discord-ui-button-label"></a>

##### `label(self) -> Optional[str]`

Optional\[`str`]: The label of the button, if available.

<a id="api-discord-ui-button-emoji"></a>

##### `emoji(self) -> Optional[PartialEmoji]`

Optional\[`.PartialEmoji`]: The emoji of the button, if available.

<a id="api-discord-ui-button-sku-id"></a>

##### `sku_id(self) -> Optional[int]`

Optional\[`int`]: The SKU ID this button sends you to.

> **Added in version 2.4**

<a id="api-discord-ui-button"></a>

#### `button( *, label: Optional[str] = None, custom_id: Optional[str] = None, disabled: bool = False, style: ButtonStyle = ButtonStyle.secondary, emoji: Optional[Union[str, Emoji, PartialEmoji]] = None, row: Optional[int] = None, id: Optional[int] = None,) -> Callable[[ItemCallbackType[S, Button[V]]], Button[V]]`

A decorator that attaches a button to a component.

The function being decorated should have three parameters, `self` representing
the `discord.ui.View`, the `discord.Interaction` you receive and
the `discord.ui.Button` being pressed.

> **Note**
> Buttons with a URL or an SKU cannot be created with this function.
> Consider creating a `Button` manually instead.
> This is because these buttons cannot have a callback
> associated with them since Discord does not do any processing
> with them.

## Parameters

**label: Optional\[`str`]**

The label of the button, if any.
Can only be up to 80 characters.

**custom\_id: Optional\[`str`]**

The ID of the button that gets received during an interaction.
It is recommended not to set this parameter to prevent conflicts.
Can only be up to 100 characters.

**style: `.ButtonStyle`**

The style of the button. Defaults to `.ButtonStyle.grey`.

**disabled: `bool`**

Whether the button is disabled or not. Defaults to `False`.

**emoji: Optional\[Union\[`str`, `.Emoji`, `.PartialEmoji`]]**

The emoji of the button. This can be in string form or a `.PartialEmoji`
or a full `.Emoji`.

**row: Optional\[`int`]**

The relative row this button belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

> **Added in version 2.6**

### Select Menus

The library provides classes to help create the different types of select menus.

##### Select

<a id="api-discord-ui-select"></a>

#### `Select(BaseSelect[V])`

Represents a UI select menu with a list of custom options. This is represented
to the user as a dropdown menu.

> **Added in version 2.0**

## Parameters

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**options: List\[`discord.SelectOption`]**

A list of options that can be selected in this menu.
Can only contain up to 25 items.

**disabled: `bool`**

Whether the select is disabled or not.

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-select-values"></a>

##### `values(self) -> List[str]`

List\[`str`]: A list of values that have been selected by the user.

<a id="api-discord-ui-select-type"></a>

##### `type(self) -> Literal[ComponentType.string_select]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-select-options"></a>

##### `options(self) -> List[SelectOption]`

List\[`discord.SelectOption`]: A list of options that can be selected in this menu.

<a id="api-discord-ui-select-add-option"></a>

##### `add_option( self, *, label: str, value: str = MISSING, description: Optional[str] = None, emoji: Optional[Union[str, Emoji, PartialEmoji]] = None, default: bool = False,) -> None`

Adds an option to the select menu.

To append a pre-existing `discord.SelectOption` use the

- **Meth:** `append_option` method instead.

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not given, defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**emoji: Optional\[Union\[`str`, `.Emoji`, `.PartialEmoji`]]**

The emoji of the option, if available. This can either be a string representing
the custom or unicode emoji or an instance of `.PartialEmoji` or `.Emoji`.

**default: `bool`**

Whether this option is selected by default.

## Raises

**ValueError**

The number of options exceeds 25.

<a id="api-discord-ui-select-append-option"></a>

##### `append_option(self, option: SelectOption) -> None`

Appends an option to the select menu.

## Parameters

**option: `discord.SelectOption`**

The option to append to the select menu.

## Raises

**ValueError**

The number of options exceeds 25.

##### ChannelSelect

<a id="api-discord-ui-channelselect"></a>

#### `ChannelSelect(BaseSelect[V])`

Represents a UI select menu with a list of predefined options with the current channels in the guild.

Please note that if you use this in a private message with a user, no channels will be displayed to the user.

> **Added in version 2.1**

## Parameters

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**channel\_types: List\[`discord.ChannelType`]**

The types of channels to show in the select menu. Defaults to all channels.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**disabled: `bool`**

Whether the select is disabled or not.

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the channels that should be selected by default.
Number of items must be in range of `min_values` and `max_values`.

> **Added in version 2.4**

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-channelselect-type"></a>

##### `type(self) -> Literal[ComponentType.channel_select]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-channelselect-channel-types"></a>

##### `channel_types(self) -> List[ChannelType]`

List\[`discord.ChannelType`]: A list of channel types that can be selected.

<a id="api-discord-ui-channelselect-values"></a>

##### `values(self) -> List[Union[AppCommandChannel, AppCommandThread]]`

List\[Union\[`discord.app_commands.AppCommandChannel`, `discord.app_commands.AppCommandThread`]]: A list of channels selected by the user.

<a id="api-discord-ui-channelselect-default-values"></a>

##### `default_values(self) -> List[SelectDefaultValue]`

List\[`discord.SelectDefaultValue`]: A list of default values for the select menu.

> **Added in version 2.4**

##### RoleSelect

<a id="api-discord-ui-roleselect"></a>

#### `RoleSelect(BaseSelect[V])`

Represents a UI select menu with a list of predefined options with the current roles of the guild.

Please note that if you use this in a private message with a user, no roles will be displayed to the user.

> **Added in version 2.1**

## Parameters

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**disabled: `bool`**

Whether the select is disabled or not.

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the roles that should be selected by default.
Number of items must be in range of `min_values` and `max_values`.

> **Added in version 2.4**

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-roleselect-type"></a>

##### `type(self) -> Literal[ComponentType.role_select]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-roleselect-values"></a>

##### `values(self) -> List[Role]`

List\[`discord.Role`]: A list of roles that have been selected by the user.

<a id="api-discord-ui-roleselect-default-values"></a>

##### `default_values(self) -> List[SelectDefaultValue]`

List\[`discord.SelectDefaultValue`]: A list of default values for the select menu.

> **Added in version 2.4**

##### MentionableSelect

<a id="api-discord-ui-mentionableselect"></a>

#### `MentionableSelect(BaseSelect[V])`

Represents a UI select menu with a list of predefined options with the current members and roles in the guild.

If this is sent in a private message, it will only allow the user to select
the client or themselves. Every selected option in a private message
will resolve to a `discord.User`. It will not give the user any roles
to select.

> **Added in version 2.1**

## Parameters

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**disabled: `bool`**

Whether the select is disabled or not.

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the users/roles that should be selected by default.
if `.Object` is passed, then the type must be specified in the constructor.
Number of items must be in range of `min_values` and `max_values`.

> **Added in version 2.4**

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-mentionableselect-type"></a>

##### `type(self) -> Literal[ComponentType.mentionable_select]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-mentionableselect-values"></a>

##### `values(self) -> List[Union[Member, User, Role]]`

List\[Union\[`discord.Role`, `discord.Member`, `discord.User`]]: A list of roles, members,
and users that have been selected by the user.

If this is sent a private message, it will only allow
the user to select the client or themselves. Every selected option in a private
message will resolve to a `discord.User`.

If invoked in a guild, the values will always resolve to `discord.Member`.

<a id="api-discord-ui-mentionableselect-default-values"></a>

##### `default_values(self) -> List[SelectDefaultValue]`

List\[`discord.SelectDefaultValue`]: A list of default values for the select menu.

> **Added in version 2.4**

##### UserSelect

<a id="api-discord-ui-userselect"></a>

#### `UserSelect(BaseSelect[V])`

Represents a UI select menu with a list of predefined options with the current members of the guild.

If this is sent a private message, it will only allow the user to select the client
or themselves. Every selected option in a private message will resolve to
a `discord.User`.

> **Added in version 2.1**

## Parameters

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**disabled: `bool`**

Whether the select is disabled or not.

**required: `bool`**

Whether the select is required. Only applicable within modals.

> **Added in version 2.6**

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the users that should be selected by default.
Number of items must be in range of `min_values` and `max_values`.

> **Added in version 2.4**

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-userselect-type"></a>

##### `type(self) -> Literal[ComponentType.user_select]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-userselect-values"></a>

##### `values(self) -> List[Union[Member, User]]`

List\[Union\[`discord.Member`, `discord.User`]]: A list of members
and users that have been selected by the user.

If this is sent a private message, it will only allow
the user to select the client or themselves. Every selected option in a private
message will resolve to a `discord.User`.

If invoked in a guild, the values will always resolve to `discord.Member`.

<a id="api-discord-ui-userselect-default-values"></a>

##### `default_values(self) -> List[SelectDefaultValue]`

List\[`discord.SelectDefaultValue`]: A list of default values for the select menu.

> **Added in version 2.4**

##### select

<a id="api-discord-ui-select"></a>

#### `select( *, cls: Type[BaseSelectT] = Select[Any], options: List[SelectOption] = MISSING, channel_types: List[ChannelType] = MISSING, placeholder: Optional[str] = None, custom_id: str = MISSING, min_values: int = 1, max_values: int = 1, disabled: bool = False, default_values: Sequence[ValidDefaultValues] = MISSING, row: Optional[int] = None, id: Optional[int] = None,) -> SelectCallbackDecorator[S, BaseSelectT]`

A decorator that attaches a select menu to a component.

The function being decorated should have three parameters, `self` representing
the `discord.ui.View`, the `discord.Interaction` you receive and
the chosen select class.

To obtain the selected values inside the callback, you can use the `values` attribute of the chosen class in the callback. The list of values
will depend on the type of select menu used. View the table below for more information.

| Select Type                    | Resolved Values                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `discord.ui.Select`            | List\[`str`]                                                                                     |
| `discord.ui.UserSelect`        | List\[Union\[`discord.Member`, `discord.User`]]                                                  |
| `discord.ui.RoleSelect`        | List\[`discord.Role`]                                                                            |
| `discord.ui.MentionableSelect` | List\[Union\[`discord.Role`, `discord.Member`, `discord.User`]]                                  |
| `discord.ui.ChannelSelect`     | List\[Union\[`discord.app_commands.AppCommandChannel`, `discord.app_commands.AppCommandThread`]] |

> **Changed in version 2.1**
> Added the following keyword-arguments: `cls`, `channel_types`

## Example

```python3
class View(discord.ui.View):

    @discord.ui.select(cls=ChannelSelect, channel_types=[discord.ChannelType.text])
    async def select_channels(self, interaction: discord.Interaction, select: ChannelSelect):
        return await interaction.response.send_message(f'You selected {select.values[0].mention}')
```

## Parameters

\**cls: Union\[Type\[`discord.ui.Select`], Type\[`discord.ui.UserSelect`], Type\[`discord.ui.RoleSelect`], \**

Type\[`discord.ui.MentionableSelect`], Type\[`discord.ui.ChannelSelect`]]
The class to use for the select menu. Defaults to `discord.ui.Select`. You can use other
select types to display different select menus to the user. See the table above for the different
values you can get from each select type. Subclasses work as well, however the callback in the subclass will
get overridden.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
It is recommended not to set this parameter to prevent conflicts.
Can only be up to 100 characters.

**row: Optional\[`int`]**

The relative row this select menu belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

> **Note**
> This parameter is ignored when used in a `ActionRow` or v2 component.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**options: List\[`discord.SelectOption`]**

A list of options that can be selected in this menu. This can only be used with

- **Class:** `Select` instances.
  Can only contain up to 25 items.

**channel\_types: List\[`discord.ChannelType`]**

The types of channels to show in the select menu. Defaults to all channels. This can only be used
with `ChannelSelect` instances.

**disabled: `bool`**

Whether the select is disabled or not. Defaults to `False`.

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the default values for the select menu. This cannot be used with regular `Select` instances.
If `cls` is `MentionableSelect` and `.Object` is passed, then the type must be specified in the constructor.
Number of items must be in range of `min_values` and `max_values`.

> **Added in version 2.4**

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

### TextInput

<a id="api-discord-ui-textinput"></a>

#### `TextInput(Item[V])`

Represents a UI text input.

This a top-level layout component that can only be used in `Label`.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the value of the text input or an empty string if the value is `None`.

> **Added in version 2.0**

## Parameters

**label: Optional\[`str`]**

The label to display above the text input.
Can only be up to 45 characters.

> **Deprecated in version 2.6**
> This parameter is deprecated, use `discord.ui.Label` instead.

> **Changed in version 2.6**
> This parameter is now optional and defaults to `None`.

**custom\_id: `str`**

The ID of the text input that gets received during an interaction.
If not given then one is generated for you.
Can only be up to 100 characters.

**style: `discord.TextStyle`**

The style of the text input.

**placeholder: Optional\[`str`]**

The placeholder text to display when the text input is empty.
Can only be up to 100 characters.

**default: Optional\[`str`]**

The default value of the text input.
Can only be up to 4000 characters.

**required: `bool`**

Whether the text input is required.

**min\_length: Optional\[`int`]**

The minimum length of the text input.
Must be between 0 and 4000.

**max\_length: Optional\[`int`]**

The maximum length of the text input.
Must be between 1 and 4000.

**row: Optional\[`int`]**

The relative row this text input belongs to. A Discord component can only have 5
rows. By default, items are arranged automatically into those 5 rows. If you'd
like to control the relative positioning of the row then passing an index is advised.
For example, row=1 will show up before row=2. Defaults to `None`, which is automatic
ordering. The row number must be between 0 and 4 (i.e. zero indexed).

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-textinput-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this text input.

<a id="api-discord-ui-textinput-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the text input that gets received during an interaction.

<a id="api-discord-ui-textinput-value"></a>

##### `value(self) -> str`

- **Class:** `str`: The value of the text input.

<a id="api-discord-ui-textinput-label"></a>

##### `label(self) -> Optional[str]`

- **Class:** `str`: The label of the text input.

<a id="api-discord-ui-textinput-placeholder"></a>

##### `placeholder(self) -> Optional[str]`

- **Class:** `str`: The placeholder text to display when the text input is empty.

<a id="api-discord-ui-textinput-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the text input is required.

<a id="api-discord-ui-textinput-min-length"></a>

##### `min_length(self) -> Optional[int]`

- **Class:** `int`: The minimum length of the text input.

<a id="api-discord-ui-textinput-max-length"></a>

##### `max_length(self) -> Optional[int]`

- **Class:** `int`: The maximum length of the text input.

<a id="api-discord-ui-textinput-style"></a>

##### `style(self) -> TextStyle`

- **Class:** `discord.TextStyle`: The style of the text input.

<a id="api-discord-ui-textinput-default"></a>

##### `default(self) -> Optional[str]`

- **Class:** `str`: The default value of the text input.

### Container

<a id="api-discord-ui-container"></a>

#### `Container(Item[V])`

Represents a UI container.

This is a top-level layout component that can only be used on `LayoutView`
and can contain `ActionRow`\s, `TextDisplay`\s, `Section`\s,

- **Class:** `MediaGallery`\s, `File`\s, and `Separator`\s in it.

This can be inherited.

> **Added in version 2.6**

## Examples

```python3
import discord
from discord import ui

# you can subclass it and add components as you would add them
# in a LayoutView
class MyContainer(ui.Container):
    action_row = ui.ActionRow()

    @action_row.button(label='A button in a container!')
    async def a_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked a button!')

# or use it directly on LayoutView
class MyView(ui.LayoutView):
    container = ui.Container(ui.TextDisplay('I am a text display on a container!'))
    # or you can use your subclass:
    # container = MyContainer()
```

## Parameters

**\*children: `Item`**

The initial children of this container.

**accent\_colour: Optional\[Union\[`.Colour`, `int`]]**

The colour of the container. Defaults to `None`.

**accent\_color: Optional\[Union\[`.Colour`, `int`]]**

The color of the container. Defaults to `None`.

**spoiler: `bool`**

Whether to flag this container as a spoiler. Defaults
to `False`.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-container-children"></a>

##### `children(self) -> List[Item[V]]`

List\[`Item`]: The children of this container.

<a id="api-discord-ui-container-accent-colour"></a>

##### `accent_colour(self) -> Optional[Union[Colour, int]]`

Optional\[Union\[`discord.Colour`, `int`]]: The colour of the container, or `None`.

<a id="api-discord-ui-container-walk-children"></a>

##### `walk_children(self) -> Generator[Item[V], None, None]`

An iterator that recursively walks through all the children of this container
and its children, if applicable.

## Yields

**`Item`**

An item in the container.

<a id="api-discord-ui-container-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in this container.

<a id="api-discord-ui-container-add-item"></a>

##### `add_item(self, item: Item[Any]) -> Self`

Adds an item to this container.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to append.

## Raises

**TypeError**

An `Item` was not passed.

**ValueError**

Maximum number of children has been exceeded (40) for the entire view.

<a id="api-discord-ui-container-remove-item"></a>

##### `remove_item(self, item: Item[Any]) -> Self`

Removes an item from this container.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to remove from the container.

<a id="api-discord-ui-container-find-item"></a>

##### `find_item(self, id: int, /) -> Optional[Item[V]]`

Gets an item with `Item.id` set as `id`, or `None` if
not found.

> **Warning**
> This is **not the same** as `custom_id`.

## Parameters

**id: `int`**

The ID of the component.

## Returns

**Optional\[`Item`]**

The item found, or `None`.

<a id="api-discord-ui-container-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all the items from the container.

This function returns the class instance to allow for fluent-style
chaining.

### File

<a id="api-discord-ui-file"></a>

#### `File(Item[V])`

Represents a UI file component.

This is a top-level layout component that can only be used on `LayoutView`.

> **Added in version 2.6**

## Example

```python3
import discord
from discord import ui

class MyView(ui.LayoutView):
    file = ui.File('attachment://file.txt')
    # attachment://file.txt points to an attachment uploaded alongside this view
```

## Parameters

**media: Union\[`str`, `.UnfurledMediaItem`, `discord.File`]**

This file's media. If this is a string it must point to a local
file uploaded within the parent view of this item, and must
meet the `attachment://<filename>` format.

**spoiler: `bool`**

Whether to flag this file as a spoiler. Defaults to `False`.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-file-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this file component.

<a id="api-discord-ui-file-media"></a>

##### `media(self) -> UnfurledMediaItem`

- **Class:** `.UnfurledMediaItem`: Returns this file media.

<a id="api-discord-ui-file-url"></a>

##### `url(self) -> str`

- **Class:** `str`: Returns this file's url.

<a id="api-discord-ui-file-spoiler"></a>

##### `spoiler(self) -> bool`

- **Class:** `bool`: Returns whether this file should be flagged as a spoiler.

### Label

<a id="api-discord-ui-label"></a>

#### `Label(Item[V])`

Represents a UI label within a modal.

This is a top-level layout component that can only be used on `Modal`.

> **Added in version 2.6**

## Parameters

**text: `str`**

The text to display above the input field.
Can only be up to 45 characters.

**description: Optional\[`str`]**

The description text to display right below the label text.
Can only be up to 100 characters.

**component: `Item`**

The component to display below the label.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

## Attributes

**text: `str`**

The text to display above the input field.
Can only be up to 45 characters.

**description: Optional\[`str`]**

The description text to display right below the label text.
Can only be up to 100 characters.

**component: `Item`**

The component to display below the label.

### MediaGallery

<a id="api-discord-ui-mediagallery"></a>

#### `MediaGallery(Item[V])`

Represents a UI media gallery.

Can contain up to 10 `.MediaGalleryItem`\s.

This is a top-level layout component that can only be used on `LayoutView`.

> **Added in version 2.6**

## Parameters

**\*items: `.MediaGalleryItem`**

The initial items of this gallery.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-mediagallery-items"></a>

##### `items(self) -> List[MediaGalleryItem]`

List\[`.MediaGalleryItem`]: Returns a read-only list of this gallery's items.

<a id="api-discord-ui-mediagallery-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-mediagallery-add-item"></a>

##### `add_item( self, *, media: Union[str, File, UnfurledMediaItem], description: Optional[str] = MISSING, spoiler: bool = MISSING,) -> Self`

Adds an item to this gallery.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**media: Union\[`str`, `discord.File`, `.UnfurledMediaItem`]**

The media item data. This can be a string representing a local
file uploaded as an attachment in the message, which can be accessed
using the `attachment://<filename>` format, or an arbitrary url.

**description: Optional\[`str`]**

The description to show within this item. Up to 256 characters. Defaults
to `None`.

**spoiler: `bool`**

Whether this item should be flagged as a spoiler. Defaults to `False`.

## Raises

**ValueError**

Maximum number of items has been exceeded (10).

<a id="api-discord-ui-mediagallery-append-item"></a>

##### `append_item(self, item: MediaGalleryItem) -> Self`

Appends an item to this gallery.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `.MediaGalleryItem`**

The item to add to the gallery.

## Raises

**TypeError**

A `.MediaGalleryItem` was not passed.

**ValueError**

Maximum number of items has been exceeded (10).

<a id="api-discord-ui-mediagallery-insert-item-at"></a>

##### `insert_item_at( self, index: int, *, media: Union[str, File, UnfurledMediaItem], description: Optional[str] = MISSING, spoiler: bool = MISSING,) -> Self`

Inserts an item before a specified index to the media gallery.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**index: `int`**

The index of where to insert the field.

**media: Union\[`str`, `discord.File`, `.UnfurledMediaItem`]**

The media item data. This can be a string representing a local
file uploaded as an attachment in the message, which can be accessed
using the `attachment://<filename>` format, or an arbitrary url.

**description: Optional\[`str`]**

The description to show within this item. Up to 256 characters. Defaults
to `None`.

**spoiler: `bool`**

Whether this item should be flagged as a spoiler. Defaults to `False`.

## Raises

**ValueError**

Maximum number of items has been exceeded (10).

<a id="api-discord-ui-mediagallery-remove-item"></a>

##### `remove_item(self, item: MediaGalleryItem) -> Self`

Removes an item from the gallery.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `.MediaGalleryItem`**

The item to remove from the gallery.

<a id="api-discord-ui-mediagallery-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all items from the gallery.

This function returns the class instance to allow for fluent-style
chaining.

### Section

<a id="api-discord-ui-section"></a>

#### `Section(Item[V])`

Represents a UI section.

This is a top-level layout component that can only be used on `LayoutView`.

> **Added in version 2.6**

## Parameters

**\*children: Union\[`str`, `TextDisplay`]**

The text displays of this section. Up to 3.

**accessory: `Item`**

The section accessory. This is usually either a `Button` or `Thumbnail`.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-section-children"></a>

##### `children(self) -> List[Item[V]]`

List\[`Item`]: The list of children attached to this section.

<a id="api-discord-ui-section-accessory"></a>

##### `accessory(self) -> Item[V]`

- **Class:** `Item`: The section's accessory.

<a id="api-discord-ui-section-walk-children"></a>

##### `walk_children(self) -> Generator[Item[V], None, None]`

An iterator that recursively walks through all the children of this section
and its children, if applicable. This includes the `accessory`.

## Yields

**`Item`**

An item in this section.

<a id="api-discord-ui-section-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in this section.

<a id="api-discord-ui-section-add-item"></a>

##### `add_item(self, item: Union[str, Item[Any]]) -> Self`

Adds an item to this section.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: Union\[`str`, `Item`]**

The item to append, if it is a string it automatically wrapped around

- **Class:** `TextDisplay`.

## Raises

**TypeError**

An `Item` or `str` was not passed.

**ValueError**

Maximum number of children has been exceeded (3) or (40)
for the entire view.

<a id="api-discord-ui-section-remove-item"></a>

##### `remove_item(self, item: Item[Any]) -> Self`

Removes an item from this section.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to remove from the section.

<a id="api-discord-ui-section-find-item"></a>

##### `find_item(self, id: int, /) -> Optional[Item[V]]`

Gets an item with `Item.id` set as `id`, or `None` if
not found.

> **Warning**
> This is **not the same** as `custom_id`.

## Parameters

**id: `int`**

The ID of the component.

## Returns

**Optional\[`Item`]**

The item found, or `None`.

<a id="api-discord-ui-section-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all the items from the section.

This function returns the class instance to allow for fluent-style
chaining.

### Separator

<a id="api-discord-ui-separator"></a>

#### `Separator(Item[V])`

Represents a UI separator.

This is a top-level layout component that can only be used on `LayoutView`.

> **Added in version 2.6**

## Parameters

**visible: `bool`**

Whether this separator is visible. On the client side this
is whether a divider line should be shown or not.

**spacing: `.SeparatorSpacing`**

The spacing of this separator.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-separator-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this separator.

<a id="api-discord-ui-separator-visible"></a>

##### `visible(self) -> bool`

- **Class:** `bool`: Whether this separator is visible.

On the client side this is whether a divider line should
be shown or not.

<a id="api-discord-ui-separator-spacing"></a>

##### `spacing(self) -> SeparatorSpacing`

- **Class:** `.SeparatorSpacing`: The spacing of this separator.

### TextDisplay

<a id="api-discord-ui-textdisplay"></a>

#### `TextDisplay(Item[V])`

Represents a UI text display.

This is a top-level layout component that can only be used on `LayoutView`,

- **Class:** `Section`, `Container`, or `Modal`.

> **Added in version 2.6**

## Parameters

**content: `str`**

The content of this text display. Up to 4000 characters.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

### Thumbnail

<a id="api-discord-ui-thumbnail"></a>

#### `Thumbnail(Item[V])`

Represents a UI Thumbnail. This currently can only be used as a `Section`'s accessory.

> **Added in version 2.6**

## Parameters

**media: Union\[`str`, `discord.File`, `discord.UnfurledMediaItem`]**

The media of the thumbnail. This can be a URL or a reference
to an attachment that matches the `attachment://filename.extension`
structure.

**description: Optional\[`str`]**

The description of this thumbnail. Up to 256 characters. Defaults to `None`.

**spoiler: `bool`**

Whether to flag this thumbnail as a spoiler. Defaults to `False`.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-thumbnail-media"></a>

##### `media(self) -> UnfurledMediaItem`

- **Class:** `discord.UnfurledMediaItem`: This thumbnail unfurled media data.

### ActionRow

<a id="api-discord-ui-actionrow"></a>

#### `ActionRow(Item[V])`

Represents a UI action row.

This is a top-level layout component that can only be used on `LayoutView`
and can contain `Button`\s and `Select`\s in it.

Action rows can only have 5 children. This can be inherited.

> **Added in version 2.6**

## Examples

```python3
import discord
from discord import ui

# you can subclass it and add components with the decorators
class MyActionRow(ui.ActionRow):
    @ui.button(label='Click Me!')
    async def click_me(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked me!')

# or use it directly on LayoutView
class MyView(ui.LayoutView):
    row = ui.ActionRow()
    # or you can use your subclass:
    # row = MyActionRow()

    # you can add items with row.button and row.select
    @row.button(label='A button!')
    async def row_button(self, interaction: discord.Interaction, button: discord.ui.Button):
        await interaction.response.send_message('You clicked a button!')
```

## Parameters

**\*children: `Item`**

The initial children of this action row.

**id: Optional\[`int`]**

The ID of this component. This must be unique across the view.

<a id="api-discord-ui-actionrow-children"></a>

##### `children(self) -> List[Item[V]]`

List\[`Item`]: The list of children attached to this action row.

<a id="api-discord-ui-actionrow-walk-children"></a>

##### `walk_children(self) -> Generator[Item[V], Any, None]`

An iterator that recursively walks through all the children of this action row
and its children, if applicable.

## Yields

**`Item`**

An item in the action row.

<a id="api-discord-ui-actionrow-content-length"></a>

##### `content_length(self) -> int`

- **Class:** `int`: Returns the total length of all text content in this action row.

<a id="api-discord-ui-actionrow-add-item"></a>

##### `add_item(self, item: Item[Any]) -> Self`

Adds an item to this action row.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to add to the action row.

## Raises

**TypeError**

An `Item` was not passed.

**ValueError**

Maximum number of children has been exceeded (5)
or (40) for the entire view.

<a id="api-discord-ui-actionrow-remove-item"></a>

##### `remove_item(self, item: Item[Any]) -> Self`

Removes an item from the action row.

This function returns the class instance to allow for fluent-style
chaining.

## Parameters

**item: `Item`**

The item to remove from the action row.

<a id="api-discord-ui-actionrow-find-item"></a>

##### `find_item(self, id: int, /) -> Optional[Item[V]]`

Gets an item with `Item.id` set as `id`, or `None` if
not found.

> **Warning**
> This is **not the same** as `custom_id`.

## Parameters

**id: `int`**

The ID of the component.

## Returns

**Optional\[`Item`]**

The item found, or `None`.

<a id="api-discord-ui-actionrow-clear-items"></a>

##### `clear_items(self) -> Self`

Removes all items from the action row.

This function returns the class instance to allow for fluent-style
chaining.

<a id="api-discord-ui-actionrow-button"></a>

##### `button( self, *, label: Optional[str] = None, custom_id: Optional[str] = None, disabled: bool = False, style: ButtonStyle = ButtonStyle.secondary, emoji: Optional[Union[str, Emoji, PartialEmoji]] = None, id: Optional[int] = None,) -> Callable[[ItemCallbackType[S, Button[V]]], Button[V]]`

A decorator that attaches a button to the action row.

The function being decorated should have three parameters, `self` representing
the `discord.ui.ActionRow`, the `discord.Interaction` you receive and
the `discord.ui.Button` being pressed.

> **Note**
> Buttons with a URL or a SKU cannot be created with this function.
> Consider creating a `Button` manually and adding it via
>
> - **Meth:** `ActionRow.add_item` instead. This is beacuse these buttons
>   cannot have a callback associated with them since Discord does not
>   do any processing with them.

## Parameters

**label: Optional\[`str`]**

The label of the button, if any.
Can only be up to 80 characters.

**custom\_id: Optional\[`str`]**

The ID of the button that gets received during an interaction.
It is recommended to not set this parameters to prevent conflicts.
Can only be up to 100 characters.

**style: `.ButtonStyle`**

The style of the button. Defaults to `.ButtonStyle.grey`.

**disabled: `bool`**

Whether the button is disabled or not. Defaults to `False`.

**emoji: Optional\[Union\[`str`, `.Emoji`, `.PartialEmoji`]]**

The emoji of the button. This can be in string form or a `.PartialEmoji`
or a full `.Emoji`.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

<a id="api-discord-ui-actionrow-select"></a>

##### `select( self, *, cls: Type[BaseSelectT] = Select[Any], options: List[SelectOption] = MISSING, channel_types: List[ChannelType] = MISSING, placeholder: Optional[str] = None, custom_id: str = MISSING, min_values: int = 1, max_values: int = 1, disabled: bool = False, default_values: Sequence[ValidDefaultValues] = MISSING, id: Optional[int] = None,) -> SelectCallbackDecorator[S, BaseSelectT]`

A decorator that attaches a select menu to the action row.

The function being decorated should have three parameters, `self` representing
the `discord.ui.ActionRow`, the `discord.Interaction` you receive and
the chosen select class.

To obtain the selected values inside the callback, you can use the `values` attribute of the chosen class in the callback. The list of values
will depend on the type of select menu used. View the table below for more information.

| Select Type                    | Resolved Values                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `discord.ui.Select`            | List\[`str`]                                                                                     |
| `discord.ui.UserSelect`        | List\[Union\[`discord.Member`, `discord.User`]]                                                  |
| `discord.ui.RoleSelect`        | List\[`discord.Role`]                                                                            |
| `discord.ui.MentionableSelect` | List\[Union\[`discord.Role`, `discord.Member`, `discord.User`]]                                  |
| `discord.ui.ChannelSelect`     | List\[Union\[`discord.app_commands.AppCommandChannel`, `discord.app_commands.AppCommandThread`]] |

## Example

```python3
class MyView(discord.ui.LayoutView):
    action_row = discord.ui.ActionRow()

    @action_row.select(cls=ChannelSelect, channel_types=[discord.ChannelType.text])
    async def select_channels(self, interaction: discord.Interaction, select: ChannelSelect):
        return await interaction.response.send_message(f'You selected {select.values[0].mention}')
```

## Parameters

\**cls: Union\[Type\[`discord.ui.Select`], Type\[`discord.ui.UserSelect`], Type\[`discord.ui.RoleSelect`], \**

Type\[`discord.ui.MentionableSelect`], Type\[`discord.ui.ChannelSelect`]]
The class to use for the select menu. Defaults to `discord.ui.Select`. You can use other
select types to display different select menus to the user. See the table above for the different
values you can get from each select type. Subclasses work as well, however the callback in the subclass will
get overridden.

**placeholder: Optional\[`str`]**

The placeholder text that is shown if nothing is selected, if any.
Can only be up to 150 characters.

**custom\_id: `str`**

The ID of the select menu that gets received during an interaction.
It is recommended not to set this parameter to prevent conflicts.
Can only be up to 100 characters.

**min\_values: `int`**

The minimum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 0 and 25.

**max\_values: `int`**

The maximum number of items that must be chosen for this select menu.
Defaults to 1 and must be between 1 and 25.

**options: List\[`discord.SelectOption`]**

A list of options that can be selected in this menu. This can only be used with

- **Class:** `Select` instances.
  Can only contain up to 25 items.

**channel\_types: List\[`discord.ChannelType`]**

The types of channels to show in the select menu. Defaults to all channels. This can only be used
with `ChannelSelect` instances.

**disabled: `bool`**

Whether the select is disabled or not. Defaults to `False`.

**default\_values: Sequence\[`discord.abc.Snowflake`]**

A list of objects representing the default values for the select menu. This cannot be used with regular `Select` instances.
If `cls` is `MentionableSelect` and `.Object` is passed, then the type must be specified in the constructor.
Number of items must be in range of `min_values` and `max_values`.

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

> **Added in version 2.6**

### FileUpload

<a id="api-discord-ui-fileupload"></a>

#### `FileUpload(Item[V])`

Represents a file upload component within a modal.

> **Added in version 2.7**

## Parameters

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

**custom\_id: Optional\[`str`]**

The custom ID of the file upload component.

**max\_values: Optional\[`int`]**

The maximum number of files that can be uploaded in this component.
Must be between 1 and 10. Defaults to 1.

**min\_values: Optional\[`int`]**

The minimum number of files that must be uploaded in this component.
Must be between 0 and 10. Defaults to 0.

**required: `bool`**

Whether this component is required to be filled before submitting the modal.
Defaults to `True`.

<a id="api-discord-ui-fileupload-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-fileupload-values"></a>

##### `values(self) -> List[Attachment]`

List\[`discord.Attachment`]: The list of attachments uploaded by the user.

You can call `discord.Attachment.to_file` on each attachment
to get a `discord.File` for sending.

<a id="api-discord-ui-fileupload-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the component that gets received during an interaction.

<a id="api-discord-ui-fileupload-min-values"></a>

##### `min_values(self) -> int`

- **Class:** `int`: The minimum number of files that must be user upload before submitting the modal.

<a id="api-discord-ui-fileupload-max-values"></a>

##### `max_values(self) -> int`

- **Class:** `int`: The maximum number of files that the user must upload before submitting the modal.

<a id="api-discord-ui-fileupload-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the component is required or not.

### RadioGroup

<a id="api-discord-ui-radiogroup"></a>

#### `RadioGroup(Item[V])`

Represents a radio group component within a modal.

> **Added in version 2.7**

## Parameters

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

**custom\_id: Optional\[`str`]**

The custom ID of the component.

**options: List\[`discord.RadioGroupOption`]**

A list of options that can be selected in this radio group.
Can contain between 2 and 10 items.

**required: `bool`**

Whether this component is required to be filled before submitting the modal.
Defaults to `True`.

<a id="api-discord-ui-radiogroup-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-radiogroup-value"></a>

##### `value(self) -> Optional[str]`

Optional\[`str`]: The value have been selected by the user, if any.

<a id="api-discord-ui-radiogroup-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the component that gets received during an interaction.

<a id="api-discord-ui-radiogroup-type"></a>

##### `type(self) -> Literal[ComponentType.radio_group]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-radiogroup-options"></a>

##### `options(self) -> List[RadioGroupOption]`

List\[`discord.RadioGroupOption`]: A list of options that can be selected in this radio group.

<a id="api-discord-ui-radiogroup-add-option"></a>

##### `add_option( self, *, label: str, value: str = MISSING, description: Optional[str] = None, default: bool = False,) -> None`

Adds an option to the group.

To append a pre-existing `discord.RadioGroupOption` use the

- **Meth:** `append_option` method instead.

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not given, defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**default: `bool`**

Whether this option is selected by default.

## Raises

**ValueError**

The number of options exceeds 10.

<a id="api-discord-ui-radiogroup-append-option"></a>

##### `append_option(self, option: RadioGroupOption) -> None`

Appends an option to the group.

## Parameters

**option: `discord.RadioGroupOption`**

The option to append to the group.

## Raises

**ValueError**

The number of options exceeds 10.

<a id="api-discord-ui-radiogroup-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the component is required or not.

### Checkbox

<a id="api-discord-ui-checkbox"></a>

#### `Checkbox(Item[V])`

Represents a checkbox component within a modal.

> **Added in version 2.7**

## Parameters

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

**custom\_id: Optional\[`str`]**

The custom ID of the component.

**default: `bool`**

Whether this checkbox is selected by default.

<a id="api-discord-ui-checkbox-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-checkbox-value"></a>

##### `value(self) -> bool`

- **Class:** `bool`: `True` if this checkbox was selected, otherwise `False`.

<a id="api-discord-ui-checkbox-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the component that gets received during an interaction.

<a id="api-discord-ui-checkbox-type"></a>

##### `type(self) -> Literal[ComponentType.checkbox]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-checkbox-default"></a>

##### `default(self) -> bool`

- **Class:** `bool`: Whether this checkbox is selected by default.

### CheckboxGroup

<a id="api-discord-ui-checkboxgroup"></a>

#### `CheckboxGroup(Item[V])`

Represents a checkbox group component within a modal.

> **Added in version 2.7**

## Parameters

**id: Optional\[`int`]**

The ID of the component. This must be unique across the view.

**custom\_id: Optional\[`str`]**

The custom ID of the component.

**options: List\[`discord.CheckboxGroupOption`]**

A list of options that can be selected in this checkbox group.
Can only contain up to 10 items.

**max\_values: Optional\[`int`]**

The maximum number of options that can be selected in this component.
Must be between 1 and 10. Defaults to 1.

**min\_values: Optional\[`int`]**

The minimum number of options that must be selected in this component.
Must be between 0 and 10. Defaults to 0.

**required: `bool`**

Whether this component is required to be filled before submitting the modal.
Defaults to `True`.

<a id="api-discord-ui-checkboxgroup-id"></a>

##### `id(self) -> Optional[int]`

Optional\[`int`]: The ID of this component.

<a id="api-discord-ui-checkboxgroup-values"></a>

##### `values(self) -> List[str]`

List\[`str`]: A list of values that have been selected by the user.

<a id="api-discord-ui-checkboxgroup-custom-id"></a>

##### `custom_id(self) -> str`

- **Class:** `str`: The ID of the component that gets received during an interaction.

<a id="api-discord-ui-checkboxgroup-type"></a>

##### `type(self) -> Literal[ComponentType.checkbox_group]`

- **Class:** `.ComponentType`: The type of this component.

<a id="api-discord-ui-checkboxgroup-options"></a>

##### `options(self) -> List[CheckboxGroupOption]`

List\[`discord.CheckboxGroupOption`]: A list of options that can be selected in this menu.

<a id="api-discord-ui-checkboxgroup-min-values"></a>

##### `min_values(self) -> int`

- **Class:** `int`: The minimum number of options that must be selected before submitting the modal.

<a id="api-discord-ui-checkboxgroup-max-values"></a>

##### `max_values(self) -> int`

- **Class:** `int`: The maximum number of options that can be selected before submitting the modal.

<a id="api-discord-ui-checkboxgroup-add-option"></a>

##### `add_option( self, *, label: str, value: str = MISSING, description: Optional[str] = None, default: bool = False,) -> None`

Adds an option to the checkbox group.

To append a pre-existing `discord.CheckboxGroupOption` use the

- **Meth:** `append_option` method instead.

## Parameters

**label: `str`**

The label of the option. This is displayed to users.
Can only be up to 100 characters.

**value: `str`**

The value of the option. This is not displayed to users.
If not given, defaults to the label.
Can only be up to 100 characters.

**description: Optional\[`str`]**

An additional description of the option, if any.
Can only be up to 100 characters.

**default: `bool`**

Whether this option is selected by default.

## Raises

**ValueError**

The number of options exceeds 10.

<a id="api-discord-ui-checkboxgroup-append-option"></a>

##### `append_option(self, option: CheckboxGroupOption) -> None`

Appends an option to the checkbox group.

## Parameters

**option: `discord.CheckboxGroupOption`**

The option to append to the checkbox group.

## Raises

**ValueError**

The number of options exceeds 10.

<a id="api-discord-ui-checkboxgroup-required"></a>

##### `required(self) -> bool`

- **Class:** `bool`: Whether the component is required or not.

<a id="discord-app-commands"></a>

## Application Commands

The library has helpers to aid in creation of application commands. These are all in the `discord.app_commands` package.

### CommandTree

<a id="api-discord-app-commands-commandtree"></a>

#### `CommandTree(Generic[ClientT])`

Represents a container that holds application command information.

## Parameters

**client: `discord.Client`**

The client instance to get application command information from.

**fallback\_to\_global: `bool`**

If a guild-specific command is not found when invoked, then try falling back into
a global command in the tree. For example, if the tree locally has a `/ping` command
under the global namespace but the guild has a guild-specific `/ping`, instead of failing
to find the guild-specific `/ping` command it will fall back to the global `/ping` command.
This has the potential to raise more `discord.app_commands.CommandSignatureMismatch` errors
than usual. Defaults to `True`.

**allowed\_contexts: `discord.app_commands.AppCommandContext`**

The default allowed contexts that applies to all commands in this tree.
Note that you can override this on a per command basis.

> **Added in version 2.4**

**allowed\_installs: `discord.app_commands.AppInstallationType`**

The default allowed install locations that apply to all commands in this tree.
Note that you can override this on a per command basis.

> **Added in version 2.4**

<a id="api-discord-app-commands-commandtree-fetch-command"></a>

##### `fetch_command(self, command_id: int, /, *, guild: Optional[Snowflake] = None) -> AppCommand`

*coroutine*

Fetches an application command from the application.

## Parameters

**command\_id: `int`**

The ID of the command to fetch.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to fetch the command from. If not passed then the global command
is fetched instead.

## Raises

**HTTPException**

Fetching the command failed.

**MissingApplicationID**

The application ID could not be found.

**NotFound**

The application command was not found.
This could also be because the command is a guild command
and the guild was not specified and vice versa.

## Returns

**`discord.app_commands.AppCommand`**

The application command.

<a id="api-discord-app-commands-commandtree-fetch-commands"></a>

##### `fetch_commands(self, *, guild: Optional[Snowflake] = None) -> List[AppCommand]`

*coroutine*

Fetches the application's current commands.

If no guild is passed then global commands are fetched, otherwise
the guild's commands are fetched instead.

> **Note**
> This includes context menu commands.

## Parameters

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to fetch the commands from. If not passed then global commands
are fetched instead.

## Raises

**HTTPException**

Fetching the commands failed.

**MissingApplicationID**

The application ID could not be found.

## Returns

**List\[`discord.app_commands.AppCommand`]**

The application's commands.

<a id="api-discord-app-commands-commandtree-copy-global-to"></a>

##### `copy_global_to(self, *, guild: Snowflake) -> None`

Copies all global commands to the specified guild.

This method is mainly available for development purposes, as it allows you
to copy your global commands over to a testing guild easily.

Note that this method will *override* pre-existing guild commands that would conflict.

## Parameters

**guild: `discord.abc.Snowflake`**

The guild to copy the commands to.

## Raises

**CommandLimitReached**

The maximum number of commands was reached for that guild.
This is currently 100 for slash commands and 5 for context menu commands.

<a id="api-discord-app-commands-commandtree-add-command"></a>

##### `add_command( self, command: Union[Command[Any, ..., Any], ContextMenu, Group], /, *, guild: Optional[Snowflake] = MISSING, guilds: Sequence[Snowflake] = MISSING, override: bool = False,) -> None`

Adds an application command to the tree.

This only adds the command locally -- in order to sync the commands
and enable them in the client, `sync` must be called.

The root parent of the command is added regardless of the type passed.

## Parameters

**command: Union\[`Command`, `Group`]**

The application command or group to add.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to add the command to. If not given or `None` then it
becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**guilds: List\[`discord.abc.Snowflake`]**

The list of guilds to add the command to. This cannot be mixed
with the `guild` parameter. If no guilds are given at all
then it becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**override: `bool`**

Whether to override a command with the same name. If `False`
an exception is raised. Default is `False`.

## Raises

**\~discord.app\_commands.CommandAlreadyRegistered**

The command was already registered and no override was specified.

**TypeError**

The application command passed is not a valid application command.
Or, `guild` and `guilds` were both given.

**CommandLimitReached**

The maximum number of commands was reached globally or for that guild.
This is currently 100 for slash commands and 5 for context menu commands.

<a id="api-discord-app-commands-commandtree-remove-command"></a>

##### `remove_command( self, command: str, /, *, guild: Optional[Snowflake] = None, type: AppCommandType = AppCommandType.chat_input,) -> Optional[Union[Command[Any, ..., Any], ContextMenu, Group]]`

Removes an application command from the tree.

This only removes the command locally -- in order to sync the commands
and remove them in the client, `sync` must be called.

## Parameters

**command: `str`**

The name of the root command to remove.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to remove the command from. If not given or `None` then it
removes a global command instead.

**type: `discord.AppCommandType`**

The type of command to remove. Defaults to `discord.AppCommandType.chat_input`,
i.e. slash commands.

## Returns

**Optional\[Union\[`Command`, `ContextMenu`, `Group`]]**

The application command that got removed.
If nothing was removed then `None` is returned instead.

<a id="api-discord-app-commands-commandtree-clear-commands"></a>

##### `clear_commands(self, *, guild: Optional[Snowflake], type: Optional[AppCommandType] = None) -> None`

Clears all application commands from the tree.

This only removes the commands locally -- in order to sync the commands
and remove them in the client, `sync` must be called.

## Parameters

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to remove the commands from. If `None` then it
removes all global commands instead.

**type: `discord.AppCommandType`**

The type of command to clear. If not given or `None` then it removes all commands
regardless of the type.

<a id="api-discord-app-commands-commandtree-get-command"></a>

##### `get_command( self, command: str, /, *, guild: Optional[Snowflake] = None, type: AppCommandType = AppCommandType.chat_input,) -> Optional[Union[Command[Any, ..., Any], ContextMenu, Group]]`

Gets an application command from the tree.

## Parameters

**command: `str`**

The name of the root command to get.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to get the command from. If not given or `None` then it
gets a global command instead.

**type: `discord.AppCommandType`**

The type of command to get. Defaults to `discord.AppCommandType.chat_input`,
i.e. slash commands.

## Returns

**Optional\[Union\[`Command`, `ContextMenu`, `Group`]]**

The application command that was found.
If nothing was found then `None` is returned instead.

<a id="api-discord-app-commands-commandtree-get-commands"></a>

##### `get_commands( self, *, guild: Optional[Snowflake] = None, type: Optional[AppCommandType] = None,) -> Union[ List[ContextMenu], List[Union[Command[Any, ..., Any], Group]], List[Union[Command[Any, ..., Any], Group, ContextMenu]], ]`

Gets all application commands from the tree.

## Parameters

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to get the commands from, not including global commands.
If not given or `None` then only global commands are returned.

**type: Optional\[`discord.AppCommandType`]**

The type of commands to get. When not given or `None`, then all
command types are returned.

## Returns

**List\[Union\[`ContextMenu`, `Command`, `Group`]]**

The application commands from the tree.

<a id="api-discord-app-commands-commandtree-walk-commands"></a>

##### `walk_commands( self, *, guild: Optional[Snowflake] = None, type: AppCommandType = AppCommandType.chat_input,) -> Union[Generator[Union[Command[Any, ..., Any], Group], None, None], Generator[ContextMenu, None, None]]`

An iterator that recursively walks through all application commands and child commands from the tree.

## Parameters

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to iterate the commands from, not including global commands.
If not given or `None` then only global commands are iterated.

**type: `discord.AppCommandType`**

The type of commands to iterate over. Defaults to `discord.AppCommandType.chat_input`,
i.e. slash commands.

## Yields

**Union\[`ContextMenu`, `Command`, `Group`]**

The application commands from the tree.

<a id="api-discord-app-commands-commandtree-on-error"></a>

##### `on_error(self, interaction: Interaction[ClientT], error: AppCommandError, /) -> None`

*coroutine*

A callback that is called when any command raises an `AppCommandError`.

The default implementation logs the exception using the library logger
if the command does not have any error handlers attached to it.

To get the command that failed, `discord.Interaction.command` should
be used.

## Parameters

**interaction: `discord.Interaction`**

The interaction that is being handled.

**error: `AppCommandError`**

The exception that was raised.

<a id="api-discord-app-commands-commandtree-translator"></a>

##### `translator(self) -> Optional[Translator]`

Optional\[`Translator`]: The translator, if any, responsible for handling translation of commands.

To change the translator, use `set_translator`.

<a id="api-discord-app-commands-commandtree-set-translator"></a>

##### `set_translator(self, translator: Optional[Translator]) -> None`

*coroutine*

Sets the translator to use for translating commands.

If a translator was previously set, it will be unloaded using its

- **Meth:** `Translator.unload` method.

When a translator is set, it will be loaded using its `Translator.load` method.

## Parameters

**translator: Optional\[`Translator`]**

The translator to use. If `None` then the translator is just removed and unloaded.

## Raises

**TypeError**

The translator was not `None` or a `Translator` instance.

<a id="api-discord-app-commands-commandtree-sync"></a>

##### `sync(self, *, guild: Optional[Snowflake] = None) -> List[AppCommand]`

*coroutine*

Syncs the application commands to Discord.

This also runs the translator to get the translated strings necessary for
feeding back into Discord.

This must be called for the application commands to show up.

## Parameters

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to sync the commands to. If `None` then it
syncs all global commands instead.

## Raises

**HTTPException**

Syncing the commands failed.

**CommandSyncFailure**

Syncing the commands failed due to a user related error, typically because
the command has invalid data. This is equivalent to an HTTP status code of
400\.

**Forbidden**

The client does not have the `applications.commands` scope in the guild.

**MissingApplicationID**

The client does not have an application ID.

**TranslationError**

An error occurred while translating the commands.

## Returns

**List\[`AppCommand`]**

The application's commands that got synced.

<a id="api-discord-app-commands-commandtree-interaction-check"></a>

##### `interaction_check(self, interaction: Interaction[ClientT], /) -> bool`

*coroutine*

A global check to determine if an `discord.Interaction` should
be processed by the tree.

The default implementation returns True (all interactions are processed),
but can be overridden if custom behaviour is desired.

<a id="api-commandtree-command-name-description-nsfw-false-guild-guilds-auto-locale-strings-true-extras"></a>

#### `command( self, *, name: Union[str, locale_str] = MISSING, description: Union[str, locale_str] = MISSING, nsfw: bool = False, guild: Optional[Snowflake] = MISSING, guilds: Sequence[Snowflake] = MISSING, auto_locale_strings: bool = True, extras: Dict[Any, Any] = MISSING,) -> Callable[[CommandCallback[Group, P, T]], Command[Group, P, T]]`

A decorator that creates an application command from a regular function directly under this tree.

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

Due to a Discord limitation, this does not work on subcommands.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to add the command to. If not given or `None` then it
becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**guilds: List\[`discord.abc.Snowflake`]**

The list of guilds to add the command to. This cannot be mixed
with the `guild` parameter. If no guilds are given at all
then it becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-commandtree-context-menu-name-nsfw-false-guild-guilds-auto-locale-strings-true-extras"></a>

#### `context_menu( self, *, name: Union[str, locale_str] = MISSING, nsfw: bool = False, guild: Optional[Snowflake] = MISSING, guilds: Sequence[Snowflake] = MISSING, auto_locale_strings: bool = True, extras: Dict[Any, Any] = MISSING,) -> Callable[[ContextMenuCallback], ContextMenu]`

A decorator that creates an application command context menu from a regular function directly under this tree.

This function must have a signature of `discord.Interaction` as its first parameter
and taking either a `discord.Member`, `discord.User`, or `discord.Message`,
or a `typing.Union` of `Member` and `User` as its second parameter.

## Examples

```python3
@app_commands.context_menu()
async def react(interaction: discord.Interaction, message: discord.Message):
    await interaction.response.send_message('Very cool message!', ephemeral=True)

@app_commands.context_menu()
async def ban(interaction: discord.Interaction, user: discord.Member):
    await interaction.response.send_message(f'Should I actually ban {user}...', ephemeral=True)
```

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the context menu command. If not given, it defaults to a title-case
version of the callback name. Note that unlike regular slash commands this can
have spaces and upper case characters in the name.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels. Defaults to `False`.

Due to a Discord limitation, this does not work on subcommands.

**guild: Optional\[`discord.abc.Snowflake`]**

The guild to add the command to. If not given or `None` then it
becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**guilds: List\[`discord.abc.Snowflake`]**

The list of guilds to add the command to. This cannot be mixed
with the `guild` parameter. If no guilds are given at all
then it becomes a global command instead.

```
Due to a Discord limitation, this keyword argument cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-commandtree-error-coro"></a>

#### `error(self, coro: ErrorFunc[ClientT]) -> ErrorFunc[ClientT]`

A decorator that registers a coroutine as a local error handler.

This must match the signature of the `on_error` callback.

The error passed will be derived from `AppCommandError`.

## Parameters

**coro: coroutine**

The coroutine to register as the local error handler.

## Raises

**TypeError**

The coroutine passed is not actually a coroutine or does
not match the signature.

### Commands

##### Command

<a id="api-discord-app-commands-command"></a>

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

<a id="api-discord-app-commands-command-callback"></a>

##### `callback(self) -> CommandCallback[GroupT, P, T]`

- **Ref:** `coroutine <coroutine>`: The coroutine that is executed when the command is called.

<a id="api-discord-app-commands-command-parameters"></a>

##### `parameters(self) -> List[Parameter]`

Returns a list of parameters for this command.

This does not include the `self` or `interaction` parameters.

## Returns

**List\[`Parameter`]**

The parameters of this command.

<a id="api-discord-app-commands-command-get-parameter"></a>

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

<a id="api-discord-app-commands-command-root-parent"></a>

##### `root_parent(self) -> Optional[Group]`

Optional\[`Group`]: The root parent of this command.

<a id="api-discord-app-commands-command-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified command name.

The qualified name includes the parent name as well. For example,
in a command like `/foo bar` the qualified name is `foo bar`.

<a id="api-discord-app-commands-command-add-check"></a>

##### `add_check(self, func: Check, /) -> None`

Adds a check to the command.

This is the non-decorator interface to `check`.

## Parameters

**func**

The function that will be used as a check.

<a id="api-discord-app-commands-command-remove-check"></a>

##### `remove_check(self, func: Check, /) -> None`

Removes a check from the command.

This function is idempotent and will not raise an exception
if the function is not in the command's checks.

## Parameters

**func**

The function to remove from the checks.

<a id="api-command-autocomplete-name"></a>

#### `autocomplete( self, name: str) -> Callable[[AutocompleteCallback[GroupT, ChoiceT]], AutocompleteCallback[GroupT, ChoiceT]]`

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

<a id="api-command-error-coro"></a>

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

##### Parameter

<a id="api-discord-app-commands-parameter"></a>

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

##### ContextMenu

<a id="api-discord-app-commands-contextmenu"></a>

#### `ContextMenu`

A class that implements a context menu application command.

These are usually not created manually, instead they are created using
one of the following decorators:

- `discord.app_commands.context_menu`
- `CommandTree.context_menu`

> **Added in version 2.0**

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the context menu.

**callback: coroutine**

The coroutine that is executed when the command is called.

**type: `.AppCommandType`**

The type of context menu application command. By default, this is inferred
by the parameter of the callback.

**auto\_locale\_strings: `bool`**

If this is set to `True`, then all translatable strings will implicitly
be wrapped into `locale_str` rather than `str`. This could
avoid some repetition and be more ergonomic for certain defaults such
as default command names, command descriptions, and parameter names.
Defaults to `True`.

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.
Defaults to `False`.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

## Attributes

**name: `str`**

The name of the context menu.

**type: `.AppCommandType`**

The type of context menu application command. By default, this is inferred
by the parameter of the callback.

**default\_permissions: Optional\[`discord.Permissions`]**

The default permissions that can execute this command on Discord. Note
that server administrators can override this value in the client.
Setting an empty permissions field will disallow anyone except server
administrators from using the command in a guild.

**guild\_only: `bool`**

Whether the command should only be usable in guild contexts.
Defaults to `False`.

**allowed\_contexts: Optional\[`discord.app_commands.AppCommandContext`]**

The contexts that this context menu is allowed to be used in.
Overrides `guild_only` if set.

> **Added in version 2.4**

**allowed\_installs: Optional\[`discord.app_commands.AppInstallationType`]**

The installation contexts that the command is allowed to be installed
on.

> **Added in version 2.4**

**nsfw: `bool`**

Whether the command is NSFW and should only work in NSFW channels.
Defaults to `False`.

**checks**

A list of predicates that take a `discord.Interaction` parameter
to indicate whether the command callback should be executed. If an exception
is necessary to be thrown to signal failure, then one inherited from

- **Exc:** `AppCommandError` should be used. If all the checks fail without
  propagating an exception, `CheckFailure` is raised.

**extras: `dict`**

A dictionary that can be used to store extraneous data.
The library will not touch any values or keys within this dictionary.

<a id="api-discord-app-commands-contextmenu-callback"></a>

##### `callback(self) -> ContextMenuCallback`

- **Ref:** `coroutine <coroutine>`: The coroutine that is executed when the context menu is called.

<a id="api-discord-app-commands-contextmenu-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified command name.

<a id="api-discord-app-commands-contextmenu-add-check"></a>

##### `add_check(self, func: Check, /) -> None`

Adds a check to the command.

This is the non-decorator interface to `check`.

## Parameters

**func**

The function that will be used as a check.

<a id="api-discord-app-commands-contextmenu-remove-check"></a>

##### `remove_check(self, func: Check, /) -> None`

Removes a check from the command.

This function is idempotent and will not raise an exception
if the function is not in the command's checks.

## Parameters

**func**

The function to remove from the checks.

<a id="api-contextmenu-error-coro"></a>

#### `error(self, coro: UnboundError) -> UnboundError`

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

##### Group

<a id="api-discord-app-commands-group"></a>

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

<a id="api-discord-app-commands-group-root-parent"></a>

##### `root_parent(self) -> Optional[Group]`

Optional\[`Group`]: The parent of this group.

<a id="api-discord-app-commands-group-qualified-name"></a>

##### `qualified_name(self) -> str`

- **Class:** `str`: Returns the fully qualified group name.

The qualified name includes the parent name as well. For example,
in a group like `/foo bar` the qualified name is `foo bar`.

<a id="api-discord-app-commands-group-commands"></a>

##### `commands(self) -> List[Union[Command[Any, ..., Any], Group]]`

List\[Union\[`Command`, `Group`]]: The commands that this group contains.

<a id="api-discord-app-commands-group-walk-commands"></a>

##### `walk_commands(self) -> Generator[Union[Command[Any, ..., Any], Group], None, None]`

An iterator that recursively walks through all commands that this group contains.

## Yields

**Union\[`Command`, `Group`]**

The commands in this group.

<a id="api-discord-app-commands-group-on-error"></a>

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

<a id="api-discord-app-commands-group-interaction-check"></a>

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

<a id="api-discord-app-commands-group-add-command"></a>

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

<a id="api-discord-app-commands-group-remove-command"></a>

##### `remove_command(self, name: str, /) -> Optional[Union[Command[Any, ..., Any], Group]]`

Removes a command or group from the internal list of commands.

## Parameters

**name: `str`**

The name of the command or group to remove.

## Returns

**Optional\[Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]]**

The command that was removed. If nothing was removed
then `None` is returned instead.

<a id="api-discord-app-commands-group-get-command"></a>

##### `get_command(self, name: str, /) -> Optional[Union[Command[Any, ..., Any], Group]]`

Retrieves a command or group from its name.

## Parameters

**name: `str`**

The name of the command or group to retrieve.

## Returns

**Optional\[Union\[`discord.app_commands.Command`, `discord.app_commands.Group`]]**

The command or group that was retrieved. If nothing was found
then `None` is returned instead.

<a id="api-group-command-name-description-nsfw-false-auto-locale-strings-true-extras"></a>

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

<a id="api-group-error-coro"></a>

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

### Decorators

<a id="api-discord-app-commands-command"></a>

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

<a id="api-discord-app-commands-context-menu"></a>

#### `context_menu( *, name: Union[str, locale_str] = MISSING, nsfw: bool = False, auto_locale_strings: bool = True, extras: Dict[Any, Any] = MISSING,) -> Callable[[ContextMenuCallback], ContextMenu]`

Creates an application command context menu from a regular function.

This function must have a signature of `discord.Interaction` as its first parameter
and taking either a `discord.Member`, `discord.User`, or `discord.Message`,
or a `typing.Union` of `Member` and `User` as its second parameter.

## Examples

```python3
@app_commands.context_menu()
async def react(interaction: discord.Interaction, message: discord.Message):
    await interaction.response.send_message('Very cool message!', ephemeral=True)

@app_commands.context_menu()
async def ban(interaction: discord.Interaction, user: discord.Member):
    await interaction.response.send_message(f'Should I actually ban {user}...', ephemeral=True)
```

## Parameters

**name: Union\[`str`, `locale_str`]**

The name of the context menu command. If not given, it defaults to a title-case
version of the callback name. Note that unlike regular slash commands this can
have spaces and upper case characters in the name.

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

<a id="api-discord-app-commands-describe"></a>

#### `describe(**parameters: Union[str, locale_str]) -> Callable[[T], T]`

Describes the given parameters by their name using the key of the keyword argument
as the name.

Example:

```python3
@app_commands.command(description='Bans a member')
@app_commands.describe(member='the member to ban')
async def ban(interaction: discord.Interaction, member: discord.Member):
    await interaction.response.send_message(f'Banned {member}')
```

Alternatively, you can describe parameters using Google, Sphinx, or Numpy style docstrings.

Example:

```python3
@app_commands.command()
async def ban(interaction: discord.Interaction, member: discord.Member):
    """Bans a member

    Parameters
    -----------
    member: discord.Member
        the member to ban
    """
    await interaction.response.send_message(f'Banned {member}')
```

## Parameters

**\*\*parameters: Union\[`str`, `locale_str`]**

The description of the parameters.

## Raises

**TypeError**

The parameter name is not found.

<a id="api-discord-app-commands-rename"></a>

#### `rename(**parameters: Union[str, locale_str]) -> Callable[[T], T]`

Renames the given parameters by their name using the key of the keyword argument
as the name.

This renames the parameter within the Discord UI. When referring to the parameter in other
decorators, the parameter name used in the function is used instead of the renamed one.

Example:

```python3
@app_commands.command()
@app_commands.rename(the_member_to_ban='member')
async def ban(interaction: discord.Interaction, the_member_to_ban: discord.Member):
    await interaction.response.send_message(f'Banned {the_member_to_ban}')
```

## Parameters

**\*\*parameters: Union\[`str`, `locale_str`]**

The name of the parameters.

## Raises

**ValueError**

The parameter name is already used by another parameter.

**TypeError**

The parameter name is not found.

<a id="api-discord-app-commands-choices"></a>

#### `choices(**parameters: List[Choice[ChoiceT]]) -> Callable[[T], T]`

Instructs the given parameters by their name to use the given choices for their choices.

Example:

```python3
@app_commands.command()
@app_commands.describe(fruits='fruits to choose from')
@app_commands.choices(fruits=[
    Choice(name='apple', value=1),
    Choice(name='banana', value=2),
    Choice(name='cherry', value=3),
])
async def fruit(interaction: discord.Interaction, fruits: Choice[int]):
    await interaction.response.send_message(f'Your favourite fruit is {fruits.name}.')
```

> **Note**
> This is not the only way to provide choices to a command. There are two more ergonomic ways
> of doing this. The first one is to use a `typing.Literal` annotation:
>
> ```python3
> @app_commands.command()
> @app_commands.describe(fruits='fruits to choose from')
> async def fruit(interaction: discord.Interaction, fruits: Literal['apple', 'banana', 'cherry']):
>     await interaction.response.send_message(f'Your favourite fruit is {fruits}.')
> ```
>
> The second way is to use an `enum.Enum`:
>
> ```python3
> class Fruits(enum.Enum):
>     apple = 1
>     banana = 2
>     cherry = 3
>
> @app_commands.command()
> @app_commands.describe(fruits='fruits to choose from')
> async def fruit(interaction: discord.Interaction, fruits: Fruits):
>     await interaction.response.send_message(f'Your favourite fruit is {fruits}.')
> ```

## Parameters

**\*\*parameters**

The choices of the parameters.

## Raises

**TypeError**

The parameter name is not found or the parameter type was incorrect.

<a id="api-discord-app-commands-autocomplete"></a>

#### `autocomplete(**parameters: AutocompleteCallback[GroupT, ChoiceT]) -> Callable[[T], T]`

Associates the given parameters with the given autocomplete callback.

Autocomplete is only supported on types that have `str`, `int`, or `float`
values.

- **Func:** `Checks <check>` are supported, however they must be attached to the autocomplete
  callback in order to work. Checks attached to the command are ignored when invoking the autocomplete
  callback.

For more information, see the `Command.autocomplete` documentation.

> **Warning**
> The choices returned from this coroutine are suggestions. The user may ignore them and input their own value.

Example:

```python3
async def fruit_autocomplete(
    interaction: discord.Interaction,
    current: str,
) -> List[app_commands.Choice[str]]:
    fruits = ['Banana', 'Pineapple', 'Apple', 'Watermelon', 'Melon', 'Cherry']
    return [
        app_commands.Choice(name=fruit, value=fruit)
        for fruit in fruits if current.lower() in fruit.lower()
    ]

@app_commands.command()
@app_commands.autocomplete(fruit=fruit_autocomplete)
async def fruits(interaction: discord.Interaction, fruit: str):
    await interaction.response.send_message(f'Your favourite fruit seems to be {fruit}')
```

## Parameters

**\*\*parameters**

The parameters to mark as autocomplete.

## Raises

**TypeError**

The parameter name is not found or the parameter type was incorrect.

<a id="api-discord-app-commands-guilds"></a>

#### `guilds(*guild_ids: Union[Snowflake, int]) -> Callable[[T], T]`

Associates the given guilds with the command.

When the command instance is added to a `CommandTree`, the guilds that are
specified by this decorator become the default guilds that it's added to rather
than being a global command.

If no arguments are given, then the command will not be synced anywhere. This may
be modified later using the `CommandTree.add_command` method.

> **Note**
> Due to an implementation quirk and Python limitation, if this is used in conjunction
> with the `CommandTree.command` or `CommandTree.context_menu` decorator
> then this must go below that decorator.

```
Due to a Discord limitation, this decorator cannot be used in conjunction with
contexts (e.g. `.app_commands.allowed_contexts`) or installation types
(e.g. `.app_commands.allowed_installs`).
```

Example:

```python3
MY_GUILD_ID = discord.Object(...)  # Guild ID here

@app_commands.command()
@app_commands.guilds(MY_GUILD_ID)
async def bonk(interaction: discord.Interaction):
    await interaction.response.send_message('Bonk', ephemeral=True)
```

## Parameters

**\*guild\_ids: Union\[`int`, `discord.abc.Snowflake`]**

The guilds to associate this command with. The command tree will
use this as the default when added rather than adding it as a global
command.

<a id="api-discord-app-commands-guild-only"></a>

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

<a id="api-discord-app-commands-dm-only"></a>

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

<a id="api-discord-app-commands-private-channel-only"></a>

#### `private_channel_only(func: Optional[T] = None) -> Union[T, Callable[[T], T]]`

A decorator that indicates this command can only be used in the context of DMs and group DMs.

This is **not** implemented as a `check`, and is instead verified by Discord server side.
Therefore, there is no error handler called when a command is used within a guild.

This decorator can be called with or without parentheses.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Added in version 2.4**

## Examples

```python3
@app_commands.command()
@app_commands.private_channel_only()
async def my_private_channel_only_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am only available in DMs and GDMs!')
```

<a id="api-discord-app-commands-allowed-contexts"></a>

#### `allowed_contexts(guilds: bool = MISSING, dms: bool = MISSING, private_channels: bool = MISSING) -> Callable[[T], T]`

A decorator that indicates this command can only be used in certain contexts.
Valid contexts are guilds, DMs and private channels.

This is **not** implemented as a `check`, and is instead verified by Discord server side.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Added in version 2.4**

## Examples

```python3
@app_commands.command()
@app_commands.allowed_contexts(guilds=True, dms=False, private_channels=True)
async def my_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am only available in guilds and private channels!')
```

<a id="api-discord-app-commands-user-install"></a>

#### `user_install(func: Optional[T] = None) -> Union[T, Callable[[T], T]]`

A decorator that indicates this command should be installed for users.

This is **not** implemented as a `check`, and is instead verified by Discord server side.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Added in version 2.4**

## Examples

```python3
@app_commands.command()
@app_commands.user_install()
async def my_user_install_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am installed in users by default!')
```

<a id="api-discord-app-commands-guild-install"></a>

#### `guild_install(func: Optional[T] = None) -> Union[T, Callable[[T], T]]`

A decorator that indicates this command should be installed in guilds.

This is **not** implemented as a `check`, and is instead verified by Discord server side.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Added in version 2.4**

## Examples

```python3
@app_commands.command()
@app_commands.guild_install()
async def my_guild_install_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am installed in guilds by default!')
```

<a id="api-discord-app-commands-allowed-installs"></a>

#### `allowed_installs( guilds: bool = MISSING, users: bool = MISSING,) -> Callable[[T], T]`

A decorator that indicates this command should be installed in certain contexts.
Valid contexts are guilds and users.

This is **not** implemented as a `check`, and is instead verified by Discord server side.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Added in version 2.4**

## Examples

```python3
@app_commands.command()
@app_commands.allowed_installs(guilds=False, users=True)
async def my_command(interaction: discord.Interaction) -> None:
    await interaction.response.send_message('I am installed in users by default!')
```

<a id="api-discord-app-commands-default-permissions"></a>

#### `default_permissions(perms_obj: Optional[Permissions] = None, /, **perms: Unpack[_PermissionsKwargs]) -> Callable[[T], T]`

A decorator that sets the default permissions needed to execute this command.

When this decorator is used, by default users must have these permissions to execute the command.
However, an administrator can change the permissions needed to execute this command using the official
client. Therefore, this only serves as a hint.

Setting an empty permissions field, including via calling this with no arguments, will disallow anyone
except server administrators from using the command in a guild.

This is sent to Discord server side, and is not a `check`. Therefore, error handlers are not called.

Due to a Discord limitation, this decorator does nothing in subcommands and is ignored.

> **Warning**
> This serves as a *hint* and members are *not* required to have the permissions given to actually
> execute this command. If you want to ensure that members have the permissions needed, consider using
>
> - **Func:** `~discord.app_commands.checks.has_permissions` instead.

## Parameters

**\*\*perms: `bool`**

Keyword arguments denoting the permissions to set as the default.

**perms\_obj: `discord.Permissions`**

A permissions object as positional argument. This can be used in combination with `**perms`.

> **Added in version 2.5**

## Examples

```python3
@app_commands.command()
@app_commands.default_permissions(manage_messages=True)
async def test(interaction: discord.Interaction):
    await interaction.response.send_message('You may or may not have manage messages.')
```

```python3
ADMIN_PERMS = discord.Permissions(administrator=True)

@app_commands.command()
@app_commands.default_permissions(ADMIN_PERMS, manage_messages=True)
async def test(interaction: discord.Interaction):
    await interaction.response.send_message('You may or may not have manage messages.')
```

### Checks

<a id="api-discord-app-commands-check"></a>

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

<a id="api-discord-app-commands-checks-has-role"></a>

#### `has_role(item: Union[int, str], /) -> Callable[[T], T]`

A `discord.app_commands.check` that is added that checks if the member invoking the
command has the role specified via the name or ID specified.

If a string is specified, you must give the exact name of the role, including
caps and spelling.

If an integer is specified, you must give the exact snowflake ID of the role.

This check raises one of two special exceptions, `discord.app_commands.MissingRole`
if the user is missing a role, or `discord.app_commands.NoPrivateMessage` if
it is used in a private message. Both inherit from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

> **Note**
> This is different from the permission system that Discord provides for application
> commands. This is done entirely locally in the program rather than being handled
> by Discord.

## Parameters

**item: Union\[`int`, `str`]**

The name or ID of the role to check.

<a id="api-discord-app-commands-checks-has-any-role"></a>

#### `has_any_role(*items: Union[int, str]) -> Callable[[T], T]`

A `discord.app_commands.check` that is added that checks if the member
invoking the command has **any** of the roles specified. This means that if they have
one out of the three roles specified, then this check will return `True`.

Similar to `has_role`, the names or IDs passed in must be exact.

This check raises one of two special exceptions, `discord.app_commands.MissingAnyRole`
if the user is missing all roles, or `discord.app_commands.NoPrivateMessage` if
it is used in a private message. Both inherit from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

> **Note**
> This is different from the permission system that Discord provides for application
> commands. This is done entirely locally in the program rather than being handled
> by Discord.

## Parameters

**items: List\[Union\[`str`, `int`]]**

An argument list of names or IDs to check that the member has roles wise.

## Example

```python3
@tree.command()
@app_commands.checks.has_any_role('Library Devs', 'Moderators', 492212595072434186)
async def cool(interaction: discord.Interaction):
    await interaction.response.send_message('You are cool indeed')
```

<a id="api-discord-app-commands-checks-has-permissions"></a>

#### `has_permissions(**perms: Unpack[_PermissionsKwargs]) -> Callable[[T], T]`

A `discord.app_commands.check` that is added that checks if the member
has all of the permissions necessary.

Note that this check operates on the permissions given by

- **Attr:** `discord.Interaction.permissions`.

The permissions passed in must be exactly like the properties shown under

- **Class:** `discord.Permissions`.

This check raises a special exception, `discord.app_commands.MissingPermissions`
that is inherited from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

> **Note**
> This is different from the permission system that Discord provides for application
> commands. This is done entirely locally in the program rather than being handled
> by Discord.

## Parameters

**\*\*perms: `bool`**

Keyword arguments denoting the permissions to check for.

## Example

```python3
@tree.command()
@app_commands.checks.has_permissions(manage_messages=True)
async def test(interaction: discord.Interaction):
    await interaction.response.send_message('You can manage messages.')
```

<a id="api-discord-app-commands-checks-bot-has-permissions"></a>

#### `bot_has_permissions(**perms: Unpack[_PermissionsKwargs]) -> Callable[[T], T]`

Similar to `has_permissions` except checks if the bot itself has
the permissions listed. This relies on `discord.Interaction.app_permissions`.

This check raises a special exception, `discord.app_commands.BotMissingPermissions`
that is inherited from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

<a id="api-discord-app-commands-checks-cooldown"></a>

#### `cooldown( rate: float, per: float, *, key: Optional[CooldownFunction[Hashable]] = MISSING,) -> Callable[[T], T]`

A decorator that adds a cooldown to a command.

A cooldown allows a command to only be used a specific amount
of times in a specific time frame. These cooldowns are based off
of the `key` function provided. If a `key` is not provided
then it defaults to a user-level cooldown. The `key` function
must take a single parameter, the `discord.Interaction` and
return a value that is used as a key to the internal cooldown mapping.

The `key` function can optionally be a coroutine.

If a cooldown is triggered, then `discord.app_commands.CommandOnCooldown` is
raised to the error handlers.

## Examples

Setting a one per 5 seconds per member cooldown on a command:

```python3
@tree.command()
@app_commands.checks.cooldown(1, 5.0, key=lambda i: (i.guild_id, i.user.id))
async def test(interaction: discord.Interaction):
    await interaction.response.send_message('Hello')

@test.error
async def on_test_error(interaction: discord.Interaction, error: app_commands.AppCommandError):
    if isinstance(error, app_commands.CommandOnCooldown):
        await interaction.response.send_message(str(error), ephemeral=True)
```

## Parameters

**rate: `int`**

The number of times a command can be used before triggering a cooldown.

**per: `float`**

The amount of seconds to wait for a cooldown when it's been triggered.

**key: Optional\[Callable\[\[`discord.Interaction`], `collections.abc.Hashable`]]**

A function that returns a key to the mapping denoting the type of cooldown.
Can optionally be a coroutine. If not given then defaults to a user-level
cooldown. If `None` is passed then it is interpreted as a "global" cooldown.

<a id="api-discord-app-commands-checks-dynamic-cooldown"></a>

#### `dynamic_cooldown( factory: CooldownFunction[Optional[Cooldown]], *, key: Optional[CooldownFunction[Hashable]] = MISSING,) -> Callable[[T], T]`

A decorator that adds a dynamic cooldown to a command.

A cooldown allows a command to only be used a specific amount
of times in a specific time frame. These cooldowns are based off
of the `key` function provided. If a `key` is not provided
then it defaults to a user-level cooldown. The `key` function
must take a single parameter, the `discord.Interaction` and
return a value that is used as a key to the internal cooldown mapping.

If a `factory` function is given, it must be a function that
accepts a single parameter of type `discord.Interaction` and must
return a `discord.app_commands.Cooldown` or `None`.
If `None` is returned then that cooldown is effectively bypassed.

Both `key` and `factory` can optionally be coroutines.

If a cooldown is triggered, then `discord.app_commands.CommandOnCooldown` is
raised to the error handlers.

## Examples

Setting a cooldown for everyone but the owner.

```python3
def cooldown_for_everyone_but_me(interaction: discord.Interaction) -> Optional[app_commands.Cooldown]:
    if interaction.user.id == 80088516616269824:
        return None
    return app_commands.Cooldown(1, 10.0)

@tree.command()
@app_commands.checks.dynamic_cooldown(cooldown_for_everyone_but_me)
async def test(interaction: discord.Interaction):
    await interaction.response.send_message('Hello')

@test.error
async def on_test_error(interaction: discord.Interaction, error: app_commands.AppCommandError):
    if isinstance(error, app_commands.CommandOnCooldown):
        await interaction.response.send_message(str(error), ephemeral=True)
```

## Parameters

**factory: Optional\[Callable\[\[`discord.Interaction`], Optional\[`discord.app_commands.Cooldown`]]]**

A function that takes an interaction and returns a cooldown that will apply to that interaction
or `None` if the interaction should not have a cooldown.

**key: Optional\[Callable\[\[`discord.Interaction`], `collections.abc.Hashable`]]**

A function that returns a key to the mapping denoting the type of cooldown.
Can optionally be a coroutine. If not given then defaults to a user-level
cooldown. If `None` is passed then it is interpreted as a "global" cooldown.

### Cooldown

<a id="api-discord-app-commands-cooldown"></a>

#### `Cooldown`

Represents a cooldown for a command.

> **Added in version 2.0**

## Attributes

**rate: `float`**

The total number of tokens available per `per` seconds.

**per: `float`**

The length of the cooldown period in seconds.

<a id="api-discord-app-commands-cooldown-get-tokens"></a>

##### `get_tokens(self, current: Optional[float] = None) -> int`

Returns the number of available tokens before rate limiting is applied.

## Parameters

**current: Optional\[`float`]**

The time in seconds since Unix epoch to calculate tokens at.
If not supplied then `time.time()` is used.

## Returns

**`int`**

The number of tokens available before the cooldown is to be applied.

<a id="api-discord-app-commands-cooldown-get-retry-after"></a>

##### `get_retry_after(self, current: Optional[float] = None) -> float`

Returns the time in seconds until the cooldown will be reset.

## Parameters

**current: Optional\[`float`]**

The current time in seconds since Unix epoch.
If not supplied, then `time.time()` is used.

## Returns

**`float`**

The number of seconds to wait before this cooldown will be reset.

<a id="api-discord-app-commands-cooldown-update-rate-limit"></a>

##### `update_rate_limit(self, current: Optional[float] = None, *, tokens: int = 1) -> Optional[float]`

Updates the cooldown rate limit.

## Parameters

**current: Optional\[`float`]**

The time in seconds since Unix epoch to update the rate limit at.
If not supplied, then `time.time()` is used.

**tokens: `int`**

The amount of tokens to deduct from the rate limit.

## Returns

**Optional\[`float`]**

The retry-after time in seconds if rate limited.

<a id="api-discord-app-commands-cooldown-reset"></a>

##### `reset(self) -> None`

Reset the cooldown to its initial state.

<a id="api-discord-app-commands-cooldown-copy"></a>

##### `copy(self) -> Self`

Creates a copy of this cooldown.

## Returns

**`Cooldown`**

A new instance of this cooldown.

### Namespace

<a id="api-discord-app-commands-namespace"></a>

#### `Namespace`

An object that holds the parameters being passed to a command in a mostly raw state.

This class is deliberately simple and just holds the option name and resolved value as a simple
key-pair mapping. These attributes can be accessed using dot notation. For example, an option
with the name of `example` can be accessed using `ns.example`. If an attribute is not found,
then `None` is returned rather than an attribute error.

> **Warning**
> The key names come from the raw Discord data, which means that if a parameter was renamed then the
> renamed key is used instead of the function parameter name.

> **Added in version 2.0**

<a id="describe-x-y"></a>

#### `x == y`

Checks if two namespaces are equal by checking if all attributes are equal.

<a id="describe-x-y"></a>

#### `x != y`

Checks if two namespaces are not equal.

<a id="describe-x-key"></a>

#### `x[key]`

Returns an attribute if it is found, otherwise raises
a `KeyError`.

<a id="describe-key-in-x"></a>

#### `key in x`

Checks if the attribute is in the namespace.

<a id="describe-iter-x"></a>

#### `iter(x)`

Returns an iterator of `(name, value)` pairs. This allows it
to be, for example, constructed as a dict or a list of pairs.

This namespace object converts resolved objects into their appropriate form depending on their
type. Consult the table below for conversion information.

| Option Type                         | Resolved Type                                         |
| ----------------------------------- | ----------------------------------------------------- |
| `.AppCommandOptionType.string`      | `str`                                                 |
| `.AppCommandOptionType.integer`     | `int`                                                 |
| `.AppCommandOptionType.boolean`     | `bool`                                                |
| `.AppCommandOptionType.number`      | `float`                                               |
| `.AppCommandOptionType.user`        | `discord.User` or `discord.Member`                    |
| `.AppCommandOptionType.channel`     | `.AppCommandChannel` or `.AppCommandThread`           |
| `.AppCommandOptionType.role`        | `discord.Role`                                        |
| `.AppCommandOptionType.mentionable` | `discord.User` or `discord.Member`, or `discord.Role` |
| `.AppCommandOptionType.attachment`  | `discord.Attachment`                                  |

> **Note**
> In autocomplete interactions, the namespace might not be validated or filled in. Discord does not
> send the resolved data as well, so this means that certain fields end up just as IDs rather than
> the resolved data. In these cases, a `discord.Object` is returned instead.
>
> This is a Discord limitation.

### Transformers

##### Transformer

<a id="api-discord-app-commands-transformer"></a>

#### `Transformer(Generic[ClientT])`

The base class that allows a type annotation in an application command parameter
to map into a `discord.AppCommandOptionType` and transform the raw value into one
from this type.

This class is customisable through the overriding of methods and properties in the class
and by using it as the second type parameter of the `discord.app_commands.Transform`
class. For example, to convert a string into a custom pair type:

```python3
class Point(typing.NamedTuple):
    x: int
    y: int

class PointTransformer(app_commands.Transformer):
    async def transform(self, interaction: discord.Interaction, value: str) -> Point:
        (x, _, y) = value.partition(',')
        return Point(x=int(x.strip()), y=int(y.strip()))

@app_commands.command()
async def graph(
    interaction: discord.Interaction,
    point: app_commands.Transform[Point, PointTransformer],
):
    await interaction.response.send_message(str(point))
```

If a class is passed instead of an instance to the second type parameter, then it is
constructed with no arguments passed to the `__init__` method.

> **Added in version 2.0**

<a id="api-discord-app-commands-transformer-type"></a>

##### `type(self) -> AppCommandOptionType`

- **Class:** `~discord.AppCommandOptionType`: The option type associated with this transformer.

This must be a `property`.

Defaults to `discord.AppCommandOptionType.string`.

<a id="api-discord-app-commands-transformer-channel-types"></a>

##### `channel_types(self) -> List[ChannelType]`

List\[`discord.ChannelType`]: A list of channel types that are allowed to this parameter.

Only valid if the `type` returns `discord.AppCommandOptionType.channel`.

This must be a `property`.

Defaults to an empty list.

<a id="api-discord-app-commands-transformer-min-value"></a>

##### `min_value(self) -> Optional[Union[int, float]]`

Optional\[`int`]: The minimum supported value for this parameter.

Only valid if the `type` returns `discord.AppCommandOptionType.number`

- **Attr:** `~discord.AppCommandOptionType.integer`, or `discord.AppCommandOptionType.string`.

This must be a `property`.

Defaults to `None`.

<a id="api-discord-app-commands-transformer-max-value"></a>

##### `max_value(self) -> Optional[Union[int, float]]`

Optional\[`int`]: The maximum supported value for this parameter.

Only valid if the `type` returns `discord.AppCommandOptionType.number`

- **Attr:** `~discord.AppCommandOptionType.integer`, or `discord.AppCommandOptionType.string`.

This must be a `property`.

Defaults to `None`.

<a id="api-discord-app-commands-transformer-choices"></a>

##### `choices(self) -> Optional[List[Choice[Union[int, float, str]]]]`

Optional\[List\[`discord.app_commands.Choice`]]: A list of up to 25 choices that are allowed to this parameter.

Only valid if the `type` returns `discord.AppCommandOptionType.number`

- **Attr:** `~discord.AppCommandOptionType.integer`, or `discord.AppCommandOptionType.string`.

This must be a `property`.

Defaults to `None`.

<a id="api-discord-app-commands-transformer-transform"></a>

##### `transform(self, interaction: Interaction[ClientT], value: Any, /) -> Any`

*possibly a coroutine*

Transforms the converted option value into another value.

The value passed into this transform function is the same as the
one in the `conversion table`.

## Parameters

**interaction: `discord.Interaction`**

The interaction being handled.

**value: Any**

The value of the given argument after being resolved.
See the `conversion table`
for how certain option types correspond to certain values.

<a id="api-discord-app-commands-transformer-autocomplete"></a>

##### `autocomplete( self, interaction: Interaction[ClientT], value: Union[int, float, str], /) -> List[Choice[Union[int, float, str]]]`

*coroutine*

An autocomplete prompt handler to be automatically used by options using this transformer.

> **Note**
> Autocomplete is only supported for options with a `discord.app_commands.Transformer.type`
> of `discord.AppCommandOptionType.string`, `discord.AppCommandOptionType.integer`,
> or `discord.AppCommandOptionType.number`.

## Parameters

**interaction: `discord.Interaction`**

The autocomplete interaction being handled.

**value: Union\[`str`, `int`, `float`]**

The current value entered by the user.

## Returns

**List\[`discord.app_commands.Choice`]**

A list of choices to be displayed to the user, a maximum of 25.

##### Transform

<a id="api-discord-app-commands-transform"></a>

#### `Transform`

A type annotation that can be applied to a parameter to customise the behaviour of
an option type by transforming with the given `Transformer`. This requires
the usage of two generic parameters, the first one is the type you're converting to and the second
one is the type of the `Transformer` actually doing the transformation.

During type checking time this is equivalent to `typing.Annotated` so type checkers understand
the intent of the code.

For example usage, check `Transformer`.

> **Added in version 2.0**

##### Range

<a id="api-discord-app-commands-range"></a>

#### `Range`

A type annotation that can be applied to a parameter to require a numeric or string
type to fit within the range provided.

During type checking time this is equivalent to `typing.Annotated` so type checkers understand
the intent of the code.

Some example ranges:

- `Range[int, 10]` means the minimum is 10 with no maximum.
- `Range[int, None, 10]` means the maximum is 10 with no minimum.
- `Range[int, 1, 10]` means the minimum is 1 and the maximum is 10.
- `Range[float, 1.0, 5.0]` means the minimum is 1.0 and the maximum is 5.0.
- `Range[str, 1, 10]` means the minimum length is 1 and the maximum length is 10.

> **Added in version 2.0**

## Examples

```python3
@app_commands.command()
async def range(interaction: discord.Interaction, value: app_commands.Range[int, 10, 12]):
    await interaction.response.send_message(f'Your value is {value}', ephemeral=True)
```

##### Timestamp

<a id="api-discord-app-commands-timestamp"></a>

#### `Timestamp(Transformer[ClientT])`

A type annotation that can be applied to a parameter for transforming a [Discord style timestamp](https://discord.com/developers/docs/reference#message-formatting) input to a

- **Class:** `datetime.datetime`.

> **Added in version 2.7**

> **Warning**
> Due to a Discord limitation, no timezone is provided with the input. The UTC timezone has been supplanted instead.

## Examples

```python3
@app_commands.command()
async def datetime(interaction: discord.Interaction, value: app_commands.Timestamp):
    await interaction.response.send_message(value.isoformat())
```

### Translations

##### Translator

<a id="api-discord-app-commands-translator"></a>

#### `Translator`

A class that handles translations for commands, parameters, and choices.

Translations are done lazily in order to allow for async enabled translations as well
as supporting a wide array of translation systems such as `gettext` and
[Project Fluent](https://projectfluent.org).

In order for a translator to be used, it must be set using the `CommandTree.set_translator`
method. The translation flow for a string is as follows:

1. Use `locale_str` instead of `str` in areas of a command you want to be translated.
   - Currently, these are command names, command descriptions, parameter names, parameter descriptions, and choice names.
   - This can also be used inside the `discord.app_commands.describe` decorator.
2. Call `CommandTree.set_translator` to the translator instance that will handle the translations.
3. Call `CommandTree.sync`
4. The library will call `Translator.translate` on all the relevant strings being translated.

> **Added in version 2.0**

<a id="api-discord-app-commands-translator-load"></a>

##### `load(self) -> None`

*coroutine*

An asynchronous setup function for loading the translation system.

The default implementation does nothing.

This is invoked when `CommandTree.set_translator` is called.

<a id="api-discord-app-commands-translator-unload"></a>

##### `unload(self) -> None`

*coroutine*

An asynchronous teardown function for unloading the translation system.

The default implementation does nothing.

This is invoked when `CommandTree.set_translator` is called
if a tree already has a translator or when `discord.Client.close` is called.

<a id="api-discord-app-commands-translator-translate"></a>

##### `translate(self, string: locale_str, locale: Locale, context: TranslationContextTypes) -> Optional[str]`

*coroutine*

Translates the given string to the specified locale.

If the string cannot be translated, `None` should be returned.

The default implementation returns `None`.

If an exception is raised in this method, it should inherit from `TranslationError`.
If it doesn't, then when this is called the exception will be chained with it instead.

## Parameters

**string: `locale_str`**

The string being translated.

**locale: `discord.Locale`**

The locale being requested for translation.

**context: `TranslationContext`**

The translation context where the string originated from.
For better type checking ergonomics, the `TranslationContextTypes`
type can be used instead to aid with type narrowing. It is functionally
equivalent to `TranslationContext`.

##### locale\_str

<a id="api-discord-app-commands-locale-str"></a>

#### `locale_str`

Marks a string as ready for translation.

This is done lazily and is not actually translated until `CommandTree.sync` is called.

The sync method then ultimately defers the responsibility of translating to the `Translator`
instance used by the `CommandTree`. For more information on the translation flow, see the

- **Class:** `Translator` documentation.

<a id="describe-str-x"></a>

#### `str(x)`

Returns the message passed to the string.

<a id="describe-x-y"></a>

#### `x == y`

Checks if the string is equal to another string.

<a id="describe-x-y"></a>

#### `x != y`

Checks if the string is not equal to another string.

<a id="describe-hash-x"></a>

#### `hash(x)`

Returns the hash of the string.

> **Added in version 2.0**

## Attributes

**message: `str`**

The message being translated. Once set, this cannot be changed.

> **Warning**
> This must be the default "message" that you send to Discord.
> Discord sends this message back to the library and the library
> uses it to access the data in order to dispatch commands.
>
> For example, in a command name context, if the command
> name is `foo` then the message *must* also be `foo`.
> For other translation systems that require a message ID such
> as Fluent, consider using a keyword argument to pass it in.

**extras: `dict`**

A dict of user provided extras to attach to the translated string.
This can be used to add more context, information, or any metadata necessary
to aid in actually translating the string.

Since these are passed via keyword arguments, the keys are strings.

##### TranslationContext

<a id="api-discord-app-commands-translationcontext"></a>

#### `TranslationContext(Generic[_L, _D])`

A class that provides context for the `locale_str` being translated.

This is useful to determine where exactly the string is located and aid in looking
up the actual translation.

## Attributes

**location: `TranslationContextLocation`**

The location where this string is located.

**data: Any**

The extraneous data that is being translated.

##### TranslationContextLocation

<a id="class-translationcontextlocation"></a>

#### `TranslationContextLocation`

An enum representing the location context that the translation occurs in when requested for translation.

> **Added in version 2.0**

<a id="attribute-command-name"></a>

##### `command_name`

The translation involved a command name.

<a id="attribute-command-description"></a>

##### `command_description`

The translation involved a command description.

<a id="attribute-group-name"></a>

##### `group_name`

The translation involved a group name.

<a id="attribute-group-description"></a>

##### `group_description`

The translation involved a group description.

<a id="attribute-parameter-name"></a>

##### `parameter_name`

The translation involved a parameter name.

<a id="attribute-parameter-description"></a>

##### `parameter_description`

The translation involved a parameter description.

<a id="attribute-choice-name"></a>

##### `choice_name`

The translation involved a choice name.

<a id="attribute-other"></a>

##### `other`

The translation involved something else entirely. This is useful for running

- **Meth:** `Translator.translate` for custom usage.

### Exceptions

<a id="api-discord-app-commands-appcommanderror"></a>

#### `AppCommandError(DiscordException)`

The base exception type for all application command related errors.

This inherits from `discord.DiscordException`.

This exception and exceptions inherited from it are handled
in a special way as they are caught and passed into various error handlers
in this order:

- `Command.error`
- `Group.on_error`
- `CommandTree.on_error`

> **Added in version 2.0**

<a id="api-discord-app-commands-commandinvokeerror"></a>

#### `CommandInvokeError(AppCommandError)`

An exception raised when the command being invoked raised an exception.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

## Attributes

**original: `Exception`**

The original exception that was raised. You can also get this via
the `__cause__` attribute.

**command: Union\[`Command`, `ContextMenu`]**

The command that failed.

<a id="api-discord-app-commands-transformererror"></a>

#### `TransformerError(AppCommandError)`

An exception raised when a `Transformer` or type annotation fails to
convert to its target type.

This inherits from `discord.app_commands.AppCommandError`.

If an exception occurs while converting that does not subclass

- **Exc:** `AppCommandError` then the exception is wrapped into this exception.
  The original exception can be retrieved using the `__cause__` attribute.
  Otherwise if the exception derives from `AppCommandError` then it will
  be propagated as-is.

> **Added in version 2.0**

## Attributes

**value: Any**

The value that failed to convert.

**type: `discord.AppCommandOptionType`**

The type of argument that failed to convert.

**transformer: `Transformer`**

The transformer that failed the conversion.

<a id="api-discord-app-commands-translationerror"></a>

#### `TranslationError(AppCommandError)`

An exception raised when the library fails to translate a string.

This inherits from `discord.app_commands.AppCommandError`.

If an exception occurs while calling `Translator.translate` that does
not subclass this then the exception is wrapped into this exception.
The original exception can be retrieved using the `__cause__` attribute.
Otherwise it will be propagated as-is.

> **Added in version 2.0**

## Attributes

**string: Optional\[Union\[`str`, `locale_str`]]**

The string that caused the error, if any.

**locale: Optional\[`discord.Locale`]**

The locale that caused the error, if any.

**context: `discord.app_commands.TranslationContext`**

The context of the translation that triggered the error.

<a id="api-discord-app-commands-checkfailure"></a>

#### `CheckFailure(AppCommandError)`

An exception raised when check predicates in a command have failed.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

<a id="api-discord-app-commands-noprivatemessage"></a>

#### `NoPrivateMessage(CheckFailure)`

An exception raised when a command does not work in a direct message.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

<a id="api-discord-app-commands-missingrole"></a>

#### `MissingRole(CheckFailure)`

An exception raised when the command invoker lacks a role to run a command.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

## Attributes

**missing\_role: Union\[`str`, `int`]**

The required role that is missing.
This is the parameter passed to `discord.app_commands.checks.has_role`.

<a id="api-discord-app-commands-missinganyrole"></a>

#### `MissingAnyRole(CheckFailure)`

An exception raised when the command invoker lacks any of the roles
specified to run a command.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

## Attributes

**missing\_roles: List\[Union\[`str`, `int`]]**

The roles that the invoker is missing.
These are the parameters passed to `discord.app_commands.checks.has_any_role`.

<a id="api-discord-app-commands-missingpermissions"></a>

#### `MissingPermissions(CheckFailure)`

An exception raised when the command invoker lacks permissions to run a
command.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

## Attributes

**missing\_permissions: List\[`str`]**

The required permissions that are missing.

<a id="api-discord-app-commands-botmissingpermissions"></a>

#### `BotMissingPermissions(CheckFailure)`

An exception raised when the bot's member lacks permissions to run a
command.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

## Attributes

**missing\_permissions: List\[`str`]**

The required permissions that are missing.

<a id="api-discord-app-commands-commandoncooldown"></a>

#### `CommandOnCooldown(CheckFailure)`

An exception raised when the command being invoked is on cooldown.

This inherits from `discord.app_commands.CheckFailure`.

> **Added in version 2.0**

## Attributes

**cooldown: `discord.app_commands.Cooldown`**

The cooldown that was triggered.

**retry\_after: `float`**

The amount of seconds to wait before you can retry again.

<a id="api-discord-app-commands-commandlimitreached"></a>

#### `CommandLimitReached(AppCommandError)`

An exception raised when the maximum number of application commands was reached
either globally or in a guild.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

## Attributes

**type: `discord.AppCommandType`**

The type of command that reached the limit.

**guild\_id: Optional\[`int`]**

The guild ID that reached the limit or `None` if it was global.

**limit: `int`**

The limit that was hit.

<a id="api-discord-app-commands-commandalreadyregistered"></a>

#### `CommandAlreadyRegistered(AppCommandError)`

An exception raised when a command is already registered.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

## Attributes

**name: `str`**

The name of the command already registered.

**guild\_id: Optional\[`int`]**

The guild ID this command was already registered at.
If `None` then it was a global command.

<a id="api-discord-app-commands-commandsignaturemismatch"></a>

#### `CommandSignatureMismatch(AppCommandError)`

An exception raised when an application command from Discord has a different signature
from the one provided in the code. This happens because your command definition differs
from the command definition you provided Discord. Either your code is out of date or the
data from Discord is out of sync.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

## Attributes

**command: Union\[`.app_commands.Command`, `.app_commands.ContextMenu`, `.app_commands.Group`]**

The command that had the signature mismatch.

<a id="api-discord-app-commands-commandnotfound"></a>

#### `CommandNotFound(AppCommandError)`

An exception raised when an application command could not be found.

This inherits from `discord.app_commands.AppCommandError`.

> **Added in version 2.0**

## Attributes

**name: `str`**

The name of the application command not found.

**parents: List\[`str`]**

A list of parent command names that were previously found
prior to the application command not being found.

**type: `discord.AppCommandType`**

The type of command that was not found.

<a id="api-discord-app-commands-commandsyncfailure"></a>

#### `CommandSyncFailure(AppCommandError, HTTPException)`

An exception raised when `CommandTree.sync` failed.

This provides syncing failures in a slightly more readable format.

This inherits from `discord.app_commands.AppCommandError`
and `discord.HTTPException`.

> **Added in version 2.0**

##### Exception Hierarchy

- `discord.DiscordException`
  - `discord.app_commands.AppCommandError`
    - `discord.app_commands.CommandInvokeError`
    - `discord.app_commands.TransformerError`
    - `discord.app_commands.TranslationError`
    - `discord.app_commands.CheckFailure`
      - `discord.app_commands.NoPrivateMessage`
      - `discord.app_commands.MissingRole`
      - `discord.app_commands.MissingAnyRole`
      - `discord.app_commands.MissingPermissions`
      - `discord.app_commands.BotMissingPermissions`
      - `discord.app_commands.CommandOnCooldown`
    - `discord.app_commands.CommandLimitReached`
    - `discord.app_commands.CommandAlreadyRegistered`
    - `discord.app_commands.CommandSignatureMismatch`
    - `discord.app_commands.CommandNotFound`
    - `discord.MissingApplicationID`
    - `discord.app_commands.CommandSyncFailure`
  - `discord.HTTPException`
    - `discord.app_commands.CommandSyncFailure`
