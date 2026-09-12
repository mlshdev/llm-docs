> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:systemimage:role:action:)](https://developer.apple.com/documentation/swiftui/button/init(_:systemimage:role:action:))

# init(\_:systemImage:role:action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a button with a specified role that generates its label from a localized string key and a system image.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, systemImage: String, role: ButtonRole?, action: @escaping @MainActor () -> Void)
```

## Parameters

- `titleKey`: The key for the button’s localized title, that describes the purpose of the button’s `action`.
- `systemImage`: The name of the image resource to lookup.
- `role`: An optional semantic role describing the button. A value of `nil` means that the button doesn’t have an assigned role.
- `action`: The action to perform when the user triggers the button.

<a id="discussion"></a>

## Discussion

This initializer creates a [Label](../label.md) view on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a button with a role

- [init(role:action:label:)](init%28role_action_label_%29.md): Conforms when `Label` conforms to `View`. Creates a button with a specified role that displays a custom label.
- [init(\_:role:action:)](init%28__role_action_%29.md): Conforms when `Label` is `Text`. Creates a button with a specified role that generates its label from a localized string resource.
- [init(\_:image:role:action:)](init%28__image_role_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button with a specified role that generates its label from a localized string resource and an image resource.
