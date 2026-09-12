> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460389-pmpapergetheight](https://developer.apple.com/documentation/applicationservices/1460389-pmpapergetheight)

# PMPaperGetHeight(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the height of the sheet of paper represented by a paper object.

## Declaration

```swift
func PMPaperGetHeight(_ paper: PMPaper, _ paperHeight: UnsafeMutablePointer<Double>) -> OSStatus
```

## Parameters

- `paper`: The paper whose height you want to obtain.
- `paperHeight`: A pointer to your double-precision variable. On return, the variable contains the height of the specified paper, in points.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID(\_:\_:)](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetWidth(\_:\_:)](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName(\_:\_:\_:)](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID(\_:\_:)](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName(\_:\_:)](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.

# PMPaperGetHeight (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the height of the sheet of paper represented by a paper object.

## Declaration

```objectivec
OSStatus PMPaperGetHeight(PMPaper paper, double *paperHeight);
```

## Parameters

- `paper`: The paper whose height you want to obtain.
- `paperHeight`: A pointer to your double-precision variable. On return, the variable contains the height of the specified paper, in points.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetID](1462910-pmpapergetid.md): Obtains the identifier of a paper object.
- [PMPaperGetName](core_printing/1805534-pmpapergetname.md): Obtains the name for a given paper.
- [PMPaperGetWidth](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.
