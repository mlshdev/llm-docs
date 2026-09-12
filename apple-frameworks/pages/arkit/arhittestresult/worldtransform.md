> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arhittestresult/worldtransform](https://developer.apple.com/documentation/arkit/arhittestresult/worldtransform)

# worldTransform (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The position and orientation of the result relative to the world coordinate system.

> Use raycasting

## Declaration

```swift
var worldTransform: simd_float4x4 { get }
```

<a id="Discussion"></a>

## Discussion

This transform matrix indicates the intersection point between the detected surface and the ray that created the hit-test result. A hit-test projects a 2D point in the image or view coordinate system along a ray into the 3D world space and reports results where that line intersects detected surfaces.

The session configuration’s [worldAlignment](../arconfiguration/worldalignment-swift.property.md) property defines the world coordinate system.

## See Also

### Examining Result Geometry

- [distance](distance.md): Deprecated. The distance, in meters, from the camera to the detected surface.
- [localTransform](localtransform.md): Deprecated. The position and orientation of the result relative to the nearest anchor or feature point.

# worldTransform (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0)

The position and orientation of the result relative to the world coordinate system.

> Use raycasting

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 worldTransform;
```

<a id="Discussion"></a>

## Discussion

This transform matrix indicates the intersection point between the detected surface and the ray that created the hit-test result. A hit-test projects a 2D point in the image or view coordinate system along a ray into the 3D world space and reports results where that line intersects detected surfaces.

The session configuration’s [worldAlignment](../arconfiguration/worldalignment-swift.property.md) property defines the world coordinate system.

## See Also

### Examining Result Geometry

- [distance](distance.md): Deprecated. The distance, in meters, from the camera to the detected surface.
- [localTransform](localtransform.md): Deprecated. The position and orientation of the result relative to the nearest anchor or feature point.
