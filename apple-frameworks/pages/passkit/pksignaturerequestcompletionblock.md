> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksignaturerequestcompletionblock](https://developer.apple.com/documentation/passkit/pksignaturerequestcompletionblock)

# PKSignatureRequestCompletionBlock (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```swift
typealias PKSignatureRequestCompletionBlock = (PKBarcodeEventSignatureResponse) -> Void
```

## See Also

### Signing the transaction

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)

# PKSignatureRequestCompletionBlock (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (^)(PKBarcodeEventSignatureResponse *) PKSignatureRequestCompletionBlock;
```

## See Also

### Signing the transaction

- [handleSignatureRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)
