> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusedobject(_:)](https://developer.apple.com/documentation/swiftui/view/focusedobject(_:))

# focusedObject(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new view that exposes the provided object to other views whose whose state depends on the focused view hierarchy.

## Declaration

```swift
nonisolated func focusedObject<T>(_ object: T) -> some View where T : ObservableObject

```

## Parameters

- `object`: The observable object to associate with focus.

<a id="return-value"></a>

## Return Value

A view that supplies an observable object when in focus.

<a id="discussion"></a>

## Discussion

Use this method instead of [focusedSceneObject(\_:)](focusedsceneobject%28__%29.md) when your scene includes multiple focusable views with their own associated data, and you need an app- or scene-scoped element like a command or toolbar item that operates on the data associated with whichever view currently has focus. Each focusable view can supply its own object:

```swift
struct MessageView: View {
    @StateObject private var message = Message(...)

    var body: some View {
        TextField(...)
            .focusedObject(message)
    }
}
```

Interested views can then use the [FocusedObject](../focusedobject.md) property wrapper to observe and update the focused view’s object. In this example, an app command updates the focused view’s data, and is automatically disabled when focus is in an unrelated part of the scene:

```swift
struct MessageCommands: Commands {
    @FocusedObject private var message: Message?

    var body: some Commands {
        CommandGroup(after: .pasteboard) {
            Button("Add Duck to Message") {
                message?.text.append(" 🦆")
            }
            .keyboardShortcut("d")
            .disabled(message == nil)
        }
    }
}
```

## See Also

### Exposing reference types to focused views

- [focusedSceneObject(\_:)](focusedsceneobject%28__%29.md): Creates a new view that exposes the provided object to other views whose whose state depends on the active scene.
- [FocusedObject](../focusedobject.md): A property wrapper type for an observable object supplied by the focused view or one of its ancestors.
