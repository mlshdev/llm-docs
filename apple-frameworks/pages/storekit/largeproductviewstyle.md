> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/largeproductviewstyle](https://developer.apple.com/documentation/storekit/largeproductviewstyle)

# LargeProductViewStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A style for a product view that’s suitable for layouts where the in-app purchase content is prominent.

## Declaration

```swift
@MainActor @preconcurrency struct LargeProductViewStyle
```

## Topics

### Getting the large product view style

- [large](productviewstyle/large.md): Conforms when `Self` is `LargeProductViewStyle`. A product view style suitable for layouts where the in-app purchase content is prominent.

### Creating the style

- [init()](largeproductviewstyle/init%28%29.md)

## Relationships

### Conforms To

- [ProductViewStyle](productviewstyle.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AutomaticProductViewStyle](automaticproductviewstyle.md)
- [CompactProductViewStyle](compactproductviewstyle.md): A style for a product view that’s suitable for layouts with less available space, or for displaying more items in a small amount of space.
- [RegularProductViewStyle](regularproductviewstyle.md): A style for a product view that uses a standard, platform-appropriate layout.
