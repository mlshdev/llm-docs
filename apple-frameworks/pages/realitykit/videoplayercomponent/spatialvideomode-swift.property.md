> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/videoplayercomponent/spatialvideomode-swift.property

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
