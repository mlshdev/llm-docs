> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventnodeasset](https://developer.apple.com/documentation/phase/phasesoundeventnodeasset)

# PHASESoundEventNodeAsset (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A template object for sounds that can play in reaction to environmental state.

## Declaration

```swift
class PHASESoundEventNodeAsset
```

<a id="overview"></a>

## Overview

This object refers by name to a collection of sound event nodes that connect to form a tree, or hierarchy. To retrieve an instance of this class, add a sound-event node definition to the asset registry using [registerSoundEventAsset(rootNode:identifier:)](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md). Choose the `rootNode` argument from the subclasses in [Sound Event Nodes](sound-event-nodes.md) based on the playback features your app requires.

To play a single audio asset, register a `rootNode` with only one audio-providing node. Alternatively, to create a sound event that can change its audio based on your app’s current state, register a `rootNode` that contains children. By adding multiple nodes that play varying audio as children to a control node, PHASE plays the right audio for the moment based on control logic that you define.

To create a playable sound event from this class, pass [identifier](phaseasset/identifier.md) to the `assetIdentifier` parameter of the sound event intializer, [init(engine:assetIdentifier:)](phasesoundevent/init%28engine_assetidentifier_%29.md). Then, invoke the sound event by calling [start(completion:)](phasesoundevent/start%28completion_%29.md).

As an opaque derived object, this class adds no properties to its base class.

## Relationships

### Inherits From

- [PHASEAsset](phaseasset.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEvent.RenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

# PHASESoundEventNodeAsset (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A template object for sounds that can play in reaction to environmental state.

## Declaration

```objectivec
@interface PHASESoundEventNodeAsset : PHASEAsset
```

<a id="overview"></a>

## Overview

This object refers by name to a collection of sound event nodes that connect to form a tree, or hierarchy. To retrieve an instance of this class, add a sound-event node definition to the asset registry using [registerSoundEventAssetWithRootNode:identifier:error:](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md). Choose the `rootNode` argument from the subclasses in [Sound Event Nodes](sound-event-nodes.md) based on the playback features your app requires.

To play a single audio asset, register a `rootNode` with only one audio-providing node. Alternatively, to create a sound event that can change its audio based on your app’s current state, register a `rootNode` that contains children. By adding multiple nodes that play varying audio as children to a control node, PHASE plays the right audio for the moment based on control logic that you define.

To create a playable sound event from this class, pass [identifier](phaseasset/identifier.md) to the `assetIdentifier` parameter of the sound event intializer, [initWithEngine:assetIdentifier:error:](phasesoundevent/init%28engine_assetidentifier_%29.md). Then, invoke the sound event by calling [startWithCompletion:](phasesoundevent/start%28completion_%29.md).

As an opaque derived object, this class adds no properties to its base class.

## Relationships

### Inherits From

- [PHASEAsset](phaseasset.md)

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.
