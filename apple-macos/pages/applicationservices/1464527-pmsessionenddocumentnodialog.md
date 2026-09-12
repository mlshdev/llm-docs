> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464527-pmsessionenddocumentnodialog](https://developer.apple.com/documentation/applicationservices/1464527-pmsessionenddocumentnodialog)

# PMSessionEndDocumentNoDialog(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).

## Declaration

```swift
func PMSessionEndDocumentNoDialog(_ printSession: PMPrintSession) -> OSStatus
```

## Parameters

- `printSession`: The current printing session. On return, the printing session is no longer valid; however, you must still call the function [PMRelease(\_:)](1461402-pmrelease.md) to release the object.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is similar to the function `PMSessionEndDocument` except that the printing status dialog is suppressed.

This function is used to end a print job, and it should be called within your application’s print loop after the call to the function `PMSessionEndPageNoDialog` and before releasing the printing session. The same printing session that is created by the function `PMCreateSession` for the Print dialog should be used for the print loop.

The function `PMSessionEndDocumentNoDialog` must be called after its corresponding `Begin` function ([PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md)). If the `Begin` function returns `noErr`, the function `PMSessionEndDocument` must be called, even if errors occur within the scope of the `Begin` and `End` functions. You should not call `PMSessionEndDocumentNoDialog` if the `Begin` function returns an error.

## See Also

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionBeginPageNoDialog(\_:\_:\_:)](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionEndPageNoDialog(\_:)](1462014-pmsessionendpagenodialog.md): Indicates the end of drawing the current page for the specified printing session.

# PMSessionEndDocumentNoDialog (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).

## Declaration

```objectivec
OSStatus PMSessionEndDocumentNoDialog(PMPrintSession printSession);
```

## Parameters

- `printSession`: The current printing session. On return, the printing session is no longer valid; however, you must still call the function [PMRelease](1461402-pmrelease.md) to release the object.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is similar to the function `PMSessionEndDocument` except that the printing status dialog is suppressed.

This function is used to end a print job, and it should be called within your application’s print loop after the call to the function `PMSessionEndPageNoDialog` and before releasing the printing session. The same printing session that is created by the function `PMCreateSession` for the Print dialog should be used for the print loop.

The function `PMSessionEndDocumentNoDialog` must be called after its corresponding `Begin` function ([PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md)). If the `Begin` function returns `noErr`, the function `PMSessionEndDocument` must be called, even if errors occur within the scope of the `Begin` and `End` functions. You should not call `PMSessionEndDocumentNoDialog` if the `Begin` function returns an error.

## See Also

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md): Deprecated. Begins a print job that, by default, draws into a QuickDraw graphics port, and suppresses the printing status dialog.
- [PMSessionBeginPageNoDialog](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionEndPageNoDialog](1462014-pmsessionendpagenodialog.md): Indicates the end of drawing the current page for the specified printing session.
- [PMSessionSetIdleProc](core_printing/1805540-pmsessionsetidleproc.md): Deprecated. Installs an idle callback function in your print loop.
