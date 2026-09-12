> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/currency](https://developer.apple.com/documentation/appstoreservernotifications/currency)

# currency

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.9+

The three-letter ISO 4217 currency code for the price of the product.

## Declaration

```
string currency
```

## Mentioned In

- [App Store Server Notifications changelog](app-store-server-notifications-changelog.md)

<a id="Discussion"></a>

## Discussion

The currency property contains an ISO 4217 alpha-3 string that represents the currency of the price of the product.

> **Important**

>  For financial and accounting purposes, use the App Store Connect reporting tools. For more information, see [Download financial reports](https://developer.apple.com/help/app-store-connect/getting-paid/download-financial-reports) and [Overview of reporting tools](https://developer.apple.com/help/app-store-connect/measure-app-performance/overview-of-reporting-tools).

Don’t use the [currency](currency.md) value to infer the storefront. Use the [storefront](storefront.md) value in the transaction instead.

For more information on how you set prices, see [Set a price](https://developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price) and [Set a price for an in-app purchase](https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/set-a-price-for-an-in-app-purchase).

## See Also

### Product price and currency

- [price](price.md): The price, in milliunits, of the In-App Purchase that the system records in the transaction.
