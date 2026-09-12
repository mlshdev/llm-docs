> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement](https://developer.apple.com/documentation/swiftui/toolbaritemplacement)

# ToolbarItemPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A structure that defines the placement of a toolbar item.

## Declaration

```swift
struct ToolbarItemPlacement
```

<a id="overview"></a>

## Overview

There are two types of placements:

- Semantic placements, such as [principal](toolbaritemplacement/principal.md) and [navigation](toolbaritemplacement/navigation.md), denote the intent of the item being added. SwiftUI determines the appropriate placement for the item based on this intent and its surrounding context, like the current platform.
- Positional placements, such as [navigationBarLeading](toolbaritemplacement/navigationbarleading.md), denote a precise placement for the item, usually for a particular platform.

In iOS, iPadOS, and macOS, the system uses the space available to the toolbar when determining how many items to render in the toolbar. If not all items fit in the available space, an overflow menu may be created and remaining items placed in that menu.

## Topics

### Getting semantic placement

- [automatic](toolbaritemplacement/automatic.md): A placement the system positions automatically.
- [principal](toolbaritemplacement/principal.md): A placement for the principal item section.
- [status](toolbaritemplacement/status.md): A placement for items that represents a change in status.

### Getting placement for specific actions

- [primaryAction](toolbaritemplacement/primaryaction.md): A placement for the primary action.
- [secondaryAction](toolbaritemplacement/secondaryaction.md): A placement for secondary actions.
- [confirmationAction](toolbaritemplacement/confirmationaction.md): A placement for confirmation actions in a modal interface.
- [cancellationAction](toolbaritemplacement/cancellationaction.md): A placement for cancellation actions in a modal interface.
- [destructiveAction](toolbaritemplacement/destructiveaction.md): A placement for destructive actions in a modal interface.
- [navigation](toolbaritemplacement/navigation.md): A placement for navigation actions.

### Getting explicit placement

- [topBarLeading](toolbaritemplacement/topbarleading.md): A placement for items in the leading edge of the top bar.
- [topBarTrailing](toolbaritemplacement/topbartrailing.md): A placement for items in the trailing edge of the top bar.
- [topBarPinnedTrailing](toolbaritemplacement/topbarpinnedtrailing.md): A placement that pins the item to the trailing edge of the toolbar.
- [bottomBar](toolbaritemplacement/bottombar.md): A placement for items in the bottom toolbar.
- [bottomOrnament](toolbaritemplacement/bottomornament.md): A placement for items in an ornament under the window.
- [keyboard](toolbaritemplacement/keyboard.md): A placement for items in the keyboard section.
- [accessoryBar(id:)](toolbaritemplacement/accessorybar%28id_%29.md): Creates a unique accessory bar placement.

### Deprecated symbols

- [init(id:)](toolbaritemplacement/init%28id_%29.md): Deprecated. Creates a custom accessory bar item placement.
- [navigationBarLeading](toolbaritemplacement/navigationbarleading.md): Deprecated. Places the item in the leading edge of the navigation bar.
- [navigationBarTrailing](toolbaritemplacement/navigationbartrailing.md): Deprecated. Places the item in the trailing edge of the navigation bar.

### Type Properties

- [largeSubtitle](toolbaritemplacement/largesubtitle.md): A placement for items in the navigation bar’s large title subtitle area.
- [largeTitle](toolbaritemplacement/largetitle.md): A placement for items in the navigation bar’s title area.
- [subtitle](toolbaritemplacement/subtitle.md): A placement for items in the navigation bar’s inline subtitle area.
- [title](toolbaritemplacement/title.md): A placement for items in the title area of the navigation bar.

## See Also

### Populating a toolbar

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [ToolbarItem](toolbaritem.md): A model that represents an item which can be placed in the toolbar or navigation bar.
- [ToolbarItemGroup](toolbaritemgroup.md): A model that represents a group of `ToolbarItem`s which can be placed in the toolbar or navigation bar.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [ToolbarOverflowMenu](toolbaroverflowmenu.md): The overflow menu of a toolbar.
- [ToolbarContent](toolbarcontent.md): Conforming types represent items that can be placed in various locations in a toolbar.
- [ToolbarContentBuilder](toolbarcontentbuilder.md): Constructs a toolbar item set from multi-expression closures.
- [ToolbarSpacer](toolbarspacer.md): A standard space item in toolbars.
- [DefaultToolbarItem](defaulttoolbaritem.md): A toolbar item that represents a system component.
