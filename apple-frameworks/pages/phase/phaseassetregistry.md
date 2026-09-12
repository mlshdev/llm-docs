> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry](https://developer.apple.com/documentation/phase/phaseassetregistry)

# PHASEAssetRegistry (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A central repository of audio assets.

## Declaration

```swift
class PHASEAssetRegistry
```

<a id="overview"></a>

## Overview

This class manages audio by registering two types of assets throughout the app’s life cycle:

- **[PHASESoundAsset](phasesoundasset.md)**: A sound asset identifies the particular audio data that your app intends to play.
- **[PHASESoundEventNodeAsset](phasesoundeventnodeasset.md)**: A sound event asset provides audio with an avenue to the output device, and either represents a single sound or a dynamic set of sounds that play individually, depending on the app’s state.

When you’re done with a sound asset, call [unregisterAsset(identifier:completion:)](phaseassetregistry/unregisterasset%28identifier_completion_%29.md) to free up its system resources.

## Topics

### Registering Sound Assets

Load shared audio data that your app can access and play from any scope.

- [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [registerSoundAsset(data:identifier:format:normalizationMode:)](phaseassetregistry/registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.
- [unregisterAsset(identifier:completion:)](phaseassetregistry/unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

### Registering Sound Event Assets

Define playback objects that your app invokes for one-time audio output, or a sophisticated hierarchy that varies the output based on your app’s state.

- [registerSoundEventAsset(rootNode:identifier:)](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md): Registers the root node of the sound event asset.
- [asset(forIdentifier:)](phaseassetregistry/asset%28foridentifier_%29.md): Provides the asset named with the designated identifier.

### Registering Global Metaparameters

Centralize audio parameters that change the charactaristics of in-flight audio, and synchronize across multiple playback events.

- [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md): Registers a global metaparameter with the asset registry.
- [globalMetaParameters](phaseassetregistry/globalmetaparameters.md): A dictionary of metaparameters that all sound event assets share.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEEngine.UpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASEAssetRegistry (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A central repository of audio assets.

## Declaration

```objectivec
@interface PHASEAssetRegistry : NSObject
```

<a id="overview"></a>

## Overview

This class manages audio by registering two types of assets throughout the app’s life cycle:

- **[PHASESoundAsset](phasesoundasset.md)**: A sound asset identifies the particular audio data that your app intends to play.
- **[PHASESoundEventNodeAsset](phasesoundeventnodeasset.md)**: A sound event asset provides audio with an avenue to the output device, and either represents a single sound or a dynamic set of sounds that play individually, depending on the app’s state.

When you’re done with a sound asset, call [unregisterAssetWithIdentifier:completion:](phaseassetregistry/unregisterasset%28identifier_completion_%29.md) to free up its system resources.

## Topics

### Registering Sound Assets

Load shared audio data that your app can access and play from any scope.

- [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](phaseassetregistry/registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [registerSoundAssetWithData:identifier:format:normalizationMode:error:](phaseassetregistry/registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.
- [unregisterAssetWithIdentifier:completion:](phaseassetregistry/unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

### Registering Sound Event Assets

Define playback objects that your app invokes for one-time audio output, or a sophisticated hierarchy that varies the output based on your app’s state.

- [registerSoundEventAssetWithRootNode:identifier:error:](phaseassetregistry/registersoundeventasset%28rootnode_identifier_%29.md): Registers the root node of the sound event asset.
- [assetForIdentifier:](phaseassetregistry/asset%28foridentifier_%29.md): Provides the asset named with the designated identifier.

### Registering Global Metaparameters

Centralize audio parameters that change the charactaristics of in-flight audio, and synchronize across multiple playback events.

- [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md): Registers a global metaparameter with the asset registry.
- [globalMetaParameters](phaseassetregistry/globalmetaparameters.md): A dictionary of metaparameters that all sound event assets share.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.
