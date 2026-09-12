> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus/failed](https://developer.apple.com/documentation/intents/inpaymentstatus/failed)

# INPaymentStatus.failed (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The transaction failed and the funds were not transferred.

## Declaration

```swift
case failed
```

<a id="Discussion"></a>

## Discussion

Use this constant to indicate that there was an error in processing the transaction.

## See Also

### Constants

- [INPaymentStatus.unknown](unknown.md): The payment status is unknown.
- [INPaymentStatus.pending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatus.completed](completed.md): The app made the payment.
- [INPaymentStatus.canceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatus.unpaid](unpaid.md): The bill is currently unpaid.

# INPaymentStatusFailed (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The transaction failed and the funds were not transferred.

## Declaration

```objectivec
INPaymentStatusFailed
```

<a id="Discussion"></a>

## Discussion

Use this constant to indicate that there was an error in processing the transaction.

## See Also

### Constants

- [INPaymentStatusUnknown](unknown.md): The payment status is unknown.
- [INPaymentStatusPending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatusCompleted](completed.md): The app made the payment.
- [INPaymentStatusCanceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatusUnpaid](unpaid.md): The bill is currently unpaid.
