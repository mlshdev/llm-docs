> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(_:image:ison:)](https://developer.apple.com/documentation/swiftui/toggle/init(_:image:ison:))

# init(\_:image:isOn:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a toggle that generates its label from a localized string resource and image resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, image: ImageResource, isOn: Binding<Bool>)
```

## Parameters

- `titleResource`: Text resource for the toggle’s localized title, that describes the purpose of the toggle.
- `image`: The name of the image resource to lookup.
- `isOn`: A binding to a property that indicates whether the toggle is on or off.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. See `Text` for more information about localizing strings.

## See Also

### Creating a toggle

- [init(\_:isOn:)](init%28__ison_%29.md): Conforms when `Label` is `Text`. Creates a toggle that generates its label from a localized string resource.
- [init(isOn:label:)](init%28ison_label_%29.md): Creates a toggle that displays a custom label.
- [init(\_:systemImage:isOn:)](init%28__systemimage_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string key and system image.
