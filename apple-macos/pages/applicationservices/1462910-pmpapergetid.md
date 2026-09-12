> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462910-pmpapergetid](https://developer.apple.com/documentation/applicationservices/1462910-pmpapergetid)

# PMPaperGetID(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the identifier of a paper object.

## Declaration

```swift
func PMPaperGetID(_ paper: PMPaper, _ paperID: UnsafeMutablePointer<Unmanaged<CFString>?>) -> OSStatus
```

## Parameters

- `paper`: The paper whose identifier you want to obtain.
- `paperID`: A pointer to your [CFString](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string containing the unique identifier for this paper. You should not release the string without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetWidth(\_:\_:)](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight(\_:\_:)](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins(\_:\_:)](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName(\_:\_:\_:)](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID(\_:\_:)](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName(\_:\_:)](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.

# PMPaperGetID (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the identifier of a paper object.

## Declaration

```objectivec
OSStatus PMPaperGetID(PMPaper paper, CFStringRef  _Nullable *paperID);
```

## Parameters

- `paper`: The paper whose identifier you want to obtain.
- `paperID`: A pointer to your [CFStringRef](https://developer.apple.com/documentation/corefoundation/cfstring) variable. On return, the variable refers to a Core Foundation string containing the unique identifier for this paper. You should not release the string without first retaining it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing Data in Paper Objects

- [PMPaperGetName](core_printing/1805534-pmpapergetname.md): Obtains the name for a given paper.
- [PMPaperGetWidth](1459209-pmpapergetwidth.md): Obtains the width of the sheet of paper represented by a paper object.
- [PMPaperGetHeight](1460389-pmpapergetheight.md): Obtains the height of the sheet of paper represented by a paper object.
- [PMPaperGetMargins](1461994-pmpapergetmargins.md): Obtains the margins describing the unprintable area of the sheet represented by a paper object.
- [PMPaperCreateLocalizedName](1460981-pmpapercreatelocalizedname.md): Obtains the localized name for a given paper.
- [PMPaperGetPrinterID](1461737-pmpapergetprinterid.md): Obtains the printer ID of the printer to which a given paper corresponds.
- [PMPaperGetPPDPaperName](1461039-pmpapergetppdpapername.md): Obtains the PPD paper name for a given paper.
