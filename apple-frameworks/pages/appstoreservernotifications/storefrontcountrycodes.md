> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/storefrontcountrycodes](https://developer.apple.com/documentation/appstoreservernotifications/storefrontcountrycodes)

# storefrontCountryCodes

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.7+

A list of storefront country codes for limiting the storefronts for a subscription-renewal-date extension.

## Declaration

```
[storefrontCountryCode] storefrontCountryCodes
```

<a id="Discussion"></a>

## Discussion

If you provide a list of storefronts when you call the [Extend Subscription Renewal Dates for All Active Subscribers](../appstoreserverapi/extend-subscription-renewal-dates-for-all-active-subscribers.md) endpoint, the notification returns only those storefronts. If you don’t use the `storefrontCountryCodes`, the subscription-renewal-date extension applies to all storefronts.

For information about providing the list of storefronts, see [MassExtendRenewalDateRequest](../appstoreserverapi/massextendrenewaldaterequest.md).

## See Also

### Data types

- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier for a subscription-renewal-date extension request.
- [environment](environment.md): The server environment, either sandbox or production.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [productId](productid.md): The product identifier of the In-App Purchase.
- [storefrontCountryCode](storefrontcountrycode.md): The three-letter code that represents the country or region associated with the App Store storefront.
- [failedCount](failedcount.md): The count of subscriptions that fail to receive a subscription-renewal-date extension.
- [succeededCount](succeededcount.md): The count of subscriptions that successfully receive a subscription-renewal-date extension.
