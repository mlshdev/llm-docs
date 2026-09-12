> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingrenderingalgorithm/auto](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm/auto)

# AVAudio3DMixingRenderingAlgorithm.auto (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Automatically selects the highest-quality rendering algorithm available for the current playback hardware.

## Declaration

```swift
case auto
```

<a id="Discussion"></a>

## Discussion

This selects the highest-quality rendering algorithm available for the current playback hardware.

The algorithm may not be identical to other existing algorithms. It may change in the future as new algorithms emerge.

When in manual rendering mode or wired output, you may need to set the [outputType](../avaudioenvironmentnode/outputtype.md) on [AVAudioEnvironmentNode](../avaudioenvironmentnode.md). Multichannel rendering requires setting a channel layout on an [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) output.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithm.equalPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithm.HRTF](hrtf.md): A high-quality algorithm that uses filtering to emulate 3D space in headphones.
- [AVAudio3DMixingRenderingAlgorithm.HRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithm.soundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithm.sphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.
- [AVAudio3DMixingRenderingAlgorithm.stereoPassThrough](stereopassthrough.md): An algorithm to use when the source data doesn’t need localization.

# AVAudio3DMixingRenderingAlgorithmAuto (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Automatically selects the highest-quality rendering algorithm available for the current playback hardware.

## Declaration

```objectivec
AVAudio3DMixingRenderingAlgorithmAuto
```

<a id="Discussion"></a>

## Discussion

This selects the highest-quality rendering algorithm available for the current playback hardware.

The algorithm may not be identical to other existing algorithms. It may change in the future as new algorithms emerge.

When in manual rendering mode or wired output, you may need to set the [outputType](../avaudioenvironmentnode/outputtype.md) on [AVAudioEnvironmentNode](../avaudioenvironmentnode.md). Multichannel rendering requires setting a channel layout on an [AVAudioEnvironmentNode](../avaudioenvironmentnode.md) output.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithmEqualPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithmHRTF](hrtf.md): A high-quality algorithm that uses filtering to emulate 3D space in headphones.
- [AVAudio3DMixingRenderingAlgorithmHRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithmSoundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithmSphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.
- [AVAudio3DMixingRenderingAlgorithmStereoPassThrough](stereopassthrough.md): An algorithm to use when the source data doesn’t need localization.
