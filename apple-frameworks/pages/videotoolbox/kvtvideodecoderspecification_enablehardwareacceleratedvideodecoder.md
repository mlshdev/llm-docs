> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder)

# kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.

## Declaration

```swift
let kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder: CFString
```

<a id="Discussion"></a>

## Discussion

You set this key in the `decoderSpecification` passed in to [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to allow hardware-accelerated decoding.  To specifically prevent hardware-accelerated decoding, set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). This property is useful for clients doing realtime decode operations because it allows VideoToolbox to choose the optimal decoding path.

## See Also

### Hardware Acceleration

- [kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder](kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder.md): Indicates if a hardware-accelerated video decoder is being used.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.

# kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.

## Declaration

```objectivec
extern CFStringRef const kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder;
```

<a id="Discussion"></a>

## Discussion

You set this key in the `decoderSpecification` passed in to [VTDecompressionSessionCreate](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_outputcallback_decompressionsessionout_%29.md).  Set it to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to allow hardware-accelerated decoding.  To specifically prevent hardware-accelerated decoding, set this property to [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md). This property is useful for clients doing realtime decode operations because it allows VideoToolbox to choose the optimal decoding path.

## See Also

### Hardware Acceleration

- [kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder](kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder.md): Indicates if a hardware-accelerated video decoder is being used.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.
