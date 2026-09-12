> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstoreview/init(subscriptions:content:)](https://developer.apple.com/documentation/storekit/subscriptionstoreview/init(subscriptions:content:))

# init(subscriptions:content:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<C>(subscriptions: some Collection<Product>, @StoreContentBuilder content: () -> C) where Content == SubscriptionStoreContentView<C>, C : StoreContent
```

## See Also

### Creating subscription store views with a hierarchichal structure

- [init(groupID:visibleRelationships:content:)](init%28groupid_visiblerelationships_content_%29.md): Conforms when `Content` conforms to `View`.
- [init(productIDs:content:)](init%28productids_content_%29.md): Conforms when `Content` conforms to `View`.
