> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/automaticsubscriptionstorecontrolplacement](https://developer.apple.com/documentation/storekit/automaticsubscriptionstorecontrolplacement)

# AutomaticSubscriptionStoreControlPlacement

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A system-defined placement for a subscription store view.

## Declaration

```swift
struct AutomaticSubscriptionStoreControlPlacement
```

<a id="overview"></a>

## Overview

You typically don’t use this type directly, except when you implement a custom control style. By default, a custom control style supports all placements. For more information, see the [SubscriptionStoreControlPlacement](subscriptionstorecontrolplacement.md) protocol.

## Topics

### Getting automatic placements

- [automatic](automaticsubscriptionstorecontrolplacement/automatic.md): A context-appropriate placement that the system determines automatically.
- [bottomBar](automaticsubscriptionstorecontrolplacement/bottombar.md): A placement that locates the subscription controls in a bar near the bottom of the main scroll view in a subscription store view.
- [buttonsInBottomBar](automaticsubscriptionstorecontrolplacement/buttonsinbottombar.md): A hybrid placement that positions subscription controls within the main scroll view, and places auxiliary buttons in the bottom bar.
- [scrollView](automaticsubscriptionstorecontrolplacement/scrollview.md): A placement that locates the subscription controls within the main scroll view of a subscription store view.
- [bottom](automaticsubscriptionstorecontrolplacement/bottom.md): A placement that anchors the subscription controls to the bottom edge of the view.
- [leading](automaticsubscriptionstorecontrolplacement/leading.md): A placement that anchors the subscription controls to the leading edge of the view.
- [trailing](automaticsubscriptionstorecontrolplacement/trailing.md): A placement that anchors the subscription controls to the trailing edge of the view.

## Relationships

### Conforms To

- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SubscriptionStoreControlPlacement](subscriptionstorecontrolplacement.md)

## See Also

### Supporting types

- [AutomaticSubscriptionStoreControlStyle](automaticsubscriptionstorecontrolstyle.md): The default in-app subscription store control style that resolves its appearance based on the view’s context.
- [ButtonsSubscriptionStoreControlStyle](buttonssubscriptionstorecontrolstyle.md): A subscription store control style that displays a subscribe button for each subscription plan.
- [PickerSubscriptionStoreControlStyle](pickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.
- [ProminentPickerSubscriptionStoreControlStyle](prominentpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a prominent picker control, with a single button to subscribe.
- [CompactPickerSubscriptionStoreControlStyle](compactpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.
- [PagedPickerSubscriptionStoreControlStyle](pagedpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
- [PagedProminentPickerSubscriptionStoreControlStyle](pagedprominentpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged prominent picker control, with a single button to subscribe.
