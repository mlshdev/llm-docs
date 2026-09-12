> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/duedate](https://developer.apple.com/documentation/intents/inpaybillintent/duedate)

# dueDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The due date of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var dueDate: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the date by which the payer must make a payment to the payee. The first date in the range represents the due date for the payment and the last date represents the deliquent date. For example, a mortgage payment might be due on the first of the month but the payment isn’t considered delinquent until several weeks later.

## See Also

### Getting the Bill Information

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.

# dueDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The due date of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * dueDate;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * dueDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the date by which the payer must make a payment to the payee. The first date in the range represents the due date for the payment and the last date represents the deliquent date. For example, a mortgage payment might be due on the first of the month but the payment isn’t considered delinquent until several weeks later.

## See Also

### Getting the Bill Information

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
