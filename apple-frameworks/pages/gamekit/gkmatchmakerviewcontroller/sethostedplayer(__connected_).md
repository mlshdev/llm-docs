> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayer(_:connected:)](https://developer.apple.com/documentation/gamekit/gkmatchmakerviewcontroller/sethostedplayer(_:connected:))

# setHostedPlayer(\_:connected:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Updates a player’s status on the view to show that the player has connected or disconnected from your server.

> Use the [setHostedPlayer(\_:didConnect:)](sethostedplayer%28__didconnect_%29.md) method instead.

## Declaration

```swift
func setHostedPlayer(_ playerID: String, connected: Bool)
```

## Parameters

- `playerID`: The identifier string for a player that connected to the external server.
- `connected`: A Boolean value that states whether the player is connected to the hosted match.

<a id="Discussion"></a>

## Discussion

When setting up a hosted match, each device needs to create a matchmaker view controller and display it to the player. Then, when a new player connects to your server, your server needs to notify all participating devices already connected to your server. Each participating device then calls this method to update that player’s status in the matchmaking interface. Similarly, if a player disconnects from the server, your server informs each device so the devices can update their user interface.

## See Also

### Deprecated

- [setHostedPlayerReady(\_:)](sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.
- [defaultInvitationMessage](defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.

# setHostedPlayer:connected: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Updates a player’s status on the view to show that the player has connected or disconnected from your server.

> Use the [setHostedPlayer:didConnect:](sethostedplayer%28__didconnect_%29.md) method instead.

## Declaration

```objectivec
- (void) setHostedPlayer:(NSString *) playerID connected:(BOOL) connected;
```

## Parameters

- `playerID`: The identifier string for a player that connected to the external server.
- `connected`: A Boolean value that states whether the player is connected to the hosted match.

<a id="Discussion"></a>

## Discussion

When setting up a hosted match, each device needs to create a matchmaker view controller and display it to the player. Then, when a new player connects to your server, your server needs to notify all participating devices already connected to your server. Each participating device then calls this method to update that player’s status in the matchmaking interface. Similarly, if a player disconnects from the server, your server informs each device so the devices can update their user interface.

## See Also

### Deprecated

- [setHostedPlayerReady:](sethostedplayerready%28__%29.md): Deprecated. Informs the controller that a player has joined a hosted match.
- [defaultInvitationMessage](defaultinvitationmessage.md): Deprecated. The default invitation message sent to a player.
