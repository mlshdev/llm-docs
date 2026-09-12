> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/icon](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption/icon)

# icon

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

The subscription option’s icon.

## Declaration

```swift
var icon: SubscriptionStoreControlStyleConfiguration.Icon? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the icon you configure for a subscription option using the [subscriptionStoreControlIcon(icon:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolicon%28icon:%29) view modifier.

## See Also

### Getting properties of the subscription picker option

- [subscription](subscription.md): The auto-renewable subscription that the picker option represents.
- [activeOffer](activeoffer.md)
- [isSelected](isselected.md): A Boolean value that indicates whether the picker option is in a selected state.
- [id](id.md)
