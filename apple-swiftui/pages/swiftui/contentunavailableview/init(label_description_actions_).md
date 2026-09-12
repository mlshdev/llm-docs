> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentunavailableview/init(label:description:actions:)](https://developer.apple.com/documentation/swiftui/contentunavailableview/init(label:description:actions:))

# init(label:description:actions:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.

## Declaration

```swift
nonisolated init(@ContentBuilder label: () -> Label, @ContentBuilder description: () -> Description = { EmptyView() }, @ContentBuilder actions: () -> Actions = { EmptyView() })
```

## Parameters

- `label`: The label that describes the view.
- `description`: The view that describes the interface.
- `actions`: The content of the interface actions.

## See Also

### Creating an unavailable view

- [init(\_:image:description:)](init%28__image_description_%29.md): Conforms when `Label` is `Label<Text, Image>`, `Description` is `Text?`, and `Actions` is `EmptyView`. Creates an interface, consisting of a title generated from a localized string resource, an image and additional content, that you display when the content of your app is unavailable to users.
- [init(\_:systemImage:description:)](init%28__systemimage_description_%29.md): Conforms when `Label` is `Label<Text, Image>`, `Description` is `Text?`, and `Actions` is `EmptyView`. Creates an interface, consisting of a title generated from a localized string resource, a system icon image and additional content, that you display when the content of your app is unavailable to users.
