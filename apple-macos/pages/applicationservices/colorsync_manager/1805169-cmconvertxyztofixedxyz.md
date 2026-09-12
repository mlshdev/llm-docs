> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805169-cmconvertxyztofixedxyz](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805169-cmconvertxyztofixedxyz)

# CMConvertXYZToFixedXYZ

**Interface language:** Objective-C

**Framework:** Application Services

Converts colors specified in the XYZ color space whose components are expressed as XYZ 16-bit unsigned values of type `CMXYZColor` to equivalent colors expressed as 32-bit signed values of type `CMFixedXYZColor`.

## Declaration

```objectivec
CMError CMConvertXYZToFixedXYZ (
   const CMXYZColor *src,
   CMFixedXYZColor *dst,
   size_t count
);
```

## Parameters

- `src`: A pointer to an array containing the list of XYZ colors to convert to Fixed XYZ colors.
- `dst`: A pointer to an array containing the list of colors resulting from the conversion in which the colors are specified as Fixed XYZ colors.
- `count`: The number of colors to convert.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The `CMConvertXYZToFixedXYZ` function converts one or more colors whose components are defined as XYZ colors to equivalent colors whose components are defined as Fixed XYZ colors. Fixed XYZ colors allow for 32-bit precision. The XYZ color space is device independent.

## See Also

### Converting Colors

- [CMConvertXYZToLab](1805133-cmconvertxyztolab.md): Converts colors specified in the XYZ color space to the L\*a\*b\* color space.
- [CMConvertLabToXYZ](1805134-cmconvertlabtoxyz.md): Converts colors specified in the L\*a\*b\* color space to the XYZ color space.
- [CMConvertXYZToLuv](1805137-cmconvertxyztoluv.md): Converts colors specified in the XYZ color space to the L\*u\*v\* color space.
- [CMConvertLuvToXYZ](1805140-cmconvertluvtoxyz.md): Converts colors specified in the L\*u\*v\* color space to the XYZ color space.
- [CMConvertXYZToYxy](1805142-cmconvertxyztoyxy.md): Converts colors specified in the XYZ color space to the Yxy color space.
- [CMConvertYxyToXYZ](1805146-cmconvertyxytoxyz.md): Converts colors specified in the Yxy color space to the XYZ color space.
- [CMConvertRGBToHLS](1805149-cmconvertrgbtohls.md): Converts colors specified in the RGB color space to equivalent colors defined in the HLS color space.
- [CMConvertHLSToRGB](1805152-cmconverthlstorgb.md): Converts colors specified in the HLS color space to equivalent colors defined in the RGB color space.
- [CMConvertRGBToHSV](1805155-cmconvertrgbtohsv.md): Converts colors specified in the RGB color space to equivalent colors defined in the HSV color space when the device types are the same.
- [CMConvertHSVToRGB](1805160-cmconverthsvtorgb.md): Converts colors specified in the HSV color space to equivalent colors defined in the RGB color space.
- [CMConvertRGBToGray](1805164-cmconvertrgbtogray.md): Converts colors specified in the RGB color space to equivalent colors defined in the Gray color space.
- [CMConvertFixedXYZToXYZ](1805174-cmconvertfixedxyztoxyz.md): Converts colors specified in XYZ color space whose components are expressed as Fixed XYZ 32-bit signed values of type `CMFixedXYZColor` to equivalent colors expressed as XYZ 16-bit unsigned values of type `CMXYZColor`.
- [CMConvertXYZToXYZ](1805177-cmconvertxyztoxyz.md): Converts a source color to a destination color using the specified chromatic adaptation method.
