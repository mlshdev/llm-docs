> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/subscriptionperiod](https://developer.apple.com/documentation/storekit/skproduct/subscriptionperiod)

# subscriptionPeriod (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The period details for products that are subscriptions.

> Use Product.subscription.subscriptionPeriod.

## Declaration

```swift
var subscriptionPeriod: SKProductSubscriptionPeriod? { get }
```

<a id="Discussion"></a>

## Discussion

This read-only property is `nil` if the product is not a subscription.

A subscription period is described in terms of a unit and the number of units that make up a single period.

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProduct.PeriodUnit](periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

# subscriptionPeriod (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 11.2+ (deprecated in 18.0) · iPadOS 11.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.13.2+ (deprecated in 15.0) · tvOS 11.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The period details for products that are subscriptions.

> Use Product.subscription.subscriptionPeriod.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SKProductSubscriptionPeriod * subscriptionPeriod;
```

<a id="Discussion"></a>

## Discussion

This read-only property is `nil` if the product is not a subscription.

A subscription period is described in terms of a unit and the number of units that make up a single period.

## See Also

### Getting Subscription Information

- [subscriptionGroupIdentifier](subscriptiongroupidentifier.md): Deprecated. The identifier of the subscription group to which the subscription belongs.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProductPeriodUnit](periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.
