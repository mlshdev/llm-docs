> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/refundriskingpreference](https://developer.apple.com/documentation/advancedcommerceapi/refundriskingpreference)

# refundRiskingPreference

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Type  
**Availability:** Advanced Commerce API 1.1+

A Boolean value that indicates whether the App Store asks you for consumption data to help inform the refund decision.

## Declaration

```
boolean refundRiskingPreference
```

<a id="Discussion"></a>

## Discussion

The App Store uses a variety of factors to determine if a refund request is approved or denied. Set this value to `true` to enable the App Store to ask for consumption information about the product with the refund request. When this value is `true`, you receive a `CONSUMPTION_REQUEST` [notificationType](../appstoreservernotifications/notificationtype.md) on your your [App Store Server Notifications V2](../appstoreservernotifications/app-store-server-notifications-v2.md) endpoint. Respond to the consumption request using the [Send Consumption Information](../appstoreserverapi/send-consumption-information.md) to provide additional information that informs and improves the refund process.

Set this value to `false` otherwise. You won’t receive a `CONSUMPTION_REQUEST` notification.

The default value is `true`.

## See Also

### Data types

- [currency](currency.md): The three-letter ISO 4217 currency code for the price of a product.
- [description](description.md): A string you provide that describes a SKU.
- [dependentSKU](dependentsku.md): The product identifier of a dependent SKU in a subscription price change.
- [displayName](displayname.md): A string with a product name that you can localize and is suitable for display to customers.
- [effective](effective.md): A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
- [period](period.md): The duration of a single cycle of an auto-renewable subscription.
- [price](price.md): A price, in milliunits of a currency, for an Advanced Commerce API SKU.
- [proratedPrice](proratedprice.md): A prorated price, in milliunits of a currency, for an Advanced Commerce API SKU.
- [retainBillingCycle](retainbillingcycle.md): A Boolean value that determines whether to keep the existing billing cycle with the change you request.
- [refundAmount](refundamount.md): A refund amount, in milliunits of the currency.
- [refundReason](refundreason.md): A reason to request a refund.
- [SKU](sku.md): The product identifier of an in-app purchase product you manage in your own system.
- [storefront](storefront.md): A three-letter code that represents the country or region associated with the App Store storefront.
- [taxCode](taxcode.md): A tax code that applies to a SKU.
- [targetProductId](targetproductid.md): A generic product identifier that represents all Advanced Commerce API products to App Store Connect, which you use when you migrate a product.
