> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/extendrenewaldaterequest](https://developer.apple.com/documentation/appstoreserverapi/extendrenewaldaterequest)

# ExtendRenewalDateRequest

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.1+

The request body that contains subscription-renewal-extension data for an individual subscription.

## Declaration

```
object ExtendRenewalDateRequest
```

## Properties

- `extendByDays` — `extendByDays`: **Required**. The number of days to extend the subscription renewal date.
  **Maximum:** `90`
- `extendReasonCode` — `extendReasonCode`: **Required**. The reason code for the subscription date extension.
- `requestIdentifier` — `requestIdentifier`: **Required**. A string that contains a value you provide to uniquely identify this renewal-date extension request.
  **Maximum length:** `128`

<a id="Discussion"></a>

## Discussion

Use this object with the [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md) endpoint.

## Topics

### Request data types

- [extendByDays](extendbydays.md): The number of days to extend the subscription renewal date.
- [extendReasonCode](extendreasoncode.md): The code that represents the reason for the subscription-renewal-date extension.
- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier you provide to track each subscription-renewal-date extension request.

## See Also

### Subscription-renewal-date extension

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md): Compensate eligible active subscribers for service interruptions by extending a subscription’s renewal date.
- [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md): Extends the renewal date of a customer’s active subscription using the original transaction identifier.
- [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md): Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.
- [Get Status of Subscription Renewal Date Extensions](get-status-of-subscription-renewal-date-extensions.md): Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.
- [ExtendRenewalDateResponse](extendrenewaldateresponse.md): A response that indicates whether an individual renewal-date extension succeeded, and related details.
- [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data to apply for all eligible active subscribers.
- [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md): A response that indicates the server successfully received the subscription-renewal-date extension request.
- [MassExtendRenewalDateStatusResponse](massextendrenewaldatestatusresponse.md): A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
