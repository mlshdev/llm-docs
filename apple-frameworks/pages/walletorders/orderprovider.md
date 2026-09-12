> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/orderprovider](https://developer.apple.com/documentation/walletorders/orderprovider)

# OrderProvider

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.4+

Information about the platform providing the order data.

## Declaration

```
object OrderProvider
```

## Properties

- `displayName` — `string` (required): The localized display name of the order provider platform.
- `trackingLogoNameDarkColorScheme` — `string` (required): The name of the logo image for the order provider that’s intended for the dark color scheme. When the shipping fulfilment has a `trackingURL`, it uses this image.
- `trackingLogoNameLightColorScheme` — `string` (required): The name of the logo image for the order provider that’s intended for the light color scheme. When the shipping fulfilment has a `trackingURL`, it uses this image.
- `url` — `uri` (required): The URL of the order provder platform.

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
- [Merchant](merchant.md): The merchant associated with the order.
- [Address](address.md): The physical address for an order.
- [Application](application.md): The details of an app in the App Store.
- [Barcode](barcode.md): The details of a barcode for an order.
- [CurrencyAmount](currencyamount.md): An amount of money.
- [LineItem](lineitem.md): An item associated with the order.
- [Location](location.md): A geographic location.
- [OrderIdentifiers](orderidentifiers.md): The unique identifiers associated with orders.
- [Payment](payment.md): The payment information associated with the order.
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
