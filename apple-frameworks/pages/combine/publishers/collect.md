> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/collect](https://developer.apple.com/documentation/combine/publishers/collect)

# Publishers.Collect

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that buffers items.

## Declaration

```swift
struct Collect<Upstream> where Upstream : Publisher
```

## Topics

### Creating a collect publisher

- [init(upstream:)](collect/init%28upstream_%29.md): Creates a publisher that buffers items.

### Declaring supporting types

- [Publishers.Collect.Output](collect/output.md): The kind of values published by this publisher.
- [Publishers.Collect.Failure](collect/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](collect/upstream.md): The publisher that this publisher receives elements from.

### Comparing publishers

- [==(\_:\_:)](collect/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](collect/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Reducing elements

- [Publishers.CollectByCount](collectbycount.md): A publisher that buffers a maximum number of items.
- [Publishers.CollectByTime](collectbytime.md): A publisher that buffers and periodically publishes its items.
- [Publishers.TimeGroupingStrategy](timegroupingstrategy.md): A strategy for collecting received elements.
- [Publishers.IgnoreOutput](ignoreoutput.md): A publisher that ignores all upstream elements, but passes along the upstream publisher’s completion state (finished or failed).
- [Publishers.Reduce](reduce.md): A publisher that applies a closure to all received elements and produces an accumulated value when the upstream publisher finishes.
- [Publishers.TryReduce](tryreduce.md): A publisher that applies an error-throwing closure to all received elements and produces an accumulated value when the upstream publisher finishes.
