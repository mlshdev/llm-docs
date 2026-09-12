> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstorereceipts/requestbody](https://developer.apple.com/documentation/appstorereceipts/requestbody)

# requestBody

**Interface language:** Data

**Framework:** App Store Receipts  
**Kind:** Object  
**Availability:** App Store Receipts 1.0+ (deprecated in 1.7)

The JSON contents you submit with the request to the App Store.

> The [verifyReceipt](verify-receipt.md) endpoint is deprecated.

## Declaration

```
object requestBody
```

## Properties

- `receipt-data` — `byte` (required): The Base64-encoded receipt data.
- `password` — `string`: Your app’s shared secret, which is a hexadecimal string. The password is required for receipts that include subscriptions, and strongly recommended otherwise. For more information about the shared secret, see [Generate a shared secret to verify receipts](https://help.apple.com/app-store-connect/#/devf341c0f01).
- `exclude-old-transactions` — `boolean`: Set this value to `true` for the response to include only the latest renewal transaction for any subscriptions. Use this field only for app receipts that contain auto-renewable subscriptions.

<a id="Discussion"></a>

## Discussion

To receive a decoded receipt for validation, send a request with the encoded receipt data and app password to the App Store. For receipts that contain auto-renewable subscriptions, optionally include an exclusion flag. Send this JSON data using the HTTP POST request method.

## See Also

### Deprecated

- [verifyReceipt](verify-receipt.md): Deprecated. Send a receipt to the App Store for verification.
- [responseBody](responsebody.md): Deprecated. The JSON data that returns in the response from the App Store.
- [error](error.md): Deprecated. Error information that returns in the response body when a request isn’t successful.
