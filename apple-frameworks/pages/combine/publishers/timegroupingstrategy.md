> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/timegroupingstrategy](https://developer.apple.com/documentation/combine/publishers/timegroupingstrategy)

# Publishers.TimeGroupingStrategy

**Framework:** Combine  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy for collecting received elements.

## Declaration

```swift
enum TimeGroupingStrategy<Context> where Context : Scheduler
```

## Topics

### Time groupings

- [Publishers.TimeGroupingStrategy.byTime(\_:\_:)](timegroupingstrategy/bytime%28____%29.md): A grouping that collects and periodically publishes items.
- [Publishers.TimeGroupingStrategy.byTimeOrCount(\_:\_:\_:)](timegroupingstrategy/bytimeorcount%28______%29.md): A grouping that collects and publishes items periodically or when a buffer reaches a maximum size.

## See Also

### Reducing elements

- [collect()](../publisher/collect%28%29.md): Collects all received elements, and emits a single array of the collection when the upstream publisher finishes.
- [collect(\_:)](../publisher/collect%28__%29.md): Collects up to the specified number of elements, and then emits a single array of the collection.
- [collect(\_:options:)](../publisher/collect%28__options_%29.md): Collects elements by a given time-grouping strategy, and emits a single array of the collection.
- [ignoreOutput()](../publisher/ignoreoutput%28%29.md): Ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [reduce(\_:\_:)](../publisher/reduce%28____%29.md): Applies a closure that collects each element of a stream and publishes a final result upon completion.
- [tryReduce(\_:\_:)](../publisher/tryreduce%28____%29.md): Applies an error-throwing closure that collects each element of a stream and publishes a final result upon completion.
