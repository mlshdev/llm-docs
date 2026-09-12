> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/pickupfulfillment](https://developer.apple.com/documentation/walletorders/pickupfulfillment)

# PickupFulfillment

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

The details of a pickup order.

## Declaration

```
object PickupFulfillment
```

## Properties

- `address` — `Address`: The address for the order pickup.
- `barcode` — `Barcode`: The barcode the customer shows at pickup.
- `displayName` — `string` (required): The localized name of the pickup location.
- `fulfillmentIdentifier` — `string` (required): An opaque value that uniquely identifies this fulfillment in the order. This isn’t displayed to the user and only for determining changes and user notifications.
- `fulfillmentType` — `string` (required): The type of fulfillment, which is `pickup`.
  **Allowed values:** `pickup`
- `lineItems` — `[LineItem]`: The items for the customer to pick up, displayed in the order provided.
- `location` — `Location`: The latitude and longitude of the pickup location. Use this when you require greater precision than address alone (for example, for accurate indoor mapping display).
- `notes` — `string`: Localized instructions for the pickup.
- `pickedUpAt` — `date-time`: The date and time when the customer picked up the order, in RFC 3339 format.
- `pickupAt` — `date-time`: The date and time when the pickup window starts, in RFC 3339 format.
- `pickupWindowDuration` — `duration`: The duration for which the pickup window is open, in ISO 8601-1 duration format.
- `status` — `string` (required): The status of the fulfillment.
  **Allowed values:** `open`, `processing`, `readyForPickup`, `pickedUp`, `issue`, `cancelled`
- `statusDescription` — `string`: A localized message describing the fulfillment status.

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
- [PaymentTransaction](paymenttransaction.md): The details about a payment transaction.
- [Return](return.md): The details of a return order.
