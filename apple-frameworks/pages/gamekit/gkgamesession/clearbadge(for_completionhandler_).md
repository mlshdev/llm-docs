> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/clearbadge(for:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/clearbadge(for:completionhandler:))

# clearBadge(for:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Clears the badge from the designated players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func clearBadge(for players: [GKCloudPlayer], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func clearBadge(for players: [GKCloudPlayer]) async throws
```

## Parameters

- `players`: An array of GKCloudPlayers identifying the players that are to have their badge removed.
- `completionHandler`: A block that is called after the badges have been removed from the players.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Communicating Between Players

- [badgedPlayers](badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:)](sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.

# clearBadgeForPlayers:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Clears the badge from the designated players.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) clearBadgeForPlayers:(NSArray<GKCloudPlayer *> *) players completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `players`: An array of GKCloudPlayers identifying the players that are to have their badge removed.
- `completionHandler`: A block that is called after the badges have been removed from the players.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Communicating Between Players

- [badgedPlayers](badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler:](sendmessage%28withlocalizedformatkey_arguments_data_to_badgeplayers_completionhandler_%29.md): Deprecated. Sends a message to players in a game session.
