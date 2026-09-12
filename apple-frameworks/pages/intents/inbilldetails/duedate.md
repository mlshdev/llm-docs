> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/duedate](https://developer.apple.com/documentation/intents/inbilldetails/duedate)

# dueDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The due date of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var dueDate: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the date to pay the bill to the payee. The first date in the range represents the due date for the payment and the last date represents the date that afterwards the payee considers the payment deliquent. For example, a mortgage payment might be due on the first of the month but the payment isn’t considered delinquent until several weeks later.

## See Also

### Getting the Bill Amount

- [minimumDue](minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [lateFee](latefee.md): Deprecated. The late fee to apply if the payment is late.

# dueDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The due date of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDateComponents * dueDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDateComponents * dueDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the date to pay the bill to the payee. The first date in the range represents the due date for the payment and the last date represents the date that afterwards the payee considers the payment deliquent. For example, a mortgage payment might be due on the first of the month but the payment isn’t considered delinquent until several weeks later.

## See Also

### Getting the Bill Amount

- [minimumDue](minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [lateFee](latefee.md): Deprecated. The late fee to apply if the payment is late.
