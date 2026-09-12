> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfeatureset](https://developer.apple.com/documentation/metal/mtlfeatureset)

# MTLFeatureSet (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The device feature sets that define specific platform, hardware, and software configurations.

> Use [MTLGPUFamily](mtlgpufamily.md) instead.

## Declaration

```swift
enum MTLFeatureSet
```

<a id="overview"></a>

## Overview

If your app is running on an operating system that supports the [supportsFamily(\_:)](mtldevice/supportsfamily%28__%29.md) method, use that method instead. See [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md) for more information about [MTLGPUFamily](mtlgpufamily.md) — the replacement for this enumeration —  and the feature set tables. This type doesn’t define constants for GPU families introduced after iOS GPU family 5.

Metal feature sets define the feature availability, implementation limits, and pixel format capabilities for each device. The table shows the GPU families and their corresponding GPU hardware.

| GPU family | GPU hardware |
| --- | --- |
| iOS GPU family 1 | Apple A7 devices |
| iOS GPU family 2 ![](https://developer.apple.com/images/com.apple.metal/spacer.png) tvOS GPU family 1 | Apple A8 devices |
| iOS GPU family 3 ![](https://developer.apple.com/images/com.apple.metal/spacer.png) tvOS GPU family 2 | Apple A9 devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Apple A10 devices |
| iOS GPU family 4 | Apple A11 devices |
| iOS GPU family 5 | Apple A12 devices |
| macOS GPU family 1 | iMac Pro models ![](https://developer.apple.com/images/com.apple.metal/spacer.png) iMac models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook models from 2015 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Pro models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Air models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Mac mini models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Mac Pro models from late 2013 |
| macOS GPU family 2 | iMac models from 2015 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Pro models from 2016 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook models from 2016 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) iMac Pro models from 2017 or later |

For more information on Mac support for Metal, see [Mac computers that support Metal](https://support.apple.com/en-us/HT205073).

## Topics

### iOS GPU family 5

- [MTLFeatureSet.iOS_GPUFamily5_v1](mtlfeatureset/ios_gpufamily5_v1.md): Deprecated. The GPU family 5, version 1 feature set for iOS.

### iOS GPU family 4

- [MTLFeatureSet.iOS_GPUFamily4_v2](mtlfeatureset/ios_gpufamily4_v2.md): Deprecated. The GPU family 4, version 2 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily4_v1](mtlfeatureset/ios_gpufamily4_v1.md): Deprecated. The GPU family 4, version 1 feature set for iOS.

### iOS GPU family 3

- [MTLFeatureSet.iOS_GPUFamily3_v4](mtlfeatureset/ios_gpufamily3_v4.md): Deprecated. The GPU family 3, version 4 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily3_v3](mtlfeatureset/ios_gpufamily3_v3.md): Deprecated. The GPU family 3, version 3 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily3_v2](mtlfeatureset/ios_gpufamily3_v2.md): Deprecated. The GPU family 3, version 2 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily3_v1](mtlfeatureset/ios_gpufamily3_v1.md): Deprecated. The GPU family 3, version 1 feature set for iOS.

### iOS GPU family 2

