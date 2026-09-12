> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppresetsetting/gain](https://developer.apple.com/documentation/phase/phasegrouppresetsetting/gain)

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The volume of audio playback.

## Declaration

```swift
var gain: Double { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [init(gain:rate:gainCurveType:rateCurveType:)](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter, clamped to the range between `0` and `1`. A value of `0` silences the audio and `1` doesn’t modify the audio’s original volume.

## See Also

### Setting Loudness

- [gainCurveType](gaincurvetype.md): A rate of change for the setting’s volume.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The volume of audio playback.

## Declaration

```objectivec
@property (nonatomic, readonly) double gain;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [initWithGain:rate:gainCurveType:rateCurveType:](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter, clamped to the range between `0` and `1`. A value of `0` silences the audio and `1` doesn’t modify the audio’s original volume.

## See Also

### Setting Loudness

- [gainCurveType](gaincurvetype.md): A rate of change for the setting’s volume.
