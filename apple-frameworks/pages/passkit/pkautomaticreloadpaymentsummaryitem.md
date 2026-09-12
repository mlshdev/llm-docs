> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticreloadpaymentsummaryitem](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentsummaryitem)

# PKAutomaticReloadPaymentSummaryItem (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that defines a summary item for an automatic reload or refill payment, such as a store card top-up.

## Declaration

```swift
class PKAutomaticReloadPaymentSummaryItem
```

<a id="overview"></a>

## Overview

[PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md) is a subclass of [PKPaymentSummaryItem](pkpaymentsummaryitem.md) and inherits all properties of the parent class.

Add a summary item of this type to the [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md) property of a [PKPaymentRequest](pkpaymentrequest.md) object to display an automatic reload payment in the summary items on the payment sheet to the user.

To describe an automatic reload payment, set the summary item values as follows:

- Use the [amount](pkpaymentsummaryitem/amount.md) property to specify the reload amount when the account balance reaches the threshold amount, [thresholdAmount](pkautomaticreloadpaymentsummaryitem/thresholdamount.md).
- Omit the [type](pkpaymentsummaryitem/type.md) property. The summary item type is only relevant for the [PKPaymentSummaryItem](pkpaymentsummaryitem.md) parent class.

## Topics

### Setting the automatic reload threshold

- [thresholdAmount](pkautomaticreloadpaymentsummaryitem/thresholdamount.md): The balance an account reaches before you apply the automatic reload amount.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the payment summary items

- [automaticReloadBilling](pkautomaticreloadpaymentrequest/automaticreloadbilling.md): Summary items that contain the top-up amount and balance threshold amount for the automatic reload payment.

# PKAutomaticReloadPaymentSummaryItem (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that defines a summary item for an automatic reload or refill payment, such as a store card top-up.

## Declaration

```objectivec
@interface PKAutomaticReloadPaymentSummaryItem : PKPaymentSummaryItem
```

<a id="overview"></a>

## Overview

[PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md) is a subclass of [PKPaymentSummaryItem](pkpaymentsummaryitem.md) and inherits all properties of the parent class.

Add a summary item of this type to the [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md) property of a [PKPaymentRequest](pkpaymentrequest.md) object to display an automatic reload payment in the summary items on the payment sheet to the user.

To describe an automatic reload payment, set the summary item values as follows:

- Use the [amount](pkpaymentsummaryitem/amount.md) property to specify the reload amount when the account balance reaches the threshold amount, [thresholdAmount](pkautomaticreloadpaymentsummaryitem/thresholdamount.md).
- Omit the [type](pkpaymentsummaryitem/type.md) property. The summary item type is only relevant for the [PKPaymentSummaryItem](pkpaymentsummaryitem.md) parent class.

## Topics

### Setting the automatic reload threshold

- [thresholdAmount](pkautomaticreloadpaymentsummaryitem/thresholdamount.md): The balance an account reaches before you apply the automatic reload amount.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

## See Also

### Setting the payment summary items

- [automaticReloadBilling](pkautomaticreloadpaymentrequest/automaticreloadbilling.md): Summary items that contain the top-up amount and balance threshold amount for the automatic reload payment.
