> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/productviewstyle/compact](https://developer.apple.com/documentation/storekit/productviewstyle/compact)

# compact

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An product view style suitable for layouts where less space is available, or for displaying more items in a small amount of space.

## Declaration

```swift
@MainActor @preconcurrency static var compact: CompactProductViewStyle { get }
```

## See Also

### Getting built-in product view styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticProductViewStyle`.
- [large](large.md): Conforms when `Self` is `LargeProductViewStyle`. A product view style suitable for layouts where the in-app purchase content is prominent.
- [regular](regular.md): Conforms when `Self` is `RegularProductViewStyle`. A product view style that uses a standard, platform-appropriate layout.
