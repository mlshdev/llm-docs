> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent/billpayee](https://developer.apple.com/documentation/intents/insearchforbillsintent/billpayee)

# billPayee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The recipient of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var billPayee: INBillPayee? { get }
```

<a id="Discussion"></a>

## Discussion

The payee is an entity that generates bills for the user and receives payment for those bills. The user must register all payees in advance with your app. Search results should contain only bills associated with the specified payee. If the [INBillPayee](../inbillpayee.md) object doesn’t contain enough information to identify a payee, don’t filter your search results based on the payee.

## See Also

### Getting the Search Attributes

- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.

# billPayee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The recipient of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INBillPayee * billPayee;
```

```objectivec
@property (atomic, copy, readonly, nullable) INBillPayee * billPayee;
```

<a id="Discussion"></a>

## Discussion

The payee is an entity that generates bills for the user and receives payment for those bills. The user must register all payees in advance with your app. Search results should contain only bills associated with the specified payee. If the [INBillPayee](../inbillpayee.md) object doesn’t contain enough information to identify a payee, don’t filter your search results based on the payee.

## See Also

### Getting the Search Attributes

- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.
