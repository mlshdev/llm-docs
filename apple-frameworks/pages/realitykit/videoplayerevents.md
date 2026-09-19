> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/videoplayerevents

# VideoPlayerEvents

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Events associated with video playback for VideoPlayerComponent.

## Declaration

```swift
enum VideoPlayerEvents
```

<a id="overview"></a>

## Overview

For more information on subscribing to scene events, see `RealityKit/Scene/Event`.

## Topics

### Structures

- [VideoPlayerEvents.ContentTypeDidChange](videoplayerevents/contenttypedidchange.md): Content type changed event
- [VideoPlayerEvents.ImmersiveViewingModeDidChange](videoplayerevents/immersiveviewingmodedidchange.md)
- [VideoPlayerEvents.ImmersiveViewingModeDidTransition](videoplayerevents/immersiveviewingmodedidtransition.md)
- [VideoPlayerEvents.ImmersiveViewingModeWillTransition](videoplayerevents/immersiveviewingmodewilltransition.md)
- [VideoPlayerEvents.RenderingStatusDidChange](videoplayerevents/renderingstatusdidchange.md)
- [VideoPlayerEvents.SpatialVideoModeDidChange](videoplayerevents/spatialvideomodedidchange.md)
- [VideoPlayerEvents.VideoComfortMitigationDidOccur](videoplayerevents/videocomfortmitigationdidoccur.md): The system detects a video comfort violation and triggers the event along with the comfort mitigation action
- [VideoPlayerEvents.VideoSizeDidChange](videoplayerevents/videosizedidchange.md)
- [VideoPlayerEvents.ViewingModeDidChange](videoplayerevents/viewingmodedidchange.md)

## See Also

### Media events

- [AudioEvents](audioevents.md): Events associated with audio playback.
- [ImagePresentationEvents](imagepresentationevents.md): Events associated with viewing mode transitions for image presentation components.
