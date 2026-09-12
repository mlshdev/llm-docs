> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/warp(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/warp(to:duration:))

# warp(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.

## Declaration

```swift
class func warp(to warp: SKWarpGeometry, duration: TimeInterval) -> SKAction?
```

## Parameters

- `warp`: The warp geometry to distort the node to.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in the node’s current geometry should match those of the specified geometry.

## See Also

### Animate the Warping of a Node

- [animate(withWarps:times:)](animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [animate(withWarps:times:restore:)](animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.

# warpTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.

## Declaration

```objectivec
+ (SKAction *) warpTo:(SKWarpGeometry *) warp duration:(NSTimeInterval) duration;
```

## Parameters

- `warp`: The warp geometry to distort the node to.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in the node’s current geometry should match those of the specified geometry.

## See Also

### Animate the Warping of a Node

- [animateWithWarps:times:](animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [animateWithWarps:times:restore:](animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
