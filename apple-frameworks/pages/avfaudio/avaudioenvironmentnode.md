> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode)

# AVAudioEnvironmentNode (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that simulates a 3D audio environment.

## Declaration

```swift
class AVAudioEnvironmentNode
```

<a id="overview"></a>

## Overview

The `AVAudioEnvironmentNode` class is a mixer node that simulates a 3D audio environment. Any node that conforms to [AVAudioMixing](avaudiomixing.md) can act as a source node, such as [AVAudioPlayerNode](avaudioplayernode.md).

The environment node has an implicit listener. You set the listener’s position and orientation, and the system then controls the way the user experiences the virtual world.

To help characterize the environment, this class defines properties for distance attenuation and reverberation.

[AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md) affects how inputs with different channel configurations render. Spatialization applies only to inputs with a mono channel connection format. This class doesn’t spatialize stereo inputs or support inputs with connection formats of more than two channels.

To set the node’s output to a multichannel format, use an [AVAudioFormat](avaudioformat.md) that has one of the following [Audio Channel Layout Tags](../coreaudiotypes/audio-channel-layout-tags.md):

- [kAudioChannelLayoutTag_AudioUnit_4](../coreaudiotypes/kaudiochannellayouttag_audiounit_4.md)
- [kAudioChannelLayoutTag_AudioUnit_5_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_5_0.md)
- [kAudioChannelLayoutTag_AudioUnit_6_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_6_0.md)
- [kAudioChannelLayoutTag_AudioUnit_7_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_7_0.md)
- [kAudioChannelLayoutTag_AudioUnit_7_0_Front](../coreaudiotypes/kaudiochannellayouttag_audiounit_7_0_front.md)
- [kAudioChannelLayoutTag_AudioUnit_8](../coreaudiotypes/kaudiochannellayouttag_audiounit_8.md)

## Topics

### Creating an Environment Node

- [init()](avaudioenvironmentnode/init%28%29.md): Creates a new environment node object.

### Getting and Setting Positional Properties

- [listenerPosition](avaudioenvironmentnode/listenerposition.md): The listener’s position in the 3D environment.
- [listenerAngularOrientation](avaudioenvironmentnode/listenerangularorientation.md): The listener’s angular orientation in the environment.
- [listenerVectorOrientation](avaudioenvironmentnode/listenervectororientation.md): The listener’s vector orientation in the environment.

### Getting Attenuation and Reverb Properties

- [distanceAttenuationParameters](avaudioenvironmentnode/distanceattenuationparameters.md): The distance attenuation parameters for the environment.
- [reverbParameters](avaudioenvironmentnode/reverbparameters.md): The reverb parameters for the environment.

### Getting and Setting Environment Properties

- [outputVolume](avaudioenvironmentnode/outputvolume.md): The mixer’s output volume.
- [outputType](avaudioenvironmentnode/outputtype.md): The type of output hardware.

### Getting the Available Rendering Algorithms

- [applicableRenderingAlgorithms](avaudioenvironmentnode/applicablerenderingalgorithms.md): An array of rendering algorithms applicable to the environment node.

### Getting the Head Tracking Status

- [isListenerHeadTrackingEnabled](avaudioenvironmentnode/islistenerheadtrackingenabled.md): A Boolean value that indicates whether the listener orientation is automatically rotated based on head orientation.

### Getting the Input Bus

- [nextAvailableInputBus](avaudioenvironmentnode/nextavailableinputbus.md): An unused input bus.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudio3DMixing](avaudio3dmixing.md)
- [AVAudioMixing](avaudiomixing.md)
- [AVAudioStereoMixing](avaudiostereomixing.md)
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
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.

# AVAudioEnvironmentNode (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that simulates a 3D audio environment.

## Declaration

```objectivec
@interface AVAudioEnvironmentNode : AVAudioNode
```

<a id="overview"></a>

## Overview

The `AVAudioEnvironmentNode` class is a mixer node that simulates a 3D audio environment. Any node that conforms to [AVAudioMixing](avaudiomixing.md) can act as a source node, such as [AVAudioPlayerNode](avaudioplayernode.md).

The environment node has an implicit listener. You set the listener’s position and orientation, and the system then controls the way the user experiences the virtual world.

To help characterize the environment, this class defines properties for distance attenuation and reverberation.

[AVAudio3DMixingSourceMode](avaudio3dmixingsourcemode.md) affects how inputs with different channel configurations render. Spatialization applies only to inputs with a mono channel connection format. This class doesn’t spatialize stereo inputs or support inputs with connection formats of more than two channels.

To set the node’s output to a multichannel format, use an [AVAudioFormat](avaudioformat.md) that has one of the following [Audio Channel Layout Tags](../coreaudiotypes/audio-channel-layout-tags.md):

- [kAudioChannelLayoutTag_AudioUnit_4](../coreaudiotypes/kaudiochannellayouttag_audiounit_4.md)
- [kAudioChannelLayoutTag_AudioUnit_5_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_5_0.md)
- [kAudioChannelLayoutTag_AudioUnit_6_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_6_0.md)
- [kAudioChannelLayoutTag_AudioUnit_7_0](../coreaudiotypes/kaudiochannellayouttag_audiounit_7_0.md)
- [kAudioChannelLayoutTag_AudioUnit_7_0_Front](../coreaudiotypes/kaudiochannellayouttag_audiounit_7_0_front.md)
- [kAudioChannelLayoutTag_AudioUnit_8](../coreaudiotypes/kaudiochannellayouttag_audiounit_8.md)

## Topics

### Creating an Environment Node

- [init](avaudioenvironmentnode/init%28%29.md): Creates a new environment node object.

### Getting and Setting Positional Properties

- [listenerPosition](avaudioenvironmentnode/listenerposition.md): The listener’s position in the 3D environment.
- [listenerAngularOrientation](avaudioenvironmentnode/listenerangularorientation.md): The listener’s angular orientation in the environment.
- [listenerVectorOrientation](avaudioenvironmentnode/listenervectororientation.md): The listener’s vector orientation in the environment.

### Getting Attenuation and Reverb Properties

- [distanceAttenuationParameters](avaudioenvironmentnode/distanceattenuationparameters.md): The distance attenuation parameters for the environment.
- [reverbParameters](avaudioenvironmentnode/reverbparameters.md): The reverb parameters for the environment.

### Getting and Setting Environment Properties

- [outputVolume](avaudioenvironmentnode/outputvolume.md): The mixer’s output volume.
- [outputType](avaudioenvironmentnode/outputtype.md): The type of output hardware.

### Getting the Available Rendering Algorithms

- [applicableRenderingAlgorithms](avaudioenvironmentnode/applicablerenderingalgorithms.md): An array of rendering algorithms applicable to the environment node.

### Getting the Head Tracking Status

- [listenerHeadTrackingEnabled](avaudioenvironmentnode/islistenerheadtrackingenabled.md): A Boolean value that indicates whether the listener orientation is automatically rotated based on head orientation.

### Getting the Input Bus

- [nextAvailableInputBus](avaudioenvironmentnode/nextavailableinputbus.md): An unused input bus.

## Relationships

### Inherits From

- [AVAudioNode](avaudionode.md)

### Conforms To

- [AVAudioMixing](avaudiomixing.md)

## See Also

### Spatial audio

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
- [AVAudio3DVector](avaudio3dvector.md): A structure that represents a vector in 3D space, in degrees.
