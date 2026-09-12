> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/enumeratedsequence](https://developer.apple.com/documentation/swift/enumeratedsequence)

# EnumeratedSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An enumeration of the elements of a sequence or collection.

## Declaration

```swift
@frozen struct EnumeratedSequence<Base> where Base : Sequence
```

<a id="overview"></a>

## Overview

`EnumeratedSequence` is a sequence of pairs (*n*, *x*), where *n*s are consecutive `Int` values starting at zero, and *x*s are the elements of a base sequence.

To create an instance of `EnumeratedSequence`, call `enumerated()` on a sequence or collection. The following example enumerates the elements of an array.

```swift
var s = ["foo", "bar"].enumerated()
for (n, x) in s {
    print("\(n): \(x)")
}
// Prints "0: foo"
// Prints "1: bar"
```

## Topics

### Default Implementations

- [BidirectionalCollection Implementations](enumeratedsequence/bidirectionalcollection-implementations.md)
- [Collection Implementations](enumeratedsequence/collection-implementations.md)
- [RandomAccessCollection Implementations](enumeratedsequence/randomaccesscollection-implementations.md)
- [Sequence Implementations](enumeratedsequence/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Wrappers for Algorithms

- [CollectionDifference](collectiondifference.md): A collection of insertions and removals that describe the difference between two ordered collection states.
- [DropFirstSequence](dropfirstsequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [DropWhileSequence](dropwhilesequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [FlattenCollection](flattencollection.md)
- [FlattenSequence](flattensequence.md): A sequence consisting of all the elements contained in each segment contained in some `Base` sequence.
- [JoinedSequence](joinedsequence.md): A sequence that presents the elements of a base sequence of sequences concatenated using a given separator.
- [PrefixSequence](prefixsequence.md): A sequence that only consumes up to `n` elements from an underlying `Base` iterator.
- [Repeated](repeated.md): A collection whose elements are all identical.
- [ReversedCollection](reversedcollection.md): A collection that presents the elements of its base collection in reverse order.
- [StrideTo](strideto.md): A sequence of values formed by striding over a half-open interval.
- [StrideThrough](stridethrough.md): A sequence of values formed by striding over a closed interval.
- [UnfoldSequence](unfoldsequence.md): A sequence whose elements are produced via repeated applications of a closure to some mutable state.
- [Zip2Sequence](zip2sequence.md): A sequence of pairs built out of two underlying sequences.
