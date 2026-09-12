> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storekit-views](https://developer.apple.com/documentation/storekit/storekit-views)

# StoreKit views (Swift)

**Framework:** StoreKit  
**Kind:** API Collection

Display a customizable In-App Purchase store using StoreKit views for SwiftUI.

<a id="overview"></a>

## Overview

The StoreKit views APIs provide UI to help you build a store for your In-App Purchases, and provide a way for customers to complete the purchase. The views support localization, so your customers see the product names, descriptions, and prices appropriate to their App Store storefront.

> **Related session from WWDC23**

>  Session 10013: [Meet StoreKit for SwiftUI](https://developer.apple.com/videos/play/wwdc2023/10013)

StoreKit manages the layouts across all platforms, so the views look great on any device. You can use SwiftUI APIs to customize how the views integrate with your app.

To use StoreKit views, configure your In-App Purchase metadata in App Store Connect, or in a StoreKit configuration file in Xcode if you’re testing your app. Next, create the views using [StoreView](storeview.md), [ProductView](productview.md), or [SubscriptionStoreView](subscriptionstoreview.md). Finally, customize the default views to match your app by using your own icons, backgrounds, and other styling. Use [Previews in Xcode](https://developer.apple.com/documentation/swiftui/previews-in-xcode) to see your progress as you iterate on your design.

For more information on configuring your In-App Purchase metadata, see [Manage In-App Purchases](https://help.apple.com/app-store-connect/#/devae49fb316). For more information on StoreKit configuration files in Xcode, see [Setting up StoreKit Testing in Xcode](https://developer.apple.com/documentation/xcode/setting-up-storekit-testing-in-xcode).

## Topics

### Merchandising In-App Purchases, subscriptions, and offers

- [ProductView](productview.md): A view that merchandises an individual In-App Purchase product.
- [StoreView](storeview.md): A view that merchandises a collection of In-App Purchase products.
- [SubscriptionStoreView](subscriptionstoreview.md): A view that merchandises a collection of auto-renewable subscription options that belong to the same subscription group.
- [SubscriptionOfferView](subscriptionofferview.md)
- [Backyard Birds: Building an app with SwiftData and widgets](https://developer.apple.com/documentation/swiftui/backyard-birds-sample): Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.

### Styling product views

- [productViewStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/productviewstyle%28_:%29): Sets the style for In-App Purchase product views within a view.
- [productIconBorder()](https://developer.apple.com/documentation/swiftui/view/producticonborder%28%29): Adds a standard border to an in-app purchase product’s icon .
- [ProductViewStyle](productviewstyle.md): A type that specifies the appearance and interaction of In-App Purchase products within the view hierarchy.
- [ProductViewStyleConfiguration](productviewstyleconfiguration.md): The properties of an In-App Purchase product for use by custom product view styles.

### Styling subscription store controls

- [subscriptionStoreControlStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolstyle%28_:%29): Sets the control style for subscription store views within a view.
- [subscriptionStoreControlStyle(\_:placement:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolstyle%28_:placement:%29): Sets the control style and control placement for subscription store views within a view.
- [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md): A type that specifies the appearance and interaction of controls in the subscription store view instances within the view hierarchy.
- [SubscriptionStoreControlStyleConfiguration](subscriptionstorecontrolstyleconfiguration.md): The properties of a subscription store control that includes the list of auto-renewable subscriptions to merchandise.
- [SubscriptionStoreControlPlacement](subscriptionstorecontrolplacement.md): A type that specifies the placement of a subscription control in a subscription store view.

### Styling subscription offer views

- [AutomaticSubscriptionOfferViewStyle](automaticsubscriptionofferviewstyle.md)
- [CompactSubscriptionOfferViewStyle](compactsubscriptionofferviewstyle.md)
- [SubscriptionOfferViewStyleConfiguration](subscriptionofferviewstyleconfiguration.md)
- [SubscriptionOfferViewStyle](subscriptionofferviewstyle.md)

### Configuring subscription store controls

- [subscriptionStoreControlIcon(icon:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolicon%28icon:%29): Sets a view to use to decorate individual subscription options within a subscription store view.
- [subscriptionStorePickerItemBackground(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepickeritembackground%28_:%29): Sets the background style for picker items of the subscription store view instances within a view.
- [subscriptionStorePickerItemBackground(\_:in:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepickeritembackground%28_:in:%29): Sets the background shape and style for subscription store view picker items within a view.
- [subscriptionStoreButtonLabel(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorebuttonlabel%28_:%29): Configures subscription store view instances within a view to use the provided button label.
- [SubscriptionStoreButtonLabel](subscriptionstorebuttonlabel.md): The label of the subscribe button that a subscription store view uses.

### Creating custom subscription store control styles

- [SubscriptionStoreButton](subscriptionstorebutton.md): A button for subscribing to an in-app subscription with a localized label and optional caption.
- [SubscriptionStorePicker](subscriptionstorepicker.md): A composite control with a picker for selecting a subscription option and a button for confirming the subscription.
- [SubscriptionStorePickerOption](subscriptionstorepickeroption.md): A subscription option within a subscription picker control.

### Declaring the structure of a subscription store

- [SubscriptionOptionGroup](subscriptionoptiongroup.md): A group of subscription options that includes optional views for labels and marketing content.
- [SubscriptionOptionGroupSet](subscriptionoptiongroupset.md): A set of groups of subscription options that include optional views for labels and marketing content.
- [SubscriptionPeriodGroupSet](subscriptionperiodgroupset.md)
- [SubscriptionOptionSection](subscriptionoptionsection.md)
- [StoreContent](storecontent.md): A type that represents the content of a store.
- [StoreContentBuilder](storecontentbuilder.md): A result builder that creates store content from closures that you provide.

### Styling subscription option groups

- [subscriptionStoreOptionGroupStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstoreoptiongroupstyle%28_:%29): Sets the style subscription store views within this view use to display groups of subscription options.
- [subscriptionStoreOptionGroupStyle(\_:)](storecontent/subscriptionstoreoptiongroupstyle%28__%29.md)
- [SubscriptionOptionGroupStyle](subscriptionoptiongroupstyle.md)

### Adding backgrounds to subscription stores

- [containerBackground(\_:for:)](https://developer.apple.com/documentation/swiftui/view/containerbackground%28_:for:%29): Sets the container background of the enclosing container using a view.
- [containerBackground(for:alignment:content:)](https://developer.apple.com/documentation/swiftui/view/containerbackground%28for:alignment:content:%29): Sets the container background of the enclosing container using a view.
- [subscriptionStoreControlBackground(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolbackground%28_:%29-7jxa9): Set a shape style to use for the background of subscription store view controls within the view.
- [subscriptionStoreControlBackground(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolbackground%28_:%29-7ev89): Set a standard effect to use for the background of subscription store view controls within the view.
- [subscriptionStore](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement/subscriptionstore): An automatic placement within a subscription store view, based on the view’s context.
- [subscriptionStoreHeader](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement/subscriptionstoreheader): A background placement behind the marketing content of a subscription store view.
- [subscriptionStoreFullHeight](https://developer.apple.com/documentation/swiftui/containerbackgroundplacement/subscriptionstorefullheight): A background placement that spans the full height of a subscription store view.
- [SubscriptionStoreControlBackground](subscriptionstorecontrolbackground.md)

### Configuring accessory buttons

- [storeButton(\_:for:)](https://developer.apple.com/documentation/swiftui/view/storebutton%28_:for:%29): Specifies the visibility of auxiliary buttons that store view and subscription store view instances may use.
- [subscriptionStoreSignInAction(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstoresigninaction%28_:%29): Adds an action to perform when a person uses the sign-in button on a subscription store view within a view.
- [StoreButtonKind](storebuttonkind.md): A button to display in a store view or subscription store view.
- [SubscriptionOfferViewButtonKind](subscriptionofferviewbuttonkind.md)

### Configuring the subscription store policies

- [subscriptionStorePolicyDestination(for:destination:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28for:destination:%29): Configures a view as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyDestination(url:for:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicydestination%28url:for:%29): Configures a URL as the destination for a policy button action in subscription store views.
- [subscriptionStorePolicyForegroundStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle%28_:%29): Sets the style for the terms of service and privacy policy buttons within a subscription store view.
- [subscriptionStorePolicyForegroundStyle(\_:\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorepolicyforegroundstyle%28_:_:%29): Sets the primary and secondary style for the terms of service and privacy policy buttons within a subscription store view.
- [SubscriptionStorePolicyKind](subscriptionstorepolicykind.md): The type of policy, such as the terms of service or privacy policies.

### Selecting subscription offers

- [subscriptionPromotionalOffer(offer:signature:)](https://developer.apple.com/documentation/swiftui/view/subscriptionpromotionaloffer%28offer:signature:%29): Deprecated. Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
- [preferredSubscriptionOffer(\_:)](https://developer.apple.com/documentation/swiftui/view/preferredsubscriptionoffer%28_:%29): Selects a subscription offer to apply to a purchase that a customer makes from a subscription store view, a store view, or a product view.
- [offerCodeRedemption(isPresented:onCompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption%28ispresented:oncompletion:%29): Deprecated.

### Configuring purchase options and product descriptions

- [inAppPurchaseOptions(\_:)](https://developer.apple.com/documentation/swiftui/view/inapppurchaseoptions%28_:%29): Add a function to call before initiating a purchase from StoreKit view within this view, providing a set of options for the purchase.
- [productDescription(\_:)](https://developer.apple.com/documentation/swiftui/view/productdescription%28_:%29): Configure the visibility of labels displaying an in-app purchase product description within the view.

### Responding to store events

- [onInAppPurchaseStart(perform:)](https://developer.apple.com/documentation/swiftui/view/oninapppurchasestart%28perform:%29): Add an action to perform when a user triggers the purchase button on a StoreKit view within this view.
- [onInAppPurchaseCompletion(perform:)](https://developer.apple.com/documentation/swiftui/view/oninapppurchasecompletion%28perform:%29): Add an action to perform when a purchase initiated from a StoreKit view within this view completes.

### Loading StoreKit data

- [storeProductTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/storeproducttask%28for:priority:action:%29): Declares the view as dependent on an In-App Purchase product and returns a modified view.
- [storeProductsTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/storeproductstask%28for:priority:action:%29): Declares the view as dependent on a collection of In-App Purchase products and returns a modified view.
- [currentEntitlementTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/currententitlementtask%28for:priority:action:%29): Declares the view as dependent on the entitlement of an In-App Purchase product, and returns a modified view.
- [subscriptionStatusTask(for:priority:action:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstatustask%28for:priority:action:%29): Declares the view as dependent on the status of an auto-renewable subscription group, and returns a modified view.
- [Product.CollectionTaskState](product/collectiontaskstate.md): The state of a task that loads a collection of products in the background.
- [Product.TaskState](product/taskstate.md): The state of a task that loads a product in the background.
- [EntitlementTaskState](entitlementtaskstate.md): The state of an entitlement task.

### Requesting a refund

- [refundRequestSheet(for:isPresented:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/refundrequestsheet%28for:ispresented:ondismiss:%29): Display the refund request sheet for the given transaction.

# StoreKit views (Objective-C)

**Framework:** StoreKit  
**Kind:** API Collection

Display a customizable In-App Purchase store using StoreKit views for SwiftUI.

<a id="overview"></a>

## Overview

The StoreKit views APIs provide UI to help you build a store for your In-App Purchases, and provide a way for customers to complete the purchase. The views support localization, so your customers see the product names, descriptions, and prices appropriate to their App Store storefront.

> **Related session from WWDC23**

>  Session 10013: [Meet StoreKit for SwiftUI](https://developer.apple.com/videos/play/wwdc2023/10013)

StoreKit manages the layouts across all platforms, so the views look great on any device. You can use SwiftUI APIs to customize how the views integrate with your app.

To use StoreKit views, configure your In-App Purchase metadata in App Store Connect, or in a StoreKit configuration file in Xcode if you’re testing your app. Next, create the views using [StoreView](storeview.md), [ProductView](productview.md), or [SubscriptionStoreView](subscriptionstoreview.md). Finally, customize the default views to match your app by using your own icons, backgrounds, and other styling. Use [Previews in Xcode](https://developer.apple.com/documentation/swiftui/previews-in-xcode) to see your progress as you iterate on your design.

For more information on configuring your In-App Purchase metadata, see [Manage In-App Purchases](https://help.apple.com/app-store-connect/#/devae49fb316). For more information on StoreKit configuration files in Xcode, see [Setting up StoreKit Testing in Xcode](https://developer.apple.com/documentation/xcode/setting-up-storekit-testing-in-xcode).

## Topics

### Merchandising In-App Purchases, subscriptions, and offers

- [Backyard Birds: Building an app with SwiftData and widgets](https://developer.apple.com/documentation/swiftui/backyard-birds-sample): Create an app with persistent data, interactive widgets, and an all new in-app purchase experience.
