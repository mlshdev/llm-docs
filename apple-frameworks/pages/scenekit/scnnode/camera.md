> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/camera](https://developer.apple.com/documentation/scenekit/scnnode/camera)

# camera (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The camera attached to the node.

## Declaration

```swift
var camera: SCNCamera? { get set }
```

<a id="Discussion"></a>

## Discussion

To use a camera for displaying a scene, set the the [pointOfView](../scnscenerenderer/pointofview.md) property of the view (or layer or renderer) displaying the scene to the node containing the camera. A camera looks in the direction of the node’s negative z-axis, so you aim the camera by changing the position and orientation of the node containing it. You control geometric and optical parameters of the camera—projection, field of view, and depth of field—using the attached [SCNCamera](../scncamera.md) object.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# camera (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The camera attached to the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNCamera * camera;
```

<a id="Discussion"></a>

## Discussion

To use a camera for displaying a scene, set the the [pointOfView](../scnscenerenderer/pointofview.md) property of the view (or layer or renderer) displaying the scene to the node containing the camera. A camera looks in the direction of the node’s negative z-axis, so you aim the camera by changing the position and orientation of the node containing it. You control geometric and optical parameters of the camera—projection, field of view, and depth of field—using the attached [SCNCamera](../scncamera.md) object.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
