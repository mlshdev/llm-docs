> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/productviewstyle/large

# large

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A product view style suitable for layouts where the Apple In-App Purchase content is prominent.

## Declaration

```swift
@MainActor @preconcurrency static var large: LargeProductViewStyle { get }
```

## See Also

### Getting built-in product view styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticProductViewStyle`.
- [compact](compact.md): Conforms when `Self` is `CompactProductViewStyle`. An product view style suitable for layouts where less space is available, or for displaying more items in a small amount of space.
- [regular](regular.md): Conforms when `Self` is `RegularProductViewStyle`. A product view style that uses a standard, platform-appropriate layout.
