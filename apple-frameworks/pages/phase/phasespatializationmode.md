> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatializationmode](https://developer.apple.com/documentation/phase/phasespatializationmode)

# PHASESpatializationMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The manner in which PHASE outputs spatial audio.

## Declaration

```swift
enum PHASESpatializationMode
```

<a id="overview"></a>

## Overview

When your app outputs audio through a spatial mixer, [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), the PHASE engine requires your app to choose an option of this enumeration and assign it to the [outputSpatializationMode](phaseengine/outputspatializationmode.md) property.

## Topics

### Modes

- [PHASESpatializationMode.automatic](phasespatializationmode/automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationMode.alwaysUseBinaural](phasespatializationmode/alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.
- [PHASESpatializationMode.alwaysUseChannelBased](phasespatializationmode/alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.

### Initializers

- [init(rawValue:)](phasespatializationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEEngine.UpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASESpatializationMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The manner in which PHASE outputs spatial audio.

## Declaration

```objectivec
enum PHASESpatializationMode : NSInteger;
```

<a id="overview"></a>

## Overview

When your app outputs audio through a spatial mixer, [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), the PHASE engine requires your app to choose an option of this enumeration and assign it to the [outputSpatializationMode](phaseengine/outputspatializationmode.md) property.

## Topics

### Modes

- [PHASESpatializationModeAutomatic](phasespatializationmode/automatic.md): A mode that indicates that the framework chooses the spatialization mode.
- [PHASESpatializationModeAlwaysUseBinaural](phasespatializationmode/alwaysusebinaural.md): A mode that introduces special processing to replicate a realistic spatial listening experience.
- [PHASESpatializationModeAlwaysUseChannelBased](phasespatializationmode/alwaysusechannelbased.md): A mode that adds a 3D position and orientation to sound by panning across the available output channels.

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.
