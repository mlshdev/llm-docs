> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkbarcodeeventsignaturerequest](https://developer.apple.com/documentation/passkit/pkbarcodeeventsignaturerequest)

# PKBarcodeEventSignatureRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
class PKBarcodeEventSignatureRequest
```

## Topics

### Getting Transaction Details

- [amount](pkbarcodeeventsignaturerequest/amount.md)
- [currencyCode](pkbarcodeeventsignaturerequest/currencycode.md)
- [transactionDate](pkbarcodeeventsignaturerequest/transactiondate.md)
- [transactionIdentifier](pkbarcodeeventsignaturerequest/transactionidentifier.md)
- [transactionStatus](pkbarcodeeventsignaturerequest/transactionstatus.md)
- [merchantName](pkbarcodeeventsignaturerequest/merchantname.md)
- [rawMerchantName](pkbarcodeeventsignaturerequest/rawmerchantname.md)

### Getting Signing Information

- [partialSignature](pkbarcodeeventsignaturerequest/partialsignature.md)
- [barcodeIdentifier](pkbarcodeeventsignaturerequest/barcodeidentifier.md)
- [deviceAccountIdentifier](pkbarcodeeventsignaturerequest/deviceaccountidentifier.md)

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
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)

# PKBarcodeEventSignatureRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
@interface PKBarcodeEventSignatureRequest : NSObject
```

## Topics

### Getting Transaction Details

- [amount](pkbarcodeeventsignaturerequest/amount.md)
- [currencyCode](pkbarcodeeventsignaturerequest/currencycode.md)
- [transactionDate](pkbarcodeeventsignaturerequest/transactiondate.md)
- [transactionIdentifier](pkbarcodeeventsignaturerequest/transactionidentifier.md)
- [transactionStatus](pkbarcodeeventsignaturerequest/transactionstatus.md)
- [merchantName](pkbarcodeeventsignaturerequest/merchantname.md)
- [rawMerchantName](pkbarcodeeventsignaturerequest/rawmerchantname.md)

### Getting Signing Information

- [partialSignature](pkbarcodeeventsignaturerequest/partialsignature.md)
- [barcodeIdentifier](pkbarcodeeventsignaturerequest/barcodeidentifier.md)
- [deviceAccountIdentifier](pkbarcodeeventsignaturerequest/deviceaccountidentifier.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Signing the transaction

- [handleSignatureRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)
