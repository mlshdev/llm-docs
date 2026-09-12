> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/isstopped](https://developer.apple.com/documentation/foundation/nsmetadataquery/isstopped)

# isStopped (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the query has stopped.

## Declaration

```swift
var isStopped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the receiver has stopped the query; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running queries

- [isStarted](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [start()](start%28%29.md): Attempts to start the query.
- [isGathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [stop()](stop%28%29.md): Stops the receiver’s current query from gathering any further results.

# stopped (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the query has stopped.

## Declaration

```objectivec
@property (readonly, getter=isStopped) BOOL stopped;
```

<a id="Discussion"></a>

## Discussion

This property contains [true](https://developer.apple.com/documentation/swift/true) when the receiver has stopped the query; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running queries

- [started](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [startQuery](start%28%29.md): Attempts to start the query.
- [gathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [stopQuery](stop%28%29.md): Stops the receiver’s current query from gathering any further results.
