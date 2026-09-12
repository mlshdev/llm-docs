> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/refundrequestsheet(for:ispresented:ondismiss:)](https://developer.apple.com/documentation/swiftui/view/refundrequestsheet(for:ispresented:ondismiss:))

# refundRequestSheet(for:isPresented:onDismiss:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · visionOS 1.0+

Display the refund request sheet for the given transaction.

## Declaration

```swift
@preconcurrency nonisolated func refundRequestSheet(for transactionID: Transaction.ID, isPresented: Binding<Bool>, onDismiss: (@MainActor (Result<Transaction.RefundRequestStatus, Transaction.RefundRequestError>) -> ())? = nil) -> some View

```

## Parameters

- `transactionID`: The transaction ID to request a refund for.
- `isPresented`: A binding to a Boolean value that determines whether the refund request sheet is presented.
- `onDismiss`: The closure to execute when dismissing the sheet, with the result of the refund request provided as a parameter.

## See Also

### Interacting with the App Store and Apple Music

- [appStoreOverlay(isPresented:configuration:)](appstoreoverlay%28ispresented_configuration_%29.md): Presents a StoreKit overlay when a given condition is true.
- [manageSubscriptionsSheet(isPresented:)](managesubscriptionssheet%28ispresented_%29.md)
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
- [storeProductTask(for:priority:action:)](storeproducttask%28for_priority_action_%29.md): Declares the view as dependent on an In-App Purchase product and returns a modified view.
