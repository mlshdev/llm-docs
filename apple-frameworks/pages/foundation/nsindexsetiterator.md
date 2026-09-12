> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexsetiterator](https://developer.apple.com/documentation/foundation/nsindexsetiterator)

# NSIndexSetIterator

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An iterator suitable for enumerating the elements of an index set.

## Declaration

```swift
struct NSIndexSetIterator
```

<a id="overview"></a>

## Overview

You typically obtain an index set iterator by calling the [makeIterator()](nsindexset/makeiterator%28%29.md) function of an [NSIndexSet](nsindexset.md) instance.

## Relationships

### Conforms To

- [IteratorProtocol](https://developer.apple.com/documentation/swift/iteratorprotocol)

## See Also

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSFastEnumerationIterator](nsfastenumerationiterator.md)
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.
