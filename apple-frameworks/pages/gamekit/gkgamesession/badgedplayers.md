> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/badgedplayers](https://developer.apple.com/documentation/gamekit/gkgamesession/badgedplayers)

# badgedPlayers (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An array containing all of the currently badged players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
var badgedPlayers: [GKCloudPlayer] { get }
```

## See Also

### Communicating Between Players

- [clearBadge(for:completionHandler:)](clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.
- [sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:)](sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.

# badgedPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An array containing all of the currently badged players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<GKCloudPlayer *> * badgedPlayers;
```

## See Also

### Communicating Between Players

- [clearBadgeForPlayers:completionHandler:](clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.
- [sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler:](sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.
