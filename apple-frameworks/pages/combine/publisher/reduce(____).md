> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/reduce(_:_:)](https://developer.apple.com/documentation/combine/publisher/reduce(_:_:))

# reduce(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies a closure that collects each element of a stream and publishes a final result upon completion.

## Declaration

```swift
func reduce<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Self.Output) -> T) -> Publishers.Reduce<Self, T>
```

## Parameters

- `initialResult`: The value that the closure receives the first time it’s called.
- `nextPartialResult`: A closure that produces a new value by taking the previously-accumulated value and the next element it receives from the upstream publisher.

<a id="return-value"></a>

## Return Value

A publisher that applies the closure to all received elements and produces an accumulated value when the upstream publisher finishes. If [reduce(\_:\_:)](reduce%28____%29.md) receives an error from the upstream publisher, the operator delivers it to the downstream subscriber, the publisher terminates and publishes no value.

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)

<a id="discussion"></a>

## Discussion

Use [reduce(\_:\_:)](reduce%28____%29.md) to collect a stream of elements and produce an accumulated value based on a closure you provide.

In the following example, the [reduce(\_:\_:)](reduce%28____%29.md) operator collects all the integer values it receives from its upstream publisher:

```swift
let numbers = (0...10)
cancellable = numbers.publisher
    .reduce(0, { accum, next in accum + next })
    .sink { print("\($0)") }

// Prints: "55"
```

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.
- [collect(\_:)](collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [collect(\_:options:)](collect%28__options_%29.md): Collects elements by a given time-grouping strategy, and emits a single array of the collection.
- [Publishers.TimeGroupingStrategy](../publishers/timegroupingstrategy.md): A strategy for collecting received elements.
- [ignoreOutput()](ignoreoutput%28%29.md): Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.
