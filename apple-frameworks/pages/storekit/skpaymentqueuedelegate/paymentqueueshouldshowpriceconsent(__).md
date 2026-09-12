> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentqueuedelegate/paymentqueueshouldshowpriceconsent(_:)](https://developer.apple.com/documentation/storekit/skpaymentqueuedelegate/paymentqueueshouldshowpriceconsent(_:))

# paymentQueueShouldShowPriceConsent(\_:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 18.0) · iPadOS 13.4+ (deprecated in 18.0) · Mac Catalyst 13.4+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Asks the delegate whether to immediately display a price consent sheet.

> Use Message.messages and Message.display(in:).

## Declaration

```swift
optional func paymentQueueShouldShowPriceConsent(_ paymentQueue: SKPaymentQueue) -> Bool
```

## Mentioned In

- [Handling Subscriptions Billing](../handling-subscriptions-billing.md)

<a id="Discussion"></a>

## Discussion

This method applies only to auto-renewable subscription price increases that require customer consent.

The default return value for this optional method is `true`. By default, the system displays the price consent sheet when you increase the subscription price in App Store Connect and the subscriber hasn’t yet taken action.

The system calls your delegate’s method, if appropriate, when you add the first observer to [SKPaymentQueue](../skpaymentqueue.md), and any time the app comes to foreground.

If you return `false`, the system won’t show the price consent sheet. You can choose to display it later by calling [showPriceConsentIfNeeded()](../skpaymentqueue/showpriceconsentifneeded%28%29.md). You may want to delay showing the sheet if it would interrupt your user’s interaction in your app.

> **Note**

>  When you increase the price of an auto-renewable subscription and it requires customer consent, Apple informs affected subscribers through an email, push notification, and an in-app price consent sheet and asks them to agree to the new price. If they don’t agree or take no action, their subscription expires at the end of their current billing cycle. For more information, see [Managing Prices](https://developer.apple.com/app-store/subscriptions/#managing-prices-for-existing-subscribers) and [Manage pricing for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/devc9870599e).

In Mac apps built with Mac Catalyst, the system doesn’t show the price consent sheet regardless of the return value.

## See Also

### Related Documentation

- [showPriceConsentIfNeeded()](../skpaymentqueue/showpriceconsentifneeded%28%29.md): Deprecated. Asks the system to display the price consent sheet if the user hasn’t yet responded to a subscription price increase.

# paymentQueueShouldShowPriceConsent: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 18.0) · iPadOS 13.4+ (deprecated in 18.0) · Mac Catalyst 13.4+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Asks the delegate whether to immediately display a price consent sheet.

> Use Message.messages and Message.display(in:).

## Declaration

```objectivec
- (BOOL) paymentQueueShouldShowPriceConsent:(SKPaymentQueue *) paymentQueue;
```

## Mentioned In

- [Handling Subscriptions Billing](../handling-subscriptions-billing.md)

<a id="Discussion"></a>

## Discussion

This method applies only to auto-renewable subscription price increases that require customer consent.

The default return value for this optional method is `true`. By default, the system displays the price consent sheet when you increase the subscription price in App Store Connect and the subscriber hasn’t yet taken action.

The system calls your delegate’s method, if appropriate, when you add the first observer to [SKPaymentQueue](../skpaymentqueue.md), and any time the app comes to foreground.

If you return `false`, the system won’t show the price consent sheet. You can choose to display it later by calling [showPriceConsentIfNeeded](../skpaymentqueue/showpriceconsentifneeded%28%29.md). You may want to delay showing the sheet if it would interrupt your user’s interaction in your app.

> **Note**

>  When you increase the price of an auto-renewable subscription and it requires customer consent, Apple informs affected subscribers through an email, push notification, and an in-app price consent sheet and asks them to agree to the new price. If they don’t agree or take no action, their subscription expires at the end of their current billing cycle. For more information, see [Managing Prices](https://developer.apple.com/app-store/subscriptions/#managing-prices-for-existing-subscribers) and [Manage pricing for auto-renewable subscriptions](https://help.apple.com/app-store-connect/#/devc9870599e).

In Mac apps built with Mac Catalyst, the system doesn’t show the price consent sheet regardless of the return value.

## See Also

### Related Documentation

- [showPriceConsentIfNeeded](../skpaymentqueue/showpriceconsentifneeded%28%29.md): Deprecated. Asks the system to display the price consent sheet if the user hasn’t yet responded to a subscription price increase.
