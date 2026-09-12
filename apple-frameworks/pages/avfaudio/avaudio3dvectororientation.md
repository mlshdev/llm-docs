> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dvectororientation](https://developer.apple.com/documentation/avfaudio/avaudio3dvectororientation)

# AVAudio3DVectorOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.

## Declaration

```swift
struct AVAudio3DVectorOrientation
```

<a id="overview"></a>

## Overview

Two orthogonal vectors describe the orientation of the listener. The forward vector points in the direction the listener faces. The up vector is orthogonal to the forward vector and points upward from the listener’s head.

## Topics

### Creating a Vector Orientation

- [init()](avaudio3dvectororientation/init%28%29.md): Creates a 3D vector orientation instance.
- [init(forward:up:)](avaudio3dvectororientation/init%28forward_up_%29.md): Creates a 3D vector orientation instance using the forward and up vectors you specify.
- [AVAudioMake3DVectorOrientation(\_:\_:)](avaudiomake3dvectororientation%28____%29.md): Creates a 3D vector orientation instance using the forward and up vectors you specify.

### Getting Vector Orientation Properties

- [forward](avaudio3dvectororientation/forward.md): The forward vector points in the direction that the listener faces.
- [up](avaudio3dvectororientation/up.md): The up vector is orthogonal to the forward vector and points upward from the listener’s head.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DVectorOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.

## Declaration

```objectivec
struct AVAudio3DVectorOrientation;
```

<a id="overview"></a>

## Overview

Two orthogonal vectors describe the orientation of the listener. The forward vector points in the direction the listener faces. The up vector is orthogonal to the forward vector and points upward from the listener’s head.

## Topics

### Creating a Vector Orientation

- [AVAudioMake3DVectorOrientation](avaudiomake3dvectororientation%28____%29.md): Creates a 3D vector orientation instance using the forward and up vectors you specify.

### Getting Vector Orientation Properties

- [forward](avaudio3dvectororientation/forward.md): The forward vector points in the direction that the listener faces.
- [up](avaudio3dvectororientation/up.md): The up vector is orthogonal to the forward vector and points upward from the listener’s head.

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
