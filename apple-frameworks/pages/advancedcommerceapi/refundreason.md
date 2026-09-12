> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/refundreason](https://developer.apple.com/documentation/advancedcommerceapi/refundreason)

# refundReason

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Type  
**Availability:** Advanced Commerce API 1.1+

A reason to request a refund.

## Declaration

```
string refundReason
```

## Possible Values

- `UNINTENDED_PURCHASE`: The customer didn’t intend to make the in-app purchase.
- `FULFILLMENT_ISSUE`: The customer had issues with receiving or using the in-app purchase.
- `UNSATISFIED_WITH_PURCHASE`: The customer wasn’t satisfied with the in-app purchase.
- `LEGAL`: The customer requested a refund based on a legal reason.
- `OTHER`: The customer requested a refund for other reasons.
- `MODIFY_ITEMS_REFUND`: The customer modified one or more items in the subscription, which results in a refund.
- `SIMULATE_REFUND_DECLINE`: For testing purposes only, a simulation of a refund that the App Store declines. The App Store declines refunds with this reason. This reason is valid only when you test your app in the sandbox environment or in TestFlight.

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
- [refundRiskingPreference](refundriskingpreference.md): A Boolean value that indicates whether the App Store asks you for consumption data to help inform the refund decision.
- [SKU](sku.md): The product identifier of an in-app purchase product you manage in your own system.
- [storefront](storefront.md): A three-letter code that represents the country or region associated with the App Store storefront.
- [taxCode](taxcode.md): A tax code that applies to a SKU.
- [targetProductId](targetproductid.md): A generic product identifier that represents all Advanced Commerce API products to App Store Connect, which you use when you migrate a product.
