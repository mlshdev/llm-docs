> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/pagedprominentpickersubscriptionstorecontrolstyle](https://developer.apple.com/documentation/storekit/pagedprominentpickersubscriptionstorecontrolstyle)

# PagedProminentPickerSubscriptionStoreControlStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A subscription store control style that displays subscription plans as a paged prominent picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency struct PagedProminentPickerSubscriptionStoreControlStyle
```

## Topics

### Getting the paged prominent picker control style

- [pagedProminentPicker](subscriptionstorecontrolstyle/pagedprominentpicker.md): Conforms when `Self` is `PagedProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent paged picker control, with a single button to subscribe.

### Creating the style

- [init()](pagedprominentpickersubscriptionstorecontrolstyle/init%28%29.md): Creates the paged prominent picker control style.

### Placing the controls

- [PagedProminentPickerSubscriptionStoreControlStyle.Placement](pagedprominentpickersubscriptionstorecontrolstyle/placement.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md)

## See Also

### Supporting types

- [AutomaticSubscriptionStoreControlStyle](automaticsubscriptionstorecontrolstyle.md): The default in-app subscription store control style that resolves its appearance based on the view’s context.
- [ButtonsSubscriptionStoreControlStyle](buttonssubscriptionstorecontrolstyle.md): A subscription store control style that displays a subscribe button for each subscription plan.
- [PickerSubscriptionStoreControlStyle](pickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.
- [ProminentPickerSubscriptionStoreControlStyle](prominentpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a prominent picker control, with a single button to subscribe.
- [CompactPickerSubscriptionStoreControlStyle](compactpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.
- [PagedPickerSubscriptionStoreControlStyle](pagedpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
- [AutomaticSubscriptionStoreControlPlacement](automaticsubscriptionstorecontrolplacement.md): A system-defined placement for a subscription store view.
