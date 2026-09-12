> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyfiltersequence](https://developer.apple.com/documentation/swift/lazyfiltersequence)

# LazyFilterSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence whose elements consist of the elements of some base sequence that also satisfy a given predicate.

## Declaration

```swift
@frozen struct LazyFilterSequence<Base> where Base : Sequence
```

<a id="overview"></a>

## Overview

> **Note**

> `s.lazy.filter { ... }`, for an arbitrary sequence `s`, is a `LazyFilterSequence`.

## Topics

### Instance Properties

- [underestimatedCount](lazyfiltersequence/underestimatedcount.md): Conforms when `Base` conforms to `Collection`.

### Instance Methods

- [filter(\_:)](lazyfiltersequence/filter%28__%29.md): Conforms when `Base` conforms to `Sequence`.
- [formIndex(\_:offsetBy:)](lazyfiltersequence/formindex%28__offsetby_%29.md): Conforms when `Base` conforms to `Collection`.
- [formIndex(\_:offsetBy:limitedBy:)](lazyfiltersequence/formindex%28__offsetby_limitedby_%29.md): Conforms when `Base` conforms to `Collection`.

### Default Implementations

- [BidirectionalCollection Implementations](lazyfiltersequence/bidirectionalcollection-implementations.md)
- [Collection Implementations](lazyfiltersequence/collection-implementations.md)
- [LazySequenceProtocol Implementations](lazyfiltersequence/lazysequenceprotocol-implementations.md)
- [Sequence Implementations](lazyfiltersequence/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [LazyCollectionProtocol](lazycollectionprotocol.md)
- [LazySequenceProtocol](lazysequenceprotocol.md)
- [Sequence](sequence.md)

## See Also

### Lazy Wrappers

- [LazySequence](lazysequence.md): A sequence containing the same elements as a `Base` sequence, but on which some operations such as `map` and `filter` are implemented lazily.
- [LazyMapSequence](lazymapsequence.md): A `Sequence` whose elements consist of those in a `Base` `Sequence` passed through a transform function returning `Element`. These elements are computed lazily, each time they’re read, by calling the transform function on a base element.
- [LazyPrefixWhileSequence](lazyprefixwhilesequence.md): A sequence whose elements consist of the initial consecutive elements of some base sequence that satisfy a given predicate.
- [LazyDropWhileSequence](lazydropwhilesequence.md): A sequence whose elements consist of the elements that follow the initial consecutive elements of some base sequence that satisfy a given predicate.
- [LazyCollection](lazycollection.md): A collection containing the same elements as a `Base` collection, but on which some operations such as `map` and `filter` are implemented lazily.
- [LazyDropWhileCollection](lazydropwhilecollection.md): A lazy wrapper that includes the elements of an underlying collection after any initial consecutive elements that satisfy a predicate.
- [LazyFilterCollection](lazyfiltercollection.md): A lazy `Collection` wrapper that includes the elements of an underlying collection that satisfy a predicate.
- [LazyMapCollection](lazymapcollection.md): A `Collection` whose elements consist of those in a `Base` `Collection` passed through a transform function returning `Element`. These elements are computed lazily, each time they’re read, by calling the transform function on a base element.
- [LazyPrefixWhileCollection](lazyprefixwhilecollection.md): A lazy collection wrapper that includes the initial consecutive elements of an underlying collection that satisfy a predicate.
