> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/button/init(_:systemimage:action:)](https://developer.apple.com/documentation/swiftui/button/init(_:systemimage:action:))

# init(\_:systemImage:action:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a button that generates its label from a localized string key and system image name.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleKey: LocalizedStringKey, systemImage: String, action: @escaping @MainActor () -> Void)
```

## Parameters

- `titleKey`: The key for the button’s localized title, that describes the purpose of the button’s `action`.
- `systemImage`: The name of the image resource to lookup.
- `action`: The action to perform when the user triggers the button.

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](../populating-swiftui-menus-with-adaptive-controls.md)

<a id="discussion"></a>

## Discussion

This initializer creates a [Label](../label.md) view on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See [Text](../text.md) for more information about localizing strings.

## See Also

### Creating a button

- [init(action:label:)](init%28action_label_%29.md): Creates a button that displays a custom label.
- [init(\_:action:)](init%28__action_%29.md): Conforms when `Label` is `Text`. Creates a button that generates its label from a localized string resource.
- [init(\_:image:action:)](init%28__image_action_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a button that generates its label from a localized string resource and image resource.
