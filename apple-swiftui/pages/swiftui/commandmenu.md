> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandmenu](https://developer.apple.com/documentation/swiftui/commandmenu)

# CommandMenu

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.

## Declaration

```swift
nonisolated struct CommandMenu<Content> where Content : View
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)
- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)

<a id="overview"></a>

## Overview

Command menus are realized as menu bar menus on macOS, inserted between the built-in View and Window menus in order of declaration. On iOS, iPadOS, and tvOS, SwiftUI creates key commands for each of a menu’s commands that has a keyboard shortcut.

## Topics

### Creating a command menu

- [init(\_:content:)](commandmenu/init%28__content_%29.md): Creates a new menu with a localized name for a collection of app- specific commands, inserted in the standard location for app menus (after the View menu, in order with other menus declared without an explicit location).

## Relationships

### Conforms To

- [Commands](commands.md)

## See Also

### Defining commands

- [commands(content:)](scene/commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](scene/commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](scene/commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [Commands](commands.md): Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.
- [CommandGroup](commandgroup.md): Groups of controls that you can add to existing command menus.
- [CommandsBuilder](commandsbuilder.md): Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.
- [CommandGroupPlacement](commandgroupplacement.md): The standard locations that you can place new command groups relative to.
