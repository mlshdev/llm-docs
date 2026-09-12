> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/desiredspatialvideomode](https://developer.apple.com/documentation/realitykit/videoplayercomponent/desiredspatialvideomode)

# desiredSpatialVideoMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The viewer’s selected spatial video rendering mode.

## Declaration

```swift
var desiredSpatialVideoMode: VideoPlayerComponent.SpatialVideoMode { get set }
```

<a id="discussion"></a>

## Discussion

This is the desired spatial video rendering mode that will be attempted if the content is able to support the requested mode. If the content is not spatial video then the rendering of the video will default back to screen.
