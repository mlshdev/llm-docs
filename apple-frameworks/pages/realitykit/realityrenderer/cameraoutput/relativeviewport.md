> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/cameraoutput/relativeviewport](https://developer.apple.com/documentation/realitykit/realityrenderer/cameraoutput/relativeviewport)

# RealityRenderer.CameraOutput.RelativeViewport

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Structure defining a viewport for rendering with a camera.

## Declaration

```swift
struct RelativeViewport
```

<a id="overview"></a>

## Overview

The units are relative to output texture size. To map normalized-device coordinates to the whole texture:

```swift
viewport = RealityRenderer.CameraOutput.RelativeViewport(originX: 0.0, originY: 0.0, width: 1.0, height: 1.0)
```

Assigning values more than 1.0 to [width](relativeviewport/width.md) or [height](relativeviewport/height.md) stretches the viewport in horizontal and vertical directions.

Assigning values less than 0.0 to [originX](relativeviewport/originx.md) or [originY](relativeviewport/originy.md) shifts the viewport into negative X and negative Y directions.

## Topics

### Initializers

- [init(originX:originY:width:height:)](relativeviewport/init%28originx_originy_width_height_%29.md)

### Instance Properties

- [height](relativeviewport/height.md)
- [originX](relativeviewport/originx.md)
- [originY](relativeviewport/originy.md)
- [width](relativeviewport/width.md)
