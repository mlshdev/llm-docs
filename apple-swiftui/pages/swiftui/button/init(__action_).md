> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:action:)](https://developer.apple.com/documentation/swiftui/button/init(_:action:))

# init(\_:action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a button that generates its label from a localized string resource.

## Declaration

```swift
@preconcurrency @export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, action: @escaping @MainActor () -> Void)
```

## Parameters

- `titleResource`: Text resource for the button’s localized title, that describes the purpose of the button’s `action`.
- `action`: The action to perform when the user triggers the button.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a button

- [init(action:label:)](init%28action_label_%29.md): Creates a button that displays a custom label.
- [init(\_:image:action:)](init%28__image_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:action:)](init%28__systemimage_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button that generates its label from a localized string key and system image name.
