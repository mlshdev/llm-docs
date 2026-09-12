> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dpoint](https://developer.apple.com/documentation/avfaudio/avaudio3dpoint)

# AVAudio3DPoint (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a point in 3D space.

## Declaration

```swift
struct AVAudio3DPoint
```

<a id="overview"></a>

## Overview

Classes that deal with 3D audio, such as those adopting [AVAudioMixing](avaudiomixing.md) and [AVAudioEnvironmentNode](avaudioenvironmentnode.md), use this structure. The system represents this point in meters.

## Topics

### Creating a Point

- [init()](avaudio3dpoint/init%28%29.md): Creates a 3D point.
- [init(x:y:z:)](avaudio3dpoint/init%28x_y_z_%29.md): Creates a 3D point using the x, y, and z coordinates you specify.
- [AVAudioMake3DPoint(\_:\_:\_:)](avaudiomake3dpoint%28______%29.md): Creates a 3D point using the x, y, and z coordinates you specify.

### Getting Point Properties

- [x](avaudio3dpoint/x.md): The location on the x-axis, in meters.
- [y](avaudio3dpoint/y.md): The location on the y-axis, in meters.
- [z](avaudio3dpoint/z.md): The location on the z-axis, in meters.

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
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudio3DPoint (Objective-C)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a point in 3D space.

## Declaration

```objectivec
struct AVAudio3DPoint;
```

<a id="overview"></a>

## Overview

Classes that deal with 3D audio, such as those adopting [AVAudioMixing](avaudiomixing.md) and [AVAudioEnvironmentNode](avaudioenvironmentnode.md), use this structure. The system represents this point in meters.

## Topics

### Creating a Point

- [AVAudioMake3DPoint](avaudiomake3dpoint%28______%29.md): Creates a 3D point using the x, y, and z coordinates you specify.

### Getting Point Properties

- [x](avaudio3dpoint/x.md): The location on the x-axis, in meters.
- [y](avaudio3dpoint/y.md): The location on the y-axis, in meters.
- [z](avaudio3dpoint/z.md): The location on the z-axis, in meters.

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentDistanceAttenuationParameters](avaudioenvironmentdistanceattenuationparameters.md): An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
