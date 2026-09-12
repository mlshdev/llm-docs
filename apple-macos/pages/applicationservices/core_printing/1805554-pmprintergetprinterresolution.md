> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805554-pmprintergetprinterresolution](https://developer.apple.com/documentation/applicationservices/core_printing/1805554-pmprintergetprinterresolution)

# PMPrinterGetPrinterResolution

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a resolution setting for the specified printer.

> Use [PMPrinterGetPrinterResolutionCount](../1462004-pmprintergetprinterresolutioncou.md) and [PMPrinterGetIndexedPrinterResolution](../1464490-pmprintergetindexedprinterresolu.md) to examine the available printer resolutions.

## Declaration

```objectivec
OSStatus PMPrinterGetPrinterResolution (
   PMPrinter printer,
   PMTag tag,
   PMResolution *res
);
```

## Parameters

- `printer`: The printer whose resolution you want to obtain.
- `tag`: A tag that specifies the kind of resolution information you want to obtain (minimum, maximum, default, and so forth). See [Tag Constants](tag_constants.md) for a description of the constants you can pass in this parameter.
- `res`: A pointer to your [PMResolution](pmresolution.md) data structure. On return, the structure contains the resolution setting associated with the tag value.

<a id="return_value"></a>

## Return Value

A result code. The result code `kPMNotImplemented` indicates that the printer driver does not support multiple resolution settings.

## See Also

### Accessing Information About a Printer

- [PMPrinterCopyDescriptionURL](../1459187-pmprintercopydescriptionurl.md): Obtains the URL of the description file for a given printer.
- [PMPrinterCopyDeviceURI](../1460543-pmprintercopydeviceuri.md): Obtains the device URI of a given printer.
- [PMPrinterCopyHostName](../1462076-pmprintercopyhostname.md): Obtains the name of the server hosting the print queue for a given printer.
- [PMPrinterCopyPresets](../1459117-pmprintercopypresets.md): Obtains a list of print settings presets for a printer.
- [PMPrinterGetCommInfo](../1461069-pmprintergetcomminfo.md): Obtains information about the communication channel for a printer.
- [PMPrinterGetDescriptionURL](1805546-pmprintergetdescriptionurl.md): Deprecated. Obtains a reference to the specified printer’s description file.
- [PMPrinterGetDeviceURI](1805547-pmprintergetdeviceuri.md): Deprecated. Obtains a copy of a printer's device URI.
- [PMPrinterGetDriverCreator](../1459107-pmprintergetdrivercreator.md): Obtains the creator of the driver associated with the specified printer.
- [PMPrinterGetDriverReleaseInfo](../1464149-pmprintergetdriverreleaseinfo.md): Obtains version information for the driver associated with the specified printer.
- [PMPrinterGetID](../1459606-pmprintergetid.md): Returns the unique identifier of a printer.
- [PMPrinterGetLanguageInfo](../1458956-pmprintergetlanguageinfo.md): Obtains information about the imaging language for the specified printer.
- [PMPrinterGetLocation](../1461467-pmprintergetlocation.md): Returns the location of a printer.
- [PMPrinterGetMakeAndModelName](../1463347-pmprintergetmakeandmodelname.md): Obtains the manufacturer and model name of the specified printer.
- [PMPrinterGetMimeTypes](../1460125-pmprintergetmimetypes.md): Obtains a list of MIME content types supported by a printer using the specified print settings.
- [PMPrinterGetName](../1459018-pmprintergetname.md): Returns the human-readable name of a printer.
- [PMPrinterGetOutputResolution](../1459076-pmprintergetoutputresolution.md): Obtains the printer hardware output resolution for the specified print settings.
- [PMPrinterSetOutputResolution](../1459931-pmprintersetoutputresolution.md): Sets the print settings to reflect the specified printer hardware output resolution.
- [PMPrinterGetPaperList](../1460088-pmprintergetpaperlist.md): Obtains the list of papers available for a printer.
- [PMPrinterGetPrinterResolutionCount](../1462004-pmprintergetprinterresolutioncou.md): Obtains the number of resolution settings supported by the specified printer.
- [PMPrinterGetIndexedPrinterResolution](../1464490-pmprintergetindexedprinterresolu.md): Obtains a resolution setting based on an index into the range of settings supported by the specified printer.
- [PMPrinterGetState](../1462954-pmprintergetstate.md): Obtains the current state of the print queue for a printer.
- [PMPrinterSetDefault](../1461118-pmprintersetdefault.md): Sets the default printer for the current user.
- [PMPrinterIsDefault](../1459030-pmprinterisdefault.md): Returns a Boolean value indicating whether a printer is the default printer for the current user.
- [PMPrinterIsFavorite](../1462074-pmprinterisfavorite.md): Returns a Boolean value indicating whether a printer is in the user’s list of favorite printers.
- [PMPrinterIsPostScriptCapable](../1464168-pmprinterispostscriptcapable.md): Returns a Boolean value indicating whether a printer is PostScript capable.
- [PMPrinterIsPostScriptPrinter](../1462257-pmprinterispostscriptprinter.md): Determines whether a printer is a PostScript printer.
- [PMPrinterIsRemote](../1461377-pmprinterisremote.md): Indicates whether a printer is hosted by a remote print server.
