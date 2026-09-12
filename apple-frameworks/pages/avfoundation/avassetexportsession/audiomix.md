> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/audiomix](https://developer.apple.com/documentation/avfoundation/avassetexportsession/audiomix)

# audioMix (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.

## Declaration

```swift
@NSCopying var audioMix: AVAudioMix? { get set }
```

<a id="Discussion"></a>

## Discussion

This value is key-value observable.

## See Also

### Configuring audio output

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): A processing algorithm for managing audio pitch for scaled audio edits.

# audioMix (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The parameters for audio mixing and an indication of whether to enable nondefault audio mixing for export.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVAudioMix * audioMix;
```

<a id="Discussion"></a>

## Discussion

This value is key-value observable.

## See Also

### Configuring audio output

- [audioTimePitchAlgorithm](audiotimepitchalgorithm.md): A processing algorithm for managing audio pitch for scaled audio edits.
