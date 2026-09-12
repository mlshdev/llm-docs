> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/minimumdue](https://developer.apple.com/documentation/intents/inbilldetails/minimumdue)

# minimumDue (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The minimum amount to pay toward the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var minimumDue: INCurrencyAmount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the minimum amount that the payee expects.

## See Also

### Getting the Bill Amount

- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.
- [lateFee](latefee.md): Deprecated. The late fee to apply if the payment is late.

# minimumDue (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The minimum amount to pay toward the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INCurrencyAmount * minimumDue;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INCurrencyAmount * minimumDue;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the minimum amount that the payee expects.

## See Also

### Getting the Bill Amount

- [amountDue](amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.
- [lateFee](latefee.md): Deprecated. The late fee to apply if the payment is late.
