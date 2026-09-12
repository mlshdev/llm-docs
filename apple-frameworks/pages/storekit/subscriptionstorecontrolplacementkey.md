> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolplacementkey](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolplacementkey)

# SubscriptionStoreControlPlacementKey

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A placement for a subscription store control in a store view.

## Declaration

```swift
struct SubscriptionStoreControlPlacementKey
```

<a id="overview"></a>

## Overview

This type represents all available control placements. You typically don’t interact with this type directly. Use it if you create a custom control style that conforms to the [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md) protocol to restrict the supported placements for your style. By default, a custom control style supports all placements. For more information, see [SubscriptionStoreControlPlacement](subscriptionstorecontrolplacement.md).

## Topics

### Placing subscription store controls

- [bottom](subscriptionstorecontrolplacementkey/bottom.md): A placement that anchors the subscription controls to the bottom edge of the view.
- [leading](subscriptionstorecontrolplacementkey/leading.md): A placement that anchors the subscription controls to the leading edge of the view.
- [scrollView](subscriptionstorecontrolplacementkey/scrollview.md): A placement that locates the subscription controls within the main scroll view of a subscription store view.
- [trailing](subscriptionstorecontrolplacementkey/trailing.md): A placement that anchors the subscription controls to the trailing edge of the view.
- [bottomBar](subscriptionstorecontrolplacementkey/bottombar.md): A placement that locates the subscription controls in a bar near the bottom of the main scroll view in a subscription store view.
- [buttonsInBottomBar](subscriptionstorecontrolplacementkey/buttonsinbottombar.md): A hybrid placement that positions subscription controls within the main scroll view, and places auxiliary buttons in the bottom bar.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating custom subscription store control styles

- [makeBody(configuration:)](subscriptionstorecontrolstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a subscription store control.
- [SubscriptionStoreControlStyle.Configuration](subscriptionstorecontrolstyle/configuration.md): The properties of a subscription store control that includes the list of auto-renewable subscriptions to merchandise.
- [SubscriptionStoreControlStyle.SubscribeButton](subscriptionstorecontrolstyle/subscribebutton.md): A button for subscribing to an in-app subscription.
- [SubscriptionStoreControlStyle.SubscriptionPicker](subscriptionstorecontrolstyle/subscriptionpicker.md): A composite control for selecting a subscription option and confirming the subscription.
- [SubscriptionStoreControlStyle.SubscriptionPickerOption](subscriptionstorecontrolstyle/subscriptionpickeroption.md): A subscription option within a subscription picker control.
- [Placement](subscriptionstorecontrolstyle/placement.md): The placement of subscription controls in a subscription store.
- [Body](subscriptionstorecontrolstyle/body.md): A view that represents the body of a subscription store control.
