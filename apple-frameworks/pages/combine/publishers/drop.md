> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/drop](https://developer.apple.com/documentation/combine/publishers/drop)

# Publishers.Drop

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that omits a specified number of elements before republishing later elements.

## Declaration

```swift
struct Drop<Upstream> where Upstream : Publisher
```

## Topics

### Creating a drop Publisher

- [init(upstream:count:)](drop/init%28upstream_count_%29.md): Creates a publisher that omits a specified number of elements before republishing later elements.

### Declaring supporting types

- [Publishers.Drop.Output](drop/output.md): The kind of values published by this publisher.
- [Publishers.Drop.Failure](drop/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](drop/upstream.md): The publisher from which this publisher receives elements.
- [count](drop/count.md): The number of elements to drop.

### Comparing publishers

- [==(\_:\_:)](drop/==%28____%29.md): Conforms when `Upstream` conforms to `Publisher` and `Equatable`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](drop/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Applying sequence operations to elements

- [Publishers.DropUntilOutput](dropuntiloutput.md): A publisher that ignores elements from the upstream publisher until it receives an element from second publisher.
- [Publishers.DropWhile](dropwhile.md): A publisher that omits elements from an upstream publisher until a given closure returns false.
- [Publishers.TryDropWhile](trydropwhile.md): A publisher that omits elements from an upstream publisher until a given error-throwing closure returns false.
- [Publishers.Concatenate](concatenate.md): A publisher that emits all of one publisher’s elements before those from another publisher.
- [Publishers.PrefixWhile](prefixwhile.md): A publisher that republishes elements while a predicate closure indicates publishing should continue.
- [Publishers.TryPrefixWhile](tryprefixwhile.md): A publisher that republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [Publishers.PrefixUntilOutput](prefixuntiloutput.md): A publisher that republishes elements until another publisher emits an element.
