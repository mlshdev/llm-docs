> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/update(_:)](https://developer.apple.com/documentation/spritekit/skscene/update(_:))

# update(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to perform any app-specific logic to update your scene.

## Declaration

```swift
func update(_ currentTime: TimeInterval)
```

## Parameters

- `currentTime`: The current system time.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)
- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. This is the first method called when animating the scene, before any actions are evaluated and before any physics are simulated.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [didEvaluateActions()](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics()](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints()](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate()](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

# update: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells your app to perform any app-specific logic to update your scene.

## Declaration

```objectivec
- (void) update:(NSTimeInterval) currentTime;
```

## Parameters

- `currentTime`: The current system time.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)
- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called by the system exactly once per frame, so long as the scene is presented in a view and is not paused. This is the first method called when animating the scene, before any actions are evaluated and before any physics are simulated.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [didEvaluateActions](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints](didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.
