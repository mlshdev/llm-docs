> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/testing-resubscribing-from-the-subscriptions-page](https://developer.apple.com/documentation/storekit/testing-resubscribing-from-the-subscriptions-page)

# Testing resubscribing from the subscriptions page (Swift)

**Framework:** StoreKit  
**Kind:** Article

Verify that your app can reactivate an expired subscription by receiving a transaction callback or inspecting an updated receipt.

<a id="overview"></a>

## Overview

Customers can manage their active subscriptions, as well as their expired subscriptions for up to a year after expiry, on the Subscriptions page in iOS, tvOS, iPadOS, and macOS. From this page, customers can upgrade, downgrade, cancel, or change the type of their subscriptions.

In this test scenario, the customer resubscribes to an expired subscription from the Subscriptions page in the App Store.

<a id="Set-up-testing"></a>

### Set up testing

This test case requires one or more subscriptions configured in App Store Connect and an expired subscription for your Sandbox Apple Account. If you don’t already have an expired subscription, purchase an auto-renewable subscription and let it expire.

<a id="Begin-testing"></a>

### Begin testing

To test resubscribing from the Subscriptions page:

1. On the test iOS device, open Settings \> Developer.
2. In the Sandbox Account section, tap your highlighted Sandbox Apple Account, and tap Manage.
3. On devices running iOS 16 or later, tap Subscriptions on the Account Settings sheet.
4. In the sandbox Subscriptions page, select the expired subscription you want to reactivate. The subscription products that appear are those you configured in App Store Connect under the same subscription group.
5. Select a subscription product to resubscribe to.
6. To complete the purchase, authenticate the payment sheet that appears.
7. Open your app.
8. In Xcode, verify that your [SKPaymentTransactionObserver](skpaymenttransactionobserver.md) gets a callback on [paymentQueue(\_:updatedTransactions:)](skpaymenttransactionobserver/paymentqueue%28__updatedtransactions_%29.md) with a transaction in the [SKPaymentTransactionState.purchased](skpaymenttransactionstate/purchased.md) state.
9. Check that your app retrieves and verifies the app receipt. Verify that the successful transaction is in the receipt.
10. Check that your app makes the in-app purchase available and updates the subscriber’s status.
11. In Xcode, check that your app calls [finishTransaction(\_:)](skpaymentqueue/finishtransaction%28__%29.md). For more information, see [Finishing a transaction](finishing-a-transaction.md).

<a id="Conclude-testing"></a>

### Conclude testing

This test case requires no cleanup. For auto-renewable subscriptions, you can perform the test again when the subscription expires.

## See Also

### Subscriptions

- [Testing an auto-renewable subscription](testing-an-auto-renewable-subscription.md): Verify that your app handles a subscription lapse properly using the accelerated time rates within the sandbox environment.
- [Testing disabling auto-renew](testing-disabling-auto-renew.md): Verify that your app receives subscription updates when a user cancels a subscription by verifying the receipt or receiving a notification.

# Testing resubscribing from the subscriptions page (Objective-C)

**Framework:** StoreKit  
**Kind:** Article

Verify that your app can reactivate an expired subscription by receiving a transaction callback or inspecting an updated receipt.

<a id="overview"></a>

## Overview

Customers can manage their active subscriptions, as well as their expired subscriptions for up to a year after expiry, on the Subscriptions page in iOS, tvOS, iPadOS, and macOS. From this page, customers can upgrade, downgrade, cancel, or change the type of their subscriptions.

In this test scenario, the customer resubscribes to an expired subscription from the Subscriptions page in the App Store.

<a id="Set-up-testing"></a>

### Set up testing

This test case requires one or more subscriptions configured in App Store Connect and an expired subscription for your Sandbox Apple Account. If you don’t already have an expired subscription, purchase an auto-renewable subscription and let it expire.

<a id="Begin-testing"></a>

### Begin testing

To test resubscribing from the Subscriptions page:

1. On the test iOS device, open Settings \> Developer.
2. In the Sandbox Account section, tap your highlighted Sandbox Apple Account, and tap Manage.
3. On devices running iOS 16 or later, tap Subscriptions on the Account Settings sheet.
4. In the sandbox Subscriptions page, select the expired subscription you want to reactivate. The subscription products that appear are those you configured in App Store Connect under the same subscription group.
5. Select a subscription product to resubscribe to.
6. To complete the purchase, authenticate the payment sheet that appears.
7. Open your app.
8. In Xcode, verify that your [SKPaymentTransactionObserver](skpaymenttransactionobserver.md) gets a callback on [paymentQueue:updatedTransactions:](skpaymenttransactionobserver/paymentqueue%28__updatedtransactions_%29.md) with a transaction in the [SKPaymentTransactionStatePurchased](skpaymenttransactionstate/purchased.md) state.
9. Check that your app retrieves and verifies the app receipt. Verify that the successful transaction is in the receipt.
10. Check that your app makes the in-app purchase available and updates the subscriber’s status.
11. In Xcode, check that your app calls [finishTransaction:](skpaymentqueue/finishtransaction%28__%29.md). For more information, see [Finishing a transaction](finishing-a-transaction.md).

<a id="Conclude-testing"></a>

### Conclude testing

This test case requires no cleanup. For auto-renewable subscriptions, you can perform the test again when the subscription expires.

## See Also

### Subscriptions

- [Testing an auto-renewable subscription](testing-an-auto-renewable-subscription.md): Verify that your app handles a subscription lapse properly using the accelerated time rates within the sandbox environment.
- [Testing disabling auto-renew](testing-disabling-auto-renew.md): Verify that your app receives subscription updates when a user cancels a subscription by verifying the receipt or receiving a notification.
