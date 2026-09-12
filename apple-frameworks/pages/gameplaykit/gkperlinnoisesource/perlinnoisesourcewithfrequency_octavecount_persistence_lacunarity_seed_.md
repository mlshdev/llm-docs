> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkperlinnoisesource/perlinnoisesourcewithfrequency:octavecount:persistence:lacunarity:seed:](https://developer.apple.com/documentation/gameplaykit/gkperlinnoisesource/perlinnoisesourcewithfrequency:octavecount:persistence:lacunarity:seed:)

# perlinNoiseSourceWithFrequency:octaveCount:persistence:lacunarity:seed:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a Perlin noise source with the specified parameters.

## Declaration

```objectivec
+ (instancetype) perlinNoiseSourceWithFrequency:(double) frequency octaveCount:(NSInteger) octaveCount persistence:(double) persistence lacunarity:(double) lacunarity seed:(int32_t) seed;
```

## Parameters

- `frequency`: The initial value for the `frequency` property, which determines the number and size of visible features in any given unit area of generated noise.
- `octaveCount`: The initial value for the [octaveCount](../gkcoherentnoisesource/octavecount.md) property, which determines the complexity of generated noise.
- `persistence`: The initial value for the [persistence](persistence.md) property, which determines the decrease in amplitude between octaves and thus the roughness of generated noise.
- `lacunarity`: The initial value for the [lacunarity](../gkcoherentnoisesource/lacunarity.md) property, which determines the increase in frequency between octaves and thus the gradation between coarseness and uniformity in generated noise.
- `seed`: The initial value for the [seed](../gkcoherentnoisesource/seed.md) property, which determines the overall structure of generated noise.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithFrequency:octaveCount:persistence:lacunarity:seed:](init%28frequency_octavecount_persistence_lacunarity_seed_%29.md): Initializes a Perlin noise source with the specified parameters.
