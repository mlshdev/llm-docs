> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/asyncbytes](https://developer.apple.com/documentation/foundation/url/asyncbytes)

# URL.AsyncBytes

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An asynchronous sequence of bytes loaded from the URL.

## Declaration

```swift
struct AsyncBytes
```

## Topics

### Creating an iterator

- [makeAsyncIterator()](asyncbytes/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [URL.AsyncBytes.AsyncIterator](asyncbytes/asynciterator.md): The iterator type that produces elements of this asynchronous sequence.

### Adapting Textual Sequences

- [lines](lines.md): The URL’s resource data, as an asynchronous sequence of lines of text.

### Supporting Types

- [URL.AsyncBytes.Element](asyncbytes/element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loading URL contents asynchronously

- [resourceBytes](resourcebytes.md): The URL’s resource data, as an asynchronous sequence of bytes.
- [lines](lines.md): The URL’s resource data, as an asynchronous sequence of lines of text.
