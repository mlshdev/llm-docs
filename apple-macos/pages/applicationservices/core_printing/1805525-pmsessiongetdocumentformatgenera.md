> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805525-pmsessiongetdocumentformatgenera](https://developer.apple.com/documentation/applicationservices/core_printing/1805525-pmsessiongetdocumentformatgenera)

# PMSessionGetDocumentFormatGeneration

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the spool file formats that can be generated for the specified printing session.

> If you’re drawing using Quartz 2D instead of QuickDraw, use `PMSessionBeginCGDocument` or [PMSessionBeginCGDocumentNoDialog](../1460101-pmsessionbegincgdocumentnodialog.md); for submitting PostScript data, use [PMPrinterPrintWithFile](../1464600-pmprinterprintwithfile.md) or [PMPrinterPrintWithProvider](../1461110-pmprinterprintwithprovider.md); to draw EPS data, use [PMCGImageCreateWithEPSDataProvider](../1462361-pmcgimagecreatewithepsdataprovid.md).

## Declaration

```objectivec
OSStatus PMSessionGetDocumentFormatGeneration (
   PMPrintSession printSession,
   CFArrayRef *docFormats
);
```

## Parameters

- `printSession`: The printing session whose spool file formats you want to obtain.
- `docFormats`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array that contains the MIME types for the available spool file formats. Each element in the array is a Core Foundation string. Despite what its name implies, the function `PMSessionGetDocumentFormatGeneration` has Create/Copy semantics which means you are responsible for releasing the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call the function `PMSessionGetDocumentFormatGeneration` between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md). You should call `PMSessionGetDocumentFormatGeneration` only after the Print dialog is dismissed. 

The function `PMSessionGetDocumentFormatGeneration` determines the spool file formats that the specific print job supports. Spool file formats are represented by MIME types. The macOS print spooler supports PDF and PICT + PS. The default spool file format is PDF. PICT + PS is supported only for printing to a PostScript printer.

<a id="1819402"></a>

### Special Considerations

The PICT + PS spool file format is not available on Intel-based systems.

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](../1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](../1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](../1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPrinter](1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](../1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionSetDocumentFormatGeneration](1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](../1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionGetGraphicsContext](1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionError](../1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](../1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
