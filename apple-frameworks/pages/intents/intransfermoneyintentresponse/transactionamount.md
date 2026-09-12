> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponse/transactionamount](https://developer.apple.com/documentation/intents/intransfermoneyintentresponse/transactionamount)

# transactionAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The amount of money to transfer between accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionAmount: INPaymentAmount? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the precise amount to transfer between the user’s accounts. During confirmation or at other appropriate times, Siri may display this value to the user.

## See Also

### Providing the Transaction Details

- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transfer is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](transferfee.md): Deprecated. The fee charged for performing the transaction.

# transactionAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The amount of money to transfer between accounts.

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

Use this property to specify the precise amount to transfer between the user’s accounts. During confirmation or at other appropriate times, Siri may display this value to the user.

## See Also

### Providing the Transaction Details

- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transfer is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](transferfee.md): Deprecated. The fee charged for performing the transaction.
