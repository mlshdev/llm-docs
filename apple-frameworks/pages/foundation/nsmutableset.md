> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableset](https://developer.apple.com/documentation/foundation/nsmutableset)

# NSMutableSet (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic unordered collection of unique objects.

## Declaration

```swift
class NSMutableSet
```

<a id="overview"></a>

## Overview

You can use this type in Swift instead of a [Set](https://developer.apple.com/documentation/swift/set) in cases that require reference semantics.

The `NSMutableSet` class declares the programmatic interface to a mutable, unordered collection of distinct objects.

The [NSCountedSet](nscountedset.md) class, which is a concrete subclass of `NSMutableSet`, supports mutable sets that can contain multiple instances of the same element. The [NSSet](nsset.md) class supports creating and managing immutable sets.

NSMutableSet is “toll-free bridged” with its Core Foundation counterpart, [CFMutableSet](../corefoundation/cfmutableset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should be little need of subclassing. If you need to customize behavior, it is often better to consider composition instead of subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override both of its primitive methods:

- [add(\_:)](nsmutableset/add%28__%29.md)
- [remove(\_:)](nsmutableset/remove%28__%29.md)

You must also override the primitive methods of the [NSSet](nsset.md) class.

## Topics

### Creating a mutable set

- [init(capacity:)](nsmutableset/init%28capacity_%29.md): Returns an initialized mutable set with a given initial capacity.
- [init()](nsmutableset/init%28%29.md): Initializes a newly allocated set.

### Adding and removing entries

- [add(\_:)](nsmutableset/add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [filter(using:)](nsmutableset/filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [remove(\_:)](nsmutableset/remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects()](nsmutableset/removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjects(from:)](nsmutableset/addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

### Combining and recombining sets

- [union(\_:)](nsmutableset/union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minus(\_:)](nsmutableset/minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersect(\_:)](nsmutableset/intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet(\_:)](nsmutableset/setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.

### Initializers

- [init(coder:)](nsmutableset/init%28coder_%29.md)
- [init(objects:count:)](nsmutableset/init%28objects_count_%29.md)

## Relationships

### Inherits From

- [NSSet](nsset.md)

### Inherited By

- [NSCountedSet](nscountedset.md)

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

# NSMutableSet (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dynamic unordered collection of unique objects.

## Declaration

```objectivec
@interface NSMutableSet : NSSet
```

<a id="overview"></a>

## Overview

You can use this type in Swift instead of a [Set](https://developer.apple.com/documentation/swift/set) in cases that require reference semantics.

The `NSMutableSet` class declares the programmatic interface to a mutable, unordered collection of distinct objects.

The [NSCountedSet](nscountedset.md) class, which is a concrete subclass of `NSMutableSet`, supports mutable sets that can contain multiple instances of the same element. The [NSSet](nsset.md) class supports creating and managing immutable sets.

NSMutableSet is “toll-free bridged” with its Core Foundation counterpart, [CFMutableSetRef](../corefoundation/cfmutableset.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

There should be little need of subclassing. If you need to customize behavior, it is often better to consider composition instead of subclassing.

<a id="Methods-to-Override"></a>

#### Methods to Override

In a subclass, you must override both of its primitive methods:

- [addObject:](nsmutableset/add%28__%29.md)
- [removeObject:](nsmutableset/remove%28__%29.md)

You must also override the primitive methods of the [NSSet](nsset.md) class.

## Topics

### Creating a mutable set

- [setWithCapacity:](nsmutableset/setwithcapacity_.md): Creates and returns a mutable set with a given initial capacity.
- [initWithCapacity:](nsmutableset/init%28capacity_%29.md): Returns an initialized mutable set with a given initial capacity.
- [init](nsmutableset/init%28%29.md): Initializes a newly allocated set.

### Adding and removing entries

- [addObject:](nsmutableset/add%28__%29.md): Adds a given object to the set, if it is not already a member.
- [filterUsingPredicate:](nsmutableset/filter%28using_%29.md): Evaluates a given predicate against the set’s content and removes from the set those objects for which the predicate returns false.
- [removeObject:](nsmutableset/remove%28__%29.md): Removes a given object from the set.
- [removeAllObjects](nsmutableset/removeallobjects%28%29.md): Empties the set of all of its members.
- [addObjectsFromArray:](nsmutableset/addobjects%28from_%29.md): Adds to the set each object contained in a given array that is not already a member.

### Combining and recombining sets

- [unionSet:](nsmutableset/union%28__%29.md): Adds each object in another given set to the receiving set, if not present.
- [minusSet:](nsmutableset/minus%28__%29.md): Removes each object in another given set from the receiving set, if present.
- [intersectSet:](nsmutableset/intersect%28__%29.md): Removes from the receiving set each object that isn’t a member of another given set.
- [setSet:](nsmutableset/setset%28__%29.md): Empties the receiving set, then adds each object contained in another given set.

### Instance Methods

- [initWithCoder:](nsmutableset/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSSet](nsset.md)

### Inherited By

- [NSCountedSet](nscountedset.md)

## See Also

### Basic Collections

- [NSArray](nsarray.md): A static ordered collection of objects.
- [NSMutableArray](nsmutablearray.md): A dynamic ordered collection of objects.
- [NSDictionary](nsdictionary.md): A static collection of objects associated with unique keys.
- [NSMutableDictionary](nsmutabledictionary.md): A dynamic collection of objects associated with unique keys.
- [NSSet](nsset.md): A static, unordered collection of unique objects.
