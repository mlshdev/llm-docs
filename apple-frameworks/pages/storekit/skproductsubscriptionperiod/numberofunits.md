> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsubscriptionperiod/numberofunits](https://developer.apple.com/documentation/storekit/skproductsubscriptionperiod/numberofunits)

# numberOfUnits (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The number of units per subscription period.

> Use Product.SubscriptionPeriod.

## Declaration

```swift
var numberOfUnits: Int { get }
```

<a id="Discussion"></a>

## Discussion

A subscription period duration is calculated by multiplying the number of units by the [unit](unit.md).

For example, if the number of units is `3`, and the unit is [SKProduct.PeriodUnit.month](../skproduct/periodunit/month.md), the subscription period is 3 months.

## See Also

### Getting Subscription Period Details

- [unit](unit.md): Deprecated. The increment of time that a subscription period is specified in.
- [SKProduct.PeriodUnit](../skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

# numberOfUnits (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The number of units per subscription period.

> Use Product.SubscriptionPeriod.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfUnits;
```

<a id="Discussion"></a>

## Discussion

A subscription period duration is calculated by multiplying the number of units by the [unit](unit.md).

For example, if the number of units is `3`, and the unit is [SKProductPeriodUnitMonth](../skproduct/periodunit/month.md), the subscription period is 3 months.

## See Also

### Getting Subscription Period Details

- [unit](unit.md): Deprecated. The increment of time that a subscription period is specified in.
- [SKProductPeriodUnit](../skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.
