> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(data:size:rowlength:alignment:)](https://developer.apple.com/documentation/spritekit/sktexture/init(data:size:rowlength:alignment:))

# init(data:size:rowLength:alignment:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from custom formatted raw pixel data.

## Declaration

```swift
convenience init(data pixelData: Data, size: CGSize, rowLength: UInt32, alignment: UInt32)
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.
- `rowLength`: The number of bytes of memory to use per row of the bitmap.
- `alignment`: The offset between individual pixels of the pixel data. Specify `0` for tightly packed data.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Data

- [init(data:size:)](init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [init(data:size:flipped:)](init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.

# textureWithData:size:rowLength:alignment: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from custom formatted raw pixel data.

## Declaration

```objectivec
+ (instancetype) textureWithData:(NSData *) pixelData size:(CGSize) size rowLength:(unsigned int) rowLength alignment:(unsigned int) alignment;
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.
- `rowLength`: The number of bytes of memory to use per row of the bitmap.
- `alignment`: The offset between individual pixels of the pixel data. Specify `0` for tightly packed data.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Data

- [textureWithData:size:](init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [textureWithData:size:flipped:](init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.
