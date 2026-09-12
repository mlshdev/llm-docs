> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingsourcemode](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode)

# AVAudio3DMixingSourceMode (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The source modes for the input bus of the audio environment node.

## Declaration

```swift
enum AVAudio3DMixingSourceMode
```

<a id="overview"></a>

## Overview

The source mode determines how the individual channels of an input bus distribute in space.

## Topics

### Source Modes

- [AVAudio3DMixingSourceMode.spatializeIfMono](avaudio3dmixingsourcemode/spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceMode.bypass](avaudio3dmixingsourcemode/bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceMode.pointSource](avaudio3dmixingsourcemode/pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceMode.ambienceBed](avaudio3dmixingsourcemode/ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.

### Initializers

- [init(rawValue:)](avaudio3dmixingsourcemode/init%28rawvalue_%29.md)

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
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DMixingSourceMode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The source modes for the input bus of the audio environment node.

## Declaration

```objectivec
enum AVAudio3DMixingSourceMode : NSInteger;
```

<a id="overview"></a>

## Overview

The source mode determines how the individual channels of an input bus distribute in space.

## Topics

### Source Modes

- [AVAudio3DMixingSourceModeSpatializeIfMono](avaudio3dmixingsourcemode/spatializeifmono.md): A mono input bus that renders as a point source at the location of the source node.
- [AVAudio3DMixingSourceModeBypass](avaudio3dmixingsourcemode/bypass.md): A mode that does no spatial rendering.
- [AVAudio3DMixingSourceModePointSource](avaudio3dmixingsourcemode/pointsource.md): All channels of the bus render as a single source at the location of the source node.
- [AVAudio3DMixingSourceModeAmbienceBed](avaudio3dmixingsourcemode/ambiencebed.md): The input channels spread around the listener as far-field sources that anchor to global space.

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
