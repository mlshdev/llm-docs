> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/clamp(lowerbound:upperbound:)](https://developer.apple.com/documentation/gameplaykit/gknoise/clamp(lowerbound:upperbound:))

# clamp(lowerBound:upperBound:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field outside the specified range with the values at the endpoints of that range.

## Declaration

```swift
func clamp(lowerBound: Double, upperBound: Double)
```

## Parameters

- `lowerBound`: The minimum value to keep in processed noise.
- `upperBound`: The maximum value to keep in processed noise.

<a id="Discussion"></a>

## Discussion

For example, if you specify lower and upper bounds of `-0.5` and `0.5`, this operation replaces values less than `-0.5` with `-0.5` and values greater than `0.5` with `0.5`.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556384@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue()](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert()](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower(\_:)](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValues(toTerracesWithPeaks:terracesInverted:)](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

# clampWithLowerBound:upperBound: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field outside the specified range with the values at the endpoints of that range.

## Declaration

```objectivec
- (void) clampWithLowerBound:(double) lowerBound upperBound:(double) upperBound;
```

## Parameters

- `lowerBound`: The minimum value to keep in processed noise.
- `upperBound`: The maximum value to keep in processed noise.

<a id="Discussion"></a>

## Discussion

For example, if you specify lower and upper bounds of `-0.5` and `0.5`, this operation replaces values less than `-0.5` with `-0.5` and values greater than `0.5` with `0.5`.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556384@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower:](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValuesToTerracesWithPeaks:terracesInverted:](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.
