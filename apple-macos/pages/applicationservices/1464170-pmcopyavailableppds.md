> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464170-pmcopyavailableppds](https://developer.apple.com/documentation/applicationservices/1464170-pmcopyavailableppds)

# PMCopyAvailablePPDs(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the list of PostScript printer description (PPD) files in a PPD domain.

## Declaration

```swift
func PMCopyAvailablePPDs(_ domain: PMPPDDomain, _ ppds: UnsafeMutablePointer<Unmanaged<CFArray>?>) -> OSStatus
```

## Parameters

- `domain`: The PPD domain to search. See [PMPPDDomain](pmppddomain.md) for a description of the constants you can use to specify the domain.
- `ppds`: A pointer to your [CFArray](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array of PPD files in the specified domain. Each element in the array is a Core Foundation URL object that specifies the location of a PPD file or a compressed PPD file. You are responsible for releasing the array. If the specified domain is not valid, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing PostScript Printer Description Files

- [PMCopyLocalizedPPD(\_:\_:)](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.
- [PMCopyPPDData(\_:\_:)](1460345-pmcopyppddata.md): Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.

# PMCopyAvailablePPDs (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Obtains the list of PostScript printer description (PPD) files in a PPD domain.

## Declaration

```objectivec
OSStatus PMCopyAvailablePPDs(PMPPDDomain domain, CFArrayRef  _Nullable *ppds);
```

## Parameters

- `domain`: The PPD domain to search. See [PMPPDDomain](pmppddomain.md) for a description of the constants you can use to specify the domain.
- `ppds`: A pointer to your [CFArrayRef](https://developer.apple.com/documentation/corefoundation/cfarray) variable. On return, the variable refers to a Core Foundation array of PPD files in the specified domain. Each element in the array is a Core Foundation URL object that specifies the location of a PPD file or a compressed PPD file. You are responsible for releasing the array. If the specified domain is not valid, the variable is set to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

## See Also

### Accessing PostScript Printer Description Files

- [PMCopyLocalizedPPD](1459690-pmcopylocalizedppd.md): Obtains a localized PostScript printer description (PPD) file.
- [PMCopyPPDData](1460345-pmcopyppddata.md): Obtains the uncompressed PPD data for a PostScript printer description (PPD) file.
