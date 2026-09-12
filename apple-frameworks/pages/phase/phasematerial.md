> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasematerial](https://developer.apple.com/documentation/phase/phasematerial)

# PHASEMaterial (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Surface characteristics that determine the acoustic properties of an object.

## Declaration

```swift
class PHASEMaterial
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

To specify the physical texture of a sound source or occluder, define the `materials` argument of the [PHASEShape](phaseshape.md) initializer, [init(engine:mesh:materials:)](phaseshape/init%28engine_mesh_materials_%29.md). The [PHASEMaterialPreset](phasematerialpreset.md) contains the surface types with which you define the `preset` argument of this class’s [init(engine:preset:)](phasematerial/init%28engine_preset_%29.md) initializer.

## Topics

### Creating a Material

- [init(engine:preset:)](phasematerial/init%28engine_preset_%29.md): Creates a material with the given preset.

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
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASEMaterial (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Surface characteristics that determine the acoustic properties of an object.

## Declaration

```objectivec
@interface PHASEMaterial : NSObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

To specify the physical texture of a sound source or occluder, define the `materials` argument of the [PHASEShape](phaseshape.md) initializer, [initWithEngine:mesh:materials:](phaseshape/init%28engine_mesh_materials_%29.md). The [PHASEMaterialPreset](phasematerialpreset.md) contains the surface types with which you define the `preset` argument of this class’s [initWithEngine:preset:](phasematerial/init%28engine_preset_%29.md) initializer.

## Topics

### Creating a Material

- [initWithEngine:preset:](phasematerial/init%28engine_preset_%29.md): Creates a material with the given preset.

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
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
