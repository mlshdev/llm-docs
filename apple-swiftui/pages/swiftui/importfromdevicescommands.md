> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/importfromdevicescommands](https://developer.apple.com/documentation/swiftui/importfromdevicescommands)

# ImportFromDevicesCommands

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 12.0+

A built-in set of commands that enables importing content from nearby devices.

## Declaration

```swift
nonisolated struct ImportFromDevicesCommands
```

<a id="overview"></a>

## Overview

This set of commands adds items based on nearby devices and capabilities, like taking photos or scanning documents. Views can receive imported content from these menu items by using the [importsItemProviders(\_:onImport:)](view/importsitemproviders%28__onimport_%29.md) modifier.

These commands are optional and you can explicitly request them by passing a value of this type to the [commands(content:)](scene/commands%28content_%29.md) modifier.

## Topics

### Creating the command group

- [init()](importfromdevicescommands/init%28%29.md): Creates a new set of device import commands.

## Relationships

### Conforms To

- [Commands](commands.md)

## See Also

### Getting built-in command groups

- [SidebarCommands](sidebarcommands.md): A built-in set of commands for manipulating window sidebars.
- [TextEditingCommands](texteditingcommands.md): A built-in group of commands for searching, editing, and transforming selections of text.
- [TextFormattingCommands](textformattingcommands.md): A built-in set of commands for transforming the styles applied to selections of text.
- [ToolbarCommands](toolbarcommands.md): A built-in set of commands for manipulating window toolbars.
- [InspectorCommands](inspectorcommands.md): A built-in set of commands for manipulating inspectors.
- [EmptyCommands](emptycommands.md): An empty group of commands.
