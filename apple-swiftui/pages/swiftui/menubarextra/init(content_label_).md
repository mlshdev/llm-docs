> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextra/init(content:label:)](https://developer.apple.com/documentation/swiftui/menubarextra/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a menu bar extra that will be displayed in the system menu bar, and defines the primary scene of an `App`.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `content`: A `View` to display when the user selects the item.
- `label`: A `View` to use as the label in the system menu bar.

<a id="discussion"></a>

## Discussion

When this item is removed from the system menu bar by the user, the application will be automatically quit. As such, it should not be used in conjunction with other scene types in your `App`.

## See Also

### Creating a menu bar extra

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu bar extra with a localized resource for a localized string to use as the label. The extra defines the primary scene of an `App`.
- [init(\_:isInserted:content:)](init%28__isinserted_content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu bar extra with a localized resource for a localized string to use as the label. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.
- [init(isInserted:content:label:)](init%28isinserted_content_label_%29.md): Creates a menu bar extra. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.
