> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/paymentstatus](https://developer.apple.com/documentation/intents/inbilldetails/paymentstatus)

# paymentStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The current status of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var paymentStatus: INPaymentStatus { get set }
```

<a id="Discussion"></a>

## Discussion

Specify the current status of a scheduled payment. If the payment date of the bill is in the future, you typically set the payment status to [INPaymentStatus.pending](../inpaymentstatus/pending.md). For bills in the past, set the status to [INPaymentStatus.completed](../inpaymentstatus/completed.md) if payment was successful or to another value if the transaction wasn’t completed. If you haven’t scheduled the bill for payment, set its status to [INPaymentStatus.unknown](../inpaymentstatus/unknown.md).

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [billType](billtype.md): Deprecated. The type of the bill.

# paymentStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The current status of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INPaymentStatus paymentStatus;
```

```objectivec
@property (atomic, assign, readwrite) INPaymentStatus paymentStatus;
```

<a id="Discussion"></a>

## Discussion

Specify the current status of a scheduled payment. If the payment date of the bill is in the future, you typically set the payment status to [INPaymentStatusPending](../inpaymentstatus/pending.md). For bills in the past, set the status to [INPaymentStatusCompleted](../inpaymentstatus/completed.md) if payment was successful or to another value if the transaction wasn’t completed. If you haven’t scheduled the bill for payment, set its status to [INPaymentStatusUnknown](../inpaymentstatus/unknown.md).

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [billType](billtype.md): Deprecated. The type of the bill.
