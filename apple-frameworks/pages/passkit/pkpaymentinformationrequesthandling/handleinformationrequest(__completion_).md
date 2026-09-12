> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentinformationrequesthandling/handleinformationrequest(_:completion:)](https://developer.apple.com/documentation/passkit/pkpaymentinformationrequesthandling/handleinformationrequest(_:completion:))

# handleInformationRequest(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
func handleInformationRequest(_ infoRequest: PKBarcodeEventMetadataRequest, completion: @escaping @Sendable (PKBarcodeEventMetadataResponse) -> Void)
```

```swift
func handleInformationRequest(_ infoRequest: PKBarcodeEventMetadataRequest) async -> PKBarcodeEventMetadataResponse
```

## See Also

### Getting the transaction information

- [handle(\_:completion:)](handle%28__completion_%29-3cth8.md)
- [PKBarcodeEventConfigurationRequest](../pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](../pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](../pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](../pkinformationrequestcompletionblock.md)

# handleInformationRequest:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
- (void) handleInformationRequest:(PKBarcodeEventMetadataRequest *) infoRequest completion:(PKInformationRequestCompletionBlock) completion;
```

## See Also

### Getting the transaction information

- [handleConfigurationRequest:completion:](handle%28__completion_%29-3cth8.md)
- [PKBarcodeEventConfigurationRequest](../pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](../pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](../pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](../pkinformationrequestcompletionblock.md)
