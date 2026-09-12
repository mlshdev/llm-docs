> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/didchangesize(_:)](https://developer.apple.com/documentation/spritekit/skscene/didchangesize(_:))

# didChangeSize(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when the scene’s size has changed.

## Declaration

```swift
func didChangeSize(_ oldSize: CGSize)
```

## Parameters

- `oldSize`: The old size of the scene, in points.

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. Typically, you use this method to adjust the positions of nodes in the scene.

## See Also

### Responding to Loading and Resizing Events

- [sceneDidLoad()](scenedidload%28%29.md): Tells you when the scene is presented.
- [willMove(from:)](willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMove(to:)](didmove%28to_%29.md): Tells you when the scene is presented by a view.

# didChangeSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells you when the scene’s size has changed.

## Declaration

```objectivec
- (void) didChangeSize:(CGSize) oldSize;
```

## Parameters

- `oldSize`: The old size of the scene, in points.

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. Typically, you use this method to adjust the positions of nodes in the scene.

## See Also

### Responding to Loading and Resizing Events

- [sceneDidLoad](scenedidload%28%29.md): Tells you when the scene is presented.
- [willMoveFromView:](willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMoveToView:](didmove%28to_%29.md): Tells you when the scene is presented by a view.
