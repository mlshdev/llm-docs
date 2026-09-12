> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/remapvalues(tocurvewithcontrolpoints:)](https://developer.apple.com/documentation/gameplaykit/gknoise/remapvalues(tocurvewithcontrolpoints:))

# remapValues(toCurveWithControlPoints:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by mapping them to a curve that passes through the specified control points.

## Declaration

```swift
func remapValues(toCurveWithControlPoints controlPoints: [NSNumber : NSNumber])
```

## Parameters

- `controlPoints`: A dictionary whose keys are input values in the existing noise, and whose values are the output values to replace the input values with.

<a id="Discussion"></a>

## Discussion

When you call this method, the [GKNoise](../gknoise.md) class first interpolates the values specified in the `controlPoints` parameter to create a smooth curve. Then, this method uses the curve to replace values in the noise field. For example, passing the control points `[-1.0: -1.0, -0.5: 0.5, 0.5: -0.5, 1.0: 1.0]` defines an S-shaped curve that leaves the lowest and highest values in the noise field unchanged, but replaces moderately low values with moderately high values and vice versa.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556387@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue()](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert()](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower(\_:)](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clamp(lowerBound:upperBound:)](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValues(toTerracesWithPeaks:terracesInverted:)](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

# remapValuesToCurveWithControlPoints: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by mapping them to a curve that passes through the specified control points.

## Declaration

```objectivec
- (void) remapValuesToCurveWithControlPoints:(NSDictionary<NSNumber *,NSNumber *> *) controlPoints;
```

## Parameters

- `controlPoints`: A dictionary whose keys are input values in the existing noise, and whose values are the output values to replace the input values with.

<a id="Discussion"></a>

## Discussion

When you call this method, the [GKNoise](../gknoise.md) class first interpolates the values specified in the `controlPoints` parameter to create a smooth curve. Then, this method uses the curve to replace values in the noise field. For example, passing the control points `[-1.0: -1.0, -0.5: 0.5, 0.5: -0.5, 1.0: 1.0]` defines an S-shaped curve that leaves the lowest and highest values in the noise field unchanged, but replaces moderately low values with moderately high values and vice versa.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556387@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower:](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clampWithLowerBound:upperBound:](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValuesToTerracesWithPeaks:terracesInverted:](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.
