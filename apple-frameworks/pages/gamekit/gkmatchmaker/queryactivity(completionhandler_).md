> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/queryactivity(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/queryactivity(completionhandler:))

# queryActivity(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Finds the number of players, across player groups, who recently requested a match.

## Declaration

```swift
func queryActivity(completionHandler: (@Sendable (Int, (any Error)?) -> Void)? = nil)
```

```swift
func queryActivity() async throws -> Int
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests for all player groups during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Finding players who request matches

- [queryPlayerGroupActivity(\_:withCompletionHandler:)](queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.
- [queryQueueActivity(\_:withCompletionHandler:)](queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.

# queryActivityWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Finds the number of players, across player groups, who recently requested a match.

## Declaration

```objectivec
- (void) queryActivityWithCompletionHandler:(void (^)(NSInteger activity, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests for all player groups during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Finding players who request matches

- [queryPlayerGroupActivity:withCompletionHandler:](queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.
- [queryQueueActivity:withCompletionHandler:](queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.
