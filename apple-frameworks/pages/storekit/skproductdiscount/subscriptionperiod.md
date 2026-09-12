> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/subscriptionperiod](https://developer.apple.com/documentation/storekit/skproductdiscount/subscriptionperiod)

# subscriptionPeriod (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object that defines the period for the product discount.

> Use Product.SubscriptionOffer.period.

## Declaration

```swift
var subscriptionPeriod: SKProductSubscriptionPeriod { get }
```

<a id="Discussion"></a>

## Discussion

This object represents the duration of a single subscription period. A period is described as a number of units, where a unit can be a [SKProduct.PeriodUnit.day](../skproduct/periodunit/day.md), [SKProduct.PeriodUnit.month](../skproduct/periodunit/month.md), [SKProduct.PeriodUnit.week](../skproduct/periodunit/week.md), or [SKProduct.PeriodUnit.year](../skproduct/periodunit/year.md).

To calculate the total amount of time that the discount price is available to the user, multiply the [subscriptionPeriod](subscriptionperiod.md) by [numberOfPeriods](numberofperiods.md).

> **Note**

>  The subscription period for the discount is independent of the product’s regular subscription period, and does not have to match in units or duration.

## See Also

### Getting the Discount Duration

- [numberOfPeriods](numberofperiods.md): Deprecated. An integer that indicates the number of periods the product discount is available.

# subscriptionPeriod (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object that defines the period for the product discount.

> Use Product.SubscriptionOffer.period.

## Declaration

```objectivec
@property (nonatomic, readonly) SKProductSubscriptionPeriod * subscriptionPeriod;
```

<a id="Discussion"></a>

## Discussion

This object represents the duration of a single subscription period. A period is described as a number of units, where a unit can be a [SKProductPeriodUnitDay](../skproduct/periodunit/day.md), [SKProductPeriodUnitMonth](../skproduct/periodunit/month.md), [SKProductPeriodUnitWeek](../skproduct/periodunit/week.md), or [SKProductPeriodUnitYear](../skproduct/periodunit/year.md).

To calculate the total amount of time that the discount price is available to the user, multiply the [subscriptionPeriod](subscriptionperiod.md) by [numberOfPeriods](numberofperiods.md).

> **Note**

>  The subscription period for the discount is independent of the product’s regular subscription period, and does not have to match in units or duration.

## See Also

### Getting the Discount Duration

- [numberOfPeriods](numberofperiods.md): Deprecated. An integer that indicates the number of periods the product discount is available.
