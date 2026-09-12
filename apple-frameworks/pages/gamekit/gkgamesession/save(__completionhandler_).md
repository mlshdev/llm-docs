> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesession/save(_:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgamesession/save(_:completionhandler:))

# save(\_:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Saves the current game session data.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func save(_ data: Data, completionHandler: @escaping (Data?, (any Error)?) -> Void)
```

## Parameters

- `data`: A `Data` object containing the information to be saved.
- `completionHandler`: A block that is called after the data has been saved.

  - **data**: A `Data` object containing the information that is currently saved on the server.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The maximum amount of data to be saved is 512K. The `lastModifiedDate` and `lastModifiedPlayer` properties are updated upon completion. When a save conflict appears, the data is not saved to the server. The data property in the completion handler contains the information currently saved to the server. It is up to the developer to decide how to handle save conflicts.

## See Also

### Saving and Loading Data

- [loadData(completionHandler:)](loaddata%28completionhandler_%29.md): Deprecated. Retrieves the game data from the current game session.

# saveData:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Saves the current game session data.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) saveData:(NSData *) data completionHandler:(void (^)(NSData *conflictingData, NSError *error)) completionHandler;
```

## Parameters

- `data`: A `Data` object containing the information to be saved.
- `completionHandler`: A block that is called after the data has been saved.

  - **data**: A `Data` object containing the information that is currently saved on the server.
  - **error**: If an error occurred, this parameter holds an error object that explains the error. Otherwise, the value of this parameter is nil. See `GameKit Constants` for a list of error codes specific to GameKit.

<a id="Discussion"></a>

## Discussion

The maximum amount of data to be saved is 512K. The `lastModifiedDate` and `lastModifiedPlayer` properties are updated upon completion. When a save conflict appears, the data is not saved to the server. The data property in the completion handler contains the information currently saved to the server. It is up to the developer to decide how to handle save conflicts.

## See Also

### Saving and Loading Data

- [loadDataWithCompletionHandler:](loaddata%28completionhandler_%29.md): Deprecated. Retrieves the game data from the current game session.
