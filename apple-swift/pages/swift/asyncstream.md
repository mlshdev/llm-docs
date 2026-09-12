> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream](https://developer.apple.com/documentation/swift/asyncstream)

# AsyncStream

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An asynchronous sequence generated from a closure that calls a continuation to produce new elements.

## Declaration

```swift
struct AsyncStream<Element>
```

<a id="overview"></a>

## Overview

`AsyncStream` conforms to `AsyncSequence`, providing a convenient way to create an asynchronous sequence without manually implementing an asynchronous iterator. In particular, an asynchronous stream is well-suited to adapt callback- or delegation-based APIs to participate with `async`-`await`.

You initialize an `AsyncStream` with a closure that receives an `AsyncStream.Continuation`. Produce elements in this closure, then provide them to the stream by calling the continuation’s `yield(_:)` method. When there are no further elements to produce, call the continuation’s `finish()` method. This causes the sequence iterator to produce a `nil`, which terminates the sequence. The continuation conforms to `Sendable`, which permits calling it from concurrent contexts external to the iteration of the `AsyncStream`.

An arbitrary source of elements can produce elements faster than they are consumed by a caller iterating over them. Because of this, `AsyncStream` defines a buffering behavior, allowing the stream to buffer a specific number of oldest or newest elements. By default, the buffer limit is `Int.max`, which means the value is unbounded.

<a id="Adapting-Existing-Code-to-Use-Streams"></a>

### Adapting Existing Code to Use Streams

To adapt existing callback code to use `async`-`await`, use the callbacks to provide values to the stream, by using the continuation’s `yield(_:)` method.

Consider a hypothetical `QuakeMonitor` type that provides callers with `Quake` instances every time it detects an earthquake. To receive callbacks, callers set a custom closure as the value of the monitor’s `quakeHandler` property, which the monitor calls back as necessary.

```swift
class QuakeMonitor {
    var quakeHandler: ((Quake) -> Void)?

    func startMonitoring() {…}
    func stopMonitoring() {…}
}
```

To adapt this to use `async`-`await`, extend the `QuakeMonitor` to add a `quakes` property, of type `AsyncStream<Quake>`. In the getter for this property, return an `AsyncStream`, whose `build` closure – called at runtime to create the stream – uses the continuation to perform the following steps:

1. Creates a `QuakeMonitor` instance.
2. Sets the monitor’s `quakeHandler` property to a closure that receives each `Quake` instance and forwards it to the stream by calling the continuation’s `yield(_:)` method.
3. Sets the continuation’s `onTermination` property to a closure that calls `stopMonitoring()` on the monitor.
4. Calls `startMonitoring` on the `QuakeMonitor`.

```swift
extension QuakeMonitor {

    static var quakes: AsyncStream<Quake> {
        AsyncStream { continuation in
            let monitor = QuakeMonitor()
            monitor.quakeHandler = { quake in
                continuation.yield(quake)
            }
            continuation.onTermination = { @Sendable _ in
                 monitor.stopMonitoring()
            }
            monitor.startMonitoring()
        }
    }
}
```

Because the stream is an `AsyncSequence`, the call point can use the `for`-`await`-`in` syntax to process each `Quake` instance as the stream produces it:

```swift
for await quake in QuakeMonitor.quakes {
    print("Quake: \(quake.date)")
}
print("Stream finished.")
```

## Topics

### Creating a Continuation-Based Stream

- [init(\_:bufferingPolicy:\_:)](asyncstream/init%28__bufferingpolicy___%29.md): Constructs an asynchronous stream for an element type, using the specified buffering policy and element-producing closure.
- [AsyncStream.Continuation.BufferingPolicy](asyncstream/continuation/bufferingpolicy.md): A strategy that handles exhaustion of a buffer’s capacity.
- [AsyncStream.Continuation](asyncstream/continuation.md): A mechanism to interface between synchronous code and an asynchronous stream.

### Creating a Stream from an Asynchronous Function

- [init(unfolding:onCancel:)](asyncstream/init%28unfolding_oncancel_%29.md): Constructs an asynchronous stream from a given element-producing closure, with an optional closure to handle cancellation.

### Finding Elements

- [contains(\_:)](asyncstream/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value that indicates whether the asynchronous sequence contains the given element.
- [contains(where:)](asyncstream/contains%28where_%29.md): Returns a Boolean value that indicates whether the asynchronous sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](asyncstream/allsatisfy%28__%29.md): Returns a Boolean value that indicates whether all elements produced by the asynchronous sequence satisfy the given predicate.
- [first(where:)](asyncstream/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [min()](asyncstream/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in an asynchronous sequence of comparable elements.
- [min(by:)](asyncstream/min%28by_%29.md): Returns the minimum element in the asynchronous sequence, using the given predicate as the comparison between elements.
- [max()](asyncstream/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in an asynchronous sequence of comparable elements.
- [max(by:)](asyncstream/max%28by_%29.md): Returns the maximum element in the asynchronous sequence, using the given predicate as the comparison between elements.

### Selecting Elements

- [prefix(\_:)](asyncstream/prefix%28__%29.md): Returns an asynchronous sequence, up to the specified maximum length, containing the initial elements of the base asynchronous sequence.
- [prefix(while:)](asyncstream/prefix%28while_%29.md): Returns an asynchronous sequence, containing the initial, consecutive elements of the base sequence that satisfy the given predicate.

### Excluding Elements

- [dropFirst(\_:)](asyncstream/dropfirst%28__%29.md): Omits a specified number of elements from the base asynchronous sequence, then passes through all remaining elements.
- [drop(while:)](asyncstream/drop%28while_%29.md): Omits elements from the base asynchronous sequence until a given closure returns false, after which it passes through all remaining elements.
- [filter(\_:)](asyncstream/filter%28__%29.md): Creates an asynchronous sequence that contains, in order, the elements of the base sequence that satisfy the given predicate.

### Transforming a Sequence

- [map(\_:)](asyncstream/map%28__%29-58nsf.md): Creates an asynchronous sequence that maps the given error-throwing closure over the asynchronous sequence’s elements.
- [map(\_:)](asyncstream/map%28__%29-4a4la.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements.
- [compactMap(\_:)](asyncstream/compactmap%28__%29-7mgjd.md): Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.
- [compactMap(\_:)](asyncstream/compactmap%28__%29-944op.md): Creates an asynchronous sequence that maps an error-throwing closure over the base sequence’s elements, omitting results that don’t return a value.
- [flatMap(\_:)](asyncstream/flatmap%28__%29-vhhr.md): Creates an asynchronous sequence that concatenates the results of calling the given error-throwing transformation with each element of this sequence.
- [reduce(\_:\_:)](asyncstream/reduce%28____%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure.
- [reduce(into:\_:)](asyncstream/reduce%28into___%29.md): Returns the result of combining the elements of the asynchronous sequence using the given closure, given a mutable initial value.

### Creating an Iterator

- [makeAsyncIterator()](asyncstream/makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
- [AsyncStream.Iterator](asyncstream/iterator.md): The asynchronous iterator for iterating an asynchronous stream.

### Supporting Types

- [AsyncStream.AsyncIterator](asyncstream/asynciterator.md): The type of asynchronous iterator that produces elements of this asynchronous sequence.

### Type Methods

- [makeStream(of:bufferingPolicy:)](asyncstream/makestream%28of_bufferingpolicy_%29.md): Initializes a new [AsyncStream](asyncstream.md) and an [AsyncStream.Continuation](asyncstream/continuation.md).

### Default Implementations

- [AsyncSequence Implementations](asyncstream/asyncsequence-implementations.md)

## Relationships

### Conforms To

- [AsyncSequence](asyncsequence.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Asynchronous Sequences

- [AsyncSequence](asyncsequence.md): Conforms when `Element` conforms to `Copyable` and `Escapable`. A type that provides asynchronous, sequential, iterated access to its elements.
- [AsyncThrowingStream](asyncthrowingstream.md): An asynchronous sequence generated from an error-throwing closure that calls a continuation to produce new elements.
