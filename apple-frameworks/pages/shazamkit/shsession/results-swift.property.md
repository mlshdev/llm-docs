> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/results-swift.property](https://developer.apple.com/documentation/shazamkit/shsession/results-swift.property)

# results

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The results as an asynchronous sequence of matches.

## Declaration

```swift
var results: SHSession.Results { get }
```

## See Also

### Reading the session properties

- [delegate](delegate.md): The object that the session calls with the result of a match request.
- [catalog](catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.
- [SHSession.Results](results-swift.struct.md): An asynchronous sequence that emits updates from a session object query.
