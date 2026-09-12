> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/texteditingcommands](https://developer.apple.com/documentation/swiftui/texteditingcommands)

# TextEditingCommands

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A built-in group of commands for searching, editing, and transforming selections of text.

## Declaration

```swift
nonisolated struct TextEditingCommands
```

<a id="overview"></a>

## Overview

These commands are optional and can be explicitly requested by passing a value of this type to the `Scene.commands(_:)` modifier.

## Topics

### Creating the command group

- [init()](texteditingcommands/init%28%29.md): A new value describing the built-in text-editing commands.

## Relationships

### Conforms To

- [Commands](commands.md)

## See Also

### Getting built-in command groups

- [SidebarCommands](sidebarcommands.md): A built-in set of commands for manipulating window sidebars.
- [TextFormattingCommands](textformattingcommands.md): A built-in set of commands for transforming the styles applied to selections of text.
- [ToolbarCommands](toolbarcommands.md): A built-in set of commands for manipulating window toolbars.
- [ImportFromDevicesCommands](importfromdevicescommands.md): A built-in set of commands that enables importing content from nearby devices.
- [InspectorCommands](inspectorcommands.md): A built-in set of commands for manipulating inspectors.
- [EmptyCommands](emptycommands.md): An empty group of commands.
