> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/finish-transaction](https://developer.apple.com/documentation/appstoreserverapi/finish-transaction)

# Finish Transaction

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.20+

Notifies the App Store server that your system has finished processing the customer’s transaction.

## URL

```http
POST https://api.storekit.apple.com/inApps/v1/transactions/{transactionId}/finish
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.apple.com/inApps/v1/transactions/{transactionId}/finish
```

## Path Parameters

- `transactionId` — `transactionId` (required): The transaction identifier of the transaction to mark as finished.

## Response Codes

- `200` OK: Request succeeded.
- `400` Bad Request — `(InvalidTransactionIdError | AppTransactionIdNotSupportedError)`: The request is invalid and can’t be accepted.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `TransactionIdNotFoundError`: The transaction identifier wasn’t found.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits](identifying-rate-limits.md).
- `500` Internal Server Error — `GeneralInternalError`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

If you manage entitlement logic on your server, your server can call `Finish Transaction` after it finishes providing the customer with the new content. If you call [finish()](../storekit/transaction/finish%28%29.md) in your app, there’s no need to call the `Finish Transaction` endpoint from your server.
