> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/renderingmode](https://developer.apple.com/documentation/phase/phaseengine/renderingmode)

# PHASEEngine.RenderingMode (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Modes that determine whether the system renders audio in process or out of process.

## Declaration

```swift
enum RenderingMode
```

<a id="overview"></a>

## Overview

To define the manner in which PHASE renders audio content, select an option from this enumeration and pass it to the `renderingMode` parameter of the [PHASEEngine](../phaseengine.md) initializer, [init(updateMode:renderingMode:)](init%28updatemode_renderingmode_%29.md).

## Topics

### Modes

- [PHASEEngine.RenderingMode.local](renderingmode/local.md): A mode that indicates that the system renders audio in process.
- [PHASEEngine.RenderingMode.client](renderingmode/client.md): A mode that instructs the system to render audio in a secure process.

### Initializers

- [init(rawValue:)](renderingmode/init%28rawvalue_%29.md)

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
- [PHASEEngine.UpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEAssetRegistry](../phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](../phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](../phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](../phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](../phasemedium.md): A property or quality of the environment that affects how sound travels.

# PHASERenderingMode (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Modes that determine whether the system renders audio in process or out of process.

## Declaration

```objectivec
enum PHASERenderingMode : NSInteger;
```

<a id="overview"></a>

## Overview

To define the manner in which PHASE renders audio content, select an option from this enumeration and pass it to the `renderingMode` parameter of the [PHASEEngine](../phaseengine.md) initializer, [initWithUpdateMode:renderingMode:](init%28updatemode_renderingmode_%29.md).

## Topics

### Modes

- [PHASERenderingModeLocal](renderingmode/local.md): A mode that indicates that the system renders audio in process.
- [PHASERenderingModeClient](renderingmode/client.md): A mode that instructs the system to render audio in a secure process.

## See Also

### Setup

- [PHASEEngine](../phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEAssetRegistry](../phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](../phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](../phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](../phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](../phasemedium.md): A property or quality of the environment that affects how sound travels.
