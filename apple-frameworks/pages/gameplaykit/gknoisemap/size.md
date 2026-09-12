> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gknoisemap/size](https://developer.apple.com/documentation/gameplaykit/gknoisemap/size)

# size (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The size of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.

## Declaration

```swift
var size: vector_double2 { get }
```

<a id="Discussion"></a>

## Discussion

If you later generate a texture image from the noise map with the [SKTexture](../../spritekit/sktexture.md) class, this size is also the pixel dimensions of the texture to generate.

This property is read-only; you define the size of a noise map when creating it with the [interpolatedValue(at:)](interpolatedvalue%28at_%29.md) initializer.

## See Also

### Inspecting a Noise Map

- [origin](origin.md): The position of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [sampleCount](samplecount.md): The width and height of integer grid for which the noise map contains sampled noise values.
- [isSeamless](isseamless.md): A Boolean value indicating whether the noise map’s output can repeat seamlessly in all directions.

# size (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The size of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.

## Declaration

```objectivec
@property (nonatomic, readonly) vector_double2 size;
```

<a id="Discussion"></a>

## Discussion

If you later generate a texture image from the noise map with the [SKTexture](../../spritekit/sktexture.md) class, this size is also the pixel dimensions of the texture to generate.

This property is read-only; you define the size of a noise map when creating it with the [interpolatedValueAtPosition:](interpolatedvalue%28at_%29.md) initializer.

## See Also

### Inspecting a Noise Map

- [origin](origin.md): The position of the “slice” of noise samples contained in the noise map relative to the unit coordinate space of the noise object it was created from.
- [sampleCount](samplecount.md): The width and height of integer grid for which the noise map contains sampled noise values.
- [seamless](isseamless.md): A Boolean value indicating whether the noise map’s output can repeat seamlessly in all directions.
