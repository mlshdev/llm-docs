> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/collect(_:options:)](https://developer.apple.com/documentation/combine/publisher/collect(_:options:))

# collect(\_:options:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Collects elements by a given time-grouping strategy, and emits a single array of the collection.

## Declaration

```swift
func collect<S>(_ strategy: Publishers.TimeGroupingStrategy<S>, options: S.SchedulerOptions? = nil) -> Publishers.CollectByTime<Self, S> where S : Scheduler
```

## Parameters

- `strategy`: The timing group strategy used by the operator to collect and publish elements.
- `options`: Scheduler options to use for the strategy.

<a id="return-value"></a>

## Return Value

A publisher that collects elements by a given strategy, and emits a single array of the collection.

## Mentioned In

- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)

<a id="discussion"></a>

## Discussion

Use [collect(\_:options:)](collect%28__options_%29.md) to emit arrays of elements on a schedule specified by a [Scheduler](../scheduler.md) and `Stride` that you provide. At the end of each scheduled interval, the publisher sends an array that contains the items it collected. If the upstream publisher finishes before filling the buffer, the publisher sends an array that contains items it received. This may be fewer than the number of elements specified in the requested `Stride`.

If the upstream publisher fails with an error, this publisher forwards the error to the downstream receiver instead of sending its output.

The example above collects timestamps generated on a one-second [Timer](../../foundation/timer.md) in groups (`Stride`) of five.

```swift
let sub = Timer.publish(every: 1, on: .main, in: .default)
    .autoconnect()
    .collect(.byTime(RunLoop.main, .seconds(5)))
    .sink { print("\($0)", terminator: "\n\n") }

// Prints: "[2020-01-24 00:54:46 +0000, 2020-01-24 00:54:47 +0000,
//          2020-01-24 00:54:48 +0000, 2020-01-24 00:54:49 +0000,
//          2020-01-24 00:54:50 +0000]"
```

> **Note**

> When this publisher receives a request for `.max(n)` elements, it requests `.max(count * n)` from the upstream publisher.

## See Also

### Reducing elements

- [collect()](collect%28%29.md): Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.
- [collect(\_:)](collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [Publishers.TimeGroupingStrategy](../publishers/timegroupingstrategy.md): A strategy for collecting received elements.
- [ignoreOutput()](ignoreoutput%28%29.md): Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [reduce(\_:\_:)](reduce%28____%29.md): Applies a closure that collects each element of a stream and publishes a final result upon completion.
- [tryReduce(\_:\_:)](tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.
