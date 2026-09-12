> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemixerparameters](https://developer.apple.com/documentation/phase/phasemixerparameters)

# PHASEMixerParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies a mixer for sound events and orients them in 3D space.

## Declaration

```swift
class PHASEMixerParameters
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class orients a sound event in 3D space relative to a listener. When you configure an ambient mixer’s orientation and a listener’s orientation, PHASE lowers the volume of the sound event if the two orientations point away from each other, and plays the sound at full volume if they point at each other. To add an instance of this class to a sound event, use the `mixerParameters` argument of a sound event’s [init(engine:assetIdentifier:mixerParameters:)](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md) initializer.

Alternatively, PHASE can adjust a sound event’s loudness based on its distance from the listener in 3D space. By calling this class’s [addSpatialMixerParameters(identifier:source:listener:)](phasemixerparameters/addspatialmixerparameters%28identifier_source_listener_%29.md) function, you supply a sound source that defines the location. For more information, see [Spatial Mixing](spatial-mixing.md).

Ambient sound events define only a listener and play with a consistent loudness, regardless of the listener’s position in the scene. To define a listener and select a particular ambient mixer that outputs the sound, call this class’s [addAmbientMixerParameters(identifier:listener:)](phasemixerparameters/addambientmixerparameters%28identifier_listener_%29.md) function.

## Topics

### Positioning and Orienting Audio

- [addAmbientMixerParameters(identifier:listener:)](phasemixerparameters/addambientmixerparameters%28identifier_listener_%29.md): Adds runtime parameters for an ambient mixer.
- [addSpatialMixerParameters(identifier:source:listener:)](phasemixerparameters/addspatialmixerparameters%28identifier_source_listener_%29.md): Adds runtime parameters for a spatial mixer.

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

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.

# PHASEMixerParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that specifies a mixer for sound events and orients them in 3D space.

## Declaration

```objectivec
@interface PHASEMixerParameters : NSObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This class orients a sound event in 3D space relative to a listener. When you configure an ambient mixer’s orientation and a listener’s orientation, PHASE lowers the volume of the sound event if the two orientations point away from each other, and plays the sound at full volume if they point at each other. To add an instance of this class to a sound event, use the `mixerParameters` argument of a sound event’s [initWithEngine:assetIdentifier:mixerParameters:error:](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md) initializer.

Alternatively, PHASE can adjust a sound event’s loudness based on its distance from the listener in 3D space. By calling this class’s [addSpatialMixerParametersWithIdentifier:source:listener:](phasemixerparameters/addspatialmixerparameters%28identifier_source_listener_%29.md) function, you supply a sound source that defines the location. For more information, see [Spatial Mixing](spatial-mixing.md).

Ambient sound events define only a listener and play with a consistent loudness, regardless of the listener’s position in the scene. To define a listener and select a particular ambient mixer that outputs the sound, call this class’s [addAmbientMixerParametersWithIdentifier:listener:](phasemixerparameters/addambientmixerparameters%28identifier_listener_%29.md) function.

## Topics

### Positioning and Orienting Audio

- [addAmbientMixerParametersWithIdentifier:listener:](phasemixerparameters/addambientmixerparameters%28identifier_listener_%29.md): Adds runtime parameters for an ambient mixer.
- [addSpatialMixerParametersWithIdentifier:source:listener:](phasemixerparameters/addspatialmixerparameters%28identifier_source_listener_%29.md): Adds runtime parameters for a spatial mixer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
