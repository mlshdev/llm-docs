> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/loadmatches(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/loadmatches(completionhandler:))

# loadMatches(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the turn-based matches from Game Center that the local player participates in.

## Declaration

```swift
class func loadMatches(completionHandler: (@Sendable ([GKTurnBasedMatch]?, (any Error)?) -> Void)? = nil)
```

```swift
class func loadMatches() async throws -> [GKTurnBasedMatch]
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***matches***: The local player’s matches, or `nil` if there are none. If an error occurs, this parameter may be non-`nil`, containing a subset of the matches that GameKit loads before the error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The [matchData](matchdata.md) properties of the match objects are `nil` until you fetch the data from Game Center using the [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Loading Existing Matches

- [load(withID:withCompletionHandler:)](load%28withid_withcompletionhandler_%29.md): Loads a specific match with the specified identifier.

# loadMatchesWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches the turn-based matches from Game Center that the local player participates in.

## Declaration

```objectivec
+ (void) loadMatchesWithCompletionHandler:(void (^)(NSArray<GKTurnBasedMatch *> *matches, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***matches***: The local player’s matches, or `nil` if there are none. If an error occurs, this parameter may be non-`nil`, containing a subset of the matches that GameKit loads before the error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

The [matchData](matchdata.md) properties of the match objects are `nil` until you fetch the data from Game Center using the [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Loading Existing Matches

- [loadMatchWithID:withCompletionHandler:](load%28withid_withcompletionhandler_%29.md): Loads a specific match with the specified identifier.
