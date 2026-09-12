> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805523-pmsessionsetcurrentprinter](https://developer.apple.com/documentation/applicationservices/core_printing/1805523-pmsessionsetcurrentprinter)

# PMSessionSetCurrentPrinter

**Interface language:** Objective-C

**Framework:** Application Services

Changes the current printer for a printing session to a printer specified by name.

> Use [PMSessionSetCurrentPMPrinter](../1461096-pmsessionsetcurrentpmprinter.md) instead.

## Declaration

```objectivec
OSStatus PMSessionSetCurrentPrinter (
   PMPrintSession session,
   CFStringRef printerName
);
```

## Parameters

- `session`: The printing session whose printer you want to change.
- `printerName`: The name of the printer you want to set as the current printer.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md).

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](../1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](../1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](../1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPMPrinter](../1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](../1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionGetGraphicsContext](1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionError](../1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](../1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
