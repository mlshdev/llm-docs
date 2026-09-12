> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable](https://developer.apple.com/documentation/foundation/nshashtable)

# NSHashTable (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to a set, but with broader range of available memory semantics.

## Declaration

```swift
class NSHashTable<ObjectType> where ObjectType : AnyObject
```

<a id="overview"></a>

## Overview

The hash table is modeled after [NSSet](nsset.md) with the following differences:

- It can hold weak references to its members.
- Its members may be copied on input or may use pointer identity for equality and hashing.
- It can contain arbitrary pointers (its members are not constrained to being objects).

You can configure an [NSHashTable](nshashtable.md) instance to operate on arbitrary pointers and not just objects, although typically you are encouraged to use the C function API for void \* pointers. The object-based API (such as [add(\_:)](nshashtable/add%28__%29.md)) will not work for non-object pointers without type-casting.

Because of its options, `NSHashTable` is not a set because it can behave differently (for example, if pointer equality is specified two `isEqual:` strings will both be entered).

When configuring hash tables, note that only the options listed in [NSHashTableOptions](nshashtableoptions.md) guarantee that the rest of the API will work correctly—including copying, archiving, and fast enumeration. While other [NSPointerFunctions](nspointerfunctions.md) options are used for certain configurations, such as to hold arbitrary pointers, not all combinations of the options are valid. With some combinations the hash table may not work correctly, or may not even be initialized correctly.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSHashTable` is not suitable for subclassing.

## Topics

### Initialization

- [init(options:capacity:)](nshashtable/init%28options_capacity_%29.md): Returns a hash table initialized with the given attributes.
- [init(pointerFunctions:capacity:)](nshashtable/init%28pointerfunctions_capacity_%29.md): Returns a hash table initialized with the given functions and capacity.

### Convenience Constructors

- [weakObjects()](nshashtable/weakobjects%28%29.md): Returns a new hash table for storing weak references to its contents.
- [init(options:)](nshashtable/init%28options_%29.md): Returns a hash table with given pointer functions options.

### Accessing Content

- [anyObject](nshashtable/anyobject.md): One of the objects in the hash table.
- [allObjects](nshashtable/allobjects.md): The hash table’s members.
- [setRepresentation](nshashtable/setrepresentation.md): A set that contains the hash table’s members.
- [count](nshashtable/count.md): The number of elements in the hash table.
- [contains(\_:)](nshashtable/contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member(\_:)](nshashtable/member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator()](nshashtable/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.

### Manipulating Membership

- [add(\_:)](nshashtable/add%28__%29.md): Adds a given object to the hash table.
- [remove(\_:)](nshashtable/remove%28__%29.md): Removes a given object from the hash table.
- [removeAllObjects()](nshashtable/removeallobjects%28%29.md): Removes all objects from the hash table.

### Comparing Hash Tables

- [intersect(\_:)](nshashtable/intersect%28__%29.md): Removes from the receiving hash table each element that isn’t a member of another given hash table.
- [intersects(\_:)](nshashtable/intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubset(of:)](nshashtable/issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.
- [isEqual(to:)](nshashtable/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.

### Set Functions

- [minus(\_:)](nshashtable/minus%28__%29.md): Removes each element in another given hash table from the receiving hash table, if present.
- [union(\_:)](nshashtable/union%28__%29.md): Adds each element in another given hash table to the receiving hash table, if not present.

### Accessing Pointer Functions

- [pointerFunctions](nshashtable/pointerfunctions.md): The pointer functions for the hash table.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

### Constants

- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

### Deprecated

- [Legacy Hash Table Implementation](legacy-hash-table-implementation.md)

### Initializers

- [init(coder:)](nshashtable/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Pointer Collections

- [NSPointerArray](nspointerarray.md): A collection similar to an array, but with a broader range of available memory semantics.
- [NSMapTable](nsmaptable.md): A collection similar to a dictionary, but with a broader range of available memory semantics.

# NSHashTable (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to a set, but with broader range of available memory semantics.

## Declaration

```objectivec
@interface NSHashTable : NSObject
```

<a id="overview"></a>

## Overview

The hash table is modeled after [NSSet](nsset.md) with the following differences:

- It can hold weak references to its members.
- Its members may be copied on input or may use pointer identity for equality and hashing.
- It can contain arbitrary pointers (its members are not constrained to being objects).

You can configure an [NSHashTable](nshashtable.md) instance to operate on arbitrary pointers and not just objects, although typically you are encouraged to use the C function API for void \* pointers. The object-based API (such as [addObject:](nshashtable/add%28__%29.md)) will not work for non-object pointers without type-casting.

Because of its options, `NSHashTable` is not a set because it can behave differently (for example, if pointer equality is specified two `isEqual:` strings will both be entered).

When configuring hash tables, note that only the options listed in [NSHashTableOptions](nshashtableoptions.md) guarantee that the rest of the API will work correctly—including copying, archiving, and fast enumeration. While other [NSPointerFunctions](nspointerfunctions.md) options are used for certain configurations, such as to hold arbitrary pointers, not all combinations of the options are valid. With some combinations the hash table may not work correctly, or may not even be initialized correctly.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSHashTable` is not suitable for subclassing.

## Topics

### Initialization

- [initWithOptions:capacity:](nshashtable/init%28options_capacity_%29.md): Returns a hash table initialized with the given attributes.
- [initWithPointerFunctions:capacity:](nshashtable/init%28pointerfunctions_capacity_%29.md): Returns a hash table initialized with the given functions and capacity.

### Convenience Constructors

- [weakObjectsHashTable](nshashtable/weakobjects%28%29.md): Returns a new hash table for storing weak references to its contents.
- [hashTableWithOptions:](nshashtable/init%28options_%29.md): Returns a hash table with given pointer functions options.

### Accessing Content

- [anyObject](nshashtable/anyobject.md): One of the objects in the hash table.
- [allObjects](nshashtable/allobjects.md): The hash table’s members.
- [setRepresentation](nshashtable/setrepresentation.md): A set that contains the hash table’s members.
- [count](nshashtable/count.md): The number of elements in the hash table.
- [containsObject:](nshashtable/contains%28__%29.md): Returns a Boolean value that indicates whether the hash table contains a given object.
- [member:](nshashtable/member%28__%29.md): Determines whether the hash table contains a given object, and returns that object if it is present
- [objectEnumerator](nshashtable/objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the hash table.

### Manipulating Membership

- [addObject:](nshashtable/add%28__%29.md): Adds a given object to the hash table.
- [removeObject:](nshashtable/remove%28__%29.md): Removes a given object from the hash table.
- [removeAllObjects](nshashtable/removeallobjects%28%29.md): Removes all objects from the hash table.

### Comparing Hash Tables

- [intersectHashTable:](nshashtable/intersect%28__%29.md): Removes from the receiving hash table each element that isn’t a member of another given hash table.
- [intersectsHashTable:](nshashtable/intersects%28__%29.md): Returns a Boolean value that indicates whether a given hash table intersects with the receiving hash table.
- [isSubsetOfHashTable:](nshashtable/issubset%28of_%29.md): Returns a Boolean value that indicates whether every element in the receiving hash table is also present in another given hash table.
- [isEqualToHashTable:](nshashtable/isequal%28to_%29.md): Returns a Boolean value that indicates whether a given hash table is equal to the receiving hash table.

### Set Functions

- [minusHashTable:](nshashtable/minus%28__%29.md): Removes each element in another given hash table from the receiving hash table, if present.
- [unionHashTable:](nshashtable/union%28__%29.md): Adds each element in another given hash table to the receiving hash table, if not present.

### Accessing Pointer Functions

- [pointerFunctions](nshashtable/pointerfunctions.md): The pointer functions for the hash table.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

### Constants

- [NSHashTableOptions](nshashtableoptions.md): Components in a bit-field to specify the behavior of elements in an [NSHashTable](nshashtable.md) object.

### Deprecated

- [hashTableWithWeakObjects](nshashtable/hashtablewithweakobjects.md): Deprecated. Returns a new hash table for storing weak references to its contents.
- [Legacy Hash Table Implementation](legacy-hash-table-implementation.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Pointer Collections

- [NSPointerArray](nspointerarray.md): A collection similar to an array, but with a broader range of available memory semantics.
- [NSMapTable](nsmaptable.md): A collection similar to a dictionary, but with a broader range of available memory semantics.
