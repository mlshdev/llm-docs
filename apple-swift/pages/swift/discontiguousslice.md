> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice](https://developer.apple.com/documentation/swift/discontiguousslice)

# DiscontiguousSlice

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection wrapper that provides access to the elements of a collection, indexed by a set of indices.

## Declaration

```swift
struct DiscontiguousSlice<Base> where Base : Collection
```

## Topics

### Instance Properties

- [base](discontiguousslice/base.md): The collection that the indexed collection wraps.
- [subranges](discontiguousslice/subranges.md): The set of subranges that are available through this discontiguous slice.

### Subscripts

- [subscript(\_:)](discontiguousslice/subscript%28__%29-1j7n7.md): Conforms when `Base` conforms to `MutableCollection`. Accesses the element at the specified position.

### Default Implementations

- [BidirectionalCollection Implementations](discontiguousslice/bidirectionalcollection-implementations.md)
- [Collection Implementations](discontiguousslice/collection-implementations.md)
- [CustomStringConvertible Implementations](discontiguousslice/customstringconvertible-implementations.md)
- [Equatable Implementations](discontiguousslice/equatable-implementations.md)
- [Hashable Implementations](discontiguousslice/hashable-implementations.md)
- [Sequence Implementations](discontiguousslice/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)
