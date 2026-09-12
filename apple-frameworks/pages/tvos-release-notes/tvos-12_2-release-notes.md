> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-12_2-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-12_2-release-notes)

# tvOS 12.2 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The tvOS 12.2 SDK provides support for developing tvOS apps for Apple TV devices running tvOS 12.2. The SDK comes bundled with Xcode 10.2 available from the Mac App Store. For information on the compatibility requirements for Xcode 10.2, see [Xcode Release Notes](https://developer.apple.com/documentation/xcode-release-notes).

<a id="App-Store"></a>

### App Store

<a id="Promoting-Your-Subscriptions-with-New-Offers"></a>

#### Promoting Your Subscriptions with New Offers

StoreKit now supports subscription offers in addition to introductory offers, so apps with auto-renewable subscriptions can provide a discounted price for a specific duration for existing and previously subscribed customers. You can use subscription offers to help win back subscribers who have canceled their subscriptions or promote an upgrade to another subscription at a special price. Customers can accept the offer even if they’ve already completed an introductory offer.

StoreKit introduces a new array of [SKProductDiscount](../storekit/skproductdiscount.md) objects within the [SKProduct](../storekit/skproduct.md) class to display offers within your app to eligible customers. Add a new [SKPaymentDiscount](../storekit/skpaymentdiscount.md) object within the [SKPayment](../storekit/skpayment.md) class to allow these offers to be accepted by the customer.

## See Also

### tvOS 12

- [tvOS 12.4 Release Notes](tvos-12_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12.1.2 Release Notes](tvos-12_1_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12.1.1 Release Notes](tvos-12_1_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 12 Release Notes](tvos-12-release-notes.md): Update your apps to use new features, and test your apps against API changes.
