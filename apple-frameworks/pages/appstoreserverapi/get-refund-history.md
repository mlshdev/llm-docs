> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-refund-history](https://developer.apple.com/documentation/appstoreserverapi/get-refund-history)

# Get Refund History

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.6+

Get a paginated list of all of a customer’s refunded in-app purchases for your app.

## URL

```http
GET https://api.storekit.apple.com/inApps/v2/refund/lookup/{anyTransactionId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v2/refund/lookup/{anyTransactionId}
```

## Path Parameters

- `anyTransactionId` — `anyTransactionId` (required): Any [originalTransactionId](originaltransactionid.md), [transactionId](transactionid.md) or [appTransactionId](apptransactionid.md) that belongs to the customer for your app.

## Query Parameters

- `revision` — `revision`: A token you provide to get the next set of up to 20 transactions. All responses include a `revision` token. Use the `revision` token from the previous [RefundHistoryResponse](refundhistoryresponse.md).

  You can store the `revision` token from the final results page and use it for a future call. For more information, see [RefundHistoryResponse](refundhistoryresponse.md).

  The `revision` token is required in all requests except the initial request.

## Response Codes

- `200` OK — `RefundHistoryResponse`: Request succeeded.
- `400` Bad Request — `(InvalidTransactionIdError | InvalidRequestRevisionError)`: Invalid request. Check the specific error message for further information.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `TransactionIdNotFoundError`: Invalid request. Check the specific error message for further information.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Call this endpoint to get the customer’s complete refund history for your app by providing the transaction identifier ([transactionId](transactionid.md)) for any of the customer’s in-app purchases. Each response ([RefundHistoryResponse](refundhistoryresponse.md)) contains a maximum of 20 refunded transactions. If the [hasMore](hasmore.md) property in the response is `true`, call the endpoint again using the [revision](https://developer.apple.com/documentation/appstoreserverapi/get-refund-history/revision) token from the response to get the next set of refunded transactions.

The response only includes App Store-approved refunds for any product type: consumable, non-consumable, auto-renewable subscriptions, and non-renewing subscriptions. For more information about product types, see [In-app purchase](https://developer.apple.com/in-app-purchase/).

The information in the response is the same as the information in one or more `REFUND` notifications ([notificationType](../appstoreservernotifications/notificationtype.md)) from [App Store Server Notifications](../appstoreservernotifications.md). Use this API to retrieve any refund notifications you may have missed, such as during a server outage.

A successful response may have an empty `signedTransactions` array if the customer hasn’t received any App Store-approved refunds. To identify the date and reason code for a refund, see `revocationDate` and `revocationReason` in the [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md).

The App Store Server API returns information based on the customer’s in-app purchase history regardless of whether the customer installs, removes, or reinstalls the app on their devices.

To get a customer’s full refund history for your app, start by calling the endpoint without any query parameters, as follows:

```javascript
GET https://api.storekit.apple.com/inApps/v2/refund/lookup/{anyTransactionId}
```

For subsequent requests, include the [revision](https://developer.apple.com/documentation/appstoreserverapi/get-refund-history/revision) token from the previous [RefundHistoryResponse](refundhistoryresponse.md).

```javascript
GET https://api.storekit.apple.com/inApps/v2/refund/lookup/{anyTransactionId}?revision={revision}
```

## See Also

### Refund lookup

- [RefundHistoryResponse](refundhistoryresponse.md): A response that contains an array of signed JSON Web Signature (JWS) refunded transactions, and paging information.
