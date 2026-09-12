> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805617-pmsessionenablecolorsync](https://developer.apple.com/documentation/applicationservices/core_printing/1805617-pmsessionenablecolorsync)

# PMSessionEnableColorSync

**Interface language:** Objective-C

**Framework:** Application Services

Enables use of a custom ColorSync profile previously set by the function [PMSetProfile](1805614-pmsetprofile.md).

> There is no replacement; draw using Quartz 2D instead.

## Declaration

```objectivec
OSStatus PMSessionEnableColorSync (
   PMPrintSession printSession
);
```

## Parameters

- `printSession`: The printing session whose page-specific ColorSync profile you want to enable.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md). You must call this function within the scope of calls to the functions `PMSessionBeginPage` and `PMSessionEndPage`.

The function `PMSessionEnableColorSync` applies only to the current page. The function is useful only if the graphics context is QuickDraw and the current port is the printing port.

<a id="1819491"></a>

### Special Considerations

This function is deprecated because QuickDraw is deprecated. When drawing with Quartz, the current stroke and fill color space and the color space associated with an image are used to characterize color. Quartz provides ways to use ColorSync profiles to create color spaces, so you can characterize color using ColorSync simply by drawing with Quartz.

## See Also

### Matching Color With ColorSync

- [PMSetProfile](1805614-pmsetprofile.md): Deprecated. Embeds a color profile during printing.
- [PMSessionDisableColorSync](1805619-pmsessiondisablecolorsync.md): Deprecated. Disables use of a custom ColorSync profile previously enabled by the function [PMSessionEnableColorSync](1805617-pmsessionenablecolorsync.md).
