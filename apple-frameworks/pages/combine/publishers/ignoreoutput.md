> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/ignoreoutput](https://developer.apple.com/documentation/combine/publishers/ignoreoutput)

# Publishers.IgnoreOutput

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).

## Declaration

```swift
struct IgnoreOutput<Upstream> where Upstream : Publisher
```

## Topics

### Creating an ignore output publisher

- [init(upstream:)](ignoreoutput/init%28upstream_%29.md): Creates a publisher that ignores all upstream elements, but passes along the upstream publisher’s completion state (finish or failed).

### Declaring supporting types

- [Publishers.IgnoreOutput.Output](ignoreoutput/output.md): The kind of values published by this publisher.
- [Publishers.IgnoreOutput.Failure](ignoreoutput/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](ignoreoutput/upstream.md): The publisher from which this publisher receives elements.

### Comparing publishers

- [==(\_:\_:)](ignoreoutput/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](ignoreoutput/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Reducing elements

- [Publishers.Collect](collect.md): A publisher that buffers items.
- [Publishers.CollectByCount](collectbycount.md): A publisher that buffers a maximum number of items.
- [Publishers.CollectByTime](collectbytime.md): A publisher that buffers and periodically publishes its items.
- [Publishers.TimeGroupingStrategy](timegroupingstrategy.md): A strategy for collecting received elements.
- [Publishers.Reduce](reduce.md): A publisher that applies a closure to all received elements and produces an accumulated value when the upstream publisher finishes.
- [Publishers.TryReduce](tryreduce.md): A publisher that applies an error-throwing closure to all received elements and produces an accumulated value when the upstream publisher finishes.
