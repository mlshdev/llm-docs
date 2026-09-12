> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/regularproductviewstyle](https://developer.apple.com/documentation/storekit/regularproductviewstyle)

# RegularProductViewStyle

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A style for a product view that uses a standard, platform-appropriate layout.

## Declaration

```swift
@MainActor @preconcurrency struct RegularProductViewStyle
```

## Topics

### Getting the regular product view style

- [regular](productviewstyle/regular.md): Conforms when `Self` is `RegularProductViewStyle`. A product view style that uses a standard, platform-appropriate layout.

### Creating the style

- [init()](regularproductviewstyle/init%28%29.md): Creates a regular product view style.

## Relationships

### Conforms To

- [ProductViewStyle](productviewstyle.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AutomaticProductViewStyle](automaticproductviewstyle.md)
- [CompactProductViewStyle](compactproductviewstyle.md): A style for a product view that’s suitable for layouts with less available space, or for displaying more items in a small amount of space.
- [LargeProductViewStyle](largeproductviewstyle.md): A style for a product view that’s suitable for layouts where the in-app purchase content is prominent.
