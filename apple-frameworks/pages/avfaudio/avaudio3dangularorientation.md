> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dangularorientation](https://developer.apple.com/documentation/avfaudio/avaudio3dangularorientation)

# AVAudio3DAngularOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents the angular orientation of the listener in 3D space.

## Declaration

```swift
struct AVAudio3DAngularOrientation
```

<a id="overview"></a>

## Overview

This represents the three angles that describe the orientation of a listener’s head — yaw, pitch, and roll.

## Topics

### Creating an Angular Orientation

- [init()](avaudio3dangularorientation/init%28%29.md): Creates an angular orientation.
- [init(yaw:pitch:roll:)](avaudio3dangularorientation/init%28yaw_pitch_roll_%29.md): Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.
- [AVAudioMake3DAngularOrientation(\_:\_:\_:)](avaudiomake3dangularorientation%28______%29.md): Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.

### Getting Angular Orientation Properties

- [yaw](avaudio3dangularorientation/yaw.md): The side-to-side movement of the listener’s head.
- [pitch](avaudio3dangularorientation/pitch.md): The up-and-down movement of the listener’s head.
- [roll](avaudio3dangularorientation/roll.md): The tilt of the listener’s head.

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
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DAngularOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents the angular orientation of the listener in 3D space.

## Declaration

```objectivec
struct AVAudio3DAngularOrientation;
```

<a id="overview"></a>

## Overview

This represents the three angles that describe the orientation of a listener’s head — yaw, pitch, and roll.

## Topics

### Creating an Angular Orientation

- [AVAudioMake3DAngularOrientation](avaudiomake3dangularorientation%28______%29.md): Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.

### Getting Angular Orientation Properties

- [yaw](avaudio3dangularorientation/yaw.md): The side-to-side movement of the listener’s head.
- [pitch](avaudio3dangularorientation/pitch.md): The up-and-down movement of the listener’s head.
- [roll](avaudio3dangularorientation/roll.md): The tilt of the listener’s head.

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
