> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkbarcodeeventsignatureresponse](https://developer.apple.com/documentation/passkit/pkbarcodeeventsignatureresponse)

# PKBarcodeEventSignatureResponse (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
class PKBarcodeEventSignatureResponse
```

## Topics

### Creating a Signature Response

- [init(signedData:)](pkbarcodeeventsignatureresponse/init%28signeddata_%29.md)

### Returning the Signature

- [signedData](pkbarcodeeventsignatureresponse/signeddata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Signing the transaction

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)

# PKBarcodeEventSignatureResponse (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
@interface PKBarcodeEventSignatureResponse : NSObject
```

## Topics

### Creating a Signature Response

- [initWithSignedData:](pkbarcodeeventsignatureresponse/init%28signeddata_%29.md)

### Returning the Signature

- [signedData](pkbarcodeeventsignatureresponse/signeddata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Signing the transaction

- [handleSignatureRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)
