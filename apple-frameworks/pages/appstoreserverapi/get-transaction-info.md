> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-transaction-info](https://developer.apple.com/documentation/appstoreserverapi/get-transaction-info)

# Get Transaction Info

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.8+

Get information about a single transaction for your app.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/transactions/{transactionId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/transactions/{transactionId}
```

## Path Parameters

- `transactionId` — `transactionId` (required): The identifier of a transaction that belongs to the customer, and which may be an original transaction identifier ([originalTransactionId](originaltransactionid.md)).

## Response Codes

- `200` OK — `TransactionInfoResponse`: Request succeeded.
- `400` Bad Request — `(InvalidTransactionIdError | AppTransactionIdNotSupportedError)`: Invalid request.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `TransactionIdNotFoundError`: The transaction identifier wasn’t found.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to get transaction information for any transaction identifier, including original transaction identifiers.  This endpoint supports all in-app purchase types, including consumable, non-consumable, non-renewing subscriptions, and auto-renewable subscriptions. It also supports transactions that your app marked as finished using [finish()](../storekit/transaction/finish%28%29.md) or [finishTransaction(\_:)](../storekit/skpaymentqueue/finishtransaction%28__%29.md) in StoreKit.

## See Also

### Transaction information

- [TransactionInfoResponse](transactioninforesponse.md): A response that contains signed transaction information for a single transaction.
