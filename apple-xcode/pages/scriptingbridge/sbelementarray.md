> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray](https://developer.apple.com/documentation/scriptingbridge/sbelementarray)

# SBElementArray (Swift)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

`SBElementArray` is subclass of `NSMutableArray` that manages collections of related [SBObject](sbobject.md) objects. For example, when you ask the Finder for a list of disks, or ask iTunes for a list of playlists, you get the result back as an `SBElementArray` containing Scripting Bridge objects representing those items.

## Declaration

```swift
class SBElementArray
```

<a id="overview"></a>

## Overview

`SBElementArray` defines methods beyond those of [NSArray](https://developer.apple.com/documentation/foundation/nsarray) for obtaining individual objects. In addition to [object(at:)](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29), `SBElementArray` also defines [object(withName:)](sbelementarray/object%28withname_%29.md), [object(withID:)](sbelementarray/object%28withid_%29.md), and [object(atLocation:)](sbelementarray/object%28atlocation_%29.md).

<a id="Subclassing-Notes"></a>

## Subclassing Notes

The `SBElementArray` class is not designed for subclassing.

## Topics

### Getting Objects in the Array

- [object(withName:)](sbelementarray/object%28withname_%29.md): Returns the object in the array with the given name.
- [object(withID:)](sbelementarray/object%28withid_%29.md): Returns the object in the array with the given identifier.
- [object(atLocation:)](sbelementarray/object%28atlocation_%29.md): Returns the object at the given location in the receiver.

### Getting the Referenced Array

- [get()](sbelementarray/get%28%29.md): Forces evaluation of the receiver, causing the real object to be returned immediately.

### Filtering an Element Array

- [array(byApplying:)](sbelementarray/array%28byapplying_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.
- [array(byApplying:with:)](sbelementarray/array%28byapplying_with_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.

## Relationships

### Inherits From

- [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSFastEnumeration](https://developer.apple.com/documentation/foundation/nsfastenumeration)
- [NSMutableCopying](https://developer.apple.com/documentation/foundation/nsmutablecopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

# SBElementArray (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

`SBElementArray` is subclass of `NSMutableArray` that manages collections of related [SBObject](sbobject.md) objects. For example, when you ask the Finder for a list of disks, or ask iTunes for a list of playlists, you get the result back as an `SBElementArray` containing Scripting Bridge objects representing those items.

## Declaration

```objectivec
@interface SBElementArray : NSMutableArray
```

<a id="overview"></a>

## Overview

`SBElementArray` defines methods beyond those of [NSArray](https://developer.apple.com/documentation/foundation/nsarray) for obtaining individual objects. In addition to [objectAtIndex:](https://developer.apple.com/documentation/foundation/nsarray/object%28at:%29), `SBElementArray` also defines [objectWithName:](sbelementarray/object%28withname_%29.md), [objectWithID:](sbelementarray/object%28withid_%29.md), and [objectAtLocation:](sbelementarray/object%28atlocation_%29.md).

<a id="Subclassing-Notes"></a>

## Subclassing Notes

The `SBElementArray` class is not designed for subclassing.

## Topics

### Getting Objects in the Array

- [objectWithName:](sbelementarray/object%28withname_%29.md): Returns the object in the array with the given name.
- [objectWithID:](sbelementarray/object%28withid_%29.md): Returns the object in the array with the given identifier.
- [objectAtLocation:](sbelementarray/object%28atlocation_%29.md): Returns the object at the given location in the receiver.

### Getting the Referenced Array

- [get](sbelementarray/get%28%29.md): Forces evaluation of the receiver, causing the real object to be returned immediately.

### Filtering an Element Array

- [arrayByApplyingSelector:](sbelementarray/array%28byapplying_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.
- [arrayByApplyingSelector:withObject:](sbelementarray/array%28byapplying_with_%29.md): Returns an array containing the results of sending the specified message to each object in the receiver.

## Relationships

### Inherits From

- [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray)
