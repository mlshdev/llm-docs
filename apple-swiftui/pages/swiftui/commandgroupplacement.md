> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement](https://developer.apple.com/documentation/swiftui/commandgroupplacement)

# CommandGroupPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The standard locations that you can place new command groups relative to.

## Declaration

```swift
struct CommandGroupPlacement
```

<a id="overview"></a>

## Overview

The names of these placements aren’t visible in the user interface, but the discussion for each placement lists the items that it includes.

## Topics

### App interactions

- [appInfo](commandgroupplacement/appinfo.md): Placement for commands that provide information about the app, the terms of the user’s license agreement, and so on.
- [appSettings](commandgroupplacement/appsettings.md): Placement for commands that expose app settings and preferences.
- [appTermination](commandgroupplacement/apptermination.md): Placement for commands that result in app termination.
- [appVisibility](commandgroupplacement/appvisibility.md): Placement for commands that control the visibility of running apps.
- [systemServices](commandgroupplacement/systemservices.md): Placement for commands that expose services other apps provide.

### File manipulation

- [importExport](commandgroupplacement/importexport.md): Placement for commands that relate to importing and exporting data using formats that the app doesn’t natively support.
- [newItem](commandgroupplacement/newitem.md): Placement for commands that create different kinds of documents.
- [printItem](commandgroupplacement/printitem.md): Placement for commands related to printing app content.
- [saveItem](commandgroupplacement/saveitem.md): Placement for commands that save open documents and close windows.

### Content updates

- [pasteboard](commandgroupplacement/pasteboard.md): Placement for commands that interact with the Clipboard and manipulate content that is currently selected in the app’s view hierarchy.
- [textEditing](commandgroupplacement/textediting.md): Placement for commands that manipulate and transform text selections.
- [textFormatting](commandgroupplacement/textformatting.md): Placement for commands that manipulate and transform the styles applied to text selections.
- [undoRedo](commandgroupplacement/undoredo.md): Placement for commands that control the Undo Manager.

### Bars

- [sidebar](commandgroupplacement/sidebar.md): Placement for commands that control the app’s sidebar and full-screen modes.
- [toolbar](commandgroupplacement/toolbar.md): Placement for commands that manipulate the toolbar.

### Windows

- [singleWindowList](commandgroupplacement/singlewindowlist.md): Placement for commands that describe and reveal any windows that the app defines.
- [windowArrangement](commandgroupplacement/windowarrangement.md): Placement for commands that arrange all of an app’s windows.
- [windowList](commandgroupplacement/windowlist.md): Placement for commands that describe and reveal the app’s open windows.
- [windowSize](commandgroupplacement/windowsize.md): Placement for commands that control the size of the window.

### Help

- [help](commandgroupplacement/help.md): Placement for commands that present documentation and helpful information to people.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining commands

- [commands(content:)](scene/commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](scene/commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](scene/commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [Commands](commands.md): Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.
- [CommandMenu](commandmenu.md): Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.
- [CommandGroup](commandgroup.md): Groups of controls that you can add to existing command menus.
- [CommandsBuilder](commandsbuilder.md): Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.
