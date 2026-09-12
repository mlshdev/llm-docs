> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkconstantnoisesource/constantnoise(withvalue:)](https://developer.apple.com/documentation/gameplaykit/gkconstantnoisesource/constantnoise(withvalue:))

# constantNoise(withValue:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a noise source with the specified constant value.

## Declaration

```swift
class func constantNoise(withValue value: Double) -> Self
```

## Parameters

- `value`: The constant value for the generated noise.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [init(value:)](init%28value_%29.md): Initializes a noise source with the specified constant value.

# constantNoiseWithValue: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a noise source with the specified constant value.

## Declaration

```objectivec
+ (instancetype) constantNoiseWithValue:(double) value;
```

## Parameters

- `value`: The constant value for the generated noise.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithValue:](init%28value_%29.md): Initializes a noise source with the specified constant value.
