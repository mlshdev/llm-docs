> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent/paymentdaterange](https://developer.apple.com/documentation/intents/insearchforbillsintent/paymentdaterange)

# paymentDateRange (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of payment dates in which to search for bills.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var paymentDateRange: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain only bills whose payment date falls within the specified date range. With no specified date range, you must decide how you want to filter results during your search. You should limit the number of search results in some way. For example, you might want to return only the bills paid during the past month or during the past year.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.

# paymentDateRange (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The range of payment dates in which to search for bills.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * paymentDateRange;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * paymentDateRange;
```

<a id="Discussion"></a>

## Discussion

When performing the search, your results should contain only bills whose payment date falls within the specified date range. With no specified date range, you must decide how you want to filter results during your search. You should limit the number of search results in some way. For example, you might want to return only the bills paid during the past month or during the past year.

## See Also

### Getting the Search Attributes

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDateRange](duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [status](status.md): Deprecated. The status of the bill.
