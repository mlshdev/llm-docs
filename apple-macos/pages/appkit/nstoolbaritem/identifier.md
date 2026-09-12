> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/identifier](https://developer.apple.com/documentation/appkit/nstoolbaritem/identifier)

# NSToolbarItem.Identifier (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Constants for the standard toolbar items that the system provides.

## Declaration

```swift
struct Identifier
```

<a id="overview"></a>

## Overview

If you configure an [NSToolbarItem](../nstoolbaritem.md) in Interface Builder with one of the standard identifiers, AppKit configures the toolbar item for you automatically when you load your interface. Similarly, if your toolbar delegate returns them as part of the default or allowed set of items, AppKit handles their configuration. When your delegate provides standard identifiers, AppKit doesn’t call the [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](../nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method for them.

## Topics

### Getting the standard item identifiers

- [space](identifier/space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [flexibleSpace](identifier/flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [cloudSharing](identifier/cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [print](identifier/print.md): The identifier for a toolbar item that tells your app to print the current document.
- [showColors](identifier/showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [showFonts](identifier/showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [toggleSidebar](identifier/togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [sidebarTrackingSeparator](identifier/sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [primarySidebarTrackingSeparatorItemIdentifier](identifier/primarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the primary divider in a split view.
- [supplementarySidebarTrackingSeparatorItemIdentifier](identifier/supplementarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the secondary divider in a split view.
- [inspectorTrackingSeparator](identifier/inspectortrackingseparator.md): Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.
- [toggleInspector](identifier/toggleinspector.md): The identifier for a toolbar item that displays an inspector.

### Creating an identifier

- [init(\_:)](identifier/init%28__%29.md): Creates a toolbar item identifier.
- [init(rawValue:)](identifier/init%28rawvalue_%29.md): Creates a toolbar item identifier with the specified raw value.

### Deprecated

- [customizeToolbar](identifier/customizetoolbar.md): Deprecated. The Customize item, which shows the customization palette.
- [separator](identifier/separator.md): Deprecated. The Separator item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the toolbar item’s identity

- [itemIdentifier](itemidentifier.md): The value you use to identify the toolbar item.

# NSToolbarItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS

Constants for the standard toolbar items that the system provides.

## Declaration

```objectivec
typedef NSString * NSToolbarItemIdentifier;
```

<a id="overview"></a>

## Overview

If you configure an [NSToolbarItem](../nstoolbaritem.md) in Interface Builder with one of the standard identifiers, AppKit configures the toolbar item for you automatically when you load your interface. Similarly, if your toolbar delegate returns them as part of the default or allowed set of items, AppKit handles their configuration. When your delegate provides standard identifiers, AppKit doesn’t call the [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](../nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method for them.

## Topics

### Getting the standard item identifiers

- [NSToolbarSpaceItemIdentifier](identifier/space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [NSToolbarFlexibleSpaceItemIdentifier](identifier/flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [NSToolbarCloudSharingItemIdentifier](identifier/cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [NSToolbarPrintItemIdentifier](identifier/print.md): The identifier for a toolbar item that tells your app to print the current document.
- [NSToolbarShowColorsItemIdentifier](identifier/showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [NSToolbarShowFontsItemIdentifier](identifier/showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [NSToolbarToggleSidebarItemIdentifier](identifier/togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [NSToolbarSidebarTrackingSeparatorItemIdentifier](identifier/sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [NSToolbarInspectorTrackingSeparatorItemIdentifier](identifier/inspectortrackingseparator.md): Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.
- [NSToolbarToggleInspectorItemIdentifier](identifier/toggleinspector.md): The identifier for a toolbar item that displays an inspector.

### Deprecated

- [NSToolbarCustomizeToolbarItemIdentifier](identifier/customizetoolbar.md): Deprecated. The Customize item, which shows the customization palette.
- [NSToolbarSeparatorItemIdentifier](identifier/separator.md): Deprecated. The Separator item.

## See Also

### Getting the toolbar item’s identity

- [itemIdentifier](itemidentifier.md): The value you use to identify the toolbar item.
