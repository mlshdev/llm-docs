> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenormalizationmode](https://developer.apple.com/documentation/phase/phasenormalizationmode)

# PHASENormalizationMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.

## Declaration

```swift
enum PHASENormalizationMode
```

<a id="overview"></a>

## Overview

Different output devices feature loudness characteristics that require the audio engine to adjust the volume of the input audio to achieve a consistent listening experience across devices.

PHASE callibrates sound asset and stream loudness automatically when the app chooses [PHASENormalizationMode.dynamic](phasenormalizationmode/dynamic.md). If an app chooses [PHASENormalizationMode.none](phasenormalizationmode/none.md), the app needs to implement custom loudness normalizaton manually, by adjusting sound asset and stream signal strength for the user’s output device.

## Topics

### Loudness Normalization Modes

- [PHASENormalizationMode.dynamic](phasenormalizationmode/dynamic.md): A mode that instructs the framework to adjust a sound’s volume according to the user’s output device.
- [PHASENormalizationMode.none](phasenormalizationmode/none.md): A mode that instructs the framework not to adjust a sound’s volume according to the user’s output device.

### Initializers

- [init(rawValue:)](phasenormalizationmode/init%28rawvalue_%29.md)

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
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASENormalizationMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.

## Declaration

```objectivec
enum PHASENormalizationMode : NSInteger;
```

<a id="overview"></a>

## Overview

Different output devices feature loudness characteristics that require the audio engine to adjust the volume of the input audio to achieve a consistent listening experience across devices.

PHASE callibrates sound asset and stream loudness automatically when the app chooses [PHASENormalizationModeDynamic](phasenormalizationmode/dynamic.md). If an app chooses [PHASENormalizationModeNone](phasenormalizationmode/none.md), the app needs to implement custom loudness normalizaton manually, by adjusting sound asset and stream signal strength for the user’s output device.

## Topics

### Loudness Normalization Modes

- [PHASENormalizationModeDynamic](phasenormalizationmode/dynamic.md): A mode that instructs the framework to adjust a sound’s volume according to the user’s output device.
- [PHASENormalizationModeNone](phasenormalizationmode/none.md): A mode that instructs the framework not to adjust a sound’s volume according to the user’s output device.

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phasemedium.md): A property or quality of the environment that affects how sound travels.
