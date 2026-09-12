> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabsectionexpansion](https://developer.apple.com/documentation/swiftui/tabsectionexpansion)

# TabSectionExpansion

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The default expansion state for a tab section in the sidebar.

## Declaration

```swift
struct TabSectionExpansion
```

<a id="overview"></a>

## Overview

Use this type in conjunction with the [defaultSectionExpansion(\_:)](tabcontent/defaultsectionexpansion%28__%29.md) modifier.

## Topics

### Tab section expansion options

- [automatic](tabsectionexpansion/automatic.md): The system determines the default expansion state.
- [collapsed](tabsectionexpansion/collapsed.md): The section is initially collapsed in the sidebar.
- [expanded](tabsectionexpansion/expanded.md): The section is initially expanded in the sidebar.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring tab content

- [badge(\_:)](tabcontent/badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](tabcontent/contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](tabcontent/customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](tabcontent/customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](tabcontent/defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [defaultVisibility(\_:for:)](tabcontent/defaultvisibility%28__for_%29.md): Configures the default visibility of a tab in customizable contexts.
- [disabled(\_:)](tabcontent/disabled%28__%29.md): Controls whether users can interact with this tab.
- [draggable(\_:)](tabcontent/draggable%28__%29.md): Activates this tab as the source of a drag and drop operation. This tab can only be dragged when in the sidebar.
- [dropDestination(for:action:)](tabcontent/dropdestination%28for_action_%29.md): Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [help(\_:)](tabcontent/help%28__%29.md): Adds help text to a tab using a text view that you provide.
- [hidden(\_:)](tabcontent/hidden%28__%29.md): Hides the tab from the user.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](tabcontent/popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [popover(item:attachmentAnchor:arrowEdge:content:)](tabcontent/popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](tabcontent/sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](tabcontent/springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
