> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/playerscreensize](https://developer.apple.com/documentation/realitykit/videoplayercomponent/playerscreensize)

# playerScreenSize

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The screen entity size of the current video player in meters.

## Declaration

```swift
var playerScreenSize: SIMD2<Float> { get }
```

<a id="discussion"></a>

## Discussion

This property has the format `[width, height]`.

## See Also

### Accessing video player properties

- [avPlayer](avplayer.md): The AV player that the component plays.
- [screenVideoDimension](screenvideodimension.md): The video resolution size.
- [videoRenderer](videorenderer.md): The component’s video renderer.
- [viewingMode](viewingmode.md): The current content-viewing mode for video playback.
