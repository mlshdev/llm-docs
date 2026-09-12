> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805591-pmsessionpostscriptbegin](https://developer.apple.com/documentation/applicationservices/core_printing/1805591-pmsessionpostscriptbegin)

# PMSessionPostScriptBegin

**Interface language:** Objective-C

**Framework:** Application Services

Puts the current printer driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.

> Use [PMPrinterPrintWithFile](../1464600-pmprinterprintwithfile.md), [PMPrinterPrintWithProvider](../1461110-pmprinterprintwithprovider.md), or [PMCGImageCreateWithEPSDataProvider](../1462361-pmcgimagecreatewithepsdataprovid.md) instead.

## Declaration

```objectivec
OSStatus PMSessionPostScriptBegin (
   PMPrintSession printSession
);
```

## Parameters

- `printSession`: The current printing session.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

You must call the function `PMSessionPostScriptBegin` between the creation and release of a printing session. See the function [PMCreateSession](../1463247-pmcreatesession.md). You must also call the function within the scope of the functions `PMSessionBeginPage` and `PMSessionEndPage`.

To ensure that the current printer driver supports PostScript data, call `PMSessionGetDocumentFormatGeneration` before you call the function `PMSessionPostScriptBegin`. Check the list of supported spool file formats. If PICT + PS is one of them, select that format by calling the function `PMSessionSetDocumentFormatGeneration`. The function `PMSessionSetDocumentFormatGeneration` must be called before you call `PMSessionBeginDocument`.

The function `PMSessionPostScriptBegin` is not useful unless the current port is the printing port. The function returns `true` if the document format is not PICT + PS.

<a id="1819474"></a>

### Special Considerations

The PICT + PS spool file format is not available on Intel-based systems.

## See Also

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider](../1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.
- [PMPrinterWritePostScriptToURL](../1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.
- [PMSessionPostScriptData](1805595-pmsessionpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMSessionPostScriptEnd](1805601-pmsessionpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMSessionPostScriptFile](1805604-pmsessionpostscriptfile.md): Deprecated. Passes the PostScript data, contained in a file, to the current printer driver.
- [PMSessionPostScriptHandle](1805605-pmsessionpostscripthandle.md): Deprecated. Passes the PostScript data, referenced by a Memory Manager handle, to the current printer driver.
- [PMSessionSetPSInjectionData](1805610-pmsessionsetpsinjectiondata.md): Deprecated. Specifies a set of PostScript code injection points and the PostScript data to be injected.
