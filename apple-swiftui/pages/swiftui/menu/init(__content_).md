> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(_:content:)](https://developer.apple.com/documentation/swiftui/menu/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, @ContentBuilder content: () -> Content) where Label == Text
```

## Parameters

- `titleResource`: Text resource for the link’s localized title, which describes the contents of the menu.
- `content`: A group of menu items.

## See Also

### Creating a menu from content

- [init(content:label:)](init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu with a custom label.
- [init(\_:image:content:)](init%28__image_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string key and system image.
