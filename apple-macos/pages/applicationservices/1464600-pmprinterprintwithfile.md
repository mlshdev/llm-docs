> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464600-pmprinterprintwithfile](https://developer.apple.com/documentation/applicationservices/1464600-pmprinterprintwithfile)

# PMPrinterPrintWithFile(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Submits a print job to a specified printer using a file that contains print data.

## Declaration

```swift
func PMPrinterPrintWithFile(_ printer: PMPrinter, _ settings: PMPrintSettings, _ format: PMPageFormat?, _ mimeType: CFString?, _ fileURL: CFURL) -> OSStatus
```

## Parameters

- `printer`: The destination printer.
- `settings`: The print settings for the print job.
- `format`: The physical page size and orientation with which the document should be printed. This parameter can be `NULL`.
- `mimeType`: The MIME type of the data to be printed. If this parameter is `NULL`, the MIME type will be determined automatically. You can obtain a list of the MIME types supported by a given printer using the function [PMPrinterGetMimeTypes(\_:\_:\_:)](1460125-pmprintergetmimetypes.md).
- `fileURL`: The URL of the file that supplies the print data.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007). If the specified printer cannot handle the file's MIME type, a non-zero error code is returned.

<a id="discussion"></a>

## Discussion

This function can fail if the specified printer cannot handle the file’s MIME type. Use the function [PMPrinterGetMimeTypes(\_:\_:\_:)](1460125-pmprintergetmimetypes.md) to check whether a MIME type is supported.

## See Also

### Submitting a Print Job to a Printer

- [PMPrinterPrintWithProvider(\_:\_:\_:\_:\_:)](1461110-pmprinterprintwithprovider.md): Submits a print job to a specified printer using a Quartz data provider to obtain the print data.

# PMPrinterPrintWithFile (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Submits a print job to a specified printer using a file that contains print data.

## Declaration

```objectivec
OSStatus PMPrinterPrintWithFile(PMPrinter printer, PMPrintSettings settings, PMPageFormat format, CFStringRef mimeType, CFURLRef fileURL);
```

## Parameters

- `printer`: The destination printer.
- `settings`: The print settings for the print job.
- `format`: The physical page size and orientation with which the document should be printed. This parameter can be `NULL`.
- `mimeType`: The MIME type of the data to be printed. If this parameter is `NULL`, the MIME type will be determined automatically. You can obtain a list of the MIME types supported by a given printer using the function [PMPrinterGetMimeTypes](1460125-pmprintergetmimetypes.md).
- `fileURL`: The URL of the file that supplies the print data.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007). If the specified printer cannot handle the file's MIME type, a non-zero error code is returned.

<a id="discussion"></a>

## Discussion

This function can fail if the specified printer cannot handle the file’s MIME type. Use the function [PMPrinterGetMimeTypes](1460125-pmprintergetmimetypes.md) to check whether a MIME type is supported.

## See Also

### Submitting a Print Job to a Printer

- [PMPrinterPrintWithProvider](1461110-pmprinterprintwithprovider.md): Submits a print job to a specified printer using a Quartz data provider to obtain the print data.
