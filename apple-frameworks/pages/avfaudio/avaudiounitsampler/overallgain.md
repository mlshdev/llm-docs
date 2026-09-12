> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitsampler/overallgain](https://developer.apple.com/documentation/avfaudio/avaudiounitsampler/overallgain)

# overallGain (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An adjustment for the gain of all the played notes, in decibels.

## Declaration

```swift
var overallGain: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0` dB, and the range of valid values is `-90.0` dB to `12.0` dB.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.

# overallGain (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An adjustment for the gain of all the played notes, in decibels.

## Declaration

```objectivec
@property (nonatomic) float overallGain;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0` dB, and the range of valid values is `-90.0` dB to `12.0` dB.

## See Also

### Getting and Setting Sampler Values

- [globalTuning](globaltuning.md): An adjustment for the tuning of all the played notes.
- [stereoPan](stereopan.md): An adjustment for the stereo panning of all the played notes.
- [masterGain](mastergain.md): Deprecated. An adjustment for the gain of all the played notes, in decibels.
