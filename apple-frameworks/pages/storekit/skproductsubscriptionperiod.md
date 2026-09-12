> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproductsubscriptionperiod](https://developer.apple.com/documentation/storekit/skproductsubscriptionperiod)

# SKProductSubscriptionPeriod (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object containing the subscription period duration information.

> Use Product.SubscriptionPeriod.

## Declaration

```swift
class SKProductSubscriptionPeriod
```

<a id="overview"></a>

## Overview

A subscription period is a duration of time defined as some number of units, where a unit can be a [SKProduct.PeriodUnit.day](skproduct/periodunit/day.md), [SKProduct.PeriodUnit.week](skproduct/periodunit/week.md), [SKProduct.PeriodUnit.month](skproduct/periodunit/month.md), or [SKProduct.PeriodUnit.year](skproduct/periodunit/year.md).

For example, a subscription period of two weeks has a [unit](skproductsubscriptionperiod/unit.md) of a [SKProduct.PeriodUnit.week](skproduct/periodunit/week.md), and a  [numberOfUnits](skproductsubscriptionperiod/numberofunits.md) equal to `2`.

## Topics

### Getting Subscription Period Details

- [numberOfUnits](skproductsubscriptionperiod/numberofunits.md): Deprecated. The number of units per subscription period.
- [unit](skproductsubscriptionperiod/unit.md): Deprecated. The increment of time that a subscription period is specified in.
- [SKProduct.PeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](skproduct/subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](skproduct/subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProduct.PeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

# SKProductSubscriptionPeriod (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An object containing the subscription period duration information.

> Use Product.SubscriptionPeriod.

## Declaration

```objectivec
@interface SKProductSubscriptionPeriod : NSObject
```

<a id="overview"></a>

## Overview

A subscription period is a duration of time defined as some number of units, where a unit can be a [SKProductPeriodUnitDay](skproduct/periodunit/day.md), [SKProductPeriodUnitWeek](skproduct/periodunit/week.md), [SKProductPeriodUnitMonth](skproduct/periodunit/month.md), or [SKProductPeriodUnitYear](skproduct/periodunit/year.md).

For example, a subscription period of two weeks has a [unit](skproductsubscriptionperiod/unit.md) of a [SKProductPeriodUnitWeek](skproduct/periodunit/week.md), and a  [numberOfUnits](skproductsubscriptionperiod/numberofunits.md) equal to `2`.

## Topics

### Getting Subscription Period Details

- [numberOfUnits](skproductsubscriptionperiod/numberofunits.md): Deprecated. The number of units per subscription period.
- [unit](skproductsubscriptionperiod/unit.md): Deprecated. The increment of time that a subscription period is specified in.
- [SKProductPeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](skproduct/subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [subscriptionPeriod](skproduct/subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductPeriodUnit](skproduct/periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.
