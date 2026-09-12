> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase](https://developer.apple.com/documentation/phase)

# PHASE (Swift)

**Framework:** PHASE  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Create dynamic audio experiences in your game or app that react to events and cues in the environment.

<a id="overview"></a>

## Overview

Use PHASE (Physical Audio Spatialization Engine) to provide complex, dynamic audio experiences in your games and apps. With PHASE, you can control sound layers and adjust audio parameters in real time. As you develop your app, dynamic integration with your app’s visual scene enables audio to react to logic and visual changes automatically. The framework supports various audio hardware, which enables your app to provide a consistent spatial audio experience across platforms and output devices like headphones and speakers.

![Illustration of in-game scenes that demonstrate PHASE features. At left, a polygon contains a dragon with a callout that reads Volumetric sound source. A sound wave emits from the dragon to a hero. A tree structure extends outward from the dragon with a callout that reads Sound event hierarchy. The tree structure highlights a specific path from its root node to one of its leaf nodes. The leaf node contains a sound wave, which indicates a particular sound wave that emits from the dragon. At right, a dragon fireball collides with a rock. Sound waves emit outward from the fireball, except in the area behind the rock. A callout extends from the area that reads Geometric sound occlusion.](https://developer.apple.com/images/com.apple.phase/media-3855995@2x.png)

> **Note**

>  If the audio in your game or app doesn’t incorporate environmental events or cues, you can use [AVFoundation](avfoundation.md) or [Core Audio](coreaudio.md).

<a id="Integrate-Audio-with-Visual-Simulation"></a>

### Integrate Audio with Visual Simulation

Apps and games that model a detailed environment involve substantial revision during development. When you provide PHASE with a basic understanding of your app’s scene, audio plays in accordance with the scene’s characteristics. As you modify the scene, such as by adding a game level, the audio follows along by accommodating the level’s visual shape and properties. PHASE couples sound with visuals and minimizes your app’s audio maintenance by:

- Accepting scene geometry and reducing the volume of obstructed, sound-emitting scene objects. For example, PHASE lowers the volume of an incoming fireball when the player takes cover behind a wall.
- Offering complex sound events that play in reaction to your app’s runtime state.
- Adding sound effects that emanate from a shape. When you provide the shape of a scene object to PHASE, the sound’s volume scales based on the player’s distance and orientation relative to the shape.
- Adding reverberation and timed audio reflection to create environmental effects and simulate indoor scenes.

## Topics

### Essentials

- [Playing sound from a location in a 3D scene](phase/playing-sound-from-a-location-in-a-3d-scene.md): Position sound from a specific direction and automatically raise or lower volume based on the environment.
- [Personalizing spatial audio in your app](phase/personalizing-spatial-audio-in-your-app.md): Enhance the realism of spatial audio output by tracking a person’s head movement and accounting for their personal spatial audio profile.
- [PHASE updates](https://developer.apple.com/documentation/updates/phase): Learn about important changes to PHASE.

### Setup

Initialize an engine object and prepare your app’s audio data for playback.

- [PHASEEngine](phase/phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEEngine.UpdateMode](phase/phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASEEngine.RenderingMode](phase/phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phase/phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phase/phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phase/phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phase/phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phase/phasemedium.md): A property or quality of the environment that affects how sound travels.

### Soundscape Creation

Lay out objects in 3D space to play PHASE audio at runtime that’s consistent with your app’s visual scene.

- [PHASESource](phase/phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phase/phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phase/phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phase/phaseobject.md): An object in the scene.
- [PHASEShape](phase/phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShape.Element](phase/phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phase/phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phase/phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phase/phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

### Audio Selection and Playback

Create a hierarchy of nodes that tailors playback based on your app’s current state.

- [PHASESoundAsset](phase/phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phase/phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEvent.RenderingState](phase/phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phase/phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phase/phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phase/phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](phase/sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

### Audio Layering and Effects

Choose among the various ways to play sound depending on your app’s unique audio-playback needs.

- [PHASEChannelMixerDefinition](phase/phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phase/phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phase/phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phase/phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phase/phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](phase/spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

### Dynamic Sound Control

Apply mathematical functions or custom logic to change the properties of in-flight audio or the conditions under which audio plays.

- [PHASEEnvelope](phase/phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASEEnvelopeSegment](phase/phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phase/phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phase/phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](phase/playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

### Sound Grouping and Management

Change the characteristics of a group of sounds, such as altering their volume when your app transitions to a menu.

- [PHASEGroup](phase/phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPreset](phase/phasegrouppreset.md): A collection of settings for groups.
- [PHASEGroupPresetSetting](phase/phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phase/phaseducker.md): An object that manages competing sounds.

### Errors

- [PHASE Errors](phase/phase-errors.md): Errors that the PHASE framework reports.

### Classes

- [PHASEPullStreamNode](phase/phasepullstreamnode.md)
- [PHASEPullStreamNodeDefinition](phase/phasepullstreamnodedefinition.md)
- [PHASEStreamNode](phase/phasestreamnode.md)

### Structures

- [PHASEAutomaticHeadTrackingFlags](phase/phaseautomaticheadtrackingflags.md)

### Type Aliases

- [PHASEPullStreamRenderHandler](phase/phasepullstreamrenderhandler.md)

# PHASE (Objective-C)

**Framework:** PHASE  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Create dynamic audio experiences in your game or app that react to events and cues in the environment.

<a id="overview"></a>

## Overview

Use PHASE (Physical Audio Spatialization Engine) to provide complex, dynamic audio experiences in your games and apps. With PHASE, you can control sound layers and adjust audio parameters in real time. As you develop your app, dynamic integration with your app’s visual scene enables audio to react to logic and visual changes automatically. The framework supports various audio hardware, which enables your app to provide a consistent spatial audio experience across platforms and output devices like headphones and speakers.

![Illustration of in-game scenes that demonstrate PHASE features. At left, a polygon contains a dragon with a callout that reads Volumetric sound source. A sound wave emits from the dragon to a hero. A tree structure extends outward from the dragon with a callout that reads Sound event hierarchy. The tree structure highlights a specific path from its root node to one of its leaf nodes. The leaf node contains a sound wave, which indicates a particular sound wave that emits from the dragon. At right, a dragon fireball collides with a rock. Sound waves emit outward from the fireball, except in the area behind the rock. A callout extends from the area that reads Geometric sound occlusion.](https://developer.apple.com/images/com.apple.phase/media-3855995@2x.png)

> **Note**

>  If the audio in your game or app doesn’t incorporate environmental events or cues, you can use [AVFoundation](avfoundation.md) or [Core Audio](coreaudio.md).

<a id="Integrate-Audio-with-Visual-Simulation"></a>

### Integrate Audio with Visual Simulation

Apps and games that model a detailed environment involve substantial revision during development. When you provide PHASE with a basic understanding of your app’s scene, audio plays in accordance with the scene’s characteristics. As you modify the scene, such as by adding a game level, the audio follows along by accommodating the level’s visual shape and properties. PHASE couples sound with visuals and minimizes your app’s audio maintenance by:

- Accepting scene geometry and reducing the volume of obstructed, sound-emitting scene objects. For example, PHASE lowers the volume of an incoming fireball when the player takes cover behind a wall.
- Offering complex sound events that play in reaction to your app’s runtime state.
- Adding sound effects that emanate from a shape. When you provide the shape of a scene object to PHASE, the sound’s volume scales based on the player’s distance and orientation relative to the shape.
- Adding reverberation and timed audio reflection to create environmental effects and simulate indoor scenes.

## Topics

### Essentials

- [Playing sound from a location in a 3D scene](phase/playing-sound-from-a-location-in-a-3d-scene.md): Position sound from a specific direction and automatically raise or lower volume based on the environment.
- [Personalizing spatial audio in your app](phase/personalizing-spatial-audio-in-your-app.md): Enhance the realism of spatial audio output by tracking a person’s head movement and accounting for their personal spatial audio profile.
- [PHASE updates](https://developer.apple.com/documentation/updates/phase): Learn about important changes to PHASE.

### Setup

Initialize an engine object and prepare your app’s audio data for playback.

- [PHASEEngine](phase/phaseengine.md): An object that manages audio assets, controls playback, and configures environmental effects.
- [PHASEUpdateMode](phase/phaseengine/updatemode.md): Modes that determine when the framework consumes API calls and updates internal state.
- [PHASERenderingMode](phase/phaseengine/renderingmode.md): Modes that determine whether the system renders audio in process or out of process.
- [PHASEAssetRegistry](phase/phaseassetregistry.md): A central repository of audio assets.
- [PHASENormalizationMode](phase/phasenormalizationmode.md): Options that determine whether the framework adjusts a sound asset’s loudness for the user’s output device.
- [PHASESpatializationMode](phase/phasespatializationmode.md): The manner in which PHASE outputs spatial audio.
- [PHASEReverbPreset](phase/phasereverbpreset.md): The manner in which PHASE diffuses resonating sound.
- [PHASEMedium](phase/phasemedium.md): A property or quality of the environment that affects how sound travels.

### Soundscape Creation

Lay out objects in 3D space to play PHASE audio at runtime that’s consistent with your app’s visual scene.

- [PHASESource](phase/phasesource.md): An object that plays audio from a 3D location and orientation in a scene.
- [PHASEListener](phase/phaselistener.md): A central point of reference that defines the location within the scene that’s most audible to the user.
- [PHASEOccluder](phase/phaseoccluder.md): An object with a shape and position that blocks audio from reaching the listener.
- [PHASEObject](phase/phaseobject.md): An object in the scene.
- [PHASEShape](phase/phaseshape.md): A collection of points that connect to form a 3D volume.
- [PHASEShapeElement](phase/phaseshape/element.md): An object that describes the characteristics of a physical surface.
- [PHASEMaterial](phase/phasematerial.md): Surface characteristics that determine the acoustic properties of an object.
- [PHASEMaterialPreset](phase/phasematerialpreset.md): A collection of physical surfaces that each add a unique acoustic quality to your app’s audio.
- [PHASEMixerParameters](phase/phasemixerparameters.md): An object that specifies a mixer for sound events and orients them in 3D space.

### Audio Selection and Playback

Create a hierarchy of nodes that tailors playback based on your app’s current state.

- [PHASESoundAsset](phase/phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phase/phasesoundevent.md): An object that determines which audio to play.
- [PHASERenderingState](phase/phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phase/phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phase/phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phase/phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](phase/sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

### Audio Layering and Effects

Choose among the various ways to play sound depending on your app’s unique audio-playback needs.

- [PHASEChannelMixerDefinition](phase/phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phase/phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phase/phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phase/phasemixer.md): An object that combines multiple audio signals into a single signal.
- [PHASEDefinition](phase/phasedefinition.md): A base class that adds a name to framework definitions.
- [Spatial Mixing](phase/spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

### Dynamic Sound Control

Apply mathematical functions or custom logic to change the properties of in-flight audio or the conditions under which audio plays.

- [PHASEEnvelope](phase/phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASEEnvelopeSegment](phase/phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phase/phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phase/phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](phase/playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

### Sound Grouping and Management

Change the characteristics of a group of sounds, such as altering their volume when your app transitions to a menu.

- [PHASEGroup](phase/phasegroup.md): A container that shares audio parameters with a collection of sounds.
- [PHASEGroupPreset](phase/phasegrouppreset.md): A collection of settings for groups.
- [PHASEGroupPresetSetting](phase/phasegrouppresetsetting.md): Settings for group presets.
- [PHASEDucker](phase/phaseducker.md): An object that manages competing sounds.

### Errors

- [PHASE Errors](phase/phase-errors.md): Errors that the PHASE framework reports.

### Classes

- [PHASEPullStreamNode](phase/phasepullstreamnode.md)
- [PHASEPullStreamNodeDefinition](phase/phasepullstreamnodedefinition.md)
- [PHASEStreamNode](phase/phasestreamnode.md)

### Type Aliases

- [PHASEPullStreamRenderBlock](phase/phasepullstreamrenderhandler.md)

### Enumerations

- [PHASEAutomaticHeadTrackingFlags](phase/phaseautomaticheadtrackingflags.md)
