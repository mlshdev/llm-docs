> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460003-pmsessionerror](https://developer.apple.com/documentation/applicationservices/1460003-pmsessionerror)

# PMSessionError(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the result code for any error returned by the printing session.

## Declaration

```swift
func PMSessionError(_ printSession: PMPrintSession) -> OSStatus
```

## Parameters

- `printSession`: The printing session whose last error you want to obtain.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007). The constant `kPMCancel` indicates the user canceled the current print job.

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md).

The `PMSessionError` function returns the last printing session error, not the last error from a printing function (`PMxxx`). Because most printing functions return a result code, the `PMSessionError` function is not required for general error checking. However, you can use `PMSessionError` in your print loop to determine if the user cancels the current print job or if any other errors occur during printing that are not explicitly returned by one of the other calls. For example, if the user clicks the Cancel button in the status dialog or presses Command-period on the keyboard, this function returns the constant `kPMCancel`. If this or any other error is encountered during the print loop, your application should call the appropriate functions (for example, `PMSessionEndPage` and `PMSessionEndDocument`) to exit the print loop before your application reports the error.

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession(\_:\_:\_:)](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession(\_:\_:\_:)](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter(\_:\_:)](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPMPrinter(\_:\_:)](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetCGGraphicsContext(\_:\_:)](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionSetError(\_:\_:)](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.

# PMSessionError (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Obtains the result code for any error returned by the printing session.

## Declaration

```objectivec
OSStatus PMSessionError(PMPrintSession printSession);
```

## Parameters

- `printSession`: The printing session whose last error you want to obtain.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007). The constant `kPMCancel` indicates the user canceled the current print job.

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md).

The `PMSessionError` function returns the last printing session error, not the last error from a printing function (`PMxxx`). Because most printing functions return a result code, the `PMSessionError` function is not required for general error checking. However, you can use `PMSessionError` in your print loop to determine if the user cancels the current print job or if any other errors occur during printing that are not explicitly returned by one of the other calls. For example, if the user clicks the Cancel button in the status dialog or presses Command-period on the keyboard, this function returns the constant `kPMCancel`. If this or any other error is encountered during the print loop, your application should call the appropriate functions (for example, `PMSessionEndPage` and `PMSessionEndDocument`) to exit the print loop before your application reports the error.

## See Also

### Accessing Data in Printing Session Objects

- [PMSessionGetDataFromSession](1462964-pmsessiongetdatafromsession.md): Obtains application-specific data previously stored in a printing session object.
- [PMSessionSetDataInSession](1461902-pmsessionsetdatainsession.md): Stores your application-specific data in a printing session object.
- [PMSessionGetCurrentPrinter](1458998-pmsessiongetcurrentprinter.md): Obtains the current printer associated with a printing session.
- [PMSessionSetCurrentPrinter](core_printing/1805523-pmsessionsetcurrentprinter.md): Deprecated. Changes the current printer for a printing session to a printer specified by name.
- [PMSessionSetCurrentPMPrinter](1461096-pmsessionsetcurrentpmprinter.md): Changes the current printer for a printing session.
- [PMSessionGetDocumentFormatGeneration](core_printing/1805525-pmsessiongetdocumentformatgenera.md): Deprecated. Obtains the spool file formats that can be generated for the specified printing session.
- [PMSessionSetDocumentFormatGeneration](core_printing/1805527-pmsessionsetdocumentformatgenera.md): Deprecated. Requests a specified spool file format and supplies the graphics context type to use for drawing pages within the print loop.
- [PMSessionGetCGGraphicsContext](1461952-pmsessiongetcggraphicscontext.md): Obtains the Quartz graphics context for the current page in a printing session.
- [PMSessionGetGraphicsContext](core_printing/1805529-pmsessiongetgraphicscontext.md): Deprecated. Obtains the graphics context for the current page in a printing session.
- [PMSessionSetError](1460216-pmsessionseterror.md): Sets the value of the current result code for the specified printing session.
- [PMSessionGeneral](core_printing/1805530-pmsessiongeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
