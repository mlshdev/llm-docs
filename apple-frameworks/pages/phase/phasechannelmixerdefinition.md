> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasechannelmixerdefinition](https://developer.apple.com/documentation/phase/phasechannelmixerdefinition)

# PHASEChannelMixerDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio-layering object that routes sound directly to the device’s output.

## Declaration

```swift
class PHASEChannelMixerDefinition
```

<a id="overview"></a>

## Overview

Use this class to play one-time sounds such as menu clicks.

> **Note**

>  If your audio playback requires 3D orienting or positioning, use [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md) or [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), respectively. For more information, see [Spatial Mixing](spatial-mixing.md).

This class defines the *channel routing*, which is the strategy the framework uses to send source mono or multichannel assets to the output for playback. The asset’s audio channels route to the output for playback according to the channel layout and runtime output conditions the app designates on an instance of this class.

This class minimizes *up mixing* and *down mixing* — that is, source audio channel conversion to a higher or lower number of channels. For example, although a spatial mixer overrides the use of output channels by panning to convey listener position and orientation, the channel mixer maintains source audio channel layout to preserve the listening experience of the source audio.

## Topics

### Creating a Channel Mixer

- [init(channelLayout:)](phasechannelmixerdefinition/init%28channellayout_%29.md): Creates a channel mixer with the given channel layout.
- [init(channelLayout:identifier:)](phasechannelmixerdefinition/init%28channellayout_identifier_%29.md): Creates a named channel mixer with the given channel layout.

### Inspecting Channel Layout

- [inputChannelLayout](phasechannelmixerdefinition/inputchannellayout.md): The channel layout of the mixer’s input audio.

## Relationships

### Inherits From

- [PHASEMixerDefinition](phasemixerdefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio Layering and Effects

- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

# PHASEChannelMixerDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio-layering object that routes sound directly to the device’s output.

## Declaration

```objectivec
@interface PHASEChannelMixerDefinition : PHASEMixerDefinition
```

<a id="overview"></a>

## Overview

Use this class to play one-time sounds such as menu clicks.

> **Note**

>  If your audio playback requires 3D orienting or positioning, use [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md) or [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), respectively. For more information, see [Spatial Mixing](spatial-mixing.md).

This class defines the *channel routing*, which is the strategy the framework uses to send source mono or multichannel assets to the output for playback. The asset’s audio channels route to the output for playback according to the channel layout and runtime output conditions the app designates on an instance of this class.

This class minimizes *up mixing* and *down mixing* — that is, source audio channel conversion to a higher or lower number of channels. For example, although a spatial mixer overrides the use of output channels by panning to convey listener position and orientation, the channel mixer maintains source audio channel layout to preserve the listening experience of the source audio.

## Topics

### Creating a Channel Mixer

- [initWithChannelLayout:](phasechannelmixerdefinition/init%28channellayout_%29.md): Creates a channel mixer with the given channel layout.
- [initWithChannelLayout:identifier:](phasechannelmixerdefinition/init%28channellayout_identifier_%29.md): Creates a named channel mixer with the given channel layout.

### Inspecting Channel Layout

- [inputChannelLayout](phasechannelmixerdefinition/inputchannellayout.md): The channel layout of the mixer’s input audio.

## Relationships

### Inherits From

- [PHASEMixerDefinition](phasemixerdefinition.md)

## See Also

### Audio Layering and Effects

- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.
