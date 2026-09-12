> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-all-subscription-statuses](https://developer.apple.com/documentation/appstoreserverapi/get-all-subscription-statuses)

# Get All Subscription Statuses

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.0+

Get the statuses for all of a customer’s auto-renewable subscriptions in your app.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/subscriptions/{anyTransactionId}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/subscriptions/{anyTransactionId}
```

## Path Parameters

- `anyTransactionId` — `anyTransactionId` (required): Any [originalTransactionId](originaltransactionid.md), [transactionId](transactionid.md) or [appTransactionId](apptransactionid.md) that belongs to the customer for your app.

## Query Parameters

- `status` — `[status]`: An optional filter that indicates the [status](https://developer.apple.com/documentation/appstoreserverapi/get-all-subscription-statuses/status) of subscriptions to include in the response. Your query may specify more than one `status` query parameter.

## Response Codes

- `200` OK — `StatusResponse`: Request succeeded.
- `400` Bad Request — `(InvalidAppIdentifierError | InvalidTransactionIdError | InvalidStatusError)`:
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `404` Not Found — `(AccountNotFoundError | AccountNotFoundRetryableError | AppNotFoundError | AppNotFoundRetryableError | TransactionIdNotFoundError)`:
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`:

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

This API returns the status for all of the customer’s subscriptions, organized by their subscription group identifier.

Specify multiple values for the `status` query parameter to get a response that contains subscriptions with statuses that match any of the values. For example, the following request returns subscriptions that are active ([status](https://developer.apple.com/documentation/appstoreserverapi/get-all-subscription-statuses/status) value of `1`) and subscriptions that are in the Billing Grace Period ([status](https://developer.apple.com/documentation/appstoreserverapi/get-all-subscription-statuses/status) value of `4`):

```javascript
GET https://api.storekit.apple.com/inApps/v1/subscriptions/{anyTransactionId}?status=1&status=4
```

## See Also

### Subscription status

- [StatusResponse](statusresponse.md): A response that contains status information for all of a customer’s auto-renewable subscriptions in your app.
