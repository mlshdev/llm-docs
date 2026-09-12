> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/updatemode](https://developer.apple.com/documentation/phase/phaseengine/updatemode)

# PHASEEngine.UpdateMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Modes that determine when the framework consumes API calls and updates internal state.

## Declaration

```swift
enum UpdateMode
```

<a id="overview"></a>

## Overview

To define the manner in which PHASE processes commands and updates internal state, select an option from this enumeration and pass it to the `updateMode` parameter of the [PHASEEngine](../phaseengine.md) initializer, [init(updateMode:)](init%28updatemode_%29.md).

## Topics

### Modes

- [PHASEEngine.UpdateMode.automatic](updatemode/automatic.md): A mode that indicates PHASE sets the timing of state adjustments.
- [PHASEEngine.UpdateMode.manual](updatemode/manual.md): A mode that indicates the app controls when the framework adjusts state.

### Initializers

- [init(rawValue:)](updatemode/init%28rawvalue_%29.md)

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

- [PHASEEngine](../phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEEngine.RenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](../phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](../phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](../phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](../phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](../phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASEUpdateMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Modes that determine when the framework consumes API calls and updates internal state.

## Declaration

```objectivec
enum PHASEUpdateMode : NSInteger;
```

<a id="overview"></a>

## Overview

To define the manner in which PHASE processes commands and updates internal state, select an option from this enumeration and pass it to the `updateMode` parameter of the [PHASEEngine](../phaseengine.md) initializer, [initWithUpdateMode:](init%28updatemode_%29.md).

## Topics

### Modes

- [PHASEUpdateModeAutomatic](updatemode/automatic.md): A mode that indicates PHASE sets the timing of state adjustments.
- [PHASEUpdateModeManual](updatemode/manual.md): A mode that indicates the app controls when the framework adjusts state.

## See Also

### Setup

- [PHASEEngine](../phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASERenderingMode](renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](../phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](../phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](../phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](../phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](../phasemedium.md): A property or quality of the environment that affects how sound travels.
