> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-app-transaction-info](https://developer.apple.com/documentation/appstoreserverapi/get-app-transaction-info)

# Get App Transaction Info

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.17+

Get a customer’s app transaction information for your app.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/transactions/appTransactions/{anyTransactionId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/transactions/appTransactions/{anyTransactionId}
```

## Path Parameters

- `anyTransactionId` — `anyTransactionId` (required): Any [originalTransactionId](originaltransactionid.md), [transactionId](transactionid.md) or [appTransactionId](apptransactionid.md) that belongs to the customer for your app.

## Response Codes

- `200` OK — `AppTransactionInfoResponse`: Request succeeded.
- `400` Bad Request — `InvalidTransactionIdError`: Invalid request.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `(TransactionIdNotFoundError | AppTransactionDoesNotExistError)`: Check the specific error message for further information.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to get the app transaction information for a customer of your app. You can provide any transaction ID that belongs to the customer to get their app transaction information.

App transaction information represents the customer’s purchase of the app, cryptographically signed by the App Store. The App Store generates a single, globally unique [appTransactionId](apptransactionid.md) for each Apple Account that downloads your app and for each family group member for apps that support Family Sharing. The `appTransactionId` value remains the same for the same Apple Account and app if the customer redownloads the app on any device, receives a refund, repurchases the app, or changes the storefront. For apps that support Family Sharing, the `appTransactionId` is unique for each family group member.

App transaction information includes details about the app the customer purchased, such as its bundleID, original version, original purchase date, and more. You can also get app transaction information in your app from StoreKit, using [AppTransaction](../storekit/apptransaction.md).

## See Also

### App Transaction information

- [AppTransactionInfoResponse](apptransactioninforesponse.md): A response that contains signed app transaction information for a customer.
