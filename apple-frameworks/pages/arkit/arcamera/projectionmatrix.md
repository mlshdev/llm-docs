> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/projectionmatrix](https://developer.apple.com/documentation/arkit/arcamera/projectionmatrix)

# projectionMatrix (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A transform matrix appropriate for rendering 3D content to match the image captured by the camera.

## Declaration

```swift
var projectionMatrix: simd_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

Reading this property’s value is equivalent to calling the `projectionMatrix(withViewportSize:orientation:zNear:zFar:)` method, using the camera’s [imageResolution](imageresolution.md) and [intrinsics](intrinsics.md) properties to derive size and orientation, and passing default values of `0.001` and `1000.0` for the near and far clipping planes.

## See Also

### Applying Camera Geometry

- [unprojectPoint(\_:ontoPlane:orientation:viewportSize:)](unprojectpoint%28__ontoplane_orientation_viewportsize_%29.md): Deprecated. Returns the projection of a point from the 2D space of a view rendering the scene onto a plane in the 3D world space detected by ARKit.

# projectionMatrix (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A transform matrix appropriate for rendering 3D content to match the image captured by the camera.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 projectionMatrix;
```

<a id="Discussion"></a>

## Discussion

Reading this property’s value is equivalent to calling the `projectionMatrix(withViewportSize:orientation:zNear:zFar:)` method, using the camera’s [imageResolution](imageresolution.md) and [intrinsics](intrinsics.md) properties to derive size and orientation, and passing default values of `0.001` and `1000.0` for the near and far clipping planes.

## See Also

### Applying Camera Geometry

- [unprojectPoint:ontoPlaneWithTransform:orientation:viewportSize:](unprojectpoint_ontoplanewithtransform_orientation_viewportsize_.md): Deprecated. Returns the projection of a point from the 2D space of a view rendering the scene onto a plane in the 3D world space detected by ARKit.
