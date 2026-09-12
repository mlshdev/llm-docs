> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/createsession(incontainer:withtitle:maxconnectedplayers:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/createsession(incontainer:withtitle:maxconnectedplayers:completionhandler:))

# createSession(inContainer:withTitle:maxConnectedPlayers:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a new game session inside of an iCloud container.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
class func createSession(inContainer containerName: String?, withTitle title: String, maxConnectedPlayers maxPlayers: Int, completionHandler: @escaping @Sendable (GKGameSession?, (any Error)?) -> Void)
```

```swift
class func createSession(inContainer containerName: String?, withTitle title: String, maxConnectedPlayers maxPlayers: Int) async throws -> GKGameSession
```

## Parameters

- `containerName`: A `String` value representing the iCloud container for the game session.
- `title`: A `String` value representing the title of the game session.
- `maxPlayers`: An `Integer` value indicating the maximum number of players allowed in the game session.
- `completionHandler`: A block that is called after a new game session has been created.

  - **gameSession**: A `GKGameSession` object containing information about the newly created game session.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The container name must be a valid iCloud container associated with your app. After a user has finished a game and is done with a game session, remove the created game session from iCloud using [remove(withIdentifier:completionHandler:)](remove%28withidentifier_completionhandler_%29.md). See [iCloud Design Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/Introduction.html#//apple_ref/doc/uid/TP40012094) for more information on incorporating iCloud in your app.

## See Also

### Creating and Loading Game Sessions

- [load(withIdentifier:completionHandler:)](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessions(inContainer:completionHandler:)](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [remove(withIdentifier:completionHandler:)](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.

# createSessionInContainer:withTitle:maxConnectedPlayers:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a new game session inside of an iCloud container.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
+ (void) createSessionInContainer:(NSString *) containerName withTitle:(NSString *) title maxConnectedPlayers:(NSInteger) maxPlayers completionHandler:(void (^)(GKGameSession *session, NSError *error)) completionHandler;
```

## Parameters

- `containerName`: A `String` value representing the iCloud container for the game session.
- `title`: A `String` value representing the title of the game session.
- `maxPlayers`: An `Integer` value indicating the maximum number of players allowed in the game session.
- `completionHandler`: A block that is called after a new game session has been created.

  - **gameSession**: A `GKGameSession` object containing information about the newly created game session.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The container name must be a valid iCloud container associated with your app. After a user has finished a game and is done with a game session, remove the created game session from iCloud using [removeSessionWithIdentifier:completionHandler:](remove%28withidentifier_completionhandler_%29.md). See [iCloud Design Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/iCloudDesignGuide/Chapters/Introduction.html#//apple_ref/doc/uid/TP40012094) for more information on incorporating iCloud in your app.

## See Also

### Creating and Loading Game Sessions

- [loadSessionWithIdentifier:completionHandler:](load%28withidentifier_completionhandler_%29.md): Deprecated. Loads a specific game session.
- [loadSessionsInContainer:completionHandler:](loadsessions%28incontainer_completionhandler_%29.md): Deprecated. Retrieves all of the game sessions associated with a container.
- [removeSessionWithIdentifier:completionHandler:](remove%28withidentifier_completionhandler_%29.md): Deprecated. Removes the specified game session.
