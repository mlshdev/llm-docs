> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/maximumpolygoncount](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/customdetailspecification-swift.struct/maximumpolygoncount)

# maximumPolygonCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

The upper limit on polygons in the model mesh.

## Declaration

```swift
var maximumPolygonCount: UInt
```

<a id="discussion"></a>

## Discussion

Note: this is an upper bound to control the amount of decimation performed on complicated meshes to allow the user to target specific renderer resource budgets, and not a specification for how many polygons to use.  Specifically, for less complex models, the actual number of polygons may be significantly less than this value – the algorithm will use as many as it deems necessary (within this limit) to accurately represent the reconstructed model.
