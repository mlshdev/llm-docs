> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznegotiatedvirtiofeatureset](https://developer.apple.com/documentation/virtualization/vznegotiatedvirtiofeatureset)

# VZNegotiatedVirtioFeatureSet (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

Values that represent a set of negotiated Virtio feature bits.

## Declaration

```swift
class VZNegotiatedVirtioFeatureSet
```

<a id="overview"></a>

## Overview

A [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) represents the set of Virtio features the device and the driver have negotiated.

[VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) encapsulates the 64-bit Virtio feature set as two 32-bit subsets. The Virtio specification currently supports up to 64 feature bits, where subset0 represents bits 0 through 31 and subset1 represents bits 32 through 63.

Don’t instantiate [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) directly. Instead, first configure the device feature set through the [mandatoryFeatures](vzcustomvirtiodeviceconfiguration/mandatoryfeatures.md) and [optionalFeatures](vzcustomvirtiodeviceconfiguration/optionalfeatures.md) properties. Virtio negotiation then takes place when the guest boots and, after Virtio negotiation completes, the set of negotiated features is available in the [negotiatedFeatures](vzcustomvirtiodevice/negotiatedfeatures.md) property.

## Topics

### Instance Properties

- [subset0](vznegotiatedvirtiofeatureset/subset0.md): The values that represent feature bits 0 through 31.
- [subset1](vznegotiatedvirtiofeatureset/subset1.md): The value that represent feature bits 32 through 63.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Specifying driver features

- [VZVirtioFeatureSet](vzvirtiofeatureset.md): Values that represent a set of Virtio feature bits.

# VZNegotiatedVirtioFeatureSet (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

Values that represent a set of negotiated Virtio feature bits.

## Declaration

```objectivec
@interface VZNegotiatedVirtioFeatureSet : NSObject
```

<a id="overview"></a>

## Overview

A [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) represents the set of Virtio features the device and the driver have negotiated.

[VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) encapsulates the 64-bit Virtio feature set as two 32-bit subsets. The Virtio specification currently supports up to 64 feature bits, where subset0 represents bits 0 through 31 and subset1 represents bits 32 through 63.

Don’t instantiate [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md) directly. Instead, first configure the device feature set through the [mandatoryFeatures](vzcustomvirtiodeviceconfiguration/mandatoryfeatures.md) and [optionalFeatures](vzcustomvirtiodeviceconfiguration/optionalfeatures.md) properties. Virtio negotiation then takes place when the guest boots and, after Virtio negotiation completes, the set of negotiated features is available in the [negotiatedFeatures](vzcustomvirtiodevice/negotiatedfeatures.md) property.

## Topics

### Instance Properties

- [subset0](vznegotiatedvirtiofeatureset/subset0.md): The values that represent feature bits 0 through 31.
- [subset1](vznegotiatedvirtiofeatureset/subset1.md): The value that represent feature bits 32 through 63.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Specifying driver features

- [VZVirtioFeatureSet](vzvirtiofeatureset.md): Values that represent a set of Virtio feature bits.
