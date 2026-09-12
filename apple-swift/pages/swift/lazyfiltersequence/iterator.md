> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazyfiltersequence/iterator](https://developer.apple.com/documentation/swift/lazyfiltersequence/iterator)

# LazyFilterSequence.Iterator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An iterator over the elements traversed by some base iterator that also satisfy a given predicate.

## Declaration

```swift
@frozen struct Iterator
```

<a id="overview"></a>

## Overview

> **Note**

> This is the associated `Iterator` of `LazyFilterSequence` and `LazyFilterCollection`.

## Topics

### Instance Properties

- [base](iterator/base.md): The underlying iterator whose elements are being filtered.

### Default Implementations

- [IteratorProtocol Implementations](iterator/iteratorprotocol-implementations.md)
- [Sequence Implementations](iterator/sequence-implementations.md)

## Relationships

### Conforms To

- [Copyable](../copyable.md)
- [Escapable](../escapable.md)
- [IteratorProtocol](../iteratorprotocol.md)
- [Sequence](../sequence.md)
