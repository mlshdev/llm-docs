> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anybidirectionalcollection](https://developer.apple.com/documentation/swift/anybidirectionalcollection)

# AnyBidirectionalCollection

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type-erased wrapper over any collection with indices that support bidirectional traversal.

## Declaration

```swift
@frozen struct AnyBidirectionalCollection<Element>
```

<a id="overview"></a>

## Overview

An `AnyBidirectionalCollection` instance forwards its operations to a base collection having the same `Element` type, hiding the specifics of the underlying collection.

## Topics

### Initializers

- [init(\_:)](anybidirectionalcollection/init%28__%29-1hwm5.md): Creates an `AnyBidirectionalCollection` having the same underlying collection as `other`.
- [init(\_:)](anybidirectionalcollection/init%28__%29-2kvez.md): Creates a type-erased collection that wraps the given collection.
- [init(\_:)](anybidirectionalcollection/init%28__%29-4hewp.md): Creates an `AnyBidirectionalCollection` having the same underlying collection as `other`.
- [init(\_:)](anybidirectionalcollection/init%28__%29-5lybd.md): Creates a type-erased collection that wraps the given collection.
- [init(\_:)](anybidirectionalcollection/init%28__%29-61joz.md): Creates an `AnyBidirectionalCollection` having the same underlying collection as `other`.

### Instance Methods

- [drop(while:)](anybidirectionalcollection/drop%28while_%29.md)
- [dropFirst(\_:)](anybidirectionalcollection/dropfirst%28__%29.md)
- [dropLast(\_:)](anybidirectionalcollection/droplast%28__%29.md)
- [filter(\_:)](anybidirectionalcollection/filter%28__%29.md)
- [forEach(\_:)](anybidirectionalcollection/foreach%28__%29.md)
- [formIndex(\_:offsetBy:)](anybidirectionalcollection/formindex%28__offsetby_%29.md)
- [formIndex(\_:offsetBy:limitedBy:)](anybidirectionalcollection/formindex%28__offsetby_limitedby_%29.md)
- [map(\_:)](anybidirectionalcollection/map%28__%29.md)
- [prefix(\_:)](anybidirectionalcollection/prefix%28__%29.md)
- [prefix(while:)](anybidirectionalcollection/prefix%28while_%29.md)
- [suffix(\_:)](anybidirectionalcollection/suffix%28__%29.md)

### Default Implementations

- [BidirectionalCollection Implementations](anybidirectionalcollection/bidirectionalcollection-implementations.md)
- [Collection Implementations](anybidirectionalcollection/collection-implementations.md)
- [Sequence Implementations](anybidirectionalcollection/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sequence](sequence.md)

## See Also

### Type-Erasing Wrappers

- [AnySequence](anysequence.md): A type-erased sequence.
- [AnyCollection](anycollection.md): A type-erased wrapper over any collection with indices that support forward traversal.
- [AnyRandomAccessCollection](anyrandomaccesscollection.md): A type-erased wrapper over any collection with indices that support random access traversal.
- [AnyIterator](anyiterator.md): A type-erased iterator of `Element`.
- [AnyIndex](anyindex.md): A wrapper over an underlying index that hides the specific underlying type.
- [AnyHashable](anyhashable.md): A type-erased hashable value.
