> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextra/init(_:isinserted:content:)](https://developer.apple.com/documentation/swiftui/menubarextra/init(_:isinserted:content:))

# init(\_:isInserted:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a menu bar extra with a localized resource for a localized string to use as the label. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, isInserted: Binding<Bool>, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: The title resource to use for the label of the item.
- `isInserted`: Whether the item is inserted in the menu bar. The item may or may not be visible, depending on the number of items present.
- `content`: A `View` to display when the user selects the item.

## See Also

### Creating a menu bar extra

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a menu bar extra with a localized resource for a localized string to use as the label. The extra defines the primary scene of an `App`.
- [init(content:label:)](init%28content_label_%29.md): Creates a menu bar extra that will be displayed in the system menu bar, and defines the primary scene of an `App`.
- [init(isInserted:content:label:)](init%28isinserted_content_label_%29.md): Creates a menu bar extra. The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.
