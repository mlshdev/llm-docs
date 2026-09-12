> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkinformationrequestcompletionblock](https://developer.apple.com/documentation/passkit/pkinformationrequestcompletionblock)

# PKInformationRequestCompletionBlock (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```swift
typealias PKInformationRequestCompletionBlock = (PKBarcodeEventMetadataResponse) -> Void
```

## See Also

### Getting the transaction information

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest(\_:completion:)](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)

# PKInformationRequestCompletionBlock (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (^)(PKBarcodeEventMetadataResponse *) PKInformationRequestCompletionBlock;
```

## See Also

### Getting the transaction information

- [handleConfigurationRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest:completion:](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)
