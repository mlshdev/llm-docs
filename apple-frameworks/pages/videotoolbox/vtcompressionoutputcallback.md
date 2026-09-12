> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionoutputcallback](https://developer.apple.com/documentation/videotoolbox/vtcompressionoutputcallback)

# VTCompressionOutputCallback (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A callback for the system to invoke when it’s finished compressing a frame.

## Declaration

```swift
typealias VTCompressionOutputCallback = (UnsafeMutableRawPointer?, UnsafeMutableRawPointer?, OSStatus, VTEncodeInfoFlags, CMSampleBuffer?) -> Void
```

## Parameters

- `outputCallbackRefCon`: The callback’s reference value.
- `sourceFrameRefCon`: The frame’s reference value, copied from the `sourceFrameRefCon` argument to [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md).
- `status`: `noErr` if compression was successful; an error code if compression wasn’t successful.
- `infoFlags`: Contains information about the encode operation.

  The [asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode ran asynchronously.

  The [frameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped.
- `sampleBuffer`: Contains the compressed frame if compression was successful and the frame wasn’t dropped; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

When you create a compression session, you pass in a callback function to be called for compressed frames.  This function is called in decode order (which is not necessarily the same as display order).

## See Also

### Callbacks

- [VTCompressionOutputHandler](vtcompressionoutputhandler.md): A callback for the system to invoke when it’s finished compressing a frame.

# VTCompressionOutputCallback (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A callback for the system to invoke when it’s finished compressing a frame.

## Declaration

```objectivec
typedef void (*)(void *, void *, int, enum VTEncodeInfoFlags, struct opaqueCMSampleBuffer *) VTCompressionOutputCallback;
```

## Parameters

- `outputCallbackRefCon`: The callback’s reference value.
- `sourceFrameRefCon`: The frame’s reference value, copied from the `sourceFrameRefCon` argument to [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md).
- `status`: `noErr` if compression was successful; an error code if compression wasn’t successful.
- `infoFlags`: Contains information about the encode operation.

  The [kVTEncodeInfo_Asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode ran asynchronously.

  The [kVTEncodeInfo_FrameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped.
- `sampleBuffer`: Contains the compressed frame if compression was successful and the frame wasn’t dropped; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

When you create a compression session, you pass in a callback function to be called for compressed frames.  This function is called in decode order (which is not necessarily the same as display order).

## See Also

### Callbacks

- [VTCompressionOutputHandler](vtcompressionoutputhandler.md): A callback for the system to invoke when it’s finished compressing a frame.
