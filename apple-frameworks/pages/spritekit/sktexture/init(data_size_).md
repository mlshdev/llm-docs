> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(data:size:)](https://developer.apple.com/documentation/spritekit/sktexture/init(data:size:))

# init(data:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from raw pixel data.

## Declaration

```swift
convenience init(data pixelData: Data, size: CGSize)
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

Creating textures from raw pixel data is useful if you have a CPU based routine for creating imagery. The following Swift code shows how you can use [init(data:size:)](init%28data_size_%29.md) to create a texture containing random colors and a solid alpha. The `bytes` array is populated by iterating over the total number of pixels and adding four [UInt8](https://developer.apple.com/documentation/swift/uint8) values for the red, green, blue, and alpha channels.

```swift
let width = 128
let height = 128
let bytes = stride(from: 0, to: width * height, by: 1).flatMap {
    _ in
    return [
        UInt8(drand48() * 255), // red
        UInt8(drand48() * 255), // green
        UInt8(drand48() * 255), // blue
        UInt8(255)              // alpha
    ]
}
let data = Data(bytes: bytes)
let texture = SKTexture(data: data,
                        size: CGSize(width: width, height: height))
```

## See Also

### Texture from Data

- [init(data:size:rowLength:alignment:)](init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.
- [init(data:size:flipped:)](init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.

# textureWithData:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new texture from raw pixel data.

## Declaration

```objectivec
+ (instancetype) textureWithData:(NSData *) pixelData size:(CGSize) size;
```

## Parameters

- `pixelData`: An `NSData` object that holds the bitmap data. The pixels must be 32 bpp, 8bpc (unsigned integer) RGBA pixel data. The color components should have been already multiplied by the alpha value.
- `size`: The size of the new texture in points.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

Creating textures from raw pixel data is useful if you have a CPU based routine for creating imagery. The following Swift code shows how you can use [textureWithData:size:](init%28data_size_%29.md) to create a texture containing random colors and a solid alpha. The `bytes` array is populated by iterating over the total number of pixels and adding four [UInt8](https://developer.apple.com/documentation/swift/uint8) values for the red, green, blue, and alpha channels.

```swift
let width = 128
let height = 128
let bytes = stride(from: 0, to: width * height, by: 1).flatMap {
    _ in
    return [
        UInt8(drand48() * 255), // red
        UInt8(drand48() * 255), // green
        UInt8(drand48() * 255), // blue
        UInt8(255)              // alpha
    ]
}
let data = Data(bytes: bytes)
let texture = SKTexture(data: data,
                        size: CGSize(width: width, height: height))
```

## See Also

### Texture from Data

- [textureWithData:size:rowLength:alignment:](init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.
- [textureWithData:size:flipped:](init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.
