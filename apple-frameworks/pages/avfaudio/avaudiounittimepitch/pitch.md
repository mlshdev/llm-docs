> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimepitch/pitch](https://developer.apple.com/documentation/avfaudio/avaudiounittimepitch/pitch)

# pitch (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount to use to pitch shift the input signal.

## Declaration

```swift
var pitch: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The audio unit measures the pitch in *cents*, a logarithmic value you use for measuring musical intervals. One octave is equal to 1200 cents. One musical semitone is equal to 100 cents.

The default value is ```0``.0```. The range of values is `-2400` to `2400`.

## See Also

### Getting and setting time pitch values

- [overlap](overlap.md): The amount of overlap between segments of the input audio signal.
- [rate](rate.md): The playback rate of the input signal.

# pitch (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount to use to pitch shift the input signal.

## Declaration

```objectivec
@property (nonatomic) float pitch;
```

<a id="Discussion"></a>

## Discussion

The audio unit measures the pitch in *cents*, a logarithmic value you use for measuring musical intervals. One octave is equal to 1200 cents. One musical semitone is equal to 100 cents.

The default value is ```0``.0```. The range of values is `-2400` to `2400`.

## See Also

### Getting and setting time pitch values

- [overlap](overlap.md): The amount of overlap between segments of the input audio signal.
- [rate](rate.md): The playback rate of the input signal.
