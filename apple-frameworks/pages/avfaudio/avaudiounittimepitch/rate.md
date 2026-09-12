> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounittimepitch/rate](https://developer.apple.com/documentation/avfaudio/avaudiounittimepitch/rate)

# rate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The playback rate of the input signal.

## Declaration

```swift
var rate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0. The range of supported values is `1/32` to `32.0`.

## See Also

### Getting and setting time pitch values

- [overlap](overlap.md): The amount of overlap between segments of the input audio signal.
- [pitch](pitch.md): The amount to use to pitch shift the input signal.

# rate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The playback rate of the input signal.

## Declaration

```objectivec
@property (nonatomic) float rate;
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0. The range of supported values is `1/32` to `32.0`.

## See Also

### Getting and setting time pitch values

- [overlap](overlap.md): The amount of overlap between segments of the input audio signal.
- [pitch](pitch.md): The amount to use to pitch shift the input signal.
