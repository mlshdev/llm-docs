> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeinfoflags/skippedleadingframedropped](https://developer.apple.com/documentation/videotoolbox/vtdecodeinfoflags/skippedleadingframedropped)

# skippedLeadingFrameDropped (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.

## Declaration

```swift
static var skippedLeadingFrameDropped: VTDecodeInfoFlags { get }
```

<a id="Discussion"></a>

## Discussion

This condition occurs when you performs a seek to a sync frame, and due to frame reordering, there are leading frames following the sync frame that the system can’t decode due to missing references. Dropping these frames has no impact on playback because the nondecodeable frames won’t render.

If the system sets this flag, it sets the [frameDropped](framedropped.md) flag as well.

## See Also

### Flag values

- [asynchronous](asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [frameDropped](framedropped.md): A flag that indicates the decode operation dropped a frame.
- [imageBufferModifiable](imagebuffermodifiable.md): A flag that indicates the image buffer is safe to modify.

# kVTDecodeInfo_SkippedLeadingFrameDropped (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.

## Declaration

```objectivec
kVTDecodeInfo_SkippedLeadingFrameDropped
```

<a id="Discussion"></a>

## Discussion

This condition occurs when you performs a seek to a sync frame, and due to frame reordering, there are leading frames following the sync frame that the system can’t decode due to missing references. Dropping these frames has no impact on playback because the nondecodeable frames won’t render.

If the system sets this flag, it sets the [kVTDecodeInfo_FrameDropped](framedropped.md) flag as well.

## See Also

### Flag values

- [kVTDecodeInfo_Asynchronous](asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [kVTDecodeInfo_FrameDropped](framedropped.md): A flag that indicates the decode operation dropped a frame.
- [kVTDecodeInfo_ImageBufferModifiable](imagebuffermodifiable.md): A flag that indicates the image buffer is safe to modify.
