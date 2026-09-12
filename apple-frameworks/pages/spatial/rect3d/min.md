> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/min](https://developer.apple.com/documentation/spatial/rect3d/min)

# min (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.

## Declaration

```swift
var min: Point3D { get }
```

## See Also

### Inspecting a 3D rectangle’s properties

- [center](center.md): The center of the rectangle.
- [cornerPoints](cornerpoints.md): The corner points of the rectangle.
- [max](max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [origin](origin.md): The origin of the rectangle.

# SPRect3DGetMinimum (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.

## Declaration

```objectivec
static SPPoint3D SPRect3DGetMinimum(SPRect3D rect);
```

## See Also

### Inspecting a 3D rectangle’s properties

- [SPRect3DGetCenter](center.md): The center of the rectangle.
- [SPRect3DGetMaximum](max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [origin](origin.md): The origin of the rectangle.
- [size](../sprect3d/size.md): The size of the rectangle.
- [SPRect3DGetCornerPoints](../sprect3dgetcornerpoints.md): Returns the corner points of the rectangle.
