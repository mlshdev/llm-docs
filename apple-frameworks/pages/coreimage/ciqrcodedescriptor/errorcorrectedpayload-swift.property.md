> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/errorcorrectedpayload-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/errorcorrectedpayload-swift.property)

# errorCorrectedPayload (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error-corrected codeword payload that comprises the QR code symbol.

## Declaration

```swift
var errorCorrectedPayload: Data { get }
```

<a id="discussion"></a>

## Discussion

QR Codes are formally specified in ISO/IEC 18004:2006(E). Section 6.4.10 “Bitstream to codeword conversion” specifies the set of 8-bit codewords in the symbol immediately prior to splitting the message into blocks and applying error correction.

During decode, error correction is applied and if successful, the message is re-ordered to the state immediately following “Bitstream to codeword conversion.”

The `errorCorrectedPayload` corresponds to this sequence of 8-bit codewords.

## See Also

### Examining a Descriptor

- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.

# errorCorrectedPayload (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The error-corrected codeword payload that comprises the QR code symbol.

## Declaration

```objectivec
@property (readonly) NSData * errorCorrectedPayload;
```

<a id="discussion"></a>

## Discussion

QR Codes are formally specified in ISO/IEC 18004:2006(E). Section 6.4.10 “Bitstream to codeword conversion” specifies the set of 8-bit codewords in the symbol immediately prior to splitting the message into blocks and applying error correction.

During decode, error correction is applied and if successful, the message is re-ordered to the state immediately following “Bitstream to codeword conversion.”

The `errorCorrectedPayload` corresponds to this sequence of 8-bit codewords.

## See Also

### Examining a Descriptor

- [symbolVersion](symbolversion-swift.property.md): The version of the QR code which corresponds to the size of the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.
