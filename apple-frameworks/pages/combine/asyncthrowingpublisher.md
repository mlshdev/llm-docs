> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/asyncthrowingpublisher](https://developer.apple.com/documentation/combine/asyncthrowingpublisher)

# AsyncThrowingPublisher

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A publisher that exposes its elements as a throwing asynchronous sequence.

## Declaration

```swift
struct AsyncThrowingPublisher<P> where P : Publisher
```

<a id="overview"></a>

## Overview

`AsyncThrowingPublisher` conforms to [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence), which allows callers to receive values with the `for`-`await`-`in` syntax, rather than attaching a [Subscriber](subscriber.md). If the upstream publisher terminates with an error, `AsyncThrowingPublisher` throws the error to the awaiting caller.

Use the [values](publisher/values-v7nz.md) property of the [Publisher](publisher.md) protocol to wrap an existing publisher with an instance of this type.

## Topics

### Creating an asynchronous publisher

- [init(\_:)](asyncthrowingpublisher/init%28__%29.md): Creates a publisher that exposes elements received from an upstream publisher as a throwing asynchronous sequence.

### Creating an iterator

- [makeAsyncIterator()](asyncthrowingpublisher/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncThrowingPublisher.Iterator](asyncthrowingpublisher/iterator.md): The iterator that produces elements of the asynchronous publisher sequence.

### Supporting types

- [AsyncThrowingPublisher.Element](asyncthrowingpublisher/element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Asynchronous Publishers

- [AsyncPublisher](asyncpublisher.md): A publisher that exposes its elements as an asynchronous sequence.
