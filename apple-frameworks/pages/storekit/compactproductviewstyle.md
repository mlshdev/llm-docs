> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/compactproductviewstyle](https://developer.apple.com/documentation/storekit/compactproductviewstyle)

# CompactProductViewStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A style for a product view that’s suitable for layouts with less available space, or for displaying more items in a small amount of space.

## Declaration

```swift
@MainActor @preconcurrency struct CompactProductViewStyle
```

## Topics

### Getting the compact product view style

- [compact](productviewstyle/compact.md): Conforms when `Self` is `CompactProductViewStyle`. An product view style suitable for layouts where less space is available, or for displaying more items in a small amount of space.

### Creating the style

- [init()](compactproductviewstyle/init%28%29.md)

## Relationships

### Conforms To

- [ProductViewStyle](productviewstyle.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AutomaticProductViewStyle](automaticproductviewstyle.md)
- [RegularProductViewStyle](regularproductviewstyle.md): A style for a product view that uses a standard, platform-appropriate layout.
- [LargeProductViewStyle](largeproductviewstyle.md): A style for a product view that’s suitable for layouts where the in-app purchase content is prominent.
