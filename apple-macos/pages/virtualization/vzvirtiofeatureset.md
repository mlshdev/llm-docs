> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofeatureset](https://developer.apple.com/documentation/virtualization/vzvirtiofeatureset)

# VZVirtioFeatureSet (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

Values that represent a set of Virtio feature bits.

## Declaration

```swift
class VZVirtioFeatureSet
```

<a id="overview"></a>

## Overview

A `VZVirtioFeatureSet` encapsulates the 64-bit Virtio feature set as two 32-bit subsets. The Virtio specification currently supports up to 64 feature bits, where subset0 represents bits 0 through 31 and subset1 represents bits 32 through 63.

Don’t instantiate `VZVirtioFeatureSet` directly. It’s provided through the `VZCustomVirtioDeviceConfiguration.mandatoryFeatures` and `VZCustomVirtioDeviceConfiguration.optionalFeatures` properties.

## Topics

### Instance Properties

- [subset0](vzvirtiofeatureset/subset0.md): An unsigned 32-bit integer that represents Virtio feature bits 0 through 31.
- [subset1](vzvirtiofeatureset/subset1.md): An unsigned 32-bit integer that represents Virtio feature bits 32 through 63.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md): Values that represent a set of negotiated Virtio feature bits.

### Specifying driver features

- [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md): Values that represent a set of negotiated Virtio feature bits.

# VZVirtioFeatureSet (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

Values that represent a set of Virtio feature bits.

## Declaration

```objectivec
@interface VZVirtioFeatureSet : NSObject
```

<a id="overview"></a>

## Overview

A `VZVirtioFeatureSet` encapsulates the 64-bit Virtio feature set as two 32-bit subsets. The Virtio specification currently supports up to 64 feature bits, where subset0 represents bits 0 through 31 and subset1 represents bits 32 through 63.

Don’t instantiate `VZVirtioFeatureSet` directly. It’s provided through the `VZCustomVirtioDeviceConfiguration.mandatoryFeatures` and `VZCustomVirtioDeviceConfiguration.optionalFeatures` properties.

## Topics

### Instance Properties

- [subset0](vzvirtiofeatureset/subset0.md): An unsigned 32-bit integer that represents Virtio feature bits 0 through 31.
- [subset1](vzvirtiofeatureset/subset1.md): An unsigned 32-bit integer that represents Virtio feature bits 32 through 63.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md): Values that represent a set of negotiated Virtio feature bits.

### Specifying driver features

- [VZNegotiatedVirtioFeatureSet](vznegotiatedvirtiofeatureset.md): Values that represent a set of negotiated Virtio feature bits.
