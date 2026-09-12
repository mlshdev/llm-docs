> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/sendmessage(withlocalizedformatkey:arguments:data:to:badgeplayers:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/sendmessage(withlocalizedformatkey:arguments:data:to:badgeplayers:completionhandler:))

# sendMessage(withLocalizedFormatKey:arguments:data:to:badgePlayers:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sends a message to players in a game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func sendMessage(withLocalizedFormatKey key: String, arguments: [String], data: Data?, to players: [GKCloudPlayer], badgePlayers: Bool, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func sendMessage(withLocalizedFormatKey key: String, arguments: [String], data: Data?, to players: [GKCloudPlayer], badgePlayers: Bool) async throws
```

## Parameters

- `key`: A localized string with format tokens.
- `arguments`: An array containing entries for the format tokens contained by the `key` parameter.
- `data`: A `Data` object containing a limited amount of developer determined game information.
- `players`: A `GKCloudPlayer` array containing the players to be messaged.
- `badgePlayers`: A `Boolean` indicating whether players are badged when the message is sent.
- `completionHandler`: A block that is called after the message has been sent.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Communicating Between Players

- [badgedPlayers](badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [clearBadge(for:completionHandler:)](clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.

# sendMessageWithLocalizedFormatKey:arguments:data:toPlayers:badgePlayers:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Sends a message to players in a game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) sendMessageWithLocalizedFormatKey:(NSString *) key arguments:(NSArray<NSString *> *) arguments data:(NSData *) data toPlayers:(NSArray<GKCloudPlayer *> *) players badgePlayers:(BOOL) badgePlayers completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `key`: A localized string with format tokens.
- `arguments`: An array containing entries for the format tokens contained by the `key` parameter.
- `data`: A `Data` object containing a limited amount of developer determined game information.
- `players`: A `GKCloudPlayer` array containing the players to be messaged.
- `badgePlayers`: A `Boolean` indicating whether players are badged when the message is sent.
- `completionHandler`: A block that is called after the message has been sent.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Communicating Between Players

- [badgedPlayers](badgedplayers.md): Deprecated. An array containing all of the currently badged players.
- [clearBadgeForPlayers:completionHandler:](clearbadge%28for_completionhandler_%29.md): Deprecated. Clears the badge from the designated players.
