> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/pixel-format](https://developer.apple.com/documentation/colorsync/pixel-format)

# Pixel format and data layout (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Describe the memory layout of the pixel buffers a color transform reads and writes.

<a id="Overview"></a>

## Overview

When you convert color with [ColorSyncTransformConvert(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsynctransformconvert%28________________________%29.md), you describe each buffer’s bit depth, byte order, and alpha handling using these constants and the [ColorSyncDataLayout](colorsyncdatalayout.md) type.

## Topics

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataDepth](colorsyncdatadepth.md): The bit depth and numeric type of a color component in a pixel.
- [ColorSyncDataLayout](colorsyncdatalayout.md): A bit field describing the alpha information and byte order of a pixel layout.

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNone](kcolorsyncalphanone.md): There is no alpha channel. For example, RGB.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedFirst](kcolorsyncalphapremultipliedfirst.md): The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.

### Setting byte order

- [kColorSyncByteOrder16Big](kcolorsyncbyteorder16big.md): 16-bit, big-endian byte order.
- [kColorSyncByteOrder16Little](kcolorsyncbyteorder16little.md): 16-bit, little-endian byte order.
- [kColorSyncByteOrder32Big](kcolorsyncbyteorder32big.md): 32-bit, big-endian byte order.
- [kColorSyncByteOrder32Little](kcolorsyncbyteorder32little.md): 32-bit, little-endian byte order.
- [kColorSyncByteOrderDefault](kcolorsyncbyteorderdefault.md): The default (host) byte order.
- [kColorSyncByteOrderMask](kcolorsyncbyteordermask.md): The mask for extracting the byte-order value from a [ColorSyncDataLayout](colorsyncdatalayout.md).

### Choosing bit depth and range

- [kColorSync10BitInteger](kcolorsync10bitinteger.md): 10-bit integer components.
- [kColorSync16BitFloat](kcolorsync16bitfloat.md): 16-bit floating-point (half-float) components.
- [kColorSync16BitInteger](kcolorsync16bitinteger.md): 16-bit integer components.
- [kColorSync1BitGamut](kcolorsync1bitgamut.md): One-bit values, used for gamut-check results.
- [kColorSync32BitFloat](kcolorsync32bitfloat.md): 32-bit floating-point components.
- [kColorSync32BitInteger](kcolorsync32bitinteger.md): 32-bit integer components.
- [kColorSync32BitNamedColorIndex](kcolorsync32bitnamedcolorindex.md): 32-bit named-color index values.
- [kColorSync8BitInteger](kcolorsync8bitinteger.md): 8-bit integer components.

## See Also

### Color conversion

- [Color transforms](color-transforms.md): Convert color from one profile’s color space to another.

# Pixel format and data layout (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Describe the memory layout of the pixel buffers a color transform reads and writes.

<a id="Overview"></a>

## Overview

When you convert color with [ColorSyncTransformConvert](colorsynctransformconvert%28________________________%29.md), you describe each buffer’s bit depth, byte order, and alpha handling using these constants and the [ColorSyncDataLayout](colorsyncdatalayout.md) type.

## Topics

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataDepth](colorsyncdatadepth.md): The bit depth and numeric type of a color component in a pixel.
- [ColorSyncDataLayout](colorsyncdatalayout.md): A bit field describing the alpha information and byte order of a pixel layout.

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNone](kcolorsyncalphanone.md): There is no alpha channel. For example, RGB.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedFirst](kcolorsyncalphapremultipliedfirst.md): The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.

### Setting byte order

- [kColorSyncByteOrder16Big](kcolorsyncbyteorder16big.md): 16-bit, big-endian byte order.
- [kColorSyncByteOrder16Little](kcolorsyncbyteorder16little.md): 16-bit, little-endian byte order.
- [kColorSyncByteOrder32Big](kcolorsyncbyteorder32big.md): 32-bit, big-endian byte order.
- [kColorSyncByteOrder32Little](kcolorsyncbyteorder32little.md): 32-bit, little-endian byte order.
- [kColorSyncByteOrderDefault](kcolorsyncbyteorderdefault.md): The default (host) byte order.
- [kColorSyncByteOrderMask](kcolorsyncbyteordermask.md): The mask for extracting the byte-order value from a [ColorSyncDataLayout](colorsyncdatalayout.md).

### Choosing bit depth and range

- [kColorSync10BitInteger](kcolorsync10bitinteger.md): 10-bit integer components.
- [kColorSync16BitFloat](kcolorsync16bitfloat.md): 16-bit floating-point (half-float) components.
- [kColorSync16BitInteger](kcolorsync16bitinteger.md): 16-bit integer components.
- [kColorSync1BitGamut](kcolorsync1bitgamut.md): One-bit values, used for gamut-check results.
- [kColorSync32BitFloat](kcolorsync32bitfloat.md): 32-bit floating-point components.
- [kColorSync32BitInteger](kcolorsync32bitinteger.md): 32-bit integer components.
- [kColorSync32BitNamedColorIndex](kcolorsync32bitnamedcolorindex.md): 32-bit named-color index values.
- [kColorSync8BitInteger](kcolorsync8bitinteger.md): 8-bit integer components.

## See Also

### Color conversion

- [Color transforms](color-transforms.md): Convert color from one profile’s color space to another.
