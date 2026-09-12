> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpable](https://developer.apple.com/documentation/spritekit/skwarpable)

# SKWarpable (Swift)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol for objects that can be warped and animated by an [SKWarpGeometry](skwarpgeometry.md).

## Declaration

```swift
protocol SKWarpable : NSObjectProtocol
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

## Topics

### Instance Properties

- [subdivisionLevels](skwarpable/subdivisionlevels.md): The maximum number of subdivision iterations used to generate the final vertices.
- [warpGeometry](skwarpable/warpgeometry.md): The warp geometry used to define the distortion.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SKEffectNode](skeffectnode.md)
- [SKScene](skscene.md)
- [SKSpriteNode](skspritenode.md)

## See Also

### Warping

- [SKWarpGeometry](skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](skwarpable.md).
- [SKWarpGeometryGrid](skwarpgeometrygrid.md): A definition for a grid-based deformation of nodes that conform to [SKWarpable](skwarpable.md).

# SKWarpable (Objective-C)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol for objects that can be warped and animated by an [SKWarpGeometry](skwarpgeometry.md).

## Declaration

```objectivec
@protocol SKWarpable <NSObject>
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

## Topics

### Instance Properties

- [subdivisionLevels](skwarpable/subdivisionlevels.md): The maximum number of subdivision iterations used to generate the final vertices.
- [warpGeometry](skwarpable/warpgeometry.md): The warp geometry used to define the distortion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SKEffectNode](skeffectnode.md)
- [SKSpriteNode](skspritenode.md)

## See Also

### Warping

- [SKWarpGeometry](skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](skwarpable.md).
- [SKWarpGeometryGrid](skwarpgeometrygrid.md): A definition for a grid-based deformation of nodes that conform to [SKWarpable](skwarpable.md).
