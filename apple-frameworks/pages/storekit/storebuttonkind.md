> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storebuttonkind](https://developer.apple.com/documentation/storekit/storebuttonkind)

# StoreButtonKind

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A button to display in a store view or subscription store view.

## Declaration

```swift
struct StoreButtonKind
```

<a id="overview"></a>

## Overview

Use the [storeButton(\_:for:)](https://developer.apple.com/documentation/swiftui/view/storebutton%28_:for:%29) modifier on a view to set the visibility of the buttons.

## Topics

### Getting button types for store views

- [cancellation](storebuttonkind/cancellation.md): A type of button that people use to dismiss the current store presentation.
- [restorePurchases](storebuttonkind/restorepurchases.md): A type of button that people use to restore purchases.

### Getting additional button types for subscription store views

- [signIn](storebuttonkind/signin.md): A type of button that people use to sign in.
- [redeemCode](storebuttonkind/redeemcode.md): A type of button that people use to redeem an offer code.
- [policies](storebuttonkind/policies.md): A type of button that people use to display store policies.

## See Also

### Configuring accessory buttons

- [storeButton(\_:for:)](https://developer.apple.com/documentation/swiftui/view/storebutton%28_:for:%29): Specifies the visibility of auxiliary buttons that store view and subscription store view instances may use.
- [subscriptionStoreSignInAction(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstoresigninaction%28_:%29): Adds an action to perform when a person uses the sign-in button on a subscription store view within a view.
- [SubscriptionOfferViewButtonKind](subscriptionofferviewbuttonkind.md)
