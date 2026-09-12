> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/revoke-subscription](https://developer.apple.com/documentation/advancedcommerceapi/revoke-subscription)

# Revoke Subscription

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Web Service Endpoint  
**Availability:** Advanced Commerce API 1.0+

Immediately cancel a customer’s subscription and all the items that are included in the subscription, and request a full or prorated refund.

## URL

```http
POST https://api.storekit.itunes.apple.com/advancedCommerce/v1/subscription/revoke/{transactionId}
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.itunes.apple.com/advancedCommerce/v1/subscription/revoke/{transactionId}
```

## Path Parameters

- `transactionId` — `string` (required): The transaction identifier of the auto-renewable subscription to revoke. Use the subscription’s original transaction ID or any subsequent transaction ID of a transaction related to the subscription.

## HTTP Body

Content type: `application/json`

Type: `SubscriptionRevokeRequest`

## Response Codes

- `200` OK — `SubscriptionRevokeResponse`: Request succeeded.
- `400` Bad Request — `(RepeatedRequestReferenceIdError | NullRequestInfoError | InvalidAppAccountTokenError | NullRequestReferenceIDError | InvalidRequestReferenceIDError | InvalidConsistencyTokenError | InvalidStorefrontError | MismatchedStorefrontError | MismatchedStorefrontError | OperationNotAllowedError | MalformedPayloadError | SimulateRefundDeclineOnlyInSandboxError | RefundAmountWithoutCustomError | NullRefundRiskingError | InvalidRefundTypeError | InvalidRefundReasonError | NegativeRefundAmountError | NullRefundAmountError | NullRefundReasonError | NullRefundTypeError | PendingRefundError | RevokeOnInactiveSubscriptionError)`:
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

When this endpoint succeeds, the system sets the subscription’s auto-renew status to `false`, and revokes the subscription with a full or prorated refund. The App Store Server Notifications sends a `REFUND`  [notificationType](../appstoreservernotifications/notificationtype.md) to your [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint. Check the `revocationDate` property in the notification’s  [JWSTransactionDecodedPayload](../appstoreservernotifications/jwstransactiondecodedpayload.md). Turn off service for the subscription and its items as of the revocation date. Don’t turn off service to the subscription until you receive the notification.

To cancel a subscription at the end of the current period instead, see [Cancel a Subscription](cancel-a-subscription.md).

> **Note**

> To use the `Revoke Subscription` endpoint, your membership Account Holder must sign the Advanced Commerce API Addendum, and you must meet certain eligibility requirements. For more information, see [Advanced Commerce API](https://developer.apple.com/in-app-purchase/advanced-commerce-api/). If the most recent version of this agreement isn’t yet accepted, you can’t call this endpoint, and it returns an error.

Refer to the Advanced Commerce API Addendum to learn the use cases for the [Cancel a Subscription](cancel-a-subscription.md), `Revoke Subscription`, and [Request Transaction Refund](request-transaction-refund.md) APIs.

## See Also

### Subscription revocation from the server

- [SubscriptionRevokeRequest](subscriptionrevokerequest.md): The request body you provide to terminate a subscription and all its items immediately.
- [SubscriptionRevokeResponse](subscriptionrevokeresponse.md): The response body for a successful revoke-subscription request.
