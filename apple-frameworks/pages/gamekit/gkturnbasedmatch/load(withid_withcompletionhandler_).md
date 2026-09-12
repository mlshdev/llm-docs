> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/load(withid:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/load(withid:withcompletionhandler:))

# load(withID:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads a specific match with the specified identifier.

## Declaration

```swift
class func load(withID matchID: String, withCompletionHandler completionHandler: (@Sendable (GKTurnBasedMatch?, (any Error)?) -> Void)? = nil)
```

```swift
class func load(withID matchID: String) async throws -> GKTurnBasedMatch
```

## Parameters

- `matchID`: The identifier for the turn-based match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: The local player’s match with the `matchID` identifier, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="discussion"></a>

## Discussion

The [matchData](matchdata.md) property of the match object is `nil` until you fetch the data from Game Center using the [loadMatchData(completionHandler:)](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Loading Existing Matches

- [loadMatches(completionHandler:)](loadmatches%28completionhandler_%29.md): Fetches the turn-based matches from Game Center that the local player participates in.

# loadMatchWithID:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Loads a specific match with the specified identifier.

## Declaration

```objectivec
+ (void) loadMatchWithID:(NSString *) matchID withCompletionHandler:(void (^)(GKTurnBasedMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `matchID`: The identifier for the turn-based match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: The local player’s match with the `matchID` identifier, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

<a id="discussion"></a>

## Discussion

The [matchData](matchdata.md) property of the match object is `nil` until you fetch the data from Game Center using the [loadMatchDataWithCompletionHandler:](loadmatchdata%28completionhandler_%29.md) method.

## See Also

### Loading Existing Matches

- [loadMatchesWithCompletionHandler:](loadmatches%28completionhandler_%29.md): Fetches the turn-based matches from Game Center that the local player participates in.
