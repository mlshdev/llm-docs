> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/avplayer](https://developer.apple.com/documentation/realitykit/videoplayercomponent/avplayer)

# avPlayer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The AV player that the component plays.

## Declaration

```swift
var avPlayer: AVPlayer? { get }
```

<a id="discussion"></a>

## Discussion

Pass this player to the component as a parameter in the initializer; you can’t replace it afterward.

## See Also

### Accessing video player properties

- [playerScreenSize](playerscreensize.md): The screen entity size of the current video player in meters.
- [screenVideoDimension](screenvideodimension.md): The video resolution size.
- [videoRenderer](videorenderer.md): The component’s video renderer.
- [viewingMode](viewingmode.md): The current content-viewing mode for video playback.
