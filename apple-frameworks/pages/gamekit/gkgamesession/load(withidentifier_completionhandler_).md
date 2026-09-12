> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/load(withidentifier:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/load(withidentifier:completionhandler:))

# load(withIdentifier:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Loads a specific game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
class func load(withIdentifier identifier: String, completionHandler: @escaping @Sendable (GKGameSession?, (any Error)?) -> Void)
```

```swift
class func load(withIdentifier identifier: String) async throws -> GKGameSession
```

## Parameters

- `identifier`: A unique string that identifies the game session to be loaded.
- `completionHandler`: A block that is called after the game session has been loaded.

  - **session**: The `GKGameSession` object associated with the specified identifier.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Creating and Loading Game Sessions

- [createSession(inContainer:withTitle:maxConnectedPlayers:completionHandler:)](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [loadSessions(inContainer:completionHandler:)](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [remove(withIdentifier:completionHandler:)](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.

# loadSessionWithIdentifier:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Loads a specific game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
+ (void) loadSessionWithIdentifier:(NSString *) identifier completionHandler:(void (^)(GKGameSession *session, NSError *error)) completionHandler;
```

## Parameters

- `identifier`: A unique string that identifies the game session to be loaded.
- `completionHandler`: A block that is called after the game session has been loaded.

  - **session**: The `GKGameSession` object associated with the specified identifier.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Creating and Loading Game Sessions

- [createSessionInContainer:withTitle:maxConnectedPlayers:completionHandler:](createsession%28incontainer_withtitle_maxconnectedplayers_completionhandler_%29.md): Deprecated. Creates a new game session inside of an iCloud container.
- [loadSessionsInContainer:completionHandler:](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [removeSessionWithIdentifier:completionHandler:](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.
