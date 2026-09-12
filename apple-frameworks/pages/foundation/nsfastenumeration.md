> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfastenumeration](https://developer.apple.com/documentation/foundation/nsfastenumeration)

# NSFastEnumeration (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that objects adopt to support fast enumeration.

## Declaration

```swift
protocol NSFastEnumeration
```

<a id="overview"></a>

## Overview

The abstract class [NSEnumerator](nsenumerator.md) provides a convenience implementation that uses [nextObject()](nsenumerator/nextobject%28%29.md) to return items one at a time.

## Topics

### Enumeration

- [countByEnumerating(with:objects:count:)](nsfastenumeration/countbyenumerating%28with_objects_count_%29.md): Returns by reference a C array of objects over which the sender should iterate, and as the return value the number of objects in the array.

### Constants

- [NSFastEnumerationState](nsfastenumerationstate.md): This defines the structure used as contextual information in the [NSFastEnumeration](nsfastenumeration.md) protocol.

## Relationships

### Conforming Types

- [FileManager.DirectoryEnumerator](filemanager/directoryenumerator.md)
- [NSArray](nsarray.md)
- [NSCountedSet](nscountedset.md)
- [NSDictionary](nsdictionary.md)
- [NSEnumerator](nsenumerator.md)
- [NSHashTable](nshashtable.md)
- [NSMapTable](nsmaptable.md)
- [NSMutableArray](nsmutablearray.md)
- [NSMutableDictionary](nsmutabledictionary.md)
- [NSMutableOrderedSet](nsmutableorderedset.md)
- [NSMutableSet](nsmutableset.md)
- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md)
- [NSOrderedSet](nsorderedset.md)
- [NSPointerArray](nspointerarray.md)
- [NSSet](nsset.md)

## See Also

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSFastEnumerationIterator](nsfastenumerationiterator.md)
- [NSIndexSetIterator](nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.

# NSFastEnumeration (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that objects adopt to support fast enumeration.

## Declaration

```objectivec
@protocol NSFastEnumeration
```

<a id="overview"></a>

## Overview

The abstract class [NSEnumerator](nsenumerator.md) provides a convenience implementation that uses [nextObject](nsenumerator/nextobject%28%29.md) to return items one at a time.

## Topics

### Enumeration

- [countByEnumeratingWithState:objects:count:](nsfastenumeration/countbyenumerating%28with_objects_count_%29.md): Returns by reference a C array of objects over which the sender should iterate, and as the return value the number of objects in the array.

### Constants

- [NSFastEnumerationState](nsfastenumerationstate.md): This defines the structure used as contextual information in the [NSFastEnumeration](nsfastenumeration.md) protocol.

## Relationships

### Conforming Types

- [NSArray](nsarray.md)
- [NSDictionary](nsdictionary.md)
- [NSEnumerator](nsenumerator.md)
- [NSHashTable](nshashtable.md)
- [NSMapTable](nsmaptable.md)
- [NSOrderedCollectionDifference](nsorderedcollectiondifference.md)
- [NSOrderedSet](nsorderedset.md)
- [NSPointerArray](nspointerarray.md)
- [NSSet](nsset.md)

## See Also

### Iteration

- [NSEnumerator](nsenumerator.md): An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.
