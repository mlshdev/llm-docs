> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/applying(_:)](https://developer.apple.com/documentation/spritekit/sktexture/applying(_:))

# applying(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a new texture by applying a Core Image filter to an existing texture.

## Declaration

```swift
func applying(_ filter: CIFilter) -> Self
```

## Parameters

- `filter`: A Core Image filter that requires a single `inputImage` parameter and produces an `outputImage` parameter.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

# textureByApplyingCIFilter: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a new texture by applying a Core Image filter to an existing texture.

## Declaration

```objectivec
- (instancetype) textureByApplyingCIFilter:(CIFilter *) filter;
```

## Parameters

- `filter`: A Core Image filter that requires a single `inputImage` parameter and produces an `outputImage` parameter.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.
