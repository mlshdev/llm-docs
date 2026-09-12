> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/remove(withidentifier:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/remove(withidentifier:completionhandler:))

# remove(withIdentifier:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Removes the specified game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
class func remove(withIdentifier identifier: String, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func remove(withIdentifier identifier: String) async throws
```

## Parameters

- `identifier`: The unique string that identifies the game session to be removed.
- `completionHandler`: A block that is called after a game session has been removed from a container.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

After the user has finished a game or decides to abandon a game, you must use this function to remove the game session from iCloud. Game sessions are not removed from iCloud automatically.

## See Also

### Creating and Loading Game Sessions

- [createSession(inContainer:withTitle:maxConnectedPlayers:completionHandler:)](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [load(withIdentifier:completionHandler:)](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessions(inContainer:completionHandler:)](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.

# removeSessionWithIdentifier:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Removes the specified game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
+ (void) removeSessionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The unique string that identifies the game session to be removed.
- `completionHandler`: A block that is called after a game session has been removed from a container.

  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

After the user has finished a game or decides to abandon a game, you must use this function to remove the game session from iCloud. Game sessions are not removed from iCloud automatically.

## See Also

### Creating and Loading Game Sessions

- [createSessionInContainer:withTitle:maxConnectedPlayers:completionHandler:](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [loadSessionWithIdentifier:completionHandler:](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessionsInContainer:completionHandler:](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
