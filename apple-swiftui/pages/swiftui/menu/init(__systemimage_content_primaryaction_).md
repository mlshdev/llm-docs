> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(_:systemimage:content:primaryaction:)](https://developer.apple.com/documentation/swiftui/menu/init(_:systemimage:content:primaryaction:))

# init(\_:systemImage:content:primaryAction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu with a custom primary action that generates its label from a localized string key and system image.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, systemImage: String, @ContentBuilder content: () -> Content, primaryAction: @escaping () -> Void)
```

## Parameters

- `titleKey`: The key for the link’s localized title, which describes the contents of the menu.
- `systemImage`: The name of the image resource to lookup.
- `content`: A group of menu items.
- `primaryAction`: The action to perform on primary interaction with the menu.

## See Also

### Creating a menu with a primary action

- [init(\_:content:primaryAction:)](init%28__content_primaryaction_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu with a custom primary action that generates its label from a localized string resource.
- [init(content:label:primaryAction:)](init%28content_label_primaryaction_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu with a custom primary action and custom label.
- [init(\_:image:content:primaryAction:)](init%28__image_content_primaryaction_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu with a custom primary action that generates its label from a localized string resource.
