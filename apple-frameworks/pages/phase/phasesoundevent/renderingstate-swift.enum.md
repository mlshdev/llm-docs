> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/renderingstate-swift.enum](https://developer.apple.com/documentation/phase/phasesoundevent/renderingstate-swift.enum)

# PHASESoundEvent.RenderingState (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The playback status of audio.

## Declaration

```swift
enum RenderingState
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values of:

- A sound event’s [renderingState](renderingstate-swift.property.md) property
- The engine’s [renderingState](../phaseengine/renderingstate.md) property

## Topics

### States

- [PHASESoundEvent.RenderingState.paused](renderingstate-swift.enum/paused.md): A state in which sound event playback pauses.
- [PHASESoundEvent.RenderingState.started](renderingstate-swift.enum/started.md): A state in which sound event playback starts.
- [PHASESoundEvent.RenderingState.stopped](renderingstate-swift.enum/stopped.md): A state in which sound event playback stops.

### Initializers

- [init(rawValue:)](renderingstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](../phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](../phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEventNodeDefinition](../phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](../phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](../phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](../sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

# PHASERenderingState (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The playback status of audio.

## Declaration

```objectivec
enum PHASERenderingState : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values of:

- A sound event’s [renderingState](renderingstate-swift.property.md) property
- The engine’s [renderingState](../phaseengine/renderingstate.md) property

## Topics

### States

- [PHASERenderingStatePaused](renderingstate-swift.enum/paused.md): A state in which sound event playback pauses.
- [PHASERenderingStateStarted](renderingstate-swift.enum/started.md): A state in which sound event playback starts.
- [PHASERenderingStateStopped](renderingstate-swift.enum/stopped.md): A state in which sound event playback stops.

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](../phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](../phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEventNodeDefinition](../phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](../phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](../phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](../sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.
