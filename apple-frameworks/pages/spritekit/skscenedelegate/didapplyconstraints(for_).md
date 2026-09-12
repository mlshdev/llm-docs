> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscenedelegate/didapplyconstraints(for:)](https://developer.apple.com/documentation/spritekit/skscenedelegate/didapplyconstraints(for:))

# didApplyConstraints(for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to peform any necessary logic after constraints are applied.

## Declaration

```swift
optional func didApplyConstraints(for scene: SKScene)
```

## Parameters

- `scene`: The scene that is being animated.

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any enabled constraints in the scene have been applied.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies is not simulated until the next update.

Any changes to constraints will not be applied until the next update.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update(\_:for:)](update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActions(for:)](didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics(for:)](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didFinishUpdate(for:)](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

# didApplyConstraintsForScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to peform any necessary logic after constraints are applied.

## Declaration

```objectivec
- (void) didApplyConstraintsForScene:(SKScene *) scene;
```

## Parameters

- `scene`: The scene that is being animated.

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any enabled constraints in the scene have been applied.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies is not simulated until the next update.

Any changes to constraints will not be applied until the next update.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update:forScene:](update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActionsForScene:](didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysicsForScene:](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didFinishUpdateForScene:](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.
