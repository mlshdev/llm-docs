> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/dropuntiloutput](https://developer.apple.com/documentation/combine/publishers/dropuntiloutput)

# Publishers.DropUntilOutput

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that ignores elements from the upstream publisher until it receives an element from second publisher.

## Declaration

```swift
struct DropUntilOutput<Upstream, Other> where Upstream : Publisher, Other : Publisher, Upstream.Failure == Other.Failure
```

## Topics

### Creating a drop until output publisher

- [init(upstream:other:)](dropuntiloutput/init%28upstream_other_%29.md): Creates a publisher that ignores elements from the upstream publisher until it receives an element from another publisher.

### Declaring supporting types

- [Publishers.DropUntilOutput.Output](dropuntiloutput/output.md): The kind of values published by this publisher.
- [Publishers.DropUntilOutput.Failure](dropuntiloutput/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](dropuntiloutput/upstream.md): The publisher from which this publisher receives its elements.
- [other](dropuntiloutput/other.md): A publisher to monitor for its first emitted element.

### Comparing publishers

- [==(\_:\_:)](dropuntiloutput/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher`, `Upstream` conforms to `Equatable`, `Other` conforms to `Publisher`, `Other` conforms to `Equatable`, and `Upstream.Failure` is `Other.Failure`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](dropuntiloutput/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Applying sequence operations to elements

- [Publishers.Drop](drop.md): A publisher that omits a specified number of elements before republishing later elements.
- [Publishers.DropWhile](dropwhile.md): A publisher that omits elements from an upstream publisher until a given closure returns false.
- [Publishers.TryDropWhile](trydropwhile.md): A publisher that omits elements from an upstream publisher until a given error-throwing closure returns false.
- [Publishers.Concatenate](concatenate.md): A publisher that emits all of one publisher’s elements before those from another publisher.
- [Publishers.PrefixWhile](prefixwhile.md): A publisher that republishes elements while a predicate closure indicates publishing should continue.
- [Publishers.TryPrefixWhile](tryprefixwhile.md): A publisher that republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [Publishers.PrefixUntilOutput](prefixuntiloutput.md): A publisher that republishes elements until another publisher emits an element.
