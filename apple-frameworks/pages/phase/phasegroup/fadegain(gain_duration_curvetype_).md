> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegroup/fadegain(gain:duration:curvetype:)

# fadeGain(gain:duration:curveType:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adjusts the volume of the sounds in a group gradually.

## Declaration

```swift
func fadeGain(gain: Double, duration: Double, curveType: PHASECurveType)
```

## Parameters

- `gain`: The target volume.
- `duration`: The total time to complete the volume adjustment. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).
- `curveType`: A selection that specifies a mathematical curve that shapes the volume adjustment over time.

## See Also

### Conrolling Loudness

- [gain](gain.md): Modifies the volume of the group’s sounds.

# fadeGain:duration:curveType: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adjusts the volume of the sounds in a group gradually.

## Declaration

```objectivec
- (void) fadeGain:(double) gain duration:(double) duration curveType:(PHASECurveType) curveType;
```

## Parameters

- `gain`: The target volume.
- `duration`: The total time to complete the volume adjustment. The framework scales this value by [unitsPerSecond](../phaseengine/unitspersecond.md).
- `curveType`: A selection that specifies a mathematical curve that shapes the volume adjustment over time.

## See Also

### Conrolling Loudness

- [gain](gain.md): Modifies the volume of the group’s sounds.
