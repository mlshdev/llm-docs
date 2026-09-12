> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/lastmodifiedplayer](https://developer.apple.com/documentation/gamekit/gkgamesession/lastmodifiedplayer)

# lastModifiedPlayer (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The last player to modify the game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
var lastModifiedPlayer: GKCloudPlayer { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the [GKCloudPlayer](../gkcloudplayer.md) object representing the last player to modify the game session.

## See Also

### Accessing Information About a Game Session

- [identifier](identifier.md): Deprecated. A unique identifier for a game session.
- [lastModifiedDate](lastmodifieddate.md): Deprecated. The date that the game session was last modified.
- [maxNumberOfConnectedPlayers](maxnumberofconnectedplayers.md): Deprecated. The maximum number of players allowed to connect to the game session at the same time.
- [owner](owner.md): Deprecated. A player object that represents the owner of the game session.
- [players](players.md): Deprecated. An array of player objects associated with the game session.
- [title](title.md): Deprecated. The title of the game session.

# lastModifiedPlayer (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

The last player to modify the game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@property (nonatomic, readonly) GKCloudPlayer * lastModifiedPlayer;
```

<a id="Discussion"></a>

## Discussion

This property contains the [GKCloudPlayer](../gkcloudplayer.md) object representing the last player to modify the game session.

## See Also

### Accessing Information About a Game Session

- [identifier](identifier.md): Deprecated. A unique identifier for a game session.
- [lastModifiedDate](lastmodifieddate.md): Deprecated. The date that the game session was last modified.
- [maxNumberOfConnectedPlayers](maxnumberofconnectedplayers.md): Deprecated. The maximum number of players allowed to connect to the game session at the same time.
- [owner](owner.md): Deprecated. A player object that represents the owner of the game session.
- [players](players.md): Deprecated. An array of player objects associated with the game session.
- [title](title.md): Deprecated. The title of the game session.
