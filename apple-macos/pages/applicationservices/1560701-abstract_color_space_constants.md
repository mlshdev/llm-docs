> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560701-abstract_color_space_constants](https://developer.apple.com/documentation/applicationservices/1560701-abstract_color_space_constants)

# Abstract Color Space Constants

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Specify values that represent general color spaces.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmNoSpace](1560701-abstract_color_space_constants/cmnospace.md): The ColorSync Manager does not use this constant.
- [cmRGBSpace](1560701-abstract_color_space_constants/cmrgbspace.md): An RGB color space composed of red, green, and blue components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmCMYKSpace](1560701-abstract_color_space_constants/cmcmykspace.md): A CMYK color space composed of cyan, magenta, yellow, and black. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmHSVSpace](1560701-abstract_color_space_constants/cmhsvspace.md): An HSV color space composed of hue, saturation, and value components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmHLSSpace](1560701-abstract_color_space_constants/cmhlsspace.md): An HLS color space composed of hue, lightness, and saturation components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmYXYSpace](1560701-abstract_color_space_constants/cmyxyspace.md): A Yxy color space composed of Y, x, and y components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmXYZSpace](1560701-abstract_color_space_constants/cmxyzspace.md): An XYZ color space composed of X, Y, and Z components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmLUVSpace](1560701-abstract_color_space_constants/cmluvspace.md): An L\*u\*v\* color space composed of L\*, u\*, and v\* components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmLABSpace](1560701-abstract_color_space_constants/cmlabspace.md): An L\*a\*b\* color space composed of L\*, a\*, b\* components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.
- [cmReservedSpace1](1560701-abstract_color_space_constants/cmreservedspace1.md): This field is reserved for use by QuickDraw GX.
- [cmGraySpace](1560701-abstract_color_space_constants/cmgrayspace.md): A luminance color space with a single component, gray.
- [cmReservedSpace2](1560701-abstract_color_space_constants/cmreservedspace2.md): This field is reserved for use by QuickDraw GX.
- [cmGamutResultSpace](1560701-abstract_color_space_constants/cmgamutresultspace.md)
- [cmNamedIndexedSpace](1560701-abstract_color_space_constants/cmnamedindexedspace.md): A named indexed color space.
- [cmMCFiveSpace](1560701-abstract_color_space_constants/cmmcfivespace.md): A five-channel multichannel (HiFi) data color space.
- [cmMCSixSpace](1560701-abstract_color_space_constants/cmmcsixspace.md): A six-channel multichannel (HiFi) data color space.
- [cmMCSevenSpace](1560701-abstract_color_space_constants/cmmcsevenspace.md): A seven-channel multichannel (HiFi) data color space.
- [cmMCEightSpace](1560701-abstract_color_space_constants/cmmceightspace.md): An eight-channel multichannel (HiFi) data color space.
- [cmAlphaPmulSpace](1560701-abstract_color_space_constants/cmalphapmulspace.md): A premultiplied alpha channel component is added to the color value.
- [cmAlphaSpace](1560701-abstract_color_space_constants/cmalphaspace.md): An alpha channel component is added to the color value.
- [cmRGBASpace](1560701-abstract_color_space_constants/cmrgbaspace.md)
- [cmGrayASpace](1560701-abstract_color_space_constants/cmgrayaspace.md): A luminance color space with two components, a gray component followed by an alpha channel component. Each component value is 16 bits.
- [cmRGBAPmulSpace](1560701-abstract_color_space_constants/cmrgbapmulspace.md)
- [cmGrayAPmulSpace](1560701-abstract_color_space_constants/cmgrayapmulspace.md)
