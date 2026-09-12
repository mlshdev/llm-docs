> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/basegeometrybindtransform](https://developer.apple.com/documentation/scenekit/scnskinner/basegeometrybindtransform)

# baseGeometryBindTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The coordinate transformation for the skinner’s geometry in its default state.

## Declaration

```swift
var baseGeometryBindTransform: SCNMatrix4 { get set }
```

```swift
var baseGeometryBindTransform: SCNMatrix4 { get set }
```

<a id="Discussion"></a>

## Discussion

This transformation matrix converts from the geometry’s model coordinate space to that used by the animation skeleton. It should match the coordinate space in which the skeleton (the nodes in the [bones](bones.md) array) is initially defined, binding the model to its default pose.

The default value is [SCNMatrix4Identity](../scnmatrix4identity.md).

## See Also

### Working with a Skinned Geometry

- [baseGeometry](basegeometry.md): The geometry whose surface the skinner’s animation skeleton deforms.

# baseGeometryBindTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The coordinate transformation for the skinner’s geometry in its default state.

## Declaration

```objectivec
@property (nonatomic) SCNMatrix4 baseGeometryBindTransform;
```

```objectivec
@property (nonatomic) SCNMatrix4 baseGeometryBindTransform;
```

<a id="Discussion"></a>

## Discussion

This transformation matrix converts from the geometry’s model coordinate space to that used by the animation skeleton. It should match the coordinate space in which the skeleton (the nodes in the [bones](bones.md) array) is initially defined, binding the model to its default pose.

The default value is [SCNMatrix4Identity](../scnmatrix4identity.md).

## See Also

### Working with a Skinned Geometry

- [baseGeometry](basegeometry.md): The geometry whose surface the skinner’s animation skeleton deforms.
