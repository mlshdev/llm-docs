> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup/faderate(rate:duration:curvetype:)](https://developer.apple.com/documentation/phase/phasegroup/faderate(rate:duration:curvetype:))

# fadeRate(rate:duration:curveType:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adjusts the playback speed of the sounds in a group gradually.

## Declaration

```swift
func fadeRate(rate: Double, duration: Double, curveType: PHASECurveType)
```

## Parameters

- `rate`: The target playback speed.
- `duration`: The total time to adjust the playback speed. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).
- `curveType`: A selection that specifies a mathematical curve that shapes the playback speed adjustment over time.

## See Also

### Adjusting Playback Speed

- [rate](rate.md): The group’s playback speed.

# fadeRate:duration:curveType: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adjusts the playback speed of the sounds in a group gradually.

## Declaration

```objectivec
- (void) fadeRate:(double) rate duration:(double) duration curveType:(PHASECurveType) curveType;
```

## Parameters

- `rate`: The target playback speed.
- `duration`: The total time to adjust the playback speed. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).
- `curveType`: A selection that specifies a mathematical curve that shapes the playback speed adjustment over time.

## See Also

### Adjusting Playback Speed

- [rate](rate.md): The group’s playback speed.
