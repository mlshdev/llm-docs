> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentinformationrequesthandling/handle(_:completion:)-3cth8](https://developer.apple.com/documentation/passkit/pkpaymentinformationrequesthandling/handle(_:completion:)-3cth8)

# handle(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
func handle(_ configurationRequest: PKBarcodeEventConfigurationRequest, completion: @escaping @Sendable () -> Void)
```

```swift
func handle(_ configurationRequest: PKBarcodeEventConfigurationRequest) async
```

## See Also

### Getting the transaction information

- [handleInformationRequest(\_:completion:)](handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](../pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](../pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](../pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](../pkinformationrequestcompletionblock.md)

# handleConfigurationRequest:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
- (void) handleConfigurationRequest:(PKBarcodeEventConfigurationRequest *) configurationRequest completion:(void (^)()) completion;
```

## See Also

### Getting the transaction information

- [handleInformationRequest:completion:](handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](../pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](../pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](../pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](../pkinformationrequestcompletionblock.md)
