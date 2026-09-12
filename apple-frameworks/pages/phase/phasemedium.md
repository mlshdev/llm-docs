> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemedium](https://developer.apple.com/documentation/phase/phasemedium)

# PHASEMedium (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A property or quality of the environment that affects how sound travels.

## Declaration

```swift
class PHASEMedium
```

<a id="overview"></a>

## Overview

This class defines choices for the engine’s [defaultMedium](phaseengine/defaultmedium.md). Currently, this property provides only sound traveling through air.

## Topics

### Creating a Medium

- [init(engine:preset:)](phasemedium/init%28engine_preset_%29.md): Creates a medium.
- [PHASEMedium.Preset](phasemedium/preset.md): Predetermined qualities of an environment that affect how sound transmits.

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
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.

# PHASEMedium (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A property or quality of the environment that affects how sound travels.

## Declaration

```objectivec
@interface PHASEMedium : NSObject
```

<a id="overview"></a>

## Overview

This class defines choices for the engine’s [defaultMedium](phaseengine/defaultmedium.md). Currently, this property provides only sound traveling through air.

## Topics

### Creating a Medium

- [initWithEngine:preset:](phasemedium/init%28engine_preset_%29.md): Creates a medium.
- [PHASEMediumPreset](phasemedium/preset.md): Predetermined qualities of an environment that affect how sound transmits.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Setup

- [PHASEEngine](phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
