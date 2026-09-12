> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/showmanagesubscriptions(in:subscriptiongroupid:)](https://developer.apple.com/documentation/storekit/appstore/showmanagesubscriptions(in:subscriptiongroupid:))

# showManageSubscriptions(in:subscriptionGroupID:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Presents the App Store sheet for managing subscriptions for a subscription group.

## Declaration

```swift
@MainActor static func showManageSubscriptions(in scene: UIWindowScene, subscriptionGroupID: String) async throws
```

## Parameters

- `scene`: The [UIWindowScene](../../uikit/uiwindowscene.md) that the system displays the sheet on.
- `subscriptionGroupID`: The subscription group identifier that the subscription belongs to.

## Mentioned In

- [Choosing a StoreKit API for In-App Purchases](../choosing-a-storekit-api-for-in-app-purchases.md)
- [Supporting monthly subscriptions with a 12-month commitment](../supporting-monthly-subscriptions-with-a-12-month-commitment.md)

## See Also

### Managing subscriptions

- [showManageSubscriptions(in:)](showmanagesubscriptions%28in_%29.md): Presents the App Store sheet for managing subscriptions.
