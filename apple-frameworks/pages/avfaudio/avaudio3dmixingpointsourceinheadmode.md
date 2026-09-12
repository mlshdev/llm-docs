> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingpointsourceinheadmode](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingpointsourceinheadmode)

# AVAudio3DMixingPointSourceInHeadMode (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The in-head modes for a point source.

## Declaration

```swift
enum AVAudio3DMixingPointSourceInHeadMode
```

<a id="overview"></a>

## Overview

The in-head mode that determines what happens when a [AVAudio3DMixingSourceMode.pointSource](avaudio3dmixingsourcemode/pointsource.md) moves inside the head of the listener. The in-head mode applies when using the [AVAudio3DMixingRenderingAlgorithm.auto](avaudio3dmixingrenderingalgorithm/auto.md) rendering algorithm.

## Topics

### In-Head Modes

- [AVAudio3DMixingPointSourceInHeadMode.mono](avaudio3dmixingpointsourceinheadmode/mono.md): The point source remains a single mono source inside the head of the listener regardless of the channels it consists of.
- [AVAudio3DMixingPointSourceInHeadMode.bypass](avaudio3dmixingpointsourceinheadmode/bypass.md): The point source distributes into each output channel inside the head of the listener.

### Initializers

- [init(rawValue:)](avaudio3dmixingpointsourceinheadmode/init%28rawvalue_%29.md)

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
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DMixingPointSourceInHeadMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The in-head modes for a point source.

## Declaration

```objectivec
enum AVAudio3DMixingPointSourceInHeadMode : NSInteger;
```

<a id="overview"></a>

## Overview

The in-head mode that determines what happens when a [AVAudio3DMixingSourceModePointSource](avaudio3dmixingsourcemode/pointsource.md) moves inside the head of the listener. The in-head mode applies when using the [AVAudio3DMixingRenderingAlgorithmAuto](avaudio3dmixingrenderingalgorithm/auto.md) rendering algorithm.

## Topics

### In-Head Modes

- [AVAudio3DMixingPointSourceInHeadModeMono](avaudio3dmixingpointsourceinheadmode/mono.md): The point source remains a single mono source inside the head of the listener regardless of the channels it consists of.
- [AVAudio3DMixingPointSourceInHeadModeBypass](avaudio3dmixingpointsourceinheadmode/bypass.md): The point source distributes into each output channel inside the head of the listener.

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
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
