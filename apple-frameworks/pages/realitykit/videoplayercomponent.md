> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent](https://developer.apple.com/documentation/realitykit/videoplayercomponent)

# VideoPlayerComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A component that supports general video-playback experience with an AV player.

## Declaration

```swift
struct VideoPlayerComponent
```

<a id="overview"></a>

## Overview

To streamline and enhance video playback controls, a video player component empowers an app to support captions, subtitles, light spill, and passthrough tinting (visionOS only). Attach a `VideoPlayerComponent` to an entity to start configuring playback controls.

The example below shows an entity with a [VideoPlayerComponent](videoplayercomponent.md) attached:

Video: videoplayercomponent-videoplaying

The following code example shows the basic setup for initializing a `VideoPlayerComponent` with an [AVPlayer](../avfoundation/avplayer.md):

```swift
// Create an entity for display.
let videoEntity = Entity()

// Create an AV player with a URL.
let player = AVPlayer(url: "PLACEMENT_URL")

// Create a video player component with the AV player.
let videoPlayerComponent = VideoPlayerComponent(avPlayer: player)

// Attach the video player component to the entity.
videoEntity.components.set(videoPlayerComponent)
```

Here are some common usage scenarios before attaching the video player component to the entity:

```swift
// Set the desired viewing mode to stereo to enable 
// stereoscopic playback of the video, if available.
videoPlayerComponent.desiredViewingMode = VideoPlaybackController.ViewingMode.stereo

// Enable passthrough tinting during video playback.
videoPlayerComponent.isPassthroughTintingEnabled = true
```

Here are a few event subscription examples for [VideoPlayerEvents](videoplayerevents.md):

```swift
RealityView { content in
    // Set up a video player component with an AV player.
    let entity = Entity()
    let player = AVPlayer(url: "PLACEMENT_URL")
    let videoPlayerComponent = VideoPlayerComponent(avPlayer: player)
    player.play()
    entity.components.set(videoPlayerComponent)

    var subscription: EventSubscription?

    // Subscribe to the video screen size change event.
    subscription = content.subscribe(to:
        VideoPlayerEvents.VideoSizeDidChange.self) { event in
        print("video size did change: \(event.videoDimension)")
    }

   // Subscribe to the current viewing mode change event.
    subscription = content.subscribe(to:
        VideoPlayerEvents.ViewingModeDidChange.self) { event in
        print("viewing mode did change: \(event.currentViewingMode)")
    }

    // Subscribe to the content type change event.
    subscription = content.subscribe(to:
        VideoPlayerEvents.ContentTypeDidChange.self) { event in
        print("content type did change: \(event.contentType.rawValue)")
    }

    content.add(entity)
}
```

<a id="Playing-immersive-video"></a>

### Playing immersive video

On visionOS, you can also use `VideoPlayerComponent` to play immersive media with RealityKit. Watch videos in a window alongside other Shared Space apps, or watch immersive video with a 180-degree field of view in a fully immersive space, or watch immersive video with a progressive view in a progressive immersive space

<a id="Playing-immersive-video-with-a-180-degree-field-of-view"></a>

### Playing immersive video with a 180-degree field of view

To play the immersive media with a 180-degree field of view, first set up a fully immersive space, and then set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to [VideoPlayerComponent.ImmersiveViewingMode.full](videoplayercomponent/immersiveviewingmode-swift.enum/full.md).

If you want to switch the immersive-viewing mode to `full` while immersive-media playback is in [VideoPlayerComponent.ImmersiveViewingMode.portal](videoplayercomponent/immersiveviewingmode-swift.enum/portal.md) mode, wait for the scene event named [VideoPlayerEvents.ImmersiveViewingModeDidChange](videoplayerevents/immersiveviewingmodedidchange.md) to trigger after you set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to `full`. Then, dismiss the window scene and open up a fully immersive space scene.

<a id="Playing-immersive-video-with-a-progressive-view"></a>

### Playing immersive video with a progressive view

To play the immersive media with a progressive view, first set up a progressive immersive space, and then set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to [VideoPlayerComponent.ImmersiveViewingMode.progressive](videoplayercomponent/immersiveviewingmode-swift.enum/progressive.md).

If you want to switch the immersive-viewing mode to `progressive` while immersive-media playback is in [VideoPlayerComponent.ImmersiveViewingMode.portal](videoplayercomponent/immersiveviewingmode-swift.enum/portal.md) mode, wait for the scene event named [VideoPlayerEvents.ImmersiveViewingModeDidChange](videoplayerevents/immersiveviewingmodedidchange.md) to trigger after you set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to `progressive`. Then, dismiss the window scene and open up a progressive immersive space scene.

<a id="Playing-immersive-video-in-a-portal-window"></a>

### Playing immersive video in a portal window

To play the immersive video in a portal window, set up a window scene in the Shared Space, and then set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to [VideoPlayerComponent.ImmersiveViewingMode.portal](videoplayercomponent/immersiveviewingmode-swift.enum/portal.md).

If you want to switch the immersive-viewing mode to `portal` while immersive-media playback is in `full` or is in `progressive` mode, wait for the scene event named [VideoPlayerEvents.ImmersiveViewingModeDidChange](videoplayerevents/immersiveviewingmodedidchange.md) to trigger after you set [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md) to `portal`. Then, dismiss the fully/progressive immersive space and open up a window scene.

<a id="Updating-the-UI-during-transitions"></a>

### Updating the UI during transitions

The system triggers scene events named [VideoPlayerEvents.ImmersiveViewingModeWillTransition](videoplayerevents/immersiveviewingmodewilltransition.md) and [VideoPlayerEvents.ImmersiveViewingModeDidTransition](videoplayerevents/immersiveviewingmodedidtransition.md) at the start and end of the immersive-viewing mode transitions, respectively. Apps can listen to these scene events to turn playback controls or other UI items on or off during transitions.

## Topics

### Creating a video player component

- [init(avPlayer:)](videoplayercomponent/init%28avplayer_%29.md): Creates a video player component from an AV player object.
- [init(videoRenderer:)](videoplayercomponent/init%28videorenderer_%29.md): Creates a video player component from a sample buffer video renderer object.

### Configuring the video player

- [isPassthroughTintingEnabled](videoplayercomponent/ispassthroughtintingenabled.md): A Boolean value that indicates whether the passthrough camera feed is tinted, emphasizing the video content.
- [desiredViewingMode](videoplayercomponent/desiredviewingmode.md): The viewer’s selected content-viewing mode.

### Accessing video player properties

- [avPlayer](videoplayercomponent/avplayer.md): The AV player that the component plays.
- [playerScreenSize](videoplayercomponent/playerscreensize.md): The screen entity size of the current video player in meters.
- [screenVideoDimension](videoplayercomponent/screenvideodimension.md): The video resolution size.
- [videoRenderer](videoplayercomponent/videorenderer.md): The component’s video renderer.
- [viewingMode](videoplayercomponent/viewingmode.md): The current content-viewing mode for video playback.

### Playing immersive media

- [desiredImmersiveViewingMode](videoplayercomponent/desiredimmersiveviewingmode.md): The viewer’s selected immersive-viewing mode.
- [immersiveViewingMode](videoplayercomponent/immersiveviewingmode-swift.property.md): The current immersive-viewing mode.

### Sizing the video portal

- [portalSize](videoplayercomponent/portalsize.md): The size of the portal window for immersive video playback, in meters.

### Instance Properties

- [currentRenderingStatus](videoplayercomponent/currentrenderingstatus.md)
- [desiredSpatialVideoMode](videoplayercomponent/desiredspatialvideomode.md): The viewer’s selected spatial video rendering mode.
- [spatialVideoMode](videoplayercomponent/spatialvideomode-swift.property.md): The currently active spatial video rendering mode.

### Enumerations

- [VideoPlayerComponent.ImmersiveViewingMode](videoplayercomponent/immersiveviewingmode-swift.enum.md): Options for viewing the video during immersive-media playback.
- [VideoPlayerComponent.RenderingStatus](videoplayercomponent/renderingstatus.md)
- [VideoPlayerComponent.SpatialVideoMode](videoplayercomponent/spatialvideomode-swift.enum.md): Spatial Videos’s rendering mode.
- [VideoPlayerComponent.VideoComfortMitigation](videoplayercomponent/videocomfortmitigation.md)

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Video player configurations

- [VideoPlayerComponent.ImmersiveViewingMode](videoplayercomponent/immersiveviewingmode-swift.enum.md): Options for viewing the video during immersive-media playback.
- [VideoMaterial](videomaterial.md): A material that supports animated textures.
- [VideoPlaybackController](videoplaybackcontroller.md): An object that controls the playback of video for a video material.
- [VideoPlaybackController.ViewingMode](videoplaybackcontroller/viewingmode.md): Options for viewing video playback.
