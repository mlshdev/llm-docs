> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationstateprotocol](https://developer.apple.com/documentation/realitykit/animationstateprotocol)

# AnimationStateProtocol

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The protocol representing the current animation state of an action animation.

## Declaration

```swift
protocol AnimationStateProtocol
```

<a id="overview"></a>

## Overview

The animation state allows actions to animate a target value using RealityKit’s animation engine.

Animating values with the animation engine allows for cross-fading and additive compositing with other RealityKit animations targeting the same value.

Access the animation state structure from the event structure returned to `.updated` event handlers. Define a valid bind target and matching animation type to make the state structure available and non nil.

> **Note**

> Custom actions don’t support animating [BlendShapeWeights](blendshapeweights.md).

## Topics

### Associated Types

- [ValueType](animationstateprotocol/valuetype.md)

### Instance Properties

- [defaultSource](animationstateprotocol/defaultsource.md): The previous blend stage value.
- [defaultTarget](animationstateprotocol/defaulttarget.md): The default unanimated value of the target.
- [deltaTime](animationstateprotocol/deltatime.md): The time that has elapsed since the most recent evaluation, or 0 if animation is paused.
- [evaluationTime](animationstateprotocol/evaluationtime.md): The time at which the animation result should be evaluated.
- [normalizedTime](animationstateprotocol/normalizedtime.md): The normalized time ranges from 0 to 1, and is the time at which the animation result should be evaluated.

### Instance Methods

- [storeAnimatedValue(\_:)](animationstateprotocol/storeanimatedvalue%28__%29.md): Stores the action’s animated value, which the animation manager uses to produce a final animated result. Returns true on success, otherwise false.

## Relationships

### Conforming Types

- [AnimationState](animationstate.md)

## See Also

### Action events

- [ActionEvent](actionevent.md): The structure returned to all action event handlers.
- [AnimationState](animationstate.md): The concretely typed animation state structure.
- [ActionEventType](actioneventtype.md): A set of events that an action responds to.
- [ActionEventDefinition](actioneventdefinition.md): Defines an action event interval, and any associated parameters.
