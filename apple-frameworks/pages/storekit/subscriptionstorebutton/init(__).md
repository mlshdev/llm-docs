> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorebutton/init(_:)](https://developer.apple.com/documentation/storekit/subscriptionstorebutton/init(_:))

# init(\_:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a button with an automatic label that describes the subscription option and starts a subscribe interaction when someone selects the button.

## Declaration

```swift
@MainActor @preconcurrency init(_ option: SubscriptionStoreControlStyleConfiguration.Option)
```

<a id="Discussion"></a>

## Discussion

You receive [SubscriptionStoreControlStyleConfiguration.Option](../subscriptionstorecontrolstyleconfiguration/option.md) values to initialize the subscribe button from the [makeBody(configuration:)](../subscriptionstorecontrolstyle/makebody%28configuration_%29.md) method of your custom subscription store control style.
