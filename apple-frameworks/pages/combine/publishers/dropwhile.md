> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/dropwhile](https://developer.apple.com/documentation/combine/publishers/dropwhile)

# Publishers.DropWhile

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that omits elements from an upstream publisher until a given closure returns false.

## Declaration

```swift
struct DropWhile<Upstream> where Upstream : Publisher
```

## Topics

### Creating a drop while publisher

- [init(upstream:predicate:)](dropwhile/init%28upstream_predicate_%29.md): Creates a publisher that omits elements from an upstream publisher until a given closure returns false.

### Declaring supporting types

- [Publishers.DropWhile.Output](dropwhile/output.md): The kind of values published by this publisher.
- [Publishers.DropWhile.Failure](dropwhile/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](dropwhile/upstream.md): The publisher from which this publisher receives elements.
- [predicate](dropwhile/predicate.md): The closure that indicates whether to drop the element.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Applying sequence operations to elements

- [Publishers.DropUntilOutput](dropuntiloutput.md): A publisher that ignores elements from the upstream publisher until it receives an element from second publisher.
- [Publishers.Drop](drop.md): A publisher that omits a specified number of elements before republishing later elements.
- [Publishers.TryDropWhile](trydropwhile.md): A publisher that omits elements from an upstream publisher until a given error-throwing closure returns false.
- [Publishers.Concatenate](concatenate.md): A publisher that emits all of one publisher’s elements before those from another publisher.
- [Publishers.PrefixWhile](prefixwhile.md): A publisher that republishes elements while a predicate closure indicates publishing should continue.
- [Publishers.TryPrefixWhile](tryprefixwhile.md): A publisher that republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [Publishers.PrefixUntilOutput](prefixuntiloutput.md): A publisher that republishes elements until another publisher emits an element.
