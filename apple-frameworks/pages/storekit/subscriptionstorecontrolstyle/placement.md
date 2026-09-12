> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyle/placement](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyle/placement)

# Placement

**Framework:** StoreKit  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The placement of subscription controls in a subscription store.

## Declaration

```swift
associatedtype Placement : SubscriptionStoreControlPlacement = AutomaticSubscriptionStoreControlPlacement
```

## See Also

### Creating custom subscription store control styles

- [makeBody(configuration:)](makebody%28configuration_%29.md): Creates a view that represents the body of a subscription store control.
- [SubscriptionStoreControlStyle.Configuration](configuration.md): The properties of a subscription store control that includes the list of auto-renewable subscriptions to merchandise.
- [SubscriptionStoreControlStyle.SubscribeButton](subscribebutton.md): A button for subscribing to an in-app subscription.
- [SubscriptionStoreControlStyle.SubscriptionPicker](subscriptionpicker.md): A composite control for selecting a subscription option and confirming the subscription.
- [SubscriptionStoreControlStyle.SubscriptionPickerOption](subscriptionpickeroption.md): A subscription option within a subscription picker control.
- [SubscriptionStoreControlPlacementKey](../subscriptionstorecontrolplacementkey.md): A placement for a subscription store control in a store view.
- [Body](body.md): A view that represents the body of a subscription store control.
