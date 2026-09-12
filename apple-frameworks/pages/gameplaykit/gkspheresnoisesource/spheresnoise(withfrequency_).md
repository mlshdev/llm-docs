> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkspheresnoisesource/spheresnoise(withfrequency:)](https://developer.apple.com/documentation/gameplaykit/gkspheresnoisesource/spheresnoise(withfrequency:))

# spheresNoise(withFrequency:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a sphere noise source with the specified frequency.

## Declaration

```swift
class func spheresNoise(withFrequency frequency: Double) -> Self
```

## Parameters

- `frequency`: The initial value for the [frequency](frequency.md) property, which determines the size and spacing of concentric spheres.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [init(frequency:)](init%28frequency_%29.md): Initializes a sphere noise source with the specified frequency.

# spheresNoiseWithFrequency: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a sphere noise source with the specified frequency.

## Declaration

```objectivec
+ (instancetype) spheresNoiseWithFrequency:(double) frequency;
```

## Parameters

- `frequency`: The initial value for the [frequency](frequency.md) property, which determines the size and spacing of concentric spheres.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithFrequency:](init%28frequency_%29.md): Initializes a sphere noise source with the specified frequency.
