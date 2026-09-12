> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/spatial-mixing](https://developer.apple.com/documentation/phase/spatial-mixing)

# Spatial Mixing (Swift)

**Framework:** PHASE  
**Kind:** API Collection

Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

<a id="overview"></a>

## Overview

Spatial mixing refers to the process by which PHASE emits one or more simultaneous sounds in 3D space and layers in optional environmental effects. For a walkthrough that demonstrates spatial mixing, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Setup

- [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md): An audio-layering object that produces environmental effects and plays sound with a 3D position and orientation.

### Sound Reflections and Resonance

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipeline.Flags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelFadeOutParameters](phasedistancemodelfadeoutparameters.md): A distance over which the framework fades out sound.
- [PHASEDistanceModelParameters](phasedistancemodelparameters.md): A base class for a sound’s rate of change over distance.

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASECardioidDirectivityModelSubbandParameters](phasecardioiddirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a heart.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

## See Also

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.

# Spatial Mixing (Objective-C)

**Framework:** PHASE  
**Kind:** API Collection

Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

<a id="overview"></a>

## Overview

Spatial mixing refers to the process by which PHASE emits one or more simultaneous sounds in 3D space and layers in optional environmental effects. For a walkthrough that demonstrates spatial mixing, see [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md).

## Topics

### Setup

- [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md): An audio-layering object that produces environmental effects and plays sound with a 3D position and orientation.

### Sound Reflections and Resonance

- [PHASESpatialPipeline](phasespatialpipeline.md): An object that specifies the volume of optional environmental effects.
- [PHASESpatialPipelineEntry](phasespatialpipelineentry.md): An audio layer with an adjustable volume for a spatial mixer’s output.
- [PHASESpatialCategory](phasespatialcategory.md): Sound resonance effects for spatial mixing.
- [PHASESpatialPipelineFlags](phasespatialpipeline/flags-swift.struct.md): Sound resonance options for a spatial pipeline.

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelFadeOutParameters](phasedistancemodelfadeoutparameters.md): A distance over which the framework fades out sound.
- [PHASEDistanceModelParameters](phasedistancemodelparameters.md): A base class for a sound’s rate of change over distance.

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASECardioidDirectivityModelSubbandParameters](phasecardioiddirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a heart.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

## See Also

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phasedefinition.md): A base class that adds a name to framework definitions.
