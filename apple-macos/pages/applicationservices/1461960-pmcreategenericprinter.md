> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461960-pmcreategenericprinter](https://developer.apple.com/documentation/applicationservices/1461960-pmcreategenericprinter)

# PMCreateGenericPrinter(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a generic printer object.

## Declaration

```swift
func PMCreateGenericPrinter(_ printer: UnsafeMutablePointer<PMPrinter?>) -> OSStatus
```

## Parameters

- `printer`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to a new printer object that represents the generic formatting printer. You are responsible for releasing the printer object with the function [PMRelease(\_:)](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function provides a way to create a `PMPrinter` object that represents the generic formatting printer.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser(\_:\_:)](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList(\_:\_:\_:\_:)](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID(\_:)](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.

# PMCreateGenericPrinter (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Creates a generic printer object.

## Declaration

```objectivec
OSStatus PMCreateGenericPrinter(PMPrinter  _Nullable *printer);
```

## Parameters

- `printer`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to a new printer object that represents the generic formatting printer. You are responsible for releasing the printer object with the function [PMRelease](1461402-pmrelease.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

This function provides a way to create a `PMPrinter` object that represents the generic formatting printer.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMSessionCreatePrinterList](1460119-pmsessioncreateprinterlist.md): Creates a list of printers available in the specified printing session.
- [PMPrinterCreateFromPrinterID](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
