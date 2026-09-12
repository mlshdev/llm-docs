> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/fromaccount](https://developer.apple.com/documentation/intents/inpaybillintent/fromaccount)

# fromAccount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user account containing the funds for the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var fromAccount: INPaymentAccount? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which account is the source of funds for the payment.

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.

# fromAccount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The user account containing the funds for the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPaymentAccount * fromAccount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPaymentAccount * fromAccount;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which account is the source of funds for the payment.

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer from the user to the payee.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.
