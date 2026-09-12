> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805540-pmsessionsetidleproc](https://developer.apple.com/documentation/applicationservices/core_printing/1805540-pmsessionsetidleproc)

# PMSessionSetIdleProc

**Interface language:** Objective-C

**Framework:** Application Services

Installs an idle callback function in your print loop.

> There is no replacement; this function was included to facilitate porting legacy applications to macOS, but it serves no useful purpose.

## Declaration

```objectivec
OSStatus PMSessionSetIdleProc (
   PMPrintSession printSession,
   PMIdleUPP idleProc
);
```

## Parameters

- `printSession`: The printing session that provides a context for the print job.
- `idleProc`: A universal procedure pointer to your idle function. Your idle function is defined by the callback [PMIdleProcPtr](pmidleprocptr.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You do not need this function in macOS. Instead, use the standard idle proc.

## See Also

### Print Loop Functions

- [PMSessionBeginCGDocumentNoDialog](../1460101-pmsessionbegincgdocumentnodialog.md): Begins a print job that draws into a Quartz graphics context and suppresses the printing status dialog.
- [PMSessionBeginDocumentNoDialog](1805538-pmsessionbegindocumentnodialog.md): Deprecated. Begins a print job that, by default, draws into a QuickDraw graphics port, and suppresses the printing status dialog.
- [PMSessionEndDocumentNoDialog](../1464527-pmsessionenddocumentnodialog.md): Ends a print job started by calling the function [PMSessionBeginCGDocumentNoDialog](../1460101-pmsessionbegincgdocumentnodialog.md) or [PMSessionBeginDocumentNoDialog](1805538-pmsessionbegindocumentnodialog.md).
- [PMSessionBeginPageNoDialog](../1463416-pmsessionbeginpagenodialog.md): Starts a new page for printing in the specified printing session and suppresses the printing status dialog.
- [PMSessionEndPageNoDialog](../1462014-pmsessionendpagenodialog.md): Indicates the end of drawing the current page for the specified printing session.
