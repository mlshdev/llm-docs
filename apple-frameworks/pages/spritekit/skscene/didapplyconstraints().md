> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/didapplyconstraints()](https://developer.apple.com/documentation/spritekit/skscene/didapplyconstraints())

# didApplyConstraints() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells your app to peform any necessary logic after constraints are applied.

## Declaration

```swift
func didApplyConstraints()
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called exactly once per frame, so long as the scene is presented in a view and is not paused. By default, this method does nothing. Your scene subclass should override this method and perform any necessary updates to the scene.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update(\_:)](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions()](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics()](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didFinishUpdate()](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

# didApplyConstraints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells your app to peform any necessary logic after constraints are applied.

## Declaration

```objectivec
- (void) didApplyConstraints;
```

## Mentioned In

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md)

<a id="Discussion"></a>

## Discussion

Do not call this method directly; it is called exactly once per frame, so long as the scene is presented in a view and is not paused. By default, this method does nothing. Your scene subclass should override this method and perform any necessary updates to the scene.

## See Also

### Responding to Frame-Cycle Events

- [Responding to Frame-Cycle Events](../responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update:](update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions](didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics](didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didFinishUpdate](didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.
