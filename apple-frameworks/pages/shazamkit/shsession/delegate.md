> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/delegate](https://developer.apple.com/documentation/shazamkit/shsession/delegate)

# delegate (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The object that the session calls with the result of a match request.

## Declaration

```swift
weak var delegate: (any SHSessionDelegate)? { get set }
```

## See Also

### Reading the session properties

- [catalog](catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.
- [results](results-swift.property.md): The results as an asynchronous sequence of matches.
- [SHSession.Results](results-swift.struct.md): An asynchronous sequence that emits updates from a session object query.

# delegate (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The object that the session calls with the result of a match request.

## Declaration

```objectivec
@property (nonatomic, weak) id<SHSessionDelegate> delegate;
```

```objectivec
@property (atomic, weak) id<SHSessionDelegate> delegate;
```

## See Also

### Reading the session properties

- [catalog](catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.
