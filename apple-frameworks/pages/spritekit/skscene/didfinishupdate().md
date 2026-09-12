> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/didfinishupdate()](https://developer.apple.com/documentation/spritekit/skscene/didfinishupdate())

# didFinishUpdate() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

## Declaration

```swift
func didFinishUpdate()
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after all update logic has been completed and before the scene is rendered.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies are not simulated until the next update.

Any changes to constraints will not be applied until the next update.

No further update logic will be applied to the scene after this call. Any values set on nodes here will be used when the scene is rendered for the current frame.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update(\_:)](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions()](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics()](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints()](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.

# didFinishUpdate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

## Declaration

```objectivec
- (void) didFinishUpdate;
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. It is called after all update logic has been completed and before the scene is rendered.

Any additional actions applied are not evaluated until the next update.

Any changes to physics bodies are not simulated until the next update.

Any changes to constraints will not be applied until the next update.

No further update logic will be applied to the scene after this call. Any values set on nodes here will be used when the scene is rendered for the current frame.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update:](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
