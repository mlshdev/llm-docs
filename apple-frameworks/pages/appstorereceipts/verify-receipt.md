> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/verify-receipt](https://developer.apple.com/documentation/appstorereceipts/verify-receipt)

# verifyReceipt

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Web Service Endpoint  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

Send a receipt to the App Store for verification.

> The `verifyReceipt` endpoint is deprecated. To validate receipts on your server, follow the steps in [Validating receipts on the device](validating-receipts-on-the-device.md) on your server. To validate in-app purchases on your server without using receipts, call the [App Store Server API](../appstoreserverapi.md) to get Apple-signed transaction and subscription information for your customers, or verify the [AppTransaction](../storekit/apptransaction.md) and [Transaction](../storekit/transaction.md) signed data that your app obtains. You can also get the same signed transaction and subscription information from the [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint.

## URL

```http
POST https://buy.itunes.apple.com/verifyReceipt
```

## Sandbox URL

```http
POST https://sandbox.itunes.apple.com/verifyReceipt
```

## HTTP Body

Content type: `application/json`

Type: `requestBody`

The JSON contents you submit with the request.

## Response Codes

- `200` OK — `responseBody`:

<a id="Discussion"></a>

## Discussion

Validating with the App Store requires a secure connection between your app and your server, as well as code on your server to validate the receipt with the App Store. Submit an HTTP POST request with the contents detailed in [requestBody](requestbody.md) using the `verifyReceipt` endpoint to verify receipts with the App Store. Use the receipt fields in the [responseBody](responsebody.md) to validate app and in-app purchases.

Your server must support the Transport Layer Security (TLS) protocol 1.2 or later to call this endpoint.

For more information about server-side receipt validation, see [Validating receipts with the App Store](../storekit/validating-receipts-with-the-app-store.md).

<a id="Use-the-sandbox-URL-for-sandbox-testing"></a>

### Use the sandbox URL for sandbox testing

The sandbox URL for verifying receipts is:

```other
POST https://sandbox.itunes.apple.com/verifyReceipt
```

> **Important**

>  As a best practice, always call the production URL `https://buy.itunes.apple.com/verifyReceipt` first and proceed to verify with the sandbox URL if you receive a `21007` [status](status.md) code. Following this approach ensures that you don’t have to switch between URLs while your app is in testing, in review by App Review, or live in the App Store.

<a id="Find-deprecation-date-in-the-HTTP-header"></a>

### Find deprecation date in the HTTP header

The `verifyReceipt` endpoint is deprecated. The HTTP header includes the deprecation date, according to [RFC 8594](https://www.rfc-editor.org/rfc/rfc8594.html).

## See Also

### Deprecated

- [requestBody](requestbody.md): Deprecated. The JSON contents you submit with the request to the App Store.
- [responseBody](responsebody.md): Deprecated. The JSON data that returns in the response from the App Store.
- [error](error.md): Deprecated. Error information that returns in the response body when a request isn’t successful.
