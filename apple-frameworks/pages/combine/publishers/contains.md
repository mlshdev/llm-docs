> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/contains](https://developer.apple.com/documentation/combine/publishers/contains)

# Publishers.Contains

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits a Boolean value when it receives a specific element from its upstream publisher.

## Declaration

```swift
struct Contains<Upstream> where Upstream : Publisher, Upstream.Output : Equatable
```

## Topics

### Creating a contains Publisher

- [init(upstream:output:)](contains/init%28upstream_output_%29.md): Creates a publisher that emits a Boolean value when it receives a specific element from its upstream publisher.

### Declaring supporting types

- [Publishers.Contains.Output](contains/output-swift.typealias.md): The kind of values published by this publisher.
- [Publishers.Contains.Failure](contains/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](contains/upstream.md): The publisher from which this publisher receives elements.
- [output](contains/output-swift.property.md): The element to match in the upstream publisher.

### Comparing publishers

- [==(\_:\_:)](contains/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher`, `Upstream` conforms to `Equatable`, and `Upstream.Output` conforms to `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](contains/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Applying matching criteria to elements

- [Publishers.ContainsWhere](containswhere.md): A publisher that emits a Boolean value upon receiving an element that satisfies the predicate closure.
- [Publishers.TryContainsWhere](trycontainswhere.md): A publisher that emits a Boolean value upon receiving an element that satisfies the throwing predicate closure.
- [Publishers.AllSatisfy](allsatisfy.md): A publisher that publishes a single Boolean value that indicates whether all received elements pass a given predicate.
- [Publishers.TryAllSatisfy](tryallsatisfy.md): A publisher that publishes a single Boolean value that indicates whether all received elements pass a given error-throwing predicate.
