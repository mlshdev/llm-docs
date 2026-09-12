> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder](https://developer.apple.com/documentation/videotoolbox/kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder)

# kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.

## Declaration

```swift
let kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder: CFString
```

<a id="Discussion"></a>

## Discussion

This key is set in the `encoderSpecification` passed in to [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to allow hardware-accelerated encoding.  To specifically prevent hardware encoding, set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

This setting is useful for clients doing realtime encoding operations because it allows VideoToolbox to choose the optimal encoding path.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.

# kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.

## Declaration

```objectivec
extern CFStringRef const kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder;
```

<a id="Discussion"></a>

## Discussion

This key is set in the `encoderSpecification` passed in to [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to allow hardware-accelerated encoding.  To specifically prevent hardware encoding, set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md).

This setting is useful for clients doing realtime encoding operations because it allows VideoToolbox to choose the optimal encoding path.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated encoding is required.
