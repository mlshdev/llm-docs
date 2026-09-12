> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixing](https://developer.apple.com/documentation/avfaudio/avaudio3dmixing)

# AVAudio3DMixing (Swift)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of properties that define 3D mixing properties.

## Declaration

```swift
protocol AVAudio3DMixing : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

Only the [AVAudioEnvironmentNode](avaudioenvironmentnode.md) class implements these properties.

> **Important**

>  The [AVAudioMixing](avaudiomixing.md) protocol adopts these properties. As a result, many classes inherit this protocol by adopting `AVAudioMixing`.

## Topics

### Getting the 3D Mixing Parameters

- [obstruction](avaudio3dmixing/obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](avaudio3dmixing/occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](avaudio3dmixing/position.md): The location of the source in the 3D environment.
- [rate](avaudio3dmixing/rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](avaudio3dmixing/pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](avaudio3dmixing/reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](avaudio3dmixing/sourcemode.md): The source mode for the input bus of the audio environment node.

### Getting and Setting the Rendering Algorithm

- [renderingAlgorithm](avaudio3dmixing/renderingalgorithm.md): The type of rendering algorithm the mixer uses.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [AVAudioMixing](avaudiomixing.md)

### Conforming Types

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md)
- [AVAudioInputNode](avaudioinputnode.md)
- [AVAudioMixerNode](avaudiomixernode.md)
- [AVAudioMixingDestination](avaudiomixingdestination.md)
- [AVAudioPlayerNode](avaudioplayernode.md)
- [AVAudioSourceNode](avaudiosourcenode.md)
- [AVAudioUnitGenerator](avaudiounitgenerator.md)
- [AVAudioUnitMIDIInstrument](avaudiounitmidiinstrument.md)
- [AVAudioUnitSampler](avaudiounitsampler.md)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DMixing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A collection of properties that define 3D mixing properties.

## Declaration

```objectivec
@protocol AVAudio3DMixing <NSObject>
```

<a id="overview"></a>

## Overview

Only the [AVAudioEnvironmentNode](avaudioenvironmentnode.md) class implements these properties.

> **Important**

>  The [AVAudioMixing](avaudiomixing.md) protocol adopts these properties. As a result, many classes inherit this protocol by adopting `AVAudioMixing`.

## Topics

### Getting the 3D Mixing Parameters

- [obstruction](avaudio3dmixing/obstruction.md): A value that simulates filtering of the direct path of sound due to an obstacle.
- [occlusion](avaudio3dmixing/occlusion.md): A value that simulates filtering of the direct and reverb paths of sound due to an obstacle.
- [position](avaudio3dmixing/position.md): The location of the source in the 3D environment.
- [rate](avaudio3dmixing/rate.md): A value that changes the playback rate of the input signal.
- [pointSourceInHeadMode](avaudio3dmixing/pointsourceinheadmode.md): The in-head mode for a point source.
- [reverbBlend](avaudio3dmixing/reverbblend.md): A value that controls the blend of dry and reverb processed audio.
- [sourceMode](avaudio3dmixing/sourcemode.md): The source mode for the input bus of the audio environment node.

### Getting and Setting the Rendering Algorithm

- [renderingAlgorithm](avaudio3dmixing/renderingalgorithm.md): The type of rendering algorithm the mixer uses.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
