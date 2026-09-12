> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/morpher](https://developer.apple.com/documentation/scenekit/scnnode/morpher)

# morpher (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The morpher object responsible for blending the node’s geometry.

## Declaration

```swift
var morpher: SCNMorpher? { get set }
```

<a id="Discussion"></a>

## Discussion

You use a morpher object to interpolate between multiple geometries. For details, see [SCNMorpher](../scnmorpher.md).

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.

# morpher (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The morpher object responsible for blending the node’s geometry.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNMorpher * morpher;
```

<a id="Discussion"></a>

## Discussion

You use a morpher object to interpolate between multiple geometries. For details, see [SCNMorpher](../scnmorpher.md).

## See Also

### Managing Node Content

- [name](name.md): A name associated with the node.
- [light](light.md): The light attached to the node.
- [camera](camera.md): The camera attached to the node.
- [geometry](geometry.md): The geometry attached to the node.
- [skinner](skinner.md): The skinner object responsible for skeletal animations of node’s contents.
- [categoryBitMask](categorybitmask.md): A mask that defines which categories the node belongs to.
- [SCNBoundingVolume](../scnboundingvolume.md): Methods common to the [SCNNode](../scnnode.md) and [SCNGeometry](../scngeometry.md) classes for measuring location and size.
