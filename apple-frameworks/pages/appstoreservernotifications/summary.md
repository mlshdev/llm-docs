> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/summary](https://developer.apple.com/documentation/appstoreservernotifications/summary)

# summary

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Object  
**Availability:** App Store Server Notifications 2.7+

The payload data for a subscription-renewal-date extension notification.

## Declaration

```
object summary
```

## Properties

- `requestIdentifier` — `requestIdentifier`: The `UUID` that represents a specific request to extend a subscription renewal date. This value matches the value you initially specify in the `requestIdentifier` when you call [Extend Subscription Renewal Dates for All Active Subscribers](../appstoreserverapi/extend-subscription-renewal-dates-for-all-active-subscribers.md) in the [App Store Server API](../appstoreserverapi.md).
- `environment` — `environment`: The server environment that the notification applies to, either `sandbox` or `production`.
- `appAppleId` — `appAppleId`: The unique identifier of the app that the notification applies to. This property is available for apps that users download from the App Store. It isn’t present in the sandbox environment.
- `bundleId` — `bundleId`: The bundle identifier of the app.
- `productId` — `productId`: The product identifier of the auto-renewable subscription that the subscription-renewal-date extension applies to.
- `storefrontCountryCodes` — `storefrontCountryCodes`: A list of country codes that limits the App Store’s attempt to apply the subscription-renewal-date extension. If this list isn’t present, the subscription-renewal-date extension applies to all storefronts.
- `failedCount` — `failedCount`: The final count of subscriptions that fail to receive a subscription-renewal-date extension.
- `succeededCount` — `succeededCount`: The final count of subscriptions that successfully receive a subscription-renewal-date extension.

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

The `summary` object appears in the [responseBodyV2DecodedPayload](responsebodyv2decodedpayload.md) when the [notificationType](notificationtype.md) is `RENEWAL_EXTENSION` and the [subtype](subtype.md) is `SUMMARY`. This notification occurs when the App Store completes your request to extend the subscription renewal date for eligible subscribers. For more information about this request, see [Extend Subscription Renewal Dates for All Active Subscribers](../appstoreserverapi/extend-subscription-renewal-dates-for-all-active-subscribers.md) in the [App Store Server API](../appstoreserverapi.md).

## Topics

### Data types

- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier for a subscription-renewal-date extension request.
- [environment](environment.md): The server environment, either sandbox or production.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [productId](productid.md): The product identifier of the In-App Purchase.
- [storefrontCountryCodes](storefrontcountrycodes.md): A list of storefront country codes for limiting the storefronts for a subscription-renewal-date extension.
- [storefrontCountryCode](storefrontcountrycode.md): The three-letter code that represents the country or region associated with the App Store storefront.
- [failedCount](failedcount.md): The count of subscriptions that fail to receive a subscription-renewal-date extension.
- [succeededCount](succeededcount.md): The count of subscriptions that successfully receive a subscription-renewal-date extension.

## See Also

### Response objects for in-app purchases

- [data](data.md): The payload data that contains app metadata and the signed renewal and transaction information.
- [appData](appdata.md): The object that contains the app metadata and signed app transaction information.
