> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:shouldaddstorepayment:for:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:shouldaddstorepayment:for:))

# paymentQueue(\_:shouldAddStorePayment:for:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Tells the observer when a user initiates an in-app purchase from the App Store.

> Use PurchaseIntent.intents.

## Declaration

```swift
optional func paymentQueue(_ queue: SKPaymentQueue, shouldAddStorePayment payment: SKPayment, for product: SKProduct) -> Bool
```

## Parameters

- `queue`: The payment queue the app uses to make the payment request.
- `payment`: The payment request.
- `product`: The in-app purchase product.

<a id="return-value"></a>

## Return Value

Return `true` to continue the transaction in your app.

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)
- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="discussion"></a>

## Discussion

Return `false` to defer or cancel the transaction.

If you return `false`, you can continue the transaction later by manually adding the [SKPayment](../skpayment.md) `payment` to the [SKPaymentQueue](../skpaymentqueue.md) `queue`.

<a id="Discussion"></a>

## Discussion

The system calls this delegate method when the user starts an in-app purchase in the App Store, and the transaction continues in your app. Specifically, if your app is already installed, StoreKit calls this method automatically.

If your app isn’t installed when the user starts the in-app purchase in the App Store, the user receives a notification when the app installation is complete. StoreKit calls this method when the user taps the notification. Otherwise, if the user opens the app manually, StoreKit calls this method only if they open the app soon after they initiate the purchase.

> **Important**

>  To enable promoted in-app purchases, your app needs to use either [PurchaseIntent](../purchaseintent.md) (starting in iOS 16.4) or [paymentQueue(\_:shouldAddStorePayment:for:)](paymentqueue%28__shouldaddstorepayment_for_%29.md) (starting in iOS 11). Don’t use both at the same time. If necessary, use conditional compilation to identify the OS version the app is running in. For more information, see [Running code on a specific platform or OS version](https://developer.apple.com/documentation/xcode/running-code-on-a-specific-version).

For more information, see [Promoting In-App Purchases](../promoting-in-app-purchases.md).

## See Also

### Handling promoted in-app purchases

- [Promoting In-App Purchases](../promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.

# paymentQueue:shouldAddStorePayment:forProduct: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Tells the observer when a user initiates an in-app purchase from the App Store.

> Use PurchaseIntent.intents.

## Declaration

```objectivec
- (BOOL) paymentQueue:(SKPaymentQueue *) queue shouldAddStorePayment:(SKPayment *) payment forProduct:(SKProduct *) product;
```

## Parameters

- `queue`: The payment queue the app uses to make the payment request.
- `payment`: The payment request.
- `product`: The in-app purchase product.

<a id="return-value"></a>

## Return Value

Return `true` to continue the transaction in your app.

## Mentioned In

- [Promoting In-App Purchases](../promoting-in-app-purchases.md)
- [Supporting promoted In-App Purchases in your app](../supporting-promoted-in-app-purchases-in-your-app.md)

<a id="discussion"></a>

## Discussion

Return `false` to defer or cancel the transaction.

If you return `false`, you can continue the transaction later by manually adding the [SKPayment](../skpayment.md) `payment` to the [SKPaymentQueue](../skpaymentqueue.md) `queue`.

<a id="Discussion"></a>

## Discussion

The system calls this delegate method when the user starts an in-app purchase in the App Store, and the transaction continues in your app. Specifically, if your app is already installed, StoreKit calls this method automatically.

If your app isn’t installed when the user starts the in-app purchase in the App Store, the user receives a notification when the app installation is complete. StoreKit calls this method when the user taps the notification. Otherwise, if the user opens the app manually, StoreKit calls this method only if they open the app soon after they initiate the purchase.

> **Important**

>  To enable promoted in-app purchases, your app needs to use either [PurchaseIntent](../purchaseintent.md) (starting in iOS 16.4) or [paymentQueue:shouldAddStorePayment:forProduct:](paymentqueue%28__shouldaddstorepayment_for_%29.md) (starting in iOS 11). Don’t use both at the same time. If necessary, use conditional compilation to identify the OS version the app is running in. For more information, see [Running code on a specific platform or OS version](https://developer.apple.com/documentation/xcode/running-code-on-a-specific-version).

For more information, see [Promoting In-App Purchases](../promoting-in-app-purchases.md).

## See Also

### Handling promoted in-app purchases

- [Promoting In-App Purchases](../promoting-in-app-purchases.md): Show promoted In-App Purchases on your product page and handle purchases that customers initiate on the App Store.
