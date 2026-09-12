> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/paymenttransaction](https://developer.apple.com/documentation/walletorders/paymenttransaction)

# PaymentTransaction

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 16.0+ · macOS 14.0+

The details about a payment transaction.

## Declaration

```
object PaymentTransaction
```

## Properties

- `amount` — `CurrencyAmount` (required): The amount of the transaction.
- `createdAt` — `date-time` (required): The date and time when the framework created the transaction, in RFC 3339 format.
- `paymentMethod` — `PaymentMethod` (required): A string that represents the payment, such as a payment pass or card used for the transaction.
- `status` — `string` (required): The fulfillment status.
  **Allowed values:** `pending`, `approved`, `completed`, `cancelled`, `failed`
- `applePayTransactionIdentifier` — `string`: A string that represents the Apple Pay transaction ID.
- `transactionType` — `string` (required): The type of transaction.
  **Allowed values:** `purchase`, `refund`
- `receipt` — `string`: The filename of a receipt within the bundle that’s associated with the transaction.

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
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
