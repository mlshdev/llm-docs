> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray](https://developer.apple.com/documentation/foundation/nspointerarray)

# NSPointerArray (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to an array, but with a broader range of available memory semantics.

## Declaration

```swift
class NSPointerArray
```

<a id="overview"></a>

## Overview

The pointer array class is modeled after [NSArray](nsarray.md), but can also hold `nil` values. You can insert or remove `nil` values which contribute to the array’s [count](nspointerarray/count.md).

A pointer array can be initialized to maintain strong or weak references to objects, or according to any of the memory or personality options defined by [NSPointerFunctions.Options](nspointerfunctions/options.md).

The [NSCopying](nscopying.md) and [NSCoding](nscoding.md) protocols are applicable only when a pointer array is initialized to maintain strong or weak references to objects.

When enumerating a pointer array with [NSFastEnumeration](nsfastenumeration.md) using `for...in`, the loop will yield any `nil` values present in the array. See [Fast Enumeration Makes It Easy to Enumerate a Collection](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html#//apple_ref/doc/uid/TP40011210-CH7-SW30) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSPointerArray` is not suitable for subclassing.

## Topics

### Creating and Initializing a New Pointer Array

- [init(options:)](nspointerarray/init%28options_%29.md): Initializes the receiver to use the given options.
- [init(pointerFunctions:)](nspointerarray/init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [strongObjects()](nspointerarray/strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [weakObjects()](nspointerarray/weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.

### Managing the Collection

- [count](nspointerarray/count.md): The number of elements in the receiver.
- [allObjects](nspointerarray/allobjects.md): All the objects in the receiver.
- [pointer(at:)](nspointerarray/pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer(\_:)](nspointerarray/addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointer(at:)](nspointerarray/removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer(\_:at:)](nspointerarray/insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointer(at:withPointer:)](nspointerarray/replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact()](nspointerarray/compact%28%29.md): Removes `NULL` values from the receiver.

### Getting the Pointer Functions

- [pointerFunctions](nspointerarray/pointerfunctions.md): The functions in use by the receiver.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

### Initializers

- [init(coder:)](nspointerarray/init%28coder_%29.md)

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

- [NSMapTable](nsmaptable.md): A collection similar to a dictionary, but with a broader range of available memory semantics.
- [NSHashTable](nshashtable.md): A collection similar to a set, but with broader range of available memory semantics.

# NSPointerArray (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection similar to an array, but with a broader range of available memory semantics.

## Declaration

```objectivec
@interface NSPointerArray : NSObject
```

<a id="overview"></a>

## Overview

The pointer array class is modeled after [NSArray](nsarray.md), but can also hold `nil` values. You can insert or remove `nil` values which contribute to the array’s [count](nspointerarray/count.md).

A pointer array can be initialized to maintain strong or weak references to objects, or according to any of the memory or personality options defined by [NSPointerFunctionsOptions](nspointerfunctions/options.md).

The [NSCopying](nscopying.md) and [NSCoding](nscoding.md) protocols are applicable only when a pointer array is initialized to maintain strong or weak references to objects.

When enumerating a pointer array with [NSFastEnumeration](nsfastenumeration.md) using `for...in`, the loop will yield any `nil` values present in the array. See [Fast Enumeration Makes It Easy to Enumerate a Collection](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/FoundationTypesandCollections/FoundationTypesandCollections.html#//apple_ref/doc/uid/TP40011210-CH7-SW30) in [Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011210) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSPointerArray` is not suitable for subclassing.

## Topics

### Creating and Initializing a New Pointer Array

- [initWithOptions:](nspointerarray/init%28options_%29.md): Initializes the receiver to use the given options.
- [initWithPointerFunctions:](nspointerarray/init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [pointerArrayWithOptions:](nspointerarray/pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](nspointerarray/pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [strongObjectsPointerArray](nspointerarray/strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [pointerArrayWithStrongObjects](nspointerarray/pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](nspointerarray/weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
- [pointerArrayWithWeakObjects](nspointerarray/pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.

### Managing the Collection

- [count](nspointerarray/count.md): The number of elements in the receiver.
- [allObjects](nspointerarray/allobjects.md): All the objects in the receiver.
- [pointerAtIndex:](nspointerarray/pointer%28at_%29.md): Returns the pointer at a given index.
- [addPointer:](nspointerarray/addpointer%28__%29.md): Adds a given pointer to the receiver.
- [removePointerAtIndex:](nspointerarray/removepointer%28at_%29.md): Removes the pointer at a given index.
- [insertPointer:atIndex:](nspointerarray/insertpointer%28__at_%29.md): Inserts a pointer at a given index.
- [replacePointerAtIndex:withPointer:](nspointerarray/replacepointer%28at_withpointer_%29.md): Replaces the pointer at a given index.
- [compact](nspointerarray/compact%28%29.md): Removes `NULL` values from the receiver.

### Getting the Pointer Functions

- [pointerFunctions](nspointerarray/pointerfunctions.md): The functions in use by the receiver.
- [NSPointerFunctions](nspointerfunctions.md): An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSFastEnumeration](nsfastenumeration.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Pointer Collections

- [NSMapTable](nsmaptable.md): A collection similar to a dictionary, but with a broader range of available memory semantics.
- [NSHashTable](nshashtable.md): A collection similar to a set, but with broader range of available memory semantics.
