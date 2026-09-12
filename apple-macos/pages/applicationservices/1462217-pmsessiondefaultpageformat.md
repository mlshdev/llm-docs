> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462217-pmsessiondefaultpageformat](https://developer.apple.com/documentation/applicationservices/1462217-pmsessiondefaultpageformat)

# PMSessionDefaultPageFormat(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Assigns default parameter values to a page format object used in the specified printing session.

## Declaration

```swift
func PMSessionDefaultPageFormat(_ printSession: PMPrintSession, _ pageFormat: PMPageFormat) -> OSStatus
```

## Parameters

- `printSession`: The printing session for the specified page format object.
- `pageFormat`: The page format object to which you want to assign default values.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call the function `PMSessionDefaultPageFormat` between the creation and release of the printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper(\_:\_:)](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat(\_:\_:)](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionValidatePageFormat(\_:\_:\_:)](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList(\_:\_:\_:)](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateDataRepresentation(\_:\_:\_:)](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation(\_:\_:)](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.

# PMSessionDefaultPageFormat (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Assigns default parameter values to a page format object used in the specified printing session.

## Declaration

```objectivec
OSStatus PMSessionDefaultPageFormat(PMPrintSession printSession, PMPageFormat pageFormat);
```

## Parameters

- `printSession`: The printing session for the specified page format object.
- `pageFormat`: The page format object to which you want to assign default values.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call the function `PMSessionDefaultPageFormat` between the creation and release of the printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionValidatePageFormat](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateDataRepresentation](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.
- [PMFlattenPageFormat](core_printing/1805421-pmflattenpageformat.md): Deprecated. Flattens a page format object into a Memory Manager handle for storage in a user document.
- [PMFlattenPageFormatToCFData](core_printing/1805425-pmflattenpageformattocfdata.md): Deprecated. Flattens a page format object into a Core Foundation data object for storage in a user document.
- [PMFlattenPageFormatToURL](core_printing/1805429-pmflattenpageformattourl.md): Deprecated. Flattens a page format object into a file for storage in a user document.
- [PMUnflattenPageFormat](core_printing/1805434-pmunflattenpageformat.md): Deprecated. Rebuilds a page format object from a Memory Manager handle that contains flattened page format data.
- [PMUnflattenPageFormatWithCFData](core_printing/1805439-pmunflattenpageformatwithcfdata.md): Deprecated. Rebuilds a page format object from a Core Foundation data object that contains flattened page format data.
- [PMUnflattenPageFormatWithURL](core_printing/1805441-pmunflattenpageformatwithurl.md): Deprecated. Rebuilds a page format object from a file system URL that contains flattened page format data.
