> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasespatialmixerdefinition](https://developer.apple.com/documentation/phase/phasespatialmixerdefinition)

# PHASESpatialMixerDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio-layering object that produces environmental effects and plays sound with a 3D position and orientation.

## Declaration

```swift
class PHASESpatialMixerDefinition
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class enables the app to define a relationship between a source and listener in six degrees of freedom: orientation (roll, pitch, yaw) and a 3D position (x, y, z).

The framework plays back an audio source with *distance modeling* (see [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md)), direct path transmission effects and any combination of environmental effects, such as reverb (see [PHASESpatialPipeline](phasespatialpipeline.md)), and directivity (see [listenerDirectivityModelParameters](phasespatialmixerdefinition/listenerdirectivitymodelparameters.md)). 

The result enables an app to implement directive point or omnidirectional sound sources — with or without direction, respectively — and volumetric sources with a defined shape.

For a walkthrough of spatial mixing, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Creating a Spatial Mixer

- [init(spatialPipeline:)](phasespatialmixerdefinition/init%28spatialpipeline_%29.md): Creates a mixer with the designated spatial pipeline.
- [init(spatialPipeline:identifier:)](phasespatialmixerdefinition/init%28spatialpipeline_identifier_%29.md): Creates a named mixer with the designated spatial pipeline.

### Setting a Pipeline

- [spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md): An object that adds sound layers for environmental effects.

### Changing Sound Over Distance

- [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md): An effect that changes sound as it carries over a distance.

### Configuring Directivity

- [listenerDirectivityModelParameters](phasespatialmixerdefinition/listenerdirectivitymodelparameters.md): A data set that determines how well the listener hears depending on its direction relative to a sound source.
- [sourceDirectivityModelParameters](phasespatialmixerdefinition/sourcedirectivitymodelparameters.md): A data set that directs sound such that it’s louder when directed at the listener.

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

# PHASESpatialMixerDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An audio-layering object that produces environmental effects and plays sound with a 3D position and orientation.

## Declaration

```objectivec
@interface PHASESpatialMixerDefinition : PHASEMixerDefinition
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class enables the app to define a relationship between a source and listener in six degrees of freedom: orientation (roll, pitch, yaw) and a 3D position (x, y, z).

The framework plays back an audio source with *distance modeling* (see [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md)), direct path transmission effects and any combination of environmental effects, such as reverb (see [PHASESpatialPipeline](phasespatialpipeline.md)), and directivity (see [listenerDirectivityModelParameters](phasespatialmixerdefinition/listenerdirectivitymodelparameters.md)). 

The result enables an app to implement directive point or omnidirectional sound sources — with or without direction, respectively — and volumetric sources with a defined shape.

For a walkthrough of spatial mixing, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Creating a Spatial Mixer

- [initWithSpatialPipeline:](phasespatialmixerdefinition/init%28spatialpipeline_%29.md): Creates a mixer with the designated spatial pipeline.
- [initWithSpatialPipeline:identifier:](phasespatialmixerdefinition/init%28spatialpipeline_identifier_%29.md): Creates a named mixer with the designated spatial pipeline.

### Setting a Pipeline

- [spatialPipeline](phasespatialmixerdefinition/spatialpipeline.md): An object that adds sound layers for environmental effects.

### Changing Sound Over Distance

- [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md): An effect that changes sound as it carries over a distance.

### Configuring Directivity

- [listenerDirectivityModelParameters](phasespatialmixerdefinition/listenerdirectivitymodelparameters.md): A data set that determines how well the listener hears depending on its direction relative to a sound source.
- [sourceDirectivityModelParameters](phasespatialmixerdefinition/sourcedirectivitymodelparameters.md): A data set that directs sound such that it’s louder when directed at the listener.

## Relationships

### Inherits From

- [PHASEMixerDefinition](phasemixerdefinition.md)
