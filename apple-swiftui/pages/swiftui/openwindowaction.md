> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openwindowaction](https://developer.apple.com/documentation/swiftui/openwindowaction)

# OpenWindowAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An action that presents a window.

## Declaration

```swift
@MainActor @preconcurrency struct OpenWindowAction
```

<a id="overview"></a>

## Overview

Use the [openWindow](environmentvalues/openwindow.md) environment value to get the instance of this structure for a given [Environment](environment.md). Then call the instance to open a window. You call the instance directly because it defines a [callAsFunction(id:)](openwindowaction/callasfunction%28id_%29.md) method that Swift calls when you call the instance.

For example, you can define a button that opens a new mail viewer window:

```swift
@main
struct Mail: App {
    var body: some Scene {
        WindowGroup(id: "mail-viewer") {
            MailViewer()
        }
    }
}

struct NewViewerButton: View {
    @Environment(\.openWindow) private var openWindow

    var body: some View {
        Button("Open new mail viewer") {
            openWindow(id: "mail-viewer")
        }
    }
}
```

You indicate which scene to open by providing one of the following:

- A string identifier that you pass through the `id` parameter, as in the above example.
- A `value` parameter that has a type that matches the type that you specify in the scene’s initializer.
- Both an identifier and a value. This enables you to define multiple window groups that take input values of the same type, like a [UUID](https://developer.apple.com/documentation/foundation/uuid).

Use the first option to target either a [WindowGroup](windowgroup.md) or a [Window](window.md) scene in your app that has a matching identifier. For a `WindowGroup`, the system creates a new window for the group. If the window group presents data, the system provides the default value or `nil` to the window’s root view. If the targeted scene is a `Window`, the system orders it to the front.

Use the other two options to target a `WindowGroup` and provide a value to present. If the interface already has a window from the group that’s presenting the specified value, the system brings the window to the front. Otherwise, the system creates a new window and passes a binding to the specified value.

## Topics

### Calling the action

- [callAsFunction(id:)](openwindowaction/callasfunction%28id_%29.md): Opens a window that’s associated with the specified identifier.
- [callAsFunction(id:value:)](openwindowaction/callasfunction%28id_value_%29.md): Opens a window defined by the window group that presents the specified value type and that’s associated with the specified identifier.
- [callAsFunction(value:)](openwindowaction/callasfunction%28value_%29.md): Opens a window defined by a window group that presents the type of the specified value.

### Structures

- [OpenWindowAction.SharingBehavior](openwindowaction/sharingbehavior.md)

### Instance Methods

- [callAsFunction(id:sharingBehavior:)](openwindowaction/callasfunction%28id_sharingbehavior_%29.md): Opens a window that’s associated with the specified identifier, using the specified sharing sharingBehavior..
- [callAsFunction(id:value:sharingBehavior:)](openwindowaction/callasfunction%28id_value_sharingbehavior_%29.md): Opens a window defined by the window group that presents the specified value type and that’s associated with the specified identifier, using the specified sharingBehavior.
- [callAsFunction(value:sharingBehavior:)](openwindowaction/callasfunction%28value_sharingbehavior_%29.md): Opens a window defined by a window group that presents the type of the specified value, using the specified sharingBehavior.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening windows

- [Presenting windows and spaces](https://developer.apple.com/documentation/visionos/presenting-windows-and-spaces): Open and close the scenes that make up your app’s interface.
- [supportsMultipleWindows](environmentvalues/supportsmultiplewindows.md): A Boolean value that indicates whether the current platform supports opening multiple windows.
- [openWindow](environmentvalues/openwindow.md): A window presentation action stored in a view’s environment.
- [PushWindowAction](pushwindowaction.md): An action that opens the requested window in place of the window the action is called from.
