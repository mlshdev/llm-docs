> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesource](https://developer.apple.com/documentation/phase/phasesource)

# PHASESource (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that plays audio from a 3D location and orientation in a scene.

## Declaration

```swift
class PHASESource
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class represents a sound-emitting point or area in a virtual environment, positioned and oriented by a 3D [transform](phaseobject/transform.md).

A spatial mixer, [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), adds environmental effects to sound sources. To tie a mixer to a sound source, create a [PHASEMixerParameters](phasemixerparameters.md) object and pass it into the `mixerParameters` argument of a sound event’s [init(engine:assetIdentifier:mixerParameters:)](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md) initializer.

For an example that demonstrates sound sources, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Creating a Source

- [init(engine:)](phasesource/init%28engine_%29.md): Creates a single point in the environment from which sound emanates.
- [init(engine:shapes:)](phasesource/init%28engine_shapes_%29.md): Creates a voluminous area in the environment from which sound emanates.

### Controlling Sound Volume

- [gain](phasesource/gain.md): The amount of sound the source emanates.

### Inspecting the Shape

- [shapes](phasesource/shapes.md): An array of shapes that collectively define the audio-emitting surface area of a volumetric source.

## Relationships

### Inherits From

- [PHASEObject](phaseobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Soundscape Creation

- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASESource (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that plays audio from a 3D location and orientation in a scene.

## Declaration

```objectivec
@interface PHASESource : PHASEObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class represents a sound-emitting point or area in a virtual environment, positioned and oriented by a 3D [transform](phaseobject/transform.md).

A spatial mixer, [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md), adds environmental effects to sound sources. To tie a mixer to a sound source, create a [PHASEMixerParameters](phasemixerparameters.md) object and pass it into the `mixerParameters` argument of a sound event’s [initWithEngine:assetIdentifier:mixerParameters:error:](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md) initializer.

For an example that demonstrates sound sources, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Creating a Source

- [initWithEngine:](phasesource/init%28engine_%29.md): Creates a single point in the environment from which sound emanates.
- [initWithEngine:shapes:](phasesource/init%28engine_shapes_%29.md): Creates a voluminous area in the environment from which sound emanates.

### Controlling Sound Volume

- [gain](phasesource/gain.md): The amount of sound the source emanates.

### Inspecting the Shape

- [shapes](phasesource/shapes.md): An array of shapes that collectively define the audio-emitting surface area of a volumetric source.

## Relationships

### Inherits From

- [PHASEObject](phaseobject.md)

## See Also

### Soundscape Creation

- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
