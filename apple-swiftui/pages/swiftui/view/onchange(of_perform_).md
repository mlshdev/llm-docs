> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/onchange(of:perform:)](https://developer.apple.com/documentation/swiftui/view/onchange(of:perform:))

# onChange(of:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 7.0+ (deprecated in 10.0)

Adds an action to perform when the given value changes.

> Use [onChange(of:initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:initial:_:%29-8wgw9) or [onChange(of:initial:\_:)](https://developer.apple.com/documentation/swiftui/view/onchange%28of:initial:_:%29-4psgg) instead. The trailing closure in each case takes either zero or two input parameters, compared to this method which takes one.
>
> Be aware that the replacements have slightly different behavior. This modifier’s closure captures values that represent the state before the change. The new modifiers capture values that correspond to the new state. The new behavior makes it easier to perform updates that rely on values other than the one that caused the modifier’s closure to run.

## Declaration

```swift
nonisolated func onChange<V>(of value: V, perform action: @escaping (V) -> Void) -> some View where V : Equatable

```

<a id="discussion"></a>

## Discussion

Use this modifier to trigger a side effect when a value changes, like the value associated with an [Environment](../environment.md) value or a [Binding](../binding.md). For example, you can clear a cache when you notice that a scene moves to the background:

```swift
struct MyScene: Scene {
    @Environment(\.scenePhase) private var scenePhase
    @StateObject private var cache = DataCache()

    var body: some Scene {
        WindowGroup {
            MyRootView()
        }
        .onChange(of: scenePhase) { newScenePhase in
            if newScenePhase == .background {
                cache.empty()
            }
        }
    }
}
```

The system may call the action closure on the main actor, so avoid long-running tasks in the closure. If you need to perform such tasks, detach an asynchronous background task:

```swift
.onChange(of: scenePhase) { newScenePhase in
    if newScenePhase == .background {
        Task.detached(priority: .background) {
            // ...
        }
    }
}
```

The system passes the new value into the closure. If you need the old value, capture it in the closure.

## See Also

### Input and events modifiers

- [dropDestination(for:action:isTargeted:)](dropdestination%28for_action_istargeted_%29.md): Deprecated. Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onTapGesture(count:coordinateSpace:perform:)](ontapgesture%28count_coordinatespace_perform_%29-36x9h.md): Deprecated. Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onLongPressGesture(minimumDuration:maximumDistance:pressing:perform:)](onlongpressgesture%28minimumduration_maximumdistance_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:pressing:perform:)](onlongpressgesture%28minimumduration_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29-4f78f.md): Deprecated. Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](onpastecommand%28of_validator_perform_%29-964k1.md): Deprecated. Adds an action to perform in response to the system’s Paste command with items that you validate.
- [onDrop(of:delegate:)](ondrop%28of_delegate_%29-2vr9o.md): Deprecated. Defines the destination for a drag and drop operation with the same size and position as this view, with behavior controlled by the given delegate.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [focusable(\_:onFocusChange:)](focusable%28__onfocuschange_%29.md): Deprecated. Specifies if the view is focusable and, if so, adds an action to perform when the view comes into focus.
- [onContinuousHover(coordinateSpace:perform:)](oncontinuoushover%28coordinatespace_perform_%29-8gyrl.md): Deprecated. Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
