> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462944-pmgetunadjustedpagerect](https://developer.apple.com/documentation/applicationservices/1462944-pmgetunadjustedpagerect)

# PMGetUnadjustedPageRect(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.

## Declaration

```swift
func PMGetUnadjustedPageRect(_ pageFormat: PMPageFormat, _ pageRect: UnsafeMutablePointer<PMRect>) -> OSStatus
```

## Parameters

- `pageFormat`: The page format object whose unadjusted page rectangle you want to obtain.
- `pageRect`: A pointer to your [PMRect](core_printing/pmrect.md) data structure. On return, the structure contains the size of the page rectangle, in points. The page rectangle is the area of the page to which an application can draw. The coordinates for the upper-left corner of the page rectangle are (0,0). See Supporting Printing in Your Carbon Application for more information on page and paper rectangles.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Page Format Objects

- [PMGetPageFormatExtendedData(\_:\_:\_:\_:)](1464455-pmgetpageformatextendeddata.md): Obtains extended page format data previously stored by your application.
- [PMSetPageFormatExtendedData(\_:\_:\_:\_:)](1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper(\_:\_:)](1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID(\_:\_:)](1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation(\_:\_:)](1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation(\_:\_:\_:)](1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMGetScale(\_:\_:)](1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale(\_:\_:)](1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect(\_:\_:)](1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetAdjustedPaperRect(\_:\_:)](1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPaperRect(\_:\_:)](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.

# PMGetUnadjustedPageRect (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.

## Declaration

```objectivec
OSStatus PMGetUnadjustedPageRect(PMPageFormat pageFormat, PMRect *pageRect);
```

## Parameters

- `pageFormat`: The page format object whose unadjusted page rectangle you want to obtain.
- `pageRect`: A pointer to your [PMRect](core_printing/pmrect.md) data structure. On return, the structure contains the size of the page rectangle, in points. The page rectangle is the area of the page to which an application can draw. The coordinates for the upper-left corner of the page rectangle are (0,0). See Supporting Printing in Your Carbon Application for more information on page and paper rectangles.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Page Format Objects

- [PMGetPageFormatExtendedData](1464455-pmgetpageformatextendeddata.md): Obtains extended page format data previously stored by your application.
- [PMSetPageFormatExtendedData](1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper](1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID](1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation](1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation](1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMGetResolution](core_printing/1805451-pmgetresolution.md): Deprecated. Obtains the current application’s drawing resolution.
- [PMSetResolution](core_printing/1805452-pmsetresolution.md): Deprecated. Sets the application drawing resolution.
- [PMGetScale](1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale](1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect](1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMSetAdjustedPageRect](core_printing/1805455-pmsetadjustedpagerect.md): Deprecated. Requests a particular page size, adjusted for the current rotation, resolution, or scaling settings.
- [PMGetAdjustedPaperRect](1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPaperRect](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.
- [PMSetUnadjustedPaperRect](core_printing/1805459-pmsetunadjustedpaperrect.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.
