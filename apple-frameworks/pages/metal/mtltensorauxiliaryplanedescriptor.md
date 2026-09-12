> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplanedescriptor](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplanedescriptor)

# MTLTensorAuxiliaryPlaneDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A configuration for an auxiliary plane in a multi-plane tensor.

## Declaration

```swift
class MTLTensorAuxiliaryPlaneDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor to configure an auxiliary plane’s data type and block factors before attaching it to a [MTLTensorDescriptor](mtltensordescriptor.md).

## Topics

### Instance Properties

- [blockFactors](mtltensorauxiliaryplanedescriptor/blockfactors.md): An extents instance that represents the number of data plane elements which correspond to one element in a plane you create with this descriptor.
- [dataType](mtltensorauxiliaryplanedescriptor/datatype.md): The data format of all elements in the plane.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTLTensorAuxiliaryPlaneDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A configuration for an auxiliary plane in a multi-plane tensor.

## Declaration

```objectivec
@interface MTLTensorAuxiliaryPlaneDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Use this descriptor to configure an auxiliary plane’s data type and block factors before attaching it to a [MTLTensorDescriptor](mtltensordescriptor.md).

## Topics

### Instance Properties

- [blockFactors](mtltensorauxiliaryplanedescriptor/blockfactors.md): An extents instance that represents the number of data plane elements which correspond to one element in a plane you create with this descriptor.
- [dataType](mtltensorauxiliaryplanedescriptor/datatype.md): The data format of all elements in the plane.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
