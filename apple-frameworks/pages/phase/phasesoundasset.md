> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundasset](https://developer.apple.com/documentation/phase/phasesoundasset)

# PHASESoundAsset (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound resource stored in the asset registry.

## Declaration

```swift
class PHASESoundAsset
```

<a id="overview"></a>

## Overview

This class wraps source audio data that an app intends to play. The framework requires a mixer to play a sound asset, and sound event nodes like [PHASESamplerNodeDefinition](phasesamplernodedefinition.md) combine the asset with a mixer. To provide a sound asset to a sound-event node, refer to the asset by the `identifier` you pass into the [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md) function.

## Topics

### Accessing Sound Data

- [data](phasesoundasset/data.md): A storage buffer for the sound asset.
- [url](phasesoundasset/url.md): The URL of the sound asset.

### Classifying an Asset

- [type](phasesoundasset/type.md): The type of sound asset.

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

- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEvent.RenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

# PHASESoundAsset (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A sound resource stored in the asset registry.

## Declaration

```objectivec
@interface PHASESoundAsset : PHASEAsset
```

<a id="overview"></a>

## Overview

This class wraps source audio data that an app intends to play. The framework requires a mixer to play a sound asset, and sound event nodes like [PHASESamplerNodeDefinition](phasesamplernodedefinition.md) combine the asset with a mixer. To provide a sound asset to a sound-event node, refer to the asset by the `identifier` you pass into the [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md) function.

## Topics

### Accessing Sound Data

- [data](phasesoundasset/data.md): A storage buffer for the sound asset.
- [url](phasesoundasset/url.md): The URL of the sound asset.

### Classifying an Asset

- [type](phasesoundasset/type.md): The type of sound asset.

## Relationships

### Inherits From

- [PHASEAsset](phaseasset.md)

## See Also

### Audio Selection and Playback

- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.
