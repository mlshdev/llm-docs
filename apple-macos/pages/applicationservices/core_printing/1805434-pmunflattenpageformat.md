> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805434-pmunflattenpageformat](https://developer.apple.com/documentation/applicationservices/core_printing/1805434-pmunflattenpageformat)

# PMUnflattenPageFormat

**Interface language:** Objective-C

**Framework:** Application Services

Rebuilds a page format object from a Memory Manager handle that contains flattened page format data.

> Use [PMPageFormatCreateWithDataRepresentation](../1462876-pmpageformatcreatewithdatarepres.md) instead.

## Declaration

```objectivec
OSStatus PMUnflattenPageFormat (
   Handle flatFormat,
   PMPageFormat *pageFormat
);
```

## Parameters

- `flatFormat`: A handle to a previously flattened page format object. You are responsible for disposing of the handle.
- `pageFormat`: A pointer to your [PMPageFormat](../pmpageformat.md) variable. On return, the variable refers to a page format object that contains the data retrieved from the flattened page format data. You are responsible for releasing the page format object with the function [PMRelease](../1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007). The result code `kPMInvalidParameter` is returned if the flattened `PMPageFormat` object was created by an incompatible version of Core Printing.

<a id="overview"></a>

## Overview

The `PMUnflattenPageFormat` function creates a new `PMPageFormat` object that contains the data from the flattened page format data. You should call the function [PMSessionValidatePageFormat](../1459090-pmsessionvalidatepageformat.md) to make sure the page format object contains valid values. 

If the function returns the result code `kPMInvalidParameter` you need to create a new, default page format object. You should also notify the user that the flattened page format is not valid.

## See Also

### Creating and Using Page Format Objects

- [PMCreatePageFormat](../1459485-pmcreatepageformat.md): Creates a new page format object.
- [PMCreatePageFormatWithPMPaper](../1459274-pmcreatepageformatwithpmpaper.md): Creates a page format object with a specified paper.
- [PMCopyPageFormat](../1464669-pmcopypageformat.md): Copies the settings from one page format object into another.
- [PMSessionDefaultPageFormat](../1462217-pmsessiondefaultpageformat.md): Assigns default parameter values to a page format object used in the specified printing session.
- [PMSessionValidatePageFormat](../1459090-pmsessionvalidatepageformat.md): Updates the values in a page format object and validates them against the current formatting printer.
- [PMSessionCreatePageFormatList](../1463985-pmsessioncreatepageformatlist.md): Obtains a list of page format objects, each of which describes a paper size available on the specified printer.
- [PMPageFormatCreateDataRepresentation](../1464227-pmpageformatcreatedatarepresenta.md): Creates a data representation of a page format object.
- [PMPageFormatCreateWithDataRepresentation](../1462876-pmpageformatcreatewithdatarepres.md): Creates a page format object from a data representation.
- [PMFlattenPageFormat](1805421-pmflattenpageformat.md): Deprecated. Flattens a page format object into a Memory Manager handle for storage in a user document.
- [PMFlattenPageFormatToCFData](1805425-pmflattenpageformattocfdata.md): Deprecated. Flattens a page format object into a Core Foundation data object for storage in a user document.
- [PMFlattenPageFormatToURL](1805429-pmflattenpageformattourl.md): Deprecated. Flattens a page format object into a file for storage in a user document.
- [PMUnflattenPageFormatWithCFData](1805439-pmunflattenpageformatwithcfdata.md): Deprecated. Rebuilds a page format object from a Core Foundation data object that contains flattened page format data.
- [PMUnflattenPageFormatWithURL](1805441-pmunflattenpageformatwithurl.md): Deprecated. Rebuilds a page format object from a file system URL that contains flattened page format data.
