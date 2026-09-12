> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentsummaryitem](https://developer.apple.com/documentation/passkit/pkpaymentsummaryitem)

# PKPaymentSummaryItem (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

## Declaration

```swift
class PKPaymentSummaryItem
```

<a id="overview"></a>

## Overview

For shipping cost, use the [PKShippingMethod](pkshippingmethod.md) subclass.

## Topics

### Creating  summary items

- [init(label:amount:)](pkpaymentsummaryitem/init%28label_amount_%29.md): Initializes and returns a summary item with the given label and amount.
- [init(label:amount:type:)](pkpaymentsummaryitem/init%28label_amount_type_%29.md): Initializes and returns a summary item with the given label, amount, and type.

### Describing summary items

- [label](pkpaymentsummaryitem/label.md): A short, localized description of the item.
- [amount](pkpaymentsummaryitem/amount.md): The summary item’s amount.
- [type](pkpaymentsummaryitem/type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md)
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md)
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md)
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md)
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md)
- [PKShippingMethod](pkshippingmethod.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the summary items

- [summaryItems](pkdisbursementrequest/summaryitems.md): An array of payment summary item objects that the framework presents to people.
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.

# PKPaymentSummaryItem (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

## Declaration

```objectivec
@interface PKPaymentSummaryItem : NSObject
```

<a id="overview"></a>

## Overview

For shipping cost, use the [PKShippingMethod](pkshippingmethod.md) subclass.

## Topics

### Creating  summary items

- [summaryItemWithLabel:amount:](pkpaymentsummaryitem/init%28label_amount_%29.md): Initializes and returns a summary item with the given label and amount.
- [summaryItemWithLabel:amount:type:](pkpaymentsummaryitem/init%28label_amount_type_%29.md): Initializes and returns a summary item with the given label, amount, and type.

### Describing summary items

- [label](pkpaymentsummaryitem/label.md): A short, localized description of the item.
- [amount](pkpaymentsummaryitem/amount.md): The summary item’s amount.
- [type](pkpaymentsummaryitem/type.md): The summary item’s type that indicates whether the amount is final.
- [PKPaymentSummaryItemType](pkpaymentsummaryitemtype.md): Constants that describe the type of the payment summary item, such as final or pending.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md)
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md)
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md)
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md)
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md)
- [PKShippingMethod](pkshippingmethod.md)

## See Also

### Setting the summary items

- [summaryItems](pkdisbursementrequest/summaryitems.md): An array of payment summary item objects that the framework presents to people.
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.
