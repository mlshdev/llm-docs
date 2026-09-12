> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontent](https://developer.apple.com/documentation/swiftui/toolbarcontent)

# ToolbarContent

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Conforming types represent items that can be placed in various locations in a toolbar.

## Declaration

```swift
@MainActor @preconcurrency protocol ToolbarContent
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

### Implementing toolbar content

- [body](toolbarcontent/body-swift.property.md): The composition of content that comprise the toolbar content.
- [Body](toolbarcontent/body-swift.associatedtype.md): The type of content representing the body of this toolbar content.

### Setting visibility

- [visibilityPriority(\_:)](toolbarcontent/visibilitypriority%28__%29.md): Defines the visibility priority for a toolbar item.

### Instance Methods

- [contentMarginsRemoved(\_:)](toolbarcontent/contentmarginsremoved%28__%29.md): Configures whether the content margins are removed.
- [hidden(\_:)](toolbarcontent/hidden%28__%29.md): Hides a toolbar item within its toolbar.
- [matchedTransitionSource(id:in:)](toolbarcontent/matchedtransitionsource%28id_in_%29.md): Identifies this toolbar content as the source of a navigation transition, such as a zoom transition.
- [sharedBackgroundVisibility(\_:)](toolbarcontent/sharedbackgroundvisibility%28__%29.md): Controls the visibility of the glass background effect on items in the toolbar. In certain contexts, such as the navigation bar on iOS and the window toolbar on macOS, toolbar items will be given a glass background effect that is shared with other items in the same logical grouping.

## Relationships

### Inherited By

- [CustomizableToolbarContent](customizabletoolbarcontent.md)

### Conforming Types

- [DefaultToolbarItem](defaulttoolbaritem.md)
- [EmptyView](emptyview.md)
- [ForEach](foreach.md)
- [Group](group.md)
- [ToolbarItem](toolbaritem.md)
- [ToolbarItemGroup](toolbaritemgroup.md)
- [ToolbarOverflowMenu](toolbaroverflowmenu.md)
- [ToolbarSpacer](toolbarspacer.md)
- [ToolbarTitleMenu](toolbartitlemenu.md)
- [TupleContent](tuplecontent.md)

## See Also

### Populating a toolbar

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItem](toolbaritem.md): A model that represents an item which can be placed in the toolbar or navigation bar.
- [ToolbarItemGroup](toolbaritemgroup.md): A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.
- [ToolbarItemPlacement](toolbaritemplacement.md): A structure that defines the placement of a toolbar item.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [ToolbarOverflowMenu](toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContentBuilder](toolbarcontentbuilder.md): Constructs a toolbar item set from multi-expression closures.
- [ToolbarSpacer](toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](defaulttoolbaritem.md): A toolbar item that represents a system component.
