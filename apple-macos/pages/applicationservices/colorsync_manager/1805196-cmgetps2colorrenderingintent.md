> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805196-cmgetps2colorrenderingintent](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805196-cmgetps2colorrenderingintent)

# CMGetPS2ColorRenderingIntent

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the rendering intent element data in text format usable as the parameter to the PostScript `findRenderingIntent` operator, which specifies the color-matching option for subsequent graphics data.

## Declaration

```objectivec
CMError CMGetPS2ColorRenderingIntent (
   CMProfileRef srcProf,
   UInt32 flags,
   CMFlattenUPP proc,
   void *refCon,
   Boolean *preferredCMMnotfound
);
```

## Parameters

- `srcProf`: A profile reference to the source profile that defines the data color space and identifies the preferred CMM.
- `flags`: If the value of `flags` is equal to `cmPS8bit`, the generated PostScript will utilize 8-bit encoding whenever possible to achieve higher data compaction. If the value of `flags` is not equal to `cmPS8bit`, the generated data will be 7-bit safe, in either ASCII or ASCII base-85 encoding.
- `proc`: A low-level data transfer function supplied by the calling application to receive the PostScript data from the CMM. For more information, see the function [CMFlattenProcPtr](../cmflattenprocptr.md).
- `refCon`: An untyped pointer to arbitrary data supplied by your application. `CMGetPS2ColorSpace` passes this data in calls to your [CMFlattenProcPtr](../cmflattenprocptr.md) function.
- `preferredCMMnotfound`: A pointer to a flag for whether the preferred CMM was found. On return, has the value `true` if the CMM corresponding to profile was not available or if it was unable to perform the function and the default CMM was used. Otherwise, has the value `false`.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

The `CMGetPS2ColorRenderingIntent` function obtains PostScript rendering intent information from the header of the source profile. It returns data by calling your low-level data transfer procedure and passing the PostScript data to it. Typically, your low-level data transfer function returns this data to the calling application or device driver to pass to a PostScript printer.

The `CMGetPS2ColorRenderingIntent` function is dispatched to the CMM component specified by the source profile. If the designated CMM is not available or the CMM does not implement this function, then ColorSync dispatches the function to the default CMM.

## See Also

### Working With PostScript

- [CMGetPS2ColorSpace](1805191-cmgetps2colorspace.md): Obtains color space element data in text format usable as the parameter to the PostScript `setColorSpace` operator, which characterizes the color space of subsequent graphics data.
- [CMGetPS2ColorRendering](1805202-cmgetps2colorrendering.md): Obtains the color rendering dictionary (CRD) element data usable as the parameter to the PostScript `setColorRendering` operator, which specifies the PostScript color rendering dictionary to use for the following graphics data.
- [CMGetPS2ColorRenderingVMSize](1805206-cmgetps2colorrenderingvmsize.md): Determines the virtual memory size of the color rendering dictionary (CRD) for a printer profile before your application or driver obtains the CRD and sends it to the printer.
