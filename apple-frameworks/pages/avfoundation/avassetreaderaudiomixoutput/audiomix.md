> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput/audiomix](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/audiomix)

# audioMix (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The audio mix to use with this output.

## Declaration

```swift
@NSCopying var audioMix: AVAudioMix? { get set }
```

<a id="Discussion"></a>

## Discussion

Use an audio mix to specify how an audio track’s volume changes over the media’s timeline.

## See Also

### Configuring audio settings

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): The processing algorithm to use for scaled audio edits.

# audioMix (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The audio mix to use with this output.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVAudioMix * audioMix;
```

<a id="Discussion"></a>

## Discussion

Use an audio mix to specify how an audio track’s volume changes over the media’s timeline.

## See Also

### Configuring audio settings

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): The processing algorithm to use for scaled audio edits.
