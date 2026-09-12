> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorepicker/init(_:pickeroptioncontent:confirmation:)](https://developer.apple.com/documentation/storekit/subscriptionstorepicker/init(_:pickeroptioncontent:confirmation:))

# init(\_:pickerOptionContent:confirmation:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(_ configuration: SubscriptionStoreControlStyleConfiguration, @ViewBuilder pickerOptionContent: @escaping (SubscriptionStoreControlStyleConfiguration.PickerOption) -> PickerContent, @ViewBuilder confirmation: @escaping (SubscriptionStoreControlStyleConfiguration.Option) -> ConfirmationContent)
```

## See Also

### Creating a subscription store picker

- [init(pickerContent:confirmation:)](init%28pickercontent_confirmation_%29.md): Conforms when `PickerContent` conforms to `View` and `ConfirmationContent` conforms to `View`.
