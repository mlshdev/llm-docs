> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460175-pmserverlaunchprinterbrowser](https://developer.apple.com/documentation/applicationservices/1460175-pmserverlaunchprinterbrowser)

# PMServerLaunchPrinterBrowser(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Launches the printer browser to browse the printers available for a print server.

## Declaration

```swift
func PMServerLaunchPrinterBrowser(_ server: PMServer?, _ options: CFDictionary?) -> OSStatus
```

## Parameters

- `server`: The print server to browse. Pass `kPMServerLocal` to specify the local print server. Currently, you may specify only the local print server.
- `options`: This parameter is reserved for future use. At the present time, pass `NULL`. Passing `NULL` presents the printer browser in the default fashion.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).  If you specify a server whose printers cannot be browsed, this function returns the error code `kPMInvalidParameter`.

<a id="discussion"></a>

## Discussion

This function displays the standard printer browser to allow the user to create a new print queue.

## See Also

### Creating Printer Objects

- [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList(\_:\_:\_:\_:)](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID(\_:)](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter(\_:)](1461960-pmcreategenericprinter.md): Creates a generic printer object.

# PMServerLaunchPrinterBrowser (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Launches the printer browser to browse the printers available for a print server.

## Declaration

```objectivec
OSStatus PMServerLaunchPrinterBrowser(PMServer server, CFDictionaryRef options);
```

## Parameters

- `server`: The print server to browse. Pass `kPMServerLocal` to specify the local print server. Currently, you may specify only the local print server.
- `options`: This parameter is reserved for future use. At the present time, pass `NULL`. Passing `NULL` presents the printer browser in the default fashion.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).  If you specify a server whose printers cannot be browsed, this function returns the error code `kPMInvalidParameter`.

<a id="discussion"></a>

## Discussion

This function displays the standard printer browser to allow the user to create a new print queue.

## See Also

### Creating Printer Objects

- [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter](1461960-pmcreategenericprinter.md): Creates a generic printer object.
