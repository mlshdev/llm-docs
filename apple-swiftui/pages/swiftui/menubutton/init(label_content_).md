> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubutton/init(label:content:)](https://developer.apple.com/documentation/swiftui/menubutton/init(label:content:))

# init(label:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Creates a menu button with the specified label and content.

> Use [Menu](../menu.md) instead.

## Declaration

```swift
nonisolated init(label: Label, @ContentBuilder content: () -> Content)
```

## See Also

### Creating a menu button

- [init(\_:content:)](init%28__content_%29.md): Deprecated. Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu button with the specified localized title and content.
