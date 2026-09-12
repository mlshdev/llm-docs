> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462014-pmsessionendpagenodialog](https://developer.apple.com/documentation/applicationservices/1462014-pmsessionendpagenodialog)

# PMSessionEndPageNoDialog(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Indicates the end of drawing the current page for the specified printing session.

## Declaration

```swift
func PMSessionEndPageNoDialog(_ printSession: PMPrintSession) -> OSStatus
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is similar to the function `PMSessionEndPage` except that the printing status dialog is suppressed.

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md). You must call the functions `PMSessionBeginPageNoDialog` and `PMSessionEndPageNoDialog` within the scope of calls to the `Begin` print job function ([PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md)) and the `End` print job function ([PMSessionEndDocumentNoDialog(\_:)](1464527-pmsessionenddocumentnodialog.md)).

If the function `PMSessionBeginPageNoDialog` returns `noErr`, you must later call the function `PMSessionEndPageNoDialog`, even if errors occur within the scope of `PMSessionBeginPageNoDialog` and `PMSessionEndPageNoDialog`. You should not call `PMSessionEndPageNoDialog` if `PMSessionBeginPageNoDialog` returns an error.

## See Also

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionEndDocumentNoDialog(\_:)](1464527-pmsessionenddocumentnodialog.md): Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog(\_:\_:\_:)](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).
- [PMSessionBeginPageNoDialog(\_:\_:\_:)](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.

# PMSessionEndPageNoDialog (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Indicates the end of drawing the current page for the specified printing session.

## Declaration

```objectivec
OSStatus PMSessionEndPageNoDialog(PMPrintSession printSession);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function is similar to the function `PMSessionEndPage` except that the printing status dialog is suppressed.

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md). You must call the functions `PMSessionBeginPageNoDialog` and `PMSessionEndPageNoDialog` within the scope of calls to the `Begin` print job function ([PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md)) and the `End` print job function ([PMSessionEndDocumentNoDialog](1464527-pmsessionenddocumentnodialog.md)).

If the function `PMSessionBeginPageNoDialog` returns `noErr`, you must later call the function `PMSessionEndPageNoDialog`, even if errors occur within the scope of `PMSessionBeginPageNoDialog` and `PMSessionEndPageNoDialog`. You should not call `PMSessionEndPageNoDialog` if `PMSessionBeginPageNoDialog` returns an error.

## See Also

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md): Deprecated. Begins a print job that, by default, draws into a QuickDraw graphics port, and suppresses the printing status dialog.
- [PMSessionEndDocumentNoDialog](1464527-pmsessionenddocumentnodialog.md): Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog](1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](core_printing/1805538-pmsessionbegindocumentnodialog.md).
- [PMSessionBeginPageNoDialog](1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionSetIdleProc](core_printing/1805540-pmsessionsetidleproc.md): Deprecated. Installs an idle callback function in your print loop.
