> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/iteratorsequence](https://developer.apple.com/documentation/swift/iteratorsequence)

# IteratorSequence

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A sequence built around an iterator of type `Base`.

## Declaration

```swift
@frozen struct IteratorSequence<Base> where Base : IteratorProtocol
```

<a id="overview"></a>

## Overview

Useful mostly to recover the ability to use `for`…`in`, given just an iterator `i`:

```swift
for x in IteratorSequence(i) { ... }
```

## Topics

### Initializers

- [init(\_:)](iteratorsequence/init%28__%29.md): Creates an instance whose iterator is a copy of `base`.

### Default Implementations

- [IteratorProtocol Implementations](iteratorsequence/iteratorprotocol-implementations.md)
- [Sequence Implementations](iteratorsequence/sequence-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [Escapable](escapable.md)
- [IteratorProtocol](iteratorprotocol.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Indices and Iterators

- [IndexingIterator](indexingiterator.md): A type that iterates over a collection using its indices.
- [EnumeratedIterator](enumeratediterator.md): Deprecated.
- [SetIterator](setiterator.md)
- [StrideThroughIterator](stridethroughiterator.md): An iterator for a `StrideThrough` instance.
- [StrideToIterator](stridetoiterator.md): An iterator for a `StrideTo` instance.
