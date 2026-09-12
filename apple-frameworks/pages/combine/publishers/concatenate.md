> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/concatenate](https://developer.apple.com/documentation/combine/publishers/concatenate)

# Publishers.Concatenate

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that emits all of one publisher’s elements before those from another publisher.

## Declaration

```swift
struct Concatenate<Prefix, Suffix> where Prefix : Publisher, Suffix : Publisher, Prefix.Failure == Suffix.Failure, Prefix.Output == Suffix.Output
```

## Topics

### Creating a concatenate publisher

- [init(prefix:suffix:)](concatenate/init%28prefix_suffix_%29.md): Creates a publisher that emits all of one publisher’s elements before those from another publisher.

### Declaring supporting types

- [Publishers.Concatenate.Output](concatenate/output.md): The kind of values published by this publisher.
- [Publishers.Concatenate.Failure](concatenate/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [prefix](concatenate/prefix.md): The publisher to republish, in its entirety, before republishing elements from `suffix`.
- [suffix](concatenate/suffix.md): The publisher to republish only after `prefix` finishes.

### Comparing publishers

- [==(\_:\_:)](concatenate/==%28____%29.md): Conforms when `Prefix` conforms to `Publisher`, `Prefix` conforms to `Equatable`, `Suffix` conforms to `Publisher`, `Suffix` conforms to `Equatable`, `Prefix.Failure` is `Suffix.Failure`, and `Prefix.Output` is `Suffix.Output`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](concatenate/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Applying sequence operations to elements

- [Publishers.DropUntilOutput](dropuntiloutput.md): A publisher that ignores elements from the upstream publisher until it receives an element from second publisher.
- [Publishers.Drop](drop.md): A publisher that omits a specified number of elements before republishing later elements.
- [Publishers.DropWhile](dropwhile.md): A publisher that omits elements from an upstream publisher until a given closure returns false.
- [Publishers.TryDropWhile](trydropwhile.md): A publisher that omits elements from an upstream publisher until a given error-throwing closure returns false.
- [Publishers.PrefixWhile](prefixwhile.md): A publisher that republishes elements while a predicate closure indicates publishing should continue.
- [Publishers.TryPrefixWhile](tryprefixwhile.md): A publisher that republishes elements while an error-throwing predicate closure indicates publishing should continue.
- [Publishers.PrefixUntilOutput](prefixuntiloutput.md): A publisher that republishes elements until another publisher emits an element.
