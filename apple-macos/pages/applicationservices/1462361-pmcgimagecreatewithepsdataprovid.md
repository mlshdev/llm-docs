> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462361-pmcgimagecreatewithepsdataprovid](https://developer.apple.com/documentation/applicationservices/1462361-pmcgimagecreatewithepsdataprovid)

# PMCGImageCreateWithEPSDataProvider(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.

## Declaration

```swift
func PMCGImageCreateWithEPSDataProvider(_ epsDataProvider: CGDataProvider?, _ epsPreview: CGImage) -> Unmanaged<CGImage>?
```

## Parameters

- `epsDataProvider`: A Quartz data provider that supplies the PostScript contents of the EPS file. The EPS data must begin with the EPSF required header and bounding box DSC (Document Structuring Conventions) comments.
- `epsPreview`: A Quartz image that serves as the proxy image for the EPS file. When the image returned by this function is rendered onscreen or sent to a printer that cannot render PostScript, this proxy image is drawn instead.

<a id="return_value"></a>

## Return Value

An image capable of rendering either the EPS content or the proxy image, depending upon the capabilities of the destination printer.

<a id="discussion"></a>

## Discussion

It is likely that data will not be read from the EPS data provider until after this function returns. You should be careful not to free the underlying EPS data until the data provider's release function is invoked. Similarly, do not free the preview image data until the image data provider's release function is invoked. You are responsible for releasing the data providers for the EPS image and the EPS preview image.

Note that in macOS 10.3 and later, Quartz can convert EPS data into PDF data. Using this feature and then using Quartz to draw the resulting PDF data may produce superior results for your application. See `CGPSConverter` for details.

## See Also

### Printing with PostScript Data

- [PMPrinterWritePostScriptToURL(\_:\_:\_:\_:\_:\_:)](1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.

# PMCGImageCreateWithEPSDataProvider (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates an image that references both the PostScript contents of EPS data and a preview (proxy) image for the data.

## Declaration

```objectivec
CGImageRef PMCGImageCreateWithEPSDataProvider(CGDataProviderRef epsDataProvider, CGImageRef epsPreview);
```

## Parameters

- `epsDataProvider`: A Quartz data provider that supplies the PostScript contents of the EPS file. The EPS data must begin with the EPSF required header and bounding box DSC (Document Structuring Conventions) comments.
- `epsPreview`: A Quartz image that serves as the proxy image for the EPS file. When the image returned by this function is rendered onscreen or sent to a printer that cannot render PostScript, this proxy image is drawn instead.

<a id="return_value"></a>

## Return Value

An image capable of rendering either the EPS content or the proxy image, depending upon the capabilities of the destination printer.

<a id="discussion"></a>

## Discussion

It is likely that data will not be read from the EPS data provider until after this function returns. You should be careful not to free the underlying EPS data until the data provider's release function is invoked. Similarly, do not free the preview image data until the image data provider's release function is invoked. You are responsible for releasing the data providers for the EPS image and the EPS preview image.

Note that in macOS 10.3 and later, Quartz can convert EPS data into PDF data. Using this feature and then using Quartz to draw the resulting PDF data may produce superior results for your application. See `CGPSConverter` for details.

## See Also

### Printing with PostScript Data

- [PMPrinterWritePostScriptToURL](1459729-pmprinterwritepostscripttourl.md): Converts an input file of the specified MIME type to printer-ready PostScript for a destination printer.
- [PMSessionPostScriptBegin](core_printing/1805591-pmsessionpostscriptbegin.md): Deprecated. Puts the current printer driver into PostScript mode, ready to accept PostScript data instead of QuickDraw data.
- [PMSessionPostScriptData](core_printing/1805595-pmsessionpostscriptdata.md): Deprecated. Passes PostScript data, referenced by a pointer, to the current printer driver.
- [PMSessionPostScriptEnd](core_printing/1805601-pmsessionpostscriptend.md): Deprecated. Restores the current driver to QuickDraw mode, ready to accept QuickDraw data instead of PostScript data.
- [PMSessionPostScriptFile](core_printing/1805604-pmsessionpostscriptfile.md): Deprecated. Passes the PostScript data, contained in a file, to the current printer driver.
- [PMSessionPostScriptHandle](core_printing/1805605-pmsessionpostscripthandle.md): Deprecated. Passes the PostScript data, referenced by a Memory Manager handle, to the current printer driver.
- [PMSessionSetPSInjectionData](core_printing/1805610-pmsessionsetpsinjectiondata.md): Deprecated. Specifies a set of PostScript code injection points and the PostScript data to be injected.
