> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscription](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/subscription)

# subscription

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

The auto-renewable subscription that the picker option represents.

## Declaration

```swift
var subscription: Product { get }
```

<a id="Discussion"></a>

## Discussion

[SubscriptionStoreControlStyleConfiguration.PickerOption](../pickeroption.md) is a dynamic member lookup type, so you don’t need to use this property directly to access the properties of the [Product](../../product.md) value. Instead, access any properties of [Product](../../product.md) or [Product.SubscriptionInfo](../../product/subscriptioninfo.md) directly on the `PickerOption` value.

> **Important**

>  Don’t use [purchase(confirmIn:options:)](../../product/purchase%28confirmin_options_%29-6dj6y.md) or related purchase methods on this property to initiate a purchase. Use a picker option only for selecting a subscription option, which requires additional confirmation before initiating a purchase.

## See Also

### Getting properties of the subscription picker option

- [activeOffer](activeoffer.md)
- [isSelected](isselected.md): A Boolean value that indicates whether the picker option is in a selected state.
- [icon](icon.md): The subscription option’s icon.
- [id](id.md)
