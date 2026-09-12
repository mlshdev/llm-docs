> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/prominentpickersubscriptionstorecontrolstyle](https://developer.apple.com/documentation/storekit/prominentpickersubscriptionstorecontrolstyle)

# ProminentPickerSubscriptionStoreControlStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A subscription store control style that displays subscription plans as a prominent picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency struct ProminentPickerSubscriptionStoreControlStyle
```

## Topics

### Getting the prominent picker control style

- [pagedProminentPicker](subscriptionstorecontrolstyle/pagedprominentpicker.md): Conforms when `Self` is `PagedProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent paged picker control, with a single button to subscribe.

### Creating the style

- [init()](prominentpickersubscriptionstorecontrolstyle/init%28%29.md): Creates a prominent picker subscription store control style.

### Placing the controls

- [Placement](subscriptionstorecontrolstyle/placement.md): The placement of subscription controls in a subscription store.

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
- [CompactPickerSubscriptionStoreControlStyle](compactpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.
- [PagedPickerSubscriptionStoreControlStyle](pagedpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
- [PagedProminentPickerSubscriptionStoreControlStyle](pagedprominentpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged prominent picker control, with a single button to subscribe.
- [AutomaticSubscriptionStoreControlPlacement](automaticsubscriptionstorecontrolplacement.md): A system-defined placement for a subscription store view.
