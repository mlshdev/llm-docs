> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintent/transactionnote](https://developer.apple.com/documentation/intents/intransfermoneyintent/transactionnote)

# transactionNote (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

An optional note associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var transactionNote: String? { get }
```

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which to transfer the funds.

# transactionNote (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

An optional note associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * transactionNote;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * transactionNote;
```

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which to transfer the funds.
