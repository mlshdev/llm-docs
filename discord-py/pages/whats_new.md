> Tag-pinned source for discord.py v2.7.1: [docs/whats_new.rst](https://github.com/Rapptz/discord.py/blob/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/docs/whats_new.rst)

<a id="whats-new"></a>

# Changelog

This page keeps a detailed human friendly rendering of what's new and changed
in specific versions.

<a id="vp2p7p1"></a>

## v2.7.1

### Bug Fixes

- Fix memory leak when using `ui.LayoutView` and removing items but those items not being removed from internal cache.
- Fix `aiohttp` deprecation warning for websocket timeouts ([GH-10418](https://github.com/Rapptz/discord.py/issues/10418))

### Miscellaneous

- Show `davey` dependency output in `python -m discord --version` to debug DAVE issues
- Raise an error and warn when `davey` is not installed and using voice
- Change how views are bound to the internal cache when using interactions

<a id="vp2p7p0"></a>

## v2.7.0

### New Features

- Add DAVE protocol support for voice connections ([GH-10300](https://github.com/Rapptz/discord.py/issues/10300))

- Add support for new `ui.Modal` components ([GH-10390](https://github.com/Rapptz/discord.py/issues/10390))
  - `CheckboxGroupComponent` corresponds to `ui.CheckboxGroup`
  - `CheckboxComponent` corresponds to `ui.Checkbox`
  - `RadioGroupComponent` corresponds to `ui.RadioGroup`
  - `CheckboxGroupOption` and `RadioGroupOption` allow creating these options

- Add timestamp converter and transformer for use with new `@time` markdown option ([GH-10388](https://github.com/Rapptz/discord.py/issues/10388))
  - This is accessible via `app_commands.Timestamp` and `ext.commands.Timestamp` as an annotation

- Add several new permissions:
  - `Permissions.bypass_slowmode` ([GH-10350](https://github.com/Rapptz/discord.py/issues/10350))
  - `Permissions.set_voice_channel_status` ([GH-10279](https://github.com/Rapptz/discord.py/issues/10279))
  - `Permissions.pin_messages`

- Add `client` parameter to `PartialEmoji.from_str` ([GH-10407](https://github.com/Rapptz/discord.py/issues/10407))

- Add support for user collectibles accessible via `User.collectibles` and `Member.collectibles` ([GH-10277](https://github.com/Rapptz/discord.py/issues/10277))

- Add `Message.is_forwardable` to check if a message can be forwarded ([GH-10353](https://github.com/Rapptz/discord.py/issues/10353))

- Add support for getting an integration's scopes ([GH-10352](https://github.com/Rapptz/discord.py/issues/10352))

- Add `Interaction.command_id` and `Interaction.custom_id` helpers ([GH-10321](https://github.com/Rapptz/discord.py/issues/10321))

- Support new fields in `Member.edit` ([GH-10303](https://github.com/Rapptz/discord.py/issues/10303))

- Add support for getting role member counts via `Guild.role_member_counts`

- Add `MessageType.is_deletable`

- Add `reason` keyword argument to `Client.delete_invite` ([GH-10318](https://github.com/Rapptz/discord.py/issues/10318), [GH-10340](https://github.com/Rapptz/discord.py/issues/10340))

- Add `silent` parameter to `ForumChannel.create_thread` ([GH-10304](https://github.com/Rapptz/discord.py/issues/10304))

- Add support for `MessageType.emoji_added` ([GH-10284](https://github.com/Rapptz/discord.py/issues/10284))

- Add channel attribute to automod quarantine user AuditLogAction ([GH-10274](https://github.com/Rapptz/discord.py/issues/10274))

### Bug Fixes

- Fix FFmpeg errors not sent to after callback ([GH-10387](https://github.com/Rapptz/discord.py/issues/10387))
- Fix `Webhook.edit_message` missing the view parameter ([GH-10395](https://github.com/Rapptz/discord.py/issues/10395), [GH-10398](https://github.com/Rapptz/discord.py/issues/10398))
- Fix `TextChannel.purge` failing when encountering certain system messages
- Fix `Message.call` raising an attribute error when accessed ([GH-10404](https://github.com/Rapptz/discord.py/issues/10404))
- Fix certain component IDs not being able to be settable afterwards
- Fix `ui.Modal` not raising when hitting the 5 item limit
- Fix `ui.Item.row` not being set appropriately when used in a `ui.Modal` ([GH-10397](https://github.com/Rapptz/discord.py/issues/10397))
- Fix `compression.zstd` not working as expected when Discord does not send encoding information ([GH-10344](https://github.com/Rapptz/discord.py/issues/10344))
- Fix rare bug where `Client.latency` was incorrect due to not updating heartbeat state
- Fix overzealous exporting of symbols within an internal `primary_guild` module ([GH-10295](https://github.com/Rapptz/discord.py/issues/10295))
- Close websocket when reconnecting websocket during polling ([GH-10409](https://github.com/Rapptz/discord.py/issues/10409))
- Use `ui.View.walk_children` when removing items from the view cache ([GH-10402](https://github.com/Rapptz/discord.py/issues/10402))
- |commands| Fix flag annotations not working under Python 3.14
- |commands| Fix decorator order mattering for hybrid commands
- |commands| Fix `ext.commands.Context.from_interaction` derived `Message.type` being incorrect

### Miscellaneous

- Allow `ui.View` initialization without a running event loop ([GH-10367](https://github.com/Rapptz/discord.py/issues/10367))
- Optimise `utils.find` and specialise `utils.as_chunks` ([GH-10351](https://github.com/Rapptz/discord.py/issues/10351))
- Detach `ui.Item.view` when the item is removed ([GH-10348](https://github.com/Rapptz/discord.py/issues/10348))
- Change `description` to be optional when creating emoji ([GH-10346](https://github.com/Rapptz/discord.py/issues/10346))
- Don't assume Python 3.14 always has `compression.zstd` ([GH-10328](https://github.com/Rapptz/discord.py/issues/10328))
- Use webp as the default emoji URL format
- |tasks| Log handled exceptions before sleeping

<a id="vp2p6p4"></a>

## v2.6.4

### Bug Fixes

- Fix `InviteType` and `ReactionType` not being exported ([GH-10310](https://github.com/Rapptz/discord.py/issues/10310))
- Fix `ui.Modal` submits not working for components without a `custom_id` ([GH-10307](https://github.com/Rapptz/discord.py/issues/10307))
- Fix `required` keyword argument missing in most `ui.Select` classes ([GH-10307](https://github.com/Rapptz/discord.py/issues/10307))
- Fix incorrect handling of `ui.Modal` submit data when using selects ([GH-10307](https://github.com/Rapptz/discord.py/issues/10307))
- Fix potential exception when assigning `ui.Container.children`
- Fix `ui.Section.accessory` setter not updating internal state leading to an exception

### Miscellaneous

- Use `compression.zstd` from the standard library if available on Python 3.14 ([GH-10323](https://github.com/Rapptz/discord.py/issues/10323))

<a id="vp2p6p3"></a>

## v2.6.3

### Bug Fixes

- Fix `ui.Select.required` not being applied properly
- Fix potential attribute error when accessing `LabelComponent`
- Fix issue when stacking decorators such as `app_commands.guild_install` and `app_commands.user_install`

<a id="vp2p6p2"></a>

## v2.6.2

### Bug Fixes

- Fix a bug with `ui.DynamicItem` causing it to fail at runtime when passing a generic.

<a id="vp2p6p1"></a>

## v2.6.1

### Bug Fixes

- Fix `ui.Section.children` and `ui.Section.accessory` having `None` as the `Item.parent` ([GH-10269](https://github.com/Rapptz/discord.py/issues/10269))
- Fix error when using a `ui.DynamicItem` inside an `ui.Section`
- Fix `ui.DynamicItem` not working when set as an `ui.Section.acessory` ([GH-10271](https://github.com/Rapptz/discord.py/issues/10271))
- Fix `ui.LayoutView.total_children_count` being inaccurate when adding nested items
- Fix crash when accessing `AuditLogEntry.category` for unknown audit log actions
- |tasks| Add logging statement when a handled exception occurs ([GH-10276](https://github.com/Rapptz/discord.py/issues/10276))

<a id="vp2p6p0"></a>

## v2.6.0

### New Features

- Add support for Discord's "Components v2" ([GH-10166](https://github.com/Rapptz/discord.py/issues/10166))
  - A new `ui.LayoutView` is used to use these components which requires manual layouting.
  - Backwards compatibility is maintained with everything, including `ui.DynamicItem`.
  - Adds the following new components with their UI counterpart
    - `SectionComponent` corresponds to  `ui.Section`
    - `TextDisplay` corresponds to  `ui.TextDisplay`
    - `ThumbnailComponent` corresponds to  `ui.Thumbnail`
    - `MediaGalleryComponent` corresponds to  `ui.MediaGallery`
    - `FileComponent` corresponds to  `ui.File`
    - `SeparatorComponent` corresponds to  `ui.Separator`
    - `Container` corresponds to  `ui.Container`
    - `ActionRow` corresponds to  `ui.ActionRow`

- Add support for the first phase for `discord.ui.Modal` improvements.
  - This allows `discord.ui.Select` within modals
  - This also allows `discord.ui.Label` for better control of the forms within modals.
  - This changes `discord.ui.TextInput.label` to be optional and is deprecated over `discord.ui.Label`.
  - As of this writing, this Discord update is not available to users yet.

- Add support for guild tags (also known as primary guilds) ([GH-10211](https://github.com/Rapptz/discord.py/issues/10211))
  - This is through the `PrimaryGuild` class.
  - You retrieve this via `Member.primary_guild`.

- Add support for the new pins endpoint ([GH-10205](https://github.com/Rapptz/discord.py/issues/10205))
  - This turns `abc.Messageable.pins` into an async iterator.
  - The old eager behaviour of using `await` is still supported, but is now deprecated.

- Add support for guild onboarding ([GH-10226](https://github.com/Rapptz/discord.py/issues/10226), [GH-9260](https://github.com/Rapptz/discord.py/issues/9260))

- Add support for `MemberFlags.automod_quarantined_guild_tag` ([GH-10236](https://github.com/Rapptz/discord.py/issues/10236))

- Add support new gradient and holographic role colours ([GH-10214](https://github.com/Rapptz/discord.py/issues/10214), [GH-10225](https://github.com/Rapptz/discord.py/issues/10225))

- Add `Locale.language_code` attribute ([GH-10222](https://github.com/Rapptz/discord.py/issues/10222))

- Add support for guest invites ([GH-10220](https://github.com/Rapptz/discord.py/issues/10220))

- Add `File.uri` to get the `attachment://<filename>` URI of a file

- Add support for `InteractionResponse.launch_activity` responses ([GH-10193](https://github.com/Rapptz/discord.py/issues/10193))

- Add ability to create a media-only forum channel via `media` parameter in `Guild.create_forum` ([GH-10170](https://github.com/Rapptz/discord.py/issues/10170))

- Add `Interaction.filesize_limit` ([GH-10159](https://github.com/Rapptz/discord.py/issues/10159))

- Add new colours from the new Discord themes ([GH-10152](https://github.com/Rapptz/discord.py/issues/10152))
  - This updates the old `Colour.dark_theme`, `Colour.light_theme`, `Colour.light_embed` and `Colour.dark_embed`
  - This adds `Colour.ash_theme`, `Colour.ash_embed`, `Colour.onyx_theme`, and `Colour.onyx_embed`

- Add support for new fields to read in `Activity` ([GH-10227](https://github.com/Rapptz/discord.py/issues/10227))
  - Adds the new `StatusDisplayType` enum

- Add `Permissions.apps` classmethod category ([GH-10147](https://github.com/Rapptz/discord.py/issues/10147))

- Add more attributes to `app_commands.AppCommandThread` and `app_commands.AppCommandChannel` ([GH-10180](https://github.com/Rapptz/discord.py/issues/10180), [GH-10252](https://github.com/Rapptz/discord.py/issues/10252))

### Bug Fixes

- Fix context install decorators to explicitly restrict commands
- Fix error when sending non-interactive views via partial webhooks ([GH-10235](https://github.com/Rapptz/discord.py/issues/10235))
- Fix voice connection issues and upgrade the voice version to 8 ([GH-10210](https://github.com/Rapptz/discord.py/issues/10210))
- Fix calculation of hashed rate limit keys ([GH-10215](https://github.com/Rapptz/discord.py/issues/10215))
- Fix `Thread.applied_tags` being empty for media channels ([GH-10178](https://github.com/Rapptz/discord.py/issues/10178))
- Fix `Embed.to_dict` for user-inherited Embed classes ([GH-10173](https://github.com/Rapptz/discord.py/issues/10173))
- Fix potentially stuck ratelimit buckets in certain circumstances ([GH-10160](https://github.com/Rapptz/discord.py/issues/10160))
- Fix `__bool__` being incorrect for `Embed` ([GH-10154](https://github.com/Rapptz/discord.py/issues/10154))
- Fix audit log `automod_rule_trigger_type` extra being missing ([GH-10244](https://github.com/Rapptz/discord.py/issues/10244))
- Properly transform media channels in app commands ([GH-10177](https://github.com/Rapptz/discord.py/issues/10177))
- |commands| Fix certain converters not working under `Optional` type hint in hybrids ([GH-10239](https://github.com/Rapptz/discord.py/issues/10239), [GH-10245](https://github.com/Rapptz/discord.py/issues/10245))

### Miscellaneous

- Skip `GUILD_MEMBER_ADD` if the member is already cached ([GH-10238](https://github.com/Rapptz/discord.py/issues/10238))
- Deprecate various methods involving guild creation ([GH-10164](https://github.com/Rapptz/discord.py/issues/10164), [GH-10246](https://github.com/Rapptz/discord.py/issues/10246))
- Deprecate the `with_expiration` parameter in `Client.fetch_invite` ([GH-10259](https://github.com/Rapptz/discord.py/issues/10259))
- Allow creating NSFW voice/stage channels ([GH-10200](https://github.com/Rapptz/discord.py/issues/10200))
- The `Invite` is now returned when using `Invite.delete` or `Client.delete_invite` ([GH-10181](https://github.com/Rapptz/discord.py/issues/10181))
- Copy Select options when creating View class ([GH-10143](https://github.com/Rapptz/discord.py/issues/10143))
- Update PyNaCl minimum version dependency ([GH-10127](https://github.com/Rapptz/discord.py/issues/10127))

<a id="vp2p5p2"></a>

## v2.5.2

### Bug Fixes

- Fix a serialization issue when sending embeds ([GH-10126](https://github.com/Rapptz/discord.py/issues/10126))

<a id="vp2p5p1"></a>

## v2.5.1

### Bug Fixes

- Fix `InteractionCallbackResponse.resource` having incorrect state ([GH-10107](https://github.com/Rapptz/discord.py/issues/10107))
- Create `ScheduledEvent` on cache miss for `on_scheduled_event_delete` ([GH-10113](https://github.com/Rapptz/discord.py/issues/10113))
- Add defaults for `Message` creation preventing some crashes ([GH-10115](https://github.com/Rapptz/discord.py/issues/10115))
- Fix `Attachment.is_spoiler` and `Attachment.is_voice_message` being incorrect ([GH-10122](https://github.com/Rapptz/discord.py/issues/10122))

<a id="vp2p5p0"></a>

## v2.5.0

### New Features

- Add support for message forwarding ([GH-9950](https://github.com/Rapptz/discord.py/issues/9950))
  - Adds `MessageReferenceType`
  - Adds `MessageSnapshot`
  - Adds `type` parameter to `MessageReference`, `MessageReference.from_message`, and `PartialMessage.to_reference`
  - Add `PartialMessage.forward`

- Add SKU subscriptions support ([GH-9930](https://github.com/Rapptz/discord.py/issues/9930))
  - Adds new events `on_subscription_create`, `on_subscription_update`, and `on_subscription_delete`
  - Add `SubscriptionStatus` enum
  - Add `Subscription` model
  - Add `SKU.fetch_subscription` and `SKU.subscriptions`

- Add support for application emojis ([GH-9891](https://github.com/Rapptz/discord.py/issues/9891))
  - Add `Client.create_application_emoji`
  - Add `Client.fetch_application_emoji`
  - Add `Client.fetch_application_emojis`
  - Add `Emoji.is_application_owned`

- Support for Soundboard and VC effects ([GH-9349](https://github.com/Rapptz/discord.py/issues/9349))
  - Add `BaseSoundboardSound`, `SoundboardDefaultSound`, and `SoundboardSound`
  - Add `VoiceChannelEffect`
  - Add `VoiceChannelEffectAnimation`
  - Add `VoiceChannelEffectAnimationType`
  - Add `VoiceChannelSoundEffect`
  - Add `VoiceChannel.send_sound`
  - Add new audit log actions: `AuditLogAction.soundboard_sound_create`, `AuditLogAction.soundboard_sound_update`, and `AuditLogAction.soundboard_sound_delete`.
  - Add `Intents.expressions` and make `Intents.emojis` and `Intents.emojis_and_stickers` aliases of that intent.
  - Add new events: `on_soundboard_sound_create`, `on_soundboard_sound_update`, `on_soundboard_sound_delete`, and `on_voice_channel_effect`.
  - Add methods and properties dealing with soundboards:
    - `Client.soundboard_sounds`
    - `Guild.soundboard_sounds`
    - `Client.get_soundboard_sound`
    - `Guild.get_soundboard_sound`
    - `Client.fetch_soundboard_default_sounds`
    - `Guild.fetch_soundboard_sound`
    - `Guild.fetch_soundboard_sounds`
    - `Guild.create_soundboard_sound`

- Add support for retrieving interaction responses when sending a response ([GH-9957](https://github.com/Rapptz/discord.py/issues/9957))
  - Methods from `InteractionResponse` now return `InteractionCallbackResponse`
  - Depending on the interaction response type, `InteractionCallbackResponse.resource` will be different

- Add `PartialWebhookChannel.mention` attribute ([GH-10101](https://github.com/Rapptz/discord.py/issues/10101))

- Add support for sending stateless views for `SyncWebhook` or webhooks with no state ([GH-10089](https://github.com/Rapptz/discord.py/issues/10089))

- Add richer `Role.move` interface ([GH-10100](https://github.com/Rapptz/discord.py/issues/10100))

- Add support for `EmbedFlags` via `Embed.flags` ([GH-10085](https://github.com/Rapptz/discord.py/issues/10085))

- Add new flags for `AttachmentFlags` ([GH-10085](https://github.com/Rapptz/discord.py/issues/10085))

- Add `on_raw_presence_update` event that does not depend on cache state ([GH-10048](https://github.com/Rapptz/discord.py/issues/10048))
  - This requires setting the `enable_raw_presences` keyword argument within `Client`.

- Add `ForumChannel.members` property. ([GH-10034](https://github.com/Rapptz/discord.py/issues/10034))

- Add `exclude_deleted` parameter to `Client.entitlements` ([GH-10027](https://github.com/Rapptz/discord.py/issues/10027))

- Add `Client.fetch_guild_preview` ([GH-9986](https://github.com/Rapptz/discord.py/issues/9986))

- Add `AutoShardedClient.fetch_session_start_limits` ([GH-10007](https://github.com/Rapptz/discord.py/issues/10007))

- Add `PartialMessageable.mention` ([GH-9988](https://github.com/Rapptz/discord.py/issues/9988))

- Add command target to `MessageInteractionMetadata` ([GH-10004](https://github.com/Rapptz/discord.py/issues/10004))
  - `MessageInteractionMetadata.target_user`
  - `MessageInteractionMetadata.target_message_id`
  - `MessageInteractionMetadata.target_message`

- Add `Message.forward` flag ([GH-9978](https://github.com/Rapptz/discord.py/issues/9978))

- Add support for purchase notification messages ([GH-9906](https://github.com/Rapptz/discord.py/issues/9906))
  - Add new type `MessageType.purchase_notification`
  - Add new models `GuildProductPurchase` and `PurchaseNotification`
  - Add `Message.purchase_notification`

- Add `category` parameter to `.abc.GuildChannel.clone` ([GH-9941](https://github.com/Rapptz/discord.py/issues/9941))

- Add support for message call ([GH-9911](https://github.com/Rapptz/discord.py/issues/9911))
  - Add new models `CallMessage`
  - Add `Message.call` attribute

- Parse full message for message edit event ([GH-10035](https://github.com/Rapptz/discord.py/issues/10035))
  - Adds `RawMessageUpdateEvent.message` attribute
  - Potentially speeds up `on_message_edit` by no longer copying data

- Add support for retrieving and editing integration type configuration ([GH-9818](https://github.com/Rapptz/discord.py/issues/9818))
  - This adds `IntegrationTypeConfig`
  - Retrievable via `AppInfo.guild_integration_config` and `AppInfo.user_integration_config`.
  - Editable via `AppInfo.edit`

- Allow passing `None` for `scopes` parameter in `utils.oauth_url` ([GH-10078](https://github.com/Rapptz/discord.py/issues/10078))

- Add support for `MessageType.poll_result` messages ([GH-9905](https://github.com/Rapptz/discord.py/issues/9905))

- Add various new `MessageFlags`

- Add `Member.fetch_voice` ([GH-9908](https://github.com/Rapptz/discord.py/issues/9908))

- Add `Guild.dm_spam_detected_at` and `Guild.is_dm_spam_detected` ([GH-9808](https://github.com/Rapptz/discord.py/issues/9808))

- Add `Guild.raid_detected_at` and `Guild.is_raid_detected` ([GH-9808](https://github.com/Rapptz/discord.py/issues/9808))

- Add `Client.fetch_premium_sticker_pack` ([GH-9909](https://github.com/Rapptz/discord.py/issues/9909))

- Add `AppInfo.approximate_user_install_count` ([GH-9915](https://github.com/Rapptz/discord.py/issues/9915))

- Add `Guild.fetch_role` ([GH-9921](https://github.com/Rapptz/discord.py/issues/9921))

- Add `Attachment.title` ([GH-9904](https://github.com/Rapptz/discord.py/issues/9904))

- Add `Member.guild_banner` and `Member.display_banner`

- Re-add `connector` parameter that was removed during v2.0 ([GH-9900](https://github.com/Rapptz/discord.py/issues/9900))

- |commands| Add `discord.ext.commands.SoundboardSoundConverter` ([GH-9973](https://github.com/Rapptz/discord.py/issues/9973))

### Bug Fixes

- Change the default file size limit for `Guild.filesize_limit` to match new Discord limit of 10 MiB ([GH-10084](https://github.com/Rapptz/discord.py/issues/10084))

- Handle improper 1000 close code closures by Discord
  - This fixes an issue causing excessive IDENTIFY in large bots

- Fix potential performance regression when dealing with cookies in the library owned session ([GH-9916](https://github.com/Rapptz/discord.py/issues/9916))

- Add support for AEAD XChaCha20 Poly1305 encryption mode ([GH-9953](https://github.com/Rapptz/discord.py/issues/9953))
  - This allows voice to continue working when the older encryption modes eventually get removed.
  - Support for DAVE is still tentative.

- Fix large performance regression due to polls when creating messages

- Fix cases where `Member.roles` contains a `None` role ([GH-10093](https://github.com/Rapptz/discord.py/issues/10093))

- Update all channel clone implementations to work as expected ([GH-9935](https://github.com/Rapptz/discord.py/issues/9935))

- Fix bug in `Client.entitlements` only returning 100 entries ([GH-10051](https://github.com/Rapptz/discord.py/issues/10051))

- Fix `TextChannel.clone` always sending slowmode when not applicable to news channels ([GH-9967](https://github.com/Rapptz/discord.py/issues/9967))

- Fix `Message.system_content` for `MessageType.role_subscription_purchase` renewals ([GH-9955](https://github.com/Rapptz/discord.py/issues/9955))

- Fix `Sticker.url` for GIF stickers ([GH-9913](https://github.com/Rapptz/discord.py/issues/9913))

- Fix `User.default_avatar` for team users and webhooks ([GH-9907](https://github.com/Rapptz/discord.py/issues/9907))

- Fix potential rounding error in `Poll.duration` ([GH-9903](https://github.com/Rapptz/discord.py/issues/9903))

- Fix introduced potential TypeError when raising `app_commands.CommandSyncFailure`

- Fix `AuditLogEntry.target` causing errors for `AuditLogAction.message_pin` and `AuditLogAction.message_unpin` actions ([GH-10061](https://github.com/Rapptz/discord.py/issues/10061)).

- Fix incorrect `ui.Select` maximum option check ([GH-9878](https://github.com/Rapptz/discord.py/issues/9878), [GH-9879](https://github.com/Rapptz/discord.py/issues/9879))

- Fix path sanitisation for absolute Windows paths when using `__main__` ([GH-10096](https://github.com/Rapptz/discord.py/issues/10096), [GH-10097](https://github.com/Rapptz/discord.py/issues/10097))

- |tasks| Fix race condition when setting timer handle when using uvloop ([GH-10020](https://github.com/Rapptz/discord.py/issues/10020))

- |commands| Fix issue with category cooldowns outside of guild channels ([GH-9959](https://github.com/Rapptz/discord.py/issues/9959))

- |commands| Fix `Context.defer` unconditionally deferring

- |commands| Fix callable FlagConverter defaults on hybrid commands not being called ([GH-10037](https://github.com/Rapptz/discord.py/issues/10037))

- |commands| Unwrap `discord.ext.commands.Parameter` if given as default to `ext.commands.parameter` ([GH-9977](https://github.com/Rapptz/discord.py/issues/9977))

- |commands| Fix fallback behaviour not being respected when calling replace for `.ext.commands.Parameter` ([GH-10076](https://github.com/Rapptz/discord.py/issues/10076), [GH-10077](https://github.com/Rapptz/discord.py/issues/10077))

- |commands| Respect `enabled` keyword argument for hybrid app commands ([GH-10001](https://github.com/Rapptz/discord.py/issues/10001))

### Miscellaneous

- Use a fallback package for `audioop` to allow the library to work in Python 3.13 or newer.

- Remove `aiodns` from being used on Windows ([GH-9898](https://github.com/Rapptz/discord.py/issues/9898))

- Add zstd gateway compression to `speed` extras ([GH-9947](https://github.com/Rapptz/discord.py/issues/9947))
  - This can be installed using `discord.py[speed]`

- Add proxy support fetching from the CDN ([GH-9966](https://github.com/Rapptz/discord.py/issues/9966))

- Remove `/` from being safe from URI encoding when constructing paths internally

- Sanitize invite argument before calling the invite info endpoint

- Avoid returning in finally in specific places to prevent exception swallowing ([GH-9981](https://github.com/Rapptz/discord.py/issues/9981), [GH-9984](https://github.com/Rapptz/discord.py/issues/9984))

- Enforce and create random nonces when creating messages throughout the library

- Revert IPv6 block in the library ([GH-9870](https://github.com/Rapptz/discord.py/issues/9870))

- Allow passing `Permissions` object to `app_commands.default_permissions` decorator ([GH-9951](https://github.com/Rapptz/discord.py/issues/9951), [GH-9971](https://github.com/Rapptz/discord.py/issues/9971))

<a id="vp2p4p0"></a>

## v2.4.0

### New Features

- Add support for allowed contexts in app commands ([GH-9760](https://github.com/Rapptz/discord.py/issues/9760)).
  - An "allowed context" is the location where an app command can be used.
  - This is an internal change to decorators such as `app_commands.guild_only` and `app_commands.dm_only`.
  - Add `app_commands.private_channel_only`.
  - Add `app_commands.allowed_contexts`.
  - Add `app_commands.AppCommandContext`.
  - Add `app_commands.Command.allowed_contexts`.
  - Add `app_commands.AppCommand.allowed_contexts`.
  - Add `app_commands.ContextMenu.allowed_contexts`.

- Add support for user-installable apps ([GH-9760](https://github.com/Rapptz/discord.py/issues/9760)).
  - Add `app_commands.Command.allowed_installs`.
  - Add `app_commands.AppCommand.allowed_installs`.
  - Add `app_commands.ContextMenu.allowed_installs`.
  - Add `app_commands.allowed_installs`.
  - Add `app_commands.guild_install`.
  - Add `app_commands.user_install`.
  - Add `app_commands.AppInstallationType`.
  - Add `Interaction.context`.
  - Add `Interaction.is_guild_integration`.
  - Add `Interaction.is_user_integration`.

- Add support for Polls ([GH-9759](https://github.com/Rapptz/discord.py/issues/9759)).
  - Polls can be created using `Poll` and the `poll` keyword-only parameter in various message sending methods.
  - Add `PollAnswer` and `PollMedia`.
  - Add `Intents.polls`, `Intents.guild_polls` and `Intents.dm_polls` intents.
  - Add `Message.end_poll` method to end polls.
  - Add new events, `on_poll_vote_add`, `on_poll_vote_remove`, `on_raw_poll_vote_add`, and `on_raw_poll_vote_remove`.

- Voice handling has been completely rewritten to hopefully fix many bugs ([GH-9525](https://github.com/Rapptz/discord.py/issues/9525), [GH-9528](https://github.com/Rapptz/discord.py/issues/9528), [GH-9536](https://github.com/Rapptz/discord.py/issues/9536), [GH-9572](https://github.com/Rapptz/discord.py/issues/9572), [GH-9576](https://github.com/Rapptz/discord.py/issues/9576), [GH-9596](https://github.com/Rapptz/discord.py/issues/9596), [GH-9683](https://github.com/Rapptz/discord.py/issues/9683), [GH-9699](https://github.com/Rapptz/discord.py/issues/9699), [GH-9772](https://github.com/Rapptz/discord.py/issues/9772), etc.)

- Add `DMChannel.recipients` to get all recipients of a DM channel ([GH-9760](https://github.com/Rapptz/discord.py/issues/9760)).

- Add support for `RawReactionActionEvent.message_author_id`.

- Add support for `AuditLogAction.creator_monetization_request_created` and `AuditLogAction.creator_monetization_terms_accepted`.

- Add support for `AttachmentFlags`, accessed via `Attachment.flags` ([GH-9486](https://github.com/Rapptz/discord.py/issues/9486)).

- Add support for `RoleFlags`, accessed via `Role.flags` ([GH-9485](https://github.com/Rapptz/discord.py/issues/9485)).

- Add support for `ChannelType.media`, accessed via `ForumChannel.is_media`.

- Add various new permissions ([GH-9501](https://github.com/Rapptz/discord.py/issues/9501), [GH-9762](https://github.com/Rapptz/discord.py/issues/9762), [GH-9759](https://github.com/Rapptz/discord.py/issues/9759), [GH-9857](https://github.com/Rapptz/discord.py/issues/9857))
  - Add `Permissions.events`.
  - Add `Permissions.create_events`.
  - Add `Permissions.view_creator_monetization_analytics`.
  - Add `Permissions.send_polls`
  - Add `Permissions.create_polls`.
  - Add `Permissions.use_external_apps`.

- Add shortcut for `CategoryChannel.forums`.

- Add encoder options to `VoiceClient.play` ([GH-9527](https://github.com/Rapptz/discord.py/issues/9527)).

- Add support for team member roles.
  - Add `TeamMemberRole`.
  - Add `TeamMember.role`.
  - Updated `Bot.owner_ids` to account for team roles. Team owners or developers are considered Bot owners.

- Add optional attribute `integration_type` in `AuditLogEntry.extra` for `kick` or `member_role_update` actions.

- Add support for "dynamic" `ui.Item` that let you parse state out of a `custom_id` using regex.
  - In order to use this, you must subclass `ui.DynamicItem`.
  - This is an alternative to persistent views.
  - Add `Client.add_dynamic_items`.
  - Add `Client.remove_dynamic_items`.
  - Add `ui.Item.interaction_check`.
  - Check the [dynamic\_counter example](https://github.com/Rapptz/discord.py/tree/dfd1144b2246a7adafe3f1c64a4dd9bc2187fcee/examples) for more information.

- Add support for reading burst reactions. The API does not support sending them as of currently.
  - Add `Reaction.normal_count`.
  - Add `Reaction.burst_count`.
  - Add `Reaction.me_burst`.

- Add support for default values on select menus ([GH-9577](https://github.com/Rapptz/discord.py/issues/9577)).
  - Add `SelectDefaultValue`.
  - Add `SelectDefaultValueType`.
  - Add a `default_values` attribute to each specialised select menu.

- Add `scheduled_event` parameter for `StageChannel.create_instance` ([GH-9595](https://github.com/Rapptz/discord.py/issues/9595)).

- Add support for auto mod members ([GH-9328](https://github.com/Rapptz/discord.py/issues/9328)).
  - Add `type` keyword argument to `AutoModRuleAction`.
  - Add `AutoModTrigger.mention_raid_protection`.
  - Add `AutoModRuleTriggerType.member_profile`.
  - Add `AutoModRuleEventType.member_update`.
  - Add `AutoModRuleActionType.block_member_interactions`.

- Add support for premium app integrations ([GH-9453](https://github.com/Rapptz/discord.py/issues/9453)).
  - Add multiple SKU and entitlement related classes, e.g. `SKU`, `Entitlement`, `SKUFlags`.
  - Add multiple enums, e.g. `SKUType`, `EntitlementType`, `EntitlementOwnerType`.
  - Add `Client.fetch_skus` and `Client.fetch_entitlement` to fetch from the API.
  - Add `Client.create_entitlement` to create entitlements.
  - Add `Client.entitlements`.
  - Add `Interaction.entitlement_sku_ids`.
  - Add `Interaction.entitlements`.
  - Add `ButtonStyle.premium` and `ui.Button.sku_id` to send a button asking the user to buy an SKU ([GH-9845](https://github.com/Rapptz/discord.py/issues/9845)).
  - Add support for one time purchase ([GH-9803](https://github.com/Rapptz/discord.py/issues/9803)).

- Add support for editing application info ([GH-9610](https://github.com/Rapptz/discord.py/issues/9610)).
  - Add `AppInfo.interactions_endpoint_url`.
  - Add `AppInfo.redirect_uris`.
  - Add `AppInfo.edit`.

- Add support for getting/fetching threads from `Message` ([GH-9665](https://github.com/Rapptz/discord.py/issues/9665)).
  - Add `PartialMessage.thread`.
  - Add `Message.thread`.
  - Add `Message.fetch_thread`.

- Add support for platform and assets to activities ([GH-9677](https://github.com/Rapptz/discord.py/issues/9677)).
  - Add `Activity.platform`.
  - Add `Game.platform`.
  - Add `Game.assets`.

- Add support for suppressing embeds in an interaction response ([GH-9678](https://github.com/Rapptz/discord.py/issues/9678)).

- Add support for adding forum thread tags via webhook ([GH-9680](https://github.com/Rapptz/discord.py/issues/9680)) and ([GH-9783](https://github.com/Rapptz/discord.py/issues/9783)).

- Add support for guild incident message types ([GH-9686](https://github.com/Rapptz/discord.py/issues/9686)).

- Add `Locale.latin_american_spanish` ([GH-9689](https://github.com/Rapptz/discord.py/issues/9689)).

- Add support for setting voice channel status ([GH-9603](https://github.com/Rapptz/discord.py/issues/9603)).

- Add a shard connect timeout parameter to `AutoShardedClient`.

- Add support for guild incidents ([GH-9590](https://github.com/Rapptz/discord.py/issues/9590)).
  - Updated `Guild.edit` with `invites_disabled_until` and `dms_disabled_until` parameters.
  - Add `Guild.invites_paused_until`.
  - Add `Guild.dms_paused_until`.
  - Add `Guild.invites_paused`.
  - Add `Guild.dms_paused`.

- Add support for `abc.User.avatar_decoration` ([GH-9343](https://github.com/Rapptz/discord.py/issues/9343)).

- Add support for GIF stickers ([GH-9737](https://github.com/Rapptz/discord.py/issues/9737)).

- Add support for updating `ClientUser` banners ([GH-9752](https://github.com/Rapptz/discord.py/issues/9752)).

- Add support for bulk banning members via `Guild.bulk_ban`.

- Add `reason` keyword argument to `Thread.delete` ([GH-9804](https://github.com/Rapptz/discord.py/issues/9804)).

- Add `AppInfo.approximate_guild_count` ([GH-9811](https://github.com/Rapptz/discord.py/issues/9811)).

- Add support for `Message.interaction_metadata` ([GH-9817](https://github.com/Rapptz/discord.py/issues/9817)).

- Add support for differing `Invite` types ([GH-9682](https://github.com/Rapptz/discord.py/issues/9682)).

- Add support for reaction types to raw and non-raw models ([GH-9836](https://github.com/Rapptz/discord.py/issues/9836)).

- |tasks| Add `name` parameter to `ext.tasks.loop` to name the internal `asyncio.Task`.

- |commands| Add fallback behaviour to `ext.commands.CurrentGuild`.

- |commands| Add logging for errors that occur during `ext.commands.Cog.cog_unload`.

- |commands| Add support for `typing.NewType` and `type` keyword type aliases ([GH-9815](https://github.com/Rapptz/discord.py/issues/9815)).
  - Also supports application commands.

- |commands| Add support for positional-only flag parameters ([GH-9805](https://github.com/Rapptz/discord.py/issues/9805)).

- |commands| Add support for channel URLs in ChannelConverter related classes ([GH-9799](https://github.com/Rapptz/discord.py/issues/9799)).

### Bug Fixes

- Fix emoji and sticker cache being populated despite turning the intent off.
- Fix outstanding chunk requests when receiving a gateway READY event not being cleared ([GH-9571](https://github.com/Rapptz/discord.py/issues/9571)).
- Fix escape behaviour for lists and headers in `utils.escape_markdown`.
- Fix alias value for `Intents.auto_moderation` ([GH-9524](https://github.com/Rapptz/discord.py/issues/9524)).
- Fixes and improvements for `FFmpegAudio` and all related subclasses ([GH-9528](https://github.com/Rapptz/discord.py/issues/9528)).
- Fix `Template.source_guild` attempting to resolve from cache ([GH-9535](https://github.com/Rapptz/discord.py/issues/9535)).
- Fix `IndexError` being raised instead of `ValueError` when calling `Colour.from_str` with an empty string ([GH-9540](https://github.com/Rapptz/discord.py/issues/9540)).
- Fix `View.from_message` not correctly creating the varying `ui.Select` types ([GH-9559](https://github.com/Rapptz/discord.py/issues/9559)).
- Fix logging with autocomplete exceptions, which were previously suppressed.
- Fix possible error in voice cleanup logic ([GH-9572](https://github.com/Rapptz/discord.py/issues/9572)).
- Fix possible `AttributeError` during `app_commands.CommandTree.sync` when a command is regarded as 'too large'.
- Fix possible `TypeError` if a `app_commands.Group` did not have a name set ([GH-9581](https://github.com/Rapptz/discord.py/issues/9581)).
- Fix possible bad voice state where you move to a voice channel with missing permissions ([GH-9596](https://github.com/Rapptz/discord.py/issues/9596)).
- Fix websocket reaching an error state due to received error payload ([GH-9561](https://github.com/Rapptz/discord.py/issues/9561)).
- Fix handling of `AuditLogDiff` when relating to auto mod triggers ([GH-9622](https://github.com/Rapptz/discord.py/issues/9622)).
- Fix race condition in voice logic relating to disconnect and connect ([GH-9683](https://github.com/Rapptz/discord.py/issues/9683)).
- Use the `Interaction.user` guild as a fallback for `Interaction.guild` if not available.
- Fix restriction on auto moderation audit log ID range.
- Fix check for maximum number of children per `ui.View`.
- Fix comparison between `Object` classes with a `type` set.
- Fix handling of an enum in `AutoModRule.edit` ([GH-9798](https://github.com/Rapptz/discord.py/issues/9798)).
- Fix handling of `Client.close` within `Client.__aexit__` ([GH-9769](https://github.com/Rapptz/discord.py/issues/9769)).
- Fix channel deletion not evicting related threads from cache ([GH-9796](https://github.com/Rapptz/discord.py/issues/9796)).
- Fix bug with cache superfluously incrementing role positions ([GH-9853](https://github.com/Rapptz/discord.py/issues/9853)).
- Fix `exempt_channels` not being passed along in `Guild.create_automod_rule` ([GH-9861](https://github.com/Rapptz/discord.py/issues/9861)).
- Fix `abc.GuildChannel.purge` failing on single-message delete mode if the message was deleted ([GH-9830](https://github.com/Rapptz/discord.py/issues/9830), [GH-9863](https://github.com/Rapptz/discord.py/issues/9863)).
- |commands| Fix localization support for `ext.commands.HybridGroup` fallback.
- |commands| Fix nested `ext.commands.HybridGroup`'s inserting manual app commands.
- |commands| Fix an issue where `ext.commands.HybridGroup` wrapped instances would be out of sync.
- |commands| Fix `ext.commands.HelpCommand` defined checks not carrying over during copy ([GH-9843](https://github.com/Rapptz/discord.py/issues/9843)).

### Miscellaneous

- Additional documentation added for logging capabilities.
- Performance increases of constructing `Permissions` using keyword arguments.
- Improve `__repr__` of `SyncWebhook` and `Webhook` ([GH-9764](https://github.com/Rapptz/discord.py/issues/9764)).
- Change internal thread names to be consistent ([GH-9538](https://github.com/Rapptz/discord.py/issues/9538)).

<a id="vp2p3p2"></a>

## v2.3.2

### Bug Fixes

- Fix the `name` parameter not being respected when sending a `CustomActivity`.
- Fix `Intents.emoji` and `Intents.emojis_and_stickers` having swapped alias values ([GH-9471](https://github.com/Rapptz/discord.py/issues/9471)).
- Fix `NameError` when using `abc.GuildChannel.create_invite` ([GH-9505](https://github.com/Rapptz/discord.py/issues/9505)).
- Fix crash when disconnecting during the middle of a `HELLO` packet when using `AutoShardedClient`.
- Fix voice websocket not being closed before being replaced by a new one ([GH-9518](https://github.com/Rapptz/discord.py/issues/9518)).
- |commands| Fix the wrong `ext.commands.HelpCommand.on_help_command_error` being called when ejected from a cog.
- |commands| Fix `=None` being displayed in `ext.commands.Command.signature`.

<a id="vp2p3p1"></a>

## v2.3.1

### Bug Fixes

- Fix username lookup in `Guild.get_member_named` ([GH-9451](https://github.com/Rapptz/discord.py/issues/9451)).

- Use cache data first for `Interaction.channel` instead of API data.
  - This bug usually manifested in incomplete channel objects (e.g. no `overwrites`) because Discord does not provide this data.

- Fix false positives in `PartialEmoji.from_str` inappropriately setting `animated` to `True` ([GH-9456](https://github.com/Rapptz/discord.py/issues/9456), [GH-9457](https://github.com/Rapptz/discord.py/issues/9457)).

- Fix certain select types not appearing in `Message.components` ([GH-9462](https://github.com/Rapptz/discord.py/issues/9462)).

- |commands| Change lookup order for `ext.commands.MemberConverter` and `ext.commands.UserConverter` to prioritise usernames instead of nicknames.

<a id="vp2p3p0"></a>

## v2.3.0

### New Features

- Add support for the new username system (also known as "pomelo").
  - Add `User.global_name` to get their global nickname or "display name".
  - Update `User.display_name` and `Member.display_name` to understand global nicknames.
  - Update `__str__` for `User` to drop discriminators if the user has been migrated.
  - Update `Guild.get_member_named` to work with migrated users.
  - Update `User.default_avatar` to work with migrated users.
  - |commands| Update user and member converters to understand migrated users.

- Add `DefaultAvatar.pink` for new pink default avatars.

- Add `Colour.pink` to get the pink default avatar colour.

- Add support for voice messages ([GH-9358](https://github.com/Rapptz/discord.py/issues/9358))
  - Add `MessageFlags.voice`
  - Add `Attachment.duration` and `Attachment.waveform`
  - Add `Attachment.is_voice_message`
  - This does not support *sending* voice messages because this is currently unsupported by the API.

- Add support for new `Interaction.channel` attribute from the API update ([GH-9339](https://github.com/Rapptz/discord.py/issues/9339)).

- Add support for `TextChannel.default_thread_slowmode_delay` ([GH-9291](https://github.com/Rapptz/discord.py/issues/9291)).

- Add support for `ForumChannel.default_sort_order` ([GH-9290](https://github.com/Rapptz/discord.py/issues/9290)).

- Add support for `default_reaction_emoji` and `default_forum_layout` in `Guild.create_forum` ([GH-9300](https://github.com/Rapptz/discord.py/issues/9300)).

- Add support for `widget_channel`, `widget_enabled`, and `mfa_level` in `Guild.edit` ([GH-9302](https://github.com/Rapptz/discord.py/issues/9302), [GH-9303](https://github.com/Rapptz/discord.py/issues/9303)).

- Add various new `Permissions` and changes ([GH-9312](https://github.com/Rapptz/discord.py/issues/9312), [GH-9325](https://github.com/Rapptz/discord.py/issues/9325), [GH-9358](https://github.com/Rapptz/discord.py/issues/9358), [GH-9378](https://github.com/Rapptz/discord.py/issues/9378))
  - Add new `Permissions.manage_expressions`, `Permissions.use_external_sounds`, `Permissions.use_soundboard`, `Permissions.send_voice_messages`, `Permissions.create_expressions` permissions.
  - Change `Permissions.manage_emojis` to be an alias of `Permissions.manage_expressions`.

- Add various new properties to `PartialAppInfo` and `AppInfo` ([GH-9298](https://github.com/Rapptz/discord.py/issues/9298)).

- Add support for `with_counts` parameter to `Client.fetch_guilds` ([GH-9369](https://github.com/Rapptz/discord.py/issues/9369)).

- Add new `Guild.get_emoji` helper ([GH-9296](https://github.com/Rapptz/discord.py/issues/9296)).

- Add `ApplicationFlags.auto_mod_badge` ([GH-9313](https://github.com/Rapptz/discord.py/issues/9313)).

- Add `Guild.max_stage_video_users` and `Guild.safety_alerts_channel` ([GH-9318](https://github.com/Rapptz/discord.py/issues/9318)).

- Add support for `raid_alerts_disabled` and `safety_alerts_channel` in `Guild.edit` ([GH-9318](https://github.com/Rapptz/discord.py/issues/9318)).

- |commands| Add `BadLiteralArgument.argument` to get the failed argument's value ([GH-9283](https://github.com/Rapptz/discord.py/issues/9283)).

- |commands| Add `Context.filesize_limit` property ([GH-9416](https://github.com/Rapptz/discord.py/issues/9416)).

- |commands| Add support for `Parameter.displayed_name` ([GH-9427](https://github.com/Rapptz/discord.py/issues/9427)).

### Bug Fixes

- Fix `FileHandler` handlers being written ANSI characters when the bot is executed inside PyCharm.
  - This has the side effect of removing coloured logs from the PyCharm terminal due an upstream bug involving TTY detection. This issue is tracked under [PY-43798](https://youtrack.jetbrains.com/issue/PY-43798).

- Fix channel edits with `Webhook.edit` sending two requests instead of one.

- Fix `StageChannel.last_message_id` always being `None` ([GH-9422](https://github.com/Rapptz/discord.py/issues/9422)).

- Fix piped audio input ending prematurely ([GH-9001](https://github.com/Rapptz/discord.py/issues/9001), [GH-9380](https://github.com/Rapptz/discord.py/issues/9380)).

- Fix persistent detection for `ui.TextInput` being incorrect if the `custom_id` is set later ([GH-9438](https://github.com/Rapptz/discord.py/issues/9438)).

- Fix custom attributes not being copied over when inheriting from `app_commands.Group` ([GH-9383](https://github.com/Rapptz/discord.py/issues/9383)).

- Fix AutoMod audit log entry error due to empty channel\_id ([GH-9384](https://github.com/Rapptz/discord.py/issues/9384)).

- Fix handling of `around` parameter in `abc.Messageable.history` ([GH-9388](https://github.com/Rapptz/discord.py/issues/9388)).

- Fix occasional `AttributeError` when accessing the `ClientUser.mutual_guilds` property ([GH-9387](https://github.com/Rapptz/discord.py/issues/9387)).

- Fix `utils.escape_markdown` not escaping the new markdown ([GH-9361](https://github.com/Rapptz/discord.py/issues/9361)).

- Fix webhook targets not being converted in audit logs ([GH-9332](https://github.com/Rapptz/discord.py/issues/9332)).

- Fix error when not passing `enabled` in `Guild.create_automod_rule` ([GH-9292](https://github.com/Rapptz/discord.py/issues/9292)).

- Fix how various parameters are handled in `Guild.create_scheduled_event` ([GH-9275](https://github.com/Rapptz/discord.py/issues/9275)).

- Fix not sending the `ssrc` parameter when sending the SPEAKING payload ([GH-9301](https://github.com/Rapptz/discord.py/issues/9301)).

- Fix `Message.guild` being `None` sometimes when received via an interaction.

- Fix `Message.system_content` for `MessageType.channel_icon_change` ([GH-9410](https://github.com/Rapptz/discord.py/issues/9410)).

### Miscellaneous

- Update the base `Guild.filesize_limit` to 25MiB ([GH-9353](https://github.com/Rapptz/discord.py/issues/9353)).
- Allow Interaction webhook URLs to be used in `Webhook.from_url`.
- Set the socket family of internal connector to `AF_INET` to prevent IPv6 connections ([GH-9442](https://github.com/Rapptz/discord.py/issues/9442), [GH-9443](https://github.com/Rapptz/discord.py/issues/9443)).

<a id="vp2p2p3"></a>

## v2.2.3

### Bug Fixes

- Fix crash from Discord sending null `channel_id` for automod audit logs.
- Fix `channel` edits when using `Webhook.edit` sending two requests.
- Fix `AuditLogEntry.target` being `None` for invites ([GH-9336](https://github.com/Rapptz/discord.py/issues/9336)).
- Fix `KeyError` when accessing data for `GuildSticker` ([GH-9324](https://github.com/Rapptz/discord.py/issues/9324)).

<a id="vp2p2p2"></a>

## v2.2.2

### Bug Fixes

- Fix UDP discovery in voice not using new 74 byte layout which caused voice to break ([GH-9277](https://github.com/Rapptz/discord.py/issues/9277), [GH-9278](https://github.com/Rapptz/discord.py/issues/9278))

<a id="vp2p2p0"></a>

## v2.2.0

### New Features

- Add support for new `on_audit_log_entry_create` event

- Add support for silent messages via `silent` parameter in `abc.Messageable.send`
  - This is queryable via `MessageFlags.suppress_notifications`

- Implement `abc.Messageable` for `StageChannel` ([GH-9248](https://github.com/Rapptz/discord.py/issues/9248))

- Add setter for `discord.ui.ChannelSelect.channel_types` ([GH-9068](https://github.com/Rapptz/discord.py/issues/9068))

- Add support for custom messages in automod via `AutoModRuleAction.custom_message` ([GH-9267](https://github.com/Rapptz/discord.py/issues/9267))

- Add `ForumChannel.get_thread` ([GH-9106](https://github.com/Rapptz/discord.py/issues/9106))

- Add `StageChannel.slowmode_delay` and `VoiceChannel.slowmode_delay` ([GH-9111](https://github.com/Rapptz/discord.py/issues/9111))

- Add support for editing the slowmode for `StageChannel` and `VoiceChannel` ([GH-9111](https://github.com/Rapptz/discord.py/issues/9111))

- Add `Locale.indonesian`

- Add `delete_after` keyword argument to `Interaction.edit_message` ([GH-9415](https://github.com/Rapptz/discord.py/issues/9415))

- Add `delete_after` keyword argument to `InteractionMessage.edit` ([GH-9206](https://github.com/Rapptz/discord.py/issues/9206))

- Add support for member flags ([GH-9204](https://github.com/Rapptz/discord.py/issues/9204))
  - Accessible via `Member.flags` and has a type of `MemberFlags`
  - Support `bypass_verification` within `Member.edit`

- Add support for passing a client to `Webhook.from_url` and `Webhook.partial`
  - This allows them to use views (assuming they are "bot owned" webhooks)

- Add `Colour.dark_embed` and `Colour.light_embed` ([GH-9219](https://github.com/Rapptz/discord.py/issues/9219))

- Add support for many more parameters within `Guild.create_stage_channel` ([GH-9245](https://github.com/Rapptz/discord.py/issues/9245))

- Add `AppInfo.role_connections_verification_url`

- Add support for `ForumChannel.default_layout`

- Add various new `MessageType` values such as ones related to stage channel and role subscriptions

- Add support for role subscription related attributes
  - `RoleSubscriptionInfo` within `Message.role_subscription`
  - `MessageType.role_subscription_purchase`
  - `SystemChannelFlags.role_subscription_purchase_notifications`
  - `SystemChannelFlags.role_subscription_purchase_notification_replies`
  - `RoleTags.subscription_listing_id`
  - `RoleTags.is_available_for_purchase`

- Add support for checking if a role is a linked role under `RoleTags.is_guild_connection`

- Add support for GIF sticker type

- Add support for `Message.application_id` and `Message.position`

- Add `utils.maybe_coroutine` helper

- Add `ScheduledEvent.creator_id` attribute

- |commands| Add support for `ext.commands.Cog.interaction_check` for `ext.commands.GroupCog` ([GH-9189](https://github.com/Rapptz/discord.py/issues/9189))

### Bug Fixes

- Fix views not being removed from message store backing leading to a memory leak when used from an application command context
- Fix async iterators requesting past their bounds when using `oldest_first` and `after` or `before` ([GH-9093](https://github.com/Rapptz/discord.py/issues/9093))
- Fix `Guild.audit_logs` pagination logic being buggy when using `after` ([GH-9269](https://github.com/Rapptz/discord.py/issues/9269))
- Fix `Message.channel` sometimes being `Object` instead of `PartialMessageable`
- Fix `ui.View` not properly calling `super().__init_subclass__` ([GH-9231](https://github.com/Rapptz/discord.py/issues/9231))
- Fix `available_tags` and `default_thread_slowmode_delay` not being respected in `Guild.create_forum`
- Fix `AutoModTrigger` ignoring `allow_list` with type keyword ([GH-9107](https://github.com/Rapptz/discord.py/issues/9107))
- Fix implicit permission resolution for `Thread` ([GH-9153](https://github.com/Rapptz/discord.py/issues/9153))
- Fix `AutoModRule.edit` to work with actual snowflake types such as `Object` ([GH-9159](https://github.com/Rapptz/discord.py/issues/9159))
- Fix `Webhook.send` returning `ForumChannel` for `WebhookMessage.channel`
- When a lookup for `AuditLogEntry.target` fails, it will fallback to `Object` with the appropriate `Object.type` ([GH-9171](https://github.com/Rapptz/discord.py/issues/9171))
- Fix `AuditLogDiff.type` for integrations returning `ChannelType` instead of `str` ([GH-9200](https://github.com/Rapptz/discord.py/issues/9200))
- Fix `AuditLogDiff.type` for webhooks returning `ChannelType` instead of `WebhookType` ([GH-9251](https://github.com/Rapptz/discord.py/issues/9251))
- Fix webhooks and interactions not properly closing files after the request has completed
- Fix `NameError` in audit log target for app commands
- Fix `ScheduledEvent.edit` requiring some arguments to be passed in when unnecessary ([GH-9261](https://github.com/Rapptz/discord.py/issues/9261), [GH-9268](https://github.com/Rapptz/discord.py/issues/9268))
- |commands| Explicit set a traceback for hybrid command invocations ([GH-9205](https://github.com/Rapptz/discord.py/issues/9205))

### Miscellaneous

- Add colour preview for the colours predefined in `Colour`
- Finished views are no longer stored by the library when sending them ([GH-9235](https://github.com/Rapptz/discord.py/issues/9235))
- Force enable colour logging for the default logging handler when run under Docker.
- Add various overloads for `Client.wait_for` to aid in static analysis ([GH-9184](https://github.com/Rapptz/discord.py/issues/9184))
- `Interaction` can now optionally take a generic parameter, `ClientT` to represent the type for `Interaction.client`
- |commands| Respect `ext.commands.Command.ignore_extra` for `discord.ext.commands.FlagConverter` keyword-only parameters
- |commands| Change `Paginator.pages` to not prematurely close ([GH-9257](https://github.com/Rapptz/discord.py/issues/9257))

<a id="vp2p1p1"></a>

## v2.1.1

### Bug Fixes

- Fix crash involving GIF stickers when looking up their filename extension.

<a id="vp2p1p0"></a>

## v2.1.0

### New Features

- Add support for `delete_message_seconds` in `Guild.ban` ([GH-8391](https://github.com/Rapptz/discord.py/issues/8391))

- Add support for automod related audit log actions ([GH-8389](https://github.com/Rapptz/discord.py/issues/8389))

- Add support for `ForumChannel` annotations in app commands

- Add support for `ForumChannel.default_thread_slowmode_delay`.

- Add support for `ForumChannel.default_reaction_emoji`.

- Add support for forum tags under `ForumTag`.
  - Tags can be obtained using `ForumChannel.available_tags` or `ForumChannel.get_tag`.
  - See `Thread.edit` and `ForumChannel.edit` for modifying tags and their usage.

- Add support for new select types ([GH-9013](https://github.com/Rapptz/discord.py/issues/9013), [GH-9003](https://github.com/Rapptz/discord.py/issues/9003)).
  - These are split into separate classes, `discord.ui.ChannelSelect`, `discord.ui.RoleSelect`, `discord.ui.UserSelect`, `discord.ui.MentionableSelect`.
  - The decorator still uses a single function, `discord.ui.select`. Changing the select type is done by the `cls` keyword parameter.

- Add support for toggling discoverable and invites\_disabled features in `Guild.edit` ([GH-8390](https://github.com/Rapptz/discord.py/issues/8390)).

- Add `Interaction.translate` helper method ([GH-8425](https://github.com/Rapptz/discord.py/issues/8425)).

- Add `Forum.archived_threads` ([GH-8476](https://github.com/Rapptz/discord.py/issues/8476)).

- Add `ApplicationFlags.active`, `UserFlags.active_developer`, and `PublicUserFlags.active_developer`.

- Add `delete_after` to `InteractionResponse.send_message` ([GH-9022](https://github.com/Rapptz/discord.py/issues/9022)).

- Add support for `AutoModTrigger.regex_patterns`.

- |commands| Add `GroupCog.group_extras` to set `app_commands.Group.extras` ([GH-8405](https://github.com/Rapptz/discord.py/issues/8405)).

- |commands| Add support for NumPy style docstrings for regular commands to set parameter descriptions.

- |commands| Allow `discord.ext.commands.Greedy` to potentially maintain state between calls.

- |commands| Add `Cog.has_app_command_error_handler` ([GH-8991](https://github.com/Rapptz/discord.py/issues/8991)).

- |commands| Allow `delete_after` in `Context.send` on ephemeral messages ([GH-9021](https://github.com/Rapptz/discord.py/issues/9021)).

### Bug Fixes

- Fix an `KeyError` being raised when constructing `app_commands.Group` with no module ([GH-8411](https://github.com/Rapptz/discord.py/issues/8411)).
- Fix unescaped period in webhook URL regex ([GH-8443](https://github.com/Rapptz/discord.py/issues/8443)).
- Fix `app_commands.CommandSyncFailure` raising for other 400 status code errors.
- Fix potential formatting issues showing `_errors` in `app_commands.CommandSyncFailure`.
- Fix `Guild.stage_instances` and `Guild.schedule_events` clearing on `GUILD_UPDATE`.
- Fix detection of overriden `app_commands.Group.on_error`
- Fix `app_commands.CommandTree.on_error` still being called when a bound error handler is set.
- Fix thread permissions being set to `True` in `DMChannel.permissions_for` ([GH-8965](https://github.com/Rapptz/discord.py/issues/8965)).
- Fix `on_scheduled_event_delete` occasionally dispatching with too many parameters ([GH-9019](https://github.com/Rapptz/discord.py/issues/9019)).
- |commands| Fix `Context.from_interaction` ignoring `discord.ext.commands.Context.command_failed`.
- |commands| Fix `discord.ext.commands.Range` to allow 3.10 Union syntax ([GH-8446](https://github.com/Rapptz/discord.py/issues/8446)).
- |commands| Fix `before_invoke` not triggering for fallback commands in a hybrid group command ([GH-8461](https://github.com/Rapptz/discord.py/issues/8461), [GH-8462](https://github.com/Rapptz/discord.py/issues/8462)).

### Miscellaneous

- Change error message for unbound callbacks in `app_commands.ContextMenu` to make it clearer that bound methods are not allowed.
- Normalize type formatting in TypeError exceptions ([GH-8453](https://github.com/Rapptz/discord.py/issues/8453)).
- Change `VoiceProtocol.on_voice_state_update` and `VoiceProtocol.on_voice_server_update` parameters to be positional only ([GH-8463](https://github.com/Rapptz/discord.py/issues/8463)).
- Add support for PyCharm when using the default coloured logger ([GH-9015](https://github.com/Rapptz/discord.py/issues/9015)).

<a id="vp2p0p1"></a>

## v2.0.1

### Bug Fixes

- Fix `cchardet` being installed on Python >=3.10 when using the `speed` extras.

- Fix `ui.View` timeout updating when the `ui.View.interaction_check` failed.

- Fix `app_commands.CommandTree.on_error` not triggering if `app_commands.CommandTree.interaction_check` raises.

- Fix `__main__` script to use `importlib.metadata` instead of the deprecated `pkg_resources`.

- Fix library callbacks triggering a type checking error if the parameter names were different.
  - This required a change in the [version\_guarantees](https://discordpy.readthedocs.io/version_guarantees.html#version-guarantees)

- |commands| Fix Python 3.10 union types not working with `commands.Greedy`.

<a id="vp2p0p0"></a>

## v2.0.0

The changeset for this version are too big to be listed here, for more information please
see [the migrating page](https://discordpy.readthedocs.io/migrating.html#migrating-2-0).

<a id="vp1p7p3"></a>

## v1.7.3

### Bug Fixes

- Fix a crash involving guild uploaded stickers
- Fix `DMChannel.permissions_for` not having `Permissions.read_messages` set.

<a id="vp1p7p2"></a>

## v1.7.2

### Bug Fixes

- Fix `fail_if_not_exists` causing certain message references to not be usable within `abc.Messageable.send` and `Message.reply` ([GH-6726](https://github.com/Rapptz/discord.py/issues/6726))
- Fix `Guild.chunk` hanging when the user left the guild. ([GH-6730](https://github.com/Rapptz/discord.py/issues/6730))
- Fix loop sleeping after final iteration rather than before ([GH-6744](https://github.com/Rapptz/discord.py/issues/6744))

<a id="vp1p7p1"></a>

## v1.7.1

### Bug Fixes

- |commands| Fix `Cog.has_error_handler` not working as intended.

<a id="vp1p7p0"></a>

## v1.7.0

This version is mainly for improvements and bug fixes. This is more than likely the last major version in the 1.x series.
Work after this will be spent on v2.0. As a result, **this is the last version to support Python 3.5**.
Likewise, **this is the last version to support user bots**.

Development of v2.0 will have breaking changes and support for newer API features.

### New Features

- Add support for stage channels via `StageChannel` ([GH-6602](https://github.com/Rapptz/discord.py/issues/6602), [GH-6608](https://github.com/Rapptz/discord.py/issues/6608))

- Add support for `MessageReference.fail_if_not_exists` ([GH-6484](https://github.com/Rapptz/discord.py/issues/6484))
  - By default, if the message you're replying to doesn't exist then the API errors out.
    This attribute tells the Discord API that it's okay for that message to be missing.

- Add support for Discord's new permission serialisation scheme.

- Add an easier way to move channels using `abc.GuildChannel.move`

- Add `Permissions.use_slash_commands`

- Add `Permissions.request_to_speak`

- Add support for voice regions in voice channels via `VoiceChannel.rtc_region` ([GH-6606](https://github.com/Rapptz/discord.py/issues/6606))

- Add support for `PartialEmoji.url_as` ([GH-6341](https://github.com/Rapptz/discord.py/issues/6341))

- Add `MessageReference.jump_url` ([GH-6318](https://github.com/Rapptz/discord.py/issues/6318))

- Add `File.spoiler` ([GH-6317](https://github.com/Rapptz/discord.py/issues/6317))

- Add support for passing `roles` to `Guild.estimate_pruned_members` ([GH-6538](https://github.com/Rapptz/discord.py/issues/6538))

- Allow callable class factories to be used in `abc.Connectable.connect` ([GH-6478](https://github.com/Rapptz/discord.py/issues/6478))

- Add a way to get mutual guilds from the client's cache via `User.mutual_guilds` ([GH-2539](https://github.com/Rapptz/discord.py/issues/2539), [GH-6444](https://github.com/Rapptz/discord.py/issues/6444))

- `PartialMessage.edit` now returns a full `Message` upon success ([GH-6309](https://github.com/Rapptz/discord.py/issues/6309))

- Add `RawMessageUpdateEvent.guild_id` ([GH-6489](https://github.com/Rapptz/discord.py/issues/6489))

- `AuditLogEntry` is now hashable ([GH-6495](https://github.com/Rapptz/discord.py/issues/6495))

- `Attachment` is now hashable

- Add `Attachment.content_type` attribute ([GH-6618](https://github.com/Rapptz/discord.py/issues/6618))

- Add support for casting `Attachment` to `str` to get the URL.

- Add `seed` parameter for `Colour.random` ([GH-6562](https://github.com/Rapptz/discord.py/issues/6562))
  - This only seeds it for one call. If seeding for multiple calls is desirable, use `random.seed`.

- Add a `utils.remove_markdown` helper function ([GH-6573](https://github.com/Rapptz/discord.py/issues/6573))

- Add support for passing scopes to `utils.oauth_url` ([GH-6568](https://github.com/Rapptz/discord.py/issues/6568))

- |commands| Add support for `rgb` CSS function as a parameter to `ColourConverter` ([GH-6374](https://github.com/Rapptz/discord.py/issues/6374))

- |commands| Add support for converting `StoreChannel` via `StoreChannelConverter` ([GH-6603](https://github.com/Rapptz/discord.py/issues/6603))

- |commands| Add support for stripping whitespace after the prefix is encountered using the `strip_after_prefix` `ext.commands.Bot` constructor parameter.

- |commands| Add `Context.invoked_parents` to get the aliases a command's parent was invoked with ([GH-1874](https://github.com/Rapptz/discord.py/issues/1874), [GH-6462](https://github.com/Rapptz/discord.py/issues/6462))

- |commands| Add a converter for `PartialMessage` under `ext.commands.PartialMessageConverter` ([GH-6308](https://github.com/Rapptz/discord.py/issues/6308))

- |commands| Add a converter for `Guild` under `ext.commands.GuildConverter` ([GH-6016](https://github.com/Rapptz/discord.py/issues/6016), [GH-6365](https://github.com/Rapptz/discord.py/issues/6365))

- |commands| Add `Command.has_error_handler`
  - This is also adds `Cog.has_error_handler`

- |commands| Allow callable types to act as a bucket key for cooldowns ([GH-6563](https://github.com/Rapptz/discord.py/issues/6563))

- |commands| Add `linesep` keyword argument to `Paginator` ([GH-5975](https://github.com/Rapptz/discord.py/issues/5975))

- |commands| Allow `None` to be passed to `HelpCommand.verify_checks` to only verify in a guild context ([GH-2008](https://github.com/Rapptz/discord.py/issues/2008), [GH-6446](https://github.com/Rapptz/discord.py/issues/6446))

- |commands| Allow relative paths when loading extensions via a `package` keyword argument ([GH-2465](https://github.com/Rapptz/discord.py/issues/2465), [GH-6445](https://github.com/Rapptz/discord.py/issues/6445))

### Bug Fixes

- Fix mentions not working if `mention_author` is passed in `abc.Messageable.send` without `Client.allowed_mentions` set ([GH-6192](https://github.com/Rapptz/discord.py/issues/6192), [GH-6458](https://github.com/Rapptz/discord.py/issues/6458))
- Fix user created instances of `CustomActivity` triggering an error ([GH-4049](https://github.com/Rapptz/discord.py/issues/4049))
  - Note that currently, bot users still cannot set a custom activity due to a Discord limitation.
- Fix `ZeroDivisionError` being raised from `VoiceClient.average_latency` ([GH-6430](https://github.com/Rapptz/discord.py/issues/6430), [GH-6436](https://github.com/Rapptz/discord.py/issues/6436))
- Fix `User.public_flags` not updating upon edit ([GH-6315](https://github.com/Rapptz/discord.py/issues/6315))
- Fix `Message.call` sometimes causing attribute errors ([GH-6390](https://github.com/Rapptz/discord.py/issues/6390))
- Fix issue resending a file during request retries on newer versions of `aiohttp` ([GH-6531](https://github.com/Rapptz/discord.py/issues/6531))
- Raise an error when `user_ids` is empty in `Guild.query_members`
- Fix `__str__` magic method raising when a `Guild` is unavailable.
- Fix potential `AttributeError` when accessing `VoiceChannel.members` ([GH-6602](https://github.com/Rapptz/discord.py/issues/6602))
- `Embed` constructor parameters now implicitly convert to `str` ([GH-6574](https://github.com/Rapptz/discord.py/issues/6574))
- Ensure `discord` package is only run if executed as a script ([GH-6483](https://github.com/Rapptz/discord.py/issues/6483))
- |commands| Fix irrelevant commands potentially being unloaded during cog unload due to failure.
- |commands| Fix attribute errors when setting a cog to `.ext.commands.HelpCommand` ([GH-5154](https://github.com/Rapptz/discord.py/issues/5154))
- |commands| Fix `Context.invoked_with` being improperly reassigned during a `ext.commands.Context.reinvoke` ([GH-6451](https://github.com/Rapptz/discord.py/issues/6451), [GH-6462](https://github.com/Rapptz/discord.py/issues/6462))
- |commands| Remove duplicates from `HelpCommand.get_bot_mapping` ([GH-6316](https://github.com/Rapptz/discord.py/issues/6316))
- |commands| Properly handle positional-only parameters in bot command signatures ([GH-6431](https://github.com/Rapptz/discord.py/issues/6431))
- |commands| Group signatures now properly show up in `Command.signature` ([GH-6529](https://github.com/Rapptz/discord.py/issues/6529), [GH-6530](https://github.com/Rapptz/discord.py/issues/6530))

### Miscellaneous

- User endpoints and all userbot related functionality has been deprecated and will be removed in the next major version of the library.
- `Permission` class methods were updated to match the UI of the Discord client ([GH-6476](https://github.com/Rapptz/discord.py/issues/6476))
- `_` and `-` characters are now stripped when making a new cog using the `discord` package ([GH-6313](https://github.com/Rapptz/discord.py/issues/6313))

<a id="vp1p6p0"></a>

## v1.6.0

This version comes with support for replies and stickers.

### New Features

- An entirely redesigned documentation. This was the cumulation of multiple months of effort.
  - There's now a dark theme, feel free to navigate to the cog on the screen to change your setting, though this should be automatic.
- Add support for `AppInfo.icon_url_as` and `AppInfo.cover_image_url_as` ([GH-5888](https://github.com/Rapptz/discord.py/issues/5888))
- Add `Colour.random` to get a random colour ([GH-6067](https://github.com/Rapptz/discord.py/issues/6067))
- Add support for stickers via `Sticker` ([GH-5946](https://github.com/Rapptz/discord.py/issues/5946))
- Add support for replying via `Message.reply` ([GH-6061](https://github.com/Rapptz/discord.py/issues/6061))
  - This also comes with the `AllowedMentions.replied_user` setting.
  - `abc.Messageable.send` can now accept a `MessageReference`.
  - `MessageReference` can now be constructed by users.
  - `Message.to_reference` can now convert a message to a `MessageReference`.
- Add support for getting the replied to resolved message through `MessageReference.resolved`.
- Add support for role tags.
  - `Guild.premium_subscriber_role` to get the "Nitro Booster" role (if available).
  - `Guild.self_role` to get the bot's own role (if available).
  - `Role.tags` to get the role's tags.
  - `Role.is_premium_subscriber` to check if a role is the "Nitro Booster" role.
  - `Role.is_bot_managed` to check if a role is a bot role (i.e. the automatically created role for bots).
  - `Role.is_integration` to check if a role is role created by an integration.
- Add `Client.is_ws_ratelimited` to check if the websocket is rate limited.
  - `ShardInfo.is_ws_ratelimited` is the equivalent for checking a specific shard.
- Add support for chunking an `AsyncIterator` through `AsyncIterator.chunk` ([GH-6100](https://github.com/Rapptz/discord.py/issues/6100), [GH-6082](https://github.com/Rapptz/discord.py/issues/6082))
- Add `PartialEmoji.created_at` ([GH-6128](https://github.com/Rapptz/discord.py/issues/6128))
- Add support for editing and deleting webhook sent messages ([GH-6058](https://github.com/Rapptz/discord.py/issues/6058))
  - This adds `WebhookMessage` as well to power this behaviour.
- Add `PartialMessage` to allow working with a message via channel objects and just a message\_id ([GH-5905](https://github.com/Rapptz/discord.py/issues/5905))
  - This is useful if you don't want to incur an extra API call to fetch the message.
- Add `Emoji.url_as` ([GH-6162](https://github.com/Rapptz/discord.py/issues/6162))
- Add support for `Member.pending` for the membership gating feature.
- Allow `colour` parameter to take `int` in `Guild.create_role` ([GH-6195](https://github.com/Rapptz/discord.py/issues/6195))
- Add support for `presences` in `Guild.query_members` ([GH-2354](https://github.com/Rapptz/discord.py/issues/2354))
- |commands| Add support for `description` keyword argument in `commands.Cog` ([GH-6028](https://github.com/Rapptz/discord.py/issues/6028))
- |tasks| Add support for calling the wrapped coroutine as a function via `__call__`.

### Bug Fixes

- Raise `DiscordServerError` when reaching 503s repeatedly ([GH-6044](https://github.com/Rapptz/discord.py/issues/6044))
- Fix `AttributeError` when `Client.fetch_template` is called ([GH-5986](https://github.com/Rapptz/discord.py/issues/5986))
- Fix errors when playing audio and moving to another channel ([GH-5953](https://github.com/Rapptz/discord.py/issues/5953))
- Fix `AttributeError` when voice channels disconnect too fast ([GH-6039](https://github.com/Rapptz/discord.py/issues/6039))
- Fix stale `User` references when the members intent is off.
- Fix `on_user_update` not dispatching in certain cases when a member is not cached but the user somehow is.
- Fix `Message.author` being overwritten in certain cases during message update.
  - This would previously make it so `Message.author` is a `User`.
- Fix `UnboundLocalError` for editing `public_updates_channel` in `Guild.edit` ([GH-6093](https://github.com/Rapptz/discord.py/issues/6093))
- Fix uninitialised `CustomActivity.created_at` ([GH-6095](https://github.com/Rapptz/discord.py/issues/6095))
- |commands| Errors during cog unload no longer stops module cleanup ([GH-6113](https://github.com/Rapptz/discord.py/issues/6113))
- |commands| Properly cleanup lingering commands when a conflicting alias is found when adding commands ([GH-6217](https://github.com/Rapptz/discord.py/issues/6217))

### Miscellaneous

- `ffmpeg` spawned processes no longer open a window in Windows ([GH-6038](https://github.com/Rapptz/discord.py/issues/6038))
- Update dependencies to allow the library to work on Python 3.9+ without requiring build tools. ([GH-5984](https://github.com/Rapptz/discord.py/issues/5984), [GH-5970](https://github.com/Rapptz/discord.py/issues/5970))
- Fix docstring issue leading to a SyntaxError in 3.9 ([GH-6153](https://github.com/Rapptz/discord.py/issues/6153))
- Update Windows opus binaries from 1.2.1 to 1.3.1 ([GH-6161](https://github.com/Rapptz/discord.py/issues/6161))
- Allow `Guild.create_role` to accept `int` as the `colour` parameter ([GH-6195](https://github.com/Rapptz/discord.py/issues/6195))
- |commands| `MessageConverter` regex got updated to support `www.` prefixes ([GH-6002](https://github.com/Rapptz/discord.py/issues/6002))
- |commands| `UserConverter` now fetches the API if an ID is passed and the user is not cached.
- |commands| `max_concurrency` is now called before cooldowns ([GH-6172](https://github.com/Rapptz/discord.py/issues/6172))

<a id="vp1p5p1"></a>

## v1.5.1

### Bug Fixes

- Fix `utils.escape_markdown` not escaping quotes properly ([GH-5897](https://github.com/Rapptz/discord.py/issues/5897))
- Fix `Message` not being hashable ([GH-5901](https://github.com/Rapptz/discord.py/issues/5901), [GH-5866](https://github.com/Rapptz/discord.py/issues/5866))
- Fix moving channels to the end of the channel list ([GH-5923](https://github.com/Rapptz/discord.py/issues/5923))
- Fix seemingly strange behaviour in `__eq__` for `PermissionOverwrite` ([GH-5929](https://github.com/Rapptz/discord.py/issues/5929))
- Fix aliases showing up in `__iter__` for `Intents` ([GH-5945](https://github.com/Rapptz/discord.py/issues/5945))
- Fix the bot disconnecting from voice when moving them to another channel ([GH-5904](https://github.com/Rapptz/discord.py/issues/5904))
- Fix attribute errors when chunking times out sometimes during delayed on\_ready dispatching.
- Ensure that the bot's own member is not evicted from the cache ([GH-5949](https://github.com/Rapptz/discord.py/issues/5949))

### Miscellaneous

- Members are now loaded during `GUILD_MEMBER_UPDATE` events if `MemberCacheFlags.joined` is set. ([GH-5930](https://github.com/Rapptz/discord.py/issues/5930))
- |commands| `MemberConverter` now properly lazily fetches members if not available from cache.
  - This is the same as having `discord.Member` as the type-hint.
- `Guild.chunk` now allows concurrent calls without spamming the gateway with requests.

<a id="vp1p5p0"></a>

## v1.5.0

This version came with forced breaking changes that Discord is requiring all bots to go through on October 7th. It is highly recommended to read the documentation on intents, [intents\_primer](https://discordpy.readthedocs.io/intents.html#intents-primer).

### API Changes

- Members and presences will no longer be retrieved due to an API change. See [privileged\_intents](https://discordpy.readthedocs.io/intents.html#privileged-intents) for more info.
- As a consequence, fetching offline members is disabled if the members intent is not enabled.

### New Features

- Support for gateway intents, passed via `intents` in `Client` using `Intents`.

- Add `VoiceRegion.south_korea` ([GH-5233](https://github.com/Rapptz/discord.py/issues/5233))

- Add support for `__eq__` for `Message` ([GH-5789](https://github.com/Rapptz/discord.py/issues/5789))

- Add `Colour.dark_theme` factory method ([GH-1584](https://github.com/Rapptz/discord.py/issues/1584))

- Add `AllowedMentions.none` and `AllowedMentions.all` ([GH-5785](https://github.com/Rapptz/discord.py/issues/5785))

- Add more concrete exceptions for 500 class errors under `DiscordServerError` ([GH-5797](https://github.com/Rapptz/discord.py/issues/5797))

- Implement `VoiceProtocol` to better intersect the voice flow.

- Add `Guild.chunk` to fully chunk a guild.

- Add `MemberCacheFlags` to better control member cache. See [intents\_member\_cache](https://discordpy.readthedocs.io/intents.html#intents-member-cache) for more info.

- Add support for `ActivityType.competing` ([GH-5823](https://github.com/Rapptz/discord.py/issues/5823))
  - This seems currently unused API wise.

- Add support for message references, `Message.reference` ([GH-5754](https://github.com/Rapptz/discord.py/issues/5754), [GH-5832](https://github.com/Rapptz/discord.py/issues/5832))

- Add alias for `ColourConverter` under `ColorConverter` ([GH-5773](https://github.com/Rapptz/discord.py/issues/5773))

- Add alias for `PublicUserFlags.verified_bot_developer` under `PublicUserFlags.early_verified_bot_developer` ([GH-5849](https://github.com/Rapptz/discord.py/issues/5849))

- |commands| Add support for `require_var_positional` for `Command` ([GH-5793](https://github.com/Rapptz/discord.py/issues/5793))

### Bug Fixes

- Fix issue with `Guild.by_category` not showing certain channels.
- Fix `abc.GuildChannel.permissions_synced` always being `False` ([GH-5772](https://github.com/Rapptz/discord.py/issues/5772))
- Fix handling of cloudflare bans on webhook related requests ([GH-5221](https://github.com/Rapptz/discord.py/issues/5221))
- Fix cases where a keep-alive thread would ack despite already dying ([GH-5800](https://github.com/Rapptz/discord.py/issues/5800))
- Fix cases where a `Member` reference would be stale when cache is disabled in message events ([GH-5819](https://github.com/Rapptz/discord.py/issues/5819))
- Fix `allowed_mentions` not being sent when sending a single file ([GH-5835](https://github.com/Rapptz/discord.py/issues/5835))
- Fix `overwrites` being ignored in `abc.GuildChannel.edit` if `{}` is passed ([GH-5756](https://github.com/Rapptz/discord.py/issues/5756), [GH-5757](https://github.com/Rapptz/discord.py/issues/5757))
- |commands| Fix exceptions being raised improperly in command invoke hooks ([GH-5799](https://github.com/Rapptz/discord.py/issues/5799))
- |commands| Fix commands not being properly ejected during errors in a cog injection ([GH-5804](https://github.com/Rapptz/discord.py/issues/5804))
- |commands| Fix cooldown timing ignoring edited timestamps.
- |tasks| Fix tasks extending the next iteration on handled exceptions ([GH-5762](https://github.com/Rapptz/discord.py/issues/5762), [GH-5763](https://github.com/Rapptz/discord.py/issues/5763))

### Miscellaneous

- Webhook requests are now logged ([GH-5798](https://github.com/Rapptz/discord.py/issues/5798))
- Remove caching layer from `AutoShardedClient.shards`. This was causing issues if queried before launching shards.
- Gateway rate limits are now handled.
- Warnings logged due to missed caches are now changed to DEBUG log level.
- Some strings are now explicitly interned to reduce memory usage.
- Usage of namedtuples has been reduced to avoid potential breaking changes in the future ([GH-5834](https://github.com/Rapptz/discord.py/issues/5834))
- |commands| All `BadArgument` exceptions from the built-in converters now raise concrete exceptions to better tell them apart ([GH-5748](https://github.com/Rapptz/discord.py/issues/5748))
- |tasks| Lazily fetch the event loop to prevent surprises when changing event loop policy ([GH-5808](https://github.com/Rapptz/discord.py/issues/5808))

<a id="vp1p4p2"></a>

## v1.4.2

This is a maintenance release with backports from [vp1p5p0](https://discordpy.readthedocs.io/whats_new.html#vp1p5p0).

### Bug Fixes

- Fix issue with `Guild.by_category` not showing certain channels.
- Fix `abc.GuildChannel.permissions_synced` always being `False` ([GH-5772](https://github.com/Rapptz/discord.py/issues/5772))
- Fix handling of cloudflare bans on webhook related requests ([GH-5221](https://github.com/Rapptz/discord.py/issues/5221))
- Fix cases where a keep-alive thread would ack despite already dying ([GH-5800](https://github.com/Rapptz/discord.py/issues/5800))
- Fix cases where a `Member` reference would be stale when cache is disabled in message events ([GH-5819](https://github.com/Rapptz/discord.py/issues/5819))
- Fix `allowed_mentions` not being sent when sending a single file ([GH-5835](https://github.com/Rapptz/discord.py/issues/5835))
- Fix `overwrites` being ignored in `abc.GuildChannel.edit` if `{}` is passed ([GH-5756](https://github.com/Rapptz/discord.py/issues/5756), [GH-5757](https://github.com/Rapptz/discord.py/issues/5757))
- |commands| Fix exceptions being raised improperly in command invoke hooks ([GH-5799](https://github.com/Rapptz/discord.py/issues/5799))
- |commands| Fix commands not being properly ejected during errors in a cog injection ([GH-5804](https://github.com/Rapptz/discord.py/issues/5804))
- |commands| Fix cooldown timing ignoring edited timestamps.
- |tasks| Fix tasks extending the next iteration on handled exceptions ([GH-5762](https://github.com/Rapptz/discord.py/issues/5762), [GH-5763](https://github.com/Rapptz/discord.py/issues/5763))

### Miscellaneous

- Remove caching layer from `AutoShardedClient.shards`. This was causing issues if queried before launching shards.
- |tasks| Lazily fetch the event loop to prevent surprises when changing event loop policy ([GH-5808](https://github.com/Rapptz/discord.py/issues/5808))

<a id="vp1p4p1"></a>

## v1.4.1

### Bug Fixes

- Properly terminate the connection when `Client.close` is called ([GH-5207](https://github.com/Rapptz/discord.py/issues/5207))
- Fix error being raised when clearing embed author or image when it was already cleared ([GH-5210](https://github.com/Rapptz/discord.py/issues/5210), [GH-5212](https://github.com/Rapptz/discord.py/issues/5212))
- Fix `__path__` to allow editable extensions ([GH-5213](https://github.com/Rapptz/discord.py/issues/5213))

<a id="vp1p4p0"></a>

## v1.4.0

Another version with a long development time. Features like Intents are slated to be released in a v1.5 release. Thank you for your patience!

### New Features

- Add support for `AllowedMentions` to have more control over what gets mentioned.
  - This can be set globally through `Client.allowed_mentions`
  - This can also be set on a per message basis via `abc.Messageable.send`

- `AutoShardedClient` has been completely redesigned from the ground up to better suit multi-process clusters ([GH-2654](https://github.com/Rapptz/discord.py/issues/2654))
  - Add `ShardInfo` which allows fetching specific information about a shard.
  - The `ShardInfo` allows for reconnecting and disconnecting of a specific shard as well.
  - Add `AutoShardedClient.get_shard` and `AutoShardedClient.shards` to get information about shards.
  - Rework the entire connection flow to better facilitate the `IDENTIFY` rate limits.
  - Add a hook `Client.before_identify_hook` to have better control over what happens before an `IDENTIFY` is done.
  - Add more shard related events such as `on_shard_connect`, `on_shard_disconnect` and `on_shard_resumed`.

- Add support for guild templates ([GH-2652](https://github.com/Rapptz/discord.py/issues/2652))
  - This adds `Template` to read a template's information.
  - `Client.fetch_template` can be used to fetch a template's information from the API.
  - `Client.create_guild` can now take an optional template to base the creation from.
  - Note that fetching a guild's template is currently restricted for bot accounts.

- Add support for guild integrations ([GH-2051](https://github.com/Rapptz/discord.py/issues/2051), [GH-1083](https://github.com/Rapptz/discord.py/issues/1083))
  - `Integration` is used to read integration information.
  - `IntegrationAccount` is used to read integration account information.
  - `Guild.integrations` will fetch all integrations in a guild.
  - `Guild.create_integration` will create an integration.
  - `Integration.edit` will edit an existing integration.
  - `Integration.delete` will delete an integration.
  - `Integration.sync` will sync an integration.
  - There is currently no support in the audit log for this.

- Add an alias for `VerificationLevel.extreme` under `VerificationLevel.very_high` ([GH-2650](https://github.com/Rapptz/discord.py/issues/2650))

- Add various grey to gray aliases for `Colour` ([GH-5130](https://github.com/Rapptz/discord.py/issues/5130))

- Added `VoiceClient.latency` and `VoiceClient.average_latency` ([GH-2535](https://github.com/Rapptz/discord.py/issues/2535))

- Add `use_cached` and `spoiler` parameters to `Attachment.to_file` ([GH-2577](https://github.com/Rapptz/discord.py/issues/2577), [GH-4095](https://github.com/Rapptz/discord.py/issues/4095))

- Add `position` parameter support to `Guild.create_category` ([GH-2623](https://github.com/Rapptz/discord.py/issues/2623))

- Allow passing `int` for the colour in `Role.edit` ([GH-4057](https://github.com/Rapptz/discord.py/issues/4057))

- Add `Embed.remove_author` to clear author information from an embed ([GH-4068](https://github.com/Rapptz/discord.py/issues/4068))

- Add the ability to clear images and thumbnails in embeds using `Embed.Empty` ([GH-4053](https://github.com/Rapptz/discord.py/issues/4053))

- Add `Guild.max_video_channel_users` ([GH-4120](https://github.com/Rapptz/discord.py/issues/4120))

- Add `Guild.public_updates_channel` ([GH-4120](https://github.com/Rapptz/discord.py/issues/4120))

- Add `guild_ready_timeout` parameter to `Client` and subclasses to control timeouts when the `GUILD_CREATE` stream takes too long ([GH-4112](https://github.com/Rapptz/discord.py/issues/4112))

- Add support for public user flags via `User.public_flags` and `PublicUserFlags` ([GH-3999](https://github.com/Rapptz/discord.py/issues/3999))

- Allow changing of channel types via `TextChannel.edit` to and from a news channel ([GH-4121](https://github.com/Rapptz/discord.py/issues/4121))

- Add `Guild.edit_role_positions` to bulk edit role positions in a single API call ([GH-2501](https://github.com/Rapptz/discord.py/issues/2501), [GH-2143](https://github.com/Rapptz/discord.py/issues/2143))

- Add `Guild.change_voice_state` to change your voice state in a guild ([GH-5088](https://github.com/Rapptz/discord.py/issues/5088))

- Add `PartialInviteGuild.is_icon_animated` for checking if the invite guild has animated icon ([GH-4180](https://github.com/Rapptz/discord.py/issues/4180), [GH-4181](https://github.com/Rapptz/discord.py/issues/4181))

- Add `PartialInviteGuild.icon_url_as` now supports `static_format` for consistency ([GH-4180](https://github.com/Rapptz/discord.py/issues/4180), [GH-4181](https://github.com/Rapptz/discord.py/issues/4181))

- Add support for `user_ids` in `Guild.query_members`

- Add support for pruning members by roles in `Guild.prune_members` ([GH-4043](https://github.com/Rapptz/discord.py/issues/4043))

- |commands| Implement `ext.commands.before_invoke` and `ext.commands.after_invoke` decorators ([GH-1986](https://github.com/Rapptz/discord.py/issues/1986), [GH-2502](https://github.com/Rapptz/discord.py/issues/2502))

- |commands| Add a way to retrieve `retry_after` from a cooldown in a command via `Command.get_cooldown_retry_after` ([GH-5195](https://github.com/Rapptz/discord.py/issues/5195))

- |commands| Add a way to dynamically add and remove checks from a `HelpCommand` ([GH-5197](https://github.com/Rapptz/discord.py/issues/5197))

- |tasks| Add `Loop.is_running` method to the task objects ([GH-2540](https://github.com/Rapptz/discord.py/issues/2540))

- |tasks| Allow usage of custom error handlers similar to the command extensions to tasks using `Loop.error` decorator ([GH-2621](https://github.com/Rapptz/discord.py/issues/2621))

### Bug Fixes

- Fix issue with `PartialEmoji.url` reads leading to a failure ([GH-4015](https://github.com/Rapptz/discord.py/issues/4015), [GH-4016](https://github.com/Rapptz/discord.py/issues/4016))
- Allow `abc.Messageable.history` to take a limit of `1` even if `around` is passed ([GH-4019](https://github.com/Rapptz/discord.py/issues/4019))
- Fix `Guild.member_count` not updating in certain cases when a member has left the guild ([GH-4021](https://github.com/Rapptz/discord.py/issues/4021))
- Fix the type of `Object.id` not being validated. For backwards compatibility `str` is still allowed but is converted to `int` ([GH-4002](https://github.com/Rapptz/discord.py/issues/4002))
- Fix `Guild.edit` not allowing editing of notification settings ([GH-4074](https://github.com/Rapptz/discord.py/issues/4074), [GH-4047](https://github.com/Rapptz/discord.py/issues/4047))
- Fix crash when the guild widget contains channels that aren't in the payload ([GH-4114](https://github.com/Rapptz/discord.py/issues/4114), [GH-4115](https://github.com/Rapptz/discord.py/issues/4115))
- Close ffmpeg stdin handling from spawned processes with `FFmpegOpusAudio` and `FFmpegPCMAudio` ([GH-4036](https://github.com/Rapptz/discord.py/issues/4036))
- Fix `utils.escape_markdown` not escaping masked links ([GH-4206](https://github.com/Rapptz/discord.py/issues/4206), [GH-4207](https://github.com/Rapptz/discord.py/issues/4207))
- Fix reconnect loop due to failed handshake on region change ([GH-4210](https://github.com/Rapptz/discord.py/issues/4210), [GH-3996](https://github.com/Rapptz/discord.py/issues/3996))
- Fix `Guild.by_category` not returning empty categories ([GH-4186](https://github.com/Rapptz/discord.py/issues/4186))
- Fix certain JPEG images not being identified as JPEG ([GH-5143](https://github.com/Rapptz/discord.py/issues/5143))
- Fix a crash when an incomplete guild object is used when fetching reaction information ([GH-5181](https://github.com/Rapptz/discord.py/issues/5181))
- Fix a timeout issue when fetching members using `Guild.query_members`
- Fix an issue with domain resolution in voice ([GH-5188](https://github.com/Rapptz/discord.py/issues/5188), [GH-5191](https://github.com/Rapptz/discord.py/issues/5191))
- Fix an issue where `PartialEmoji.id` could be a string ([GH-4153](https://github.com/Rapptz/discord.py/issues/4153), [GH-4152](https://github.com/Rapptz/discord.py/issues/4152))
- Fix regression where `Member.activities` would not clear.
- |commands| A `TypeError` is now raised when `typing.Optional` is used within `commands.Greedy` ([GH-2253](https://github.com/Rapptz/discord.py/issues/2253), [GH-5068](https://github.com/Rapptz/discord.py/issues/5068))
- |commands| `Bot.walk_commands` no longer yields duplicate commands due to aliases ([GH-2591](https://github.com/Rapptz/discord.py/issues/2591))
- |commands| Fix regex characters not being escaped in `HelpCommand.clean_prefix` ([GH-4058](https://github.com/Rapptz/discord.py/issues/4058), [GH-4071](https://github.com/Rapptz/discord.py/issues/4071))
- |commands| Fix `Bot.get_command` from raising errors when a name only has whitespace ([GH-5124](https://github.com/Rapptz/discord.py/issues/5124))
- |commands| Fix issue with `Context.subcommand_passed` not functioning as expected ([GH-5198](https://github.com/Rapptz/discord.py/issues/5198))
- |tasks| Task objects are no longer stored globally so two class instances can now start two separate tasks ([GH-2294](https://github.com/Rapptz/discord.py/issues/2294))
- |tasks| Allow cancelling the loop within `before_loop` ([GH-4082](https://github.com/Rapptz/discord.py/issues/4082))

### Miscellaneous

- The `Member.roles` cache introduced in v1.3 was reverted due to issues caused ([GH-4087](https://github.com/Rapptz/discord.py/issues/4087), [GH-4157](https://github.com/Rapptz/discord.py/issues/4157))

- `Webhook` objects are now comparable and hashable ([GH-4182](https://github.com/Rapptz/discord.py/issues/4182))

- Some more API requests got a `reason` parameter for audit logs ([GH-5086](https://github.com/Rapptz/discord.py/issues/5086))
  - `TextChannel.follow`
  - `Message.pin` and `Message.unpin`
  - `Webhook.delete` and `Webhook.edit`

- For performance reasons `websockets` has been dropped in favour of `aiohttp.ws`.

- The blocking logging message now shows the stack trace of where the main thread was blocking

- The domain name was changed from `discordapp.com` to `discord.com` to prepare for the required domain migration

- Reduce memory usage when reconnecting due to stale references being held by the message cache ([GH-5133](https://github.com/Rapptz/discord.py/issues/5133))

- Optimize `abc.GuildChannel.permissions_for` by not creating as many temporary objects (20-32% savings).

- |commands| Raise `ext.commands.CommandRegistrationError` instead of `ClientException` when a duplicate error is registered ([GH-4217](https://github.com/Rapptz/discord.py/issues/4217))

- |tasks| No longer handle `HTTPException` by default in the task reconnect loop ([GH-5193](https://github.com/Rapptz/discord.py/issues/5193))

<a id="vp1p3p4"></a>

## v1.3.4

### Bug Fixes

- Fix an issue with channel overwrites causing multiple issues including crashes ([GH-5109](https://github.com/Rapptz/discord.py/issues/5109))

<a id="vp1p3p3"></a>

## v1.3.3

### Bug Fixes

- Change default WS close to 4000 instead of 1000.
  - The previous close code caused sessions to be invalidated at a higher frequency than desired.

- Fix `None` appearing in `Member.activities`. ([GH-2619](https://github.com/Rapptz/discord.py/issues/2619))

<a id="vp1p3p2"></a>

## v1.3.2

Another minor bug fix release.

### Bug Fixes

- Higher the wait time during the `GUILD_CREATE` stream before `on_ready` is fired for `AutoShardedClient`.
- `on_voice_state_update` now uses the inner `member` payload which should make it more reliable.
- Fix various Cloudflare handling errors ([GH-2572](https://github.com/Rapptz/discord.py/issues/2572), [GH-2544](https://github.com/Rapptz/discord.py/issues/2544))
- Fix crashes if `Message.guild` is `Object` instead of `Guild`.
- Fix `Webhook.send` returning an empty string instead of `None` when `wait=False`.
- Fix invalid format specifier in webhook state ([GH-2570](https://github.com/Rapptz/discord.py/issues/2570))
- |commands| Passing invalid permissions to permission related checks now raises `TypeError`.

<a id="vp1p3p1"></a>

## v1.3.1

Minor bug fix release.

### Bug Fixes

- Fix fetching invites in guilds that the user is not in.
- Fix the channel returned from `Client.fetch_channel` raising when sending messages. ([GH-2531](https://github.com/Rapptz/discord.py/issues/2531))

### Miscellaneous

- Fix compatibility warnings when using the Python 3.9 alpha.
- Change the unknown event logging from WARNING to DEBUG to reduce noise.

<a id="vp1p3p0"></a>

## v1.3.0

This version comes with a lot of bug fixes and new features. It's been in development for a lot longer than was anticipated!

### New Features

- Add `Guild.fetch_members` to fetch members from the HTTP API. ([GH-2204](https://github.com/Rapptz/discord.py/issues/2204))

- Add `Guild.fetch_roles` to fetch roles from the HTTP API. ([GH-2208](https://github.com/Rapptz/discord.py/issues/2208))

- Add support for teams via `Team` when fetching with `Client.application_info`. ([GH-2239](https://github.com/Rapptz/discord.py/issues/2239))

- Add support for suppressing embeds via `Message.edit`

- Add support for guild subscriptions. See the `Client` documentation for more details.

- Add `VoiceChannel.voice_states` to get voice states without relying on member cache.

- Add `Guild.query_members` to request members from the gateway.

- Add `FFmpegOpusAudio` and other voice improvements. ([GH-2258](https://github.com/Rapptz/discord.py/issues/2258))

- Add `RawMessageUpdateEvent.channel_id` for retrieving channel IDs during raw message updates. ([GH-2301](https://github.com/Rapptz/discord.py/issues/2301))

- Add `RawReactionActionEvent.event_type` to disambiguate between reaction addition and removal in reaction events.

- Add `abc.GuildChannel.permissions_synced` to query whether permissions are synced with the category. ([GH-2300](https://github.com/Rapptz/discord.py/issues/2300), [GH-2324](https://github.com/Rapptz/discord.py/issues/2324))

- Add `MessageType.channel_follow_add` message type for announcement channels being followed. ([GH-2314](https://github.com/Rapptz/discord.py/issues/2314))

- Add `Message.is_system` to allow for quickly filtering through system messages.

- Add `VoiceState.self_stream` to indicate whether someone is streaming via Go Live. ([GH-2343](https://github.com/Rapptz/discord.py/issues/2343))

- Add `Emoji.is_usable` to check if the client user can use an emoji. ([GH-2349](https://github.com/Rapptz/discord.py/issues/2349))

- Add `VoiceRegion.europe` and `VoiceRegion.dubai`. ([GH-2358](https://github.com/Rapptz/discord.py/issues/2358), [GH-2490](https://github.com/Rapptz/discord.py/issues/2490))

- Add `TextChannel.follow` to follow a news channel. ([GH-2367](https://github.com/Rapptz/discord.py/issues/2367))

- Add `Permissions.view_guild_insights` permission. ([GH-2415](https://github.com/Rapptz/discord.py/issues/2415))

- Add support for new audit log types. See [discord-api-audit-logs](https://discordpy.readthedocs.io/api.html#discord-api-audit-logs) for more information. ([GH-2427](https://github.com/Rapptz/discord.py/issues/2427))
  - Note that integration support is not finalized.

- Add `Webhook.type` to query the type of webhook (`WebhookType`). ([GH-2441](https://github.com/Rapptz/discord.py/issues/2441))

- Allow bulk editing of channel overwrites through `abc.GuildChannel.edit`. ([GH-2198](https://github.com/Rapptz/discord.py/issues/2198))

- Add `Activity.created_at` to see when an activity was started. ([GH-2446](https://github.com/Rapptz/discord.py/issues/2446))

- Add support for `xsalsa20_poly1305_lite` encryption mode for voice. ([GH-2463](https://github.com/Rapptz/discord.py/issues/2463))

- Add `RawReactionActionEvent.member` to get the member who did the reaction. ([GH-2443](https://github.com/Rapptz/discord.py/issues/2443))

- Add support for new YouTube streaming via `Streaming.platform` and `Streaming.game`. ([GH-2445](https://github.com/Rapptz/discord.py/issues/2445))

- Add `Guild.discovery_splash_url` to get the discovery splash image asset. ([GH-2482](https://github.com/Rapptz/discord.py/issues/2482))

- Add `Guild.rules_channel` to get the rules channel of public guilds. ([GH-2482](https://github.com/Rapptz/discord.py/issues/2482))
  - It should be noted that this feature is restricted to those who are either in Server Discovery or planning to be there.

- Add support for message flags via `Message.flags` and `MessageFlags`. ([GH-2433](https://github.com/Rapptz/discord.py/issues/2433))

- Add `User.system` and `Profile.system` to know whether a user is an official Discord Trust and Safety account.

- Add `Profile.team_user` to check whether a user is a member of a team.

- Add `Attachment.to_file` to easily convert attachments to `File` for sending.

- Add certain aliases to `Permissions` to match the UI better. ([GH-2496](https://github.com/Rapptz/discord.py/issues/2496))
  - `Permissions.manage_permissions`
  - `Permissions.view_channel`
  - `Permissions.use_external_emojis`

- Add support for passing keyword arguments when creating `Permissions`.

- Add support for custom activities via `CustomActivity`. ([GH-2400](https://github.com/Rapptz/discord.py/issues/2400))
  - Note that as of now, bots cannot send custom activities yet.

- Add support for `on_invite_create` and `on_invite_delete` events.

- Add support for clearing a specific reaction emoji from a message.
  - `Message.clear_reaction` and `Reaction.clear` methods.
  - `on_raw_reaction_clear_emoji` and `on_reaction_clear_emoji` events.

- Add `utils.sleep_until` helper to sleep until a specific datetime. ([GH-2517](https://github.com/Rapptz/discord.py/issues/2517), [GH-2519](https://github.com/Rapptz/discord.py/issues/2519))

- |commands| Add support for teams and `Bot.owner_ids` to have multiple bot owners. ([GH-2239](https://github.com/Rapptz/discord.py/issues/2239))

- |commands| Add new `BucketType.role` bucket type. ([GH-2201](https://github.com/Rapptz/discord.py/issues/2201))

- |commands| Expose `Command.cog` property publicly. ([GH-2360](https://github.com/Rapptz/discord.py/issues/2360))

- |commands| Add non-decorator interface for adding checks to commands via `Command.add_check` and `Command.remove_check`. ([GH-2411](https://github.com/Rapptz/discord.py/issues/2411))

- |commands| Add `has_guild_permissions` check. ([GH-2460](https://github.com/Rapptz/discord.py/issues/2460))

- |commands| Add `bot_has_guild_permissions` check. ([GH-2460](https://github.com/Rapptz/discord.py/issues/2460))

- |commands| Add `predicate` attribute to checks decorated with `.ext.commands.check`.

- |commands| Add `.ext.commands.check_any` check to logical OR multiple checks.

- |commands| Add `.ext.commands.max_concurrency` to allow only a certain amount of users to use a command concurrently before waiting or erroring.

- |commands| Add support for calling a `.ext.commands.Command` as a regular function.

- |tasks| `Loop.add_exception_type` now allows multiple exceptions to be set. ([GH-2333](https://github.com/Rapptz/discord.py/issues/2333))

- |tasks| Add `Loop.next_iteration` property. ([GH-2305](https://github.com/Rapptz/discord.py/issues/2305))

### Bug Fixes

- Fix issue with permission resolution sometimes failing for guilds with no owner.
- Tokens are now stripped upon use. ([GH-2135](https://github.com/Rapptz/discord.py/issues/2135))
- Passing in a `name` is no longer required for `Emoji.edit`. ([GH-2368](https://github.com/Rapptz/discord.py/issues/2368))
- Fix issue with webhooks not re-raising after retries have run out. ([GH-2272](https://github.com/Rapptz/discord.py/issues/2272), [GH-2380](https://github.com/Rapptz/discord.py/issues/2380))
- Fix mismatch in URL handling in `utils.escape_markdown`. ([GH-2420](https://github.com/Rapptz/discord.py/issues/2420))
- Fix issue with ports being read in little endian when they should be big endian in voice connections. ([GH-2470](https://github.com/Rapptz/discord.py/issues/2470))
- Fix `Member.mentioned_in` not taking into consideration the message's guild.
- Fix bug with moving channels when there are gaps in positions due to channel deletion and creation.
- Fix `on_shard_ready` not triggering when `fetch_offline_members` is disabled. ([GH-2504](https://github.com/Rapptz/discord.py/issues/2504))
- Fix issue with large sharded bots taking too long to actually dispatch `on_ready`.
- Fix issue with fetching group DM based invites in `Client.fetch_invite`.
- Fix out of order files being sent in webhooks when there are 10 files.
- |commands| Extensions that fail internally due to ImportError will no longer raise `.ext.commands.ExtensionNotFound`. ([GH-2244](https://github.com/Rapptz/discord.py/issues/2244), [GH-2275](https://github.com/Rapptz/discord.py/issues/2275), [GH-2291](https://github.com/Rapptz/discord.py/issues/2291))
- |commands| Updating the `Paginator.suffix` will not cause out of date calculations. ([GH-2251](https://github.com/Rapptz/discord.py/issues/2251))
- |commands| Allow converters from custom extension packages. ([GH-2369](https://github.com/Rapptz/discord.py/issues/2369), [GH-2374](https://github.com/Rapptz/discord.py/issues/2374))
- |commands| Fix issue with paginator prefix being `None` causing empty pages. ([GH-2471](https://github.com/Rapptz/discord.py/issues/2471))
- |commands| `.commands.Greedy` now ignores parsing errors rather than propagating them.
- |commands| `Command.can_run` now checks whether a command is disabled.
- |commands| `HelpCommand.clean_prefix` now takes into consideration nickname mentions. ([GH-2489](https://github.com/Rapptz/discord.py/issues/2489))
- |commands| `Context.send_help` now properly propagates to the `HelpCommand.on_help_command_error` handler.

### Miscellaneous

- The library now fully supports Python 3.8 without warnings.

- Bump the dependency of `websockets` to 8.0 for those who can use it. ([GH-2453](https://github.com/Rapptz/discord.py/issues/2453))

- Due to Discord providing `Member` data in mentions, users will now be upgraded to `Member` more often if mentioned.

- `utils.escape_markdown` now properly escapes new quote markdown.

- The message cache can now be disabled by passing `None` to `max_messages` in `Client`.

- The default message cache size has changed from 5000 to 1000 to accommodate small bots.

- Lower memory usage by only creating certain objects as needed in `Role`.

- There is now a sleep of 5 seconds before re-IDENTIFYing during a reconnect to prevent long loops of session invalidation.

- The rate limiting code now uses millisecond precision to have more granular rate limit handling.
  - Along with that, the rate limiting code now uses Discord's response to wait. If you need to use the system clock again for whatever reason, consider passing `assume_synced_clock` in `Client`.

- The performance of `Guild.default_role` has been improved from O(N) to O(1). ([GH-2375](https://github.com/Rapptz/discord.py/issues/2375))

- The performance of `Member.roles` has improved due to usage of caching to avoid surprising performance traps.

- The GC is manually triggered during things that cause large deallocations (such as guild removal) to prevent memory fragmentation.

- There have been many changes to the documentation for fixes both for usability, correctness, and to fix some linter errors. Thanks to everyone who contributed to those.

- The loading of the opus module has been delayed which would make the result of `opus.is_loaded` somewhat surprising.

- |commands| Usernames prefixed with @ inside DMs will properly convert using the `User` converter. ([GH-2498](https://github.com/Rapptz/discord.py/issues/2498))

- |tasks| The task sleeping time will now take into consideration the amount of time the task body has taken before sleeping. ([GH-2516](https://github.com/Rapptz/discord.py/issues/2516))

<a id="vp1p2p5"></a>

## v1.2.5

### Bug Fixes

- Fix a bug that caused crashes due to missing `animated` field in Emoji structures in reactions.

<a id="vp1p2p4"></a>

## v1.2.4

### Bug Fixes

- Fix a regression when `Message.channel` would be `None`.
- Fix a regression where `Message.edited_at` would not update during edits.
- Fix a crash that would trigger during message updates ([GH-2265](https://github.com/Rapptz/discord.py/issues/2265), [GH-2287](https://github.com/Rapptz/discord.py/issues/2287)).
- Fix a bug when `VoiceChannel.connect` would not return ([GH-2274](https://github.com/Rapptz/discord.py/issues/2274), [GH-2372](https://github.com/Rapptz/discord.py/issues/2372), [GH-2373](https://github.com/Rapptz/discord.py/issues/2373), [GH-2377](https://github.com/Rapptz/discord.py/issues/2377)).
- Fix a crash relating to token-less webhooks ([GH-2364](https://github.com/Rapptz/discord.py/issues/2364)).
- Fix issue where `Guild.premium_subscription_count` would be `None` due to a Discord bug. ([GH-2331](https://github.com/Rapptz/discord.py/issues/2331), [GH-2376](https://github.com/Rapptz/discord.py/issues/2376)).

<a id="vp1p2p3"></a>

## v1.2.3

### Bug Fixes

- Fix an AttributeError when accessing `Member.premium_since` in `on_member_update`. ([GH-2213](https://github.com/Rapptz/discord.py/issues/2213))
- Handle `asyncio.CancelledError` in `abc.Messageable.typing` context manager. ([GH-2218](https://github.com/Rapptz/discord.py/issues/2218))
- Raise the max encoder bitrate to 512kbps to account for nitro boosting. ([GH-2232](https://github.com/Rapptz/discord.py/issues/2232))
- Properly propagate exceptions in `Client.run`. ([GH-2237](https://github.com/Rapptz/discord.py/issues/2237))
- |commands| Ensure cooldowns are properly copied when used in cog level `command_attrs`.

<a id="vp1p2p2"></a>

## v1.2.2

### Bug Fixes

- Audit log related attribute access have been fixed to not error out when they shouldn't have.

<a id="vp1p2p1"></a>

## v1.2.1

### Bug Fixes

- `User.avatar_url` and related attributes no longer raise an error.
- More compatibility shims with the `enum.Enum` code.

<a id="vp1p2p0"></a>

## v1.2.0

This update mainly brings performance improvements and various nitro boosting attributes (referred to in the API as "premium guilds").

### New Features

- Add `Guild.premium_tier` to query the guild's current nitro boost level.
- Add `Guild.emoji_limit`, `Guild.bitrate_limit`, `Guild.filesize_limit` to query the new limits of a guild when taking into consideration boosting.
- Add `Guild.premium_subscription_count` to query how many members are boosting a guild.
- Add `Member.premium_since` to query since when a member has boosted a guild.
- Add `Guild.premium_subscribers` to query all the members currently boosting the guild.
- Add `Guild.system_channel_flags` to query the settings for a guild's `Guild.system_channel`.
  - This includes a new type named `SystemChannelFlags`
- Add `Emoji.available` to query if an emoji can be used (within the guild or otherwise).
- Add support for animated icons in `Guild.icon_url_as` and `Guild.icon_url`.
- Add `Guild.is_icon_animated`.
- Add support for the various new `MessageType` involving nitro boosting.
- Add `VoiceRegion.india`. ([GH-2145](https://github.com/Rapptz/discord.py/issues/2145))
- Add `Embed.insert_field_at`. ([GH-2178](https://github.com/Rapptz/discord.py/issues/2178))
- Add a `type` attribute for all channels to their appropriate `ChannelType`. ([GH-2185](https://github.com/Rapptz/discord.py/issues/2185))
- Add `Client.fetch_channel` to fetch a channel by ID via HTTP. ([GH-2169](https://github.com/Rapptz/discord.py/issues/2169))
- Add `Guild.fetch_channels` to fetch all channels via HTTP. ([GH-2169](https://github.com/Rapptz/discord.py/issues/2169))
- |tasks| Add `Loop.stop` to gracefully stop a task rather than cancelling.
- |tasks| Add `Loop.failed` to query if a task had failed somehow.
- |tasks| Add `Loop.change_interval` to change the sleep interval at runtime ([GH-2158](https://github.com/Rapptz/discord.py/issues/2158), [GH-2162](https://github.com/Rapptz/discord.py/issues/2162))

### Bug Fixes

- Fix internal error when using `Guild.prune_members`.
- |commands| Fix `.Command.invoked_subcommand` being invalid in many cases.
- |tasks| Reset iteration count when the loop terminates and is restarted.
- |tasks| The decorator interface now works as expected when stacking ([GH-2154](https://github.com/Rapptz/discord.py/issues/2154))

### Miscellaneous

- Improve performance of all Enum related code significantly.
  - This was done by replacing the `enum.Enum` code with an API compatible one.
  - This should not be a breaking change for most users due to duck-typing.
- Improve performance of message creation by about 1.5x.
- Improve performance of message editing by about 1.5-4x depending on payload size.
- Improve performance of attribute access on `Member` about by 2x.
- Improve performance of `utils.get` by around 4-6x depending on usage.
- Improve performance of event parsing lookup by around 2.5x.
- Keyword arguments in `Client.start` and `Client.run` are now validated ([GH-953](https://github.com/Rapptz/discord.py/issues/953), [GH-2170](https://github.com/Rapptz/discord.py/issues/2170))
- The Discord error code is now shown in the exception message for `HTTPException`.
- Internal tasks launched by the library will now have their own custom `__repr__`.
- All public facing types should now have a proper and more detailed `__repr__`.
- |tasks| Errors are now logged via the standard `py:logging` module.

<a id="vp1p1p1"></a>

## v1.1.1

### Bug Fixes

- Webhooks do not overwrite data on retrying their HTTP requests ([GH-2140](https://github.com/Rapptz/discord.py/issues/2140))

### Miscellaneous

- Add back signal handling to `Client.run` due to issues some users had with proper cleanup.

<a id="vp1p1p0"></a>

## v1.1.0

### New Features

- **There is a new extension dedicated to making background tasks easier.**
  - You can check the documentation here: [ext\_tasks\_api](https://discordpy.readthedocs.io/ext/tasks$1index.html#ext-tasks-api).
- Add `Permissions.stream` permission. ([GH-2077](https://github.com/Rapptz/discord.py/issues/2077))
- Add equality comparison and hash support to `Asset`
- Add `compute_prune_members` parameter to `Guild.prune_members` ([GH-2085](https://github.com/Rapptz/discord.py/issues/2085))
- Add `Client.cached_messages` attribute to fetch the message cache ([GH-2086](https://github.com/Rapptz/discord.py/issues/2086))
- Add `abc.GuildChannel.clone` to clone a guild channel. ([GH-2093](https://github.com/Rapptz/discord.py/issues/2093))
- Add `delay` keyword-only argument to `Message.delete` ([GH-2094](https://github.com/Rapptz/discord.py/issues/2094))
- Add support for `<:name:id>` when adding reactions ([GH-2095](https://github.com/Rapptz/discord.py/issues/2095))
- Add `Asset.read` to fetch the bytes content of an asset ([GH-2107](https://github.com/Rapptz/discord.py/issues/2107))
- Add `Attachment.read` to fetch the bytes content of an attachment ([GH-2118](https://github.com/Rapptz/discord.py/issues/2118))
- Add support for voice kicking by passing `None` to `Member.move_to`.

##### `discord.ext.commands`

- Add new `.commands.dm_only` check.
- Support callable converters in `.commands.Greedy`
- Add new `.commands.MessageConverter`.
  - This allows you to use `Message` as a type hint in functions.
- Allow passing `cls` in the `.commands.group` decorator ([GH-2061](https://github.com/Rapptz/discord.py/issues/2061))
- Add `.Command.parents` to fetch the parents of a command ([GH-2104](https://github.com/Rapptz/discord.py/issues/2104))

### Bug Fixes

- Fix `AttributeError when using _repr__` on `Widget`.
- Fix issue with `abc.GuildChannel.overwrites` returning `None` for keys.
- Remove incorrect legacy NSFW checks in e.g. `TextChannel.is_nsfw`.
- Fix `UnboundLocalError` when `RequestsWebhookAdapter` raises an error.
- Fix bug where updating your own user did not update your member instances.
- Tighten constraints of `__eq__` in `Spotify` objects ([GH-2113](https://github.com/Rapptz/discord.py/issues/2113), [GH-2117](https://github.com/Rapptz/discord.py/issues/2117))

##### `discord.ext.commands`

- Fix lambda converters in a non-module context (e.g. `eval`).
- Use message creation time for reference time when computing cooldowns.
  - This prevents cooldowns from triggering during e.g. a RESUME session.
- Fix the default `on_command_error` to work with new-style cogs ([GH-2094](https://github.com/Rapptz/discord.py/issues/2094))
- DM channels are now recognised as NSFW in `.commands.is_nsfw` check.
- Fix race condition with help commands ([GH-2123](https://github.com/Rapptz/discord.py/issues/2123))
- Fix cog descriptions not showing in `.commands.MinimalHelpCommand` ([GH-2139](https://github.com/Rapptz/discord.py/issues/2139))

### Miscellaneous

- Improve the performance of internal enum creation in the library by about 5x.
- Make the output of `python -m discord --version` a bit more useful.
- The loop cleanup facility has been rewritten again.
- The signal handling in `Client.run` has been removed.

##### `discord.ext.commands`

- Custom exception classes are now used for all default checks in the library ([GH-2101](https://github.com/Rapptz/discord.py/issues/2101))

<a id="vp1p0p1"></a>

## v1.0.1

### Bug Fixes

- Fix issue with speaking state being cast to `int` when it was invalid.
- Fix some issues with loop cleanup that some users experienced on Linux machines.
- Fix voice handshake race condition ([GH-2056](https://github.com/Rapptz/discord.py/issues/2056), [GH-2063](https://github.com/Rapptz/discord.py/issues/2063))

<a id="vp1p0p0"></a>

## v1.0.0

The changeset for this version are too big to be listed here, for more information please
see [the migrating page](https://discordpy.readthedocs.io/migrating_to_v1.html#migrating-1-0).

<a id="vp0p16p6"></a>

## v0.16.6

### Bug Fixes

- Fix issue with `Client.create_server` that made it stop working.
- Fix main thread being blocked upon calling `StreamPlayer.stop`.
- Handle HEARTBEAT\_ACK and resume gracefully when it occurs.
- Fix race condition when pre-emptively rate limiting that caused releasing an already released lock.
- Fix invalid state errors when immediately cancelling a coroutine.

<a id="vp0p16p1"></a>

## v0.16.1

This release is just a bug fix release with some better rate limit implementation.

### Bug Fixes

- Servers are now properly chunked for user bots.
- The CDN URL is now used instead of the API URL for assets.
- Rate limit implementation now tries to use header information if possible.
- Event loop is now properly propagated ([GH-420](https://github.com/Rapptz/discord.py/issues/420))
- Allow falsey values in `Client.send_message` and `Client.send_file`.

<a id="vp0p16p0"></a>

## v0.16.0

### New Features

- Add `Channel.overwrites` to get all the permission overwrites of a channel.
- Add `Server.features` to get information about partnered servers.

### Bug Fixes

- Timeout when waiting for offline members while triggering `on_ready`.

  - The fact that we did not timeout caused a gigantic memory leak in the library that caused
    thousands of duplicate `Member` instances causing big memory spikes.

- Discard null sequences in the gateway.

  - The fact these were not discarded meant that `on_ready` kept being called instead of

- **Func:** `on_resumed`. Since this has been corrected, in most cases `on_ready` will be
  called once or twice with `on_resumed` being called much more often.

<a id="vp0p15p1"></a>

## v0.15.1

- Fix crash on duplicate or out of order reactions.

<a id="vp0p15p0"></a>

## v0.15.0

### New Features

- Rich Embeds for messages are now supported.

  - To do so, create your own `Embed` and pass the instance to the `embed` keyword argument to `Client.send_message` or `Client.edit_message`.
- Add `Client.clear_reactions` to remove all reactions from a message.
- Add support for MESSAGE\_REACTION\_REMOVE\_ALL event, under `on_reaction_clear`.
- Add `Permissions.update` and `PermissionOverwrite.update` for bulk permission updates.

  - This allows you to use e.g. `p.update(read_messages=True, send_messages=False)` in a single line.
- Add `PermissionOverwrite.is_empty` to check if the overwrite is empty (i.e. has no overwrites set explicitly as true or false).

For the command extension, the following changed:

- `Context` is no longer slotted to facilitate setting dynamic attributes.

<a id="vp0p14p3"></a>

## v0.14.3

### Bug Fixes

- Fix crash when dealing with MESSAGE\_REACTION\_REMOVE
- Fix incorrect buckets for reactions.

<a id="v0p14p2"></a>

## v0.14.2

### New Features

- `Client.wait_for_reaction` now returns a namedtuple with `reaction` and `user` attributes.
  - This is for better support in the case that `None` is returned since tuple unpacking can lead to issues.

### Bug Fixes

- Fix bug that disallowed `None` to be passed for `emoji` parameter in `Client.wait_for_reaction`.

<a id="v0p14p1"></a>

## v0.14.1

### Bug fixes

- Fix bug with `Reaction` not being visible at import.
  - This was also breaking the documentation.

<a id="v0p14p0"></a>

## v0.14.0

This update adds new API features and a couple of bug fixes.

### New Features

- Add support for Manage Webhooks permission under `Permissions.manage_webhooks`
- Add support for `around` argument in 3.5+ `Client.logs_from`.
- Add support for reactions.
  - `Client.add_reaction` to add a reactions
  - `Client.remove_reaction` to remove a reaction.
  - `Client.get_reaction_users` to get the users that reacted to a message.
  - `Permissions.add_reactions` permission bit support.
  - Two new events, `on_reaction_add` and `on_reaction_remove`.
  - `Message.reactions` to get reactions from a message.
  - `Client.wait_for_reaction` to wait for a reaction from a user.

### Bug Fixes

- Fix bug with Paginator still allowing lines that are too long.
- Fix the `Permissions.manage_emojis` bit being incorrect.

<a id="v0p13p0"></a>

## v0.13.0

This is a backwards compatible update with new features.

### New Features

- Add the ability to manage emojis.

  - `Client.create_custom_emoji` to create new emoji.
  - `Client.edit_custom_emoji` to edit an old emoji.
  - `Client.delete_custom_emoji` to delete a custom emoji.
- Add new `Permissions.manage_emojis` toggle.

  - This applies for `PermissionOverwrite` as well.
- Add new statuses for `Status`.

  - `Status.dnd` (aliased with `Status.do_not_disturb`) for Do Not Disturb.
  - `Status.invisible` for setting your status to invisible (please see the docs for a caveat).
- Deprecate `Client.change_status`

  - Use `Client.change_presence` instead for better more up to date functionality.
  - This method is subject for removal in a future API version.
- Add `Client.change_presence` for changing your status with the new Discord API change.

  - This is the only method that allows changing your status to invisible or do not disturb.

### Bug Fixes

- Paginator pages do not exceed their max\_size anymore ([GH-340](https://github.com/Rapptz/discord.py/issues/340))
- Do Not Disturb users no longer show up offline due to the new `Status` changes.

<a id="v0p12p0"></a>

## v0.12.0

This is a bug fix update that also comes with new features.

### New Features

- Add custom emoji support.

  - Adds a new class to represent a custom Emoji named `Emoji`
  - Adds a utility generator function, `Client.get_all_emojis`.
  - Adds a list of emojis on a server, `Server.emojis`.
  - Adds a new event, `on_server_emojis_update`.

- Add new server regions to `ServerRegion`

  - `ServerRegion.eu_central` and `ServerRegion.eu_west`.

- Add support for new pinned system message under `MessageType.pins_add`.

- Add order comparisons for `Role` to allow it to be compared with regards to hierarchy.

  - This means that you can now do `role_a > role_b` etc to check if `role_b` is lower in the hierarchy.

- Add `Server.role_hierarchy` to get the server's role hierarchy.

- Add `Member.server_permissions` to get a member's server permissions without their channel specific overwrites.

- Add `Client.get_user_info` to retrieve a user's info from their ID.

- Add a new `Player` property, `Player.error` to fetch the error that stopped the player.

  - To help with this change, a player's `after` function can now take a single parameter denoting the current player.

- Add support for server verification levels.

  - Adds a new enum called `VerificationLevel`.
  - This enum can be used in `Client.edit_server` under the `verification_level` keyword argument.
  - Adds a new attribute in the server, `Server.verification_level`.

- Add `Server.voice_client` shortcut property for `Client.voice_client_in`.

  - This is technically old (was added in v0.10.0) but was undocumented until v0.12.0.

For the command extension, the following are new:

- Add custom emoji converter.
- All default converters that can take IDs can now convert via ID.
- Add coroutine support for `Bot.command_prefix`.
- Add a method to reset command cooldown.

### Bug Fixes

- Fix bug that caused the library to not work with the latest `websockets` library.
- Fix bug that leaked keep alive threads ([GH-309](https://github.com/Rapptz/discord.py/issues/309))
- Fix bug that disallowed `ServerRegion` from being used in `Client.edit_server`.
- Fix bug in `Channel.permissions_for` that caused permission resolution to happen out of order.
- Fix bug in `Member.top_role` that did not account for same-position roles.

<a id="v0p11p0"></a>

## v0.11.0

This is a minor bug fix update that comes with a gateway update (v5 -> v6).

### Breaking Changes

- `Permissions.change_nicknames` has been renamed to `Permissions.change_nickname` to match the UI.

### New Features

- Add the ability to prune members via `Client.prune_members`.
- Switch the websocket gateway version to v6 from v5. This allows the library to work with group DMs and 1-on-1 calls.
- Add `AppInfo.owner` attribute.
- Add `CallMessage` for group voice call messages.
- Add `GroupCall` for group voice call information.
- Add `Message.system_content` to get the system message.
- Add the remaining VIP servers and the Brazil servers into `ServerRegion` enum.
- Add `stderr` argument to `VoiceClient.create_ffmpeg_player` to redirect stderr.
- The library now handles implicit permission resolution in `Channel.permissions_for`.
- Add `Server.mfa_level` to query a server's 2FA requirement.
- Add `Permissions.external_emojis` permission.
- Add `Member.voice` attribute that refers to a `VoiceState`.

  - For backwards compatibility, the member object will have properties mirroring the old behaviour.

For the command extension, the following are new:

- Command cooldown system with the `cooldown` decorator.
- `UserInputError` exception for the hierarchy for user input related errors.

### Bug Fixes

- `Client.email` is now saved when using a token for user accounts.
- Fix issue when removing roles out of order.
- Fix bug where discriminators would not update.
- Handle cases where `HEARTBEAT` opcode is received. This caused bots to disconnect seemingly randomly.

For the command extension, the following bug fixes apply:

- `Bot.check` decorator is actually a decorator not requiring parentheses.
- `Bot.remove_command` and `Group.remove_command` no longer throw if the command doesn't exist.
- Command names are no longer forced to be `lower()`.
- Fix a bug where Member and User converters failed to work in private message contexts.
- `HelpFormatter` now ignores hidden commands when deciding the maximum width.

<a id="v0p10p0"></a>

## v0.10.0

For breaking changes, see [migrating-to-async](https://discordpy.readthedocs.io/migrating_to_async.html#migrating-to-async). The breaking changes listed there will not be enumerated below. Since this version is rather a big departure from v0.9.2, this change log will be non-exhaustive.

### New Features

- The library is now fully `asyncio` compatible, allowing you to write non-blocking code a lot more easily.
- The library now fully handles 429s and unconditionally retries on 502s.
- A new command extension module was added but is currently undocumented. Figuring it out is left as an exercise to the reader.
- Two new exception types, `Forbidden` and `NotFound` to denote permission errors or 404 errors.
- Added `Client.delete_invite` to revoke invites.
- Added support for sending voice. Check `VoiceClient` for more details.
- Added `Client.wait_for_message` coroutine to aid with follow up commands.
- Added `version_info` named tuple to check version info of the library.
- Login credentials are now cached to have a faster login experience. You can disable this by passing in `cache_auth=False`
  when constructing a `Client`.
- New utility function, `discord.utils.get` to simplify retrieval of items based on attributes.
- All data classes now support `!=`, `==`, `hash(obj)` and `str(obj)`.
- Added `Client.get_bans` to get banned members from a server.
- Added `Client.invites_from` to get currently active invites in a server.
- Added `Server.me` attribute to get the `Member` version of `Client.user`.
- Most data classes now support a `hash(obj)` function to allow you to use them in `set` or `dict` classes or subclasses.
- Add `Message.clean_content` to get a text version of the content with the user and channel mentioned changed into their names.
- Added a way to remove the messages of the user that just got banned in `Client.ban`.
- Added `Client.wait_until_ready` to facilitate easy creation of tasks that require the client cache to be ready.
- Added `Client.wait_until_login` to facilitate easy creation of tasks that require the client to be logged in.
- Add `discord.Game` to represent any game with custom text to send to `Client.change_status`.
- Add `Message.nonce` attribute.
- Add `Member.permissions_in` as another way of doing `Channel.permissions_for`.
- Add `Client.move_member` to move a member to another voice channel.
- You can now create a server via `Client.create_server`.
- Added `Client.edit_server` to edit existing servers.
- Added `Client.server_voice_state` to server mute or server deafen a member.
- If you are being rate limited, the library will now handle it for you.
- Add `on_member_ban` and `on_member_unban` events that trigger when a member is banned/unbanned.

### Performance Improvements

- All data classes now use `__slots__` which greatly reduce the memory usage of things kept in cache.
- Due to the usage of `asyncio`, the CPU usage of the library has gone down significantly.
- A lot of the internal cache lists were changed into dictionaries to change the `O(n)` lookup into `O(1)`.
- Compressed READY is now on by default. This means if you're on a lot of servers (or maybe even a few) you would
  receive performance improvements by having to download and process less data.
- While minor, change regex from `\d+` to `[0-9]+` to avoid unnecessary unicode character lookups.

### Bug Fixes

- Fix bug where guilds being updated did not edit the items in cache.
- Fix bug where `member.roles` were empty upon joining instead of having the `@everyone` role.
- Fix bug where `Role.is_everyone` was not being set properly when the role was being edited.
- `Client.logs_from` now handles cases where limit > 100 to sidestep the discord API limitation.
- Fix bug where a role being deleted would trigger a `ValueError`.
- Fix bug where `Permissions.kick_members` and `Permissions.ban_members` were flipped.
- Mentions are now triggered normally. This was changed due to the way discord handles it internally.
- Fix issue when a `Message` would attempt to upgrade a `Message.server` when the channel is
  a `Object`.
- Unavailable servers were not being added into cache, this has been corrected.
