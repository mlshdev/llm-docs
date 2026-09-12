> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/keyboardshortcut(_:)](https://developer.apple.com/documentation/swiftui/scene/keyboardshortcut(_:))

# keyboardShortcut(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Defines a keyboard shortcut for opening new scene windows.

## Declaration

```swift
nonisolated func keyboardShortcut(_ shortcut: KeyboardShortcut?) -> some Scene

```

## Parameters

- `shortcut`: The keyboard shortcut for presenting the scene, or `nil`.

<a id="return-value"></a>

## Return Value

A scene that can be presented with a keyboard shortcut.

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](../building-and-customizing-the-menu-bar-with-swiftui.md)

<a id="discussion"></a>

## Discussion

A scene’s keyboard shortcut is bound to the command it adds for creating new windows (in the case of `WindowGroup` and `DocumentGroup`) or bringing a singleton window forward (in the case of `Window` and, on macOS, `Settings` and `UtilityWindow`). Pressing the keyboard shortcut is equivalent to selecting the menu command.

In cases where a command already has a keyboard shortcut, the scene’s keyboard shortcut is used instead. For example, `WindowGroup` normally creates a File \> New Window menu command whose keyboard shortcut is `⌘N`. The following code changes it to something based on dynamic state:

```swift
@main
struct Notes: App {
    @State private var newWindowShortcut: KeyboardShortcut? = ...

    var body: some Scene {
        WindowGroup {
            ContentView($newWindowShortcut)
        }
        .keyboardShortcut(newWindowShortcut)
    }
}
```

If `shortcut` is `nil`, the scene’s presentation command will not be associated with a keyboard shortcut, even if SwiftUI normally assigns one automatically.

## See Also

### Setting commands

- [commands(content:)](commands%28content_%29.md): Adds commands to the scene.
- [commandsRemoved()](commandsremoved%28%29.md): Removes all commands defined by the modified scene.
- [commandsReplaced(content:)](commandsreplaced%28content_%29.md): Replaces all commands defined by the modified scene with the commands from the builder.
- [keyboardShortcut(\_:modifiers:localization:)](keyboardshortcut%28__modifiers_localization_%29.md): Defines a keyboard shortcut for opening new scene windows.
