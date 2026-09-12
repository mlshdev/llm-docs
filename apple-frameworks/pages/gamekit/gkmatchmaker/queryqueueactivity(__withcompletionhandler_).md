> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/queryqueueactivity(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/queryqueueactivity(_:withcompletionhandler:))

# queryQueueActivity(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

Finds the number of players in a specific queue who recently requested a match.

## Declaration

```swift
func queryQueueActivity(_ queueName: String, withCompletionHandler completionHandler: (@Sendable (Int, (any Error)?) -> Void)? = nil)
```

```swift
func queryQueueActivity(_ queueName: String) async throws -> Int
```

## Parameters

- `queueName`: The name of the queue that Game Center places the match requests in, which it uses for finding players when using matchmaking rules. This uniform type identifier (UTI) contains  only alphanumeric characters (A-Z, a-z, 0-9), hyphens (-), or periods (.).

  The string should be in reverse-DNS format and queue names are case sensitive.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests in the queue during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

To specify a queue name when requesting a match, set the `GKMatchRequest` [queueName](../gkmatchrequest/queuename.md) property. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Finding players who request matches

- [queryActivity(completionHandler:)](queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryPlayerGroupActivity(\_:withCompletionHandler:)](queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.

# queryQueueActivity:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

Finds the number of players in a specific queue who recently requested a match.

## Declaration

```objectivec
- (void) queryQueueActivity:(NSString *) queueName withCompletionHandler:(void (^)(NSInteger activity, NSError *error)) completionHandler;
```

## Parameters

- `queueName`: The name of the queue that Game Center places the match requests in, which it uses for finding players when using matchmaking rules. This uniform type identifier (UTI) contains  only alphanumeric characters (A-Z, a-z, 0-9), hyphens (-), or periods (.).

  The string should be in reverse-DNS format and queue names are case sensitive.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests in the queue during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

To specify a queue name when requesting a match, set the `GKMatchRequest` [queueName](../gkmatchrequest/queuename.md) property. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Finding players who request matches

- [queryActivityWithCompletionHandler:](queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryPlayerGroupActivity:withCompletionHandler:](queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.
