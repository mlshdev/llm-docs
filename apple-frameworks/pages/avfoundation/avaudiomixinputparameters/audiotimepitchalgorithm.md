> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avaudiomixinputparameters/audiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avaudiomixinputparameters/audiotimepitchalgorithm)

# audioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```swift
var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm? { get }
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings. An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if this property is set to a value other than the defined constants.

## See Also

### Getting the time pitch algorithm setting

- [AVAudioTimePitchAlgorithm](../avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.

# audioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The processing algorithm used to manage audio pitch for scaled audio edits.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) AVAudioTimePitchAlgorithm audioTimePitchAlgorithm;
```

<a id="Discussion"></a>

## Discussion

The supported constants are defined in Time Pitch Algorithm Settings. An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) will be raised if this property is set to a value other than the defined constants.

## See Also

### Getting the time pitch algorithm setting

- [AVAudioTimePitchAlgorithm](../avaudiotimepitchalgorithm.md): An algorithm used to set the audio pitch as the rate changes.
