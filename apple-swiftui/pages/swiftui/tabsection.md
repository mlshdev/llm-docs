> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabsection](https://developer.apple.com/documentation/swiftui/tabsection)

# TabSection

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A container that you can use to add hierarchy within a tab view.

## Declaration

```swift
struct TabSection<Header, Content, Footer, SelectionValue>
```

<a id="overview"></a>

## Overview

Use [TabSection](tabsection.md) to organize tab content into separate sections. Each section has custom tab content that you provide on a per-instance basis. You can also provide a header for each section.

## Topics

### Creating a tab section

- [init(content:)](tabsection/init%28content_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with the provided section content.
- [init(\_:content:)](tabsection/init%28__content_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with the provided content.
- [init(content:header:)](tabsection/init%28content_header_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with a header and the provided section content.

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
- [Tab](tab.md): The content for a tab and the tab’s associated tab item in a tab view.
- [TabRole](tabrole.md): A value that defines the purpose of the tab.
- [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md): Sets the style for the tab view within the current environment.
