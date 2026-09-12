> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/maskpattern-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/maskpattern-swift.property)

# maskPattern (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The data mask pattern for the QR code symbol.

## Declaration

```swift
var maskPattern: UInt8 { get }
```

<a id="discussion"></a>

## Discussion

QR Codes support eight data mask patterns, which are used to avoid large black or large white areas inside the symbol body. Valid values range from 0 to 7.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.

# maskPattern (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The data mask pattern for the QR code symbol.

## Declaration

```objectivec
@property (readonly) uint8_t maskPattern;
```

<a id="discussion"></a>

## Discussion

QR Codes support eight data mask patterns, which are used to avoid large black or large white areas inside the symbol body. Valid values range from 0 to 7.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.
