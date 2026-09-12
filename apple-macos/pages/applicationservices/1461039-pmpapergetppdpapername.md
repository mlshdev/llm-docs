> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461039-pmpapergetppdpapername](https://developer.apple.com/documentation/applicationservices/1461039-pmpapergetppdpapername)

# PMPaperGetPPDPaperName(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the PPD paper name for a given paper.

## Declaration

```swift
func PMPaperGetPPDPaperName(_ paper: PMPaper, _ paperName: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `paper`: The paper whose PPD paper name you want to obtain.
- `paperName`: A pointer to your [CFString](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the PPD paper name for the specified paper. If an error occurs, the variable is set to `NULL`. You should not release the string without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The macOS printing system uses a PostScript Printer Description (PPD) file to describe a given printer and print queue for that printer. The PPD paper name is the name that uniquely identifies a given paper for the printer to which the paper corresponds. To obtain a list of papers for a given printer, use the function [PMPrinterGetPaperList(\_:\_:)](1460088-pmprintergetpaperlist.md).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID(\_:\_:)](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetWidth(\_:\_:)](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight(\_:\_:)](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName(\_:\_:\_:)](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID(\_:\_:)](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.

# PMPaperGetPPDPaperName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the PPD paper name for a given paper.

## Declaration

```objectivec
OSStatus PMPaperGetPPDPaperName(PMPaper paper, CFStringRef  _Nullable *paperName);
```

## Parameters

- `paper`: The paper whose PPD paper name you want to obtain.
- `paperName`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string that contains the PPD paper name for the specified paper. If an error occurs, the variable is set to `NULL`. You should not release the string without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

The macOS printing system uses a PostScript Printer Description (PPD) file to describe a given printer and print queue for that printer. The PPD paper name is the name that uniquely identifies a given paper for the printer to which the paper corresponds. To obtain a list of papers for a given printer, use the function [PMPrinterGetPaperList](1460088-pmprintergetpaperlist.md).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetName](core_printing/1805534-pmpapergetname.md): Obtains the name for a given paper.
- [PMPaperGetWidth](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
