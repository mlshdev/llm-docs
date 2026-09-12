> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/request-transaction-refund](https://developer.apple.com/documentation/advancedcommerceapi/request-transaction-refund)

# Request Transaction Refund

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Web Service Endpoint  
**Availability:** Advanced Commerce API 1.0+

Request a refund for a one-time charge or subscription transaction.

## URL

```http
POST https://api.storekit.itunes.apple.com/advancedCommerce/v1/transaction/requestRefund/{transactionId}
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.itunes.apple.com/advancedCommerce/v1/transaction/requestRefund/{transactionId}
```

## Path Parameters

- `transactionId` — `string` (required): The transaction identifier for which you request a refund.

## HTTP Body

Content type: `application/json`

Type: `RequestRefundRequest`

The request body.

## Response Codes

- `200` OK — `RequestRefundResponse`: Request succeeded.
- `400` Bad Request — `(RepeatedRequestReferenceIdError | NullRequestInfoError | InvalidAppAccountTokenError | NullRequestReferenceIDError | InvalidRequestReferenceIDError | InvalidConsistencyTokenError | InvalidStorefrontError | MismatchedStorefrontError | MismatchedStorefrontError | OperationNotAllowedError | MalformedPayloadError | SimulateRefundDeclineOnlyInSandboxError | RefundAmountWithoutCustomError | NullRefundRiskingError | InvalidRefundTypeError | InvalidRefundReasonError | NegativeRefundAmountError | NullRefundAmountError | NullRefundReasonError | NullRefundTypeError | RemovalAllNotAllowedError | PendingRefundError | ProratedOnlyLatestTransactionError | PartialSimulateRefundDeclineError)`:
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Authorizing API requests from your server](authorizing-server-calls.md).
- `403` Forbidden — `(SubscriptionDoesNotExistError | SubscriptionNotEligibleError | ProductNotOwnedError | InsufficientFundsError | AlreadyRefundedError | TransactionNotRefundableError)`:
- `404` Not Found — `TransactionIdNotFoundError`:
- `429` — `RateLimitExceededError`: The request exceeded the rate limit. For more information, see [Identifying rate limits for Advanced Commerce APIs](ratelimits.md).
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [Authorizing API requests from your server](authorizing-server-calls.md)
- [Advanced Commerce API changelog](changelog.md)
- [Identifying rate limits for Advanced Commerce APIs](ratelimits.md)

<a id="Discussion"></a>

## Discussion

> **Note**

> To use the `Request Transaction Refund` endpoint, your membership Account Holder must sign the Advanced Commerce API Addendum, and you must meet certain eligibility requirements. For more information, see [Advanced Commerce API](https://developer.apple.com/in-app-purchase/advanced-commerce-api/). If the most recent version of this agreement isn’t yet accepted, you can’t call this endpoint, and it returns an error.

Refer to the Advanced Commerce API Addendum to learn the use cases for the [Cancel a Subscription](cancel-a-subscription.md), [Revoke Subscription](revoke-subscription.md), and `Request Transaction Refund` APIs.

## See Also

### Refund request from the server

- [RequestRefundRequest](requestrefundrequest.md): The request body for requesting a refund for a transaction.
- [RequestRefundResponse](requestrefundresponse.md): The response body for a transaction refund request.
- [RequestRefundItem](requestrefunditem.md): Information about the refund request for an item, such as its SKU, the refund amount, reason, and type.
