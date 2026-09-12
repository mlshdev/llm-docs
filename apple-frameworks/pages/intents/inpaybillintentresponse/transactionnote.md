> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse/transactionnote](https://developer.apple.com/documentation/intents/inpaybillintentresponse/transactionnote)

# transactionNote (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Notes to include with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var transactionNote: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify any notes to include with the transaction. If the intent object contained transaction notes, you typically copy those notes over into this property.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.

# transactionNote (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Notes to include with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * transactionNote;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * transactionNote;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify any notes to include with the transaction. If the intent object contained transaction notes, you typically copy those notes over into this property.

## See Also

### Providing the Transaction Details

- [billDetails](billdetails.md): Deprecated. The details of the bill to pay.
- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
