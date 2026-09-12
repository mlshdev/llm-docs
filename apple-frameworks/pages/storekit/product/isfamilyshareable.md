> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/isfamilyshareable](https://developer.apple.com/documentation/storekit/product/isfamilyshareable)

# isFamilyShareable

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the product is available for Family Sharing in App Store Connect.

## Declaration

```swift
let isFamilyShareable: Bool
```

## Mentioned In

- [Supporting Family Sharing in your app](../supporting-family-sharing-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Check the value of [isFamilyShareable](isfamilyshareable.md) to learn whether an in-app purchase is sharable with the family group.

When displaying in-app purchases in your app, indicate whether the product includes Family Sharing to help customers make a selection that best fits their needs.

Configure your in-app purchases to allow Family Sharing in App Store Connect. For more information about setting up Family Sharing, see [Turn-on Family Sharing for in-app purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/turn-on-family-sharing-for-in-app-purchases).
