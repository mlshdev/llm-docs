> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest/recipientresponsehandler](https://developer.apple.com/documentation/gamekit/gkmatchrequest/recipientresponsehandler)

# recipientResponseHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A method that handles when a player responds to an invitation to join a match.

## Declaration

```swift
var recipientResponseHandler: ((GKPlayer, GKInviteRecipientResponse) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The block receives the following parameters:

- **`player`**: The player who receives the invitation.
- **`GKInviteeRecipientResponse`**: The player’s response to the invitation.

GameKit calls this handler once for each player who receives an invitation to join the match. You can use this handler to update your interface to show the individual player responses.

## See Also

### Inviting players

- [inviteMessage](invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](recipients.md): The players to invite to the match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.

# recipientResponseHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A method that handles when a player responds to an invitation to join a match.

## Declaration

```objectivec
@property (copy, nullable) void (^recipientResponseHandler)(GKPlayer *player, GKInviteRecipientResponse response);
```

<a id="Discussion"></a>

## Discussion

The block receives the following parameters:

- **`player`**: The player who receives the invitation.
- **`GKInviteeRecipientResponse`**: The player’s response to the invitation.

GameKit calls this handler once for each player who receives an invitation to join the match. You can use this handler to update your interface to show the individual player responses.

## See Also

### Inviting players

- [inviteMessage](invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](recipients.md): The players to invite to the match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.
