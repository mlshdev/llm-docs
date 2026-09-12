> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/paymentdate](https://developer.apple.com/documentation/intents/inbilldetails/paymentdate)

# paymentDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The scheduled payment date for the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var paymentDate: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the scheduled payment date for the bill. When specifying a payment date, be as specific as possible. If you’re unable to give a precise date and time when payment is to occur, you may specify a date range indicating the window for payment to occur. Always ensure that you make payments at the specified time.

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.

# paymentDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The scheduled payment date for the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDateComponents * paymentDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDateComponents * paymentDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the scheduled payment date for the bill. When specifying a payment date, be as specific as possible. If you’re unable to give a precise date and time when payment is to occur, you may specify a date range indicating the window for payment to occur. Always ensure that you make payments at the specified time.

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
