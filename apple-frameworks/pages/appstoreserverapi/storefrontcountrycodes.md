> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/storefrontcountrycodes](https://developer.apple.com/documentation/appstoreserverapi/storefrontcountrycodes)

# storefrontCountryCodes

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.7+

A list of storefront country codes you provide to limit the storefronts for a subscription-renewal-date extension.

## Declaration

```
[storefrontCountryCode] storefrontCountryCodes
```

<a id="Discussion"></a>

## Discussion

You provide the list of storefront country codes in the [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md) to limit the storefronts in which the App Store extends the subscription renewal date. To indicate that the extension applies in all storefronts, omit the [storefrontCountryCodes](storefrontcountrycodes.md) object from the [MassExtendRenewalDateRequest](massextendrenewaldaterequest.md) object.

## See Also

### Data types

- [extendByDays](extendbydays.md): The number of days to extend the subscription renewal date.
- [extendReasonCode](extendreasoncode.md): The code that represents the reason for the subscription-renewal-date extension.
- [productId](../appstoreservernotifications/productid.md): The product identifier of the In-App Purchase.
- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier you provide to track each subscription-renewal-date extension request.
- [storefrontCountryCode](storefrontcountrycode.md): The three-letter code that represents the country or region associated with the App Store storefront.
