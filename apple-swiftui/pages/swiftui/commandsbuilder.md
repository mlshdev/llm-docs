> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandsbuilder](https://developer.apple.com/documentation/swiftui/commandsbuilder)

# CommandsBuilder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.

## Declaration

```swift
@resultBuilder struct CommandsBuilder
```

## Topics

### Building content

- [buildBlock()](commandsbuilder/buildblock%28%29.md): Builds an empty command set from a block containing no statements.
- [buildBlock(\_:)](commandsbuilder/buildblock%28__%29.md): Passes a single command group written as a child group through modified.
- [buildBlock(\_:\_:)](commandsbuilder/buildblock%28____%29.md)
- [buildBlock(\_:\_:\_:)](commandsbuilder/buildblock%28______%29.md)
- [buildBlock(\_:\_:\_:\_:)](commandsbuilder/buildblock%28________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28__________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28____________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28______________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28________________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28__________________%29.md)
- [buildBlock(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](commandsbuilder/buildblock%28____________________%29.md)

### Building conditionally

- [buildEither(first:)](commandsbuilder/buildeither%28first_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is true.
- [buildEither(second:)](commandsbuilder/buildeither%28second_%29.md): Produces content for a conditional statement in a multi-statement closure when the condition is false.
- [buildIf(\_:)](commandsbuilder/buildif%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
- [buildLimitedAvailability(\_:)](commandsbuilder/buildlimitedavailability%28__%29.md): Processes commands for a conditional compiler-control statement that performs an availability check.
- [buildExpression(\_:)](commandsbuilder/buildexpression%28__%29.md): Builds an expression within the builder.

## See Also

### Defining commands

- [commands(content:)](scene/commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](scene/commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](scene/commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [Commands](commands.md): Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.
- [CommandMenu](commandmenu.md): Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.
- [CommandGroup](commandgroup.md): Groups of controls that you can add to existing command menus.
- [CommandGroupPlacement](commandgroupplacement.md): The standard locations that you can place new command groups relative to.
