> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/currencyamount](https://developer.apple.com/documentation/walletorders/currencyamount)

# CurrencyAmount

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

An amount of money.

## Declaration

```
object CurrencyAmount
```

## Properties

- `amount` — `string` (required): The monetary amount associated with the currency.
- `currency` — `string` (required): The ISO 4217 currency code that applies to the monetary amount.
  **Minimum length:** `3`  
  **Maximum length:** `3`

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
- [Merchant](merchant.md): The merchant associated with the order.
- [Address](address.md): The physical address for an order.
- [Application](application.md): The details of an app in the App Store.
- [Barcode](barcode.md): The details of a barcode for an order.
- [LineItem](lineitem.md): An item associated with the order.
- [Location](location.md): A geographic location.
- [OrderIdentifiers](orderidentifiers.md): The unique identifiers associated with orders.
- [OrderProvider](orderprovider.md): Information about the platform providing the order data.
- [Payment](payment.md): The payment information associated with the order.
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
