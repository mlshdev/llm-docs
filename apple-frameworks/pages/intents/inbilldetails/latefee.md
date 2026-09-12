> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/latefee](https://developer.apple.com/documentation/intents/inbilldetails/latefee)

# lateFee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The late fee to apply if the payment is late.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var lateFee: INCurrencyAmount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the late fee, if any, that to apply if the user pays the bill after the due date.

## See Also

### Getting the Bill Amount

- [minimumDue](minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.

# lateFee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The late fee to apply if the payment is late.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INCurrencyAmount * lateFee;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INCurrencyAmount * lateFee;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the late fee, if any, that to apply if the user pays the bill after the due date.

## See Also

### Getting the Bill Amount

- [minimumDue](minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.
