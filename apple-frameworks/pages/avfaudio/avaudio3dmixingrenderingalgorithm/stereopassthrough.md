> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dmixingrenderingalgorithm/stereopassthrough](https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm/stereopassthrough)

# AVAudio3DMixingRenderingAlgorithm.stereoPassThrough (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An algorithm to use when the source data doesn’t need localization.

## Declaration

```swift
case stereoPassThrough
```

<a id="Discussion"></a>

## Discussion

This takes mono and stereo input and passes it to channels 1 and 2 without localization. If the input and output `AudioChannelLayout` differ, mixing happens according to the [kAudioFormatProperty_MatrixMixMap](../../audiotoolbox/kaudioformatproperty_matrixmixmap.md) property of the layouts.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithm.auto](auto.md): Automatically selects the highest-quality rendering algorithm available for the current playback hardware.
- [AVAudio3DMixingRenderingAlgorithm.equalPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithm.HRTF](hrtf.md): A high-quality algorithm that uses filtering to emulate 3D space in headphones.
- [AVAudio3DMixingRenderingAlgorithm.HRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithm.soundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithm.sphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.

# AVAudio3DMixingRenderingAlgorithmStereoPassThrough (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An algorithm to use when the source data doesn’t need localization.

## Declaration

```objectivec
AVAudio3DMixingRenderingAlgorithmStereoPassThrough
```

<a id="Discussion"></a>

## Discussion

This takes mono and stereo input and passes it to channels 1 and 2 without localization. If the input and output `AudioChannelLayout` differ, mixing happens according to the [kAudioFormatProperty_MatrixMixMap](../../audiotoolbox/kaudioformatproperty_matrixmixmap.md) property of the layouts.

## See Also

### Rendering Algorithms

- [AVAudio3DMixingRenderingAlgorithmAuto](auto.md): Automatically selects the highest-quality rendering algorithm available for the current playback hardware.
- [AVAudio3DMixingRenderingAlgorithmEqualPowerPanning](equalpowerpanning.md): An algorithm that pans the data of the mixer bus into a stereo field.
- [AVAudio3DMixingRenderingAlgorithmHRTF](hrtf.md): A high-quality algorithm that uses filtering to emulate 3D space in headphones.
- [AVAudio3DMixingRenderingAlgorithmHRTFHQ](hrtfhq.md): A higher-quality head-related transfer function rendering algorithm.
- [AVAudio3DMixingRenderingAlgorithmSoundField](soundfield.md): An algorithm that renders to multichannel hardware.
- [AVAudio3DMixingRenderingAlgorithmSphericalHead](sphericalhead.md): An algorithm that emulates 3D space in headphones by simulating interaural time delays and other spatial cues.
