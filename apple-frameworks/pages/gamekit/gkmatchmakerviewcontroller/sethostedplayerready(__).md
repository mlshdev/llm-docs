> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayerready(_:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayerready(_:))

# setHostedPlayerReady(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 5.0) · iPadOS 4.1+ (deprecated in 5.0) · Mac Catalyst 4.1+ (deprecated in 5.0) · visionOS 1.0+ (deprecated in 1.0)

Informs the controller that a player has joined a hosted match.

> Use the [setHostedPlayer(\_:connected:)](sethostedplayer%28__connected_%29.md) method instead.

## Declaration

```swift
func setHostedPlayerReady(_ playerID: String)
```

## Parameters

- `playerID`: The identifier string for a player that connected to the external server.

<a id="Discussion"></a>

## Discussion

In a hosted match, when a new player connects to the server, your server needs to inform all participating devices connected to the match. Each participating device must separately call this method to update its matchmaking user interface.

## See Also

### Deprecated

- [setHostedPlayer(\_:connected:)](sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [defaultInvitationMessage](defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.

# setHostedPlayerReady: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 5.0) · iPadOS 4.1+ (deprecated in 5.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Informs the controller that a player has joined a hosted match.

> Use the [setHostedPlayer:connected:](sethostedplayer%28__connected_%29.md) method instead.

## Declaration

```objectivec
- (void) setHostedPlayerReady:(NSString *) playerID;
```

## Parameters

- `playerID`: The identifier string for a player that connected to the external server.

<a id="Discussion"></a>

## Discussion

In a hosted match, when a new player connects to the server, your server needs to inform all participating devices connected to the match. Each participating device must separately call this method to update its matchmaking user interface.

## See Also

### Deprecated

- [setHostedPlayer:connected:](sethostedplayer%28__connected_%29.md): Deprecated. Updates a player’s status on the view to show that the player has connected or disconnected from your server.
- [defaultInvitationMessage](defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.
