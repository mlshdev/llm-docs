> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/errorcorrectionlevel-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/errorcorrectionlevel-swift.property)

# errorCorrectionLevel (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error correction level of the QR code symbol.

## Declaration

```swift
var errorCorrectionLevel: CIQRCodeDescriptor.ErrorCorrectionLevel { get }
```

<a id="discussion"></a>

## Discussion

QR Codes support four levels of Reed-Solomon error correction.

The possible error correction levels are enumerated in [CIDataMatrixCodeDescriptor.ECCVersion](../cidatamatrixcodedescriptor/eccversion-swift.enum.md).

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.

# errorCorrectionLevel (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error correction level of the QR code symbol.

## Declaration

```objectivec
@property (readonly) CIQRCodeErrorCorrectionLevel errorCorrectionLevel;
```

<a id="discussion"></a>

## Discussion

QR Codes support four levels of Reed-Solomon error correction.

The possible error correction levels are enumerated in [CIDataMatrixCodeECCVersion](../cidatamatrixcodedescriptor/eccversion-swift.enum.md).

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
