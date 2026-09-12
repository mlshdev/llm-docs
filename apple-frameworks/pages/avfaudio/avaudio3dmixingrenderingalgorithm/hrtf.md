> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingrenderingalgorithm/hrtf](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm/hrtf)

# AVAudio3DMixingRenderingAlgorithm.HRTF (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A high-quality algorithm that uses filtering to emulate 3D space in headphones.

## Declaration

```swift
case HRTF
```

<a id="Discussion"></a>

## Discussion

The head-related transfer function is a CPU-intensive algorithm.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithm.auto](auto.md): Automatically selects the highest-quality rendering algorithm available for the current playback hardware.
- [AVAudio3DMixingRenderingAlgorithm.equalPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithm.HRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithm.soundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithm.sphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.
- [AVAudio3DMixingRenderingAlgorithm.stereoPassThrough](stereopassthrough.md): An algorithm to use when the source data doesn’t need localization.

# AVAudio3DMixingRenderingAlgorithmHRTF (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A high-quality algorithm that uses filtering to emulate 3D space in headphones.

## Declaration

```objectivec
AVAudio3DMixingRenderingAlgorithmHRTF
```

<a id="Discussion"></a>

## Discussion

The head-related transfer function is a CPU-intensive algorithm.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithmAuto](auto.md): Automatically selects the highest-quality rendering algorithm available for the current playback hardware.
- [AVAudio3DMixingRenderingAlgorithmEqualPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithmHRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithmSoundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithmSphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.
- [AVAudio3DMixingRenderingAlgorithmStereoPassThrough](stereopassthrough.md): An algorithm to use when the source data doesn’t need localization.
