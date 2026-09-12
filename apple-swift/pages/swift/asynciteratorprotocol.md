> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asynciteratorprotocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

# AsyncIteratorProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that asynchronously supplies the values of a sequence one at a time.

## Declaration

```swift
protocol AsyncIteratorProtocol<Element, Failure>
```

<a id="overview"></a>

## Overview

The `AsyncIteratorProtocol` defines the type returned by the `makeAsyncIterator()` method of the `AsyncSequence` protocol. In short, the iterator is what produces the asynchronous sequence’s values. The protocol defines a single asynchronous method, `next()`, which either produces the next element of the sequence, or returns `nil` to signal the end of the sequence.

To implement your own `AsyncSequence`, implement a wrapped type that conforms to `AsyncIteratorProtocol`. The following example shows a `Counter` type that uses an inner iterator to monotonically generate `Int` values until reaching a `howHigh` value. While this example isn’t itself asynchronous, it shows the shape of a custom sequence and iterator, and how to use it as if it were asynchronous:

```swift
struct Counter: AsyncSequence {
    typealias Element = Int
    let howHigh: Int

    struct AsyncIterator: AsyncIteratorProtocol {
        let howHigh: Int
        var current = 1

        mutating func next() async -> Int? {
            // A genuinely asynchronous implementation uses the `Task`
            // API to check for cancellation here and return early.
            guard current <= howHigh else {
                return nil
            }

            let result = current
            current += 1
            return result
        }
    }

    func makeAsyncIterator() -> AsyncIterator {
        return AsyncIterator(howHigh: howHigh)
    }
}
```

At the call site, this looks like:

```swift
for await number in Counter(howHigh: 10) {
  print(number, terminator: " ")
}
// Prints "1 2 3 4 5 6 7 8 9 10 "
```

<a id="End-of-Iteration"></a>

### End of Iteration

The iterator returns `nil` to indicate the end of the sequence. After returning `nil` (or throwing an error) from `next()`, the iterator enters a terminal state, and all future calls to `next()` must return `nil`.

<a id="Cancellation"></a>

### Cancellation

Types conforming to `AsyncIteratorProtocol` should use the cancellation primitives provided by Swift’s `Task` API. The iterator can choose how to handle and respond to cancellation, including:

- Checking the `isCancelled` value of the current `Task` inside `next()` and returning `nil` to terminate the sequence.
- Calling `checkCancellation()` on the `Task`, which throws a `CancellationError`.
- Implementing `next()` with a `withTaskCancellationHandler(handler:operation:)` invocation to immediately react to cancellation.

If the iterator needs to clean up on cancellation, it can do so after checking for cancellation as described above, or in `deinit` if it’s a reference type.

## Topics

### Declaring Iterator Topography

- [Element](asynciteratorprotocol/element.md)

### Producing Iterator Values

- [next()](asynciteratorprotocol/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

### Associated Types

- [Failure](asynciteratorprotocol/failure.md): The type of failure produced by iteration.

### Instance Methods

- [next(isolation:)](asynciteratorprotocol/next%28isolation_%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

## Relationships

### Conforming Types

- [AsyncCompactMapSequence.Iterator](asynccompactmapsequence/iterator.md)
- [AsyncDropFirstSequence.Iterator](asyncdropfirstsequence/iterator.md)
- [AsyncDropWhileSequence.Iterator](asyncdropwhilesequence/iterator.md)
- [AsyncFilterSequence.Iterator](asyncfiltersequence/iterator.md)
- [AsyncFlatMapSequence.Iterator](asyncflatmapsequence/iterator.md)
- [AsyncMapSequence.Iterator](asyncmapsequence/iterator.md)
- [AsyncPrefixSequence.Iterator](asyncprefixsequence/iterator.md)
- [AsyncPrefixWhileSequence.Iterator](asyncprefixwhilesequence/iterator.md)
- [AsyncStream.Iterator](asyncstream/iterator.md)
- [AsyncThrowingCompactMapSequence.Iterator](asyncthrowingcompactmapsequence/iterator.md)
- [AsyncThrowingDropWhileSequence.Iterator](asyncthrowingdropwhilesequence/iterator.md)
- [AsyncThrowingFilterSequence.Iterator](asyncthrowingfiltersequence/iterator.md)
- [AsyncThrowingFlatMapSequence.Iterator](asyncthrowingflatmapsequence/iterator.md)
- [AsyncThrowingMapSequence.Iterator](asyncthrowingmapsequence/iterator.md)
- [AsyncThrowingPrefixWhileSequence.Iterator](asyncthrowingprefixwhilesequence/iterator.md)
- [AsyncThrowingStream.Iterator](asyncthrowingstream/iterator.md)
- [Observations.Iterator](../observation/observations/iterator.md)
- [TaskGroup.Iterator](taskgroup/iterator.md)
- [ThrowingTaskGroup.Iterator](throwingtaskgroup/iterator.md)

## See Also

### Creating an Iterator

- [makeAsyncIterator()](asyncsequence/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncIterator](asyncsequence/asynciterator.md): The type of asynchronous iterator that produces elements of this asynchronous sequence.
- [Element](asyncsequence/element.md): The type of element produced by this asynchronous sequence.
