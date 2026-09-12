> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(data:size:flipped:)](https://developer.apple.com/documentation/spritekit/sktexture/init(data:size:flipped:))

# init(data:size:flipped:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from raw pixel data.

## Declaration

```swift
convenience init(data pixelData: Data, size: CGSize, flipped: Bool)
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.
- `flipped`: A Boolean value that indicates whether the image data should be vertically flipped before creating the texture.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Data

- [init(data:size:)](init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [init(data:size:rowLength:alignment:)](init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.

# textureWithData:size:flipped: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from raw pixel data.

## Declaration

```objectivec
+ (instancetype) textureWithData:(NSData *) pixelData size:(CGSize) size flipped:(BOOL) flipped;
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.
- `flipped`: A Boolean value that indicates whether the image data should be vertically flipped before creating the texture.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Data

- [textureWithData:size:](init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [textureWithData:size:rowLength:alignment:](init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.
