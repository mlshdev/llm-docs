> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgbitmapinfo](https://developer.apple.com/documentation/coregraphics/cgbitmapinfo)

# CGBitmapInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Component information for a bitmap image.

## Declaration

```swift
struct CGBitmapInfo
```

<a id="overview"></a>

## Overview

Applications that store pixel data in memory using ARGB format must take care in how they read data. If the code is not written correctly, it’s possible to misread the data which leads to colors or alpha that appear wrong. The byte order constants specify the byte ordering of pixel formats. To specify byte ordering, use a bitwise OR operator to combine the appropriate constant with the `bitmapInfo` parameter.

## Topics

### Constants

- [alphaInfoMask](cgbitmapinfo/alphainfomask.md): Deprecated. The alpha information mask. Use this to extract alpha information that specifies whether a bitmap contains an alpha channel and how the alpha channel is generated.
- [floatComponents](cgbitmapinfo/floatcomponents.md): Deprecated. The components of a bitmap are floating-point values.
- [byteOrderMask](cgbitmapinfo/byteordermask.md): Deprecated. The byte ordering of pixel formats.
- [byteOrderDefault](cgbitmapinfo/byteorderdefault.md): Deprecated. The default byte order.
- [byteOrder16Little](cgbitmapinfo/byteorder16little.md): Deprecated. 16-bit, little endian format.
- [byteOrder32Little](cgbitmapinfo/byteorder32little.md): Deprecated. 32-bit, little endian format.
- [byteOrder16Big](cgbitmapinfo/byteorder16big.md): Deprecated. 16-bit, big endian format.
- [byteOrder32Big](cgbitmapinfo/byteorder32big.md): Deprecated. 32-bit, big endian format.
- [floatInfoMask](cgbitmapinfo/floatinfomask.md): Deprecated.

### Initializers

- [init(rawValue:)](cgbitmapinfo/init%28rawvalue_%29.md)
- [init(\_:)](cgbitmapinfo/init%28__%29.md): Deprecated.
- [init(alpha:component:byteOrder:)](cgbitmapinfo/init%28alpha_component_byteorder_%29.md)
- [init(alpha:component:byteOrder:pixelFormat:)](cgbitmapinfo/init%28alpha_component_byteorder_pixelformat_%29.md)
- [init(arrayLiteral:)](cgbitmapinfo/init%28arrayliteral_%29.md): Deprecated.

### Instance Properties

- [alpha](cgbitmapinfo/alpha.md)
- [byteOrder](cgbitmapinfo/byteorder.md)
- [component](cgbitmapinfo/component.md)
- [isEmpty](cgbitmapinfo/isempty.md): Deprecated.
- [pixelFormat](cgbitmapinfo/pixelformat.md)

### Instance Methods

- [contains(\_:)](cgbitmapinfo/contains%28__%29.md): Deprecated.
- [formIntersection(\_:)](cgbitmapinfo/formintersection%28__%29.md): Deprecated.
- [formSymmetricDifference(\_:)](cgbitmapinfo/formsymmetricdifference%28__%29.md): Deprecated.
- [formUnion(\_:)](cgbitmapinfo/formunion%28__%29.md): Deprecated.
- [insert(\_:)](cgbitmapinfo/insert%28__%29.md): Deprecated.
- [intersection(\_:)](cgbitmapinfo/intersection%28__%29.md): Deprecated.
- [isDisjoint(with:)](cgbitmapinfo/isdisjoint%28with_%29.md): Deprecated.
- [isSubset(of:)](cgbitmapinfo/issubset%28of_%29.md): Deprecated.
- [isSuperset(of:)](cgbitmapinfo/issuperset%28of_%29.md): Deprecated.
- [remove(\_:)](cgbitmapinfo/remove%28__%29.md): Deprecated.
- [subtract(\_:)](cgbitmapinfo/subtract%28__%29.md): Deprecated.
- [subtracting(\_:)](cgbitmapinfo/subtracting%28__%29.md): Deprecated.
- [symmetricDifference(\_:)](cgbitmapinfo/symmetricdifference%28__%29.md): Deprecated.
- [union(\_:)](cgbitmapinfo/union%28__%29.md): Deprecated.
- [update(with:)](cgbitmapinfo/update%28with_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Examining an image

- [isMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [width](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [height](cgimage/height.md): Returns the height of a bitmap image.
- [bitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [bitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [bytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [colorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [alphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [dataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [decode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [shouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [renderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [bitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [utType](cgimage/uttype.md): The Universal Type Identifier for the image.

# CGBitmapInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Component information for a bitmap image.

## Declaration

```objectivec
enum CGBitmapInfo : uint32_t;
```

<a id="overview"></a>

## Overview

Applications that store pixel data in memory using ARGB format must take care in how they read data. If the code is not written correctly, it’s possible to misread the data which leads to colors or alpha that appear wrong. The byte order constants specify the byte ordering of pixel formats. To specify byte ordering, use a bitwise OR operator to combine the appropriate constant with the `bitmapInfo` parameter.

## Topics

### Constants

- [kCGBitmapFloatComponents](cgbitmapinfo/floatcomponents.md): Deprecated. The components of a bitmap are floating-point values.
- [kCGBitmapByteOrderDefault](cgbitmapinfo/byteorderdefault.md): Deprecated. The default byte order.
- [kCGBitmapByteOrder16Little](cgbitmapinfo/byteorder16little.md): Deprecated. 16-bit, little endian format.
- [kCGBitmapByteOrder32Little](cgbitmapinfo/byteorder32little.md): Deprecated. 32-bit, little endian format.
- [kCGBitmapByteOrder16Big](cgbitmapinfo/byteorder16big.md): Deprecated. 16-bit, big endian format.
- [kCGBitmapByteOrder32Big](cgbitmapinfo/byteorder32big.md): Deprecated. 32-bit, big endian format.

### Enumeration Cases

- [kCGBitmapAlphaInfoMask](cgbitmapinfo/kcgbitmapalphainfomask.md)
- [kCGBitmapByteOrderInfoMask](cgbitmapinfo/kcgbitmapbyteorderinfomask.md)
- [kCGBitmapByteOrderMask](cgbitmapinfo/kcgbitmapbyteordermask.md): Deprecated.
- [kCGBitmapComponentInfoMask](cgbitmapinfo/kcgbitmapcomponentinfomask.md)
- [kCGBitmapFloatInfoMask](cgbitmapinfo/kcgbitmapfloatinfomask.md): Deprecated.
- [kCGBitmapPixelFormatInfoMask](cgbitmapinfo/kcgbitmappixelformatinfomask.md)

## See Also

### Examining an image

- [CGImageIsMask](cgimage/ismask.md): Returns whether a bitmap image is an image mask.
- [CGImageGetWidth](cgimage/width.md): Returns the width of a bitmap image, in pixels.
- [CGImageGetHeight](cgimage/height.md): Returns the height of a bitmap image.
- [CGImageGetBitsPerComponent](cgimage/bitspercomponent.md): Returns the number of bits allocated for a single color component of a bitmap image.
- [CGImageGetBitsPerPixel](cgimage/bitsperpixel.md): Returns the number of bits allocated for a single pixel in a bitmap image.
- [CGImageGetBytesPerRow](cgimage/bytesperrow.md): Returns the number of bytes allocated for a single row of a bitmap image.
- [CGImageGetColorSpace](cgimage/colorspace.md): Return the color space for a bitmap image.
- [CGImageGetAlphaInfo](cgimage/alphainfo.md): Returns the alpha channel information for a bitmap image.
- [CGImageAlphaInfo](cgimagealphainfo.md): Storage options for alpha component data.
- [CGImageGetDataProvider](cgimage/dataprovider.md): Returns the data provider for a bitmap image or image mask.
- [CGImageGetDecode](cgimage/decode.md): Returns the decode array for a bitmap image.
- [CGImageGetShouldInterpolate](cgimage/shouldinterpolate.md): Returns the interpolation setting for a bitmap image.
- [CGImageGetRenderingIntent](cgimage/renderingintent.md): Returns the rendering intent setting for a bitmap image.
- [CGImageGetBitmapInfo](cgimage/bitmapinfo.md): Returns the bitmap information for a bitmap image.
- [CGImageGetUTType](cgimage/uttype.md): The Universal Type Identifier for the image.
