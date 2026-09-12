> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppresetsetting/rate](https://developer.apple.com/documentation/phase/phasegrouppresetsetting/rate)

# rate (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The playback speed for audio.

## Declaration

```swift
var rate: Double { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [init(gain:rate:gainCurveType:rateCurveType:)](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter.

## See Also

### Setting Playback Speed

- [rateCurveType](ratecurvetype.md): A rate of change for the setting’s playback speed.

# rate (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The playback speed for audio.

## Declaration

```objectivec
@property (nonatomic, readonly) double rate;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [initWithGain:rate:gainCurveType:rateCurveType:](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter.

## See Also

### Setting Playback Speed

- [rateCurveType](ratecurvetype.md): A rate of change for the setting’s playback speed.
