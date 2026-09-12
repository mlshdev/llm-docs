> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnskinner/basegeometry](https://developer.apple.com/documentation/scenekit/scnskinner/basegeometry)

# baseGeometry (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry whose surface the skinner’s animation skeleton deforms.

## Declaration

```swift
var baseGeometry: SCNGeometry? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to:

- Change the appearance of a skinned model using the geometry’s materials.
- Replace the skinner’s geometry with a different model. The new model must be compatible with the skinner’s animation skeleton (that is, it must have the same number of vertices).

Because multiple skinner objects can reference the same geometry, you can use the geometry with several nodes in your scene, each with a different skinner object to pose the model in different ways.

## See Also

### Working with a Skinned Geometry

- [baseGeometryBindTransform](basegeometrybindtransform.md): The coordinate transformation for the skinner’s geometry in its default state.

# baseGeometry (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The geometry whose surface the skinner’s animation skeleton deforms.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNGeometry * baseGeometry;
```

<a id="Discussion"></a>

## Discussion

Use this property to:

- Change the appearance of a skinned model using the geometry’s materials.
- Replace the skinner’s geometry with a different model. The new model must be compatible with the skinner’s animation skeleton (that is, it must have the same number of vertices).

Because multiple skinner objects can reference the same geometry, you can use the geometry with several nodes in your scene, each with a different skinner object to pose the model in different ways.

## See Also

### Working with a Skinned Geometry

- [baseGeometryBindTransform](basegeometrybindtransform.md): The coordinate transformation for the skinner’s geometry in its default state.
