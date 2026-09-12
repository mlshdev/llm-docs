> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(action:label:)](https://developer.apple.com/documentation/swiftui/button/init(action:label:))

# init(action:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a button that displays a custom label.

## Declaration

```swift
@preconcurrency nonisolated init(action: @escaping @MainActor () -> Void, @ContentBuilder label: () -> Label)
```

## Parameters

- `action`: The action to perform when the user triggers the button.
- `label`: A view that describes the purpose of the button’s `action`.

## See Also

### Creating a button

- [init(\_:action:)](init%28__action_%29.md): Conforms when `Label` is `Text`. Creates a button that generates its label from a localized string resource.
- [init(\_:image:action:)](init%28__image_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:action:)](init%28__systemimage_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button that generates its label from a localized string key and system image name.
