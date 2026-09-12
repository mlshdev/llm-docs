> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyindex](https://developer.apple.com/documentation/swift/anyindex)

# AnyIndex

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A wrapper over an underlying index that hides the specific underlying type.

## Declaration

```swift
@frozen struct AnyIndex
```

## Topics

### Initializers

- [init(\_:)](anyindex/init%28__%29.md): Creates a new index wrapping `base`.

### Default Implementations

- [Comparable Implementations](anyindex/comparable-implementations.md)
- [Equatable Implementations](anyindex/equatable-implementations.md)

## Relationships

### Conforms To

- [Comparable](comparable.md)
- [Equatable](equatable.md)

## See Also

### Type-Erasing Wrappers

- [AnySequence](anysequence.md): A type-erased sequence.
- [AnyCollection](anycollection.md): A type-erased wrapper over any collection with indices that support forward traversal.
- [AnyBidirectionalCollection](anybidirectionalcollection.md): A type-erased wrapper over any collection with indices that support bidirectional traversal.
- [AnyRandomAccessCollection](anyrandomaccesscollection.md): A type-erased wrapper over any collection with indices that support random access traversal.
- [AnyIterator](anyiterator.md): A type-erased iterator of `Element`.
- [AnyHashable](anyhashable.md): A type-erased hashable value.
