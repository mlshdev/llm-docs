> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse/transactionscheduleddate](https://developer.apple.com/documentation/intents/inpaybillintentresponse/transactionscheduleddate)

# transactionScheduledDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The date on which the transaction is to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionScheduledDate: INDateComponentsRange? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the window of time during to transfer funds from the user’s account to the designated payee. The end date of the specified range must always be in the future. Be as specific as you can when specifying the transaction dates to assure the user of on time payment of the bill.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.

# transactionScheduledDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The date on which the transaction is to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INDateComponentsRange * transactionScheduledDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INDateComponentsRange * transactionScheduledDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the window of time during to transfer funds from the user’s account to the designated payee. The end date of the specified range must always be in the future. Be as specific as you can when specifying the transaction dates to assure the user of on time payment of the bill.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
