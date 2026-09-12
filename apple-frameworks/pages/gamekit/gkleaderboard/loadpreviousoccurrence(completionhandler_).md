> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkleaderboard/loadpreviousoccurrence(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkleaderboard/loadpreviousoccurrence(completionhandler:))

# loadPreviousOccurrence(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Loads the previous recurring leaderboard occurrence that the player submits a score to.

## Declaration

```swift
func loadPreviousOccurrence(completionHandler: @escaping @Sendable (GKLeaderboard?, (any Error)?) -> Void)
```

```swift
func loadPreviousOccurrence() async throws -> GKLeaderboard?
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads the leaderboard.

  The block receives the following parameters:

  - **leaderboard**: The previous occurrence of this leaderboard that the player submits a score to, or the most recent occurrence if GameKit can’t find the previous one.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboards

- [loadLeaderboards(IDs:completionHandler:)](loadleaderboards%28ids_completionhandler_%29.md): Loads leaderboards for the specified leaderboard IDs that Game Center uses.

# loadPreviousOccurrenceWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Loads the previous recurring leaderboard occurrence that the player submits a score to.

## Declaration

```objectivec
- (void) loadPreviousOccurrenceWithCompletionHandler:(void (^)(GKLeaderboard *leaderboard, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that GameKit calls when this method loads the leaderboard.

  The block receives the following parameters:

  - **leaderboard**: The previous occurrence of this leaderboard that the player submits a score to, or the most recent occurrence if GameKit can’t find the previous one.
  - **error**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Creating recurring leaderboards](../creating-recurring-leaderboards.md)
- [Encourage progress and competition with leaderboards](../encourage-progress-and-competition-with-leaderboards.md)

## See Also

### Loading Leaderboards

- [loadLeaderboardsWithIDs:completionHandler:](loadleaderboards%28ids_completionhandler_%29.md): Loads leaderboards for the specified leaderboard IDs that Game Center uses.
