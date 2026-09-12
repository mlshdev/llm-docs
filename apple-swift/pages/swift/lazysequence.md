> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazysequence](https://developer.apple.com/documentation/swift/lazysequence)

# LazySequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence containing the same elements as a `Base` sequence, but on which some operations such as `map` and `filter` are implemented lazily.

## Declaration

```swift
@frozen struct LazySequence<Base> where Base : Sequence
```

<a id="overview"></a>

## Overview

- See also: `LazySequenceProtocol`

## Topics

### Instance Methods

- [mapAnnotations(\_:)](lazysequence/mapannotations%28__%29.md): Conforms when `Base` conforms to `Sequence`. Returns a lazy sequence where the elements of the result are computed each time they are read by calling transform function on the annotation of an annotated feature.
- [mapFeatures(\_:)](lazysequence/mapfeatures%28__%29.md): Conforms when `Base` conforms to `Sequence`. Returns a lazy sequence where the elements of the result are computed each time they are read by calling transform function on the feature of an annotated feature.

### Default Implementations

- [BidirectionalCollection Implementations](lazysequence/bidirectionalcollection-implementations.md)
- [Collection Implementations](lazysequence/collection-implementations.md)
- [LazySequenceProtocol Implementations](lazysequence/lazysequenceprotocol-implementations.md)
- [RandomAccessCollection Implementations](lazysequence/randomaccesscollection-implementations.md)
- [Sequence Implementations](lazysequence/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [LazyCollectionProtocol](lazycollectionprotocol.md)
- [LazySequenceProtocol](lazysequenceprotocol.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Lazy Wrappers

- [LazyMapSequence](lazymapsequence.md): A `Sequence` whose elements consist of those in a `Base` `Sequence` passed through a transform function returning `Element`. These elements are computed lazily, each time they’re read, by calling the transform function on a base element.
- [LazyFilterSequence](lazyfiltersequence.md): A sequence whose elements consist of the elements of some base sequence that also satisfy a given predicate.
- [LazyPrefixWhileSequence](lazyprefixwhilesequence.md): A sequence whose elements consist of the initial consecutive elements of some base sequence that satisfy a given predicate.
- [LazyDropWhileSequence](lazydropwhilesequence.md): A sequence whose elements consist of the elements that follow the initial consecutive elements of some base sequence that satisfy a given predicate.
- [LazyCollection](lazycollection.md): A collection containing the same elements as a `Base` collection, but on which some operations such as `map` and `filter` are implemented lazily.
- [LazyDropWhileCollection](lazydropwhilecollection.md): A lazy wrapper that includes the elements of an underlying collection after any initial consecutive elements that satisfy a predicate.
- [LazyFilterCollection](lazyfiltercollection.md): A lazy `Collection` wrapper that includes the elements of an underlying collection that satisfy a predicate.
- [LazyMapCollection](lazymapcollection.md): A `Collection` whose elements consist of those in a `Base` `Collection` passed through a transform function returning `Element`. These elements are computed lazily, each time they’re read, by calling the transform function on a base element.
- [LazyPrefixWhileCollection](lazyprefixwhilecollection.md): A lazy collection wrapper that includes the initial consecutive elements of an underlying collection that satisfy a predicate.
