> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlgpufamily](https://developer.apple.com/documentation/metal/mtlgpufamily)

# MTLGPUFamily (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Represents the functionality for families of GPUs.

## Declaration

```swift
enum MTLGPUFamily
```

## Mentioned In

- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md)
- [Improving your game’s graphics performance and settings](improving-your-games-graphics-performance-and-settings.md)

<a id="overview"></a>

## Overview

Check whether a GPU supports the features of a specific family by calling the [supportsFamily(\_:)](mtldevice/supportsfamily%28__%29.md) method of a GPU’s [MTLDevice](mtldevice.md) instance.

## Topics

### Checking for Metal family GPU support

- [MTLGPUFamily.metal4](mtlgpufamily/metal4.md)
- [MTLGPUFamily.metal3](mtlgpufamily/metal3.md): Represents the Metal 3 features.

### Checking for Apple family GPU support

- [MTLGPUFamily.apple9](mtlgpufamily/apple9.md): Represents the Apple family 9 GPU features that correspond to the Apple A17, M3, and M4 GPUs.
- [MTLGPUFamily.apple8](mtlgpufamily/apple8.md): Represents the Apple family 8 GPU features that correspond to the Apple A15, A16, and M2 GPUs.
- [MTLGPUFamily.apple7](mtlgpufamily/apple7.md): Represents the Apple family 7 GPU features that correspond to the Apple A14 and M1 GPUs.
- [MTLGPUFamily.apple6](mtlgpufamily/apple6.md): Represents the Apple family 6 GPU features that correspond to the Apple A13 GPUs.
- [MTLGPUFamily.apple5](mtlgpufamily/apple5.md): Represents the Apple family 5 GPU features that correspond to the Apple A12 GPUs.
- [MTLGPUFamily.apple4](mtlgpufamily/apple4.md): Represents the Apple family 4 GPU features that correspond to the Apple A11 GPUs.
- [MTLGPUFamily.apple3](mtlgpufamily/apple3.md): Represents the Apple family 3 GPU features that correspond to the Apple A9 and A10 GPUs.
- [MTLGPUFamily.apple2](mtlgpufamily/apple2.md): Represents the Apple family 2 GPU features that correspond to the Apple A8 GPUs.
- [MTLGPUFamily.apple1](mtlgpufamily/apple1.md): Represents the Apple family 1 GPU features that correspond to the Apple A7 GPUs.

### Checking for common GPU support

- [MTLGPUFamily.common3](mtlgpufamily/common3.md): Deprecated. Represents the Common family 3 GPU features.
- [MTLGPUFamily.common2](mtlgpufamily/common2.md): Deprecated. Represents the Common family 2 GPU features.
- [MTLGPUFamily.common1](mtlgpufamily/common1.md): Deprecated. Represents the Common family 1 GPU features.

### Checking for macOS family GPU support

- [MTLGPUFamily.mac2](mtlgpufamily/mac2.md): Deprecated. Represents the Mac family 2 GPU features.
- [MTLGPUFamily.mac1](mtlgpufamily/mac1.md): Deprecated. Represents the Mac family 1 GPU features.

### Checking for Mac Catalyst family GPU support

- [MTLGPUFamily.macCatalyst2](mtlgpufamily/maccatalyst2.md): Deprecated. Represents a family 2 Mac GPU when running an app you built with Mac Catalyst.
- [MTLGPUFamily.macCatalyst1](mtlgpufamily/maccatalyst1.md): Deprecated. Represents a family 1 Mac GPU when running an app you built with Mac Catalyst.

### Swift support

- [init(rawValue:)](mtlgpufamily/init%28rawvalue_%29.md): Creates a GPU family instance from a raw value.

### Enumeration Cases

