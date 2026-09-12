> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideoencoderspecification_enablelowlatencyratecontrol](https://developer.apple.com/documentation/videotoolbox/kvtvideoencoderspecification_enablelowlatencyratecontrol)

# kVTVideoEncoderSpecification_EnableLowLatencyRateControl (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Specifies to select an encoder that supports low-latency operation and enables low-latency mode.

## Declaration

```swift
let kVTVideoEncoderSpecification_EnableLowLatencyRateControl: CFString
```

<a id="Discussion"></a>

## Discussion

Low latency rate control enforces the following behaviors:

- Infinite GOP (all P frames following the beginning IDR).
- No frame reordering (B frame) or looking ahead.
- Only High profiles. The encoder sets the levels automatically.
- Temporal Layer structure.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.

# kVTVideoEncoderSpecification_EnableLowLatencyRateControl (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

Specifies to select an encoder that supports low-latency operation and enables low-latency mode.

## Declaration

```objectivec
extern CFStringRef const kVTVideoEncoderSpecification_EnableLowLatencyRateControl;
```

<a id="Discussion"></a>

## Discussion

Low latency rate control enforces the following behaviors:

- Infinite GOP (all P frames following the beginning IDR).
- No frame reordering (B frame) or looking ahead.
- Only High profiles. The encoder sets the levels automatically.
- Temporal Layer structure.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.
