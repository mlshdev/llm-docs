> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/subscriptionstorepickeroption/init(_:label:)

# init(\_:label:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(_ option: SubscriptionStoreControlStyleConfiguration.Option, @ViewBuilder label: @escaping (SubscriptionStoreControlStyleConfiguration.PickerOption) -> Label)
```

## See Also

### Creating a subscription picker option

- [init(\_:)](init%28__%29-4cb3l.md): Conforms when `Label` conforms to `View`.
- [init(\_:)](init%28__%29-3iu97.md): Conforms when `Label` conforms to `View`.
