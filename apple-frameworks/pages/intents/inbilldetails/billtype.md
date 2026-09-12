> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/billtype](https://developer.apple.com/documentation/intents/inbilldetails/billtype)

# billType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var billType: INBillType { get set }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to categorize the bill.

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.

# billType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INBillType billType;
```

```objectivec
@property (atomic, assign, readwrite) INBillType billType;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to categorize the bill.

## See Also

### Accessing the Bill Information

- [billPayee](billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.
