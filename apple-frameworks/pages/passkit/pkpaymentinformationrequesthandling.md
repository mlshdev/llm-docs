> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentinformationrequesthandling](https://developer.apple.com/documentation/passkit/pkpaymentinformationrequesthandling)

# PKPaymentInformationRequestHandling (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```swift
protocol PKPaymentInformationRequestHandling
```

<a id="overview"></a>

## Overview

> **Important**

>  Before you can add a QR code purchase extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Getting the transaction information

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest(\_:completion:)](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](pkinformationrequestcompletionblock.md)

### Signing the transaction

- [handle(\_:completion:)](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)

## See Also

### QR transaction information

- [PKPaymentInformationEventExtension](pkpaymentinformationeventextension.md): An abstract superclass for an extension to collect payment information and sign transaction data in a QR code purchase.

# PKPaymentInformationRequestHandling (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

## Declaration

```objectivec
@protocol PKPaymentInformationRequestHandling
```

<a id="overview"></a>

## Overview

> **Important**

>  Before you can add a QR code purchase extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Getting the transaction information

- [handleConfigurationRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-3cth8.md)
- [handleInformationRequest:completion:](pkpaymentinformationrequesthandling/handleinformationrequest%28__completion_%29.md)
- [PKBarcodeEventConfigurationRequest](pkbarcodeeventconfigurationrequest.md)
- [PKBarcodeEventMetadataRequest](pkbarcodeeventmetadatarequest.md)
- [PKBarcodeEventMetadataResponse](pkbarcodeeventmetadataresponse.md)
- [PKInformationRequestCompletionBlock](pkinformationrequestcompletionblock.md)

### Signing the transaction

- [handleSignatureRequest:completion:](pkpaymentinformationrequesthandling/handle%28__completion_%29-18x2y.md)
- [PKBarcodeEventSignatureRequest](pkbarcodeeventsignaturerequest.md)
- [PKBarcodeEventSignatureResponse](pkbarcodeeventsignatureresponse.md)
- [PKSignatureRequestCompletionBlock](pksignaturerequestcompletionblock.md)

## See Also

### QR transaction information

- [PKPaymentInformationEventExtension](pkpaymentinformationeventextension.md): An abstract superclass for an extension to collect payment information and sign transaction data in a QR code purchase.
