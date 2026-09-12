> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tab/init(_:systemimage:role:content:)](https://developer.apple.com/documentation/swiftui/tab/init(_:systemimage:role:content:))

# init(\_:systemImage:role:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new tab that you can use in a tab view using a system image for the tab item’s image, and a localized string key label.

## Declaration

```swift
init(_ titleKey: LocalizedStringKey, systemImage: String, role: TabRole?, @ContentBuilder content: () -> Content) where Label == DefaultTabLabel
```

## Parameters

- `titleKey`: The localized string key label for the tab’s tab item.
- `systemImage`: The image for the tab’s tab item.
- `role`: The role defining the semantic purpose of the tab.
- `content`: The view content of the tab.

## See Also

### Creating a tab with system symbol

- [init(\_:systemImage:content:)](init%28__systemimage_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view using a system image for the tab item’s image, and a localized string key label.
- [init(\_:systemImage:value:content:)](init%28__systemimage_value_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value using a system image for the tab’s tab item image, with a localized string key label.
- [init(\_:systemImage:value:role:content:)](init%28__systemimage_value_role_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value using a system image for the tab’s tab item image, with a localized string key label.
