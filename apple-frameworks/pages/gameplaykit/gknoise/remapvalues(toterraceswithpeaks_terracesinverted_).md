> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/remapvalues(toterraceswithpeaks:terracesinverted:)](https://developer.apple.com/documentation/gameplaykit/gknoise/remapvalues(toterraceswithpeaks:terracesinverted:))

# remapValues(toTerracesWithPeaks:terracesInverted:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

## Declaration

```swift
func remapValues(toTerracesWithPeaks peakInputValues: [NSNumber], terracesInverted inverted: Bool)
```

## Parameters

- `peakInputValues`: An array of noise values to use as the sharp points of the mapping curve.
- `inverted`: [true](https://developer.apple.com/documentation/swift/true) for curves that start rising slowly and become more steep; [false](https://developer.apple.com/documentation/swift/false) for curves that start rising quickly and become more shallow.

<a id="Discussion"></a>

## Discussion

When you call this method, the [GKNoise](../gknoise.md) class first creates a curve between the points in the `peakInputValues` array. Each point in the array is a value that remains unchanged, and the `inverted` parameter determines the shape of the curve in between those points. Then, this method uses the curve to replace values in the noise field. The resulting effect can be useful for generating textures that resemble realistic terrain, replacing sloping hills with dramatic plateaus and ridges.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556390@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue()](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert()](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower(\_:)](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clamp(lowerBound:upperBound:)](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.

# remapValuesToTerracesWithPeaks:terracesInverted: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by mapping them to a terrace-like curve that passes through the specified control points.

## Declaration

```objectivec
- (void) remapValuesToTerracesWithPeaks:(NSArray<NSNumber *> *) peakInputValues terracesInverted:(BOOL) inverted;
```

## Parameters

- `peakInputValues`: An array of noise values to use as the sharp points of the mapping curve.
- `inverted`: [true](https://developer.apple.com/documentation/swift/true) for curves that start rising slowly and become more steep; [false](https://developer.apple.com/documentation/swift/false) for curves that start rising quickly and become more shallow.

<a id="Discussion"></a>

## Discussion

When you call this method, the [GKNoise](../gknoise.md) class first creates a curve between the points in the `peakInputValues` array. Each point in the array is a value that remains unchanged, and the `inverted` parameter determines the shape of the curve in between those points. Then, this method uses the curve to replace values in the noise field. The resulting effect can be useful for generating textures that resemble realistic terrain, replacing sloping hills with dramatic plateaus and ridges.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556390@2x.png)

## See Also

### Applying Operations to Noise Values

- [applyAbsoluteValue](applyabsolutevalue%28%29.md): Replaces all negative values in the noise field with their positive absolute values.
- [invert](invert%28%29.md): Replaces all values in the noise field with their opposite, reversing the range of noise values.
- [raiseToPower:](raisetopower%28__%29-14715.md): Replaces all values in the noise field by raising each value to the specified power.
- [clampWithLowerBound:upperBound:](clamp%28lowerbound_upperbound_%29.md): Replaces values in the noise field outside the specified range with the values at the endpoints of that range.
- [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md): Replaces values in the noise field by mapping them to a curve that passes through the specified control points.
