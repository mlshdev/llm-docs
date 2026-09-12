> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciqrcodefeature/symboldescriptor-swift.property](https://developer.apple.com/documentation/coreimage/ciqrcodefeature/symboldescriptor-swift.property)

# symbolDescriptor (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An abstract representation of a QR Code symbol.

## Declaration

```swift
var symbolDescriptor: CIQRCodeDescriptor? { get }
```

<a id="discussion"></a>

## Discussion

The property is a [CIQRCodeDescriptor](../ciqrcodedescriptor.md) instance that contains the payload, symbol version, mask pattern, and error correction level, so the QR Code can be reproduced.

## See Also

### Decoding a Detected Barcode

- [messageString](messagestring.md): The string decoded from the detected barcode.

# symbolDescriptor (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An abstract representation of a QR Code symbol.

## Declaration

```objectivec
@property (readonly, nullable) CIQRCodeDescriptor * symbolDescriptor;
```

<a id="discussion"></a>

## Discussion

The property is a [CIQRCodeDescriptor](../ciqrcodedescriptor.md) instance that contains the payload, symbol version, mask pattern, and error correction level, so the QR Code can be reproduced.

## See Also

### Decoding a Detected Barcode

- [messageString](messagestring.md): The string decoded from the detected barcode.
