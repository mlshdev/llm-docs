> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/font/custom(_:fixedsize:)

# custom(\_:fixedSize:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Create a custom font with the given `name` and a fixed `size` that does not scale with Dynamic Type.

## Declaration

```swift
static func custom(_ name: String, fixedSize: CGFloat) -> Font
```

## See Also

### Creating custom fonts

- [custom(\_:size:relativeTo:)](custom%28__size_relativeto_%29.md): Create a custom font with the given `name` and `size` that scales relative to the given `textStyle`.
- [custom(\_:size:)](custom%28__size_%29.md): Create a custom font with the given `name` and `size` that scales with the body text style.
