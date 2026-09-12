> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus/pending](https://developer.apple.com/documentation/intents/inpaymentstatus/pending)

# INPaymentStatus.pending (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app hasn’t sent the payment yet.

## Declaration

```swift
case pending
```

<a id="Discussion"></a>

## Discussion

Use this constant when you have a record of the transaction details but the funds you haven’t transferred the funds yet.

## See Also

### Constants

- [INPaymentStatus.unknown](unknown.md): The payment status is unknown.
- [INPaymentStatus.completed](completed.md): The app made the payment.
- [INPaymentStatus.canceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatus.failed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatus.unpaid](unpaid.md): The bill is currently unpaid.

# INPaymentStatusPending (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The app hasn’t sent the payment yet.

## Declaration

```objectivec
INPaymentStatusPending
```

<a id="Discussion"></a>

## Discussion

Use this constant when you have a record of the transaction details but the funds you haven’t transferred the funds yet.

## See Also

### Constants

- [INPaymentStatusUnknown](unknown.md): The payment status is unknown.
- [INPaymentStatusCompleted](completed.md): The app made the payment.
- [INPaymentStatusCanceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatusFailed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatusUnpaid](unpaid.md): The bill is currently unpaid.
