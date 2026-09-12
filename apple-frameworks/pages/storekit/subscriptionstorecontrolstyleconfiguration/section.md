> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/section](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section)

# SubscriptionStoreControlStyleConfiguration.Section

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The properties of a section of subscription options within a subscription store control.

## Declaration

```swift
struct Section
```

<a id="overview"></a>

## Overview

Each value represents an instance of [SubscriptionOptionSection](../subscriptionoptionsection.md) when the system creates a [SubscriptionStoreView](../subscriptionstoreview.md).

Even if a subscription store instance doesn’t declare sections using [SubscriptionOptionSection](../subscriptionoptionsection.md), the instance always has at least one implicit section that contains the options within the group. Implicit sections have `nil` for the [header](section/header-swift.property.md) and [footer](section/footer-swift.property.md) accessory views.

## Topics

### Getting a section’s content

- [options](section/options.md): The subscription options to merchandise within a section.

### Getting accessory views

- [header](section/header-swift.property.md): A decorative header view for a section that displays before the options.
- [footer](section/footer-swift.property.md): A decorative footer view for a section that displays after the options.
- [SubscriptionStoreControlStyleConfiguration.Section.Header](section/header-swift.struct.md): A type-erased header of a section of subscription options.
- [SubscriptionStoreControlStyleConfiguration.Section.Footer](section/footer-swift.struct.md): A type-erased footer of a section of subscription options.

### Identifying a section

- [SubscriptionStoreControlStyleConfiguration.Section.ID](section/id.md): The stable identity of a section of subscription options.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Getting subscription options to merchandise

- [options](options.md): An array of subscription options for the subscription store view to merchandise.
- [sections](sections.md): The subscription options to merchandise by sections.
- [SubscriptionStoreControlStyleConfiguration.Option](option.md): Properties of an auto-renewable subscription option to merchandise.
- [SubscriptionStoreControlStyleConfiguration.PickerOption](pickeroption.md): The properties of a picker option to use for selecting a subscription.
- [SubscriptionStoreControlStyleConfiguration.Icon](icon.md): A type-erased icon of a subscription option.
