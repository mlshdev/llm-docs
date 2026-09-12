> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/raisetopower(_:)-zm5g](https://developer.apple.com/documentation/gameplaykit/gknoise/raisetopower(_:)-zm5g)

# raiseToPower(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by exponentiating them with values from the specified noise object.

## Declaration

```swift
func raiseToPower(_ noise: GKNoise)
```

## Parameters

- `noise`: The noise object from which to use values as exponents.

<a id="Discussion"></a>

## Discussion

Noise values are generally in the range \[-1.0, 1.0\], so exponentiating some points in a noise field can result in values outside the floating-point domain. Depending on the stylistic result you’re looking for, choose your base and exponent noises carefully or use other noise operations (such as the [clamp(lowerBound:upperBound:)](clamp%28lowerbound_upperbound_%29.md) and [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md) methods) to conform the exponent noise to a specific range before using this method.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556399@2x.png)

## See Also

### Applying Operations that Combine Noise

- [add(\_:)](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [multiply(\_:)](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [maximum(\_:)](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimum(\_:)](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

# raiseToPowerWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by exponentiating them with values from the specified noise object.

## Declaration

```objectivec
- (void) raiseToPowerWithNoise:(GKNoise *) noise;
```

## Parameters

- `noise`: The noise object from which to use values as exponents.

<a id="Discussion"></a>

## Discussion

Noise values are generally in the range \[-1.0, 1.0\], so exponentiating some points in a noise field can result in values outside the floating-point domain. Depending on the stylistic result you’re looking for, choose your base and exponent noises carefully or use other noise operations (such as the [clampWithLowerBound:upperBound:](clamp%28lowerbound_upperbound_%29.md) and [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md) methods) to conform the exponent noise to a specific range before using this method.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556399@2x.png)

## See Also

### Applying Operations that Combine Noise

- [addWithNoise:](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [multiplyWithNoise:](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [maximumWithNoise:](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimumWithNoise:](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
