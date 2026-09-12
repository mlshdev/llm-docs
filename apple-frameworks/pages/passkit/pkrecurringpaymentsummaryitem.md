> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentsummaryitem](https://developer.apple.com/documentation/passkit/pkrecurringpaymentsummaryitem)

# PKRecurringPaymentSummaryItem (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

## Declaration

```swift
class PKRecurringPaymentSummaryItem
```

<a id="overview"></a>

## Overview

[PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md) is a subclass of [PKPaymentSummaryItemType](pkpaymentsummaryitemtype.md) and inherits all properties of the parent class.

Add a summary item of this type to the [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md) property of a [PKPaymentRequest](pkpaymentrequest.md) to display to the user a recurring payment in the summary items on the payment sheet.

To describe a recurring payment, set the summary item values as follows:

- In the [amount](pkpaymentsummaryitem/amount.md) property, provide the billing amount for the set interval, for example, the amount charged per week if the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) is a week.
- Omit the [type](pkpaymentsummaryitem/type.md) property. The summary item type is only relevant for the [PKPaymentSummaryItem](pkpaymentsummaryitem.md) parent class.
- Set the [startDate](pkrecurringpaymentsummaryitem/startdate.md) and [endDate](pkrecurringpaymentsummaryitem/enddate.md) to represent the term for the recurring payments, as appropriate.
- Set the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md), [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md), and [endDate](pkrecurringpaymentsummaryitem/enddate.md) to specify a number of repeating payments.

For example, the following code shows a summary item that specifies six monthly payments that start on the transaction date:

```swift
let recurringPayment = PKRecurringPaymentSummaryItem(label: "Total Payment",                                                  NSDecimalNumber(string: "199.99"))

// Payment starts today.
recurringPayment.startDate = nil

// Pay once a month.
recurringPayment.intervalUnit = .month
recurringPayment.intervalCount = 1

// Make 5 more payments for a total of 6 payments.
var dateComponent = DateComponents()
dateComponent.month = 5
recurringPayment.endDate = Calendar.current.date(byAdding: dateComponent, Date())
```

The payment interval is a combination of the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) and the [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md). For example, if you set the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) to .[month](../corefoundation/cfcalendarunit/month.md) and [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md) to `3`, then the payment interval is three months.

## Topics

### Setting the payment period

- [startDate](pkrecurringpaymentsummaryitem/startdate.md): The date of the first payment.
- [endDate](pkrecurringpaymentsummaryitem/enddate.md): The date of the final payment.

### Setting the payment interval

- [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md): The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.
- [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md): The number of interval units that make up the total payment interval.

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

- [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md): An array of payment summary item objects that summarize the amount of the payment.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

# PKRecurringPaymentSummaryItem (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

## Declaration

```objectivec
@interface PKRecurringPaymentSummaryItem : PKPaymentSummaryItem
```

<a id="overview"></a>

## Overview

[PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md) is a subclass of [PKPaymentSummaryItemType](pkpaymentsummaryitemtype.md) and inherits all properties of the parent class.

Add a summary item of this type to the [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md) property of a [PKPaymentRequest](pkpaymentrequest.md) to display to the user a recurring payment in the summary items on the payment sheet.

To describe a recurring payment, set the summary item values as follows:

- In the [amount](pkpaymentsummaryitem/amount.md) property, provide the billing amount for the set interval, for example, the amount charged per week if the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) is a week.
- Omit the [type](pkpaymentsummaryitem/type.md) property. The summary item type is only relevant for the [PKPaymentSummaryItem](pkpaymentsummaryitem.md) parent class.
- Set the [startDate](pkrecurringpaymentsummaryitem/startdate.md) and [endDate](pkrecurringpaymentsummaryitem/enddate.md) to represent the term for the recurring payments, as appropriate.
- Set the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md), [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md), and [endDate](pkrecurringpaymentsummaryitem/enddate.md) to specify a number of repeating payments.

For example, the following code shows a summary item that specifies six monthly payments that start on the transaction date:

```swift
let recurringPayment = PKRecurringPaymentSummaryItem(label: "Total Payment",                                                  NSDecimalNumber(string: "199.99"))

// Payment starts today.
recurringPayment.startDate = nil

// Pay once a month.
recurringPayment.intervalUnit = .month
recurringPayment.intervalCount = 1

// Make 5 more payments for a total of 6 payments.
var dateComponent = DateComponents()
dateComponent.month = 5
recurringPayment.endDate = Calendar.current.date(byAdding: dateComponent, Date())
```

The payment interval is a combination of the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) and the [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md). For example, if you set the [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md) to .[kCFCalendarUnitMonth](../corefoundation/cfcalendarunit/month.md) and [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md) to `3`, then the payment interval is three months.

## Topics

### Setting the payment period

- [startDate](pkrecurringpaymentsummaryitem/startdate.md): The date of the first payment.
- [endDate](pkrecurringpaymentsummaryitem/enddate.md): The date of the final payment.

### Setting the payment interval

- [intervalUnit](pkrecurringpaymentsummaryitem/intervalunit.md): The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.
- [intervalCount](pkrecurringpaymentsummaryitem/intervalcount.md): The number of interval units that make up the total payment interval.

## Relationships

### Inherits From

- [PKPaymentSummaryItem](pkpaymentsummaryitem.md)

## See Also

### Setting the payment summary items

- [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md): An array of payment summary item objects that summarize the amount of the payment.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.
