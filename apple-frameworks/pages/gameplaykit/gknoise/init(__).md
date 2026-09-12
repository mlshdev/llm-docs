> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/init(_:)](https://developer.apple.com/documentation/gameplaykit/gknoise/init(_:))

# init(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise object with the specified noise source.

## Declaration

```swift
convenience init(_ noiseSource: GKNoiseSource)
```

## Parameters

- `noiseSource`: The noise source defining the style and configuration of noise to generate.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

To sample from the newly created object’s noise field or generate texture images, create a [GKNoiseMap](../gknoisemap.md) object from this noise object. Optionally, before doing so you can apply operations to process or transform the noise field, or combine it with other noise objects, to create a more complex or natural noise pattern. For details, see Applying Operations to Noise Values, Applying Operations that Combine Noise, Applying Operations that Distort Noise, Applying Geometric Transformations, and Creating Noise by Combining Noise in [GKNoise](../gknoise.md).

## See Also

### Creating Noise

- [init(\_:gradientColors:)](init%28__gradientcolors_%29.md): Initializes a noise object with the specified noise source, with colors for later use in generating noise textures.

# initWithNoiseSource: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise object with the specified noise source.

## Declaration

```objectivec
- (instancetype) initWithNoiseSource:(GKNoiseSource *) noiseSource;
```

## Parameters

- `noiseSource`: The noise source defining the style and configuration of noise to generate.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

To sample from the newly created object’s noise field or generate texture images, create a [GKNoiseMap](../gknoisemap.md) object from this noise object. Optionally, before doing so you can apply operations to process or transform the noise field, or combine it with other noise objects, to create a more complex or natural noise pattern. For details, see Applying Operations to Noise Values, Applying Operations that Combine Noise, Applying Operations that Distort Noise, Applying Geometric Transformations, and Creating Noise by Combining Noise in [GKNoise](../gknoise.md).

## See Also

### Creating Noise

- [initWithNoiseSource:gradientColors:](init%28__gradientcolors_%29.md): Initializes a noise object with the specified noise source, with colors for later use in generating noise textures.
- [noiseWithNoiseSource:](noisewithnoisesource_.md): Creates a noise object with the specified noise source.
- [noiseWithNoiseSource:gradientColors:](noisewithnoisesource_gradientcolors_.md): Creates a noise object with the specified noise source, with colors for later use in generating noise textures.
