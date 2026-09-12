> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextra/init(_:systemimage:isinserted:content:)](https://developer.apple.com/documentation/swiftui/menubarextra/init(_:systemimage:isinserted:content:))

# init(\_:systemImage:isInserted:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, systemImage: String, isInserted: Binding<Bool>, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: The localized string resource to use for the accessibility label of the item.
- `systemImage`: The name of a system image to use as the label.
- `isInserted`: Whether the item is inserted in the menu bar. The item may or may not be visible, depending on the number of items present.
- `content`: A `View` to display when the user selects the item.

<a id="discussion"></a>

## Discussion

The item will be displayed in the system menu bar when the specified binding is set to `true`. If the user removes the item from the menu bar, the binding will be set to `false`.

## See Also

### Creating a menu bar extra with an image

- [init(\_:image:content:)](init%28__image_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:image:isInserted:content:)](init%28__image_isinserted_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.
