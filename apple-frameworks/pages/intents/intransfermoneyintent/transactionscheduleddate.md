> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intransfermoneyintent/transactionscheduleddate

# transactionScheduledDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The date on which to transfer the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var transactionScheduledDate: INDateComponentsRange? { get }
```

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer.
- [transactionNote](transactionnote.md): Deprecated. An optional note associated with the transaction.

# transactionScheduledDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The date on which to transfer the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * transactionScheduledDate;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * transactionScheduledDate;
```

## See Also

### Getting the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount to transfer.
- [transactionNote](transactionnote.md): Deprecated. An optional note associated with the transaction.
