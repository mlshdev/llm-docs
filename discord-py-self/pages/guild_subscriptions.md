> Release-pinned source for discord.py-self v2.1.0: [docs/guild_subscriptions.rst](https://github.com/dolfies/discord.py-self/blob/6de18b4cb40dd42625a535f52d9715c71399ffb3/docs/guild_subscriptions.rst)

- **Orphan:**

<a id="guild-subscriptions"></a>

# Guild Subscriptions

Guild subscriptions are a way for a client to limit the events it receives from a guild.
While this is useful for a traditional client, it may not be of much use for a bot, so the default library behavior is to subscribe to as much as possible at startup.

The client is automatically subscribed to all guilds with less than 75,000 members on connect. For guilds the client is not subscribed to, you will not receive
non-stateful events (e.g. `discord.on_message`, `discord.on_message_edit`, `discord.on_message_delete`, etc.).
Additionally, voice states and channel unreads are kept up to date passively, as the client does not receive events for these updates in real-time.

For every guild, clients can opt to subscribe to additional features, such as typing events (i.e. `discord.on_typing`), a full thread list cache, and member updates (i.e. `discord.on_member_join`, `discord.on_member_update`, and `discord.on_member_remove`).
Additionally, clients can subscribe to specific members and threads within a guild. When subscribed to specific members (or thread member lists), the client will receive member and presence updates for those members (i.e. `discord.on_member_update` and `discord.on_presence_update`).

Additionally, for guilds with less than 75,000 members, the client is automatically subscribed to all friends, implicit relationships, and members the user has open DMs with at startup.

Irrespective of subscribed members, events for actions the client performs (e.g. changing a user's nickname, kicking a user, banning a user, etc.) will always be received.
While events like `discord.on_raw_member_remove` are always dispatched when received, events like `discord.on_member_update` are only dispatched if the member is present in the cache.

Guild subscriptions are also used to subscribe to the member list of a specific channel in a guild, but this ability is not yet exposed in the library.

### Drawbacks

For library users, the biggest drawback to guild subscriptions is that there is no way to reliably get the entire member list of a guild.

An additional drawback is that there is no way to subscribe to presence updates for all members in a guild. At most, you can subscribe to presence updates for specific members and thread member lists.
Note that clients always receive presence updates for friends, implicit relationships, and users they have an open DM (and mutual server) with.

### Implementation

If you would like to override the default behavior and manage guild subscriptions yourself, you can set the `guild_subscriptions` parameter to `False` when creating a `Client`.
If you do this, you cannot use the `chunk_guilds_at_startup` parameter, as it is dependent on guild subscriptions.

To subscribe to a guild (and manage features), see the `Guild.subscribe` method. To manage subscriptions to a guild's members or threads, see the `Guild.subscribe_to` and `Guild.unsubscribe_from` methods.
Subscription requests are debounced before being sent to the Gateway, so changes may take up to half a second to take effect (this is an implementation detail that may be changed at any time).
