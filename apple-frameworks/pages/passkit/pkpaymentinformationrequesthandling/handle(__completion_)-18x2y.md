> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentinformationrequesthandling/handle(_:completion:)-18x2y](https://developer.apple.com/documentation/passkit/pkpaymentinformationrequesthandling/handle(_:completion:)-18x2y)

# handle(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
func handle(_ signatureRequest: PKBarcodeEventSignatureRequest, completion: @escaping @Sendable (PKBarcodeEventSignatureResponse) -> Void)
```

```swift
func handle(_ signatureRequest: PKBarcodeEventSignatureRequest) async -> PKBarcodeEventSignatureResponse
```

## See Also

### Signing the transaction

- [PKBarcodeEventSignatureRequest](../pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](../pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](../pksignaturerequestcompletionblock.md)

# handleSignatureRequest:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
- (void) handleSignatureRequest:(PKBarcodeEventSignatureRequest *) signatureRequest completion:(PKSignatureRequestCompletionBlock) completion;
```

## See Also

### Signing the transaction

- [PKBarcodeEventSignatureRequest](../pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](../pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](../pksignaturerequestcompletionblock.md)
