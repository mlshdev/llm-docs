> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/scenedidload()](https://developer.apple.com/documentation/spritekit/skscene/scenedidload())

# sceneDidLoad() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells you when the scene is presented.

## Declaration

```swift
func sceneDidLoad()
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. It is the preferred location to peform custom setup after the scene has been initialized or decoded.

## See Also

### Responding to Loading and Resizing Events

- [didChangeSize(\_:)](didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [willMove(from:)](willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMove(to:)](didmove%28to_%29.md): Tells you when the scene is presented by a view.

# sceneDidLoad (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells you when the scene is presented.

## Declaration

```objectivec
- (void) sceneDidLoad;
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. It is the preferred location to peform custom setup after the scene has been initialized or decoded.

## See Also

### Responding to Loading and Resizing Events

- [didChangeSize:](didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [willMoveFromView:](willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMoveToView:](didmove%28to_%29.md): Tells you when the scene is presented by a view.
