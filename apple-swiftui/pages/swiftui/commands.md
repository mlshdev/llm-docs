> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commands](https://developer.apple.com/documentation/swiftui/commands)

# Commands

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.

## Declaration

```swift
@MainActor @preconcurrency protocol Commands
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)

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

### Implementing commands

- [body](commands/body-swift.property.md): The contents of the command hierarchy.
- [Body](commands/body-swift.associatedtype.md): The type of commands that represents the body of this command hierarchy.

## Relationships

### Conforming Types

- [CommandGroup](commandgroup.md)
- [CommandMenu](commandmenu.md)
- [EmptyCommands](emptycommands.md)
- [EmptyView](emptyview.md)
- [Group](group.md)
- [ImportFromDevicesCommands](importfromdevicescommands.md)
- [InspectorCommands](inspectorcommands.md)
- [SidebarCommands](sidebarcommands.md)
- [TextEditingCommands](texteditingcommands.md)
- [TextFormattingCommands](textformattingcommands.md)
- [ToolbarCommands](toolbarcommands.md)
- [TupleContent](tuplecontent.md)

## See Also

### Defining commands

- [commands(content:)](scene/commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](scene/commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](scene/commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [CommandMenu](commandmenu.md): Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.
- [CommandGroup](commandgroup.md): Groups of controls that you can add to existing command menus.
- [CommandsBuilder](commandsbuilder.md): Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.
- [CommandGroupPlacement](commandgroupplacement.md): The standard locations that you can place new command groups relative to.
