> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusable(_:onfocuschange:)](https://developer.apple.com/documentation/swiftui/view/focusable(_:onfocuschange:))

# focusable(\_:onFocusChange:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 12.0) · tvOS 13.0+ (deprecated in 15.0) · watchOS 6.0+ (deprecated in 8.0)

Specifies if the view is focusable and, if so, adds an action to perform when the view comes into focus.

> Use the [focusable(\_:)](focusable%28__%29.md) method instead.

## Declaration

```swift
nonisolated func focusable(_ isFocusable: Bool = true, onFocusChange: @escaping (Bool) -> Void = { _ in }) -> some View

```

## Parameters

- `isFocusable`: A Boolean value that indicates whether this view is focusable.
- `onFocusChange`: A closure that’s called whenever this view either gains or loses focus. The Boolean parameter to `onFocusChange` is `true` when the view is in focus; otherwise, it’s `false`.

<a id="return-value"></a>

## Return Value

A view that sets whether a view is focusable, and triggers `onFocusChange` when the view gains or loses focus.

## See Also

### Input and events modifiers

- [dropDestination(for:action:isTargeted:)](dropdestination%28for_action_istargeted_%29.md): Deprecated. Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onChange(of:perform:)](onchange%28of_perform_%29.md): Deprecated. Adds an action to perform when the given value changes.
- [onTapGesture(count:coordinateSpace:perform:)](ontapgesture%28count_coordinatespace_perform_%29-36x9h.md): Deprecated. Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onLongPressGesture(minimumDuration:maximumDistance:pressing:perform:)](onlongpressgesture%28minimumduration_maximumdistance_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:pressing:perform:)](onlongpressgesture%28minimumduration_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29-4f78f.md): Deprecated. Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](onpastecommand%28of_validator_perform_%29-964k1.md): Deprecated. Adds an action to perform in response to the system’s Paste command with items that you validate.
- [onDrop(of:delegate:)](ondrop%28of_delegate_%29-2vr9o.md): Deprecated. Defines the destination for a drag and drop operation with the same size and position as this view, with behavior controlled by the given delegate.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onContinuousHover(coordinateSpace:perform:)](oncontinuoushover%28coordinatespace_perform_%29-8gyrl.md): Deprecated. Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
