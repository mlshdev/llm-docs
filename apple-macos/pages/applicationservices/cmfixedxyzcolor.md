> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmfixedxyzcolor](https://developer.apple.com/documentation/applicationservices/cmfixedxyzcolor)

# CMFixedXYZColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains data that specifies the profile illuminant in the profile header’s `white` field and other profile element values.

## Declaration

```objectivec
typedef struct CMFixedXYZColor {
    ...
} CMFixedXYZColor;
```

<a id="overview"></a>

## Overview

ColorSync uses the `CMFixedXYZColor` data type to specify the profile illuminant in the profile header’s `white` field and to specify other profile element values. Color component values defined by the `Fixed` type definition can be used to specify a color value in the XYZ color space with greater precision than a color whose components are expressed as `CMXYZComponent` data types. The `Fixed` data type is a signed 32-bit value. A color value expressed in the XYZ color space whose color components are of type `Fixed` is defined by the `CMFixedXYZColor` type definition. 

Your application can convert colors defined in the XYZ color space between `CMXYZColor` data types (in which the color components are expressed as 16-bit unsigned values) and `CMFixedXYZColor` data types (in which the colors are expressed as 32-bit signed values). To convert color values, you use the functions [CMConvertFixedXYZToXYZ](colorsync_manager/1805174-cmconvertfixedxyztoxyz.md) and [CMConvertXYZToFixedXYZ](colorsync_manager/1805169-cmconvertxyztofixedxyz.md).

## Topics

### Instance Properties

- [X](cmfixedxyzcolor/1560683-x.md): Deprecated.
- [Y](cmfixedxyzcolor/1560426-y.md): Deprecated.
- [Z](cmfixedxyzcolor/1560538-z.md): Deprecated.
