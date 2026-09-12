> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/storefrontcountrycode](https://developer.apple.com/documentation/appstoreserverapi/storefrontcountrycode)

# storefrontCountryCode

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.7+

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

- [extendByDays](extendbydays.md): The number of days to extend the subscription renewal date.
- [extendReasonCode](extendreasoncode.md): The code that represents the reason for the subscription-renewal-date extension.
- [productId](../appstoreservernotifications/productid.md): The product identifier of the In-App Purchase.
- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier you provide to track each subscription-renewal-date extension request.
- [storefrontCountryCodes](storefrontcountrycodes.md): A list of storefront country codes you provide to limit the storefronts for a subscription-renewal-date extension.
