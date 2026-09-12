> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videomaterial/controller](https://developer.apple.com/documentation/realitykit/videomaterial/controller)

# controller

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 26.0+ · visionOS

An object that configures framework-specific video options.

## Declaration

```swift
var controller: VideoPlaybackController { get }
```

<a id="discussion"></a>

## Discussion

Use this property to configure AR-specific properties of the texture’s video, such as whether the material should use spatial audio.

The following example demonstrates enabling spatial audio for a video material:

```swift
material.controller.audioInputMode = .spatial
```

## See Also

### Controlling playback

- [avPlayer](avplayer.md): The material’s video playback controller.
