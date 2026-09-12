> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/loadsessions(incontainer:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/loadsessions(incontainer:completionhandler:))

# loadSessions(inContainer:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves all of the game sessions associated with a container.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
class func loadSessions(inContainer containerName: String?, completionHandler: @escaping @Sendable ([GKGameSession]?, (any Error)?) -> Void)
```

```swift
class func loadSessions(inContainer containerName: String?) async throws -> [GKGameSession]
```

## Parameters

- `containerName`: A unique string that identifies the container to be accessed.
- `completionHandler`: A block that is called after all the game sessions have been loaded.

  - **sessions**: An array of `GKGameSession` objects that contains all of the game sessions associated with the specified container.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Creating and Loading Game Sessions

- [createSession(inContainer:withTitle:maxConnectedPlayers:completionHandler:)](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [load(withIdentifier:completionHandler:)](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [remove(withIdentifier:completionHandler:)](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.

# loadSessionsInContainer:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves all of the game sessions associated with a container.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
+ (void) loadSessionsInContainer:(NSString *) containerName completionHandler:(void (^)(NSArray<GKGameSession *> *sessions, NSError *error)) completionHandler;
```

## Parameters

- `containerName`: A unique string that identifies the container to be accessed.
- `completionHandler`: A block that is called after all the game sessions have been loaded.

  - **sessions**: An array of `GKGameSession` objects that contains all of the game sessions associated with the specified container.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Creating and Loading Game Sessions

- [createSessionInContainer:withTitle:maxConnectedPlayers:completionHandler:](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [loadSessionWithIdentifier:completionHandler:](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [removeSessionWithIdentifier:completionHandler:](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.
