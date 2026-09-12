> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1560270-color_packing_for_color_spaces](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1560270-color_packing_for_color_spaces)

# Color Packing for Color Spaces

**Framework:** Application Services

Specify how color values are stored.

<a id="overview"></a>

## Overview

The ColorSync bitmap data type [CMBitmap](../cmbitmap.md) includes a field that identifies the color space in which the color values of the bitmap image are expressed. This enumeration defines the types of packing for a color space’s storage format. The enumeration also defines an alpha channel that can be added as a component of a color value to define the degree of opacity or transparency of a color. These constants are combined with the constants described in [Abstract Color Space Constants](1560701-abstract_color_space_constants.md) to create values that identify a bitmap’s color space. Your application does not specify color packing constants directly, but rather uses the combined constants, which are described in [CMBitmapColorSpace](../cmbitmapcolorspace.md).

<a id="1771271"></a>

### Version-Notes

The constants `cm48_16ColorPacking` and `cm64_16ColorPacking` were added in ColorSync version 2.5.

## Topics

### Constants

- [cmNoColorPacking](../cmnocolorpacking.md): This constant is not used for ColorSync bitmaps.
- [cmWord5ColorPacking](../cmword5colorpacking.md): The color values for three 5-bit color channels are stored consecutively in 16-bits, with the highest order bit unused.
- [cmWord565ColorPacking](../cmword565colorpacking.md)
- [cmLong8ColorPacking](../cmlong8colorpacking.md)
- [cmLong10ColorPacking](../cmlong10colorpacking.md): The color values for three 10-bit color channels are stored consecutively in a 32-bit long, with the two highest order bits unused.
- [cmAlphaFirstPacking](../cmalphafirstpacking.md): An alpha channel is added to the color value as its first component.
- [cmOneBitDirectPacking](../cmonebitdirectpacking.md): One bit is used as the pixel format. This storage format is used by the resulting bitmap pointed to by the `resultBitMap` field of the function [CWMatchColors](1805108-cwmatchcolors.md); the bitmap must be only 1 bit deep.
- [cmAlphaLastPacking](../cmalphalastpacking.md)
- [cm8_8ColorPacking](../cm8_8colorpacking.md)
- [cm16_8ColorPacking](../cm16_8colorpacking.md)
- [cm24_8ColorPacking](../cm24_8colorpacking.md): The color values for three 8-bit color channels are stored in consecutive bytes, for a total of 24 bits.
- [cm32_8ColorPacking](../cm32_8colorpacking.md): The color values for four 8-bit color channels are stored in consecutive bytes, for a total of 32 bits.
- [cm40_8ColorPacking](../cm40_8colorpacking.md): The color values for five 8-bit color channels are stored in consecutive bytes, for a total of 40 bits.
- [cm48_8ColorPacking](../cm48_8colorpacking.md): The color values for six 8-bit color channels are stored in consecutive bytes, for a total of 48 bits.
- [cm56_8ColorPacking](../cm56_8colorpacking.md): The color values for seven 8-bit color channels are stored in consecutive bytes, for a total of 56 bits.
- [cm64_8ColorPacking](../cm64_8colorpacking.md): The color values for eight 8-bit color channels are stored in consecutive bytes, for a total of 64 bits.
- [cm32_16ColorPacking](../cm32_16colorpacking.md): The color values for two 16-bit color channels are stored in a 32-bit word.
- [cm48_16ColorPacking](../cm48_16colorpacking.md): The color values for three 16-bit color channels are stored in 48 consecutive bits.
- [cm64_16ColorPacking](../cm64_16colorpacking.md): The color values for four 16-bit color channels are stored in 64 consecutive bits.
- [cm32_32ColorPacking](../cm32_32colorpacking.md): The color value for a 32-bit color channel is stored in a 32-bit word.
- [cmLittleEndianPacking](../cmlittleendianpacking.md)
- [cmReverseChannelPacking](../cmreversechannelpacking.md)
