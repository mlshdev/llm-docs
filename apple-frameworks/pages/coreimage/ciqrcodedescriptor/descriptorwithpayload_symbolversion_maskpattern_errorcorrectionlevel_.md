> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/descriptorwithpayload:symbolversion:maskpattern:errorcorrectionlevel:](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/descriptorwithpayload:symbolversion:maskpattern:errorcorrectionlevel:)

# descriptorWithPayload:symbolVersion:maskPattern:errorCorrectionLevel:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a QR code descriptor for the given payload and parameters.

## Declaration

```objectivec
+ (instancetype) descriptorWithPayload:(NSData *) errorCorrectedPayload symbolVersion:(NSInteger) symbolVersion maskPattern:(uint8_t) maskPattern errorCorrectionLevel:(CIQRCodeErrorCorrectionLevel) errorCorrectionLevel;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the QR code symbol.
- `symbolVersion`: The symbol version, from 1 through 40.
- `maskPattern`: The mask pattern to use in the QR code, from 0 to 7.
- `errorCorrectionLevel`: The QR code’s error correction level: L, M, Q, or H.

<a id="return-value"></a>

## Return Value

 An autoreleased [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [initWithPayload:symbolVersion:maskPattern:errorCorrectionLevel:](init%28payload_symbolversion_maskpattern_errorcorrectionlevel_%29.md): Initializes a QR code descriptor for the given payload and parameters.
