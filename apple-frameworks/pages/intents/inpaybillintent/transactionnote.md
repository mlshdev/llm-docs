> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/transactionnote](https://developer.apple.com/documentation/intents/inpaybillintent/transactionnote)

# transactionNote (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A note to associate with the payment transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var transactionNote: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the user specified additional notes for the payment, include those notes when recording the transaction in your system.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.

# transactionNote (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A note to associate with the payment transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * transactionNote;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * transactionNote;
```

<a id="Discussion"></a>

## Discussion

If the user specified additional notes for the payment, include those notes when recording the transaction in your system.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.
