> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/storefrontcountrycode](https://developer.apple.com/documentation/appstoreservernotifications/storefrontcountrycode)

# storefrontCountryCode

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.7+

The three-letter code that represents the country or region associated with the App Store storefront.

## Declaration

```
string storefrontCountryCode
```

<a id="Discussion"></a>

## Discussion

This type uses the ISO 3166-1 Alpha-3 country code representation.

## See Also

### Data types

- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier for a subscription-renewal-date extension request.
- [environment](environment.md): The server environment, either sandbox or production.
- [appAppleId](appappleid.md): The unique identifier of an app in the App Store.
- [bundleId](bundleid.md): The bundle identifier of an app.
- [productId](productid.md): The product identifier of the In-App Purchase.
- [storefrontCountryCodes](storefrontcountrycodes.md): A list of storefront country codes for limiting the storefronts for a subscription-renewal-date extension.
- [failedCount](failedcount.md): The count of subscriptions that fail to receive a subscription-renewal-date extension.
- [succeededCount](succeededcount.md): The count of subscriptions that successfully receive a subscription-renewal-date extension.
