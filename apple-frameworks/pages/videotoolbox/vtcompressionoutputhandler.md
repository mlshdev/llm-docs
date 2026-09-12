> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionoutputhandler](https://developer.apple.com/documentation/videotoolbox/vtcompressionoutputhandler)

# VTCompressionOutputHandler (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

A callback for the system to invoke when it’s finished compressing a frame.

## Declaration

```swift
typealias VTCompressionOutputHandler = @Sendable (OSStatus, VTEncodeInfoFlags, CMSampleBuffer?) -> Void
```

## Parameters

- `status`: `noErr` if compression was successful; an error code if compression was not successful.
- `infoFlags`: Contains information about the encode operation.

  The [asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode ran asynchronously.

  The [frameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped.
- `sampleBuffer`: Contains the compressed frame if compression was successful and the frame was not dropped; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

When you encode a frame, you pass in a callback block to be called for that compressed frame.  This block is called in decode order (which is not necessarily the same as display order).

## See Also

### Callbacks

- [VTCompressionOutputCallback](vtcompressionoutputcallback.md): A callback for the system to invoke when it’s finished compressing a frame.

# VTCompressionOutputHandler (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

A callback for the system to invoke when it’s finished compressing a frame.

## Declaration

```objectivec
typedef void (^)(int, enum VTEncodeInfoFlags, struct opaqueCMSampleBuffer *) VTCompressionOutputHandler;
```

## Parameters

- `status`: `noErr` if compression was successful; an error code if compression was not successful.
- `infoFlags`: Contains information about the encode operation.

  The [kVTEncodeInfo_Asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode ran asynchronously.

  The [kVTEncodeInfo_FrameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped.
- `sampleBuffer`: Contains the compressed frame if compression was successful and the frame was not dropped; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

When you encode a frame, you pass in a callback block to be called for that compressed frame.  This block is called in decode order (which is not necessarily the same as display order).

## See Also

### Callbacks

- [VTCompressionOutputCallback](vtcompressionoutputcallback.md): A callback for the system to invoke when it’s finished compressing a frame.
