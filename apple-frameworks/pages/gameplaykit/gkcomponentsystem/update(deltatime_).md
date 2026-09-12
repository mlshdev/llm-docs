> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/update(deltatime:)](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/update(deltatime:))

# update(deltaTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells all component instances managed by the system to perform their custom periodic actions.

## Declaration

```swift
func update(deltaTime seconds: TimeInterval)
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions to be performed by components (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

Typically, you call this method in response to a per-frame game loop method such as [update(\_:)](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer(\_:updateAtTime:)](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit). GameplayKit then forwards to the [update(deltaTime:)](../gkcomponent/update%28deltatime_%29.md) method of all [GKComponent](../gkcomponent.md) subclass objects managed by the component system, allowing you to execute per-frame logic for each component instance in a deterministic order.

# updateWithDeltaTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Tells all component instances managed by the system to perform their custom periodic actions.

## Declaration

```objectivec
- (void) updateWithDeltaTime:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions to be performed by components (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

Typically, you call this method in response to a per-frame game loop method such as [update:](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer:updateAtTime:](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit). GameplayKit then forwards to the [updateWithDeltaTime:](../gkcomponent/update%28deltatime_%29.md) method of all [GKComponent](../gkcomponent.md) subclass objects managed by the component system, allowing you to execute per-frame logic for each component instance in a deterministic order.
