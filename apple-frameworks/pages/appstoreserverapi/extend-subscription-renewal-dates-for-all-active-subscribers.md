> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/extend-subscription-renewal-dates-for-all-active-subscribers](https://developer.apple.com/documentation/appstoreserverapi/extend-subscription-renewal-dates-for-all-active-subscribers)

# Extend Subscription Renewal Dates for All Active Subscribers

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Server API 1.7+

Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.

## URL

```http
POST https://api.storekit.apple.com/inApps/v1/subscriptions/extend/mass
```

## Sandbox URL

```http
POST https://api.storekit-sandbox.apple.com/inApps/v1/subscriptions/extend/mass
```

## HTTP Body

Content type: `application/json`

Type: `MassExtendRenewalDateRequest`

The request body for extending a subscription renewal date for all of its active subscribers.

## Response Codes

- `200` OK — `MassExtendRenewalDateResponse`: Request succeeded.

  If you reuse the [requestIdentifier](requestidentifier.md) to call the endpoint again, the server responds with `200`.
- `400` Bad Request — `(InvalidExtendByDaysError | InvalidProductIdError | InvalidExtendReasonCodeError | InvalidRequestIdentifierError | InvalidEmptyStorefrontCountryCodeListError | InvalidStorefrontCountryCodeError)`: The request is invalid and can’t be accepted.
- `401` Unauthorized: The JSON Web Token (JWT) in the authorization header is invalid. For more information, see [Generating JSON Web Tokens for API requests](generating-json-web-tokens-for-api-requests.md).
- `403` Forbidden — `(SubscriptionExtensionIneligibleError | SubscriptionMaxExtensionError)`: The request is invalid and can’t be accepted.
- `404` Not Found — `StatusRequestNotFoundError`: The server didn’t find a subscription-renewal-date extension request for the request identifier and product identifier you provided.
- `429` — `RateLimitExceededError`: The request exceeded the rate limit.
- `500` Internal Server Error — `(GeneralInternalError | GeneralInternalRetryableError)`: The request failed. This may be due to a temporary outage. Check the specific error message for further information.

## Mentioned In

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md)
- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Identifying rate limits](identifying-rate-limits.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to compensate your customers for temporary service outages, canceled events, or interruptions to live streamed events by extending the renewal date of their paid, active subscription. This endpoint acts on all active subscriptions for the product identifier you specify, and is limited to the storefronts you optionally specify.

To call this endpoint, provide the subscription product identifier that experienced the service interruption, and other information, in the request body, [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md).

A successful response with an `HTTP 200` status code contains the [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md) object, which includes the same unique `requestIdentifier` you provide in the request. This endpoint is an asynchronous request. A successful response indicates that the App Store server is processing the request. Status codes other than `HTTP 200` indicate that the request failed.

> **Note**

>  After the subscription renewal extension goes into effect, there’s no way to reverse it. The extension period doesn’t count toward the one year of paid service when the App Store calculates the developer’s commission rate.

After a successful renewal date extension, Apple sends an email to notify the customer of their updated subscription renewal date.

For more information about this endpoint, including subscription eligibility, getting status notifications, and retrying extensions that fail, see [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md).

## See Also

### Subscription-renewal-date extension

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md): Compensate eligible active subscribers for service interruptions by extending a subscription’s renewal date.
- [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md): Extends the renewal date of a customer’s active subscription using the original transaction identifier.
- [Get Status of Subscription Renewal Date Extensions](get-status-of-subscription-renewal-date-extensions.md): Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.
- [ExtendRenewalDateRequest](extendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data for an individual subscription.
- [ExtendRenewalDateResponse](extendrenewaldateresponse.md): A response that indicates whether an individual renewal-date extension succeeded, and related details.
- [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data to apply for all eligible active subscribers.
- [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md): A response that indicates the server successfully received the subscription-renewal-date extension request.
- [MassExtendRenewalDateStatusResponse](massextendrenewaldatestatusresponse.md): A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
