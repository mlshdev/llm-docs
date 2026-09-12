> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyle/pagedpicker](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyle/pagedpicker)

# pagedPicker

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency static var pagedPicker: PagedPickerSubscriptionStoreControlStyle { get }
```

## See Also

### Getting built-in subscription store control styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticSubscriptionStoreControlStyle`. A subscription store control style that resolves its appearance automatically, based on the current context.
- [buttons](buttons.md): Conforms when `Self` is `ButtonsSubscriptionStoreControlStyle`. A subscription store control style that displays a subscribe button for each subscription plan.
- [picker](picker.md): Conforms when `Self` is `PickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.
- [prominentPicker](prominentpicker.md): Conforms when `Self` is `ProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent picker control, with a single button to subscribe.
- [pagedProminentPicker](pagedprominentpicker.md): Conforms when `Self` is `PagedProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent paged picker control, with a single button to subscribe.
- [compactPicker](compactpicker.md): Conforms when `Self` is `CompactPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a compact control, with a single button to subscribe.
