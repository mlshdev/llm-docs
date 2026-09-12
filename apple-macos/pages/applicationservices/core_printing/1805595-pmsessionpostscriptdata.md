> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805595-pmsessionpostscriptdata](https://developer.apple.com/documentation/applicationservices/core_printing/1805595-pmsessionpostscriptdata)

# PMSessionPostScriptData

**Interface language:** Objective-C

**Framework:** Application Services

Passes PostScript data, referenced by a pointer, to the current printer driver.

> Use [PMPrinterPrintWithFile](../1464600-pmprinterprintwithfile.md), [PMPrinterPrintWithProvider](../1461110-pmprinterprintwithprovider.md), or [PMCGImageCreateWithEPSDataProvider](../1462361-pmcgimagecreatewithepsdataprovid.md) instead.

## Declaration

```objectivec
OSStatus PMSessionPostScriptData (
   PMPrintSession printSession,
   Ptr psPtr,
   Size len
);
```

## Parameters

- `printSession`: The current printing session.
- `psPtr`: A pointer to the PostScript data you want to pass to the current printer driver.
- `len`: The number of bytes of PostScript data.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md). Typically you call this function with the scope of calls to the functions `PMSessionPostScriptBegin` and `PMSessionPostScriptEnd`.

The function `PMSessionPostScriptData` is not useful unless the current port is the printing port and the document format is PICT + PS. 

<a id="1819475"></a>

### Special Considerations

The PICT + PS spool file format is not available on Intel-based systems.

## See Also

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider](../1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.
- [PMPrinterWritePostScriptToURL](../1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.
- [PMSessionPostScriptBegin](1805591-pmsessionpostscriptbegin.md): Deprecated. Puts the current printer driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMSessionPostScriptEnd](1805601-pmsessionpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMSessionPostScriptFile](1805604-pmsessionpostscriptfile.md): Deprecated. Passes the PostScript data, contained in a file, to the current printer driver.
- [PMSessionPostScriptHandle](1805605-pmsessionpostscripthandle.md): Deprecated. Passes the PostScript data, referenced by a Memory Manager handle, to the current printer driver.
- [PMSessionSetPSInjectionData](1805610-pmsessionsetpsinjectiondata.md): Deprecated. Specifies a set of PostScript code injection points and the PostScript data to be injected.
