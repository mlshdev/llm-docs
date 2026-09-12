> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(content:label:)](https://developer.apple.com/documentation/swiftui/menu/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu with a custom label.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `content`: A group of menu items.
- `label`: A view describing the content of the menu.

## See Also

### Creating a menu from content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string resource.
- [init(\_:image:content:)](init%28__image_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string key and system image.
