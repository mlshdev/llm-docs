> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/countercollection/subscript(_:)](https://developer.apple.com/documentation/tabletopkit/countercollection/subscript(_:))

# subscript(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Subscript  
**Availability:** visionOS 26.0+

Queries or modifies the value of the score counter with given identifier.

## Declaration

```swift
subscript(id: ScoreCounter.ID) -> Int64? { get set }
```

## Parameters

- `id`: The identifier of the score counter to be returned.
