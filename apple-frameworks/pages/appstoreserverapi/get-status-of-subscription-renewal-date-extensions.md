> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/get-status-of-subscription-renewal-date-extensions](https://developer.apple.com/documentation/appstoreserverapi/get-status-of-subscription-renewal-date-extensions)

# Get Status of Subscription Renewal Date Extensions

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.7+

Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.

## URL

```http
GET https://api.storekit.apple.com/inApps/v1/subscriptions/extend/mass/{productId}/{requestIdentifier}
```

## Sandbox URL

```http
GET https://api.storekit-sandbox.apple.com/inApps/v1/subscriptions/extend/mass/{productId}/{requestIdentifier}
```

## Path Parameters

- `productId` — `productId` (required): The product identifier of the auto-renewable subscription that you request a renewal-date extension for.
- `requestIdentifier` — `requestIdentifier` (required): The `UUID` that represents your request to the [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md) endpoint.
  **Maximum length:** `128`

## Response Codes

- `200` OK — `MassExtendRenewalDateStatusResponse`: The request succeeded.
- `400` Bad Request — `(InvalidProductIdError | InvalidRequestIdentifierError)`: The request is invalid.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: Server error. Try again later.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

This endpoint provides basic status information about a request you initiate when you call the [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md) endpoint. Such requests may take hours, or even days, depending on the number of subscribers. This status tells whether the request is complete. If so, it has the total count of successful and failed subscription-renewal-date extensions.

> **Tip**

>  If you don’t need this status on demand, or need more details, use the [App Store Server Notifications](../appstoreservernotifications.md) for near real-time status information instead. For more information about related notifications, see [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md).

## See Also

### Subscription-renewal-date extension

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md): Compensate eligible active subscribers for service interruptions by extending a subscription’s renewal date.
- [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md): Extends the renewal date of a customer’s active subscription using the original transaction identifier.
- [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md): Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.
- [ExtendRenewalDateRequest](extendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data for an individual subscription.
- [ExtendRenewalDateResponse](extendrenewaldateresponse.md): A response that indicates whether an individual renewal-date extension succeeded, and related details.
- [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data to apply for all eligible active subscribers.
- [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md): A response that indicates the server successfully received the subscription-renewal-date extension request.
- [MassExtendRenewalDateStatusResponse](massextendrenewaldatestatusresponse.md): A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
