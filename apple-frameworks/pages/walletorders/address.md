> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/address](https://developer.apple.com/documentation/walletorders/address)

# Address

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

The physical address for an order.

## Declaration

```
object Address
```

## Properties

- `addressLines` — `[string]`: The street portion of the address.
- `administrativeArea` — `string`: The state or administrative area of the address.
- `countryCode` — `string`: The country of the address, in ISO-3166 two-letter format.
  **Minimum length:** `2`  
  **Maximum length:** `2`
- `locality` — `string`: The city of the address.
- `postalCode` — `string`: The ZIP or postal code, where applicable, of the address.
- `subAdministrativeArea` — `string`: The subadministrative area (such as county or other region) of the address.
- `subLocality` — `string`: Additional information associated with the location, such as a district or neighborhood.

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
- [Merchant](merchant.md): The merchant associated with the order.
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
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
