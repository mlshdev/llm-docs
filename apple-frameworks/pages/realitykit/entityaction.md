> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityaction](https://developer.apple.com/documentation/realitykit/entityaction)

# EntityAction

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A protocol that defines an action for an entity.

## Declaration

```swift
protocol EntityAction
```

<a id="overview"></a>

## Overview

Structures that conform to `EntityAction` can contain data that an [ActionAnimation](actionanimation.md) stores. If your apps needs to serialize the animation resource to a file, the structure also needs to adopt and conform to the [Codable](https://developer.apple.com/documentation/swift/codable) protocol.

As action animation playback occurs, unique action events are raised for its associated `EntityAction` conforming type.

These events allow application code to animate target values (see [AnimationStateProtocol](animationstateprotocol.md)), and perform custom operations in lock step with animation playback.

The action data stored within an action animation is available to the action’s event handler.

> **Note**

> Custom actions don’t support animating [BlendShapeWeights](blendshapeweights.md).

## Topics

### Associated Types

- [EventParameterType](entityaction/eventparametertype.md): The associated event parameter type.

### Instance Properties

- [animatedValueType](entityaction/animatedvaluetype.md): A value that defines the type that the action animates, if the action animates a target value.
- [isAdditive](entityaction/isadditive.md): A Boolean value that determines whether this action additively blends with the prior stage.
- [isReversible](entityaction/isreversible.md): A Boolean value that determines whether the action reverses prior operations when playback is reverses.

### Type Methods

- [registerAction()](entityaction/registeraction%28%29.md): Registers the action into the action-types registry.
- [subscribe(to:\_:)](entityaction/subscribe%28to___%29.md): Subscribes to an action event.
- [unsubscribe(from:)](entityaction/unsubscribe%28from_%29.md): Unsubscribes from an action event.
- [unsubscribeAll()](entityaction/unsubscribeall%28%29.md): Unsubscribes from all action events.

## Relationships

### Inherited By

- [BehaviorTreeAction](behaviortreeaction.md)

### Conforming Types

- [BillboardAction](billboardaction.md)
- [EmphasizeAction](emphasizeaction.md)
- [FromToByAction](fromtobyaction.md)
- [ImpulseAction](impulseaction.md)
- [OrbitEntityAction](orbitentityaction.md)
- [PlayAnimationAction](playanimationaction.md)
- [PlayAudioAction](playaudioaction.md)
- [SetEntityEnabledAction](setentityenabledaction.md)
- [SpinAction](spinaction.md)

## See Also

### Action management

- [ActionAnimation](actionanimation.md): Defines an an action animation.
- [ActionEntityResolution](actionentityresolution.md): Options available to determine the resolution method for a target entity in an action.
- [ActionHandlerProtocol](actionhandlerprotocol.md): The base protocol for action handlers.
