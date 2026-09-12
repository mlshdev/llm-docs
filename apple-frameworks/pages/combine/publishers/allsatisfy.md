> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/allsatisfy](https://developer.apple.com/documentation/combine/publishers/allsatisfy)

# Publishers.AllSatisfy

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes a single Boolean value that indicates whether all received elements pass a given predicate.

## Declaration

```swift
struct AllSatisfy<Upstream> where Upstream : Publisher
```

## Topics

### Creating an all satisfy publisher

- [init(upstream:predicate:)](allsatisfy/init%28upstream_predicate_%29.md): Creates a publisher that publishes a single Boolean value that indicates whether all received elements pass a given predicate.

### Declaring supporting types

- [Publishers.AllSatisfy.Output](allsatisfy/output.md): The kind of values published by this publisher.
- [Publishers.AllSatisfy.Failure](allsatisfy/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](allsatisfy/upstream.md): The publisher from which this publisher receives elements.
- [predicate](allsatisfy/predicate.md): A closure that evaluates each received element.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Applying matching criteria to elements

- [Publishers.Contains](contains.md): A publisher that emits a Boolean value when it receives a specific element from its upstream publisher.
- [Publishers.ContainsWhere](containswhere.md): A publisher that emits a Boolean value upon receiving an element that satisfies the predicate closure.
- [Publishers.TryContainsWhere](trycontainswhere.md): A publisher that emits a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [Publishers.TryAllSatisfy](tryallsatisfy.md): A publisher that publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
