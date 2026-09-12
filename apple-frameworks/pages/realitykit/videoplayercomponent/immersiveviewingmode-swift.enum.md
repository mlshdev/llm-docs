> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/immersiveviewingmode-swift.enum](https://developer.apple.com/documentation/realitykit/videoplayercomponent/immersiveviewingmode-swift.enum)

# VideoPlayerComponent.ImmersiveViewingMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

Options for viewing the video during immersive-media playback.

## Declaration

```swift
enum ImmersiveViewingMode
```

<a id="overview"></a>

## Overview

This applies only to immersive media types.

## Topics

### Enumeration Cases

- [VideoPlayerComponent.ImmersiveViewingMode.full](immersiveviewingmode-swift.enum/full.md): A viewing mode that renders immersive video covering the viewer’s entire field of view.
- [VideoPlayerComponent.ImmersiveViewingMode.portal](immersiveviewingmode-swift.enum/portal.md): A viewing mode that renders immersive video as a portal window matching the containing entity’s transform.
- [VideoPlayerComponent.ImmersiveViewingMode.progressive](immersiveviewingmode-swift.enum/progressive.md): A viewing mode that renders immersive video covering the viewer’s field of view(partial to full) and the percentage coverage can be controller by crown button. This is not available for Spatial Video and will be not be acknowledged if the content is Spatial

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video player configurations

- [VideoPlayerComponent](../videoplayercomponent.md): A component that supports general video-playback experience with an AV player.
- [VideoMaterial](../videomaterial.md): A material that supports animated textures.
- [VideoPlaybackController](../videoplaybackcontroller.md): An object that controls the playback of video for a video material.
- [VideoPlaybackController.ViewingMode](../videoplaybackcontroller/viewingmode.md): Options for viewing video playback.
