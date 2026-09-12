> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/raisetopower(_:)-14715](https://developer.apple.com/documentation/gameplaykit/gknoise/raisetopower(_:)-14715)

# raiseToPower(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces all values in the noise field by raising each value to the specified power.

## Declaration

```swift
func raiseToPower(_ power: Double)
```

## Parameters

- `power`: The exponent to raise each noise value to.

<a id="Discussion"></a>

## Discussion

Noise values range from `-1.0` to `1.0`, so exponentiating always results in lower values than in the original noise, with a greater effect on low original values than on high values.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556382@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue()](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert()](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [clamp(lowerBound:upperBound:)](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValues(toTerracesWithPeaks:terracesInverted:)](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

# raiseToPower: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces all values in the noise field by raising each value to the specified power.

## Declaration

```objectivec
- (void) raiseToPower:(double) power;
```

## Parameters

- `power`: The exponent to raise each noise value to.

<a id="Discussion"></a>

## Discussion

Noise values range from `-1.0` to `1.0`, so exponentiating always results in lower values than in the original noise, with a greater effect on low original values than on high values.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556382@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [clampWithLowerBound:upperBound:](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValuesToTerracesWithPeaks:terracesInverted:](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.
