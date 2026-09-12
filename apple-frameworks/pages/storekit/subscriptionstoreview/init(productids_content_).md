> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstoreview/init(productids:content:)](https://developer.apple.com/documentation/storekit/subscriptionstoreview/init(productids:content:))

# init(productIDs:content:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<C>(productIDs: some Collection<String>, @StoreContentBuilder content: () -> C) where Content == SubscriptionStoreContentView<C>, C : StoreContent
```

## See Also

### Creating subscription store views with a hierarchichal structure

- [init(groupID:visibleRelationships:content:)](init%28groupid_visiblerelationships_content_%29.md): Conforms when `Content` conforms to `View`.
- [init(subscriptions:content:)](init%28subscriptions_content_%29.md): Conforms when `Content` conforms to `View`.
