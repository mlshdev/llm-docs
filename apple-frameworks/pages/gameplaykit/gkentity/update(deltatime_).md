> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity/update(deltatime:)](https://developer.apple.com/documentation/gameplaykit/gkentity/update(deltatime:))

# update(deltaTime:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs periodic updates for each of the entity’s components.

## Declaration

```swift
func update(deltaTime seconds: TimeInterval)
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions performed by this method (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

At runtime, an entity/component-based game needs to dispatch periodic logic—from an update/render loop method such as [update(\_:)](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer(\_:updateAtTime:)](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or a [CADisplayLink](../../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLink](../../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine—to each of its components, so that each can perform component-specific update logic.

The [GKEntity](../gkentity.md) [update(deltaTime:)](update%28deltatime_%29.md) method is one of the two options GameplayKit provides for dispatching updates—this option is easy to implement in games with small numbers of entities and components. Call this method for each entity in your game, and each entity will in turn call the [update(deltaTime:)](../gkcomponent/update%28deltatime_%29.md) method for each of its components.

The other option is to dispatch updates per-component, rather than per-entity, using a [GKComponentSystem](../gkcomponentsystem.md) object. Using a component system allows you to update all components of a specific component class in a deterministic order, without needing to traverse your game’s object graph and update each entity.

> **Note**

>  If a component owned by an entity is a member of a component system, calling the entity’s [update(deltaTime:)](update%28deltatime_%29.md) method will not update that component.

# updateWithDeltaTime: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Performs periodic updates for each of the entity’s components.

## Declaration

```objectivec
- (void) updateWithDeltaTime:(NSTimeInterval) seconds;
```

## Parameters

- `seconds`: The time step to use for any time-dependent actions performed by this method (typically, the elapsed time since the previous call to this method).

<a id="Discussion"></a>

## Discussion

At runtime, an entity/component-based game needs to dispatch periodic logic—from an update/render loop method such as [update:](../../spritekit/skscene/update%28__%29.md) (SpriteKit) or [renderer:updateAtTime:](../../scenekit/scnscenerendererdelegate/renderer%28__updateattime_%29.md) (SceneKit), or a [CADisplayLink](../../quartzcore/cadisplaylink.md) (iOS) or [CVDisplayLinkRef](../../corevideo/cvdisplaylink.md) (macOS) timer in a custom rendering engine—to each of its components, so that each can perform component-specific update logic.

The [GKEntity](../gkentity.md) [updateWithDeltaTime:](update%28deltatime_%29.md) method is one of the two options GameplayKit provides for dispatching updates—this option is easy to implement in games with small numbers of entities and components. Call this method for each entity in your game, and each entity will in turn call the [updateWithDeltaTime:](../gkcomponent/update%28deltatime_%29.md) method for each of its components.

The other option is to dispatch updates per-component, rather than per-entity, using a [GKComponentSystem](../gkcomponentsystem.md) object. Using a component system allows you to update all components of a specific component class in a deterministic order, without needing to traverse your game’s object graph and update each entity.

> **Note**

>  If a component owned by an entity is a member of a component system, calling the entity’s [updateWithDeltaTime:](update%28deltatime_%29.md) method will not update that component.
