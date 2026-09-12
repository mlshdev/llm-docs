> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponent/update(deltatime:)](https://developer.apple.com/documentation/gameplaykit/gkcomponent/update(deltatime:))

# update(deltaTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs any custom periodic actions defined by the component subclass.

## Declaration

```swift
func update(deltaTime seconds: TimeInterval)
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions performed by this method (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

Override this method to implement per-frame logic specific to your component class. GameplayKit calls this method when you call the [update(deltaTime:)](../gkentity/update%28deltatime_%29.md) method of the entity owning a component, or when you call the [update(deltaTime:)](../gkcomponentsystem/update%28deltatime_%29.md) method of a [GKComponentSystem](../gkcomponentsystem.md) object that manages all components of a specific [GKComponent](../gkcomponent.md) subclass. Typically, you call one of those methods in response to a per-frame game loop method such as [update(\_:)](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer(\_:updateAtTime:)](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# updateWithDeltaTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs any custom periodic actions defined by the component subclass.

## Declaration

```objectivec
- (void) updateWithDeltaTime:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions performed by this method (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

Override this method to implement per-frame logic specific to your component class. GameplayKit calls this method when you call the [updateWithDeltaTime:](../gkentity/update%28deltatime_%29.md) method of the entity owning a component, or when you call the [updateWithDeltaTime:](../gkcomponentsystem/update%28deltatime_%29.md) method of a [GKComponentSystem](../gkcomponentsystem.md) object that manages all components of a specific [GKComponent](../gkcomponent.md) subclass. Typically, you call one of those methods in response to a per-frame game loop method such as [update:](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer:updateAtTime:](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit).

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
