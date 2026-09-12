> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/transactionscheduleddate](https://developer.apple.com/documentation/intents/inpaybillintent/transactionscheduleddate)

# transactionScheduledDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The scheduled date for the payment, as requested by the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionScheduledDate: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the date on which to schedule the payment. If the intent doesn’t include a transaction date, assume that the user intended to pay the bill immediately.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.

# transactionScheduledDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The scheduled date for the payment, as requested by the user.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * transactionScheduledDate;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * transactionScheduledDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the date on which to schedule the payment. If the intent doesn’t include a transaction date, assume that the user intended to pay the bill immediately.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.
