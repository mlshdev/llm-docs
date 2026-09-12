> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryreduce](https://developer.apple.com/documentation/combine/publishers/tryreduce)

# Publishers.TryReduce

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that applies an error-throwing closure to all received elements and produces an accumulated value when the upstream publisher finishes.

## Declaration

```swift
struct TryReduce<Upstream, Output> where Upstream : Publisher
```

## Topics

### Creating a try-reduce publisher

- [init(upstream:initial:nextPartialResult:)](tryreduce/init%28upstream_initial_nextpartialresult_%29.md): Creates a publisher that applies an error-throwing closure to all received elements and produces an accumulated value when the upstream publisher finishes.

### Declaring supporting types

- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
- [Publishers.TryReduce.Failure](tryreduce/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](tryreduce/upstream.md): The publisher from which this publisher receives elements.
- [initial](tryreduce/initial.md): The initial value provided on the first-use of the closure.
- [nextPartialResult](tryreduce/nextpartialresult.md): An error-throwing closure that takes the previously-accumulated value and the next element from the upstream to produce a new value.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Reducing elements

- [Publishers.Collect](collect.md): A publisher that buffers items.
- [Publishers.CollectByCount](collectbycount.md): A publisher that buffers a maximum number of items.
- [Publishers.CollectByTime](collectbytime.md): A publisher that buffers and periodically publishes its items.
- [Publishers.TimeGroupingStrategy](timegroupingstrategy.md): A strategy for collecting received elements.
- [Publishers.IgnoreOutput](ignoreoutput.md): A publisher that ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [Publishers.Reduce](reduce.md): A publisher that applies a closure to all received elements and produces an accumulated value when the upstream publisher finishes.
