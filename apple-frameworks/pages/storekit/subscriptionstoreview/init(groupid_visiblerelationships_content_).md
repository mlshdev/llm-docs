> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/subscriptionstoreview/init(groupid:visiblerelationships:content:)

# init(groupID:visibleRelationships:content:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated init<C>(groupID: String, visibleRelationships: Product.SubscriptionRelationship = .all, @StoreContentBuilder content: () -> C) where Content == SubscriptionStoreContentView<C>, C : StoreContent
```

## See Also

### Creating subscription store views with a hierarchichal structure

- [init(productIDs:content:)](init%28productids_content_%29.md): Conforms when `Content` conforms to `View`.
- [init(subscriptions:content:)](init%28subscriptions_content_%29.md): Conforms when `Content` conforms to `View`.
