> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcheckerboardnoisesource/checkerboardnoise(withsquaresize:)](https://developer.apple.com/documentation/gameplaykit/gkcheckerboardnoisesource/checkerboardnoise(withsquaresize:))

# checkerboardNoise(withSquareSize:) (Swift)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a checkerboard noise source with the specified square size.

## Declaration

```swift
class func checkerboardNoise(withSquareSize squareSize: Double) -> Self
```

## Parameters

- `squareSize`: The initial value for the [squareSize](squaresize.md) property, which determines the size of the checkerboard pattern.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [init(squareSize:)](init%28squaresize_%29.md): Initializes a checkerboard noise source with the specified square size.

# checkerboardNoiseWithSquareSize: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a checkerboard noise source with the specified square size.

## Declaration

```objectivec
+ (instancetype) checkerboardNoiseWithSquareSize:(double) squareSize;
```

## Parameters

- `squareSize`: The initial value for the [squareSize](squaresize.md) property, which determines the size of the checkerboard pattern.

<a id="return-value"></a>

## Return Value

A new noise source.

<a id="Discussion"></a>

## Discussion

To make use of this noise source, create a [GKNoise](../gknoise.md) object from it (and optionally apply operations to that noise object or combine it with other noise objects). Then create a [GKNoiseMap](../gknoisemap.md) object from your noise object, generating a concrete field of values that you can sample from directly or visualize using the [SKTexture](../../spritekit/sktexture.md) or `SKTileMap` class.

## See Also

### Creating a Noise Source

- [initWithSquareSize:](init%28squaresize_%29.md): Initializes a checkerboard noise source with the specified square size.
