> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivevideomask](https://developer.apple.com/documentation/immersivemediasupport/immersivevideomask)

# ImmersiveVideoMask

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A video mask to use during video rendering to smooth the edges of the mesh.

## Declaration

```swift
struct ImmersiveVideoMask
```

<a id="overview"></a>

## Overview

This type holds the generated video mask texture and its relevant information.

## Topics

### Instance Properties

- [layout](immersivevideomask/layout-swift.property.md): The layout of this mask, see [ImmersiveVideoMask.Layout](immersivevideomask/layout-swift.enum.md) for more details.
- [texture](immersivevideomask/texture.md): The mask texture ready for rendering.
- [isInEquirectangularProjection](immersivevideomask/isinequirectangularprojection.md): A Boolean value that indicates whether the generated mask texture is in equirectangular projection space. If `true`, the app renderer needs to transform vertices of the mesh to equirectangular projection space to generate UVs to access the mask texture.

### Enumerations

- [ImmersiveVideoMask.Layout](immersivevideomask/layout-swift.enum.md): A value that represents the layout of the video mask.

### Operators

- [==(\_:\_:)](immersivevideomask/==%28____%29.md): Compares two masks.

### Initializers

- [init(layout:isInEquirectangularProjection:texture:)](immersivevideomask/init%28layout_isinequirectangularprojection_texture_%29.md): Creates an immersive video mask object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Immersive video rendering support

- [ImmersiveVideoFrame](immersivevideoframe.md): A type that represents an immersive video frame, including its layout, presentation time, and pixel buffer data.
- [ImmersiveCameraViewModel](immersivecameraviewmodel.md): A view model that holds all the resources needed to render an immersive camera view.
