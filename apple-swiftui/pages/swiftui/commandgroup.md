> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroup](https://developer.apple.com/documentation/swiftui/commandgroup)

# CommandGroup

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Groups of controls that you can add to existing command menus.

## Declaration

```swift
nonisolated struct CommandGroup<Content> where Content : View
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)

<a id="overview"></a>

## Overview

In macOS, SwiftUI realizes command groups as collections of menu items in a menu bar menu. In iOS, iPadOS, and tvOS, SwiftUI creates key commands for each of a group’s commands that has a keyboard shortcut.

## Topics

### Creating a command group

- [init(after:addition:)](commandgroup/init%28after_addition_%29.md): A value describing the addition of the given views to the end of the indicated group.
- [init(before:addition:)](commandgroup/init%28before_addition_%29.md): A value describing the addition of the given views to the beginning of the indicated group.
- [init(replacing:addition:)](commandgroup/init%28replacing_addition_%29.md): A value describing the complete replacement of the contents of the indicated group with the given views.

## Relationships

### Conforms To

- [Commands](commands.md)

## See Also

### Defining commands

- [commands(content:)](scene/commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](scene/commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](scene/commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [Commands](commands.md): Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.
- [CommandMenu](commandmenu.md): Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.
- [CommandsBuilder](commandsbuilder.md): Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.
- [CommandGroupPlacement](commandgroupplacement.md): The standard locations that you can place new command groups relative to.
