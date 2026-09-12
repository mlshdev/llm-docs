> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintentresponse/billdetails](https://developer.apple.com/documentation/intents/inpaybillintentresponse/billdetails)

# billDetails (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The details of the bill to pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var billDetails: INBillDetails? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the bill, including the amount due, the due date, the payee, and the type of the bill. Always provide as much detail as possible. It’s your responsibility to gather information about payees and any bills that the user needs to pay in your app. You must then make the payee and bill information available to your Intents extension so that you can fill in this property.

## See Also

### Providing the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.

# billDetails (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The details of the bill to pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INBillDetails * billDetails;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INBillDetails * billDetails;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the details of the bill, including the amount due, the due date, the payee, and the type of the bill. Always provide as much detail as possible. It’s your responsibility to gather information about payees and any bills that the user needs to pay in your app. You must then make the payee and bill information available to your Intents extension so that you can fill in this property.

## See Also

### Providing the Transaction Details

- [transactionAmount](transactionamount.md): Deprecated. The amount of money to transfer to the payee.
- [transactionScheduledDate](transactionscheduleddate.md): Deprecated. The date on which the transaction is to occur.
- [transactionNote](transactionnote.md): Deprecated. Notes to include with the transaction.
