> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/isstarted](https://developer.apple.com/documentation/foundation/nsmetadataquery/isstarted)

# isStarted (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the query has started. (read-only)

## Declaration

```swift
var isStarted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the receiver has executed the `startQuery` method; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running queries

- [start()](start%28%29.md): Attempts to start the query.
- [isGathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [isStopped](isstopped.md): A Boolean value that indicates whether the query has stopped.
- [stop()](stop%28%29.md): Stops the receiver’s current query from gathering any further results.

# started (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the query has started. (read-only)

## Declaration

```objectivec
@property (readonly, getter=isStarted) BOOL started;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the receiver has executed the `startQuery` method; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running queries

- [startQuery](start%28%29.md): Attempts to start the query.
- [gathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [stopped](isstopped.md): A Boolean value that indicates whether the query has stopped.
- [stopQuery](stop%28%29.md): Stops the receiver’s current query from gathering any further results.
