> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/compactpickersubscriptionstorecontrolstyle](https://developer.apple.com/documentation/storekit/compactpickersubscriptionstorecontrolstyle)

# CompactPickerSubscriptionStoreControlStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency struct CompactPickerSubscriptionStoreControlStyle
```

<a id="overview"></a>

## Overview

This style lays out the picker options in a horizontal stack, and it can scroll horizontally if the contents are wider than the container. This style is recommended when you expect your store to display two or three subscription options.

## Topics

### Getting the compact picker control style

- [compactPicker](subscriptionstorecontrolstyle/compactpicker.md): Conforms when `Self` is `CompactPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a compact control, with a single button to subscribe.

### Creating the style

- [init()](compactpickersubscriptionstorecontrolstyle/init%28%29.md): Creates a compact picker subscription store control style.

### Placing the controls

- [CompactPickerSubscriptionStoreControlStyle.Placement](compactpickersubscriptionstorecontrolstyle/placement.md): The placement of the compact subscription picker in a subscription store view.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md)

## See Also

### Placement types

- [AutomaticSubscriptionStoreControlStyle](automaticsubscriptionstorecontrolstyle.md): The default in-app subscription store control style that resolves its appearance based on the view’s context.
- [ButtonsSubscriptionStoreControlStyle](buttonssubscriptionstorecontrolstyle.md): A subscription store control style that displays a subscribe button for each subscription plan.
- [PickerSubscriptionStoreControlStyle](pickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.
- [PagedPickerSubscriptionStoreControlStyle](pagedpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
