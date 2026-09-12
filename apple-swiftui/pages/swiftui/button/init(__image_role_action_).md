> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:image:role:action:)](https://developer.apple.com/documentation/swiftui/button/init(_:image:role:action:))

# init(\_:image:role:action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a button with a specified role that generates its label from a localized string resource and an image resource.

## Declaration

```swift
@preconcurrency @export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, image: ImageResource, role: ButtonRole?, action: @escaping @MainActor () -> Void)
```

## Parameters

- `titleResource`: Text resource for the button’s localized title, that describes the purpose of the button’s `action`.
- `image`: The image resource to lookup.
- `role`: An optional semantic role describing the button. A value of `nil` means that the button doesn’t have an assigned role.
- `action`: The action to perform when the user triggers the button.

<a id="discussion"></a>

## Discussion

This initializer creates a [Label](../label.md) view on your behalf. See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a button with a role

- [init(role:action:label:)](init%28role_action_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button with a specified role that displays a custom label.
- [init(\_:role:action:)](init%28__role_action_%29.md): Conforms when `Label` is `Text`. Creates a button with a specified role that generates its label from a localized string resource.
- [init(\_:systemImage:role:action:)](init%28__systemimage_role_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a localized string key and a system image.
