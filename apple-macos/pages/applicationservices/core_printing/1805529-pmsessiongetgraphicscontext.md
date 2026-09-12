> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805529-pmsessiongetgraphicscontext](https://developer.apple.com/documentation/applicationservices/core_printing/1805529-pmsessiongetgraphicscontext)

# PMSessionGetGraphicsContext

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the graphics context for the current page in a printing session.

> Use [PMSessionGetCGGraphicsContext](../1461952-pmsessiongetcggraphicscontext.md) instead.

## Declaration

```objectivec
OSStatus PMSessionGetGraphicsContext (
   PMPrintSession printSession,
   CFStringRef graphicsContextType,
   void **graphicsContext
);
```

## Parameters

- `printSession`: The printing session whose current graphics context you want to obtain.
- `graphicsType`: The desired graphics context type. This parameter is currently ignored.
- `graphicsContext`: On return, a reference to the current graphics context. The graphics context returned is the one last set by a call to the function `PMSessionSetDocumentFormatGeneration` or the default (QuickDraw) if there was no call to the function. You must typecast the context to an appropriate graphics type, either `grafPtr` or [CGContextRef](https://developer.apple.com/documentation/coregraphics/cgcontext).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md). You must also call the function `PMSessionGetGraphicsContext` within the scope of the functions `PMSessionBeginPage` and `PMSessionEndPage`.

In OS X v10.3 and earlier, you should call this function for each page you draw for a print job. After each call to the function `PMSessionBeginPage` your application should call `PMSessionGetGraphicsContext` to obtain the current graphics context. If that context is a QuickDraw context, then set the drawing port to this port by calling the QuickDraw `SetPort` function. See the discussion of the function `PMSessionBeginPage` for more information.

<a id="1819410"></a>

### Special Considerations

In macOS 10.4 and later, Apple recommends using the function [PMSessionGetCGGraphicsContext](../1461952-pmsessiongetcggraphicscontext.md) instead of this function. QuickDraw is deprecated and your application should be using Quartz 2D for its rendering.

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](../1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](../1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](../1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPrinter](1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](../1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](../1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionError](../1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](../1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