- [MTLFeatureSet.iOS_GPUFamily2_v5](mtlfeatureset/ios_gpufamily2_v5.md): Deprecated. The GPU family 2, version 5 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily2_v4](mtlfeatureset/ios_gpufamily2_v4.md): Deprecated. The GPU family 2, version 4 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily2_v3](mtlfeatureset/ios_gpufamily2_v3.md): Deprecated. The GPU family 2, version 3 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily2_v2](mtlfeatureset/ios_gpufamily2_v2.md): Deprecated. The GPU family 2, version 2 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily2_v1](mtlfeatureset/ios_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for iOS.

### iOS GPU family 1

- [MTLFeatureSet.iOS_GPUFamily1_v5](mtlfeatureset/ios_gpufamily1_v5.md): Deprecated. The GPU family 1, version 5 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily1_v4](mtlfeatureset/ios_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily1_v3](mtlfeatureset/ios_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily1_v2](mtlfeatureset/ios_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for iOS.
- [MTLFeatureSet.iOS_GPUFamily1_v1](mtlfeatureset/ios_gpufamily1_v1.md): Deprecated. The GPU family 1, version 1 feature set for iOS.

### tvOS GPU family 2

- [MTLFeatureSet.tvOS_GPUFamily2_v2](mtlfeatureset/tvos_gpufamily2_v2.md): Deprecated. The GPU family 2, version 2 feature set for tvOS.
- [MTLFeatureSet.tvOS_GPUFamily2_v1](mtlfeatureset/tvos_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for tvOS.

### tvOS GPU family 1

- [MTLFeatureSet.tvOS_GPUFamily1_v4](mtlfeatureset/tvos_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for tvOS.
- [MTLFeatureSet.tvOS_GPUFamily1_v3](mtlfeatureset/tvos_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for tvOS.
- [MTLFeatureSet.tvOS_GPUFamily1_v2](mtlfeatureset/tvos_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for tvOS.
- [MTLFeatureSet.tvOS_GPUFamily1_v1](mtlfeatureset/tvos_gpufamily1_v1-swift.enum.case.md): Deprecated. The GPU family 1, version 1 feature set for tvOS.

### macOS GPU family 2

- [MTLFeatureSet.macOS_GPUFamily2_v1](mtlfeatureset/macos_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for macOS.

### macOS GPU family 1

- [MTLFeatureSet.macOS_GPUFamily1_v4](mtlfeatureset/macos_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for macOS.
- [MTLFeatureSet.macOS_GPUFamily1_v3](mtlfeatureset/macos_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for macOS.
- [MTLFeatureSet.macOS_GPUFamily1_v2](mtlfeatureset/macos_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for macOS.
- [MTLFeatureSet.macOS_GPUFamily1_v1](mtlfeatureset/macos_gpufamily1_v1.md): Deprecated. The GPU family 1, version 1 feature set for macOS.

### macOS tier 2

- [MTLFeatureSet.macOS_ReadWriteTextureTier2](mtlfeatureset/macos_readwritetexturetier2.md): Deprecated. The read-write texture, tier 2 feature set for macOS.

### Initializers

- [init(rawValue:)](mtlfeatureset/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [osx_GPUFamily1_v1](mtlfeatureset/osx_gpufamily1_v1.md): Deprecated.
- [osx_GPUFamily1_v2](mtlfeatureset/osx_gpufamily1_v2.md): Deprecated.
- [osx_ReadWriteTextureTier2](mtlfeatureset/osx_readwritetexturetier2.md): Deprecated.
- [tvos_GPUFamily1_v1](mtlfeatureset/tvos_gpufamily1_v1-swift.type.property.md): Deprecated.

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
- [MTLGPUFamily](mtlgpufamily.md): Represents the functionality for families of GPUs.
- [supportsFeatureSet(\_:)](mtldevice/supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.

# MTLFeatureSet (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The device feature sets that define specific platform, hardware, and software configurations.

> Use [MTLGPUFamily](mtlgpufamily.md) instead.

## Declaration

```objectivec
enum MTLFeatureSet : NSUInteger;
```

<a id="overview"></a>

## Overview

If your app is running on an operating system that supports the [supportsFamily:](mtldevice/supportsfamily%28__%29.md) method, use that method instead. See [Detecting GPU features and Metal software versions](detecting-gpu-features-and-metal-software-versions.md) for more information about [MTLGPUFamily](mtlgpufamily.md) — the replacement for this enumeration —  and the feature set tables. This type doesn’t define constants for GPU families introduced after iOS GPU family 5.

Metal feature sets define the feature availability, implementation limits, and pixel format capabilities for each device. The table shows the GPU families and their corresponding GPU hardware.

| GPU family | GPU hardware |
| --- | --- |
| iOS GPU family 1 | Apple A7 devices |
| iOS GPU family 2 ![](https://developer.apple.com/images/com.apple.metal/spacer.png) tvOS GPU family 1 | Apple A8 devices |
| iOS GPU family 3 ![](https://developer.apple.com/images/com.apple.metal/spacer.png) tvOS GPU family 2 | Apple A9 devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Apple A10 devices |
| iOS GPU family 4 | Apple A11 devices |
| iOS GPU family 5 | Apple A12 devices |
| macOS GPU family 1 | iMac Pro models ![](https://developer.apple.com/images/com.apple.metal/spacer.png) iMac models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook models from 2015 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Pro models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Air models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Mac mini models from 2012 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Mac Pro models from late 2013 |
| macOS GPU family 2 | iMac models from 2015 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook Pro models from 2016 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) MacBook models from 2016 or later ![](https://developer.apple.com/images/com.apple.metal/spacer.png) iMac Pro models from 2017 or later |

For more information on Mac support for Metal, see [Mac computers that support Metal](https://support.apple.com/en-us/HT205073).

## Topics

### iOS GPU family 5

- [MTLFeatureSet_iOS_GPUFamily5_v1](mtlfeatureset/ios_gpufamily5_v1.md): Deprecated. The GPU family 5, version 1 feature set for iOS.

### iOS GPU family 4

- [MTLFeatureSet_iOS_GPUFamily4_v2](mtlfeatureset/ios_gpufamily4_v2.md): Deprecated. The GPU family 4, version 2 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily4_v1](mtlfeatureset/ios_gpufamily4_v1.md): Deprecated. The GPU family 4, version 1 feature set for iOS.

### iOS GPU family 3

- [MTLFeatureSet_iOS_GPUFamily3_v4](mtlfeatureset/ios_gpufamily3_v4.md): Deprecated. The GPU family 3, version 4 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily3_v3](mtlfeatureset/ios_gpufamily3_v3.md): Deprecated. The GPU family 3, version 3 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily3_v2](mtlfeatureset/ios_gpufamily3_v2.md): Deprecated. The GPU family 3, version 2 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily3_v1](mtlfeatureset/ios_gpufamily3_v1.md): Deprecated. The GPU family 3, version 1 feature set for iOS.

### iOS GPU family 2

- [MTLFeatureSet_iOS_GPUFamily2_v5](mtlfeatureset/ios_gpufamily2_v5.md): Deprecated. The GPU family 2, version 5 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily2_v4](mtlfeatureset/ios_gpufamily2_v4.md): Deprecated. The GPU family 2, version 4 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily2_v3](mtlfeatureset/ios_gpufamily2_v3.md): Deprecated. The GPU family 2, version 3 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily2_v2](mtlfeatureset/ios_gpufamily2_v2.md): Deprecated. The GPU family 2, version 2 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily2_v1](mtlfeatureset/ios_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for iOS.

### iOS GPU family 1

- [MTLFeatureSet_iOS_GPUFamily1_v5](mtlfeatureset/ios_gpufamily1_v5.md): Deprecated. The GPU family 1, version 5 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily1_v4](mtlfeatureset/ios_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily1_v3](mtlfeatureset/ios_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily1_v2](mtlfeatureset/ios_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for iOS.
- [MTLFeatureSet_iOS_GPUFamily1_v1](mtlfeatureset/ios_gpufamily1_v1.md): Deprecated. The GPU family 1, version 1 feature set for iOS.

### tvOS GPU family 2

- [MTLFeatureSet_tvOS_GPUFamily2_v2](mtlfeatureset/tvos_gpufamily2_v2.md): Deprecated. The GPU family 2, version 2 feature set for tvOS.
- [MTLFeatureSet_tvOS_GPUFamily2_v1](mtlfeatureset/tvos_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for tvOS.

### tvOS GPU family 1

- [MTLFeatureSet_tvOS_GPUFamily1_v4](mtlfeatureset/tvos_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for tvOS.
- [MTLFeatureSet_tvOS_GPUFamily1_v3](mtlfeatureset/tvos_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for tvOS.
- [MTLFeatureSet_tvOS_GPUFamily1_v2](mtlfeatureset/tvos_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for tvOS.
- [MTLFeatureSet_tvOS_GPUFamily1_v1](mtlfeatureset/tvos_gpufamily1_v1-swift.enum.case.md): Deprecated. The GPU family 1, version 1 feature set for tvOS.

### macOS GPU family 2

- [MTLFeatureSet_macOS_GPUFamily2_v1](mtlfeatureset/macos_gpufamily2_v1.md): Deprecated. The GPU family 2, version 1 feature set for macOS.

### macOS GPU family 1

- [MTLFeatureSet_macOS_GPUFamily1_v4](mtlfeatureset/macos_gpufamily1_v4.md): Deprecated. The GPU family 1, version 4 feature set for macOS.
- [MTLFeatureSet_macOS_GPUFamily1_v3](mtlfeatureset/macos_gpufamily1_v3.md): Deprecated. The GPU family 1, version 3 feature set for macOS.
- [MTLFeatureSet_macOS_GPUFamily1_v2](mtlfeatureset/macos_gpufamily1_v2.md): Deprecated. The GPU family 1, version 2 feature set for macOS.
- [MTLFeatureSet_macOS_GPUFamily1_v1](mtlfeatureset/macos_gpufamily1_v1.md): Deprecated. The GPU family 1, version 1 feature set for macOS.

### macOS tier 2

- [MTLFeatureSet_macOS_ReadWriteTextureTier2](mtlfeatureset/macos_readwritetexturetier2.md): Deprecated. The read-write texture, tier 2 feature set for macOS.

### Enumeration Cases

- [MTLFeatureSet_OSX_GPUFamily1_v1](mtlfeatureset/osx_gpufamily1_v1.md): Deprecated.
- [MTLFeatureSet_OSX_GPUFamily1_v2](mtlfeatureset/osx_gpufamily1_v2.md): Deprecated.
- [MTLFeatureSet_OSX_ReadWriteTextureTier2](mtlfeatureset/osx_readwritetexturetier2.md): Deprecated.
- [MTLFeatureSet_TVOS_GPUFamily1_v1](mtlfeatureset/tvos_gpufamily1_v1-swift.type.property.md): Deprecated.

## See Also

### Checking a GPU device’s feature support

- [supportsFamily:](mtldevice/supportsfamily%28__%29.md): Returns a Boolean value that indicates whether the GPU device supports the feature set of a specific GPU family.
- [MTLGPUFamily](mtlgpufamily.md): Represents the functionality for families of GPUs.
- [supportsFeatureSet:](mtldevice/supportsfeatureset%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the GPU device supports a specific feature set.
