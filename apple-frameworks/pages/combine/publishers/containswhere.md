> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/containswhere](https://developer.apple.com/documentation/combine/publishers/containswhere)

# Publishers.ContainsWhere

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits a Boolean value upon receiving an element that satisfies the predicate closure.

## Declaration

```swift
struct ContainsWhere<Upstream> where Upstream : Publisher
```

## Topics

### Creating a contains where publisher

- [init(upstream:predicate:)](containswhere/init%28upstream_predicate_%29.md): Creates a publisher that emits a Boolean value upon receiving an element that satisfies the predicate closure.

### Declaring supporting types

- [Publishers.ContainsWhere.Output](containswhere/output.md): The kind of values published by this publisher.
- [Publishers.ContainsWhere.Failure](containswhere/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](containswhere/upstream.md): The publisher from which this publisher receives elements.
- [predicate](containswhere/predicate.md): The closure that determines whether the publisher should consider an element as a match.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Applying matching criteria to elements

- [Publishers.Contains](contains.md): A publisher that emits a Boolean value when it receives a specific element from its upstream publisher.
- [Publishers.TryContainsWhere](trycontainswhere.md): A publisher that emits a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [Publishers.AllSatisfy](allsatisfy.md): A publisher that publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [Publishers.TryAllSatisfy](tryallsatisfy.md): A publisher that publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
