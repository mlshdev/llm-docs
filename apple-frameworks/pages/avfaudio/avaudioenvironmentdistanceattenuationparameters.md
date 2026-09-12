> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationparameters)

# AVAudioEnvironmentDistanceAttenuationParameters (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.

## Declaration

```swift
class AVAudioEnvironmentDistanceAttenuationParameters
```

<a id="overview"></a>

## Overview

> **Important**

>  A source object (for example, [AVAudioEnvironmentNode](avaudioenvironmentnode.md)) provides an instance to this object. You can’t create standalone instances.

## Topics

### Getting and Setting the Attenuation Model

- [distanceAttenuationModel](avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel.md): The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel](avaudioenvironmentdistanceattenuationmodel.md): Types of distance attenuation models.

### Getting and Setting the Attenuation Values

- [maximumDistance](avaudioenvironmentdistanceattenuationparameters/maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [referenceDistance](avaudioenvironmentdistanceattenuationparameters/referencedistance.md): The minimum distance at which the node applies attenuation, in meters.
- [rolloffFactor](avaudioenvironmentdistanceattenuationparameters/rollofffactor.md): A factor that determines the attenuation curve.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudioEnvironmentDistanceAttenuationParameters (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that specifies the amount of attenuation distance, the gradual loss in audio intensity, and other characteristics.

## Declaration

```objectivec
@interface AVAudioEnvironmentDistanceAttenuationParameters : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  A source object (for example, [AVAudioEnvironmentNode](avaudioenvironmentnode.md)) provides an instance to this object. You can’t create standalone instances.

## Topics

### Getting and Setting the Attenuation Model

- [distanceAttenuationModel](avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel.md): The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel](avaudioenvironmentdistanceattenuationmodel.md): Types of distance attenuation models.

### Getting and Setting the Attenuation Values

- [maximumDistance](avaudioenvironmentdistanceattenuationparameters/maximumdistance.md): The distance beyond which the node applies no further attenuation, in meters.
- [referenceDistance](avaudioenvironmentdistanceattenuationparameters/referencedistance.md): The minimum distance at which the node applies attenuation, in meters.
- [rolloffFactor](avaudioenvironmentdistanceattenuationparameters/rollofffactor.md): A factor that determines the attenuation curve.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Spatial audio

- [AVAudioEnvironmentNode](avaudioenvironmentnode.md): An object that simulates a 3D audio environment.
- [AVAudioEnvironmentReverbParameters](avaudioenvironmentreverbparameters.md): A class that encapsulates the parameters that you use to control the reverb of the environment node class.
- [AVAudio3DMixing](avaudio3dmixing.md): A collection of properties that define 3D mixing properties.
- [AVAudio3DPoint](avaudio3dpoint.md): A structure that represents a point in 3D space.
- [AVAudio3DVectorOrientation](avaudio3dvectororientation.md): A structure that represents two orthogonal vectors that describe the orientation of the listener in 3D space.
- [AVAudio3DAngularOrientation](avaudio3dangularorientation.md): A structure that represents the angular orientation of the listener in 3D space.
- [AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md): The source modes for the input bus of the audio environment node.
- [AVAudio3DMixingRenderingAlgorithm](avaudio3dmixingrenderingalgorithm.md): The types of rendering algorithms available per input bus of the environment node.
- [AVAudioEnvironmentOutputType](avaudioenvironmentoutputtype.md): The output types for using with the automatic 3D mixing rendering algorithm.
- [AVAudio3DMixingPointSourceInHeadMode](avaudio3dmixingpointsourceinheadmode.md): The in-head modes for a point source.
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
