> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805534-pmpapergetname](https://developer.apple.com/documentation/applicationservices/core_printing/1805534-pmpapergetname)

# PMPaperGetName

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the name for a given paper.

## Declaration

```objectivec
OSStatus PMPaperGetName (
   PMPaper paper,
   CFStringRef *paperName
);
```

## Parameters

- `paper`: The paper whose name you want to obtain.
- `paperName`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string containing the name for this paper. This name identifies the paper in the user interface. You should not release the string without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

This function does not necessarily return a paper name that’s localized for a given printer. In macOS 10.5 and later, instead of using this function, Apple recommends using the function [PMPaperCreateLocalizedName](../1460981-pmpapercreatelocalizedname.md).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID](../1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetWidth](../1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight](../1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](../1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName](../1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID](../1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName](../1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.
