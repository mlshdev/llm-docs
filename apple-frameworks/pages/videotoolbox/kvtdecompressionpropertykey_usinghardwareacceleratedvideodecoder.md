> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder](https://developer.apple.com/documentation/videotoolbox/kvtdecompressionpropertykey_usinghardwareacceleratedvideodecoder)

# kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Indicates if a hardware-accelerated video decoder is being used.

## Declaration

```swift
let kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder: CFString
```

<a id="Discussion"></a>

## Discussion

You can query this property using [VTSessionCopyProperty(\_:key:allocator:valueOut:)](vtsessioncopyproperty%28__key_allocator_valueout_%29.md) after you have enabled hardware accelerated decode using [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md) to see if a hardware accelerated decoder was selected.

## See Also

### Hardware Acceleration

- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md): A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.

# kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 1.0+

Indicates if a hardware-accelerated video decoder is being used.

## Declaration

```objectivec
extern CFStringRef const kVTDecompressionPropertyKey_UsingHardwareAcceleratedVideoDecoder;
```

<a id="Discussion"></a>

## Discussion

You can query this property using [VTSessionCopyProperty](vtsessioncopyproperty%28__key_allocator_valueout_%29.md) after you have enabled hardware accelerated decode using [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md) to see if a hardware accelerated decoder was selected.

## See Also

### Hardware Acceleration

- [kVTVideoDecoderSpecification_EnableHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_enablehardwareacceleratedvideodecoder.md): A Boolean value indicating whether VideoToolbox uses a hardware-accelerated video decoder, if available.
- [kVTVideoDecoderSpecification_RequireHardwareAcceleratedVideoDecoder](kvtvideodecoderspecification_requirehardwareacceleratedvideodecoder.md): A Boolean value indicating whether to require hardware-accelerated decoding.
