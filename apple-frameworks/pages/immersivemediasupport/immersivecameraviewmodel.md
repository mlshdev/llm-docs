> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivecameraviewmodel](https://developer.apple.com/documentation/immersivemediasupport/immersivecameraviewmodel)

# ImmersiveCameraViewModel

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A view model that holds all the resources needed to render an immersive camera view.

## Declaration

```swift
struct ImmersiveCameraViewModel
```

<a id="overview"></a>

## Overview

App needs to query this type instance from [VenueDescriptor](venuedescriptor.md) instance given the immersive camera identifier.

## Topics

### Instance Properties

- [cameraID](immersivecameraviewmodel/cameraid.md): The camera identifier string of the Immersive camera associated with this view model.
- [environmentBackdrop](immersivecameraviewmodel/environmentbackdrop.md): The environment backdrop associated with the immersive camera view
- [leftEye](immersivecameraviewmodel/lefteye.md): Left eye mesh associated with the immersive camera view.
- [mask](immersivecameraviewmodel/mask.md): Generated immersive video mask associated with the immersive camera view
- [rightEye](immersivecameraviewmodel/righteye.md): Right eye mesh associated with the immersive camera view.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Immersive video rendering support

- [ImmersiveVideoFrame](immersivevideoframe.md): A type that represents an immersive video frame, including its layout, presentation time, and pixel buffer data.
- [ImmersiveVideoMask](immersivevideomask.md): A video mask to use during video rendering to smooth the edges of the mesh.
