> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/pickeroption)

# SubscriptionStoreControlStyleConfiguration.PickerOption

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

The properties of a picker option to use for selecting a subscription.

## Declaration

```swift
@dynamicMemberLookup struct PickerOption
```

<a id="overview"></a>

## Overview

You use `SubscriptionStoreControlStyleConfiguration.PickerOption` very similarly to [SubscriptionStoreControlStyleConfiguration.Option](option.md). The key differences are:

- The picker option represents a subscription option within the scope of an element of a picker control, where you can merchandise a standard option using any kind of control.
- Instead of getting an option from a [SubscriptionStoreControlStyleConfiguration](../subscriptionstorecontrolstyleconfiguration.md), you get a picker option when you create a [SubscriptionStorePicker](../subscriptionstorepicker.md).
- Instead of providing a [subscribe()](option/subscribe%28%29.md) method, the picker option provides an [isSelected](pickeroption/isselected.md) property to get the selection state.

The key difference is a `SubscriptionStoreControlStyleConfiguration.Option` provides a method to subscribe, and a `SubscriptionStoreControlStyleConfiguration.PickerOption` indicates the current selection state within a [SubscriptionStorePicker](../subscriptionstorepicker.md).

[SubscriptionStoreControlStyleConfiguration.PickerOption](pickeroption.md) is a dynamic member lookup type, so you don’t need to use [subscription](pickeroption/subscription.md) directly to access the properties of the `Product` value. Instead, access any properties of `Product` or [Product.SubscriptionInfo](../product/subscriptioninfo.md) directly on the `PickerOption` value.

## Topics

### Getting properties of the subscription picker option

- [subscription](pickeroption/subscription.md): The auto-renewable subscription that the picker option represents.
- [activeOffer](pickeroption/activeoffer.md)
- [isSelected](pickeroption/isselected.md): A Boolean value that indicates whether the picker option is in a selected state.
- [icon](pickeroption/icon.md): The subscription option’s icon.
- [id](pickeroption/id.md)

### Dynamic member lookup support

- [subscript(dynamicMember:)](pickeroption/subscript%28dynamicmember_%29-2ahxy.md): Facilitates accessing optional subscription properties on a picker option value.
- [subscript(dynamicMember:)](pickeroption/subscript%28dynamicmember_%29-4f3i1.md): Facilitates accessing subscription properties on a picker option value.
- [subscript(dynamicMember:)](pickeroption/subscript%28dynamicmember_%29-8bsxh.md): Facilitates accessing product properties on a picker option value.

### Default Implementations

- [Identifiable Implementations](pickeroption/identifiable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Getting subscription options to merchandise

- [options](options.md): An array of subscription options for the subscription store view to merchandise.
- [sections](sections.md): The subscription options to merchandise by sections.
- [SubscriptionStoreControlStyleConfiguration.Option](option.md): Properties of an auto-renewable subscription option to merchandise.
- [SubscriptionStoreControlStyleConfiguration.Section](section.md): The properties of a section of subscription options within a subscription store control.
- [SubscriptionStoreControlStyleConfiguration.Icon](icon.md): A type-erased icon of a subscription option.
