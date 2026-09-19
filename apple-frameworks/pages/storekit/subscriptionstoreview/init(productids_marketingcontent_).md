> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/subscriptionstoreview/init(productids:marketingcontent:)

# init(productIDs:marketingContent:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a view that loads a collection of subscriptions from the App Store, and merchandises them with custom marketing content.

## Declaration

```swift
nonisolated init(productIDs: some Collection<String>, @ViewBuilder marketingContent: () -> Content)
```

## Parameters

- `productIDs`: The product identifiers to load from the App Store.
- `marketingContent`: The view that contains marketing content to display above the store controls.

## See Also

### Creating subscription store views with custom marketing content

- [init(groupID:visibleRelationships:marketingContent:)](init%28groupid_visiblerelationships_marketingcontent_%29.md): Creates a view that loads all the subscriptions in a subscription group from the App Store, and merchandises them with custom marketing content.
- [init(subscriptions:marketingContent:)](init%28subscriptions_marketingcontent_%29.md): Creates a view that displays a collection of subscription options, and merchandises them with custom marketing content.
