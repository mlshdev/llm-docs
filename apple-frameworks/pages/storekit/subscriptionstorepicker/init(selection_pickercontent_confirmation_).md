> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorepicker/init(selection:pickercontent:confirmation:)](https://developer.apple.com/documentation/storekit/subscriptionstorepicker/init(selection:pickercontent:confirmation:))

# init(selection:pickerContent:confirmation:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(selection: Binding<SubscriptionStoreControlStyleConfiguration.Option?>, @ViewBuilder pickerContent: () -> PickerContent, @ViewBuilder confirmation: @escaping (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)
```

## See Also

### Managing a subscription picker’s selection state

- [init(\_:selection:pickerOptionContent:confirmation:)](init%28__selection_pickeroptioncontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.
