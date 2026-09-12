> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkbarcodeeventconfigurationrequest](https://developer.apple.com/documentation/passkit/pkbarcodeeventconfigurationrequest)

# PKBarcodeEventConfigurationRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```swift
class PKBarcodeEventConfigurationRequest
```

## Topics

### Reading Configuration Information

- [deviceAccountIdentifier](pkbarcodeeventconfigurationrequest/deviceaccountidentifier.md)
- [configurationDataType](pkbarcodeeventconfigurationrequest/configurationdatatype.md)
- [configurationData](pkbarcodeeventconfigurationrequest/configurationdata.md)
- [PKBarcodeEventConfigurationDataType](pkbarcodeeventconfigurationdatatype.md)

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

### Getting the transaction information

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest(\_:completion:)](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](pkinformationrequestcompletionblock.md)

# PKBarcodeEventConfigurationRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+ · watchOS 7.0+

## Declaration

```objectivec
@interface PKBarcodeEventConfigurationRequest : NSObject
```

## Topics

### Reading Configuration Information

- [deviceAccountIdentifier](pkbarcodeeventconfigurationrequest/deviceaccountidentifier.md)
- [configurationDataType](pkbarcodeeventconfigurationrequest/configurationdatatype.md)
- [configurationData](pkbarcodeeventconfigurationrequest/configurationdata.md)
- [PKBarcodeEventConfigurationDataType](pkbarcodeeventconfigurationdatatype.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting the transaction information

- [handleConfigurationRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest:completion:](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](pkinformationrequestcompletionblock.md)
