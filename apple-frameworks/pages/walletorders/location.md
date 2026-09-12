> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/location](https://developer.apple.com/documentation/walletorders/location)

# Location

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

A geographic location.

## Declaration

```
object Location
```

## Properties

- `altitude` — `number`: The altitude above mean sea level, measured in meters.
- `latitude` — `number` (required): The latitude of the location.
  **Minimum:** `-90`  
  **Maximum:** `90`
- `longitude` — `number` (required): The longitude of the location.
  **Minimum:** `-180`  
  **Maximum:** `180`

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
- [Merchant](merchant.md): The merchant associated with the order.
- [Address](address.md): The physical address for an order.
- [Application](application.md): The details of an app in the App Store.
- [Barcode](barcode.md): The details of a barcode for an order.
- [CurrencyAmount](currencyamount.md): An amount of money.
- [LineItem](lineitem.md): An item associated with the order.
- [OrderIdentifiers](orderidentifiers.md): The unique identifiers associated with orders.
- [OrderProvider](orderprovider.md): Information about the platform providing the order data.
- [Payment](payment.md): The payment information associated with the order.
- [Payment.SummaryItems](payment/summaryitems-data.dictionary.md): A breakdown of the total payment.
- [PaymentMethod](paymentmethod.md): The payment method for the transaction.
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
- [Return](return.md): The details of a return order.
