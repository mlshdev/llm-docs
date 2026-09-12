> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation](https://developer.apple.com/documentation/realitykit/actionanimation)

# ActionAnimation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Defines an an action animation.

## Declaration

```swift
struct ActionAnimation<ActionType> where ActionType : EntityAction
```

<a id="overview"></a>

## Overview

The definition is used to generate an action animation based `AnimationResource` that can then be played by calling [playAnimation(\_:transitionDuration:blendLayerOffset:separateAnimatedValue:startsPaused:clock:handoffType:)](entity/playanimation%28__transitionduration_blendlayeroffset_separateanimatedvalue_startspaused_clock_handofftype_%29.md)

Action animations can be used to perform operations in lock-step with playback.

Actions can be grouped or sequenced with pre-existing animation resources or be stand alone. For example an action that triggers sound can be grouped with a sampled animation to trigger sound effects at the appropriate times during playback. See: [group(with:)](animationresource/group%28with_%29.md)

Stand alone action animations can animate target values using RealityKit’s animation engine with cross fade, and additive compositing support.

(See: [AnimationStateProtocol](animationstateprotocol.md))

## Topics

### Initializers

- [init(for:events:name:bindTarget:blendLayer:repeatMode:fillMode:trimStart:trimEnd:trimDuration:offset:delay:speed:)](actionanimation/init%28for_events_name_bindtarget_blendlayer_repeatmode_fillmode_trimstart_trimend_trimduration_offset_delay_speed_%29.md): Constructs an action animation that generates events at user defined times.

### Instance Properties

- [action](actionanimation/action.md): The action for which an animation is being defined.
- [bindTarget](actionanimation/bindtarget.md): [bindTarget](animationdefinition/bindtarget.md) is not used.
- [blendLayer](actionanimation/blendlayer.md): [blendLayer](animationdefinition/blendlayer.md) is not used.
- [delay](actionanimation/delay.md): An amount of time that lapses before the animation plays.
- [duration](actionanimation/duration.md): The elapsed time for one complete rotation.
- [eventDefinitions](actionanimation/eventdefinitions.md): The event interval definitions, and their associated parameter data.
- [fillMode](actionanimation/fillmode.md): An option that determines which data displays outside of the normal duration.
- [name](actionanimation/name.md): A textual name for the animation.
- [offset](actionanimation/offset.md): The time, in seconds, at which the animation begins within the duration.
- [repeatMode](actionanimation/repeatmode.md): An option that determines how the animation repeats.
- [speed](actionanimation/speed.md): A factor that changes the animation’s rate of playback.
- [trimDuration](actionanimation/trimduration.md): An optional duration that overrides the calculated duration.
- [trimEnd](actionanimation/trimend.md): The optional time, in seconds, at which the animation stops.
- [trimStart](actionanimation/trimstart.md): The optional time, in seconds, at which the animation plays.

### Type Aliases

- [ActionAnimation.EventDefinitionType](actionanimation/eventdefinitiontype.md)
- [ActionAnimation.EventParameterType](actionanimation/eventparametertype.md)

## Relationships

### Conforms To

- [AnimationDefinition](animationdefinition.md)

## See Also

### Action management

- [EntityAction](entityaction.md): A protocol that defines an action for an entity.
- [ActionEntityResolution](actionentityresolution.md): Options available to determine the resolution method for a target entity in an action.
- [ActionHandlerProtocol](actionhandlerprotocol.md): The base protocol for action handlers.
