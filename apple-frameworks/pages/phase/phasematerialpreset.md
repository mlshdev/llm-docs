> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasematerialpreset](https://developer.apple.com/documentation/phase/phasematerialpreset)

# PHASEMaterialPreset (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.

## Declaration

```swift
enum PHASEMaterialPreset
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This enumeration defines the types of surface texture that you choose for your scene’s objects. To assign a preset to a material, define the `preset` argument for the material’s [init(engine:preset:)](phasematerial/init%28engine_preset_%29.md) initializer.

## Topics

### Presets

- [PHASEMaterialPreset.brick](phasematerialpreset/brick.md): A surface characteristic that produces the acoustic quality of brick.
- [PHASEMaterialPreset.cardboard](phasematerialpreset/cardboard.md): A surface characteristic that produces the acoustic quality of cardboard.
- [PHASEMaterialPreset.concrete](phasematerialpreset/concrete.md): A surface characteristic that produces the acoustic quality of concrete.
- [PHASEMaterialPreset.drywall](phasematerialpreset/drywall.md): A surface characteristic that produces the acoustic quality of drywall.
- [PHASEMaterialPreset.glass](phasematerialpreset/glass.md): A surface characteristic that produces the acoustic quality of glass.
- [PHASEMaterialPreset.wood](phasematerialpreset/wood.md): A surface characteristic that produces the acoustic quality of wood.

### Initializers

- [init(rawValue:)](phasematerialpreset/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShape.Element](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

# PHASEMaterialPreset (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.

## Declaration

```objectivec
enum PHASEMaterialPreset : NSInteger;
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

This enumeration defines the types of surface texture that you choose for your scene’s objects. To assign a preset to a material, define the `preset` argument for the material’s [initWithEngine:preset:](phasematerial/init%28engine_preset_%29.md) initializer.

## Topics

### Presets

- [PHASEMaterialPresetBrick](phasematerialpreset/brick.md): A surface characteristic that produces the acoustic quality of brick.
- [PHASEMaterialPresetCardboard](phasematerialpreset/cardboard.md): A surface characteristic that produces the acoustic quality of cardboard.
- [PHASEMaterialPresetConcrete](phasematerialpreset/concrete.md): A surface characteristic that produces the acoustic quality of concrete.
- [PHASEMaterialPresetDrywall](phasematerialpreset/drywall.md): A surface characteristic that produces the acoustic quality of drywall.
- [PHASEMaterialPresetGlass](phasematerialpreset/glass.md): A surface characteristic that produces the acoustic quality of glass.
- [PHASEMaterialPresetWood](phasematerialpreset/wood.md): A surface characteristic that produces the acoustic quality of wood.

## See Also

### Soundscape Creation

- [PHASESource](phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phaseobject.md): An object in the scene.
- [PHASEShape](phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShapeElement](phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMixerParameters](phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.
