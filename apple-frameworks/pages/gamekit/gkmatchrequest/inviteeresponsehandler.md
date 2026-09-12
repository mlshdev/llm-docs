> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/inviteeresponsehandler](https://developer.apple.com/documentation/gamekit/gkmatchrequest/inviteeresponsehandler)

# inviteeResponseHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Handles when a player responds to an invitation.

> Use the [recipientResponseHandler](recipientresponsehandler.md) property instead.

## Declaration

```swift
var inviteeResponseHandler: ((String, GKInviteeResponse) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- ***playerID***: The identifier for the player.
- ***GKInviteeResponse***: The nature of the response. See [GKInviteeResponse](../gkinviteeresponse.md).

An invitee response handler is called whenever you programmatically invite specific players to join a match. It is called once for each player invited to the match. Typically, your game uses the responses to update the custom user interface. For example, you want the player to be able to perform any of the following tasks:

- Start the match.
- Invite an additional set of specific players.
- Use matchmaking to fill the remaining match slots.

## See Also

### Deprecated methods and properties

- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.
- [restrictToAutomatch](restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

# inviteeResponseHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Handles when a player responds to an invitation.

> Use the [recipientResponseHandler](recipientresponsehandler.md) property instead.

## Declaration

```objectivec
@property (copy, nullable) void (^)(NSString *, enum GKInviteRecipientResponse) inviteeResponseHandler;
```

<a id="Discussion"></a>

## Discussion

The block takes the following parameters:

- ***playerID***: The identifier for the player.
- ***GKInviteeResponse***: The nature of the response. See [GKInviteeResponse](../gkinviteeresponse.md).

An invitee response handler is called whenever you programmatically invite specific players to join a match. It is called once for each player invited to the match. Typically, your game uses the responses to update the custom user interface. For example, you want the player to be able to perform any of the following tasks:

- Start the match.
- Invite an additional set of specific players.
- Use matchmaking to fill the remaining match slots.

## See Also

### Deprecated methods and properties

- [GKInviteeResponse](../gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.
- [restrictToAutomatch](restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.
