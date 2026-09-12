> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/repeated](https://developer.apple.com/documentation/swift/repeated)

# Repeated

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection whose elements are all identical.

## Declaration

```swift
@frozen struct Repeated<Element>
```

<a id="overview"></a>

## Overview

You create an instance of the `Repeated` collection by calling the `repeatElement(_:count:)` function. The following example creates a collection containing the name “Humperdinck” repeated five times:

```swift
let repeatedName = repeatElement("Humperdinck", count: 5)
for name in repeatedName {
    print(name)
}
// "Humperdinck"
// "Humperdinck"
// "Humperdinck"
// "Humperdinck"
// "Humperdinck"
```

## Topics

### Instance Properties

- [count](repeated/count.md): The number of elements in this collection.
- [repeatedValue](repeated/repeatedvalue.md): The value of every element in this collection.

### Default Implementations

- [BidirectionalCollection Implementations](repeated/bidirectionalcollection-implementations.md)
- [Collection Implementations](repeated/collection-implementations.md)
- [RandomAccessCollection Implementations](repeated/randomaccesscollection-implementations.md)
- [Sequence Implementations](repeated/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
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
- [EnumeratedSequence](enumeratedsequence.md): An enumeration of the elements of a sequence or collection.
- [FlattenCollection](flattencollection.md)
- [FlattenSequence](flattensequence.md): A sequence consisting of all the elements contained in each segment contained in some `Base` sequence.
- [JoinedSequence](joinedsequence.md): A sequence that presents the elements of a base sequence of sequences concatenated using a given separator.
- [PrefixSequence](prefixsequence.md): A sequence that only consumes up to `n` elements from an underlying `Base` iterator.
- [ReversedCollection](reversedcollection.md): A collection that presents the elements of its base collection in reverse order.
- [StrideTo](strideto.md): A sequence of values formed by striding over a half-open interval.
- [StrideThrough](stridethrough.md): A sequence of values formed by striding over a closed interval.
- [UnfoldSequence](unfoldsequence.md): A sequence whose elements are produced via repeated applications of a closure to some mutable state.
- [Zip2Sequence](zip2sequence.md): A sequence of pairs built out of two underlying sequences.
