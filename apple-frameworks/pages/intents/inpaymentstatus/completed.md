> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus/completed](https://developer.apple.com/documentation/intents/inpaymentstatus/completed)

# INPaymentStatus.completed (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app made the payment.

## Declaration

```swift
case completed
```

<a id="Discussion"></a>

## Discussion

Use this constant when the funds have been successfully transferred to the payee’s account.

## See Also

### Constants

- [INPaymentStatus.unknown](unknown.md): The payment status is unknown.
- [INPaymentStatus.pending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatus.canceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatus.failed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatus.unpaid](unpaid.md): The bill is currently unpaid.

# INPaymentStatusCompleted (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app made the payment.

## Declaration

```objectivec
INPaymentStatusCompleted
```

<a id="Discussion"></a>

## Discussion

Use this constant when the funds have been successfully transferred to the payee’s account.

## See Also

### Constants

- [INPaymentStatusUnknown](unknown.md): The payment status is unknown.
- [INPaymentStatusPending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatusCanceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatusFailed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatusUnpaid](unpaid.md): The bill is currently unpaid.
