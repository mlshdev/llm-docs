> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimepitch/overlap](https://developer.apple.com/documentation/avfaudio/avaudiounittimepitch/overlap)

# overlap (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount of overlap between segments of the input audio signal.

## Declaration

```swift
var overlap: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A higher value results in fewer artifacts in the output signal. The default value is `8.0`. The range of values is `3.0` to `32.0`.

## See Also

### Getting and setting time pitch values

- [pitch](pitch.md): The amount to use to pitch shift the input signal.
- [rate](rate.md): The playback rate of the input signal.

# overlap (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount of overlap between segments of the input audio signal.

## Declaration

```objectivec
@property (nonatomic) float overlap;
```

<a id="Discussion"></a>

## Discussion

A higher value results in fewer artifacts in the output signal. The default value is `8.0`. The range of values is `3.0` to `32.0`.

## See Also

### Getting and setting time pitch values

- [pitch](pitch.md): The amount to use to pitch shift the input signal.
- [rate](rate.md): The playback rate of the input signal.
