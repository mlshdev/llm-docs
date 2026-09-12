> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinviterecipientresponse](https://developer.apple.com/documentation/gamekit/gkinviterecipientresponse)

# GKInviteRecipientResponse (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A player’s response to an invitation to join a match.

## Declaration

```swift
enum GKInviteRecipientResponse
```

## Topics

### Responses

- [GKInviteRecipientResponse.accepted](gkinviterecipientresponse/accepted.md): A response when the player accepts the invitation.
- [GKInviteRecipientResponse.declined](gkinviterecipientresponse/declined.md): A response when the player rejects the invitation.
- [GKInviteRecipientResponse.failed](gkinviterecipientresponse/failed.md): A response when the system fails to deliver the invitation to the player.
- [GKInviteRecipientResponse.incompatible](gkinviterecipientresponse/incompatible.md): A response when the player isn’t running a compatible version of the game.
- [GKInviteRecipientResponse.unableToConnect](gkinviterecipientresponse/unabletoconnect.md): A response when the system can’t contact the player.
- [GKInviteRecipientResponse.noAnswer](gkinviterecipientresponse/noanswer.md): A response when the invitation times out because the player doesn’t answer it.

### Deprecated Properties

- [inviteeResponseAccepted](gkinviterecipientresponse/inviteeresponseaccepted.md): Deprecated. The player accepted the invitation.
- [inviteeResponseDeclined](gkinviterecipientresponse/inviteeresponsedeclined.md): Deprecated. The player rejected the invitation.
- [inviteeResponseFailed](gkinviterecipientresponse/inviteeresponsefailed.md): Deprecated. The invitation was unable to be delivered.
- [inviteeResponseIncompatible](gkinviterecipientresponse/inviteeresponseincompatible.md): Deprecated. The invitee isn’t running a compatible version of your game.
- [inviteeResponseNoAnswer](gkinviterecipientresponse/inviteeresponsenoanswer.md): Deprecated. The invitation timed out without an answer.
- [inviteeResponseUnableToConnect](gkinviterecipientresponse/inviteeresponseunabletoconnect.md): Deprecated. The invitee couldn’t be contacted.

### Initializers

- [init(rawValue:)](gkinviterecipientresponse/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inviting players

- [inviteMessage](gkmatchrequest/invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](gkmatchrequest/recipients.md): The players to invite to the match.
- [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.

# GKInviteRecipientResponse (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A player’s response to an invitation to join a match.

## Declaration

```objectivec
enum GKInviteRecipientResponse : NSInteger;
```

## Topics

### Responses

- [GKInviteRecipientResponseAccepted](gkinviterecipientresponse/accepted.md): A response when the player accepts the invitation.
- [GKInviteRecipientResponseDeclined](gkinviterecipientresponse/declined.md): A response when the player rejects the invitation.
- [GKInviteRecipientResponseFailed](gkinviterecipientresponse/failed.md): A response when the system fails to deliver the invitation to the player.
- [GKInviteRecipientResponseIncompatible](gkinviterecipientresponse/incompatible.md): A response when the player isn’t running a compatible version of the game.
- [GKInviteRecipientResponseUnableToConnect](gkinviterecipientresponse/unabletoconnect.md): A response when the system can’t contact the player.
- [GKInviteRecipientResponseNoAnswer](gkinviterecipientresponse/noanswer.md): A response when the invitation times out because the player doesn’t answer it.

### Deprecated Properties

- [GKInviteeResponseAccepted](gkinviterecipientresponse/inviteeresponseaccepted.md): Deprecated. The player accepted the invitation.
- [GKInviteeResponseDeclined](gkinviterecipientresponse/inviteeresponsedeclined.md): Deprecated. The player rejected the invitation.
- [GKInviteeResponseFailed](gkinviterecipientresponse/inviteeresponsefailed.md): Deprecated. The invitation was unable to be delivered.
- [GKInviteeResponseIncompatible](gkinviterecipientresponse/inviteeresponseincompatible.md): Deprecated. The invitee isn’t running a compatible version of your game.
- [GKInviteeResponseNoAnswer](gkinviterecipientresponse/inviteeresponsenoanswer.md): Deprecated. The invitation timed out without an answer.
- [GKInviteeResponseUnableToConnect](gkinviterecipientresponse/inviteeresponseunabletoconnect.md): Deprecated. The invitee couldn’t be contacted.

## See Also

### Inviting players

- [inviteMessage](gkmatchrequest/invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](gkmatchrequest/recipients.md): The players to invite to the match.
- [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
