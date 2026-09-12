> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/payment](https://developer.apple.com/documentation/walletorders/payment)

# Payment

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

The payment information associated with the order.

## Declaration

```
object Payment
```

## Properties

- `total` — `CurrencyAmount` (required): The total amount to be paid.
- `summaryItems` — `[Payment.SummaryItems]`: A breakdown of the total payment. For example, shipping cost and taxes.
- `transactions` — `[PaymentTransaction]`: A list of [PaymentTransaction](paymenttransaction.md) dictionaries.
- `paymentMethods` — `[string]`: A list of methods used to pay. For example, MasterCard 1234 or Visa 5678.
- `status` — `string` (required): The status of the payment.
  **Allowed values:** `pending`, `authorized`, `paid`, `refunded`, `declined`, `voided`
- `applePayTransactionIdentifiers` — `[string]`: An optional list of Apple Pay transaction identifiers relating to this order. Wallet links the original transaction to your order by default. If you charge a user multiple times, you can provide the relevant transaction identifiers here to enable additional linking.

## Topics

### Dictionaries

- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.

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
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
