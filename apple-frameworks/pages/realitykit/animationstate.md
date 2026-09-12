> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationstate](https://developer.apple.com/documentation/realitykit/animationstate)

# AnimationState

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The concretely typed animation state structure.

## Declaration

```swift
struct AnimationState<Value> where Value : AnimatableData
```

<a id="overview"></a>

## Overview

Access the animation state structure from the event structure returned to  the action’s `.updated` event handler. Define a valid bind target and matching animation type for the action animation to make the state structure available and non-nil.

(See: [AnimationStateProtocol](animationstateprotocol.md))

## Topics

### Instance Properties

- [defaultSource](animationstate/defaultsource-3pn6r.md): See: [defaultSource](animationstateprotocol/defaultsource.md)
- [defaultSource](animationstate/defaultsource-5ddek.md): Conforms when `Value` is `JointTransforms`. Returns the joint transforms representing the default source value.
- [defaultTarget](animationstate/defaulttarget-9kxlt.md): Conforms when `Value` is `JointTransforms`. Returns the joint transforms representing the default target value.
- [defaultTarget](animationstate/defaulttarget-gdi6.md): See: [defaultTarget](animationstateprotocol/defaulttarget.md)
- [deltaTime](animationstate/deltatime.md): See: [deltaTime](animationstateprotocol/deltatime.md)
- [evaluationTime](animationstate/evaluationtime.md): See [evaluationTime](animationstateprotocol/evaluationtime.md)
- [normalizedTime](animationstate/normalizedtime.md): See [normalizedTime](animationstateprotocol/normalizedtime.md)

### Instance Methods

- [defaultSourceJoints(index:count:transforms:)](animationstate/defaultsourcejoints%28index_count_transforms_%29.md): Conforms when `Value` is `JointTransforms`. Retrieves a subset of default source joints, and stores them in the output transform array.
- [defaultTargetJoints(index:count:transforms:)](animationstate/defaulttargetjoints%28index_count_transforms_%29.md): Conforms when `Value` is `JointTransforms`. Retrieves a subset of default target joints, and stores them in the output transform array.
- [storeAnimatedJoints(transforms:jointIndex:)](animationstate/storeanimatedjoints%28transforms_jointindex_%29.md): Conforms when `Value` is `JointTransforms`. Stores a subset of animated joints.
- [storeAnimatedValue(\_:)](animationstate/storeanimatedvalue%28__%29.md): See: [storeAnimatedValue(\_:)](animationstateprotocol/storeanimatedvalue%28__%29.md)

## Relationships

### Conforms To

- [AnimationStateProtocol](animationstateprotocol.md)

## See Also

### Action events

- [ActionEvent](actionevent.md): The structure returned to all action event handlers.
- [ActionEventType](actioneventtype.md): A set of events that an action responds to.
- [ActionEventDefinition](actioneventdefinition.md): Defines an action event interval, and any associated parameters.
- [AnimationStateProtocol](animationstateprotocol.md): The protocol representing the current animation state of an action animation.
