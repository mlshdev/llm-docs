> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/count](https://developer.apple.com/documentation/combine/publishers/count)

# Publishers.Count

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes the number of elements received from the upstream publisher.

## Declaration

```swift
struct Count<Upstream> where Upstream : Publisher
```

## Topics

### Creating a count Publisher

- [init(upstream:)](count/init%28upstream_%29.md): Creates a publisher that publishes the number of elements received from the upstream publisher.

### Declaring supporting types

- [Publishers.Count.Output](count/output.md): The kind of values published by this publisher.
- [Publishers.Count.Failure](count/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](count/upstream.md): The publisher from which this publisher receives elements.

### Comparing publishers

- [==(\_:\_:)](count/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent. /// - Parameters:

### Default Implementations

- [Equatable Implementations](count/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Applying mathematical operations on elements

- [Publishers.Comparison](comparison.md): A publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item.
- [Publishers.TryComparison](trycomparison.md): A publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item, and fails if the ordering logic throws an error.
