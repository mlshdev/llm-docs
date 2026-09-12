> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodedescriptor/init(payload:symbolversion:maskpattern:errorcorrectionlevel:)](https://developer.apple.com/documentation/coreimage/ciqrcodedescriptor/init(payload:symbolversion:maskpattern:errorcorrectionlevel:))

# init(payload:symbolVersion:maskPattern:errorCorrectionLevel:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a QR code descriptor for the given payload and parameters.

## Declaration

```swift
init?(payload errorCorrectedPayload: Data, symbolVersion: Int, maskPattern: UInt8, errorCorrectionLevel: CIQRCodeDescriptor.ErrorCorrectionLevel)
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the QR code symbol.
- `symbolVersion`: The symbol version, from 1 through 40.
- `maskPattern`: The mask pattern to use in the QR code, from 0 to 7.
- `errorCorrectionLevel`: The QR code’s error correction level: L, M, Q, or H.

<a id="return-value"></a>

## Return Value

 An initialized [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

# initWithPayload:symbolVersion:maskPattern:errorCorrectionLevel: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a QR code descriptor for the given payload and parameters.

## Declaration

```objectivec
- (instancetype) initWithPayload:(NSData *) errorCorrectedPayload symbolVersion:(NSInteger) symbolVersion maskPattern:(uint8_t) maskPattern errorCorrectionLevel:(CIQRCodeErrorCorrectionLevel) errorCorrectionLevel;
```

## Parameters

- `errorCorrectedPayload`: The data to encode in the QR code symbol.
- `symbolVersion`: The symbol version, from 1 through 40.
- `maskPattern`: The mask pattern to use in the QR code, from 0 to 7.
- `errorCorrectionLevel`: The QR code’s error correction level: L, M, Q, or H.

<a id="return-value"></a>

## Return Value

 An initialized [CIAztecCodeDescriptor](../ciazteccodedescriptor.md) instance or `nil` if the parameters are invalid

## See Also

### Creating a Descriptor

- [descriptorWithPayload:symbolVersion:maskPattern:errorCorrectionLevel:](descriptorwithpayload_symbolversion_maskpattern_errorcorrectionlevel_.md): Creates a QR code descriptor for the given payload and parameters.
