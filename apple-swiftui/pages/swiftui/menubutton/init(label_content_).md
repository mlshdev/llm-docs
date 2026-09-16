> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/menubutton/init(label:content:)

# init(label:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 27.2)

Creates a menu button with the specified label and content.

> Use [Menu](../menu.md) instead.

## Declaration

```swift
nonisolated init(label: Label, @ContentBuilder content: () -> Content)
```

## See Also

### Creating a menu button

- [init(\_:content:)](init%28__content_%29.md): Deprecated. Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu button with the specified localized title and content.
