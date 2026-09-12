> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menubarextra/init(_:image:content:)](https://developer.apple.com/documentation/swiftui/menubarextra/init(_:image:content:))

# init(\_:image:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, image: ImageResource, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: The localized string resource to use for the accessibility label of the item.
- `image`: The image resource to use as the label.
- `content`: A `View` to display when the user selects the item.

<a id="discussion"></a>

## Discussion

The item defines the primary scene of an `App`.

When this item is removed from the system menu bar by the user, the application will be automatically quit. As such, it should not be used in conjunction with other scene types in your `App`.

## See Also

### Creating a menu bar extra with an image

- [init(\_:image:isInserted:content:)](init%28__image_isinserted_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with an image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.
- [init(\_:systemImage:isInserted:content:)](init%28__systemimage_isinserted_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu bar extra with a system image to use as the items label. The provided title will be used by the accessibility system.
