> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/identifier/inspectortrackingseparator](https://developer.apple.com/documentation/appkit/nstoolbaritem/identifier/inspectortrackingseparator)

# inspectorTrackingSeparator (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 14.0+

Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.

## Declaration

```swift
static let inspectorTrackingSeparator: NSToolbarItem.Identifier
```

<a id="discussion"></a>

## Discussion

Only applies to windows with `NSWindowStyleMaskFullSizeContentView` applied.

## See Also

### Getting the standard item identifiers

- [space](space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [flexibleSpace](flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [cloudSharing](cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [print](print.md): The identifier for a toolbar item that tells your app to print the current document.
- [showColors](showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [showFonts](showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [toggleSidebar](togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [sidebarTrackingSeparator](sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [primarySidebarTrackingSeparatorItemIdentifier](primarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the primary divider in a split view.
- [supplementarySidebarTrackingSeparatorItemIdentifier](supplementarysidebartrackingseparatoritemidentifier.md): The identifier for a toolbar item that displays a tracking separator aligned with the secondary divider in a split view.
- [toggleInspector](toggleinspector.md): The identifier for a toolbar item that displays an inspector.

# NSToolbarInspectorTrackingSeparatorItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 14.0+

Creates a new `NSTrackingSeparatorToolbarItem` and automatically configures it to track the divider of the inspector if one is discovered.

## Declaration

```objectivec
extern NSToolbarItemIdentifier NSToolbarInspectorTrackingSeparatorItemIdentifier;
```

<a id="discussion"></a>

## Discussion

Only applies to windows with `NSWindowStyleMaskFullSizeContentView` applied.

## See Also

### Getting the standard item identifiers

- [NSToolbarSpaceItemIdentifier](space.md): The identifier for a toolbar item that displays an empty space with a standard fixed size.
- [NSToolbarFlexibleSpaceItemIdentifier](flexiblespace.md): The identifier for a toolbar item that displays an empty space with a flexible width.
- [NSToolbarCloudSharingItemIdentifier](cloudsharing.md): The identifier for a toolbar item that tells your app to display the iCloud sharing interface.
- [NSToolbarPrintItemIdentifier](print.md): The identifier for a toolbar item that tells your app to print the current document.
- [NSToolbarShowColorsItemIdentifier](showcolors.md): The identifier for a toolbar item that shows the standard color panel.
- [NSToolbarShowFontsItemIdentifier](showfonts.md): The identifier for a toolbar item that shows the standard font panel.
- [NSToolbarToggleSidebarItemIdentifier](togglesidebar.md): The identifier for a toolbar item that displays a sidebar.
- [NSToolbarSidebarTrackingSeparatorItemIdentifier](sidebartrackingseparator.md): The identifier for a toolbar item that displays a tracking separator aligned with the sidebar divider in a split view.
- [NSToolbarToggleInspectorItemIdentifier](toggleinspector.md): The identifier for a toolbar item that displays an inspector.
