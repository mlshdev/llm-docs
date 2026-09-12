> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3d/center](https://developer.apple.com/documentation/spatial/rect3d/center)

# center (Swift)

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The center of the rectangle.

## Declaration

```swift
var center: Point3D { get }
```

## See Also

### Inspecting a 3D rectangle’s properties

- [cornerPoints](cornerpoints.md): The corner points of the rectangle.
- [max](max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [min](min.md): A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.
- [origin](origin.md): The origin of the rectangle.

# SPRect3DGetCenter (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The center of the rectangle.

## Declaration

```objectivec
static SPPoint3D SPRect3DGetCenter(SPRect3D rect);
```

## See Also

### Inspecting a 3D rectangle’s properties

- [SPRect3DGetMaximum](max.md): A point that represents the corner of the rectangle with the largest x-, y-, and z-coordinates.
- [SPRect3DGetMinimum](min.md): A point that represents the corner of the rectangle with the smallest x-, y-, and z-coordinates.
- [origin](origin.md): The origin of the rectangle.
- [size](../sprect3d/size.md): The size of the rectangle.
- [SPRect3DGetCornerPoints](../sprect3dgetcornerpoints.md): Returns the corner points of the rectangle.
