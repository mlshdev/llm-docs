> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent/status](https://developer.apple.com/documentation/intents/insearchforbillsintent/status)

# status (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The status of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var status: INPaymentStatus { get }
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain bills whose status matches the value in this property. If the value in this property is [INPaymentStatus.unknown](../inpaymentstatus/unknown.md), return all bills regardless of their status.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.

# status (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The status of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INPaymentStatus status;
```

```objectivec
@property (atomic, assign, readonly) INPaymentStatus status;
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain bills whose status matches the value in this property. If the value in this property is [INPaymentStatusUnknown](../inpaymentstatus/unknown.md), return all bills regardless of their status.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
