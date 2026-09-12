> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyrandomaccesscollection](https://developer.apple.com/documentation/swift/anyrandomaccesscollection)

# AnyRandomAccessCollection

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type-erased wrapper over any collection with indices that support random access traversal.

## Declaration

```swift
@frozen struct AnyRandomAccessCollection<Element>
```

<a id="overview"></a>

## Overview

An `AnyRandomAccessCollection` instance forwards its operations to a base collection having the same `Element` type, hiding the specifics of the underlying collection.

## Topics

### Initializers

- [init(\_:)](anyrandomaccesscollection/init%28__%29-1qlza.md): Creates a type-erased collection that wraps the given collection.
- [init(\_:)](anyrandomaccesscollection/init%28__%29-2j41k.md): Creates an `AnyRandomAccessCollection` having the same underlying collection as `other`.
- [init(\_:)](anyrandomaccesscollection/init%28__%29-60sab.md): Creates an `AnyRandomAccessCollection` having the same underlying collection as `other`.
- [init(\_:)](anyrandomaccesscollection/init%28__%29-66pkb.md): Creates an `AnyRandomAccessCollection` having the same underlying collection as `other`.

### Instance Methods

- [drop(while:)](anyrandomaccesscollection/drop%28while_%29.md)
- [dropFirst(\_:)](anyrandomaccesscollection/dropfirst%28__%29.md)
- [dropLast(\_:)](anyrandomaccesscollection/droplast%28__%29.md)
- [filter(\_:)](anyrandomaccesscollection/filter%28__%29.md)
- [forEach(\_:)](anyrandomaccesscollection/foreach%28__%29.md)
- [formIndex(\_:offsetBy:)](anyrandomaccesscollection/formindex%28__offsetby_%29.md)
- [formIndex(\_:offsetBy:limitedBy:)](anyrandomaccesscollection/formindex%28__offsetby_limitedby_%29.md)
- [map(\_:)](anyrandomaccesscollection/map%28__%29.md)
- [prefix(\_:)](anyrandomaccesscollection/prefix%28__%29.md)
- [prefix(while:)](anyrandomaccesscollection/prefix%28while_%29.md)
- [suffix(\_:)](anyrandomaccesscollection/suffix%28__%29.md)

### Default Implementations

- [BidirectionalCollection Implementations](anyrandomaccesscollection/bidirectionalcollection-implementations.md)
- [Collection Implementations](anyrandomaccesscollection/collection-implementations.md)
- [RandomAccessCollection Implementations](anyrandomaccesscollection/randomaccesscollection-implementations.md)
- [Sequence Implementations](anyrandomaccesscollection/sequence-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](bidirectionalcollection.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [RandomAccessCollection](randomaccesscollection.md)
- [Sequence](sequence.md)

## See Also

### Type-Erasing Wrappers

- [AnySequence](anysequence.md): A type-erased sequence.
- [AnyCollection](anycollection.md): A type-erased wrapper over any collection with indices that support forward traversal.
- [AnyBidirectionalCollection](anybidirectionalcollection.md): A type-erased wrapper over any collection with indices that support bidirectional traversal.
- [AnyIterator](anyiterator.md): A type-erased iterator of `Element`.
- [AnyIndex](anyindex.md): A wrapper over an underlying index that hides the specific underlying type.
- [AnyHashable](anyhashable.md): A type-erased hashable value.
