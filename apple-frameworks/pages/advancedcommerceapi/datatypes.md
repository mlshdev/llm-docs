> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/datatypes](https://developer.apple.com/documentation/advancedcommerceapi/datatypes)

# Data types

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** API Collection

Objects and data types for the Advanced Commerce API.

## Topics

### Objects

- [Descriptors](descriptors.md): The display name and description of a subscription product.
- [Offer](offer.md): A discount offer for an auto-renewable subscription.
- [RequestInfo](requestinfo.md): The metadata to include in server requests.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyDescriptors](subscriptionmodifydescriptors.md): The data your app provides to change the description and display name of an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md): The data your app provides to change a subscription price.

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
- [refundRiskingPreference](refundriskingpreference.md): A Boolean value that indicates whether the App Store asks you for consumption data to help inform the refund decision.
- [SKU](sku.md): The product identifier of an in-app purchase product you manage in your own system.
- [storefront](storefront.md): A three-letter code that represents the country or region associated with the App Store storefront.
- [taxCode](taxcode.md): A tax code that applies to a SKU.
- [targetProductId](targetproductid.md): A generic product identifier that represents all Advanced Commerce API products to App Store Connect, which you use when you migrate a product.
- [transactionId](transactionid.md): A unique identifier that the App Store generates for a transaction.
- [version](version.md): A number that represents the version of the data structure or Advanced Commerce API.
