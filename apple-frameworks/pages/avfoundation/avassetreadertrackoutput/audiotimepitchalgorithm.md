> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadertrackoutput/audiotimepitchalgorithm](https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/audiotimepitchalgorithm)

# audioTimePitchAlgorithm (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The processing algorithm to use for scaled audio edits.

## Declaration

```swift
var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm { get set }
```

<a id="Discussion"></a>

## Discussion

See [Time pitch algorithm settings](../time-pitch-algorithm-settings.md) for possible values. The system throws an exception if you set this property to a value other than one of the defined constants.

# audioTimePitchAlgorithm (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The processing algorithm to use for scaled audio edits.

## Declaration

```objectivec
@property (nonatomic, copy) AVAudioTimePitchAlgorithm audioTimePitchAlgorithm;
```

<a id="Discussion"></a>

## Discussion

See [Time pitch algorithm settings](../time-pitch-algorithm-settings.md) for possible values. The system throws an exception if you set this property to a value other than one of the defined constants.
