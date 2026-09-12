> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dismisswindowaction](https://developer.apple.com/documentation/swiftui/dismisswindowaction)

# DismissWindowAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An action that dismisses a window associated to a particular scene.

## Declaration

```swift
@MainActor @preconcurrency struct DismissWindowAction
```

<a id="overview"></a>

## Overview

Use the [dismissWindow](environmentvalues/dismisswindow.md) environment value to get the instance of this structure for a given [Environment](environment.md). Then call the instance to dismiss a window. You call the instance directly because it defines a [callAsFunction(id:)](dismisswindowaction/callasfunction%28id_%29.md) method that Swift calls when you call the instance.

For example, you can define a button that closes an auxiliary window:

```swift
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        #if os(macOS)
        Window("Auxiliary", id: "auxiliary") {
            AuxiliaryContentView()
        }
        #endif
    }
}

struct DismissWindowButton: View {
    @Environment(\.dismissWindow) private var dismissWindow

    var body: some View {
        Button("Close Auxiliary Window") {
            dismissWindow(id: "auxiliary")
        }
    }
}
```

If the window was opened with [pushWindow](environmentvalues/pushwindow.md), the original presenting will reappear when this action is performed.

## Topics

### Calling the action

- [callAsFunction()](dismisswindowaction/callasfunction%28%29.md): Dismisses the current window.
- [callAsFunction(id:)](dismisswindowaction/callasfunction%28id_%29.md): Dismisses the window that’s associated with the specified identifier.
- [callAsFunction(id:value:)](dismisswindowaction/callasfunction%28id_value_%29.md): Dismisses the window defined by the window group that is presenting the specified value type and that’s associated with the specified identifier.
- [callAsFunction(value:)](dismisswindowaction/callasfunction%28value_%29.md): Dismisses the window defined by the window group that is presenting the specified value type.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Closing windows

- [dismissWindow](environmentvalues/dismisswindow.md): A window dismissal action stored in a view’s environment.
- [dismiss](environmentvalues/dismiss.md): An action that dismisses the current presentation.
- [DismissAction](dismissaction.md): An action that dismisses a presentation.
- [DismissBehavior](dismissbehavior.md): Programmatic window dismissal behaviors.
