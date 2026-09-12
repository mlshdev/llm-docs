> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus/unknown](https://developer.apple.com/documentation/intents/inpaymentstatus/unknown)

# INPaymentStatus.unknown (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The payment status is unknown.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

Use this constant when the financial transaction has not yet occurred and you are unable to determine its state.

## See Also

### Constants

- [INPaymentStatus.pending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatus.completed](completed.md): The app made the payment.
- [INPaymentStatus.canceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatus.failed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatus.unpaid](unpaid.md): The bill is currently unpaid.

# INPaymentStatusUnknown (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The payment status is unknown.

## Declaration

```objectivec
INPaymentStatusUnknown
```

<a id="Discussion"></a>

## Discussion

Use this constant when the financial transaction has not yet occurred and you are unable to determine its state.

## See Also

### Constants

- [INPaymentStatusPending](pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatusCompleted](completed.md): The app made the payment.
- [INPaymentStatusCanceled](canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatusFailed](failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatusUnpaid](unpaid.md): The bill is currently unpaid.
