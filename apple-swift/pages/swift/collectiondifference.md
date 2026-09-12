> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference](https://developer.apple.com/documentation/swift/collectiondifference)

# CollectionDifference

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection of insertions and removals that describe the difference between two ordered collection states.

## Declaration

```swift
struct CollectionDifference<ChangeElement>
```

## Topics

### Initializers

- [init(\_:)](collectiondifference/init%28__%29.md): Creates a new collection difference from a collection of changes.

### Instance Properties

- [insertions](collectiondifference/insertions.md): The insertions contained by this difference, from lowest offset to highest.
- [removals](collectiondifference/removals.md): The removals contained by this difference, from lowest offset to highest.

### Instance Methods

- [formIndex(\_:offsetBy:)](collectiondifference/formindex%28__offsetby_%29.md)
- [index(before:)](collectiondifference/index%28before_%29.md)
- [inferringMoves()](collectiondifference/inferringmoves%28%29.md): Conforms when `ChangeElement` conforms to `Hashable`. Returns a new collection difference with associations between individual elements that have been removed and inserted only once.
- [inverse()](collectiondifference/inverse%28%29.md)

### Enumerations

- [CollectionDifference.Change](collectiondifference/change.md): A single change to a collection.

### Default Implementations

- [Collection Implementations](collectiondifference/collection-implementations.md)
- [Decodable Implementations](collectiondifference/decodable-implementations.md)
- [Encodable Implementations](collectiondifference/encodable-implementations.md)
- [Equatable Implementations](collectiondifference/equatable-implementations.md)
- [Hashable Implementations](collectiondifference/hashable-implementations.md)
- [Sequence Implementations](collectiondifference/sequence-implementations.md)

## Relationships

### Conforms To

- [Collection](collection.md)
- [Copyable](copyable.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [Hashable](hashable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Wrappers for Algorithms

- [DropFirstSequence](dropfirstsequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [DropWhileSequence](dropwhilesequence.md): A sequence that lazily consumes and drops `n` elements from an underlying `Base` iterator before possibly returning the first available element.
- [EnumeratedSequence](enumeratedsequence.md): An enumeration of the elements of a sequence or collection.
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
