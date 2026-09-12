> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence](https://developer.apple.com/documentation/combine/publishers/sequence)

# Publishers.Sequence

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that publishes a given sequence of elements.

## Declaration

```swift
struct Sequence<Elements, Failure> where Elements : Sequence, Failure : Error
```

<a id="overview"></a>

## Overview

When the publisher exhausts the elements in the sequence, the next request causes the publisher to finish.

## Topics

### Creating a sequence publisher

- [init(sequence:)](sequence/init%28sequence_%29.md): Creates a publisher for a sequence of elements.

### Declaring supporting types

- [Publishers.Output](output.md): A publisher that publishes elements specified by a range in the sequence of published elements.

### Inspecting publisher properties

- [sequence](sequence/sequence.md): The sequence of elements to publish.

### Comparing publishers

- [==(\_:\_:)](sequence/==%28____%29.md): Conforms when `Elements` conforms to `Equatable`, `Elements` conforms to `Sequence`, and `Failure` conforms to `Error`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Applying Operators

- [Publisher Operators](../publishers-sequence-publisher-operators.md): Methods that create downstream publishers or subscribers to act on the elements they receive.

### Default Implementations

- [Equatable Implementations](sequence/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Convenience publishers

- [Publishers.Catch](catch.md): A publisher that handles errors from an upstream publisher by replacing the failed publisher with another publisher.
