> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppresetsetting/gaincurvetype](https://developer.apple.com/documentation/phase/phasegrouppresetsetting/gaincurvetype)

# gainCurveType (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A rate of change for the setting’s volume.

## Declaration

```swift
var gainCurveType: PHASECurveType { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [init(gain:rate:gainCurveType:rateCurveType:)](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter.

## See Also

### Setting Loudness

- [gain](gain.md): The volume of audio playback.

# gainCurveType (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A rate of change for the setting’s volume.

## Declaration

```objectivec
@property (nonatomic, readonly) PHASECurveType gainCurveType;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value to the [initWithGain:rate:gainCurveType:rateCurveType:](init%28gain_rate_gaincurvetype_ratecurvetype_%29.md) parameter.

## See Also

### Setting Loudness

- [gain](gain.md): The volume of audio playback.
