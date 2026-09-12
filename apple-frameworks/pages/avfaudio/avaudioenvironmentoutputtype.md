> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentoutputtype](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentoutputtype)

# AVAudioEnvironmentOutputType (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The output types for using with the automatic 3D mixing rendering algorithm.

## Declaration

```swift
enum AVAudioEnvironmentOutputType
```

<a id="overview"></a>

## Overview

The output type determines the rendering method for any input bus using [AVAudio3DMixingRenderingAlgorithm.auto](avaudio3dmixingrenderingalgorithm/auto.md). To configure the output type, set [outputType](avaudioenvironmentnode/outputtype.md) on [AVAudioEnvironmentNode](avaudioenvironmentnode.md).

## Topics

### Output Types

- [AVAudioEnvironmentOutputType.auto](avaudioenvironmentoutputtype/auto.md): Automatically detects the playback route and picks the correct output.
- [AVAudioEnvironmentOutputType.headphones](avaudioenvironmentoutputtype/headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputType.builtInSpeakers](avaudioenvironmentoutputtype/builtinspeakers.md): Renders the audio output for built-in speakers on the current hardware.
- [AVAudioEnvironmentOutputType.externalSpeakers](avaudioenvironmentoutputtype/externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.

### Initializers

- [init(rawValue:)](avaudioenvironmentoutputtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudioEnvironmentOutputType (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The output types for using with the automatic 3D mixing rendering algorithm.

## Declaration

```objectivec
enum AVAudioEnvironmentOutputType : NSInteger;
```

<a id="overview"></a>

## Overview

The output type determines the rendering method for any input bus using [AVAudio3DMixingRenderingAlgorithmAuto](avaudio3dmixingrenderingalgorithm/auto.md). To configure the output type, set [outputType](avaudioenvironmentnode/outputtype.md) on [AVAudioEnvironmentNode](avaudioenvironmentnode.md).

## Topics

### Output Types

- [AVAudioEnvironmentOutputTypeAuto](avaudioenvironmentoutputtype/auto.md): Automatically detects the playback route and picks the correct output.
- [AVAudioEnvironmentOutputTypeHeadphones](avaudioenvironmentoutputtype/headphones.md): Renders the audio output for headphones.
- [AVAudioEnvironmentOutputTypeBuiltInSpeakers](avaudioenvironmentoutputtype/builtinspeakers.md): Renders the audio output for built-in speakers on the current hardware.
- [AVAudioEnvironmentOutputTypeExternalSpeakers](avaudioenvironmentoutputtype/externalspeakers.md): Renders the audio output for external speakers according to the audio environment node’s output channel layout.

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
