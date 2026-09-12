> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menu/init(content:label:primaryaction:)](https://developer.apple.com/documentation/swiftui/menu/init(content:label:primaryaction:))

# init(content:label:primaryAction:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a menu with a custom primary action and custom label.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label, primaryAction: @escaping () -> Void)
```

## Parameters

- `content`: A group of menu items.
- `label`: A view describing the content of the menu.
- `primaryAction`: The action to perform on primary interaction with the menu.

## See Also

### Creating a menu with a primary action

- [init(\_:content:primaryAction:)](init%28__content_primaryaction_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a menu with a custom primary action that generates its label from a localized string resource.
- [init(\_:image:content:primaryAction:)](init%28__image_content_primaryaction_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu with a custom primary action that generates its label from a localized string resource.
- [init(\_:systemImage:content:primaryAction:)](init%28__systemimage_content_primaryaction_%29.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates a menu with a custom primary action that generates its label from a localized string key and system image.
