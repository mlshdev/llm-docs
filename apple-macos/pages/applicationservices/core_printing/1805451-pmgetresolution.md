> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805451-pmgetresolution](https://developer.apple.com/documentation/applicationservices/core_printing/1805451-pmgetresolution)

# PMGetResolution

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the current application’s drawing resolution.

> Draw using Quartz 2D and call [CGContextScaleCTM](https://developer.apple.com/documentation/coregraphics/cgcontext/scaleby%28x:y:%29) instead.

## Declaration

```objectivec
OSStatus PMGetResolution (
   PMPageFormat pageFormat,
   PMResolution *res
);
```

## Parameters

- `pageFormat`: The page format object whose drawing resolution you want to obtain.
- `res`: A pointer to your [PMResolution](pmresolution.md) structure. On return, the structure contains the drawing resolution of the current application.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

This function obtains the drawing resolution specified in the page format, not the resolution of the current printer. You can use [PMPrinterGetPrinterResolutionCount](../1462004-pmprintergetprinterresolutioncou.md) and [PMPrinterGetIndexedPrinterResolution](../1464490-pmprintergetindexedprinterresolu.md) to examine the available printer resolutions.

## See Also

### Accessing Data in Page Format Objects

- [PMGetPageFormatExtendedData](../1464455-pmgetpageformatextendeddata.md): Obtains extended page format data previously stored by your application.
- [PMSetPageFormatExtendedData](../1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper](../1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID](../1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation](../1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation](../1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMSetResolution](1805452-pmsetresolution.md): Deprecated. Sets the application drawing resolution.
- [PMGetScale](../1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale](../1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect](../1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMSetAdjustedPageRect](1805455-pmsetadjustedpagerect.md): Deprecated. Requests a particular page size, adjusted for the current rotation, resolution, or scaling settings.
- [PMGetAdjustedPaperRect](../1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPageRect](../1462944-pmgetunadjustedpagerect.md): Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.
- [PMGetUnadjustedPaperRect](../1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.
- [PMSetUnadjustedPaperRect](1805459-pmsetunadjustedpaperrect.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.
