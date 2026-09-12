> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/periodunit](https://developer.apple.com/documentation/storekit/skproduct/periodunit)

# SKProduct.PeriodUnit (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the duration of an interval, from a day up to a year.

> Use Product.SubscriptionPeriod.Unit.

## Declaration

```swift
enum PeriodUnit
```

<a id="overview"></a>

## Overview

The period unit represents the duration of an interval. Period units are used with the number of units to determine one period in [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md).

## Topics

### Period Units

- [SKProduct.PeriodUnit.day](periodunit/day.md): Deprecated. An interval lasting one day.
- [SKProduct.PeriodUnit.month](periodunit/month.md): Deprecated. An interval lasting one month.
- [SKProduct.PeriodUnit.week](periodunit/week.md): Deprecated. An interval lasting one week.
- [SKProduct.PeriodUnit.year](periodunit/year.md): Deprecated. An interval lasting one year.

### Initializers

- [init(rawValue:)](periodunit/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.

# SKProductPeriodUnit (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Values representing the duration of an interval, from a day up to a year.

> Use Product.SubscriptionPeriod.Unit.

## Declaration

```objectivec
enum SKProductPeriodUnit : NSUInteger;
```

<a id="overview"></a>

## Overview

The period unit represents the duration of an interval. Period units are used with the number of units to determine one period in [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md).

## Topics

### Period Units

- [SKProductPeriodUnitDay](periodunit/day.md): Deprecated. An interval lasting one day.
- [SKProductPeriodUnitMonth](periodunit/month.md): Deprecated. An interval lasting one month.
- [SKProductPeriodUnitWeek](periodunit/week.md): Deprecated. An interval lasting one week.
- [SKProductPeriodUnitYear](periodunit/year.md): Deprecated. An interval lasting one year.

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
