> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/paymentmethod](https://developer.apple.com/documentation/walletorders/paymentmethod)

# PaymentMethod

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+

The payment method for the transaction.

## Declaration

```
object PaymentMethod
```

## Properties

- `displayName` — `string` (required): The name of the payment method, such as the name of a specific payment pass or card.

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
- [OrderProvider](orderprovider.md): Information about the platform providing the order data.
- [Payment](payment.md): The payment information associated with the order.
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
