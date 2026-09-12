> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/fadeout(withduration:)](https://developer.apple.com/documentation/spritekit/skaction/fadeout(withduration:))

# fadeOut(withDuration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the alpha value of the node to `0.0`.

## Declaration

```swift
class func fadeOut(withDuration duration: TimeInterval) -> SKAction
```

## Parameters

- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates from its current value to `0.0`. This causes the node to disappear.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeIn(withDuration: sec)
```

**Obj-C**

```objc
[SKAction fadeInWithDuration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeIn(withDuration:)](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeAlpha(by:duration:)](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlpha(to:duration:)](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.

# fadeOutWithDuration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the alpha value of the node to `0.0`.

## Declaration

```objectivec
+ (SKAction *) fadeOutWithDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates from its current value to `0.0`. This causes the node to disappear.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeIn(withDuration: sec)
```

**Obj-C**

```objc
[SKAction fadeInWithDuration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeInWithDuration:](fadein%28withduration_%29.md): Creates an action that changes the alpha value of the node to `1.0`.
- [fadeAlphaBy:duration:](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlphaTo:duration:](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.
