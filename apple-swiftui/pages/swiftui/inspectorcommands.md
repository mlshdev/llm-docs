> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/inspectorcommands](https://developer.apple.com/documentation/swiftui/inspectorcommands)

# InspectorCommands

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A built-in set of commands for manipulating inspectors.

## Declaration

```swift
nonisolated struct InspectorCommands
```

<a id="overview"></a>

## Overview

`InspectorCommands` include a command for toggling the presented state of the inspector with a keyboard shortcut of Control-Command-I.

These commands are optional and can be explicitly requested by passing a value of this type to the [commands(content:)](scene/commands%28content_%29.md) modifier:

```swift
@State var presented = true
WindowGroup {
    MainView()
        .inspector(isPresented: $presented) {
            InspectorView()
        }
}
.commands {
    InspectorCommands()
}
```

## Topics

### Creating a command

- [init()](inspectorcommands/init%28%29.md): A new value describing the built-in inspector-related commands.

## Relationships

### Conforms To

- [Commands](commands.md)

## See Also

### Getting built-in command groups

- [SidebarCommands](sidebarcommands.md): A built-in set of commands for manipulating window sidebars.
- [TextEditingCommands](texteditingcommands.md): A built-in group of commands for searching, editing, and transforming selections of text.
- [TextFormattingCommands](textformattingcommands.md): A built-in set of commands for transforming the styles applied to selections of text.
- [ToolbarCommands](toolbarcommands.md): A built-in set of commands for manipulating window toolbars.
- [ImportFromDevicesCommands](importfromdevicescommands.md): A built-in set of commands that enables importing content from nearby devices.
- [EmptyCommands](emptycommands.md): An empty group of commands.
