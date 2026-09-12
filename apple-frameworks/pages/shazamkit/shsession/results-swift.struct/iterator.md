> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/results-swift.struct/iterator](https://developer.apple.com/documentation/shazamkit/shsession/results-swift.struct/iterator)

# SHSession.Results.Iterator

**Framework:** ShazamKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An iterator for accessing session results.

## Declaration

```swift
struct Iterator
```

## Topics

### Iterating over results

- [next()](iterator/next%28%29.md): Asynchronously waits for the next element and returns it.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Creating an iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates an asynchronous iterator that produces results from an asynchronous sequence.
- [SHSession.Results.Element](element.md): A set of results that a session result object returns.
