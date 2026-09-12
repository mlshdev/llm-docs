> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productviewstyleconfiguration/descriptionvisibility](https://developer.apple.com/documentation/storekit/productviewstyleconfiguration/descriptionvisibility)

# descriptionVisibility

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The visibility of product descriptions.

## Declaration

```swift
let descriptionVisibility: Visibility
```

<a id="Discussion"></a>

## Discussion

Subscription products have a localized [description](../product/description.md) property that you can conditionally display in your custom style. Use the [descriptionVisibility](../subscriptionstorecontrolstyleconfiguration/descriptionvisibility.md) property to check the value that the  [productDescription(\_:)](https://developer.apple.com/documentation/swiftui/view/productdescription%28_:%29) view modifier configures on an ancestor of the [SubscriptionStoreView](../subscriptionstoreview.md).

Ignore this property if your style doesn’t need the capability to conditionally display the product description. For example, a compact control style may never show product descriptions.

If the view heirarachy doesn’t use the [productDescription(\_:)](https://developer.apple.com/documentation/swiftui/view/productdescription%28_:%29) view modifier, the [descriptionVisibility](../subscriptionstorecontrolstyleconfiguration/descriptionvisibility.md) property is [automatic](../subscriptionstorecontrolstyle/automatic.md).
