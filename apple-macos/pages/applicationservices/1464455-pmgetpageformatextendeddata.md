> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464455-pmgetpageformatextendeddata](https://developer.apple.com/documentation/applicationservices/1464455-pmgetpageformatextendeddata)

# PMGetPageFormatExtendedData(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains extended page format data previously stored by your application.

## Declaration

```swift
func PMGetPageFormatExtendedData(_ pageFormat: PMPageFormat, _ dataID: OSType, _ size: UnsafeMutablePointer<UInt32>?, _ extendedData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `pageFormat`: The page format object that contains your extended data.
- `dataID`: A 4-character code that identifies your data. This is typically your application’s creator code. If your creator code is outside the ASCII 7-bit character range 0x20–0x7F, you need to use a different 4-character code.
- `size`: A pointer to a value that specifies the size of the buffer you have allocated for the extended page format data. On return, this variable contains the number of bytes read into the buffer or the size of the extended data. You can pass the constant `kPMDontWantSize` if you do not need this information. (See [Data Not Wanted Constants](core_printing/data_not_wanted_constants.md) for more information.)
- `extendedData`: A pointer to a buffer to receive the extended data. Pass the constant `kPMDontWantData` if you do not want to read the data. (See [Data Not Wanted Constants](core_printing/data_not_wanted_constants.md) for more information.)

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Your application typically needs to call the function `PMGetPageFormatExtendedData` two times in order to retrieve the extended page format data. The first time, pass the constant `kPMDontWantData` in the parameter `extendedData` to obtain the buffer size required for the extended data. Then allocate the buffer and call the function a second time to read the extended data into your buffer.

If you write a printing dialog extension for your application that stores data in the page format object, you use the function `PMGetPageFormatExtendedData` to retrieve the data associated with it.

## See Also

### Accessing Data in Page Format Objects

- [PMSetPageFormatExtendedData(\_:\_:\_:\_:)](1463464-pmsetpageformatextendeddata.md): Stores your application-specific data in a page format object.
- [PMGetPageFormatPaper(\_:\_:)](1461319-pmgetpageformatpaper.md): Obtains the paper associated with a page format object.
- [PMPageFormatGetPrinterID(\_:\_:)](1462961-pmpageformatgetprinterid.md): Obtains the identifier of the formatting printer for a page format object.
- [PMGetOrientation(\_:\_:)](1459144-pmgetorientation.md): Obtains the current setting for page orientation.
- [PMSetOrientation(\_:\_:\_:)](1459016-pmsetorientation.md): Sets the page orientation for printing.
- [PMGetScale(\_:\_:)](1458796-pmgetscale.md): Obtains the scaling factor currently applied to the page and paper rectangles.
- [PMSetScale(\_:\_:)](1463343-pmsetscale.md): Sets the scaling factor for the page and paper rectangles.
- [PMGetAdjustedPageRect(\_:\_:)](1461543-pmgetadjustedpagerect.md): Obtains the imageable area or page rectangle, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetAdjustedPaperRect(\_:\_:)](1459167-pmgetadjustedpaperrect.md): Obtains the rectangle defining the paper size, taking into account orientation, application drawing resolution, and scaling settings.
- [PMGetUnadjustedPageRect(\_:\_:)](1462944-pmgetunadjustedpagerect.md): Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.
- [PMGetUnadjustedPaperRect(\_:\_:)](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.

# PMGetPageFormatExtendedData (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains extended page format data previously stored by your application.

## Declaration

```objectivec
OSStatus PMGetPageFormatExtendedData(PMPageFormat pageFormat, OSType dataID, UInt32 *size, void *extendedData);
```

## Parameters

- `pageFormat`: The page format object that contains your extended data.
- `dataID`: A 4-character code that identifies your data. This is typically your application’s creator code. If your creator code is outside the ASCII 7-bit character range 0x20–0x7F, you need to use a different 4-character code.
- `size`: A pointer to a value that specifies the size of the buffer you have allocated for the extended page format data. On return, this variable contains the number of bytes read into the buffer or the size of the extended data. You can pass the constant `kPMDontWantSize` if you do not need this information. (See [Data Not Wanted Constants](core_printing/data_not_wanted_constants.md) for more information.)
- `extendedData`: A pointer to a buffer to receive the extended data. Pass the constant `kPMDontWantData` if you do not want to read the data. (See [Data Not Wanted Constants](core_printing/data_not_wanted_constants.md) for more information.)

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Your application typically needs to call the function `PMGetPageFormatExtendedData` two times in order to retrieve the extended page format data. The first time, pass the constant `kPMDontWantData` in the parameter `extendedData` to obtain the buffer size required for the extended data. Then allocate the buffer and call the function a second time to read the extended data into your buffer.

If you write a printing dialog extension for your application that stores data in the page format object, you use the function `PMGetPageFormatExtendedData` to retrieve the data associated with it.

## See Also

### Accessing Data in Page Format Objects

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
- [PMGetUnadjustedPageRect](1462944-pmgetunadjustedpagerect.md): Obtains the imageable area or page rectangle, unaffected by orientation, resolution, or scaling.
- [PMGetUnadjustedPaperRect](1462939-pmgetunadjustedpaperrect.md): Obtains the paper rectangle, unaffected by rotation, resolution, or scaling.
- [PMSetUnadjustedPaperRect](core_printing/1805459-pmsetunadjustedpaperrect.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.
