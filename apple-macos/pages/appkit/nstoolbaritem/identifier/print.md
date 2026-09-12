> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/identifier/print](https://developer.apple.com/documentation/appkit/nstoolbaritem/identifier/print)

# print (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The identifier for a toolbar item that tells your app to print the current document.

## Declaration

```swift
static let print: NSToolbarItem.Identifier
```

<a id="Discussion"></a>

## Discussion

When selected, this item sends a `printDocument:` message to the first responder.

## See Also

### Getting the standard item identifiers

- [space](space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [flexibleSpace](flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [cloudSharing](cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [showColors](showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [showFonts](showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [toggleSidebar](togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [sidebarTrackingSeparator](sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [primarySidebarTrackingSeparatorItemIdentifier](primarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the primary divider in a split view.
- [supplementarySidebarTrackingSeparatorItemIdentifier](supplementarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the secondary divider in a split view.
- [inspectorTrackingSeparator](inspectortrackingseparator.md): Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.
- [toggleInspector](toggleinspector.md): The identifier for a toolbar item that displays an inspector.

# NSToolbarPrintItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

The identifier for a toolbar item that tells your app to print the current document.

## Declaration

```objectivec
extern NSToolbarItemIdentifier NSToolbarPrintItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

When selected, this item sends a `printDocument:` message to the first responder.

## See Also

### Getting the standard item identifiers

- [NSToolbarSpaceItemIdentifier](space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [NSToolbarFlexibleSpaceItemIdentifier](flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [NSToolbarCloudSharingItemIdentifier](cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [NSToolbarShowColorsItemIdentifier](showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [NSToolbarShowFontsItemIdentifier](showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [NSToolbarToggleSidebarItemIdentifier](togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [NSToolbarSidebarTrackingSeparatorItemIdentifier](sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [NSToolbarInspectorTrackingSeparatorItemIdentifier](inspectortrackingseparator.md): Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.
- [NSToolbarToggleInspectorItemIdentifier](toggleinspector.md): The identifier for a toolbar item that displays an inspector.
