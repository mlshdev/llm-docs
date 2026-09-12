> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoise/gradientcolors](https://developer.apple.com/documentation/gameplaykit/gknoise/gradientcolors)

# gradientColors (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A dictionary mapping noise values to colors for use in colorizing generated noise.

## Declaration

```swift
var gradientColors: [NSNumber : UIColor] { get set }
```

```swift
var gradientColors: [NSNumber : NSColor] { get set }
```

<a id="Discussion"></a>

## Discussion

The noise object does not store noise values or color bitmap data; instead, this property specifies a color ramp as metadata to accompany the noise object. When you later create a [GKNoiseMap](../gknoisemap.md) object from this noise object and use the [init(noiseMap:)](../../spritekit/sktexture/init%28noisemap_%29.md) method to generate a texture image from the noise map, the [SKTexture](../../spritekit/sktexture.md) class automatically uses the gradient colors from the noise map’s underlying noise objects. If you combine noise objects using the [init(componentNoises:selectionNoise:)](init%28componentnoises_selectionnoise_%29.md) method before generating a noise map, texture generation automatically uses the color gradient corresponding to each component noise for the regions of the noise map where that noise appears.

Each key in this dictionary specifies a value in the generated noise field, and the corresponding value for that key is the color to associate with that noise value when generating textures or images from the noise field. When the [SKTexture](../../spritekit/sktexture.md) class generates a texture image, it creates a gradient by interpolating colors for noise values in between those you specify.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556371@2x.png)

# gradientColors (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A dictionary mapping noise values to colors for use in colorizing generated noise.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSNumber *,UIColor *> * gradientColors;
```

```objectivec
@property (nonatomic, copy) NSDictionary<NSNumber *,NSColor *> * gradientColors;
```

<a id="Discussion"></a>

## Discussion

The noise object does not store noise values or color bitmap data; instead, this property specifies a color ramp as metadata to accompany the noise object. When you later create a [GKNoiseMap](../gknoisemap.md) object from this noise object and use the [textureWithNoiseMap:](../../spritekit/sktexture/init%28noisemap_%29.md) method to generate a texture image from the noise map, the [SKTexture](../../spritekit/sktexture.md) class automatically uses the gradient colors from the noise map’s underlying noise objects. If you combine noise objects using the [noiseWithComponentNoises:selectionNoise:](init%28componentnoises_selectionnoise_%29.md) method before generating a noise map, texture generation automatically uses the color gradient corresponding to each component noise for the regions of the noise map where that noise appears.

Each key in this dictionary specifies a value in the generated noise field, and the corresponding value for that key is the color to associate with that noise value when generating textures or images from the noise field. When the [SKTexture](../../spritekit/sktexture.md) class generates a texture image, it creates a gradient by interpolating colors for noise values in between those you specify.

![](https://developer.apple.com/images/com.apple.gameplaykit/media-2556371@2x.png)
