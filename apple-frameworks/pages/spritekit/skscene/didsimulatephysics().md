> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/didsimulatephysics()](https://developer.apple.com/documentation/spritekit/skscene/didsimulatephysics())

# didSimulatePhysics() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to peform any necessary logic after physics simulations are performed.

## Declaration

```swift
func didSimulatePhysics()
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after physics has been simulated in the scene.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies are not simulated until the next update.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update(\_:)](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions()](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didApplyConstraints()](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate()](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

# didSimulatePhysics (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to peform any necessary logic after physics simulations are performed.

## Declaration

```objectivec
- (void) didSimulatePhysics;
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after physics has been simulated in the scene.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies are not simulated until the next update.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update:](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didApplyConstraints](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.
