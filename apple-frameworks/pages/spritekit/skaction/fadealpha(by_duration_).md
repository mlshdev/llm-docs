> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/fadealpha(by:duration:)](https://developer.apple.com/documentation/spritekit/skaction/fadealpha(by:duration:))

# fadeAlpha(by:duration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the alpha value of a node by a relative value.

## Declaration

```swift
class func fadeAlpha(by factor: CGFloat, duration: TimeInterval) -> SKAction
```

## Parameters

- `factor`: The amount to add to the node’s alpha value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeAlpha(by: -factor, duration: sec)
```

**Obj-C**

```objc
[SKAction fadeAlphaBy: -factor duration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeIn(withDuration:)](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOut(withDuration:)](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlpha(to:duration:)](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.

# fadeAlphaBy:duration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that adjusts the alpha value of a node by a relative value.

## Declaration

```objectivec
+ (SKAction *) fadeAlphaBy:(CGFloat) factor duration:(NSTimeInterval) duration;
```

## Parameters

- `factor`: The amount to add to the node’s alpha value.
- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates to its new value.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeAlpha(by: -factor, duration: sec)
```

**Obj-C**

```objc
[SKAction fadeAlphaBy: -factor duration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeInWithDuration:](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeOutWithDuration:](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlphaTo:duration:](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.
