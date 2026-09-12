> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstoreview/init(productids:)](https://developer.apple.com/documentation/storekit/subscriptionstoreview/init(productids:))

# init(productIDs:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view that loads subscriptions based on a collection of product identifiers, and merchandises them with automatic marketing content.

## Declaration

```swift
nonisolated init(productIDs: some Collection<String>) where Content == AutomaticSubscriptionStoreMarketingContent
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.

## See Also

### Creating subscription store views with automatic marketing content

- [init(groupID:visibleRelationships:)](init%28groupid_visiblerelationships_%29.md): Creates a view that loads all subscriptions in a subscription group from the App Store, and merchandises them with automatic marketing content.
- [init(subscriptions:)](init%28subscriptions_%29.md): Creates a view that displays a collection of subscription options, and merchandises them with automatic marketing content.
