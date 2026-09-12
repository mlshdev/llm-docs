> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459729-pmprinterwritepostscripttourl](https://developer.apple.com/documentation/applicationservices/1459729-pmprinterwritepostscripttourl)

# PMPrinterWritePostScriptToURL(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.

## Declaration

```swift
func PMPrinterWritePostScriptToURL(_ printer: PMPrinter, _ settings: PMPrintSettings, _ format: PMPageFormat?, _ mimeType: CFString?, _ sourceFileURL: CFURL, _ destinationFileURL: CFURL) -> OSStatus
```

## Parameters

- `printer`: The destination printer for which printer-ready PostScript will be generated.
- `settings`: The print settings for the print job.
- `format`: The page format specifying the physical page size and orientation on which the document should be printed.
- `mimeType`: The MIME type of the file to be printed. If you pass `NULL`, the file is typed automatically. You can obtain a list of the MIME types supported by a given printer using the function [PMPrinterGetMimeTypes(\_:\_:\_:)](1460125-pmprintergetmimetypes.md).
- `sourceFileURL`: A URL specifying the input file to be converted to printer-ready PostScript data. Only file-based URLs are supported.
- `destinationFileURL`: A URL specifying the destination file to be created. If the file already exists, it will be overwritten. Only file-based URLs are supported.

<a id="return_value"></a>

## Return Value

A result code. If the printing system cannot convert the input MIME type to PostScript, this function fails and returns an error.

<a id="discussion"></a>

## Discussion

This function is synchronous; the conversion of the input file to PostScript is performed before the function returns. This can take a significant amount of time for longer documents. You may want to perform this operation on a thread other than the main application thread or fork a separate process for this purpose.

## See Also

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider(\_:\_:)](1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.

# PMPrinterWritePostScriptToURL (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.

## Declaration

```objectivec
OSStatus PMPrinterWritePostScriptToURL(PMPrinter printer, PMPrintSettings settings, PMPageFormat format, CFStringRef mimeType, CFURLRef sourceFileURL, CFURLRef destinationFileURL);
```

## Parameters

- `printer`: The destination printer for which printer-ready PostScript will be generated.
- `settings`: The print settings for the print job.
- `format`: The page format specifying the physical page size and orientation on which the document should be printed.
- `mimeType`: The MIME type of the file to be printed. If you pass `NULL`, the file is typed automatically. You can obtain a list of the MIME types supported by a given printer using the function [PMPrinterGetMimeTypes](1460125-pmprintergetmimetypes.md).
- `sourceFileURL`: A URL specifying the input file to be converted to printer-ready PostScript data. Only file-based URLs are supported.
- `destinationFileURL`: A URL specifying the destination file to be created. If the file already exists, it will be overwritten. Only file-based URLs are supported.

<a id="return_value"></a>

## Return Value

A result code. If the printing system cannot convert the input MIME type to PostScript, this function fails and returns an error.

<a id="discussion"></a>

## Discussion

This function is synchronous; the conversion of the input file to PostScript is performed before the function returns. This can take a significant amount of time for longer documents. You may want to perform this operation on a thread other than the main application thread or fork a separate process for this purpose.

## See Also

### Printing with PostScript Data

- [PMCGImageCreateWithEPSDataProvider](1462361-pmcgimagecreatewithepsdataprovid.md): Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.
- [PMSessionPostScriptBegin](core_printing/1805591-pmsessionpostscriptbegin.md): Deprecated. Puts the current printer driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMSessionPostScriptData](core_printing/1805595-pmsessionpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMSessionPostScriptEnd](core_printing/1805601-pmsessionpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMSessionPostScriptFile](core_printing/1805604-pmsessionpostscriptfile.md): Deprecated. Passes the PostScript data, contained in a file, to the current printer driver.
- [PMSessionPostScriptHandle](core_printing/1805605-pmsessionpostscripthandle.md): Deprecated. Passes the PostScript data, referenced by a Memory Manager handle, to the current printer driver.
- [PMSessionSetPSInjectionData](core_printing/1805610-pmsessionsetpsinjectiondata.md): Deprecated. Specifies a set of PostScript code injection points and the PostScript data to be injected.
