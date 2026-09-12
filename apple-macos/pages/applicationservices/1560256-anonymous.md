> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous](https://developer.apple.com/documentation/applicationservices/1560256-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmARGB32PmulSpace](1560256-anonymous/cmargb32pmulspace.md)
- [cmARGB32Space](1560256-anonymous/cmargb32space.md)
- [cmARGB64LPmulSpace](1560256-anonymous/cmargb64lpmulspace.md)
- [cmARGB64LSpace](1560256-anonymous/cmargb64lspace.md)
- [cmARGB64PmulSpace](1560256-anonymous/cmargb64pmulspace.md)
- [cmARGB64Space](1560256-anonymous/cmargb64space.md)
- [cmCMYK32Space](1560256-anonymous/cmcmyk32space.md): A CMYK color space composed of cyan, magenta, yellow, and black components whose values are packed with 8 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits.
- [cmCMYK64LSpace](1560256-anonymous/cmcmyk64lspace.md)
- [cmCMYK64Space](1560256-anonymous/cmcmyk64space.md): A CMYK color space composed of cyan, magenta, yellow, and black components whose values are packed with 16 bits of storage per component. The storage size for a color value expressed in this color space is 64 bits.
- [cmGamutResult1Space](1560256-anonymous/cmgamutresult1space.md)
- [cmGray16LSpace](1560256-anonymous/cmgray16lspace.md)
- [cmGray16Space](1560256-anonymous/cmgray16space.md): A luminance color space with a single 16-bit component, gray.
- [cmGray8Space](1560256-anonymous/cmgray8space.md)
- [cmGrayA16PmulSpace](1560256-anonymous/cmgraya16pmulspace.md)
- [cmGrayA16Space](1560256-anonymous/cmgraya16space.md)
- [cmGrayA32LPmulSpace](1560256-anonymous/cmgraya32lpmulspace.md)
- [cmGrayA32LSpace](1560256-anonymous/cmgraya32lspace.md)
- [cmGrayA32PmulSpace](1560256-anonymous/cmgraya32pmulspace.md)
- [cmGrayA32Space](1560256-anonymous/cmgraya32space.md): A luminance color space with two components, a gray component followed by an alpha channel component. Each component value is 16 bits.
- [cmHLS32Space](1560256-anonymous/cmhls32space.md): An HLS color space composed of hue, lightness, and saturation components whose values are packed with 10 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.
- [cmHSV32Space](1560256-anonymous/cmhsv32space.md): An HSV color space composed of hue, saturation, and value components whose values are packed with 10 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.
- [cmLAB24Space](1560256-anonymous/cmlab24space.md)
- [cmLAB32Space](1560256-anonymous/cmlab32space.md)
- [cmLAB48LSpace](1560256-anonymous/cmlab48lspace.md)
- [cmLAB48Space](1560256-anonymous/cmlab48space.md)
- [cmLUV32Space](1560256-anonymous/cmluv32space.md): An L\*u\*v\* color space composed of L\*, u\*, and v\* components whose values are packed with 10 bits per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.
- [cmMCEight8Space](1560256-anonymous/cmmceight8space.md): An eight-channel multichannel (HiFi) data color space, whose values are packed with 8 bits per component. The storage size for a color value expressed in this color space is 64 bits.
- [cmMCFive8Space](1560256-anonymous/cmmcfive8space.md): A five-channel multichannel (HiFi) data color space, whose values are packed with 8 bits per component. The storage size for a color value expressed in this color space is 40 bits.
- [cmMCSeven8Space](1560256-anonymous/cmmcseven8space.md): A seven-channel multichannel (HiFi) data color space, whose values are packed with 8 bits per component. The storage size for a color value expressed in this color space is 56 bits.
- [cmMCSix8Space](1560256-anonymous/cmmcsix8space.md): A six-channel multichannel (HiFi) data color space, whose values are packed with 8 bits per component. The storage size for a color value expressed in this color space is 48 bits.
- [cmNamedIndexed32LSpace](1560256-anonymous/cmnamedindexed32lspace.md)
- [cmNamedIndexed32Space](1560256-anonymous/cmnamedindexed32space.md): A color space where each color is stored as a single 32-bit value, specifying an index into a named color space. The storage size for a color value expressed in this color space is 32 bits.
- [cmRGB16LSpace](1560256-anonymous/cmrgb16lspace.md)
- [cmRGB16Space](1560256-anonymous/cmrgb16space.md): An RGB color space composed of red, green, and blue components whose values are packed with 5 bits of storage per component. The storage size for a color value expressed in this color space is 16 bits, with the high-order bit not used.
- [cmRGB24Space](1560256-anonymous/cmrgb24space.md): An RGB color space composed of red, green, and blue components whose values are packed with 8 bits of storage per component. The storage size for a color value expressed in this color space is 24 bits.
- [cmRGB32Space](1560256-anonymous/cmrgb32space.md): An RGB color space composed of red, green, and blue components whose values are packed with 8 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits, with bits 24-31 not used.
- [cmRGB48LSpace](1560256-anonymous/cmrgb48lspace.md)
- [cmRGB48Space](1560256-anonymous/cmrgb48space.md): An RGB color space composed of red, green, and blue components whose values are packed with 16 bits of storage per component. The storage size for a color value expressed in this color space is 48 bits.
- [cmRGB565LSpace](1560256-anonymous/cmrgb565lspace.md)
- [cmRGB565Space](1560256-anonymous/cmrgb565space.md)
- [cmRGBA32PmulSpace](1560256-anonymous/cmrgba32pmulspace.md)
- [cmRGBA32Space](1560256-anonymous/cmrgba32space.md): An RGB color space composed of red, green, and blue color value components, followed by an alpha channel component. Values are packed with 8 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits.
- [cmRGBA64LPmulSpace](1560256-anonymous/cmrgba64lpmulspace.md)
- [cmRGBA64LSpace](1560256-anonymous/cmrgba64lspace.md)
- [cmRGBA64PmulSpace](1560256-anonymous/cmrgba64pmulspace.md)
- [cmRGBA64Space](1560256-anonymous/cmrgba64space.md)
- [cmXYZ24Space](1560256-anonymous/cmxyz24space.md)
- [cmXYZ32Space](1560256-anonymous/cmxyz32space.md): An XYZ color space composed of X, Y, and Z components whose values are packed with 10 bits per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.
- [cmXYZ48LSpace](1560256-anonymous/cmxyz48lspace.md)
- [cmXYZ48Space](1560256-anonymous/cmxyz48space.md)
- [cmYXY32Space](1560256-anonymous/cmyxy32space.md): A Yxy color space composed of Y, x, and y components whose values are packed with 10 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.
