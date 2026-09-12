> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463985-pmsessioncreatepageformatlist](https://developer.apple.com/documentation/applicationservices/1463985-pmsessioncreatepageformatlist)

# PMSessionCreatePageFormatList(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains a list of page format objects, each of which describes a paper size available on the specified printer.

## Declaration

```swift
func PMSessionCreatePageFormatList(_ printSession: PMPrintSession, _ printer: PMPrinter?, _ pageFormatList: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## Parameters

- `printSession`: The current printing session.
- `printer`: The printer whose list of page sizes you want to enumerate.
- `pageFormatList`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array that contains the page format (`PMPageFormat`) objects associated with the specified printer. You are responsible for releasing the array. Each page format object describes a paper size available for the specified printer. If the function fails, then on return the array is `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

You can use this function to find the available sheet sizes (and the imageable area for them) for a given printer. After you obtain the page format list, you can call the function [PMGetUnadjustedPaperRect(\_:\_:)](1462939-pmgetunadjustedpaperrect.md) for each page format object in the list to obtain the sheet rectangle size. Once you find the paper size you want, call [PMGetUnadjustedPageRect(\_:\_:)](1462944-pmgetunadjustedpagerect.md) to obtain the imageable area for that paper size.

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper(\_:\_:)](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat(\_:\_:)](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat(\_:\_:)](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat(\_:\_:\_:)](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMPageFormatCreateDataRepresentation(\_:\_:\_:)](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation(\_:\_:)](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.

# PMSessionCreatePageFormatList (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Obtains a list of page format objects, each of which describes a paper size available on the specified printer.

## Declaration

```objectivec
OSStatus PMSessionCreatePageFormatList(PMPrintSession printSession, PMPrinter printer, CFArrayRef  _Nullable *pageFormatList);
```

## Parameters

- `printSession`: The current printing session.
- `printer`: The printer whose list of page sizes you want to enumerate.
- `pageFormatList`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array that contains the page format (`PMPageFormat`) objects associated with the specified printer. You are responsible for releasing the array. Each page format object describes a paper size available for the specified printer. If the function fails, then on return the array is `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

You can use this function to find the available sheet sizes (and the imageable area for them) for a given printer. After you obtain the page format list, you can call the function [PMGetUnadjustedPaperRect](1462939-pmgetunadjustedpaperrect.md) for each page format object in the list to obtain the sheet rectangle size. Once you find the paper size you want, call [PMGetUnadjustedPageRect](1462944-pmgetunadjustedpagerect.md) to obtain the imageable area for that paper size.

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMPageFormatCreateDataRepresentation](1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.
- [PMFlattenPageFormat](core_printing/1805421-pmflattenpageformat.md): Deprecated. Flattens a page format object into a Memory Manager handle for storage in a user document.
- [PMFlattenPageFormatToCFData](core_printing/1805425-pmflattenpageformattocfdata.md): Deprecated. Flattens a page format object into a Core Foundation data object for storage in a user document.
- [PMFlattenPageFormatToURL](core_printing/1805429-pmflattenpageformattourl.md): Deprecated. Flattens a page format object into a file for storage in a user document.
- [PMUnflattenPageFormat](core_printing/1805434-pmunflattenpageformat.md): Deprecated. Rebuilds a page format object from a Memory Manager handle that contains flattened page format data.
- [PMUnflattenPageFormatWithCFData](core_printing/1805439-pmunflattenpageformatwithcfdata.md): Deprecated. Rebuilds a page format object from a Core Foundation data object that contains flattened page format data.
- [PMUnflattenPageFormatWithURL](core_printing/1805441-pmunflattenpageformatwithurl.md): Deprecated. Rebuilds a page format object from a file system URL that contains flattened page format data.
