> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/storebuttonkind/cancellation

# cancellation

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A type of button that people use to dismiss the current store presentation.

## Declaration

```swift
static var cancellation: StoreButtonKind { get }
```

<a id="discussion"></a>

## Discussion

This button type is available for [StoreView](../storeview.md) and [SubscriptionStoreView](../subscriptionstoreview.md) only.

## See Also

### Getting button types for store views

- [restorePurchases](restorepurchases.md): A type of button that people use to restore purchases.
