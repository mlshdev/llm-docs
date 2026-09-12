> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/last](https://developer.apple.com/documentation/combine/publishers/last)

# Publishers.Last

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that waits until after the stream finishes, and then publishes the last element of the stream.

## Declaration

```swift
struct Last<Upstream> where Upstream : Publisher
```

## Topics

### Creating a last publisher

- [init(upstream:)](last/init%28upstream_%29.md): Creates a publisher that waits until after the stream finishes and then publishes the last element of the stream.

### Declaring supporting types

- [Publishers.Last.Output](last/output.md): The kind of values published by this publisher.
- [Publishers.Last.Failure](last/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](last/upstream.md): The publisher from which this publisher receives elements.

### Comparing publishers

- [==(\_:\_:)](last/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](last/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Selecting specific elements

- [Publishers.First](first.md): A publisher that publishes the first element of a stream, then finishes.
- [Publishers.FirstWhere](firstwhere.md): A publisher that only publishes the first element of a stream to satisfy a predicate closure.
- [Publishers.TryFirstWhere](tryfirstwhere.md): A publisher that only publishes the first element of a stream to satisfy a throwing predicate closure.
- [Publishers.LastWhere](lastwhere.md): A publisher that waits until after the stream finishes and then publishes the last element of the stream that satisfies a predicate closure.
- [Publishers.TryLastWhere](trylastwhere.md): A publisher that waits until after the stream finishes and then publishes the last element of the stream that satisfies an error-throwing predicate closure.
- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.
