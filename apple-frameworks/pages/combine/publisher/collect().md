> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/collect()](https://developer.apple.com/documentation/combine/publisher/collect())

# collect()

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.

## Declaration

```swift
func collect() -> Publishers.Collect<Self>
```

<a id="return-value"></a>

## Return Value

A publisher that collects all received items and returns them as an array upon completion.

<a id="discussion"></a>

## Discussion

Use [collect()](collect%28%29.md) to gather elements into an array that the operator emits after the upstream publisher finishes.

If the upstream publisher fails with an error, this publisher forwards the error to the downstream receiver instead of sending its output.

This publisher requests an unlimited number of elements from the upstream publisher and uses an unbounded amount of memory to store the received values. The publisher may exert memory pressure on the system for very large sets of elements.

The [collect()](collect%28%29.md) operator only sends the collected array to its downstream receiver after a request whose demand is greater than 0 items. Otherwise, [collect()](collect%28%29.md) waits until it receives a non-zero request.

In the example below, an Integer range is a publisher that emits an array of integers:

```swift
let numbers = (0...10)
cancellable = numbers.publisher
    .collect()
    .sink { print("\($0)") }

// Prints: "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
```

## See Also

### Reducing elements

- [collect(\_:)](collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [collect(\_:options:)](collect%28__options_%29.md): Collects elements by a given time-grouping strategy, and emits a single array of the collection.
- [Publishers.TimeGroupingStrategy](../publishers/timegroupingstrategy.md): A strategy for collecting received elements.
- [ignoreOutput()](ignoreoutput%28%29.md): Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [reduce(\_:\_:)](reduce%28____%29.md): Applies a closure that collects each element of a stream and publishes a final result upon completion.
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.
