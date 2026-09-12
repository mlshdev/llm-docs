> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(_:ison:)](https://developer.apple.com/documentation/swiftui/toggle/init(_:ison:))

# init(\_:isOn:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a toggle that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, isOn: Binding<Bool>)
```

## Parameters

- `titleResource`: Text resource for the toggle’s localized title, that describes the purpose of the toggle.
- `isOn`: A binding to a property that indicates whether the toggle is on or off.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. See `Text` for more information about localizing strings.

## See Also

### Creating a toggle

- [init(isOn:label:)](init%28ison_label_%29.md): Creates a toggle that displays a custom label.
- [init(\_:image:isOn:)](init%28__image_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:isOn:)](init%28__systemimage_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string key and system image.
