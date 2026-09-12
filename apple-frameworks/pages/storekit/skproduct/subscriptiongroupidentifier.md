> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skproduct/subscriptiongroupidentifier](https://developer.apple.com/documentation/storekit/skproduct/subscriptiongroupidentifier)

# subscriptionGroupIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · tvOS 12.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The identifier of the subscription group to which the subscription belongs.

> Use Product.subscription.subscriptionGroupID.

## Declaration

```swift
var subscriptionGroupIdentifier: String? { get }
```

## Mentioned In

- [Handling Subscriptions Billing](../handling-subscriptions-billing.md)

<a id="Discussion"></a>

## Discussion

Auto-renewable subscriptions always belong to a subscription group. You create the subscription group identifiers in App Store Connect before you create and add an auto-renewable subscription. For more information about subscription groups, see [Offer auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev75708c031).

This property is `nil` if the [SKProduct](../skproduct.md) isn’t an auto-renewable subscription.

## See Also

### Getting Subscription Information

- [subscriptionPeriod](subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProduct.PeriodUnit](periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.

# subscriptionGroupIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · tvOS 12.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

The identifier of the subscription group to which the subscription belongs.

> Use Product.subscription.subscriptionGroupID.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * subscriptionGroupIdentifier;
```

## Mentioned In

- [Handling Subscriptions Billing](../handling-subscriptions-billing.md)

<a id="Discussion"></a>

## Discussion

Auto-renewable subscriptions always belong to a subscription group. You create the subscription group identifiers in App Store Connect before you create and add an auto-renewable subscription. For more information about subscription groups, see [Offer auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/dev75708c031).

This property is `nil` if the [SKProduct](../skproduct.md) isn’t an auto-renewable subscription.

## See Also

### Getting Subscription Information

- [subscriptionPeriod](subscriptionperiod.md): Deprecated. The period details for products that are subscriptions.
- [SKProductSubscriptionPeriod](../skproductsubscriptionperiod.md): Deprecated. An object containing the subscription period duration information.
- [SKProductPeriodUnit](periodunit.md): Deprecated. Values representing the duration of an interval, from a day up to a year.
