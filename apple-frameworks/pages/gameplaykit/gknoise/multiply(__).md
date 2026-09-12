> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/multiply(_:)](https://developer.apple.com/documentation/gameplaykit/gknoise/multiply(_:))

# multiply(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by multiplying them with values from the specified noise object.

## Declaration

```swift
func multiply(_ noise: GKNoise)
```

## Parameters

- `noise`: The noise object from which to multiply noise values.

<a id="Discussion"></a>

## Discussion

Noise values are generally in the range \[-1.0, 1.0\], so multiplying typically results in moving values toward zero (in grayscale textures, a darkening effect).

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556395@2x.png)

## See Also

### Applying Operations that Combine Noise

- [add(\_:)](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [raiseToPower(\_:)](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximum(\_:)](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimum(\_:)](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

# multiplyWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by multiplying them with values from the specified noise object.

## Declaration

```objectivec
- (void) multiplyWithNoise:(GKNoise *) noise;
```

## Parameters

- `noise`: The noise object from which to multiply noise values.

<a id="Discussion"></a>

## Discussion

Noise values are generally in the range \[-1.0, 1.0\], so multiplying typically results in moving values toward zero (in grayscale textures, a darkening effect).

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556395@2x.png)

## See Also

### Applying Operations that Combine Noise

- [addWithNoise:](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [raiseToPowerWithNoise:](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximumWithNoise:](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
- [minimumWithNoise:](minimum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
