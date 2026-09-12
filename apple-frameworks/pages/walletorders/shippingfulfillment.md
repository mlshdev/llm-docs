> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/shippingfulfillment](https://developer.apple.com/documentation/walletorders/shippingfulfillment)

# ShippingFulfillment

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

The details of a shipped order.

## Declaration

```
object ShippingFulfillment
```

## Properties

- `fulfillmentIdentifier` — `string` (required): An opaque value that uniquely identifies this fulfillment in the order. This isn’t displayed to the user, and is only used for determining changes and user notifications.
- `fulfillmentType` — `string` (required): The type of fulfillment, which is `shipping`.
  **Allowed values:** `shipping`
- `status` — `string` (required): The status of the fulfillment.
  **Allowed values:** `open`, `processing`, `onTheWay`, `outForDelivery`, `delivered`, `shipped`, `issue`, `cancelled`
- `carrier` — `string`: The shipping carrier used to complete this fulfillment.
- `deliveredAt` — `date-time`: The date and time when the carrier delivered the shipment, in RFC 3339 format.
- `estimatedDeliveryAt` — `date-time`: The estimated delivery date and time from the carrier, in RFC 3339 format. The system ignores the time components unless the carrier provides a window duration.
- `estimatedDeliveryWindowDuration` — `duration`: The duration for the estimated delivery window, in ISO 8601-1 duration format.
- `lineItems` — `[LineItem]`: The items the carrier will ship, displayed in the order provided.
- `notes` — `string`: Additional localized information about the shipment. For example, whether it requires a signature.
- `recipient` — `ShippingFulfillment.Recipient`: The recipient of the shipment.
- `shippedAt` — `date-time`: The date and time when the carrier shipped the order, in RFC 3339 format.
- `shippingType` — `string`: The type used for display.

  Default: shipping  
  **Allowed values:** `shipping`, `delivery`
- `statusDescription` — `string`: A localized message describing the fulfillment status.
- `trackingNumber` — `string`: The tracking number provided by the shipping carrier.
- `trackingURL` — `uri`: A URL where the customer can track the shipment.

## Topics

### Objects

- [ShippingFulfillment.Recipient](shippingfulfillment/recipient-data.dictionary.md): The recipient of the shipment.

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
- [PickupFulfillment](pickupfulfillment.md): The details of a pickup order.
