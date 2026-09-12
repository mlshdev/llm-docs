> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/invert()](https://developer.apple.com/documentation/gameplaykit/gknoise/invert())

# invert() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces all values in the noise field with their opposite, reversing the range of noise values.

## Declaration

```swift
func invert()
```

<a id="Discussion"></a>

## Discussion

For example, a value of `1.0` becomes `-1.0`, a value of `-0.5` becomes `0.5`, and so on.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556378@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue()](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [raiseToPower(\_:)](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clamp(lowerBound:upperBound:)](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValues(toTerracesWithPeaks:terracesInverted:)](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

# invert (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces all values in the noise field with their opposite, reversing the range of noise values.

## Declaration

```objectivec
- (void) invert;
```

<a id="Discussion"></a>

## Discussion

For example, a value of `1.0` becomes `-1.0`, a value of `-0.5` becomes `0.5`, and so on.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556378@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [raiseToPower:](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clampWithLowerBound:upperBound:](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
- [remapValuesToTerracesWithPeaks:terracesInverted:](remapvalues%28toterraceswithpeaks_terracesinverted_%29.md): Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.
