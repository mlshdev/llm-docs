> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/fadein(withduration:)](https://developer.apple.com/documentation/spritekit/skaction/fadein(withduration:))

# fadeIn(withDuration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the alpha value of the node to `1.0`.

## Declaration

```swift
class func fadeIn(withDuration duration: TimeInterval) -> SKAction
```

## Parameters

- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates from its current value to `1.0`.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeOut(withDuration: sec)
```

**Obj-C**

```objc
[SKAction fadeOutWithDuration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeOut(withDuration:)](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlpha(by:duration:)](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlpha(to:duration:)](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.

# fadeInWithDuration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that changes the alpha value of the node to `1.0`.

## Declaration

```objectivec
+ (SKAction *) fadeInWithDuration:(NSTimeInterval) duration;
```

## Parameters

- `duration`: The duration of the animation.

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [alpha](../sknode/alpha.md) property animates from its current value to `1.0`.

This action is reversible; the reverse is created as if the following code is executed:

**Swift**

```swift
let action = SKAction.fadeOut(withDuration: sec)
```

**Obj-C**

```objc
[SKAction fadeOutWithDuration: sec];
```

## See Also

### Animating the Transparency of a Node

- [fadeOutWithDuration:](fadeout%28withduration_%29.md): Creates an action that changes the alpha value of the node to `0.0`.
- [fadeAlphaBy:duration:](fadealpha%28by_duration_%29.md): Creates an action that adjusts the alpha value of a node by a relative value.
- [fadeAlphaTo:duration:](fadealpha%28to_duration_%29.md): Creates an action that adjusts the alpha value of a node to a new value.
