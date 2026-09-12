> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/animate(withwarps:times:)](https://developer.apple.com/documentation/spritekit/skaction/animate(withwarps:times:))

# animate(withWarps:times:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.

## Declaration

```swift
class func animate(withWarps warps: [SKWarpGeometry], times: [NSNumber]) -> SKAction?
```

## Parameters

- `warps`: The sequence of warps to apply to the node.
- `times`: The times at which each warp distortion in the sequence should complete.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in each geometry in the sequence should match.

## See Also

### Animate the Warping of a Node

- [animate(withWarps:times:restore:)](animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [warp(to:duration:)](warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.

# animateWithWarps:times: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.

## Declaration

```objectivec
+ (SKAction *) animateWithWarps:(NSArray<SKWarpGeometry *> *) warps times:(NSArray<NSNumber *> *) times;
```

## Parameters

- `warps`: The sequence of warps to apply to the node.
- `times`: The times at which each warp distortion in the sequence should complete.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Animate the Warping of a Sprite](../animate-the-warping-of-a-sprite.md)

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in each geometry in the sequence should match.

## See Also

### Animate the Warping of a Node

- [animateWithWarps:times:restore:](animate%28withwarps_times_restore_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [warpTo:duration:](warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.
