> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/massextendrenewaldaterequest](https://developer.apple.com/documentation/appstoreserverapi/massextendrenewaldaterequest)

# MassExtendRenewalDateRequest

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.7+

The request body that contains subscription-renewal-extension data to apply for all eligible active subscribers.

## Declaration

```
object MassExtendRenewalDateRequest
```

## Properties

- `requestIdentifier` — `requestIdentifier`: **Required**. A string that contains a one-time `UUID` value you provide to identify this subscription-renewal-date extension request.
  **Maximum length:** `128`
- `extendByDays` — `extendByDays`: **Required**. The number of days to extend the subscription renewal date.
  **Maximum:** `90`
- `extendReasonCode` — `extendReasonCode`: **Required**. The reason code for the subscription-renewal-date extension.
- `productId` — `productId`: **Required**. The product identifier of the auto-renewable subscription that you’re requesting the renewal-date extension for.
- `storefrontCountryCodes` — `storefrontCountryCodes`: A list of storefront country codes you provide to limit the storefronts that are eligible to receive the subscription-renewal-date extension. Omit this list to request the subscription-renewal-date extension in all storefronts.

## Mentioned In

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

This request body applies to the [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md) endpoint.

The `requestIdentifier` uniquely identifies this request. Use the same `requestIdentifier` in the following APIs :

- The [Get Status of Subscription Renewal Date Extensions](get-status-of-subscription-renewal-date-extensions.md) endpoint
- The [summary](../appstoreservernotifications/summary.md) object in [App Store Server Notifications](../appstoreservernotifications.md).

For more information, see [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md).

## Topics

### Data types

- [extendByDays](extendbydays.md): The number of days to extend the subscription renewal date.
- [extendReasonCode](extendreasoncode.md): The code that represents the reason for the subscription-renewal-date extension.
- [productId](../appstoreservernotifications/productid.md): The product identifier of the In-App Purchase.
- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier you provide to track each subscription-renewal-date extension request.
- [storefrontCountryCode](storefrontcountrycode.md): The three-letter code that represents the country or region associated with the App Store storefront.
- [storefrontCountryCodes](storefrontcountrycodes.md): A list of storefront country codes you provide to limit the storefronts for a subscription-renewal-date extension.

## See Also

### Subscription-renewal-date extension

- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md): Compensate eligible active subscribers for service interruptions by extending a subscription’s renewal date.
- [Extend a Subscription Renewal Date](extend-a-subscription-renewal-date.md): Extends the renewal date of a customer’s active subscription using the original transaction identifier.
- [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md): Uses a subscription’s product identifier to extend the renewal date for all of its eligible active subscribers.
- [Get Status of Subscription Renewal Date Extensions](get-status-of-subscription-renewal-date-extensions.md): Checks whether a renewal date extension request completed, and provides the final count of successful or failed extensions.
- [ExtendRenewalDateRequest](extendrenewaldaterequest.md): The request body that contains subscription-renewal-extension data for an individual subscription.
- [ExtendRenewalDateResponse](extendrenewaldateresponse.md): A response that indicates whether an individual renewal-date extension succeeded, and related details.
- [MassExtendRenewalDateResponse](massextendrenewaldateresponse.md): A response that indicates the server successfully received the subscription-renewal-date extension request.
- [MassExtendRenewalDateStatusResponse](massextendrenewaldatestatusresponse.md): A response that indicates the current status of a request to extend the subscription renewal date to all eligible subscribers.
