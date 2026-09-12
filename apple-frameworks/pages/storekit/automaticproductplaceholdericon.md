> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/automaticproductplaceholdericon](https://developer.apple.com/documentation/storekit/automaticproductplaceholdericon)

# AutomaticProductPlaceholderIcon

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

A view that represents the default placeholder icon for an in-app store product.

## Declaration

```swift
@MainActor @preconcurrency struct AutomaticProductPlaceholderIcon
```

<a id="overview"></a>

## Overview

You don’t use this type directly. Instead, create a [ProductView](productview.md) or [StoreView](storeview.md) and provide product identifiers without a custom placeholder icon.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
