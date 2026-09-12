> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryfirstwhere](https://developer.apple.com/documentation/combine/publishers/tryfirstwhere)

# Publishers.TryFirstWhere

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that only publishes the first element of a stream to satisfy a throwing predicate closure.

## Declaration

```swift
struct TryFirstWhere<Upstream> where Upstream : Publisher
```

## Topics

### Creating a try-first-where publisher

- [init(upstream:predicate:)](tryfirstwhere/init%28upstream_predicate_%29.md)

### Declaring supporting types

- [Publishers.TryFirstWhere.Output](tryfirstwhere/output.md): The kind of values published by this publisher.
- [Publishers.TryFirstWhere.Failure](tryfirstwhere/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](tryfirstwhere/upstream.md): The publisher from which this publisher receives elements.
- [predicate](tryfirstwhere/predicate.md): The error-throwing closure that determines whether to publish an element.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Selecting specific elements

- [Publishers.First](first.md): A publisher that publishes the first element of a stream, then finishes.
- [Publishers.FirstWhere](firstwhere.md): A publisher that only publishes the first element of a stream to satisfy a predicate closure.
- [Publishers.Last](last.md): A publisher that waits until after the stream finishes, and then publishes the last element of the stream.
- [Publishers.LastWhere](lastwhere.md): A publisher that waits until after the stream finishes and then publishes the last element of the stream that satisfies a predicate closure.
- [Publishers.TryLastWhere](trylastwhere.md): A publisher that waits until after the stream finishes and then publishes the last element of the stream that satisfies an error-throwing predicate closure.
- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
