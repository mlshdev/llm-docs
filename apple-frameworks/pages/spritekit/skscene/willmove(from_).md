> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/willmove(from:)](https://developer.apple.com/documentation/spritekit/skscene/willmove(from:))

# willMove(from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells you when the scene is about to be removed from a view.

## Declaration

```swift
func willMove(from view: SKView)
```

## Parameters

- `view`: The view that is presenting the scene.

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. You can use this method to implement any custom behavior for your scene when it is about to be removed from the view.

## See Also

### Responding to Loading and Resizing Events

- [sceneDidLoad()](scenedidload%28%29.md): Tells you when the scene is presented.
- [didChangeSize(\_:)](didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [didMove(to:)](didmove%28to_%29.md): Tells you when the scene is presented by a view.

# willMoveFromView: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells you when the scene is about to be removed from a view.

## Declaration

```objectivec
- (void) willMoveFromView:(SKView *) view;
```

## Parameters

- `view`: The view that is presenting the scene.

<a id="Discussion"></a>

## Discussion

This method is intended to be overridden in a subclass. You can use this method to implement any custom behavior for your scene when it is about to be removed from the view.

## See Also

### Responding to Loading and Resizing Events

- [sceneDidLoad](scenedidload%28%29.md): Tells you when the scene is presented.
- [didChangeSize:](didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [didMoveToView:](didmove%28to_%29.md): Tells you when the scene is presented by a view.
