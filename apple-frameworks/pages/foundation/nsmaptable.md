> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable](https://developer.apple.com/documentation/foundation/nsmaptable)

# NSMapTable (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to a dictionary, but with a broader range of available memory semantics.

## Declaration

```swift
class NSMapTable<KeyType, ObjectType> where KeyType : AnyObject, ObjectType : AnyObject
```

## Mentioned In

- [NSMapTable](legacy-nsmaptable.md)

<a id="overview"></a>

## Overview

The map table is modeled after [NSDictionary](nsdictionary.md) with the following differences:

- Keys and/or values are optionally held “weakly” such that entries are removed when one of the objects is reclaimed.
- Its keys or values may be copied on input or may use pointer identity for equality and hashing.
- It can contain arbitrary pointers (its contents are not constrained to being objects).

You can configure an [NSMapTable](nsmaptable.md) instance to operate on arbitrary pointers and not just objects, although typically you are encouraged to use the C function API for void \* pointers. The object-based API (such as [setObject(\_:forKey:)](nsmaptable/setobject%28__forkey_%29.md)) will not work for non-object pointers without type-casting.

When configuring map tables, note that only the options listed in [NSMapTableOptions](nsmaptableoptions.md) guarantee that the rest of the API will work correctly—including copying, archiving, and fast enumeration. While other [NSPointerFunctions](nspointerfunctions.md) options are used for certain configurations, such as to hold arbitrary pointers, not all combinations of the options are valid. With some combinations the map table may not work correctly, or may not even be initialized correctly.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSMapTable` is not suitable for subclassing.

## Topics

### Creating and Initializing a Map Table

- [init(keyOptions:valueOptions:capacity:)](nsmaptable/init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [init(keyOptions:valueOptions:)](nsmaptable/init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [init(keyPointerFunctions:valuePointerFunctions:capacity:)](nsmaptable/init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjects()](nsmaptable/strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjects()](nsmaptable/weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjects()](nsmaptable/strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjects()](nsmaptable/weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

### Accessing Content

- [object(forKey:)](nsmaptable/object%28forkey_%29.md): Returns a the value associated with a given key.
- [keyEnumerator()](nsmaptable/keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [objectEnumerator()](nsmaptable/objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the map table.
- [count](nsmaptable/count.md): The number of key-value pairs in the map table.

### Manipulating Content

- [setObject(\_:forKey:)](nsmaptable/setobject%28__forkey_%29.md): Adds a given key-value pair to the map table.
- [removeObject(forKey:)](nsmaptable/removeobject%28forkey_%29.md): Removes a given key and its associated value from the map table.
- [removeAllObjects()](nsmaptable/removeallobjects%28%29.md): Empties the map table of its entries.

### Creating a Dictionary Representation

- [dictionaryRepresentation()](nsmaptable/dictionaryrepresentation%28%29.md): Returns a dictionary representation of the map table.

### Accessing Pointer Functions

- [keyPointerFunctions](nsmaptable/keypointerfunctions.md): The pointer functions the map table uses to manage keys.
- [valuePointerFunctions](nsmaptable/valuepointerfunctions.md): The pointer functions the map table uses to manage values.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

### Deprecated

- [Legacy Map Table Implementation](legacy-map-table-implementation.md)

### Initializers

- [init(coder:)](nsmaptable/init%28coder_%29.md)

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
- [NSHashTable](nshashtable.md): A collection similar to a set, but with broader range of available memory semantics.

# NSMapTable (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to a dictionary, but with a broader range of available memory semantics.

## Declaration

```objectivec
@interface NSMapTable : NSObject
```

## Mentioned In

- [NSMapTable](legacy-nsmaptable.md)

<a id="overview"></a>

## Overview

The map table is modeled after [NSDictionary](nsdictionary.md) with the following differences:

- Keys and/or values are optionally held “weakly” such that entries are removed when one of the objects is reclaimed.
- Its keys or values may be copied on input or may use pointer identity for equality and hashing.
- It can contain arbitrary pointers (its contents are not constrained to being objects).

You can configure an [NSMapTable](nsmaptable.md) instance to operate on arbitrary pointers and not just objects, although typically you are encouraged to use the C function API for void \* pointers. The object-based API (such as [setObject:forKey:](nsmaptable/setobject%28__forkey_%29.md)) will not work for non-object pointers without type-casting.

When configuring map tables, note that only the options listed in [NSMapTableOptions](nsmaptableoptions.md) guarantee that the rest of the API will work correctly—including copying, archiving, and fast enumeration. While other [NSPointerFunctions](nspointerfunctions.md) options are used for certain configurations, such as to hold arbitrary pointers, not all combinations of the options are valid. With some combinations the map table may not work correctly, or may not even be initialized correctly.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSMapTable` is not suitable for subclassing.

## Topics

### Creating and Initializing a Map Table

- [initWithKeyOptions:valueOptions:capacity:](nsmaptable/init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [mapTableWithKeyOptions:valueOptions:](nsmaptable/init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [initWithKeyPointerFunctions:valuePointerFunctions:capacity:](nsmaptable/init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjectsMapTable](nsmaptable/strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjectsMapTable](nsmaptable/weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjectsMapTable](nsmaptable/strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjectsMapTable](nsmaptable/weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

### Accessing Content

- [objectForKey:](nsmaptable/object%28forkey_%29.md): Returns a the value associated with a given key.
- [keyEnumerator](nsmaptable/keyenumerator%28%29.md): Returns an enumerator object that lets you access each key in the map table.
- [objectEnumerator](nsmaptable/objectenumerator%28%29.md): Returns an enumerator object that lets you access each value in the map table.
- [count](nsmaptable/count.md): The number of key-value pairs in the map table.

### Manipulating Content

- [setObject:forKey:](nsmaptable/setobject%28__forkey_%29.md): Adds a given key-value pair to the map table.
- [removeObjectForKey:](nsmaptable/removeobject%28forkey_%29.md): Removes a given key and its associated value from the map table.
- [removeAllObjects](nsmaptable/removeallobjects%28%29.md): Empties the map table of its entries.

### Creating a Dictionary Representation

- [dictionaryRepresentation](nsmaptable/dictionaryrepresentation%28%29.md): Returns a dictionary representation of the map table.

### Accessing Pointer Functions

- [keyPointerFunctions](nsmaptable/keypointerfunctions.md): The pointer functions the map table uses to manage keys.
- [valuePointerFunctions](nsmaptable/valuepointerfunctions.md): The pointer functions the map table uses to manage values.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

### Deprecated

- [mapTableWithStrongToStrongObjects](nsmaptable/maptablewithstrongtostrongobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and values.
- [mapTableWithWeakToStrongObjects](nsmaptable/maptablewithweaktostrongobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and strong references to the values.
- [mapTableWithStrongToWeakObjects](nsmaptable/maptablewithstrongtoweakobjects.md): Deprecated. Returns a new map table object which has strong references to the keys and weak references to the values.
- [mapTableWithWeakToWeakObjects](nsmaptable/maptablewithweaktoweakobjects.md): Deprecated. Returns a new map table object which has weak references to the keys and values.
- [Legacy Map Table Implementation](legacy-map-table-implementation.md)

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
- [NSHashTable](nshashtable.md): A collection similar to a set, but with broader range of available memory semantics.
