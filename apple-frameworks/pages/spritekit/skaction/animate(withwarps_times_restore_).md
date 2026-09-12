> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/animate(withwarps:times:restore:)](https://developer.apple.com/documentation/spritekit/skaction/animate(withwarps:times:restore:))

# animate(withWarps:times:restore:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.

## Declaration

```swift
class func animate(withWarps warps: [SKWarpGeometry], times: [NSNumber], restore: Bool) -> SKAction?
```

## Parameters

- `warps`: The sequence of warps to apply to the node.
- `times`: The times at which each warp distortion in the sequence should complete.
- `restore`: A Boolean specifying whether to restore the original node’s warpGeometry from before the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in each geometry in the sequence should match.

## See Also

### Animate the Warping of a Node

- [animate(withWarps:times:)](animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [warp(to:duration:)](warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.

# animateWithWarps:times:restore: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.

## Declaration

```objectivec
+ (SKAction *) animateWithWarps:(NSArray<SKWarpGeometry *> *) warps times:(NSArray<NSNumber *> *) times restore:(BOOL) restore;
```

## Parameters

- `warps`: The sequence of warps to apply to the node.
- `times`: The times at which each warp distortion in the sequence should complete.
- `restore`: A Boolean specifying whether to restore the original node’s warpGeometry from before the action.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

The [numberOfColumns](../skwarpgeometrygrid/numberofcolumns.md) and [numberOfRows](../skwarpgeometrygrid/numberofrows.md) in each geometry in the sequence should match.

## See Also

### Animate the Warping of a Node

- [animateWithWarps:times:](animate%28withwarps_times_%29.md): Creates an action to distort a node through a sequence of [SKWarpGeometry](../skwarpgeometry.md) objects.
- [warpTo:duration:](warp%28to_duration_%29.md): Creates an action to distort a node based using an [SKWarpGeometry](../skwarpgeometry.md) object.
