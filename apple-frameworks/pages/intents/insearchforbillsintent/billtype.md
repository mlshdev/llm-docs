> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent/billtype](https://developer.apple.com/documentation/intents/insearchforbillsintent/billtype)

# billType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var billType: INBillType { get }
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain bills whose type matches the value in this property. If the value in this property is [INBillType.unknown](../inbilltype/unknown.md), return all bills regardless of their type.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.

# billType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INBillType billType;
```

```objectivec
@property (atomic, assign, readonly) INBillType billType;
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain bills whose type matches the value in this property. If the value in this property is [INBillTypeUnknown](../inbilltype/unknown.md), return all bills regardless of their type.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.
