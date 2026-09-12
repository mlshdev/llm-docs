> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/flattensequence](https://developer.apple.com/documentation/swift/flattensequence)

# FlattenSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence consisting of all the elements contained in each segment contained in some `Base` sequence.

## Declaration

```swift
@frozen struct FlattenSequence<Base> where Base : Sequence, Base.Element : Sequence
```

<a id="overview"></a>

## Overview

The elements of this view are a concatenation of the elements of each sequence in the base.

The `joined` method is always lazy, but does not implicitly confer laziness on algorithms applied to its result.  In other words, for ordinary sequences `s`:

- `s.joined()` does not create new storage
- `s.joined().map(f)` maps eagerly and returns a new array
- `s.lazy.joined().map(f)` maps lazily and returns a `LazyMapSequence`

## Topics

### Instance Methods

- [formIndex(\_:offsetBy:)](flattensequence/formindex%28__offsetby_%29.md): Conforms when `Base` conforms to `Collection` and `Base.Element` conforms to `Collection`.
- [formIndex(\_:offsetBy:limitedBy:)](flattensequence/formindex%28__offsetby_limitedby_%29.md): Conforms when `Base` conforms to `Collection` and `Base.Element` conforms to `Collection`.

### Default Implementations

- [BidirectionalCollection Implementations](flattensequence/bidirectionalcollection-implementations.md)
- [Collection Implementations](flattensequence/collection-implementations.md)
- [Sequence Implementations](flattensequence/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Wrappers for Algorithms

- [CollectionDifference](collectiondifference.md): A collection of insertions and removals that describe the difference between two ordered collection states.
- [DropFirstSequence](dropfirstsequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [DropWhileSequence](dropwhilesequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [EnumeratedSequence](enumeratedsequence.md): An enumeration of the elements of a sequence or collection.
- [FlattenCollection](flattencollection.md)
- [JoinedSequence](joinedsequence.md): A sequence that presents the elements of a base sequence of sequences concatenated using a given separator.
- [PrefixSequence](prefixsequence.md): A sequence that only consumes up to `n` elements from an underlying `Base` iterator.
- [Repeated](repeated.md): A collection whose elements are all identical.
- [ReversedCollection](reversedcollection.md): A collection that presents the elements of its base collection in reverse order.
- [StrideTo](strideto.md): A sequence of values formed by striding over a half-open interval.
- [StrideThrough](stridethrough.md): A sequence of values formed by striding over a closed interval.
- [UnfoldSequence](unfoldsequence.md): A sequence whose elements are produced via repeated applications of a closure to some mutable state.
- [Zip2Sequence](zip2sequence.md): A sequence of pairs built out of two underlying sequences.
