> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dmakeatoriginwithvector-7m66h](https://developer.apple.com/documentation/spatial/sprect3dmakeatoriginwithvector-7m66h)

# SPRect3DMakeAtOriginWithVector

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPRect3D SPRect3DMakeAtOriginWithVector(SPVector3D origin, SPVector3D size);
```

## Parameters

- `origin`: A Spatial vector that specifies the origin of the rectangle.
- `size`: A Spatial vector that specifies the size of the rectangle.

<a id="return-value"></a>

## Return Value

A new rectangle stucture.

<a id="discussion"></a>

## Discussion

Returns a rectangle at the specified origin using Spatial vectors.

## See Also

### Creating a 3D rectangle structure

- [SPRect3DMakeAtCenter](rect3d/init%28center_size_%29-133fy.md): Creates a rectangle with the specified center and the specified size from Spatial structures.
- [SPRect3DMakeAtOrigin](rect3d/init%28origin_size_%29-9a089.md): Creates a rectangle structure.
- [SPRect3DMakeAtCenterWithVector](sprect3dmakeatcenterwithvector-9118a.md): Creates a rectangle with the specified center and the specified size from double-precision vectors.
- [SPRect3DMakeAtCenterWithVector](sprect3dmakeatcenterwithvector-9doe4.md)
- [SPRect3DMakeAtOriginWithVector](sprect3dmakeatoriginwithvector-36awh.md): Creates a rectangle at the specified origin and the specified size from double-precision vectors.
- [SPRect3DMakeBoundingFromPoints](sprect3dmakeboundingfrompoints.md): Creates a rectangle that’s the bounding box of the specified points.
