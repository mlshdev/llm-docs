> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsenumerator](https://developer.apple.com/documentation/foundation/nsenumerator)

# NSEnumerator (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.

## Declaration

```swift
class NSEnumerator
```

<a id="overview"></a>

## Overview

All creation methods are defined in the collection classes—such as [NSArray](nsarray.md), [NSSet](nsset.md), and [NSDictionary](nsdictionary.md)—which provide special [NSEnumerator](nsenumerator.md) objects with which to enumerate their contents. For example, `NSArray` has two methods that return an [NSEnumerator](nsenumerator.md) object: [objectEnumerator()](nsset/objectenumerator%28%29.md) and [reverseObjectEnumerator()](nsarray/reverseobjectenumerator%28%29.md). `NSDictionary` also has two methods that return an [NSEnumerator](nsenumerator.md) object: [keyEnumerator()](nsdictionary/keyenumerator%28%29.md) and [objectEnumerator()](nsdictionary/objectenumerator%28%29.md). These methods let you enumerate the contents of a dictionary by key or by value, respectively.

You send [nextObject()](nsenumerator/nextobject%28%29.md) repeatedly to a newly created [NSEnumerator](nsenumerator.md) object to have it return the next object in the original collection. When the collection is exhausted, `nil` is returned. You cannot “reset” an enumerator after it has exhausted its collection. To enumerate a collection again, you need a new enumerator.

The enumerator subclasses used by `NSArray`, `NSDictionary`, and `NSSet` retain the collection during enumeration. When the enumeration is exhausted, the collection is released.

> **Note**

>  In Objective-C, it is not safe to modify a mutable collection while enumerating through it. Some enumerators may currently allow enumeration of a collection that is modified, but this behavior is not guaranteed to be supported in the future.

## Topics

### Getting the Enumerated Objects

- [allObjects](nsenumerator/allobjects.md): The array of unenumerated objects.
- [nextObject()](nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Default Implementations

- [Sequence Implementations](nsenumerator/sequence-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [FileManager.DirectoryEnumerator](filemanager/directoryenumerator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Iteration

- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSFastEnumerationIterator](nsfastenumerationiterator.md)
- [NSIndexSetIterator](nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.

# NSEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class whose subclasses enumerate collections of objects, such as arrays and dictionaries.

## Declaration

```objectivec
@interface NSEnumerator : NSObject
```

<a id="overview"></a>

## Overview

All creation methods are defined in the collection classes—such as [NSArray](nsarray.md), [NSSet](nsset.md), and [NSDictionary](nsdictionary.md)—which provide special [NSEnumerator](nsenumerator.md) objects with which to enumerate their contents. For example, `NSArray` has two methods that return an [NSEnumerator](nsenumerator.md) object: [objectEnumerator](nsset/objectenumerator%28%29.md) and [reverseObjectEnumerator](nsarray/reverseobjectenumerator%28%29.md). `NSDictionary` also has two methods that return an [NSEnumerator](nsenumerator.md) object: [keyEnumerator](nsdictionary/keyenumerator%28%29.md) and [objectEnumerator](nsdictionary/objectenumerator%28%29.md). These methods let you enumerate the contents of a dictionary by key or by value, respectively.

You send [nextObject](nsenumerator/nextobject%28%29.md) repeatedly to a newly created [NSEnumerator](nsenumerator.md) object to have it return the next object in the original collection. When the collection is exhausted, `nil` is returned. You cannot “reset” an enumerator after it has exhausted its collection. To enumerate a collection again, you need a new enumerator.

The enumerator subclasses used by `NSArray`, `NSDictionary`, and `NSSet` retain the collection during enumeration. When the enumeration is exhausted, the collection is released.

> **Note**

>  In Objective-C, it is not safe to modify a mutable collection while enumerating through it. Some enumerators may currently allow enumeration of a collection that is modified, but this behavior is not guaranteed to be supported in the future.

## Topics

### Getting the Enumerated Objects

- [allObjects](nsenumerator/allobjects.md): The array of unenumerated objects.
- [nextObject](nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSDirectoryEnumerator](filemanager/directoryenumerator.md)

### Conforms To

- [NSFastEnumeration](nsfastenumeration.md)

## See Also

### Iteration

- [NSFastEnumeration](nsfastenumeration.md): A protocol that objects adopt to support fast enumeration.
- [NSEnumerationOptions](nsenumerationoptions.md): Options for block enumeration operations.
- [NSSortOptions](nssortoptions.md): Options for block sorting operations.
