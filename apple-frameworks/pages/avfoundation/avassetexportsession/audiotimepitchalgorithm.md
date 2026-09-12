> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/audiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avassetexportsession/audiotimepitchalgorithm)

# audioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A processing algorithm for managing audio pitch for scaled audio edits.

## Declaration

```swift
var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [spectral](../avaudiotimepitchalgorithm/spectral.md).

## See Also

### Configuring audio output

- [audioMix](audiomix.md): The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.

# audioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A processing algorithm for managing audio pitch for scaled audio edits.

## Declaration

```objectivec
@property (nonatomic, copy) AVAudioTimePitchAlgorithm audioTimePitchAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The default value is [AVAudioTimePitchAlgorithmSpectral](../avaudiotimepitchalgorithm/spectral.md).

## See Also

### Configuring audio output

- [audioMix](audiomix.md): The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.
