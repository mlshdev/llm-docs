> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscenedelegate/update(_:for:)](https://developer.apple.com/documentation/spritekit/skscenedelegate/update(_:for:))

# update(\_:for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to perform any app specific logic to update your scene.

## Declaration

```swift
optional func update(_ currentTime: TimeInterval, for scene: SKScene)
```

## Parameters

- `currentTime`: The current system time.
- `scene`: The scene that is being animated.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)
- [Disconnecting Bodies from Joints](../disconnecting-bodies-from-joints.md)
- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. This is the first method called when animating the scene, before any actions are evaluated and before any physics are simulated.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [didEvaluateActions(for:)](didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics(for:)](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints(for:)](didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdate(for:)](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

# update:forScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells you to perform any app specific logic to update your scene.

## Declaration

```objectivec
- (void) update:(NSTimeInterval) currentTime forScene:(SKScene *) scene;
```

## Parameters

- `currentTime`: The current system time.
- `scene`: The scene that is being animated.

## Mentioned In

- [Detecting Changes at Each Step of an Animation](../detecting-changes-at-each-step-of-an-animation.md)
- [Disconnecting Bodies from Joints](../disconnecting-bodies-from-joints.md)
- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. This is the first method called when animating the scene, before any actions are evaluated and before any physics are simulated.

## See Also

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](../use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [didEvaluateActionsForScene:](didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysicsForScene:](didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraintsForScene:](didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdateForScene:](didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.
