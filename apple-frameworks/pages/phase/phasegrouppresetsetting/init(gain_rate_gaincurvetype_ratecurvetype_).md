> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegrouppresetsetting/init(gain:rate:gaincurvetype:ratecurvetype:)](https://developer.apple.com/documentation/phase/phasegrouppresetsetting/init(gain:rate:gaincurvetype:ratecurvetype:))

# init(gain:rate:gainCurveType:rateCurveType:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a group preset setting.

## Declaration

```swift
init(gain: Double, rate: Double, gainCurveType: PHASECurveType, rateCurveType: PHASECurveType)
```

## Parameters

- `gain`: The volume of audio playback. See [gain](gain.md).
- `rate`: The playback speed for audio. See [rate](rate.md).
- `gainCurveType`: A rate of change for the setting’s volume.
- `rateCurveType`: A rate of change for the setting’s playback speed.

# initWithGain:rate:gainCurveType:rateCurveType: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a group preset setting.

## Declaration

```objectivec
- (instancetype) initWithGain:(double) gain rate:(double) rate gainCurveType:(PHASECurveType) gainCurveType rateCurveType:(PHASECurveType) rateCurveType;
```

## Parameters

- `gain`: The volume of audio playback. See [gain](gain.md).
- `rate`: The playback speed for audio. See [rate](rate.md).
- `gainCurveType`: A rate of change for the setting’s volume.
- `rateCurveType`: A rate of change for the setting’s playback speed.
