> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/dependentsku](https://developer.apple.com/documentation/advancedcommerceapi/dependentsku)

# dependentSKU

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Type  
**Availability:** Advanced Commerce API 1.0+

The product identifier of a dependent SKU in a subscription price change.

## Declaration

```
string dependentSKU
```

<a id="Discussion"></a>

### Discussion

A dependent SKU is a product identifier that represents an item that depends on another SKU in the context of subscription price changes. Dependent SKUs cannot be chained or shared between multiple parent SKUs.

The dependentSKU value is a string with a maximum length of 128 characters.

## See Also

### Data types

- [currency](currency.md): The three-letter ISO 4217 currency code for the price of a product.
- [description](description.md): A string you provide that describes a SKU.
- [displayName](displayname.md): A string with a product name that you can localize and is suitable for display to customers.
- [effective](effective.md): A string value that indicates when a requested change to an auto-renewable subscription goes into effect.
- [period](period.md): The duration of a single cycle of an auto-renewable subscription.
- [price](price.md): A price, in milliunits of a currency, for an Advanced Commerce API SKU.
- [proratedPrice](proratedprice.md): A prorated price, in milliunits of a currency, for an Advanced Commerce API SKU.
- [retainBillingCycle](retainbillingcycle.md): A Boolean value that determines whether to keep the existing billing cycle with the change you request.
- [refundAmount](refundamount.md): A refund amount, in milliunits of the currency.
- [refundReason](refundreason.md): A reason to request a refund.
- [refundRiskingPreference](refundriskingpreference.md): A Boolean value that indicates whether the App Store asks you for consumption data to help inform the refund decision.
- [SKU](sku.md): The product identifier of an in-app purchase product you manage in your own system.
- [storefront](storefront.md): A three-letter code that represents the country or region associated with the App Store storefront.
- [taxCode](taxcode.md): A tax code that applies to a SKU.
- [targetProductId](targetproductid.md): A generic product identifier that represents all Advanced Commerce API products to App Store Connect, which you use when you migrate a product.
