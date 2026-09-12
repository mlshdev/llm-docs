> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscribe()](https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/option/subscribe())

# subscribe()

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Initiates a purchase when a customer activates a control to subscribe to the option.

## Declaration

```swift
func subscribe()
```

<a id="Discussion"></a>

## Discussion

Call the [subscribe()](subscribe%28%29.md) method within your custom style when the customer chooses to make a purchase.

> **Important**

>  Don’t call purchase methods, such as [purchase(confirmIn:options:)](../../product/purchase%28confirmin_options_%29-8eai6.md), on the [subscription](subscription.md) property from your custom style.
