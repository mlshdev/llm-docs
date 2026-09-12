> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/sound-event-nodes](https://developer.apple.com/documentation/phase/sound-event-nodes)

# Sound Event Nodes (Swift)

**Framework:** PHASE  
**Kind:** API Collection

Objects that connect to form a hierarchical tree of audio actions.

<a id="overview"></a>

## Overview

To play sound, your app assembles a hieararchical structure of audio *nodes* that determine which sound to play at the moment. A tree with two sampler nodes branching from a switch node plays only one sampler, depending on your app’s state. You set the control logic in advance that specifies the conditions upon which the switch node toggles. To play the same audio consistently, create a tree with a single sampler node.

To invoke the tree, create a sound event that references the tree and call [start(completion:)](phasesoundevent/start%28completion_%29.md) on the sound event.

## Topics

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASERandomNodeDefinition](phaserandomnodedefinition.md): A sound event node that invokes one of its child nodes at random.
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASESoundEvent.RenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.

# Sound Event Nodes (Objective-C)

**Framework:** PHASE  
**Kind:** API Collection

Objects that connect to form a hierarchical tree of audio actions.

<a id="overview"></a>

## Overview

To play sound, your app assembles a hieararchical structure of audio *nodes* that determine which sound to play at the moment. A tree with two sampler nodes branching from a switch node plays only one sampler, depending on your app’s state. You set the control logic in advance that specifies the conditions upon which the switch node toggles. To play the same audio consistently, create a tree with a single sampler node.

To invoke the tree, create a sound event that references the tree and call [startWithCompletion:](phasesoundevent/start%28completion_%29.md) on the sound event.

## Topics

### Audio-Providing Nodes

- [PHASESamplerNodeDefinition](phasesamplernodedefinition.md): A node that plays complete audio data.
- [PHASEPlaybackMode](phaseplaybackmode.md): Loop options for audio playback.
- [PHASEPushStreamNodeDefinition](phasepushstreamnodedefinition.md): A node that plays a sequence of audio buffers.
- [PHASEPushStreamNode](phasepushstreamnode.md): An audio stream you manage to provide a sound buffer data.
- [PHASEPushStreamBufferOptions](phasepushstreambufferoptions.md): Options that inform PHASE of an audio-stream buffer’s playback priority.
- [PHASECalibrationMode](phasecalibrationmode.md): Calibration options for sound pressure level.
- [PHASEGeneratorNodeDefinition](phasegeneratornodedefinition.md): A base class for nodes that provide audio data to generate sound.

### Control Nodes

- [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md): A node that passes invocation to only one of its child nodes.
- [PHASERandomNodeDefinition](phaserandomnodedefinition.md): A sound event node that invokes one of its child nodes at random.
- [PHASEBlendNodeDefinition](phaseblendnodedefinition.md): A node that smoothly fades between the audio of its child nodes.
- [PHASEContainerNodeDefinition](phasecontainernodedefinition.md): A node that plays all its children at the same time.

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent](phasesoundevent.md): An object that determines which audio to play.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
