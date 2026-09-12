> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/collectbytime](https://developer.apple.com/documentation/combine/publishers/collectbytime)

# Publishers.CollectByTime

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that buffers and periodically publishes its items.

## Declaration

```swift
struct CollectByTime<Upstream, Context> where Upstream : Publisher, Context : Scheduler
```

## Topics

### Creating a collect by time Publisher

- [init(upstream:strategy:options:)](collectbytime/init%28upstream_strategy_options_%29.md): Creates a publisher that buffers and periodically publishes its items.

### Declaring supporting types

- [Publishers.CollectByTime.Output](collectbytime/output.md): The kind of values published by this publisher.
- [Publishers.CollectByTime.Failure](collectbytime/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](collectbytime/upstream.md): The publisher that this publisher receives elements from.
- [strategy](collectbytime/strategy.md): The strategy with which to collect and publish elements.
- [options](collectbytime/options.md): Scheduler options to use for the strategy.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Reducing elements

- [Publishers.Collect](collect.md): A publisher that buffers items.
- [Publishers.CollectByCount](collectbycount.md): A publisher that buffers a maximum number of items.
- [Publishers.TimeGroupingStrategy](timegroupingstrategy.md): A strategy for collecting received elements.
- [Publishers.IgnoreOutput](ignoreoutput.md): A publisher that ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [Publishers.Reduce](reduce.md): A publisher that applies a closure to all received elements and produces an accumulated value when the upstream publisher finishes.
- [Publishers.TryReduce](tryreduce.md): A publisher that applies an error-throwing closure to all received elements and produces an accumulated value when the upstream publisher finishes.
