> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcylindersnoisesource/cylindersnoise(withfrequency:)](https://developer.apple.com/documentation/gameplaykit/gkcylindersnoisesource/cylindersnoise(withfrequency:))

# cylindersNoise(withFrequency:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a cylinder noise source with the specified frequency.

## Declaration

```swift
class func cylindersNoise(withFrequency frequency: Double) -> Self
```

## Parameters

- `frequency`: The initial value for the `frequency` property, which determines the size and spacing of concentric cylinders.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [init(frequency:)](init%28frequency_%29.md): Initializes a cylinder noise source with the specified frequency.

# cylindersNoiseWithFrequency: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a cylinder noise source with the specified frequency.

## Declaration

```objectivec
+ (instancetype) cylindersNoiseWithFrequency:(double) frequency;
```

## Parameters

- `frequency`: The initial value for the `frequency` property, which determines the size and spacing of concentric cylinders.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithFrequency:](init%28frequency_%29.md): Initializes a cylinder noise source with the specified frequency.
