> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skreceiptrefreshrequest](https://developer.apple.com/documentation/storekit/skreceiptrefreshrequest)

# SKReceiptRefreshRequest (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A request to the App Store to get the app receipt, which represents the customer’s transactions with your app.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```swift
class SKReceiptRefreshRequest
```

## Mentioned In

- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](restoring-purchased-products.md)
- [Validating receipts with the App Store](validating-receipts-with-the-app-store.md)

<a id="overview"></a>

## Overview

> **Note**

>  The receipt isn’t necessary if you use [AppTransaction](apptransaction.md) to validate the app download, or [Transaction](transaction.md) to validate in-app purchases. Only use the receipt if your app uses the [Original API for In-App Purchase](original-api-for-in-app-purchase.md), or needs the receipt to validate the app download because it can’t use [AppTransaction](apptransaction.md).

Use this API to request a new app receipt from the App Store if the receipt is invalid or missing from its expected location, [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md). To request the receipt using the [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) object, you initialize it, attach a [delegate](skrequest/delegate.md), and then call the request’s [start()](skrequest/start%28%29.md) method.

> **Important**

>  The receipt refresh request displays a system prompt that asks users to authenticate with their App Store credentials. For a better user experience, initiate the request after an explicit user action, like tapping or clicking a button.

When the request completes successfully, your delegate receives an [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) object in its [requestDidFinish(\_:)](skrequestdelegate/requestdidfinish%28__%29.md) method. Locate the app receipt using the [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md) property. For information about validating the receipt, see [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md).

If the request fails and calls your delegate’s [request(\_:didFailWithError:)](skrequestdelegate/request%28__didfailwitherror_%29.md) method, your app needs to release the request and not attempt to call it a second time. Requests can fail when a user doesn’t authenticate or chooses to cancel the request. Without a validated receipt, assume the user doesn’t have access to premium content.

In the sandbox environment, you can initialize a receipt with any combination of properties for testing when you call [init(receiptProperties:)](skreceiptrefreshrequest/init%28receiptproperties_%29.md).

<a id="Use-alternative-techniques"></a>

### Use alternative techniques

There are times when using [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) isn’t necessary, so avoid doing so, such as in the following scenarios:

- If the receipt is valid, but may be missing transactions, use [restoreCompletedTransactions()](skpaymentqueue/restorecompletedtransactions%28%29.md) instead. For example, the receipt may be missing a transaction if a person purchases a new subscription on another device.
- In the sandbox environment, before the tester completes their first in-app purchase. Receipts are initially absent in the sandbox environment for iOS and iPadOS apps. For more information, see [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md).

## Topics

### Initializing Receipt Refresh Requests

- [init(receiptProperties:)](skreceiptrefreshrequest/init%28receiptproperties_%29.md): Deprecated. Creates a receipt refresh request with optional properties.

### Receipt Properties and Keys

- [receiptProperties](skreceiptrefreshrequest/receiptproperties.md): Deprecated. The properties of the receipt.
- [SKReceiptPropertyIsExpired](skreceiptpropertyisexpired.md): Deprecated. A key with a value that indicates whether the receipt is in an expired state.
- [SKReceiptPropertyIsRevoked](skreceiptpropertyisrevoked.md): Deprecated. A key with a value that indicates whether the receipt is in a revoked state.
- [SKReceiptPropertyIsVolumePurchase](skreceiptpropertyisvolumepurchase.md): Deprecated. A key with a value that indicates whether the receipt is a Volume Purchase Plan receipt.

## Relationships

### Inherits From

- [SKRequest](skrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Purchase validation

- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md): Select the type of receipt validation, on the device or on your server, that works for your app.
- [Validating receipts with the App Store](validating-receipts-with-the-app-store.md): Verify transactions with the App Store on a secure server.
- [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.

# SKReceiptRefreshRequest (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS  (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

A request to the App Store to get the app receipt, which represents the customer’s transactions with your app.

> Use Transaction.all and AppTransaction.shared.

## Declaration

```objectivec
@interface SKReceiptRefreshRequest : SKRequest
```

## Mentioned In

- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md)
- [Restoring purchased products](restoring-purchased-products.md)
- [Validating receipts with the App Store](validating-receipts-with-the-app-store.md)

<a id="overview"></a>

## Overview

> **Note**

>  The receipt isn’t necessary if you use [AppTransaction](apptransaction.md) to validate the app download, or [Transaction](transaction.md) to validate in-app purchases. Only use the receipt if your app uses the [Original API for In-App Purchase](original-api-for-in-app-purchase.md), or needs the receipt to validate the app download because it can’t use [AppTransaction](apptransaction.md).

Use this API to request a new app receipt from the App Store if the receipt is invalid or missing from its expected location, [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md). To request the receipt using the [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) object, you initialize it, attach a [delegate](skrequest/delegate.md), and then call the request’s [start](skrequest/start%28%29.md) method.

> **Important**

>  The receipt refresh request displays a system prompt that asks users to authenticate with their App Store credentials. For a better user experience, initiate the request after an explicit user action, like tapping or clicking a button.

When the request completes successfully, your delegate receives an [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) object in its [requestDidFinish:](skrequestdelegate/requestdidfinish%28__%29.md) method. Locate the app receipt using the [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md) property. For information about validating the receipt, see [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md).

If the request fails and calls your delegate’s [request:didFailWithError:](skrequestdelegate/request%28__didfailwitherror_%29.md) method, your app needs to release the request and not attempt to call it a second time. Requests can fail when a user doesn’t authenticate or chooses to cancel the request. Without a validated receipt, assume the user doesn’t have access to premium content.

In the sandbox environment, you can initialize a receipt with any combination of properties for testing when you call [initWithReceiptProperties:](skreceiptrefreshrequest/init%28receiptproperties_%29.md).

<a id="Use-alternative-techniques"></a>

### Use alternative techniques

There are times when using [SKReceiptRefreshRequest](skreceiptrefreshrequest.md) isn’t necessary, so avoid doing so, such as in the following scenarios:

- If the receipt is valid, but may be missing transactions, use [restoreCompletedTransactions](skpaymentqueue/restorecompletedtransactions%28%29.md) instead. For example, the receipt may be missing a transaction if a person purchases a new subscription on another device.
- In the sandbox environment, before the tester completes their first in-app purchase. Receipts are initially absent in the sandbox environment for iOS and iPadOS apps. For more information, see [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md).

## Topics

### Initializing Receipt Refresh Requests

- [initWithReceiptProperties:](skreceiptrefreshrequest/init%28receiptproperties_%29.md): Deprecated. Creates a receipt refresh request with optional properties.

### Receipt Properties and Keys

- [receiptProperties](skreceiptrefreshrequest/receiptproperties.md): Deprecated. The properties of the receipt.
- [SKReceiptPropertyIsExpired](skreceiptpropertyisexpired.md): Deprecated. A key with a value that indicates whether the receipt is in an expired state.
- [SKReceiptPropertyIsRevoked](skreceiptpropertyisrevoked.md): Deprecated. A key with a value that indicates whether the receipt is in a revoked state.
- [SKReceiptPropertyIsVolumePurchase](skreceiptpropertyisvolumepurchase.md): Deprecated. A key with a value that indicates whether the receipt is a Volume Purchase Plan receipt.

## Relationships

### Inherits From

- [SKRequest](skrequest.md)

## See Also

### Purchase validation

- [Choosing a receipt validation technique](choosing-a-receipt-validation-technique.md): Select the type of receipt validation, on the device or on your server, that works for your app.
- [Validating receipts with the App Store](validating-receipts-with-the-app-store.md): Verify transactions with the App Store on a secure server.
- [appStoreReceiptURL](../foundation/bundle/appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
