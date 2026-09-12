> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscenedelegate/didevaluateactions(for:)](https://developer.apple.com/documentation/spritekit/skscenedelegate/didevaluateactions(for:))

# didEvaluateActions(for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to peform any necessary logic after scene actions are evaluated.

## Declaration

```swift
optional func didEvaluateActions(for scene: SKScene)
```

## Parameters

- `scene`: The scene that is being animated.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any actions have been evaluated by nodes in the scene but before any physics are simulated.

Any additional actions applied are not evaluated until the next update.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update(\_:for:)](update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didSimulatePhysics(for:)](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints(for:)](didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdate(for:)](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

# didEvaluateActionsForScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to peform any necessary logic after scene actions are evaluated.

## Declaration

```objectivec
- (void) didEvaluateActionsForScene:(SKScene *) scene;
```

## Parameters

- `scene`: The scene that is being animated.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any actions have been evaluated by nodes in the scene but before any physics are simulated.

Any additional actions applied are not evaluated until the next update.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update:forScene:](update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didSimulatePhysicsForScene:](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraintsForScene:](didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdateForScene:](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.
