> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/didevaluateactions()](https://developer.apple.com/documentation/spritekit/skscene/didevaluateactions())

# didEvaluateActions() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to peform any necessary logic after scene actions are evaluated.

## Declaration

```swift
func didEvaluateActions()
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any actions have been evaluated by nodes in the scene but before any physics are simulated.

Any additional actions applied are not evaluated until the next update.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update(\_:)](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didSimulatePhysics()](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints()](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate()](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

# didEvaluateActions (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to peform any necessary logic after scene actions are evaluated.

## Declaration

```objectivec
- (void) didEvaluateActions;
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after any actions have been evaluated by nodes in the scene but before any physics are simulated.

Any additional actions applied are not evaluated until the next update.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update:](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didSimulatePhysics](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.
