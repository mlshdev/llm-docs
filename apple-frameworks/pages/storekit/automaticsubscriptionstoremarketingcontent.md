> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/automaticsubscriptionstoremarketingcontent

# AutomaticSubscriptionStoreMarketingContent

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A view that represents the default marketing content for a subscription store.

## Declaration

```swift
@MainActor @preconcurrency struct AutomaticSubscriptionStoreMarketingContent
```

<a id="overview"></a>

## Overview

You don’t use this type directly. Instead, create a [SubscriptionStoreView](subscriptionstoreview.md) using an initializer that doesn’t include a `marketingContent` parameter for providing custom marketing content.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Supporting types

- [SubscriptionStoreContentView](subscriptionstorecontentview.md)
