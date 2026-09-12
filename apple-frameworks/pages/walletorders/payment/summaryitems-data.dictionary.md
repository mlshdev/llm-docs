> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/payment/summaryitems-data.dictionary](https://developer.apple.com/documentation/walletorders/payment/summaryitems-data.dictionary)

# Payment.SummaryItems

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

A breakdown of the total payment.

## Declaration

```
object Payment.SummaryItems
```

## Properties

- `label` — `string` (required): A localized label.
- `value` — `CurrencyAmount` (required): The monetary value.

## See Also

### Supporting objects

- [Customer](../customer.md): The details of the order’s customer.
- [Merchant](../merchant.md): The merchant associated with the order.
- [Address](../address.md): The physical address for an order.
- [Application](../application.md): The details of an app in the App Store.
- [Barcode](../barcode.md): The details of a barcode for an order.
- [CurrencyAmount](../currencyamount.md): An amount of money.
- [LineItem](../lineitem.md): An item associated with the order.
- [Location](../location.md): A geographic location.
- [OrderIdentifiers](../orderidentifiers.md): The unique identifiers associated with orders.
- [OrderProvider](../orderprovider.md): Information about the platform providing the order data.
- [Payment](../payment.md): The payment information associated with the order.
- [PaymentMethod](../paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](../paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](../pickupfulfillment.md): The details of a pickup order.
- [Return](../return.md): The details of a return order.
