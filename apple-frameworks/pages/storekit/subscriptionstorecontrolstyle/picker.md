> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyle/picker](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyle/picker)

# picker

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A subscription store control style that displays subscription plans as a picker control, with a single button to subscribe.

## Declaration

```swift
@MainActor @preconcurrency static var picker: PickerSubscriptionStoreControlStyle { get }
```

<a id="Discussion"></a>

## Discussion

You can also use [subscriptionStoreControlStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/subscriptionstorecontrolstyle%28_:%29) with [picker](picker.md) as the parameter to construct this style.

## See Also

### Getting built-in subscription store control styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticSubscriptionStoreControlStyle`. A subscription store control style that resolves its appearance automatically, based on the current context.
- [buttons](buttons.md): Conforms when `Self` is `ButtonsSubscriptionStoreControlStyle`. A subscription store control style that displays a subscribe button for each subscription plan.
- [prominentPicker](prominentpicker.md): Conforms when `Self` is `ProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent picker control, with a single button to subscribe.
- [pagedPicker](pagedpicker.md): Conforms when `Self` is `PagedPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a paged picker control, with a single button to subscribe.
- [pagedProminentPicker](pagedprominentpicker.md): Conforms when `Self` is `PagedProminentPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a prominent paged picker control, with a single button to subscribe.
- [compactPicker](compactpicker.md): Conforms when `Self` is `CompactPickerSubscriptionStoreControlStyle`. A subscription store control style that displays subscription plans as a compact control, with a single button to subscribe.
