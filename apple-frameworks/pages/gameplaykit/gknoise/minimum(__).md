> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/minimum(_:)](https://developer.apple.com/documentation/gameplaykit/gknoise/minimum(_:))

# minimum(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

## Declaration

```swift
func minimum(_ noise: GKNoise)
```

## Parameters

- `noise`: The noise object from which to compare and replace values.

<a id="Discussion"></a>

## Discussion

In a grayscale texture, higher values are brighter and lower values are darker.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556409@2x.png)

## See Also

### Applying Operations that Combine Noise

- [add(\_:)](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [multiply(\_:)](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [raiseToPower(\_:)](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximum(\_:)](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

# minimumWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.

## Declaration

```objectivec
- (void) minimumWithNoise:(GKNoise *) noise;
```

## Parameters

- `noise`: The noise object from which to compare and replace values.

<a id="Discussion"></a>

## Discussion

In a grayscale texture, higher values are brighter and lower values are darker.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556409@2x.png)

## See Also

### Applying Operations that Combine Noise

- [addWithNoise:](add%28__%29.md): Replaces values in the noise field by adding them to values from the specified noise object.
- [multiplyWithNoise:](multiply%28__%29.md): Replaces values in the noise field by multiplying them with values from the specified noise object.
- [raiseToPowerWithNoise:](raisetopower%28__%29-zm5g.md): Replaces values in the noise field by exponentiating them with values from the specified noise object.
- [maximumWithNoise:](maximum%28__%29.md): Replaces values in the noise field by choosing the lesser of each value and a corresponding value in the specified noise object.
