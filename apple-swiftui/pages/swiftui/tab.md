> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tab](https://developer.apple.com/documentation/swiftui/tab)

# Tab

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The content for a tab and the tab’s associated tab item in a tab view.

## Declaration

```swift
struct Tab<Value, Content, Label>
```

## Topics

### Creating a tab

- [init(content:)](tab/init%28content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
- [init(value:content:)](tab/init%28value_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
- [init(role:content:)](tab/init%28role_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with an empty label.
- [init(value:role:content:)](tab/init%28value_role_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab with a label inferred from the role.

### Creating a tab with label

- [init(content:label:)](tab/init%28content_label_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab with a label that you can use in a tab view.
- [init(value:content:label:)](tab/init%28value_content_label_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab with a label that you can use in a tab view.
- [init(role:content:label:)](tab/init%28role_content_label_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab with a label that you can use in a tab view.
- [init(value:role:content:label:)](tab/init%28value_role_content_label_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab with a label that you can use in a tab view.

### Creating a tab with system symbol

- [init(\_:systemImage:content:)](tab/init%28__systemimage_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view using a system image for the tab item’s image, and a localized string key label.
- [init(\_:systemImage:value:content:)](tab/init%28__systemimage_value_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value using a system image for the tab’s tab item image, with a localized string key label.
- [init(\_:systemImage:role:content:)](tab/init%28__systemimage_role_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view using a system image for the tab item’s image, and a localized string key label.
- [init(\_:systemImage:value:role:content:)](tab/init%28__systemimage_value_role_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value using a system image for the tab’s tab item image, with a localized string key label.

### Creating a tab with image

- [init(\_:image:content:)](tab/init%28__image_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with a localized string key label.
- [init(\_:image:value:content:)](tab/init%28__image_value_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value, with a localized string key label.
- [init(\_:image:role:content:)](tab/init%28__image_role_content_%29.md): Conforms when `Value` is `Never`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a new tab that you can use in a tab view, with a localized string key label.
- [init(\_:image:value:role:content:)](tab/init%28__image_value_role_content_%29.md): Conforms when `Value` conforms to `Hashable`, `Content` conforms to `View`, and `Label` conforms to `View`. Creates a tab that the tab view presents when the tab view’s selection matches the tab’s value, with a localized string key label.

### Supporting types

- [DefaultTabLabel](defaulttablabel.md): The default label to use for a tab or tab section.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [TabContent](tabcontent.md)

## See Also

### Presenting views in tabs

- [Enhancing your app’s content with tab navigation](enhancing-your-app-content-with-tab-navigation.md): Keep your app content front and center while providing quick access to navigation using the tab bar.
- [TabView](tabview.md): A view that switches between multiple child views using interactive user interface elements.
- [TabRole](tabrole.md): A value that defines the purpose of the tab.
- [TabSection](tabsection.md): A container that you can use to add hierarchy within a tab view.
- [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md): Sets the style for the tab view within the current environment.
