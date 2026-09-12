> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideoencoderspecification_encoderid](https://developer.apple.com/documentation/videotoolbox/kvtvideoencoderspecification_encoderid)

# kVTVideoEncoderSpecification_EncoderID (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A key that indicates a particular video encoder to use.

## Declaration

```swift
let kVTVideoEncoderSpecification_EncoderID: CFString
```

<a id="Discussion"></a>

## Discussion

To specify a particular video encoder when creating a compression session, pass an encoder specification [CFDictionary](../corefoundation/cfdictionary.md) containing this key and the encoder ID as its value. You can get the encoder ID string from the `kVTVideoEncoderList_EncoderID` entry in the array returned by [VTCopyVideoEncoderList(\_:\_:)](vtcopyvideoencoderlist%28____%29.md).

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.

# kVTVideoEncoderSpecification_EncoderID (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A key that indicates a particular video encoder to use.

## Declaration

```objectivec
extern CFStringRef const kVTVideoEncoderSpecification_EncoderID;
```

<a id="Discussion"></a>

## Discussion

To specify a particular video encoder when creating a compression session, pass an encoder specification [CFDictionaryRef](../corefoundation/cfdictionary.md) containing this key and the encoder ID as its value. You can get the encoder ID string from the `kVTVideoEncoderList_EncoderID` entry in the array returned by [VTCopyVideoEncoderList](vtcopyvideoencoderlist%28____%29.md).

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.
