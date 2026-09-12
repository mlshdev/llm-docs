> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805670-pmdisposeprintsettings](https://developer.apple.com/documentation/applicationservices/core_printing/1805670-pmdisposeprintsettings)

# PMDisposePrintSettings

**Interface language:** Objective-C

**Framework:** Application Services

Releases memory previously allocated for a `PMPrintSettings` object.

> Use [PMRelease](../1461402-pmrelease.md) instead.

## Declaration

```objectivec
OSStatus PMDisposePrintSettings (
   PMPrintSettings printSettings
);
```

## Parameters

- `printSettings`: On return, an invalidated `PMPrintSettings` reference.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](../core_printing.md#1670007).

<a id="overview"></a>

## Overview

Valid after calling `PMBegin` and creating a print settings object.

## See Also

### Legacy Core Printing Functions

- [PMBegin](1805644-pmbegin.md): Deprecated. Prepares Core Printing for use.
- [PMConvertOldPrintRecord](1805650-pmconvertoldprintrecord.md): Deprecated. Creates a new `PMPageFormat` object and a new `PMPrintSettings` object from a print record created by the classic Printing Manager.
- [PMDefaultPageFormat](1805655-pmdefaultpageformat.md): Deprecated. Assigns default parameter values to an existing `PMPageFormat` object, for the current printer.
- [PMDefaultPrintSettings](1805658-pmdefaultprintsettings.md): Deprecated. Assigns default parameter values to a `PMPrintSettings` object.
- [PMDisableColorSync](1805663-pmdisablecolorsync.md): Deprecated. Disables ColorSync color matching for the current page.
- [PMDisposePageFormat](1805665-pmdisposepageformat.md): Deprecated. Releases memory previously allocated for a `PMPageFormat` object.
- [PMEnableColorSync](1805675-pmenablecolorsync.md): Deprecated. Enables ColorSync color matching for the current page.
- [PMEnd](1805679-pmend.md): Deprecated. Closes Core Printing and releases its allocated memory.
- [PMError](1805683-pmerror.md): Deprecated. Obtains the result code from the last printing function called by your application.
- [PMGeneral](1805686-pmgeneral.md): Deprecated. Maintains compatibility with the `PrGeneral` function in the classic Printing Manager.
- [PMGetDestination](1805692-pmgetdestination.md): Deprecated. Obtains the output destination of a print job.
- [PMGetDriverCreator](1805697-pmgetdrivercreator.md): Deprecated. Obtains the creator of the driver associated with the current printer.
- [PMGetDriverReleaseInfo](1805701-pmgetdriverreleaseinfo.md): Deprecated. Obtains release information for the driver associated with the current printer.
- [PMGetGrafPtr](1805707-pmgetgrafptr.md): Deprecated. Obtains the printing port from an opaque printing context.
- [PMGetIndexedPrinterResolution](1805712-pmgetindexedprinterresolution.md): Deprecated. Obtains a resolution setting based on an index into the range of settings supported by the current printer.
- [PMGetJobName](1805714-pmgetjobname.md): Deprecated. Obtains the name of the print job.
- [PMGetLanguageInfo](1805718-pmgetlanguageinfo.md): Deprecated. Obtains information about the current printer’s imaging language.
- [PMGetPhysicalPageSize](1805720-pmgetphysicalpagesize.md): Deprecated. Obtains the size of the imageable area in points, unaffected by rotation, resolution, or scaling.
- [PMGetPhysicalPaperSize](1805722-pmgetphysicalpapersize.md): Deprecated. Obtains the size of the paper in points, unaffected by rotation, resolution, or scaling.
- [PMGetPrinterResolution](1805726-pmgetprinterresolution.md): Deprecated. Obtains the resolution setting for the current printer according to the tag parameter.
- [PMGetPrinterResolutionCount](1805729-pmgetprinterresolutioncount.md): Deprecated. Obtains the number of resolution settings supported by the current printer.
- [PMIsPostScriptDriver](1805734-pmispostscriptdriver.md): Deprecated. Reports whether the current printer driver supports the PostScript language.
- [PMNewPageFormat](1805737-pmnewpageformat.md): Deprecated. Creates a new `PMPageFormat` object.
- [PMNewPrintSettings](1805743-pmnewprintsettings.md): Deprecated. Creates a new `PMPrintSettings` object.
- [PMMakeOldPrintRecord](1805745-pmmakeoldprintrecord.md): Deprecated. Creates an old-style print record from a `PMPageFormat` and a `PMPrintSettings` object.
- [PMPostScriptBegin](1805751-pmpostscriptbegin.md): Deprecated. Puts the current driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMPostScriptData](1805754-pmpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMPostScriptEnd](1805759-pmpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMPostScriptFile](1805762-pmpostscriptfile.md): Deprecated. Passes PostScript data, contained in a file, to the current printer driver.
- [PMPostScriptHandle](1805767-pmpostscripthandle.md): Deprecated. Passes PostScript data, referenced by a handle, to the current printer driver.
- [PMSessionGetDocumentFormatSupported](1805770-pmsessiongetdocumentformatsuppor.md): Deprecated. Obtains the spool file formats that are accepted by the current printer driver.
- [PMSessionIsDocumentFormatSupported](1805774-pmsessionisdocumentformatsupport.md): Deprecated. Reports whether the current printer driver supports a specified spool file format.
- [PMGetColorMode](1805779-pmgetcolormode.md): Deprecated. Obtains the color mode for the print job.
- [PMSetColorMode](1805783-pmsetcolormode.md): Deprecated. Sets the desired color mode for the print job.
- [PMSetError](1805784-pmseterror.md): Deprecated. Sets the value of the current result code.
- [PMSetIdleProc](1805789-pmsetidleproc.md): Deprecated. Installs an idle callback function in your print loop.
- [PMSetJobName](1805792-pmsetjobname.md): Deprecated. Specifies the name of the print job.
- [PMSetPhysicalPaperSize](1805794-pmsetphysicalpapersize.md): Deprecated. Requests a particular paper size, unaffected by rotation, resolution, or scaling.
- [PMValidatePageFormat](1805800-pmvalidatepageformat.md): Deprecated. Obtains a valid `PMPageFormat` object.
- [PMValidatePrintSettings](1805802-pmvalidateprintsettings.md): Deprecated. Obtains a valid `PMPrintSettings` object.
