> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/symbolversion-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/symbolversion-swift.property)

# symbolVersion (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The version of the QR code which corresponds to the size of the QR code symbol.

## Declaration

```swift
var symbolVersion: Int { get }
```

<a id="discussion"></a>

## Discussion

ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity. This field is required in order to properly interpret the error corrected payload.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.

# symbolVersion (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The version of the QR code which corresponds to the size of the QR code symbol.

## Declaration

```objectivec
@property (readonly) NSInteger symbolVersion;
```

<a id="discussion"></a>

## Discussion

ISO/IEC 18004 defines versions from 1 to 40, where a higher symbol version indicates a larger data-carrying capacity. This field is required in order to properly interpret the error corrected payload.

## See Also

### Examining a Descriptor

- [errorCorrectedPayload](errorcorrectedpayload-swift.property.md): The error-corrected codeword payload that comprises the QR code symbol.
- [maskPattern](maskpattern-swift.property.md): The data mask pattern for the QR code symbol.
- [errorCorrectionLevel](errorcorrectionlevel-swift.property.md): The error correction level of the QR code symbol.
