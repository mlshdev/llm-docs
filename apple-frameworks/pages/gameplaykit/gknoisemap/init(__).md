> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/init(_:)](https://developer.apple.com/documentation/gameplaykit/gknoisemap/init(_:))

# init(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise map by sampling from the specified noise object.

## Declaration

```swift
convenience init(_ noise: GKNoise)
```

## Parameters

- `noise`: The noise object from which to create a noise map.

<a id="return-value"></a>

## Return Value

A new noise map object.

<a id="Discussion"></a>

## Discussion

This initializer is equivalent to calling the [init(\_:size:origin:sampleCount:seamless:)](init%28__size_origin_samplecount_seamless_%29.md) initializer with a size of `1.0 x 1.0`, an origin of `[0, 0]`, a sample grid size of `100 x 100`, and a `seamless` parameter of [false](https://developer.apple.com/documentation/swift/false).

[GKNoiseSource](../gknoisesource.md) and [GKNoise](../gknoise.md) objects are lightweight descriptions of noise generation and processing parameters. When you create a noise map from a noise object, GameplayKit performs the computation described by those objects to create an grid of noise sample values. You can then read those values (or interpolated values at non-integral positions on that grid) with the methods listed in Accessing Noise Values in [GKNoiseMap](../gknoisemap.md), or use the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` classes to generate texture images or tile maps from the generated noise.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Noise Map

- [init(\_:size:origin:sampleCount:seamless:)](init%28__size_origin_samplecount_seamless_%29.md): Creates a noise map by sampling from the specified noise object.
- [init()](init%28%29.md): Initializes a noise map with a constant noise value of zero throughout.

# initWithNoise: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise map by sampling from the specified noise object.

## Declaration

```objectivec
- (instancetype) initWithNoise:(GKNoise *) noise;
```

## Parameters

- `noise`: The noise object from which to create a noise map.

<a id="return-value"></a>

## Return Value

A new noise map object.

<a id="Discussion"></a>

## Discussion

This initializer is equivalent to calling the [initWithNoise:size:origin:sampleCount:seamless:](init%28__size_origin_samplecount_seamless_%29.md) initializer with a size of `1.0 x 1.0`, an origin of `[0, 0]`, a sample grid size of `100 x 100`, and a `seamless` parameter of [false](https://developer.apple.com/documentation/swift/false).

[GKNoiseSource](../gknoisesource.md) and [GKNoise](../gknoise.md) objects are lightweight descriptions of noise generation and processing parameters. When you create a noise map from a noise object, GameplayKit performs the computation described by those objects to create an grid of noise sample values. You can then read those values (or interpolated values at non-integral positions on that grid) with the methods listed in Accessing Noise Values in [GKNoiseMap](../gknoisemap.md), or use the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` classes to generate texture images or tile maps from the generated noise.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Noise Map

- [initWithNoise:size:origin:sampleCount:seamless:](init%28__size_origin_samplecount_seamless_%29.md): Creates a noise map by sampling from the specified noise object.
- [init](init%28%29.md): Initializes a noise map with a constant noise value of zero throughout.
- [noiseMapWithNoise:](noisemapwithnoise_.md): Creates a noise map by sampling from the specified noise object.
- [noiseMapWithNoise:size:origin:sampleCount:seamless:](noisemapwithnoise_size_origin_samplecount_seamless_.md): Creates a noise map by sampling from the specified noise object.
