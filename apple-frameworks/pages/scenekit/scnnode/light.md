> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/light](https://developer.apple.com/documentation/scenekit/scnnode/light)

# light (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The light attached to the node.

## Declaration

```swift
var light: SCNLight? { get set }
```

<a id="Discussion"></a>

## Discussion

A node can have only one light attached to it. To combine lights so they can be controlled or animated together, create a node with no light and add other nodes to it.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# light (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The light attached to the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNLight * light;
```

<a id="Discussion"></a>

## Discussion

A node can have only one light attached to it. To combine lights so they can be controlled or animated together, create a node with no light and add other nodes to it.

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
