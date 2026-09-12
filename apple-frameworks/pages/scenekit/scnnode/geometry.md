> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/geometry](https://developer.apple.com/documentation/scenekit/scnnode/geometry)

# geometry (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry attached to the node.

## Declaration

```swift
var geometry: SCNGeometry? { get set }
```

<a id="Discussion"></a>

## Discussion

A node can have only one geometry attached to it. To combine geometries so they can be controlled or animated together, create a node with no geometry and add other nodes to it.

Animating the node’s geometric properties can move, rotate, stretch and scale its geometry. For more advanced animations of a node’s geometry, use its [morpher](morpher.md) and [skinner](skinner.md) objects.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# geometry (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The geometry attached to the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNGeometry * geometry;
```

<a id="Discussion"></a>

## Discussion

A node can have only one geometry attached to it. To combine geometries so they can be controlled or animated together, create a node with no geometry and add other nodes to it.

Animating the node’s geometric properties can move, rotate, stretch and scale its geometry. For more advanced animations of a node’s geometry, use its [morpher](morpher.md) and [skinner](skinner.md) objects.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
