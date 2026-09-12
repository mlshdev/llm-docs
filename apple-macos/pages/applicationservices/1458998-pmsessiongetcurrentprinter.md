> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1458998-pmsessiongetcurrentprinter](https://developer.apple.com/documentation/applicationservices/1458998-pmsessiongetcurrentprinter)

# PMSessionGetCurrentPrinter(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the current printer associated with a printing session.

## Declaration

```swift
func PMSessionGetCurrentPrinter(_ printSession: PMPrintSession, _ currentPrinter: UnsafeMutablePointer<PMPrinter?>) -> OSStatus
```

## Parameters

- `printSession`: The printing session whose printer you want to obtain.
- `currentPrinter`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to the printer associated with the specified printing session. The printer object is valid as long as the printing session is valid or the current printer hasn’t changed. You should not release this object without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession(\_:\_:\_:)](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession(\_:\_:\_:)](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionSetCurrentPMPrinter(\_:\_:)](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetCGGraphicsContext(\_:\_:)](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionError(\_:)](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError(\_:\_:)](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.

# PMSessionGetCurrentPrinter (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the current printer associated with a printing session.

## Declaration

```objectivec
OSStatus PMSessionGetCurrentPrinter(PMPrintSession printSession, PMPrinter  _Nullable *currentPrinter);
```

## Parameters

- `printSession`: The printing session whose printer you want to obtain.
- `currentPrinter`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to the printer associated with the specified printing session. The printer object is valid as long as the printing session is valid or the current printer hasn’t changed. You should not release this object without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionSetCurrentPrinter](core_printing/1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](core_printing/1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](core_printing/1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionGetGraphicsContext](core_printing/1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionError](1460003-pmsessionerror.md): Obtains the result code for any error returned by the printing session.
- [PMSessionSetError](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](core_printing/1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
