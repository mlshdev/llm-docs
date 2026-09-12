> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/skinner](https://developer.apple.com/documentation/scenekit/scnnode/skinner)

# skinner (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The skinner object responsible for skeletal animations of node’s contents.

## Declaration

```swift
var skinner: SCNSkinner? { get set }
```

<a id="Discussion"></a>

## Discussion

A skinner object maintains an hierarchy of control nodes that can deform the node’s geometry using skeletal animations created in an external 3D authoring tool. For details, see [SCNSkinner](../scnskinner.md).

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# skinner (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The skinner object responsible for skeletal animations of node’s contents.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNSkinner * skinner;
```

<a id="Discussion"></a>

## Discussion

A skinner object maintains an hierarchy of control nodes that can deform the node’s geometry using skeletal animations created in an external 3D authoring tool. For details, see [SCNSkinner](../scnskinner.md).

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [morpher](morpher.md): The morpher object responsible for blending the node’s geometry.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
