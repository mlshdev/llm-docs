> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsubscriptionperiod/unit](https://developer.apple.com/documentation/storekit/skproductsubscriptionperiod/unit)

# unit (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The increment of time that a subscription period is specified in.

> Use Product.SubscriptionPeriod.

## Declaration

```swift
var unit: SKProduct.PeriodUnit { get }
```

<a id="Discussion"></a>

## Discussion

The units used to specify a subscription period include day, week, month, and year, as defined in [SKProduct.PeriodUnit](../skproduct/periodunit.md).

To calculate the duration of one subscription period, multiply the [unit](unit.md) by the number of units ([numberOfUnits](numberofunits.md)).

## See Also

### Getting Subscription Period Details

- [numberOfUnits](numberofunits.md): Deprecated. The number of units per subscription period.
- [SKProduct.PeriodUnit](../skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

# unit (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The increment of time that a subscription period is specified in.

> Use Product.SubscriptionPeriod.

## Declaration

```objectivec
@property (nonatomic, readonly) SKProductPeriodUnit unit;
```

<a id="Discussion"></a>

## Discussion

The units used to specify a subscription period include day, week, month, and year, as defined in [SKProductPeriodUnit](../skproduct/periodunit.md).

To calculate the duration of one subscription period, multiply the [unit](unit.md) by the number of units ([numberOfUnits](numberofunits.md)).

## See Also

### Getting Subscription Period Details

- [numberOfUnits](numberofunits.md): Deprecated. The number of units per subscription period.
- [SKProductPeriodUnit](../skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.
