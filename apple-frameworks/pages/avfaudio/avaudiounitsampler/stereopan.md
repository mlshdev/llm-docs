> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/stereopan](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/stereopan)

# stereoPan (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An adjustment for the stereo panning of all the played notes.

## Declaration

```swift
var stereoPan: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, and the range of valid values is `-100.0` to `100.0`.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.

# stereoPan (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An adjustment for the stereo panning of all the played notes.

## Declaration

```objectivec
@property (nonatomic) float stereoPan;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, and the range of valid values is `-100.0` to `100.0`.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [overallGain](overallgain.md): An adjustment for the gain of all the played notes, in decibels.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.
