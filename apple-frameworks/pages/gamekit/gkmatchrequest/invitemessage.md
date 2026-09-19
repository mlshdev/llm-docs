> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkmatchrequest/invitemessage

# inviteMessage (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The message sent to other players when the local player invites them to join a match.

## Declaration

```swift
var inviteMessage: String? { get set }
```

## See Also

### Inviting players

- [recipients](recipients.md): The players to invite to the match.
- [recipientResponseHandler](recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.

# inviteMessage (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The message sent to other players when the local player invites them to join a match.

## Declaration

```objectivec
@property (copy, nullable) NSString * inviteMessage;
```

## See Also

### Inviting players

- [recipients](recipients.md): The players to invite to the match.
- [recipientResponseHandler](recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](../gkinviterecipientresponse.md): A player’s response to an invitation to join a match.
