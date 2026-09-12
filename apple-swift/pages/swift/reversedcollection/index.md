> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/reversedcollection/index](https://developer.apple.com/documentation/swift/reversedcollection/index)

# ReversedCollection.Index

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An index that traverses the same positions as an underlying index, with inverted traversal direction.

## Declaration

```swift
@frozen struct Index
```

## Topics

### Initializers

- [init(\_:)](index/init%28__%29.md): Creates a new index into a reversed collection for the position before the specified index.

### Instance Properties

- [base](index/base.md): The position after this position in the underlying collection.

### Default Implementations

- [Comparable Implementations](index/comparable-implementations.md)
- [Equatable Implementations](index/equatable-implementations.md)
- [Hashable Implementations](index/hashable-implementations.md)

## Relationships

### Conforms To

- [Comparable](../comparable.md)
- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
