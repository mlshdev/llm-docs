> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent](https://developer.apple.com/documentation/swiftui/tabcontent)

# TabContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that provides content for programmatically selectable tabs in a tab view.

## Declaration

```swift
@MainActor @preconcurrency protocol TabContent<TabValue>
```

<a id="overview"></a>

## Overview

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Setting tab content

- [body](tabcontent/body-swift.property.md): The value of this type’s nested content.
- [Body](tabcontent/body-swift.associatedtype.md): The type of content representing the body of this content type.
- [TabValue](tabcontent/tabvalue.md): The type used to drive selection for the containing tab view.

### Configuring tab content

- [badge(\_:)](tabcontent/badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](tabcontent/contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](tabcontent/customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](tabcontent/customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](tabcontent/defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [TabSectionExpansion](tabsectionexpansion.md): The default expansion state for a tab section in the sidebar.
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
- [swipeActions(edge:allowsFullSwipe:content:)](tabcontent/swipeactions%28edge_allowsfullswipe_content_%29.md): Adds custom swipe actions to a tab in a tab view.
- [tabPlacement(\_:)](tabcontent/tabplacement%28__%29.md): Specifies the placement of a tab.
- [TabPlacement](tabplacement.md): A place that a tab can appear.

### Configuring tab accessibility

- [accessibilityHint(\_:isEnabled:)](tabcontent/accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after selecting the tab.
- [accessibilityIdentifier(\_:isEnabled:)](tabcontent/accessibilityidentifier%28__isenabled_%29.md): Uses the string you specify to identify the view. Use this value for testing. It isn’t visible to the user.
- [accessibilityInputLabels(\_:isEnabled:)](tabcontent/accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a tab.
- [accessibilityLabel(\_:isEnabled:)](tabcontent/accessibilitylabel%28__isenabled_%29.md): Adds a label to the tab that describes its contents.
- [accessibilityValue(\_:isEnabled:)](tabcontent/accessibilityvalue%28__isenabled_%29.md): Adds a textual description of the value that the tab contains.

## Relationships

### Conforming Types

- [AnyTabContent](anytabcontent.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [Tab](tab.md)
- [TabSection](tabsection.md)

## See Also

### Configuring a tab

- [sectionActions(content:)](view/sectionactions%28content_%29.md): Adds custom actions to a section.
- [TabPlacement](tabplacement.md): A place that a tab can appear.
- [TabContentBuilder](tabcontentbuilder.md): A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.
- [AnyTabContent](anytabcontent.md): Type erased tab content.
