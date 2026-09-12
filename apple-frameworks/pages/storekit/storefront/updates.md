> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storefront/updates](https://developer.apple.com/documentation/storekit/storefront/updates)

# updates

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The asynchronous sequence that emits storefront information when the system updates the storefront.

## Declaration

```swift
static var updates: Storefront.Storefronts { get }
```

<a id="Discussion"></a>

## Discussion

The storefront value can change at any time. Use [updates](updates.md) to listen for changes in this value. Respond to storefront changes by refreshing the list of your available products.

## See Also

### Storefront information

- [Storefront](../storefront.md): The region and unique identifier of the App Store storefront for the device.
- [current](current.md): The current App Store storefront for product purchases.
