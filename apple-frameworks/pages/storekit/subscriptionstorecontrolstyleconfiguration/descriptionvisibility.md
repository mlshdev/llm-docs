> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/subscriptionstorecontrolstyleconfiguration/descriptionvisibility

# descriptionVisibility

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The visibility of product descriptions.

## Declaration

```swift
var descriptionVisibility: Visibility { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if you choose to support configuring the description visibility in your custom style. It reflects the value that the ancestor view sets with the [productDescription(\_:)](https://developer.apple.com/documentation/swiftui/view/productdescription%28_:%29) view modifier.
