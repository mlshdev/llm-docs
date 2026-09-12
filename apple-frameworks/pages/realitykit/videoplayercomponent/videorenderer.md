> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/videorenderer](https://developer.apple.com/documentation/realitykit/videoplayercomponent/videorenderer)

# videoRenderer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The component’s video renderer.

## Declaration

```swift
var videoRenderer: AVSampleBufferVideoRenderer? { get }
```

<a id="discussion"></a>

## Discussion

Pass this renderer to the component as a parameter in the initializer; you can’t replace it afterward. You can’t use the same `AVSampleBufferVideoRenderer` object with more than one `VideoPlayerComponent`.

## See Also

### Accessing video player properties

- [avPlayer](avplayer.md): The AV player that the component plays.
- [playerScreenSize](playerscreensize.md): The screen entity size of the current video player in meters.
- [screenVideoDimension](screenvideodimension.md): The video resolution size.
- [viewingMode](viewingmode.md): The current content-viewing mode for video playback.
