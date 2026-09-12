> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/mastergain](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/mastergain)

# masterGain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

An adjustment for the gain of all the played notes, in decibels.

> Use [overallGain](overallgain.md) instead.

## Declaration

```swift
var masterGain: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0` dB, and the range of valid values is `-90.0` dB to `12.0` dB.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.

# masterGain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 15.0) · iPadOS 8.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.10+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

An adjustment for the gain of all the played notes, in decibels.

> Use [overallGain](overallgain.md) instead.

## Declaration

```objectivec
@property (nonatomic) float masterGain;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0` dB, and the range of valid values is `-90.0` dB to `12.0` dB.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.
