> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/controlgroup/init(_:image:content:)](https://developer.apple.com/documentation/swiftui/controlgroup/init(_:image:content:))

# init(\_:image:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new control group with the specified content that generates its label from a localized string resource and image resource.

## Declaration

```swift
@export(implementation) nonisolated init<C>(_ titleResource: LocalizedStringResource, image: ImageResource, @ContentBuilder content: () -> C) where Content == LabeledControlGroupContent<C, Label<Text, Image>>, C : View
```

## Parameters

- `titleResource`: Text resource for the group’s localized title, that describes the contents of the group.

## See Also

### Creating a control group with an image

- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Content` conforms to `View`. Creates a new control group with the specified content that generates its label from a string and image name.
