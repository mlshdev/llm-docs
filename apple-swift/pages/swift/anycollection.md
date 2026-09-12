> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anycollection](https://developer.apple.com/documentation/swift/anycollection)

# AnyCollection

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type-erased wrapper over any collection with indices that support forward traversal.

## Declaration

```swift
@frozen struct AnyCollection<Element>
```

<a id="overview"></a>

## Overview

An `AnyCollection` instance forwards its operations to a base collection having the same `Element` type, hiding the specifics of the underlying collection.

## Topics

### Initializers

- [init(\_:)](anycollection/init%28__%29-1jdmb.md): Creates an `AnyCollection` having the same underlying collection as `other`.
- [init(\_:)](anycollection/init%28__%29-33dcu.md): Creates a type-erased collection that wraps the given collection.
- [init(\_:)](anycollection/init%28__%29-598x3.md): Creates an `AnyCollection` having the same underlying collection as `other`.
- [init(\_:)](anycollection/init%28__%29-8k2a5.md): Creates a type-erased collection that wraps the given collection.
- [init(\_:)](anycollection/init%28__%29-91xl3.md): Creates an `AnyCollection` having the same underlying collection as `other`.
- [init(\_:)](anycollection/init%28__%29-9mgej.md): Creates a type-erased collection that wraps the given collection.

### Instance Methods

- [drop(while:)](anycollection/drop%28while_%29.md)
- [dropFirst(\_:)](anycollection/dropfirst%28__%29.md)
- [dropLast(\_:)](anycollection/droplast%28__%29.md)
- [filter(\_:)](anycollection/filter%28__%29.md)
- [forEach(\_:)](anycollection/foreach%28__%29.md)
- [formIndex(\_:offsetBy:)](anycollection/formindex%28__offsetby_%29.md)
- [formIndex(\_:offsetBy:limitedBy:)](anycollection/formindex%28__offsetby_limitedby_%29.md)
- [map(\_:)](anycollection/map%28__%29.md)
- [prefix(\_:)](anycollection/prefix%28__%29.md)
- [prefix(while:)](anycollection/prefix%28while_%29.md)
- [suffix(\_:)](anycollection/suffix%28__%29.md)

### Default Implementations

- [Collection Implementations](anycollection/collection-implementations.md)
- [Sequence Implementations](anycollection/sequence-implementations.md)

## Relationships

### Conforms To

- [Collection](collection.md)
- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sequence](sequence.md)

## See Also

### Type-Erasing Wrappers

- [AnySequence](anysequence.md): A type-erased sequence.
- [AnyBidirectionalCollection](anybidirectionalcollection.md): A type-erased wrapper over any collection with indices that support bidirectional traversal.
- [AnyRandomAccessCollection](anyrandomaccesscollection.md): A type-erased wrapper over any collection with indices that support random access traversal.
- [AnyIterator](anyiterator.md): A type-erased iterator of `Element`.
- [AnyIndex](anyindex.md): A wrapper over an underlying index that hides the specific underlying type.
- [AnyHashable](anyhashable.md): A type-erased hashable value.
