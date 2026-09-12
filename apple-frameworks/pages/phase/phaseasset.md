> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasset](https://developer.apple.com/documentation/phase/phaseasset)

# PHASEAsset (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class that adds a name to framework assets.

## Declaration

```swift
class PHASEAsset
```

<a id="overview"></a>

## Overview

Through inheritance, this class adds a string [identifier](phaseasset/identifier.md) to subclasses, for example, [PHASESoundAsset](phasesoundasset.md) and [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md).

PHASE generates objects of this type based on template [PHASEDefinition](phasedefinition.md) subclasses. For example, PHASE gives you a [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md) when you register a [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md) with the asset registry via [registerSoundEventAsset(rootNode:identifier:)](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md).

## Topics

### Identifying an Asset

- [identifier](phaseasset/identifier.md): A unique name for the asset.

### Classifying an Asset

- [PHASEAsset.AssetType](phaseasset/assettype.md): Options that determine how PHASE manages sound assets in memory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md)
- [PHASESoundAsset](phasesoundasset.md)
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md)

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
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

# PHASEAsset (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class that adds a name to framework assets.

## Declaration

```objectivec
@interface PHASEAsset : NSObject
```

<a id="overview"></a>

## Overview

Through inheritance, this class adds a string [identifier](phaseasset/identifier.md) to subclasses, for example, [PHASESoundAsset](phasesoundasset.md) and [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md).

PHASE generates objects of this type based on template [PHASEDefinition](phasedefinition.md) subclasses. For example, PHASE gives you a [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md) when you register a [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md) with the asset registry via [registerSoundEventAssetWithRootNode:identifier:error:](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md).

## Topics

### Identifying an Asset

- [identifier](phaseasset/identifier.md): A unique name for the asset.

### Classifying an Asset

- [PHASEAssetType](phaseasset/assettype.md): Options that determine how PHASE manages sound assets in memory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md)
- [PHASESoundAsset](phasesoundasset.md)
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md)

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.
