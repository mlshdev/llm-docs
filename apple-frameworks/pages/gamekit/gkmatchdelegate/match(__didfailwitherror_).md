> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:didfailwitherror:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:didfailwitherror:))

# match(\_:didFailWithError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles the local player’s connection errors to a match.

## Declaration

```swift
optional func match(_ match: GKMatch, didFailWithError error: (any Error)?)
```

## Parameters

- `match`: The match in which the error occurs.
- `error`: The error that occurs.

<a id="Discussion"></a>

## Discussion

GameKit calls this method when the local player can’t connect to any other players in the match.

# match:didFailWithError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles the local player’s connection errors to a match.

## Declaration

```objectivec
- (void) match:(GKMatch *) match didFailWithError:(NSError *) error;
```

## Parameters

- `match`: The match in which the error occurs.
- `error`: The error that occurs.

<a id="Discussion"></a>

## Discussion

GameKit calls this method when the local player can’t connect to any other players in the match.
