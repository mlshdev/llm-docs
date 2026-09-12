> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/loaddata(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/loaddata(completionhandler:))

# loadData(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the game data from the current game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func loadData(completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func loadData() async throws -> Data
```

## Parameters

- `completionHandler`: A block that is called after the game session data has been loaded.

  - **data**: A `Data` object containing the app’s saved data.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Saving and Loading Data

- [save(\_:completionHandler:)](save%28__completionhandler_%29.md): Deprecated. Saves the current game session data.

# loadDataWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the game data from the current game session.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) loadDataWithCompletionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called after the game session data has been loaded.

  - **data**: A `Data` object containing the app’s saved data.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

## See Also

### Saving and Loading Data

- [saveData:completionHandler:](save%28__completionhandler_%29.md): Deprecated. Saves the current game session data.
