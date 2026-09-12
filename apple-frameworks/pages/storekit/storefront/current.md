> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storefront/current](https://developer.apple.com/documentation/storekit/storefront/current)

# current

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current App Store storefront for product purchases.

## Declaration

```swift
static var current: Storefront? { get async }
```

<a id="Discussion"></a>

## Discussion

Use [current](current.md) to determine a customer’s current storefront region and offer in-app products suitable for that region. You maintain your own list of product identifiers and the storefronts in which you make them available.

## See Also

### Storefront information

- [Storefront](../storefront.md): The region and unique identifier of the App Store storefront for the device.
- [updates](updates.md): The asynchronous sequence that emits storefront information when the system updates the storefront.
