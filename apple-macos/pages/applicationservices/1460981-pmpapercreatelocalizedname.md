> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460981-pmpapercreatelocalizedname](https://developer.apple.com/documentation/applicationservices/1460981-pmpapercreatelocalizedname)

# PMPaperCreateLocalizedName(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the localized name for a given paper.

## Declaration

```swift
func PMPaperCreateLocalizedName(_ paper: PMPaper, _ printer: PMPrinter, _ paperName: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `paper`: The paper whose localized name you want to obtain.
- `printer`: The printer for which the localization should be performed.
- `paperName`: A pointer to your [CFString](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the localized name of the paper. This name is appropriate to display in the user interface. If an error occurs, the variable is set to `NULL`. You are responsible for releasing the string.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Not all printers have the same way of referring to a given paper. Generally, if you want to obtain the name of a paper, you want to localize the paper name for a particular printer. For example, if you were displaying a list of papers for a given printer, you would want the paper names to be localized for that printer.

<a id="1771098"></a>

### Special Considerations

In macOS 10.5 and later, Apple recommends using this function instead of [PMPaperGetName](core_printing/1805534-pmpapergetname.md).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID(\_:\_:)](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetWidth(\_:\_:)](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight(\_:\_:)](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperGetPrinterID(\_:\_:)](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName(\_:\_:)](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.

# PMPaperCreateLocalizedName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the localized name for a given paper.

## Declaration

```objectivec
OSStatus PMPaperCreateLocalizedName(PMPaper paper, PMPrinter printer, CFStringRef  _Nullable *paperName);
```

## Parameters

- `paper`: The paper whose localized name you want to obtain.
- `printer`: The printer for which the localization should be performed.
- `paperName`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the localized name of the paper. This name is appropriate to display in the user interface. If an error occurs, the variable is set to `NULL`. You are responsible for releasing the string.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

Not all printers have the same way of referring to a given paper. Generally, if you want to obtain the name of a paper, you want to localize the paper name for a particular printer. For example, if you were displaying a list of papers for a given printer, you would want the paper names to be localized for that printer.

<a id="1771098"></a>

### Special Considerations

In macOS 10.5 and later, Apple recommends using this function instead of [PMPaperGetName](core_printing/1805534-pmpapergetname.md).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetName](core_printing/1805534-pmpapergetname.md): Obtains the name for a given paper.
- [PMPaperGetWidth](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperGetPrinterID](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.
