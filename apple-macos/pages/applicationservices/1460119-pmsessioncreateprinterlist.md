> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460119-pmsessioncreateprinterlist](https://developer.apple.com/documentation/applicationservices/1460119-pmsessioncreateprinterlist)

# PMSessionCreatePrinterList(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a list of printers available in the specified printing session.

## Declaration

```swift
func PMSessionCreatePrinterList(_ printSession: PMPrintSession, _ printerList: UnsafeMutablePointer<Unmanaged<CFArray>?>, _ currentIndex: UnsafeMutablePointer<CFIndex>?, _ currentPrinter: UnsafeMutablePointer<PMPrinter?>?) -> OSStatus
```

## Parameters

- `printSession`: The printing session whose printer list you want to obtain.
- `printerList`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array containing a list of printers available in the specified printing session. Each element in the array is a Core Foundation string that contains a printer’s name as shown in the user interface. You are responsible for releasing the array.
- `currentIndex`: A pointer to your [CFIndex](https://developer.apple.com/documentation/corefoundation/cfindex) variable. On return, the variable contains a value specifying where the current printer is in the printer list.
- `currentPrinter`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to a printer object that represents the current printer. You should not release the printer object without first retaining it. If the printer is the generic printer, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession(\_:)](1463247-pmcreatesession.md). 

You can call the function `PMSessionCreatePrinterList` to obtain a valid printer name to pass to the function `PMSessionSetCurrentPrinter`.

<a id="1771103"></a>

### Special Considerations

In macOS 10.2 and later, Apple recommends using the function [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md) instead. `PMServerCreatePrinterList` doesn’t require a `PMSession` object; it can be called at any time. It also works directly with `PMPrinter` objects.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser(\_:\_:)](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList(\_:\_:)](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMPrinterCreateFromPrinterID(\_:)](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter(\_:)](1461960-pmcreategenericprinter.md): Creates a generic printer object.

# PMSessionCreatePrinterList (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

Creates a list of printers available in the specified printing session.

## Declaration

```objectivec
OSStatus PMSessionCreatePrinterList(PMPrintSession printSession, CFArrayRef  _Nullable *printerList, CFIndex *currentIndex, PMPrinter  _Nullable *currentPrinter);
```

## Parameters

- `printSession`: The printing session whose printer list you want to obtain.
- `printerList`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array containing a list of printers available in the specified printing session. Each element in the array is a Core Foundation string that contains a printer’s name as shown in the user interface. You are responsible for releasing the array.
- `currentIndex`: A pointer to your [CFIndex](https://developer.apple.com/documentation/corefoundation/cfindex) variable. On return, the variable contains a value specifying where the current printer is in the printer list.
- `currentPrinter`: A pointer to your [PMPrinter](pmprinter.md) variable. On return, the variable refers to a printer object that represents the current printer. You should not release the printer object without first retaining it. If the printer is the generic printer, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You must call this function between the creation and release of a printing session. See the function [PMCreateSession](1463247-pmcreatesession.md). 

You can call the function `PMSessionCreatePrinterList` to obtain a valid printer name to pass to the function `PMSessionSetCurrentPrinter`.

<a id="1771103"></a>

### Special Considerations

In macOS 10.2 and later, Apple recommends using the function [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md) instead. `PMServerCreatePrinterList` doesn’t require a `PMSession` object; it can be called at any time. It also works directly with `PMPrinter` objects.

## See Also

### Creating Printer Objects

- [PMServerLaunchPrinterBrowser](1460175-pmserverlaunchprinterbrowser.md): Launches the printer browser to browse the printers available for a print server.
- [PMServerCreatePrinterList](1459953-pmservercreateprinterlist.md): Creates a list of printers available to a print server.
- [PMPrinterCreateFromPrinterID](1461363-pmprintercreatefromprinterid.md): Creates a printer object from a print queue identifier.
- [PMCreateGenericPrinter](1461960-pmcreategenericprinter.md): Creates a generic printer object.
