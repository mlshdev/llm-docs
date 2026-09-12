> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/fadealpha(to:duration:)](https://developer.apple.com/documentation/spritekit/skaction/fadealpha(to:duration:))

# fadeAlpha(to:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the alpha value of a node to a new value.

## Declaration

```swift
class func fadeAlpha(to alpha: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `alpha`: The new value of the node’s alpha.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates to its new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Transparency of a Node

- [fadeIn(withDuration:)](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOut(withDuration:)](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlpha(by:duration:)](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.

# fadeAlphaTo:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the alpha value of a node to a new value.

## Declaration

```objectivec
+ (SKAction *) fadeAlphaTo:(CGFloat) alpha duration:(NSTimeInterval) duration;
```

## Parameters

- `alpha`: The new value of the node’s alpha.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates to its new value.

This action is not reversible; the reverse of this action has the same duration but does not change anything.

## See Also

### Animating the Transparency of a Node

- [fadeInWithDuration:](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOutWithDuration:](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlphaBy:duration:](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
