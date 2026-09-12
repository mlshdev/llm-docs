> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/preferredsubscriptionoffer(_:)](https://developer.apple.com/documentation/swiftui/view/preferredsubscriptionoffer(_:))

# preferredSubscriptionOffer(\_:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Selects a subscription offer to apply to a purchase that a customer makes from a subscription store view, a store view, or a product view.

## Declaration

```swift
nonisolated func preferredSubscriptionOffer(_ offer: @escaping (Product, Product.SubscriptionInfo, [Product.SubscriptionOffer]) -> Product.SubscriptionOffer?) -> some View

```

## Parameters

- `offer`: A closure that returns the subscription offer to apply to the customer’s purchase.

<a id="discussion"></a>

## Discussion

Subscription stores within this view use the subscription offer you specify to configure the appearance of the subscription plans. [ProductView](https://developer.apple.com/documentation/storekit/productview) doesn’t display the terms of a subscription offer in the UI, but you can still use this modifier to declare which offer product views within a view hierarchy apply to a purchase.

Offer preferences that use this modifier override offer preferences from ancestor views.

> **Important**

> Subscription offers in the [Product.SubscriptionInfo](https://developer.apple.com/documentation/storekit/product/subscriptioninfo) object may contain offers the customer isn’t eligible for. Instead, use the eligibleOffers argument of the offer closure to select the offers to apply to the customer’s purchase.

If StoreKit determines that the customer is eligible for more than one offer, the system calls the `offer` closure before it draws the product on the subscription store view, or before the customer initiates a purchase on a store view or product view. Return the subscription offer to apply to the product, if any, to have system-provided UI reflect the discounted pricing terms under the selected offer.

If your `offer` closure returns nil, the system selects the introductory offer, if it exists, and if the customer is eligible for it.

The following code example sets the preferred subscription offer to the first offer the customer is eligible for:

```swift
import SwiftUI
import StoreKit

@available(iOS 18.0, macOS 15.0, tvOS 18.0, watchOS 11.0, visionOS 2.0, *)
struct MyView: View {

    var body: some View {
        SubscriptionStoreView(groupID: groupIdentifier)
            .preferredSubscriptionOffer { product, subscription, eligibleOffers in
                // Determine the offer to use from the list of eligibleOffers.
                // This example just uses the first offer.
                return eligibleOffers.first
            }
    }
}
```

## See Also

### Interacting with the App Store and Apple Music

- [appStoreOverlay(isPresented:configuration:)](appstoreoverlay%28ispresented_configuration_%29.md): Presents a StoreKit overlay when a given condition is true.
- [manageSubscriptionsSheet(isPresented:)](managesubscriptionssheet%28ispresented_%29.md)
- [refundRequestSheet(for:isPresented:onDismiss:)](refundrequestsheet%28for_ispresented_ondismiss_%29.md): Display the refund request sheet for the given transaction.
- [offerCodeRedemption(options:isPresented:onCompletion:)](offercoderedemption%28options_ispresented_oncompletion_%29.md): Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.
- [musicPicker(isPresented:title:selection:)](musicpicker%28ispresented_title_selection_%29.md): Presents a music picker to select items from the Apple Music catalog and the user’s music library.
- [musicSubscriptionOffer(isPresented:options:onLoadCompletion:)](musicsubscriptionoffer%28ispresented_options_onloadcompletion_%29.md): Initiates the process of presenting a sheet with subscription offers for Apple Music when the `isPresented` binding is `true`.
- [currentEntitlementTask(for:priority:action:)](currententitlementtask%28for_priority_action_%29.md): Declares the view as dependent on the entitlement of an In-App Purchase product, and returns a modified view.
- [inAppPurchaseOptions(\_:)](inapppurchaseoptions%28__%29.md): Add a function to call before initiating a purchase from StoreKit view within this view, providing a set of options for the purchase.
- [manageSubscriptionsSheet(isPresented:subscriptionGroupID:)](managesubscriptionssheet%28ispresented_subscriptiongroupid_%29.md)
- [onInAppPurchaseCompletion(perform:)](oninapppurchasecompletion%28perform_%29.md): Add an action to perform when a purchase initiated from a StoreKit view within this view completes.
- [onInAppPurchaseStart(perform:)](oninapppurchasestart%28perform_%29.md): Add an action to perform when a user triggers the purchase button on a StoreKit view within this view.
- [productIconBorder()](producticonborder%28%29.md): Adds a standard border to an in-app purchase product’s icon .
- [productViewStyle(\_:)](productviewstyle%28__%29.md): Sets the style for In-App Purchase product views within a view.
- [productDescription(\_:)](productdescription%28__%29.md): Configure the visibility of labels displaying an in-app purchase product description within the view.
- [storeButton(\_:for:)](storebutton%28__for_%29.md): Specifies the visibility of auxiliary buttons that store view and subscription store view instances may use.
