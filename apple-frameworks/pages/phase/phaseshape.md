> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseshape](https://developer.apple.com/documentation/phase/phaseshape)

# PHASEShape (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of points that connect to form a 3D volume.

## Declaration

```swift
class PHASEShape
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

To define your scene’s important 3D volumes, create one or more of the following surfaces and add them to your scene’s [shapes](phasesource/shapes.md) array:

- The audio-emitting surface of a volumetric [PHASESource](phasesource.md)
- The audio-deflecting surface and texture of a [PHASEOccluder](phaseoccluder.md)

## Topics

### Creating a Shape

- [init(engine:mesh:)](phaseshape/init%28engine_mesh_%29.md): Creates an object that the given geometric data shapes.
- [init(engine:mesh:materials:)](phaseshape/init%28engine_mesh_materials_%29.md): Creates an object of a specific material that the given geometric data shapes.

### Describing Surface Characteristics

- [elements](phaseshape/elements.md): An array of objects that collectively describe the physical characteristics of a surface.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASEShape (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of points that connect to form a 3D volume.

## Declaration

```objectivec
@interface PHASEShape : NSObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

To define your scene’s important 3D volumes, create one or more of the following surfaces and add them to your scene’s [shapes](phasesource/shapes.md) array:

- The audio-emitting surface of a volumetric [PHASESource](phasesource.md)
- The audio-deflecting surface and texture of a [PHASEOccluder](phaseoccluder.md)

## Topics

### Creating a Shape

- [initWithEngine:mesh:](phaseshape/init%28engine_mesh_%29.md): Creates an object that the given geometric data shapes.
- [initWithEngine:mesh:materials:](phaseshape/init%28engine_mesh_materials_%29.md): Creates an object of a specific material that the given geometric data shapes.

### Describing Surface Characteristics

- [elements](phaseshape/elements.md): An array of objects that collectively describe the physical characteristics of a surface.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
