> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseshape/element](https://developer.apple.com/documentation/phase/phaseshape/element)

# PHASEShape.Element (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that describes the characteristics of a physical surface.

## Declaration

```swift
class Element
```

<a id="overview"></a>

## Overview

This class defines the material that makes up a [PHASEShape](../phaseshape.md) object.

You don’t instantiate instances of this class yourself; the framework creates an instance of this class for every material you pass into the [init(engine:mesh:materials:)](init%28engine_mesh_materials_%29.md) initializer. The shape’s [elements](elements.md) array provides read-only access to the instances.

## Topics

### Specifying a Meterial

- [material](element/material.md): A surface characteristic that determines the acoustic properties of an object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Soundscape Creation

- [PHASESource](../phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](../phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](../phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](../phaseobject.md): An object in the scene.
- [PHASEShape](../phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEMaterial](../phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](../phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](../phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASEShapeElement (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that describes the characteristics of a physical surface.

## Declaration

```objectivec
@interface PHASEShapeElement : NSObject
```

<a id="overview"></a>

## Overview

This class defines the material that makes up a [PHASEShape](../phaseshape.md) object.

You don’t instantiate instances of this class yourself; the framework creates an instance of this class for every material you pass into the [initWithEngine:mesh:materials:](init%28engine_mesh_materials_%29.md) initializer. The shape’s [elements](elements.md) array provides read-only access to the instances.

## Topics

### Specifying a Meterial

- [material](element/material.md): A surface characteristic that determines the acoustic properties of an object.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Soundscape Creation

- [PHASESource](../phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](../phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](../phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](../phaseobject.md): An object in the scene.
- [PHASEShape](../phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEMaterial](../phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](../phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](../phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
