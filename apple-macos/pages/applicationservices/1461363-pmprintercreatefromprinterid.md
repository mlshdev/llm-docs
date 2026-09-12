> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461363-pmprintercreatefromprinterid](https://developer.apple.com/documentation/applicationservices/1461363-pmprintercreatefromprinterid)

# PMPrinterCreateFromPrinterID(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a printer object from a print queue identifier.

## Declaration

```swift
func PMPrinterCreateFromPrinterID(_ printerID: CFString) -> PMPrinter?
```

## Parameters

- `printerID`: The unique identifier of a print queue.

<a id="return_value"></a>

## Return Value

A new printer object, or `NULL` if no print queue is available with the specified identifier. You are responsible for releasing the printer object with the function [PMRelease(\_:)](1461402-pmrelease.md).

<a id="discussion"></a>

## Discussion

This function is typically used to re-create a printer object using the print queue ID obtained by a call to `PMPrinterGetID` at an earlier time. If the print queue is deleted after obtaining the ID, this function returns `NULL` for that ID.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser(\_:\_:)](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList(\_:\_:\_:\_:)](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMCreateGenericPrinter(\_:)](1461960-pmcreategenericprinter.md): Creates a generic printer object.

### Related Documentation

- [PMPrinterGetID(\_:)](1459606-pmprintergetid.md): Returns the unique identifier of a printer.

# PMPrinterCreateFromPrinterID (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a printer object from a print queue identifier.

## Declaration

```objectivec
PMPrinter PMPrinterCreateFromPrinterID(CFStringRef printerID);
```

## Parameters

- `printerID`: The unique identifier of a print queue.

<a id="return_value"></a>

## Return Value

A new printer object, or `NULL` if no print queue is available with the specified identifier. You are responsible for releasing the printer object with the function [PMRelease](1461402-pmrelease.md).

<a id="discussion"></a>

## Discussion

This function is typically used to re-create a printer object using the print queue ID obtained by a call to `PMPrinterGetID` at an earlier time. If the print queue is deleted after obtaining the ID, this function returns `NULL` for that ID.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMCreateGenericPrinter](1461960-pmcreategenericprinter.md): Creates a generic printer object.

### Related Documentation

- [PMPrinterGetID](1459606-pmprintergetid.md): Returns the unique identifier of a printer.
