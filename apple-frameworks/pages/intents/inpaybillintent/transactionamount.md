> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/transactionamount](https://developer.apple.com/documentation/intents/inpaybillintent/transactionamount)

# transactionAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The amount to transfer from the user to the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionAmount: INPaymentAmount? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how much money to transfer out of the user’s account and apply to the payment. Payment amounts may reflect a specific monetary amount or may indicate that the user should pay all or a portion of the bill. When resolving the transaction amount, always provide as much detail as you can. For example, if the user asked to pay the minimum amount of a credit card bill, your resolution should also contain the precise amount of money to pay.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.

# transactionAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The amount to transfer from the user to the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPaymentAmount * transactionAmount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPaymentAmount * transactionAmount;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine how much money to transfer out of the user’s account and apply to the payment. Payment amounts may reflect a specific monetary amount or may indicate that the user should pay all or a portion of the bill. When resolving the transaction amount, always provide as much detail as you can. For example, if the user asked to pay the minimum amount of a credit card bill, your resolution should also contain the precise amount of money to pay.

## See Also

### Getting the Transaction Details

- [fromAccount](fromaccount.md): Deprecated. The user account containing the funds for the payment.
- [transactionNote](transactionnote.md): Deprecated. A note to associate with the payment transaction.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The scheduled date for the payment, as requested by the user.
