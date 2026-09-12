> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anysequence](https://developer.apple.com/documentation/swift/anysequence)

# AnySequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type-erased sequence.

## Declaration

```swift
@frozen struct AnySequence<Element>
```

<a id="overview"></a>

## Overview

An instance of `AnySequence` forwards its operations to an underlying base sequence having the same `Element` type, hiding the specifics of the underlying sequence.

## Topics

### Initializers

- [init(\_:)](anysequence/init%28__%29-25934.md): Creates a sequence whose `makeIterator()` method forwards to `makeUnderlyingIterator`.
- [init(\_:)](anysequence/init%28__%29-307a9.md): Creates a new sequence that wraps and forwards operations to `base`.

### Instance Methods

- [drop(while:)](anysequence/drop%28while_%29.md)
- [dropFirst(\_:)](anysequence/dropfirst%28__%29.md)
- [dropLast(\_:)](anysequence/droplast%28__%29.md)
- [filter(\_:)](anysequence/filter%28__%29.md)
- [forEach(\_:)](anysequence/foreach%28__%29.md)
- [map(\_:)](anysequence/map%28__%29.md)
- [prefix(\_:)](anysequence/prefix%28__%29.md)
- [prefix(while:)](anysequence/prefix%28while_%29.md)
- [suffix(\_:)](anysequence/suffix%28__%29.md)

### Default Implementations

- [Sequence Implementations](anysequence/sequence-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [Sequence](sequence.md)

## See Also

### Type-Erasing Wrappers

- [AnyCollection](anycollection.md): A type-erased wrapper over any collection with indices that support forward traversal.
- [AnyBidirectionalCollection](anybidirectionalcollection.md): A type-erased wrapper over any collection with indices that support bidirectional traversal.
- [AnyRandomAccessCollection](anyrandomaccesscollection.md): A type-erased wrapper over any collection with indices that support random access traversal.
- [AnyIterator](anyiterator.md): A type-erased iterator of `Element`.
- [AnyIndex](anyindex.md): A wrapper over an underlying index that hides the specific underlying type.
- [AnyHashable](anyhashable.md): A type-erased hashable value.
