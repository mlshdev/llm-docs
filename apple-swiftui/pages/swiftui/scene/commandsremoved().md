> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/commandsremoved()](https://developer.apple.com/documentation/swiftui/scene/commandsremoved())

# commandsRemoved()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Removes all commands defined by the modified scene.

## Declaration

```swift
nonisolated func commandsRemoved() -> some Scene

```

<a id="return-value"></a>

## Return Value

A scene that excludes any commands defined by its children.

<a id="discussion"></a>

## Discussion

`WindowGroup`, `Window`, and other scene types all have an associated set of commands that they include by default. Apply this modifier to a scene to exclude those commands.

For example, the following code adds a scene for presenting the details of an individual data model in a separate window. To ensure that the window can only appear programmatically, we remove the scene’s commands, including File \> New Note Window.

```swift
@main
struct Example: App {
    var body: some Scene {
        ...

        WindowGroup("Note", id: "note", for: Note.ID.self) {
            NoteDetailView(id: $0)
        }
        .commandsRemoved()
    }
}
```

## See Also

### Defining commands

- [commands(content:)](commands%28content_%29.md): Adds commands to the scene.
- [commandsReplaced(content:)](commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [Commands](../commands.md): Conforming types represent a group of related commands that can be exposed to the user via the main menu on macOS and key commands on iOS.
- [CommandMenu](../commandmenu.md): Command menus are stand-alone, top-level containers for controls that perform related, app-specific commands.
- [CommandGroup](../commandgroup.md): Groups of controls that you can add to existing command menus.
- [CommandsBuilder](../commandsbuilder.md): Constructs command sets from multi-expression closures. Like `ContentBuilder`, it supports up to ten expressions in the closure body.
- [CommandGroupPlacement](../commandgroupplacement.md): The standard locations that you can place new command groups relative to.
