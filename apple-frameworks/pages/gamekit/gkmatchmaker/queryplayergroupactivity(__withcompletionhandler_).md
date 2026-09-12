> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/queryplayergroupactivity(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/queryplayergroupactivity(_:withcompletionhandler:))

# queryPlayerGroupActivity(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Finds the number of players in a player group who recently requested a match.

## Declaration

```swift
func queryPlayerGroupActivity(_ playerGroup: Int, withCompletionHandler completionHandler: (@Sendable (Int, (any Error)?) -> Void)? = nil)
```

```swift
func queryPlayerGroupActivity(_ playerGroup: Int) async throws -> Int
```

## Parameters

- `playerGroup`: A number that uniquely identifies a subset of players in your game.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests for the player group during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

Use this method to update your interface. For example, show players the relative activity in each player group. If one group is less active than others, you might display a warning so players are aware that finding a match in that group may take longer.

## See Also

### Finding players who request matches

- [queryActivity(completionHandler:)](queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryQueueActivity(\_:withCompletionHandler:)](queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.

# queryPlayerGroupActivity:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Finds the number of players in a player group who recently requested a match.

## Declaration

```objectivec
- (void) queryPlayerGroupActivity:(NSUInteger) playerGroup withCompletionHandler:(void (^)(NSInteger activity, NSError *error)) completionHandler;
```

## Parameters

- `playerGroup`: A number that uniquely identifies a subset of players in your game.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`activity`**: The number of match requests for the player group during the previous 60 seconds.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

<a id="Discussion"></a>

## Discussion

Use this method to update your interface. For example, show players the relative activity in each player group. If one group is less active than others, you might display a warning so players are aware that finding a match in that group may take longer.

## See Also

### Finding players who request matches

- [queryActivityWithCompletionHandler:](queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryQueueActivity:withCompletionHandler:](queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.
