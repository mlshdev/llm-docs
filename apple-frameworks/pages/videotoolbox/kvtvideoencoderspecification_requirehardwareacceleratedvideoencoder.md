> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder](https://developer.apple.com/documentation/videotoolbox/kvtvideoencoderspecification_requirehardwareacceleratedvideoencoder)

# kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether hardware-accelerated encoding is required.

## Declaration

```swift
let kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder: CFString
```

<a id="Discussion"></a>

## Discussion

This key is set in the `encoderSpecification` passed in to [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to require hardware-accelerated encoding.  If hardware acceleration is not possible, the [VTCompressionSessionCreate(allocator:width:height:codecType:encoderSpecification:imageBufferAttributes:compressedDataAllocator:outputCallback:refcon:compressionSessionOut:)](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md) call fails. Setting this key automatically implies that [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md) is enabled; there is no need to set both.

This key is useful for clients that have their own software encoding implementation or those that may need to configure software and hardware encode sessions differently. Hardware acceleration may be unavailable for a number of reasons:

- The machine does not have hardware acceleration capabilities.
- The requested encoding format or encoding configuration is not supported.
- The hardware encoding resources on the machine are busy.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)

# kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 10.9+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value indicating whether hardware-accelerated encoding is required.

## Declaration

```objectivec
extern CFStringRef const kVTVideoEncoderSpecification_RequireHardwareAcceleratedVideoEncoder;
```

<a id="Discussion"></a>

## Discussion

This key is set in the `encoderSpecification` passed in to [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to require hardware-accelerated encoding.  If hardware acceleration is not possible, the [VTCompressionSessionCreate](vtcompressionsessioncreate%28allocator_width_height_codectype_encoderspecification_imagebufferattributes_compresseddataallocator_outputcallback_refcon_compressionsessionout_%29.md) call fails. Setting this key automatically implies that [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md) is enabled; there is no need to set both.

This key is useful for clients that have their own software encoding implementation or those that may need to configure software and hardware encode sessions differently. Hardware acceleration may be unavailable for a number of reasons:

- The machine does not have hardware acceleration capabilities.
- The requested encoding format or encoding configuration is not supported.
- The hardware encoding resources on the machine are busy.

## See Also

### Encoder Selection

- [kVTCompressionPropertyKey_EncoderID](kvtcompressionpropertykey_encoderid.md): Specifies a particular video encoder by its ID string.
- [kVTVideoEncoderSpecification_EnableHardwareAcceleratedVideoEncoder](kvtvideoencoderspecification_enablehardwareacceleratedvideoencoder.md): A Boolean value indicating whether hardware-accelerated video encoding is allowed, if available.
- [kVTVideoEncoderSpecification_EnableLowLatencyRateControl](kvtvideoencoderspecification_enablelowlatencyratecontrol.md): Specifies to select an encoder that supports low-latency operation and enables low-latency mode.
- [kVTVideoEncoderSpecification_EncoderID](kvtvideoencoderspecification_encoderid.md): A key that indicates a particular video encoder to use.
- [kVTVideoEncoderSpecification_PreferredEncoderGPURegistryID](kvtvideoencoderspecification_preferredencodergpuregistryid.md)
- [kVTVideoEncoderSpecification_RequiredEncoderGPURegistryID](kvtvideoencoderspecification_requiredencodergpuregistryid.md)
