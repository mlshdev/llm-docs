> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(ison:label:)](https://developer.apple.com/documentation/swiftui/toggle/init(ison:label:))

# init(isOn:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a toggle that displays a custom label.

## Declaration

```swift
nonisolated init(isOn: Binding<Bool>, @ContentBuilder label: () -> Label)
```

## Parameters

- `isOn`: A binding to a property that determines whether the toggle is on or off.
- `label`: A view that describes the purpose of the toggle.

## See Also

### Creating a toggle

- [init(\_:isOn:)](init%28__ison_%29.md): Conforms when `Label` is `Text`. Creates a toggle that generates its label from a localized string resource.
- [init(\_:image:isOn:)](init%28__image_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:isOn:)](init%28__systemimage_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string key and system image.
