> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/results-swift.struct](https://developer.apple.com/documentation/shazamkit/shsession/results-swift.struct)

# SHSession.Results

**Framework:** ShazamKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An asynchronous sequence that emits updates from a session object query.

## Declaration

```swift
struct Results
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](results-swift.struct/makeasynciterator%28%29.md): Creates an asynchronous iterator that produces results from an asynchronous sequence.
- [SHSession.Results.Iterator](results-swift.struct/iterator.md): An iterator for accessing session results.
- [SHSession.Results.Element](results-swift.struct/element.md): A set of results that a session result object returns.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading the session properties

- [delegate](delegate.md): The object that the session calls with the result of a match request.
- [catalog](catalog.md): The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.
- [results](results-swift.property.md): The results as an asynchronous sequence of matches.
