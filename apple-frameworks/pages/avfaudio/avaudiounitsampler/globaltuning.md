> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/globaltuning](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/globaltuning)

# globalTuning (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An adjustment for the tuning of all the played notes.

## Declaration

```swift
var globalTuning: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The tuning unit is cents, and defaults to `0.0`. The range of valid values is `-2400` to `2400` cents.

## See Also

### Getting and Setting Sampler Values

- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.

# globalTuning (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An adjustment for the tuning of all the played notes.

## Declaration

```objectivec
@property (nonatomic) float globalTuning;
```

<a id="Discussion"></a>

## Discussion

The tuning unit is cents, and defaults to `0.0`. The range of valid values is `-2400` to `2400` cents.

## See Also

### Getting and Setting Sampler Values

- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.
