> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorepicker](https://developer.apple.com/documentation/storekit/subscriptionstorepicker)

# SubscriptionStorePicker

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A composite control with a picker for selecting a subscription option and a button for confirming the subscription.

## Declaration

```swift
@MainActor @preconcurrency struct SubscriptionStorePicker<PickerContent, ConfirmationContent> where PickerContent : View, ConfirmationContent : View
```

<a id="overview"></a>

## Overview

When implementing custom subscription store control styles conforming to [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md), you can use this view to utilize the standard subscription picker as a component of the view you provide from [makeBody(configuration:)](subscriptionstorecontrolstyle/makebody%28configuration_%29.md). The subscription picker is a composite control: it contains both a picker for choosing an option, and a button to subscribe to the selected option.

This control is the same as used in standard control styles such as [picker](subscriptionstorecontrolstyle/picker.md).

There are two primary ways to create a subscription picker:

- Provide the [SubscriptionStoreControlStyleConfiguration](subscriptionstorecontrolstyleconfiguration.md) value to the subscription picker, and use the components of each option to declare the option’s label.
- Provide a collection of views for the picker’s content, using a [SubscriptionStorePickerOption](subscriptionstorepickeroption.md) to declare the options.

Either way, you also need to declare a view to confirm the subscription after someone selects an option.

You can optionally provide a binding to a [SubscriptionStoreControlStyleConfiguration.Option](subscriptionstorecontrolstyleconfiguration/option.md) to observe selection changes, or programmatically change selections. If you don’t provide a binding, the subscription picker manages its own selection state.

> **Important**

>  Use the `SubscriptionStorePicker` only in the view you return from the required [makeBody(configuration:)](subscriptionstorecontrolstyle/makebody%28configuration_%29.md) method of [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md). Using `SubscriptionStorePicker` in other contexts is not supported.

## Topics

### Creating a subscription store picker

- [init(pickerContent:confirmation:)](subscriptionstorepicker/init%28pickercontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.
- [init(\_:pickerOptionContent:confirmation:)](subscriptionstorepicker/init%28__pickeroptioncontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.

### Managing a subscription picker’s selection state

- [init(selection:pickerContent:confirmation:)](subscriptionstorepicker/init%28selection_pickercontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.
- [init(\_:selection:pickerOptionContent:confirmation:)](subscriptionstorepicker/init%28__selection_pickeroptioncontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Creating custom subscription store control styles

- [SubscriptionStoreButton](subscriptionstorebutton.md): A button for subscribing to an in-app subscription with a localized label and optional caption.
- [SubscriptionStorePickerOption](subscriptionstorepickeroption.md): A subscription option within a subscription picker control.
