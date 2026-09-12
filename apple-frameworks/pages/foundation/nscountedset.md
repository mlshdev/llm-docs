> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset](https://developer.apple.com/documentation/foundation/nscountedset)

# NSCountedSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable, unordered collection of distinct objects that may appear more than once in the collection.

## Declaration

```swift
class NSCountedSet
```

<a id="overview"></a>

## Overview

Each distinct object inserted into an [NSCountedSet](nscountedset.md) object has a counter associated with it. [NSCountedSet](nscountedset.md) keeps track of the number of times objects are inserted and requires that objects be removed the same number of times. Thus, there is only one instance of an object in an [NSSet](nsset.md) object even if the object has been added to the set multiple times. The [count](nsset/count.md) method defined by the superclass [NSSet](nsset.md) has special significance; it returns the number of distinct objects, not the total number of times objects are represented in the set. The [NSSet](nsset.md) and [NSMutableSet](nsmutableset.md) classes are provided for static and dynamic sets, respectively, whose elements are distinct.

While [NSCountedSet](nscountedset.md) and [CFBag](../corefoundation/cfbag.md) are not toll-free bridged, they provide similar functionality. For more information about `CFBag`, see the [CFBag](../corefoundation/cfbag.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Because [NSCountedSet](nscountedset.md) is not a class cluster, it does not have primitive methods that provide the basis for its implementation. In general, there should be little need for subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

If you subclass [NSCountedSet](nscountedset.md), you must override any method of which you want to change the behavior.

If you change the primitive behavior of an [NSCountedSet](nscountedset.md), for instance if you change how objects are stored, you must override all of the affected methods. These include:

- [add(\_:)](nscountedset/add%28__%29.md)
- [remove(\_:)](nscountedset/remove%28__%29.md)
- [objectEnumerator()](nscountedset/objectenumerator%28%29.md)
- [count(for:)](nscountedset/count%28for_%29.md)

If you change the primitive behavior, you must also override the primitive methods of [NSSet](nsset.md) and [NSMutableSet](nsmutableset.md).

## Topics

### Initializing a Counted Set

- [init(array:)](nscountedset/init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [init(set:)](nscountedset/init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.
- [init(capacity:)](nscountedset/init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.

### Adding and Removing Entries

- [add(\_:)](nscountedset/add%28__%29.md): Adds a given object to the set.
- [remove(\_:)](nscountedset/remove%28__%29.md): Removes a given object from the set.

### Examining a Counted Set

- [count(for:)](nscountedset/count%28for_%29.md): Returns the count associated with a given object in the set.
- [objectEnumerator()](nscountedset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set once, independent of its count.

## Relationships

### Inherits From

- [NSMutableSet](nsmutableset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSMutableCopying](nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Specialized Sets

- [NSOrderedSet](nsorderedset.md): A static, ordered collection of unique objects.
- [NSMutableOrderedSet](nsmutableorderedset.md): A dynamic, ordered collection of unique objects.

# NSCountedSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A mutable, unordered collection of distinct objects that may appear more than once in the collection.

## Declaration

```objectivec
@interface NSCountedSet : NSMutableSet
```

<a id="overview"></a>

## Overview

Each distinct object inserted into an [NSCountedSet](nscountedset.md) object has a counter associated with it. [NSCountedSet](nscountedset.md) keeps track of the number of times objects are inserted and requires that objects be removed the same number of times. Thus, there is only one instance of an object in an [NSSet](nsset.md) object even if the object has been added to the set multiple times. The [count](nsset/count.md) method defined by the superclass [NSSet](nsset.md) has special significance; it returns the number of distinct objects, not the total number of times objects are represented in the set. The [NSSet](nsset.md) and [NSMutableSet](nsmutableset.md) classes are provided for static and dynamic sets, respectively, whose elements are distinct.

While [NSCountedSet](nscountedset.md) and [CFBagRef](../corefoundation/cfbag.md) are not toll-free bridged, they provide similar functionality. For more information about `CFBag`, see the [CFBagRef](../corefoundation/cfbag.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

Because [NSCountedSet](nscountedset.md) is not a class cluster, it does not have primitive methods that provide the basis for its implementation. In general, there should be little need for subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

If you subclass [NSCountedSet](nscountedset.md), you must override any method of which you want to change the behavior.

If you change the primitive behavior of an [NSCountedSet](nscountedset.md), for instance if you change how objects are stored, you must override all of the affected methods. These include:

- [addObject:](nscountedset/add%28__%29.md)
- [removeObject:](nscountedset/remove%28__%29.md)
- [objectEnumerator](nscountedset/objectenumerator%28%29.md)
- [countForObject:](nscountedset/count%28for_%29.md)

If you change the primitive behavior, you must also override the primitive methods of [NSSet](nsset.md) and [NSMutableSet](nsmutableset.md).

## Topics

### Initializing a Counted Set

- [initWithArray:](nscountedset/init%28array_%29.md): Returns a counted set object initialized with the contents of a given array.
- [initWithSet:](nscountedset/init%28set_%29.md): Returns a counted set object initialized with the contents of a given set.
- [initWithCapacity:](nscountedset/init%28capacity_%29.md): Returns a counted set object initialized with enough memory to hold a given number of objects.

### Adding and Removing Entries

- [addObject:](nscountedset/add%28__%29.md): Adds a given object to the set.
- [removeObject:](nscountedset/remove%28__%29.md): Removes a given object from the set.

### Combining and Recombining Sets

- [unionSet:](nscountedset-unionset.md): Adds each object in another given set to the receiving set, if not present.
- [minusSet:](nscountedset-minusset.md): Removes each object in another given set from the receiving set, if present.
- [intersectSet:](nscountedset-intersectset.md): Removes from the receiving set each object that isn’t a member of another given set.

### Examining a Counted Set

- [countForObject:](nscountedset/count%28for_%29.md): Returns the count associated with a given object in the set.
- [objectEnumerator](nscountedset/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the set once, independent of its count.

## Relationships

### Inherits From

- [NSMutableSet](nsmutableset.md)

## See Also

### Specialized Sets

- [NSOrderedSet](nsorderedset.md): A static, ordered collection of unique objects.
- [NSMutableOrderedSet](nsmutableorderedset.md): A dynamic, ordered collection of unique objects.
