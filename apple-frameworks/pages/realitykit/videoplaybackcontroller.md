> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplaybackcontroller](https://developer.apple.com/documentation/realitykit/videoplaybackcontroller)

# VideoPlaybackController

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 26.0+ · visionOS

An object that controls the playback of video for a video material.

## Declaration

```swift
@MainActor @preconcurrency class VideoPlaybackController
```

## Topics

### Instance Properties

- [audioInputMode](videoplaybackcontroller/audioinputmode.md): Deprecated.
- [currentImageSize](videoplaybackcontroller/currentimagesize.md): What is the width and height of currently playing video (for stereo, the width and height of each eye)? This is optional because the video may not currently be playing, or the size is otherwise not available.
- [currentViewingMode](videoplaybackcontroller/currentviewingmode.md): Is the currently playing video in mono or stereo? This is optional because the video may not currently be playing, or the mode is otherwise not available.
- [preferredViewingMode](videoplaybackcontroller/preferredviewingmode.md): Do we want to play stereo video in mono or stereo? Default is to play in stereo.
- [reverbSendLevel](videoplaybackcontroller/reverbsendlevel.md): Deprecated.

### Enumerations

- [VideoPlaybackController.ViewingMode](videoplaybackcontroller/viewingmode.md): Options for viewing video playback.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video player configurations

- [VideoPlayerComponent](videoplayercomponent.md): A component that supports general video-playback experience with an AV player.
- [VideoPlayerComponent.ImmersiveViewingMode](videoplayercomponent/immersiveviewingmode-swift.enum.md): Options for viewing the video during immersive-media playback.
- [VideoMaterial](videomaterial.md): A material that supports animated textures.
- [VideoPlaybackController.ViewingMode](videoplaybackcontroller/viewingmode.md): Options for viewing video playback.
