> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/responsebody](https://developer.apple.com/documentation/appstorereceipts/responsebody)

# responseBody

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Object  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

The JSON data that returns in the response from the App Store.

> The [verifyReceipt](verify-receipt.md) endpoint is deprecated.

## Declaration

```
object responseBody
```

## Properties

- `environment` — `string`: The environment the system generates the receipt for.
  **Allowed values:** `Sandbox`, `Production`
- `is_retryable` — `boolean`: An indicator when an error occurs during the request. A value of `1` indicates a temporary issue; retry validation for this receipt at a later time. A value of `0` indicates an unresolvable issue; don’t retry validation for this receipt. This is applicable only to status codes `21100–21199`.
- `latest_receipt` — `byte`: The latest Base64-encoded app receipt. This only returns for receipts that contain auto-renewable subscriptions.
- `latest_receipt_info` — `[responseBody.Latest_receipt_info]`: An array that contains all in-app purchase transactions. This excludes transactions for consumable products that your app marks as finished.
- `pending_renewal_info` — `[responseBody.Pending_renewal_info]`: In the JSON file, an array where each element contains the pending renewal information for each auto-renewable subscription the `product_id` identifies. This only returns for app receipts that contain auto-renewable subscriptions.
- `receipt` — `responseBody.Receipt`: A JSON representation of the receipt that you send for verification.
- `status` — `status`: Either `0` if the receipt is valid, or a status code if there’s an error. The status code reflects the status of the app receipt as a whole. See [status](https://developer.apple.com/documentation/appstorereceipts/responsebody/status) for possible status codes and descriptions.

<a id="Discussion"></a>

## Discussion

The [verifyReceipt](verify-receipt.md) endpoint returns this response.

## Topics

### Objects

- [responseBody.Pending_renewal_info](responsebody/pending_renewal_info-data.dictionary.md): Deprecated. An array of elements that refers to open or failed auto-renewable subscription renewals.
- [responseBody.Latest_receipt_info](responsebody/latest_receipt_info-data.dictionary.md): Deprecated. An array that contains all in-app purchase transactions.
- [responseBody.Receipt](responsebody/receipt-data.dictionary.md): Deprecated. The decoded version of the encoded receipt data that you send with the request to the App Store.

## See Also

### Deprecated

- [verifyReceipt](verify-receipt.md): Deprecated. Send a receipt to the App Store for verification.
- [requestBody](requestbody.md): Deprecated. The JSON contents you submit with the request to the App Store.
- [error](error.md): Deprecated. Error information that returns in the response body when a request isn’t successful.
