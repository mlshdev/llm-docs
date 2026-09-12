> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintentresponse/transactionscheduleddate](https://developer.apple.com/documentation/intents/intransfermoneyintentresponse/transactionscheduleddate)

# transactionScheduledDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The date on which the transfer is to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionScheduledDate: INDateComponentsRange? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the window of time during which to transfer the funds between the accounts. The end date of the specified range must always be in the future. Be as specific as you can when specifying the transaction dates.

## See Also

### Providing the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer between accounts.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](transferfee.md): Deprecated. The fee charged for performing the transaction.

# transactionScheduledDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The date on which the transfer is to occur.

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

Use this property to specify the window of time during which to transfer the funds between the accounts. The end date of the specified range must always be in the future. Be as specific as you can when specifying the transaction dates.

## See Also

### Providing the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer between accounts.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
- [transferFee](transferfee.md): Deprecated. The fee charged for performing the transaction.
