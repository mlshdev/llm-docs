> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460345-pmcopyppddata](https://developer.apple.com/documentation/applicationservices/1460345-pmcopyppddata)

# PMCopyPPDData(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.

## Declaration

```swift
func PMCopyPPDData(_ ppd: CFURL, _ data: UnsafeMutablePointer<Unmanaged<CFData>?>) -> OSStatus
```

## Parameters

- `ppd`: A URL for a PPD or compressed PPD file. You can obtain a PPD URL using the function [PMCopyAvailablePPDs(\_:\_:)](1464170-pmcopyavailableppds.md) or [PMCopyLocalizedPPD(\_:\_:)](1459690-pmcopylocalizedppd.md).
- `data`: A pointer to your [CFData](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a Core Foundation data object containing the uncompressed PPD data from the specified PPD file. You are responsible for releasing the data object. If the `ppd` parameter does not reference a PPD file, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing PostScript Printer Description Files

- [PMCopyAvailablePPDs(\_:\_:)](1464170-pmcopyavailableppds.md): Obtains the list of PostScript printer description (PPD) files in a PPD domain.
- [PMCopyLocalizedPPD(\_:\_:)](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.

# PMCopyPPDData (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.

## Declaration

```objectivec
OSStatus PMCopyPPDData(CFURLRef ppd, CFDataRef  _Nullable *data);
```

## Parameters

- `ppd`: A URL for a PPD or compressed PPD file. You can obtain a PPD URL using the function [PMCopyAvailablePPDs](1464170-pmcopyavailableppds.md) or [PMCopyLocalizedPPD](1459690-pmcopylocalizedppd.md).
- `data`: A pointer to your [CFDataRef](https://developer.apple.com/documentation/corefoundation/cfdata) variable. On return, the variable refers to a Core Foundation data object containing the uncompressed PPD data from the specified PPD file. You are responsible for releasing the data object. If the `ppd` parameter does not reference a PPD file, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing PostScript Printer Description Files

- [PMCopyAvailablePPDs](1464170-pmcopyavailableppds.md): Obtains the list of PostScript printer description (PPD) files in a PPD domain.
- [PMCopyLocalizedPPD](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.
