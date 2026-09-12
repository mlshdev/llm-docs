> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkvoronoinoisesource/voronoinoise(withfrequency:displacement:distanceenabled:seed:)](https://developer.apple.com/documentation/gameplaykit/gkvoronoinoisesource/voronoinoise(withfrequency:displacement:distanceenabled:seed:))

# voronoiNoise(withFrequency:displacement:distanceEnabled:seed:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a Voronoi noise source with the specified parameters.

## Declaration

```swift
class func voronoiNoise(withFrequency frequency: Double, displacement: Double, distanceEnabled: Bool, seed: Int32) -> Self
```

## Parameters

- `frequency`: The initial value for the [frequency](frequency.md) property, which determines the number and spacing of cells in generated noise.
- `displacement`: The initial value for the [displacement](displacement.md) property, which determines the variety of noise values between cells in generated noise.
- `distanceEnabled`: The initial value for the [isDistanceEnabled](isdistanceenabled.md) property, which determines whether to add distance values to generated noise.
- `seed`: The initial value for the [seed](seed.md) property, which determines the overall structure of generated noise.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [init(frequency:displacement:distanceEnabled:seed:)](init%28frequency_displacement_distanceenabled_seed_%29.md): Initializes a Voronoi noise source with the specified parameters.

# voronoiNoiseWithFrequency:displacement:distanceEnabled:seed: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a Voronoi noise source with the specified parameters.

## Declaration

```objectivec
+ (instancetype) voronoiNoiseWithFrequency:(double) frequency displacement:(double) displacement distanceEnabled:(BOOL) distanceEnabled seed:(int32_t) seed;
```

## Parameters

- `frequency`: The initial value for the [frequency](frequency.md) property, which determines the number and spacing of cells in generated noise.
- `displacement`: The initial value for the [displacement](displacement.md) property, which determines the variety of noise values between cells in generated noise.
- `distanceEnabled`: The initial value for the [distanceEnabled](isdistanceenabled.md) property, which determines whether to add distance values to generated noise.
- `seed`: The initial value for the [seed](seed.md) property, which determines the overall structure of generated noise.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithFrequency:displacement:distanceEnabled:seed:](init%28frequency_displacement_distanceenabled_seed_%29.md): Initializes a Voronoi noise source with the specified parameters.
