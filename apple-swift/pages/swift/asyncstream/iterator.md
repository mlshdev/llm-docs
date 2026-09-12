> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/iterator](https://developer.apple.com/documentation/swift/asyncstream/iterator)

# AsyncStream.Iterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The asynchronous iterator for iterating an asynchronous stream.

## Declaration

```swift
struct Iterator
```

<a id="overview"></a>

## Overview

This type doesn’t conform to `Sendable`. Don’t use it from multiple concurrent contexts. It is a programmer error to invoke `next()` from a concurrent context that contends with another such call, which results in a call to `fatalError()`.

## Topics

### Iterating over Elements

- [next()](iterator/next%28%29.md): The next value from the asynchronous stream.

### Instance Methods

- [next(isolation:)](iterator/next%28isolation_%29.md): The next value from the asynchronous stream.

### Default Implementations

- [AsyncIteratorProtocol Implementations](iterator/asynciteratorprotocol-implementations.md)

## Relationships

### Conforms To

- [AsyncIteratorProtocol](../asynciteratorprotocol.md)

## See Also

### Creating an Iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
