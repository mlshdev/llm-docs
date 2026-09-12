> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/init(_:gradientcolors:)](https://developer.apple.com/documentation/gameplaykit/gknoise/init(_:gradientcolors:))

# init(\_:gradientColors:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise object with the specified noise source, with colors for later use in generating noise textures.

## Declaration

```swift
init(_ noiseSource: GKNoiseSource, gradientColors: [NSNumber : UIColor])
```

```swift
init(_ noiseSource: GKNoiseSource, gradientColors: [NSNumber : NSColor])
```

## Parameters

- `noiseSource`: The noise source defining the style and configuration of noise to generate.
- `gradientColors`: A dictionary that specifies a gradient ramp for colorizing generated noise. Each key in this dictionary specifies a value in the generated noise field, and the corresponding value for that key is the color to associate with that noise value when generating textures or images from the noise field. For more details, see the [gradientColors](gradientcolors.md) property.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

To sample from the newly created object’s noise field or generate texture images, create a [GKNoiseMap](../gknoisemap.md) object from this noise object. Optionally, before doing so you can apply operations to process or transform the noise field, or combine it with other noise objects, to create a more complex or natural noise pattern. For details, see Applying Operations to Noise Values, Applying Operations that Combine Noise, Applying Operations that Distort Noise, Applying Geometric Transformations, and Creating Noise by Combining Noise in [GKNoise](../gknoise.md).

The `gradientColors` parameter specifies a color ramp as metadata to accompany the noise object. When you later create a [GKNoiseMap](../gknoisemap.md) object from this noise object and use the [init(noiseMap:)](../../spritekit/sktexture/init%28noisemap_%29.md) method to generate a texture image from the noise map, the [SKTexture](../../spritekit/sktexture.md) class automatically uses the gradient colors from the noise map’s underlying noise objects. If you combine noise objects using the [init(componentNoises:selectionNoise:)](init%28componentnoises_selectionnoise_%29.md) method before generating a noise map, texture generation automatically uses the color gradient corresponding to each component noise for the regions of the noise map where that noise appears.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556356@2x.png)

## See Also

### Creating Noise

- [init(\_:)](init%28__%29.md): Initializes a noise object with the specified noise source.

# initWithNoiseSource:gradientColors: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a noise object with the specified noise source, with colors for later use in generating noise textures.

## Declaration

```objectivec
- (instancetype) initWithNoiseSource:(GKNoiseSource *) noiseSource gradientColors:(NSDictionary<NSNumber *,UIColor *> *) gradientColors;
```

```objectivec
- (instancetype) initWithNoiseSource:(GKNoiseSource *) noiseSource gradientColors:(NSDictionary<NSNumber *,NSColor *> *) gradientColors;
```

## Parameters

- `noiseSource`: The noise source defining the style and configuration of noise to generate.
- `gradientColors`: A dictionary that specifies a gradient ramp for colorizing generated noise. Each key in this dictionary specifies a value in the generated noise field, and the corresponding value for that key is the color to associate with that noise value when generating textures or images from the noise field. For more details, see the [gradientColors](gradientcolors.md) property.

<a id="return-value"></a>

## Return Value

A new noise object.

<a id="Discussion"></a>

## Discussion

To sample from the newly created object’s noise field or generate texture images, create a [GKNoiseMap](../gknoisemap.md) object from this noise object. Optionally, before doing so you can apply operations to process or transform the noise field, or combine it with other noise objects, to create a more complex or natural noise pattern. For details, see Applying Operations to Noise Values, Applying Operations that Combine Noise, Applying Operations that Distort Noise, Applying Geometric Transformations, and Creating Noise by Combining Noise in [GKNoise](../gknoise.md).

The `gradientColors` parameter specifies a color ramp as metadata to accompany the noise object. When you later create a [GKNoiseMap](../gknoisemap.md) object from this noise object and use the [textureWithNoiseMap:](../../spritekit/sktexture/init%28noisemap_%29.md) method to generate a texture image from the noise map, the [SKTexture](../../spritekit/sktexture.md) class automatically uses the gradient colors from the noise map’s underlying noise objects. If you combine noise objects using the [noiseWithComponentNoises:selectionNoise:](init%28componentnoises_selectionnoise_%29.md) method before generating a noise map, texture generation automatically uses the color gradient corresponding to each component noise for the regions of the noise map where that noise appears.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556356@2x.png)

## See Also

### Creating Noise

- [initWithNoiseSource:](init%28__%29.md): Initializes a noise object with the specified noise source.
- [noiseWithNoiseSource:](noisewithnoisesource_.md): Creates a noise object with the specified noise source.
- [noiseWithNoiseSource:gradientColors:](noisewithnoisesource_gradientcolors_.md): Creates a noise object with the specified noise source, with colors for later use in generating noise textures.
