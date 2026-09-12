> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse/transactionamount](https://developer.apple.com/documentation/intents/inpaybillintentresponse/transactionamount)

# transactionAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The amount of money to transfer to the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionAmount: INPaymentAmount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify how much to debit from the user’s account and apply to the bill payment. Always specify the precise amount to transfer and not just a constant indicating that the user wants to pay the current balance or the minimum due. For example, you might create an [INPaymentAmount](../inpaymentamount.md) object that indicates the minimum amount is $25. During confirmation or at other appropriate times, Siri may display the precise amount to the user.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.

# transactionAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The amount of money to transfer to the payee.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INPaymentAmount * transactionAmount;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INPaymentAmount * transactionAmount;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify how much to debit from the user’s account and apply to the bill payment. Always specify the precise amount to transfer and not just a constant indicating that the user wants to pay the current balance or the minimum due. For example, you might create an [INPaymentAmount](../inpaymentamount.md) object that indicates the minimum amount is $25. During confirmation or at other appropriate times, Siri may display the precise amount to the user.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
