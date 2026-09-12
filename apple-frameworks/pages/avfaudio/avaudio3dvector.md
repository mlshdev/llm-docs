> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dvector](https://developer.apple.com/documentation/avfaudio/avaudio3dvector)

# AVAudio3DVector (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a vector in 3D space, in degrees.

## Declaration

```swift
typealias AVAudio3DVector = AVAudio3DPoint
```

<a id="Discussion"></a>

## Discussion

Classes that deal with 3D audio use this structure, such as those that adopt the [AVAudioMixing](avaudiomixing.md) protocol and the [AVAudioEnvironmentNode](avaudioenvironmentnode.md) class.

## Topics

### Functions

- [AVAudioMake3DVector(\_:\_:\_:)](avaudiomake3dvector%28______%29.md): Creates a vector in 3D space, in degrees.

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
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.

# AVAudio3DVector (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a vector in 3D space, in degrees.

## Declaration

```objectivec
typedef struct AVAudio3DPoint AVAudio3DVector;
```

<a id="Discussion"></a>

## Discussion

Classes that deal with 3D audio use this structure, such as those that adopt the [AVAudioMixing](avaudiomixing.md) protocol and the [AVAudioEnvironmentNode](avaudioenvironmentnode.md) class.

## Topics

### Functions

- [AVAudioMake3DVector](avaudiomake3dvector%28______%29.md): Creates a vector in 3D space, in degrees.

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
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
