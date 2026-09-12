> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/flatmap](https://developer.apple.com/documentation/combine/publishers/flatmap)

# Publishers.FlatMap

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that transforms elements from an upstream publisher into a new publisher.

## Declaration

```swift
struct FlatMap<NewPublisher, Upstream> where NewPublisher : Publisher, Upstream : Publisher, NewPublisher.Failure == Upstream.Failure
```

## Topics

### Creating a flat map Publisher

- [init(upstream:maxPublishers:transform:)](flatmap/init%28upstream_maxpublishers_transform_%29.md): Creates a publisher that transforms elements from an upstream publisher into a new publisher.

### Declaring supporting types

- [Publishers.FlatMap.Output](flatmap/output.md): The kind of values published by this publisher.
- [Publishers.FlatMap.Failure](flatmap/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](flatmap/upstream.md): The publisher from which this publisher receives elements.
- [maxPublishers](flatmap/maxpublishers.md): The maximum number of concurrent publisher subscriptions
- [transform](flatmap/transform.md): A closure that takes an element as a parameter and returns a publisher that produces elements of that type.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Republishing elements by subscribing to new publishers

- [Publishers.SwitchToLatest](switchtolatest.md): A publisher that flattens nested publishers.
