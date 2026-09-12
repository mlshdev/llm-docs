> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus/canceled](https://developer.apple.com/documentation/intents/inpaymentstatus/canceled)

# INPaymentStatus.canceled (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app canceled the transaction before transferring the funds.

## Declaration

```swift
case canceled
```

## See Also

### Constants

- [INPaymentStatus.unknown](unknown.md): The payment status is unknown.
- [INPaymentStatus.pending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatus.completed](completed.md): The app made the payment.
- [INPaymentStatus.failed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatus.unpaid](unpaid.md): The bill is currently unpaid.

# INPaymentStatusCanceled (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app canceled the transaction before transferring the funds.

## Declaration

```objectivec
INPaymentStatusCanceled
```

## See Also

### Constants

- [INPaymentStatusUnknown](unknown.md): The payment status is unknown.
- [INPaymentStatusPending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatusCompleted](completed.md): The app made the payment.
- [INPaymentStatusFailed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatusUnpaid](unpaid.md): The bill is currently unpaid.
