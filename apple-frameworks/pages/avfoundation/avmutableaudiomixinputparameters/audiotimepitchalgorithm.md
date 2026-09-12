> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutableaudiomixinputparameters/audiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/audiotimepitchalgorithm)

# audioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```swift
var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm? { get set }
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings. An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised if this property is set to a value other than the defined constants.

## See Also

### Time pitch settings

- [AVAudioTimePitchAlgorithm](../avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

# audioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVAudioTimePitchAlgorithm audioTimePitchAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings. An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised if this property is set to a value other than the defined constants.

## See Also

### Time pitch settings

- [AVAudioTimePitchAlgorithm](../avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.
