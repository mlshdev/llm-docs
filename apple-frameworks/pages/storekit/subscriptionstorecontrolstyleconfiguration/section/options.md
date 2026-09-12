> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/options](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/section/options)

# options

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The subscription options to merchandise within a section.

## Declaration

```swift
var options: [SubscriptionStoreControlStyleConfiguration.Option]
```

<a id="Discussion"></a>

## Discussion

This property represents the main content of a section. The view your style creates needs to provide a control to subscribe to each option in the array.

Use the properties of each [SubscriptionStoreControlStyleConfiguration.Option](../option.md) value to declare your control style, and use the [subscribe()](../option/subscribe%28%29.md) method in response to a subscribe interaction.

> **Tip**

>  Use [SubscriptionOptionSection](../../subscriptionoptionsection.md) to configure the contents of a section when creating a [SubscriptionStoreView](../../subscriptionstoreview.md).