- [MTLGPUFamily.apple10](mtlgpufamily/apple10.md)
- [MTLGPUFamily.apple11](mtlgpufamily/apple11.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking a GPU device’s feature support

- [supportsFamily(\_:)](mtldevice/supportsfamily%28__%29.md): Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.
- [supportsFeatureSet(\_:)](mtldevice/supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.
- [MTLFeatureSet](mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.

# MTLGPUFamily (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Represents the functionality for families of GPUs.

## Declaration

```objectivec
enum MTLGPUFamily : NSInteger;
```

## Mentioned In

- [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md)
- [Improving your game’s graphics performance and settings](improving-your-games-graphics-performance-and-settings.md)

<a id="overview"></a>

## Overview

Check whether a GPU supports the features of a specific family by calling the [supportsFamily:](mtldevice/supportsfamily%28__%29.md) method of a GPU’s [MTLDevice](mtldevice.md) instance.

## Topics

### Checking for Metal family GPU support

- [MTLGPUFamilyMetal4](mtlgpufamily/metal4.md)
- [MTLGPUFamilyMetal3](mtlgpufamily/metal3.md): Represents the Metal 3 features.

### Checking for Apple family GPU support

- [MTLGPUFamilyApple9](mtlgpufamily/apple9.md): Represents the Apple family 9 GPU features that correspond to the Apple A17, M3, and M4 GPUs.
- [MTLGPUFamilyApple8](mtlgpufamily/apple8.md): Represents the Apple family 8 GPU features that correspond to the Apple A15, A16, and M2 GPUs.
- [MTLGPUFamilyApple7](mtlgpufamily/apple7.md): Represents the Apple family 7 GPU features that correspond to the Apple A14 and M1 GPUs.
- [MTLGPUFamilyApple6](mtlgpufamily/apple6.md): Represents the Apple family 6 GPU features that correspond to the Apple A13 GPUs.
- [MTLGPUFamilyApple5](mtlgpufamily/apple5.md): Represents the Apple family 5 GPU features that correspond to the Apple A12 GPUs.
- [MTLGPUFamilyApple4](mtlgpufamily/apple4.md): Represents the Apple family 4 GPU features that correspond to the Apple A11 GPUs.
- [MTLGPUFamilyApple3](mtlgpufamily/apple3.md): Represents the Apple family 3 GPU features that correspond to the Apple A9 and A10 GPUs.
- [MTLGPUFamilyApple2](mtlgpufamily/apple2.md): Represents the Apple family 2 GPU features that correspond to the Apple A8 GPUs.
- [MTLGPUFamilyApple1](mtlgpufamily/apple1.md): Represents the Apple family 1 GPU features that correspond to the Apple A7 GPUs.

### Checking for common GPU support

- [MTLGPUFamilyCommon3](mtlgpufamily/common3.md): Deprecated. Represents the Common family 3 GPU features.
- [MTLGPUFamilyCommon2](mtlgpufamily/common2.md): Deprecated. Represents the Common family 2 GPU features.
- [MTLGPUFamilyCommon1](mtlgpufamily/common1.md): Deprecated. Represents the Common family 1 GPU features.

### Checking for macOS family GPU support

- [MTLGPUFamilyMac2](mtlgpufamily/mac2.md): Deprecated. Represents the Mac family 2 GPU features.
- [MTLGPUFamilyMac1](mtlgpufamily/mac1.md): Deprecated. Represents the Mac family 1 GPU features.

### Checking for Mac Catalyst family GPU support

- [MTLGPUFamilyMacCatalyst2](mtlgpufamily/maccatalyst2.md): Deprecated. Represents a family 2 Mac GPU when running an app you built with Mac Catalyst.
- [MTLGPUFamilyMacCatalyst1](mtlgpufamily/maccatalyst1.md): Deprecated. Represents a family 1 Mac GPU when running an app you built with Mac Catalyst.

### Enumeration Cases

- [MTLGPUFamilyApple10](mtlgpufamily/apple10.md)
- [MTLGPUFamilyApple11](mtlgpufamily/apple11.md)

## See Also

### Checking a GPU device’s feature support

- [supportsFamily:](mtldevice/supportsfamily%28__%29.md): Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.
- [supportsFeatureSet:](mtldevice/supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.
- [MTLFeatureSet](mtlfeatureset.md): Deprecated. The device feature sets that define specific platform, hardware, and software configurations.
