> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductdiscount/numberofperiods](https://developer.apple.com/documentation/storekit/skproductdiscount/numberofperiods)

# numberOfPeriods (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An integer that indicates the number of periods the product discount is available.

> Use Product.SubscriptionOffer.periodCount.

## Declaration

```swift
var numberOfPeriods: Int { get }
```

<a id="Discussion"></a>

## Discussion

A product discount may be available for one or more periods. The period, defined in [subscriptionPeriod](subscriptionperiod.md), is a set number of days, weeks, months, or years.

The total length of time that a product discount is available is calculated by multiplying the [numberOfPeriods](numberofperiods.md) by the period.

Note that the discount period is independent of the product subscription period.

## See Also

### Getting the Discount Duration

- [subscriptionPeriod](subscriptionperiod.md): Deprecated. An object that defines the period for the product discount.

# numberOfPeriods (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An integer that indicates the number of periods the product discount is available.

> Use Product.SubscriptionOffer.periodCount.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfPeriods;
```

<a id="Discussion"></a>

## Discussion

A product discount may be available for one or more periods. The period, defined in [subscriptionPeriod](subscriptionperiod.md), is a set number of days, weeks, months, or years.

The total length of time that a product discount is available is calculated by multiplying the [numberOfPeriods](numberofperiods.md) by the period.

Note that the discount period is independent of the product subscription period.

## See Also

### Getting the Discount Duration

- [subscriptionPeriod](subscriptionperiod.md): Deprecated. An object that defines the period for the product discount.
