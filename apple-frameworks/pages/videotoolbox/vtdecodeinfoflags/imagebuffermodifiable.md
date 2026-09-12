> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeinfoflags/imagebuffermodifiable](https://developer.apple.com/documentation/videotoolbox/vtdecodeinfoflags/imagebuffermodifiable)

# imageBufferModifiable (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that indicates the image buffer is safe to modify.

## Declaration

```swift
static var imageBufferModifiable: VTDecodeInfoFlags { get }
```

## See Also

### Flag values

- [asynchronous](asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [frameDropped](framedropped.md): A flag that indicates the decode operation dropped a frame.
- [skippedLeadingFrameDropped](skippedleadingframedropped.md): A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.

# kVTDecodeInfo_ImageBufferModifiable (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that indicates the image buffer is safe to modify.

## Declaration

```objectivec
kVTDecodeInfo_ImageBufferModifiable
```

## See Also

### Flag values

- [kVTDecodeInfo_Asynchronous](asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [kVTDecodeInfo_FrameDropped](framedropped.md): A flag that indicates the decode operation dropped a frame.
- [kVTDecodeInfo_SkippedLeadingFrameDropped](skippedleadingframedropped.md): A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.
