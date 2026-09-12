> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts](https://developer.apple.com/documentation/appstorereceipts)

# App Store Receipts

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Web Service  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

Validate app and In-App Purchase receipts with the App Store.

> Receipts are deprecated. To validate In-App Purchases on your server without using receipts, call the [App Store Server API](appstoreserverapi.md) to get Apple-signed transaction and subscription information for your customers, or verify the [AppTransaction](storekit/apptransaction.md) and [Transaction](storekit/transaction.md) signed data that your app obtains. You can also get the same signed transaction and subscription information from the [App Store Server Notifications V2](appstoreservernotifications/app-store-server-notifications-v2.md) endpoint.

<a id="overview"></a>

## Overview

> **Important**

>  The [verifyReceipt](appstorereceipts/verify-receipt.md) endpoint is deprecated. To validate receipts on your server, follow the steps in [Validating receipts on the device](appstorereceipts/validating-receipts-on-the-device.md) on your server.

Your server can access the [verifyReceipt](appstorereceipts/verify-receipt.md) endpoint to validate app and in-app transaction receipts. Submit a receipt to the App Store with your [shared secret](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/generate-a-shared-secret-to-verify-receipts) to receive a JSON response containing the app information and in-app purchase details in the fields that make up the receipt. Each field or combination of fields provides insight you can use to deliver service and content to the user, as you define.

In-app transactions that your app doesn’t mark as finished using [finishTransaction(\_:)](storekit/skpaymentqueue/finishtransaction%28__%29.md) or [finish()](storekit/transaction/finish%28%29.md) remain in the App Store receipt. Auto-renewable subscriptions, non-renewing subscriptions, and non-consumables remain in the receipt indefinitely, and appear in the customer transaction history when you call the [Get Transaction History V1](appstoreserverapi/get-transaction-history-v1.md) endpoint.

The [responseBody.Latest_receipt_info](appstorereceipts/responsebody/latest_receipt_info-data.dictionary.md) object for auto-renewable subscriptions can grow over time because the renewal transactions stay in the receipt indefinitely. To optimize performance, the App Store may truncate receipts in the sandbox environment to remove old transactions.

You can test validating receipts in the sandbox environment. For more information, see [Testing In-App Purchases with sandbox](storekit/testing-in-app-purchases-with-sandbox.md) and [Test in-app purchases](https://developer.apple.com/help/app-store-connect/test-in-app-purchases-main/test-in-app-purchases).

You can validate receipts from the App Store using server-side receipt validation or on-device validation. For more information about receipt validation options, see [Choosing a receipt validation technique](storekit/choosing-a-receipt-validation-technique.md).

> **Related sessions from WWDC22**

>  Session 110404: [Implement proactive in-app purchase restore](https://developer.apple.com/videos/play/wwdc2022/110404/).

## Topics

### Receipt data

- [App Store receipt data types](appstorereceipts/app-store-receipt-data-types.md): Data types of objects that return in the receipt.

### Local receipt validation

- [Validating receipts on the device](appstorereceipts/validating-receipts-on-the-device.md): Verify the contents of app receipts by decoding and parsing the receipt on the device.

### Deprecated

- [verifyReceipt](appstorereceipts/verify-receipt.md): Deprecated. Send a receipt to the App Store for verification.
- [requestBody](appstorereceipts/requestbody.md): Deprecated. The JSON contents you submit with the request to the App Store.
- [responseBody](appstorereceipts/responsebody.md): Deprecated. The JSON data that returns in the response from the App Store.
- [error](appstorereceipts/error.md): Deprecated. Error information that returns in the response body when a request isn’t successful.
