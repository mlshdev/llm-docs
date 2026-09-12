> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions](https://developer.apple.com/documentation/foundation/nspointerfunctions)

# NSPointerFunctions (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

## Declaration

```swift
class NSPointerFunctions
```

<a id="overview"></a>

## Overview

The functions specified by an instance of `NSPointerFunctions` are separated into two clusters—those that define “personality” such as “object” or “C-string”, and those that describe memory management issues such as a memory deallocation function. There are constants for common personalities and memory manager selections (see `Memory and Personality Options`).

[NSHashTable](nshashtable.md), [NSMapTable](nsmaptable.md), and [NSPointerArray](nspointerarray.md) use an `NSPointerFunctions` object to define the acquisition and retention behavior for the pointers they manage. Note, however, that not all combinations of personality and memory management behavior are valid for these collections. The pointer collection objects copy the `NSPointerFunctions` object on input and output, so you cannot usefully subclass `NSPointerFunctions`.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSPointerFunctions` is not suitable for subclassing.

## Topics

### Creating and Initializing an NSPointerFunctions Object

- [init(options:)](nspointerfunctions/init%28options_%29.md): Returns an `NSPointerFunctions` object initialized with the given options.

### Personality Functions

- [hashFunction](nspointerfunctions/hashfunction.md): The hash function.
- [isEqualFunction](nspointerfunctions/isequalfunction.md): The function used to compare pointers.
- [sizeFunction](nspointerfunctions/sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](nspointerfunctions/descriptionfunction.md): The function used to describe elements.

### Memory Configuration

- [acquireFunction](nspointerfunctions/acquirefunction.md): The function used to acquire memory.
- [relinquishFunction](nspointerfunctions/relinquishfunction.md): The function used to relinquish memory.
- [usesStrongWriteBarrier](nspointerfunctions/usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.
- [usesWeakReadAndWriteBarriers](nspointerfunctions/usesweakreadandwritebarriers.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.

### Constants

- [NSPointerFunctions.Options](nspointerfunctions/options.md): Defines the memory and personality options for an `NSPointerFunctions` object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Pointer Functions

- [pointerFunctions](nshashtable/pointerfunctions.md): The pointer functions for the hash table.

# NSPointerFunctions (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An instance of `NSPointerFunctions` defines callout functions appropriate for managing a pointer reference held somewhere else.

## Declaration

```objectivec
@interface NSPointerFunctions : NSObject
```

<a id="overview"></a>

## Overview

The functions specified by an instance of `NSPointerFunctions` are separated into two clusters—those that define “personality” such as “object” or “C-string”, and those that describe memory management issues such as a memory deallocation function. There are constants for common personalities and memory manager selections (see `Memory and Personality Options`).

[NSHashTable](nshashtable.md), [NSMapTable](nsmaptable.md), and [NSPointerArray](nspointerarray.md) use an `NSPointerFunctions` object to define the acquisition and retention behavior for the pointers they manage. Note, however, that not all combinations of personality and memory management behavior are valid for these collections. The pointer collection objects copy the `NSPointerFunctions` object on input and output, so you cannot usefully subclass `NSPointerFunctions`.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSPointerFunctions` is not suitable for subclassing.

## Topics

### Creating and Initializing an NSPointerFunctions Object

- [initWithOptions:](nspointerfunctions/init%28options_%29.md): Returns an `NSPointerFunctions` object initialized with the given options.
- [pointerFunctionsWithOptions:](nspointerfunctions/pointerfunctionswithoptions_.md): Returns a new `NSPointerFunctions` object initialized with the given options.

### Personality Functions

- [hashFunction](nspointerfunctions/hashfunction.md): The hash function.
- [isEqualFunction](nspointerfunctions/isequalfunction.md): The function used to compare pointers.
- [sizeFunction](nspointerfunctions/sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](nspointerfunctions/descriptionfunction.md): The function used to describe elements.

### Memory Configuration

- [acquireFunction](nspointerfunctions/acquirefunction.md): The function used to acquire memory.
- [relinquishFunction](nspointerfunctions/relinquishfunction.md): The function used to relinquish memory.
- [usesStrongWriteBarrier](nspointerfunctions/usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.
- [usesWeakReadAndWriteBarriers](nspointerfunctions/usesweakreadandwritebarriers.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.

### Constants

- [NSPointerFunctionsOptions](nspointerfunctions/options.md): Defines the memory and personality options for an `NSPointerFunctions` object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### Accessing Pointer Functions

- [pointerFunctions](nshashtable/pointerfunctions.md): The pointer functions for the hash table.
