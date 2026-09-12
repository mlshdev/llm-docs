> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/videoplayercomponent/spatialvideomode-swift.property](https://developer.apple.com/documentation/realitykit/videoplayercomponent/spatialvideomode-swift.property)

# spatialVideoMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The currently active spatial video rendering mode.

## Declaration

```swift
var spatialVideoMode: VideoPlayerComponent.SpatialVideoMode { get }
```

<a id="discussion"></a>

## Discussion

Determined by checking if the current video content is able to satisfy the requested desiredSpatialVideoMode
