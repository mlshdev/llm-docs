> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletorders/merchant](https://developer.apple.com/documentation/walletorders/merchant)

# Merchant

**Interface language:** Data

**Framework:** Wallet Orders  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 13.0+

The merchant associated with the order.

## Declaration

```
object Merchant
```

## Properties

- `address` — `Address`: The contact address of the merchant.
- `businessChatURL` — `uri`: An Apple Messages for Business URL the customer uses to contact the merchant. For more information, see [Starting a Message from a URL](https://register.apple.com/resources/messages/messaging-documentation/message-with-customers#starting-a-message-from-a-url).
- `contactURL` — `uri`: The URL where the customer can contact the merchant.
- `displayName` — `string` (required): The localized display name of the merchant.
- `emailAddress` — `string`: The email address where the customer can contact the merchant.
- `logo` — `string`: The name for an image representing the merchant’s logo.
- `merchantIdentifier` — `string` (required): The Apple Merchant Identifier for this merchant, generated at [developer.apple.com](https://developer.apple.com).
- `phoneNumber` — `string`: The telephone number where the customer can contact the merchant.
- `url` — `uri` (required): The URL for the merchant’s website or landing page.

## See Also

### Supporting objects

- [Customer](customer.md): The details of the order’s customer.
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
- [Return](return.md): The details of a return order.
