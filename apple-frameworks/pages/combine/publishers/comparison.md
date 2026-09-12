> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/comparison](https://developer.apple.com/documentation/combine/publishers/comparison)

# Publishers.Comparison

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item.

## Declaration

```swift
struct Comparison<Upstream> where Upstream : Publisher
```

## Topics

### Creating a comparison publisher

- [init(upstream:areInIncreasingOrder:)](comparison/init%28upstream_areinincreasingorder_%29.md): Creates a publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item.

### Declaring supporting types

- [Publishers.Comparison.Output](comparison/output.md): The kind of values published by this publisher.
- [Publishers.Comparison.Failure](comparison/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](comparison/upstream.md): The publisher from which this publisher receives its elements.
- [areInIncreasingOrder](comparison/areinincreasingorder.md): A closure that receives two elements and returns true if they are in increasing order.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Applying mathematical operations on elements

- [Publishers.Count](count.md): A publisher that publishes the number of elements received from the upstream publisher.
- [Publishers.TryComparison](trycomparison.md): A publisher that republishes items from another publisher only if each new item is in increasing order from the previously-published item, and fails if the ordering logic throws an error.
