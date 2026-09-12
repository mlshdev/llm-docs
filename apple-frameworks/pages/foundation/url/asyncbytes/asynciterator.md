> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/asyncbytes/asynciterator](https://developer.apple.com/documentation/foundation/url/asyncbytes/asynciterator)

# URL.AsyncBytes.AsyncIterator

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The iterator type that produces elements of this asynchronous sequence.

## Declaration

```swift
@frozen struct AsyncIterator
```

## Topics

### Producing iterator values

- [next()](asynciterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

### Supporting types

- [URL.AsyncBytes.Element](element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
