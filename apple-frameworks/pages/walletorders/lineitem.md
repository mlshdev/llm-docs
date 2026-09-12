> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/lineitem](https://developer.apple.com/documentation/walletorders/lineitem)

# LineItem

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

An item associated with the order.

## Declaration

```
object LineItem
```

## Properties

- `image` — `string`: The name for an image representing the item.
- `price` — `CurrencyAmount`: The price of the line item.
- `quantity` — `number` (required): The number of items ordered.
- `subtitle` — `string`: A localized secondary display title for the item.
- `title` — `string` (required): A localized title for the item.
- `gtin` — `string`: The Global Trade Item Number of the item, if available. This could be an EAN, ISBN, or other value.
- `sku` — `string`: A merchant-specific unique product identifier.

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
- [Merchant](merchant.md): The merchant associated with the order.
- [Address](address.md): The physical address for an order.
- [Application](application.md): The details of an app in the App Store.
- [Barcode](barcode.md): The details of a barcode for an order.
- [CurrencyAmount](currencyamount.md): An amount of money.
- [Location](location.md): A geographic location.
- [OrderIdentifiers](orderidentifiers.md): The unique identifiers associated with orders.
- [OrderProvider](orderprovider.md): Information about the platform providing the order data.
- [Payment](payment.md): The payment information associated with the order.
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
