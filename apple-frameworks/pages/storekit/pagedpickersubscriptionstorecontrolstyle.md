> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/pagedpickersubscriptionstorecontrolstyle](https://developer.apple.com/documentation/storekit/pagedpickersubscriptionstorecontrolstyle)

# PagedPickerSubscriptionStoreControlStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency struct PagedPickerSubscriptionStoreControlStyle
```

## Topics

### Getting the paged picker control style

- [pagedPicker](subscriptionstorecontrolstyle/pagedpicker.md): Conforms when `Self` is `PagedPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.

### Creating the style

- [init()](pagedpickersubscriptionstorecontrolstyle/init%28%29.md): Creates a paged picker control style.

### Placing the controls

- [PagedPickerSubscriptionStoreControlStyle.Placement](pagedpickersubscriptionstorecontrolstyle/placement.md): The placement of paged subscription picker in a subscription store view.

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
- [CompactPickerSubscriptionStoreControlStyle](compactpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.
