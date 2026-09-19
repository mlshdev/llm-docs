> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/isfamilyshareable

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

Check the value of [isFamilyShareable](isfamilyshareable.md) to learn whether an Apple In-App Purchase is sharable with the family group.

When displaying Apple In-App Purchases in your app, indicate whether the product includes Family Sharing to help customers make a selection that best fits their needs.

Configure your Apple In-App Purchases to allow Family Sharing in App Store Connect. For more information about setting up Family Sharing, see [Turn-on Family Sharing for Apple In-App Purchases](https://developer.apple.com/help/app-store-connect/configure-in-app-purchase-settings/turn-on-family-sharing-for-in-app-purchases).
