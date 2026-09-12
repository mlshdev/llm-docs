> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentunavailableview/init(_:image:description:)](https://developer.apple.com/documentation/swiftui/contentunavailableview/init(_:image:description:))

# init(\_:image:description:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an interface, consisting of a title generated from a localized string resource, an image and additional content, that you display when the content of your app is unavailable to users.

## Declaration

```swift
@export(implementation) nonisolated init(_ title: LocalizedStringResource, image name: String, description: Text? = nil)
```

## Parameters

- `title`: A title generated from a localized string.
- `name`: The name of the image resource to lookup.
- `description`: The view that describes the interface.

## See Also

### Creating an unavailable view

- [init(label:description:actions:)](init%28label_description_actions_%29.md): Creates an interface, consisting of a label and additional content, that you display when the content of your app is unavailable to users.
- [init(\_:systemImage:description:)](init%28__systemimage_description_%29.md): Conforms when `Label` is `Label<Text, Image>`, `Description` is `Text?`, and `Actions` is `EmptyView`. Creates an interface, consisting of a title generated from a localized string resource, a system icon image and additional content, that you display when the content of your app is unavailable to users.
