> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/add(_:)](https://developer.apple.com/documentation/gameplaykit/gknoise/add(_:))

# add(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by adding them to values from the specified noise object.

## Declaration

```swift
func add(_ noise: GKNoise)
```

## Parameters

- `noise`: The noise object from which to add noise values.

<a id="Discussion"></a>

## Discussion

Note that adding noise values can result in values outside the \[-1.0, 1.0\] range used for colorizing noise. If you plan to procduce colorized textures from the noise object, use the [remapValues(toCurveWithControlPoints:)](remapvalues%28tocurvewithcontrolpoints_%29.md) method to return results to that range first.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556393@2x.png)

## See Also

### Applying Operations that Combine Noise

- [multiply(\_:)](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [raiseToPower(\_:)](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximum(\_:)](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimum(\_:)](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

# addWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by adding them to values from the specified noise object.

## Declaration

```objectivec
- (void) addWithNoise:(GKNoise *) noise;
```

## Parameters

- `noise`: The noise object from which to add noise values.

<a id="Discussion"></a>

## Discussion

Note that adding noise values can result in values outside the \[-1.0, 1.0\] range used for colorizing noise. If you plan to procduce colorized textures from the noise object, use the [remapValuesToCurveWithControlPoints:](remapvalues%28tocurvewithcontrolpoints_%29.md) method to return results to that range first.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556393@2x.png)

## See Also

### Applying Operations that Combine Noise

- [multiplyWithNoise:](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [raiseToPowerWithNoise:](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximumWithNoise:](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimumWithNoise:](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
