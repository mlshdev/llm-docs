> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(_:systemimage:content:)](https://developer.apple.com/documentation/swiftui/menu/init(_:systemimage:content:))

# init(\_:systemImage:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu that generates its label from a localized string key and system image.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, systemImage: String, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleKey`: The key for the link’s localized title, which describes the contents of the menu.
- `systemImage`: The name of the image resource to lookup.
- `content`: A group of menu items.

## See Also

### Creating a menu from content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string resource.
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu with a custom label.
- [init(\_:image:content:)](init%28__image_content_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu that generates its label from a localized string resource and image resource.
