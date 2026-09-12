> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprect3dgetcornerpoints](https://developer.apple.com/documentation/spatial/sprect3dgetcornerpoints)

# SPRect3DGetCornerPoints

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the corner points of the rectangle.

## Declaration

```objectivec
static void SPRect3DGetCornerPoints(SPRect3D rect, SPPoint3D points[]);
```

## See Also

### Inspecting a 3D rectangle’s properties

- [SPRect3DGetCenter](rect3d/center.md): The center of the rectangle.
- [SPRect3DGetMaximum](rect3d/max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [SPRect3DGetMinimum](rect3d/min.md): A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.
- [origin](rect3d/origin.md): The origin of the rectangle.
- [size](sprect3d/size.md): The size of the rectangle.
