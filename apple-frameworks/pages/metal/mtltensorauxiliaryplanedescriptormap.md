> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplanedescriptormap](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplanedescriptormap)

# MTLTensorAuxiliaryPlaneDescriptorMap (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A map of auxiliary plane descriptors keyed by plane type.

## Declaration

```swift
class MTLTensorAuxiliaryPlaneDescriptorMap
```

<a id="overview"></a>

## Overview

Use this collection to associate [MTLTensorPlaneType](mtltensorplanetype.md) values with [MTLTensorAuxiliaryPlaneDescriptor](mtltensorauxiliaryplanedescriptor.md) configurations, then attach it to a [MTLTensorDescriptor](mtltensordescriptor.md) to create a multi-plane tensor.

## Topics

### Instance Methods

- [descriptor(for:)](mtltensorauxiliaryplanedescriptormap/descriptor%28for_%29.md): Returns the auxiliary plane descriptor for the given plane type, or `nil` if none has been set.
- [reset()](mtltensorauxiliaryplanedescriptormap/reset%28%29.md): Empties the map of all its elements.
- [setDescriptor(\_:for:)](mtltensorauxiliaryplanedescriptormap/setdescriptor%28__for_%29.md): Sets the auxiliary plane descriptor for the given plane type.

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

# MTLTensorAuxiliaryPlaneDescriptorMap (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A map of auxiliary plane descriptors keyed by plane type.

## Declaration

```objectivec
@interface MTLTensorAuxiliaryPlaneDescriptorMap : NSObject
```

<a id="overview"></a>

## Overview

Use this collection to associate [MTLTensorPlaneType](mtltensorplanetype.md) values with [MTLTensorAuxiliaryPlaneDescriptor](mtltensorauxiliaryplanedescriptor.md) configurations, then attach it to a [MTLTensorDescriptor](mtltensordescriptor.md) to create a multi-plane tensor.

## Topics

### Instance Methods

- [descriptorForPlane:](mtltensorauxiliaryplanedescriptormap/descriptor%28for_%29.md): Returns the auxiliary plane descriptor for the given plane type, or `nil` if none has been set.
- [reset](mtltensorauxiliaryplanedescriptormap/reset%28%29.md): Empties the map of all its elements.
- [setDescriptor:forPlane:](mtltensorauxiliaryplanedescriptormap/setdescriptor%28__for_%29.md): Sets the auxiliary plane descriptor for the given plane type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
