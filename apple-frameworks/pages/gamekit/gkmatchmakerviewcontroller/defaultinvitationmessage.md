> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/defaultinvitationmessage](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/defaultinvitationmessage)

# defaultInvitationMessage (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The default invitation message sent to a player.

> Use the [inviteMessage](../gkmatchrequest/invitemessage.md) property instead.

## Declaration

```swift
var defaultInvitationMessage: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Your game sets this property to change the default invitation text displayed when the local player creates a new invitation. The local player may edit the text before sending the invitation.

## See Also

### Deprecated

- [setHostedPlayer(\_:connected:)](sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [setHostedPlayerReady(\_:)](sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.

# defaultInvitationMessage (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

The default invitation message sent to a player.

> Use the [inviteMessage](../gkmatchrequest/invitemessage.md) property instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * defaultInvitationMessage;
```

<a id="Discussion"></a>

## Discussion

Your game sets this property to change the default invitation text displayed when the local player creates a new invitation. The local player may edit the text before sending the invitation.

## See Also

### Deprecated

- [setHostedPlayer:connected:](sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [setHostedPlayerReady:](sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.
