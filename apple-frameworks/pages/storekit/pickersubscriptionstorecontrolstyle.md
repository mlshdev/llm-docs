> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/pickersubscriptionstorecontrolstyle](https://developer.apple.com/documentation/storekit/pickersubscriptionstorecontrolstyle)

# PickerSubscriptionStoreControlStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency struct PickerSubscriptionStoreControlStyle
```

## Topics

### Getting the picker control style

- [picker](subscriptionstorecontrolstyle/picker.md): Conforms when `Self` is `PickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.

### Placing the controls

- [Placement](subscriptionstorecontrolstyle/placement.md): The placement of subscription controls in a subscription store.

### Creating the style

- [init()](pickersubscriptionstorecontrolstyle/init%28%29.md): Creates a picker subscription store control style.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SubscriptionStoreControlStyle](subscriptionstorecontrolstyle.md)

## See Also

### Placement types

- [AutomaticSubscriptionStoreControlStyle](automaticsubscriptionstorecontrolstyle.md): The default in-app subscription store control style that resolves its appearance based on the view’s context.
- [ButtonsSubscriptionStoreControlStyle](buttonssubscriptionstorecontrolstyle.md): A subscription store control style that displays a subscribe button for each subscription plan.
- [CompactPickerSubscriptionStoreControlStyle](compactpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a compact picker control, with a single button to subscribe.
- [PagedPickerSubscriptionStoreControlStyle](pagedpickersubscriptionstorecontrolstyle.md): A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
