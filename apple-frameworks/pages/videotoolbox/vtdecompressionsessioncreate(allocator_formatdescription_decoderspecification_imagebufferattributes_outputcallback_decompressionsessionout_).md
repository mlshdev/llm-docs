> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessioncreate(allocator:formatdescription:decoderspecification:imagebufferattributes:outputcallback:decompressionsessionout:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncreate(allocator:formatdescription:decoderspecification:imagebufferattributes:outputcallback:decompressionsessionout:))

# VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:outputCallback:decompressionSessionOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Creates a session for decompressing video frames.

## Declaration

```swift
func VTDecompressionSessionCreate(allocator: CFAllocator?, formatDescription videoFormatDescription: CMVideoFormatDescription, decoderSpecification videoDecoderSpecification: CFDictionary?, imageBufferAttributes destinationImageBufferAttributes: CFDictionary?, outputCallback: UnsafePointer<VTDecompressionOutputCallbackRecord>?, decompressionSessionOut: UnsafeMutablePointer<VTDecompressionSession?>) -> OSStatus
```

## Parameters

- `allocator`: An allocator for the session. Pass `NULL` to use the default allocator.
- `videoFormatDescription`: The description of the source video frames.
- `videoDecoderSpecification`: The particular video decoder that must be used. Pass `NULL` to let VideoToolbox choose a decoder.
- `destinationImageBufferAttributes`: Requirements for the emitted pixel buffers. Pass `NULL` to set no requirements.
- `outputCallback`: The callback to be called with decompressed frames. Pass `NULL` only if you’ll be calling [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md) for decoding frames.
- `decompressionSessionOut`: A pointer to a variable to receive the new decompression session.

<a id="Discussion"></a>

## Discussion

Decompressed frames are emitted through calls to `outputCallback`.

## See Also

### Creating a Session

- [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:decompressionSessionOut:)](vtdecompressionsessioncreate%28allocator_formatdescription_decoderspecification_imagebufferattributes_decompressionsessionout_%29.md)

# VTDecompressionSessionCreate (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Creates a session for decompressing video frames.

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionCreate(CFAllocatorRef allocator, CMVideoFormatDescriptionRef videoFormatDescription, CFDictionaryRef videoDecoderSpecification, CFDictionaryRef destinationImageBufferAttributes, const VTDecompressionOutputCallbackRecord *outputCallback, VTDecompressionSessionRef*decompressionSessionOut);
```

## Parameters

- `allocator`: An allocator for the session. Pass `NULL` to use the default allocator.
- `videoFormatDescription`: The description of the source video frames.
- `videoDecoderSpecification`: The particular video decoder that must be used. Pass `NULL` to let VideoToolbox choose a decoder.
- `destinationImageBufferAttributes`: Requirements for the emitted pixel buffers. Pass `NULL` to set no requirements.
- `outputCallback`: The callback to be called with decompressed frames. Pass `NULL` only if you’ll be calling [VTDecompressionSessionDecodeFrameWithOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md) for decoding frames.
- `decompressionSessionOut`: A pointer to a variable to receive the new decompression session.

<a id="Discussion"></a>

## Discussion

Decompressed frames are emitted through calls to `outputCallback`.
