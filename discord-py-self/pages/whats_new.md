> Pinned source for discord.py-self v2.1.0: [docs/whats_new.rst](https://github.com/dolfies/discord.py-self/blob/6de18b4cb40dd42625a535f52d9715c71399ffb3/docs/whats_new.rst)

<a id="whats-new"></a>

# Changelog

This page keeps a detailed human friendly rendering of what's new and changed
in specific versions.

<a id="vp2p1p0"></a>

## v2.1.0

Due to the enormous amount of changes in this release, some minor changes may be omitted from this changelog. Please refer to the documentation for more details on specific features.

### New Features

- Add new flags to `ApplicationFlags`, `PublicUserFlags`, `MessageFlags`, `MemberFlags`, `ChannelFlags`, and more

- Support new `MessageType` values, update `Message.system_content` accordingly

- Support new `ConnectionType` values

- Overhaul rich presence, adding support for viewing and sending all activity fields (including many new fields)
  - New activity type: `ActivityType.hang`, supported via `HangActivity`
  - New classes: `ActivityParty`, `ActivityAssets`, `ActivitySecrets`, and `ActivityTimestamps`
  - Deprecated `Game` and `Streaming` in favour of `Activity`
  - Made `Spotify` constructible and sendable via `Client.change_presence`
  - Add `Client.proxy_external_application_assets` to proxy external assets for rich presence

- Support read states
  - New low-level interface: `ReadState`
  - Access all read states from `Client.read_states` and access per-channel read states via the `TextChannel.read_state` attribute
  - Add rich attributes: `TextChannel.acked_message_id`, `TextChannel.acked_message`, `TextChannel.acked_pin_timestamp`, `TextChannel.mention_count`, and `TextChannel.last_viewed_timestamp`
  - Add `abc.Messageable.unack` to unacknowledge all messages in a channel
  - Add `Client.bulk_ack` to acknowledge multiple read states at once

- Support experiments
  - Add `UserExperiment` and `GuildExperiment`
  - Access user experiments via `Client.experiments` and guild experiments via `Client.guild_experiments`
  - Add `Client.get_experiment` helper and `Client.fetch_experiments` coroutine

- Add message search functionality
  - Search guilds with `Guild.search`
  - Search channels with `abc.Messageable.search`

- Add support for the new username system (also known as "pomelo")
  - Add `User.is_pomelo` to check if a user has been migrated
  - Add `User.global_name` to get their global nickname or "display name"
  - Update `User.display_name` and `Member.display_name` to understand global nicknames
  - Update `__str__` for `User` to drop discriminators if the user has been migrated
  - Update `Guild.get_member_named` to work with migrated users
  - Update `User.default_avatar` to work with migrated users
  - Update `ClientUser.edit` to allow migrating and changing global names
  - \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Update user and member converters to understand migrated users

- Add GCP uploads
  - Allows pre-uploading files to Google Cloud Storage for faster file sending
  - Supports uploading in parallel and allows reusing previously uploaded files
  - Allows sending files up to 500 MiB each (Nitro only)
  - Implemented via `CloudFile` and `abc.Messageable.upload_files`
  - The `CloudFile` instances can be used in place of `File` instances when sending messages

- Support application command fetching V3
  - Add `abc.Messageable.application_commands` and `Guild.application_commands` to get all application commands in a guild or private channel
  - Alias and deprecate all old application command fetching methods
  - It is highly recommended that the result of this method is cached to avoid rate limits

- Support hubs
  - Add `DirectoryChannel`, `DirectoryEntry`, and relevant methods for fetching and creating
  - Add `Guild.hub_type`
  - Add `Client.join_hub_waitlist`, `Client.lookup_hubs`, and `Client.join_hub`

- Support friend suggestions
  - Add `FriendSuggestion` and `Client.friend_suggestion_count`
  - Add `Client.friend_suggestions`
  - Add new events, `on_friend_suggestion_add` and `on_friend_suggestion_remove`

- Support OAuth2 authorizations
  - Add `Client.oauth2_tokens`, `Client.fetch_authorization`, `Client.create_authorization`

- Heavily improve guild subscriptions
  - \[BREAKING] Remove `Guild.request` method; use `Guild.subscribe` instead
  - Allow disabling auto guild subscription via `guild_subscriptions` parameter in `Client`
  - Add `Guild.is_subscribed` and `Guild.is_subscribed_to` to check if the client is subscribed to a guild
  - Add `Guild.subscribe` and `Guild.subscribe_to` to allow manually managing guild subscriptions

- \[BREAKING] User notes handling is now entirely rewritten
  - The `UserNote` class is removed; notes are now represented as strings
  - `Client.notes` is renamed to `Client.fetch_notes` for forward-compatibility

- Update various payment and billing related models to add new fields
  - \[BREAKING] Remove `Payment.refund` as it is no longer supported by the API
  - Add `BRAINTREE_KEY`, `STRIPE_KEY`, and `ADYEN_KEY` to package exports

- Add `message_send_cooldown` and `thread_create_cooldown` attributes to the `abc.Messageable.typing` context manager.

- Add `Client.channel_affinities` to get channel affinities and `Client.premium_affinities` to get premium user affinities

- Add various new fields to `Application` and `PartialApplication`, update implementations to match API

- Allow passing `activities`, `afk`, and `idle_since` to `Client` for initial presence setup

- Add `Client.is_afk` and `Client.idle_since` helpers

- Allow passing `preferred_rtc_regions` to `Client` to override Discord's suggested RTC regions
  - \[BREAKING] Rename `Client.preferred_voice_regions` to `Client.preferred_rtc_regions` to match the API
  - \[BREAKING] Rename `Client.fetch_preferred_voice_regions` to `Client.fetch_preferred_rtc_regions` to match the API
  - \[BREAKING] Remove `preferred_region` from `Client.change_voice_state` and `Guild.change_voice_state`
  - Allow setting the `Client.preferred_rtc_regions` property after initialisation

- Allow passing `canary` to `Client` to use the canary API

- Allow passing `timezone` to `Client` to configure the timezone broadcasted to Discord

- Add `Tutorial` and `Client.tutorial` to access new user tutorial information

- Add `with_permissions` to `Client.fetch_invite`

- Add `Client.create_invite` and `Client.revoke_invites` to create and revoke friend invites

- Allow `Client.create_group` to create a group channel with only one other recipient

- \[BREAKING] Rename `Client.relationship_activity_statistics` to `Client.global_activity_statistics` to better reflect its purpose

- Add `Client.user_offer` to replace deprecated `Client.trial_offer`

- Add `Client.report_unverified_application` to report game detection issues

- Add `Client.recent_avatars` to get recently used avatars

- Add `Guild.query_recent_members` to fetch members who recently joined

- Add various new fields to `UserProfile` and `MemberProfile`
  - Note that nearly all fields are unavailable if the user has blocked the client user. This can be determined with `UserProfile.is_blocker`

- Add `DefaultAvatar.pink` for new pink default avatars

- Add `Colour.pink` to get the pink default avatar colour

- Add support for voice messages ([GH-9358](https://github.com/dolfies/discord.py-self/issues/9358))
  - Add `Attachment.duration` and `Attachment.waveform`
  - Add `Attachment.is_voice_message`
  - This does not support *sending* voice messages yet

- Add support for `TextChannel.default_thread_slowmode_delay`

- Add support for `ForumChannel.default_sort_order`

- Add support for `default_reaction_emoji` and `default_forum_layout` in `Guild.create_forum`

- Add support for `widget_channel`, `widget_enabled`, and `mfa_level` in `Guild.edit`

- Add various new `Permissions` and changes

- Add support for `with_counts` parameter to `Client.fetch_guilds`

- Add new `Guild.get_emoji` helper

- Add `Guild.max_stage_video_channel_users` and `Guild.safety_alerts_channel`

- Add support for `raid_alerts_disabled` and `safety_alerts_channel` in `Guild.edit`.

- Add support for Polls ([GH-9759](https://github.com/dolfies/discord.py-self/issues/9759)).
  - Polls can be created using `Poll` and the `poll` keyword-only parameter in various message sending methods
  - Add `PollAnswer` and `PollMedia`
  - Add `Message.end_poll` method to end polls
  - Add new events, `on_poll_vote_add`, `on_poll_vote_remove`, `on_raw_poll_vote_add`, and `on_raw_poll_vote_remove`

- Voice handling has been completely rewritten to fix many bugs

- Add support for `RawReactionActionEvent.message_author_id`

- Add support for `AuditLogAction.creator_monetization_request_created` and `AuditLogAction.creator_monetization_terms_accepted`

- Add support for `AttachmentFlags`, accessed via `Attachment.flags`

- Add support for `RoleFlags`, accessed via `Role.flags`

- Add support for `ChannelType.media`, accessed via `ForumChannel.is_media`

- Add shortcut for `CategoryChannel.forums`.

- Add encoder options to `VoiceClient.play`

- Add optional attribute `integration_type` in `AuditLogEntry.extra` for `kick` or `member_role_update` actions

- Add support for reading burst reactions
  - Add `Reaction.normal_count`
  - Add `Reaction.burst_count`
  - Add `Reaction.me_burst`

- Add `scheduled_event` parameter for `StageChannel.create_instance`

- Add support for auto mod members
  - Add `type` keyword argument to `AutoModRuleAction`
  - Add `AutoModTrigger.mention_raid_protection`
  - Add `AutoModRuleTriggerType.member_profile`
  - Add `AutoModRuleEventType.member_update`
  - Add `AutoModRuleActionType.block_member_interactions`

- Add support for getting/fetching threads from `Message`
  - Add `PartialMessage.thread`
  - Add `Message.thread`
  - Add `Message.fetch_thread`

- Add support for adding forum thread tags via webhook

- Add `Locale.latin_american_spanish`

- Add support for setting voice channel status

- Add support for guild incidents
  - Updated `Guild.edit` with `invites_disabled_until` and `dms_disabled_until` parameters
  - Add `Guild.invites_paused_until`
  - Add `Guild.dms_paused_until`
  - Add `Guild.invites_paused`
  - Add `Guild.dms_paused`

- Add support for `abc.User.avatar_decoration`

- Add support for GIF stickers

- Add support for bulk banning members via `Guild.bulk_ban`

- Add `reason` keyword argument to `Thread.delete`

- Add support for reaction types to raw and non-raw models

- Add support for message forwarding
  - Adds `MessageReferenceType`
  - Adds `MessageSnapshot`
  - Adds `type` parameter to `MessageReference`, `MessageReference.from_message`, and `PartialMessage.to_reference`
  - Add `PartialMessage.forward`ionCallbackResponse.resource\` will be different

- Add `PartialWebhookChannel.mention` attribute

- Add richer `Role.move` interface

- Add support for `EmbedFlags` via `Embed.flags`

- Add `ForumChannel.members` property

- Add `PartialMessageable.mention`

- Add support for purchase notification messages
  - Add new type `MessageType.purchase_notification`
  - Add new models `GuildProductPurchase` and `PurchaseNotification`
  - Add `Message.purchase_notification`

- Add `category` parameter to `.abc.GuildChannel.clone`

- Parse full message for message edit event
  - Adds `RawMessageUpdateEvent.message` attribute
  - Potentially speeds up `on_message_edit` by no longer copying data

- Allow passing `None` for `scopes` parameter in `utils.oauth_url`

- Add `Guild.dm_spam_detected_at` and `Guild.is_dm_spam_detected`

- Add `Guild.raid_detected_at` and `Guild.is_raid_detected`

- Add `Client.fetch_sticker_pack`

- Add `Guild.fetch_role`

- Add new `Attachment` fields

- Add `Member.guild_banner` and `Member.display_banner`

- Add support for guild tags (also known as primary guilds)
  - This is through the `PrimaryGuild` class
  - You retrieve this via `Member.primary_guild`

- Add support for the new pins endpoint
  - This turns `abc.Messageable.pins` into an async iterator
  - The old eager behaviour of using `await` is still supported, but is now deprecated

- Add support for guild onboarding
  - Completing onboarding is still not supported

- Add support new gradient and holographic role colours

- Add `Locale.language_code` attribute

- Add support for guest invites

- Add `File.uri` to get the `attachment://<filename>` URI of a file

- Add ability to create a media-only forum channel via `media` parameter in `Guild.create_forum`

- Add new colours from the new Discord themes
  - This updates the old `Colour.dark_theme`, `Colour.light_theme`, `Colour.light_embed` and `Colour.dark_embed`
  - This adds `Colour.ash_theme`, `Colour.ash_embed`, `Colour.onyx_theme`, and `Colour.onyx_embed`

- \[[ext.tasks](https://discordpy-self.readthedocs.io/ext/tasks/index.html#discord-ext-tasks)] Add `name` parameter to `ext.tasks.loop` to name the internal `asyncio.Task`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add fallback behaviour to `ext.commands.CurrentGuild`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add logging for errors that occur during `ext.commands.Cog.cog_unload`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add support for `typing.NewType` and `type` keyword type aliases

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add support for positional-only flag parameters

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add support for channel URLs in ChannelConverter related classes

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add `BadLiteralArgument.argument` to get the failed argument's value

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add `Context.filesize_limit` property

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Add support for `Parameter.displayed_name`

### Bug Fixes

- Fix TLS fingerprinting issues causing unnecessary CAPTCHA challenges and blocked requests

- Fix the type of `ClientUser.phone` to be a string

- Fix various state issues when managing guild subscriptions

- \[BREAKING] Remove no longer functional `validate` parameter from `abc.GuildChannel.create_invite`

- Improve presence syncing to reduce unnecessary updates and lost presences

- \[BREAKING] Update return type of `Client.detectable_applications` to fix a crash due to an API change

- \[BREAKING] Remove nonexistant `Gift.revoked` attribute

- \[BREAKING] Rename `Guild.owner_application_id` to `Guild.application_id` to match API and upstream

- \[BREAKING] Remove no longer functional `Guild.application_command_counts` attribute

- Fix crash in `Integration` with the Twitch integration ID being a string

- Improve member and relationship presence support and handling

- Fix `FileHandler` handlers being written ANSI characters when the bot is executed inside PyCharm
  - This has the side effect of removing coloured logs from the PyCharm terminal due an upstream bug involving TTY detection. This issue is tracked under [PY-43798](https://youtrack.jetbrains.com/issue/PY-43798)

- Fix channel edits with `Webhook.edit` sending two requests instead of one

- Fix `StageChannel.last_message_id` always being `None`

- Fix piped audio input ending prematurely

- Fix AutoMod audit log entry error due to empty `channel_id`

- Fix handling of `around` parameter in `abc.Messageable.history`

- Fix `utils.escape_markdown` not escaping the new markdown

- Fix webhook targets not being converted in audit logs

- Fix error when not passing `enabled` in `Guild.create_automod_rule`

- Fix how various parameters are handled in `Guild.create_scheduled_event`

- Fix not sending the `ssrc` parameter when sending the `SPEAKING` voice payload

- Fix username lookup in `Guild.get_member_named`

- Fix false positives in `PartialEmoji.from_str` inappropriately setting `animated` to `True`

- Fix `NameError` when using `abc.GuildChannel.create_invite`

- Fix escape behaviour for lists and headers in `utils.escape_markdown`

- Fixes and improvements for `FFmpegAudio` and all related subclasses

- Fix `Template.source_guild` attempting to resolve from cache

- Fix `IndexError` being raised instead of `ValueError` when calling `Colour.from_str` with an empty string

- Fix possible error in voice cleanup logic

- Fix possible bad voice state where you move to a voice channel with missing permissions

- Fix handling of `AuditLogDiff` when relating to auto mod triggers

- Fix race condition in voice logic relating to disconnect and connect

- Fix restriction on auto moderation audit log ID range

- Fix comparison between `Object` classes with a `type` set

- Fix handling of an enum in `AutoModRule.edit`

- Fix handling of `Client.close` within `Client.__aexit__`

- Fix channel deletion not evicting related threads from cache

- Fix bug with cache superfluously incrementing role positions

- Fix `exempt_channels` not being passed along in `Guild.create_automod_rule`

- Fix `abc.GuildChannel.purge` failing if the message was deleted

- Handle improper 1000 close code closures by Discord

- Add support for AEAD XChaCha20 Poly1305 encryption model
  - This allows voice to continue working when the older encryption modes eventually get removed

- Update all channel clone implementations to work as expected

- Fix `TextChannel.clone` always sending slowmode when not applicable to news channels

- Fix `Sticker.url` for GIF stickers

- Fix `User.default_avatar` for team users and webhooks

- Fix `AuditLogEntry.target` causing errors for `AuditLogAction.message_pin` and `AuditLogAction.message_unpin` actions

- Fix path sanitisation for absolute Windows paths when using `__main__`

- Create `ScheduledEvent` on cache miss for `on_scheduled_event_delete`

- Add defaults for `Message` creation preventing some crashes

- Fix voice connection issues and upgrade the voice version to 8

- Fix calculation of hashed rate limit keys

- Fix `Thread.applied_tags` being empty for media channels

- Fix potentially stuck ratelimit buckets in certain circumstances

- Fix audit log `automod_rule_trigger_type` extra being missing

- \[[ext.tasks](https://discordpy-self.readthedocs.io/ext/tasks/index.html#discord-ext-tasks)] Fix race condition when setting timer handle when using uvloop

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix issue with category cooldowns outside of guild channels

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix callable FlagConverter defaults on hybrid commands not being called

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Unwrap `discord.ext.commands.Parameter` if given as default to `ext.commands.parameter`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix fallback behaviour not being respected when calling replace for `.ext.commands.Parameter`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix `ext.commands.HelpCommand` defined checks not carrying over during copy

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix the wrong `ext.commands.HelpCommand.on_help_command_error` being called when ejected from a cog

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Fix `=None` being displayed in `ext.commands.Command.signature`

- \[[ext.commands](https://discordpy-self.readthedocs.io/ext/commands/index.html#discord-ext-commands)] Change lookup order for `ext.commands.MemberConverter` and `ext.commands.UserConverter` to prioritise usernames instead of nicknames

### Miscellaneous

- Minimum version is now Python 3.10

- New dependency: `curl_cffi`

- Update filesize limit constants

- Additional documentation added for logging capabilities

- Performance increases of constructing `Permissions` using keyword arguments

- Improve `__repr__` of `SyncWebhook` and `Webhook`

- Change internal thread names to be consistent

- Use a fallback package for `audioop` to allow the library to work in Python 3.13 or newer

- Remove `aiodns` from being used on Windows

- Add zstd gateway compression to `speed` extras
  - This can be installed using `discord.py-self[speed]`

- Add proxy support fetching from the CDN

- Remove `/` from being safe from URI encoding when constructing paths internally

- Sanitize invite argument before calling the invite info endpoint

- Avoid returning in finally in specific places to prevent exception swallowing

- Deprecate the `with_expiration` parameter in `Client.fetch_invite`

- Allow creating NSFW voice/stage channels

- The `Invite` is now returned when using `Invite.delete` or `Client.delete_invite`

- Update PyNaCl minimum version dependency

- `AppCommandType` is now  `ApplicationCommandType` for consistency; the old name is still available as an alias

- `AppCommandOptionType` is now `ApplicationCommandOptionType` for consistency; the old name is still available as an alias

- \[BREAKING] Remove all achievement support as the endpoints have been removed by Discord

- \[BREAKING] Updated CAPTCHA handler implementation
  - The old `CaptchaHandler` class has been removed
  - New interface is via the `captcha_handler` parameter in `Client`, which accepts a `CaptchaRequired` class instance and the `Client` itself as parameters
  - You can also override `Client.handle_captcha` in a subclass

- \[BREAKING] Swap all `exclude_*` parameters in fetch methods to `include_*` parameters for consistency

<a id="vp2p0p0"></a>

## v2.0.0

This is considered the initial stable version. All previous versions were mostly a stepping stone to this one. The changes are too enormous to list here, so please check out the rest of the documentation.
