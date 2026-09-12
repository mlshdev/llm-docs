> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459953-pmservercreateprinterlist](https://developer.apple.com/documentation/applicationservices/1459953-pmservercreateprinterlist)

# PMServerCreatePrinterList(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Creates a list of printers available to a print server.

## Declaration

```swift
func PMServerCreatePrinterList(_ server: PMServer?, _ printerList: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## Parameters

- `server`: The print server whose printers you want to obtain. To specify the local print server, pass the constant `kPMServerLocal`. Currently, you may specify only the local print server.
- `printerList`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array containing the printers available to the specified print server. Each element in the array is a `PMPrinter` object. You are responsible for releasing the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser(\_:\_:)](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMSessionCreatePrinterList(\_:\_:\_:\_:)](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID(\_:)](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter(\_:)](1461960-pmcreategenericprinter.md): Creates a generic printer object.

# PMServerCreatePrinterList (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Creates a list of printers available to a print server.

## Declaration

```objectivec
OSStatus PMServerCreatePrinterList(PMServer server, CFArrayRef  _Nullable *printerList);
```

## Parameters

- `server`: The print server whose printers you want to obtain. To specify the local print server, pass the constant `kPMServerLocal`. Currently, you may specify only the local print server.
- `printerList`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array containing the printers available to the specified print server. Each element in the array is a `PMPrinter` object. You are responsible for releasing the array.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMSessionCreatePrinterList](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter](1461960-pmcreategenericprinter.md): Creates a generic printer object.
