> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461377-pmprinterisremote](https://developer.apple.com/documentation/applicationservices/1461377-pmprinterisremote)

# PMPrinterIsRemote(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Indicates whether a printer is hosted by a remote print server.

## Declaration

```swift
func PMPrinterIsRemote(_ printer: PMPrinter, _ isRemoteP: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `printer`: The printer you’re querying to determine whether it is hosted by a remote print server.
- `isRemoteP`: A pointer to your Boolean variable. On return, `true` indicates that the printer is hosted by a remote print server; otherwise, `false`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If this function returns `true`, the printer is hosted by a remote print server and the printer can be considered a shared printer.

In macOS, the typical way that users create a print queue for a shared printer is by browsing. Print queues for shared printers that are created by browsing are marked as remote queues, and `PMPrinterIsRemote` returns `true` for such printers. However, expert users can create a local queue for a remote printer manually, and such a printer does not appear to be remote printer.

Whether a printer is remote is derived from the CUPS printer-type attribute for the print queue.

## See Also

### Accessing Information About a Printer

- [PMPrinterCopyDescriptionURL(\_:\_:\_:)](1459187-pmprintercopydescriptionurl.md): Obtains the URL of the description file for a given printer.
- [PMPrinterCopyDeviceURI(\_:\_:)](1460543-pmprintercopydeviceuri.md): Obtains the device URI of a given printer.
- [PMPrinterCopyHostName(\_:\_:)](1462076-pmprintercopyhostname.md): Obtains the name of the server hosting the print queue for a given printer.
- [PMPrinterCopyPresets(\_:\_:)](1459117-pmprintercopypresets.md): Obtains a list of print settings presets for a printer.
- [PMPrinterGetCommInfo(\_:\_:\_:)](1461069-pmprintergetcomminfo.md): Obtains information about the communication channel for a printer.
- [PMPrinterGetDriverCreator(\_:\_:)](1459107-pmprintergetdrivercreator.md): Obtains the creator of the driver associated with the specified printer.
- [PMPrinterGetID(\_:)](1459606-pmprintergetid.md): Returns the unique identifier of a printer.
- [PMPrinterGetLocation(\_:)](1461467-pmprintergetlocation.md): Returns the location of a printer.
- [PMPrinterGetMakeAndModelName(\_:\_:)](1463347-pmprintergetmakeandmodelname.md): Obtains the manufacturer and model name of the specified printer.
- [PMPrinterGetMimeTypes(\_:\_:\_:)](1460125-pmprintergetmimetypes.md): Obtains a list of MIME content types supported by a printer using the specified print settings.
- [PMPrinterGetName(\_:)](1459018-pmprintergetname.md): Returns the human-readable name of a printer.
- [PMPrinterGetOutputResolution(\_:\_:\_:)](1459076-pmprintergetoutputresolution.md): Obtains the printer hardware output resolution for the specified print settings.
- [PMPrinterSetOutputResolution(\_:\_:\_:)](1459931-pmprintersetoutputresolution.md): Sets the print settings to reflect the specified printer hardware output resolution.
- [PMPrinterGetPaperList(\_:\_:)](1460088-pmprintergetpaperlist.md): Obtains the list of papers available for a printer.
- [PMPrinterGetPrinterResolutionCount(\_:\_:)](1462004-pmprintergetprinterresolutioncou.md): Obtains the number of resolution settings supported by the specified printer.
- [PMPrinterGetIndexedPrinterResolution(\_:\_:\_:)](1464490-pmprintergetindexedprinterresolu.md): Obtains a resolution setting based on an index into the range of settings supported by the specified printer.
- [PMPrinterGetState(\_:\_:)](1462954-pmprintergetstate.md): Obtains the current state of the print queue for a printer.
- [PMPrinterSetDefault(\_:)](1461118-pmprintersetdefault.md): Sets the default printer for the current user.
- [PMPrinterIsDefault(\_:)](1459030-pmprinterisdefault.md): Returns a Boolean value indicating whether a printer is the default printer for the current user.
- [PMPrinterIsFavorite(\_:)](1462074-pmprinterisfavorite.md): Returns a Boolean value indicating whether a printer is in the user’s list of favorite printers.
- [PMPrinterIsPostScriptCapable(\_:)](1464168-pmprinterispostscriptcapable.md): Returns a Boolean value indicating whether a printer is PostScript capable.
- [PMPrinterIsPostScriptPrinter(\_:\_:)](1462257-pmprinterispostscriptprinter.md): Determines whether a printer is a PostScript printer.

# PMPrinterIsRemote (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Indicates whether a printer is hosted by a remote print server.

## Declaration

```objectivec
OSStatus PMPrinterIsRemote(PMPrinter printer, Boolean *isRemoteP);
```

## Parameters

- `printer`: The printer you’re querying to determine whether it is hosted by a remote print server.
- `isRemoteP`: A pointer to your Boolean variable. On return, `true` indicates that the printer is hosted by a remote print server; otherwise, `false`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

If this function returns `true`, the printer is hosted by a remote print server and the printer can be considered a shared printer.

In macOS, the typical way that users create a print queue for a shared printer is by browsing. Print queues for shared printers that are created by browsing are marked as remote queues, and `PMPrinterIsRemote` returns `true` for such printers. However, expert users can create a local queue for a remote printer manually, and such a printer does not appear to be remote printer.

Whether a printer is remote is derived from the CUPS printer-type attribute for the print queue.

## See Also

### Accessing Information About a Printer

- [PMPrinterCopyDescriptionURL](1459187-pmprintercopydescriptionurl.md): Obtains the URL of the description file for a given printer.
- [PMPrinterCopyDeviceURI](1460543-pmprintercopydeviceuri.md): Obtains the device URI of a given printer.
- [PMPrinterCopyHostName](1462076-pmprintercopyhostname.md): Obtains the name of the server hosting the print queue for a given printer.
- [PMPrinterCopyPresets](1459117-pmprintercopypresets.md): Obtains a list of print settings presets for a printer.
- [PMPrinterGetCommInfo](1461069-pmprintergetcomminfo.md): Obtains information about the communication channel for a printer.
- [PMPrinterGetDescriptionURL](core_printing/1805546-pmprintergetdescriptionurl.md): Deprecated. Obtains a reference to the specified printer’s description file.
- [PMPrinterGetDeviceURI](core_printing/1805547-pmprintergetdeviceuri.md): Deprecated. Obtains a copy of a printer's device URI.
- [PMPrinterGetDriverCreator](1459107-pmprintergetdrivercreator.md): Obtains the creator of the driver associated with the specified printer.
- [PMPrinterGetDriverReleaseInfo](1464149-pmprintergetdriverreleaseinfo.md): Obtains version information for the driver associated with the specified printer.
- [PMPrinterGetID](1459606-pmprintergetid.md): Returns the unique identifier of a printer.
- [PMPrinterGetLanguageInfo](1458956-pmprintergetlanguageinfo.md): Obtains information about the imaging language for the specified printer.
- [PMPrinterGetLocation](1461467-pmprintergetlocation.md): Returns the location of a printer.
- [PMPrinterGetMakeAndModelName](1463347-pmprintergetmakeandmodelname.md): Obtains the manufacturer and model name of the specified printer.
- [PMPrinterGetMimeTypes](1460125-pmprintergetmimetypes.md): Obtains a list of MIME content types supported by a printer using the specified print settings.
- [PMPrinterGetName](1459018-pmprintergetname.md): Returns the human-readable name of a printer.
- [PMPrinterGetOutputResolution](1459076-pmprintergetoutputresolution.md): Obtains the printer hardware output resolution for the specified print settings.
- [PMPrinterSetOutputResolution](1459931-pmprintersetoutputresolution.md): Sets the print settings to reflect the specified printer hardware output resolution.
- [PMPrinterGetPaperList](1460088-pmprintergetpaperlist.md): Obtains the list of papers available for a printer.
- [PMPrinterGetPrinterResolution](core_printing/1805554-pmprintergetprinterresolution.md): Deprecated. Obtains a resolution setting for the specified printer.
- [PMPrinterGetPrinterResolutionCount](1462004-pmprintergetprinterresolutioncou.md): Obtains the number of resolution settings supported by the specified printer.
- [PMPrinterGetIndexedPrinterResolution](1464490-pmprintergetindexedprinterresolu.md): Obtains a resolution setting based on an index into the range of settings supported by the specified printer.
- [PMPrinterGetState](1462954-pmprintergetstate.md): Obtains the current state of the print queue for a printer.
- [PMPrinterSetDefault](1461118-pmprintersetdefault.md): Sets the default printer for the current user.
- [PMPrinterIsDefault](1459030-pmprinterisdefault.md): Returns a Boolean value indicating whether a printer is the default printer for the current user.
- [PMPrinterIsFavorite](1462074-pmprinterisfavorite.md): Returns a Boolean value indicating whether a printer is in the user’s list of favorite printers.
- [PMPrinterIsPostScriptCapable](1464168-pmprinterispostscriptcapable.md): Returns a Boolean value indicating whether a printer is PostScript capable.
- [PMPrinterIsPostScriptPrinter](1462257-pmprinterispostscriptprinter.md): Determines whether a printer is a PostScript printer.
