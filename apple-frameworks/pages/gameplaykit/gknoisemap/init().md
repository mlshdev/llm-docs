> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/init()](https://developer.apple.com/documentation/gameplaykit/gknoisemap/init())

# init() (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise map with a constant noise value of zero throughout.

## Declaration

```swift
convenience init()
```

<a id="return-value"></a>

## Return Value

A new noise map object.

<a id="Discussion"></a>

## Discussion

This convenience initializer is equivalent to creating a [GKNoise](../gknoise.md) object from [GKConstantNoiseSource](../gkconstantnoisesource.md) output with a constant value of zero, then using the [init(\_:)](init%28__%29.md) initializer to create a noise map from the result.

## See Also

### Creating a Noise Map

- [init(\_:)](init%28__%29.md): Initializes a noise map by sampling from the specified noise object.
- [init(\_:size:origin:sampleCount:seamless:)](init%28__size_origin_samplecount_seamless_%29.md): Creates a noise map by sampling from the specified noise object.

# init (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise map with a constant noise value of zero throughout.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new noise map object.

<a id="Discussion"></a>

## Discussion

This convenience initializer is equivalent to creating a [GKNoise](../gknoise.md) object from [GKConstantNoiseSource](../gkconstantnoisesource.md) output with a constant value of zero, then using the [initWithNoise:](init%28__%29.md) initializer to create a noise map from the result.

## See Also

### Creating a Noise Map

- [initWithNoise:](init%28__%29.md): Initializes a noise map by sampling from the specified noise object.
- [initWithNoise:size:origin:sampleCount:seamless:](init%28__size_origin_samplecount_seamless_%29.md): Creates a noise map by sampling from the specified noise object.
- [noiseMapWithNoise:](noisemapwithnoise_.md): Creates a noise map by sampling from the specified noise object.
- [noiseMapWithNoise:size:origin:sampleCount:seamless:](noisemapwithnoise_size_origin_samplecount_seamless_.md): Creates a noise map by sampling from the specified noise object.
