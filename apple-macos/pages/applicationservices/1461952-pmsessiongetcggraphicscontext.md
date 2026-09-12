> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461952-pmsessiongetcggraphicscontext](https://developer.apple.com/documentation/applicationservices/1461952-pmsessiongetcggraphicscontext)

# PMSessionGetCGGraphicsContext(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Obtains the Quartz graphics context for the current page in a printing session.

## Declaration

```swift
func PMSessionGetCGGraphicsContext(_ printSession: PMPrintSession, _ context: UnsafeMutablePointer<Unmanaged<CGContext>?>) -> OSStatus
```

## Parameters

- `printSession`: The printing session whose Quartz graphics context you want to obtain.
- `context`: A pointer to your [CGContext](https://developer.apple.com/documentation/coregraphics/cgcontext) variable. On return, the variable refers to the Quartz graphics context for the current page in the specified printing session. The context’s origin is at the lower-left corner of the sheet of paper, not the imageable area. You should not release the context without first retaining it. The context is valid only for the current page; you should not retain it beyond the end of the page.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If you’re using Quartz 2D to draw the content for a print job, after each call to `PMSessionBeginPage` you should call `PMSessionGetCGGraphicsContext` to obtain the Quartz graphics context for the current page. Note that before you can use the function `PMSessionGetCGGraphicsContext`, you must have called `PMSessionBeginCGDocument` or [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md) instead of PMSessionBeginDocument or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession(\_:\_:\_:)](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession(\_:\_:\_:)](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter(\_:\_:)](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPMPrinter(\_:\_:)](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionError(\_:)](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError(\_:\_:)](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.

# PMSessionGetCGGraphicsContext (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Obtains the Quartz graphics context for the current page in a printing session.

## Declaration

```objectivec
OSStatus PMSessionGetCGGraphicsContext(PMPrintSession printSession, CGContextRef  _Nullable *context);
```

## Parameters

- `printSession`: The printing session whose Quartz graphics context you want to obtain.
- `context`: A pointer to your [CGContextRef](https://developer.apple.com/documentation/coregraphics/cgcontext) variable. On return, the variable refers to the Quartz graphics context for the current page in the specified printing session. The context’s origin is at the lower-left corner of the sheet of paper, not the imageable area. You should not release the context without first retaining it. The context is valid only for the current page; you should not retain it beyond the end of the page.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If you’re using Quartz 2D to draw the content for a print job, after each call to `PMSessionBeginPage` you should call `PMSessionGetCGGraphicsContext` to obtain the Quartz graphics context for the current page. Note that before you can use the function `PMSessionGetCGGraphicsContext`, you must have called `PMSessionBeginCGDocument` or [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md) instead of PMSessionBeginDocument or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPrinter](core_printing/1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](core_printing/1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](core_printing/1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetGraphicsContext](core_printing/1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionError](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](core_printing/1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
