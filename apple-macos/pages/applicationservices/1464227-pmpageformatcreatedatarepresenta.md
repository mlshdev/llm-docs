> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464227-pmpageformatcreatedatarepresenta](https://developer.apple.com/documentation/applicationservices/1464227-pmpageformatcreatedatarepresenta)

# PMPageFormatCreateDataRepresentation(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a data representation of a page format object.

## Declaration

```swift
func PMPageFormatCreateDataRepresentation(_ pageFormat: PMPageFormat, _ data: UnsafeMutablePointer<Unmanaged<CFData>?>, _ format: PMDataFormat) -> OSStatus
```

## Parameters

- `pageFormat`: The page format object to convert.
- `data`: A pointer to your [CFData](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a new Core Foundation data object that contains a representation of the specified page format object in the specified data format. You are responsible for releasing the data object.
- `format`: A constant that specifies the format of the data representation.  Supported values are:

  - `kPMDataFormatXMLDefault` (compatible with all macOS versions)
  - `kPMDataFormatXMLMinimal` (approximately 3-5 times smaller; compatible with macOS 10.5 and later)
  - `kPMDataFormatXMLCompressed` (approximately 20 times smaller; compatible with macOS 10.5 and later)

  See [PMDataFormat](pmdataformat.md) for a full description of these formats.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is typically used to convert a page format object into a data representation suitable for storage in a user document. For information about using a Core Foundation data object, see `CFData`.

Before calling this function, you should call the function [PMSessionValidatePageFormat(\_:\_:\_:)](1459090-pmsessionvalidatepageformat.md) to make sure the page format object contains valid values.

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat(\_:)](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper(\_:\_:)](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat(\_:\_:)](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat(\_:\_:)](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat(\_:\_:\_:)](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList(\_:\_:\_:)](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateWithDataRepresentation(\_:\_:)](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.

# PMPageFormatCreateDataRepresentation (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a data representation of a page format object.

## Declaration

```objectivec
OSStatus PMPageFormatCreateDataRepresentation(PMPageFormat pageFormat, CFDataRef  _Nullable *data, PMDataFormat format);
```

## Parameters

- `pageFormat`: The page format object to convert.
- `data`: A pointer to your [CFDataRef](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a new Core Foundation data object that contains a representation of the specified page format object in the specified data format. You are responsible for releasing the data object.
- `format`: A constant that specifies the format of the data representation.  Supported values are:

  - `kPMDataFormatXMLDefault` (compatible with all macOS versions)
  - `kPMDataFormatXMLMinimal` (approximately 3-5 times smaller; compatible with macOS 10.5 and later)
  - `kPMDataFormatXMLCompressed` (approximately 20 times smaller; compatible with macOS 10.5 and later)

  See [PMDataFormat](pmdataformat.md) for a full description of these formats.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is typically used to convert a page format object into a data representation suitable for storage in a user document. For information about using a Core Foundation data object, see `CFData`.

Before calling this function, you should call the function [PMSessionValidatePageFormat](1459090-pmsessionvalidatepageformat.md) to make sure the page format object contains valid values.

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat](1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper](1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat](1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat](1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat](1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList](1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateWithDataRepresentation](1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.
- [PMFlattenPageFormat](core_printing/1805421-pmflattenpageformat.md): Deprecated. Flattens a page format object into a Memory Manager handle for storage in a user document.
- [PMFlattenPageFormatToCFData](core_printing/1805425-pmflattenpageformattocfdata.md): Deprecated. Flattens a page format object into a Core Foundation data object for storage in a user document.
- [PMFlattenPageFormatToURL](core_printing/1805429-pmflattenpageformattourl.md): Deprecated. Flattens a page format object into a file for storage in a user document.
- [PMUnflattenPageFormat](core_printing/1805434-pmunflattenpageformat.md): Deprecated. Rebuilds a page format object from a Memory Manager handle that contains flattened page format data.
- [PMUnflattenPageFormatWithCFData](core_printing/1805439-pmunflattenpageformatwithcfdata.md): Deprecated. Rebuilds a page format object from a Core Foundation data object that contains flattened page format data.
- [PMUnflattenPageFormatWithURL](core_printing/1805441-pmunflattenpageformatwithurl.md): Deprecated. Rebuilds a page format object from a file system URL that contains flattened page format data.
