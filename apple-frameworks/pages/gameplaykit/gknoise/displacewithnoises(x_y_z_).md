> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/displacewithnoises(x:y:z:)](https://developer.apple.com/documentation/gameplaykit/gknoise/displacewithnoises(x:y:z:))

# displaceWithNoises(x:y:z:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by shifting each value along a vector whose x-, y-, and z-components are based on the specified noise objects.

## Declaration

```swift
func displaceWithNoises(x xDisplacementNoise: GKNoise, y yDisplacementNoise: GKNoise, z zDisplacementNoise: GKNoise)
```

## Parameters

- `xDisplacementNoise`: A noise object whose values determine the x-component of distortion applied to each value in this noise field.
- `yDisplacementNoise`: A noise object whose values determine the y-component of distortion applied to each value in this noise field.
- `zDisplacementNoise`: A noise object whose values determine the z-component of distortion applied to each value in this noise field.

<a id="Discussion"></a>

## Discussion

For each position in the noise field, this method first constructs a vector by sampling from the same position in the `xDisplacementNoise`, `yDisplacementNoise`, and `zDisplacementNoise` noise objects. Then this method uses that vector to shift the location of the noise value at that position. By applying different types of noise to each parameter, you can create different kinds of distortion effects. For example, passing [GKCylindersNoiseSource](../gkcylindersnoisesource.md) output to one parameter and [GKConstantNoiseSource](../gkconstantnoisesource.md) to the other two, you can add horizontal, vertical, or transverse waves to the noise.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556416@2x.png)

## See Also

### Applying Operations that Distort Noise

- [applyTurbulence(frequency:power:roughness:seed:)](applyturbulence%28frequency_power_roughness_seed_%29.md): Replaces values in the noise field by applying a randomized distortion effect.

# displaceXWithNoise:yWithNoise:zWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Replaces values in the noise field by shifting each value along a vector whose x-, y-, and z-components are based on the specified noise objects.

## Declaration

```objectivec
- (void) displaceXWithNoise:(GKNoise *) xDisplacementNoise yWithNoise:(GKNoise *) yDisplacementNoise zWithNoise:(GKNoise *) zDisplacementNoise;
```

## Parameters

- `xDisplacementNoise`: A noise object whose values determine the x-component of distortion applied to each value in this noise field.
- `yDisplacementNoise`: A noise object whose values determine the y-component of distortion applied to each value in this noise field.
- `zDisplacementNoise`: A noise object whose values determine the z-component of distortion applied to each value in this noise field.

<a id="Discussion"></a>

## Discussion

For each position in the noise field, this method first constructs a vector by sampling from the same position in the `xDisplacementNoise`, `yDisplacementNoise`, and `zDisplacementNoise` noise objects. Then this method uses that vector to shift the location of the noise value at that position. By applying different types of noise to each parameter, you can create different kinds of distortion effects. For example, passing [GKCylindersNoiseSource](../gkcylindersnoisesource.md) output to one parameter and [GKConstantNoiseSource](../gkconstantnoisesource.md) to the other two, you can add horizontal, vertical, or transverse waves to the noise.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556416@2x.png)

## See Also

### Applying Operations that Distort Noise

- [applyTurbulenceWithFrequency:power:roughness:seed:](applyturbulence%28frequency_power_roughness_seed_%29.md): Replaces values in the noise field by applying a randomized distortion effect.
