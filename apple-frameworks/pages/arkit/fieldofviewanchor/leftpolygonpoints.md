> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/fieldofviewanchor/leftpolygonpoints](https://developer.apple.com/documentation/arkit/fieldofviewanchor/leftpolygonpoints)

# leftPolygonPoints

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Left eye polygon boundary points defining the preset field of view.

## Declaration

```swift
var leftPolygonPoints: [simd_float4] { get }
```

<a id="discussion"></a>

## Discussion

Each point represents a vertex of the polygon boundary, ordered to form a continuous polygon. Points are expressed in the anchor’s coordinate frame.
