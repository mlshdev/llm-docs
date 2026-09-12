> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent](https://developer.apple.com/documentation/phase/phasesoundevent)

# PHASESoundEvent (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that determines which audio to play.

## Declaration

```swift
class PHASESoundEvent
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

A sound event represents a logic tree, or hierarchy, that defines what, when, and how the framework plays a sound at runtime. You configure the tree with conditions based on your app’s state. When you invoke a sound event’s root node at runtime, the framework navigates the tree by branching based on the logic, landing on a playable node that sends the right audio to the output device:

- To invoke a specific one-time sound, create a sound event from a single sampler node.
- To invoke a sound event that tailors its sound based on your app’s state, define a sound event hierarchy containing one or more control nodes; see [Sound Event Nodes](sound-event-nodes.md). For example, to play either footsteps or a jumping noise depending on the hero’s state, you configure a switch node that navigates based on the hero’s hypothetical `isJumping` metaparameter.

For sound event nodes that play audio, the asset’s [playbackMode](phasesamplernodedefinition/playbackmode.md) determines whether the audio loops. One-time sound events stop automatically at the end of the audio data. Looping sound events (those with [playbackMode](phasesamplernodedefinition/playbackmode.md) `=` [PHASEPlaybackMode.looping](phaseplaybackmode/looping.md)) require you to explicitly call [stopAndInvalidate()](phasesoundevent/stopandinvalidate%28%29.md) to stop the audio.

<a id="Playing-a-one-shot-channel-based-sound"></a>

### Playing a one-shot channel-based sound

Apps create a sound event by requesting one from a sound event node asset. To create a sound event node asset, combine a sound asset (the source audio data) with a mixer object (which combines sound layers for output) to create a node, and add the node to the asset registry. By creating a sound event from a sampler node ([PHASESamplerNodeDefinition](phasesamplernodedefinition.md)), the following code plays an audio file once before discarding it.

```swift
// Create a channel layout for audio types that contain no channel metadata. 
let stereoLayout = AVAudioChannelLayout(layoutTag: kAudioChannelLayoutTag_Stereo)    

// Load an audio file from the bundle.
let bangSoundURL = Bundle.main.url(forResource: "bangSound", withExtension: "wav")!

// Create and register a sound asset.
var bangSoundAsset:PHASESoundAsset!
do { 
    bangSoundAsset = try engine.assetRegistry.registerSoundAsset(
        url: bangSoundURL, 
        identifier: "bangSound", 
        assetType: .resident, 
        channelLayout: stereoLayout,
        normalizationMode: .dynamic)
} catch { print("Failed to register the sound asset.") }

// Create a mixer that routes sound directly to the output.
let stereoMixer = PHASEChannelMixerDefinition(channelLayout:stereoLayout!)

// Create a sound event node.
let bangSoundSamplerNode = PHASESamplerNodeDefinition(
    soundAssetIdentifier: bangSoundAsset.identifier, 
    mixerDefinition: stereoMixer, identifier:"bangSoundNode")

// Add the sound event node to the asset registry and retrieve the asset object.
var bangSoundSoundEventAsset: PHASESoundEventNodeAsset! 
do {
    bangSoundEventAsset = try engine.assetRegistry.registerSoundEventAsset(
        rootNode: bangSoundSamplerNode, identifier:"bangSoundTree")
} catch { print ("Failed to register the sound event node.") }
```

The resulting node asset represents a template for audio that’s ready for playback. To play the audio, spawn a sound event off of the node asset and call [start(completion:)](phasesoundevent/start%28completion_%29.md) to invoke the sound event.

```swift
// Create a playable sound event from the template sound event asset.
var bangSoundEvent: PHASESoundEvent!
do {
        bangSoundEvent = try PHASESoundEvent(engine:engine, 
        assetIdentifier: bangSoundEventAsset.identifier)
} catch { print ("Failed to create the sound event.") }

// Play the one-shot sound event.
bangSoundEvent.start()
```

> **Important**

>  To play the same sound asset again, create another sound event object. After the first [start(completion:)](phasesoundevent/start%28completion_%29.md) call on a particular `PHASESoundEvent` instance, subsequent calls have no effect.

## Topics

### Creating a Sound Event

- [init(engine:assetIdentifier:)](phasesoundevent/init%28engine_assetidentifier_%29.md): Creates a sound event node with the given asset.
- [init(engine:assetIdentifier:mixerParameters:)](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md): Creates a sound event node with the given asset and mixer parameters.

### Configuring Mixers and Metaparameters

- [mixers](phasesoundevent/mixers.md): Nodes in the event tree that control the volume of their child nodes.
- [metaParameters](phasesoundevent/metaparameters.md): The object’s meta parameters.

### Preparing Playback

- [prepare(completion:)](phasesoundevent/prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEvent.PrepareHandlerReason](phasesoundevent/preparehandlerreason.md): Indicates the results of sound-event preparation.
- [prepareState](phasesoundevent/preparestate-swift.property.md): The status of sound-event preparation.
- [PHASESoundEvent.PrepareState](phasesoundevent/preparestate-swift.enum.md): Indicates the state of sound-event preparation.

### Checking Playback Status

- [renderingState](phasesoundevent/renderingstate-swift.property.md): The sound event’s playback status.
- [PHASESoundEvent.RenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.

### Providing Buffered Data

- [pushStreamNodes](phasesoundevent/pushstreamnodes.md): A collection of audio streams for playback.

### Starting Playback

- [start(completion:)](phasesoundevent/start%28completion_%29.md): Invokes the sound event and runs the specified code on completion.
- [PHASESoundEvent.StartHandlerReason](phasesoundevent/starthandlerreason.md): Indicates the status after starting a sound event.

### Seeking a Time

- [seek(to:completion:)](phasesoundevent/seek%28to_completion_%29.md): Advances the sound event’s playback position to a specific time.
- [PHASESoundEvent.SeekHandlerReason](phasesoundevent/seekhandlerreason.md): Indicates the status after a sound event changes its playback position.

### Pausing Playback

- [pause()](phasesoundevent/pause%28%29.md): Pauses the sound event.
- [resume()](phasesoundevent/resume%28%29.md): Resumes the sound event.

### Stopping Playback

- [stopAndInvalidate()](phasesoundevent/stopandinvalidate%28%29.md): Stops a sound event and prevents it from resuming.
- [isIndefinite](phasesoundevent/isindefinite.md): A Boolean value that indicates whether the sound loops or stops on its own.

### Instance Properties

- [pullStreamNodes](phasesoundevent/pullstreamnodes.md)

### Instance Methods

- [resume(at:)](phasesoundevent/resume%28at_%29.md)
- [seek(to:resumeAt:completion:)](phasesoundevent/seek%28to_resumeat_completion_%29.md)
- [start(at:completion:)](phasesoundevent/start%28at_completion_%29.md)

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

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASESoundEvent.RenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.

# PHASESoundEvent (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that determines which audio to play.

## Declaration

```objectivec
@interface PHASESoundEvent : NSObject
```

## Mentioned In

- [Playing sound from a location in a 3D scene](playing-sound-from-a-location-in-a-3d-scene.md)

<a id="overview"></a>

## Overview

A sound event represents a logic tree, or hierarchy, that defines what, when, and how the framework plays a sound at runtime. You configure the tree with conditions based on your app’s state. When you invoke a sound event’s root node at runtime, the framework navigates the tree by branching based on the logic, landing on a playable node that sends the right audio to the output device:

- To invoke a specific one-time sound, create a sound event from a single sampler node.
- To invoke a sound event that tailors its sound based on your app’s state, define a sound event hierarchy containing one or more control nodes; see [Sound Event Nodes](sound-event-nodes.md). For example, to play either footsteps or a jumping noise depending on the hero’s state, you configure a switch node that navigates based on the hero’s hypothetical `isJumping` metaparameter.

For sound event nodes that play audio, the asset’s [playbackMode](phasesamplernodedefinition/playbackmode.md) determines whether the audio loops. One-time sound events stop automatically at the end of the audio data. Looping sound events (those with [playbackMode](phasesamplernodedefinition/playbackmode.md) `=` [PHASEPlaybackModeLooping](phaseplaybackmode/looping.md)) require you to explicitly call [stopAndInvalidate](phasesoundevent/stopandinvalidate%28%29.md) to stop the audio.

<a id="Playing-a-one-shot-channel-based-sound"></a>

### Playing a one-shot channel-based sound

Apps create a sound event by requesting one from a sound event node asset. To create a sound event node asset, combine a sound asset (the source audio data) with a mixer object (which combines sound layers for output) to create a node, and add the node to the asset registry. By creating a sound event from a sampler node ([PHASESamplerNodeDefinition](phasesamplernodedefinition.md)), the following code plays an audio file once before discarding it.

```swift
// Create a channel layout for audio types that contain no channel metadata. 
let stereoLayout = AVAudioChannelLayout(layoutTag: kAudioChannelLayoutTag_Stereo)    

// Load an audio file from the bundle.
let bangSoundURL = Bundle.main.url(forResource: "bangSound", withExtension: "wav")!

// Create and register a sound asset.
var bangSoundAsset:PHASESoundAsset!
do { 
    bangSoundAsset = try engine.assetRegistry.registerSoundAsset(
        url: bangSoundURL, 
        identifier: "bangSound", 
        assetType: .resident, 
        channelLayout: stereoLayout,
        normalizationMode: .dynamic)
} catch { print("Failed to register the sound asset.") }

// Create a mixer that routes sound directly to the output.
let stereoMixer = PHASEChannelMixerDefinition(channelLayout:stereoLayout!)

// Create a sound event node.
let bangSoundSamplerNode = PHASESamplerNodeDefinition(
    soundAssetIdentifier: bangSoundAsset.identifier, 
    mixerDefinition: stereoMixer, identifier:"bangSoundNode")

// Add the sound event node to the asset registry and retrieve the asset object.
var bangSoundSoundEventAsset: PHASESoundEventNodeAsset! 
do {
    bangSoundEventAsset = try engine.assetRegistry.registerSoundEventAsset(
        rootNode: bangSoundSamplerNode, identifier:"bangSoundTree")
} catch { print ("Failed to register the sound event node.") }
```

The resulting node asset represents a template for audio that’s ready for playback. To play the audio, spawn a sound event off of the node asset and call [startWithCompletion:](phasesoundevent/start%28completion_%29.md) to invoke the sound event.

```swift
// Create a playable sound event from the template sound event asset.
var bangSoundEvent: PHASESoundEvent!
do {
        bangSoundEvent = try PHASESoundEvent(engine:engine, 
        assetIdentifier: bangSoundEventAsset.identifier)
} catch { print ("Failed to create the sound event.") }

// Play the one-shot sound event.
bangSoundEvent.start()
```

> **Important**

>  To play the same sound asset again, create another sound event object. After the first [startWithCompletion:](phasesoundevent/start%28completion_%29.md) call on a particular `PHASESoundEvent` instance, subsequent calls have no effect.

## Topics

### Creating a Sound Event

- [initWithEngine:assetIdentifier:error:](phasesoundevent/init%28engine_assetidentifier_%29.md): Creates a sound event node with the given asset.
- [initWithEngine:assetIdentifier:mixerParameters:error:](phasesoundevent/init%28engine_assetidentifier_mixerparameters_%29.md): Creates a sound event node with the given asset and mixer parameters.

### Configuring Mixers and Metaparameters

- [mixers](phasesoundevent/mixers.md): Nodes in the event tree that control the volume of their child nodes.
- [metaParameters](phasesoundevent/metaparameters.md): The object’s meta parameters.

### Preparing Playback

- [prepareWithCompletion:](phasesoundevent/prepare%28completion_%29.md): Enables a sound event to play and runs the argument code when the sound event plays back.
- [PHASESoundEventPrepareHandlerReason](phasesoundevent/preparehandlerreason.md): Indicates the results of sound-event preparation.
- [prepareState](phasesoundevent/preparestate-swift.property.md): The status of sound-event preparation.
- [PHASESoundEventPrepareState](phasesoundevent/preparestate-swift.enum.md): Indicates the state of sound-event preparation.

### Checking Playback Status

- [renderingState](phasesoundevent/renderingstate-swift.property.md): The sound event’s playback status.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.

### Providing Buffered Data

- [pushStreamNodes](phasesoundevent/pushstreamnodes.md): A collection of audio streams for playback.

### Starting Playback

- [startWithCompletion:](phasesoundevent/start%28completion_%29.md): Invokes the sound event and runs the specified code on completion.
- [PHASESoundEventStartHandlerReason](phasesoundevent/starthandlerreason.md): Indicates the status after starting a sound event.

### Seeking a Time

- [seekToTime:completion:](phasesoundevent/seek%28to_completion_%29.md): Advances the sound event’s playback position to a specific time.
- [PHASESoundEventSeekHandlerReason](phasesoundevent/seekhandlerreason.md): Indicates the status after a sound event changes its playback position.

### Pausing Playback

- [pause](phasesoundevent/pause%28%29.md): Pauses the sound event.
- [resume](phasesoundevent/resume%28%29.md): Resumes the sound event.

### Stopping Playback

- [stopAndInvalidate](phasesoundevent/stopandinvalidate%28%29.md): Stops a sound event and prevents it from resuming.
- [indefinite](phasesoundevent/isindefinite.md): A Boolean value that indicates whether the sound loops or stops on its own.

### Instance Properties

- [pullStreamNodes](phasesoundevent/pullstreamnodes.md)

### Instance Methods

- [resumeAtTime:](phasesoundevent/resume%28at_%29.md)
- [seekToTime:resumeAtEngineTime:completion:](phasesoundevent/seek%28to_resumeat_completion_%29.md)
- [startAtTime:completion:](phasesoundevent/start%28at_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Audio Selection and Playback

- [PHASESoundAsset](phasesoundasset.md): A sound resource stored in the asset registry.
- [PHASERenderingState](phasesoundevent/renderingstate-swift.enum.md): The playback status of audio.
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md): A base class for sound event nodes that connect to form a node hierarchy.
- [PHASESoundEventNodeAsset](phasesoundeventnodeasset.md): A template object for sounds that can play in reaction to environmental state.
- [PHASEAsset](phaseasset.md): A base class that adds a name to framework assets.
- [Sound Event Nodes](sound-event-nodes.md): Objects that connect to form a hierarchical tree of audio actions.
