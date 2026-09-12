> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixer](https://developer.apple.com/documentation/phase/phasemixer)

# PHASEMixer (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that combines multiple audio signals into a single signal.

## Declaration

```swift
class PHASEMixer
```

<a id="overview"></a>

## Overview

Mixers provide a single point of control over the multiple audio signals they combine. To create a mixer, you provide the framework with a mixer definition; see [PHASEMixerDefinition](phasemixerdefinition.md).

Subclasses of this class define unique properties the app sets to control specific features. For example, the spatial mixer ([PHASESpatialMixerDefinition](phasespatialmixerdefinition.md)) adds environmental effects into the output audio signal.

## Topics

### Adjusting Volume

- [gain](phasemixer/gain.md): The mixer’s volume.
- [gainMetaParameter](phasemixer/gainmetaparameter.md): A parameter that changes the mixer’s volume gradually over a period of time.

### Retrieving the Mixer Identifier

- [identifier](phasemixer/identifier.md): A unique name for the mixer.

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

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

# PHASEMixer (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that combines multiple audio signals into a single signal.

## Declaration

```objectivec
@interface PHASEMixer : NSObject
```

<a id="overview"></a>

## Overview

Mixers provide a single point of control over the multiple audio signals they combine. To create a mixer, you provide the framework with a mixer definition; see [PHASEMixerDefinition](phasemixerdefinition.md).

Subclasses of this class define unique properties the app sets to control specific features. For example, the spatial mixer ([PHASESpatialMixerDefinition](phasespatialmixerdefinition.md)) adds environmental effects into the output audio signal.

## Topics

### Adjusting Volume

- [gain](phasemixer/gain.md): The mixer’s volume.
- [gainMetaParameter](phasemixer/gainmetaparameter.md): A parameter that changes the mixer’s volume gradually over a period of time.

### Retrieving the Mixer Identifier

- [identifier](phasemixer/identifier.md): A unique name for the mixer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.
