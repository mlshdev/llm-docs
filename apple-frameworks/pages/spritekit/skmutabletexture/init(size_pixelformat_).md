> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skmutabletexture/init(size:pixelformat:)](https://developer.apple.com/documentation/spritekit/skmutabletexture/init(size:pixelformat:))

# init(size:pixelFormat:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an empty texture with a specific size and format.

## Declaration

```swift
init(size: CGSize, pixelFormat format: Int32)
```

## Parameters

- `size`: The size of the texture, in pixels.
- `format`: A Core Video format code. Three codes are supported: [kCVPixelFormatType_32RGBA](../../corevideo/kcvpixelformattype_32rgba.md), [kCVPixelFormatType_64RGBAHalf](../../corevideo/kcvpixelformattype_64rgbahalf.md), and [kCVPixelFormatType_128RGBAFloat](../../corevideo/kcvpixelformattype_128rgbafloat.md) for byte, half-float, and float components respectively.

<a id="return-value"></a>

## Return Value

An empty mutable texture.

<a id="Discussion"></a>

## Discussion

You must call the [modifyPixelData(\_:)](modifypixeldata%28__%29.md) method at least once before using this texture.

## See Also

### Creating an Empty Mutable Texture

- [init(size:)](init%28size_%29.md): Initializes an empty texture with a specific size.

# initWithSize:pixelFormat: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an empty texture with a specific size and format.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size pixelFormat:(int) format;
```

## Parameters

- `size`: The size of the texture, in pixels.
- `format`: A Core Video format code. Three codes are supported: [kCVPixelFormatType_32RGBA](../../corevideo/kcvpixelformattype_32rgba.md), [kCVPixelFormatType_64RGBAHalf](../../corevideo/kcvpixelformattype_64rgbahalf.md), and [kCVPixelFormatType_128RGBAFloat](../../corevideo/kcvpixelformattype_128rgbafloat.md) for byte, half-float, and float components respectively.

<a id="return-value"></a>

## Return Value

An empty mutable texture.

<a id="Discussion"></a>

## Discussion

You must call the [modifyPixelDataWithBlock:](modifypixeldata%28__%29.md) method at least once before using this texture.

## See Also

### Creating an Empty Mutable Texture

- [mutableTextureWithSize:](mutabletexturewithsize_.md): Creates an empty texture with a specific size.
- [initWithSize:](init%28size_%29.md): Initializes an empty texture with a specific size.
